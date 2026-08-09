// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, DemonicScans, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, Olympus, Qi Manga, QiManhwa, ReadComicsOnline, ReaperScans, ReiManga, TuMangaOnline, WebNovel, WebToons, WeebCentral, WeebDex, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.08.09.build-0000
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
// @include       /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/
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
(function(){var gp=Object.create,sa=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,bp=Object.getOwnPropertyNames,wp=Object.getPrototypeOf,Yd=Object.prototype.hasOwnProperty,Ar=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),an=(e,t)=>{let r={};for(var o in e)sa(r,o,{get:e[o],enumerable:!0});return t||sa(r,Symbol.toStringTag,{value:"Module"}),r},_p=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=bp(t),s=0,l=a.length,u;s<l;s++)u=a[s],!Yd.call(e,u)&&u!==r&&sa(e,u,{get:(c=>t[c]).bind(null,u),enumerable:!(o=vp(t,u))||o.enumerable});return e},la=(e,t,r)=>(r=e!=null?gp(wp(e)):{},_p(t||!e||!e.__esModule||!Yd.call(e,"default")?sa(r,"default",{value:e,enumerable:!0}):r,e)),yp=Ar(((e,t)=>{(function(r,o){typeof e=="object"&&typeof t=="object"?t.exports=o():typeof define=="function"&&define.amd?define([],o):typeof e=="object"?e.bowser=o():r.bowser=o()})(e,(function(){return(function(r){var o={};function a(s){if(o[s])return o[s].exports;var l=o[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=o,a.d=function(s,l,u){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:u})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var c in s)a.d(u,c,function(f){return s[f]}.bind(null,c));return u},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=a(18);o.default=(function(){function l(){}return l.getFirstMatch=function(u,c){var f=c.match(u);return f&&f.length>0&&f[1]||""},l.getSecondMatch=function(u,c){var f=c.match(u);return f&&f.length>1&&f[2]||""},l.matchAndReturnConst=function(u,c,f){if(u.test(c))return f},l.getWindowsVersionName=function(u){switch(u){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(u){var c=u.split(".").splice(0,2).map((function(v){return parseInt(v,10)||0}));c.push(0);var f=c[0],p=c[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(u){var c=u.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(c.push(0),!(c[0]===1&&c[1]<5))return c[0]===1&&c[1]<6?"Cupcake":c[0]===1&&c[1]>=6?"Donut":c[0]===2&&c[1]<2?"Eclair":c[0]===2&&c[1]===2?"Froyo":c[0]===2&&c[1]>2?"Gingerbread":c[0]===3?"Honeycomb":c[0]===4&&c[1]<1?"Ice Cream Sandwich":c[0]===4&&c[1]<4?"Jelly Bean":c[0]===4&&c[1]>=4?"KitKat":c[0]===5?"Lollipop":c[0]===6?"Marshmallow":c[0]===7?"Nougat":c[0]===8?"Oreo":c[0]===9?"Pie":void 0},l.getVersionPrecision=function(u){return u.split(".").length},l.compareVersions=function(u,c,f){f===void 0&&(f=!1);var p=l.getVersionPrecision(u),v=l.getVersionPrecision(c),w=Math.max(p,v),g=0,b=l.map([u,c],(function(y){var _=w-l.getVersionPrecision(y),S=y+new Array(_+1).join(".0");return l.map(S.split("."),(function(A){return new Array(20-A.length).join("0")+A})).reverse()}));for(f&&(g=w-Math.min(p,v)),w-=1;w>=g;){if(b[0][w]>b[1][w])return 1;if(b[0][w]===b[1][w]){if(w===g)return 0;w-=1}else if(b[0][w]<b[1][w])return-1}},l.map=function(u,c){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(u,c);for(f=0;f<u.length;f+=1)p.push(c(u[f]));return p},l.find=function(u,c){var f,p;if(Array.prototype.find)return Array.prototype.find.call(u,c);for(f=0,p=u.length;f<p;f+=1){var v=u[f];if(c(v,f))return v}},l.assign=function(u){for(var c,f,p=u,v=arguments.length,w=new Array(v>1?v-1:0),g=1;g<v;g++)w[g-1]=arguments[g];if(Object.assign)return Object.assign.apply(Object,[u].concat(w));var b=function(){var y=w[c];typeof y=="object"&&y!==null&&Object.keys(y).forEach((function(_){p[_]=y[_]}))};for(c=0,f=w.length;c<f;c+=1)b();return u},l.getBrowserAlias=function(u){return s.BROWSER_ALIASES_MAP[u]},l.getBrowserTypeByAlias=function(u){return s.BROWSER_MAP[u]||""},l})(),r.exports=o.default},18:function(r,o,a){"use strict";o.__esModule=!0,o.ENGINE_MAP=o.OS_MAP=o.PLATFORMS_MAP=o.BROWSER_MAP=o.BROWSER_ALIASES_MAP=void 0,o.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},o.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},o.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},o.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},o.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},u=a(18);function c(f,p){for(var v=0;v<p.length;v++){var w=p[v];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(f,w.key,w)}}o.default=(function(){function f(){}var p,v,w;return f.getParser=function(g,b,y){if(b===void 0&&(b=!1),y===void 0&&(y=null),typeof g!="string")throw new Error("UserAgent should be a string");return new l.default(g,b,y)},f.parse=function(g,b){return b===void 0&&(b=null),new l.default(g,b).getResult()},p=f,w=[{key:"BROWSER_MAP",get:function(){return u.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return u.ENGINE_MAP}},{key:"OS_MAP",get:function(){return u.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return u.PLATFORMS_MAP}}],(v=null)&&c(p.prototype,v),w&&c(p,w),f})(),r.exports=o.default},91:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=p(a(92)),l=p(a(93)),u=p(a(94)),c=p(a(95)),f=p(a(17));function p(v){return v&&v.__esModule?v:{default:v}}o.default=(function(){function v(g,b,y){if(b===void 0&&(b=!1),y===void 0&&(y=null),g==null||g==="")throw new Error("UserAgent parameter can't be empty");this._ua=g;var _=!1;typeof b=="boolean"?(_=b,this._hints=y):this._hints=b!=null&&typeof b=="object"?b:null,this.parsedResult={},_!==!0&&this.parse()}var w=v.prototype;return w.getHints=function(){return this._hints},w.hasBrand=function(g){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var b=g.toLowerCase();return this._hints.brands.some((function(y){return y.brand&&y.brand.toLowerCase()===b}))},w.getBrandVersion=function(g){if(this._hints&&Array.isArray(this._hints.brands)){var b=g.toLowerCase(),y=this._hints.brands.find((function(_){return _.brand&&_.brand.toLowerCase()===b}));return y?y.version:void 0}},w.getUA=function(){return this._ua},w.test=function(g){return g.test(this._ua)},w.parseBrowser=function(){var g=this;this.parsedResult.browser={};var b=f.default.find(s.default,(function(y){if(typeof y.test=="function")return y.test(g);if(Array.isArray(y.test))return y.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return b&&(this.parsedResult.browser=b.describe(this.getUA(),this)),this.parsedResult.browser},w.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},w.getBrowserName=function(g){return g?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},w.getBrowserVersion=function(){return this.getBrowser().version},w.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},w.parseOS=function(){var g=this;this.parsedResult.os={};var b=f.default.find(l.default,(function(y){if(typeof y.test=="function")return y.test(g);if(Array.isArray(y.test))return y.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return b&&(this.parsedResult.os=b.describe(this.getUA())),this.parsedResult.os},w.getOSName=function(g){var b=this.getOS().name;return g?String(b).toLowerCase()||"":b||""},w.getOSVersion=function(){return this.getOS().version},w.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},w.getPlatformType=function(g){g===void 0&&(g=!1);var b=this.getPlatform().type;return g?String(b).toLowerCase()||"":b||""},w.parsePlatform=function(){var g=this;this.parsedResult.platform={};var b=f.default.find(u.default,(function(y){if(typeof y.test=="function")return y.test(g);if(Array.isArray(y.test))return y.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return b&&(this.parsedResult.platform=b.describe(this.getUA())),this.parsedResult.platform},w.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},w.getEngineName=function(g){return g?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},w.parseEngine=function(){var g=this;this.parsedResult.engine={};var b=f.default.find(c.default,(function(y){if(typeof y.test=="function")return y.test(g);if(Array.isArray(y.test))return y.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return b&&(this.parsedResult.engine=b.describe(this.getUA())),this.parsedResult.engine},w.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},w.getResult=function(){return f.default.assign({},this.parsedResult)},w.satisfies=function(g){var b=this,y={},_=0,S={},A=0;if(Object.keys(g).forEach((function(pe){var ye=g[pe];typeof ye=="string"?(S[pe]=ye,A+=1):typeof ye=="object"&&(y[pe]=ye,_+=1)})),_>0){var O=Object.keys(y),T=f.default.find(O,(function(pe){return b.isOS(pe)}));if(T){var D=this.satisfies(y[T]);if(D!==void 0)return D}var j=f.default.find(O,(function(pe){return b.isPlatform(pe)}));if(j){var V=this.satisfies(y[j]);if(V!==void 0)return V}}if(A>0){var ne=Object.keys(S),F=f.default.find(ne,(function(pe){return b.isBrowser(pe,!0)}));if(F!==void 0)return this.compareVersion(S[F])}},w.isBrowser=function(g,b){b===void 0&&(b=!1);var y=this.getBrowserName().toLowerCase(),_=g.toLowerCase(),S=f.default.getBrowserTypeByAlias(_);return b&&S&&(_=S.toLowerCase()),_===y},w.compareVersion=function(g){var b=[0],y=g,_=!1,S=this.getBrowserVersion();if(typeof S=="string")return g[0]===">"||g[0]==="<"?(y=g.substr(1),g[1]==="="?(_=!0,y=g.substr(2)):b=[],g[0]===">"?b.push(1):b.push(-1)):g[0]==="="?y=g.substr(1):g[0]==="~"&&(_=!0,y=g.substr(1)),b.indexOf(f.default.compareVersions(S,y,_))>-1},w.isOS=function(g){return this.getOSName(!0)===String(g).toLowerCase()},w.isPlatform=function(g){return this.getPlatformType(!0)===String(g).toLowerCase()},w.isEngine=function(g){return this.getEngineName(!0)===String(g).toLowerCase()},w.is=function(g,b){return b===void 0&&(b=!1),this.isBrowser(g,b)||this.isOS(g)||this.isPlatform(g)},w.some=function(g){var b=this;return g===void 0&&(g=[]),g.some((function(y){return b.is(y)}))},v})(),r.exports=o.default},92:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=/version\/(\d+(\.?_?\d+)+)/i;o.default=[{test:[/gptbot/i],describe:function(c){var f={name:"GPTBot"},p=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(c){var f={name:"ChatGPT-User"},p=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(c){var f={name:"OAI-SearchBot"},p=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(c){var f={name:"ClaudeBot"},p=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(c){var f={name:"Omgilibot"},p=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(c){var f={name:"Diffbot"},p=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(c){var f={name:"PerplexityBot"},p=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(c){var f={name:"Perplexity-User"},p=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(c){var f={name:"YouBot"},p=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(c){var f={name:"Meta-WebIndexer"},p=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(c){var f={name:"Meta-ExternalAds"},p=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(c){var f={name:"Meta-ExternalAgent"},p=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(c){var f={name:"Meta-ExternalFetcher"},p=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(c){var f={name:"Googlebot"},p=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(c){var f={name:"Linespider"},p=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(c){var f={name:"AmazonBot"},p=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(c){var f={name:"BingCrawler"},p=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(c){var f={name:"BaiduSpider"},p=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(c){var f={name:"DuckDuckBot"},p=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(c){var f={name:"InternetArchiveCrawler"},p=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(c){var f={name:"SlackBot"},p=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(c){var f={name:"Opera"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(c){var f={name:"Opera"},p=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(c){var f={name:"Samsung Internet for Android"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(c){var f={name:"NAVER Whale Browser"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(c){var f={name:"Pale Moon"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(c){var f={name:"MZ Browser"},p=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(c){var f={name:"Focus"},p=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(c){var f={name:"Swing"},p=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(c){var f={name:"Opera Coast"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(c){var f={name:"Opera Touch"},p=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(c){var f={name:"Yandex Browser"},p=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(c){var f={name:"UC Browser"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(c){var f={name:"Maxthon"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(c){var f={name:"Epiphany"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(c){var f={name:"Puffin"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(c){var f={name:"Sleipnir"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(c){var f={name:"K-Meleon"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(c){var f={name:"WeChat"},p=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(c){var f={name:/qqbrowserlite/i.test(c)?"QQ Browser Lite":"QQ Browser"},p=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(c){var f={name:"Internet Explorer"},p=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(c){var f={name:"Microsoft Edge"},p=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(c){var f={name:"Microsoft Edge"},p=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(c){var f={name:"Vivaldi"},p=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(c){var f={name:"SeaMonkey"},p=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(c){var f={name:"Sailfish"},p=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,c);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(c){var f={name:"Amazon Silk"},p=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(c){var f={name:"PhantomJS"},p=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(c){var f={name:"SlimerJS"},p=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var f={name:"BlackBerry"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var f={name:"WebOS Browser"},p=l.default.getFirstMatch(u,c)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(c){var f={name:"Bada"},p=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(c){var f={name:"Tizen"},p=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(c){var f={name:"QupZilla"},p=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(c){var f={name:"LibreWolf"},p=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(c){var f={name:"Firefox"},p=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(c){var f={name:"Electron"},p=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(c){var f={name:"Sogou Browser"},p=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,c),v=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c),w=l.default.getFirstMatch(/se ([\d.]+)x/i,c),g=p||v||w;return g&&(f.version=g),f}},{test:[/MiuiBrowser/i],describe:function(c){var f={name:"Miui"},p=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){return!!c.hasBrand("DuckDuckGo")||c.test(/\sDdg\/[\d.]+$/i)},describe:function(c,f){var p={name:"DuckDuckGo"};if(f){var v=f.getBrandVersion("DuckDuckGo");if(v)return p.version=v,p}var w=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,c);return w&&(p.version=w),p}},{test:function(c){return c.hasBrand("Brave")},describe:function(c,f){var p={name:"Brave"};if(f){var v=f.getBrandVersion("Brave");if(v)return p.version=v,p}return p}},{test:[/chromium/i],describe:function(c){var f={name:"Chromium"},p=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(c){var f={name:"Chrome"},p=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(c){var f={name:"Google Search"},p=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){var f=!c.test(/like android/i),p=c.test(/android/i);return f&&p},describe:function(c){var f={name:"Android Browser"},p=l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(c){var f={name:"PlayStation 4"},p=l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(c){var f={name:"Safari"},p=l.default.getFirstMatch(u,c);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(c){var f=c.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(f,c),version:l.default.getSecondMatch(f,c)}}}],r.exports=o.default},93:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:[/Roku\/DVP/],describe:function(c){var f=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,c);return{name:u.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(c){var f=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,c);return{name:u.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(c){var f=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,c),p=l.default.getWindowsVersionName(f);return{name:u.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(c){var f={name:u.OS_MAP.iOS},p=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,c);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(c){var f=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,c).replace(/[_\s]/g,"."),p=l.default.getMacOSVersionName(f),v={name:u.OS_MAP.MacOS,version:f};return p&&(v.versionName=p),v}},{test:[/(ipod|iphone|ipad)/i],describe:function(c){var f=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,c).replace(/[_\s]/g,".");return{name:u.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(c){var f=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,c);return{name:u.OS_MAP.HarmonyOS,version:f}}},{test:function(c){var f=!c.test(/like android/i),p=c.test(/android/i);return f&&p},describe:function(c){var f=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,c),p=l.default.getAndroidVersionName(f),v={name:u.OS_MAP.Android,version:f};return p&&(v.versionName=p),v}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var f=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,c),p={name:u.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var f=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,c)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,c)||l.default.getFirstMatch(/\bbb(\d+)/i,c);return{name:u.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(c){var f=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,c);return{name:u.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(c){var f=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,c);return{name:u.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:u.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:u.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(c){var f=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,c);return{name:u.OS_MAP.PlayStation4,version:f}}}],r.exports=o.default},94:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:[/googlebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(c){var f=l.default.getFirstMatch(/(can-l01)/i,c)&&"Nova",p={type:u.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(c){var f=c.test(/ipod|iphone/i),p=c.test(/like (ipod|iphone)/i);return f&&!p},describe:function(c){var f=l.default.getFirstMatch(/(ipod|iphone)/i,c);return{type:u.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(c){var f=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,c),p={type:u.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName(!0)==="blackberry"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(c){return c.getBrowserName(!0)==="bada"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName()==="windows phone"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(c){var f=Number(String(c.getOSVersion()).split(".")[0]);return c.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(c){return c.getOSName(!0)==="android"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="macos"},describe:function(){return{type:u.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(c){return c.getOSName(!0)==="windows"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="linux"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="playstation 4"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="roku"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}}],r.exports=o.default},95:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:function(c){return c.getBrowserName(!0)==="microsoft edge"},describe:function(c){if(/\sedg\//i.test(c))return{name:u.ENGINE_MAP.Blink};var f=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,c);return{name:u.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(c){var f={name:u.ENGINE_MAP.Trident},p=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){return c.test(/presto/i)},describe:function(c){var f={name:u.ENGINE_MAP.Presto},p=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){var f=c.test(/gecko/i),p=c.test(/like gecko/i);return f&&!p},describe:function(c){var f={name:u.ENGINE_MAP.Gecko},p=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:u.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(c){var f={name:u.ENGINE_MAP.WebKit},p=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}}],r.exports=o.default}})}))})),Xd=la(yp(),1);function kp(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ke(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function jt(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function Jd(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):jt("Fake Removing: ",e)}var Js=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Ep(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(jt("Fake Getting: ",e," = ",t),t)}function Qd(e,t){const r=Ep(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(o){return ke("Failed to parse JSON from storage",e,o),t}return r}function Sp(e){return Qd("settings",e)}function Mp(e){return Qd(window.location.hostname,e)}function eu(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ke("Setting: ",e," = ",t),t.toString()):(jt("Fake Setting: ",e," = ",t),String(t))}function Ap(e){return eu("settings",e)}function tu(e){return eu(window.location.hostname,e)}function xp(){const e=Xd.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function Ip(){return Js.scriptHandler??"Greasemonkey"}var ca=()=>{const e=Xd.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Cp=()=>ca()==="mobile"||ca()==="tablet",Qs=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),ru=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,o,a,s)=>{s&&e(a)})}catch(r){ke("Failed to add settings listener",r)}},Op=Ar(((e,t)=>{(function(){var r,o="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",c="Invalid `imports` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,v="__lodash_placeholder__",w=1,g=2,b=4,y=1,_=2,S=1,A=2,O=4,T=8,D=16,j=32,V=64,ne=128,F=256,pe=512,ye=30,P="...",J=800,M=16,ee=1,Ce=2,de=3,Re=1/0,ae=9007199254740991,Ie=17976931348623157e292,U=NaN,W=4294967295,Ae=W-1,ge=W>>>1,me=[["ary",ne],["bind",S],["bindKey",A],["curry",T],["curryRight",D],["flip",pe],["partial",j],["partialRight",V],["rearg",F]],Je="[object Arguments]",wt="[object Array]",Ze="[object AsyncFunction]",Ue="[object Boolean]",mt="[object Date]",_t="[object DOMException]",Xt="[object Error]",Vt="[object Function]",k="[object GeneratorFunction]",Q="[object Map]",K="[object Number]",L="[object Null]",C="[object Object]",N="[object Promise]",se="[object Proxy]",le="[object RegExp]",G="[object Set]",ue="[object String]",ve="[object Symbol]",he="[object Undefined]",Me="[object WeakMap]",it="[object WeakSet]",Ve="[object ArrayBuffer]",Pt="[object DataView]",mn="[object Float32Array]",or="[object Float64Array]",gn="[object Int8Array]",ht="[object Int16Array]",Hn="[object Int32Array]",ho="[object Uint8Array]",_r="[object Uint8ClampedArray]",Xo="[object Uint16Array]",Vi="[object Uint32Array]",$c=/\b__p \+= '';/g,Dc=/\b(__p \+=) '' \+/g,ds=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fn=/&(?:amp|lt|gt|quot|#39);/g,fo=/[&<>"']/g,N8=RegExp(Fn.source),H8=RegExp(fo.source),F8=/<%-([\s\S]+?)%>/g,G8=/<%([\s\S]+?)%>/g,D1=/<%=([\s\S]+?)%>/g,W8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U8=/^\w*$/,V8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zc=/[\\^$.*+?()[\]{}|]/g,q8=RegExp(zc.source),Bc=/^\s+/,Z8=/\s/,j8=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K8=/\{\n\/\* \[wrapped with (.+)\] \*/,Y8=/,? & /,X8=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,z1=/[()=,{}\[\]\/\s]/,J8=/\\(\\)?/g,Q8=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,B1=/\w*$/,e_=/^[-+]0x[0-9a-f]+$/i,t_=/^0b[01]+$/i,r_=/^\[object .+?Constructor\]$/,n_=/^0o[0-7]+$/i,o_=/^(?:0|[1-9]\d*)$/,i_=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,us=/($^)/,a_=/['\n\r\u2028\u2029\\]/g,hs="\\ud800-\\udfff",N1="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",H1="\\u2700-\\u27bf",F1="a-z\\xdf-\\xf6\\xf8-\\xff",s_="\\xac\\xb1\\xd7\\xf7",l_="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",c_="\\u2000-\\u206f",d_=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",G1="A-Z\\xc0-\\xd6\\xd8-\\xde",W1="\\ufe0e\\ufe0f",U1=s_+l_+c_+d_,Nc="['’]",u_="["+hs+"]",V1="["+U1+"]",fs="["+N1+"]",q1="\\d+",h_="["+H1+"]",Z1="["+F1+"]",j1="[^"+hs+U1+q1+H1+F1+G1+"]",Hc="\\ud83c[\\udffb-\\udfff]",f_="(?:"+fs+"|"+Hc+")",K1="[^"+hs+"]",Fc="(?:\\ud83c[\\udde6-\\uddff]){2}",Gc="[\\ud800-\\udbff][\\udc00-\\udfff]",Jo="["+G1+"]",Y1="\\u200d",X1="(?:"+Z1+"|"+j1+")",p_="(?:"+Jo+"|"+j1+")",J1="(?:"+Nc+"(?:d|ll|m|re|s|t|ve))?",Q1="(?:"+Nc+"(?:D|LL|M|RE|S|T|VE))?",ef=f_+"?",tf="["+W1+"]?",m_="(?:"+Y1+"(?:"+[K1,Fc,Gc].join("|")+")"+tf+ef+")*",g_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",v_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rf=tf+ef+m_,b_="(?:"+[h_,Fc,Gc].join("|")+")"+rf,w_="(?:"+[K1+fs+"?",fs,Fc,Gc,u_].join("|")+")",__=RegExp(Nc,"g"),y_=RegExp(fs,"g"),Wc=RegExp(Hc+"(?="+Hc+")|"+w_+rf,"g"),k_=RegExp([Jo+"?"+Z1+"+"+J1+"(?="+[V1,Jo,"$"].join("|")+")",p_+"+"+Q1+"(?="+[V1,Jo+X1,"$"].join("|")+")",Jo+"?"+X1+"+"+J1,Jo+"+"+Q1,v_,g_,q1,b_].join("|"),"g"),E_=RegExp("["+Y1+hs+N1+W1+"]"),S_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,M_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],A_=-1,ft={};ft[mn]=ft[or]=ft[gn]=ft[ht]=ft[Hn]=ft[ho]=ft[_r]=ft[Xo]=ft[Vi]=!0,ft[Je]=ft[wt]=ft[Ve]=ft[Ue]=ft[Pt]=ft[mt]=ft[Xt]=ft[Vt]=ft[Q]=ft[K]=ft[C]=ft[le]=ft[G]=ft[ue]=ft[Me]=!1;var dt={};dt[Je]=dt[wt]=dt[Ve]=dt[Pt]=dt[Ue]=dt[mt]=dt[mn]=dt[or]=dt[gn]=dt[ht]=dt[Hn]=dt[Q]=dt[K]=dt[C]=dt[le]=dt[G]=dt[ue]=dt[ve]=dt[ho]=dt[_r]=dt[Xo]=dt[Vi]=!0,dt[Xt]=dt[Vt]=dt[Me]=!1;var x_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},I_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},O_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},T_=parseFloat,L_=parseInt,nf=typeof global=="object"&&global&&global.Object===Object&&global,R_=typeof self=="object"&&self&&self.Object===Object&&self,Bt=nf||R_||Function("return this")(),Uc=typeof e=="object"&&e&&!e.nodeType&&e,po=Uc&&typeof t=="object"&&t&&!t.nodeType&&t,of=po&&po.exports===Uc,Vc=of&&nf.process,Rr=(function(){try{var B=po&&po.require&&po.require("util").types;return B||Vc&&Vc.binding&&Vc.binding("util")}catch{}})(),af=Rr&&Rr.isArrayBuffer,sf=Rr&&Rr.isDate,lf=Rr&&Rr.isMap,cf=Rr&&Rr.isRegExp,df=Rr&&Rr.isSet,uf=Rr&&Rr.isTypedArray;function yr(B,te,Z){switch(Z.length){case 0:return B.call(te);case 1:return B.call(te,Z[0]);case 2:return B.call(te,Z[0],Z[1]);case 3:return B.call(te,Z[0],Z[1],Z[2])}return B.apply(te,Z)}function P_(B,te,Z,_e){for(var Be=-1,tt=B==null?0:B.length;++Be<tt;){var $t=B[Be];te(_e,$t,Z($t),B)}return _e}function kr(B,te){for(var Z=-1,_e=B==null?0:B.length;++Z<_e&&te(B[Z],Z,B)!==!1;);return B}function $_(B,te){for(var Z=B==null?0:B.length;Z--&&te(B[Z],Z,B)!==!1;);return B}function hf(B,te){for(var Z=-1,_e=B==null?0:B.length;++Z<_e;)if(!te(B[Z],Z,B))return!1;return!0}function Gn(B,te){for(var Z=-1,_e=B==null?0:B.length,Be=0,tt=[];++Z<_e;){var $t=B[Z];te($t,Z,B)&&(tt[Be++]=$t)}return tt}function ps(B,te){return!!(B!=null&&B.length)&&Qo(B,te,0)>-1}function qc(B,te,Z){for(var _e=-1,Be=B==null?0:B.length;++_e<Be;)if(Z(te,B[_e]))return!0;return!1}function gt(B,te){for(var Z=-1,_e=B==null?0:B.length,Be=Array(_e);++Z<_e;)Be[Z]=te(B[Z],Z,B);return Be}function Wn(B,te){for(var Z=-1,_e=te.length,Be=B.length;++Z<_e;)B[Be+Z]=te[Z];return B}function Zc(B,te,Z,_e){var Be=-1,tt=B==null?0:B.length;for(_e&&tt&&(Z=B[++Be]);++Be<tt;)Z=te(Z,B[Be],Be,B);return Z}function D_(B,te,Z,_e){var Be=B==null?0:B.length;for(_e&&Be&&(Z=B[--Be]);Be--;)Z=te(Z,B[Be],Be,B);return Z}function jc(B,te){for(var Z=-1,_e=B==null?0:B.length;++Z<_e;)if(te(B[Z],Z,B))return!0;return!1}var z_=Kc("length");function B_(B){return B.split("")}function N_(B){return B.match(X8)||[]}function ff(B,te,Z){var _e;return Z(B,function(Be,tt,$t){if(te(Be,tt,$t))return _e=tt,!1}),_e}function ms(B,te,Z,_e){for(var Be=B.length,tt=Z+(_e?1:-1);_e?tt--:++tt<Be;)if(te(B[tt],tt,B))return tt;return-1}function Qo(B,te,Z){return te===te?X_(B,te,Z):ms(B,pf,Z)}function H_(B,te,Z,_e){for(var Be=Z-1,tt=B.length;++Be<tt;)if(_e(B[Be],te))return Be;return-1}function pf(B){return B!==B}function mf(B,te){var Z=B==null?0:B.length;return Z?Xc(B,te)/Z:U}function Kc(B){return function(te){return te==null?r:te[B]}}function Yc(B){return function(te){return B==null?r:B[te]}}function gf(B,te,Z,_e,Be){return Be(B,function(tt,$t,at){Z=_e?(_e=!1,tt):te(Z,tt,$t,at)}),Z}function F_(B,te){var Z=B.length;for(B.sort(te);Z--;)B[Z]=B[Z].value;return B}function Xc(B,te){for(var Z,_e=-1,Be=B.length;++_e<Be;){var tt=te(B[_e]);tt!==r&&(Z=Z===r?tt:Z+tt)}return Z}function Jc(B,te){for(var Z=-1,_e=Array(B);++Z<B;)_e[Z]=te(Z);return _e}function G_(B,te){return gt(te,function(Z){return[Z,B[Z]]})}function vf(B){return B&&B.slice(0,yf(B)+1).replace(Bc,"")}function Er(B){return function(te){return B(te)}}function Qc(B,te){return gt(te,function(Z){return B[Z]})}function qi(B,te){return B.has(te)}function bf(B,te){for(var Z=-1,_e=B.length;++Z<_e&&Qo(te,B[Z],0)>-1;);return Z}function wf(B,te){for(var Z=B.length;Z--&&Qo(te,B[Z],0)>-1;);return Z}function W_(B,te){for(var Z=B.length,_e=0;Z--;)B[Z]===te&&++_e;return _e}var U_=Yc(x_),V_=Yc(I_);function q_(B){return"\\"+O_[B]}function Z_(B,te){return B==null?r:B[te]}function ei(B){return E_.test(B)}function j_(B){return S_.test(B)}function K_(B){for(var te,Z=[];!(te=B.next()).done;)Z.push(te.value);return Z}function ed(B){var te=-1,Z=Array(B.size);return B.forEach(function(_e,Be){Z[++te]=[Be,_e]}),Z}function _f(B,te){return function(Z){return B(te(Z))}}function Un(B,te){for(var Z=-1,_e=B.length,Be=0,tt=[];++Z<_e;){var $t=B[Z];($t===te||$t===v)&&(B[Z]=v,tt[Be++]=Z)}return tt}function gs(B){var te=-1,Z=Array(B.size);return B.forEach(function(_e){Z[++te]=_e}),Z}function Y_(B){var te=-1,Z=Array(B.size);return B.forEach(function(_e){Z[++te]=[_e,_e]}),Z}function X_(B,te,Z){for(var _e=Z-1,Be=B.length;++_e<Be;)if(B[_e]===te)return _e;return-1}function J_(B,te,Z){for(var _e=Z+1;_e--;)if(B[_e]===te)return _e;return _e}function ti(B){return ei(B)?ey(B):z_(B)}function Vr(B){return ei(B)?ty(B):B_(B)}function yf(B){for(var te=B.length;te--&&Z8.test(B.charAt(te)););return te}var Q_=Yc(C_);function ey(B){for(var te=Wc.lastIndex=0;Wc.test(B);)++te;return te}function ty(B){return B.match(Wc)||[]}function ry(B){return B.match(k_)||[]}var Vn=(function B(te){te=te==null?Bt:Vn.defaults(Bt.Object(),te,Vn.pick(Bt,M_));var Z=te.Array,_e=te.Date,Be=te.Error,tt=te.Function,$t=te.Math,at=te.Object,td=te.RegExp,ny=te.String,Pr=te.TypeError,vs=Z.prototype,oy=tt.prototype,ri=at.prototype,bs=te["__core-js_shared__"],ws=oy.toString,nt=ri.hasOwnProperty,iy=0,kf=(function(){var n=/[^.]+$/.exec(bs&&bs.keys&&bs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),_s=ri.toString,ay=ws.call(at),sy=Bt._,ly=td("^"+ws.call(nt).replace(zc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ys=of?te.Buffer:r,qn=te.Symbol,ks=te.Uint8Array,Ef=ys?ys.allocUnsafe:r,Es=_f(at.getPrototypeOf,at),Sf=at.create,Mf=ri.propertyIsEnumerable,Ss=vs.splice,Af=qn?qn.isConcatSpreadable:r,Zi=qn?qn.iterator:r,mo=qn?qn.toStringTag:r,Ms=(function(){try{var n=_o(at,"defineProperty");return n({},"",{}),n}catch{}})(),cy=te.clearTimeout!==Bt.clearTimeout&&te.clearTimeout,dy=_e&&_e.now!==Bt.Date.now&&_e.now,uy=te.setTimeout!==Bt.setTimeout&&te.setTimeout,As=$t.ceil,xs=$t.floor,rd=at.getOwnPropertySymbols,hy=ys?ys.isBuffer:r,xf=te.isFinite,fy=vs.join,py=_f(at.keys,at),Dt=$t.max,qt=$t.min,my=_e.now,gy=te.parseInt,If=$t.random,vy=vs.reverse,nd=_o(te,"DataView"),ji=_o(te,"Map"),od=_o(te,"Promise"),ni=_o(te,"Set"),Ki=_o(te,"WeakMap"),Yi=_o(at,"create"),Is=Ki&&new Ki,oi={},by=yo(nd),wy=yo(ji),_y=yo(od),yy=yo(ni),ky=yo(Ki),Cs=qn?qn.prototype:r,Xi=Cs?Cs.valueOf:r,Cf=Cs?Cs.toString:r;function x(n){if(kt(n)&&!Ge(n)&&!(n instanceof Ke)){if(n instanceof $r)return n;if(nt.call(n,"__wrapped__"))return O2(n)}return new $r(n)}var ii=(function(){function n(){}return function(i){if(!yt(i))return{};if(Sf)return Sf(i);n.prototype=i;var h=new n;return n.prototype=r,h}})();function Os(){}function $r(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}x.templateSettings={escape:F8,evaluate:G8,interpolate:D1,variable:"",imports:{_:x}},x.prototype=Os.prototype,x.prototype.constructor=x,$r.prototype=ii(Os.prototype),$r.prototype.constructor=$r;function Ke(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=W,this.__views__=[]}function Ey(){var n=new Ke(this.__wrapped__);return n.__actions__=ir(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ir(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ir(this.__views__),n}function Sy(){if(this.__filtered__){var n=new Ke(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function My(){var n=this.__wrapped__.value(),i=this.__dir__,h=Ge(n),m=i<0,E=h?n.length:0,I=zk(0,E,this.__views__),R=I.start,$=I.end,H=$-R,ie=m?$:R-1,re=this.__iteratees__,ce=re.length,be=0,Ee=qt(H,this.__takeCount__);if(!h||!m&&E==H&&Ee==H)return Qf(n,this.__actions__);var Oe=[];e:for(;H--&&be<Ee;){ie+=i;for(var Ne=-1,Te=n[ie];++Ne<ce;){var st=re[Ne],Ye=st.iteratee,er=st.type,on=Ye(Te);if(er==Ce)Te=on;else if(!on){if(er==ee)continue e;break e}}Oe[be++]=Te}return Oe}Ke.prototype=ii(Os.prototype),Ke.prototype.constructor=Ke;function go(n){var i=-1,h=n==null?0:n.length;for(this.clear();++i<h;){var m=n[i];this.set(m[0],m[1])}}function Ay(){this.__data__=Yi?Yi(null):{},this.size=0}function xy(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function Iy(n){var i=this.__data__;if(Yi){var h=i[n];return h===f?r:h}return nt.call(i,n)?i[n]:r}function Cy(n){var i=this.__data__;return Yi?i[n]!==r:nt.call(i,n)}function Oy(n,i){var h=this.__data__;return this.size+=this.has(n)?0:1,h[n]=Yi&&i===r?f:i,this}go.prototype.clear=Ay,go.prototype.delete=xy,go.prototype.get=Iy,go.prototype.has=Cy,go.prototype.set=Oy;function vn(n){var i=-1,h=n==null?0:n.length;for(this.clear();++i<h;){var m=n[i];this.set(m[0],m[1])}}function Ty(){this.__data__=[],this.size=0}function Ly(n){var i=this.__data__,h=Ts(i,n);return h<0?!1:(h==i.length-1?i.pop():Ss.call(i,h,1),--this.size,!0)}function Ry(n){var i=this.__data__,h=Ts(i,n);return h<0?r:i[h][1]}function Py(n){return Ts(this.__data__,n)>-1}function $y(n,i){var h=this.__data__,m=Ts(h,n);return m<0?(++this.size,h.push([n,i])):h[m][1]=i,this}vn.prototype.clear=Ty,vn.prototype.delete=Ly,vn.prototype.get=Ry,vn.prototype.has=Py,vn.prototype.set=$y;function bn(n){var i=-1,h=n==null?0:n.length;for(this.clear();++i<h;){var m=n[i];this.set(m[0],m[1])}}function Dy(){this.size=0,this.__data__={hash:new go,map:new(ji||vn),string:new go}}function zy(n){var i=Ws(this,n).delete(n);return this.size-=i?1:0,i}function By(n){return Ws(this,n).get(n)}function Ny(n){return Ws(this,n).has(n)}function Hy(n,i){var h=Ws(this,n),m=h.size;return h.set(n,i),this.size+=h.size==m?0:1,this}bn.prototype.clear=Dy,bn.prototype.delete=zy,bn.prototype.get=By,bn.prototype.has=Ny,bn.prototype.set=Hy;function vo(n){var i=-1,h=n==null?0:n.length;for(this.__data__=new bn;++i<h;)this.add(n[i])}function Fy(n){return this.__data__.set(n,f),this}function Gy(n){return this.__data__.has(n)}vo.prototype.add=vo.prototype.push=Fy,vo.prototype.has=Gy;function qr(n){var i=this.__data__=new vn(n);this.size=i.size}function Wy(){this.__data__=new vn,this.size=0}function Uy(n){var i=this.__data__,h=i.delete(n);return this.size=i.size,h}function Vy(n){return this.__data__.get(n)}function qy(n){return this.__data__.has(n)}function Zy(n,i){var h=this.__data__;if(h instanceof vn){var m=h.__data__;if(!ji||m.length<199)return m.push([n,i]),this.size=++h.size,this;h=this.__data__=new bn(m)}return h.set(n,i),this.size=h.size,this}qr.prototype.clear=Wy,qr.prototype.delete=Uy,qr.prototype.get=Vy,qr.prototype.has=qy,qr.prototype.set=Zy;function Of(n,i){var h=Ge(n),m=!h&&ko(n),E=!h&&!m&&Xn(n),I=!h&&!m&&!E&&ci(n),R=h||m||E||I,$=R?Jc(n.length,ny):[],H=$.length;for(var ie in n)(i||nt.call(n,ie))&&!(R&&(ie=="length"||E&&(ie=="offset"||ie=="parent")||I&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||yn(ie,H)))&&$.push(ie);return $}function Tf(n){var i=n.length;return i?n[md(0,i-1)]:r}function jy(n,i){return Us(ir(n),bo(i,0,n.length))}function Ky(n){return Us(ir(n))}function id(n,i,h){(h!==r&&!jr(n[i],h)||h===r&&!(i in n))&&tn(n,i,h)}function Ji(n,i,h){var m=n[i];(!(nt.call(n,i)&&jr(m,h))||h===r&&!(i in n))&&tn(n,i,h)}function Ts(n,i){for(var h=n.length;h--;)if(jr(n[h][0],i))return h;return-1}function Yy(n,i,h,m){return Zn(n,function(E,I,R){i(m,E,h(E),R)}),m}function Lf(n,i){return n&&nn(i,Nt(i),n)}function Xy(n,i){return n&&nn(i,sr(i),n)}function tn(n,i,h){i=="__proto__"&&Ms?Ms(n,i,{configurable:!0,enumerable:!0,value:h,writable:!0}):n[i]=h}function ad(n,i){for(var h=-1,m=i.length,E=Z(m),I=n==null;++h<m;)E[h]=I?r:Fd(n,i[h]);return E}function bo(n,i,h){return n===n&&(h!==r&&(n=n<=h?n:h),i!==r&&(n=n>=i?n:i)),n}function Dr(n,i,h,m,E,I){var R,$=i&w,H=i&g,ie=i&b;if(h&&(R=E?h(n,m,E,I):h(n)),R!==r)return R;if(!yt(n))return n;var re=Ge(n);if(re){if(R=Nk(n),!$)return ir(n,R)}else{var ce=Zt(n),be=ce==Vt||ce==k;if(Xn(n))return r2(n,$);if(ce==C||ce==Je||be&&!E){if(R=H||be?{}:y2(n),!$)return H?Ik(n,Xy(R,n)):xk(n,Lf(R,n))}else{if(!dt[ce])return E?n:{};R=Hk(n,ce,$)}}I||(I=new qr);var Ee=I.get(n);if(Ee)return Ee;I.set(n,R),Y2(n)?n.forEach(function(Ne){R.add(Dr(Ne,i,h,Ne,n,I))}):j2(n)&&n.forEach(function(Ne,Te){R.set(Te,Dr(Ne,i,h,Te,n,I))});var Oe=re?r:(ie?H?Ad:Md:H?sr:Nt)(n);return kr(Oe||n,function(Ne,Te){Oe&&(Te=Ne,Ne=n[Te]),Ji(R,Te,Dr(Ne,i,h,Te,n,I))}),R}function Jy(n){var i=Nt(n);return function(h){return Rf(h,n,i)}}function Rf(n,i,h){var m=h.length;if(n==null)return!m;for(n=at(n);m--;){var E=h[m],I=i[E],R=n[E];if(R===r&&!(E in n)||!I(R))return!1}return!0}function Pf(n,i,h){if(typeof n!="function")throw new Pr(l);return ia(function(){n.apply(r,h)},i)}function Qi(n,i,h,m){var E=-1,I=ps,R=!0,$=n.length,H=[],ie=i.length;if(!$)return H;h&&(i=gt(i,Er(h))),m?(I=qc,R=!1):i.length>=a&&(I=qi,R=!1,i=new vo(i));e:for(;++E<$;){var re=n[E],ce=h==null?re:h(re);if(re=m||re!==0?re:0,R&&ce===ce){for(var be=ie;be--;)if(i[be]===ce)continue e;H.push(re)}else I(i,ce,m)||H.push(re)}return H}var Zn=s2(rn),$f=s2(ld,!0);function Qy(n,i){var h=!0;return Zn(n,function(m,E,I){return h=!!i(m,E,I),h}),h}function Ls(n,i,h){for(var m=-1,E=n.length;++m<E;){var I=n[m],R=i(I);if(R!=null&&($===r?R===R&&!Mr(R):h(R,$)))var $=R,H=I}return H}function ek(n,i,h,m){var E=n.length;for(h=We(h),h<0&&(h=-h>E?0:E+h),m=m===r||m>E?E:We(m),m<0&&(m+=E),m=h>m?0:J2(m);h<m;)n[h++]=i;return n}function Df(n,i){var h=[];return Zn(n,function(m,E,I){i(m,E,I)&&h.push(m)}),h}function Wt(n,i,h,m,E){var I=-1,R=n.length;for(h||(h=Gk),E||(E=[]);++I<R;){var $=n[I];i>0&&h($)?i>1?Wt($,i-1,h,m,E):Wn(E,$):m||(E[E.length]=$)}return E}var sd=l2(),zf=l2(!0);function rn(n,i){return n&&sd(n,i,Nt)}function ld(n,i){return n&&zf(n,i,Nt)}function Rs(n,i){return Gn(i,function(h){return kn(n[h])})}function wo(n,i){i=Kn(i,n);for(var h=0,m=i.length;n!=null&&h<m;)n=n[Zr(i[h++])];return h&&h==m?n:r}function Bf(n,i,h){var m=i(n);return Ge(n)?m:Wn(m,h(n))}function Jt(n){return n==null?n===r?he:L:mo&&mo in at(n)?Dk(n):Kk(n)}function cd(n,i){return n>i}function tk(n,i){return n!=null&&nt.call(n,i)}function rk(n,i){return n!=null&&i in at(n)}function nk(n,i,h){return n>=qt(i,h)&&n<Dt(i,h)}function dd(n,i,h){for(var m=h?qc:ps,E=n[0].length,I=n.length,R=I,$=Z(I),H=1/0,ie=[];R--;){var re=n[R];R&&i&&(re=gt(re,Er(i))),H=qt(re.length,H),$[R]=!h&&(i||E>=120&&re.length>=120)?new vo(R&&re):r}re=n[0];var ce=-1,be=$[0];e:for(;++ce<E&&ie.length<H;){var Ee=re[ce],Oe=i?i(Ee):Ee;if(Ee=h||Ee!==0?Ee:0,!(be?qi(be,Oe):m(ie,Oe,h))){for(R=I;--R;){var Ne=$[R];if(!(Ne?qi(Ne,Oe):m(n[R],Oe,h)))continue e}be&&be.push(Oe),ie.push(Ee)}}return ie}function ok(n,i,h,m){return rn(n,function(E,I,R){i(m,h(E),I,R)}),m}function ea(n,i,h){i=Kn(i,n),n=M2(n,i);var m=n==null?n:n[Zr(Br(i))];return m==null?r:yr(m,n,h)}function Nf(n){return kt(n)&&Jt(n)==Je}function ik(n){return kt(n)&&Jt(n)==Ve}function ak(n){return kt(n)&&Jt(n)==mt}function ta(n,i,h,m,E){return n===i?!0:n==null||i==null||!kt(n)&&!kt(i)?n!==n&&i!==i:sk(n,i,h,m,ta,E)}function sk(n,i,h,m,E,I){var R=Ge(n),$=Ge(i),H=R?wt:Zt(n),ie=$?wt:Zt(i);H=H==Je?C:H,ie=ie==Je?C:ie;var re=H==C,ce=ie==C,be=H==ie;if(be&&Xn(n)){if(!Xn(i))return!1;R=!0,re=!1}if(be&&!re)return I||(I=new qr),R||ci(n)?b2(n,i,h,m,E,I):Pk(n,i,H,h,m,E,I);if(!(h&y)){var Ee=re&&nt.call(n,"__wrapped__"),Oe=ce&&nt.call(i,"__wrapped__");if(Ee||Oe){var Ne=Ee?n.value():n,Te=Oe?i.value():i;return I||(I=new qr),E(Ne,Te,h,m,I)}}return be?(I||(I=new qr),$k(n,i,h,m,E,I)):!1}function lk(n){return kt(n)&&Zt(n)==Q}function ud(n,i,h,m){var E=h.length,I=E,R=!m;if(n==null)return!I;for(n=at(n);E--;){var $=h[E];if(R&&$[2]?$[1]!==n[$[0]]:!($[0]in n))return!1}for(;++E<I;){$=h[E];var H=$[0],ie=n[H],re=$[1];if(R&&$[2]){if(ie===r&&!(H in n))return!1}else{var ce=new qr;if(m)var be=m(ie,re,H,n,i,ce);if(!(be===r?ta(re,ie,3,m,ce):be))return!1}}return!0}function Hf(n){return!yt(n)||Uk(n)?!1:(kn(n)?ly:r_).test(yo(n))}function ck(n){return kt(n)&&Jt(n)==le}function dk(n){return kt(n)&&Zt(n)==G}function uk(n){return kt(n)&&Ys(n.length)&&!!ft[Jt(n)]}function Ff(n){return typeof n=="function"?n:n==null?lr:typeof n=="object"?Ge(n)?Uf(n[0],n[1]):Wf(n):dp(n)}function hd(n){if(!oa(n))return py(n);var i=[];for(var h in at(n))nt.call(n,h)&&h!="constructor"&&i.push(h);return i}function hk(n){if(!yt(n))return jk(n);var i=oa(n),h=[];for(var m in n)m=="constructor"&&(i||!nt.call(n,m))||h.push(m);return h}function fd(n,i){return n<i}function Gf(n,i){var h=-1,m=ar(n)?Z(n.length):[];return Zn(n,function(E,I,R){m[++h]=i(E,I,R)}),m}function Wf(n){var i=Id(n);return i.length==1&&i[0][2]?E2(i[0][0],i[0][1]):function(h){return h===n||ud(h,n,i)}}function Uf(n,i){return Od(n)&&k2(i)?E2(Zr(n),i):function(h){var m=Fd(h,n);return m===r&&m===i?Gd(h,n):ta(i,m,3)}}function Ps(n,i,h,m,E){n!==i&&sd(i,function(I,R){if(E||(E=new qr),yt(I))fk(n,i,R,h,Ps,m,E);else{var $=m?m(Ld(n,R),I,R+"",n,i,E):r;$===r&&($=I),id(n,R,$)}},sr)}function fk(n,i,h,m,E,I,R){var $=Ld(n,h),H=Ld(i,h),ie=R.get(H);if(ie){id(n,h,ie);return}var re=I?I($,H,h+"",n,i,R):r,ce=re===r;if(ce){var be=Ge(H),Ee=!be&&Xn(H),Oe=!be&&!Ee&&ci(H);re=H,be||Ee||Oe?Ge($)?re=$:At($)?re=ir($):Ee?(ce=!1,re=r2(H,!0)):Oe?(ce=!1,re=n2(H,!0)):re=[]:aa(H)||ko(H)?(re=$,ko($)?re=Q2($):(!yt($)||kn($))&&(re=y2(H))):ce=!1}ce&&(R.set(H,re),E(re,H,m,I,R),R.delete(H)),id(n,h,re)}function Vf(n,i){var h=n.length;if(h)return i+=i<0?h:0,yn(i,h)?n[i]:r}function qf(n,i,h){i.length?i=gt(i,function(E){return Ge(E)?function(I){return wo(I,E.length===1?E[0]:E)}:E}):i=[lr];var m=-1;return i=gt(i,Er(Le())),F_(Gf(n,function(E,I,R){return{criteria:gt(i,function($){return $(E)}),index:++m,value:E}}),function(E,I){return Ak(E,I,h)})}function pk(n,i){return Zf(n,i,function(h,m){return Gd(n,m)})}function Zf(n,i,h){for(var m=-1,E=i.length,I={};++m<E;){var R=i[m],$=wo(n,R);h($,R)&&ra(I,Kn(R,n),$)}return I}function mk(n){return function(i){return wo(i,n)}}function pd(n,i,h,m){var E=m?H_:Qo,I=-1,R=i.length,$=n;for(n===i&&(i=ir(i)),h&&($=gt(n,Er(h)));++I<R;)for(var H=0,ie=i[I],re=h?h(ie):ie;(H=E($,re,H,m))>-1;)$!==n&&Ss.call($,H,1),Ss.call(n,H,1);return n}function jf(n,i){for(var h=n?i.length:0,m=h-1;h--;){var E=i[h];if(h==m||E!==I){var I=E;yn(E)?Ss.call(n,E,1):bd(n,E)}}return n}function md(n,i){return n+xs(If()*(i-n+1))}function gk(n,i,h,m){for(var E=-1,I=Dt(As((i-n)/(h||1)),0),R=Z(I);I--;)R[m?I:++E]=n,n+=h;return R}function gd(n,i){var h="";if(!n||i<1||i>ae)return h;do i%2&&(h+=n),i=xs(i/2),i&&(n+=n);while(i);return h}function je(n,i){return Rd(S2(n,i,lr),n+"")}function vk(n){return Tf(di(n))}function bk(n,i){var h=di(n);return Us(h,bo(i,0,h.length))}function ra(n,i,h,m){if(!yt(n))return n;i=Kn(i,n);for(var E=-1,I=i.length,R=I-1,$=n;$!=null&&++E<I;){var H=Zr(i[E]),ie=h;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(E!=R){var re=$[H];ie=m?m(re,H,$):r,ie===r&&(ie=yt(re)?re:yn(i[E+1])?[]:{})}Ji($,H,ie),$=$[H]}return n}var Kf=Is?function(n,i){return Is.set(n,i),n}:lr,wk=Ms?function(n,i){return Ms(n,"toString",{configurable:!0,enumerable:!1,value:Ud(i),writable:!0})}:lr;function _k(n){return Us(di(n))}function zr(n,i,h){var m=-1,E=n.length;i<0&&(i=-i>E?0:E+i),h=h>E?E:h,h<0&&(h+=E),E=i>h?0:h-i>>>0,i>>>=0;for(var I=Z(E);++m<E;)I[m]=n[m+i];return I}function yk(n,i){var h;return Zn(n,function(m,E,I){return h=i(m,E,I),!h}),!!h}function $s(n,i,h){var m=0,E=n==null?m:n.length;if(typeof i=="number"&&i===i&&E<=ge){for(;m<E;){var I=m+E>>>1,R=n[I];R!==null&&!Mr(R)&&(h?R<=i:R<i)?m=I+1:E=I}return E}return vd(n,i,lr,h)}function vd(n,i,h,m){var E=0,I=n==null?0:n.length;if(I===0)return 0;i=h(i);for(var R=i!==i,$=i===null,H=Mr(i),ie=i===r;E<I;){var re=xs((E+I)/2),ce=h(n[re]),be=ce!==r,Ee=ce===null,Oe=ce===ce,Ne=Mr(ce);if(R)var Te=m||Oe;else ie?Te=Oe&&(m||be):$?Te=Oe&&be&&(m||!Ee):H?Te=Oe&&be&&!Ee&&(m||!Ne):Ee||Ne?Te=!1:Te=m?ce<=i:ce<i;Te?E=re+1:I=re}return qt(I,Ae)}function Yf(n,i){for(var h=-1,m=n.length,E=0,I=[];++h<m;){var R=n[h],$=i?i(R):R;if(!h||!jr($,H)){var H=$;I[E++]=R===0?0:R}}return I}function Xf(n){return typeof n=="number"?n:Mr(n)?U:+n}function Sr(n){if(typeof n=="string")return n;if(Ge(n))return gt(n,Sr)+"";if(Mr(n))return Cf?Cf.call(n):"";var i=n+"";return i=="0"&&1/n==-1/0?"-0":i}function jn(n,i,h){var m=-1,E=ps,I=n.length,R=!0,$=[],H=$;if(h)R=!1,E=qc;else if(I>=a){var ie=i?null:Lk(n);if(ie)return gs(ie);R=!1,E=qi,H=new vo}else H=i?[]:$;e:for(;++m<I;){var re=n[m],ce=i?i(re):re;if(re=h||re!==0?re:0,R&&ce===ce){for(var be=H.length;be--;)if(H[be]===ce)continue e;i&&H.push(ce),$.push(re)}else E(H,ce,h)||(H!==$&&H.push(ce),$.push(re))}return $}function bd(n,i){i=Kn(i,n);var h=-1,m=i.length;if(!m)return!0;for(;++h<m;){var E=Zr(i[h]);if(E==="__proto__"&&!nt.call(n,"__proto__")||(E==="constructor"||E==="prototype")&&h<m-1)return!1}var I=M2(n,i);return I==null||delete I[Zr(Br(i))]}function Jf(n,i,h,m){return ra(n,i,h(wo(n,i)),m)}function Ds(n,i,h,m){for(var E=n.length,I=m?E:-1;(m?I--:++I<E)&&i(n[I],I,n););return h?zr(n,m?0:I,m?I+1:E):zr(n,m?I+1:0,m?E:I)}function Qf(n,i){var h=n;return h instanceof Ke&&(h=h.value()),Zc(i,function(m,E){return E.func.apply(E.thisArg,Wn([m],E.args))},h)}function wd(n,i,h){var m=n.length;if(m<2)return m?jn(n[0]):[];for(var E=-1,I=Z(m);++E<m;)for(var R=n[E],$=-1;++$<m;)$!=E&&(I[E]=Qi(I[E]||R,n[$],i,h));return jn(Wt(I,1),i,h)}function e2(n,i,h){for(var m=-1,E=n.length,I=i.length,R={};++m<E;){var $=m<I?i[m]:r;h(R,n[m],$)}return R}function _d(n){return At(n)?n:[]}function yd(n){return typeof n=="function"?n:lr}function Kn(n,i){return Ge(n)?n:Od(n,i)?[n]:C2(ot(n))}var kk=je;function Yn(n,i,h){var m=n.length;return h=h===r?m:h,!i&&h>=m?n:zr(n,i,h)}var t2=cy||function(n){return Bt.clearTimeout(n)};function r2(n,i){if(i)return n.slice();var h=n.length,m=Ef?Ef(h):new n.constructor(h);return n.copy(m),m}function kd(n){var i=new n.constructor(n.byteLength);return new ks(i).set(new ks(n)),i}function Ek(n,i){var h=i?kd(n.buffer):n.buffer;return new n.constructor(h,n.byteOffset,n.byteLength)}function Sk(n){var i=new n.constructor(n.source,B1.exec(n));return i.lastIndex=n.lastIndex,i}function Mk(n){return Xi?at(Xi.call(n)):{}}function n2(n,i){var h=i?kd(n.buffer):n.buffer;return new n.constructor(h,n.byteOffset,n.length)}function o2(n,i){if(n!==i){var h=n!==r,m=n===null,E=n===n,I=Mr(n),R=i!==r,$=i===null,H=i===i,ie=Mr(i);if(!$&&!ie&&!I&&n>i||I&&R&&H&&!$&&!ie||m&&R&&H||!h&&H||!E)return 1;if(!m&&!I&&!ie&&n<i||ie&&h&&E&&!m&&!I||$&&h&&E||!R&&E||!H)return-1}return 0}function Ak(n,i,h){for(var m=-1,E=n.criteria,I=i.criteria,R=E.length,$=h.length;++m<R;){var H=o2(E[m],I[m]);if(H)return m>=$?H:H*(h[m]=="desc"?-1:1)}return n.index-i.index}function i2(n,i,h,m){for(var E=-1,I=n.length,R=h.length,$=-1,H=i.length,ie=Dt(I-R,0),re=Z(H+ie),ce=!m;++$<H;)re[$]=i[$];for(;++E<R;)(ce||E<I)&&(re[h[E]]=n[E]);for(;ie--;)re[$++]=n[E++];return re}function a2(n,i,h,m){for(var E=-1,I=n.length,R=-1,$=h.length,H=-1,ie=i.length,re=Dt(I-$,0),ce=Z(re+ie),be=!m;++E<re;)ce[E]=n[E];for(var Ee=E;++H<ie;)ce[Ee+H]=i[H];for(;++R<$;)(be||E<I)&&(ce[Ee+h[R]]=n[E++]);return ce}function ir(n,i){var h=-1,m=n.length;for(i||(i=Z(m));++h<m;)i[h]=n[h];return i}function nn(n,i,h,m){var E=!h;h||(h={});for(var I=-1,R=i.length;++I<R;){var $=i[I],H=m?m(h[$],n[$],$,h,n):r;H===r&&(H=n[$]),E?tn(h,$,H):Ji(h,$,H)}return h}function xk(n,i){return nn(n,Cd(n),i)}function Ik(n,i){return nn(n,w2(n),i)}function zs(n,i){return function(h,m){var E=Ge(h)?P_:Yy,I=i?i():{};return E(h,n,Le(m,2),I)}}function ai(n){return je(function(i,h){var m=-1,E=h.length,I=E>1?h[E-1]:r,R=E>2?h[2]:r;for(I=n.length>3&&typeof I=="function"?(E--,I):r,R&&Qt(h[0],h[1],R)&&(I=E<3?r:I,E=1),i=at(i);++m<E;){var $=h[m];$&&n(i,$,m,I)}return i})}function s2(n,i){return function(h,m){if(h==null)return h;if(!ar(h))return n(h,m);for(var E=h.length,I=i?E:-1,R=at(h);(i?I--:++I<E)&&m(R[I],I,R)!==!1;);return h}}function l2(n){return function(i,h,m){for(var E=-1,I=at(i),R=m(i),$=R.length;$--;){var H=R[n?$:++E];if(h(I[H],H,I)===!1)break}return i}}function Ck(n,i,h){var m=i&S,E=na(n);function I(){return(this&&this!==Bt&&this instanceof I?E:n).apply(m?h:this,arguments)}return I}function c2(n){return function(i){i=ot(i);var h=ei(i)?Vr(i):r,m=h?h[0]:i.charAt(0),E=h?Yn(h,1).join(""):i.slice(1);return m[n]()+E}}function si(n){return function(i){return Zc(lp(sp(i).replace(__,"")),n,"")}}function na(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var h=ii(n.prototype),m=n.apply(h,i);return yt(m)?m:h}}function Ok(n,i,h){var m=na(n);function E(){for(var I=arguments.length,R=Z(I),$=I,H=li(E);$--;)R[$]=arguments[$];var ie=I<3&&R[0]!==H&&R[I-1]!==H?[]:Un(R,H);return I-=ie.length,I<h?p2(n,i,Bs,E.placeholder,r,R,ie,r,r,h-I):yr(this&&this!==Bt&&this instanceof E?m:n,this,R)}return E}function d2(n){return function(i,h,m){var E=at(i);if(!ar(i)){var I=Le(h,3);i=Nt(i),h=function($){return I(E[$],$,E)}}var R=n(i,h,m);return R>-1?E[I?i[R]:R]:r}}function u2(n){return _n(function(i){var h=i.length,m=h,E=$r.prototype.thru;for(n&&i.reverse();m--;){var I=i[m];if(typeof I!="function")throw new Pr(l);if(E&&!R&&Gs(I)=="wrapper")var R=new $r([],!0)}for(m=R?m:h;++m<h;){I=i[m];var $=Gs(I),H=$=="wrapper"?xd(I):r;H&&Td(H[0])&&H[1]==(ne|T|j|F)&&!H[4].length&&H[9]==1?R=R[Gs(H[0])].apply(R,H[3]):R=I.length==1&&Td(I)?R[$]():R.thru(I)}return function(){var ie=arguments,re=ie[0];if(R&&ie.length==1&&Ge(re))return R.plant(re).value();for(var ce=0,be=h?i[ce].apply(this,ie):re;++ce<h;)be=i[ce].call(this,be);return be}})}function Bs(n,i,h,m,E,I,R,$,H,ie){var re=i&ne,ce=i&S,be=i&A,Ee=i&(T|D),Oe=i&pe,Ne=be?r:na(n);function Te(){for(var st=arguments.length,Ye=Z(st),er=st;er--;)Ye[er]=arguments[er];if(Ee)var on=li(Te),Jn=W_(Ye,on);if(m&&(Ye=i2(Ye,m,E,Ee)),I&&(Ye=a2(Ye,I,R,Ee)),st-=Jn,Ee&&st<ie){var xt=Un(Ye,on);return p2(n,i,Bs,Te.placeholder,h,Ye,xt,$,H,ie-st)}var Kr=ce?h:this,Sn=be?Kr[n]:n;return st=Ye.length,$?Ye=Yk(Ye,$):Oe&&st>1&&Ye.reverse(),re&&H<st&&(Ye.length=H),this&&this!==Bt&&this instanceof Te&&(Sn=Ne||na(Sn)),Sn.apply(Kr,Ye)}return Te}function h2(n,i){return function(h,m){return ok(h,n,i(m),{})}}function Ns(n,i){return function(h,m){var E;if(h===r&&m===r)return i;if(h!==r&&(E=h),m!==r){if(E===r)return m;typeof h=="string"||typeof m=="string"?(h=Sr(h),m=Sr(m)):(h=Xf(h),m=Xf(m)),E=n(h,m)}return E}}function Ed(n){return _n(function(i){return i=gt(i,Er(Le())),je(function(h){var m=this;return n(i,function(E){return yr(E,m,h)})})})}function Hs(n,i){i=i===r?" ":Sr(i);var h=i.length;if(h<2)return h?gd(i,n):i;var m=gd(i,As(n/ti(i)));return ei(i)?Yn(Vr(m),0,n).join(""):m.slice(0,n)}function Tk(n,i,h,m){var E=i&S,I=na(n);function R(){for(var $=-1,H=arguments.length,ie=-1,re=m.length,ce=Z(re+H),be=this&&this!==Bt&&this instanceof R?I:n;++ie<re;)ce[ie]=m[ie];for(;H--;)ce[ie++]=arguments[++$];return yr(be,E?h:this,ce)}return R}function f2(n){return function(i,h,m){return m&&typeof m!="number"&&Qt(i,h,m)&&(h=m=r),i=En(i),h===r?(h=i,i=0):h=En(h),m=m===r?i<h?1:-1:En(m),gk(i,h,m,n)}}function Fs(n){return function(i,h){return typeof i=="string"&&typeof h=="string"||(i=Nr(i),h=Nr(h)),n(i,h)}}function p2(n,i,h,m,E,I,R,$,H,ie){var re=i&T,ce=re?R:r,be=re?r:R,Ee=re?I:r,Oe=re?r:I;i|=re?j:V,i&=~(re?V:j),i&O||(i&=~(S|A));var Ne=[n,i,E,Ee,ce,Oe,be,$,H,ie],Te=h.apply(r,Ne);return Td(n)&&A2(Te,Ne),Te.placeholder=m,x2(Te,n,i)}function Sd(n){var i=$t[n];return function(h,m){if(h=Nr(h),m=m==null?0:qt(We(m),292),m&&xf(h)){var E=(ot(h)+"e").split("e");return E=(ot(i(E[0]+"e"+(+E[1]+m)))+"e").split("e"),+(E[0]+"e"+(+E[1]-m))}return i(h)}}var Lk=ni&&1/gs(new ni([,-0]))[1]==Re?function(n){return new ni(n)}:Zd;function m2(n){return function(i){var h=Zt(i);return h==Q?ed(i):h==G?Y_(i):G_(i,n(i))}}function wn(n,i,h,m,E,I,R,$){var H=i&A;if(!H&&typeof n!="function")throw new Pr(l);var ie=m?m.length:0;if(ie||(i&=~(j|V),m=E=r),R=R===r?R:Dt(We(R),0),$=$===r?$:We($),ie-=E?E.length:0,i&V){var re=m,ce=E;m=E=r}var be=H?r:xd(n),Ee=[n,i,h,m,E,re,ce,I,R,$];if(be&&Zk(Ee,be),n=Ee[0],i=Ee[1],h=Ee[2],m=Ee[3],E=Ee[4],$=Ee[9]=Ee[9]===r?H?0:n.length:Dt(Ee[9]-ie,0),!$&&i&(T|D)&&(i&=~(T|D)),!i||i==S)var Oe=Ck(n,i,h);else i==T||i==D?Oe=Ok(n,i,$):(i==j||i==(S|j))&&!E.length?Oe=Tk(n,i,h,m):Oe=Bs.apply(r,Ee);return x2((be?Kf:A2)(Oe,Ee),n,i)}function g2(n,i,h,m){return n===r||jr(n,ri[h])&&!nt.call(m,h)?i:n}function v2(n,i,h,m,E,I){return yt(n)&&yt(i)&&(I.set(i,n),Ps(n,i,r,v2,I),I.delete(i)),n}function Rk(n){return aa(n)?r:n}function b2(n,i,h,m,E,I){var R=h&y,$=n.length,H=i.length;if($!=H&&!(R&&H>$))return!1;var ie=I.get(n),re=I.get(i);if(ie&&re)return ie==i&&re==n;var ce=-1,be=!0,Ee=h&_?new vo:r;for(I.set(n,i),I.set(i,n);++ce<$;){var Oe=n[ce],Ne=i[ce];if(m)var Te=R?m(Ne,Oe,ce,i,n,I):m(Oe,Ne,ce,n,i,I);if(Te!==r){if(Te)continue;be=!1;break}if(Ee){if(!jc(i,function(st,Ye){if(!qi(Ee,Ye)&&(Oe===st||E(Oe,st,h,m,I)))return Ee.push(Ye)})){be=!1;break}}else if(!(Oe===Ne||E(Oe,Ne,h,m,I))){be=!1;break}}return I.delete(n),I.delete(i),be}function Pk(n,i,h,m,E,I,R){switch(h){case Pt:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case Ve:return!(n.byteLength!=i.byteLength||!I(new ks(n),new ks(i)));case Ue:case mt:case K:return jr(+n,+i);case Xt:return n.name==i.name&&n.message==i.message;case le:case ue:return n==i+"";case Q:var $=ed;case G:var H=m&y;if($||($=gs),n.size!=i.size&&!H)return!1;var ie=R.get(n);if(ie)return ie==i;m|=_,R.set(n,i);var re=b2($(n),$(i),m,E,I,R);return R.delete(n),re;case ve:if(Xi)return Xi.call(n)==Xi.call(i)}return!1}function $k(n,i,h,m,E,I){var R=h&y,$=Md(n),H=$.length;if(H!=Md(i).length&&!R)return!1;for(var ie=H;ie--;){var re=$[ie];if(!(R?re in i:nt.call(i,re)))return!1}var ce=I.get(n),be=I.get(i);if(ce&&be)return ce==i&&be==n;var Ee=!0;I.set(n,i),I.set(i,n);for(var Oe=R;++ie<H;){re=$[ie];var Ne=n[re],Te=i[re];if(m)var st=R?m(Te,Ne,re,i,n,I):m(Ne,Te,re,n,i,I);if(!(st===r?Ne===Te||E(Ne,Te,h,m,I):st)){Ee=!1;break}Oe||(Oe=re=="constructor")}if(Ee&&!Oe){var Ye=n.constructor,er=i.constructor;Ye!=er&&"constructor"in n&&"constructor"in i&&!(typeof Ye=="function"&&Ye instanceof Ye&&typeof er=="function"&&er instanceof er)&&(Ee=!1)}return I.delete(n),I.delete(i),Ee}function _n(n){return Rd(S2(n,r,R2),n+"")}function Md(n){return Bf(n,Nt,Cd)}function Ad(n){return Bf(n,sr,w2)}var xd=Is?function(n){return Is.get(n)}:Zd;function Gs(n){for(var i=n.name+"",h=oi[i],m=nt.call(oi,i)?h.length:0;m--;){var E=h[m],I=E.func;if(I==null||I==n)return E.name}return i}function li(n){return(nt.call(x,"placeholder")?x:n).placeholder}function Le(){var n=x.iteratee||Vd;return n=n===Vd?Ff:n,arguments.length?n(arguments[0],arguments[1]):n}function Ws(n,i){var h=n.__data__;return Wk(i)?h[typeof i=="string"?"string":"hash"]:h.map}function Id(n){for(var i=Nt(n),h=i.length;h--;){var m=i[h],E=n[m];i[h]=[m,E,k2(E)]}return i}function _o(n,i){var h=Z_(n,i);return Hf(h)?h:r}function Dk(n){var i=nt.call(n,mo),h=n[mo];try{n[mo]=r;var m=!0}catch{}var E=_s.call(n);return m&&(i?n[mo]=h:delete n[mo]),E}var Cd=rd?function(n){return n==null?[]:(n=at(n),Gn(rd(n),function(i){return Mf.call(n,i)}))}:jd,w2=rd?function(n){for(var i=[];n;)Wn(i,Cd(n)),n=Es(n);return i}:jd,Zt=Jt;(nd&&Zt(new nd(new ArrayBuffer(1)))!=Pt||ji&&Zt(new ji)!=Q||od&&Zt(od.resolve())!=N||ni&&Zt(new ni)!=G||Ki&&Zt(new Ki)!=Me)&&(Zt=function(n){var i=Jt(n),h=i==C?n.constructor:r,m=h?yo(h):"";if(m)switch(m){case by:return Pt;case wy:return Q;case _y:return N;case yy:return G;case ky:return Me}return i});function zk(n,i,h){for(var m=-1,E=h.length;++m<E;){var I=h[m],R=I.size;switch(I.type){case"drop":n+=R;break;case"dropRight":i-=R;break;case"take":i=qt(i,n+R);break;case"takeRight":n=Dt(n,i-R)}}return{start:n,end:i}}function Bk(n){var i=n.match(K8);return i?i[1].split(Y8):[]}function _2(n,i,h){i=Kn(i,n);for(var m=-1,E=i.length,I=!1;++m<E;){var R=Zr(i[m]);if(!(I=n!=null&&h(n,R)))break;n=n[R]}return I||++m!=E?I:(E=n==null?0:n.length,!!E&&Ys(E)&&yn(R,E)&&(Ge(n)||ko(n)))}function Nk(n){var i=n.length,h=new n.constructor(i);return i&&typeof n[0]=="string"&&nt.call(n,"index")&&(h.index=n.index,h.input=n.input),h}function y2(n){return typeof n.constructor=="function"&&!oa(n)?ii(Es(n)):{}}function Hk(n,i,h){var m=n.constructor;switch(i){case Ve:return kd(n);case Ue:case mt:return new m(+n);case Pt:return Ek(n,h);case mn:case or:case gn:case ht:case Hn:case ho:case _r:case Xo:case Vi:return n2(n,h);case Q:return new m;case K:case ue:return new m(n);case le:return Sk(n);case G:return new m;case ve:return Mk(n)}}function Fk(n,i){var h=i.length;if(!h)return n;var m=h-1;return i[m]=(h>1?"& ":"")+i[m],i=i.join(h>2?", ":" "),n.replace(j8,`{
/* [wrapped with `+i+`] */
`)}function Gk(n){return Ge(n)||ko(n)||!!(Af&&n&&n[Af])}function yn(n,i){var h=typeof n;return i=i??ae,!!i&&(h=="number"||h!="symbol"&&o_.test(n))&&n>-1&&n%1==0&&n<i}function Qt(n,i,h){if(!yt(h))return!1;var m=typeof i;return(m=="number"?ar(h)&&yn(i,h.length):m=="string"&&i in h)?jr(h[i],n):!1}function Od(n,i){if(Ge(n))return!1;var h=typeof n;return h=="number"||h=="symbol"||h=="boolean"||n==null||Mr(n)?!0:U8.test(n)||!W8.test(n)||i!=null&&n in at(i)}function Wk(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Td(n){var i=Gs(n),h=x[i];if(typeof h!="function"||!(i in Ke.prototype))return!1;if(n===h)return!0;var m=xd(h);return!!m&&n===m[0]}function Uk(n){return!!kf&&kf in n}var Vk=bs?kn:Kd;function oa(n){var i=n&&n.constructor;return n===(typeof i=="function"&&i.prototype||ri)}function k2(n){return n===n&&!yt(n)}function E2(n,i){return function(h){return h==null?!1:h[n]===i&&(i!==r||n in at(h))}}function qk(n){var i=js(n,function(m){return h.size===p&&h.clear(),m}),h=i.cache;return i}function Zk(n,i){var h=n[1],m=i[1],E=h|m,I=E<(S|A|ne),R=m==ne&&h==T||m==ne&&h==F&&n[7].length<=i[8]||m==(ne|F)&&i[7].length<=i[8]&&h==T;if(!(I||R))return n;m&S&&(n[2]=i[2],E|=h&S?0:O);var $=i[3];if($){var H=n[3];n[3]=H?i2(H,$,i[4]):$,n[4]=H?Un(n[3],v):i[4]}return $=i[5],$&&(H=n[5],n[5]=H?a2(H,$,i[6]):$,n[6]=H?Un(n[5],v):i[6]),$=i[7],$&&(n[7]=$),m&ne&&(n[8]=n[8]==null?i[8]:qt(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=E,n}function jk(n){var i=[];if(n!=null)for(var h in at(n))i.push(h);return i}function Kk(n){return _s.call(n)}function S2(n,i,h){return i=Dt(i===r?n.length-1:i,0),function(){for(var m=arguments,E=-1,I=Dt(m.length-i,0),R=Z(I);++E<I;)R[E]=m[i+E];E=-1;for(var $=Z(i+1);++E<i;)$[E]=m[E];return $[i]=h(R),yr(n,this,$)}}function M2(n,i){return i.length<2?n:wo(n,zr(i,0,-1))}function Yk(n,i){for(var h=n.length,m=qt(i.length,h),E=ir(n);m--;){var I=i[m];n[m]=yn(I,h)?E[I]:r}return n}function Ld(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var A2=I2(Kf),ia=uy||function(n,i){return Bt.setTimeout(n,i)},Rd=I2(wk);function x2(n,i,h){var m=i+"";return Rd(n,Fk(m,Xk(Bk(m),h)))}function I2(n){var i=0,h=0;return function(){var m=my(),E=M-(m-h);if(h=m,E>0){if(++i>=J)return arguments[0]}else i=0;return n.apply(r,arguments)}}function Us(n,i){var h=-1,m=n.length,E=m-1;for(i=i===r?m:i;++h<i;){var I=md(h,E),R=n[I];n[I]=n[h],n[h]=R}return n.length=i,n}var C2=qk(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(V8,function(h,m,E,I){i.push(E?I.replace(J8,"$1"):m||h)}),i});function Zr(n){if(typeof n=="string"||Mr(n))return n;var i=n+"";return i=="0"&&1/n==-1/0?"-0":i}function yo(n){if(n!=null){try{return ws.call(n)}catch{}try{return n+""}catch{}}return""}function Xk(n,i){return kr(me,function(h){var m="_."+h[0];i&h[1]&&!ps(n,m)&&n.push(m)}),n.sort()}function O2(n){if(n instanceof Ke)return n.clone();var i=new $r(n.__wrapped__,n.__chain__);return i.__actions__=ir(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function Jk(n,i,h){(h?Qt(n,i,h):i===r)?i=1:i=Dt(We(i),0);var m=n==null?0:n.length;if(!m||i<1)return[];for(var E=0,I=0,R=Z(As(m/i));E<m;)R[I++]=zr(n,E,E+=i);return R}function Qk(n){for(var i=-1,h=n==null?0:n.length,m=0,E=[];++i<h;){var I=n[i];I&&(E[m++]=I)}return E}function eE(){var n=arguments.length;if(!n)return[];for(var i=Z(n-1),h=arguments[0],m=n;m--;)i[m-1]=arguments[m];return Wn(Ge(h)?ir(h):[h],Wt(i,1))}var tE=je(function(n,i){return At(n)?Qi(n,Wt(i,1,At,!0)):[]}),rE=je(function(n,i){var h=Br(i);return At(h)&&(h=r),At(n)?Qi(n,Wt(i,1,At,!0),Le(h,2)):[]}),nE=je(function(n,i){var h=Br(i);return At(h)&&(h=r),At(n)?Qi(n,Wt(i,1,At,!0),r,h):[]});function oE(n,i,h){var m=n==null?0:n.length;return m?(i=h||i===r?1:We(i),zr(n,i<0?0:i,m)):[]}function iE(n,i,h){var m=n==null?0:n.length;return m?(i=h||i===r?1:We(i),i=m-i,zr(n,0,i<0?0:i)):[]}function aE(n,i){return n&&n.length?Ds(n,Le(i,3),!0,!0):[]}function sE(n,i){return n&&n.length?Ds(n,Le(i,3),!0):[]}function lE(n,i,h,m){var E=n==null?0:n.length;return E?(h&&typeof h!="number"&&Qt(n,i,h)&&(h=0,m=E),ek(n,i,h,m)):[]}function T2(n,i,h){var m=n==null?0:n.length;if(!m)return-1;var E=h==null?0:We(h);return E<0&&(E=Dt(m+E,0)),ms(n,Le(i,3),E)}function L2(n,i,h){var m=n==null?0:n.length;if(!m)return-1;var E=m-1;return h!==r&&(E=We(h),E=h<0?Dt(m+E,0):qt(E,m-1)),ms(n,Le(i,3),E,!0)}function R2(n){return n!=null&&n.length?Wt(n,1):[]}function cE(n){return n!=null&&n.length?Wt(n,Re):[]}function dE(n,i){return n!=null&&n.length?(i=i===r?1:We(i),Wt(n,i)):[]}function uE(n){for(var i=-1,h=n==null?0:n.length,m={};++i<h;){var E=n[i];tn(m,E[0],E[1])}return m}function P2(n){return n&&n.length?n[0]:r}function hE(n,i,h){var m=n==null?0:n.length;if(!m)return-1;var E=h==null?0:We(h);return E<0&&(E=Dt(m+E,0)),Qo(n,i,E)}function fE(n){return n!=null&&n.length?zr(n,0,-1):[]}var pE=je(function(n){var i=gt(n,_d);return i.length&&i[0]===n[0]?dd(i):[]}),mE=je(function(n){var i=Br(n),h=gt(n,_d);return i===Br(h)?i=r:h.pop(),h.length&&h[0]===n[0]?dd(h,Le(i,2)):[]}),gE=je(function(n){var i=Br(n),h=gt(n,_d);return i=typeof i=="function"?i:r,i&&h.pop(),h.length&&h[0]===n[0]?dd(h,r,i):[]});function vE(n,i){return n==null?"":fy.call(n,i)}function Br(n){var i=n==null?0:n.length;return i?n[i-1]:r}function bE(n,i,h){var m=n==null?0:n.length;if(!m)return-1;var E=m;return h!==r&&(E=We(h),E=E<0?Dt(m+E,0):qt(E,m-1)),i===i?J_(n,i,E):ms(n,pf,E,!0)}function wE(n,i){return n&&n.length?Vf(n,We(i)):r}var _E=je($2);function $2(n,i){return n&&n.length&&i&&i.length?pd(n,i):n}function yE(n,i,h){return n&&n.length&&i&&i.length?pd(n,i,Le(h,2)):n}function kE(n,i,h){return n&&n.length&&i&&i.length?pd(n,i,r,h):n}var EE=_n(function(n,i){var h=n==null?0:n.length,m=ad(n,i);return jf(n,gt(i,function(E){return yn(E,h)?+E:E}).sort(o2)),m});function SE(n,i){var h=[];if(!(n&&n.length))return h;var m=-1,E=[],I=n.length;for(i=Le(i,3);++m<I;){var R=n[m];i(R,m,n)&&(h.push(R),E.push(m))}return jf(n,E),h}function Pd(n){return n==null?n:vy.call(n)}function ME(n,i,h){var m=n==null?0:n.length;return m?(h&&typeof h!="number"&&Qt(n,i,h)?(i=0,h=m):(i=i==null?0:We(i),h=h===r?m:We(h)),zr(n,i,h)):[]}function AE(n,i){return $s(n,i)}function xE(n,i,h){return vd(n,i,Le(h,2))}function IE(n,i){var h=n==null?0:n.length;if(h){var m=$s(n,i);if(m<h&&jr(n[m],i))return m}return-1}function CE(n,i){return $s(n,i,!0)}function OE(n,i,h){return vd(n,i,Le(h,2),!0)}function TE(n,i){if(n!=null&&n.length){var h=$s(n,i,!0)-1;if(jr(n[h],i))return h}return-1}function LE(n){return n&&n.length?Yf(n):[]}function RE(n,i){return n&&n.length?Yf(n,Le(i,2)):[]}function PE(n){var i=n==null?0:n.length;return i?zr(n,1,i):[]}function $E(n,i,h){return n&&n.length?(i=h||i===r?1:We(i),zr(n,0,i<0?0:i)):[]}function DE(n,i,h){var m=n==null?0:n.length;return m?(i=h||i===r?1:We(i),i=m-i,zr(n,i<0?0:i,m)):[]}function zE(n,i){return n&&n.length?Ds(n,Le(i,3),!1,!0):[]}function BE(n,i){return n&&n.length?Ds(n,Le(i,3)):[]}var NE=je(function(n){return jn(Wt(n,1,At,!0))}),HE=je(function(n){var i=Br(n);return At(i)&&(i=r),jn(Wt(n,1,At,!0),Le(i,2))}),FE=je(function(n){var i=Br(n);return i=typeof i=="function"?i:r,jn(Wt(n,1,At,!0),r,i)});function GE(n){return n&&n.length?jn(n):[]}function WE(n,i){return n&&n.length?jn(n,Le(i,2)):[]}function UE(n,i){return i=typeof i=="function"?i:r,n&&n.length?jn(n,r,i):[]}function $d(n){if(!(n&&n.length))return[];var i=0;return n=Gn(n,function(h){if(At(h))return i=Dt(h.length,i),!0}),Jc(i,function(h){return gt(n,Kc(h))})}function D2(n,i){if(!(n&&n.length))return[];var h=$d(n);return i==null?h:gt(h,function(m){return yr(i,r,m)})}var VE=je(function(n,i){return At(n)?Qi(n,i):[]}),qE=je(function(n){return wd(Gn(n,At))}),ZE=je(function(n){var i=Br(n);return At(i)&&(i=r),wd(Gn(n,At),Le(i,2))}),jE=je(function(n){var i=Br(n);return i=typeof i=="function"?i:r,wd(Gn(n,At),r,i)}),KE=je($d);function YE(n,i){return e2(n||[],i||[],Ji)}function XE(n,i){return e2(n||[],i||[],ra)}var JE=je(function(n){var i=n.length,h=i>1?n[i-1]:r;return h=typeof h=="function"?(n.pop(),h):r,D2(n,h)});function z2(n){var i=x(n);return i.__chain__=!0,i}function QE(n,i){return i(n),n}function Vs(n,i){return i(n)}var eS=_n(function(n){var i=n.length,h=i?n[0]:0,m=this.__wrapped__,E=function(I){return ad(I,n)};return i>1||this.__actions__.length||!(m instanceof Ke)||!yn(h)?this.thru(E):(m=m.slice(h,+h+(i?1:0)),m.__actions__.push({func:Vs,args:[E],thisArg:r}),new $r(m,this.__chain__).thru(function(I){return i&&!I.length&&I.push(r),I}))});function tS(){return z2(this)}function rS(){return new $r(this.value(),this.__chain__)}function nS(){this.__values__===r&&(this.__values__=X2(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function oS(){return this}function iS(n){for(var i,h=this;h instanceof Os;){var m=O2(h);m.__index__=0,m.__values__=r,i?E.__wrapped__=m:i=m;var E=m;h=h.__wrapped__}return E.__wrapped__=n,i}function aS(){var n=this.__wrapped__;if(n instanceof Ke){var i=n;return this.__actions__.length&&(i=new Ke(this)),i=i.reverse(),i.__actions__.push({func:Vs,args:[Pd],thisArg:r}),new $r(i,this.__chain__)}return this.thru(Pd)}function sS(){return Qf(this.__wrapped__,this.__actions__)}var lS=zs(function(n,i,h){nt.call(n,h)?++n[h]:tn(n,h,1)});function cS(n,i,h){var m=Ge(n)?hf:Qy;return h&&Qt(n,i,h)&&(i=r),m(n,Le(i,3))}function dS(n,i){return(Ge(n)?Gn:Df)(n,Le(i,3))}var uS=d2(T2),hS=d2(L2);function fS(n,i){return Wt(qs(n,i),1)}function pS(n,i){return Wt(qs(n,i),Re)}function mS(n,i,h){return h=h===r?1:We(h),Wt(qs(n,i),h)}function B2(n,i){return(Ge(n)?kr:Zn)(n,Le(i,3))}function N2(n,i){return(Ge(n)?$_:$f)(n,Le(i,3))}var gS=zs(function(n,i,h){nt.call(n,h)?n[h].push(i):tn(n,h,[i])});function vS(n,i,h,m){n=ar(n)?n:di(n),h=h&&!m?We(h):0;var E=n.length;return h<0&&(h=Dt(E+h,0)),Xs(n)?h<=E&&n.indexOf(i,h)>-1:!!E&&Qo(n,i,h)>-1}var bS=je(function(n,i,h){var m=-1,E=typeof i=="function",I=ar(n)?Z(n.length):[];return Zn(n,function(R){I[++m]=E?yr(i,R,h):ea(R,i,h)}),I}),wS=zs(function(n,i,h){tn(n,h,i)});function qs(n,i){return(Ge(n)?gt:Gf)(n,Le(i,3))}function _S(n,i,h,m){return n==null?[]:(Ge(i)||(i=i==null?[]:[i]),h=m?r:h,Ge(h)||(h=h==null?[]:[h]),qf(n,i,h))}var yS=zs(function(n,i,h){n[h?0:1].push(i)},function(){return[[],[]]});function kS(n,i,h){var m=Ge(n)?Zc:gf,E=arguments.length<3;return m(n,Le(i,4),h,E,Zn)}function ES(n,i,h){var m=Ge(n)?D_:gf,E=arguments.length<3;return m(n,Le(i,4),h,E,$f)}function SS(n,i){return(Ge(n)?Gn:Df)(n,Ks(Le(i,3)))}function MS(n){return(Ge(n)?Tf:vk)(n)}function AS(n,i,h){return(h?Qt(n,i,h):i===r)?i=1:i=We(i),(Ge(n)?jy:bk)(n,i)}function xS(n){return(Ge(n)?Ky:_k)(n)}function IS(n){if(n==null)return 0;if(ar(n))return Xs(n)?ti(n):n.length;var i=Zt(n);return i==Q||i==G?n.size:hd(n).length}function CS(n,i,h){var m=Ge(n)?jc:yk;return h&&Qt(n,i,h)&&(i=r),m(n,Le(i,3))}var OS=je(function(n,i){if(n==null)return[];var h=i.length;return h>1&&Qt(n,i[0],i[1])?i=[]:h>2&&Qt(i[0],i[1],i[2])&&(i=[i[0]]),qf(n,Wt(i,1),[])}),Zs=dy||function(){return Bt.Date.now()};function TS(n,i){if(typeof i!="function")throw new Pr(l);return n=We(n),function(){if(--n<1)return i.apply(this,arguments)}}function H2(n,i,h){return i=h?r:i,i=n&&i==null?n.length:i,wn(n,ne,r,r,r,r,i)}function F2(n,i){var h;if(typeof i!="function")throw new Pr(l);return n=We(n),function(){return--n>0&&(h=i.apply(this,arguments)),n<=1&&(i=r),h}}var Dd=je(function(n,i,h){var m=S;if(h.length){var E=Un(h,li(Dd));m|=j}return wn(n,m,i,h,E)}),G2=je(function(n,i,h){var m=S|A;if(h.length){var E=Un(h,li(G2));m|=j}return wn(i,m,n,h,E)});function W2(n,i,h){i=h?r:i;var m=wn(n,T,r,r,r,r,r,i);return m.placeholder=W2.placeholder,m}function U2(n,i,h){i=h?r:i;var m=wn(n,D,r,r,r,r,r,i);return m.placeholder=U2.placeholder,m}function V2(n,i,h){var m,E,I,R,$,H,ie=0,re=!1,ce=!1,be=!0;if(typeof n!="function")throw new Pr(l);i=Nr(i)||0,yt(h)&&(re=!!h.leading,ce="maxWait"in h,I=ce?Dt(Nr(h.maxWait)||0,i):I,be="trailing"in h?!!h.trailing:be);function Ee(xt){var Kr=m,Sn=E;return m=E=r,ie=xt,R=n.apply(Sn,Kr),R}function Oe(xt){return ie=xt,$=ia(st,i),re?Ee(xt):R}function Ne(xt){var Kr=xt-H,Sn=xt-ie,up=i-Kr;return ce?qt(up,I-Sn):up}function Te(xt){var Kr=xt-H,Sn=xt-ie;return H===r||Kr>=i||Kr<0||ce&&Sn>=I}function st(){var xt=Zs();if(Te(xt))return Ye(xt);$=ia(st,Ne(xt))}function Ye(xt){return $=r,be&&m?Ee(xt):(m=E=r,R)}function er(){$!==r&&t2($),ie=0,m=H=E=$=r}function on(){return $===r?R:Ye(Zs())}function Jn(){var xt=Zs(),Kr=Te(xt);if(m=arguments,E=this,H=xt,Kr){if($===r)return Oe(H);if(ce)return t2($),$=ia(st,i),Ee(H)}return $===r&&($=ia(st,i)),R}return Jn.cancel=er,Jn.flush=on,Jn}var LS=je(function(n,i){return Pf(n,1,i)}),RS=je(function(n,i,h){return Pf(n,Nr(i)||0,h)});function PS(n){return wn(n,pe)}function js(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new Pr(l);var h=function(){var m=arguments,E=i?i.apply(this,m):m[0],I=h.cache;if(I.has(E))return I.get(E);var R=n.apply(this,m);return h.cache=I.set(E,R)||I,R};return h.cache=new(js.Cache||bn),h}js.Cache=bn;function Ks(n){if(typeof n!="function")throw new Pr(l);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function $S(n){return F2(2,n)}var DS=kk(function(n,i){i=i.length==1&&Ge(i[0])?gt(i[0],Er(Le())):gt(Wt(i,1),Er(Le()));var h=i.length;return je(function(m){for(var E=-1,I=qt(m.length,h);++E<I;)m[E]=i[E].call(this,m[E]);return yr(n,this,m)})}),zd=je(function(n,i){return wn(n,j,r,i,Un(i,li(zd)))}),q2=je(function(n,i){return wn(n,V,r,i,Un(i,li(q2)))}),zS=_n(function(n,i){return wn(n,F,r,r,r,i)});function BS(n,i){if(typeof n!="function")throw new Pr(l);return i=i===r?i:We(i),je(n,i)}function NS(n,i){if(typeof n!="function")throw new Pr(l);return i=i==null?0:Dt(We(i),0),je(function(h){var m=h[i],E=Yn(h,0,i);return m&&Wn(E,m),yr(n,this,E)})}function HS(n,i,h){var m=!0,E=!0;if(typeof n!="function")throw new Pr(l);return yt(h)&&(m="leading"in h?!!h.leading:m,E="trailing"in h?!!h.trailing:E),V2(n,i,{leading:m,maxWait:i,trailing:E})}function FS(n){return H2(n,1)}function GS(n,i){return zd(yd(i),n)}function WS(){if(!arguments.length)return[];var n=arguments[0];return Ge(n)?n:[n]}function US(n){return Dr(n,b)}function VS(n,i){return i=typeof i=="function"?i:r,Dr(n,b,i)}function qS(n){return Dr(n,5)}function ZS(n,i){return i=typeof i=="function"?i:r,Dr(n,5,i)}function jS(n,i){return i==null||Rf(n,i,Nt(i))}function jr(n,i){return n===i||n!==n&&i!==i}var KS=Fs(cd),YS=Fs(function(n,i){return n>=i}),ko=Nf((function(){return arguments})())?Nf:function(n){return kt(n)&&nt.call(n,"callee")&&!Mf.call(n,"callee")},Ge=Z.isArray,XS=af?Er(af):ik;function ar(n){return n!=null&&Ys(n.length)&&!kn(n)}function At(n){return kt(n)&&ar(n)}function JS(n){return n===!0||n===!1||kt(n)&&Jt(n)==Ue}var Xn=hy||Kd,QS=sf?Er(sf):ak;function eM(n){return kt(n)&&n.nodeType===1&&!aa(n)}function tM(n){if(n==null)return!0;if(ar(n)&&(Ge(n)||typeof n=="string"||typeof n.splice=="function"||Xn(n)||ci(n)||ko(n)))return!n.length;var i=Zt(n);if(i==Q||i==G)return!n.size;if(oa(n))return!hd(n).length;for(var h in n)if(nt.call(n,h))return!1;return!0}function rM(n,i){return ta(n,i)}function nM(n,i,h){h=typeof h=="function"?h:r;var m=h?h(n,i):r;return m===r?ta(n,i,r,h):!!m}function Bd(n){if(!kt(n))return!1;var i=Jt(n);return i==Xt||i==_t||typeof n.message=="string"&&typeof n.name=="string"&&!aa(n)}function oM(n){return typeof n=="number"&&xf(n)}function kn(n){if(!yt(n))return!1;var i=Jt(n);return i==Vt||i==k||i==Ze||i==se}function Z2(n){return typeof n=="number"&&n==We(n)}function Ys(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ae}function yt(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function kt(n){return n!=null&&typeof n=="object"}var j2=lf?Er(lf):lk;function iM(n,i){return n===i||ud(n,i,Id(i))}function aM(n,i,h){return h=typeof h=="function"?h:r,ud(n,i,Id(i),h)}function sM(n){return K2(n)&&n!=+n}function lM(n){if(Vk(n))throw new Be(s);return Hf(n)}function cM(n){return n===null}function dM(n){return n==null}function K2(n){return typeof n=="number"||kt(n)&&Jt(n)==K}function aa(n){if(!kt(n)||Jt(n)!=C)return!1;var i=Es(n);if(i===null)return!0;var h=nt.call(i,"constructor")&&i.constructor;return typeof h=="function"&&h instanceof h&&ws.call(h)==ay}var Nd=cf?Er(cf):ck;function uM(n){return Z2(n)&&n>=-ae&&n<=ae}var Y2=df?Er(df):dk;function Xs(n){return typeof n=="string"||!Ge(n)&&kt(n)&&Jt(n)==ue}function Mr(n){return typeof n=="symbol"||kt(n)&&Jt(n)==ve}var ci=uf?Er(uf):uk;function hM(n){return n===r}function fM(n){return kt(n)&&Zt(n)==Me}function pM(n){return kt(n)&&Jt(n)==it}var mM=Fs(fd),gM=Fs(function(n,i){return n<=i});function X2(n){if(!n)return[];if(ar(n))return Xs(n)?Vr(n):ir(n);if(Zi&&n[Zi])return K_(n[Zi]());var i=Zt(n);return(i==Q?ed:i==G?gs:di)(n)}function En(n){return n?(n=Nr(n),n===Re||n===-1/0?(n<0?-1:1)*Ie:n===n?n:0):n===0?n:0}function We(n){var i=En(n),h=i%1;return i===i?h?i-h:i:0}function J2(n){return n?bo(We(n),0,W):0}function Nr(n){if(typeof n=="number")return n;if(Mr(n))return U;if(yt(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=yt(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=vf(n);var h=t_.test(n);return h||n_.test(n)?L_(n.slice(2),h?2:8):e_.test(n)?U:+n}function Q2(n){return nn(n,sr(n))}function vM(n){return n?bo(We(n),-ae,ae):n===0?n:0}function ot(n){return n==null?"":Sr(n)}var bM=ai(function(n,i){if(oa(i)||ar(i)){nn(i,Nt(i),n);return}for(var h in i)nt.call(i,h)&&Ji(n,h,i[h])}),ep=ai(function(n,i){nn(i,sr(i),n)}),tp=ai(function(n,i,h,m){nn(i,sr(i),n,m)}),Hd=ai(function(n,i,h,m){nn(i,Nt(i),n,m)}),wM=_n(ad);function _M(n,i){var h=ii(n);return i==null?h:Lf(h,i)}var yM=je(function(n,i){n=at(n);var h=-1,m=i.length,E=m>2?i[2]:r;for(E&&Qt(i[0],i[1],E)&&(m=1);++h<m;)for(var I=i[h],R=sr(I),$=-1,H=R.length;++$<H;){var ie=R[$],re=n[ie];(re===r||jr(re,ri[ie])&&!nt.call(n,ie))&&(n[ie]=I[ie])}return n}),kM=je(function(n){return n.push(r,v2),yr(rp,r,n)});function EM(n,i){return ff(n,Le(i,3),rn)}function SM(n,i){return ff(n,Le(i,3),ld)}function MM(n,i){return n==null?n:sd(n,Le(i,3),sr)}function AM(n,i){return n==null?n:zf(n,Le(i,3),sr)}function xM(n,i){return n&&rn(n,Le(i,3))}function IM(n,i){return n&&ld(n,Le(i,3))}function CM(n){return n==null?[]:Rs(n,Nt(n))}function OM(n){return n==null?[]:Rs(n,sr(n))}function Fd(n,i,h){var m=n==null?r:wo(n,i);return m===r?h:m}function TM(n,i){return n!=null&&_2(n,i,tk)}function Gd(n,i){return n!=null&&_2(n,i,rk)}var LM=h2(function(n,i,h){i!=null&&typeof i.toString!="function"&&(i=_s.call(i)),n[i]=h},Ud(lr)),RM=h2(function(n,i,h){i!=null&&typeof i.toString!="function"&&(i=_s.call(i)),nt.call(n,i)?n[i].push(h):n[i]=[h]},Le),PM=je(ea);function Nt(n){return ar(n)?Of(n):hd(n)}function sr(n){return ar(n)?Of(n,!0):hk(n)}function $M(n,i){var h={};return i=Le(i,3),rn(n,function(m,E,I){tn(h,i(m,E,I),m)}),h}function DM(n,i){var h={};return i=Le(i,3),rn(n,function(m,E,I){tn(h,E,i(m,E,I))}),h}var zM=ai(function(n,i,h){Ps(n,i,h)}),rp=ai(function(n,i,h,m){Ps(n,i,h,m)}),BM=_n(function(n,i){var h={};if(n==null)return h;var m=!1;i=gt(i,function(I){return I=Kn(I,n),m||(m=I.length>1),I}),nn(n,Ad(n),h),m&&(h=Dr(h,7,Rk));for(var E=i.length;E--;)bd(h,i[E]);return h});function NM(n,i){return np(n,Ks(Le(i)))}var HM=_n(function(n,i){return n==null?{}:pk(n,i)});function np(n,i){if(n==null)return{};var h=gt(Ad(n),function(m){return[m]});return i=Le(i),Zf(n,h,function(m,E){return i(m,E[0])})}function FM(n,i,h){i=Kn(i,n);var m=-1,E=i.length;for(E||(E=1,n=r);++m<E;){var I=n==null?r:n[Zr(i[m])];I===r&&(m=E,I=h),n=kn(I)?I.call(n):I}return n}function GM(n,i,h){return n==null?n:ra(n,i,h)}function WM(n,i,h,m){return m=typeof m=="function"?m:r,n==null?n:ra(n,i,h,m)}var op=m2(Nt),ip=m2(sr);function UM(n,i,h){var m=Ge(n),E=m||Xn(n)||ci(n);if(i=Le(i,4),h==null){var I=n&&n.constructor;E?h=m?new I:[]:yt(n)?h=kn(I)?ii(Es(n)):{}:h={}}return(E?kr:rn)(n,function(R,$,H){return i(h,R,$,H)}),h}function VM(n,i){return n==null?!0:bd(n,i)}function qM(n,i,h){return n==null?n:Jf(n,i,yd(h))}function ZM(n,i,h,m){return m=typeof m=="function"?m:r,n==null?n:Jf(n,i,yd(h),m)}function di(n){return n==null?[]:Qc(n,Nt(n))}function jM(n){return n==null?[]:Qc(n,sr(n))}function KM(n,i,h){return h===r&&(h=i,i=r),h!==r&&(h=Nr(h),h=h===h?h:0),i!==r&&(i=Nr(i),i=i===i?i:0),bo(Nr(n),i,h)}function YM(n,i,h){return i=En(i),h===r?(h=i,i=0):h=En(h),n=Nr(n),nk(n,i,h)}function XM(n,i,h){if(h&&typeof h!="boolean"&&Qt(n,i,h)&&(i=h=r),h===r&&(typeof i=="boolean"?(h=i,i=r):typeof n=="boolean"&&(h=n,n=r)),n===r&&i===r?(n=0,i=1):(n=En(n),i===r?(i=n,n=0):i=En(i)),n>i){var m=n;n=i,i=m}if(h||n%1||i%1){var E=If();return qt(n+E*(i-n+T_("1e-"+((E+"").length-1))),i)}return md(n,i)}var JM=si(function(n,i,h){return i=i.toLowerCase(),n+(h?ap(i):i)});function ap(n){return Wd(ot(n).toLowerCase())}function sp(n){return n=ot(n),n&&n.replace(i_,U_).replace(y_,"")}function QM(n,i,h){n=ot(n),i=Sr(i);var m=n.length;h=h===r?m:bo(We(h),0,m);var E=h;return h-=i.length,h>=0&&n.slice(h,E)==i}function eA(n){return n=ot(n),n&&H8.test(n)?n.replace(fo,V_):n}function tA(n){return n=ot(n),n&&q8.test(n)?n.replace(zc,"\\$&"):n}var rA=si(function(n,i,h){return n+(h?"-":"")+i.toLowerCase()}),nA=si(function(n,i,h){return n+(h?" ":"")+i.toLowerCase()}),oA=c2("toLowerCase");function iA(n,i,h){n=ot(n),i=We(i);var m=i?ti(n):0;if(!i||m>=i)return n;var E=(i-m)/2;return Hs(xs(E),h)+n+Hs(As(E),h)}function aA(n,i,h){n=ot(n),i=We(i);var m=i?ti(n):0;return i&&m<i?n+Hs(i-m,h):n}function sA(n,i,h){n=ot(n),i=We(i);var m=i?ti(n):0;return i&&m<i?Hs(i-m,h)+n:n}function lA(n,i,h){return h||i==null?i=0:i&&(i=+i),gy(ot(n).replace(Bc,""),i||0)}function cA(n,i,h){return(h?Qt(n,i,h):i===r)?i=1:i=We(i),gd(ot(n),i)}function dA(){var n=arguments,i=ot(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var uA=si(function(n,i,h){return n+(h?"_":"")+i.toLowerCase()});function hA(n,i,h){return h&&typeof h!="number"&&Qt(n,i,h)&&(i=h=r),h=h===r?W:h>>>0,h?(n=ot(n),n&&(typeof i=="string"||i!=null&&!Nd(i))&&(i=Sr(i),!i&&ei(n))?Yn(Vr(n),0,h):n.split(i,h)):[]}var fA=si(function(n,i,h){return n+(h?" ":"")+Wd(i)});function pA(n,i,h){return n=ot(n),h=h==null?0:bo(We(h),0,n.length),i=Sr(i),n.slice(h,h+i.length)==i}function mA(n,i,h){var m=x.templateSettings;h&&Qt(n,i,h)&&(i=r),n=ot(n),i=Hd({},i,m,g2);var E=Hd({},i.imports,m.imports,g2),I=Nt(E),R=Qc(E,I);kr(I,function(Te){if(z1.test(Te))throw new Be(c)});var $,H,ie=0,re=i.interpolate||us,ce="__p += '",be=td((i.escape||us).source+"|"+re.source+"|"+(re===D1?Q8:us).source+"|"+(i.evaluate||us).source+"|$","g"),Ee="//# sourceURL="+(nt.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++A_+"]")+`
`;n.replace(be,function(Te,st,Ye,er,on,Jn){return Ye||(Ye=er),ce+=n.slice(ie,Jn).replace(a_,q_),st&&($=!0,ce+=`' +
__e(`+st+`) +
'`),on&&(H=!0,ce+=`';
`+on+`;
__p += '`),Ye&&(ce+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),ie=Jn+Te.length,Te}),ce+=`';
`;var Oe=nt.call(i,"variable")&&i.variable;if(!Oe)ce=`with (obj) {
`+ce+`
}
`;else if(z1.test(Oe))throw new Be(u);ce=(H?ce.replace($c,""):ce).replace(Dc,"$1").replace(ds,"$1;"),ce="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var Ne=cp(function(){return tt(I,Ee+"return "+ce).apply(r,R)});if(Ne.source=ce,Bd(Ne))throw Ne;return Ne}function gA(n){return ot(n).toLowerCase()}function vA(n){return ot(n).toUpperCase()}function bA(n,i,h){if(n=ot(n),n&&(h||i===r))return vf(n);if(!n||!(i=Sr(i)))return n;var m=Vr(n),E=Vr(i);return Yn(m,bf(m,E),wf(m,E)+1).join("")}function wA(n,i,h){if(n=ot(n),n&&(h||i===r))return n.slice(0,yf(n)+1);if(!n||!(i=Sr(i)))return n;var m=Vr(n);return Yn(m,0,wf(m,Vr(i))+1).join("")}function _A(n,i,h){if(n=ot(n),n&&(h||i===r))return n.replace(Bc,"");if(!n||!(i=Sr(i)))return n;var m=Vr(n);return Yn(m,bf(m,Vr(i))).join("")}function yA(n,i){var h=ye,m=P;if(yt(i)){var E="separator"in i?i.separator:E;h="length"in i?We(i.length):h,m="omission"in i?Sr(i.omission):m}n=ot(n);var I=n.length;if(ei(n)){var R=Vr(n);I=R.length}if(h>=I)return n;var $=h-ti(m);if($<1)return m;var H=R?Yn(R,0,$).join(""):n.slice(0,$);if(E===r)return H+m;if(R&&($+=H.length-$),Nd(E)){if(n.slice($).search(E)){var ie,re=H;for(E.global||(E=td(E.source,ot(B1.exec(E))+"g")),E.lastIndex=0;ie=E.exec(re);)var ce=ie.index;H=H.slice(0,ce===r?$:ce)}}else if(n.indexOf(Sr(E),$)!=$){var be=H.lastIndexOf(E);be>-1&&(H=H.slice(0,be))}return H+m}function kA(n){return n=ot(n),n&&N8.test(n)?n.replace(Fn,Q_):n}var EA=si(function(n,i,h){return n+(h?" ":"")+i.toUpperCase()}),Wd=c2("toUpperCase");function lp(n,i,h){return n=ot(n),i=h?r:i,i===r?j_(n)?ry(n):N_(n):n.match(i)||[]}var cp=je(function(n,i){try{return yr(n,r,i)}catch(h){return Bd(h)?h:new Be(h)}}),SA=_n(function(n,i){return kr(i,function(h){h=Zr(h),tn(n,h,Dd(n[h],n))}),n});function MA(n){var i=n==null?0:n.length,h=Le();return n=i?gt(n,function(m){if(typeof m[1]!="function")throw new Pr(l);return[h(m[0]),m[1]]}):[],je(function(m){for(var E=-1;++E<i;){var I=n[E];if(yr(I[0],this,m))return yr(I[1],this,m)}})}function AA(n){return Jy(Dr(n,w))}function Ud(n){return function(){return n}}function xA(n,i){return n==null||n!==n?i:n}var IA=u2(),CA=u2(!0);function lr(n){return n}function Vd(n){return Ff(typeof n=="function"?n:Dr(n,w))}function OA(n){return Wf(Dr(n,w))}function TA(n,i){return Uf(n,Dr(i,w))}var LA=je(function(n,i){return function(h){return ea(h,n,i)}}),RA=je(function(n,i){return function(h){return ea(n,h,i)}});function qd(n,i,h){var m=Nt(i),E=Rs(i,m);h==null&&!(yt(i)&&(E.length||!m.length))&&(h=i,i=n,n=this,E=Rs(i,Nt(i)));var I=!(yt(h)&&"chain"in h)||!!h.chain,R=kn(n);return kr(E,function($){var H=i[$];n[$]=H,R&&(n.prototype[$]=function(){var ie=this.__chain__;if(I||ie){var re=n(this.__wrapped__);return(re.__actions__=ir(this.__actions__)).push({func:H,args:arguments,thisArg:n}),re.__chain__=ie,re}return H.apply(n,Wn([this.value()],arguments))})}),n}function PA(){return Bt._===this&&(Bt._=sy),this}function Zd(){}function $A(n){return n=We(n),je(function(i){return Vf(i,n)})}var DA=Ed(gt),zA=Ed(hf),BA=Ed(jc);function dp(n){return Od(n)?Kc(Zr(n)):mk(n)}function NA(n){return function(i){return n==null?r:wo(n,i)}}var HA=f2(),FA=f2(!0);function jd(){return[]}function Kd(){return!1}function GA(){return{}}function WA(){return""}function UA(){return!0}function VA(n,i){if(n=We(n),n<1||n>ae)return[];var h=W,m=qt(n,W);i=Le(i),n-=W;for(var E=Jc(m,i);++h<n;)i(h);return E}function qA(n){return Ge(n)?gt(n,Zr):Mr(n)?[n]:ir(C2(ot(n)))}function ZA(n){var i=++iy;return ot(n)+i}var jA=Ns(function(n,i){return n+i},0),KA=Sd("ceil"),YA=Ns(function(n,i){return n/i},1),XA=Sd("floor");function JA(n){return n&&n.length?Ls(n,lr,cd):r}function QA(n,i){return n&&n.length?Ls(n,Le(i,2),cd):r}function ex(n){return mf(n,lr)}function tx(n,i){return mf(n,Le(i,2))}function rx(n){return n&&n.length?Ls(n,lr,fd):r}function nx(n,i){return n&&n.length?Ls(n,Le(i,2),fd):r}var ox=Ns(function(n,i){return n*i},1),ix=Sd("round"),ax=Ns(function(n,i){return n-i},0);function sx(n){return n&&n.length?Xc(n,lr):0}function lx(n,i){return n&&n.length?Xc(n,Le(i,2)):0}return x.after=TS,x.ary=H2,x.assign=bM,x.assignIn=ep,x.assignInWith=tp,x.assignWith=Hd,x.at=wM,x.before=F2,x.bind=Dd,x.bindAll=SA,x.bindKey=G2,x.castArray=WS,x.chain=z2,x.chunk=Jk,x.compact=Qk,x.concat=eE,x.cond=MA,x.conforms=AA,x.constant=Ud,x.countBy=lS,x.create=_M,x.curry=W2,x.curryRight=U2,x.debounce=V2,x.defaults=yM,x.defaultsDeep=kM,x.defer=LS,x.delay=RS,x.difference=tE,x.differenceBy=rE,x.differenceWith=nE,x.drop=oE,x.dropRight=iE,x.dropRightWhile=aE,x.dropWhile=sE,x.fill=lE,x.filter=dS,x.flatMap=fS,x.flatMapDeep=pS,x.flatMapDepth=mS,x.flatten=R2,x.flattenDeep=cE,x.flattenDepth=dE,x.flip=PS,x.flow=IA,x.flowRight=CA,x.fromPairs=uE,x.functions=CM,x.functionsIn=OM,x.groupBy=gS,x.initial=fE,x.intersection=pE,x.intersectionBy=mE,x.intersectionWith=gE,x.invert=LM,x.invertBy=RM,x.invokeMap=bS,x.iteratee=Vd,x.keyBy=wS,x.keys=Nt,x.keysIn=sr,x.map=qs,x.mapKeys=$M,x.mapValues=DM,x.matches=OA,x.matchesProperty=TA,x.memoize=js,x.merge=zM,x.mergeWith=rp,x.method=LA,x.methodOf=RA,x.mixin=qd,x.negate=Ks,x.nthArg=$A,x.omit=BM,x.omitBy=NM,x.once=$S,x.orderBy=_S,x.over=DA,x.overArgs=DS,x.overEvery=zA,x.overSome=BA,x.partial=zd,x.partialRight=q2,x.partition=yS,x.pick=HM,x.pickBy=np,x.property=dp,x.propertyOf=NA,x.pull=_E,x.pullAll=$2,x.pullAllBy=yE,x.pullAllWith=kE,x.pullAt=EE,x.range=HA,x.rangeRight=FA,x.rearg=zS,x.reject=SS,x.remove=SE,x.rest=BS,x.reverse=Pd,x.sampleSize=AS,x.set=GM,x.setWith=WM,x.shuffle=xS,x.slice=ME,x.sortBy=OS,x.sortedUniq=LE,x.sortedUniqBy=RE,x.split=hA,x.spread=NS,x.tail=PE,x.take=$E,x.takeRight=DE,x.takeRightWhile=zE,x.takeWhile=BE,x.tap=QE,x.throttle=HS,x.thru=Vs,x.toArray=X2,x.toPairs=op,x.toPairsIn=ip,x.toPath=qA,x.toPlainObject=Q2,x.transform=UM,x.unary=FS,x.union=NE,x.unionBy=HE,x.unionWith=FE,x.uniq=GE,x.uniqBy=WE,x.uniqWith=UE,x.unset=VM,x.unzip=$d,x.unzipWith=D2,x.update=qM,x.updateWith=ZM,x.values=di,x.valuesIn=jM,x.without=VE,x.words=lp,x.wrap=GS,x.xor=qE,x.xorBy=ZE,x.xorWith=jE,x.zip=KE,x.zipObject=YE,x.zipObjectDeep=XE,x.zipWith=JE,x.entries=op,x.entriesIn=ip,x.extend=ep,x.extendWith=tp,qd(x,x),x.add=jA,x.attempt=cp,x.camelCase=JM,x.capitalize=ap,x.ceil=KA,x.clamp=KM,x.clone=US,x.cloneDeep=qS,x.cloneDeepWith=ZS,x.cloneWith=VS,x.conformsTo=jS,x.deburr=sp,x.defaultTo=xA,x.divide=YA,x.endsWith=QM,x.eq=jr,x.escape=eA,x.escapeRegExp=tA,x.every=cS,x.find=uS,x.findIndex=T2,x.findKey=EM,x.findLast=hS,x.findLastIndex=L2,x.findLastKey=SM,x.floor=XA,x.forEach=B2,x.forEachRight=N2,x.forIn=MM,x.forInRight=AM,x.forOwn=xM,x.forOwnRight=IM,x.get=Fd,x.gt=KS,x.gte=YS,x.has=TM,x.hasIn=Gd,x.head=P2,x.identity=lr,x.includes=vS,x.indexOf=hE,x.inRange=YM,x.invoke=PM,x.isArguments=ko,x.isArray=Ge,x.isArrayBuffer=XS,x.isArrayLike=ar,x.isArrayLikeObject=At,x.isBoolean=JS,x.isBuffer=Xn,x.isDate=QS,x.isElement=eM,x.isEmpty=tM,x.isEqual=rM,x.isEqualWith=nM,x.isError=Bd,x.isFinite=oM,x.isFunction=kn,x.isInteger=Z2,x.isLength=Ys,x.isMap=j2,x.isMatch=iM,x.isMatchWith=aM,x.isNaN=sM,x.isNative=lM,x.isNil=dM,x.isNull=cM,x.isNumber=K2,x.isObject=yt,x.isObjectLike=kt,x.isPlainObject=aa,x.isRegExp=Nd,x.isSafeInteger=uM,x.isSet=Y2,x.isString=Xs,x.isSymbol=Mr,x.isTypedArray=ci,x.isUndefined=hM,x.isWeakMap=fM,x.isWeakSet=pM,x.join=vE,x.kebabCase=rA,x.last=Br,x.lastIndexOf=bE,x.lowerCase=nA,x.lowerFirst=oA,x.lt=mM,x.lte=gM,x.max=JA,x.maxBy=QA,x.mean=ex,x.meanBy=tx,x.min=rx,x.minBy=nx,x.stubArray=jd,x.stubFalse=Kd,x.stubObject=GA,x.stubString=WA,x.stubTrue=UA,x.multiply=ox,x.nth=wE,x.noConflict=PA,x.noop=Zd,x.now=Zs,x.pad=iA,x.padEnd=aA,x.padStart=sA,x.parseInt=lA,x.random=XM,x.reduce=kS,x.reduceRight=ES,x.repeat=cA,x.replace=dA,x.result=FM,x.round=ix,x.runInContext=B,x.sample=MS,x.size=IS,x.snakeCase=uA,x.some=CS,x.sortedIndex=AE,x.sortedIndexBy=xE,x.sortedIndexOf=IE,x.sortedLastIndex=CE,x.sortedLastIndexBy=OE,x.sortedLastIndexOf=TE,x.startCase=fA,x.startsWith=pA,x.subtract=ax,x.sum=sx,x.sumBy=lx,x.template=mA,x.times=VA,x.toFinite=En,x.toInteger=We,x.toLength=J2,x.toLower=gA,x.toNumber=Nr,x.toSafeInteger=vM,x.toString=ot,x.toUpper=vA,x.trim=bA,x.trimEnd=wA,x.trimStart=_A,x.truncate=yA,x.unescape=kA,x.uniqueId=ZA,x.upperCase=EA,x.upperFirst=Wd,x.each=B2,x.eachRight=N2,x.first=P2,qd(x,(function(){var n={};return rn(x,function(i,h){nt.call(x.prototype,h)||(n[h]=i)}),n})(),{chain:!1}),x.VERSION=o,kr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){x[n].placeholder=x}),kr(["drop","take"],function(n,i){Ke.prototype[n]=function(h){h=h===r?1:Dt(We(h),0);var m=this.__filtered__&&!i?new Ke(this):this.clone();return m.__filtered__?m.__takeCount__=qt(h,m.__takeCount__):m.__views__.push({size:qt(h,W),type:n+(m.__dir__<0?"Right":"")}),m},Ke.prototype[n+"Right"]=function(h){return this.reverse()[n](h).reverse()}}),kr(["filter","map","takeWhile"],function(n,i){var h=i+1,m=h==ee||h==de;Ke.prototype[n]=function(E){var I=this.clone();return I.__iteratees__.push({iteratee:Le(E,3),type:h}),I.__filtered__=I.__filtered__||m,I}}),kr(["head","last"],function(n,i){var h="take"+(i?"Right":"");Ke.prototype[n]=function(){return this[h](1).value()[0]}}),kr(["initial","tail"],function(n,i){var h="drop"+(i?"":"Right");Ke.prototype[n]=function(){return this.__filtered__?new Ke(this):this[h](1)}}),Ke.prototype.compact=function(){return this.filter(lr)},Ke.prototype.find=function(n){return this.filter(n).head()},Ke.prototype.findLast=function(n){return this.reverse().find(n)},Ke.prototype.invokeMap=je(function(n,i){return typeof n=="function"?new Ke(this):this.map(function(h){return ea(h,n,i)})}),Ke.prototype.reject=function(n){return this.filter(Ks(Le(n)))},Ke.prototype.slice=function(n,i){n=We(n);var h=this;return h.__filtered__&&(n>0||i<0)?new Ke(h):(n<0?h=h.takeRight(-n):n&&(h=h.drop(n)),i!==r&&(i=We(i),h=i<0?h.dropRight(-i):h.take(i-n)),h)},Ke.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ke.prototype.toArray=function(){return this.take(W)},rn(Ke.prototype,function(n,i){var h=/^(?:filter|find|map|reject)|While$/.test(i),m=/^(?:head|last)$/.test(i),E=x[m?"take"+(i=="last"?"Right":""):i],I=m||/^find/.test(i);E&&(x.prototype[i]=function(){var R=this.__wrapped__,$=m?[1]:arguments,H=R instanceof Ke,ie=$[0],re=H||Ge(R),ce=function(st){var Ye=E.apply(x,Wn([st],$));return m&&be?Ye[0]:Ye};re&&h&&typeof ie=="function"&&ie.length!=1&&(H=re=!1);var be=this.__chain__,Ee=!!this.__actions__.length,Oe=I&&!be,Ne=H&&!Ee;if(!I&&re){R=Ne?R:new Ke(this);var Te=n.apply(R,$);return Te.__actions__.push({func:Vs,args:[ce],thisArg:r}),new $r(Te,be)}return Oe&&Ne?n.apply(this,$):(Te=this.thru(ce),Oe?m?Te.value()[0]:Te.value():Te)})}),kr(["pop","push","shift","sort","splice","unshift"],function(n){var i=vs[n],h=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",m=/^(?:pop|shift)$/.test(n);x.prototype[n]=function(){var E=arguments;if(m&&!this.__chain__){var I=this.value();return i.apply(Ge(I)?I:[],E)}return this[h](function(R){return i.apply(Ge(R)?R:[],E)})}}),rn(Ke.prototype,function(n,i){var h=x[i];if(h){var m=h.name+"";nt.call(oi,m)||(oi[m]=[]),oi[m].push({name:i,func:h})}}),oi[Bs(r,A).name]=[{name:"wrapper",func:r}],Ke.prototype.clone=Ey,Ke.prototype.reverse=Sy,Ke.prototype.value=My,x.prototype.at=eS,x.prototype.chain=tS,x.prototype.commit=rS,x.prototype.next=nS,x.prototype.plant=iS,x.prototype.reverse=aS,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=sS,x.prototype.first=x.prototype.head,Zi&&(x.prototype[Zi]=oS),x})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Bt._=Vn,define(function(){return Vn})):po?((po.exports=Vn)._=Vn,Uc._=Vn):Bt._=Vn}).call(e)})),xe=la(Op(),1);function el(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function xr(e){return el(e)||e===!1||e===0}function Tp(e,t=document.body){return new Promise(r=>{const o=document.querySelector(e);if(o){r(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function tl(e,t=250){return new Promise(r=>{const o=setInterval(()=>{e()&&(clearInterval(o),r(!0))},t)})}function Lp(e,t,r=document.body){return new Promise(o=>{const a=r.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(o(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Rp(e,t=document.body){return new Promise(r=>{if(!xr(unsafeWindow[e])){r(unsafeWindow[e]);return}const o=new MutationObserver(()=>{xr(unsafeWindow[e])||(r(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}async function Pp(e,t=5e3){const r=new Promise((o,a)=>{setTimeout(()=>a(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,r])}async function ui(e,t,r,o){if(e!==void 0){ke(r);const a=await t(e);ke(o,a)}}async function $p(e){await ui(e.waitAttr,t=>Lp(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await ui(e.waitEle,Tp,`Waiting for Element ${e.waitEle}`,"Found Element"),await ui(e.waitVar,Rp,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await ui(e.waitFunc,tl,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await ui(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Fr=[],Mn=0,da=null,ua=4,ha=globalThis.nanostoresGlobal||={epoch:0},Dp=()=>{for(Mn=0;Mn<Fr.length;Mn+=ua)Fr[Mn](Fr[Mn+1].value,Fr[Mn+2],Fr[Mn+3]);Fr.length=0},nu=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(o){return r.lc=t.push(o),()=>{for(let s=Mn+ua;s<Fr.length;)Fr[s]===o?Fr.splice(s,ua):s+=ua;let a=t.indexOf(o);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(o,a){ha.epoch++;let s=!Fr.length&&!da;for(let l of t)da?.has(l)||(da?.add(l),Fr.push(l,r,o,da?void 0:a));s&&Dp()},off(){},set(o){let a=r.value;a!==o&&(r.value=o,r.notify(a))},subscribe(o){let a=r.listen(o);return o(r.value),a},value:e};return r},zp=5,fa=6,pa=10,Bp=(e,t,r,o)=>(e.events=e.events||{},e.events[r+pa]||(e.events[r+pa]=o(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+pa](),delete e.events[r+pa])}),Np=1e3,Hp=(e,t)=>Bp(e,o=>{let a=t(o);a&&e.events[fa].push(a)},zp,o=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...l));let s=e.off;return e.events[fa]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[fa])l();e.events[fa]=[]}},Np)},()=>{e.listen=a,e.off=s}}),Fp=(e,t,r)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===ha.epoch)return;a=ha.epoch;let p=e.map(v=>v.get());if(!o||p.some((v,w)=>v!==o[w])){o=p;let v=t(...p);v&&v.then&&v.t?v.then(w=>{o===p&&l.set(w)}):(l.set(v),a=ha.epoch)}},l=nu(void 0),u=l.get;l.get=()=>(s(),u());let c,f=r?()=>{clearTimeout(c),c=setTimeout(s)}:s;return Hp(l,()=>{let p=e.map(v=>v.listen(f));return s(),()=>{for(let v of p)v()}}),l},Gp=(e,t)=>Fp(e,t),ou=(e={})=>{let t=nu(e);return t.setKey=function(r,o){let a=t.value;typeof o>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==o&&(t.value={...t.value,[r]:o},t.notify(a,r))},t},rl=globalThis,iu=e=>e,ma=rl.trustedTypes,au=ma?ma.createPolicy("lit-html",{createHTML:e=>e}):void 0,nl="$lit$",sn=`lit$${Math.random().toFixed(9).slice(2)}$`,ol="?"+sn,Wp=`<${ol}>`,Qn=document,hi=()=>Qn.createComment(""),fi=e=>e===null||typeof e!="object"&&typeof e!="function",il=Array.isArray,su=e=>il(e)||typeof e?.[Symbol.iterator]=="function",al=`[ 	
\f\r]`,pi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lu=/-->/g,cu=/>/g,eo=RegExp(`>|${al}(?:([^\\s"'>=/]+)(${al}*=${al}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),du=/'/g,uu=/"/g,hu=/^(?:script|style|textarea|title)$/i,sl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),oe=sl(1),cx=sl(2),dx=sl(3),ln=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),fu=new WeakMap,to=Qn.createTreeWalker(Qn,129);function pu(e,t){if(!il(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return au!==void 0?au.createHTML(t):t}var mu=(e,t)=>{const r=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=pi;for(let u=0;u<r;u++){const c=e[u];let f,p,v=-1,w=0;for(;w<c.length&&(l.lastIndex=w,p=l.exec(c),p!==null);)w=l.lastIndex,l===pi?p[1]==="!--"?l=lu:p[1]!==void 0?l=cu:p[2]!==void 0?(hu.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=eo):p[3]!==void 0&&(l=eo):l===eo?p[0]===">"?(l=a??pi,v=-1):p[1]===void 0?v=-2:(v=l.lastIndex-p[2].length,f=p[1],l=p[3]===void 0?eo:p[3]==='"'?uu:du):l===uu||l===du?l=eo:l===lu||l===cu?l=pi:(l=eo,a=void 0);const g=l===eo&&e[u+1].startsWith("/>")?" ":"";s+=l===pi?c+Wp:v>=0?(o.push(f),c.slice(0,v)+nl+c.slice(v)+sn+g):c+sn+(v===-2?u:g)}return[pu(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},ll=class hp{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let s=0,l=0;const u=t.length-1,c=this.parts,[f,p]=mu(t,r);if(this.el=hp.createElement(f,o),to.currentNode=this.el.content,r===2||r===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(a=to.nextNode())!==null&&c.length<u;){if(a.nodeType===1){if(a.hasAttributes())for(const v of a.getAttributeNames())if(v.endsWith(nl)){const w=p[l++],g=a.getAttribute(v).split(sn),b=/([.?@])?(.*)/.exec(w);c.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?vu:b[1]==="?"?bu:b[1]==="@"?wu:mi}),a.removeAttribute(v)}else v.startsWith(sn)&&(c.push({type:6,index:s}),a.removeAttribute(v));if(hu.test(a.tagName)){const v=a.textContent.split(sn),w=v.length-1;if(w>0){a.textContent=ma?ma.emptyScript:"";for(let g=0;g<w;g++)a.append(v[g],hi()),to.nextNode(),c.push({type:2,index:++s});a.append(v[w],hi())}}}else if(a.nodeType===8)if(a.data===ol)c.push({type:2,index:s});else{let v=-1;for(;(v=a.data.indexOf(sn,v+1))!==-1;)c.push({type:7,index:s}),v+=sn.length-1}s++}}static createElement(t,r){const o=Qn.createElement("template");return o.innerHTML=t,o}};function ro(e,t,r=e,o){if(t===ln)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const s=fi(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=ro(e,a._$AS(e,t.values),a,o)),t}var gu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Qn).importNode(t,!0);to.currentNode=o;let a=to.nextNode(),s=0,l=0,u=r[0];for(;u!==void 0;){if(s===u.index){let c;u.type===2?c=new ga(a,a.nextSibling,this,e):u.type===1?c=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(c=new _u(a,this,e)),this._$AV.push(c),u=r[++l]}s!==u?.index&&(a=to.nextNode(),s++)}return to.currentNode=Qn,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ga=class fp{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ro(this,t,r),fi(t)?t===He||t==null||t===""?(this._$AH!==He&&this._$AR(),this._$AH=He):t!==this._$AH&&t!==ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):su(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==He&&fi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ll.createElement(pu(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new gu(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=fu.get(t.strings);return r===void 0&&fu.set(t.strings,r=new ll(t)),r}k(t){il(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const s of t)a===r.length?r.push(o=new fp(this.O(hi()),this.O(hi()),this,this.options)):o=r[a],o._$AI(s),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=iu(t).nextSibling;iu(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},mi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,a){this.type=1,this._$AH=He,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=He}_$AI(e,t=this,r,o){const a=this.strings;let s=!1;if(a===void 0)e=ro(this,e,t,0),s=!fi(e)||e!==this._$AH&&e!==ln,s&&(this._$AH=e);else{const l=e;let u,c;for(e=a[0],u=0;u<a.length-1;u++)c=ro(this,l[r+u],t,u),c===ln&&(c=this._$AH[u]),s||=!fi(c)||c!==this._$AH[u],c===He?e=He:e!==He&&(e+=(c??"")+a[u+1]),this._$AH[u]=c}s&&!o&&this.j(e)}j(e){e===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},vu=class extends mi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===He?void 0:e}},bu=class extends mi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==He)}},wu=class extends mi{constructor(e,t,r,o,a){super(e,t,r,o,a),this.type=5}_$AI(e,t=this){if((e=ro(this,e,t,0)??He)===ln)return;const r=this._$AH,o=e===He&&r!==He||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==He&&(r===He||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_u=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ro(this,e)}},Up={M:nl,P:sn,A:ol,C:1,L:mu,R:gu,D:su,V:ro,I:ga,H:mi,N:bu,U:wu,B:vu,F:_u},Vp=rl.litHtmlPolyfillSupport;Vp?.(ll,ga),(rl.litHtmlVersions??=[]).push("3.3.3");var qp=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=r?.renderBefore??null;o._$litPart$=a=new ga(t.insertBefore(hi(),s),s,void 0,r??{})}return a._$AI(e),a},{I:Zp}=Up,yu=e=>e,ux=e=>e===null||typeof e!="object"&&typeof e!="function",hx={HTML:1,SVG:2,MATHML:3},fx=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,px=e=>e?._$litType$?.h!=null,mx=e=>e?._$litDirective$!==void 0,gx=e=>e?._$litDirective$,jp=e=>e.strings===void 0,ku=()=>document.createComment(""),vx=(e,t,r)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(ku(),a),l=o.insertBefore(ku(),a);r=new Zp(s,l,e,e.options)}else{const s=r._$AB.nextSibling,l=r._$AM,u=l!==e;if(u){let c;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==l._$AU&&r._$AP(c)}if(s!==a||u){let c=r._$AA;for(;c!==s;){const f=yu(c).nextSibling;yu(o).insertBefore(c,a),c=f}}}return r},bx=(e,t,r=e)=>(e._$AI(t,r),e),Kp={},wx=(e,t=Kp)=>e._$AH=t,_x=e=>e._$AH,yx=e=>{e._$AR(),e._$AA.remove()},kx=e=>{e._$AR()},va={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gi=e=>(...t)=>({_$litDirective$:e,values:t}),ba=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},vi=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const o of r)o._$AO?.(t,!1),vi(o,t);return!0},wa=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Eu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Jp(t)}};function Yp(e){this._$AN!==void 0?(wa(this),this._$AM=e,Eu(this)):this._$AM=e}function Xp(e,t=!1,r=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)vi(o[s],!1),wa(o[s]);else o!=null&&(vi(o,!1),wa(o));else vi(this,e)}var Jp=e=>{e.type==va.CHILD&&(e._$AP??=Xp,e._$AQ??=Yp)},Qp=class extends ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Eu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(vi(this,e),wa(this))}setValue(e){if(jp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},cl=()=>new em,em=class{},dl=new WeakMap,ul=gi(class extends Qp{render(e){return He}update(e,[t]){const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),He}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=dl.get(t);r===void 0&&(r=new WeakMap,dl.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?dl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tm={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Gerätemodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},rm={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},nm={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"Móvil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},om={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},im={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},am={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",DEVICE_MODE:"设备模式",DEVICE_MODE_AUTO:"自动",DEVICE_MODE_DESKTOP:"桌面",DEVICE_MODE_TABLET:"平板",DEVICE_MODE_MOBILE:"手机",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},Eo=[rm,nm,im,am,tm,om];function Su(e){return"listImages"in e&&!xr(e.listImages)}function Mu(e){return"listPages"in e&&!xr(e.listPages)}function sm(e){return"bruteForce"in e&&!xr(e.bruteForce)}var $e=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),De=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function lm(e,t){return t in e}var _a=globalThis,hl=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fl=Symbol(),Au=new WeakMap,xu=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==fl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Au.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Au.set(t,e))}return e}toString(){return this.cssText}},Se=e=>new xu(typeof e=="string"?e:e+"",void 0,fl),Et=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,a,s)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1],e[0]);return new xu(r,e,fl)},cm=(e,t)=>{if(hl)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=_a.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},Iu=hl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Se(r)})(e):e,{is:dm,defineProperty:um,getOwnPropertyDescriptor:hm,getOwnPropertyNames:fm,getOwnPropertySymbols:pm,getPrototypeOf:mm}=Object,ya=globalThis,Cu=ya.trustedTypes,gm=Cu?Cu.emptyScript:"",vm=ya.reactiveElementPolyfillSupport,bi=(e,t)=>e,ka={toAttribute(e,t){switch(t){case Boolean:e=e?gm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pl=(e,t)=>!dm(e,t),Ou={attribute:!0,type:String,converter:ka,reflect:!1,useDefault:!1,hasChanged:pl};Symbol.metadata??=Symbol("metadata"),ya.litPropertyMetadata??=new WeakMap;var So=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ou){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&um(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=hm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const l=o?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ou}static _$Ei(){if(this.hasOwnProperty(bi("elementProperties")))return;const e=mm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bi("properties"))){const t=this.properties,r=[...fm(t),...pm(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Iu(o))}else e!==void 0&&t.push(Iu(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cm(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ka).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ka;this._$Em=o;const l=s.fromAttribute(t,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,r,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??pl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:s}=a,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};So.elementStyles=[],So.shadowRootOptions={mode:"open"},So[bi("elementProperties")]=new Map,So[bi("finalized")]=new Map,vm?.({ReactiveElement:So}),(ya.reactiveElementVersions??=[]).push("2.1.2");var ml=globalThis,rt=class extends So{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ln}};rt._$litElement$=!0,rt.finalized=!0,ml.litElementHydrateSupport?.({LitElement:rt});var bm=ml.litElementPolyfillSupport;bm?.({LitElement:rt}),(ml.litElementVersions??=[]).push("4.2.2");var lt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},wm={attribute:!0,type:String,converter:ka,reflect:!1,hasChanged:pl},_m=(e=wm,t,r)=>{const{kind:o,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:l}=r;return{set(u){const c=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,c,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(o==="setter"){const{name:l}=r;return function(u){const c=this[l];t.call(this,u),this.requestUpdate(l,c,e,!0,u)}}throw Error("Unsupported decorator location: "+o)};function Y(e){return(t,r)=>typeof r=="object"?_m(e,t,r):((o,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function Ht(e){return Y({...e,state:!0,attribute:!1})}var Tu=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function An(e,t){return(r,o,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:u}=typeof o=="object"?r:a??(()=>{const c=Symbol();return{get(){return this[c]},set(f){this[c]=f}}})();return Tu(r,o,{get(){let c=l.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&u.call(this,c)),c}})}return Tu(r,o,{get(){return s(this)}})}}var St=gi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ln}}),Ea=class extends ba{constructor(e){if(super(e),this.it=He,e.type!==va.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===He||e==null)return this._t=void 0,this.it=e;if(e===ln)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ea.directiveName="unsafeHTML",Ea.resultType=1;var Lu=gi(Ea),gl=class extends Ea{};gl.directiveName="unsafeSVG",gl.resultType=2;var Ru=gi(gl);function Pu(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var ym=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",km='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Em='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Sm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Mm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Am='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',xm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Im='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Cm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',Lm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',Rm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Pm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',$m='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Dm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',zm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Bm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Nm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Hm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Gm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',Wm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Um='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Vm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',qm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Zm='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',jm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,Km=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,Ym=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
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
            " id="path5107"/></g></g></g></g></svg>`,Xm='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',Jm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,Qm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',eg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',ig=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,ag='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',sg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,lg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',dg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',ug=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,hg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',fg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',$g='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',Dg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Bg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Ng=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',Kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',Xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',Jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',e5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',t5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',n5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',s5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',l5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',c5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',d5=an({IconAdjustmentsHorizontal:()=>km,IconAlertCircle:()=>Em,IconApiBook:()=>Sm,IconArrowAutofitDown:()=>Mm,IconArrowAutofitHeight:()=>Am,IconArrowAutofitLeft:()=>xm,IconArrowAutofitRight:()=>Im,IconArrowAutofitWidth:()=>Cm,IconArrowBigLeft:()=>Om,IconArrowBigRight:()=>Tm,IconArrowsHorizontal:()=>Lm,IconArrowsLeftRight:()=>Rm,IconArrowsMove:()=>Pm,IconArrowsMoveVertical:()=>$m,IconArrowsVertical:()=>Dm,IconBook:()=>zm,IconBookArrowLeft:()=>Bm,IconBookArrowRight:()=>Nm,IconBookOff:()=>Hm,IconBookUpload:()=>Fm,IconBookmark:()=>Gm,IconBookmarkOff:()=>Wm,IconBookmarks:()=>Um,IconBooksReturn:()=>Vm,IconBoxAlignTop:()=>qm,IconCategory:()=>Qm,IconCheck:()=>eg,IconChevronLeft:()=>tg,IconChevronRight:()=>rg,IconCircleCheck:()=>ng,IconCircleX:()=>og,IconComic1:()=>jm,IconComic1Flat:()=>Zm,IconComic2:()=>Ym,IconComic2Flat:()=>Km,IconComic3:()=>Jm,IconComic3Flat:()=>Xm,IconDeviceDesktop:()=>ig,IconDeviceFloppy:()=>ag,IconDeviceMobile:()=>sg,IconDeviceTablet:()=>lg,IconDotsVertical:()=>cg,IconEReader1:()=>ug,IconEReader1Flat:()=>dg,IconEReader2:()=>fg,IconEReader2Flat:()=>hg,IconExternalLink:()=>pg,IconEye:()=>mg,IconEyeOff:()=>gg,IconFileDownload:()=>vg,IconFilePercent:()=>bg,IconFolderOpen:()=>wg,IconHandClick:()=>_g,IconHelp:()=>yg,IconInfoCircle:()=>kg,IconKeyboard:()=>Eg,IconLayoutBottombar:()=>Sg,IconLayoutBottombarInactive:()=>Mg,IconLayoutDashboard:()=>Ag,IconLayoutSidebar:()=>xg,IconLayoutSidebarInactive:()=>Ig,IconLayoutSidebarRight:()=>Cg,IconLayoutSidebarRightInactive:()=>Og,IconListNumbers:()=>Tg,IconLoader2:()=>Lg,IconLocationCog:()=>Rg,IconMenu2:()=>Pg,IconMenuDeep:()=>$g,IconMessage:()=>Dg,IconMoon:()=>zg,IconPage:()=>Ng,IconPageFlat:()=>Bg,IconPalette:()=>Hg,IconPencil:()=>Fg,IconPencilCog:()=>Gg,IconPhoto:()=>Wg,IconPhotoOff:()=>Ug,IconPin:()=>Vg,IconPlayerPause:()=>qg,IconPlayerPlay:()=>Zg,IconRefresh:()=>jg,IconSettings:()=>Kg,IconSettingsOff:()=>Yg,IconSpacingHorizontal:()=>Xg,IconSpacingVertical:()=>Jg,IconSun:()=>Qg,IconTrash:()=>e5,IconWorldCog:()=>t5,IconX:()=>r5,IconZoom:()=>n5,IconZoomCancel:()=>o5,IconZoomIn:()=>i5,IconZoomInArea:()=>a5,IconZoomOut:()=>s5,IconZoomOutArea:()=>l5,IconZoomPan:()=>c5}),vl=an({IconAdjustmentsHorizontal:()=>v5,IconAlertCircle:()=>V5,IconApiBook:()=>b5,IconArrowAutofitDown:()=>y5,IconArrowAutofitHeight:()=>k5,IconArrowAutofitLeft:()=>E5,IconArrowAutofitRight:()=>S5,IconArrowAutofitWidth:()=>M5,IconArrowBigLeft:()=>A5,IconArrowBigRight:()=>x5,IconArrowsHorizontal:()=>w5,IconArrowsLeftRight:()=>_5,IconArrowsMove:()=>I5,IconArrowsMoveVertical:()=>C5,IconArrowsVertical:()=>O5,IconBook:()=>T5,IconBookArrowLeft:()=>R5,IconBookArrowRight:()=>P5,IconBookOff:()=>L5,IconBookUpload:()=>D5,IconBookmark:()=>z5,IconBookmarkOff:()=>B5,IconBookmarks:()=>N5,IconBooksReturn:()=>$5,IconBoxAlignTop:()=>H5,IconCategory:()=>F5,IconCheck:()=>G5,IconChevronLeft:()=>W5,IconChevronRight:()=>U5,IconCircleCheck:()=>q5,IconCircleX:()=>Z5,IconComic1:()=>Y5,IconComic1Flat:()=>X5,IconComic2:()=>J5,IconComic2Flat:()=>Q5,IconComic3:()=>ev,IconComic3Flat:()=>tv,IconDeviceDesktop:()=>rv,IconDeviceFloppy:()=>nv,IconDeviceMobile:()=>ov,IconDeviceTablet:()=>iv,IconDotsVertical:()=>av,IconEReader1:()=>sv,IconEReader1Flat:()=>lv,IconEReader2:()=>cv,IconEReader2Flat:()=>dv,IconExternalLink:()=>uv,IconEye:()=>hv,IconEyeOff:()=>fv,IconFileDownload:()=>pv,IconFilePercent:()=>mv,IconFolderOpen:()=>gv,IconHandClick:()=>vv,IconHelp:()=>j5,IconInfoCircle:()=>K5,IconKeyboard:()=>bv,IconLayoutBottombar:()=>_v,IconLayoutBottombarInactive:()=>yv,IconLayoutDashboard:()=>wv,IconLayoutSidebar:()=>kv,IconLayoutSidebarInactive:()=>Ev,IconLayoutSidebarRight:()=>Sv,IconLayoutSidebarRightInactive:()=>Mv,IconListNumbers:()=>Av,IconLoader2:()=>xv,IconLocationCog:()=>Iv,IconMenu2:()=>Cv,IconMenuDeep:()=>Ov,IconMessage:()=>Tv,IconMoon:()=>Lv,IconPage:()=>Rv,IconPageFlat:()=>Pv,IconPalette:()=>$v,IconPencil:()=>Dv,IconPencilCog:()=>zv,IconPhoto:()=>bl,IconPhotoOff:()=>wl,IconPin:()=>Bv,IconPlayerPause:()=>Nv,IconPlayerPlay:()=>Hv,IconRefresh:()=>Fv,IconSettings:()=>Gv,IconSettingsOff:()=>Wv,IconSpacingHorizontal:()=>Uv,IconSpacingVertical:()=>Vv,IconSun:()=>qv,IconTrash:()=>Zv,IconWorldCog:()=>jv,IconX:()=>Kv,IconZoom:()=>Yv,IconZoomCancel:()=>Xv,IconZoomIn:()=>Jv,IconZoomInArea:()=>Qv,IconZoomOut:()=>e4,IconZoomOutArea:()=>t4,IconZoomPan:()=>r4});function u5(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var h5=u5(ym),Sa=new Map;for(const e of h5)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,o,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),Sa.has(o)||Sa.set(o,[]),Sa.get(o)?.push({subSelector:s,color:e.color})}var f5=new DOMParser,p5=new XMLSerializer;function m5(e,t){const r=Sa.get(t);if(!r?.length)return e;const o=f5.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{o.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return p5.serializeToString(o)}var g5=xe.default.mapValues(d5,(e,t)=>m5(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:v5,IconApiBook:b5,IconArrowsHorizontal:w5,IconArrowsLeftRight:_5,IconArrowAutofitDown:y5,IconArrowAutofitHeight:k5,IconArrowAutofitLeft:E5,IconArrowAutofitRight:S5,IconArrowAutofitWidth:M5,IconArrowBigLeft:A5,IconArrowBigRight:x5,IconArrowsMove:I5,IconArrowsMoveVertical:C5,IconArrowsVertical:O5,IconBook:T5,IconBookOff:L5,IconBookArrowLeft:R5,IconBookArrowRight:P5,IconBooksReturn:$5,IconBookUpload:D5,IconBookmark:z5,IconBookmarkOff:B5,IconBookmarks:N5,IconBoxAlignTop:H5,IconCategory:F5,IconCheck:G5,IconChevronLeft:W5,IconChevronRight:U5,IconAlertCircle:V5,IconCircleCheck:q5,IconCircleX:Z5,IconHelp:j5,IconInfoCircle:K5,IconComic1:Y5,IconComic1Flat:X5,IconComic2:J5,IconComic2Flat:Q5,IconComic3:ev,IconComic3Flat:tv,IconDeviceDesktop:rv,IconDeviceFloppy:nv,IconDeviceMobile:ov,IconDeviceTablet:iv,IconDotsVertical:av,IconEReader1:sv,IconEReader1Flat:lv,IconEReader2:cv,IconEReader2Flat:dv,IconExternalLink:uv,IconEye:hv,IconEyeOff:fv,IconFileDownload:pv,IconFilePercent:mv,IconFolderOpen:gv,IconHandClick:vv,IconKeyboard:bv,IconLayoutDashboard:wv,IconLayoutBottombar:_v,IconLayoutBottombarInactive:yv,IconLayoutSidebar:kv,IconLayoutSidebarInactive:Ev,IconLayoutSidebarRight:Sv,IconLayoutSidebarRightInactive:Mv,IconListNumbers:Av,IconLoader2:xv,IconLocationCog:Iv,IconMenu2:Cv,IconMenuDeep:Ov,IconMessage:Tv,IconMoon:Lv,IconPage:Rv,IconPageFlat:Pv,IconPalette:$v,IconPencil:Dv,IconPencilCog:zv,IconPhoto:bl,IconPhotoOff:wl,IconPin:Bv,IconPlayerPause:Nv,IconPlayerPlay:Hv,IconRefresh:Fv,IconSettings:Gv,IconSettingsOff:Wv,IconSpacingHorizontal:Uv,IconSpacingVertical:Vv,IconSun:qv,IconTrash:Zv,IconWorldCog:jv,IconX:Kv,IconZoom:Yv,IconZoomCancel:Xv,IconZoomIn:Jv,IconZoomInArea:Qv,IconZoomOut:e4,IconZoomOutArea:t4,IconZoomPan:r4}=g5;function z(e,t,r,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var no=class extends rt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Et`
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
  `}updated(t){if(super.updated(t),t.has("name")){const r=Pu(this.name);vl[r]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0})))}}render(){const t=Pu(this.name),r=vl[t];if(!r)return He;const o=this.size?`--mov-icon-size: ${this.size};`:"";return oe`<span
      role=${this.label?"img":He}
      aria-label=${this.label||He}
      aria-hidden=${this.label?He:"true"}
      style=${o}
      >${Ru(r)}</span
    >`}};z([Y({type:String})],no.prototype,"name",void 0),z([Y({type:String,reflect:!0})],no.prototype,"variant",void 0),z([Y({type:String,reflect:!0})],no.prototype,"family",void 0),z([Y({type:String})],no.prototype,"label",void 0),z([Y({type:String})],no.prototype,"size",void 0),no=z([lt("mov-icon")],no);var n4=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),Mo=n4;function o4(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function $u(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(o4(e,t))}function i4(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function a4(e,t){i4(e),$u(e,t)}function s4(e,t){return Mo`
    <style id="${e}">
      ${t}
    </style>
  `}var Ma=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Yr=class extends rt{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Se(Ma)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return oe`
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
    `}};z([Y({type:Boolean,reflect:!0})],Yr.prototype,"open",void 0),z([Y({reflect:!0})],Yr.prototype,"variant",void 0),z([Y({type:Number})],Yr.prototype,"duration",void 0),z([Y({type:Boolean})],Yr.prototype,"closable",void 0),z([Y()],Yr.prototype,"title",void 0),z([Y()],Yr.prototype,"description",void 0),z([Y()],Yr.prototype,"icon",void 0),z([Y({reflect:!0})],Yr.prototype,"placement",void 0),Yr=z([lt("mov-toast")],Yr);var dr=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let o=document.querySelector(`.mov-toast-stack.${r}`);const a=Ma.indexOf(":host"),s=a>-1?Ma.substring(0,a).trim():Ma;$u("mov-toast-stack-styles",s),o||(o=document.createElement("div"),o.className=`mov-toast-stack ${r}`,document.body.appendChild(o));const l=document.createElement("mov-toast");let u=e.variant||"primary";return u==="info"&&(u="primary"),u==="error"&&(u="danger"),l.variant=u,l.title=e.title||"",l.description=e.description||e.message||"",l.duration=e.duration??3e3,l.closable=e.closable??!0,l.placement=t,e.icon&&(l.icon=e.icon),o.appendChild(l),requestAnimationFrame(()=>{l.show()}),l};dr.info=e=>dr({...e,variant:"primary"}),dr.success=e=>dr({...e,variant:"success"}),dr.warning=e=>dr({...e,variant:"warning"}),dr.error=e=>dr({...e,variant:"danger"});var wi=(e,t)=>{const r=(o,a)=>xe.default.transform(o,(s,l,u)=>{xe.default.isEqual(l,a[u])||(xe.default.isObject(l)&&xe.default.isObject(a[u])&&!xe.default.isArray(l)?s[u]=r(l,a[u]):s[u]=l)});return r(e,t)},l4={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},c4={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},d4={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Gr(e=!0){const t={...l4,theme:e?"#29487D":"#004526"};let r=Cp()?xe.default.defaultsDeep(c4,t):t;return Qs()&&(r=xe.default.defaultsDeep(d4,r)),r}function u4(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,o=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return xe.default.isEqual(o,a)}}function h4(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,o=t,a=xe.default.keys(r).sort((l,u)=>l.localeCompare(u)),s=xe.default.keys(o).sort((l,u)=>l.localeCompare(u));if(!xe.default.isEqual(a,s))return!1;for(const l of a){const u=r[l]?[...r[l]].sort((f,p)=>f.localeCompare(p)):[],c=o[l]?[...o[l]].sort((f,p)=>f.localeCompare(p)):[];if(!xe.default.isEqual(u,c))return!1}return!0}}function Du(e,t,r){if(r==="bookmarks")return u4(e,t);if(r==="keybinds")return h4(e,t)}function Aa(e,t,r){if(e===t)return!1;if(r){const o={[r]:e},a={[r]:t};return!xe.default.isEqualWith(o,a,Du)}return!xe.default.isEqualWith(e,t,Du)}var tr=xe.default.defaultsDeep(Sp(Gr()),Gr()),rr=xe.default.defaultsDeep(Mp(Gr(!1)),Gr(!1)),oo=()=>rr?.enabled===!0,_l=e=>oo()&&!["locale","bookmarks","keybinds"].includes(e),Tt=ou(oo()?{...rr,locale:tr.locale,keybinds:tr.keybinds,bookmarks:tr.bookmarks}:tr),Ao=Gp(Tt,e=>Eo.find(t=>t.ID===e.locale)??Eo[1]);function yl(e=X("deviceMode")){return e==="auto"?ca():e}var nr=ou({autoScroll:!1,chapter:cl(),currentPage:0,device:yl(),manga:void 0,panel:"none",scrollToPage:void 0});function io(e){if(e){const t=_l(e)?rr[e]:tr[e],r=Tt.get()?.[e];Aa(r,t,e)&&(Tt.setKey(e,t),ke("Refreshed Settings",e,t));return}for(const t in Tt.get()){const r=Tt.get()[t],o=_l(t)?rr[t]:tr[t];Aa(r,o)&&Tt.setKey(t,o)}ke("Refreshed All Settings")}function f4(e){const t=xe.default.defaultsDeep(e,Gr()),r=tr?wi(t,tr):t;if(!xr(r)){ke("Imported Global Settings",r),tr=t;for(const o in r)io(o)}}ru(xe.default.debounce(f4,300),"settings");function p4(e){const t=xe.default.defaultsDeep(e,Gr(!1)),r=rr?wi(t,rr):t;if(!xr(r)){ke("Imported Local Settings",r),rr=t;for(const o in r)io(o)}}ru(xe.default.debounce(p4,300),location.hostname);function X(e){return Tt.get()?.[e]}function xo(e,t){const r=Tt.get()?.[e];Aa(r,t,e)&&Tt.setKey(e,t)}function Mt(e,t){Aa(X(e),t,e)&&(Tt.setKey(e,t),_l(e)?(rr[e]=t,tu(wi(rr,Gr(!1)))):(tr[e]=t,Ap(wi(tr,Gr()))))}function Io(e,t){xo(e,t(X(e)))}function fe(e){return nr.get()[e]}function ze(e,t){const r=nr.get()[e];xe.default.isEqual(r,t)||nr.setKey(e,t)}function zu(e,t){const r=nr.get()[e],o=t(r);xe.default.isEqual(r,o)||nr.setKey(e,o)}function ur(e,t){zu("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function q(e){const t=Eo.find(r=>r.ID===X("locale"))??Eo[1];return lm(t,e)?t?.[e]??Eo[1]?.[e]:`##MISSING_STRING_${e}##`}function Bu(e=!1){return rr.enabled=e,tu(wi(rr,Gr(!1))),ke("Local Settings ",e?"Enabled":"Disabled"),dr.info({title:"Changed Settings to",description:oo()?"Local":"Global",duration:2e3}),oo()}function m4(){oo()?(Jd(location.hostname),rr=Gr(!1),Bu(!1)):(Jd("settings"),tr=Gr(),io()),ke("Settings Reset")}function Co(e=location.href){return X("bookmarks").find(t=>t.url===e)?.page}function g4(e=null){jt("Current Settings (Local:",oo(),") ",e?Tt.get()[e]:Tt.get(),`
Global Settings`,e?tr[e]:tr,`
Local Settings`,e?rr[e]:rr,`
AppState`,nr.get())}kp("MOVSettings",g4);var v4=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const o=t[r],a=e[r];dr.info({title:`${r} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};Tt.listen(xe.default.debounce(v4,300));var hr=e=>e??He,b4=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",pt=class extends rt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Se(b4)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=oe`
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
          class=${St(r)}
          href=${hr(this.href)}
          target=${hr(this.target)}
          title=${hr(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${hr(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:oe`
        <button
          part="base"
          class=${St(r)}
          ?disabled=${this.disabled||this.loading}
          type=${hr(this.type)}
          title=${hr(this.title)}
          name=${hr(this.name)}
          value=${hr(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),o=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=o.length===0&&s}};z([An(".button")],pt.prototype,"button",void 0),z([An("slot:not([name])")],pt.prototype,"labelSlot",void 0),z([Ht()],pt.prototype,"isIconButton",void 0),z([Ht()],pt.prototype,"hasLabel",void 0),z([Ht()],pt.prototype,"hasStart",void 0),z([Ht()],pt.prototype,"hasEnd",void 0),z([Y()],pt.prototype,"title",void 0),z([Y({reflect:!0})],pt.prototype,"appearance",void 0),z([Y({reflect:!0})],pt.prototype,"variant",void 0),z([Y({reflect:!0})],pt.prototype,"size",void 0),z([Y({attribute:"with-caret",type:Boolean,reflect:!0})],pt.prototype,"withCaret",void 0),z([Y({type:Boolean,reflect:!0})],pt.prototype,"disabled",void 0),z([Y({type:Boolean,reflect:!0})],pt.prototype,"loading",void 0),z([Y({type:Boolean,reflect:!0})],pt.prototype,"pill",void 0),z([Y()],pt.prototype,"type",void 0),z([Y({reflect:!0})],pt.prototype,"name",void 0),z([Y({reflect:!0})],pt.prototype,"value",void 0),z([Y({reflect:!0})],pt.prototype,"href",void 0),z([Y()],pt.prototype,"target",void 0),z([Y({reflect:!0})],pt.prototype,"rel",void 0),z([Y()],pt.prototype,"download",void 0),z([Y({reflect:!0})],pt.prototype,"form",void 0),pt=z([lt("mov-button")],pt);var Ir=class extends rt{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Et`
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
        .appearance=${hr(this.appearance)}
        .size=${hr(this.size)}
        ?disabled=${hr(this.disabled)}
        ?loading=${hr(this.loading)}
        .title=${hr(this.title)}
        class=${St(r)}
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
    `:He}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};z([Y({type:String})],Ir.prototype,"mode",void 0),z([Y({type:Boolean,reflect:!0})],Ir.prototype,"active",void 0),z([Y({type:String})],Ir.prototype,"label",void 0),z([Y({type:String})],Ir.prototype,"activeLabel",void 0),z([Y({type:String})],Ir.prototype,"icon",void 0),z([Y({type:String})],Ir.prototype,"activeIcon",void 0),z([Y({type:String,reflect:!0})],Ir.prototype,"appearance",void 0),z([Y({type:String,reflect:!0})],Ir.prototype,"size",void 0),z([Y({type:Boolean})],Ir.prototype,"disabled",void 0),z([Y({type:Boolean,reflect:!0})],Ir.prototype,"loading",void 0),Ir=z([lt("toggle-button")],Ir);var w4="important",_4=" !important",Xr=gi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(_4);o.includes("-")||s?r.setProperty(o,s?a.slice(0,-11):a,s?w4:""):r[o]=a}}return ln}});function _i(e,t){let r=e.length,o,a,s=!1,l=!1;Array.isArray(e[0])?o=e:(o=[e],r=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],l=!0);let u=a[0].length,c=a[0].map((p,v)=>a.map(w=>w[v])),f=o.map(p=>c.map(v=>{let w=0;if(!Array.isArray(p)){for(let g of v)w+=p*g;return w}for(let g=0;g<p.length;g++)w+=p[g]*(v[g]||0);return w}));return r===1&&s&&(f=f[0]),u===1&&l?r===1&&s?f[0]:f.map(p=>p[0]):f}function kl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xe(e,t,r=[0,0,0]){const o=kl(e,t[0]),a=kl(e,t[1]),s=kl(e,t[2]);return r[0]=o,r[1]=a,r[2]=s,r}var y4=an({bisectLeft:()=>Hu,clamp:()=>Wr,copySign:()=>xa,diag:()=>xl,interpolate:()=>yi,interpolateInv:()=>Nu,inv:()=>A4,isInstance:()=>ao,isNone:()=>Fe,isString:()=>Oo,lu:()=>Il,mapRange:()=>Ml,multiplyMatrices:()=>_i,multiply_v3_m3x3:()=>Xe,serializeNumber:()=>El,skipNone:()=>It,solve:()=>x4,spow:()=>ct,toPrecision:()=>Sl,type:()=>xn,zdiv:()=>Al});function Oo(e){return xn(e)==="string"}function xn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function El(e,{precision:t=16,unit:r}){return Fe(e)?"none":(e=+Sl(e,t),e+(r??""))}function Fe(e){return e===null}function It(e){return Fe(e)?0:e}function Sl(e,t){if(e===0)return 0;let r=~~e,o=0;r&&t&&(o=~~Math.log10(Math.abs(r))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function yi(e,t,r){return Fe(e)||isNaN(e)?t:Fe(t)||isNaN(t)?e:e+(t-e)*r}function Nu(e,t,r){return(r-e)/(t-e)}function Ml(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:yi(t[0],t[1],Nu(e[0],e[1],r))}function Wr(e,t,r){return Math.max(Math.min(r,t),e)}function xa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ct(e,t){return xa(Math.abs(e)**t,e)}function Al(e,t){return t===0?0:e/t}function Hu(e,t,r=0,o=e.length){for(;r<o;){const a=r+o>>1;e[a]<t?r=a+1:o=a}return r}function ao(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=o}return!1}function xl(e){const t=e.length,r=[];for(let o=0;o<t;o++){r[o]=[];for(let a=0;a<t;a++)r[o][a]=o===a?e[o]:0}return r}function Il(e,{pIndices:t=!1}={}){let r,o,a,s;const l=e.length;t?(r=Array.from({length:l},(u,c)=>c),a=xl(new Array(l).fill(1))):(o=xl(new Array(l).fill(1)),a=structuredClone(o)),s=structuredClone(e);for(let u=0;u<l-1;u++){let c=u,f=Math.abs(s[u][u]);for(let p=u+1;p<l;p++){const v=Math.abs(s[p][u]);v>f&&(c=p,f=v)}if(c!=u){if([s[u],s[c]]=[s[c],s[u]],t?[r[u],r[c]]=[r[c],r[u]]:[o[u],o[c]]=[o[c],o[u]],u)for(let p=0;p<u;p++)[a[u][p],a[c][p]]=[a[c][p],a[u][p]]}else if(!f)continue;for(let p=u+1;p<l;p++){const v=s[p][u]/s[u][u];for(let w=u;w<l;w++)s[p][w]+=-s[u][w]*v,a[p][w]+=a[u][w]*v}}return t?[r,a,s]:[o,a,s]}function k4(e,t,r){for(let o=0;o<r;o++){const a=t[o];for(let s=0;s<o;s++)for(let l=0;l<r;l++)a[l]-=e[o][s]*t[s][l];for(let s=0;s<r;s++)a[s]/=e[o][o]}return t}function E4(e,t,r){for(let a=r-1;a>-1;a--){const s=t[a];for(let l=a+1;l<r;l++)for(var o=0;o<r;o++)s[o]-=e[a][l]*t[l][o];for(let l=0;l<r;l++)t[a][l]/=e[a][a]}return t}function S4(e,t,r){for(let o=0;o<r;o++){let a=t[o];for(let s=0;s<o;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function M4(e,t,r){for(let o=r-1;o>-1;o--){let a=t[o];for(let s=o+1;s<r;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function A4(e){const[t,r,o]=Il(e),a=r.length;if(r.map((s,l)=>s[l]*o[l][l]).reduce((s,l)=>s*l,1)===0)throw new Error("Matrix is singular");return E4(o,k4(r,t,a),a)}function x4(e,t){const[r,o,a]=Il(e,{pIndices:!0}),s=o.length;if(o.map((l,u)=>l[u]*a[u][u]).reduce((l,u)=>l*u,1)===0)throw new Error("Matrix is singular");return M4(a,S4(o,r.map(l=>t[l]),s),s)}var I4=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},In=new I4,fr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:o,max:a}=r.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Ml(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=Ml(this.coordRange,r,e),El(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return ao(e,this)?e:new this(e,t)}},Cl=Symbol("instance"),Gu=class pp{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Cl]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(l=>Fu.get(l,s))}))}serializeCoords(t,r,o){return o=t.map((a,s)=>Fu.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([o,a],s)=>{let l=t[s];if(Fe(l)||isNaN(l))return l;let u=r[s],c=this.coords[s].find(f=>f.type==u);if(!c){let f=a.name||o;throw new TypeError(`${u??l?.raw??l} not allowed for ${f} in ${this.name}()`)}return l=c.resolve(l),c.range&&(r[s]=c.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ao(t,this)?t:t[Cl]?t[Cl]:new pp(t,...r)}},Kt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Ol(e){return Array.isArray(e)?e:Kt[e]}function Ia(e,t,r,o={}){if(e=Ol(e),t=Ol(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:o};if(In.run("chromatic-adaptation-start",a),a.M||(a.W1===Kt.D65&&a.W2===Kt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Kt.D50&&a.W2===Kt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),In.run("chromatic-adaptation-end",a),a.M)return Xe(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Wu(e,t){let r={str:String(e)?.trim(),options:t};if(In.run("parse-start",r),r.color)return r.color;r.parsed=O4(r.str);let o,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,u,c=r.parsed.args,f=c.map((w,g)=>r.parsed.argMeta[g]?.type);if(s==="color"){let w=c.shift();f.shift();let g=w.startsWith("--")?w.substring(2):`--${w}`,b=[w,g];if(l=we.findFormat({name:s,id:b,type:"function"}),!l){let y,_=w in we.registry?w:g;if(_ in we.registry){let S=we.registry[_].formats?.color?.id;S&&(y=`Did you mean ${e.replace("color("+w,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(y??"Missing a plugin?"))}u=l.space,l.id.startsWith("--")&&!w.startsWith("--")&&fr.warn(`${u.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${w}).`),w.startsWith("--")&&!l.id.startsWith("--")&&fr.warn(`${u.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${w}).`)}else l=we.findFormat({name:s,type:"function"}),u=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:f,commas:r.parsed.commas});let p=1;r.parsed.lastAlpha&&(p=r.parsed.args.pop(),a&&(a.alphaType=f.pop()));let v=l.coords.length;if(c.length!==v)throw new TypeError(`Expected ${v} coordinates for ${u.id} in ${r.str}), got ${c.length}`);c=l.coerceCoords(c,f),o={spaceId:u.id,coords:c,alpha:p}}else e:for(let s of we.all)for(let l in s.formats){let u=s.formats[l];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let c=s.getFormat(u),f=c.parse(r.str);if(f){a&&Object.assign(a,{format:c,formatId:l}),o=f;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=Fe(o.alpha)?o.alpha:o.alpha===void 0?1:Wr(0,o.alpha,1),o}var Uu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ca={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Uu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function C4(e){let t={},r=e.match(Ca.unitValue)?.[0],o=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(o.slice(0,-r.length)),o=t.unitless*Uu[r]):Ca.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function O4(e){if(!e)return;e=e.trim();let t=e.match(Ca.function);if(t){let r=[],o=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(Ca.singleArgument,(u,c)=>{let{value:f,meta:p}=C4(c);return(u.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(f),o.push(p),""});return{name:s,args:r,argMeta:o,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Pe(e,t){if(Array.isArray(e))return e.map(o=>Pe(o,t));if(!e)throw new TypeError("Empty color reference");Oo(e)&&(e=Wu(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=we.get(r)),e.alpha===void 0&&(e.alpha=1),e}var T4=75e-6,we=class Hr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Hr.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(a=>Hr.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let r=t.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let o=t.white??this.base.white??"D65";this.white=Ol(o),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Hr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:L4(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),In.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=T4}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let o=Object.values(this.coords);return t.every((a,s)=>{let l=o[s];if(l.type!=="angle"&&l.range){if(Fe(a))return!0;let[u,c]=l.range;return(u===void 0||a>=u-r)&&(c===void 0||a<=c+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let t in this.coords)if(this.coords[t].type==="angle")return t;return null}get hueIndex(){return Object.keys(this.coords).findIndex(t=>this.coords[t].type==="angle")}get isPolar(){return this.hueId!==null}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Gu.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const u=Pe(t);[t,r]=[u.space,u.coords]}if(t=Hr.get(t),this.equals(t))return r;r=r.map(u=>Fe(u)?0:u);let o=this.path,a=t.path,s,l;for(let u=0;u<o.length&&o[u].equals(a[u]);u++)s=o[u],l=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=o.length-1;u>l;u--)r=o[u].toBase(r);for(let u=l+1;u<a.length;u++)r=a[u].fromBase(r);return r}from(t,r){if(arguments.length===1){const o=Pe(t);[t,r]=[o.space,o.coords]}return t=Hr.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let o=this.coords[r],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Hr.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let o of r.aliases)this.register(o,r);return r}static get(t,...r){if(!t||ao(t,this))return t;if(xn(t)==="string"){let o=Hr.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Hr.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Hr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of r)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let u=s.ids||[s.id],c=Array.isArray(t.id)?t.id:[t.id];l&&=c.some(f=>u.includes(f))}if(l){let u=Gu.get(s,o);return u!==s&&(o.formats[s.name]=u),u}}return null}static resolveCoord(t,r){let o=xn(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Hr.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=xn(s),o==="number"||o==="string"&&s>=0){let c=Object.entries(a.coords)[s];if(c)return{space:a,id:c[0],index:s,...c[1]}}a=Hr.get(a);let l=s.toLowerCase(),u=0;for(let c in a.coords){let f=a.coords[c];if(c.toLowerCase()===l||f.name?.toLowerCase()===l)return{space:a,id:c,index:u,...f};u++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function L4(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Lt=new we({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Ct=class extends we{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Lt);let t=e.toXYZ_M??e.M?.toXYZ,r=e.fromXYZ_M??e.M?.fromXYZ;e.referred??="display",super(e),t&&r&&(this.M.toXYZ=t,this.M.fromXYZ=r)}toBase(e){let t=Xe(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Ia(this.white,this.base.white,t)),t}fromBase(e){return e=Ia(this.base.white,this.white,e),Xe(e,this.M.fromXYZ)}},Tl=new we({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Lt,fromBase:e=>Ia(Lt.white,"D50",e),toBase:e=>Ia("D50",Lt.white,e)}),R4=216/24389,Vu=24/116,Oa=24389/27,Ll=Kt.D50,pr=new we({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ll,base:Tl,fromBase(e){let t=e.map((r,o)=>r/Ll[o]).map(r=>r>R4?Math.cbrt(r):(Oa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,o]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-o/200,[a[0]>Vu?Math.pow(a[0],3):(116*a[0]-16)/Oa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Oa,a[2]>Vu?Math.pow(a[2],3):(116*a[2]-16)/Oa].map((s,l)=>s*Ll[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Cr(e){return typeof e!="number"?e:(e%360+360)%360}function qu(e,t){let[r,o]=t,a=Fe(r),s=Fe(o);if(a&&s)return[r,o];if(a?r=o:s&&(o=r),e==="raw")return t;r=Cr(r),o=Cr(o);let l=o-r;return e==="increasing"?l<0&&(o+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:o+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(o+=360)),[r,o]}var zt=new we({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:pr,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[t,r,o]=e,a=Math.abs(r)<this.ε&&Math.abs(o)<this.ε,s=a?null:Cr(Math.atan2(o,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+o**2),s]},toBase(e){let[t,r,o]=e,a=null,s=null;return Fe(o)||(r=r<0?0:r,a=r*Math.cos(o*Math.PI/180),s=r*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Zu=25**7,Ta=Math.PI,ju=180/Ta,To=Ta/180;function Ku(e){const t=e*e;return t*t*t*e}function Yu(e,t,{kL:r=1,kC:o=1,kH:a=1}={}){[e,t]=Pe([e,t]);let[s,l,u]=pr.from(e),c=zt.from(pr,[s,l,u])[1],[f,p,v]=pr.from(t),w=zt.from(pr,[f,p,v])[1];c<0&&(c=0),w<0&&(w=0);let g=Ku((c+w)/2),b=.5*(1-Math.sqrt(g/(g+Zu))),y=(1+b)*l,_=(1+b)*p,S=Math.sqrt(y**2+u**2),A=Math.sqrt(_**2+v**2),O=y===0&&u===0?0:Math.atan2(u,y),T=_===0&&v===0?0:Math.atan2(v,_);O<0&&(O+=2*Ta),T<0&&(T+=2*Ta),O*=ju,T*=ju;let D=f-s,j=A-S,V=T-O,ne=O+T,F=Math.abs(V),pe;S*A===0?pe=0:F<=180?pe=V:V>180?pe=V-360:V<-180?pe=V+360:fr.warn("the unthinkable has happened");let ye=2*Math.sqrt(A*S)*Math.sin(pe*To/2),P=(s+f)/2,J=(S+A)/2,M=Ku(J),ee;S*A===0?ee=ne:F<=180?ee=ne/2:ne<360?ee=(ne+360)/2:ee=(ne-360)/2;let Ce=(P-50)**2,de=1+.015*Ce/Math.sqrt(20+Ce),Re=1+.045*J,ae=1;ae-=.17*Math.cos((ee-30)*To),ae+=.24*Math.cos(2*ee*To),ae+=.32*Math.cos((3*ee+6)*To),ae-=.2*Math.cos((4*ee-63)*To);let Ie=1+.015*J*ae,U=30*Math.exp(-1*((ee-275)/25)**2),W=2*Math.sqrt(M/(M+Zu)),Ae=-1*Math.sin(2*U*To)*W,ge=(D/(r*de))**2;return ge+=(j/(o*Re))**2,ge+=(ye/(a*Ie))**2,ge+=Ae*(j/(o*Re))*(ye/(a*Ie)),Math.sqrt(ge)}var ki={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},Or=new we({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Lt,M:ki,fromBase(e){let t=Xe(e,ki.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Xe(t,ki.LMStoLab,t)},toBase(e){let t=Xe(e,ki.LabtoLMS);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Xe(t,ki.LMStoXYZ,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Rl(e,t){[e,t]=Pe([e,t]);let[r,o,a]=Or.from(e),[s,l,u]=Or.from(t),c=r-s,f=o-l,p=a-u;return Math.sqrt(c**2+f**2+p**2)}var P4=75e-6;function Lo(e,t,{epsilon:r=P4}={}){e=Pe(e),t||(t=e.space),t=we.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:r})}function qe(e,t,{inGamut:r}={}){e=Pe(e),t=we.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return r&&(a=dn(a,r===!0?void 0:r)),a}qe.returns="color";function Ei(e,t){e=Pe(e);let r=we.get(t,t?.space),o=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),o===void 0?a:a.map(s=>Sl(s,o))}function mr(e,t){if(e=Pe(e),t==="alpha")return e.alpha??1;let{space:r,index:o}=we.resolveCoord(t,e.space);return Ei(e,r)[o]}var Cn=new we({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Or,fromBase:zt.fromBase,toBase:zt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Pl(e,t,r,o){return e=Pe(e),Array.isArray(t)&&([t,r,o]=[e.space,t,r]),t=we.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),o!==void 0&&(e.alpha=o),e}Pl.returns="color";function cn(e,t,r){if(e=Pe(e),arguments.length===2&&xn(arguments[1])==="object"){let o=arguments[1];for(let a in o)cn(e,a,o[a])}else if(typeof r=="function"&&(r=r(mr(e,t))),t==="alpha")e.alpha=r;else{let{space:o,index:a}=we.resolveCoord(t,e.space),s=Ei(e,o);s[a]=r,Pl(e,o,s)}return e}cn.returns="color";function Ro(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Xu(e,t,r="lab"){r=we.get(r);let o=r.from(e),a=r.from(t);return Math.sqrt(o.reduce((s,l,u)=>{let c=a[u];return Fe(l)||Fe(c)?s:s+(c-l)**2},0))}function $4(e,t){return Xu(e,t,"lab")}var Ju=Math.PI/180;function D4(e,t,{l:r=2,c:o=1}={}){[e,t]=Pe([e,t]);let[a,s,l]=pr.from(e),[,u,c]=zt.from(pr,[a,s,l]),[f,p,v]=pr.from(t),w=zt.from(pr,[f,p,v])[1];u<0&&(u=0),w<0&&(w=0);let g=a-f,b=u-w,y=s-p,_=l-v,S=y**2+_**2-b**2,A=.511;a>=16&&(A=.040975*a/(1+.01765*a));let O=.0638*u/(1+.0131*u)+.638,T;Fe(c)&&(c=0),c>=164&&c<=345?T=.56+Math.abs(.2*Math.cos((c+168)*Ju)):T=.36+Math.abs(.4*Math.cos((c+35)*Ju));let D=Math.pow(u,4),j=Math.sqrt(D/(D+1900)),V=O*(j*T+1-j),ne=(g/(r*A))**2;return ne+=(b/(o*O))**2,ne+=S/V**2,Math.sqrt(ne)}var Qu=203,$l=new we({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Lt,fromBase(e){return e.map(t=>t*Qu)},toBase(e){return e.map(t=>t/Qu)}}),e0=1.15,t0=.66,r0=2610/2**14,z4=2**14/2610,n0=3424/4096,o0=2413/128,i0=2392/128,B4=1.7*2523/32,a0=32/(1.7*2523),s0=-.56,Dl=16295499532821565e-27,Si={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},l0=new we({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:$l,M:Si,fromBase(e){let[t,r,o]=e,a=e0*t-.1499999999999999*o,s=t0*r- -.33999999999999997*t,l=Xe([a,s,o],Si.XYZtoCone).map(function(p){let v=n0+o0*ct(p/1e4,r0),w=1+i0*ct(p/1e4,r0);return ct(v/w,B4)}),[u,c,f]=Xe(l,Si.ConetoIab);return[.43999999999999995*u/(1+s0*u)-Dl,c,f]},toBase(e){let[t,r,o]=e,a=(t+Dl)/(.43999999999999995-s0*(t+Dl)),s=Xe([a,r,o],Si.IabtoCone).map(function(p){let v=n0-ct(p,a0),w=i0*ct(p,a0)-o0;return 1e4*ct(v/w,z4)}),[l,u,c]=Xe(s,Si.ConetoXYZ),f=(l+.1499999999999999*c)/e0;return[f,(u+-.33999999999999997*f)/t0,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),zl=new we({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:l0,fromBase:zt.fromBase,toBase:zt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function N4(e,t){[e,t]=Pe([e,t]);let[r,o,a]=zl.from(e),[s,l,u]=zl.from(t),c=r-s,f=o-l;Fe(a)&&Fe(u)?(a=0,u=0):Fe(a)?a=u:Fe(u)&&(u=a);let p=a-u,v=2*Math.sqrt(o*l)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(c**2+f**2+v**2)}var c0=3424/4096,d0=2413/128,u0=2392/128,h0=2610/16384,H4=2523/32,F4=16384/2610,f0=32/2523,Mi={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Bl=new we({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:$l,M:Mi,fromBase(e){return G4(Xe(e,Mi.XYZtoLMS))},toBase(e){let t=W4(e);return Xe(t,Mi.LMStoXYZ)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function G4(e){let t=e.map(function(r){return((c0+d0*(r/1e4)**h0)/(1+u0*(r/1e4)**h0))**H4});return Xe(t,Mi.LMStoIPT)}function W4(e){return Xe(e,Mi.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**f0-c0,0)/(d0-u0*t**f0))**F4})}function U4(e,t){[e,t]=Pe([e,t]);let[r,o,a]=Bl.from(e),[s,l,u]=Bl.from(t);return 720*Math.sqrt((r-s)**2+.25*(o-l)**2+(a-u)**2)}function V4(e,t){[e,t]=Pe([e,t]);let r=2,[o,a,s]=Or.from(e),[l,u,c]=Or.from(t),f=o-l,p=r*(a-u),v=r*(s-c);return Math.sqrt(f**2+p**2+v**2)}var q4=Kt.D65,p0=.42,m0=1/p0,Nl=2*Math.PI,Ai={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},Z4={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},so={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},j4=180/Math.PI,g0=Math.PI/180;function v0(e,t){return e.map(r=>{const o=ct(t*Math.abs(r)*.01,p0);return 400*xa(o,r)/(o+27.13)})}function K4(e,t){const r=100/t*27.13**m0;return e.map(o=>{const a=Math.abs(o);return xa(r*ct(a/(400-a),m0),o)})}function Y4(e){let t=Cr(e);t<=so.h[0]&&(t+=360);const r=Hu(so.h,t)-1,[o,a]=so.h.slice(r,r+2),[s,l]=so.e.slice(r,r+2),u=so.H[r],c=(t-o)/s;return u+100*c/(c+(a-t)/l)}function X4(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[o,a]=so.h.slice(r,r+2),[s,l]=so.e.slice(r,r+2);return Cr((t*(l*o-s*a)-100*o*l)/(t*(l-s)-100*l))}function b0(e,t,r,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const l=e.map(b=>b*100);s.la=t,s.yb=r;const u=l[1],c=Xe(l,Ai.cat16);let f=Z4[s.surround];const p=f[0];s.c=f[1],s.nc=f[2];const v=(1/(5*s.la+1))**4;s.fl=v*s.la+.1*(1-v)*(1-v)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const w=a?1:Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=c.map(b=>yi(1,u/b,w)),s.dRgbInv=s.dRgb.map(b=>1/b);const g=v0(c.map((b,y)=>b*s.dRgb[y]),s.fl);return s.aW=s.nbb*(2*g[0]+g[1]+.05*g[2]),s}var w0=b0(q4,64/Math.PI*.2,20,"average",!1);function _0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Cr(e.h)*g0:r=X4(e.H)*g0;const o=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=ct(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const u=ct(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),c=.25*(Math.cos(r+2)+3.8),f=t.aW*ct(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*c,v=f/t.nbb,w=23*(v+.305)*Al(u,23*p+u*(11*o+108*a)),g=w*o,b=w*a,y=K4(Xe([v,g,b],Ai.m1).map(_=>_*1/1403),t.fl);return Xe(y.map((_,S)=>_*t.dRgbInv[S]),Ai.cat16Inv).map(_=>_/100)}function y0(e,t){const r=e.map(A=>A*100),o=v0(Xe(r,Ai.cat16).map((A,O)=>A*t.dRgb[O]),t.fl),a=o[0]+(-12*o[1]+o[2])/11,s=(o[0]+o[1]-2*o[2])/9,l=(Math.atan2(s,a)%Nl+Nl)%Nl,u=.25*(Math.cos(l+2)+3.8),c=5e4/13*t.nc*t.ncb*Al(u*Math.sqrt(a**2+s**2),o[0]+o[1]+1.05*o[2]+.305),f=ct(c,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),p=t.nbb*(2*o[0]+o[1]+.05*o[2]),v=ct(p/t.aW,.5*t.c*t.z),w=100*ct(v,2),g=4/t.c*v*(t.aW+4)*t.flRoot,b=f*v,y=b*t.flRoot,_=Cr(l*j4),S=Y4(_);return{J:w,C:b,h:_,s:50*ct(t.c*f/(t.aW+4),1/2),Q:g,M:y,H:S}}var J4=new we({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Lt,M:Ai,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=y0(e,w0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return _0({J:e[0],M:e[1],h:e[2]},w0)}}),Q4=Kt.D65,e3=216/24389,k0=24389/27;function t3(e){return 116*(e>e3?Math.cbrt(e):(k0*e+16)/116)-16}function Hl(e){return e>8?Math.pow((e+16)/116,3):e/k0}function r3(e,t){let[r,o,a]=e,s=[],l=0;if(a===0)return[0,0,0];let u=Hl(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const c=2e-12,f=15;let p=0,v=1/0,w=[0,0,0];for(;p<=f;){s=_0({J:l,C:o,h:r},t);const g=Math.abs(s[1]-u);if(g<v){if(g<=c)return s;w=s,v=g}l=l-(s[1]-u)*l/(2*s[1]),p+=1}return w}function n3(e,t){const r=t3(e[1]);if(r===0)return[0,0,0];const o=y0(e,La);return[Cr(o.h),o.C,r]}var La=b0(Q4,200/Math.PI*Hl(50),Hl(50)*100,"average",!1),xi=new we({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Lt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=n3(e,La);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return r3(e,La)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});180/Math.PI;var o3=Math.PI/180,E0=[1,.007,.0228];function S0(e){e[1]<0&&(e=xi.fromBase(xi.toBase(e)));const t=Math.log(Math.max(1+E0[2]*e[1]*La.flRoot,1))/E0[2],r=e[0]*o3,o=t*Math.cos(r),a=t*Math.sin(r);return[e[2],o,a]}function i3(e,t){[e,t]=Pe([e,t]);let[r,o,a]=S0(xi.from(e)),[s,l,u]=S0(xi.from(t));return Math.sqrt((r-s)**2+(o-l)**2+(a-u)**2)}var{cos:Qe,sin:et,sqrt:Po,atan2:Ut,exp:$o,abs:Fl,pow:Ra,PI:a3}=Math,s3=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],l3=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],c3=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],d3=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Gl=[.47229813098762524,.5149184096354483,.5113233386366979],Wl=[2.1173067060606283,1.9420552485353544,1.9557096741686448],u3=[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],h3=[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]],lo={CAT_TO_HELM:s3,CAT_FROM_HELM:l3,M1:c3,M1_INV:d3,M2:u3,M2_INV:h3},f3=-.02833024015436984,M0=-.21131429516166544,A0=.2189784817615645,x0=-.06871898981942523,I0=.005506053349515315,C0=-.0641329861299175,O0=-.053592461436994296,T0=-.00954137464208059,L0=.2676231133101982,R0=.8934892185255707,P0=.7173169828841472,$0=.6915224124600773,D0=.48647127559605596,z0=.9853124591201782,Ul=.5385456675962418,Vl=.12508858146241716,ql=.6768950256217603,B0=-.4963251525324449,N0=-.09564696283240552,H0=-.029053748937210654,F0=1.3346761652952872,G0=-.1698908144723919,p3=-.195370576218515,m3=.5330819227283227,g3=.08863325582067766,v3=.9365540137751136,b3=.13789738139719568,w3=.061650260197979936,_3=.0641970862504494,y3=-.027401052793571013,k3=-.09900209889026965,E3=.059635520647228726,S3=-.013586499967803128,M3=.2253393118474472,A3=-1.5239477450767043,x3=-1.751157310240011,I3=-.43576378069144767,C3=1.060094063845983,O3=.47931193034584496,T3=-.2622579649434462,L3=.13610794232685908,R3=.1168702235362288,P3=-.01617739641422492,$3=.038145638815030566,W0=-28.2*a3/180,Pa=Qe(W0),$a=et(W0);function U0(e){return f3*Qe(e)+M0*et(e)+A0*Qe(2*e)+x0*et(2*e)+I0*Qe(3*e)+C0*et(3*e)+O0*Qe(4*e)+T0*et(4*e)}function D3(e){return .02833024015436984*et(e)+M0*Qe(e)+-2*A0*et(2*e)+2*x0*Qe(2*e)+-3*I0*et(3*e)+3*C0*Qe(3*e)+-4*O0*et(4*e)+4*T0*Qe(4*e)}function V0(e){let t=p3*Qe(e)+m3*et(e)+g3*Qe(2*e)+v3*et(2*e)+b3*Qe(3*e)+w3*et(3*e)+_3*Qe(4*e)+y3*et(4*e);return $o(t)}function q0(e){let t=e-.5;return $o(Wr(-30,A3*t+x3*t*t,30))}function Z0(e,t){let r=I3*Qe(e)+C3*et(e)+O3*Qe(2*e)+T3*et(2*e);return $o(Wr(-30,(t-.5)*r,30))}function j0(e){let t=L3*Qe(e)+R3*et(e)+P3*Qe(2*e)+$3*et(2*e);return $o(t)}function K0(e){return 1+k3*Qe(e)+E3*et(e)+S3*Qe(2*e)+M3*et(2*e)}function z3(e,t){let r=e*(1-e),o=e+Ul*r+Vl*r*(.5-e)+ql*r*r;return o+=r*(B0*Qe(t)+N0*et(t)),o}function B3(e,t){let r=B0*Qe(t)+N0*et(t),o=e;for(let a=0;a<15;a++){let s=o*(1-o),l=1-2*o,u=o+(Ul+r)*s+Vl*s*(.5-o)+ql*s*s-e,c=1+(Ul+r)*l+Vl*(l*(.5-o)-s)+ql*2*s*l;Fl(c)<1e-10&&(c=1),o-=u/c}return o}function N3(e,t){let r=H0+F0*Qe(t)+G0*et(t),o=e<1?1-e:0,a=r*e*o*o;return e*$o(Wr(-30,a,30))}function H3(e,t){let r=H0+F0*Qe(t)+G0*et(t),o=e;for(let a=0;a<12;a++){let s=o<1?1-o:0,l=r*o*s*s,u=$o(Wr(-30,l,30)),c=o*u-e,f=r*s*(1-3*o),p=u*(1+o*f);Fl(p)<1e-10&&(p=1),o-=c/p}return o}var F3=function(e){let t=Xe(e,lo.CAT_TO_HELM),[r,o,a]=Xe(t,lo.M1),s=ct(r,Gl[0]),l=ct(o,Gl[1]),u=ct(a,Gl[2]),[c,f,p]=Xe([s,l,u],lo.M2),v=Ut(p,f),w=Po(f*f+p*p),g=U0(v),b=v+g;f=w*Qe(b),p=w*et(b);let y=Po(f*f+p*p),_=L0*Ra(y,Wr(.01,R0,10)),S=Ut(p,f),A=1+P0*Qe(S)+$0*et(S)+D0*Qe(2*S)+z0*et(2*S);c+=_*A,v=Ut(p,f),c=z3(c,v),v=Ut(p,f),c=N3(c,v),v=Ut(p,f);let O=V0(v);f*=O,p*=O,v=Ut(p,f),w=Po(f*f+p*p);let T=K0(v),D=w>0?Ra(w,T):0;f=D*Qe(v),p=D*et(v);let j=q0(c);f*=j,p*=j,v=Ut(p,f);let V=Z0(v,c);f*=V,p*=V,v=Ut(p,f),c*=j0(v);let ne=f*Pa-p*$a,F=f*$a+p*Pa;return[c,ne,F]},G3=function(e){let[t,r,o]=e,a=r*Pa+o*$a,s=-r*$a+o*Pa;r=a,o=s;let l=Ut(o,r);t/=j0(l),l=Ut(o,r);let u=Z0(l,t);r/=u,o/=u;let c=q0(t);r/=c,o/=c,l=Ut(o,r);let f=Po(r*r+o*o),p=K0(l),v=f>0?Ra(f,1/p):0;r=v*Qe(l),o=v*et(l),l=Ut(o,r);let w=V0(l);r/=w,o/=w,l=Ut(o,r),t=H3(t,l),l=Ut(o,r),t=B3(t,l);let g=Po(r*r+o*o),b=L0*Ra(g,Wr(.01,R0,10)),y=Ut(o,r),_=1+P0*Qe(y)+$0*et(y)+D0*Qe(2*y)+z0*et(2*y);t-=b*_;let S=Ut(o,r);f=Po(r*r+o*o);let A=S;for(let pe=0;pe<8;pe++){let ye=A+U0(A)-S,P=1+D3(A);Fl(P)<1e-10&&(P=1),A-=ye/P}r=f*Qe(A),o=f*et(A);let[O,T,D]=Xe([t,r,o],lo.M2_INV),j=ct(O,Wl[0]),V=ct(T,Wl[1]),ne=ct(D,Wl[2]),F=Xe([j,V,ne],lo.M1_INV);return Xe(F,lo.CAT_FROM_HELM)},Zl=new we({id:"helmlab-metric",name:"Helmlab MetricSpace",cssId:"--helmlab-metric",coords:{l:{refRange:[0,1.6],name:"Lightness"},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:"D65",base:Lt,M:lo,fromBase(e){return F3(e)},toBase(e){return G3(e)}}),W3=-.9155125151657894,U3=2.9268353744941558,V3=3.966003089807536,q3=1.9737081170404969,Z3=52.473130649294724,j3=.47897301074925214;function K3(e,t){[e,t]=Pe([e,t]);let[r,o,a]=Zl.from(e),[s,l,u]=Zl.from(t),c=r-s,f=o-l,p=a-u,v=(r+s)*.5,w=1+W3*(v-.5)**2,g=(Math.sqrt(o**2+a**2)+Math.sqrt(l**2+u**2))*.5,b=1+U3*g,y=(c**2/w**2+V3*(f**2+p**2)/b**2)**(q3/2);return(y/(1+Z3*y))**j3}var Do={deltaE76:$4,deltaECMC:D4,deltaE2000:Yu,deltaEJz:N4,deltaEITP:U4,deltaEOK:Rl,deltaEOK2:V4,deltaEHCT:i3,deltaEHelmlab:K3};function Y3(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Y0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function dn(e,{method:t=fr.gamut_mapping,space:r=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Pe(e),Oo(arguments[1])?r=arguments[1]:r||(r=e.space),r=we.get(r),Lo(e,r,{epsilon:0}))return e;let l;if(t==="css")l=X3(e,{space:r});else if(t==="raytrace")l=Q3(e,{space:r});else{if(t!=="clip"){Object.prototype.hasOwnProperty.call(Y0,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=Y0[t]);let u=Yu;if(o!==""){for(let f in Do)if("deltae"+o.toLowerCase()===f.toLowerCase()){u=Do[f];break}}a===0&&(a=1e-16);let c=dn(qe(e,r),{method:"clip",space:r});if(u(e,c)>a){if(s&&Object.keys(s).length===3){let S=we.resolveCoord(s.channel),A=mr(qe(e,S.space),S.id);if(Fe(A)&&(A=0),A>=s.max)return qe({space:"xyz-d65",coords:Kt.D65},e.space);if(A<=s.min)return qe({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=we.resolveCoord(t),p=f.space,v=f.id,w=qe(e,p);w.coords.forEach((S,A)=>{Fe(S)&&(w.coords[A]=0)});let g=(f.range||f.refRange)[0],b=Y3(a),y=g,_=mr(w,v);for(;_-y>b;){let S=Ro(w);S=dn(S,{space:r,method:"clip"}),u(w,S)-a<b?y=mr(w,v):_=mr(w,v),cn(w,v,(y+_)/2)}l=qe(w,r)}else l=c}else l=qe(e,r);if(t==="clip"||!Lo(l,r,{epsilon:0})){let u=Object.values(r.coords).map(c=>c.range||[]);l.coords=l.coords.map((c,f)=>{let[p,v]=u[f];return p!==void 0&&(c=Math.max(p,c)),v!==void 0&&(c=Math.min(c,v)),c})}}return r!==e.space&&(l=qe(l,e.space)),e.coords=l.coords,e}dn.returns="color";var Da={WHITE:{space:Or,coords:[1,0,0],alpha:1},BLACK:{space:Or,coords:[0,0,0],alpha:1}};function X3(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return qe(e,t);const a=qe(e,Cn);let s=a.coords[0];if(s>=1){const g=qe(Da.WHITE,t);return g.alpha=e.alpha,qe(g,t)}if(s<=0){const g=qe(Da.BLACK,t);return g.alpha=e.alpha,qe(g,t)}if(Lo(a,t,{epsilon:0}))return qe(a,t);function l(g){const b=qe(g,t),y=Object.values(t.coords);return b.coords=b.coords.map((_,S)=>{if("range"in y[S]){const[A,O]=y[S].range;return Wr(A,_,O)}return _}),b}let u=0,c=a.coords[1],f=!0,p=Ro(a),v=l(p),w=Rl(v,p);if(w<.02)return v;for(;c-u>1e-4;){const g=(u+c)/2;if(p.coords[1]=g,f&&Lo(p,t,{epsilon:0}))u=g;else if(v=l(p),w=Rl(v,p),w<.02){if(.02-w<1e-4)break;f=!1,u=g}else c=g}return v}function J3(e,t,r=[0,0,0],o=[1,1,1]){let a=1/0,s=-1/0,l=[];for(let u=0;u<3;u++){const c=e[u],f=t[u]-c,p=r[u],v=o[u];if(l.push(f),Math.abs(f)>1e-12){const w=1/f,g=(p-c)*w,b=(v-c)*w;s=Math.max(Math.min(g,b),s),a=Math.min(Math.max(g,b),a)}else if(c<p||c>v)return[]}return s>a||a<0?[]:(s<0&&(s=a),isFinite(s)?[e[0]+l[0]*s,e[1]+l[1]*s,e[2]+l[2]*s]:[])}function Q3(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return qe(e,t);let r=qe(e,Cn),[o,a,s]=r.coords;if(o>=1){const y=qe(Da.WHITE,t);return y.alpha=e.alpha,qe(y,t)}else if(o<=0){const y=qe(Da.BLACK,t);return y.alpha=e.alpha,qe(y,t)}const l=t,u=t.rgbGamut;if(u!==void 0&&(t=u),!ao(t,Ct))throw Error("An RGB gamut is required");let[c,f]=Object.values(t.coords)[0].range,p=[f,f,f];const v=t.linearGamut;v!==void 0&&(f=qe({space:t,coords:p,alpha:e.alpha},v).coords[0],p=[f,f,f],t=v,c=Object.values(t.coords)[0].range[0]);let w=[c,c,c],g=qe(r,t);if(!g.coords.every(y=>c<=y&&y<=f)){let y=qe({space:Cn,coords:[o,0,s]},t).coords;const _=c+1e-12,S=f-1e-12;let A=g.coords;for(let O=0;O<4;O++){if(O){const D=qe(g,Cn);D.coords[0]=o,D.coords[2]=s,g=qe(D,t)}const T=J3(y,g.coords,w,p);if(T.length===0){g.coords=[...A];break}O&&g.coords.every(D=>_<D&&D<S)&&(y=[...g.coords]),A=T,g.coords=[...T]}}g=qe(g,l);const b=Object.values(l.coords);return g.coords=g.coords.map((y,_)=>{if("range"in b[_]){const[S,A]=b[_].range;return Wr(S,y,A)}return y}),g}var zo=class extends we{constructor(e){let t=we.get(e.base),r=e.chroma??"c",o=Object.keys(t.coords),a=o.indexOf(r);if(a===-1)throw new TypeError(`GamutRelativeColorSpace needs a "${r}" coordinate, got ${t.id}`);let s=Object.fromEntries(Object.entries(t.coords).map(([u,c])=>[u,{...c}]));s[r].range=[0,1],delete s[r].refRange,e.coords??=s,e.formats??={color:{coords:o.map(u=>{if(t.coords[u].type==="angle")return"<number> | <angle>";let[c,f]=t.coords[u].range??t.coords[u].refRange??[];return u===r||c===0&&f===1?"<percentage> | <number>":"<number> | <percentage>"})}},super(e),this.chromaIndex=a,this.method=`${t.id}.${r}`;let l=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...l.map(u=>t.from(this.gamutSpace,u)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,dn({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:"OK",jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((t,r)=>r!==this.chromaIndex&&Fe(t))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):Fe(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((t,r)=>r!==this.chromaIndex&&Fe(t)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!Fe(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function X0(e,t={}){if(Array.isArray(e))return e.map(c=>X0(c,t));let{cssProperty:r="background-color",element:o,...a}=t,s=null;try{return Pe(e,a)}catch(c){s=c}let{CSS:l,getComputedStyle:u}=globalThis;if(Oo(e)&&o&&l&&u&&l.supports(r,e)){let c=o.style[r];e!==c&&(o.style[r]=e);let f=u(o).getPropertyValue(r);if(e!==c&&(o.style[r]=c),f!==e)try{return Pe(f,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Bo(e,t={}){let{precision:r=fr.precision,format:o,inGamut:a=!0,coords:s,alpha:l,commas:u}=t,c,f=Pe(e),p=o,v=f.parseMeta;v&&!o&&(v.format.canSerialize()&&(o=v.format,p=v.formatId),s??=v.types,l??=v.alphaType,u??=v.commas),p&&(o=f.space.getFormat(o)??we.findFormat(p)),o||(o=f.space.getFormat("default")??we.DEFAULT_FORMAT,p=o.name),o&&o.space&&o.space!==f.space&&(f=qe(f,o.space));let w=f.coords.slice();if(a||=o.toGamut,a&&!Lo(f)&&(w=dn(Ro(f),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)c=o.serialize(w,f.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let g=o.name||"color",b=o.serializeCoords(w,r,s);if(g==="color"){let O=o.id||o.ids?.[0]||f.space.cssId||f.space.id;b.unshift(O)}let y=f.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let _=l?.type??"<number>",S=l?.include===!0||o.alpha===!0||l?.include!==!1&&o.alpha!==!1&&y<1,A="";if(u??=o.commas,S){if(r!==null){let O;_==="<percentage>"&&(O="%",y*=100),y=El(y,{precision:r,unit:O})}A=`${u?",":" /"} ${y}`}c=`${g}(${b.join(u?", ":" ")}${A})`}return c}var J0={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},Ii=new Ct({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",M:J0}),No=new Ct({id:"rec2020",name:"REC.2020",base:Ii,linearGamut:Ii,toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,1/2.4)})}}),eb={toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]},jl=new Ct({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",M:eb}),Kl={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Yl=new Ct({id:"srgb-linear",name:"Linear sRGB",white:"D65",M:Kl}),Q0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},eh=Array(3).fill("<percentage> | <number>[0, 255]"),th=Array(3).fill("<number>[0, 255]"),gr=new Ct({id:"srgb",name:"sRGB",base:Yl,linearGamut:Yl,fromBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o>.0031308?r*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o<=.04045?t/12.92:r*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:eh},rgb_number:{name:"rgb",commas:!0,coords:th,alpha:!1},color:{},rgba:{coords:eh,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:th},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Q0.black,t.alpha=0):t.coords=Q0[e],t.coords)return t}}}}),Ho=new Ct({id:"p3",cssId:"display-p3",name:"P3",base:jl,linearGamut:jl,fromBase:gr.fromBase,toBase:gr.toBase});fr.display_space=gr;var tb;if(typeof CSS<"u"&&CSS.supports)for(let e of[pr,No,Ho]){let t={space:e,coords:e.getMinCoords(),alpha:1},r=Bo(t);if(CSS.supports("color",r)){fr.display_space=e;break}}function rb(e,{space:t,supports:r=globalThis.CSS?.supports,...o}={}){e=Pe(e);let a=Bo(e,o);if(!r||r("color",a)||!fr.display_space)a=new String(a),a.color=e;else{let s=e;if((e.coords.some(Fe)||Fe(e.alpha))&&!(tb??=r("color","hsl(none 50% 50%)"))&&(s=Ro(e),s.coords=s.coords.map(It),s.alpha=It(s.alpha),a=Bo(s,o),r("color",a)))return a=new String(a),a.color=s,a;if(t===void 0){t=s.space;let l=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith("xyz-")&&(l=l.filter(u=>!u.id.startsWith("xyz-")));for(let u of l){let c=qe(s,u),f=Bo(c,o);if(r("color",f))return a=new String(f),a.color=c,a}t=fr.display_space}s=qe(s,t),a=new String(Bo(s,o)),a.color=s}return a}function nb(e,t,{space:r,hue:o="shorter"}={}){e=Pe(e),r||=e.space,r=we.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(f=>qe(f,r));let[s,l]=[e,t].map(f=>f.coords),u=s.map((f,p)=>{let v=a[p],w=l[p];return v.type==="angle"&&([f,w]=qu(o,[f,w])),rh(f,w)}),c=rh(e.alpha,t.alpha);return{space:r,coords:u,alpha:c}}function rh(e,t){return Fe(e)||Fe(t)?e===t?null:0:e-t}function ob(e,t){return e=Pe(e),t=Pe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,o)=>r===t.coords[o])}var ib=an({getLuminance:()=>On,register:()=>ab,setLuminance:()=>nh});function On(e){return mr(e,[Lt,"y"])}function nh(e,t){cn(e,[Lt,"y"],t)}function ab(e){Object.defineProperty(e.prototype,"luminance",{get(){return On(this)},set(t){nh(this,t)}})}function sb(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),o=Math.max(On(t),0);return o>r&&([r,o]=[o,r]),(r+.05)/(o+.05)}var lb=.56,cb=.57,db=.62,ub=.65,oh=.022,hb=1.414,fb=.1,pb=5e-4,mb=1.14,ih=.027,gb=1.14;function ah(e){return e>=oh?e:e+(oh-e)**hb}function Fo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function vb(e,t){t=Pe(t),e=Pe(e);let r,o,a,s,l,u;t=qe(t,"srgb"),[s,l,u]=t.coords.map(g=>Fe(g)?0:g);let c=Fo(s)*.2126729+Fo(l)*.7151522+Fo(u)*.072175;e=qe(e,"srgb"),[s,l,u]=e.coords.map(g=>Fe(g)?0:g);let f=Fo(s)*.2126729+Fo(l)*.7151522+Fo(u)*.072175,p=ah(c),v=ah(f),w=v>p;return Math.abs(v-p)<pb?o=0:w?(r=v**lb-p**cb,o=r*mb):(r=v**ub-p**db,o=r*gb),Math.abs(o)<fb?a=0:o>0?a=o-ih:a=o+ih,a*100}function bb(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),o=Math.max(On(t),0);o>r&&([r,o]=[o,r]);let a=r+o;return a===0?0:(r-o)/a}var wb=5e4;function _b(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),o=Math.max(On(t),0);return o>r&&([r,o]=[o,r]),o===0?wb:(r-o)/o}function yb(e,t){e=Pe(e),t=Pe(t);let r=mr(e,[pr,"l"]),o=mr(t,[pr,"l"]);return Math.abs(r-o)}var kb=216/24389,sh=24/116,za=24389/27,Xl=Kt.D65,Jl=new we({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Xl,base:Lt,fromBase(e){let t=e.map((r,o)=>r/Xl[o]).map(r=>r>kb?Math.cbrt(r):(za*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>sh?Math.pow(t[0],3):(116*t[0]-16)/za,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/za,t[2]>sh?Math.pow(t[2],3):(116*t[2]-16)/za].map((r,o)=>r*Xl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),Ql=Math.pow(5,.5)*.5+.5;function Eb(e,t){e=Pe(e),t=Pe(t);let r=mr(e,[Jl,"l"]),o=mr(t,[Jl,"l"]),a=Math.abs(Math.pow(r,Ql)-Math.pow(o,Ql)),s=Math.pow(a,1/Ql)*Math.SQRT2-40;return s<7.5?0:s}var Ba=an({contrastAPCA:()=>vb,contrastDeltaPhi:()=>Eb,contrastLstar:()=>yb,contrastMichelson:()=>bb,contrastWCAG21:()=>sb,contrastWeber:()=>_b});function Sb(e,t,r){Oo(r)&&(r={algorithm:r});let{algorithm:o,...a}=r||{};if(!o){let s=Object.keys(Ba).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Pe(e),t=Pe(t);for(let s in Ba)if("contrast"+o.toLowerCase()===s.toLowerCase())return Ba[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}var Mb=an({register:()=>Ab,uv:()=>Na,xy:()=>lh});function Na(e){let[t,r,o]=Ei(e,Lt),a=t+15*r+3*o;return[4*t/a,9*r/a]}function lh(e){let[t,r,o]=Ei(e,Lt),a=t+r+o;return[t/a,r/a]}function Ab(e){Object.defineProperty(e.prototype,"uv",{get(){return Na(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return lh(this)}})}function Ci(e,t,r={}){Oo(r)&&(r={method:r});let{method:o=fr.deltaE,...a}=r;for(let s in Do)if("deltae"+o.toLowerCase()===s.toLowerCase())return Do[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}var xb=an({darken:()=>dh,lighten:()=>ch});function ch(e,t=.25){let r=[we.get("oklch","lch"),"l"];return cn(e,r,o=>o*(1+t))}function dh(e,t=.25){let r=[we.get("oklch","lch"),"l"];return cn(e,r,o=>o*(1-t))}ch.returns="color",dh.returns="color";var Ib=an({isRange:()=>tc,mix:()=>uh,range:()=>Oi,register:()=>Cb,steps:()=>hh});function uh(e,t,r,o={}){return[e,t]=[Pe(e),Pe(t)],xn(r)==="object"&&([r,o]=[.5,r]),Oi(e,t,o)(r??.5)}function hh(e,t,r={}){let o;tc(e)&&([o,r]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:u=1e3,...c}=r;o||([e,t]=[Pe(e),Pe(t)],o=Oi(e,t,c));let f=Ci(e,t,s),p=a>0?Math.max(l,Math.ceil(f/a)+1):l,v=[];if(u!==void 0&&(p=Math.min(p,u)),p===1)v=[{p:.5,color:o(.5)}];else{let w=1/(p-1);v=Array.from({length:p},(g,b)=>{let y=b*w;return{p:y,color:o(y)}})}if(a>0){let w=v.reduce((g,b,y)=>{if(y===0)return 0;let _=Ci(b.color,v[y-1].color,s);return Math.max(g,_)},0);for(;w>a;){w=0;for(let g=1;g<v.length&&v.length<u;g++){let b=v[g-1],y=v[g],_=(y.p+b.p)/2,S=o(_);w=Math.max(w,Ci(S,b.color,s),Ci(S,y.color,s)),v.splice(g,0,{p:_,color:o(_)}),g++}}}return v=v.map(w=>w.color),v}function Oi(e,t,r={}){if(tc(e)){let[p,v]=[e,t];return Oi(...p.rangeArgs.colors,{...p.rangeArgs.options,...v})}let{space:o,outputSpace:a,progression:s,premultiplied:l}=r;e=Pe(e),t=Pe(t),e=Ro(e),t=Ro(t);let u={colors:[e,t],options:r};o?o=we.get(o):o=we.registry[fr.interpolationSpace]||e.space,a=a?we.get(a):o,e=qe(e,o),t=qe(t,o),e=dn(e),t=dn(t);let c=o.hueId,f=o.hueIndex;if(c){let p=r.hue=r.hue||"shorter",v=[o,c],[w,g]=[mr(e,v),mr(t,v)];Fe(w)&&!Fe(g)?w=g:Fe(g)&&!Fe(w)&&(g=w),[w,g]=qu(p,[w,g]),cn(e,v,w),cn(t,v,g)}return Fe(e.alpha)&&!Fe(t.alpha)?e.alpha=t.alpha:Fe(t.alpha)&&!Fe(e.alpha)&&(t.alpha=e.alpha),l&&(e.coords=ec(e.coords,e.alpha,f),t.coords=ec(t.coords,t.alpha,f)),Object.assign(p=>{p=s?s(p):p;let v=e.coords.map((b,y)=>{let _=t.coords[y];return yi(b,_,p)}),w=yi(e.alpha,t.alpha,p),g={space:o,coords:v,alpha:w};return l&&(g.coords=ec(g.coords,w,f,!0)),a!==o&&(g=qe(g,a)),g},{rangeArgs:u})}function ec(e,t,r,o=!1){return Fe(t)||o&&t===0?e:e.map((a,s)=>s===r||Fe(a)?a:o?a/t:a*t)}function tc(e){return xn(e)==="function"&&!!e.rangeArgs}fr.interpolationSpace="lab";function Cb(e){e.defineFunction("mix",uh,{returns:"color"}),e.defineFunction("range",Oi,{returns:"function<color>"}),e.defineFunction("steps",hh,{returns:"array<color>"})}var Ur=new we({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gr,rgbGamut:gr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[l,u,c]=[null,0,(r+t)/2],f=t-r;if(f!==0){switch(u=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case o:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-o)/f+2;break;case s:l=(o-a)/f+4}l=l*60}return u<0&&(l+=180,u=Math.abs(u)),l>=360&&(l-=360),[l,u*100,c*100]},toBase:e=>{let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let l=(s+t/30)%12,u=r*Math.min(o,1-o);return o-u*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Ob=new we({id:"hsl-p3",cssId:"--hsl-p3",name:"HSL P3",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ho,rgbGamut:Ho,fromBase:Ur.fromBase,toBase:Ur.toBase}),Tb=new we({id:"hsl-rec2020",cssId:"--hsl-rec2020",name:"HSL Rec.2020",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:No,rgbGamut:No,fromBase:Ur.fromBase,toBase:Ur.toBase}),fh=new we({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:gr,rgbGamut:gr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[l,u,c]=[null,0,t],f=t-r;if(f!==0){switch(t){case o:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-o)/f+2;break;case s:l=(o-a)/f+4}l=l*60}return c&&(u=f/c),l>=360&&(l-=360),[l,u*100,c*100]},toBase(e){let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let l=(s+t/60)%6;return o-o*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Lb=new we({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fh,rgbGamut:gr,fromBase(e){let[t,r,o]=e;return[t,o*(100-r)/100,100-o]},toBase(e){let[t,r,o]=e;r/=100,o/=100;let a=r+o;if(a>=1)return[t,0,r/a*100];let s=1-o;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Rb={toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]},rc=new Ct({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",M:Rb}),Pb=new Ct({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:rc,linearGamut:rc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),$b={toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]},nc=new Ct({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Tl,M:$b}),Db=1/512,zb=16/512,Bb=new Ct({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:nc,linearGamut:nc,toBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o<zb?t/16:r*o**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o>=Db?r*o**(1/1.8):16*t})}}),oc=1.09929682680944,ph=.018053968510807,Nb=new Ct({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Ii,linearGamut:Ii,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o<ph*4.5?t/4.5:r*Math.pow((o+oc-1)/oc,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o>=ph?r*(oc*Math.pow(o,.45)-.09929682680944008):4.5*t})}}),Hb=new zo({id:"oklch-p3",cssId:"--oklch-p3",name:"OKLCh P3",base:Cn,gamutSpace:Ho}),Fb=new zo({id:"oklch-srgb",cssId:"--oklch-srgb",name:"OKLCh sRGB",base:Cn,gamutSpace:gr}),Gb=new zo({id:"oklch-rec2020",cssId:"--oklch-rec2020",name:"OKLCh Rec.2020",base:Cn,gamutSpace:No}),Wb=new zo({id:"lch-p3",cssId:"--lch-p3",name:"LCH P3",base:zt,gamutSpace:Ho}),Ub=new zo({id:"lch-srgb",cssId:"--lch-srgb",name:"LCH sRGB",base:zt,gamutSpace:gr}),Vb=new zo({id:"lch-rec2020",cssId:"--lch-rec2020",name:"LCH Rec.2020",base:zt,gamutSpace:No}),Go=2*Math.PI,Jr={...Or.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},Ha=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ic=Number.MAX_VALUE,Fa=.206,mh=.03,Ti=1.206/1.03;function Ft(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function Li(e){return .5*(Ti*e-Fa+Math.sqrt((Ti*e-Fa)*(Ti*e-Fa)+4*mh*Ti*e))}function Wo(e){return(e**2+Fa*e)/(Ti*(e+mh))}function ac(e){let[t,r]=e;return[r/t,r/(1-t)]}function qb(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function sc(e,t){let r=Xe(e,Jr.LabtoLMS);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,Xe(r,t,r)}function Ga(e,t,r,o){let a=jb(e,t,r,o),s=sc([1,a*e,a*t],r),l=ct(1/Math.max(...s),1/3);return[l,l*a]}function Zb(e,t,r,o,a,s,l,u){let c;if(u===void 0&&(u=Ga(e,t,s,l)),(r-a)*u[1]-(u[0]-a)*o<=0)c=u[1]*a/(o*u[0]+u[1]*(a-r));else{c=u[1]*(a-1)/(o*(u[0]-1)+u[1]*(a-r));let f=r-a,p=o,v=Ft(Jr.LabtoLMS[0].slice(1),[e,t]),w=Ft(Jr.LabtoLMS[1].slice(1),[e,t]),g=Ft(Jr.LabtoLMS[2].slice(1),[e,t]),b=f+p*v,y=f+p*w,_=f+p*g,S=a*(1-c)+c*r,A=c*o,O=S+A*v,T=S+A*w,D=S+A*g,j=O**3,V=T**3,ne=D**3,F=3*b*O**2,pe=3*y*T**2,ye=3*_*D**2,P=6*b**2*O,J=6*y**2*T,M=6*_**2*D,ee=Ft(s[0],[j,V,ne])-1,Ce=Ft(s[0],[F,pe,ye]),de=Ft(s[0],[P,J,M]),Re=Ce/(Ce*Ce-.5*ee*de),ae=-ee*Re,Ie=Ft(s[1],[j,V,ne])-1,U=Ft(s[1],[F,pe,ye]),W=Ft(s[1],[P,J,M]),Ae=U/(U*U-.5*Ie*W),ge=-Ie*Ae,me=Ft(s[2],[j,V,ne])-1,Je=Ft(s[2],[F,pe,ye]),wt=Ft(s[2],[P,J,M]),Ze=Je/(Je*Je-.5*me*wt),Ue=-me*Ze;ae=Re>=0?ae:ic,ge=Ae>=0?ge:ic,Ue=Ze>=0?Ue:ic,c+=Math.min(ae,Math.min(ge,Ue))}return c}function gh(e,t,r){let[o,a,s]=e,l=Ga(a,s,t,r),u=Zb(a,s,o,1,o,t,r,l),c=ac(l),f=u/Math.min(o*c[0],(1-o)*c[1]),p=qb(a,s),v=o*p[0],w=(1-o)*p[1],g=.9*f*Math.sqrt(Math.sqrt(1/(1/v**4+1/w**4)));return v=o*.4,w=(1-o)*.8,[Math.sqrt(1/(1/v**2+1/w**2)),g,u]}function jb(e,t,r,o){let a,s,l,u,c,f,p,v;Ft(o[0][0],[e,t])>1?([a,s,l,u,c]=o[0][1],[f,p,v]=r[0]):Ft(o[1][0],[e,t])>1?([a,s,l,u,c]=o[1][1],[f,p,v]=r[1]):([a,s,l,u,c]=o[2][1],[f,p,v]=r[2]);let w=a+s*e+l*t+u*e**2+c*e*t,g=Ft(Jr.LabtoLMS[0].slice(1),[e,t]),b=Ft(Jr.LabtoLMS[1].slice(1),[e,t]),y=Ft(Jr.LabtoLMS[2].slice(1),[e,t]),_=1+w*g,S=1+w*b,A=1+w*y,O=_**3,T=S**3,D=A**3,j=3*g*_**2,V=3*b*S**2,ne=3*y*A**2,F=6*g**2*_,pe=6*b**2*S,ye=6*y**2*A,P=f*O+p*T+v*D,J=f*j+p*V+v*ne,M=f*F+p*pe+v*ye;return w=w-P*J/(J**2-.5*P*M),w}function Kb(e,t,r){let[o,a,s]=e,l=Wo(s),u=null,c=null;if(o=Cr(o)/360,l!==0&&l!==1&&a!==0){let f=Math.cos(Go*o),p=Math.sin(Go*o),[v,w,g]=gh([l,f,p],t,r),b=.8,y=1.25,_,S,A,O;a<b?(_=y*a,S=0,A=b*v,O=1-A/w):(_=5*(a-.8),S=w,A=.2*w**2*1.25**2/v,O=1-A/(g-w));let T=S+_*A/(1-O*_);u=T*f,c=T*p}return[l,u,c]}function Yb(e,t,r){let o=1e-7,a=1e-4,s=e[0],l=0,u=Li(s),c=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/Go;if(u!==0&&u!==1&&c!==0){let[v,w,g]=gh([s,e[1]/c,e[2]/c],t,r),b=.8,y=1.25,_,S,A,O;c<w?(S=b*v,A=1-S/w,O=c/(S+A*c),l=O*b):(_=w,S=.2*w**2*y**2/v,A=1-S/(g-w),O=(c-_)/(S+A*(c-_)),l=b+.2*O)}const p=Math.abs(l)<a;return p||u===0||Math.abs(1-u)<o?(f=null,p||(l=0)):f=Cr(f*360),[f,l,u]}var Wa=new we({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Or,gamutSpace:"self",M:Jr,fromBase(e){return Yb(e,Jr.toSRGBLinear,Ha)},toBase(e){return Kb(e,Jr.toSRGBLinear,Ha)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Wa.rgbGamut=new Ct({id:"okhsl-prism",cssId:"--okhsl-prism",name:"Okhsl Prism",base:Wa,fromBase(e){return Ur.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Ur.fromBase(e);return t[1]/=100,t[2]/=100,t}});var vh=new we({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Or,fromBase(e){return[Li(e[0]),e[1],e[2]]},toBase(e){return[Wo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Xb=new we({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vh,fromBase:zt.fromBase,toBase:zt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),lc={toSRGBLinear:Wa.M.toSRGBLinear};function Jb(e,t,r){let[o,a,s]=e;o=Cr(o)/360;let l=Wo(s),u=null,c=null;if(l!==0&&a!==0){let f=Math.cos(Go*o),p=Math.sin(Go*o),v=Ga(f,p,t,r),[w,g]=ac(v),b=.5,y=1-b/w,_=1-a*b/(b+g-g*y*a),S=a*g*b/(b+g-g*y*a);l=s*_;let A=s*S,O=Wo(_),T=S*O/_,D=Wo(l);A=A*D/l,l=D;let[j,V,ne]=sc([O,f*T,p*T],t),F=ct(1/Math.max(Math.max(j,V),Math.max(ne,0)),1/3);l=l*F,A=A*F,u=A*f,c=A*p}return[l,u,c]}function Qb(e,t,r){let o=1e-4,a=e[0],s=0,l=Li(a),u=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/Go;if(a!==0&&a!==1&&u!==0){let f=e[1]/u,p=e[2]/u,v=Ga(f,p,t,r),[w,g]=ac(v),b=.5,y=1-b/w,_=g/(u+a*g),S=_*a,A=_*u,O=Wo(S),T=A*O/S,[D,j,V]=sc([O,f*T,p*T],t),ne=ct(1/Math.max(Math.max(D,j),Math.max(V,0)),1/3);a=a/ne,u=u/ne,u=u*Li(a)/a,a=Li(a),l=a/S,s=(b+g)*A/(g*b+g*y*A)}return Math.abs(s)<o||l===0?c=null:c=Cr(c*360),[c,s,l]}var cc=new we({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Or,gamutSpace:"self",M:lc,fromBase(e){return Qb(e,lc.toSRGBLinear,Ha)},toBase(e){return Jb(e,lc.toSRGBLinear,Ha)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});cc.rgbGamut=new Ct({id:"okhsv-prism",cssId:"--okhsv-prism",name:"Okhsv Prism",base:cc,fromBase(e){return Ur.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Ur.fromBase(e);return t[1]/=100,t[2]/=100,t}});var bh=Kt.D65,e6=216/24389,wh=24389/27,[_h,yh]=Na({space:Lt,coords:bh}),kh=new we({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:bh,base:Lt,fromBase(e){let t=[It(e[0]),It(e[1]),It(e[2])],r=t[1],[o,a]=Na({space:Lt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=r<=e6?wh*r:116*Math.cbrt(r)-16;return[s,13*s*(o-_h),13*s*(a-yh)]},toBase(e){let[t,r,o]=e;if(t===0||Fe(t))return[0,0,0];r=It(r),o=It(o);let a=r/(13*t)+_h,s=o/(13*t)+yh,l=t<=8?t/wh:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dc=new we({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:kh,fromBase:zt.fromBase,toBase:zt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),t6=216/24389,r6=24389/27,un=Kl.fromXYZ,Eh=un[0][0],Sh=un[0][1],uc=un[0][2],Mh=un[1][0],Ah=un[1][1],hc=un[1][2],xh=un[2][0],Ih=un[2][1],fc=un[2][2];function Uo(e,t,r){const o=t/(Math.sin(r)-e*Math.cos(r));return o<0?1/0:o}function Ua(e){const t=Math.pow(e+16,3)/1560896,r=t>t6?t:e/r6,o=r*(284517*Eh-94839*uc),a=r*(838422*uc+769860*Sh+731718*Eh),s=r*(632260*uc-126452*Sh),l=r*(284517*Mh-94839*hc),u=r*(838422*hc+769860*Ah+731718*Mh),c=r*(632260*hc-126452*Ah),f=r*(284517*xh-94839*fc),p=r*(838422*fc+769860*Ih+731718*xh),v=r*(632260*fc-126452*Ih);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/c,g0i:u*e/c,g1s:l/(c+126452),g1i:(u-769860)*e/(c+126452),b0s:f/v,b0i:p*e/v,b1s:f/(v+126452),b1i:(p-769860)*e/(v+126452)}}function Ch(e,t){const r=t/360*Math.PI*2,o=Uo(e.r0s,e.r0i,r),a=Uo(e.r1s,e.r1i,r),s=Uo(e.g0s,e.g0i,r),l=Uo(e.g1s,e.g1i,r),u=Uo(e.b0s,e.b0i,r),c=Uo(e.b1s,e.b1i,r);return Math.min(o,a,s,l,u,c)}var n6=new we({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:gr,rgbGamut:gr,fromBase(e){let[t,r,o]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/Ch(Ua(t),o)*100,[o,a,t]},toBase(e){let[t,r,o]=[It(e[0]),It(e[1]),It(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Ch(Ua(o),t)/100*r,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hn=Kl.fromXYZ;hn[0][0],hn[0][1],hn[0][2],hn[1][0],hn[1][1],hn[1][2],hn[2][0],hn[2][1],hn[2][2];function Vo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Oh(e){let t=Vo(e.r0s,e.r0i),r=Vo(e.r1s,e.r1i),o=Vo(e.g0s,e.g0i),a=Vo(e.g1s,e.g1i),s=Vo(e.b0s,e.b0i),l=Vo(e.b1s,e.b1i);return Math.min(t,r,o,a,s,l)}var pc=new we({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:"self",fromBase(e){let[t,r,o]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/Oh(Ua(t))*100,[o,a,t]},toBase(e){let[t,r,o]=[It(e[0]),It(e[1]),It(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Oh(Ua(o))/100*r,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});pc.rgbGamut=new Ct({id:"hpluv-prism",cssId:"--hpluv-prism",name:"HPLuv Prism",base:pc,fromBase(e){return Ur.toBase(e)},toBase(e){return Ur.fromBase(e)}});var Va=.021,qa=Math.sqrt(Va/3),o6=qa*qa*qa,Th=.978,Lh=.058,Rh=264.5*Math.PI/180,mc=.7,i6=.37,Ri={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},Tn=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],fn=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],gc=Tn.length;function vc(e){let t=e/(2*o6),r=2*qa*Math.sinh(Math.asinh(t)/3),o=r*r*r+Va*r-e,a=3*r*r+Va,s=6*r,l=2*a*a-o*s;return Math.abs(l)>1e-30&&(r-=2*o*a/l),r}function bc(e){return e*e*e+Va*e}function Ph(e){let t=Math.max(0,Math.min(1,(e-i6)/.63));return Math.sin(Math.PI*t)**2}function a6(e,t,r){let o=Math.sqrt(t*t+r*r);if(o<1e-12)return[t,r];let a=Ph(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=s-Rh;l=l-Math.round(l/(2*Math.PI))*2*Math.PI;let u=Math.exp(-.5*(l/mc)**2),c=s+Lh*a*u;return[o*Math.cos(c),o*Math.sin(c)]}function s6(e,t,r){let o=Math.sqrt(t*t+r*r);if(o<1e-12)return[t,r];let a=Ph(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=mc*mc,u=Lh*a,c=s;for(let f=0;f<8;f++){let p=c-Rh;p=p-Math.round(p/(2*Math.PI))*2*Math.PI;let v=Math.exp(-.5*p*p/l),w=c+u*v-s,g=1+u*v*(-p/l),b=u*v*(-1/l+p*p/(l*l)),y=2*g*g-w*b;Math.abs(y)>1e-30&&(c-=2*w*g/y)}return[o*Math.cos(c),o*Math.sin(c)]}function l6(e){if(e<=0||e>=1)return e;let t=0,r=gc-1;for(;r-t>1;){let a=t+r>>1;Tn[a]<=e?t=a:r=a}let o=(e-Tn[t])/(Tn[r]-Tn[t]);return fn[t]+o*(fn[r]-fn[t])}function c6(e){if(e<=fn[0]||e>=fn[gc-1])return e;let t=0,r=gc-1;for(;r-t>1;){let a=t+r>>1;fn[a]<=e?t=a:r=a}let o=(e-fn[t])/(fn[r]-fn[t]);return Tn[t]+o*(Tn[r]-Tn[t])}var $h=new we({id:"helmgen",name:"HelmGen",cssId:"--helmgen",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:"D65",base:Lt,M:Ri,fromBase(e){let t=Xe(e,Ri.M1),r=vc(Math.max(t[0],0)),o=vc(Math.max(t[1],0)),a=vc(Math.max(t[2],0));{let c=(r+o+a)/3,f=(Math.max(r,o,a)-Math.min(r,o,a))/Math.max(Math.abs(c),1e-30),p=Math.exp(-((f/1e-5)**2));r+=p*(c-r),o+=p*(c-o),a+=p*(c-a)}let[s,l,u]=Xe([r,o,a],Ri.M2);{let c=Math.sqrt(l*l+u*u);if(c>1e-12){let f=Math.pow(c,Th)/c;l*=f,u*=f}}return s=l6(s),[l,u]=a6(s,l,u),[s,l,u]},toBase(e){let[t,r,o]=e;[r,o]=s6(t,r,o),t=c6(t);{let p=Math.sqrt(r*r+o*o);if(p>1e-12){let v=Math.pow(p,1/Th)/p;r*=v,o*=v}}let[a,s,l]=Xe([t,r,o],Ri.M2_INV);{let p=(a+s+l)/3,v=(Math.max(a,s,l)-Math.min(a,s,l))/Math.max(Math.abs(p),1e-30),w=Math.exp(-((v/1e-5)**2));a+=w*(p-a),s+=w*(p-s),l+=w*(p-l)}let u=bc(a),c=bc(s),f=bc(l);return Xe([u,c,f],Ri.M1_INV)}}),d6=new we({id:"helmgenlch",name:"HelmGenLCh",cssId:"--helmgenlch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.65],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$h,fromBase:zt.fromBase,toBase:zt.toBase}),Pi=new Ct({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",M:J0}),Dh=203,zh=2610/2**14,u6=2**14/2610,h6=2523/32,Bh=32/2523,Nh=3424/4096,Hh=2413/128,Fh=2392/128,f6=new Ct({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Pi,linearGamut:Pi,toBase(e){return e.map(function(t){return(Math.max(t**Bh-Nh,0)/(Hh-Fh*t**Bh))**u6*1e4/Dh})},fromBase(e){return e.map(function(t){let r=Math.max(t*Dh/1e4,0);return((Nh+Hh*r**zh)/(1+Fh*r**zh))**h6})}}),Gh=.17883277,Wh=.28466892,Uh=.55991073,wc=3.7743,p6=new Ct({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Pi,linearGamut:Pi,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wc:(Math.exp((t-Uh)/Gh)+Wh)/12*wc})},fromBase(e){return e.map(function(t){return t/=wc,t<=1/12?ct(3*t,.5):Gh*Math.log(12*t-Wh)+Uh})}}),Vh={};In.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=qh(e.W1,e.W2,e.options.method))}),In.add("chromatic-adaptation-end",e=>{e.M||(e.M=qh(e.W1,e.W2,e.options.method))});function Za({id:e,toCone_M:t,fromCone_M:r}){Vh[e]=arguments[0]}function qh(e,t,r="Bradford"){let o=Vh[r],[a,s,l]=_i(o.toCone_M,e),[u,c,f]=_i(o.toCone_M,t),p=[[u/a,0,0],[0,c/s,0],[0,0,f/l]],v=_i(p,o.toCone_M);return _i(o.fromCone_M,v)}Za({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Za({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Za({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Za({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Kt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Kt.ACES=[.32168/.33767,1,.34065/.33767];var m6={toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]},_c=new Ct({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Kt.ACES,M:m6}),ja=2**-16,yc=-.35828683,Ka=(Math.log2(65504)+9.72)/17.52,g6=new Ct({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[yc,Ka],name:"Red"},g:{range:[yc,Ka],name:"Green"},b:{range:[yc,Ka],name:"Blue"}},referred:"scene",base:_c,linearGamut:_c,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ja)*2:r<Ka?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ja)+9.72)/17.52:t<ja?(Math.log2(ja+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Zh=an({A98RGB:()=>Pb,A98RGB_Linear:()=>rc,ACEScc:()=>g6,ACEScg:()=>_c,CAM16_JMh:()=>J4,HCT:()=>xi,HPLuv:()=>pc,HSL:()=>Ur,HSL_P3:()=>Ob,HSL_REC2020:()=>Tb,HSLuv:()=>n6,HSV:()=>fh,HWB:()=>Lb,HelmGen:()=>$h,HelmGenLCh:()=>d6,Helmlab:()=>Zl,ICTCP:()=>Bl,JzCzHz:()=>zl,Jzazbz:()=>l0,LCH:()=>zt,LCH_P3:()=>Wb,LCH_REC_2020:()=>Vb,LCH_sRGB:()=>Ub,LCHuv:()=>dc,Lab:()=>pr,Lab_D65:()=>Jl,Luv:()=>kh,OKLCH:()=>Cn,OKLCH_P3:()=>Hb,OKLCH_REC_2020:()=>Gb,OKLCH_sRGB:()=>Fb,OKLab:()=>Or,OKLrCH:()=>Xb,OKLrab:()=>vh,Okhsl:()=>Wa,Okhsv:()=>cc,P3:()=>Ho,P3_Linear:()=>jl,ProPhoto:()=>Bb,ProPhoto_Linear:()=>nc,REC_2020:()=>No,REC_2020_Linear:()=>Ii,REC_2020_Scene_Referred:()=>Nb,REC_2100_HLG:()=>p6,REC_2100_Linear:()=>Pi,REC_2100_PQ:()=>f6,XYZ_ABS_D65:()=>$l,XYZ_D50:()=>Tl,XYZ_D65:()=>Lt,sRGB:()=>gr,sRGB_Linear:()=>Yl}),vr=class cr{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Pe(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let o,a,s;r?(o=r.space||r.spaceId,a=r.coords,s=r.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:we.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Fe(s)?s:s===void 0?1:Wr(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:u=>this.set(l,u)})}get spaceId(){return this.space.id}clone(){return new cr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=rb(this,...t);return r.color=new cr(r.color),r}static get(t,...r){return ao(t,this)?t:new cr(t,...r)}static try(t,r){if(ao(t,this))return t;let o=X0(t,r);return o?new cr(o):null}static defineFunction(t,r,o=r){let{instance:a=!0,returns:s}=o,l=function(...u){let c=r(...u);if(s==="color")c=cr.get(c);else if(s==="function<color>"){let f=c;c=function(...p){let v=f(...p);return cr.get(v)},Object.assign(c,f)}else s==="array<color>"&&(c=c.map(f=>cr.get(f)));return c};t in cr||(cr[t]=l),a&&(cr.prototype[t]=function(...u){return l(this,...u)})}static defineFunctions(t){for(let r in t)cr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(cr);else for(let r in t)cr.defineFunction(r,t[r])}};vr.defineFunctions({get:mr,getAll:Ei,set:cn,setAll:Pl,to:qe,equals:ob,inGamut:Lo,toGamut:dn,distance:Xu,deltas:nb,toString:Bo}),Object.assign(vr,{util:y4,hooks:In,WHITES:Kt,Space:we,spaces:we.registry,parse:Wu,defaults:fr});for(let e of Object.keys(Zh))we.register(Zh[e]);for(let e in we.registry)kc(e,we.registry[e]);In.add("colorspace-init-end",e=>{kc(e.id,e),e.aliases?.forEach(t=>{kc(t,e)})});function kc(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(vr.prototype,r,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,l)=>{try{return we.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,u)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:c}=we.resolveCoord([t,l]);if(c>=0)return s[c]}return Reflect.get(s,l,u)},set:(s,l,u,c)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:f}=we.resolveCoord([t,l]);if(f>=0)return s[f]=u,this.setAll(e,s),!0}return Reflect.set(s,l,u,c)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}vr.extend(Do),vr.extend({deltaE:Ci}),Object.assign(vr,{deltaEMethods:Do}),vr.extend(xb),vr.extend({contrast:Sb}),vr.extend(Mb),vr.extend(ib),vr.extend(Ib),vr.extend(Ba);var Tr=vr,Ec={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Ot={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function v6(e){try{Tr.get(e)}catch{return!0}return Tr.contrast(e,"white","Lstar")>Tr.contrast(e,"black","Lstar")}function qo(e){return v6(e)?"#FFFFFF":"#000000"}var b6=xe.default.fromPairs(xe.default.entries(vl).map(([e,t])=>[e,Ru(t)])),{IconAdjustmentsHorizontal:Ex,IconApiBook:Sx,IconArrowsHorizontal:Mx,IconArrowsLeftRight:Ax,IconArrowAutofitDown:xx,IconArrowAutofitHeight:w6,IconArrowAutofitLeft:Ix,IconArrowAutofitRight:Cx,IconArrowAutofitWidth:_6,IconArrowBigLeft:Ox,IconArrowBigRight:Tx,IconArrowsMove:Lx,IconArrowsMoveVertical:Rx,IconArrowsVertical:Px,IconBook:$x,IconBookOff:Dx,IconBookArrowLeft:zx,IconBookArrowRight:Bx,IconBooksReturn:Nx,IconBookUpload:Hx,IconBookmark:y6,IconBookmarkOff:k6,IconBookmarks:Fx,IconBoxAlignTop:Gx,IconCategory:E6,IconCheck:Ya,IconChevronLeft:Wx,IconChevronRight:Ux,IconAlertCircle:Vx,IconCircleCheck:qx,IconCircleX:Zx,IconHelp:jx,IconInfoCircle:Kx,IconComic1:Yx,IconComic1Flat:Xx,IconComic2:Jx,IconComic2Flat:Qx,IconComic3:eI,IconComic3Flat:tI,IconDeviceDesktop:rI,IconDeviceFloppy:nI,IconDeviceMobile:oI,IconDeviceTablet:iI,IconDotsVertical:aI,IconEReader1:sI,IconEReader1Flat:lI,IconEReader2:cI,IconEReader2Flat:dI,IconExternalLink:uI,IconEye:S6,IconEyeOff:M6,IconFileDownload:hI,IconFilePercent:fI,IconFolderOpen:pI,IconHandClick:mI,IconKeyboard:gI,IconLayoutDashboard:vI,IconLayoutBottombar:bI,IconLayoutBottombarInactive:wI,IconLayoutSidebar:_I,IconLayoutSidebarInactive:yI,IconLayoutSidebarRight:kI,IconLayoutSidebarRightInactive:EI,IconListNumbers:SI,IconLoader2:MI,IconLocationCog:AI,IconMenu2:xI,IconMenuDeep:II,IconMessage:CI,IconMoon:OI,IconPage:TI,IconPageFlat:LI,IconPalette:RI,IconPencil:PI,IconPencilCog:$I,IconPhoto:DI,IconPhotoOff:zI,IconPin:BI,IconPlayerPause:NI,IconPlayerPlay:HI,IconRefresh:A6,IconSettings:FI,IconSettingsOff:GI,IconSpacingHorizontal:x6,IconSpacingVertical:WI,IconSun:UI,IconTrash:VI,IconWorldCog:qI,IconX:Sc,IconZoom:ZI,IconZoomCancel:I6,IconZoomIn:C6,IconZoomInArea:jI,IconZoomOut:O6,IconZoomOutArea:KI,IconZoomPan:YI}=b6,Ln=class extends rt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Et`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=qo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return oe`
      <div style=${Xr(t)}>
        <div
          class="swatch"
          style=${Xr(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Ya} </span>
        </div>
      </div>
    `}};z([Y({type:String})],Ln.prototype,"color",void 0),z([Y({type:String})],Ln.prototype,"selected",void 0),z([Y({type:Number})],Ln.prototype,"size",void 0),z([Y({type:String})],Ln.prototype,"radius",void 0),z([Y({state:!0})],Ln.prototype,"contrastColor",void 0),z([Y({type:Boolean,reflect:!0})],Ln.prototype,"checked",void 0),Ln=z([lt("color-swatch")],Ln);function T6(e){const[t,r,o]=e.to("oklch").coords.map(c=>c??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(c=>new Tr("oklch",[c,r,o]).toString({format:"hex"}));let l=-1,u=1/0;for(let c=0;c<a.length;c++){const f=Math.abs(a[c]-t);f<u&&(u=f,l=c)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(c=>c.toUpperCase())}function L6(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function R6(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of r){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function P6(e){const t=new Array(11).fill(""),r=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(o.lightest.lightness-50)/a,u=(50-o.darkest.lightness)/s,c=o.lightest.rotate/a,f=o.darkest.rotate/s,p=o.lightest.saturate/a,v=o.darkest.saturate/s;for(let w=1;w<=a;w++){const g=a-w,b=r.clone();b.coords[2]=(b.coords[2]??0)+l*(w-.5),b.coords[0]=(b.coords[0]??0)+c*w,b.coords[1]=(b.coords[1]??0)+p*w,t[g]=b.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let w=1;w<=s;w++){const g=a+w,b=r.clone();b.coords[2]=(b.coords[2]??0)-u*(w-.5),b.coords[0]=(b.coords[0]??0)+f*w,b.coords[1]=(b.coords[1]??0)+v*w,t[g]=b.toString({format:"hex"})}return t}function $6(e){const[t,r,o]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,u=o+(100-o)*l,c=r-r*l;a[s]=new Tr("hsl",[t,c,u]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,u=o-o*l,c=r+(100-r)*l;a[s+6]=new Tr("hsl",[t,c,u]).toString({format:"hex"})}return a}function jh(e,t="steps"){let r;try{r=Tr.get(e)}catch{r=Tr.get(Ec.navy)}switch(t){case"saturation":return L6(r);case"lightness":return R6(r);case"mantine":return $6(r);case"chakra":return P6(r);default:return T6(r)}}var Rn=class extends rt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Et`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=jh(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return oe`
      ${this.gradient.map(t=>{const r=this.selected&&t.toLowerCase()===this.selected.toLowerCase(),o=qo(t);return oe`
          <div
            class="swatch"
            ?checked=${r}
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
    `}};z([Y({type:String})],Rn.prototype,"baseColor",void 0),z([Y({type:String})],Rn.prototype,"mode",void 0),z([Y({type:String,reflect:!0})],Rn.prototype,"orientation",void 0),z([Y({type:String})],Rn.prototype,"selected",void 0),z([Y({type:String,reflect:!0})],Rn.prototype,"value",void 0),z([Ht()],Rn.prototype,"gradient",void 0),Rn=z([lt("color-palette")],Rn);var Xa=class extends rt{constructor(...t){super(...t),this.value=""}static{this.styles=Et`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(Ot).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),r=[200,300,400,500,600,700,800,900,950];return t.map(o=>{const a=r.map(s=>{const l=Ot[o][s],u=qo(l),c=this.selected?.toLowerCase()===l.toLowerCase();return oe`
          <span
            title="${l}"
            class="${St({ThemeRadio:!0,selected:c})}"
            style="background-color: ${l}; color: ${u}"
            @click=${this.handleColorClick}
          >
            ${Ya}
          </span>
        `});return oe` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${a}</div>
      </div>`})}};z([Y({type:String,reflect:!0})],Xa.prototype,"value",void 0),z([Y({type:String})],Xa.prototype,"selected",void 0),Xa=z([lt("color-panel")],Xa);var Gt=class extends rt{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Et`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+r>o.right?t.right-r>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:Tr.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return oe`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Xr({stroke:qo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Tr("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return oe`
      <div
        class="saturation-panel"
        style=${Xr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Xr(o)}
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
            style=${Xr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(Ot).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>oe`
            <button
              class="swatch"
              title=${s}
              style=${Xr({backgroundColor:s})}
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
            style=${Xr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?oe`<div class=${St(t)}>${r}</div>`:""}
      `:oe`<div class=${St(t)}>${r}</div>`}parseColor(t){try{return Tr.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,o,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:o,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const o=this.colorToHsv(r);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new Tr("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=r.to("srgb").toString({format:"hex"}):o=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=r.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};z([Y({type:String})],Gt.prototype,"value",void 0),z([Y({type:String,attribute:"default-value"})],Gt.prototype,"defaultValue",void 0),z([Y({type:String})],Gt.prototype,"label",void 0),z([Y({type:String})],Gt.prototype,"hint",void 0),z([Y({type:String})],Gt.prototype,"name",void 0),z([Y({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0),z([Y({type:String,reflect:!0})],Gt.prototype,"size",void 0),z([Y({type:Array})],Gt.prototype,"swatches",void 0),z([Y({type:String})],Gt.prototype,"mode",void 0),z([Ht()],Gt.prototype,"opened",void 0),z([Ht()],Gt.prototype,"popupDirection",void 0),z([Ht()],Gt.prototype,"sourceSpace",void 0),z([Ht()],Gt.prototype,"hsv",void 0),z([Ht()],Gt.prototype,"saturationThumbPosition",void 0),z([Ht()],Gt.prototype,"hueThumbPosition",void 0),Gt=z([lt("mov-color-picker")],Gt);var D6=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()},Pn=class extends rt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Et`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),u=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${u}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return oe`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>oe`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:He}"
            >
              <button
                class="${St({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?oe`<mov-icon
                      name="${t.icon}"
                      .size=${D6(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:He}
                ${this.labelPosition!=="tooltip"?oe`<span>${t.label}</span>`:He}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};z([Y({type:String,reflect:!0})],Pn.prototype,"value",void 0),z([Y({type:String})],Pn.prototype,"labelPosition",void 0),z([Y({type:String})],Pn.prototype,"size",void 0),z([Ht()],Pn.prototype,"_options",void 0),z([An(".thumb")],Pn.prototype,"thumb",void 0),z([An("slot")],Pn.prototype,"_slotEl",void 0),Pn=z([lt("segmented-control")],Pn);var $i=class extends rt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};z([Y({type:String,reflect:!0})],$i.prototype,"value",void 0),z([Y({type:String,reflect:!0})],$i.prototype,"label",void 0),z([Y({type:String,reflect:!0})],$i.prototype,"icon",void 0),$i=z([lt("segmented-control-option")],$i);var br=class extends rt{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Et`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=oe`${this.checked?Ya:Sc}`:r=oe`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,oe`
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
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};z([Y({type:String})],br.prototype,"name",void 0),z([Y({type:String})],br.prototype,"value",void 0),z([Y({type:Boolean,reflect:!0})],br.prototype,"checked",void 0),z([Y({type:Boolean,reflect:!0,attribute:"default-checked"})],br.prototype,"defaultChecked",void 0),z([Y({type:Boolean,reflect:!0})],br.prototype,"disabled",void 0),z([Y({type:Boolean,reflect:!0})],br.prototype,"required",void 0),z([Y({type:String,reflect:!0})],br.prototype,"size",void 0),z([Y({type:String})],br.prototype,"hint",void 0),z([Y({type:String,reflect:!0})],br.prototype,"design",void 0),z([Y({type:String})],br.prototype,"textOn",void 0),z([Y({type:String})],br.prototype,"textOff",void 0),br=z([lt("mov-switch")],br);var z6=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",vt=class extends rt{static{this.styles=[Se(z6)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const r=this.min+t/100*(this.max-this.min);return this.step?Math.round(r/this.step)*this.step:r}getValueFromPointer(t,r,o){let a;return this.vertical?a=(o.bottom-r)/o.height*100:a=(t-o.left)/o.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let r=Math.max(this.min,Math.min(this.max,t));return this.step&&(r=Math.round(r/this.step)*this.step),Number(r.toFixed(10))}handleThumbPointerDown(t,r){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:r,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=r,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:r,trackRect:o}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,o);if(this.dual){const s=this.values;if(r==="min"){const l=Math.min(a,s[1]-(this.step||1));this.updateValue([l,s[1]],"input")}else{const l=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],l],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,r="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const r=this.track.getBoundingClientRect(),o=this.getValueFromPointer(t.clientX,t.clientY,r);if(this.dual){const a=this.values;Math.abs(o-a[0])<Math.abs(o-a[1])?this.updateValue([o,a[1]]):this.updateValue([a[0],o])}else this.updateValue(o)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let r=this.tickStep;if(this.tickCount>1&&(r=Math.round((this.max-this.min)/(this.tickCount-1))),r>0){const a=Math.floor((this.max-this.min)/r);if(a<=100)for(let s=1;s<=a;s++){const l=this.min+s*r;l<this.max&&t.add(Number(l.toFixed(10)))}}const o=Array.from(t).sort((a,s)=>a-s).map(a=>{const s=this.getPercentage(a),l=this.vertical?`bottom: ${s}%`:`inset-inline-start: ${s}%`;return oe`
        <div class="mov-slider__tick" style="${l}">
          <div class="mov-slider__tick-label">${a}</div>
        </div>
      `});return oe`<div class="mov-slider__ticks">${o}</div>`}renderThumb(t,r){const o=this.getPercentage(t),a=this.focusedThumb===r,s=this.draggingThumb===r,l=this.vertical?`bottom: ${o}%`:`inset-inline-start: ${o}%`;return oe`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${l}"
        @pointerdown=${u=>this.handleThumbPointerDown(u,r)}
      >
        ${this.showTooltip?oe`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const a=this.getPercentage(t[0]),s=this.getPercentage(t[1]),l=this.vertical?`bottom: ${a}%; height: ${s-a}%`:`left: ${a}%; width: ${s-a}%`;return oe`<div
        class="mov-slider__progress"
        style="${l}"
      ></div>`}const r=this.getPercentage(t[1]),o=this.vertical?`bottom: 0; height: ${r}%`:`left: 0; width: ${r}%`;return oe`<div
      class="mov-slider__progress"
      style="${o}"
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
    `}};z([Y({type:String})],vt.prototype,"label",void 0),z([Y({attribute:"help-text"})],vt.prototype,"helpText",void 0),z([Y({attribute:"error-message"})],vt.prototype,"errorMessage",void 0),z([Y({type:Number})],vt.prototype,"min",void 0),z([Y({type:Number})],vt.prototype,"max",void 0),z([Y({type:Number})],vt.prototype,"step",void 0),z([Y({type:Object})],vt.prototype,"value",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"dual",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"vertical",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"filled",void 0),z([Y({reflect:!0})],vt.prototype,"size",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"readonly",void 0),z([Y({type:Boolean,reflect:!0})],vt.prototype,"invalid",void 0),z([Y({type:Boolean,attribute:"show-tooltip"})],vt.prototype,"showTooltip",void 0),z([Y({type:Boolean,attribute:"show-ticks"})],vt.prototype,"showTicks",void 0),z([Y({type:Number,attribute:"tick-step"})],vt.prototype,"tickStep",void 0),z([Y({type:Number,attribute:"tick-count"})],vt.prototype,"tickCount",void 0),z([Ht()],vt.prototype,"focusedThumb",void 0),z([Ht()],vt.prototype,"draggingThumb",void 0),z([An(".mov-slider__track")],vt.prototype,"track",void 0),vt=z([lt("mov-slider")],vt);var B6=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),N6=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=B6();function r(u){return t.relativeFirstCharacters.indexOf(u[0])>-1}function o(u){return u.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(c,f){return String.fromCharCode(f)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function l(u){if(!u)return t.BLANK_URL;var c,f=s(u.trim());do f=o(f).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),f=s(f),c=f.match(t.ctrlCharactersRegex)||f.match(t.htmlEntitiesRegex)||f.match(t.htmlCtrlEntityRegex)||f.match(t.whitespaceEscapeCharsRegex);while(c&&c.length>0);var p=f;if(!p)return t.BLANK_URL;if(r(p))return p;var v=p.trimStart(),w=v.match(t.urlSchemeRegex);if(!w)return p;var g=w[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(g))return t.BLANK_URL;var b=v.replace(/\\/g,"/");if(g==="mailto:"||g.includes("://"))return b;if(g==="http:"||g==="https:"){if(!a(b))return t.BLANK_URL;var y=new URL(b);return y.protocol=y.protocol.toLowerCase(),y.hostname=y.hostname.toLowerCase(),y.toString()}return b}})),H6=Ar(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define([],o):typeof e<"u"?o():(o(),r.FileSaver={})})(e,function(){"use strict";function r(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function o(f,p,v){var w=new XMLHttpRequest;w.open("GET",f),w.responseType="blob",w.onload=function(){c(w.response,p,v)},w.onerror=function(){console.error("could not download file")},w.send()}function a(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,u=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(f,p,v){var w=l.URL||l.webkitURL,g=document.createElement("a");p=p||f.name||"download",g.download=p,g.rel="noopener",typeof f=="string"?(g.href=f,g.origin===location.origin?s(g):a(g.href)?o(f,p,v):s(g,g.target="_blank")):(g.href=w.createObjectURL(f),setTimeout(function(){w.revokeObjectURL(g.href)},4e4),setTimeout(function(){s(g)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,v){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(r(f,v),p);else if(a(f))o(f,p,v);else{var w=document.createElement("a");w.href=f,w.target="_blank",setTimeout(function(){s(w)})}}:function(f,p,v,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof f=="string")return o(f,p,v);var g=f.type==="application/octet-stream",b=/constructor/i.test(l.HTMLElement)||l.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||g&&b||u)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var O=_.result;O=y?O:O.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=O:location=O,w=null},_.readAsDataURL(f)}else{var S=l.URL||l.webkitURL,A=S.createObjectURL(f);w?w.location=A:location.href=A,w=null,setTimeout(function(){S.revokeObjectURL(A)},4e4)}});l.saveAs=c.saveAs=c,typeof t<"u"&&(t.exports=c)})})),F6=Ar(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(o,a,s){function l(f,p){if(!a[f]){if(!o[f]){var v=typeof require=="function"&&require;if(!p&&v)return v(f,!0);if(u)return u(f,!0);var w=new Error("Cannot find module '"+f+"'");throw w.code="MODULE_NOT_FOUND",w}var g=a[f]={exports:{}};o[f][0].call(g.exports,function(b){var y=o[f][1][b];return l(y||b)},g,g.exports,r,o,a,s)}return a[f].exports}for(var u=typeof require=="function"&&require,c=0;c<s.length;c++)l(s[c]);return l})({1:[function(r,o,a){"use strict";var s=r("./utils"),l=r("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var f,p,v,w,g,b,y,_=[],S=0,A=c.length,O=A,T=s.getTypeOf(c)!=="string";S<c.length;)O=A-S,v=T?(f=c[S++],p=S<A?c[S++]:0,S<A?c[S++]:0):(f=c.charCodeAt(S++),p=S<A?c.charCodeAt(S++):0,S<A?c.charCodeAt(S++):0),w=f>>2,g=(3&f)<<4|p>>4,b=1<O?(15&p)<<2|v>>6:64,y=2<O?63&v:64,_.push(u.charAt(w)+u.charAt(g)+u.charAt(b)+u.charAt(y));return _.join("")},a.decode=function(c){var f,p,v,w,g,b,y=0,_=0,S="data:";if(c.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var A,O=3*(c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(c.charAt(c.length-1)===u.charAt(64)&&O--,c.charAt(c.length-2)===u.charAt(64)&&O--,O%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=l.uint8array?new Uint8Array(0|O):new Array(0|O);y<c.length;)f=u.indexOf(c.charAt(y++))<<2|(w=u.indexOf(c.charAt(y++)))>>4,p=(15&w)<<4|(g=u.indexOf(c.charAt(y++)))>>2,v=(3&g)<<6|(b=u.indexOf(c.charAt(y++))),A[_++]=f,g!==64&&(A[_++]=p),b!==64&&(A[_++]=v);return A}},{"./support":30,"./utils":32}],2:[function(r,o,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),u=r("./stream/Crc32Probe"),c=r("./stream/DataLengthProbe");function f(p,v,w,g,b){this.compressedSize=p,this.uncompressedSize=v,this.crc32=w,this.compression=g,this.compressedContent=b}f.prototype={getContentWorker:function(){var p=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),v=this;return p.on("end",function(){if(this.streamInfo.data_length!==v.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(p,v,w){return p.pipe(new u).pipe(new c("uncompressedSize")).pipe(v.compressWorker(w)).pipe(new c("compressedSize")).withStreamInfo("compression",v)},o.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,a){"use strict";var s=r("./utils"),l=(function(){for(var u,c=[],f=0;f<256;f++){u=f;for(var p=0;p<8;p++)u=1&u?3988292384^u>>>1:u>>>1;c[f]=u}return c})();o.exports=function(u,c){return u!==void 0&&u.length?s.getTypeOf(u)!=="string"?(function(f,p,v,w){var g=l,b=w+v;f^=-1;for(var y=w;y<b;y++)f=f>>>8^g[255&(f^p[y])];return-1^f})(0|c,u,u.length,0):(function(f,p,v,w){var g=l,b=w+v;f^=-1;for(var y=w;y<b;y++)f=f>>>8^g[255&(f^p.charCodeAt(y))];return-1^f})(0|c,u,u.length,0):0}},{"./utils":32}],5:[function(r,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:s}},{lie:37}],7:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),u=r("./utils"),c=r("./stream/GenericWorker"),f=s?"uint8array":"array";function p(v,w){c.call(this,"FlateWorker/"+v),this._pako=null,this._pakoAction=v,this._pakoOptions=w,this.meta={}}a.magic="\b\0",u.inherits(p,c),p.prototype.processChunk=function(v){this.meta=v.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(f,v.data),!1)},p.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var v=this;this._pako.onData=function(w){v.push({data:w,meta:v.meta})}},a.compressWorker=function(v){return new p("Deflate",v)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,a){"use strict";function s(g,b){var y,_="";for(y=0;y<b;y++)_+=String.fromCharCode(255&g),g>>>=8;return _}function l(g,b,y,_,S,A){var O,T,D=g.file,j=g.compression,V=A!==f.utf8encode,ne=u.transformTo("string",A(D.name)),F=u.transformTo("string",f.utf8encode(D.name)),pe=D.comment,ye=u.transformTo("string",A(pe)),P=u.transformTo("string",f.utf8encode(pe)),J=F.length!==D.name.length,M=P.length!==pe.length,ee="",Ce="",de="",Re=D.dir,ae=D.date,Ie={crc32:0,compressedSize:0,uncompressedSize:0};b&&!y||(Ie.crc32=g.crc32,Ie.compressedSize=g.compressedSize,Ie.uncompressedSize=g.uncompressedSize);var U=0;b&&(U|=8),V||!J&&!M||(U|=2048);var W=0,Ae=0;Re&&(W|=16),S==="UNIX"?(Ae=798,W|=(function(me,Je){var wt=me;return me||(wt=Je?16893:33204),(65535&wt)<<16})(D.unixPermissions,Re)):(Ae=20,W|=(function(me){return 63&(me||0)})(D.dosPermissions)),O=ae.getUTCHours(),O<<=6,O|=ae.getUTCMinutes(),O<<=5,O|=ae.getUTCSeconds()/2,T=ae.getUTCFullYear()-1980,T<<=4,T|=ae.getUTCMonth()+1,T<<=5,T|=ae.getUTCDate(),J&&(Ce=s(1,1)+s(p(ne),4)+F,ee+="up"+s(Ce.length,2)+Ce),M&&(de=s(1,1)+s(p(ye),4)+P,ee+="uc"+s(de.length,2)+de);var ge="";return ge+=`
\0`,ge+=s(U,2),ge+=j.magic,ge+=s(O,2),ge+=s(T,2),ge+=s(Ie.crc32,4),ge+=s(Ie.compressedSize,4),ge+=s(Ie.uncompressedSize,4),ge+=s(ne.length,2),ge+=s(ee.length,2),{fileRecord:v.LOCAL_FILE_HEADER+ge+ne+ee,dirRecord:v.CENTRAL_FILE_HEADER+s(Ae,2)+ge+s(ye.length,2)+"\0\0\0\0"+s(W,4)+s(_,4)+ne+ee+ye}}var u=r("../utils"),c=r("../stream/GenericWorker"),f=r("../utf8"),p=r("../crc32"),v=r("../signature");function w(g,b,y,_){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=y,this.encodeFileName=_,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(w,c),w.prototype.push=function(g){var b=g.meta.percent||0,y=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,c.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:y?(b+100*(y-_-1))/y:100}}))},w.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var b=this.streamFiles&&!g.file.dir;if(b){var y=l(g,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(g){this.accumulate=!1;var b=this.streamFiles&&!g.file.dir,y=l(g,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),b)this.push({data:(function(_){return v.DATA_DESCRIPTOR+s(_.crc32,4)+s(_.compressedSize,4)+s(_.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var g=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var y=this.bytesWritten-g,_=(function(S,A,O,T,D){var j=u.transformTo("string",D(T));return v.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(A,4)+s(O,4)+s(j.length,2)+j})(this.dirRecords.length,y,g,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(g){this._sources.push(g);var b=this;return g.on("data",function(y){b.processChunk(y)}),g.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),g.on("error",function(y){b.error(y)}),this},w.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(g){var b=this._sources;if(!c.prototype.error.call(this,g))return!1;for(var y=0;y<b.length;y++)try{b[y].error(g)}catch{}return!0},w.prototype.lock=function(){c.prototype.lock.call(this);for(var g=this._sources,b=0;b<g.length;b++)g[b].lock()},o.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(u,c,f){var p=new l(c.streamFiles,f,c.platform,c.encodeFileName),v=0;try{u.forEach(function(w,g){v++;var b=(function(A,O){var T=A||O,D=s[T];if(!D)throw new Error(T+" is not a valid compression method !");return D})(g.options.compression,c.compression),y=g.options.compressionOptions||c.compressionOptions||{},_=g.dir,S=g.date;g._compressWorker(b,y).withStreamInfo("file",{name:w,dir:_,date:S,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(p)}),p.entriesCount=v}catch(w){p.error(w)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var u in this)typeof this[u]!="function"&&(l[u]=this[u]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,u){return new s().loadAsync(l,u)},s.external=r("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,a){"use strict";var s=r("./utils"),l=r("./external"),u=r("./utf8"),c=r("./zipEntries"),f=r("./stream/Crc32Probe"),p=r("./nodejsUtils");function v(w){return new l.Promise(function(g,b){var y=w.decompressed.getContentWorker().pipe(new f);y.on("error",function(_){b(_)}).on("end",function(){y.streamInfo.crc32!==w.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}o.exports=function(w,g){var b=this;return g=s.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),p.isNode&&p.isStream(w)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",w,!0,g.optimizedBinaryString,g.base64).then(function(y){var _=new c(g);return _.load(y),_}).then(function(y){var _=[l.Promise.resolve(y)],S=y.files;if(g.checkCRC32)for(var A=0;A<S.length;A++)_.push(v(S[A]));return l.Promise.all(_)}).then(function(y){for(var _=y.shift(),S=_.files,A=0;A<S.length;A++){var O=S[A],T=O.fileNameStr,D=s.resolve(O.fileNameStr);b.file(D,O.decompressed,{binary:!0,optimizedBinaryString:!0,date:O.date,dir:O.dir,comment:O.fileCommentStr.length?O.fileCommentStr:null,unixPermissions:O.unixPermissions,dosPermissions:O.dosPermissions,createFolders:g.createFolders}),O.dir||(b.file(D).unsafeOriginalName=T)}return _.zipComment.length&&(b.comment=_.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function u(c,f){l.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(u,l),u.prototype._bindStream=function(c){var f=this;(this._stream=c).pause(),c.on("data",function(p){f.push({data:p,meta:{percent:0}})}).on("error",function(p){f.isPaused?this.generatedError=p:f.error(p)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},u.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,a){"use strict";var s=r("readable-stream").Readable;function l(u,c,f){s.call(this,c),this._helper=u;var p=this;u.on("data",function(v,w){p.push(v)||p._helper.pause(),f&&f(w)}).on("error",function(v){p.emit("error",v)}).on("end",function(){p.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},o.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,o,a){"use strict";function s(T,D,j){var V,ne=u.getTypeOf(D),F=u.extend(j||{},p);F.date=F.date||new Date,F.compression!==null&&(F.compression=F.compression.toUpperCase()),typeof F.unixPermissions=="string"&&(F.unixPermissions=parseInt(F.unixPermissions,8)),F.unixPermissions&&16384&F.unixPermissions&&(F.dir=!0),F.dosPermissions&&16&F.dosPermissions&&(F.dir=!0),F.dir&&(T=S(T)),F.createFolders&&(V=_(T))&&A.call(this,V,!0);var pe=ne==="string"&&F.binary===!1&&F.base64===!1;j&&j.binary!==void 0||(F.binary=!pe),(D instanceof v&&D.uncompressedSize===0||F.dir||!D||D.length===0)&&(F.base64=!1,F.binary=!0,D="",F.compression="STORE",ne="string");var ye=null;ye=D instanceof v||D instanceof c?D:b.isNode&&b.isStream(D)?new y(T,D):u.prepareContent(T,D,F.binary,F.optimizedBinaryString,F.base64);var P=new w(T,ye,F);this.files[T]=P}var l=r("./utf8"),u=r("./utils"),c=r("./stream/GenericWorker"),f=r("./stream/StreamHelper"),p=r("./defaults"),v=r("./compressedObject"),w=r("./zipObject"),g=r("./generate"),b=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),_=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var D=T.lastIndexOf("/");return 0<D?T.substring(0,D):""},S=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},A=function(T,D){return D=D!==void 0?D:p.createFolders,T=S(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:D}),this.files[T]};function O(T){return Object.prototype.toString.call(T)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var D,j,V;for(D in this.files)V=this.files[D],(j=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&T(j,V)},filter:function(T){var D=[];return this.forEach(function(j,V){T(j,V)&&D.push(V)}),D},file:function(T,D,j){if(arguments.length!==1)return T=this.root+T,s.call(this,T,D,j),this;if(O(T)){var V=T;return this.filter(function(F,pe){return!pe.dir&&V.test(F)})}var ne=this.files[this.root+T];return ne&&!ne.dir?ne:null},folder:function(T){if(!T)return this;if(O(T))return this.filter(function(ne,F){return F.dir&&T.test(ne)});var D=this.root+T,j=A.call(this,D),V=this.clone();return V.root=j.name,V},remove:function(T){T=this.root+T;var D=this.files[T];if(D||(T.slice(-1)!=="/"&&(T+="/"),D=this.files[T]),D&&!D.dir)delete this.files[T];else for(var j=this.filter(function(ne,F){return F.name.slice(0,T.length)===T}),V=0;V<j.length;V++)delete this.files[j[V].name];return this},generate:function(T){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var D,j={};try{if((j=u.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=j.type.toLowerCase(),j.compression=j.compression.toUpperCase(),j.type==="binarystring"&&(j.type="string"),!j.type)throw new Error("No output type specified.");u.checkSupport(j.type),j.platform!=="darwin"&&j.platform!=="freebsd"&&j.platform!=="linux"&&j.platform!=="sunos"||(j.platform="UNIX"),j.platform==="win32"&&(j.platform="DOS");var V=j.comment||this.comment||"";D=g.generateWorker(this,j,V)}catch(ne){(D=new c("error")).error(ne)}return new f(D,j.type||"string",j.mimeType)},generateAsync:function(T,D){return this.generateInternalStream(T).accumulate(D)},generateNodeStream:function(T,D){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,a){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,a){"use strict";var s=r("./DataReader");function l(u){s.call(this,u);for(var c=0;c<this.data.length;c++)u[c]=255&u[c]}r("../utils").inherits(l,s),l.prototype.byteAt=function(u){return this.data[this.zero+u]},l.prototype.lastIndexOfSignature=function(u){for(var c=u.charCodeAt(0),f=u.charCodeAt(1),p=u.charCodeAt(2),v=u.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===c&&this.data[w+1]===f&&this.data[w+2]===p&&this.data[w+3]===v)return w-this.zero;return-1},l.prototype.readAndCheckSignature=function(u){var c=u.charCodeAt(0),f=u.charCodeAt(1),p=u.charCodeAt(2),v=u.charCodeAt(3),w=this.readData(4);return c===w[0]&&f===w[1]&&p===w[2]&&v===w[3]},l.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,c},o.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,o,a){"use strict";var s=r("../utils");function l(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(u){},readInt:function(u){var c,f=0;for(this.checkOffset(u),c=this.index+u-1;c>=this.index;c--)f=(f<<8)+this.byteAt(c);return this.index+=u,f},readString:function(u){return s.transformTo("string",this.readData(u))},readData:function(u){},lastIndexOfSignature:function(u){},readAndCheckSignature:function(u){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},o.exports=l},{"../utils":32}],19:[function(r,o,a){"use strict";var s=r("./Uint8ArrayReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.readData=function(u){this.checkOffset(u);var c=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,c},o.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,a){"use strict";var s=r("./DataReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},l.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},l.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},l.prototype.readData=function(u){this.checkOffset(u);var c=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,c},o.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,o,a){"use strict";var s=r("./ArrayReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,c},o.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,a){"use strict";var s=r("../utils"),l=r("../support"),u=r("./ArrayReader"),c=r("./StringReader"),f=r("./NodeBufferReader"),p=r("./Uint8ArrayReader");o.exports=function(v){var w=s.getTypeOf(v);return s.checkSupport(w),w!=="string"||l.uint8array?w==="nodebuffer"?new f(v):l.uint8array?new p(s.transformTo("uint8array",v)):new u(s.transformTo("array",v)):new c(v)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function u(c){s.call(this,"ConvertWorker to "+c),this.destType=c}l.inherits(u,s),u.prototype.processChunk=function(c){this.push({data:l.transformTo(this.destType,c.data),meta:c.meta})},o.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function u(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(u,s),u.prototype.processChunk=function(c){this.streamInfo.crc32=l(c.data,this.streamInfo.crc32||0),this.push(c)},o.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function u(c){l.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(u,l),u.prototype.processChunk=function(c){if(c){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+c.data.length}l.prototype.processChunk.call(this,c)},o.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function u(c){l.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=s.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}s.inherits(u,l),u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,f);break;case"uint8array":c=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":c=this.data.slice(this.index,f)}return this.index=f,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,u){return this._listeners[l].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,u){if(this._listeners[l])for(var c=0;c<this._listeners[l].length;c++)this._listeners[l][c].call(this,u)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var u=this;return l.on("data",function(c){u.processChunk(c)}),l.on("end",function(){u.end()}),l.on("error",function(c){u.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,u){return this.extraStreamInfo[l]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},o.exports=s},{}],29:[function(r,o,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),u=r("./GenericWorker"),c=r("../base64"),f=r("../support"),p=r("../external"),v=null;if(f.nodestream)try{v=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(b,y){return new p.Promise(function(_,S){var A=[],O=b._internalType,T=b._outputType,D=b._mimeType;b.on("data",function(j,V){A.push(j),y&&y(V)}).on("error",function(j){A=[],S(j)}).on("end",function(){try{_((function(j,V,ne){switch(j){case"blob":return s.newBlob(s.transformTo("arraybuffer",V),ne);case"base64":return c.encode(V);default:return s.transformTo(j,V)}})(T,(function(j,V){var ne,F=0,pe=null,ye=0;for(ne=0;ne<V.length;ne++)ye+=V[ne].length;switch(j){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(pe=new Uint8Array(ye),ne=0;ne<V.length;ne++)pe.set(V[ne],F),F+=V[ne].length;return pe;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+j+"'")}})(O,A),D))}catch(j){S(j)}A=[]}).resume()})}function g(b,y,_){var S=y;switch(y){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=y,this._mimeType=_,s.checkSupport(S),this._worker=b.pipe(new l(S)),b.lock()}catch(A){this._worker=new u("error"),this._worker.error(A)}}g.prototype={accumulate:function(b){return w(this,b)},on:function(b,y){var _=this;return b==="data"?this._worker.on(b,function(S){y.call(_,S.data,S.meta)}):this._worker.on(b,function(){s.delay(y,arguments,_)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new v(this,{objectMode:this._outputType!=="nodebuffer"},b)}},o.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,a){"use strict";for(var s=r("./utils"),l=r("./support"),u=r("./nodejsUtils"),c=r("./stream/GenericWorker"),f=new Array(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;f[254]=f[254]=1;function v(){c.call(this,"utf-8 decode"),this.leftOver=null}function w(){c.call(this,"utf-8 encode")}a.utf8encode=function(g){return l.nodebuffer?u.newBufferFrom(g,"utf-8"):(function(b){var y,_,S,A,O,T=b.length,D=0;for(A=0;A<T;A++)(64512&(_=b.charCodeAt(A)))==55296&&A+1<T&&(64512&(S=b.charCodeAt(A+1)))==56320&&(_=65536+(_-55296<<10)+(S-56320),A++),D+=_<128?1:_<2048?2:_<65536?3:4;for(y=l.uint8array?new Uint8Array(D):new Array(D),A=O=0;O<D;A++)(64512&(_=b.charCodeAt(A)))==55296&&A+1<T&&(64512&(S=b.charCodeAt(A+1)))==56320&&(_=65536+(_-55296<<10)+(S-56320),A++),_<128?y[O++]=_:(_<2048?y[O++]=192|_>>>6:(_<65536?y[O++]=224|_>>>12:(y[O++]=240|_>>>18,y[O++]=128|_>>>12&63),y[O++]=128|_>>>6&63),y[O++]=128|63&_);return y})(g)},a.utf8decode=function(g){return l.nodebuffer?s.transformTo("nodebuffer",g).toString("utf-8"):(function(b){var y,_,S,A,O=b.length,T=new Array(2*O);for(y=_=0;y<O;)if((S=b[y++])<128)T[_++]=S;else if(4<(A=f[S]))T[_++]=65533,y+=A-1;else{for(S&=A===2?31:A===3?15:7;1<A&&y<O;)S=S<<6|63&b[y++],A--;1<A?T[_++]=65533:S<65536?T[_++]=S:(S-=65536,T[_++]=55296|S>>10&1023,T[_++]=56320|1023&S)}return T.length!==_&&(T.subarray?T=T.subarray(0,_):T.length=_),s.applyFromCharCode(T)})(g=s.transformTo(l.uint8array?"uint8array":"array",g))},s.inherits(v,c),v.prototype.processChunk=function(g){var b=s.transformTo(l.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var y=b;(b=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),b.set(y,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var _=(function(A,O){var T;for((O=O||A.length)>A.length&&(O=A.length),T=O-1;0<=T&&(192&A[T])==128;)T--;return T<0||T===0?O:T+f[A[T]]>O?T:O})(b),S=b;_!==b.length&&(l.uint8array?(S=b.subarray(0,_),this.leftOver=b.subarray(_,b.length)):(S=b.slice(0,_),this.leftOver=b.slice(_,b.length))),this.push({data:a.utf8decode(S),meta:g.meta})},v.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=v,s.inherits(w,c),w.prototype.processChunk=function(g){this.push({data:a.utf8encode(g.data),meta:g.meta})},a.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,a){"use strict";var s=r("./support"),l=r("./base64"),u=r("./nodejsUtils"),c=r("set-immediate-shim"),f=r("./external");function p(_){return _}function v(_,S){for(var A=0;A<_.length;++A)S[A]=255&_.charCodeAt(A);return S}a.newBlob=function(_,S){a.checkSupport("blob");try{return new Blob([_],{type:S})}catch{try{var A=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return A.append(_),A.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(_,S,A){var O=[],T=0,D=_.length;if(D<=A)return String.fromCharCode.apply(null,_);for(;T<D;)S==="array"||S==="nodebuffer"?O.push(String.fromCharCode.apply(null,_.slice(T,Math.min(T+A,D)))):O.push(String.fromCharCode.apply(null,_.subarray(T,Math.min(T+A,D)))),T+=A;return O.join("")},stringifyByChar:function(_){for(var S="",A=0;A<_.length;A++)S+=String.fromCharCode(_[A]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function g(_){var S=65536,A=a.getTypeOf(_),O=!0;if(A==="uint8array"?O=w.applyCanBeUsed.uint8array:A==="nodebuffer"&&(O=w.applyCanBeUsed.nodebuffer),O)for(;1<S;)try{return w.stringifyByChunk(_,A,S)}catch{S=Math.floor(S/2)}return w.stringifyByChar(_)}function b(_,S){for(var A=0;A<_.length;A++)S[A]=_[A];return S}a.applyFromCharCode=g;var y={};y.string={string:p,array:function(_){return v(_,new Array(_.length))},arraybuffer:function(_){return y.string.uint8array(_).buffer},uint8array:function(_){return v(_,new Uint8Array(_.length))},nodebuffer:function(_){return v(_,u.allocBuffer(_.length))}},y.array={string:g,array:p,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return u.newBufferFrom(_)}},y.arraybuffer={string:function(_){return g(new Uint8Array(_))},array:function(_){return b(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:p,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return u.newBufferFrom(new Uint8Array(_))}},y.uint8array={string:g,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:p,nodebuffer:function(_){return u.newBufferFrom(_)}},y.nodebuffer={string:g,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return y.nodebuffer.uint8array(_).buffer},uint8array:function(_){return b(_,new Uint8Array(_.length))},nodebuffer:p},a.transformTo=function(_,S){return S=S||"",_?(a.checkSupport(_),y[a.getTypeOf(S)][_](S)):S},a.resolve=function(_){for(var S=_.split("/"),A=[],O=0;O<S.length;O++){var T=S[O];T==="."||T===""&&O!==0&&O!==S.length-1||(T===".."?A.pop():A.push(T))}return A.join("/")},a.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&u.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(_){var S,A,O="";for(A=0;A<(_||"").length;A++)O+="\\x"+((S=_.charCodeAt(A))<16?"0":"")+S.toString(16).toUpperCase();return O},a.delay=function(_,S,A){c(function(){_.apply(A||null,S||[])})},a.inherits=function(_,S){function A(){}A.prototype=S.prototype,_.prototype=new A},a.extend=function(){var _,S,A={};for(_=0;_<arguments.length;_++)for(S in arguments[_])arguments[_].hasOwnProperty(S)&&A[S]===void 0&&(A[S]=arguments[_][S]);return A},a.prepareContent=function(_,S,A,O,T){return f.Promise.resolve(S).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new f.Promise(function(j,V){var ne=new FileReader;ne.onload=function(F){j(F.target.result)},ne.onerror=function(F){V(F.target.error)},ne.readAsArrayBuffer(D)}):D}).then(function(D){var j=a.getTypeOf(D);return j?(j==="arraybuffer"?D=a.transformTo("uint8array",D):j==="string"&&(T?D=l.decode(D):A&&O!==!0&&(D=(function(V){return v(V,s.uint8array?new Uint8Array(V.length):new Array(V.length))})(D))),D):f.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),u=r("./signature"),c=r("./zipEntry"),f=(r("./utf8"),r("./support"));function p(v){this.files=[],this.loadOptions=v}p.prototype={checkSignature:function(v){if(!this.reader.readAndCheckSignature(v)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(w)+", expected "+l.pretty(v)+")")}},isSignature:function(v,w){var g=this.reader.index;this.reader.setIndex(v);var b=this.reader.readString(4)===w;return this.reader.setIndex(g),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var v=this.reader.readData(this.zipCommentLength),w=f.uint8array?"uint8array":"array",g=l.transformTo(w,v);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var v,w,g,b=this.zip64EndOfCentralSize-44;0<b;)v=this.reader.readInt(2),w=this.reader.readInt(4),g=this.reader.readData(w),this.zip64ExtensibleData[v]={id:v,length:w,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var v,w;for(v=0;v<this.files.length;v++)w=this.files[v],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var v;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(v=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(v);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var v=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(v<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(v);var w=v;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(v=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(v),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var b=w-g;if(0<b)this.isSignature(w,u.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(v){this.reader=s(v)},load:function(v){this.prepareReader(v),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),u=r("./compressedObject"),c=r("./crc32"),f=r("./utf8"),p=r("./compressions"),v=r("./support");function w(g,b){this.options=g,this.loadOptions=b}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var b,y;if(g.skip(22),this.fileNameLength=g.readInt(2),y=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=(function(_){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===_)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,b,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var b=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(b),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(g){if(this.extraFields[1]){var b=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(g){var b,y,_,S=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<S;)b=g.readInt(2),y=g.readInt(2),_=g.readData(y),this.extraFields[b]={id:b,length:y,value:_};g.setIndex(S)},handleUTF8:function(){var g=v.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var y=l.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var S=l.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var b=s(g.value);return b.readInt(1)!==1||c(this.fileName)!==b.readInt(4)?null:f.utf8decode(b.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var b=s(g.value);return b.readInt(1)!==1||c(this.fileComment)!==b.readInt(4)?null:f.utf8decode(b.readData(g.length-5))}return null}},o.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,a){"use strict";function s(b,y,_){this.name=b,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=y,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var l=r("./stream/StreamHelper"),u=r("./stream/DataWorker"),c=r("./utf8"),f=r("./compressedObject"),p=r("./stream/GenericWorker");s.prototype={internalStream:function(b){var y=null,_="string";try{if(!b)throw new Error("No output type specified.");var S=(_=b.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),y=this._decompressWorker();var A=!this._dataBinary;A&&!S&&(y=y.pipe(new c.Utf8EncodeWorker)),!A&&S&&(y=y.pipe(new c.Utf8DecodeWorker))}catch(O){(y=new p("error")).error(O)}return new l(y,_,"")},async:function(b,y){return this.internalStream(b).accumulate(y)},nodeStream:function(b,y){return this.internalStream(b||"nodebuffer").toNodejsStream(y)},_compressWorker:function(b,y){if(this._data instanceof f&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new c.Utf8EncodeWorker)),f.createWorkerFrom(_,b,y)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof p?this._data:new u(this._data)}};for(var v=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<v.length;g++)s.prototype[v[g]]=w;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,a){(function(s){"use strict";var l,u,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var f=0,p=new c(b),v=s.document.createTextNode("");p.observe(v,{characterData:!0}),l=function(){v.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var y=s.document.createElement("script");y.onreadystatechange=function(){b(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},s.document.documentElement.appendChild(y)}:function(){setTimeout(b,0)};else{var w=new s.MessageChannel;w.port1.onmessage=b,l=function(){w.port2.postMessage(0)}}var g=[];function b(){var y,_;u=!0;for(var S=g.length;S;){for(_=g,g=[],y=-1;++y<S;)_[y]();S=g.length}u=!1}o.exports=function(y){g.push(y)!==1||u||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,a){"use strict";var s=r("immediate");function l(){}var u={},c=["REJECTED"],f=["FULFILLED"],p=["PENDING"];function v(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==l&&y(this,S)}function w(S,A,O){this.promise=S,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof O=="function"&&(this.onRejected=O,this.callRejected=this.otherCallRejected)}function g(S,A,O){s(function(){var T;try{T=A(O)}catch(D){return u.reject(S,D)}T===S?u.reject(S,new TypeError("Cannot resolve promise with itself")):u.resolve(S,T)})}function b(S){var A=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof A=="function")return function(){A.apply(S,arguments)}}function y(S,A){var O=!1;function T(V){O||(O=!0,u.reject(S,V))}function D(V){O||(O=!0,u.resolve(S,V))}var j=_(function(){A(D,T)});j.status==="error"&&T(j.value)}function _(S,A){var O={};try{O.value=S(A),O.status="success"}catch(T){O.status="error",O.value=T}return O}(o.exports=v).prototype.finally=function(S){if(typeof S!="function")return this;var A=this.constructor;return this.then(function(O){return A.resolve(S()).then(function(){return O})},function(O){return A.resolve(S()).then(function(){throw O})})},v.prototype.catch=function(S){return this.then(null,S)},v.prototype.then=function(S,A){if(typeof S!="function"&&this.state===f||typeof A!="function"&&this.state===c)return this;var O=new this.constructor(l);return this.state!==p?g(O,this.state===f?S:A,this.outcome):this.queue.push(new w(O,S,A)),O},w.prototype.callFulfilled=function(S){u.resolve(this.promise,S)},w.prototype.otherCallFulfilled=function(S){g(this.promise,this.onFulfilled,S)},w.prototype.callRejected=function(S){u.reject(this.promise,S)},w.prototype.otherCallRejected=function(S){g(this.promise,this.onRejected,S)},u.resolve=function(S,A){var O=_(b,A);if(O.status==="error")return u.reject(S,O.value);var T=O.value;if(T)y(S,T);else{S.state=f,S.outcome=A;for(var D=-1,j=S.queue.length;++D<j;)S.queue[D].callFulfilled(A)}return S},u.reject=function(S,A){S.state=c,S.outcome=A;for(var O=-1,T=S.queue.length;++O<T;)S.queue[O].callRejected(A);return S},v.resolve=function(S){return S instanceof this?S:u.resolve(new this(l),S)},v.reject=function(S){var A=new this(l);return u.reject(A,S)},v.all=function(S){var A=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,T=!1;if(!O)return this.resolve([]);for(var D=new Array(O),j=0,V=-1,ne=new this(l);++V<O;)F(S[V],V);return ne;function F(pe,ye){A.resolve(pe).then(function(P){D[ye]=P,++j!==O||T||(T=!0,u.resolve(ne,D))},function(P){T||(T=!0,u.reject(ne,P))})}},v.race=function(S){var A=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,T=!1;if(!O)return this.resolve([]);for(var D=-1,j=new this(l);++D<O;)V=S[D],A.resolve(V).then(function(ne){T||(T=!0,u.resolve(j,ne))},function(ne){T||(T=!0,u.reject(j,ne))});var V;return j}},{immediate:36}],38:[function(r,o,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),u=r("./utils/strings"),c=r("./zlib/messages"),f=r("./zlib/zstream"),p=Object.prototype.toString,v=0,w=-1,g=0,b=8;function y(S){if(!(this instanceof y))return new y(S);this.options=l.assign({level:w,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},S||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var O=s.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(O!==v)throw new Error(c[O]);if(A.header&&s.deflateSetHeader(this.strm,A.header),A.dictionary){var T;if(T=typeof A.dictionary=="string"?u.string2buf(A.dictionary):p.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(O=s.deflateSetDictionary(this.strm,T))!==v)throw new Error(c[O]);this._dict_set=!0}}function _(S,A){var O=new y(A);if(O.push(S,!0),O.err)throw O.msg||c[O.err];return O.result}y.prototype.push=function(S,A){var O,T,D=this.strm,j=this.options.chunkSize;if(this.ended)return!1;T=A===~~A?A:A===!0?4:0,typeof S=="string"?D.input=u.string2buf(S):p.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new l.Buf8(j),D.next_out=0,D.avail_out=j),(O=s.deflate(D,T))!==1&&O!==v)return this.onEnd(O),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(l.shrinkBuf(D.output,D.next_out))):this.onData(l.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&O!==1);return T===4?(O=s.deflateEnd(this.strm),this.onEnd(O),this.ended=!0,O===v):T!==2||(this.onEnd(v),!(D.avail_out=0))},y.prototype.onData=function(S){this.chunks.push(S)},y.prototype.onEnd=function(S){S===v&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=y,a.deflate=_,a.deflateRaw=function(S,A){return(A=A||{}).raw=!0,_(S,A)},a.gzip=function(S,A){return(A=A||{}).gzip=!0,_(S,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),u=r("./utils/strings"),c=r("./zlib/constants"),f=r("./zlib/messages"),p=r("./zlib/zstream"),v=r("./zlib/gzheader"),w=Object.prototype.toString;function g(y){if(!(this instanceof g))return new g(y);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},y||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||y&&y.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,_.windowBits);if(S!==c.Z_OK)throw new Error(f[S]);this.header=new v,s.inflateGetHeader(this.strm,this.header)}function b(y,_){var S=new g(_);if(S.push(y,!0),S.err)throw S.msg||f[S.err];return S.result}g.prototype.push=function(y,_){var S,A,O,T,D,j,V=this.strm,ne=this.options.chunkSize,F=this.options.dictionary,pe=!1;if(this.ended)return!1;A=_===~~_?_:_===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof y=="string"?V.input=u.binstring2buf(y):w.call(y)==="[object ArrayBuffer]"?V.input=new Uint8Array(y):V.input=y,V.next_in=0,V.avail_in=V.input.length;do{if(V.avail_out===0&&(V.output=new l.Buf8(ne),V.next_out=0,V.avail_out=ne),(S=s.inflate(V,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&F&&(j=typeof F=="string"?u.string2buf(F):w.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,S=s.inflateSetDictionary(this.strm,j)),S===c.Z_BUF_ERROR&&pe===!0&&(S=c.Z_OK,pe=!1),S!==c.Z_STREAM_END&&S!==c.Z_OK)return this.onEnd(S),!(this.ended=!0);V.next_out&&(V.avail_out!==0&&S!==c.Z_STREAM_END&&(V.avail_in!==0||A!==c.Z_FINISH&&A!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(O=u.utf8border(V.output,V.next_out),T=V.next_out-O,D=u.buf2string(V.output,O),V.next_out=T,V.avail_out=ne-T,T&&l.arraySet(V.output,V.output,O,T,0),this.onData(D)):this.onData(l.shrinkBuf(V.output,V.next_out)))),V.avail_in===0&&V.avail_out===0&&(pe=!0)}while((0<V.avail_in||V.avail_out===0)&&S!==c.Z_STREAM_END);return S===c.Z_STREAM_END&&(A=c.Z_FINISH),A===c.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===c.Z_OK):A!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(V.avail_out=0))},g.prototype.onData=function(y){this.chunks.push(y)},g.prototype.onEnd=function(y){y===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},a.Inflate=g,a.inflate=b,a.inflateRaw=function(y,_){return(_=_||{}).raw=!0,b(y,_)},a.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var p=f.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var v in p)p.hasOwnProperty(v)&&(c[v]=p[v])}}return c},a.shrinkBuf=function(c,f){return c.length===f?c:c.subarray?c.subarray(0,f):(c.length=f,c)};var l={arraySet:function(c,f,p,v,w){if(f.subarray&&c.subarray)c.set(f.subarray(p,p+v),w);else for(var g=0;g<v;g++)c[w+g]=f[p+g]},flattenChunks:function(c){var f,p,v,w,g,b;for(f=v=0,p=c.length;f<p;f++)v+=c[f].length;for(b=new Uint8Array(v),f=w=0,p=c.length;f<p;f++)g=c[f],b.set(g,w),w+=g.length;return b}},u={arraySet:function(c,f,p,v,w){for(var g=0;g<v;g++)c[w+g]=f[p+g]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,u))},a.setTyped(s)},{}],42:[function(r,o,a){"use strict";var s=r("./common"),l=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var c=new s.Buf8(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function p(v,w){if(w<65537&&(v.subarray&&u||!v.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(v,w));for(var g="",b=0;b<w;b++)g+=String.fromCharCode(v[b]);return g}c[254]=c[254]=1,a.string2buf=function(v){var w,g,b,y,_,S=v.length,A=0;for(y=0;y<S;y++)(64512&(g=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(b=v.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),y++),A+=g<128?1:g<2048?2:g<65536?3:4;for(w=new s.Buf8(A),y=_=0;_<A;y++)(64512&(g=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(b=v.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),y++),g<128?w[_++]=g:(g<2048?w[_++]=192|g>>>6:(g<65536?w[_++]=224|g>>>12:(w[_++]=240|g>>>18,w[_++]=128|g>>>12&63),w[_++]=128|g>>>6&63),w[_++]=128|63&g);return w},a.buf2binstring=function(v){return p(v,v.length)},a.binstring2buf=function(v){for(var w=new s.Buf8(v.length),g=0,b=w.length;g<b;g++)w[g]=v.charCodeAt(g);return w},a.buf2string=function(v,w){var g,b,y,_,S=w||v.length,A=new Array(2*S);for(g=b=0;g<S;)if((y=v[g++])<128)A[b++]=y;else if(4<(_=c[y]))A[b++]=65533,g+=_-1;else{for(y&=_===2?31:_===3?15:7;1<_&&g<S;)y=y<<6|63&v[g++],_--;1<_?A[b++]=65533:y<65536?A[b++]=y:(y-=65536,A[b++]=55296|y>>10&1023,A[b++]=56320|1023&y)}return p(A,b)},a.utf8border=function(v,w){var g;for((w=w||v.length)>v.length&&(w=v.length),g=w-1;0<=g&&(192&v[g])==128;)g--;return g<0||g===0?w:g+c[v[g]]>w?g:w}},{"./common":41}],43:[function(r,o,a){"use strict";o.exports=function(s,l,u,c){for(var f=65535&s|0,p=s>>>16&65535|0,v=0;u!==0;){for(u-=v=2e3<u?2e3:u;p=p+(f=f+l[c++]|0)|0,--v;);f%=65521,p%=65521}return f|p<<16|0}},{}],44:[function(r,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,a){"use strict";var s=(function(){for(var l,u=[],c=0;c<256;c++){l=c;for(var f=0;f<8;f++)l=1&l?3988292384^l>>>1:l>>>1;u[c]=l}return u})();o.exports=function(l,u,c,f){var p=s,v=f+c;l^=-1;for(var w=f;w<v;w++)l=l>>>8^p[255&(l^u[w])];return-1^l}},{}],46:[function(r,o,a){"use strict";var s,l=r("../utils/common"),u=r("./trees"),c=r("./adler32"),f=r("./crc32"),p=r("./messages"),v=0,w=4,g=0,b=-2,y=-1,_=4,S=2,A=8,O=9,T=286,D=30,j=19,V=2*T+1,ne=15,F=3,pe=258,ye=pe+F+1,P=42,J=113,M=1,ee=2,Ce=3,de=4;function Re(k,Q){return k.msg=p[Q],Q}function ae(k){return(k<<1)-(4<k?9:0)}function Ie(k){for(var Q=k.length;0<=--Q;)k[Q]=0}function U(k){var Q=k.state,K=Q.pending;K>k.avail_out&&(K=k.avail_out),K!==0&&(l.arraySet(k.output,Q.pending_buf,Q.pending_out,K,k.next_out),k.next_out+=K,Q.pending_out+=K,k.total_out+=K,k.avail_out-=K,Q.pending-=K,Q.pending===0&&(Q.pending_out=0))}function W(k,Q){u._tr_flush_block(k,0<=k.block_start?k.block_start:-1,k.strstart-k.block_start,Q),k.block_start=k.strstart,U(k.strm)}function Ae(k,Q){k.pending_buf[k.pending++]=Q}function ge(k,Q){k.pending_buf[k.pending++]=Q>>>8&255,k.pending_buf[k.pending++]=255&Q}function me(k,Q){var K,L,C=k.max_chain_length,N=k.strstart,se=k.prev_length,le=k.nice_match,G=k.strstart>k.w_size-ye?k.strstart-(k.w_size-ye):0,ue=k.window,ve=k.w_mask,he=k.prev,Me=k.strstart+pe,it=ue[N+se-1],Ve=ue[N+se];k.prev_length>=k.good_match&&(C>>=2),le>k.lookahead&&(le=k.lookahead);do if(ue[(K=Q)+se]===Ve&&ue[K+se-1]===it&&ue[K]===ue[N]&&ue[++K]===ue[N+1]){N+=2,K++;do;while(ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&ue[++N]===ue[++K]&&N<Me);if(L=pe-(Me-N),N=Me-pe,se<L){if(k.match_start=Q,le<=(se=L))break;it=ue[N+se-1],Ve=ue[N+se]}}while((Q=he[Q&ve])>G&&--C!=0);return se<=k.lookahead?se:k.lookahead}function Je(k){var Q,K,L,C,N,se,le,G,ue,ve,he=k.w_size;do{if(C=k.window_size-k.lookahead-k.strstart,k.strstart>=he+(he-ye)){for(l.arraySet(k.window,k.window,he,he,0),k.match_start-=he,k.strstart-=he,k.block_start-=he,Q=K=k.hash_size;L=k.head[--Q],k.head[Q]=he<=L?L-he:0,--K;);for(Q=K=he;L=k.prev[--Q],k.prev[Q]=he<=L?L-he:0,--K;);C+=he}if(k.strm.avail_in===0)break;if(se=k.strm,le=k.window,G=k.strstart+k.lookahead,ue=C,ve=void 0,ve=se.avail_in,ue<ve&&(ve=ue),K=ve===0?0:(se.avail_in-=ve,l.arraySet(le,se.input,se.next_in,ve,G),se.state.wrap===1?se.adler=c(se.adler,le,ve,G):se.state.wrap===2&&(se.adler=f(se.adler,le,ve,G)),se.next_in+=ve,se.total_in+=ve,ve),k.lookahead+=K,k.lookahead+k.insert>=F)for(N=k.strstart-k.insert,k.ins_h=k.window[N],k.ins_h=(k.ins_h<<k.hash_shift^k.window[N+1])&k.hash_mask;k.insert&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[N+F-1])&k.hash_mask,k.prev[N&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=N,N++,k.insert--,!(k.lookahead+k.insert<F)););}while(k.lookahead<ye&&k.strm.avail_in!==0)}function wt(k,Q){for(var K,L;;){if(k.lookahead<ye){if(Je(k),k.lookahead<ye&&Q===v)return M;if(k.lookahead===0)break}if(K=0,k.lookahead>=F&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+F-1])&k.hash_mask,K=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),K!==0&&k.strstart-K<=k.w_size-ye&&(k.match_length=me(k,K)),k.match_length>=F)if(L=u._tr_tally(k,k.strstart-k.match_start,k.match_length-F),k.lookahead-=k.match_length,k.match_length<=k.max_lazy_match&&k.lookahead>=F){for(k.match_length--;k.strstart++,k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+F-1])&k.hash_mask,K=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart,--k.match_length!=0;);k.strstart++}else k.strstart+=k.match_length,k.match_length=0,k.ins_h=k.window[k.strstart],k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+1])&k.hash_mask;else L=u._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++;if(L&&(W(k,!1),k.strm.avail_out===0))return M}return k.insert=k.strstart<F-1?k.strstart:F-1,Q===w?(W(k,!0),k.strm.avail_out===0?Ce:de):k.last_lit&&(W(k,!1),k.strm.avail_out===0)?M:ee}function Ze(k,Q){for(var K,L,C;;){if(k.lookahead<ye){if(Je(k),k.lookahead<ye&&Q===v)return M;if(k.lookahead===0)break}if(K=0,k.lookahead>=F&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+F-1])&k.hash_mask,K=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),k.prev_length=k.match_length,k.prev_match=k.match_start,k.match_length=F-1,K!==0&&k.prev_length<k.max_lazy_match&&k.strstart-K<=k.w_size-ye&&(k.match_length=me(k,K),k.match_length<=5&&(k.strategy===1||k.match_length===F&&4096<k.strstart-k.match_start)&&(k.match_length=F-1)),k.prev_length>=F&&k.match_length<=k.prev_length){for(C=k.strstart+k.lookahead-F,L=u._tr_tally(k,k.strstart-1-k.prev_match,k.prev_length-F),k.lookahead-=k.prev_length-1,k.prev_length-=2;++k.strstart<=C&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+F-1])&k.hash_mask,K=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),--k.prev_length!=0;);if(k.match_available=0,k.match_length=F-1,k.strstart++,L&&(W(k,!1),k.strm.avail_out===0))return M}else if(k.match_available){if((L=u._tr_tally(k,0,k.window[k.strstart-1]))&&W(k,!1),k.strstart++,k.lookahead--,k.strm.avail_out===0)return M}else k.match_available=1,k.strstart++,k.lookahead--}return k.match_available&&(L=u._tr_tally(k,0,k.window[k.strstart-1]),k.match_available=0),k.insert=k.strstart<F-1?k.strstart:F-1,Q===w?(W(k,!0),k.strm.avail_out===0?Ce:de):k.last_lit&&(W(k,!1),k.strm.avail_out===0)?M:ee}function Ue(k,Q,K,L,C){this.good_length=k,this.max_lazy=Q,this.nice_length=K,this.max_chain=L,this.func=C}function mt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*V),this.dyn_dtree=new l.Buf16(2*(2*D+1)),this.bl_tree=new l.Buf16(2*(2*j+1)),Ie(this.dyn_ltree),Ie(this.dyn_dtree),Ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(ne+1),this.heap=new l.Buf16(2*T+1),Ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*T+1),Ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _t(k){var Q;return k&&k.state?(k.total_in=k.total_out=0,k.data_type=S,(Q=k.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?P:J,k.adler=Q.wrap===2?0:1,Q.last_flush=v,u._tr_init(Q),g):Re(k,b)}function Xt(k){var Q=_t(k);return Q===g&&(function(K){K.window_size=2*K.w_size,Ie(K.head),K.max_lazy_match=s[K.level].max_lazy,K.good_match=s[K.level].good_length,K.nice_match=s[K.level].nice_length,K.max_chain_length=s[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=F-1,K.match_available=0,K.ins_h=0})(k.state),Q}function Vt(k,Q,K,L,C,N){if(!k)return b;var se=1;if(Q===y&&(Q=6),L<0?(se=0,L=-L):15<L&&(se=2,L-=16),C<1||O<C||K!==A||L<8||15<L||Q<0||9<Q||N<0||_<N)return Re(k,b);L===8&&(L=9);var le=new mt;return(k.state=le).strm=k,le.wrap=se,le.gzhead=null,le.w_bits=L,le.w_size=1<<le.w_bits,le.w_mask=le.w_size-1,le.hash_bits=C+7,le.hash_size=1<<le.hash_bits,le.hash_mask=le.hash_size-1,le.hash_shift=~~((le.hash_bits+F-1)/F),le.window=new l.Buf8(2*le.w_size),le.head=new l.Buf16(le.hash_size),le.prev=new l.Buf16(le.w_size),le.lit_bufsize=1<<C+6,le.pending_buf_size=4*le.lit_bufsize,le.pending_buf=new l.Buf8(le.pending_buf_size),le.d_buf=1*le.lit_bufsize,le.l_buf=3*le.lit_bufsize,le.level=Q,le.strategy=N,le.method=K,Xt(k)}s=[new Ue(0,0,0,0,function(k,Q){var K=65535;for(K>k.pending_buf_size-5&&(K=k.pending_buf_size-5);;){if(k.lookahead<=1){if(Je(k),k.lookahead===0&&Q===v)return M;if(k.lookahead===0)break}k.strstart+=k.lookahead,k.lookahead=0;var L=k.block_start+K;if((k.strstart===0||k.strstart>=L)&&(k.lookahead=k.strstart-L,k.strstart=L,W(k,!1),k.strm.avail_out===0)||k.strstart-k.block_start>=k.w_size-ye&&(W(k,!1),k.strm.avail_out===0))return M}return k.insert=0,Q===w?(W(k,!0),k.strm.avail_out===0?Ce:de):(k.strstart>k.block_start&&(W(k,!1),k.strm.avail_out),M)}),new Ue(4,4,8,4,wt),new Ue(4,5,16,8,wt),new Ue(4,6,32,32,wt),new Ue(4,4,16,16,Ze),new Ue(8,16,32,32,Ze),new Ue(8,16,128,128,Ze),new Ue(8,32,128,256,Ze),new Ue(32,128,258,1024,Ze),new Ue(32,258,258,4096,Ze)],a.deflateInit=function(k,Q){return Vt(k,Q,A,15,8,0)},a.deflateInit2=Vt,a.deflateReset=Xt,a.deflateResetKeep=_t,a.deflateSetHeader=function(k,Q){return k&&k.state?k.state.wrap!==2?b:(k.state.gzhead=Q,g):b},a.deflate=function(k,Q){var K,L,C,N;if(!k||!k.state||5<Q||Q<0)return k?Re(k,b):b;if(L=k.state,!k.output||!k.input&&k.avail_in!==0||L.status===666&&Q!==w)return Re(k,k.avail_out===0?-5:b);if(L.strm=k,K=L.last_flush,L.last_flush=Q,L.status===P)if(L.wrap===2)k.adler=0,Ae(L,31),Ae(L,139),Ae(L,8),L.gzhead?(Ae(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),Ae(L,255&L.gzhead.time),Ae(L,L.gzhead.time>>8&255),Ae(L,L.gzhead.time>>16&255),Ae(L,L.gzhead.time>>24&255),Ae(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),Ae(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(Ae(L,255&L.gzhead.extra.length),Ae(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(k.adler=f(k.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(Ae(L,0),Ae(L,0),Ae(L,0),Ae(L,0),Ae(L,0),Ae(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),Ae(L,3),L.status=J);else{var se=A+(L.w_bits-8<<4)<<8;se|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(se|=32),se+=31-se%31,L.status=J,ge(L,se),L.strstart!==0&&(ge(L,k.adler>>>16),ge(L,65535&k.adler)),k.adler=1}if(L.status===69)if(L.gzhead.extra){for(C=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending!==L.pending_buf_size));)Ae(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){C=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending===L.pending_buf_size)){N=1;break}N=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,Ae(L,N)}while(N!==0);L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),N===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){C=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending===L.pending_buf_size)){N=1;break}N=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,Ae(L,N)}while(N!==0);L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),N===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&U(k),L.pending+2<=L.pending_buf_size&&(Ae(L,255&k.adler),Ae(L,k.adler>>8&255),k.adler=0,L.status=J)):L.status=J),L.pending!==0){if(U(k),k.avail_out===0)return L.last_flush=-1,g}else if(k.avail_in===0&&ae(Q)<=ae(K)&&Q!==w)return Re(k,-5);if(L.status===666&&k.avail_in!==0)return Re(k,-5);if(k.avail_in!==0||L.lookahead!==0||Q!==v&&L.status!==666){var le=L.strategy===2?(function(G,ue){for(var ve;;){if(G.lookahead===0&&(Je(G),G.lookahead===0)){if(ue===v)return M;break}if(G.match_length=0,ve=u._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++,ve&&(W(G,!1),G.strm.avail_out===0))return M}return G.insert=0,ue===w?(W(G,!0),G.strm.avail_out===0?Ce:de):G.last_lit&&(W(G,!1),G.strm.avail_out===0)?M:ee})(L,Q):L.strategy===3?(function(G,ue){for(var ve,he,Me,it,Ve=G.window;;){if(G.lookahead<=pe){if(Je(G),G.lookahead<=pe&&ue===v)return M;if(G.lookahead===0)break}if(G.match_length=0,G.lookahead>=F&&0<G.strstart&&(he=Ve[Me=G.strstart-1])===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]){it=G.strstart+pe;do;while(he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&he===Ve[++Me]&&Me<it);G.match_length=pe-(it-Me),G.match_length>G.lookahead&&(G.match_length=G.lookahead)}if(G.match_length>=F?(ve=u._tr_tally(G,1,G.match_length-F),G.lookahead-=G.match_length,G.strstart+=G.match_length,G.match_length=0):(ve=u._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++),ve&&(W(G,!1),G.strm.avail_out===0))return M}return G.insert=0,ue===w?(W(G,!0),G.strm.avail_out===0?Ce:de):G.last_lit&&(W(G,!1),G.strm.avail_out===0)?M:ee})(L,Q):s[L.level].func(L,Q);if(le!==Ce&&le!==de||(L.status=666),le===M||le===Ce)return k.avail_out===0&&(L.last_flush=-1),g;if(le===ee&&(Q===1?u._tr_align(L):Q!==5&&(u._tr_stored_block(L,0,0,!1),Q===3&&(Ie(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),U(k),k.avail_out===0))return L.last_flush=-1,g}return Q!==w?g:L.wrap<=0?1:(L.wrap===2?(Ae(L,255&k.adler),Ae(L,k.adler>>8&255),Ae(L,k.adler>>16&255),Ae(L,k.adler>>24&255),Ae(L,255&k.total_in),Ae(L,k.total_in>>8&255),Ae(L,k.total_in>>16&255),Ae(L,k.total_in>>24&255)):(ge(L,k.adler>>>16),ge(L,65535&k.adler)),U(k),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?g:1)},a.deflateEnd=function(k){var Q;return k&&k.state?(Q=k.state.status)!==P&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==J&&Q!==666?Re(k,b):(k.state=null,Q===J?Re(k,-3):g):b},a.deflateSetDictionary=function(k,Q){var K,L,C,N,se,le,G,ue,ve=Q.length;if(!k||!k.state||(N=(K=k.state).wrap)===2||N===1&&K.status!==P||K.lookahead)return b;for(N===1&&(k.adler=c(k.adler,Q,ve,0)),K.wrap=0,ve>=K.w_size&&(N===0&&(Ie(K.head),K.strstart=0,K.block_start=0,K.insert=0),ue=new l.Buf8(K.w_size),l.arraySet(ue,Q,ve-K.w_size,K.w_size,0),Q=ue,ve=K.w_size),se=k.avail_in,le=k.next_in,G=k.input,k.avail_in=ve,k.next_in=0,k.input=Q,Je(K);K.lookahead>=F;){for(L=K.strstart,C=K.lookahead-(F-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[L+F-1])&K.hash_mask,K.prev[L&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=L,L++,--C;);K.strstart=L,K.lookahead=F-1,Je(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=F-1,K.match_available=0,k.next_in=le,k.input=G,k.avail_in=se,K.wrap=N,g},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,a){"use strict";o.exports=function(s,l){var u=s.state,c=s.next_in,f,p,v,w,g,b,y,_,S,A,O,T,D,j,V,ne,F,pe,ye,P,J,M=s.input,ee;f=c+(s.avail_in-5),p=s.next_out,ee=s.output,v=p-(l-s.avail_out),w=p+(s.avail_out-257),g=u.dmax,b=u.wsize,y=u.whave,_=u.wnext,S=u.window,A=u.hold,O=u.bits,T=u.lencode,D=u.distcode,j=(1<<u.lenbits)-1,V=(1<<u.distbits)-1;e:do{O<15&&(A+=M[c++]<<O,O+=8,A+=M[c++]<<O,O+=8),ne=T[A&j];t:for(;;){if(A>>>=F=ne>>>24,O-=F,(F=ne>>>16&255)===0)ee[p++]=65535&ne;else{if(!(16&F)){if((64&F)==0){ne=T[(65535&ne)+(A&(1<<F)-1)];continue t}if(32&F){u.mode=12;break e}s.msg="invalid literal/length code",u.mode=30;break e}pe=65535&ne,(F&=15)&&(O<F&&(A+=M[c++]<<O,O+=8),pe+=A&(1<<F)-1,A>>>=F,O-=F),O<15&&(A+=M[c++]<<O,O+=8,A+=M[c++]<<O,O+=8),ne=D[A&V];r:for(;;){if(A>>>=F=ne>>>24,O-=F,!(16&(F=ne>>>16&255))){if((64&F)==0){ne=D[(65535&ne)+(A&(1<<F)-1)];continue r}s.msg="invalid distance code",u.mode=30;break e}if(ye=65535&ne,O<(F&=15)&&(A+=M[c++]<<O,(O+=8)<F&&(A+=M[c++]<<O,O+=8)),g<(ye+=A&(1<<F)-1)){s.msg="invalid distance too far back",u.mode=30;break e}if(A>>>=F,O-=F,(F=p-v)<ye){if(y<(F=ye-F)&&u.sane){s.msg="invalid distance too far back",u.mode=30;break e}if(J=S,(P=0)===_){if(P+=b-F,F<pe){for(pe-=F;ee[p++]=S[P++],--F;);P=p-ye,J=ee}}else if(_<F){if(P+=b+_-F,(F-=_)<pe){for(pe-=F;ee[p++]=S[P++],--F;);if(P=0,_<pe){for(pe-=F=_;ee[p++]=S[P++],--F;);P=p-ye,J=ee}}}else if(P+=_-F,F<pe){for(pe-=F;ee[p++]=S[P++],--F;);P=p-ye,J=ee}for(;2<pe;)ee[p++]=J[P++],ee[p++]=J[P++],ee[p++]=J[P++],pe-=3;pe&&(ee[p++]=J[P++],1<pe&&(ee[p++]=J[P++]))}else{for(P=p-ye;ee[p++]=ee[P++],ee[p++]=ee[P++],ee[p++]=ee[P++],2<(pe-=3););pe&&(ee[p++]=ee[P++],1<pe&&(ee[p++]=ee[P++]))}break}}break}}while(c<f&&p<w);c-=pe=O>>3,A&=(1<<(O-=pe<<3))-1,s.next_in=c,s.next_out=p,s.avail_in=c<f?f-c+5:5-(c-f),s.avail_out=p<w?w-p+257:257-(p-w),u.hold=A,u.bits=O}},{}],49:[function(r,o,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),u=r("./crc32"),c=r("./inffast"),f=r("./inftrees"),p=1,v=2,w=0,g=-2,b=1,y=852,_=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function O(P){var J;return P&&P.state?(J=P.state,P.total_in=P.total_out=J.total=0,P.msg="",J.wrap&&(P.adler=1&J.wrap),J.mode=b,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new s.Buf32(y),J.distcode=J.distdyn=new s.Buf32(_),J.sane=1,J.back=-1,w):g}function T(P){var J;return P&&P.state?((J=P.state).wsize=0,J.whave=0,J.wnext=0,O(P)):g}function D(P,J){var M,ee;return P&&P.state?(ee=P.state,J<0?(M=0,J=-J):(M=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?g:(ee.window!==null&&ee.wbits!==J&&(ee.window=null),ee.wrap=M,ee.wbits=J,T(P))):g}function j(P,J){var M,ee;return P?(ee=new A,(P.state=ee).window=null,(M=D(P,J))!==w&&(P.state=null),M):g}var V,ne,F=!0;function pe(P){if(F){var J;for(V=new s.Buf32(512),ne=new s.Buf32(32),J=0;J<144;)P.lens[J++]=8;for(;J<256;)P.lens[J++]=9;for(;J<280;)P.lens[J++]=7;for(;J<288;)P.lens[J++]=8;for(f(p,P.lens,0,288,V,0,P.work,{bits:9}),J=0;J<32;)P.lens[J++]=5;f(v,P.lens,0,32,ne,0,P.work,{bits:5}),F=!1}P.lencode=V,P.lenbits=9,P.distcode=ne,P.distbits=5}function ye(P,J,M,ee){var Ce,de=P.state;return de.window===null&&(de.wsize=1<<de.wbits,de.wnext=0,de.whave=0,de.window=new s.Buf8(de.wsize)),ee>=de.wsize?(s.arraySet(de.window,J,M-de.wsize,de.wsize,0),de.wnext=0,de.whave=de.wsize):(ee<(Ce=de.wsize-de.wnext)&&(Ce=ee),s.arraySet(de.window,J,M-ee,Ce,de.wnext),(ee-=Ce)?(s.arraySet(de.window,J,M-ee,ee,0),de.wnext=ee,de.whave=de.wsize):(de.wnext+=Ce,de.wnext===de.wsize&&(de.wnext=0),de.whave<de.wsize&&(de.whave+=Ce))),0}a.inflateReset=T,a.inflateReset2=D,a.inflateResetKeep=O,a.inflateInit=function(P){return j(P,15)},a.inflateInit2=j,a.inflate=function(P,J){var M,ee,Ce,de,Re,ae,Ie,U,W,Ae,ge,me,Je,wt,Ze,Ue,mt,_t,Xt,Vt,k,Q,K,L,C=0,N=new s.Buf8(4),se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return g;(M=P.state).mode===12&&(M.mode=13),Re=P.next_out,Ce=P.output,Ie=P.avail_out,de=P.next_in,ee=P.input,ae=P.avail_in,U=M.hold,W=M.bits,Ae=ae,ge=Ie,Q=w;e:for(;;)switch(M.mode){case b:if(M.wrap===0){M.mode=13;break}for(;W<16;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(2&M.wrap&&U===35615){N[M.check=0]=255&U,N[1]=U>>>8&255,M.check=u(M.check,N,2,0),W=U=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&U)<<8)+(U>>8))%31){P.msg="incorrect header check",M.mode=30;break}if((15&U)!=8){P.msg="unknown compression method",M.mode=30;break}if(W-=4,k=8+(15&(U>>>=4)),M.wbits===0)M.wbits=k;else if(k>M.wbits){P.msg="invalid window size",M.mode=30;break}M.dmax=1<<k,P.adler=M.check=1,M.mode=512&U?10:12,W=U=0;break;case 2:for(;W<16;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(M.flags=U,(255&M.flags)!=8){P.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){P.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=U>>8&1),512&M.flags&&(N[0]=255&U,N[1]=U>>>8&255,M.check=u(M.check,N,2,0)),W=U=0,M.mode=3;case 3:for(;W<32;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.head&&(M.head.time=U),512&M.flags&&(N[0]=255&U,N[1]=U>>>8&255,N[2]=U>>>16&255,N[3]=U>>>24&255,M.check=u(M.check,N,4,0)),W=U=0,M.mode=4;case 4:for(;W<16;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.head&&(M.head.xflags=255&U,M.head.os=U>>8),512&M.flags&&(N[0]=255&U,N[1]=U>>>8&255,M.check=u(M.check,N,2,0)),W=U=0,M.mode=5;case 5:if(1024&M.flags){for(;W<16;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.length=U,M.head&&(M.head.extra_len=U),512&M.flags&&(N[0]=255&U,N[1]=U>>>8&255,M.check=u(M.check,N,2,0)),W=U=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(ae<(me=M.length)&&(me=ae),me&&(M.head&&(k=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,ee,de,me,k)),512&M.flags&&(M.check=u(M.check,ee,me,de)),ae-=me,de+=me,M.length-=me),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(ae===0)break e;for(me=0;k=ee[de+me++],M.head&&k&&M.length<65536&&(M.head.name+=String.fromCharCode(k)),k&&me<ae;);if(512&M.flags&&(M.check=u(M.check,ee,me,de)),ae-=me,de+=me,k)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(ae===0)break e;for(me=0;k=ee[de+me++],M.head&&k&&M.length<65536&&(M.head.comment+=String.fromCharCode(k)),k&&me<ae;);if(512&M.flags&&(M.check=u(M.check,ee,me,de)),ae-=me,de+=me,k)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;W<16;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(U!==(65535&M.check)){P.msg="header crc mismatch",M.mode=30;break}W=U=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),P.adler=M.check=0,M.mode=12;break;case 10:for(;W<32;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}P.adler=M.check=S(U),W=U=0,M.mode=11;case 11:if(M.havedict===0)return P.next_out=Re,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,M.hold=U,M.bits=W,2;P.adler=M.check=1,M.mode=12;case 12:if(J===5||J===6)break e;case 13:if(M.last){U>>>=7&W,W-=7&W,M.mode=27;break}for(;W<3;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}switch(M.last=1&U,W-=1,3&(U>>>=1)){case 0:M.mode=14;break;case 1:if(pe(M),M.mode=20,J!==6)break;U>>>=2,W-=2;break e;case 2:M.mode=17;break;case 3:P.msg="invalid block type",M.mode=30}U>>>=2,W-=2;break;case 14:for(U>>>=7&W,W-=7&W;W<32;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if((65535&U)!=(U>>>16^65535)){P.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&U,W=U=0,M.mode=15,J===6)break e;case 15:M.mode=16;case 16:if(me=M.length){if(ae<me&&(me=ae),Ie<me&&(me=Ie),me===0)break e;s.arraySet(Ce,ee,de,me,Re),ae-=me,de+=me,Ie-=me,Re+=me,M.length-=me;break}M.mode=12;break;case 17:for(;W<14;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(M.nlen=257+(31&U),U>>>=5,W-=5,M.ndist=1+(31&U),U>>>=5,W-=5,M.ncode=4+(15&U),U>>>=4,W-=4,286<M.nlen||30<M.ndist){P.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;W<3;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.lens[se[M.have++]]=7&U,U>>>=3,W-=3}for(;M.have<19;)M.lens[se[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,K={bits:M.lenbits},Q=f(0,M.lens,0,19,M.lencode,0,M.work,K),M.lenbits=K.bits,Q){P.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;Ue=(C=M.lencode[U&(1<<M.lenbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=W);){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(mt<16)U>>>=Ze,W-=Ze,M.lens[M.have++]=mt;else{if(mt===16){for(L=Ze+2;W<L;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(U>>>=Ze,W-=Ze,M.have===0){P.msg="invalid bit length repeat",M.mode=30;break}k=M.lens[M.have-1],me=3+(3&U),U>>>=2,W-=2}else if(mt===17){for(L=Ze+3;W<L;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}W-=Ze,k=0,me=3+(7&(U>>>=Ze)),U>>>=3,W-=3}else{for(L=Ze+7;W<L;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}W-=Ze,k=0,me=11+(127&(U>>>=Ze)),U>>>=7,W-=7}if(M.have+me>M.nlen+M.ndist){P.msg="invalid bit length repeat",M.mode=30;break}for(;me--;)M.lens[M.have++]=k}}if(M.mode===30)break;if(M.lens[256]===0){P.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,K={bits:M.lenbits},Q=f(p,M.lens,0,M.nlen,M.lencode,0,M.work,K),M.lenbits=K.bits,Q){P.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,K={bits:M.distbits},Q=f(v,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,K),M.distbits=K.bits,Q){P.msg="invalid distances set",M.mode=30;break}if(M.mode=20,J===6)break e;case 20:M.mode=21;case 21:if(6<=ae&&258<=Ie){P.next_out=Re,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,M.hold=U,M.bits=W,c(P,ge),Re=P.next_out,Ce=P.output,Ie=P.avail_out,de=P.next_in,ee=P.input,ae=P.avail_in,U=M.hold,W=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;Ue=(C=M.lencode[U&(1<<M.lenbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=W);){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(Ue&&(240&Ue)==0){for(_t=Ze,Xt=Ue,Vt=mt;Ue=(C=M.lencode[Vt+((U&(1<<_t+Xt)-1)>>_t)])>>>16&255,mt=65535&C,!(_t+(Ze=C>>>24)<=W);){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}U>>>=_t,W-=_t,M.back+=_t}if(U>>>=Ze,W-=Ze,M.back+=Ze,M.length=mt,Ue===0){M.mode=26;break}if(32&Ue){M.back=-1,M.mode=12;break}if(64&Ue){P.msg="invalid literal/length code",M.mode=30;break}M.extra=15&Ue,M.mode=22;case 22:if(M.extra){for(L=M.extra;W<L;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.length+=U&(1<<M.extra)-1,U>>>=M.extra,W-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;Ue=(C=M.distcode[U&(1<<M.distbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=W);){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if((240&Ue)==0){for(_t=Ze,Xt=Ue,Vt=mt;Ue=(C=M.distcode[Vt+((U&(1<<_t+Xt)-1)>>_t)])>>>16&255,mt=65535&C,!(_t+(Ze=C>>>24)<=W);){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}U>>>=_t,W-=_t,M.back+=_t}if(U>>>=Ze,W-=Ze,M.back+=Ze,64&Ue){P.msg="invalid distance code",M.mode=30;break}M.offset=mt,M.extra=15&Ue,M.mode=24;case 24:if(M.extra){for(L=M.extra;W<L;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}M.offset+=U&(1<<M.extra)-1,U>>>=M.extra,W-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){P.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(Ie===0)break e;if(me=ge-Ie,M.offset>me){if((me=M.offset-me)>M.whave&&M.sane){P.msg="invalid distance too far back",M.mode=30;break}Je=me>M.wnext?(me-=M.wnext,M.wsize-me):M.wnext-me,me>M.length&&(me=M.length),wt=M.window}else wt=Ce,Je=Re-M.offset,me=M.length;for(Ie<me&&(me=Ie),Ie-=me,M.length-=me;Ce[Re++]=wt[Je++],--me;);M.length===0&&(M.mode=21);break;case 26:if(Ie===0)break e;Ce[Re++]=M.length,Ie--,M.mode=21;break;case 27:if(M.wrap){for(;W<32;){if(ae===0)break e;ae--,U|=ee[de++]<<W,W+=8}if(ge-=Ie,P.total_out+=ge,M.total+=ge,ge&&(P.adler=M.check=M.flags?u(M.check,Ce,ge,Re-ge):l(M.check,Ce,ge,Re-ge)),ge=Ie,(M.flags?U:S(U))!==M.check){P.msg="incorrect data check",M.mode=30;break}W=U=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;W<32;){if(ae===0)break e;ae--,U+=ee[de++]<<W,W+=8}if(U!==(4294967295&M.total)){P.msg="incorrect length check",M.mode=30;break}W=U=0}M.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;default:return g}return P.next_out=Re,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,M.hold=U,M.bits=W,(M.wsize||ge!==P.avail_out&&M.mode<30&&(M.mode<27||J!==4))&&ye(P,P.output,P.next_out,ge-P.avail_out)?(M.mode=31,-4):(Ae-=P.avail_in,ge-=P.avail_out,P.total_in+=Ae,P.total_out+=ge,M.total+=ge,M.wrap&&ge&&(P.adler=M.check=M.flags?u(M.check,Ce,ge,P.next_out-ge):l(M.check,Ce,ge,P.next_out-ge)),P.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(Ae==0&&ge===0||J===4)&&Q===w&&(Q=-5),Q)},a.inflateEnd=function(P){if(!P||!P.state)return g;var J=P.state;return J.window&&(J.window=null),P.state=null,w},a.inflateGetHeader=function(P,J){var M;return P&&P.state?(2&(M=P.state).wrap)==0?g:((M.head=J).done=!1,w):g},a.inflateSetDictionary=function(P,J){var M,ee=J.length;return P&&P.state?(M=P.state).wrap!==0&&M.mode!==11?g:M.mode===11&&l(1,J,ee,0)!==M.check?-3:ye(P,J,ee,ee)?(M.mode=31,-4):(M.havedict=1,w):g},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(p,v,w,g,b,y,_,S){var A,O,T,D,j,V,ne,F,pe,ye=S.bits,P=0,J=0,M=0,ee=0,Ce=0,de=0,Re=0,ae=0,Ie=0,U=0,W=null,Ae=0,ge=new s.Buf16(16),me=new s.Buf16(16),Je=null,wt=0;for(P=0;P<=15;P++)ge[P]=0;for(J=0;J<g;J++)ge[v[w+J]]++;for(Ce=ye,ee=15;1<=ee&&ge[ee]===0;ee--);if(ee<Ce&&(Ce=ee),ee===0)return b[y++]=20971520,b[y++]=20971520,S.bits=1,0;for(M=1;M<ee&&ge[M]===0;M++);for(Ce<M&&(Ce=M),P=ae=1;P<=15;P++)if(ae<<=1,(ae-=ge[P])<0)return-1;if(0<ae&&(p===0||ee!==1))return-1;for(me[1]=0,P=1;P<15;P++)me[P+1]=me[P]+ge[P];for(J=0;J<g;J++)v[w+J]!==0&&(_[me[v[w+J]]++]=J);if(V=p===0?(W=Je=_,19):p===1?(W=l,Ae-=257,Je=u,wt-=257,256):(W=c,Je=f,-1),P=M,j=y,Re=J=U=0,T=-1,D=(Ie=1<<(de=Ce))-1,p===1&&852<Ie||p===2&&592<Ie)return 1;for(;;){for(ne=P-Re,pe=_[J]<V?(F=0,_[J]):_[J]>V?(F=Je[wt+_[J]],W[Ae+_[J]]):(F=96,0),A=1<<P-Re,M=O=1<<de;b[j+(U>>Re)+(O-=A)]=ne<<24|F<<16|pe|0,O!==0;);for(A=1<<P-1;U&A;)A>>=1;if(A!==0?(U&=A-1,U+=A):U=0,J++,--ge[P]==0){if(P===ee)break;P=v[w+_[J]]}if(Ce<P&&(U&D)!==T){for(Re===0&&(Re=Ce),j+=M,ae=1<<(de=P-Re);de+Re<ee&&!((ae-=ge[de+Re])<=0);)de++,ae<<=1;if(Ie+=1<<de,p===1&&852<Ie||p===2&&592<Ie)return 1;b[T=U&D]=Ce<<24|de<<16|j-y|0}}return U!==0&&(b[j+U]=P-Re<<24|4194304),S.bits=Ce,0}},{"../utils/common":41}],51:[function(r,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,a){"use strict";var s=r("../utils/common"),l=0,u=1;function c(C){for(var N=C.length;0<=--N;)C[N]=0}var f=0,p=29,v=256,w=v+1+p,g=30,b=19,y=2*w+1,_=15,S=16,A=7,O=256,T=16,D=17,j=18,V=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ne=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ye=new Array(2*(w+2));c(ye);var P=new Array(2*g);c(P);var J=new Array(512);c(J);var M=new Array(256);c(M);var ee=new Array(p);c(ee);var Ce,de,Re,ae=new Array(g);function Ie(C,N,se,le,G){this.static_tree=C,this.extra_bits=N,this.extra_base=se,this.elems=le,this.max_length=G,this.has_stree=C&&C.length}function U(C,N){this.dyn_tree=C,this.max_code=0,this.stat_desc=N}function W(C){return C<256?J[C]:J[256+(C>>>7)]}function Ae(C,N){C.pending_buf[C.pending++]=255&N,C.pending_buf[C.pending++]=N>>>8&255}function ge(C,N,se){C.bi_valid>S-se?(C.bi_buf|=N<<C.bi_valid&65535,Ae(C,C.bi_buf),C.bi_buf=N>>S-C.bi_valid,C.bi_valid+=se-S):(C.bi_buf|=N<<C.bi_valid&65535,C.bi_valid+=se)}function me(C,N,se){ge(C,se[2*N],se[2*N+1])}function Je(C,N){for(var se=0;se|=1&C,C>>>=1,se<<=1,0<--N;);return se>>>1}function wt(C,N,se){var le,G,ue=new Array(_+1),ve=0;for(le=1;le<=_;le++)ue[le]=ve=ve+se[le-1]<<1;for(G=0;G<=N;G++){var he=C[2*G+1];he!==0&&(C[2*G]=Je(ue[he]++,he))}}function Ze(C){var N;for(N=0;N<w;N++)C.dyn_ltree[2*N]=0;for(N=0;N<g;N++)C.dyn_dtree[2*N]=0;for(N=0;N<b;N++)C.bl_tree[2*N]=0;C.dyn_ltree[2*O]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function Ue(C){8<C.bi_valid?Ae(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function mt(C,N,se,le){var G=2*N,ue=2*se;return C[G]<C[ue]||C[G]===C[ue]&&le[N]<=le[se]}function _t(C,N,se){for(var le=C.heap[se],G=se<<1;G<=C.heap_len&&(G<C.heap_len&&mt(N,C.heap[G+1],C.heap[G],C.depth)&&G++,!mt(N,le,C.heap[G],C.depth));)C.heap[se]=C.heap[G],se=G,G<<=1;C.heap[se]=le}function Xt(C,N,se){var le,G,ue,ve,he=0;if(C.last_lit!==0)for(;le=C.pending_buf[C.d_buf+2*he]<<8|C.pending_buf[C.d_buf+2*he+1],G=C.pending_buf[C.l_buf+he],he++,le===0?me(C,G,N):(me(C,(ue=M[G])+v+1,N),(ve=V[ue])!==0&&ge(C,G-=ee[ue],ve),me(C,ue=W(--le),se),(ve=ne[ue])!==0&&ge(C,le-=ae[ue],ve)),he<C.last_lit;);me(C,O,N)}function Vt(C,N){var se,le,G,ue=N.dyn_tree,ve=N.stat_desc.static_tree,he=N.stat_desc.has_stree,Me=N.stat_desc.elems,it=-1;for(C.heap_len=0,C.heap_max=y,se=0;se<Me;se++)ue[2*se]!==0?(C.heap[++C.heap_len]=it=se,C.depth[se]=0):ue[2*se+1]=0;for(;C.heap_len<2;)ue[2*(G=C.heap[++C.heap_len]=it<2?++it:0)]=1,C.depth[G]=0,C.opt_len--,he&&(C.static_len-=ve[2*G+1]);for(N.max_code=it,se=C.heap_len>>1;1<=se;se--)_t(C,ue,se);for(G=Me;se=C.heap[1],C.heap[1]=C.heap[C.heap_len--],_t(C,ue,1),le=C.heap[1],C.heap[--C.heap_max]=se,C.heap[--C.heap_max]=le,ue[2*G]=ue[2*se]+ue[2*le],C.depth[G]=(C.depth[se]>=C.depth[le]?C.depth[se]:C.depth[le])+1,ue[2*se+1]=ue[2*le+1]=G,C.heap[1]=G++,_t(C,ue,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Ve,Pt){var mn,or,gn,ht,Hn,ho,_r=Pt.dyn_tree,Xo=Pt.max_code,Vi=Pt.stat_desc.static_tree,$c=Pt.stat_desc.has_stree,Dc=Pt.stat_desc.extra_bits,ds=Pt.stat_desc.extra_base,Fn=Pt.stat_desc.max_length,fo=0;for(ht=0;ht<=_;ht++)Ve.bl_count[ht]=0;for(_r[2*Ve.heap[Ve.heap_max]+1]=0,mn=Ve.heap_max+1;mn<y;mn++)Fn<(ht=_r[2*_r[2*(or=Ve.heap[mn])+1]+1]+1)&&(ht=Fn,fo++),_r[2*or+1]=ht,Xo<or||(Ve.bl_count[ht]++,Hn=0,ds<=or&&(Hn=Dc[or-ds]),ho=_r[2*or],Ve.opt_len+=ho*(ht+Hn),$c&&(Ve.static_len+=ho*(Vi[2*or+1]+Hn)));if(fo!==0){do{for(ht=Fn-1;Ve.bl_count[ht]===0;)ht--;Ve.bl_count[ht]--,Ve.bl_count[ht+1]+=2,Ve.bl_count[Fn]--,fo-=2}while(0<fo);for(ht=Fn;ht!==0;ht--)for(or=Ve.bl_count[ht];or!==0;)Xo<(gn=Ve.heap[--mn])||(_r[2*gn+1]!==ht&&(Ve.opt_len+=(ht-_r[2*gn+1])*_r[2*gn],_r[2*gn+1]=ht),or--)}})(C,N),wt(ue,it,C.bl_count)}function k(C,N,se){var le,G,ue=-1,ve=N[1],he=0,Me=7,it=4;for(ve===0&&(Me=138,it=3),N[2*(se+1)+1]=65535,le=0;le<=se;le++)G=ve,ve=N[2*(le+1)+1],++he<Me&&G===ve||(he<it?C.bl_tree[2*G]+=he:G!==0?(G!==ue&&C.bl_tree[2*G]++,C.bl_tree[2*T]++):he<=10?C.bl_tree[2*D]++:C.bl_tree[2*j]++,ue=G,it=(he=0)===ve?(Me=138,3):G===ve?(Me=6,3):(Me=7,4))}function Q(C,N,se){var le,G,ue=-1,ve=N[1],he=0,Me=7,it=4;for(ve===0&&(Me=138,it=3),le=0;le<=se;le++)if(G=ve,ve=N[2*(le+1)+1],!(++he<Me&&G===ve)){if(he<it)for(;me(C,G,C.bl_tree),--he!=0;);else G!==0?(G!==ue&&(me(C,G,C.bl_tree),he--),me(C,T,C.bl_tree),ge(C,he-3,2)):he<=10?(me(C,D,C.bl_tree),ge(C,he-3,3)):(me(C,j,C.bl_tree),ge(C,he-11,7));ue=G,it=(he=0)===ve?(Me=138,3):G===ve?(Me=6,3):(Me=7,4)}}c(ae);var K=!1;function L(C,N,se,le){ge(C,(f<<1)+(le?1:0),3),(function(G,ue,ve,he){Ue(G),he&&(Ae(G,ve),Ae(G,~ve)),s.arraySet(G.pending_buf,G.window,ue,ve,G.pending),G.pending+=ve})(C,N,se,!0)}a._tr_init=function(C){K||((function(){var N,se,le,G,ue,ve=new Array(_+1);for(G=le=0;G<p-1;G++)for(ee[G]=le,N=0;N<1<<V[G];N++)M[le++]=G;for(M[le-1]=G,G=ue=0;G<16;G++)for(ae[G]=ue,N=0;N<1<<ne[G];N++)J[ue++]=G;for(ue>>=7;G<g;G++)for(ae[G]=ue<<7,N=0;N<1<<ne[G]-7;N++)J[256+ue++]=G;for(se=0;se<=_;se++)ve[se]=0;for(N=0;N<=143;)ye[2*N+1]=8,N++,ve[8]++;for(;N<=255;)ye[2*N+1]=9,N++,ve[9]++;for(;N<=279;)ye[2*N+1]=7,N++,ve[7]++;for(;N<=287;)ye[2*N+1]=8,N++,ve[8]++;for(wt(ye,w+1,ve),N=0;N<g;N++)P[2*N+1]=5,P[2*N]=Je(N,5);Ce=new Ie(ye,V,v+1,w,_),de=new Ie(P,ne,0,g,_),Re=new Ie(new Array(0),F,0,b,A)})(),K=!0),C.l_desc=new U(C.dyn_ltree,Ce),C.d_desc=new U(C.dyn_dtree,de),C.bl_desc=new U(C.bl_tree,Re),C.bi_buf=0,C.bi_valid=0,Ze(C)},a._tr_stored_block=L,a._tr_flush_block=function(C,N,se,le){var G,ue,ve=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(he){var Me,it=4093624447;for(Me=0;Me<=31;Me++,it>>>=1)if(1&it&&he.dyn_ltree[2*Me]!==0)return l;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return u;for(Me=32;Me<v;Me++)if(he.dyn_ltree[2*Me]!==0)return u;return l})(C)),Vt(C,C.l_desc),Vt(C,C.d_desc),ve=(function(he){var Me;for(k(he,he.dyn_ltree,he.l_desc.max_code),k(he,he.dyn_dtree,he.d_desc.max_code),Vt(he,he.bl_desc),Me=b-1;3<=Me&&he.bl_tree[2*pe[Me]+1]===0;Me--);return he.opt_len+=3*(Me+1)+5+5+4,Me})(C),G=C.opt_len+3+7>>>3,(ue=C.static_len+3+7>>>3)<=G&&(G=ue)):G=ue=se+5,se+4<=G&&N!==-1?L(C,N,se,le):C.strategy===4||ue===G?(ge(C,2+(le?1:0),3),Xt(C,ye,P)):(ge(C,4+(le?1:0),3),(function(he,Me,it,Ve){var Pt;for(ge(he,Me-257,5),ge(he,it-1,5),ge(he,Ve-4,4),Pt=0;Pt<Ve;Pt++)ge(he,he.bl_tree[2*pe[Pt]+1],3);Q(he,he.dyn_ltree,Me-1),Q(he,he.dyn_dtree,it-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,ve+1),Xt(C,C.dyn_ltree,C.dyn_dtree)),Ze(C),le&&Ue(C)},a._tr_tally=function(C,N,se){return C.pending_buf[C.d_buf+2*C.last_lit]=N>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&N,C.pending_buf[C.l_buf+C.last_lit]=255&se,C.last_lit++,N===0?C.dyn_ltree[2*se]++:(C.matches++,N--,C.dyn_ltree[2*(M[se]+v+1)]++,C.dyn_dtree[2*W(N)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){ge(C,2,3),me(C,O,ye),(function(N){N.bi_valid===16?(Ae(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Kh=N6(),G6=H6(),W6=la(F6(),1);function U6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function V6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ke(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ke(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ke(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function q6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),o=r.getContext("2d");if(o)return r.width=t.naturalWidth,r.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ke(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ke(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function Z6(e){if(e.blob)return ke(`Got blob for page ${e.src} from cache`),e.blob;const t=await V6(e)||await q6(e);return t||ke(`Failed to get blob for page ${e.src}`),t}async function j6(){ze("download","working");const e=new W6.default,t=fe("images")??{},r=fe("manga"),o=r?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=xe.default.sortBy(xe.default.entries(t),([f])=>Number(f)),l=[],u=f=>{ze("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:oe`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${q("DOWNLOAD_PROGRESS").replace("##num##",f.toString()).replace("##total##",o.toString())}</p>
          <progress value='${f}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:oe`
        <mov-button @click=${()=>ze("download","cancelled")}>
          ${q("CANCEL")}
        </mov-button>
      `})};u(0);let c=0;for(const[f,p]of s){if(fe("download")==="cancelled"){ke("Download cancelled"),ze("dialog",null),ze("download",void 0);return}try{const v=await Z6(p);if(v){const w=U6(v.type),g=`Page-${Number(f).toString().padStart(a,"0")}.${w}`;ke(`${g} Added to Zip from Blob`),e.file(g,v,{createFolders:!0,compression:"DEFLATE"})}else l.push(p.src??f)}catch(v){ke(`Error processing page ${f}`,v),l.push(p.src??f)}finally{c+=1,u(c)}}ze("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:oe`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${q("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:oe``}),l.length>0&&(ke("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),ke("Generating Zip"),e.generateAsync({type:"blob"}).then(f=>{ke("Download Ready");const p=`${r?.title??document.title}.zip`;(0,G6.saveAs)(f,p,{autoBom:!1}),l.length>0?ze("dialog",{open:!0,title:q("DOWNLOAD_INCOMPLETE"),icon:"warning",content:oe`<p>${q("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:oe`<mov-button @click=${()=>ze("dialog",null)}>
            ${q("CLOSE")}
          </mov-button>`}):ze("dialog",null)}).catch(f=>{ke("Error generating zip",f),ze("dialog",{open:!0,title:q("WARNING"),icon:"error",content:oe`<p>Error generating zip: ${f.message}</p>`,footer:oe`<mov-button @click=${()=>ze("dialog",null)}>
          ${q("CLOSE")}
        </mov-button>`})}).finally(()=>{ze("download",void 0)})}function Yh(){fe("download")!=="working"&&(ke("Downloading Chapter"),j6().catch(e=>ke("Error downloading chapter",e)))}function K6(){Io("hidePageControls",e=>!e)}function Di(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,Kh.sanitizeUrl)(r):t.id==="series"&&(Qs()?window.location.href=window.location.pathname:window.history.back()))}function Y6(e){if(e)if(X("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();t.scrollBy({left:r.left-o.left,top:r.top-o.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}nr.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):Y6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>ze("scrollToPage",void 0),10))});function X6(e){const t=e.detail.value;ze("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function J6(e){ze("scrollToPage",e)}var Mc=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ac(e,t,r,o){e.addEventListener?e.addEventListener(t,r,o):e.attachEvent&&e.attachEvent(`on${t}`,r)}function zi(e,t,r,o){e&&(e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent&&e.detachEvent(`on${t}`,r))}function Xh(e,t){const r=t.slice(0,t.length-1),o=[];for(let a=0;a<r.length;a++)o.push(e[r[a].toLowerCase()]);return o}function Jh(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function Q6(e,t){const r=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)o.indexOf(r[s])===-1&&(a=!1);return a}function Qh(e){let t=e.keyCode||e.which||e.charCode;return e.key&&/^[a-z]$/i.test(e.key)?e.key.toUpperCase().charCodeAt(0):(e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t)}var Bi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Mc?173:189,"=":Mc?61:187,";":Mc?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},Lr={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},Ni={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Rt={16:!1,18:!1,17:!1,91:!1},bt={};for(let e=1;e<20;e++)Bi[`f${e}`]=111+e;var ut=[],Hi=null,Zo=null,e1="all",pn=new Map,jo=e=>Bi[e.toLowerCase()]||Lr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),e9=e=>Object.keys(Bi).find(t=>Bi[t]===e),t9=e=>Object.keys(Lr).find(t=>Lr[t]===e),t1=e=>{e1=e||"all"},Fi=()=>e1||"all",r9=()=>ut.slice(0),n9=()=>ut.map(e=>e9(e)||t9(e)||String.fromCharCode(e)),o9=()=>{const e=[];return Object.keys(bt).forEach(t=>{bt[t].forEach(({key:r,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:r.split("+").map(l=>jo(l))})})}),e},r1=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let o=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(o=!1),o},i9=e=>(typeof e=="string"&&(e=jo(e)),ut.indexOf(e)!==-1),a9=(e,t)=>{let r,o;e||(e=Fi());for(const a in bt)if(Object.prototype.hasOwnProperty.call(bt,a))for(r=bt[a],o=0;o<r.length;)r[o].scope===e?r.splice(o,1).forEach(({element:s})=>xc(s)):o++;Fi()===e&&t1(t||"all")};function s9(e){let t=Qh(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=jo(e.key));const r=ut.indexOf(t);if(r>=0&&ut.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&ut.splice(0,ut.length),(t===93||t===224)&&(t=91),t in Rt){Rt[t]=!1;for(const o in Lr)Lr[o]===t&&(Qr[o]=!1)}}var n1=(e,...t)=>{if(typeof e>"u")Object.keys(bt).forEach(r=>{Array.isArray(bt[r])&&bt[r].forEach(o=>Ja(o)),delete bt[r]}),xc(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&Ja(r)});else if(typeof e=="object")e.key&&Ja(e);else if(typeof e=="string"){let[r,o]=t;typeof r=="function"&&(o=r,r=""),Ja({key:e,scope:r,method:o,splitKey:"+"})}},Ja=({key:e,scope:t,method:r,splitKey:o="+"})=>{Jh(e).forEach(a=>{const s=a.split(o),l=s.length,u=s[l-1],c=u==="*"?"*":jo(u);if(!bt[c])return;t||(t=Fi());const f=l>1?Xh(Lr,s):[],p=[];bt[c]=bt[c].filter(v=>{const w=(r?v.method===r:!0)&&v.scope===t&&Q6(v.mods,f);return w&&p.push(v.element),!w}),p.forEach(v=>xc(v))})};function o1(e,t,r,o){if(t.element!==o)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Rt)Object.prototype.hasOwnProperty.call(Rt,s)&&(!Rt[s]&&t.mods.indexOf(+s)>-1||Rt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Rt[16]&&!Rt[18]&&!Rt[17]&&!Rt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(ut),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function i1(e,t){const r=bt["*"];let o=Qh(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Qr.filter||r1).call(this,e))return;if((o===93||o===224)&&(o=91),ut.indexOf(o)===-1&&o!==229&&ut.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(u=>{const c=Ni[u];e[u]&&ut.indexOf(c)===-1?ut.push(c):!e[u]&&ut.indexOf(c)>-1?ut.splice(ut.indexOf(c),1):u==="metaKey"&&e[u]&&(ut=ut.filter(f=>f in Ni||f===o))}),o in Rt){Rt[o]=!0;for(const u in Lr)if(Object.prototype.hasOwnProperty.call(Lr,u)){const c=Ni[Lr[u]];Qr[u]=e[c]}if(!r)return}for(const u in Rt)Object.prototype.hasOwnProperty.call(Rt,u)&&(Rt[u]=e[Ni[u]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ut.indexOf(17)===-1&&ut.push(17),ut.indexOf(18)===-1&&ut.push(18),Rt[17]=!0,Rt[18]=!0);const a=Fi();if(r)for(let u=0;u<r.length;u++)r[u].scope===a&&(e.type==="keydown"&&r[u].keydown||e.type==="keyup"&&r[u].keyup)&&o1(e,r[u],a,t);if(!(o in bt))return;const s=bt[o],l=s.length;for(let u=0;u<l;u++)if((e.type==="keydown"&&s[u].keydown||e.type==="keyup"&&s[u].keyup)&&s[u].key){const c=s[u],{splitKey:f}=c,p=c.key.split(f),v=[];for(let w=0;w<p.length;w++)v.push(jo(p[w]));v.sort().join("")===ut.sort().join("")&&o1(e,c,a,t)}}var Qr=function e(t,r,o){ut=[];const a=Jh(t);let s=[],l="all",u=document,c=0,f=!1,p=!0,v="+",w=!1,g=!1;if(o===void 0&&typeof r=="function"&&(o=r),Object.prototype.toString.call(r)==="[object Object]"){const b=r;b.scope&&(l=b.scope),b.element&&(u=b.element),b.keyup&&(f=b.keyup),b.keydown!==void 0&&(p=b.keydown),b.capture!==void 0&&(w=b.capture),typeof b.splitKey=="string"&&(v=b.splitKey),b.single===!0&&(g=!0)}for(typeof r=="string"&&(l=r),g&&n1(t,l);c<a.length;c++){const b=a[c].split(v);s=[],b.length>1&&(s=Xh(Lr,b));let y=b[b.length-1];y=y==="*"?"*":jo(y),y in bt||(bt[y]=[]),bt[y].push({keyup:f,keydown:p,scope:l,mods:s,shortcut:a[c],method:o,key:a[c],splitKey:v,element:u})}if(typeof u<"u"&&typeof window<"u"){if(!pn.has(u)){const b=(_=window.event)=>i1(_,u),y=(_=window.event)=>{i1(_,u),s9(_)};pn.set(u,{keydownListener:b,keyupListenr:y,capture:w}),Ac(u,"keydown",b,w),Ac(u,"keyup",y,w)}if(!Hi){const b=()=>{ut=[]};Hi={listener:b,capture:w},Ac(window,"focus",b,w)}if(!Zo&&typeof document<"u"){const b=()=>{ut=[];for(const S in Rt)Rt[S]=!1;for(const S in Lr)e[S]=!1},y=b,_=b;document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",_),Zo={fullscreen:y,webkit:_}}}};function l9(e,t="all"){Object.keys(bt).forEach(r=>{bt[r].filter(o=>o.scope===t&&o.shortcut===e).forEach(o=>{o&&o.method&&o.method({},o)})})}function xc(e){const t=Object.values(bt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:o,capture:a}=pn.get(e)||{};r&&o&&(zi(e,"keyup",o,a),zi(e,"keydown",r,a),pn.delete(e))}if(t.length<=0||pn.size<=0){if(Array.from(pn.keys()).forEach(r=>{const{keydownListener:o,keyupListenr:a,capture:s}=pn.get(r)||{};o&&a&&(zi(r,"keyup",a,s),zi(r,"keydown",o,s),pn.delete(r))}),pn.clear(),Object.keys(bt).forEach(r=>delete bt[r]),Hi){const{listener:r,capture:o}=Hi;zi(window,"focus",r,o),Hi=null}Zo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Zo.fullscreen),document.removeEventListener("webkitfullscreenchange",Zo.webkit),Zo=null)}}var Ic={getPressedKeyString:n9,setScope:t1,getScope:Fi,deleteScope:a9,getPressedKeyCodes:r9,getAllKeyCodes:o9,isPressed:i9,filter:r1,trigger:l9,unbind:n1,keyMap:Bi,modifier:Lr,modifierMap:Ni};for(const e in Ic){const t=e;Object.prototype.hasOwnProperty.call(Ic,t)&&(Qr[t]=Ic[t])}if(typeof window<"u"){const e=window.hotkeys;Qr.noConflict=t=>(t&&window.hotkeys===Qr&&(window.hotkeys=e),Qr),window.hotkeys=Qr}function a1(){const e=fe("chapter").value;if(X("viewMode").startsWith("Fluid")){const t=X("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:X("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(ze("autoScroll",!1),ke("Finished auto scroll"))}else window.scrollBy({top:X("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(ze("autoScroll",!1),ke("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(a1)}function Qa(){fe("autoScroll")?(ze("autoScroll",!1),ke("Stopped auto scroll")):(ze("autoScroll",!0),requestAnimationFrame(a1),ke("Start auto scroll"))}var es=!1,c9=xe.default.debounce(()=>{Qa(),es=!1},500);function d9(){!es&&fe("autoScroll")&&(Qa(),es=!0),es&&!fe("autoScroll")&&c9()}function u9(){window.addEventListener("wheel",xe.default.throttle(d9,500))}var en=class extends rt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
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
                ${Sc}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?oe`
                <div class="icon-container">
                  <mov-icon
                    .name=${h9(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};z([Y({type:Boolean,reflect:!0})],en.prototype,"open",void 0),z([Y({type:String,reflect:!0})],en.prototype,"mode",void 0),z([Y({type:Boolean,reflect:!0})],en.prototype,"fullscreen",void 0),z([Y({type:String,reflect:!0})],en.prototype,"label",void 0),z([Y({type:Boolean,reflect:!0,attribute:"without-header"})],en.prototype,"withoutHeader",void 0),z([Y({type:Boolean,reflect:!0,attribute:"light-dismiss"})],en.prototype,"lightDismiss",void 0),z([Y({type:String,reflect:!0})],en.prototype,"icon",void 0),z([An("dialog")],en.prototype,"dialog",void 0),en=z([lt("mov-dialog")],en);function Cc(e){const t=()=>ze("dialog",null);e.timer&&setTimeout(t,e.timer),ze("dialog",{open:!0,icon:e.icon,title:e.title,content:oe`<div style="padding: 1rem;">${Lu(e.html)}</div>`,footer:oe`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function h9(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function f9(e){const t=e.currentTarget.value;Bu(t==="true")}function p9(e){const t=e.currentTarget.value;Mt("locale",t)}function m9(e){const t=e.currentTarget.value;Mt("loadMode",t)}function g9(e){const t=e.detail.checked;Mt("fitWidthIfOversize",t)}function v9(e){const t=e.currentTarget.value;Mt("navbar",t)}function b9(e){const t=e.currentTarget.value;Mt("pagination",t)}function w9(e){const t=e.detail.checked;Mt("downloadZip",t),t&&Cc({title:q("ATTENTION"),html:q("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function _9(e){const t=e.detail.checked;Mt("lazyLoadImages",t),t&&Cc({title:q("WARNING"),html:q("LAZY_LOAD"),icon:"warning"})}function y9(e){const t=e.detail.value;Mt("lazyStart",typeof t=="string"?parseInt(t,10):t)}function k9(e){const t=e.currentTarget.value;Mt("loadSpeed",t),["Extreme","All"].includes(t)&&Cc({title:q("SPEED_WARNING"),html:q("SPEED_WARNING_MESSAGE"),icon:"warning"})}function E9(e){const t=e.detail.value;Mt("zoomStep",typeof t=="string"?parseInt(t,10):t)}function S9(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;a4("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${r}vw;}`),Mt("minZoom",r)}function M9(e){const t=e.detail.checked;Mt("hidePageControls",t)}function A9(e){const t=e.currentTarget.value;Mt("header",t)}function x9(e){const t=e.detail.value;Mt("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function s1(e){Io("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return r>=o?o:r})}function I9(e){const t=e.currentTarget.value;Mt("deviceMode",t),ze("device",yl(t))}function C9(){const e=X("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function O9(){return X("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function l1(e,t=X("zoomMode"),r=X("zoomValue")){const o=C9(),a=O9();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function $n(e=X("zoomMode"),t=X("zoomValue")){ke("Zoom",e,t),xo("zoomMode",e),xo("zoomValue",t),e==="height"?ze("scrollToPage",fe("currentPage")):io("header");const r=fe("images"),o=fe("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=l1({...r?.[s]},e,t);ze("images",a)}function Ko(e,t=X("zoomValue")){return()=>{$n(e,t)}}function ts(e=1){return()=>{const t=X("zoomValue")+e*X("zoomStep");t>0&&t<500&&$n("percent",t)}}function T9(e){const t=e.currentTarget.value;Mt("zoomMode",t)}function L9(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;Mt("zoomValue",r),$n("percent",r)}function R9(e){const t=e.detail.value;$n("percent",typeof t=="string"?parseInt(t,10):t)}function wr(e){return()=>{xo("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(xo("zoomMode","height"),xo("header","click"),$n("height")):(io("zoomMode"),io("zoomValue"),io("header")),$n()}}function P9(e){const t=e.currentTarget.value;Mt("viewMode",t),wr(t)()}function $9(e){const t=X("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function D9(e){const t=fe("currentPage")+e;t<0?ze("scrollToPage",0):t>(fe("manga")?.pages??1)||ze("scrollToPage",t)}function z9(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function B9(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const o=fe("images")??{},a=r.begin??1,s=r.pages??1,l=c=>{if(c<a||c>s)return!1;if(o[c]?.doublePage)return!0;let f=0;for(let p=c-1;p>=a&&!o[p]?.doublePage;p--)f++;return f%2===0};let u;if(e===1)for(u=t+1;u<=s&&!l(u);)u++;else if(l(t))for(u=t-1;u>a&&!l(u);)u--;else for(u=t;u>a&&!l(u);)u--;u<a?ze("scrollToPage",0):u>s?ze("scrollToPage",s):ze("scrollToPage",u)}function c1(e){const t=X("viewMode"),r=X("zoomMode");ke("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?B9(e):t.startsWith("Fluid")?$9(e):r==="height"?D9(e):z9(e)}function Gi(e){const t=fe("manga")?.[e];t&&t!=="#"?window.location.href=(0,Kh.sanitizeUrl)(t):e==="series"&&(Qs()?window.location.href=window.location.pathname:window.history.back())}var N9={SCROLL_UP(){c1(-1)},SCROLL_DOWN(){c1(1)},NEXT_CHAPTER(){Gi("next")},PREVIOUS_CHAPTER(){Gi("prev")},RETURN_CHAPTER_LIST(){Gi("series")},ENLARGE(){ts(1)()},REDUCE(){ts(-1)()},RESTORE(){Ko("percent",100)()},FIT_WIDTH(){Ko("width")()},FIT_HEIGHT(){Ko("height")()},SETTINGS(){zu("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){wr("WebComic")()},VIEW_MODE_VERTICAL(){wr("Vertical")()},VIEW_MODE_LEFT(){wr("FluidRTL")()},VIEW_MODE_RIGHT(){wr("FluidLTR")()},VIEW_MODE_GALLERY(){wr("Gallery")()},SCROLL_START(){Qa()},INCREASE_SPEED(){s1(1)},DECREASE_SPEED(){s1(-1)},TOGGLE_CONTROLS(){Io("hidePageControls",e=>!e)}};function d1(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Qr.unbind(),xe.default.keys(X("keybinds")).forEach(e=>{Qr(X("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{fe("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),N9[e]())},100))})}var Dn=class extends rt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Et`
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
          @click=${Di}
          value="${this.prev}"
          ?disabled=${xr(this.prev)||this.prev==="#"}
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
            @input="${X6}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Di}
          value="${this.next}"
          ?disabled=${xr(this.next)||this.next==="#"}
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
          ?disabled=${this.isFirstPage&&(xr(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(xr(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return He;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return oe`
      ${t?this.renderSlider():He} ${r?this.renderSideArrows():He}
    `}handleLeftArrowClick(){this.isFirstPage?Gi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Gi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){ze("scrollToPage",t)}};z([Y({type:String})],Dn.prototype,"mode",void 0),z([Y({type:Number})],Dn.prototype,"currentPage",void 0),z([Y({type:Number})],Dn.prototype,"totalPages",void 0),z([Y({type:Number})],Dn.prototype,"startPage",void 0),z([Y({type:String})],Dn.prototype,"next",void 0),z([Y({type:String})],Dn.prototype,"prev",void 0),Dn=z([lt("manga-pagination")],Dn);var zn=class extends rt{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
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
                ${Sc}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};z([Y({type:Boolean,reflect:!0})],zn.prototype,"open",void 0),z([Y({type:String,reflect:!0})],zn.prototype,"placement",void 0),z([Y({type:String,reflect:!0})],zn.prototype,"label",void 0),z([Y({type:Boolean,reflect:!0,attribute:"without-header"})],zn.prototype,"withoutHeader",void 0),z([Y({type:Boolean,reflect:!0,attribute:"light-dismiss"})],zn.prototype,"lightDismiss",void 0),z([An("dialog")],zn.prototype,"dialog",void 0),zn=z([lt("mov-drawer")],zn);var co=class extends rt{static{this.styles=Et`
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
    `}};z([Y({type:Boolean,reflect:!0})],co.prototype,"open",void 0),z([Y({type:Boolean,reflect:!0})],co.prototype,"checkable",void 0),z([Y({type:Number})],co.prototype,"distance",void 0),z([Y({type:Number})],co.prototype,"skidding",void 0),z([Y({type:String})],co.prototype,"placement",void 0),co=z([lt("mov-dropdown")],co);var Bn=class extends rt{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Et`
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
    `}};z([Y({type:Boolean,reflect:!0})],Bn.prototype,"selected",void 0),z([Y({type:Boolean,reflect:!0})],Bn.prototype,"checked",void 0),z([Y({type:Boolean,reflect:!0})],Bn.prototype,"disabled",void 0),z([Y({type:String})],Bn.prototype,"value",void 0),z([Y({type:String,reflect:!0})],Bn.prototype,"variant",void 0),z([Y({type:String,reflect:!0})],Bn.prototype,"type",void 0),Bn=z([lt("mov-dropdown-item")],Bn);var Oc=class extends rt{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Et`
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
    ></div>`}};z([Y({type:String,reflect:!0})],Oc.prototype,"orientation",void 0),Oc=z([lt("mov-divider")],Oc);var u1="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",H9=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atom=o,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Tc=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atoms=o,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(o=>o())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),F9=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Tc();function r(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=r})),G9=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Tc(),r=(o,a)=>class extends o{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),W9=Ar((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=H9();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Tc();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var o=F9();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=G9();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Yo=W9(),h1=class extends rt{static{this.styles=Et`
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
    `}};h1=z([lt("mov-button-group")],h1);var rs=49,U9=100,V9=class mp{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=X("header"),{scrollY:a}=window;let s="none";X("zoomMode")!=="height"&&a+window.innerHeight+U9>document.body.scrollHeight?s="end":a>this.prevOffset&&a>rs?s="hide":o==="scroll"&&a<this.prevOffset&&a>rs?s="show":o!=="click"&&a<=rs&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),o==="scroll"){const u=s!=="hide";this.headerVisible!==u&&(this.headerVisible=u,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(X("header"))){const a=mp.isMouseInsideRegion(o,window.innerWidth,rs*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{X("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=X("header");X("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,o){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=o}},q9=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const o="...",a=r-this.canvasContext.measureText(o).width;let s="",l="";for(let u=1;u<t.length;u++){const c=t.substring(0,u),f=t.substring(t.length-u);if(this.canvasContext.measureText(c).width+this.canvasContext.measureText(f).width>a)break;s=c,l=f}this.value=`${s}${o}${l}`,this.host.requestUpdate()}};function f1(e=window.location.href){xr(Co(e))||(ke(`Bookmark Removed ${e}`),Io("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function Z9(e){const t=e.currentTarget.value;ke(`Bookmark Removed ${t}`),dr.error({title:q("BOOKMARK_REMOVED"),duration:1e4}),f1(t)}function j9(){ze("panel","bookmarks")}function p1(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Co(t.url)?(Io("bookmarks",r=>[...r.filter(o=>o.url!==t.url)]),dr.error({title:q("BOOKMARK_REMOVED"),duration:1e4})):(Io("bookmarks",r=>[...r,t]),dr.success({title:q("BOOKMARK_SAVED"),description:q("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Lc(){ze("panel","none")}function K9(){ze("panel","settings")}function Y9(){ze("panel","keybindings")}function X9(e){const t={};xe.default.keys(e).forEach(r=>{const o=e[r].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),Mt("keybinds",t),ze("panel","keybindings"),d1()}function J9(){ze("panel","keybindingsEditor")}var Q9="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",m1="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",ns=class extends rt{static{this.styles=[Se(Q9),Se(m1),Se(u1),Et``]}constructor(){super(),this.headroomController=new V9(this),this.titleController=new q9(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return oe``;const{headroom:t,headerVisible:r}=this.headroomController,o=X("keybinds"),a=s=>{if(fe("device")!=="desktop")return He;const l=o[s];return!l||l.length===0?He:l.map(u=>oe`<kbd slot="details">${u}</kbd>`)};return oe`
      <toggle-button
        id="menu"
        mode="burger"
        class="${St({[X("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${St({[X("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${St({"button-group-merged-end":["mobile","tablet"].includes(fe("device"))})}"
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
              @click=${K9}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${q("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Y9}
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
              @click=${j9}
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
              class="${St({running:fe("autoScroll")})}"
              @click=${Qa}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${q("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${K6}"
              ?selected=${X("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${q("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
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
              @click="${wr("WebComic")}"
              ?selected=${X("viewMode")==="WebComic"}
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
              @click="${wr("Vertical")}"
              ?selected=${X("viewMode")==="Vertical"}
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
              @click="${wr("FluidLTR")}"
              ?selected=${X("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${q("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${wr("FluidRTL")}"
              ?selected=${X("viewMode")==="FluidRTL"}
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
              @click="${wr("Book")}"
              ?selected=${X("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${q("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${wr("Manga")}"
              ?selected=${X("viewMode")==="Manga"}
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
              @click="${wr("Gallery")}"
              ?selected=${X("viewMode")==="Gallery"}
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
              @click="${ts()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${q("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Ko("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${q("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${ts(-1)}"
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
              @click="${Ko("width")}"
              ?selected=${X("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${q("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Ko("height")}"
              ?selected=${X("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${q("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
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
            @click=${Di}
            title="${q("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${q("DOWNLOAD_ZIP")}"
            @click=${Yh}
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
            title="${q("PREVIOUS_CHAPTER")}"
            @click=${Di}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??He}"
            title="${q("NEXT_CHAPTER")}"
            @click=${Di}
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
            @input=${R9}
          ></mov-slider>
        </div>
      </header>
    `}};z([An("#MangaTitle")],ns.prototype,"mangaTitleElement",void 0),z([Y({type:Object})],ns.prototype,"manga",void 0),ns=z([lt("reader-header"),(0,Yo.useStores)(Tt,Ao,nr)],ns);var e7="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",g1=class extends rt{static{this.styles=[Se(e7)]}listBookmarks(){return el(X("bookmarks"))?[q("LIST_EMPTY")]:X("bookmarks").map((t,r)=>oe`
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
              @click=${Z9}
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
        @close=${Lc}
      >
        <mov-button
          class="Bookmark"
          title="${q("BOOKMARK")}"
          @click=${p1}
          slot="header-actions"
        >
          <mov-icon
            name="${Co()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${q("BOOKMARKS")}</h2>
        <h2 slot="label">${q("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};g1=z([lt("bookmark-panel"),(0,Yo.useStores)(Tt,Ao,nr)],g1);function*t7(e,t){const r=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield r?t(o):t),o++,yield a}}var r7="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",v1=class extends rt{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(X("keybinds")).reduce((r,o)=>(r[o]=cl(),r),{})}static{this.styles=[Se(r7),Se(u1)]}keybindList(){const t=X("keybinds");return xe.default.keys(t).map(r=>{const o=t[r]?.length?t7(t[r]?.map(a=>oe`<kbd class="dark">${a}</kbd>`)," / "):"";return oe`<span>${q(r)}:</span> <span>${o}</span>`})}keybindEditor(){const t=X("keybinds");return xe.default.keys(t).map(r=>oe`<label for="${r}">${q(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??He}"
            ${ul(this.keybindsRefs[r])}
          />`)}render(){return oe`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Lc}
      >
        <h2 slot="label">${q("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?oe` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${q("SAVE_KEYBINDS")}"
                @click=${()=>X9(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${q("BUTTON_SAVE")}
              </mov-button>`:oe` <mov-button
                id="EditKeybindings"
                type="button"
                title="${q("EDIT_KEYBINDS")}"
                @click=${J9}
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
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Lu(q("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};v1=z([lt("keybindings-panel"),(0,Yo.useStores)(Tt,Ao,nr)],v1);function*n7(e,t){if(e!==void 0){let r=0;for(const o of e)yield t(o,r++)}}function os(e,t=1){return Array(e).fill(0).map((r,o)=>o+1).filter(r=>r>=t)}function Wi(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var is=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function o7(e,t,r,o){let a="";for(let s=0;s<=e;s+=5){const l=Mo` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${is(s)}"
    />`;if(a+=l,s!==0&&s%50===0){const u=Mo` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${is(s)}px"
      >
        ${s}
      </text>`;a+=u}}for(let s=0;s<=t;s+=5){const l=Mo` <line
      x1="0"
      y1="${s}"
      x2="${is(s)}"
      y2="${s}"
    />`;if(a+=l,s!==0&&s%50===0){const u=Mo` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${is(s)}px"
      >
        ${s}
      </text>`;a+=u}}return Mo` <svg
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
  </svg>`}function Yt(e,t,r="#0F1C3F",o="#ECEAD9"){return Wi(o7(e,t,r,o))}var b1=xe.default.values(Ot).map(e=>e[900]),w1=[400,600,900,1200,1400,1600,1970],_1=[600,800,1e3,1200,1400,2e3,2600];function i7(){const e=Math.floor(Math.random()*w1.length),t=Math.floor(Math.random()*_1.length),r=Math.floor(Math.random()*b1.length);return Yt(w1[e],_1[t],b1[r])}function y1(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function a7(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var s7=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",Ui=class extends rt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Se(s7),Et`
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
        background-image: url('${Se(Wi(bl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Se(Wi(wl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return He;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=fe("images")||{},a=xe.default.keys(o).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&o[l]?.status==="loaded"}).length;return oe`
      <nav
        id="Navigation"
        class="${St(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${E6}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${q("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?y1:null}
        >
          ${n7(os(t?.pages??1,t?.begin??1),s=>oe` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>J6(s)}
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
    `}};z([Y({type:String})],Ui.prototype,"mode",void 0),z([Y({type:Boolean})],Ui.prototype,"forceExpanded",void 0),z([Ht()],Ui.prototype,"isHiding",void 0),Ui=z([lt("navbar-thumbnails"),(0,Yo.useStores)(Tt,Ao,nr)],Ui);function l7(){const e=oo()?"true":"false";return oe` <div class="ControlLabel">
    ${q("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${f9}
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
  </div>`}function c7(){return Eo.map(e=>oe`
      <option
        value="${e.ID}"
        ?selected=${X("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function d7(){return oe` <div class="ControlLabel locale">
    ${q("LANGUAGE")}
    <select
      id="locale"
      @change="${p9}"
    >
      ${c7()}
    </select>
  </div>`}function u7(){const e=X("deviceMode");return oe` <div class="ControlLabel">
    ${q("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${I9}
    >
      <segmented-control-option
        value="auto"
        label=${q("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${q("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${q("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${q("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var h7=()=>oe`${l7()} ${u7()} ${d7()}`;function f7(){return oe`
    <div class="ControlLabel loadMode">
      ${q("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${m9}"
      >
        <option
          value="wait"
          ?selected=${X("loadMode")==="wait"}
        >
          ${q("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${X("loadMode")==="always"}
        >
          ${q("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${X("loadMode")==="never"}
        >
          ${q("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function p7(){return oe`
    <div class="ControlLabel PagesPerSecond">
      ${q("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${k9}"
      >
        <option
          value="Safe"
          ?selected=${X("loadSpeed")==="Safe"}
        >
          ${q("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${X("loadSpeed")==="Standard"}
        >
          ${q("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${X("loadSpeed")==="Faster"}
        >
          ${q("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${X("loadSpeed")==="Extreme"}
        >
          ${q("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${X("loadSpeed")==="All"}
        >
          ${q("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var m7=()=>oe`${f7()} ${p7()}`;function g7(){return oe`
    <div class="ControlLabel fitIfOversize">
      ${q("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${X("fitWidthIfOversize")}
        @change=${g9}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${q("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${X("downloadZip")}
        @change=${w9}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${q("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${X("hidePageControls")}
        @change=${M9}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${q("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${X("lazyLoadImages")}
        @change=${_9}
      ></mov-switch>
    </div>
  `}function v7(){return oe`
    <div
      class="${St({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:X("lazyLoadImages")})}"
    >
      <span>
        ${q("LAZY_LOAD_IMAGES")}
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
        @input="${y9}"
      ></mov-slider>
    </div>
  `}function b7(){return oe`
    <div class="ControlLabel headerType">
      ${q("HEADER_TYPE")}
      <segmented-control
        .value=${X("header")}
        @change=${A9}
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
  `}function w7(){return oe`
    <div class="ControlLabel pagination">
      ${q("PAGINATION_TYPE")}
      <segmented-control
        .value=${X("pagination")}
        @change=${b9}
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
  `}function _7(){return oe`
    <div class="ControlLabel navbarType">
      ${q("NAVBAR_TYPE")}
      <segmented-control
        .value=${X("navbar")}
        @change=${v9}
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
  `}function y7(){return oe`
    <div class="ControlLabel autoScroll">
      <span>
        ${q("AUTO_SCROLL_HEIGHT")}
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
        @input="${x9}"
      ></mov-slider>
    </div>
  `}var k7=()=>oe`${g7()} ${w7()} ${v7()} ${b7()} ${_7()} ${y7()}`;function E7(){const e=X("colorScheme")==="dark";Mt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(X("colorScheme"))}function as(e){const t=e instanceof CustomEvent?e.detail.value:e.currentTarget.value;Mt("theme",t)}function S7(){return oe`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${q("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${E7}
        ?active=${X("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${q("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${X("theme")}"
        title="${X("theme")}"
        @input=${as}
        .swatches=${xe.default.values(Ec)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${X("theme")}"
      mode="steps"
      .selected=${X("theme")}
      @change="${as}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(Ec).map(e=>oe`<color-swatch
            .color="${e}"
            .selected=${X("theme")}
            @change=${as}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${q("THEME_HUE")} & ${q("THEME_SHADE")}</summary>
      <color-panel
        .selected=${X("theme")}
        @change=${as}
      ></color-panel>
    </details>
  `}function M7(){return oe` <div class="ControlLabel DefaultZoomMode">
    ${q("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${X("zoomMode")}
      @change=${T9}
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
  </div>`}function A7(){return oe`
    <div
      class="${St({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:X("zoomMode")==="percent"})}"
    >
      <span>
        ${q("DEFAULT_ZOOM")}
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
        @input="${L9}"
      ></mov-slider>
    </div>
  `}function x7(){return oe`
    <div class="ControlLabel minZoom">
      <span>
        ${q("MINIMUM_ZOOM")}
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
        @input="${S9}"
      ></mov-slider>
    </div>
  `}function I7(){return oe`
    <div class="ControlLabel zoomStep">
      <span>
        ${q("ZOOM_STEP")}
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
        @input="${E9}"
      ></mov-slider>
    </div>
  `}function C7(){return oe`
    <div class="ControlLabel viewMode">
      ${q("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${X("viewMode")}
        @change=${P9}
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
  `}var O7=()=>oe`${M7()} ${A7()} ${x7()} ${I7()} ${C7()}`,T7="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",k1=class extends rt{static{this.styles=[Et`
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
    `,Se(T7)]}render(){return oe`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Lc}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${q("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${m4}"
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
            ${h7()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${q("THEME")}</legend>
            ${S7()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${q("LOADING")}</legend>
            ${m7()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${q("ZOOM")}</legend>
            ${O7()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${q("OTHERS")}</legend>
            ${k7()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};k1=z([lt("settings-panel"),(0,Yo.useStores)(Tt,Ao,nr)],k1);function L7(e){return new Promise(function(t,r){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t($7(s))},o.onerror=r,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function R7(e){return L7(e).then(btoa)}function P7(e){return R7(e).then(function(t){return"data:"+e.type+";base64,"+t})}function $7(e){for(var t="",r=new Uint8Array(e),o=r.byteLength,a=-1;++a<o;)t+=String.fromCharCode(r[a]);return t}async function D7(e,t){ke("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ke("Failed to fetch page: ",r),r}}async function z7(e){return D7(e,"text/html")}async function B7(e,t,r){try{return(await z7(e)).querySelector(t)?.getAttribute(r)}catch(o){return ke("Failed to get element attribute: ",o),null}}var N7=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Rc;function H7(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function ss(e,t,r){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(ur(t,()=>({status:"loading"})),Rc.add(async()=>{let a=H7(r),s;try{const l=await fetch(a,e.fetchOptions);if(l.ok){const u=l.headers.get("content-type");u?.startsWith("image/")?(s=await l.blob(),a=await P7(s)):ke("Fetched content is not an image",u)}else ke("Fetch failed with status",l.status)}catch(l){ke("Failed to fetch image",l)}ur(t,()=>({src:a,blob:s,status:"loaded"})),jt("Loaded Image:",t,"Source:",a)}),e.pages===t&&f1())}async function E1(e,t,r){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(ur(t,()=>({status:"loading"})),Rc.add(async()=>{try{const a=await B7(r,e.img,e.lazyAttr??"src");a?(ur(t,()=>({status:"pending"})),await ss(e,t,a)):ur(t,()=>({status:"error"}))}catch(a){ke("Failed to get page attribute",a),ur(t,()=>({status:"error"}))}}))}function S1(e,t){os(t.pages,e).filter((r,o)=>!(t.lazy??X("lazyLoadImages"))||o<=X("lazyStart")).forEach(r=>{E1(t,r,t.listPages[r-1])})}function M1(e,t){os(t.pages,e).filter((r,o)=>!(t.lazy??X("lazyLoadImages"))||o<=X("lazyStart")).forEach(r=>{ss(t,r,t.listImages[r-1])})}async function F7(){await tl(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Rc=new N7(X("loadSpeed"),e.timer),jt("Loading Images"),jt(`Speed: ${X("loadSpeed")}`),jt(`Lazy: ${e.lazy??X("lazyLoadImages")}, Starting from: ${X("lazyStart")}`),$n(),Su(e)?(jt("Method: Images:",e.listImages),M1(t,e)):Mu(e)?(jt("Method: Pages:",e.listPages),S1(t,e)):sm(e)?(jt("Method: Brute Force"),e.bruteForce({begin:t,addImg:ss,loadImages(r){M1(t,{...e,listImages:r})},loadPages(r,o,a){S1(t,{...e,listPages:r,img:o,lazyAttr:a})},wait:0})):ke("No Loading Method Found"),nr.listen((r,o,a)=>{if(a==="currentPage"&&r.currentPage>o.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Su(e)?ss(e,s,e.listImages[s-1]):Mu(e)&&E1(e,s,e.listPages[s-1]))})}function G7(){const e=fe("images");if(!e)return null;const t=X("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const u in e){const c=e[u].ref?.value;if(!c)continue;const f=c?.getBoundingClientRect();let p;r?o?p=f.right:p=f.left:p=f.top,(r?p<=s:p<=a)&&(!l||p>l.edge)&&(l={index:parseInt(u,10),edge:p})}return l?l.index:fe("manga")?.begin??1}function A1(){const e=G7();e!=null&&fe("currentPage")!==e&&ze("currentPage",e)}function W7(){const e=xe.default.throttle(()=>{requestAnimationFrame(A1)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(A1)}function x1(){if(!fe("chapter").value){setTimeout(x1,50);return}W7()}var I1=xe.default.debounce(()=>{ze("device",yl()),$n()},200);async function U7(){await tl(()=>fe("manga")!==void 0),d1(),window.addEventListener("resize",I1),window.addEventListener("orientationchange",I1),u9(),x1()}var V7=Ar(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define(o):typeof e=="object"?t.exports=o():r.NProgress=o()})(e,function(){var r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(b){var y,_;for(y in b)_=b[y],_!==void 0&&b.hasOwnProperty(y)&&(o[y]=_);return this},r.status=null,r.set=function(b){var y=r.isStarted();b=a(b,o.minimum,1),r.status=b===1?null:b;var _=r.render(!y),S=_.querySelector(o.barSelector),A=o.speed,O=o.easing;return _.offsetWidth,u(function(T){o.positionUsing===""&&(o.positionUsing=r.getPositioningCSS()),c(S,l(b,A,O)),b===1?(c(_,{transition:"none",opacity:1}),_.offsetWidth,setTimeout(function(){c(_,{transition:"all "+A+"ms linear",opacity:0}),setTimeout(function(){r.remove(),T()},A)},A)):setTimeout(T,A)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var b=function(){setTimeout(function(){r.status&&(r.trickle(),b())},o.trickleSpeed)};return o.trickle&&b(),this},r.done=function(b){return!b&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(b){var y=r.status;return y?(typeof b!="number"&&(b=(1-y)*a(Math.random()*y,.1,.95)),y=a(y+b,0,.994),r.set(y)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},(function(){var b=0,y=0;r.promise=function(_){return!_||_.state()==="resolved"?this:(y===0&&r.start(),b++,y++,_.always(function(){y--,y===0?(b=0,r.done()):r.set((b-y)/b)}),this)}})(),r.render=function(b){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var y=document.createElement("div");y.id="nprogress",y.innerHTML=o.template;var _=y.querySelector(o.barSelector),S=b?"-100":s(r.status||0),A=document.querySelector(o.parent),O;return c(_,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),o.showSpinner||(O=y.querySelector(o.spinnerSelector),O&&g(O)),A!=document.body&&p(A,"nprogress-custom-parent"),A.appendChild(y),y},r.remove=function(){v(document.documentElement,"nprogress-busy"),v(document.querySelector(o.parent),"nprogress-custom-parent");var b=document.getElementById("nprogress");b&&g(b)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var b=document.body.style,y="WebkitTransform"in b?"Webkit":"MozTransform"in b?"Moz":"msTransform"in b?"ms":"OTransform"in b?"O":"";return y+"Perspective"in b?"translate3d":y+"Transform"in b?"translate":"margin"};function a(b,y,_){return b<y?y:b>_?_:b}function s(b){return(-1+b)*100}function l(b,y,_){var S;return o.positionUsing==="translate3d"?S={transform:"translate3d("+s(b)+"%,0,0)"}:o.positionUsing==="translate"?S={transform:"translate("+s(b)+"%,0)"}:S={"margin-left":s(b)+"%"},S.transition="all "+y+"ms "+_,S}var u=(function(){var b=[];function y(){var _=b.shift();_&&_(y)}return function(_){b.push(_),b.length==1&&y()}})(),c=(function(){var b=["Webkit","O","Moz","ms"],y={};function _(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(D,j){return j.toUpperCase()})}function S(T){var D=document.body.style;if(T in D)return T;for(var j=b.length,V=T.charAt(0).toUpperCase()+T.slice(1),ne;j--;)if(ne=b[j]+V,ne in D)return ne;return T}function A(T){return T=_(T),y[T]||(y[T]=S(T))}function O(T,D,j){D=A(D),T.style[D]=j}return function(T,D){var j=arguments,V,ne;if(j.length==2)for(V in D)ne=D[V],ne!==void 0&&D.hasOwnProperty(V)&&O(T,V,ne);else O(T,j[1],j[2])}})();function f(b,y){return(typeof b=="string"?b:w(b)).indexOf(" "+y+" ")>=0}function p(b,y){var _=w(b),S=_+y;f(_,y)||(b.className=S.substring(1))}function v(b,y){var _=w(b),S;f(b,y)&&(S=_.replace(" "+y+" "," "),b.className=S.substring(1,S.length-1))}function w(b){return(" "+(b.className||"")+" ").replace(/\s+/gi," ")}function g(b){b&&b.parentNode&&b.parentNode.removeChild(b)}return r})})),q7=la(V7(),1),Z7=/^blob:(.+?)\/(.+)$/;function j7(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function K7(e){return Z7.test(e)}function Y7(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function C1(e,t){const r=fe("images")?.[e];if(!r?.src)return;const o=(r.reload??0)+1;if(o>X("maxReload")){ke(`Stopped reloading Page ${e} after ${o} attempts`);return}if(ke(`Reloading Page ${e} (Attempt ${o})`,t),t?.removeAttribute("src"),j7(r.src)||K7(r.src))ur(e,()=>({reload:o})),t?.setAttribute("src",r.src);else{const a=Y7(r.src,o);ur(e,()=>({reload:o,src:a})),t?.setAttribute("src",a)}}function X7(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images")?.[r]?.ref?.value;o&&C1(r,o)}function J7(e){const t=e.currentTarget,r=parseInt(t.value,10);ur(r,o=>({hide:!o.hide}))}function Q7(e){const t=e.currentTarget,r=parseInt(t.id.replace("PageImg",""),10);ur(r,c=>({...l1({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const o=fe("manga"),a=fe("images")||{},s=xe.default.keys(a).filter(c=>{const f=parseInt(c,10);return f>=(o?.begin??1)&&f<=(o?.pages??1)&&a[f]?.status==="loaded"}).length,l=(o?.pages??1)-((o?.begin??1)-1),u=Math.floor(s/l*100);document.title=`(${u}%) ${fe("manga")?.title}`,q7.default.configure({showSpinner:!1}).set(s/l),ke(`Progress: ${u}%`),s===l&&(ke("Images Loading Complete"),ze("download","available"),X("downloadZip")&&Yh())}function ew(e){const t=e.currentTarget;if(el(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);ur(r,()=>({status:"error"})),C1(r,t)}function tw(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&ze("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+X("zoomStep")/100),height:void 0}})}function rw(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&ze("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-X("zoomStep")/100),height:void 0}})}function nw(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&ze("images",{...o,[r]:{...a,width:void 0,height:void 0}})}function ow(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&ze("images",{...o,[r]:{...a,width:window.innerWidth+(X("navbar")==="left"||X("navbar")==="right"?-34:0),height:void 0}})}function iw(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&ze("images",{...o,[r]:{...a,width:void 0,height:window.innerHeight+(X("navbar")==="bottom"?-34:0)}})}function aw(e){const t=fe("images")?.[e],r=X("viewMode").match(/^(Book|Manga)$/),o=X("viewMode")==="Gallery",a=X("viewMode").startsWith("Fluid"),s=X("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!o?`${X("minZoom")}vw`:void 0}}var sw=(e,t)=>os(e,t).map(r=>{fe("images")?.[r]?.ref||ur(r,c=>({ref:cl()}));let o=0;for(let c=r-1;c>=t&&!fe("images")?.[c].doublePage;c--)fe("images")?.[c].doublePage||o++;const a=fe("images")?.[r].doublePage??!1,s=X("viewMode")==="Book",l=!a&&(s?o%2===0:o%2===1),u=!a&&(s?o%2===1:o%2===0);return oe`
      <div
        id="Page${r}"
        class="${St({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:u&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${q("BOOKMARK")}"
            @click=${p1}
            value="${r}"
          >
            ${Co()?k6:y6}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${q("ZOOM_IN")}"
            @click=${tw}
            value="${r}"
          >
            ${C6}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${q("ZOOM_RESET")}"
            @click=${nw}
            value="${r}"
          >
            ${I6}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${q("ZOOM_OUT")}"
            @click=${rw}
            value="${r}"
          >
            ${O6}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${q("ZOOM_HEIGHT")}"
            @click=${iw}
            value="${r}"
          >
            ${w6}
          </button>
          ${X("viewMode").match(/^(Book|Manga)$/)?oe`
            <button
              class="DoublePage PageButton"
              title="${q("DOUBLE_PAGE")}"
              @click=${()=>{ur(r,c=>({doublePage:!c.doublePage}))}}
              value="${r}"
            >
              ${x6}
            </button>`:oe`
              <button
                class="ZoomWidth PageButton"
                title="${q("ZOOM_WIDTH")}"
                @click=${ow}
                value="${r}"
              >
                ${_6}
              </button>`}
          <button
            class="Hide PageButton"
            title="${q("HIDE")}"
            @click=${J7}
            value="${r}"
          >
            ${fe("images")?.[r].hide?S6:M6}
          </button>
          <button
            class="Reload PageButton"
            title="${q("RELOAD")}"
            @click=${X7}
            value="${r}"
          >
            ${A6}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${St({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??He}
            style="${Xr(aw(r))}"
            @load=${Q7}
            @error=${ew}
            ${ul(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?q("END"):`${r} / ${e}`} ]
      </div>
    `}),lw=e=>oe`
  <main
    id="Chapter"
    ${ul(fe("chapter"))}
    class="${St({fitWidthIfOversize:X("fitWidthIfOversize"),[X("viewMode")]:!0,separator:X("viewMode")==="Vertical"})}"
    @wheel=${t=>{X("viewMode")==="FluidLTR"?y1(t):X("viewMode")==="FluidRTL"&&a7(t)}}
  >
    ${sw(e.pages,e.begin??0)}
  </main>
`,cw=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",dw="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",uw="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",hw="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",fw="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",pw='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',mw="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",gw=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",vw=Et`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Se(Wi(bl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Se(Wi(wl))}');
  }

  ${Se(gw)}
  ${Se(mw)}
  ${Se(cw)}
  ${Se(pw)}
  ${Se(hw)}
  ${Se(uw)}
  ${Se(fw)}
  ${Se(m1)}
  ${Se(dw)}
`,bw=(e="#MangaOnlineViewer",t=X("theme"))=>{const r=jh(t),o=qo(t),a=X("colorScheme")==="dark"?r[8]:r[2],s=qo(a);return Et`
    :where(:root),
    ${Se(e)}, .dark,
    ${Se(e)}.dark {
      --theme-primary-color: ${Se(t)};;
      --theme-primary-text-color: ${Se(o)};;
      --theme-secondary-color: ${Se(a)};;
      --theme-secondary-text-color: ${Se(s)};;

      color-scheme: dark;
      --theme-body-background: ${Se(Ot.dark[600])};;
      --theme-body-text-color: ${Se(Ot.dark[50])};;
      --theme-text-color: ${Se(Ot.dark[50])};;
      --theme-background-color: ${Se(Ot.dark[600])};;
      --theme-hightlight-color: ${Se(Ot.dark[500])};;
      --theme-border-color: ${Se(Ot.dark[400])};;

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
      --theme-body-background: ${Se(Ot.gray[50])};;
      --theme-body-text-color: ${Se(Ot.gray[900])};;
      --theme-text-color: ${Se(Ot.gray[900])};;
      --theme-background-color: ${Se(Ot.gray[50])};;
      --theme-hightlight-color: ${Se(Ot.gray[500])};;
      --theme-border-color: ${Se(Ot.gray[100])};;

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
  `},ww="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Nn=class extends rt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Se(ww)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return oe`
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
    `}renderLateStartButton(){return oe`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${q("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=r=>{this.beginPage=r.detail.value[0],this.endPage=r.detail.value[1]};return oe`
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
    `}};z([Y({type:Number,reflect:!0})],Nn.prototype,"mangaPages",void 0),z([Y({type:Number,reflect:!0})],Nn.prototype,"begin",void 0),z([Y({type:Number})],Nn.prototype,"timeoutMs",void 0),z([Y({type:String,reflect:!0})],Nn.prototype,"status",void 0),z([Ht()],Nn.prototype,"beginPage",void 0),z([Ht()],Nn.prototype,"endPage",void 0),Nn=z([lt("script-startup")],Nn);function _w(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var yw=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},kw=(...e)=>{e?.forEach(yw),e?.forEach(_w)};function Ew(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O1,ls=class extends rt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Et``,Se(vw)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(kw(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),ze("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),U7(),F7()}render(){const t=fe("manga"),r=fe("dialog");return oe`
      <style>
        ${bw()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${St({[X("colorScheme")]:!0,hideControls:X("hidePageControls"),bookmarked:!!Co(),[fe("device")]:!0})}"
        style="${Xr({[`padding-${X("navbar")}`]:"34px"})}"
        .locale="${X("locale")}"
      >
        ${t?oe` <reader-header .manga=${t}></reader-header>
              ${lw(t)}
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
              <moaqz-toaster dismissable></moaqz-toaster>`:oe(O1||(O1=Ew([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${r?oe`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>ze("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};z([Y({type:String,reflect:!0})],ls.prototype,"loadMode",void 0),z([Y({type:Object})],ls.prototype,"manga",void 0),ls=z([lt("manga-online-viewer"),(0,Yo.useStores)(Tt,Ao,nr)],ls);var Sw=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,Mw="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Aw="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",xw=[Sw,Mw,Aw].join(`
`);async function Iw([e,t]){ke(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Co()??t.begin??1,t.before!==void 0&&(jt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=s4("externals",xw),Pp(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??X("loadMode"),r.manga=t,document.body.appendChild(r),ke("Viewer Ready",r)}).catch(r=>ke("Define WebComponent failed",r))}async function Cw(e){ke(`Starting ${Js.script.name} ${Js.script.version} on ${ca()} ${xp()} with ${Ip()}`),ke(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));ke(t.length,"Found sites:",t);const r=t.map(async o=>{ke(`Testing site: ${o.name}`),await $p(o),jt(o.name,"Passed");const a=await o.run();if(jt("Processed site:",o,a),a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{const o=await Promise.any(r);jt("Going with",o[0].name),Iw(o)}catch(o){if(o instanceof AggregateError){ke("All sites failed to run:");for(const a of o.errors)ke(a.message)}else ke("An unexpected error occurred:",o)}}var Ow={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function T1(e,t,r){const o=Ow[r];if(!o)throw new Error(`Invalid matcherKey: ${r}`);return[...document.querySelectorAll(e)].filter(a=>xe.default.castArray(t).some(s=>o(a,s)))}function Tw(e,t,r){return T1(e,t,r)?.[0]}function Pc(e,t,r,o="a"){return Tw(e,t,r)?.closest(o)??null}var L1=(e,t)=>T1(e,t,"eq"),uo=(e,t,r="a")=>Pc(e,t,"eq",r),Lw=(e,t,r="a")=>Pc(e,t,"starts",r),Rw=(e,t,r="a")=>Pc(e,t,"ends",r),Pw={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const e=document.querySelector('astro-island[component-url*="ChapterReader"]'),t=JSON.parse(e?.getAttribute("props")||"{}"),r=t.seriesSlug?.[1],o=(t.pages?.[1]||[]).map(a=>a[1]?.url?.[1]).filter(Boolean);return{title:`${t.seriesName?.[1]} - Chapter ${t.chapterName?.[1]}`,series:`/comics/${r}`,pages:o.length,prev:uo("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:uo("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:o}}},$w={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[$e.ENGLISH],category:De.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:Rw("span","Prev Chapter","a")?.getAttribute("href"),next:Lw("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(r=>r.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Dw={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},zw={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[$e.ENGLISH],category:De.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(r=>`https://meo.comick.pictures/${r?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}};async function Bw(e){try{const t=await(await fetch(e)).blob();return new Promise((r,o)=>{const a=new FileReader;a.onloadend=()=>r(a.result),a.onerror=o,a.readAsDataURL(t)})}catch(t){return console.error(`Failed to convert blob URL ${e} to data URL:`,t),e}}async function Nw(e,t,r){const o=document.createElement("div");o.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",o.innerHTML=`
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `,document.body.appendChild(o);const a=(u,c)=>{const f=c>0?Math.round(u/c*100):0,p=document.getElementById("mov-loading-text"),v=document.getElementById("mov-loading-bar");p&&(p.textContent=`Scrolling and waiting for pages to load: ${u} / ${c||"?"}`),v&&(v.style.width=c>0?`${f}%`:"50%")};a(0,e);const s=window.scrollY,l=[];try{for(let u=0;u<e;u++){let c=null,f=0;for(;f<5e3;){const w=[...document.querySelectorAll("img")].filter(t);if(w[u]){c=w[u];break}await new Promise(g=>setTimeout(g,100)),f+=100}if(!c){ke(`Failed to find image element for page ${u+1}`);continue}c.scrollIntoView({behavior:"auto",block:"center"});let p=0,v="";for(;p<5e3;){const w=c.src||c.getAttribute("src")||"";if(w&&r(w)&&(c.naturalWidth>250||c.complete)){const g=c.naturalWidth||c.width||0;if(g===0||g>=250){v=w;break}}await new Promise(g=>setTimeout(g,100)),p+=100}v?l.push(v):(ke(`Timeout waiting for image ${u+1} to load`),l.push(c.src||c.getAttribute("src")||"")),a(l.length,e)}}finally{window.scrollTo(0,s),o.remove()}if(l.length===0)throw new Error("No images collected from the page");return await Promise.all(l.map(async u=>u.startsWith("blob:")?await Bw(u):u))}var cs=null;if(typeof window<"u"&&window.location.hostname.includes("comix.to")){const e=JSON.parse;JSON.parse=(t,r)=>{const o=e(t,r);try{o?.result?.pages&&(cs=o.result.pages,ke("Intercepted chapter pages data from JSON.parse",cs))}catch{}return o}}function Hw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(o=>o.startsWith("__reactContainer")||o.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const o=r.pop();if(o){if(o.stateNode?.props){const a=o.stateNode.props.client;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const u=l.state.data;if(u?.result?.pages)return u.result.pages}}}if(o.memoizedProps){const a=o.memoizedProps.client||o.memoizedProps.value;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const u=l.state.data;if(u?.result?.pages)return u.result.pages}}}o.child&&r.push(o.child),o.sibling&&r.push(o.sibling)}}return null}function Fw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(o=>o.startsWith("__reactContainer")||o.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const o=r.pop();if(!o)continue;const a=s=>{if(s&&typeof s.getQueryCache=="function"){const l=s.getQueryCache().getAll();for(const u of l){const c=u.state.data;if(c){if(Array.isArray(c)&&c.length>0&&(c[0].chapterNumber!==void 0||c[0].number!==void 0))return c;if(c.result&&Array.isArray(c.result.items)&&c.result.items.length>0){const f=c.result.items[0];if(f.chapterNumber!==void 0||f.number!==void 0||f.mangaId!==void 0)return c.result.items}}}}return null};if(o.stateNode?.props){const s=a(o.stateNode.props.client);if(s)return s}if(o.memoizedProps){const s=a(o.memoizedProps.client||o.memoizedProps.value);if(s)return s}o.child&&r.push(o.child),o.sibling&&r.push(o.sibling)}return null}function Gw(){const e=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return e?e.querySelectorAll("option").length:0}function Ww(){const e=[...document.querySelectorAll("span, div, button, option")];for(const t of e){const r=t.textContent||"",o=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(r.trim());if(o){const a=parseInt(o[1],10);if(a>0&&a<500)return a}}return 0}function Uw(){const e=[...document.querySelectorAll("a")];let t=null,r=null;for(const o of e){const a=o.getAttribute("href");if(!a?.includes("/title/")||!/\/\d+-chapter-/.test(a))continue;const s=(o.textContent||"").toLowerCase().trim(),l=(o.getAttribute("aria-label")||"").toLowerCase();(s.includes("next")||l.includes("next")||o.querySelector('[class*="next"]')||o.querySelector('[class*="right"]'))&&(t=a),(s.includes("prev")||s.includes("previous")||l.includes("prev")||l.includes("previous")||o.querySelector('[class*="prev"]')||o.querySelector('[class*="left"]'))&&(r=a)}return{prev:r,next:t}}function Vw(){const e=[...document.querySelectorAll("a")],t=[];for(const c of e){const f=c.getAttribute("href");if(!f?.includes("/title/")||!/\/\d+-chapter-/.test(f))continue;const p=/-chapter-(\d+(\.\d+)?)/.exec(f);p&&t.push({href:f,num:parseFloat(p[1])})}if(t.length===0)return{prev:null,next:null};const r=new Set,o=t.filter(c=>{const f=c.href.split("#")[0].split("?")[0];return r.has(f)?!1:(r.add(f),!0)});o.sort((c,f)=>c.num-f.num);const a=window.location.pathname.split("#")[0].split("?")[0],s=o.findIndex(c=>c.href.includes(a)||a.includes(c.href));let l=null,u=null;return s!==-1&&(s>0&&(l=o[s-1].href),s<o.length-1&&(u=o[s+1].href)),{prev:l,next:u}}function qw(){const{prev:e,next:t}=Uw();return e||t?{prev:e,next:t}:Vw()}function R1(e){if(!e.closest("#app-root")&&!e.closest(".rpage-body"))return!1;const t=e.src||e.getAttribute("src")||"";if(!t||t.includes("avatar")||t.includes("logo")||t.includes("icon")||t.includes("placeholder")||t.startsWith("data:image/svg+xml"))return!1;const r=e.naturalWidth||e.width||0;return!(r>0&&r<250)}function Zw(e){return!e||e.includes("placeholder")||e.startsWith("data:image/svg+xml")||e.includes("loading")?!1:e.startsWith("data:")||e.startsWith("blob:")||e.includes("comix.to")||e.includes("static.comix.to")||e.includes("wowpic")}var jw={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:$e.ENGLISH,category:De.MANGA,async run(){let e=0,t=null,r=null;for(;e<5e3&&(t||(t=Hw()),r||(r=Fw()),!(t&&r));)await new Promise(y=>setTimeout(y,100)),e+=100;!t&&cs&&(t=cs);let o=t?.items?.length||0;o===0&&(o=Gw()),o===0&&(o=Ww()),o===0&&(o=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter(R1).length||40),ke(`Identified expected page count: ${o}`);const a=await Nw(o,R1,Zw),s=document.getElementById("initial-data"),l=s?JSON.parse(s.textContent||"{}"):{};let u="",c="";if(l.queries)for(const y of Object.keys(l.queries)){const _=l.queries[y];if(_?.title&&_.url){u=_.title,c=_.url;break}}u||(u=document.querySelector("title")?.textContent?.trim()||""),c||(c=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let f=null,p=null;const v=/\/title\/([^/]+)/.exec(window.location.pathname),w=v?v[1]:"",g=/\/(\d+)-chapter-/.exec(window.location.pathname),b=g?parseInt(g[1],10):0;if(r&&b&&w){const y=A=>parseFloat(A.number??A.chapterNumber??"0"),_=[...r].sort((A,O)=>y(A)-y(O)),S=_.findIndex(A=>parseInt(A.id,10)===b);if(S!==-1){if(S>0){const A=_[S-1],O=A.number??A.chapterNumber;f=`/title/${w}/${A.id}-chapter-${O}`}if(S<_.length-1){const A=_[S+1],O=A.number??A.chapterNumber;p=`/title/${w}/${A.id}-chapter-${O}`}}}if(!f&&!p){const y=qw();f=y.prev,p=y.next}return{title:u,series:c,pages:a.length,prev:f,next:p,listImages:a}}},Kw={name:"DemonicScans",url:/https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,homepage:"https://demonicscans.org/",language:[$e.ENGLISH],category:De.MANGA,waitEle:'img.imgholder[src*="cdn.demoniclibs.com"]',async run(){const e=[...document.querySelectorAll('img.imgholder[src*="cdn.demoniclibs.com"]')].map(t=>t.getAttribute("data-src")||t.getAttribute("src")||"");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:e}}},Yw={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[$e.ENGLISH],category:De.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},Xw={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[$e.ENGLISH],category:De.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),r=t?.props?.pageProps?.chapter,o=xe.default.keys(r?.images).map(a=>`${e}/${r?.series_id}/${r?.token}/${r?.images?.[a]?.name}?${r?.unix_timestamp}`);return{title:`${r?.title} ${r?.chapter}`,series:`../${r?.series_id}`,pages:o.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:o}}},Jw={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[$e.ENGLISH],obs:"Any Site that uses FoOLSlide",category:De.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(l=>{const u=l.querySelector("a")?.getAttribute("href");return u?window.location.href.startsWith(u):!1}),r=[...document.querySelectorAll(".topbar_right .dropdown li")],o=[...document.querySelectorAll(".inner img:not(.open)")],a=o.length>1?o.length:r.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return o.length>1?{...s,listImages:o.map(l=>l.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((l,u)=>`${window.location.href.replace(/\/\d+$/,"")}/${u+1}`),img:"img.open"}}},Qw={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[$e.SPANISH],category:De.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:uo("span","Siguiente")?.getAttribute("href"),next:uo("span","Anterior")?.getAttribute("href"),listImages:e}}},e8=e=>new Promise(t=>setTimeout(t,e));async function t8(e){const t=document.querySelector(".reader-content"),r=new Set,o=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;r.size<e&&s<a;){t.scrollTop+=o,s++,await e8(300);const l=document.querySelectorAll(".reader-page img");for(const u of l){const c=u.getAttribute("src");c&&c.length>0&&r.add(c)}if(console.log(`Attempt ${s}: Collected ${r.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&r.size<e){console.warn(`Reached end of scrollable content. Stopping with ${r.size} sources.`);break}}return Array.from(r)}var r8={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:$e.ENGLISH,category:De.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],r=e.match(/reader\/([^/]+)/)?.[1],o=localStorage.getItem("rsch_did"),a={};o&&(a["X-Rsch-Did"]=o);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(v=>v.json()),l=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(v=>v.json())).data.content,u=l.find(v=>v.id===r),c=l.findIndex(v=>v.id===r),f=l[c+1],p=l[c-1];return{title:`${s.data.name} - ${u?.metadata?.title}`,series:`/series/${t}`,pages:u?.media?.pagesCount??0,prev:f?`/series/${t}/books/${f.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await t8(u?.media?.pagesCount??0)}}},n8={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[$e.SPANISH],category:De.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},o8={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[$e.SPANISH],category:De.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},i8={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[$e.ENGLISH],category:De.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("src")??"")}}},a8={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[$e.RAW],category:De.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:document.title==="MangaOnlineViewer Script"?t:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Yt(1970,1400,"#2D1657"),Yt(985,1400,"#152C55"),Yt(985,1400,"#7A1420"),Yt(1970,1400,"#806D15"),Yt(985,1400,"#0F5B30"),Yt(1970,1400,"#1a3e3c"),Yt(985,1400,"#480f5b"),Yt(985,1400,"#a9bf7a"),Yt(985,1400,"#147a56"),Yt(1970,1400,"#190343"),Yt(985,1400,"#d5b91e"),Yt(985,1400,"#836ecd"),Yt(985,1400,"#bf19b2"),Yt(985,1400,"#152055"),...Array(t).fill(0).map(i7)]}}},s8={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[$e.SPANISH],category:De.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("data-src")??"")}}},P1=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function $1(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>P1.test(r.value))?.value??e?.getAttribute("src")??""})}var l8={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[$e.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:De.MANGA,waitFunc:()=>{const e=$1();return e.length>0&&e.every(t=>t&&P1.test(t))},run(){const e=$1();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},c8={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:$e.ENGLISH,category:De.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(f=>f.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],o=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),l=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",u=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":l},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((f,p)=>p.number_float-f.number_float),c=f=>{const p=parseFloat(r||"0"),v=u.findIndex(y=>y.number_float===p);if(v===-1)return;const w=f==="next"?-1:1,g=v+w,b=String(o);for(let y=g;y>=0&&y<u.length;y+=w){const _=u[y].translations.find(S=>S.language===a&&String(S.volume)===b);if(_)return _.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:c("prev"),next:c("next"),listImages:s}}},d8={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[$e.ENGLISH],category:De.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},u8={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),r=t.chapter.data,o=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:r.length,prev:o?.item(0)?.getAttribute("href"),next:o?.item(1)?.getAttribute("href"),listImages:r.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},h8={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[$e.ENGLISH],category:De.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},r=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const l=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,u=await fetch(l,t).then(async c=>c.text());return(0,eval)(u),d}),o=await Promise.all(r);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:o.map((a,s)=>a[s===0?0:1])}}},f8={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[$e.ENGLISH],category:De.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},r=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:r,before(){r.some(o=>o==="")&&document.querySelector("#nform")?.submit()}}}},p8={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"#select-chapter",async run(){function e(s){const l=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return l!=null?decodeURIComponent(l[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},r={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},o=await fetch("https://api.mghcdn.com/graphql",r).then(async s=>s.json()),a=JSON.parse(o?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},m8={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[$e.ENGLISH],category:De.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},g8={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[$e.SPANISH],category:De.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("data-src")??r.getAttribute("src")??"")}}},v8={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},b8={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[$e.ENGLISH],category:De.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async r=>{const o=r.getAttribute("data-url")??"";return o&&r.classList.contains("shuffled")?(await imgReverser(o)).toDataURL():o});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},w8={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[$e.ENGLISH,$e.SPANISH],category:De.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:L1(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:L1(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},_8={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[$e.ENGLISH],category:De.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},y8={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(o=>o.getAttribute("src")??""),r=[...e??[]].map(o=>o.value).filter(o=>!o.endsWith("featured.html")).map(o=>new URL(o,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||r.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:r,img:"#image"}}}},k8={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[$e.SPANISH],category:De.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async o=>o.json()),r=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async o=>o.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(o=>o.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:r.chapterAnterior.replace(t._id,t.real_id),next:r.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},E8={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[$e.ENGLISH],category:De.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},S8={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[$e.ENGLISH],category:De.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(r=>r.getAttribute("value")??""),img:".manga_pic"}}},M8={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,homepage:"https://olympusxyz.com/",language:[$e.SPANISH],category:De.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},A8={name:"Qi Manga",url:/https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanga.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"img.r-page-img",run(){const e=[...document.querySelectorAll("img.r-page-img")],t=document.querySelector(".r-page-counter")?.textContent??"",r=Number.parseInt(t.split("/").pop()?.trim()??"",10)||e.length,o=document.querySelector("#ng-state")?.textContent??"",a=/"navigation":\{"prev":\{"slug":"([^"]+)"[\s\S]*?"next":\{"slug":"([^"]+)"/.exec(o),s=document.querySelector(".r-back")?.getAttribute("href"),l=u=>s?`${s}/${u}`:void 0;return{title:document.querySelector("h1.sr-only")?.textContent?.trim(),series:s,pages:r,prev:a?l(a[1]):void 0,next:a?l(a[2]):void 0,listImages:e.map(u=>u.getAttribute("src")??"")}}},x8={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:uo("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},I8={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[$e.ENGLISH],category:De.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},C8={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},O8={name:"ReiManga",url:/https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/,homepage:"https://reimanga.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:"img",run(){const e=document.getElementById("__NEXT_DATA__"),t=e?JSON.parse(e.textContent??"{}")?.props?.pageProps??null:null,r=t?.chapter?.images??t?.chapter?.img??null,o=Array.isArray(r)?r.map(g=>typeof g=="string"?g:g?.url??g?.src??""):[...document.querySelectorAll("img")].filter(g=>{const b=g.getAttribute("src")??"";return/\/(manga|chapter|uploads?|files?|images?)\//i.test(b)||/(cdn|media|img|static)/i.test(b)}).map(g=>g.getAttribute("src")??"").filter(g=>g.startsWith("http")),a=window.location.pathname.split("/").filter(Boolean),s=a.length>1?`/${a.slice(0,2).join("/")}`:void 0,l=t?.series?.slug!==void 0?`/manga/${t.series.slug}`:document.querySelector('a[href*="/manga/"]')?.getAttribute("href")??s,u=document.querySelector('select[aria-label="Jump to chapter"]'),c=u?[...u.options]:[],f=u?.selectedIndex??-1,p=f+1<c.length?c[f+1]?.value:void 0,v=f-1>=0?c[f-1]?.value:void 0,w=g=>g&&l?`${l}/${g}`:void 0;return{title:t?.title??(`${t?.chapters?.[0]?.series_name??t?.manga?.name??t?.series?.name??""} ${t?.chapters?.[0]?.name??t?.chapter?.name??t?.chapter?.number??""}`.trim()||document.title.replace(/ –.*| -.*| \|.*/,"").trim()),series:l,pages:o.length,prev:w(p),next:w(v),listImages:o}}},T8={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[$e.SPANISH],category:De.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],r=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:r||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((o,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(o=>o.getAttribute("data-src")??o.getAttribute("data-original")??o.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const o=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");o&&o.click()}}}}},L8={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[$e.ENGLISH],category:De.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(r=>/images/.test(r?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:uo("button","Prev","a")?.getAttribute("href"),next:uo("button","Next","a")?.getAttribute("href"),listImages:t}}},R8={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[$e.ENGLISH],category:De.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},P8={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[$e.ENGLISH],category:De.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},$8={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[$e.ENGLISH],category:De.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const e=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!e)throw new Error("Images HTMX endpoint not found");const t=`${e.replace(/&amp;/g,"&")}&reading_style=long_strip`,r=await fetch(t,{headers:{"HX-Request":"true"}}).then(p=>p.text()),o=new DOMParser,a=[...o.parseFromString(r,"text/html").querySelectorAll("img")].map(p=>p.getAttribute("src")||p.getAttribute("data-src")||"").filter(p=>p&&!p.includes("broken_image")).map(p=>p.startsWith("http")?p:new URL(p,window.location.origin).href),s=[...new Set(a)].sort((p,v)=>{const w=p.match(/-(\d+)\.[^.]+$/),g=v.match(/-(\d+)\.[^.]+$/);return(w?parseInt(w[1],10):0)-(g?parseInt(g[1],10):0)}),l=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),u=await fetch(l??"",{headers:{"HX-Request":"true"}}).then(p=>p.text()),c=o.parseFromString(u,"text/html").querySelector("#selected_chapter"),f=p=>p?p.startsWith("http")?p:new URL(p,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:f(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:s.length,prev:f(c?.nextElementSibling?.getAttribute("href")),next:f(c?.previousElementSibling?.getAttribute("href")),listImages:s,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},D8={name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:$e.ENGLISH,category:De.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,r=await fetch(t).then(async u=>u.json()),o=document.querySelector('a[href^="/title/"]'),a=`https://api.weebdex.org/manga/${r.relationships.manga.id}/aggregate?lang=${r.language}`,s=(await fetch(a).then(async u=>u.json())).chapters||[],l=s.findIndex(u=>u.chapter===r.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:o?.getAttribute("href"),pages:r.data.length,prev:s[l+1]?`/chapter/${xe.default.keys(s[l+1].entries)[0]}`:void 0,next:s[l-1]?`/chapter/${xe.default.keys(s[l-1].entries)[0]}`:void 0,listImages:r.data.map(u=>`${r.node}/data/${e}/${u.name}`)}}},z8={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[$e.ENGLISH],category:De.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},B8=[Pw,$w,Dw,zw,jw,Kw,Yw,Xw,Qw,r8,n8,o8,i8,a8,s8,d8,u8,h8,f8,p8,m8,c8,g8,v8,b8,_8,y8,k8,E8,S8,M8,A8,x8,I8,C8,O8,T8,R8,P8,$8,D8,L8,z8,w8,Jw,l8];Cw(B8).catch(ke)})();
