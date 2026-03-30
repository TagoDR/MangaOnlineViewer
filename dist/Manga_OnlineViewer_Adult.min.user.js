// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.03.30.build-0117
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
// @include       /https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+\/.+/
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
(function(){var Xf=Object.create,$i=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,Qf=Object.getOwnPropertyNames,e2=Object.getPrototypeOf,t2=Object.prototype.hasOwnProperty,gn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yc=(e,t)=>{let r={};for(var i in e)$i(r,i,{get:e[i],enumerable:!0});return t||$i(r,Symbol.toStringTag,{value:"Module"}),r},n2=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=Qf(t),s=0,c=a.length,d;s<c;s++)d=a[s],!t2.call(e,d)&&d!==r&&$i(e,d,{get:(u=>t[u]).bind(null,d),enumerable:!(i=Jf(t,d))||i.enumerable});return e},Di=(e,t,r)=>(r=e!=null?Xf(e2(e)):{},n2(t||!e||!e.__esModule?$i(r,"default",{value:e,enumerable:!0}):r,e)),r2=gn(((e,t)=>{(function(){var r,i="4.17.23",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",d="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",b=1,v=2,m=4,g=1,k=2,_=1,A=2,S=4,C=8,T=16,$=32,q=64,W=128,oe=256,H=512,pe=30,we="...",R=800,K=16,E=1,J=2,Ie=3,ie=1/0,Se=9007199254740991,ae=17976931348623157e292,Ee=NaN,F=4294967295,G=F-1,Ae=F>>>1,ge=[["ary",W],["bind",_],["bindKey",A],["curry",C],["curryRight",T],["flip",H],["partial",$],["partialRight",q],["rearg",oe]],de="[object Arguments]",Ye="[object Array]",kt="[object AsyncFunction]",De="[object Boolean]",We="[object Date]",Et="[object DOMException]",rt="[object Error]",Gt="[object Function]",Yt="[object GeneratorFunction]",w="[object Map]",Q="[object Number]",V="[object Null]",O="[object Object]",I="[object Promise]",z="[object Proxy]",re="[object RegExp]",ne="[object Set]",N="[object String]",ce="[object Symbol]",ve="[object Undefined]",ue="[object WeakMap]",Me="[object WeakSet]",je="[object ArrayBuffer]",He="[object DataView]",zt="[object Float32Array]",Yn="[object Float64Array]",Xt="[object Int8Array]",Xn="[object Int16Array]",at="[object Int32Array]",br="[object Uint8Array]",Ur="[object Uint8ClampedArray]",un="[object Uint16Array]",Eo="[object Uint32Array]",$l=/\b__p \+= '';/g,Dl=/\b(__p \+=) '' \+/g,zl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wi=/&(?:amp|lt|gt|quot|#39);/g,wr=/[&<>"']/g,Ao=RegExp(wi.source),H9=RegExp(wr.source),F9=/<%-([\s\S]+?)%>/g,G9=/<%([\s\S]+?)%>/g,wh=/<%=([\s\S]+?)%>/g,W9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U9=/^\w*$/,V9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bl=/[\\^$.*+?()[\]{}|]/g,Z9=RegExp(Bl.source),Nl=/^\s+/,j9=/\s/,q9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K9=/\{\n\/\* \[wrapped with (.+)\] \*/,Y9=/,? & /,X9=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,J9=/[()=,{}\[\]\/\s]/,Q9=/\\(\\)?/g,e7=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_h=/\w*$/,t7=/^[-+]0x[0-9a-f]+$/i,n7=/^0b[01]+$/i,r7=/^\[object .+?Constructor\]$/,o7=/^0o[0-7]+$/i,i7=/^(?:0|[1-9]\d*)$/,a7=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ta=/($^)/,s7=/['\n\r\u2028\u2029\\]/g,La="\\ud800-\\udfff",yh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",kh="\\u2700-\\u27bf",Eh="a-z\\xdf-\\xf6\\xf8-\\xff",l7="\\xac\\xb1\\xd7\\xf7",c7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",u7="\\u2000-\\u206f",d7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ah="A-Z\\xc0-\\xd6\\xd8-\\xde",Mh="\\ufe0e\\ufe0f",Sh=l7+c7+u7+d7,Hl="['’]",h7="["+La+"]",xh="["+Sh+"]",Ra="["+yh+"]",Ih="\\d+",f7="["+kh+"]",Oh="["+Eh+"]",Ch="[^"+La+Sh+Ih+kh+Eh+Ah+"]",Fl="\\ud83c[\\udffb-\\udfff]",p7="(?:"+Ra+"|"+Fl+")",Th="[^"+La+"]",Gl="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Mo="["+Ah+"]",Lh="\\u200d",Rh="(?:"+Oh+"|"+Ch+")",g7="(?:"+Mo+"|"+Ch+")",Ph="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",$h="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",Dh=p7+"?",zh="["+Mh+"]?",m7="(?:"+Lh+"(?:"+[Th,Gl,Wl].join("|")+")"+zh+Dh+")*",v7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",b7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bh=zh+Dh+m7,w7="(?:"+[f7,Gl,Wl].join("|")+")"+Bh,_7="(?:"+[Th+Ra+"?",Ra,Gl,Wl,h7].join("|")+")",y7=RegExp(Hl,"g"),k7=RegExp(Ra,"g"),Ul=RegExp(Fl+"(?="+Fl+")|"+_7+Bh,"g"),E7=RegExp([Mo+"?"+Oh+"+"+Ph+"(?="+[xh,Mo,"$"].join("|")+")",g7+"+"+$h+"(?="+[xh,Mo+Rh,"$"].join("|")+")",Mo+"?"+Rh+"+"+Ph,Mo+"+"+$h,b7,v7,Ih,w7].join("|"),"g"),A7=RegExp("["+Lh+La+yh+Mh+"]"),M7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],x7=-1,st={};st[zt]=st[Yn]=st[Xt]=st[Xn]=st[at]=st[br]=st[Ur]=st[un]=st[Eo]=!0,st[de]=st[Ye]=st[je]=st[De]=st[He]=st[We]=st[rt]=st[Gt]=st[w]=st[Q]=st[O]=st[re]=st[ne]=st[N]=st[ue]=!1;var ot={};ot[de]=ot[Ye]=ot[je]=ot[He]=ot[De]=ot[We]=ot[zt]=ot[Yn]=ot[Xt]=ot[Xn]=ot[at]=ot[w]=ot[Q]=ot[O]=ot[re]=ot[ne]=ot[N]=ot[ce]=ot[br]=ot[Ur]=ot[un]=ot[Eo]=!0,ot[rt]=ot[Gt]=ot[ue]=!1;var I7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},O7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},T7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},L7=parseFloat,R7=parseInt,Nh=typeof global=="object"&&global&&global.Object===Object&&global,P7=typeof self=="object"&&self&&self.Object===Object&&self,Tt=Nh||P7||Function("return this")(),Vl=typeof e=="object"&&e&&!e.nodeType&&e,Vr=Vl&&typeof t=="object"&&t&&!t.nodeType&&t,Hh=Vr&&Vr.exports===Vl,Zl=Hh&&Nh.process,kn=(function(){try{var D=Vr&&Vr.require&&Vr.require("util").types;return D||Zl&&Zl.binding&&Zl.binding("util")}catch{}})(),Fh=kn&&kn.isArrayBuffer,Gh=kn&&kn.isDate,Wh=kn&&kn.isMap,Uh=kn&&kn.isRegExp,Vh=kn&&kn.isSet,Zh=kn&&kn.isTypedArray;function dn(D,X,U){switch(U.length){case 0:return D.call(X);case 1:return D.call(X,U[0]);case 2:return D.call(X,U[0],U[1]);case 3:return D.call(X,U[0],U[1],U[2])}return D.apply(X,U)}function $7(D,X,U,be){for(var Re=-1,Ke=D==null?0:D.length;++Re<Ke;){var xt=D[Re];X(be,xt,U(xt),D)}return be}function En(D,X){for(var U=-1,be=D==null?0:D.length;++U<be&&X(D[U],U,D)!==!1;);return D}function D7(D,X){for(var U=D==null?0:D.length;U--&&X(D[U],U,D)!==!1;);return D}function jh(D,X){for(var U=-1,be=D==null?0:D.length;++U<be;)if(!X(D[U],U,D))return!1;return!0}function _r(D,X){for(var U=-1,be=D==null?0:D.length,Re=0,Ke=[];++U<be;){var xt=D[U];X(xt,U,D)&&(Ke[Re++]=xt)}return Ke}function Pa(D,X){return!!(D!=null&&D.length)&&So(D,X,0)>-1}function jl(D,X,U){for(var be=-1,Re=D==null?0:D.length;++be<Re;)if(U(X,D[be]))return!0;return!1}function ut(D,X){for(var U=-1,be=D==null?0:D.length,Re=Array(be);++U<be;)Re[U]=X(D[U],U,D);return Re}function yr(D,X){for(var U=-1,be=X.length,Re=D.length;++U<be;)D[Re+U]=X[U];return D}function ql(D,X,U,be){var Re=-1,Ke=D==null?0:D.length;for(be&&Ke&&(U=D[++Re]);++Re<Ke;)U=X(U,D[Re],Re,D);return U}function z7(D,X,U,be){var Re=D==null?0:D.length;for(be&&Re&&(U=D[--Re]);Re--;)U=X(U,D[Re],Re,D);return U}function Kl(D,X){for(var U=-1,be=D==null?0:D.length;++U<be;)if(X(D[U],U,D))return!0;return!1}var B7=Yl("length");function N7(D){return D.split("")}function H7(D){return D.match(X9)||[]}function qh(D,X,U){var be;return U(D,function(Re,Ke,xt){if(X(Re,Ke,xt))return be=Ke,!1}),be}function $a(D,X,U,be){for(var Re=D.length,Ke=U+(be?1:-1);be?Ke--:++Ke<Re;)if(X(D[Ke],Ke,D))return Ke;return-1}function So(D,X,U){return X===X?J7(D,X,U):$a(D,Kh,U)}function F7(D,X,U,be){for(var Re=U-1,Ke=D.length;++Re<Ke;)if(be(D[Re],X))return Re;return-1}function Kh(D){return D!==D}function Yh(D,X){var U=D==null?0:D.length;return U?Jl(D,X)/U:Ee}function Yl(D){return function(X){return X==null?r:X[D]}}function Xl(D){return function(X){return D==null?r:D[X]}}function Xh(D,X,U,be,Re){return Re(D,function(Ke,xt,et){U=be?(be=!1,Ke):X(U,Ke,xt,et)}),U}function G7(D,X){var U=D.length;for(D.sort(X);U--;)D[U]=D[U].value;return D}function Jl(D,X){for(var U,be=-1,Re=D.length;++be<Re;){var Ke=X(D[be]);Ke!==r&&(U=U===r?Ke:U+Ke)}return U}function Ql(D,X){for(var U=-1,be=Array(D);++U<D;)be[U]=X(U);return be}function W7(D,X){return ut(X,function(U){return[U,D[U]]})}function Jh(D){return D&&D.slice(0,n1(D)+1).replace(Nl,"")}function hn(D){return function(X){return D(X)}}function ec(D,X){return ut(X,function(U){return D[U]})}function _i(D,X){return D.has(X)}function Qh(D,X){for(var U=-1,be=D.length;++U<be&&So(X,D[U],0)>-1;);return U}function e1(D,X){for(var U=D.length;U--&&So(X,D[U],0)>-1;);return U}function U7(D,X){for(var U=D.length,be=0;U--;)D[U]===X&&++be;return be}var V7=Xl(I7),Z7=Xl(O7);function j7(D){return"\\"+T7[D]}function q7(D,X){return D==null?r:D[X]}function xo(D){return A7.test(D)}function K7(D){return M7.test(D)}function Y7(D){for(var X,U=[];!(X=D.next()).done;)U.push(X.value);return U}function tc(D){var X=-1,U=Array(D.size);return D.forEach(function(be,Re){U[++X]=[Re,be]}),U}function t1(D,X){return function(U){return D(X(U))}}function kr(D,X){for(var U=-1,be=D.length,Re=0,Ke=[];++U<be;){var xt=D[U];(xt===X||xt===f)&&(D[U]=f,Ke[Re++]=U)}return Ke}function Da(D){var X=-1,U=Array(D.size);return D.forEach(function(be){U[++X]=be}),U}function X7(D){var X=-1,U=Array(D.size);return D.forEach(function(be){U[++X]=[be,be]}),U}function J7(D,X,U){for(var be=U-1,Re=D.length;++be<Re;)if(D[be]===X)return be;return-1}function Q7(D,X,U){for(var be=U+1;be--;)if(D[be]===X)return be;return be}function Io(D){return xo(D)?t8(D):B7(D)}function Dn(D){return xo(D)?n8(D):N7(D)}function n1(D){for(var X=D.length;X--&&j9.test(D.charAt(X)););return X}var e8=Xl(C7);function t8(D){for(var X=Ul.lastIndex=0;Ul.test(D);)++X;return X}function n8(D){return D.match(Ul)||[]}function r8(D){return D.match(E7)||[]}var Er=(function D(X){X=X==null?Tt:Er.defaults(Tt.Object(),X,Er.pick(Tt,S7));var U=X.Array,be=X.Date,Re=X.Error,Ke=X.Function,xt=X.Math,et=X.Object,nc=X.RegExp,o8=X.String,An=X.TypeError,za=U.prototype,i8=Ke.prototype,Oo=et.prototype,Ba=X["__core-js_shared__"],Na=i8.toString,Xe=Oo.hasOwnProperty,a8=0,r1=(function(){var n=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ha=Oo.toString,s8=Na.call(et),l8=Tt._,c8=nc("^"+Na.call(Xe).replace(Bl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fa=Hh?X.Buffer:r,Ar=X.Symbol,Ga=X.Uint8Array,o1=Fa?Fa.allocUnsafe:r,Wa=t1(et.getPrototypeOf,et),i1=et.create,a1=Oo.propertyIsEnumerable,Ua=za.splice,s1=Ar?Ar.isConcatSpreadable:r,yi=Ar?Ar.iterator:r,Zr=Ar?Ar.toStringTag:r,Va=(function(){try{var n=Xr(et,"defineProperty");return n({},"",{}),n}catch{}})(),u8=X.clearTimeout!==Tt.clearTimeout&&X.clearTimeout,d8=be&&be.now!==Tt.Date.now&&be.now,h8=X.setTimeout!==Tt.setTimeout&&X.setTimeout,Za=xt.ceil,ja=xt.floor,rc=et.getOwnPropertySymbols,f8=Fa?Fa.isBuffer:r,l1=X.isFinite,p8=za.join,g8=t1(et.keys,et),It=xt.max,Bt=xt.min,m8=be.now,v8=X.parseInt,c1=xt.random,b8=za.reverse,oc=Xr(X,"DataView"),ki=Xr(X,"Map"),ic=Xr(X,"Promise"),Co=Xr(X,"Set"),Ei=Xr(X,"WeakMap"),Ai=Xr(et,"create"),qa=Ei&&new Ei,To={},w8=Jr(oc),_8=Jr(ki),y8=Jr(ic),k8=Jr(Co),E8=Jr(Ei),Ka=Ar?Ar.prototype:r,Mi=Ka?Ka.valueOf:r,u1=Ka?Ka.toString:r;function M(n){if(gt(n)&&!ze(n)&&!(n instanceof Ve)){if(n instanceof Mn)return n;if(Xe.call(n,"__wrapped__"))return hf(n)}return new Mn(n)}var Lo=(function(){function n(){}return function(o){if(!ft(o))return{};if(i1)return i1(o);n.prototype=o;var l=new n;return n.prototype=r,l}})();function Ya(){}function Mn(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}M.templateSettings={escape:F9,evaluate:G9,interpolate:wh,variable:"",imports:{_:M}},M.prototype=Ya.prototype,M.prototype.constructor=M,Mn.prototype=Lo(Ya.prototype),Mn.prototype.constructor=Mn;function Ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function A8(){var n=new Ve(this.__wrapped__);return n.__actions__=Jt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Jt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Jt(this.__views__),n}function M8(){if(this.__filtered__){var n=new Ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function S8(){var n=this.__wrapped__.value(),o=this.__dir__,l=ze(n),p=o<0,y=l?n.length:0,x=Bw(0,y,this.__views__),L=x.start,P=x.end,B=P-L,te=p?P:L-1,ee=this.__iteratees__,se=ee.length,me=0,_e=Bt(B,this.__takeCount__);if(!l||!p&&y==B&&_e==B)return P1(n,this.__actions__);var Oe=[];e:for(;B--&&me<_e;){te+=o;for(var Pe=-1,Te=n[te];++Pe<se;){var tt=ee[Pe],Ze=tt.iteratee,Vt=tt.type,Vn=Ze(Te);if(Vt==J)Te=Vn;else if(!Vn){if(Vt==E)continue e;break e}}Oe[me++]=Te}return Oe}Ve.prototype=Lo(Ya.prototype),Ve.prototype.constructor=Ve;function jr(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function x8(){this.__data__=Ai?Ai(null):{},this.size=0}function I8(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function O8(n){var o=this.__data__;if(Ai){var l=o[n];return l===u?r:l}return Xe.call(o,n)?o[n]:r}function C8(n){var o=this.__data__;return Ai?o[n]!==r:Xe.call(o,n)}function T8(n,o){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ai&&o===r?u:o,this}jr.prototype.clear=x8,jr.prototype.delete=I8,jr.prototype.get=O8,jr.prototype.has=C8,jr.prototype.set=T8;function Jn(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function L8(){this.__data__=[],this.size=0}function R8(n){var o=this.__data__,l=Xa(o,n);return l<0?!1:(l==o.length-1?o.pop():Ua.call(o,l,1),--this.size,!0)}function P8(n){var o=this.__data__,l=Xa(o,n);return l<0?r:o[l][1]}function $8(n){return Xa(this.__data__,n)>-1}function D8(n,o){var l=this.__data__,p=Xa(l,n);return p<0?(++this.size,l.push([n,o])):l[p][1]=o,this}Jn.prototype.clear=L8,Jn.prototype.delete=R8,Jn.prototype.get=P8,Jn.prototype.has=$8,Jn.prototype.set=D8;function Qn(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function z8(){this.size=0,this.__data__={hash:new jr,map:new(ki||Jn),string:new jr}}function B8(n){var o=cs(this,n).delete(n);return this.size-=o?1:0,o}function N8(n){return cs(this,n).get(n)}function H8(n){return cs(this,n).has(n)}function F8(n,o){var l=cs(this,n),p=l.size;return l.set(n,o),this.size+=l.size==p?0:1,this}Qn.prototype.clear=z8,Qn.prototype.delete=B8,Qn.prototype.get=N8,Qn.prototype.has=H8,Qn.prototype.set=F8;function qr(n){var o=-1,l=n==null?0:n.length;for(this.__data__=new Qn;++o<l;)this.add(n[o])}function G8(n){return this.__data__.set(n,u),this}function W8(n){return this.__data__.has(n)}qr.prototype.add=qr.prototype.push=G8,qr.prototype.has=W8;function zn(n){this.size=(this.__data__=new Jn(n)).size}function U8(){this.__data__=new Jn,this.size=0}function V8(n){var o=this.__data__,l=o.delete(n);return this.size=o.size,l}function Z8(n){return this.__data__.get(n)}function j8(n){return this.__data__.has(n)}function q8(n,o){var l=this.__data__;if(l instanceof Jn){var p=l.__data__;if(!ki||p.length<a-1)return p.push([n,o]),this.size=++l.size,this;l=this.__data__=new Qn(p)}return l.set(n,o),this.size=l.size,this}zn.prototype.clear=U8,zn.prototype.delete=V8,zn.prototype.get=Z8,zn.prototype.has=j8,zn.prototype.set=q8;function d1(n,o){var l=ze(n),p=!l&&Qr(n),y=!l&&!p&&Or(n),x=!l&&!p&&!y&&Do(n),L=l||p||y||x,P=L?Ql(n.length,o8):[],B=P.length;for(var te in n)(o||Xe.call(n,te))&&!(L&&(te=="length"||y&&(te=="offset"||te=="parent")||x&&(te=="buffer"||te=="byteLength"||te=="byteOffset")||rr(te,B)))&&P.push(te);return P}function h1(n){var o=n.length;return o?n[mc(0,o-1)]:r}function K8(n,o){return us(Jt(n),Kr(o,0,n.length))}function Y8(n){return us(Jt(n))}function ac(n,o,l){(l!==r&&!Bn(n[o],l)||l===r&&!(o in n))&&er(n,o,l)}function Si(n,o,l){var p=n[o];(!(Xe.call(n,o)&&Bn(p,l))||l===r&&!(o in n))&&er(n,o,l)}function Xa(n,o){for(var l=n.length;l--;)if(Bn(n[l][0],o))return l;return-1}function X8(n,o,l,p){return Mr(n,function(y,x,L){o(p,y,l(y),L)}),p}function f1(n,o){return n&&Wn(o,Lt(o),n)}function J8(n,o){return n&&Wn(o,en(o),n)}function er(n,o,l){o=="__proto__"&&Va?Va(n,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[o]=l}function sc(n,o){for(var l=-1,p=o.length,y=U(p),x=n==null;++l<p;)y[l]=x?r:Fc(n,o[l]);return y}function Kr(n,o,l){return n===n&&(l!==r&&(n=n<=l?n:l),o!==r&&(n=n>=o?n:o)),n}function Sn(n,o,l,p,y,x){var L,P=o&b,B=o&v,te=o&m;if(l&&(L=y?l(n,p,y,x):l(n)),L!==r)return L;if(!ft(n))return n;var ee=ze(n);if(ee){if(L=Hw(n),!P)return Jt(n,L)}else{var se=Nt(n),me=se==Gt||se==Yt;if(Or(n))return z1(n,P);if(se==O||se==de||me&&!y){if(L=B||me?{}:nf(n),!P)return B?Ow(n,J8(L,n)):Iw(n,f1(L,n))}else{if(!ot[se])return y?n:{};L=Fw(n,se,P)}}x||(x=new zn);var _e=x.get(n);if(_e)return _e;x.set(n,L),Lf(n)?n.forEach(function(Pe){L.add(Sn(Pe,o,l,Pe,n,x))}):Cf(n)&&n.forEach(function(Pe,Te){L.set(Te,Sn(Pe,o,l,Te,n,x))});var Oe=ee?r:(te?B?xc:Sc:B?en:Lt)(n);return En(Oe||n,function(Pe,Te){Oe&&(Te=Pe,Pe=n[Te]),Si(L,Te,Sn(Pe,o,l,Te,n,x))}),L}function Q8(n){var o=Lt(n);return function(l){return p1(l,n,o)}}function p1(n,o,l){var p=l.length;if(n==null)return!p;for(n=et(n);p--;){var y=l[p],x=o[y],L=n[y];if(L===r&&!(y in n)||!x(L))return!1}return!0}function g1(n,o,l){if(typeof n!="function")throw new An(c);return Ri(function(){n.apply(r,l)},o)}function xi(n,o,l,p){var y=-1,x=Pa,L=!0,P=n.length,B=[],te=o.length;if(!P)return B;l&&(o=ut(o,hn(l))),p?(x=jl,L=!1):o.length>=a&&(x=_i,L=!1,o=new qr(o));e:for(;++y<P;){var ee=n[y],se=l==null?ee:l(ee);if(ee=p||ee!==0?ee:0,L&&se===se){for(var me=te;me--;)if(o[me]===se)continue e;B.push(ee)}else x(o,se,p)||B.push(ee)}return B}var Mr=G1(Gn),m1=G1(cc,!0);function ew(n,o){var l=!0;return Mr(n,function(p,y,x){return l=!!o(p,y,x),l}),l}function Ja(n,o,l){for(var p=-1,y=n.length;++p<y;){var x=n[p],L=o(x);if(L!=null&&(P===r?L===L&&!pn(L):l(L,P)))var P=L,B=x}return B}function tw(n,o,l,p){var y=n.length;for(l=Fe(l),l<0&&(l=-l>y?0:y+l),p=p===r||p>y?y:Fe(p),p<0&&(p+=y),p=l>p?0:Pf(p);l<p;)n[l++]=o;return n}function v1(n,o){var l=[];return Mr(n,function(p,y,x){o(p,y,x)&&l.push(p)}),l}function $t(n,o,l,p,y){var x=-1,L=n.length;for(l||(l=Ww),y||(y=[]);++x<L;){var P=n[x];o>0&&l(P)?o>1?$t(P,o-1,l,p,y):yr(y,P):p||(y[y.length]=P)}return y}var lc=W1(),b1=W1(!0);function Gn(n,o){return n&&lc(n,o,Lt)}function cc(n,o){return n&&b1(n,o,Lt)}function Qa(n,o){return _r(o,function(l){return or(n[l])})}function Yr(n,o){o=xr(o,n);for(var l=0,p=o.length;n!=null&&l<p;)n=n[Un(o[l++])];return l&&l==p?n:r}function w1(n,o,l){var p=o(n);return ze(n)?p:yr(p,l(n))}function Wt(n){return n==null?n===r?ve:V:Zr&&Zr in et(n)?zw(n):Yw(n)}function uc(n,o){return n>o}function nw(n,o){return n!=null&&Xe.call(n,o)}function rw(n,o){return n!=null&&o in et(n)}function ow(n,o,l){return n>=Bt(o,l)&&n<It(o,l)}function dc(n,o,l){for(var p=l?jl:Pa,y=n[0].length,x=n.length,L=x,P=U(x),B=1/0,te=[];L--;){var ee=n[L];L&&o&&(ee=ut(ee,hn(o))),B=Bt(ee.length,B),P[L]=!l&&(o||y>=120&&ee.length>=120)?new qr(L&&ee):r}ee=n[0];var se=-1,me=P[0];e:for(;++se<y&&te.length<B;){var _e=ee[se],Oe=o?o(_e):_e;if(_e=l||_e!==0?_e:0,!(me?_i(me,Oe):p(te,Oe,l))){for(L=x;--L;){var Pe=P[L];if(!(Pe?_i(Pe,Oe):p(n[L],Oe,l)))continue e}me&&me.push(Oe),te.push(_e)}}return te}function iw(n,o,l,p){return Gn(n,function(y,x,L){o(p,l(y),x,L)}),p}function Ii(n,o,l){o=xr(o,n),n=sf(n,o);var p=n==null?n:n[Un(In(o))];return p==null?r:dn(p,n,l)}function _1(n){return gt(n)&&Wt(n)==de}function aw(n){return gt(n)&&Wt(n)==je}function sw(n){return gt(n)&&Wt(n)==We}function Oi(n,o,l,p,y){return n===o?!0:n==null||o==null||!gt(n)&&!gt(o)?n!==n&&o!==o:lw(n,o,l,p,Oi,y)}function lw(n,o,l,p,y,x){var L=ze(n),P=ze(o),B=L?Ye:Nt(n),te=P?Ye:Nt(o);B=B==de?O:B,te=te==de?O:te;var ee=B==O,se=te==O,me=B==te;if(me&&Or(n)){if(!Or(o))return!1;L=!0,ee=!1}if(me&&!ee)return x||(x=new zn),L||Do(n)?Q1(n,o,l,p,y,x):$w(n,o,B,l,p,y,x);if(!(l&g)){var _e=ee&&Xe.call(n,"__wrapped__"),Oe=se&&Xe.call(o,"__wrapped__");if(_e||Oe){var Pe=_e?n.value():n,Te=Oe?o.value():o;return x||(x=new zn),y(Pe,Te,l,p,x)}}return me?(x||(x=new zn),Dw(n,o,l,p,y,x)):!1}function cw(n){return gt(n)&&Nt(n)==w}function hc(n,o,l,p){var y=l.length,x=y,L=!p;if(n==null)return!x;for(n=et(n);y--;){var P=l[y];if(L&&P[2]?P[1]!==n[P[0]]:!(P[0]in n))return!1}for(;++y<x;){P=l[y];var B=P[0],te=n[B],ee=P[1];if(L&&P[2]){if(te===r&&!(B in n))return!1}else{var se=new zn;if(p)var me=p(te,ee,B,n,o,se);if(!(me===r?Oi(ee,te,g|k,p,se):me))return!1}}return!0}function y1(n){return!ft(n)||Vw(n)?!1:(or(n)?c8:r7).test(Jr(n))}function uw(n){return gt(n)&&Wt(n)==re}function dw(n){return gt(n)&&Nt(n)==ne}function hw(n){return gt(n)&&ms(n.length)&&!!st[Wt(n)]}function k1(n){return typeof n=="function"?n:n==null?tn:typeof n=="object"?ze(n)?M1(n[0],n[1]):A1(n):Vf(n)}function fc(n){if(!Li(n))return g8(n);var o=[];for(var l in et(n))Xe.call(n,l)&&l!="constructor"&&o.push(l);return o}function fw(n){if(!ft(n))return Kw(n);var o=Li(n),l=[];for(var p in n)p=="constructor"&&(o||!Xe.call(n,p))||l.push(p);return l}function pc(n,o){return n<o}function E1(n,o){var l=-1,p=Qt(n)?U(n.length):[];return Mr(n,function(y,x,L){p[++l]=o(y,x,L)}),p}function A1(n){var o=Oc(n);return o.length==1&&o[0][2]?of(o[0][0],o[0][1]):function(l){return l===n||hc(l,n,o)}}function M1(n,o){return Tc(n)&&rf(o)?of(Un(n),o):function(l){var p=Fc(l,n);return p===r&&p===o?Gc(l,n):Oi(o,p,g|k)}}function es(n,o,l,p,y){n!==o&&lc(o,function(x,L){if(y||(y=new zn),ft(x))pw(n,o,L,l,es,p,y);else{var P=p?p(Rc(n,L),x,L+"",n,o,y):r;P===r&&(P=x),ac(n,L,P)}},en)}function pw(n,o,l,p,y,x,L){var P=Rc(n,l),B=Rc(o,l),te=L.get(B);if(te){ac(n,l,te);return}var ee=x?x(P,B,l+"",n,o,L):r,se=ee===r;if(se){var me=ze(B),_e=!me&&Or(B),Oe=!me&&!_e&&Do(B);ee=B,me||_e||Oe?ze(P)?ee=P:mt(P)?ee=Jt(P):_e?(se=!1,ee=z1(B,!0)):Oe?(se=!1,ee=B1(B,!0)):ee=[]:Pi(B)||Qr(B)?(ee=P,Qr(P)?ee=$f(P):(!ft(P)||or(P))&&(ee=nf(B))):se=!1}se&&(L.set(B,ee),y(ee,B,p,x,L),L.delete(B)),ac(n,l,ee)}function S1(n,o){var l=n.length;if(l)return o+=o<0?l:0,rr(o,l)?n[o]:r}function x1(n,o,l){o.length?o=ut(o,function(y){return ze(y)?function(x){return Yr(x,y.length===1?y[0]:y)}:y}):o=[tn];var p=-1;return o=ut(o,hn(Ce())),G7(E1(n,function(y,x,L){var P=ut(o,function(B){return B(y)});return{criteria:P,index:++p,value:y}}),function(y,x){return xw(y,x,l)})}function gw(n,o){return I1(n,o,function(l,p){return Gc(n,p)})}function I1(n,o,l){for(var p=-1,y=o.length,x={};++p<y;){var L=o[p],P=Yr(n,L);l(P,L)&&Ci(x,xr(L,n),P)}return x}function mw(n){return function(o){return Yr(o,n)}}function gc(n,o,l,p){var y=p?F7:So,x=-1,L=o.length,P=n;for(n===o&&(o=Jt(o)),l&&(P=ut(n,hn(l)));++x<L;)for(var B=0,te=o[x],ee=l?l(te):te;(B=y(P,ee,B,p))>-1;)P!==n&&Ua.call(P,B,1),Ua.call(n,B,1);return n}function O1(n,o){for(var l=n?o.length:0,p=l-1;l--;){var y=o[l];if(l==p||y!==x){var x=y;rr(y)?Ua.call(n,y,1):wc(n,y)}}return n}function mc(n,o){return n+ja(c1()*(o-n+1))}function vw(n,o,l,p){for(var y=-1,x=It(Za((o-n)/(l||1)),0),L=U(x);x--;)L[p?x:++y]=n,n+=l;return L}function vc(n,o){var l="";if(!n||o<1||o>Se)return l;do o%2&&(l+=n),o=ja(o/2),o&&(n+=n);while(o);return l}function Ue(n,o){return Pc(af(n,o,tn),n+"")}function bw(n){return h1(zo(n))}function ww(n,o){var l=zo(n);return us(l,Kr(o,0,l.length))}function Ci(n,o,l,p){if(!ft(n))return n;o=xr(o,n);for(var y=-1,x=o.length,L=x-1,P=n;P!=null&&++y<x;){var B=Un(o[y]),te=l;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(y!=L){var ee=P[B];te=p?p(ee,B,P):r,te===r&&(te=ft(ee)?ee:rr(o[y+1])?[]:{})}Si(P,B,te),P=P[B]}return n}var C1=qa?function(n,o){return qa.set(n,o),n}:tn,_w=Va?function(n,o){return Va(n,"toString",{configurable:!0,enumerable:!1,value:Uc(o),writable:!0})}:tn;function yw(n){return us(zo(n))}function xn(n,o,l){var p=-1,y=n.length;o<0&&(o=-o>y?0:y+o),l=l>y?y:l,l<0&&(l+=y),y=o>l?0:l-o>>>0,o>>>=0;for(var x=U(y);++p<y;)x[p]=n[p+o];return x}function kw(n,o){var l;return Mr(n,function(p,y,x){return l=o(p,y,x),!l}),!!l}function ts(n,o,l){var p=0,y=n==null?p:n.length;if(typeof o=="number"&&o===o&&y<=Ae){for(;p<y;){var x=p+y>>>1,L=n[x];L!==null&&!pn(L)&&(l?L<=o:L<o)?p=x+1:y=x}return y}return bc(n,o,tn,l)}function bc(n,o,l,p){var y=0,x=n==null?0:n.length;if(x===0)return 0;o=l(o);for(var L=o!==o,P=o===null,B=pn(o),te=o===r;y<x;){var ee=ja((y+x)/2),se=l(n[ee]),me=se!==r,_e=se===null,Oe=se===se,Pe=pn(se);if(L)var Te=p||Oe;else te?Te=Oe&&(p||me):P?Te=Oe&&me&&(p||!_e):B?Te=Oe&&me&&!_e&&(p||!Pe):_e||Pe?Te=!1:Te=p?se<=o:se<o;Te?y=ee+1:x=ee}return Bt(x,G)}function T1(n,o){for(var l=-1,p=n.length,y=0,x=[];++l<p;){var L=n[l],P=o?o(L):L;if(!l||!Bn(P,B)){var B=P;x[y++]=L===0?0:L}}return x}function L1(n){return typeof n=="number"?n:pn(n)?Ee:+n}function fn(n){if(typeof n=="string")return n;if(ze(n))return ut(n,fn)+"";if(pn(n))return u1?u1.call(n):"";var o=n+"";return o=="0"&&1/n==-ie?"-0":o}function Sr(n,o,l){var p=-1,y=Pa,x=n.length,L=!0,P=[],B=P;if(l)L=!1,y=jl;else if(x>=a){var te=o?null:Rw(n);if(te)return Da(te);L=!1,y=_i,B=new qr}else B=o?[]:P;e:for(;++p<x;){var ee=n[p],se=o?o(ee):ee;if(ee=l||ee!==0?ee:0,L&&se===se){for(var me=B.length;me--;)if(B[me]===se)continue e;o&&B.push(se),P.push(ee)}else y(B,se,l)||(B!==P&&B.push(se),P.push(ee))}return P}function wc(n,o){o=xr(o,n);var l=-1,p=o.length;if(!p)return!0;for(var y=n==null||typeof n!="object"&&typeof n!="function";++l<p;){var x=o[l];if(typeof x=="string"){if(x==="__proto__"&&!Xe.call(n,"__proto__"))return!1;if(x==="constructor"&&l+1<p&&typeof o[l+1]=="string"&&o[l+1]==="prototype"){if(y&&l===0)continue;return!1}}}var L=sf(n,o);return L==null||delete L[Un(In(o))]}function R1(n,o,l,p){return Ci(n,o,l(Yr(n,o)),p)}function ns(n,o,l,p){for(var y=n.length,x=p?y:-1;(p?x--:++x<y)&&o(n[x],x,n););return l?xn(n,p?0:x,p?x+1:y):xn(n,p?x+1:0,p?y:x)}function P1(n,o){var l=n;return l instanceof Ve&&(l=l.value()),ql(o,function(p,y){return y.func.apply(y.thisArg,yr([p],y.args))},l)}function _c(n,o,l){var p=n.length;if(p<2)return p?Sr(n[0]):[];for(var y=-1,x=U(p);++y<p;)for(var L=n[y],P=-1;++P<p;)P!=y&&(x[y]=xi(x[y]||L,n[P],o,l));return Sr($t(x,1),o,l)}function $1(n,o,l){for(var p=-1,y=n.length,x=o.length,L={};++p<y;){var P=p<x?o[p]:r;l(L,n[p],P)}return L}function yc(n){return mt(n)?n:[]}function kc(n){return typeof n=="function"?n:tn}function xr(n,o){return ze(n)?n:Tc(n,o)?[n]:df(Je(n))}var Ew=Ue;function Ir(n,o,l){var p=n.length;return l=l===r?p:l,!o&&l>=p?n:xn(n,o,l)}var D1=u8||function(n){return Tt.clearTimeout(n)};function z1(n,o){if(o)return n.slice();var l=n.length,p=o1?o1(l):new n.constructor(l);return n.copy(p),p}function Ec(n){var o=new n.constructor(n.byteLength);return new Ga(o).set(new Ga(n)),o}function Aw(n,o){var l=o?Ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Mw(n){var o=new n.constructor(n.source,_h.exec(n));return o.lastIndex=n.lastIndex,o}function Sw(n){return Mi?et(Mi.call(n)):{}}function B1(n,o){var l=o?Ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function N1(n,o){if(n!==o){var l=n!==r,p=n===null,y=n===n,x=pn(n),L=o!==r,P=o===null,B=o===o,te=pn(o);if(!P&&!te&&!x&&n>o||x&&L&&B&&!P&&!te||p&&L&&B||!l&&B||!y)return 1;if(!p&&!x&&!te&&n<o||te&&l&&y&&!p&&!x||P&&l&&y||!L&&y||!B)return-1}return 0}function xw(n,o,l){for(var p=-1,y=n.criteria,x=o.criteria,L=y.length,P=l.length;++p<L;){var B=N1(y[p],x[p]);if(B)return p>=P?B:B*(l[p]=="desc"?-1:1)}return n.index-o.index}function H1(n,o,l,p){for(var y=-1,x=n.length,L=l.length,P=-1,B=o.length,te=It(x-L,0),ee=U(B+te),se=!p;++P<B;)ee[P]=o[P];for(;++y<L;)(se||y<x)&&(ee[l[y]]=n[y]);for(;te--;)ee[P++]=n[y++];return ee}function F1(n,o,l,p){for(var y=-1,x=n.length,L=-1,P=l.length,B=-1,te=o.length,ee=It(x-P,0),se=U(ee+te),me=!p;++y<ee;)se[y]=n[y];for(var _e=y;++B<te;)se[_e+B]=o[B];for(;++L<P;)(me||y<x)&&(se[_e+l[L]]=n[y++]);return se}function Jt(n,o){var l=-1,p=n.length;for(o||(o=U(p));++l<p;)o[l]=n[l];return o}function Wn(n,o,l,p){var y=!l;l||(l={});for(var x=-1,L=o.length;++x<L;){var P=o[x],B=p?p(l[P],n[P],P,l,n):r;B===r&&(B=n[P]),y?er(l,P,B):Si(l,P,B)}return l}function Iw(n,o){return Wn(n,Cc(n),o)}function Ow(n,o){return Wn(n,ef(n),o)}function rs(n,o){return function(l,p){var y=ze(l)?$7:X8,x=o?o():{};return y(l,n,Ce(p,2),x)}}function Ro(n){return Ue(function(o,l){var p=-1,y=l.length,x=y>1?l[y-1]:r,L=y>2?l[2]:r;for(x=n.length>3&&typeof x=="function"?(y--,x):r,L&&Ut(l[0],l[1],L)&&(x=y<3?r:x,y=1),o=et(o);++p<y;){var P=l[p];P&&n(o,P,p,x)}return o})}function G1(n,o){return function(l,p){if(l==null)return l;if(!Qt(l))return n(l,p);for(var y=l.length,x=o?y:-1,L=et(l);(o?x--:++x<y)&&p(L[x],x,L)!==!1;);return l}}function W1(n){return function(o,l,p){for(var y=-1,x=et(o),L=p(o),P=L.length;P--;){var B=L[n?P:++y];if(l(x[B],B,x)===!1)break}return o}}function Cw(n,o,l){var p=o&_,y=Ti(n);function x(){return(this&&this!==Tt&&this instanceof x?y:n).apply(p?l:this,arguments)}return x}function U1(n){return function(o){o=Je(o);var l=xo(o)?Dn(o):r,p=l?l[0]:o.charAt(0),y=l?Ir(l,1).join(""):o.slice(1);return p[n]()+y}}function Po(n){return function(o){return ql(Wf(Gf(o).replace(y7,"")),n,"")}}function Ti(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=Lo(n.prototype),p=n.apply(l,o);return ft(p)?p:l}}function Tw(n,o,l){var p=Ti(n);function y(){for(var x=arguments.length,L=U(x),P=x,B=$o(y);P--;)L[P]=arguments[P];var te=x<3&&L[0]!==B&&L[x-1]!==B?[]:kr(L,B);return x-=te.length,x<l?K1(n,o,os,y.placeholder,r,L,te,r,r,l-x):dn(this&&this!==Tt&&this instanceof y?p:n,this,L)}return y}function V1(n){return function(o,l,p){var y=et(o);if(!Qt(o)){var x=Ce(l,3);o=Lt(o),l=function(P){return x(y[P],P,y)}}var L=n(o,l,p);return L>-1?y[x?o[L]:L]:r}}function Z1(n){return nr(function(o){var l=o.length,p=l,y=Mn.prototype.thru;for(n&&o.reverse();p--;){var x=o[p];if(typeof x!="function")throw new An(c);if(y&&!L&&ls(x)=="wrapper")var L=new Mn([],!0)}for(p=L?p:l;++p<l;){x=o[p];var P=ls(x),B=P=="wrapper"?Ic(x):r;B&&Lc(B[0])&&B[1]==(W|C|$|oe)&&!B[4].length&&B[9]==1?L=L[ls(B[0])].apply(L,B[3]):L=x.length==1&&Lc(x)?L[P]():L.thru(x)}return function(){var te=arguments,ee=te[0];if(L&&te.length==1&&ze(ee))return L.plant(ee).value();for(var se=0,me=l?o[se].apply(this,te):ee;++se<l;)me=o[se].call(this,me);return me}})}function os(n,o,l,p,y,x,L,P,B,te){var ee=o&W,se=o&_,me=o&A,_e=o&(C|T),Oe=o&H,Pe=me?r:Ti(n);function Te(){for(var tt=arguments.length,Ze=U(tt),Vt=tt;Vt--;)Ze[Vt]=arguments[Vt];if(_e)var Vn=$o(Te),Cr=U7(Ze,Vn);if(p&&(Ze=H1(Ze,p,y,_e)),x&&(Ze=F1(Ze,x,L,_e)),tt-=Cr,_e&&tt<te){var vt=kr(Ze,Vn);return K1(n,o,os,Te.placeholder,l,Ze,vt,P,B,te-tt)}var Nn=se?l:this,ar=me?Nn[n]:n;return tt=Ze.length,P?Ze=Xw(Ze,P):Oe&&tt>1&&Ze.reverse(),ee&&B<tt&&(Ze.length=B),this&&this!==Tt&&this instanceof Te&&(ar=Pe||Ti(ar)),ar.apply(Nn,Ze)}return Te}function j1(n,o){return function(l,p){return iw(l,n,o(p),{})}}function is(n,o){return function(l,p){var y;if(l===r&&p===r)return o;if(l!==r&&(y=l),p!==r){if(y===r)return p;typeof l=="string"||typeof p=="string"?(l=fn(l),p=fn(p)):(l=L1(l),p=L1(p)),y=n(l,p)}return y}}function Ac(n){return nr(function(o){return o=ut(o,hn(Ce())),Ue(function(l){var p=this;return n(o,function(y){return dn(y,p,l)})})})}function as(n,o){o=o===r?" ":fn(o);var l=o.length;if(l<2)return l?vc(o,n):o;var p=vc(o,Za(n/Io(o)));return xo(o)?Ir(Dn(p),0,n).join(""):p.slice(0,n)}function Lw(n,o,l,p){var y=o&_,x=Ti(n);function L(){for(var P=-1,B=arguments.length,te=-1,ee=p.length,se=U(ee+B),me=this&&this!==Tt&&this instanceof L?x:n;++te<ee;)se[te]=p[te];for(;B--;)se[te++]=arguments[++P];return dn(me,y?l:this,se)}return L}function q1(n){return function(o,l,p){return p&&typeof p!="number"&&Ut(o,l,p)&&(l=p=r),o=ir(o),l===r?(l=o,o=0):l=ir(l),p=p===r?o<l?1:-1:ir(p),vw(o,l,p,n)}}function ss(n){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=On(o),l=On(l)),n(o,l)}}function K1(n,o,l,p,y,x,L,P,B,te){var ee=o&C,se=ee?L:r,me=ee?r:L,_e=ee?x:r,Oe=ee?r:x;o|=ee?$:q,o&=~(ee?q:$),o&S||(o&=~(_|A));var Pe=[n,o,y,_e,se,Oe,me,P,B,te],Te=l.apply(r,Pe);return Lc(n)&&lf(Te,Pe),Te.placeholder=p,cf(Te,n,o)}function Mc(n){var o=xt[n];return function(l,p){if(l=On(l),p=p==null?0:Bt(Fe(p),292),p&&l1(l)){var y=(Je(l)+"e").split("e");return y=(Je(o(y[0]+"e"+(+y[1]+p)))+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return o(l)}}var Rw=Co&&1/Da(new Co([,-0]))[1]==ie?function(n){return new Co(n)}:jc;function Y1(n){return function(o){var l=Nt(o);return l==w?tc(o):l==ne?X7(o):W7(o,n(o))}}function tr(n,o,l,p,y,x,L,P){var B=o&A;if(!B&&typeof n!="function")throw new An(c);var te=p?p.length:0;if(te||(o&=~($|q),p=y=r),L=L===r?L:It(Fe(L),0),P=P===r?P:Fe(P),te-=y?y.length:0,o&q){var ee=p,se=y;p=y=r}var me=B?r:Ic(n),_e=[n,o,l,p,y,ee,se,x,L,P];if(me&&qw(_e,me),n=_e[0],o=_e[1],l=_e[2],p=_e[3],y=_e[4],P=_e[9]=_e[9]===r?B?0:n.length:It(_e[9]-te,0),!P&&o&(C|T)&&(o&=~(C|T)),!o||o==_)var Oe=Cw(n,o,l);else o==C||o==T?Oe=Tw(n,o,P):(o==$||o==(_|$))&&!y.length?Oe=Lw(n,o,l,p):Oe=os.apply(r,_e);return cf((me?C1:lf)(Oe,_e),n,o)}function X1(n,o,l,p){return n===r||Bn(n,Oo[l])&&!Xe.call(p,l)?o:n}function J1(n,o,l,p,y,x){return ft(n)&&ft(o)&&(x.set(o,n),es(n,o,r,J1,x),x.delete(o)),n}function Pw(n){return Pi(n)?r:n}function Q1(n,o,l,p,y,x){var L=l&g,P=n.length,B=o.length;if(P!=B&&!(L&&B>P))return!1;var te=x.get(n),ee=x.get(o);if(te&&ee)return te==o&&ee==n;var se=-1,me=!0,_e=l&k?new qr:r;for(x.set(n,o),x.set(o,n);++se<P;){var Oe=n[se],Pe=o[se];if(p)var Te=L?p(Pe,Oe,se,o,n,x):p(Oe,Pe,se,n,o,x);if(Te!==r){if(Te)continue;me=!1;break}if(_e){if(!Kl(o,function(tt,Ze){if(!_i(_e,Ze)&&(Oe===tt||y(Oe,tt,l,p,x)))return _e.push(Ze)})){me=!1;break}}else if(!(Oe===Pe||y(Oe,Pe,l,p,x))){me=!1;break}}return x.delete(n),x.delete(o),me}function $w(n,o,l,p,y,x,L){switch(l){case He:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case je:return!(n.byteLength!=o.byteLength||!x(new Ga(n),new Ga(o)));case De:case We:case Q:return Bn(+n,+o);case rt:return n.name==o.name&&n.message==o.message;case re:case N:return n==o+"";case w:var P=tc;case ne:var B=p&g;if(P||(P=Da),n.size!=o.size&&!B)return!1;var te=L.get(n);if(te)return te==o;p|=k,L.set(n,o);var ee=Q1(P(n),P(o),p,y,x,L);return L.delete(n),ee;case ce:if(Mi)return Mi.call(n)==Mi.call(o)}return!1}function Dw(n,o,l,p,y,x){var L=l&g,P=Sc(n),B=P.length;if(B!=Sc(o).length&&!L)return!1;for(var te=B;te--;){var ee=P[te];if(!(L?ee in o:Xe.call(o,ee)))return!1}var se=x.get(n),me=x.get(o);if(se&&me)return se==o&&me==n;var _e=!0;x.set(n,o),x.set(o,n);for(var Oe=L;++te<B;){ee=P[te];var Pe=n[ee],Te=o[ee];if(p)var tt=L?p(Te,Pe,ee,o,n,x):p(Pe,Te,ee,n,o,x);if(!(tt===r?Pe===Te||y(Pe,Te,l,p,x):tt)){_e=!1;break}Oe||(Oe=ee=="constructor")}if(_e&&!Oe){var Ze=n.constructor,Vt=o.constructor;Ze!=Vt&&"constructor"in n&&"constructor"in o&&!(typeof Ze=="function"&&Ze instanceof Ze&&typeof Vt=="function"&&Vt instanceof Vt)&&(_e=!1)}return x.delete(n),x.delete(o),_e}function nr(n){return Pc(af(n,r,gf),n+"")}function Sc(n){return w1(n,Lt,Cc)}function xc(n){return w1(n,en,ef)}var Ic=qa?function(n){return qa.get(n)}:jc;function ls(n){for(var o=n.name+"",l=To[o],p=Xe.call(To,o)?l.length:0;p--;){var y=l[p],x=y.func;if(x==null||x==n)return y.name}return o}function $o(n){return(Xe.call(M,"placeholder")?M:n).placeholder}function Ce(){var n=M.iteratee||Vc;return n=n===Vc?k1:n,arguments.length?n(arguments[0],arguments[1]):n}function cs(n,o){var l=n.__data__;return Uw(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Oc(n){for(var o=Lt(n),l=o.length;l--;){var p=o[l],y=n[p];o[l]=[p,y,rf(y)]}return o}function Xr(n,o){var l=q7(n,o);return y1(l)?l:r}function zw(n){var o=Xe.call(n,Zr),l=n[Zr];try{n[Zr]=r;var p=!0}catch{}var y=Ha.call(n);return p&&(o?n[Zr]=l:delete n[Zr]),y}var Cc=rc?function(n){return n==null?[]:(n=et(n),_r(rc(n),function(o){return a1.call(n,o)}))}:qc,ef=rc?function(n){for(var o=[];n;)yr(o,Cc(n)),n=Wa(n);return o}:qc,Nt=Wt;(oc&&Nt(new oc(new ArrayBuffer(1)))!=He||ki&&Nt(new ki)!=w||ic&&Nt(ic.resolve())!=I||Co&&Nt(new Co)!=ne||Ei&&Nt(new Ei)!=ue)&&(Nt=function(n){var o=Wt(n),l=o==O?n.constructor:r,p=l?Jr(l):"";if(p)switch(p){case w8:return He;case _8:return w;case y8:return I;case k8:return ne;case E8:return ue}return o});function Bw(n,o,l){for(var p=-1,y=l.length;++p<y;){var x=l[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":o-=L;break;case"take":o=Bt(o,n+L);break;case"takeRight":n=It(n,o-L);break}}return{start:n,end:o}}function Nw(n){var o=n.match(K9);return o?o[1].split(Y9):[]}function tf(n,o,l){o=xr(o,n);for(var p=-1,y=o.length,x=!1;++p<y;){var L=Un(o[p]);if(!(x=n!=null&&l(n,L)))break;n=n[L]}return x||++p!=y?x:(y=n==null?0:n.length,!!y&&ms(y)&&rr(L,y)&&(ze(n)||Qr(n)))}function Hw(n){var o=n.length,l=new n.constructor(o);return o&&typeof n[0]=="string"&&Xe.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function nf(n){return typeof n.constructor=="function"&&!Li(n)?Lo(Wa(n)):{}}function Fw(n,o,l){var p=n.constructor;switch(o){case je:return Ec(n);case De:case We:return new p(+n);case He:return Aw(n,l);case zt:case Yn:case Xt:case Xn:case at:case br:case Ur:case un:case Eo:return B1(n,l);case w:return new p;case Q:case N:return new p(n);case re:return Mw(n);case ne:return new p;case ce:return Sw(n)}}function Gw(n,o){var l=o.length;if(!l)return n;var p=l-1;return o[p]=(l>1?"& ":"")+o[p],o=o.join(l>2?", ":" "),n.replace(q9,`{
/* [wrapped with `+o+`] */
`)}function Ww(n){return ze(n)||Qr(n)||!!(s1&&n&&n[s1])}function rr(n,o){var l=typeof n;return o=o??Se,!!o&&(l=="number"||l!="symbol"&&i7.test(n))&&n>-1&&n%1==0&&n<o}function Ut(n,o,l){if(!ft(l))return!1;var p=typeof o;return(p=="number"?Qt(l)&&rr(o,l.length):p=="string"&&o in l)?Bn(l[o],n):!1}function Tc(n,o){if(ze(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||pn(n)?!0:U9.test(n)||!W9.test(n)||o!=null&&n in et(o)}function Uw(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Lc(n){var o=ls(n),l=M[o];if(typeof l!="function"||!(o in Ve.prototype))return!1;if(n===l)return!0;var p=Ic(l);return!!p&&n===p[0]}function Vw(n){return!!r1&&r1 in n}var Zw=Ba?or:Kc;function Li(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||Oo)}function rf(n){return n===n&&!ft(n)}function of(n,o){return function(l){return l==null?!1:l[n]===o&&(o!==r||n in et(l))}}function jw(n){var o=ps(n,function(p){return l.size===h&&l.clear(),p}),l=o.cache;return o}function qw(n,o){var l=n[1],p=o[1],y=l|p,x=y<(_|A|W),L=p==W&&l==C||p==W&&l==oe&&n[7].length<=o[8]||p==(W|oe)&&o[7].length<=o[8]&&l==C;if(!(x||L))return n;p&_&&(n[2]=o[2],y|=l&_?0:S);var P=o[3];if(P){var B=n[3];n[3]=B?H1(B,P,o[4]):P,n[4]=B?kr(n[3],f):o[4]}return P=o[5],P&&(B=n[5],n[5]=B?F1(B,P,o[6]):P,n[6]=B?kr(n[5],f):o[6]),P=o[7],P&&(n[7]=P),p&W&&(n[8]=n[8]==null?o[8]:Bt(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=y,n}function Kw(n){var o=[];if(n!=null)for(var l in et(n))o.push(l);return o}function Yw(n){return Ha.call(n)}function af(n,o,l){return o=It(o===r?n.length-1:o,0),function(){for(var p=arguments,y=-1,x=It(p.length-o,0),L=U(x);++y<x;)L[y]=p[o+y];y=-1;for(var P=U(o+1);++y<o;)P[y]=p[y];return P[o]=l(L),dn(n,this,P)}}function sf(n,o){return o.length<2?n:Yr(n,xn(o,0,-1))}function Xw(n,o){for(var l=n.length,p=Bt(o.length,l),y=Jt(n);p--;){var x=o[p];n[p]=rr(x,l)?y[x]:r}return n}function Rc(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var lf=uf(C1),Ri=h8||function(n,o){return Tt.setTimeout(n,o)},Pc=uf(_w);function cf(n,o,l){var p=o+"";return Pc(n,Gw(p,Jw(Nw(p),l)))}function uf(n){var o=0,l=0;return function(){var p=m8(),y=K-(p-l);if(l=p,y>0){if(++o>=R)return arguments[0]}else o=0;return n.apply(r,arguments)}}function us(n,o){var l=-1,p=n.length,y=p-1;for(o=o===r?p:o;++l<o;){var x=mc(l,y),L=n[x];n[x]=n[l],n[l]=L}return n.length=o,n}var df=jw(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(V9,function(l,p,y,x){o.push(y?x.replace(Q9,"$1"):p||l)}),o});function Un(n){if(typeof n=="string"||pn(n))return n;var o=n+"";return o=="0"&&1/n==-ie?"-0":o}function Jr(n){if(n!=null){try{return Na.call(n)}catch{}try{return n+""}catch{}}return""}function Jw(n,o){return En(ge,function(l){var p="_."+l[0];o&l[1]&&!Pa(n,p)&&n.push(p)}),n.sort()}function hf(n){if(n instanceof Ve)return n.clone();var o=new Mn(n.__wrapped__,n.__chain__);return o.__actions__=Jt(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function Qw(n,o,l){(l?Ut(n,o,l):o===r)?o=1:o=It(Fe(o),0);var p=n==null?0:n.length;if(!p||o<1)return[];for(var y=0,x=0,L=U(Za(p/o));y<p;)L[x++]=xn(n,y,y+=o);return L}function e_(n){for(var o=-1,l=n==null?0:n.length,p=0,y=[];++o<l;){var x=n[o];x&&(y[p++]=x)}return y}function t_(){var n=arguments.length;if(!n)return[];for(var o=U(n-1),l=arguments[0],p=n;p--;)o[p-1]=arguments[p];return yr(ze(l)?Jt(l):[l],$t(o,1))}var n_=Ue(function(n,o){return mt(n)?xi(n,$t(o,1,mt,!0)):[]}),r_=Ue(function(n,o){var l=In(o);return mt(l)&&(l=r),mt(n)?xi(n,$t(o,1,mt,!0),Ce(l,2)):[]}),o_=Ue(function(n,o){var l=In(o);return mt(l)&&(l=r),mt(n)?xi(n,$t(o,1,mt,!0),r,l):[]});function i_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Fe(o),xn(n,o<0?0:o,p)):[]}function a_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Fe(o),o=p-o,xn(n,0,o<0?0:o)):[]}function s_(n,o){return n&&n.length?ns(n,Ce(o,3),!0,!0):[]}function l_(n,o){return n&&n.length?ns(n,Ce(o,3),!0):[]}function c_(n,o,l,p){var y=n==null?0:n.length;return y?(l&&typeof l!="number"&&Ut(n,o,l)&&(l=0,p=y),tw(n,o,l,p)):[]}function ff(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Fe(l);return y<0&&(y=It(p+y,0)),$a(n,Ce(o,3),y)}function pf(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=p-1;return l!==r&&(y=Fe(l),y=l<0?It(p+y,0):Bt(y,p-1)),$a(n,Ce(o,3),y,!0)}function gf(n){return n!=null&&n.length?$t(n,1):[]}function u_(n){return n!=null&&n.length?$t(n,ie):[]}function d_(n,o){return n!=null&&n.length?(o=o===r?1:Fe(o),$t(n,o)):[]}function h_(n){for(var o=-1,l=n==null?0:n.length,p={};++o<l;){var y=n[o];p[y[0]]=y[1]}return p}function mf(n){return n&&n.length?n[0]:r}function f_(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Fe(l);return y<0&&(y=It(p+y,0)),So(n,o,y)}function p_(n){return n!=null&&n.length?xn(n,0,-1):[]}var g_=Ue(function(n){var o=ut(n,yc);return o.length&&o[0]===n[0]?dc(o):[]}),m_=Ue(function(n){var o=In(n),l=ut(n,yc);return o===In(l)?o=r:l.pop(),l.length&&l[0]===n[0]?dc(l,Ce(o,2)):[]}),v_=Ue(function(n){var o=In(n),l=ut(n,yc);return o=typeof o=="function"?o:r,o&&l.pop(),l.length&&l[0]===n[0]?dc(l,r,o):[]});function b_(n,o){return n==null?"":p8.call(n,o)}function In(n){var o=n==null?0:n.length;return o?n[o-1]:r}function w_(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=p;return l!==r&&(y=Fe(l),y=y<0?It(p+y,0):Bt(y,p-1)),o===o?Q7(n,o,y):$a(n,Kh,y,!0)}function __(n,o){return n&&n.length?S1(n,Fe(o)):r}var y_=Ue(vf);function vf(n,o){return n&&n.length&&o&&o.length?gc(n,o):n}function k_(n,o,l){return n&&n.length&&o&&o.length?gc(n,o,Ce(l,2)):n}function E_(n,o,l){return n&&n.length&&o&&o.length?gc(n,o,r,l):n}var A_=nr(function(n,o){var l=n==null?0:n.length,p=sc(n,o);return O1(n,ut(o,function(y){return rr(y,l)?+y:y}).sort(N1)),p});function M_(n,o){var l=[];if(!(n&&n.length))return l;var p=-1,y=[],x=n.length;for(o=Ce(o,3);++p<x;){var L=n[p];o(L,p,n)&&(l.push(L),y.push(p))}return O1(n,y),l}function $c(n){return n==null?n:b8.call(n)}function S_(n,o,l){var p=n==null?0:n.length;return p?(l&&typeof l!="number"&&Ut(n,o,l)?(o=0,l=p):(o=o==null?0:Fe(o),l=l===r?p:Fe(l)),xn(n,o,l)):[]}function x_(n,o){return ts(n,o)}function I_(n,o,l){return bc(n,o,Ce(l,2))}function O_(n,o){var l=n==null?0:n.length;if(l){var p=ts(n,o);if(p<l&&Bn(n[p],o))return p}return-1}function C_(n,o){return ts(n,o,!0)}function T_(n,o,l){return bc(n,o,Ce(l,2),!0)}function L_(n,o){if(n!=null&&n.length){var l=ts(n,o,!0)-1;if(Bn(n[l],o))return l}return-1}function R_(n){return n&&n.length?T1(n):[]}function P_(n,o){return n&&n.length?T1(n,Ce(o,2)):[]}function $_(n){var o=n==null?0:n.length;return o?xn(n,1,o):[]}function D_(n,o,l){return n&&n.length?(o=l||o===r?1:Fe(o),xn(n,0,o<0?0:o)):[]}function z_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Fe(o),o=p-o,xn(n,o<0?0:o,p)):[]}function B_(n,o){return n&&n.length?ns(n,Ce(o,3),!1,!0):[]}function N_(n,o){return n&&n.length?ns(n,Ce(o,3)):[]}var H_=Ue(function(n){return Sr($t(n,1,mt,!0))}),F_=Ue(function(n){var o=In(n);return mt(o)&&(o=r),Sr($t(n,1,mt,!0),Ce(o,2))}),G_=Ue(function(n){var o=In(n);return o=typeof o=="function"?o:r,Sr($t(n,1,mt,!0),r,o)});function W_(n){return n&&n.length?Sr(n):[]}function U_(n,o){return n&&n.length?Sr(n,Ce(o,2)):[]}function V_(n,o){return o=typeof o=="function"?o:r,n&&n.length?Sr(n,r,o):[]}function Dc(n){if(!(n&&n.length))return[];var o=0;return n=_r(n,function(l){if(mt(l))return o=It(l.length,o),!0}),Ql(o,function(l){return ut(n,Yl(l))})}function bf(n,o){if(!(n&&n.length))return[];var l=Dc(n);return o==null?l:ut(l,function(p){return dn(o,r,p)})}var Z_=Ue(function(n,o){return mt(n)?xi(n,o):[]}),j_=Ue(function(n){return _c(_r(n,mt))}),q_=Ue(function(n){var o=In(n);return mt(o)&&(o=r),_c(_r(n,mt),Ce(o,2))}),K_=Ue(function(n){var o=In(n);return o=typeof o=="function"?o:r,_c(_r(n,mt),r,o)}),Y_=Ue(Dc);function X_(n,o){return $1(n||[],o||[],Si)}function J_(n,o){return $1(n||[],o||[],Ci)}var Q_=Ue(function(n){var o=n.length,l=o>1?n[o-1]:r;return l=typeof l=="function"?(n.pop(),l):r,bf(n,l)});function wf(n){var o=M(n);return o.__chain__=!0,o}function ey(n,o){return o(n),n}function ds(n,o){return o(n)}var ty=nr(function(n){var o=n.length,l=o?n[0]:0,p=this.__wrapped__,y=function(x){return sc(x,n)};return o>1||this.__actions__.length||!(p instanceof Ve)||!rr(l)?this.thru(y):(p=p.slice(l,+l+(o?1:0)),p.__actions__.push({func:ds,args:[y],thisArg:r}),new Mn(p,this.__chain__).thru(function(x){return o&&!x.length&&x.push(r),x}))});function ny(){return wf(this)}function ry(){return new Mn(this.value(),this.__chain__)}function oy(){this.__values__===r&&(this.__values__=Rf(this.value()));var n=this.__index__>=this.__values__.length,o=n?r:this.__values__[this.__index__++];return{done:n,value:o}}function iy(){return this}function ay(n){for(var o,l=this;l instanceof Ya;){var p=hf(l);p.__index__=0,p.__values__=r,o?y.__wrapped__=p:o=p;var y=p;l=l.__wrapped__}return y.__wrapped__=n,o}function sy(){var n=this.__wrapped__;if(n instanceof Ve){var o=n;return this.__actions__.length&&(o=new Ve(this)),o=o.reverse(),o.__actions__.push({func:ds,args:[$c],thisArg:r}),new Mn(o,this.__chain__)}return this.thru($c)}function ly(){return P1(this.__wrapped__,this.__actions__)}var cy=rs(function(n,o,l){Xe.call(n,l)?++n[l]:er(n,l,1)});function uy(n,o,l){var p=ze(n)?jh:ew;return l&&Ut(n,o,l)&&(o=r),p(n,Ce(o,3))}function dy(n,o){return(ze(n)?_r:v1)(n,Ce(o,3))}var hy=V1(ff),fy=V1(pf);function py(n,o){return $t(hs(n,o),1)}function gy(n,o){return $t(hs(n,o),ie)}function my(n,o,l){return l=l===r?1:Fe(l),$t(hs(n,o),l)}function _f(n,o){return(ze(n)?En:Mr)(n,Ce(o,3))}function yf(n,o){return(ze(n)?D7:m1)(n,Ce(o,3))}var vy=rs(function(n,o,l){Xe.call(n,l)?n[l].push(o):er(n,l,[o])});function by(n,o,l,p){n=Qt(n)?n:zo(n),l=l&&!p?Fe(l):0;var y=n.length;return l<0&&(l=It(y+l,0)),vs(n)?l<=y&&n.indexOf(o,l)>-1:!!y&&So(n,o,l)>-1}var wy=Ue(function(n,o,l){var p=-1,y=typeof o=="function",x=Qt(n)?U(n.length):[];return Mr(n,function(L){x[++p]=y?dn(o,L,l):Ii(L,o,l)}),x}),_y=rs(function(n,o,l){er(n,l,o)});function hs(n,o){return(ze(n)?ut:E1)(n,Ce(o,3))}function yy(n,o,l,p){return n==null?[]:(ze(o)||(o=o==null?[]:[o]),l=p?r:l,ze(l)||(l=l==null?[]:[l]),x1(n,o,l))}var ky=rs(function(n,o,l){n[l?0:1].push(o)},function(){return[[],[]]});function Ey(n,o,l){var p=ze(n)?ql:Xh,y=arguments.length<3;return p(n,Ce(o,4),l,y,Mr)}function Ay(n,o,l){var p=ze(n)?z7:Xh,y=arguments.length<3;return p(n,Ce(o,4),l,y,m1)}function My(n,o){return(ze(n)?_r:v1)(n,gs(Ce(o,3)))}function Sy(n){return(ze(n)?h1:bw)(n)}function xy(n,o,l){return(l?Ut(n,o,l):o===r)?o=1:o=Fe(o),(ze(n)?K8:ww)(n,o)}function Iy(n){return(ze(n)?Y8:yw)(n)}function Oy(n){if(n==null)return 0;if(Qt(n))return vs(n)?Io(n):n.length;var o=Nt(n);return o==w||o==ne?n.size:fc(n).length}function Cy(n,o,l){var p=ze(n)?Kl:kw;return l&&Ut(n,o,l)&&(o=r),p(n,Ce(o,3))}var Ty=Ue(function(n,o){if(n==null)return[];var l=o.length;return l>1&&Ut(n,o[0],o[1])?o=[]:l>2&&Ut(o[0],o[1],o[2])&&(o=[o[0]]),x1(n,$t(o,1),[])}),fs=d8||function(){return Tt.Date.now()};function Ly(n,o){if(typeof o!="function")throw new An(c);return n=Fe(n),function(){if(--n<1)return o.apply(this,arguments)}}function kf(n,o,l){return o=l?r:o,o=n&&o==null?n.length:o,tr(n,W,r,r,r,r,o)}function Ef(n,o){var l;if(typeof o!="function")throw new An(c);return n=Fe(n),function(){return--n>0&&(l=o.apply(this,arguments)),n<=1&&(o=r),l}}var zc=Ue(function(n,o,l){var p=_;if(l.length){var y=kr(l,$o(zc));p|=$}return tr(n,p,o,l,y)}),Af=Ue(function(n,o,l){var p=_|A;if(l.length){var y=kr(l,$o(Af));p|=$}return tr(o,p,n,l,y)});function Mf(n,o,l){o=l?r:o;var p=tr(n,C,r,r,r,r,r,o);return p.placeholder=Mf.placeholder,p}function Sf(n,o,l){o=l?r:o;var p=tr(n,T,r,r,r,r,r,o);return p.placeholder=Sf.placeholder,p}function xf(n,o,l){var p,y,x,L,P,B,te=0,ee=!1,se=!1,me=!0;if(typeof n!="function")throw new An(c);o=On(o)||0,ft(l)&&(ee=!!l.leading,se="maxWait"in l,x=se?It(On(l.maxWait)||0,o):x,me="trailing"in l?!!l.trailing:me);function _e(vt){var Nn=p,ar=y;return p=y=r,te=vt,L=n.apply(ar,Nn),L}function Oe(vt){return te=vt,P=Ri(tt,o),ee?_e(vt):L}function Pe(vt){var Nn=vt-B,ar=vt-te,Zf=o-Nn;return se?Bt(Zf,x-ar):Zf}function Te(vt){var Nn=vt-B,ar=vt-te;return B===r||Nn>=o||Nn<0||se&&ar>=x}function tt(){var vt=fs();if(Te(vt))return Ze(vt);P=Ri(tt,Pe(vt))}function Ze(vt){return P=r,me&&p?_e(vt):(p=y=r,L)}function Vt(){P!==r&&D1(P),te=0,p=B=y=P=r}function Vn(){return P===r?L:Ze(fs())}function Cr(){var vt=fs(),Nn=Te(vt);if(p=arguments,y=this,B=vt,Nn){if(P===r)return Oe(B);if(se)return D1(P),P=Ri(tt,o),_e(B)}return P===r&&(P=Ri(tt,o)),L}return Cr.cancel=Vt,Cr.flush=Vn,Cr}var Ry=Ue(function(n,o){return g1(n,1,o)}),Py=Ue(function(n,o,l){return g1(n,On(o)||0,l)});function $y(n){return tr(n,H)}function ps(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new An(c);var l=function(){var p=arguments,y=o?o.apply(this,p):p[0],x=l.cache;if(x.has(y))return x.get(y);var L=n.apply(this,p);return l.cache=x.set(y,L)||x,L};return l.cache=new(ps.Cache||Qn),l}ps.Cache=Qn;function gs(n){if(typeof n!="function")throw new An(c);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function Dy(n){return Ef(2,n)}var zy=Ew(function(n,o){o=o.length==1&&ze(o[0])?ut(o[0],hn(Ce())):ut($t(o,1),hn(Ce()));var l=o.length;return Ue(function(p){for(var y=-1,x=Bt(p.length,l);++y<x;)p[y]=o[y].call(this,p[y]);return dn(n,this,p)})}),Bc=Ue(function(n,o){return tr(n,$,r,o,kr(o,$o(Bc)))}),If=Ue(function(n,o){return tr(n,q,r,o,kr(o,$o(If)))}),By=nr(function(n,o){return tr(n,oe,r,r,r,o)});function Ny(n,o){if(typeof n!="function")throw new An(c);return o=o===r?o:Fe(o),Ue(n,o)}function Hy(n,o){if(typeof n!="function")throw new An(c);return o=o==null?0:It(Fe(o),0),Ue(function(l){var p=l[o],y=Ir(l,0,o);return p&&yr(y,p),dn(n,this,y)})}function Fy(n,o,l){var p=!0,y=!0;if(typeof n!="function")throw new An(c);return ft(l)&&(p="leading"in l?!!l.leading:p,y="trailing"in l?!!l.trailing:y),xf(n,o,{leading:p,maxWait:o,trailing:y})}function Gy(n){return kf(n,1)}function Wy(n,o){return Bc(kc(o),n)}function Uy(){if(!arguments.length)return[];var n=arguments[0];return ze(n)?n:[n]}function Vy(n){return Sn(n,m)}function Zy(n,o){return o=typeof o=="function"?o:r,Sn(n,m,o)}function jy(n){return Sn(n,b|m)}function qy(n,o){return o=typeof o=="function"?o:r,Sn(n,b|m,o)}function Ky(n,o){return o==null||p1(n,o,Lt(o))}function Bn(n,o){return n===o||n!==n&&o!==o}var Yy=ss(uc),Xy=ss(function(n,o){return n>=o}),Qr=_1((function(){return arguments})())?_1:function(n){return gt(n)&&Xe.call(n,"callee")&&!a1.call(n,"callee")},ze=U.isArray,Jy=Fh?hn(Fh):aw;function Qt(n){return n!=null&&ms(n.length)&&!or(n)}function mt(n){return gt(n)&&Qt(n)}function Qy(n){return n===!0||n===!1||gt(n)&&Wt(n)==De}var Or=f8||Kc,ek=Gh?hn(Gh):sw;function tk(n){return gt(n)&&n.nodeType===1&&!Pi(n)}function nk(n){if(n==null)return!0;if(Qt(n)&&(ze(n)||typeof n=="string"||typeof n.splice=="function"||Or(n)||Do(n)||Qr(n)))return!n.length;var o=Nt(n);if(o==w||o==ne)return!n.size;if(Li(n))return!fc(n).length;for(var l in n)if(Xe.call(n,l))return!1;return!0}function rk(n,o){return Oi(n,o)}function ok(n,o,l){l=typeof l=="function"?l:r;var p=l?l(n,o):r;return p===r?Oi(n,o,r,l):!!p}function Nc(n){if(!gt(n))return!1;var o=Wt(n);return o==rt||o==Et||typeof n.message=="string"&&typeof n.name=="string"&&!Pi(n)}function ik(n){return typeof n=="number"&&l1(n)}function or(n){if(!ft(n))return!1;var o=Wt(n);return o==Gt||o==Yt||o==kt||o==z}function Of(n){return typeof n=="number"&&n==Fe(n)}function ms(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Se}function ft(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function gt(n){return n!=null&&typeof n=="object"}var Cf=Wh?hn(Wh):cw;function ak(n,o){return n===o||hc(n,o,Oc(o))}function sk(n,o,l){return l=typeof l=="function"?l:r,hc(n,o,Oc(o),l)}function lk(n){return Tf(n)&&n!=+n}function ck(n){if(Zw(n))throw new Re(s);return y1(n)}function uk(n){return n===null}function dk(n){return n==null}function Tf(n){return typeof n=="number"||gt(n)&&Wt(n)==Q}function Pi(n){if(!gt(n)||Wt(n)!=O)return!1;var o=Wa(n);if(o===null)return!0;var l=Xe.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&Na.call(l)==s8}var Hc=Uh?hn(Uh):uw;function hk(n){return Of(n)&&n>=-Se&&n<=Se}var Lf=Vh?hn(Vh):dw;function vs(n){return typeof n=="string"||!ze(n)&&gt(n)&&Wt(n)==N}function pn(n){return typeof n=="symbol"||gt(n)&&Wt(n)==ce}var Do=Zh?hn(Zh):hw;function fk(n){return n===r}function pk(n){return gt(n)&&Nt(n)==ue}function gk(n){return gt(n)&&Wt(n)==Me}var mk=ss(pc),vk=ss(function(n,o){return n<=o});function Rf(n){if(!n)return[];if(Qt(n))return vs(n)?Dn(n):Jt(n);if(yi&&n[yi])return Y7(n[yi]());var o=Nt(n);return(o==w?tc:o==ne?Da:zo)(n)}function ir(n){return n?(n=On(n),n===ie||n===-ie?(n<0?-1:1)*ae:n===n?n:0):n===0?n:0}function Fe(n){var o=ir(n),l=o%1;return o===o?l?o-l:o:0}function Pf(n){return n?Kr(Fe(n),0,F):0}function On(n){if(typeof n=="number")return n;if(pn(n))return Ee;if(ft(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=ft(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Jh(n);var l=n7.test(n);return l||o7.test(n)?R7(n.slice(2),l?2:8):t7.test(n)?Ee:+n}function $f(n){return Wn(n,en(n))}function bk(n){return n?Kr(Fe(n),-Se,Se):n===0?n:0}function Je(n){return n==null?"":fn(n)}var wk=Ro(function(n,o){if(Li(o)||Qt(o)){Wn(o,Lt(o),n);return}for(var l in o)Xe.call(o,l)&&Si(n,l,o[l])}),Df=Ro(function(n,o){Wn(o,en(o),n)}),bs=Ro(function(n,o,l,p){Wn(o,en(o),n,p)}),_k=Ro(function(n,o,l,p){Wn(o,Lt(o),n,p)}),yk=nr(sc);function kk(n,o){var l=Lo(n);return o==null?l:f1(l,o)}var Ek=Ue(function(n,o){n=et(n);var l=-1,p=o.length,y=p>2?o[2]:r;for(y&&Ut(o[0],o[1],y)&&(p=1);++l<p;)for(var x=o[l],L=en(x),P=-1,B=L.length;++P<B;){var te=L[P],ee=n[te];(ee===r||Bn(ee,Oo[te])&&!Xe.call(n,te))&&(n[te]=x[te])}return n}),Ak=Ue(function(n){return n.push(r,J1),dn(zf,r,n)});function Mk(n,o){return qh(n,Ce(o,3),Gn)}function Sk(n,o){return qh(n,Ce(o,3),cc)}function xk(n,o){return n==null?n:lc(n,Ce(o,3),en)}function Ik(n,o){return n==null?n:b1(n,Ce(o,3),en)}function Ok(n,o){return n&&Gn(n,Ce(o,3))}function Ck(n,o){return n&&cc(n,Ce(o,3))}function Tk(n){return n==null?[]:Qa(n,Lt(n))}function Lk(n){return n==null?[]:Qa(n,en(n))}function Fc(n,o,l){var p=n==null?r:Yr(n,o);return p===r?l:p}function Rk(n,o){return n!=null&&tf(n,o,nw)}function Gc(n,o){return n!=null&&tf(n,o,rw)}var Pk=j1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ha.call(o)),n[o]=l},Uc(tn)),$k=j1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ha.call(o)),Xe.call(n,o)?n[o].push(l):n[o]=[l]},Ce),Dk=Ue(Ii);function Lt(n){return Qt(n)?d1(n):fc(n)}function en(n){return Qt(n)?d1(n,!0):fw(n)}function zk(n,o){var l={};return o=Ce(o,3),Gn(n,function(p,y,x){er(l,o(p,y,x),p)}),l}function Bk(n,o){var l={};return o=Ce(o,3),Gn(n,function(p,y,x){er(l,y,o(p,y,x))}),l}var Nk=Ro(function(n,o,l){es(n,o,l)}),zf=Ro(function(n,o,l,p){es(n,o,l,p)}),Hk=nr(function(n,o){var l={};if(n==null)return l;var p=!1;o=ut(o,function(x){return x=xr(x,n),p||(p=x.length>1),x}),Wn(n,xc(n),l),p&&(l=Sn(l,b|v|m,Pw));for(var y=o.length;y--;)wc(l,o[y]);return l});function Fk(n,o){return Bf(n,gs(Ce(o)))}var Gk=nr(function(n,o){return n==null?{}:gw(n,o)});function Bf(n,o){if(n==null)return{};var l=ut(xc(n),function(p){return[p]});return o=Ce(o),I1(n,l,function(p,y){return o(p,y[0])})}function Wk(n,o,l){o=xr(o,n);var p=-1,y=o.length;for(y||(y=1,n=r);++p<y;){var x=n==null?r:n[Un(o[p])];x===r&&(p=y,x=l),n=or(x)?x.call(n):x}return n}function Uk(n,o,l){return n==null?n:Ci(n,o,l)}function Vk(n,o,l,p){return p=typeof p=="function"?p:r,n==null?n:Ci(n,o,l,p)}var Nf=Y1(Lt),Hf=Y1(en);function Zk(n,o,l){var p=ze(n),y=p||Or(n)||Do(n);if(o=Ce(o,4),l==null){var x=n&&n.constructor;y?l=p?new x:[]:ft(n)?l=or(x)?Lo(Wa(n)):{}:l={}}return(y?En:Gn)(n,function(L,P,B){return o(l,L,P,B)}),l}function jk(n,o){return n==null?!0:wc(n,o)}function qk(n,o,l){return n==null?n:R1(n,o,kc(l))}function Kk(n,o,l,p){return p=typeof p=="function"?p:r,n==null?n:R1(n,o,kc(l),p)}function zo(n){return n==null?[]:ec(n,Lt(n))}function Yk(n){return n==null?[]:ec(n,en(n))}function Xk(n,o,l){return l===r&&(l=o,o=r),l!==r&&(l=On(l),l=l===l?l:0),o!==r&&(o=On(o),o=o===o?o:0),Kr(On(n),o,l)}function Jk(n,o,l){return o=ir(o),l===r?(l=o,o=0):l=ir(l),n=On(n),ow(n,o,l)}function Qk(n,o,l){if(l&&typeof l!="boolean"&&Ut(n,o,l)&&(o=l=r),l===r&&(typeof o=="boolean"?(l=o,o=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&o===r?(n=0,o=1):(n=ir(n),o===r?(o=n,n=0):o=ir(o)),n>o){var p=n;n=o,o=p}if(l||n%1||o%1){var y=c1();return Bt(n+y*(o-n+L7("1e-"+((y+"").length-1))),o)}return mc(n,o)}var eE=Po(function(n,o,l){return o=o.toLowerCase(),n+(l?Ff(o):o)});function Ff(n){return Wc(Je(n).toLowerCase())}function Gf(n){return n=Je(n),n&&n.replace(a7,V7).replace(k7,"")}function tE(n,o,l){n=Je(n),o=fn(o);var p=n.length;l=l===r?p:Kr(Fe(l),0,p);var y=l;return l-=o.length,l>=0&&n.slice(l,y)==o}function nE(n){return n=Je(n),n&&H9.test(n)?n.replace(wr,Z7):n}function rE(n){return n=Je(n),n&&Z9.test(n)?n.replace(Bl,"\\$&"):n}var oE=Po(function(n,o,l){return n+(l?"-":"")+o.toLowerCase()}),iE=Po(function(n,o,l){return n+(l?" ":"")+o.toLowerCase()}),aE=U1("toLowerCase");function sE(n,o,l){n=Je(n),o=Fe(o);var p=o?Io(n):0;if(!o||p>=o)return n;var y=(o-p)/2;return as(ja(y),l)+n+as(Za(y),l)}function lE(n,o,l){n=Je(n),o=Fe(o);var p=o?Io(n):0;return o&&p<o?n+as(o-p,l):n}function cE(n,o,l){n=Je(n),o=Fe(o);var p=o?Io(n):0;return o&&p<o?as(o-p,l)+n:n}function uE(n,o,l){return l||o==null?o=0:o&&(o=+o),v8(Je(n).replace(Nl,""),o||0)}function dE(n,o,l){return(l?Ut(n,o,l):o===r)?o=1:o=Fe(o),vc(Je(n),o)}function hE(){var n=arguments,o=Je(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var fE=Po(function(n,o,l){return n+(l?"_":"")+o.toLowerCase()});function pE(n,o,l){return l&&typeof l!="number"&&Ut(n,o,l)&&(o=l=r),l=l===r?F:l>>>0,l?(n=Je(n),n&&(typeof o=="string"||o!=null&&!Hc(o))&&(o=fn(o),!o&&xo(n))?Ir(Dn(n),0,l):n.split(o,l)):[]}var gE=Po(function(n,o,l){return n+(l?" ":"")+Wc(o)});function mE(n,o,l){return n=Je(n),l=l==null?0:Kr(Fe(l),0,n.length),o=fn(o),n.slice(l,l+o.length)==o}function vE(n,o,l){var p=M.templateSettings;l&&Ut(n,o,l)&&(o=r),n=Je(n),o=bs({},o,p,X1);var y=bs({},o.imports,p.imports,X1),x=Lt(y),L=ec(y,x),P,B,te=0,ee=o.interpolate||Ta,se="__p += '",me=nc((o.escape||Ta).source+"|"+ee.source+"|"+(ee===wh?e7:Ta).source+"|"+(o.evaluate||Ta).source+"|$","g"),_e="//# sourceURL="+(Xe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++x7+"]")+`
`;n.replace(me,function(Te,tt,Ze,Vt,Vn,Cr){return Ze||(Ze=Vt),se+=n.slice(te,Cr).replace(s7,j7),tt&&(P=!0,se+=`' +
__e(`+tt+`) +
'`),Vn&&(B=!0,se+=`';
`+Vn+`;
__p += '`),Ze&&(se+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),te=Cr+Te.length,Te}),se+=`';
`;var Oe=Xe.call(o,"variable")&&o.variable;if(!Oe)se=`with (obj) {
`+se+`
}
`;else if(J9.test(Oe))throw new Re(d);se=(B?se.replace($l,""):se).replace(Dl,"$1").replace(zl,"$1;"),se="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+se+`return __p
}`;var Pe=Uf(function(){return Ke(x,_e+"return "+se).apply(r,L)});if(Pe.source=se,Nc(Pe))throw Pe;return Pe}function bE(n){return Je(n).toLowerCase()}function wE(n){return Je(n).toUpperCase()}function _E(n,o,l){if(n=Je(n),n&&(l||o===r))return Jh(n);if(!n||!(o=fn(o)))return n;var p=Dn(n),y=Dn(o);return Ir(p,Qh(p,y),e1(p,y)+1).join("")}function yE(n,o,l){if(n=Je(n),n&&(l||o===r))return n.slice(0,n1(n)+1);if(!n||!(o=fn(o)))return n;var p=Dn(n);return Ir(p,0,e1(p,Dn(o))+1).join("")}function kE(n,o,l){if(n=Je(n),n&&(l||o===r))return n.replace(Nl,"");if(!n||!(o=fn(o)))return n;var p=Dn(n);return Ir(p,Qh(p,Dn(o))).join("")}function EE(n,o){var l=pe,p=we;if(ft(o)){var y="separator"in o?o.separator:y;l="length"in o?Fe(o.length):l,p="omission"in o?fn(o.omission):p}n=Je(n);var x=n.length;if(xo(n)){var L=Dn(n);x=L.length}if(l>=x)return n;var P=l-Io(p);if(P<1)return p;var B=L?Ir(L,0,P).join(""):n.slice(0,P);if(y===r)return B+p;if(L&&(P+=B.length-P),Hc(y)){if(n.slice(P).search(y)){var te,ee=B;for(y.global||(y=nc(y.source,Je(_h.exec(y))+"g")),y.lastIndex=0;te=y.exec(ee);)var se=te.index;B=B.slice(0,se===r?P:se)}}else if(n.indexOf(fn(y),P)!=P){var me=B.lastIndexOf(y);me>-1&&(B=B.slice(0,me))}return B+p}function AE(n){return n=Je(n),n&&Ao.test(n)?n.replace(wi,e8):n}var ME=Po(function(n,o,l){return n+(l?" ":"")+o.toUpperCase()}),Wc=U1("toUpperCase");function Wf(n,o,l){return n=Je(n),o=l?r:o,o===r?K7(n)?r8(n):H7(n):n.match(o)||[]}var Uf=Ue(function(n,o){try{return dn(n,r,o)}catch(l){return Nc(l)?l:new Re(l)}}),SE=nr(function(n,o){return En(o,function(l){l=Un(l),er(n,l,zc(n[l],n))}),n});function xE(n){var o=n==null?0:n.length,l=Ce();return n=o?ut(n,function(p){if(typeof p[1]!="function")throw new An(c);return[l(p[0]),p[1]]}):[],Ue(function(p){for(var y=-1;++y<o;){var x=n[y];if(dn(x[0],this,p))return dn(x[1],this,p)}})}function IE(n){return Q8(Sn(n,b))}function Uc(n){return function(){return n}}function OE(n,o){return n==null||n!==n?o:n}var CE=Z1(),TE=Z1(!0);function tn(n){return n}function Vc(n){return k1(typeof n=="function"?n:Sn(n,b))}function LE(n){return A1(Sn(n,b))}function RE(n,o){return M1(n,Sn(o,b))}var PE=Ue(function(n,o){return function(l){return Ii(l,n,o)}}),$E=Ue(function(n,o){return function(l){return Ii(n,l,o)}});function Zc(n,o,l){var p=Lt(o),y=Qa(o,p);l==null&&!(ft(o)&&(y.length||!p.length))&&(l=o,o=n,n=this,y=Qa(o,Lt(o)));var x=!(ft(l)&&"chain"in l)||!!l.chain,L=or(n);return En(y,function(P){var B=o[P];n[P]=B,L&&(n.prototype[P]=function(){var te=this.__chain__;if(x||te){var ee=n(this.__wrapped__);return(ee.__actions__=Jt(this.__actions__)).push({func:B,args:arguments,thisArg:n}),ee.__chain__=te,ee}return B.apply(n,yr([this.value()],arguments))})}),n}function DE(){return Tt._===this&&(Tt._=l8),this}function jc(){}function zE(n){return n=Fe(n),Ue(function(o){return S1(o,n)})}var BE=Ac(ut),NE=Ac(jh),HE=Ac(Kl);function Vf(n){return Tc(n)?Yl(Un(n)):mw(n)}function FE(n){return function(o){return n==null?r:Yr(n,o)}}var GE=q1(),WE=q1(!0);function qc(){return[]}function Kc(){return!1}function UE(){return{}}function VE(){return""}function ZE(){return!0}function jE(n,o){if(n=Fe(n),n<1||n>Se)return[];var l=F,p=Bt(n,F);o=Ce(o),n-=F;for(var y=Ql(p,o);++l<n;)o(l);return y}function qE(n){return ze(n)?ut(n,Un):pn(n)?[n]:Jt(df(Je(n)))}function KE(n){var o=++a8;return Je(n)+o}var YE=is(function(n,o){return n+o},0),XE=Mc("ceil"),JE=is(function(n,o){return n/o},1),QE=Mc("floor");function eA(n){return n&&n.length?Ja(n,tn,uc):r}function tA(n,o){return n&&n.length?Ja(n,Ce(o,2),uc):r}function nA(n){return Yh(n,tn)}function rA(n,o){return Yh(n,Ce(o,2))}function oA(n){return n&&n.length?Ja(n,tn,pc):r}function iA(n,o){return n&&n.length?Ja(n,Ce(o,2),pc):r}var aA=is(function(n,o){return n*o},1),sA=Mc("round"),lA=is(function(n,o){return n-o},0);function cA(n){return n&&n.length?Jl(n,tn):0}function uA(n,o){return n&&n.length?Jl(n,Ce(o,2)):0}return M.after=Ly,M.ary=kf,M.assign=wk,M.assignIn=Df,M.assignInWith=bs,M.assignWith=_k,M.at=yk,M.before=Ef,M.bind=zc,M.bindAll=SE,M.bindKey=Af,M.castArray=Uy,M.chain=wf,M.chunk=Qw,M.compact=e_,M.concat=t_,M.cond=xE,M.conforms=IE,M.constant=Uc,M.countBy=cy,M.create=kk,M.curry=Mf,M.curryRight=Sf,M.debounce=xf,M.defaults=Ek,M.defaultsDeep=Ak,M.defer=Ry,M.delay=Py,M.difference=n_,M.differenceBy=r_,M.differenceWith=o_,M.drop=i_,M.dropRight=a_,M.dropRightWhile=s_,M.dropWhile=l_,M.fill=c_,M.filter=dy,M.flatMap=py,M.flatMapDeep=gy,M.flatMapDepth=my,M.flatten=gf,M.flattenDeep=u_,M.flattenDepth=d_,M.flip=$y,M.flow=CE,M.flowRight=TE,M.fromPairs=h_,M.functions=Tk,M.functionsIn=Lk,M.groupBy=vy,M.initial=p_,M.intersection=g_,M.intersectionBy=m_,M.intersectionWith=v_,M.invert=Pk,M.invertBy=$k,M.invokeMap=wy,M.iteratee=Vc,M.keyBy=_y,M.keys=Lt,M.keysIn=en,M.map=hs,M.mapKeys=zk,M.mapValues=Bk,M.matches=LE,M.matchesProperty=RE,M.memoize=ps,M.merge=Nk,M.mergeWith=zf,M.method=PE,M.methodOf=$E,M.mixin=Zc,M.negate=gs,M.nthArg=zE,M.omit=Hk,M.omitBy=Fk,M.once=Dy,M.orderBy=yy,M.over=BE,M.overArgs=zy,M.overEvery=NE,M.overSome=HE,M.partial=Bc,M.partialRight=If,M.partition=ky,M.pick=Gk,M.pickBy=Bf,M.property=Vf,M.propertyOf=FE,M.pull=y_,M.pullAll=vf,M.pullAllBy=k_,M.pullAllWith=E_,M.pullAt=A_,M.range=GE,M.rangeRight=WE,M.rearg=By,M.reject=My,M.remove=M_,M.rest=Ny,M.reverse=$c,M.sampleSize=xy,M.set=Uk,M.setWith=Vk,M.shuffle=Iy,M.slice=S_,M.sortBy=Ty,M.sortedUniq=R_,M.sortedUniqBy=P_,M.split=pE,M.spread=Hy,M.tail=$_,M.take=D_,M.takeRight=z_,M.takeRightWhile=B_,M.takeWhile=N_,M.tap=ey,M.throttle=Fy,M.thru=ds,M.toArray=Rf,M.toPairs=Nf,M.toPairsIn=Hf,M.toPath=qE,M.toPlainObject=$f,M.transform=Zk,M.unary=Gy,M.union=H_,M.unionBy=F_,M.unionWith=G_,M.uniq=W_,M.uniqBy=U_,M.uniqWith=V_,M.unset=jk,M.unzip=Dc,M.unzipWith=bf,M.update=qk,M.updateWith=Kk,M.values=zo,M.valuesIn=Yk,M.without=Z_,M.words=Wf,M.wrap=Wy,M.xor=j_,M.xorBy=q_,M.xorWith=K_,M.zip=Y_,M.zipObject=X_,M.zipObjectDeep=J_,M.zipWith=Q_,M.entries=Nf,M.entriesIn=Hf,M.extend=Df,M.extendWith=bs,Zc(M,M),M.add=YE,M.attempt=Uf,M.camelCase=eE,M.capitalize=Ff,M.ceil=XE,M.clamp=Xk,M.clone=Vy,M.cloneDeep=jy,M.cloneDeepWith=qy,M.cloneWith=Zy,M.conformsTo=Ky,M.deburr=Gf,M.defaultTo=OE,M.divide=JE,M.endsWith=tE,M.eq=Bn,M.escape=nE,M.escapeRegExp=rE,M.every=uy,M.find=hy,M.findIndex=ff,M.findKey=Mk,M.findLast=fy,M.findLastIndex=pf,M.findLastKey=Sk,M.floor=QE,M.forEach=_f,M.forEachRight=yf,M.forIn=xk,M.forInRight=Ik,M.forOwn=Ok,M.forOwnRight=Ck,M.get=Fc,M.gt=Yy,M.gte=Xy,M.has=Rk,M.hasIn=Gc,M.head=mf,M.identity=tn,M.includes=by,M.indexOf=f_,M.inRange=Jk,M.invoke=Dk,M.isArguments=Qr,M.isArray=ze,M.isArrayBuffer=Jy,M.isArrayLike=Qt,M.isArrayLikeObject=mt,M.isBoolean=Qy,M.isBuffer=Or,M.isDate=ek,M.isElement=tk,M.isEmpty=nk,M.isEqual=rk,M.isEqualWith=ok,M.isError=Nc,M.isFinite=ik,M.isFunction=or,M.isInteger=Of,M.isLength=ms,M.isMap=Cf,M.isMatch=ak,M.isMatchWith=sk,M.isNaN=lk,M.isNative=ck,M.isNil=dk,M.isNull=uk,M.isNumber=Tf,M.isObject=ft,M.isObjectLike=gt,M.isPlainObject=Pi,M.isRegExp=Hc,M.isSafeInteger=hk,M.isSet=Lf,M.isString=vs,M.isSymbol=pn,M.isTypedArray=Do,M.isUndefined=fk,M.isWeakMap=pk,M.isWeakSet=gk,M.join=b_,M.kebabCase=oE,M.last=In,M.lastIndexOf=w_,M.lowerCase=iE,M.lowerFirst=aE,M.lt=mk,M.lte=vk,M.max=eA,M.maxBy=tA,M.mean=nA,M.meanBy=rA,M.min=oA,M.minBy=iA,M.stubArray=qc,M.stubFalse=Kc,M.stubObject=UE,M.stubString=VE,M.stubTrue=ZE,M.multiply=aA,M.nth=__,M.noConflict=DE,M.noop=jc,M.now=fs,M.pad=sE,M.padEnd=lE,M.padStart=cE,M.parseInt=uE,M.random=Qk,M.reduce=Ey,M.reduceRight=Ay,M.repeat=dE,M.replace=hE,M.result=Wk,M.round=sA,M.runInContext=D,M.sample=Sy,M.size=Oy,M.snakeCase=fE,M.some=Cy,M.sortedIndex=x_,M.sortedIndexBy=I_,M.sortedIndexOf=O_,M.sortedLastIndex=C_,M.sortedLastIndexBy=T_,M.sortedLastIndexOf=L_,M.startCase=gE,M.startsWith=mE,M.subtract=lA,M.sum=cA,M.sumBy=uA,M.template=vE,M.times=jE,M.toFinite=ir,M.toInteger=Fe,M.toLength=Pf,M.toLower=bE,M.toNumber=On,M.toSafeInteger=bk,M.toString=Je,M.toUpper=wE,M.trim=_E,M.trimEnd=yE,M.trimStart=kE,M.truncate=EE,M.unescape=AE,M.uniqueId=KE,M.upperCase=ME,M.upperFirst=Wc,M.each=_f,M.eachRight=yf,M.first=mf,Zc(M,(function(){var n={};return Gn(M,function(o,l){Xe.call(M.prototype,l)||(n[l]=o)}),n})(),{chain:!1}),M.VERSION=i,En(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){M[n].placeholder=M}),En(["drop","take"],function(n,o){Ve.prototype[n]=function(l){l=l===r?1:It(Fe(l),0);var p=this.__filtered__&&!o?new Ve(this):this.clone();return p.__filtered__?p.__takeCount__=Bt(l,p.__takeCount__):p.__views__.push({size:Bt(l,F),type:n+(p.__dir__<0?"Right":"")}),p},Ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),En(["filter","map","takeWhile"],function(n,o){var l=o+1,p=l==E||l==Ie;Ve.prototype[n]=function(y){var x=this.clone();return x.__iteratees__.push({iteratee:Ce(y,3),type:l}),x.__filtered__=x.__filtered__||p,x}}),En(["head","last"],function(n,o){var l="take"+(o?"Right":"");Ve.prototype[n]=function(){return this[l](1).value()[0]}}),En(["initial","tail"],function(n,o){var l="drop"+(o?"":"Right");Ve.prototype[n]=function(){return this.__filtered__?new Ve(this):this[l](1)}}),Ve.prototype.compact=function(){return this.filter(tn)},Ve.prototype.find=function(n){return this.filter(n).head()},Ve.prototype.findLast=function(n){return this.reverse().find(n)},Ve.prototype.invokeMap=Ue(function(n,o){return typeof n=="function"?new Ve(this):this.map(function(l){return Ii(l,n,o)})}),Ve.prototype.reject=function(n){return this.filter(gs(Ce(n)))},Ve.prototype.slice=function(n,o){n=Fe(n);var l=this;return l.__filtered__&&(n>0||o<0)?new Ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),o!==r&&(o=Fe(o),l=o<0?l.dropRight(-o):l.take(o-n)),l)},Ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ve.prototype.toArray=function(){return this.take(F)},Gn(Ve.prototype,function(n,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),y=M[p?"take"+(o=="last"?"Right":""):o],x=p||/^find/.test(o);y&&(M.prototype[o]=function(){var L=this.__wrapped__,P=p?[1]:arguments,B=L instanceof Ve,te=P[0],ee=B||ze(L),se=function(tt){var Ze=y.apply(M,yr([tt],P));return p&&me?Ze[0]:Ze};ee&&l&&typeof te=="function"&&te.length!=1&&(B=ee=!1);var me=this.__chain__,_e=!!this.__actions__.length,Oe=x&&!me,Pe=B&&!_e;if(!x&&ee){L=Pe?L:new Ve(this);var Te=n.apply(L,P);return Te.__actions__.push({func:ds,args:[se],thisArg:r}),new Mn(Te,me)}return Oe&&Pe?n.apply(this,P):(Te=this.thru(se),Oe?p?Te.value()[0]:Te.value():Te)})}),En(["pop","push","shift","sort","splice","unshift"],function(n){var o=za[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);M.prototype[n]=function(){var y=arguments;if(p&&!this.__chain__){var x=this.value();return o.apply(ze(x)?x:[],y)}return this[l](function(L){return o.apply(ze(L)?L:[],y)})}}),Gn(Ve.prototype,function(n,o){var l=M[o];if(l){var p=l.name+"";Xe.call(To,p)||(To[p]=[]),To[p].push({name:o,func:l})}}),To[os(r,A).name]=[{name:"wrapper",func:r}],Ve.prototype.clone=A8,Ve.prototype.reverse=M8,Ve.prototype.value=S8,M.prototype.at=ty,M.prototype.chain=ny,M.prototype.commit=ry,M.prototype.next=oy,M.prototype.plant=ay,M.prototype.reverse=sy,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=ly,M.prototype.first=M.prototype.head,yi&&(M.prototype[yi]=iy),M})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Tt._=Er,define(function(){return Er})):Vr?((Vr.exports=Er)._=Er,Vl._=Er):Tt._=Er}).call(e)})),xe=Di(r2(),1);function _s(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function mn(e){return _s(e)||e===!1||e===0}function Xc(e){return"listImages"in e&&!mn(e.listImages)}function Jc(e){return"listPages"in e&&!mn(e.listPages)}function o2(e){return"bruteForce"in e&&!mn(e.bruteForce)}var Be=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Ge=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function i2(e,t){return t in e}var a2={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:xe.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function s2(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ys(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function Qc(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=r.querySelector(e);c?.getAttribute(t)&&(i(c.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function e0(e,t=document.body){return new Promise(r=>{if(!mn(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{mn(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function l2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function c2(e,t=1e3){const[r]=await Promise.all([e,l2(t)]);return r}async function t0(e,t,r,i,a="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const d=document.querySelector(r),u=document.querySelector(i),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await c2(Qc(a,s,u??document.body),100),u?.querySelector(a)?.removeAttribute(s),d?.dispatchEvent(new Event("click"));return h}var u2={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),i={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(i.listImages=await t0(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return i}},d2={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async i=>i.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((i,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},h2={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[Be.RAW],category:Ge.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},f2={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[Be.ENGLISH],category:Ge.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},p2={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},g2={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[Be.SPANISH],category:Ge.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},m2={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[Be.ENGLISH],obs:"May get your IP Banned, use with moderation",category:Ge.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),i=Array(t).fill(0).map(async(s,c)=>fetch(`${r}?p=${c}`).then(async d=>d.text()).then(d=>new DOMParser().parseFromString(d,"text/html"))),a=(await Promise.all(i)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(c=>c.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const c=`${a[s-1]}`,d=await fetch(c).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),u=`${c}${c.indexOf("?")?"&":"?"}nl=${d}`;return fetch(u).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},v2={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[Be.ENGLISH],category:Ge.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},b2={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},w2={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[Be.SPANISH],category:Ge.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},_2={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},y2={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},k2={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},E2=/^blob:(.+?)\/(.+)$/;function A2(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function M2(e){return E2.test(e)}function n0(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var S2={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,i)=>`${t+(i+1)}.${n0(unsafeWindow.g_th[i+1][0])}`)}}},x2={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},I2={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},O2={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},C2={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],i=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${i}/${s}`)}}},T2={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},L2={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),i=await e0("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${i}/${t}/${e}/${s+1}.${n0(unsafeWindow.g_th[s+1][0])}`)}}},R2={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[Be.ENGLISH,Be.SPANISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},P2={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),i="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(c,d)=>{const u=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${d+1}}}${i}`;return GM.xmlHttpRequest({method:"GET",url:u}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(c=>c.data.picture.list.items.map(d=>d.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},r0=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function o0(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>r0.test(r.value))?.value??e?.getAttribute("src")??""})}var $2={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Be.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Ge.MANGA,waitFunc:()=>{const e=o0();return e.length>0&&e.every(t=>t&&r0.test(t))},run(){const e=o0();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},D2={...$2,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:Ge.HENTAI},z2={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},B2={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,i)=>window.location.href.replace(/\/\d+$/,`/${i+1}`)),img:".gallery-slide img"}}},N2={name:["nHentai.net"],url:/https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/"],language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=await fetch("https://nhentai.net/api/v2/config").then(async r=>r.json()),t=await fetch(`https://nhentai.net/api/v2/galleries/${window.location.pathname.split("/")[2]}`).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:t.pages.length,prev:"#",next:"#",listImages:t.pages.map(r=>`${e.image_servers[Math.floor(Math.random()*e.image_servers.length)]}/${r.path}`)}}},H2={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[Be.SPANISH],category:Ge.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},F2={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,i)=>e.replace(/\/\d+\./,`/${i+1}.`))}}},G2={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},W2={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},U2={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[Be.SPANISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},V2={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,i=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:i.reader_start_url,pages:i.reader_page_total,prev:"#",next:"#",listImages:Array(i.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},Z2={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[Be.SPANISH],category:Ge.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},j2={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[Be.ENGLISH,Be.RAW,Be.CHINESE],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},q2={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},K2={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},Y2={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await t0(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},X2=[h2,f2,p2,g2,u2,m2,b2,v2,w2,_2,y2,k2,S2,x2,I2,O2,C2,T2,L2,R2,P2,z2,B2,N2,d2,H2,F2,G2,W2,U2,a2,V2,Z2,j2,q2,K2,Y2,D2],J2=gn(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var c=i[s]={i:s,l:!1,exports:{}};return r[s].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=r,a.c=i,a.d=function(s,c,d){a.o(s,c)||Object.defineProperty(s,c,{enumerable:!0,get:d})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,c){if(1&c&&(s=a(s)),8&c||4&c&&typeof s=="object"&&s&&s.__esModule)return s;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:s}),2&c&&typeof s!="string")for(var u in s)a.d(d,u,function(h){return s[h]}.bind(null,u));return d},a.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(c,"a",c),c},a.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function c(){}return c.getFirstMatch=function(d,u){var h=u.match(d);return h&&h.length>0&&h[1]||""},c.getSecondMatch=function(d,u){var h=u.match(d);return h&&h.length>1&&h[2]||""},c.matchAndReturnConst=function(d,u,h){if(d.test(u))return h},c.getWindowsVersionName=function(d){switch(d){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},c.getMacOSVersionName=function(d){var u=d.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));u.push(0);var h=u[0],f=u[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},c.getAndroidVersionName=function(d){var u=d.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},c.getVersionPrecision=function(d){return d.split(".").length},c.compareVersions=function(d,u,h){h===void 0&&(h=!1);var f=c.getVersionPrecision(d),b=c.getVersionPrecision(u),v=Math.max(f,b),m=0,g=c.map([d,u],(function(k){var _=v-c.getVersionPrecision(k),A=k+new Array(_+1).join(".0");return c.map(A.split("."),(function(S){return new Array(20-S.length).join("0")+S})).reverse()}));for(h&&(m=v-Math.min(f,b)),v-=1;v>=m;){if(g[0][v]>g[1][v])return 1;if(g[0][v]===g[1][v]){if(v===m)return 0;v-=1}else if(g[0][v]<g[1][v])return-1}},c.map=function(d,u){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(d,u);for(h=0;h<d.length;h+=1)f.push(u(d[h]));return f},c.find=function(d,u){var h,f;if(Array.prototype.find)return Array.prototype.find.call(d,u);for(h=0,f=d.length;h<f;h+=1){var b=d[h];if(u(b,h))return b}},c.assign=function(d){for(var u,h,f=d,b=arguments.length,v=new Array(b>1?b-1:0),m=1;m<b;m++)v[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[d].concat(v));var g=function(){var k=v[u];typeof k=="object"&&k!==null&&Object.keys(k).forEach((function(_){f[_]=k[_]}))};for(u=0,h=v.length;u<h;u+=1)g();return d},c.getBrowserAlias=function(d){return s.BROWSER_ALIASES_MAP[d]},c.getBrowserTypeByAlias=function(d){return s.BROWSER_MAP[d]||""},c})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(91))&&s.__esModule?s:{default:s},d=a(18);function u(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}i.default=(function(){function h(){}var f,b,v;return h.getParser=function(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),typeof m!="string")throw new Error("UserAgent should be a string");return new c.default(m,g,k)},h.parse=function(m,g){return g===void 0&&(g=null),new c.default(m,g).getResult()},f=h,v=[{key:"BROWSER_MAP",get:function(){return d.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return d.ENGINE_MAP}},{key:"OS_MAP",get:function(){return d.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return d.PLATFORMS_MAP}}],(b=null)&&u(f.prototype,b),v&&u(f,v),h})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=f(a(92)),c=f(a(93)),d=f(a(94)),u=f(a(95)),h=f(a(17));function f(b){return b&&b.__esModule?b:{default:b}}i.default=(function(){function b(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var _=!1;typeof g=="boolean"?(_=g,this._hints=k):this._hints=g!=null&&typeof g=="object"?g:null,this.parsedResult={},_!==!0&&this.parse()}var v=b.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var g=m.toLowerCase();return this._hints.brands.some((function(k){return k.brand&&k.brand.toLowerCase()===g}))},v.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var g=m.toLowerCase(),k=this._hints.brands.find((function(_){return _.brand&&_.brand.toLowerCase()===g}));return k?k.version:void 0}},v.getUA=function(){return this._ua},v.test=function(m){return m.test(this._ua)},v.parseBrowser=function(){var m=this;this.parsedResult.browser={};var g=h.default.find(s.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.browser=g.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var m=this;this.parsedResult.os={};var g=h.default.find(c.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.os=g.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(m){var g=this.getOS().name;return m?String(g).toLowerCase()||"":g||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(m){m===void 0&&(m=!1);var g=this.getPlatform().type;return m?String(g).toLowerCase()||"":g||""},v.parsePlatform=function(){var m=this;this.parsedResult.platform={};var g=h.default.find(d.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.platform=g.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var m=this;this.parsedResult.engine={};var g=h.default.find(u.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.engine=g.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return h.default.assign({},this.parsedResult)},v.satisfies=function(m){var g=this,k={},_=0,A={},S=0;if(Object.keys(m).forEach((function(pe){var we=m[pe];typeof we=="string"?(A[pe]=we,S+=1):typeof we=="object"&&(k[pe]=we,_+=1)})),_>0){var C=Object.keys(k),T=h.default.find(C,(function(pe){return g.isOS(pe)}));if(T){var $=this.satisfies(k[T]);if($!==void 0)return $}var q=h.default.find(C,(function(pe){return g.isPlatform(pe)}));if(q){var W=this.satisfies(k[q]);if(W!==void 0)return W}}if(S>0){var oe=Object.keys(A),H=h.default.find(oe,(function(pe){return g.isBrowser(pe,!0)}));if(H!==void 0)return this.compareVersion(A[H])}},v.isBrowser=function(m,g){g===void 0&&(g=!1);var k=this.getBrowserName().toLowerCase(),_=m.toLowerCase(),A=h.default.getBrowserTypeByAlias(_);return g&&A&&(_=A.toLowerCase()),_===k},v.compareVersion=function(m){var g=[0],k=m,_=!1,A=this.getBrowserVersion();if(typeof A=="string")return m[0]===">"||m[0]==="<"?(k=m.substr(1),m[1]==="="?(_=!0,k=m.substr(2)):g=[],m[0]===">"?g.push(1):g.push(-1)):m[0]==="="?k=m.substr(1):m[0]==="~"&&(_=!0,k=m.substr(1)),g.indexOf(h.default.compareVersions(A,k,_))>-1},v.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},v.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},v.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},v.is=function(m,g){return g===void 0&&(g=!1),this.isBrowser(m,g)||this.isOS(m)||this.isPlatform(m)},v.some=function(m){var g=this;return m===void 0&&(m=[]),m.some((function(k){return g.is(k)}))},b})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(u){var h={name:"GPTBot"},f=c.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(u){var h={name:"ChatGPT-User"},f=c.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(u){var h={name:"OAI-SearchBot"},f=c.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var h={name:"ClaudeBot"},f=c.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var h={name:"Omgilibot"},f=c.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(u){var h={name:"Diffbot"},f=c.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(u){var h={name:"PerplexityBot"},f=c.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(u){var h={name:"Perplexity-User"},f=c.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(u){var h={name:"YouBot"},f=c.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(u){var h={name:"Meta-WebIndexer"},f=c.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(u){var h={name:"Meta-ExternalAds"},f=c.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(u){var h={name:"Meta-ExternalAgent"},f=c.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(u){var h={name:"Meta-ExternalFetcher"},f=c.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(u){var h={name:"Googlebot"},f=c.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(u){var h={name:"Linespider"},f=c.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(u){var h={name:"AmazonBot"},f=c.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(u){var h={name:"BingCrawler"},f=c.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(u){var h={name:"BaiduSpider"},f=c.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(u){var h={name:"DuckDuckBot"},f=c.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(u){var h={name:"InternetArchiveCrawler"},f=c.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var h={name:"SlackBot"},f=c.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var h={name:"Opera"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(u){var h={name:"Opera"},f=c.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(u){var h={name:"Samsung Internet for Android"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(u){var h={name:"NAVER Whale Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(u){var h={name:"Pale Moon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(u){var h={name:"MZ Browser"},f=c.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(u){var h={name:"Focus"},f=c.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(u){var h={name:"Swing"},f=c.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(u){var h={name:"Opera Coast"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var h={name:"Opera Touch"},f=c.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(u){var h={name:"Yandex Browser"},f=c.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(u){var h={name:"UC Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(u){var h={name:"Maxthon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(u){var h={name:"Epiphany"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(u){var h={name:"Puffin"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(u){var h={name:"Sleipnir"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(u){var h={name:"K-Meleon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(u){var h={name:"WeChat"},f=c.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(u){var h={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},f=c.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(u){var h={name:"Internet Explorer"},f=c.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(u){var h={name:"Microsoft Edge"},f=c.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(u){var h={name:"Microsoft Edge"},f=c.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(u){var h={name:"Vivaldi"},f=c.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(u){var h={name:"SeaMonkey"},f=c.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(u){var h={name:"Sailfish"},f=c.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(u){var h={name:"Amazon Silk"},f=c.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(u){var h={name:"PhantomJS"},f=c.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(u){var h={name:"SlimerJS"},f=c.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var h={name:"BlackBerry"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var h={name:"WebOS Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(u){var h={name:"Bada"},f=c.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(u){var h={name:"Tizen"},f=c.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(u){var h={name:"QupZilla"},f=c.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(u){var h={name:"LibreWolf"},f=c.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var h={name:"Firefox"},f=c.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(u){var h={name:"Electron"},f=c.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var h={name:"Sogou Browser"},f=c.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),b=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),v=c.default.getFirstMatch(/se ([\d.]+)x/i,u),m=f||b||v;return m&&(h.version=m),h}},{test:[/MiuiBrowser/i],describe:function(u){var h={name:"Miui"},f=c.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,h){var f={name:"DuckDuckGo"};if(h){var b=h.getBrandVersion("DuckDuckGo");if(b)return f.version=b,f}var v=c.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return v&&(f.version=v),f}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,h){var f={name:"Brave"};if(h){var b=h.getBrandVersion("Brave");if(b)return f.version=b,f}return f}},{test:[/chromium/i],describe:function(u){var h={name:"Chromium"},f=c.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(u){var h={name:"Chrome"},f=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(u){var h={name:"Google Search"},f=c.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){var h=!u.test(/like android/i),f=u.test(/android/i);return h&&f},describe:function(u){var h={name:"Android Browser"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(u){var h={name:"PlayStation 4"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(u){var h={name:"Safari"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(u){var h=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:c.default.getFirstMatch(h,u),version:c.default.getSecondMatch(h,u)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(u){var h=c.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:d.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(u){var h=c.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(u){var h=c.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),f=c.default.getWindowsVersionName(h);return{name:d.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var h={name:d.OS_MAP.iOS},f=c.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(u){var h=c.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),f=c.default.getMacOSVersionName(h),b={name:d.OS_MAP.MacOS,version:h};return f&&(b.versionName=f),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var h=c.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:d.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(u){var h=c.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.HarmonyOS,version:h}}},{test:function(u){var h=!u.test(/like android/i),f=u.test(/android/i);return h&&f},describe:function(u){var h=c.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),f=c.default.getAndroidVersionName(h),b={name:d.OS_MAP.Android,version:h};return f&&(b.versionName=f),b}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var h=c.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),f={name:d.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var h=c.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||c.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||c.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:d.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(u){var h=c.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(u){var h=c.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:d.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:d.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var h=c.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.PlayStation4,version:h}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var h=c.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",f={type:d.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(u){var h=u.test(/ipod|iphone/i),f=u.test(/like (ipod|iphone)/i);return h&&!f},describe:function(u){var h=c.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:d.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var h=c.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),f={type:d.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var h=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:d.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:d.ENGINE_MAP.Blink};var h=c.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:d.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(u){var h={name:d.ENGINE_MAP.Trident},f=c.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){return u.test(/presto/i)},describe:function(u){var h={name:d.ENGINE_MAP.Presto},f=c.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){var h=u.test(/gecko/i),f=u.test(/like gecko/i);return h&&!f},describe:function(u){var h={name:d.ENGINE_MAP.Gecko},f=c.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:d.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var h={name:d.ENGINE_MAP.WebKit},f=c.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}}],r.exports=i.default}})}))})),i0=Di(J2(),1);function Q2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ke(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function vn(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function a0(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):vn("Fake Removing: ",e)}var ks=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function ep(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(vn("Fake Getting: ",e," = ",t),t)}function s0(e,t){const r=ep(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return ke("Failed to parse JSON from storage",e,i),t}return r}function tp(e){return s0("settings",e)}function np(e){return s0(window.location.hostname,e)}function l0(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ke("Setting: ",e," = ",t),t.toString()):(vn("Fake Setting: ",e," = ",t),String(t))}function rp(e){return l0("settings",e)}function c0(e){return l0(window.location.hostname,e)}function op(){const e=i0.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function ip(){return ks.scriptHandler??"Greasemonkey"}var Bo=()=>{const e=i0.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},ap=()=>Bo()==="mobile"||Bo()==="tablet",u0=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){ke("Failed to add settings listener",r)}};async function No(e,t,r,i){e!==void 0&&(ke(r),ke(i,await t(e)))}async function sp(e){await No(e.waitAttr,t=>Qc(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await No(e.waitEle,s2,`Waiting for Element ${e.waitEle}`,"Found Element"),await No(e.waitVar,e0,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await No(e.waitFunc,ys,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await No(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var lp="@moaqzdev/toast",Ho={_dispatchToast(e,t){Object.assign(t,{type:e});const r=new CustomEvent(lp,{detail:t});document.dispatchEvent(r)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}},Cn=[],sr=0,zi=4,Bi=0,d0=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=sr+zi;s<Cn.length;)Cn[s]===i?Cn.splice(s,zi):s+=zi;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){Bi++;let s=!Cn.length;for(let c of t)Cn.push(c,r.value,i,a);if(s){for(sr=0;sr<Cn.length;sr+=zi)Cn[sr](Cn[sr+1],Cn[sr+2],Cn[sr+3]);Cn.length=0}},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},cp=5,Ni=6,Hi=10,up=(e,t,r,i)=>(e.events=e.events||{},e.events[r+Hi]||(e.events[r+Hi]=i(a=>{e.events[r].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Hi](),delete e.events[r+Hi])}),dp=1e3,hp=(e,t)=>up(e,i=>{let a=t(i);a&&e.events[Ni].push(a)},cp,i=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...c));let s=e.off;return e.events[Ni]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[Ni])c();e.events[Ni]=[]}},dp)},()=>{e.listen=a,e.off=s}}),fp=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===Bi)return;a=Bi;let f=e.map(b=>b.get());if(!i||f.some((b,v)=>b!==i[v])){i=f;let b=t(...f);b&&b.then&&b.t?b.then(v=>{i===f&&c.set(v)}):(c.set(b),a=Bi)}},c=d0(void 0),d=c.get;c.get=()=>(s(),d());let u,h=r?()=>{clearTimeout(u),u=setTimeout(s)}:s;return hp(c,()=>{let f=e.map(b=>b.listen(h));return s(),()=>{for(let b of f)b()}}),c},pp=(e,t)=>fp(e,t),h0=(e={})=>{let t=d0(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},Es=globalThis,f0=e=>e,Fi=Es.trustedTypes,p0=Fi?Fi.createPolicy("lit-html",{createHTML:e=>e}):void 0,As="$lit$",Zn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+Zn,gp=`<${Ms}>`,Tr=document,Fo=()=>Tr.createComment(""),Go=e=>e===null||typeof e!="object"&&typeof e!="function",Ss=Array.isArray,g0=e=>Ss(e)||typeof e?.[Symbol.iterator]=="function",xs=`[ 	
\f\r]`,Wo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m0=/-->/g,v0=/>/g,Lr=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b0=/'/g,w0=/"/g,_0=/^(?:script|style|textarea|title)$/i,Is=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),le=Is(1),dA=Is(2),hA=Is(3),jn=Symbol.for("lit-noChange"),$e=Symbol.for("lit-nothing"),y0=new WeakMap,Rr=Tr.createTreeWalker(Tr,129);function k0(e,t){if(!Ss(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return p0!==void 0?p0.createHTML(t):t}var E0=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=Wo;for(let d=0;d<r;d++){const u=e[d];let h,f,b=-1,v=0;for(;v<u.length&&(c.lastIndex=v,f=c.exec(u),f!==null);)v=c.lastIndex,c===Wo?f[1]==="!--"?c=m0:f[1]!==void 0?c=v0:f[2]!==void 0?(_0.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=Lr):f[3]!==void 0&&(c=Lr):c===Lr?f[0]===">"?(c=a??Wo,b=-1):f[1]===void 0?b=-2:(b=c.lastIndex-f[2].length,h=f[1],c=f[3]===void 0?Lr:f[3]==='"'?w0:b0):c===w0||c===b0?c=Lr:c===m0||c===v0?c=Wo:(c=Lr,a=void 0);const m=c===Lr&&e[d+1].startsWith("/>")?" ":"";s+=c===Wo?u+gp:b>=0?(i.push(h),u.slice(0,b)+As+u.slice(b)+Zn+m):u+Zn+(b===-2?d:m)}return[k0(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Os=class jf{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,c=0;const d=t.length-1,u=this.parts,[h,f]=E0(t,r);if(this.el=jf.createElement(h,i),Rr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=Rr.nextNode())!==null&&u.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(As)){const v=f[c++],m=a.getAttribute(b).split(Zn),g=/([.?@])?(.*)/.exec(v);u.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?M0:g[1]==="?"?S0:g[1]==="@"?x0:Uo}),a.removeAttribute(b)}else b.startsWith(Zn)&&(u.push({type:6,index:s}),a.removeAttribute(b));if(_0.test(a.tagName)){const b=a.textContent.split(Zn),v=b.length-1;if(v>0){a.textContent=Fi?Fi.emptyScript:"";for(let m=0;m<v;m++)a.append(b[m],Fo()),Rr.nextNode(),u.push({type:2,index:++s});a.append(b[v],Fo())}}}else if(a.nodeType===8)if(a.data===Ms)u.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Zn,b+1))!==-1;)u.push({type:7,index:s}),b+=Zn.length-1}s++}}static createElement(t,r){const i=Tr.createElement("template");return i.innerHTML=t,i}};function Pr(e,t,r=e,i){if(t===jn)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=Go(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Pr(e,a._$AS(e,t.values),a,i)),t}var A0=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Tr).importNode(t,!0);Rr.currentNode=i;let a=Rr.nextNode(),s=0,c=0,d=r[0];for(;d!==void 0;){if(s===d.index){let u;d.type===2?u=new Gi(a,a.nextSibling,this,e):d.type===1?u=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(u=new I0(a,this,e)),this._$AV.push(u),d=r[++c]}s!==d?.index&&(a=Rr.nextNode(),s++)}return Rr.currentNode=Tr,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Gi=class qf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=$e,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Pr(this,t,r),Go(t)?t===$e||t==null||t===""?(this._$AH!==$e&&this._$AR(),this._$AH=$e):t!==this._$AH&&t!==jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):g0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$e&&Go(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Os.createElement(k0(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new A0(a,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=y0.get(t.strings);return r===void 0&&y0.set(t.strings,r=new Os(t)),r}k(t){Ss(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new qf(this.O(Fo()),this.O(Fo()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=f0(t).nextSibling;f0(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Uo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=$e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$e}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Pr(this,e,t,0),s=!Go(e)||e!==this._$AH&&e!==jn,s&&(this._$AH=e);else{const c=e;let d,u;for(e=a[0],d=0;d<a.length-1;d++)u=Pr(this,c[r+d],t,d),u===jn&&(u=this._$AH[d]),s||=!Go(u)||u!==this._$AH[d],u===$e?e=$e:e!==$e&&(e+=(u??"")+a[d+1]),this._$AH[d]=u}s&&!i&&this.j(e)}j(e){e===$e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},M0=class extends Uo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$e?void 0:e}},S0=class extends Uo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$e)}},x0=class extends Uo{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=Pr(this,e,t,0)??$e)===jn)return;const r=this._$AH,i=e===$e&&r!==$e||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==$e&&(r===$e||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},I0=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Pr(this,e)}},mp={M:As,P:Zn,A:Ms,C:1,L:E0,R:A0,D:g0,V:Pr,I:Gi,H:Uo,N:S0,U:x0,B:M0,F:I0},vp=Es.litHtmlPolyfillSupport;vp?.(Os,Gi),(Es.litHtmlVersions??=[]).push("3.3.2");var bp=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new Gi(t.insertBefore(Fo(),s),s,void 0,r??{})}return a._$AI(e),a},{I:wp}=mp,O0=e=>e,fA=e=>e===null||typeof e!="object"&&typeof e!="function",pA={HTML:1,SVG:2,MATHML:3},gA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,mA=e=>e?._$litType$?.h!=null,vA=e=>e?._$litDirective$!==void 0,bA=e=>e?._$litDirective$,_p=e=>e.strings===void 0,C0=()=>document.createComment(""),wA=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new wp(i.insertBefore(C0(),a),i.insertBefore(C0(),a),e,e.options);else{const s=r._$AB.nextSibling,c=r._$AM,d=c!==e;if(d){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==c._$AU&&r._$AP(u)}if(s!==a||d){let u=r._$AA;for(;u!==s;){const h=O0(u).nextSibling;O0(i).insertBefore(u,a),u=h}}}return r},_A=(e,t,r=e)=>(e._$AI(t,r),e),yp={},yA=(e,t=yp)=>e._$AH=t,kA=e=>e._$AH,EA=e=>{e._$AR(),e._$AA.remove()},AA=e=>{e._$AR()},Wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vo=e=>(...t)=>({_$litDirective$:e,values:t}),Ui=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Zo=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),Zo(i,t);return!0},Vi=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},T0=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Ap(t)}};function kp(e){this._$AN!==void 0?(Vi(this),this._$AM=e,T0(this)):this._$AM=e}function Ep(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)Zo(i[s],!1),Vi(i[s]);else i!=null&&(Zo(i,!1),Vi(i));else Zo(this,e)}var Ap=e=>{e.type==Wi.CHILD&&(e._$AP??=Ep,e._$AQ??=kp)},Mp=class extends Ui{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),T0(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Zo(this,e),Vi(this))}setValue(e){if(_p(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Cs=()=>new Sp,Sp=class{},Ts=new WeakMap,Ls=Vo(class extends Mp{render(e){return $e}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$e}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ts.get(t);r===void 0&&(r=new WeakMap,Ts.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ts.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),xp={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten"},Ip={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page"},Op={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga página/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble"},Cp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement des pages/seconde",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page"},Tp={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla"},Lp={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度页数/秒",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页"},eo=[Ip,Op,Tp,Lp,xp,Cp],jo=(e,t)=>{const r=(i,a)=>xe.default.transform(i,(s,c,d)=>{xe.default.isEqual(c,a[d])||(xe.default.isObject(c)&&xe.default.isObject(a[d])&&!xe.default.isArray(c)?s[d]=r(c,a[d]):s[d]=c)});return r(e,t)},L0={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",throttlePageLoad:1e3,viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},Rp={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"};function Tn(e=!0){return ap()?xe.default.defaultsDeep(Rp,{...L0,theme:e?"#29487D":"#004526"}):{...L0,theme:e?"#29487D":"#004526"}}function Pp(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,c)=>r(s).localeCompare(r(c))),a=[...t].sort((s,c)=>r(s).localeCompare(r(c)));return xe.default.isEqual(i,a)}}function $p(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=xe.default.keys(r).sort((c,d)=>c.localeCompare(d)),s=xe.default.keys(i).sort((c,d)=>c.localeCompare(d));if(!xe.default.isEqual(a,s))return!1;for(const c of a){const d=r[c]?[...r[c]].sort((h,f)=>h.localeCompare(f)):[],u=i[c]?[...i[c]].sort((h,f)=>h.localeCompare(f)):[];if(!xe.default.isEqual(d,u))return!1}return!0}}function R0(e,t,r){if(r==="bookmarks")return Pp(e,t);if(r==="keybinds")return $p(e,t)}function Zi(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!xe.default.isEqualWith(i,a,R0)}return!xe.default.isEqualWith(e,t,R0)}var Zt=xe.default.defaultsDeep(tp(Tn()),Tn()),jt=xe.default.defaultsDeep(np(Tn(!1)),Tn(!1)),$r=()=>jt?.enabled===!0,Rs=e=>$r()&&!["locale","bookmarks","keybinds"].includes(e),At=h0($r()?{...jt,locale:Zt.locale,keybinds:Zt.keybinds,bookmarks:Zt.bookmarks}:Zt),to=pp(At,e=>eo.find(t=>t.ID===e.locale)??eo[1]),qt=h0({autoScroll:!1,chapter:Cs(),currentPage:0,device:Bo(),manga:void 0,panel:"none",scrollToPage:void 0});function Dr(e){if(e){const t=Rs(e)?jt[e]:Zt[e],r=At.get()?.[e];Zi(r,t,e)&&(At.setKey(e,t),ke("Refreshed Settings",e,t));return}for(const t in At.get()){const r=At.get()[t],i=Rs(t)?jt[t]:Zt[t];Zi(r,i)&&At.setKey(t,i)}ke("Refreshed All Settings")}function Dp(e){const t=xe.default.defaultsDeep(e,Tn()),r=Zt?jo(t,Zt):t;if(!mn(r)){ke("Imported Global Settings",r),Zt=t;for(const i in r)Dr(i)}}u0(xe.default.debounce(Dp,300),"settings");function zp(e){const t=xe.default.defaultsDeep(e,Tn(!1)),r=jt?jo(t,jt):t;if(!mn(r)){ke("Imported Local Settings",r),jt=t;for(const i in r)Dr(i)}}u0(xe.default.debounce(zp,300),location.hostname);function Z(e){return At.get()?.[e]}function no(e,t){const r=At.get()?.[e];Zi(r,t,e)&&At.setKey(e,t)}function bt(e,t){Zi(Z(e),t,e)&&(At.setKey(e,t),Rs(e)?(jt[e]=t,c0(jo(jt,Tn(!1)))):(Zt[e]=t,rp(jo(Zt,Tn()))))}function qo(e,t){no(e,t(Z(e)))}function fe(e){return qt.get()[e]}function Ne(e,t){const r=qt.get()[e];xe.default.isEqual(r,t)||qt.setKey(e,t)}function P0(e,t){const r=qt.get()[e],i=t(r);xe.default.isEqual(r,i)||qt.setKey(e,i)}function Ln(e,t){P0("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function j(e){const t=eo.find(r=>r.ID===Z("locale"))??eo[1];return i2(t,e)?t?.[e]??eo[1]?.[e]:`##MISSING_STRING_${e}##`}function $0(e=!1){return jt.enabled=e,c0(jo(jt,Tn(!1))),ke("Local Settings ",e?"Enabled":"Disabled"),Ho.info({title:"Changed Settings to",description:$r()?"Local":"Global",duration:2e3}),$r()}function Bp(){$r()?(a0(location.hostname),jt=Tn(!1),$0(!1)):(a0("settings"),Zt=Tn(),Dr()),ke("Settings Reset")}function ro(e=location.href){return Z("bookmarks").find(t=>t.url===e)?.page}function Np(e=null){vn("Current Settings (Local:",$r(),") ",e?At.get()[e]:At.get(),`
Global Settings`,e?Zt[e]:Zt,`
Local Settings`,e?jt[e]:jt,`
AppState`,qt.get())}Q2("MOVSettings",Np);var Hp=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];Ho.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};At.listen(xe.default.debounce(Hp,300));var Fp=gn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function c(h,f){if(!a[h]){if(!i[h]){var b=typeof require=="function"&&require;if(!f&&b)return b(h,!0);if(d)return d(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var m=a[h]={exports:{}};i[h][0].call(m.exports,function(g){var k=i[h][1][g];return c(k||g)},m,m.exports,r,i,a,s)}return a[h].exports}for(var d=typeof require=="function"&&require,u=0;u<s.length;u++)c(s[u]);return c})({1:[function(r,i,a){"use strict";var s=r("./utils"),c=r("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(u){for(var h,f,b,v,m,g,k,_=[],A=0,S=u.length,C=S,T=s.getTypeOf(u)!=="string";A<u.length;)C=S-A,b=T?(h=u[A++],f=A<S?u[A++]:0,A<S?u[A++]:0):(h=u.charCodeAt(A++),f=A<S?u.charCodeAt(A++):0,A<S?u.charCodeAt(A++):0),v=h>>2,m=(3&h)<<4|f>>4,g=1<C?(15&f)<<2|b>>6:64,k=2<C?63&b:64,_.push(d.charAt(v)+d.charAt(m)+d.charAt(g)+d.charAt(k));return _.join("")},a.decode=function(u){var h,f,b,v,m,g,k=0,_=0,A="data:";if(u.substr(0,A.length)===A)throw new Error("Invalid base64 input, it looks like a data url.");var S,C=3*(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(u.charAt(u.length-1)===d.charAt(64)&&C--,u.charAt(u.length-2)===d.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=c.uint8array?new Uint8Array(0|C):new Array(0|C);k<u.length;)h=d.indexOf(u.charAt(k++))<<2|(v=d.indexOf(u.charAt(k++)))>>4,f=(15&v)<<4|(m=d.indexOf(u.charAt(k++)))>>2,b=(3&m)<<6|(g=d.indexOf(u.charAt(k++))),S[_++]=h,m!==64&&(S[_++]=f),g!==64&&(S[_++]=b);return S}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),c=r("./stream/DataWorker"),d=r("./stream/Crc32Probe"),u=r("./stream/DataLengthProbe");function h(f,b,v,m,g){this.compressedSize=f,this.uncompressedSize=b,this.crc32=v,this.compression=m,this.compressedContent=g}h.prototype={getContentWorker:function(){var f=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),b=this;return f.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,b,v){return f.pipe(new d).pipe(new u("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new u("compressedSize")).withStreamInfo("compression",b)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),c=(function(){for(var d,u=[],h=0;h<256;h++){d=h;for(var f=0;f<8;f++)d=1&d?3988292384^d>>>1:d>>>1;u[h]=d}return u})();i.exports=function(d,u){return d!==void 0&&d.length?s.getTypeOf(d)!=="string"?(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f[k])];return-1^h})(0|u,d,d.length,0):(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f.charCodeAt(k))];return-1^h})(0|u,d,d.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=r("pako"),d=r("./utils"),u=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(b,v){u.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=v,this.meta={}}a.magic="\b\0",d.inherits(f,u),f.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(h,b.data),!1)},f.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(v){b.push({data:v,meta:b.meta})}},a.compressWorker=function(b){return new f("Deflate",b)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(m,g){var k,_="";for(k=0;k<g;k++)_+=String.fromCharCode(255&m),m>>>=8;return _}function c(m,g,k,_,A,S){var C,T,$=m.file,q=m.compression,W=S!==h.utf8encode,oe=d.transformTo("string",S($.name)),H=d.transformTo("string",h.utf8encode($.name)),pe=$.comment,we=d.transformTo("string",S(pe)),R=d.transformTo("string",h.utf8encode(pe)),K=H.length!==$.name.length,E=R.length!==pe.length,J="",Ie="",ie="",Se=$.dir,ae=$.date,Ee={crc32:0,compressedSize:0,uncompressedSize:0};g&&!k||(Ee.crc32=m.crc32,Ee.compressedSize=m.compressedSize,Ee.uncompressedSize=m.uncompressedSize);var F=0;g&&(F|=8),W||!K&&!E||(F|=2048);var G=0,Ae=0;Se&&(G|=16),A==="UNIX"?(Ae=798,G|=(function(de,Ye){var kt=de;return de||(kt=Ye?16893:33204),(65535&kt)<<16})($.unixPermissions,Se)):(Ae=20,G|=(function(de){return 63&(de||0)})($.dosPermissions)),C=ae.getUTCHours(),C<<=6,C|=ae.getUTCMinutes(),C<<=5,C|=ae.getUTCSeconds()/2,T=ae.getUTCFullYear()-1980,T<<=4,T|=ae.getUTCMonth()+1,T<<=5,T|=ae.getUTCDate(),K&&(Ie=s(1,1)+s(f(oe),4)+H,J+="up"+s(Ie.length,2)+Ie),E&&(ie=s(1,1)+s(f(we),4)+R,J+="uc"+s(ie.length,2)+ie);var ge="";return ge+=`
\0`,ge+=s(F,2),ge+=q.magic,ge+=s(C,2),ge+=s(T,2),ge+=s(Ee.crc32,4),ge+=s(Ee.compressedSize,4),ge+=s(Ee.uncompressedSize,4),ge+=s(oe.length,2),ge+=s(J.length,2),{fileRecord:b.LOCAL_FILE_HEADER+ge+oe+J,dirRecord:b.CENTRAL_FILE_HEADER+s(Ae,2)+ge+s(we.length,2)+"\0\0\0\0"+s(G,4)+s(_,4)+oe+J+we}}var d=r("../utils"),u=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),b=r("../signature");function v(m,g,k,_){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=k,this.encodeFileName=_,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(v,u),v.prototype.push=function(m){var g=m.meta.percent||0,k=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,u.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:k?(g+100*(k-_-1))/k:100}}))},v.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var g=this.streamFiles&&!m.file.dir;if(g){var k=c(m,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(m){this.accumulate=!1;var g=this.streamFiles&&!m.file.dir,k=c(m,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),g)this.push({data:(function(_){return b.DATA_DESCRIPTOR+s(_.crc32,4)+s(_.compressedSize,4)+s(_.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var m=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var k=this.bytesWritten-m,_=(function(A,S,C,T,$){var q=d.transformTo("string",$(T));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(A,2)+s(A,2)+s(S,4)+s(C,4)+s(q.length,2)+q})(this.dirRecords.length,k,m,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(m){this._sources.push(m);var g=this;return m.on("data",function(k){g.processChunk(k)}),m.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),m.on("error",function(k){g.error(k)}),this},v.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(m){var g=this._sources;if(!u.prototype.error.call(this,m))return!1;for(var k=0;k<g.length;k++)try{g[k].error(m)}catch{}return!0},v.prototype.lock=function(){u.prototype.lock.call(this);for(var m=this._sources,g=0;g<m.length;g++)m[g].lock()},i.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),c=r("./ZipFileWorker");a.generateWorker=function(d,u,h){var f=new c(u.streamFiles,h,u.platform,u.encodeFileName),b=0;try{d.forEach(function(v,m){b++;var g=(function(S,C){var T=S||C,$=s[T];if(!$)throw new Error(T+" is not a valid compression method !");return $})(m.options.compression,u.compression),k=m.options.compressionOptions||u.compressionOptions||{},_=m.dir,A=m.date;m._compressWorker(g,k).withStreamInfo("file",{name:v,dir:_,date:A,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(f)}),f.entriesCount=b}catch(v){f.error(v)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var d in this)typeof this[d]!="function"&&(c[d]=this[d]);return c}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(c,d){return new s().loadAsync(c,d)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),c=r("./external"),d=r("./utf8"),u=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function b(v){return new c.Promise(function(m,g){var k=v.decompressed.getContentWorker().pipe(new h);k.on("error",function(_){g(_)}).on("end",function(){k.streamInfo.crc32!==v.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}i.exports=function(v,m){var g=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),f.isNode&&f.isStream(v)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,m.optimizedBinaryString,m.base64).then(function(k){var _=new u(m);return _.load(k),_}).then(function(k){var _=[c.Promise.resolve(k)],A=k.files;if(m.checkCRC32)for(var S=0;S<A.length;S++)_.push(b(A[S]));return c.Promise.all(_)}).then(function(k){for(var _=k.shift(),A=_.files,S=0;S<A.length;S++){var C=A[S],T=C.fileNameStr,$=s.resolve(C.fileNameStr);g.file($,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:m.createFolders}),C.dir||(g.file($).unsafeOriginalName=T)}return _.zipComment.length&&(g.comment=_.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),c=r("../stream/GenericWorker");function d(u,h){c.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(d,c),d.prototype._bindStream=function(u){var h=this;(this._stream=u).pause(),u.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},d.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function c(d,u,h){s.call(this,u),this._helper=d;var f=this;d.on("data",function(b,v){f.push(b)||f._helper.pause(),h&&h(v)}).on("error",function(b){f.emit("error",b)}).on("end",function(){f.push(null)})}r("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},i.exports=c},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(T,$,q){var W,oe=d.getTypeOf($),H=d.extend(q||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(T=A(T)),H.createFolders&&(W=_(T))&&S.call(this,W,!0);var pe=oe==="string"&&H.binary===!1&&H.base64===!1;q&&q.binary!==void 0||(H.binary=!pe),($ instanceof b&&$.uncompressedSize===0||H.dir||!$||$.length===0)&&(H.base64=!1,H.binary=!0,$="",H.compression="STORE",oe="string");var we=null;we=$ instanceof b||$ instanceof u?$:g.isNode&&g.isStream($)?new k(T,$):d.prepareContent(T,$,H.binary,H.optimizedBinaryString,H.base64);var R=new v(T,we,H);this.files[T]=R}var c=r("./utf8"),d=r("./utils"),u=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),b=r("./compressedObject"),v=r("./zipObject"),m=r("./generate"),g=r("./nodejsUtils"),k=r("./nodejs/NodejsStreamInputAdapter"),_=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var $=T.lastIndexOf("/");return 0<$?T.substring(0,$):""},A=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},S=function(T,$){return $=$!==void 0?$:f.createFolders,T=A(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:$}),this.files[T]};function C(T){return Object.prototype.toString.call(T)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var $,q,W;for($ in this.files)W=this.files[$],(q=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&T(q,W)},filter:function(T){var $=[];return this.forEach(function(q,W){T(q,W)&&$.push(W)}),$},file:function(T,$,q){if(arguments.length!==1)return T=this.root+T,s.call(this,T,$,q),this;if(C(T)){var W=T;return this.filter(function(H,pe){return!pe.dir&&W.test(H)})}var oe=this.files[this.root+T];return oe&&!oe.dir?oe:null},folder:function(T){if(!T)return this;if(C(T))return this.filter(function(oe,H){return H.dir&&T.test(oe)});var $=this.root+T,q=S.call(this,$),W=this.clone();return W.root=q.name,W},remove:function(T){T=this.root+T;var $=this.files[T];if($||(T.slice(-1)!=="/"&&(T+="/"),$=this.files[T]),$&&!$.dir)delete this.files[T];else for(var q=this.filter(function(oe,H){return H.name.slice(0,T.length)===T}),W=0;W<q.length;W++)delete this.files[q[W].name];return this},generate:function(T){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var $,q={};try{if((q=d.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");d.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var W=q.comment||this.comment||"";$=m.generateWorker(this,q,W)}catch(oe){($=new u("error")).error(oe)}return new h($,q.type||"string",q.mimeType)},generateAsync:function(T,$){return this.generateInternalStream(T).accumulate($)},generateNodeStream:function(T,$){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream($)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function c(d){s.call(this,d);for(var u=0;u<this.data.length;u++)d[u]=255&d[u]}r("../utils").inherits(c,s),c.prototype.byteAt=function(d){return this.data[this.zero+d]},c.prototype.lastIndexOfSignature=function(d){for(var u=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),b=d.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===u&&this.data[v+1]===h&&this.data[v+2]===f&&this.data[v+3]===b)return v-this.zero;return-1},c.prototype.readAndCheckSignature=function(d){var u=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),b=d.charCodeAt(3),v=this.readData(4);return u===v[0]&&h===v[1]&&f===v[2]&&b===v[3]},c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},i.exports=c},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function c(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(d){},readInt:function(d){var u,h=0;for(this.checkOffset(d),u=this.index+d-1;u>=this.index;u--)h=(h<<8)+this.byteAt(u);return this.index+=d,h},readString:function(d){return s.transformTo("string",this.readData(d))},readData:function(d){},lastIndexOfSignature:function(d){},readAndCheckSignature:function(d){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},i.exports=c},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.readData=function(d){this.checkOffset(d);var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},i.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},c.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},c.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},c.prototype.readData=function(d){this.checkOffset(d);var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},i.exports=c},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},i.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),c=r("../support"),d=r("./ArrayReader"),u=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");i.exports=function(b){var v=s.getTypeOf(b);return s.checkSupport(v),v!=="string"||c.uint8array?v==="nodebuffer"?new h(b):c.uint8array?new f(s.transformTo("uint8array",b)):new d(s.transformTo("array",b)):new u(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),c=r("../utils");function d(u){s.call(this,"ConvertWorker to "+u),this.destType=u}c.inherits(d,s),d.prototype.processChunk=function(u){this.push({data:c.transformTo(this.destType,u.data),meta:u.meta})},i.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),c=r("../crc32");function d(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(d,s),d.prototype.processChunk=function(u){this.streamInfo.crc32=c(u.data,this.streamInfo.crc32||0),this.push(u)},i.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function d(u){c.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(d,c),d.prototype.processChunk=function(u){if(u){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+u.data.length}c.prototype.processChunk.call(this,u)},i.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function d(u){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(d,c),d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,h);break;case"uint8array":u=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":u=this.data.slice(this.index,h)}return this.index=h,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,d){return this._listeners[c].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,d){if(this._listeners[c])for(var u=0;u<this._listeners[c].length;u++)this._listeners[c][u].call(this,d)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var d=this;return c.on("data",function(u){d.processChunk(u)}),c.on("end",function(){d.end()}),c.on("error",function(u){d.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,d){return this.extraStreamInfo[c]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./ConvertWorker"),d=r("./GenericWorker"),u=r("../base64"),h=r("../support"),f=r("../external"),b=null;if(h.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(g,k){return new f.Promise(function(_,A){var S=[],C=g._internalType,T=g._outputType,$=g._mimeType;g.on("data",function(q,W){S.push(q),k&&k(W)}).on("error",function(q){S=[],A(q)}).on("end",function(){try{_((function(q,W,oe){switch(q){case"blob":return s.newBlob(s.transformTo("arraybuffer",W),oe);case"base64":return u.encode(W);default:return s.transformTo(q,W)}})(T,(function(q,W){var oe,H=0,pe=null,we=0;for(oe=0;oe<W.length;oe++)we+=W[oe].length;switch(q){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(pe=new Uint8Array(we),oe=0;oe<W.length;oe++)pe.set(W[oe],H),H+=W[oe].length;return pe;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+q+"'")}})(C,S),$))}catch(q){A(q)}S=[]}).resume()})}function m(g,k,_){var A=k;switch(k){case"blob":case"arraybuffer":A="uint8array";break;case"base64":A="string"}try{this._internalType=A,this._outputType=k,this._mimeType=_,s.checkSupport(A),this._worker=g.pipe(new c(A)),g.lock()}catch(S){this._worker=new d("error"),this._worker.error(S)}}m.prototype={accumulate:function(g){return v(this,g)},on:function(g,k){var _=this;return g==="data"?this._worker.on(g,function(A){k.call(_,A.data,A.meta)}):this._worker.on(g,function(){s.delay(k,arguments,_)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},g)}},i.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),c=r("./support"),d=r("./nodejsUtils"),u=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function b(){u.call(this,"utf-8 decode"),this.leftOver=null}function v(){u.call(this,"utf-8 encode")}a.utf8encode=function(m){return c.nodebuffer?d.newBufferFrom(m,"utf-8"):(function(g){var k,_,A,S,C,T=g.length,$=0;for(S=0;S<T;S++)(64512&(_=g.charCodeAt(S)))==55296&&S+1<T&&(64512&(A=g.charCodeAt(S+1)))==56320&&(_=65536+(_-55296<<10)+(A-56320),S++),$+=_<128?1:_<2048?2:_<65536?3:4;for(k=c.uint8array?new Uint8Array($):new Array($),S=C=0;C<$;S++)(64512&(_=g.charCodeAt(S)))==55296&&S+1<T&&(64512&(A=g.charCodeAt(S+1)))==56320&&(_=65536+(_-55296<<10)+(A-56320),S++),_<128?k[C++]=_:(_<2048?k[C++]=192|_>>>6:(_<65536?k[C++]=224|_>>>12:(k[C++]=240|_>>>18,k[C++]=128|_>>>12&63),k[C++]=128|_>>>6&63),k[C++]=128|63&_);return k})(m)},a.utf8decode=function(m){return c.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(g){var k,_,A,S,C=g.length,T=new Array(2*C);for(k=_=0;k<C;)if((A=g[k++])<128)T[_++]=A;else if(4<(S=h[A]))T[_++]=65533,k+=S-1;else{for(A&=S===2?31:S===3?15:7;1<S&&k<C;)A=A<<6|63&g[k++],S--;1<S?T[_++]=65533:A<65536?T[_++]=A:(A-=65536,T[_++]=55296|A>>10&1023,T[_++]=56320|1023&A)}return T.length!==_&&(T.subarray?T=T.subarray(0,_):T.length=_),s.applyFromCharCode(T)})(m=s.transformTo(c.uint8array?"uint8array":"array",m))},s.inherits(b,u),b.prototype.processChunk=function(m){var g=s.transformTo(c.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var k=g;(g=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),g.set(k,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var _=(function(S,C){var T;for((C=C||S.length)>S.length&&(C=S.length),T=C-1;0<=T&&(192&S[T])==128;)T--;return T<0||T===0?C:T+h[S[T]]>C?T:C})(g),A=g;_!==g.length&&(c.uint8array?(A=g.subarray(0,_),this.leftOver=g.subarray(_,g.length)):(A=g.slice(0,_),this.leftOver=g.slice(_,g.length))),this.push({data:a.utf8decode(A),meta:m.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(v,u),v.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),c=r("./base64"),d=r("./nodejsUtils"),u=r("set-immediate-shim"),h=r("./external");function f(_){return _}function b(_,A){for(var S=0;S<_.length;++S)A[S]=255&_.charCodeAt(S);return A}a.newBlob=function(_,A){a.checkSupport("blob");try{return new Blob([_],{type:A})}catch{try{var S=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return S.append(_),S.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(_,A,S){var C=[],T=0,$=_.length;if($<=S)return String.fromCharCode.apply(null,_);for(;T<$;)A==="array"||A==="nodebuffer"?C.push(String.fromCharCode.apply(null,_.slice(T,Math.min(T+S,$)))):C.push(String.fromCharCode.apply(null,_.subarray(T,Math.min(T+S,$)))),T+=S;return C.join("")},stringifyByChar:function(_){for(var A="",S=0;S<_.length;S++)A+=String.fromCharCode(_[S]);return A},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function m(_){var A=65536,S=a.getTypeOf(_),C=!0;if(S==="uint8array"?C=v.applyCanBeUsed.uint8array:S==="nodebuffer"&&(C=v.applyCanBeUsed.nodebuffer),C)for(;1<A;)try{return v.stringifyByChunk(_,S,A)}catch{A=Math.floor(A/2)}return v.stringifyByChar(_)}function g(_,A){for(var S=0;S<_.length;S++)A[S]=_[S];return A}a.applyFromCharCode=m;var k={};k.string={string:f,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return k.string.uint8array(_).buffer},uint8array:function(_){return b(_,new Uint8Array(_.length))},nodebuffer:function(_){return b(_,d.allocBuffer(_.length))}},k.array={string:m,array:f,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(_)}},k.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return g(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:f,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(new Uint8Array(_))}},k.uint8array={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:f,nodebuffer:function(_){return d.newBufferFrom(_)}},k.nodebuffer={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return k.nodebuffer.uint8array(_).buffer},uint8array:function(_){return g(_,new Uint8Array(_.length))},nodebuffer:f},a.transformTo=function(_,A){return A=A||"",_?(a.checkSupport(_),k[a.getTypeOf(A)][_](A)):A},a.resolve=function(_){for(var A=_.split("/"),S=[],C=0;C<A.length;C++){var T=A[C];T==="."||T===""&&C!==0&&C!==A.length-1||(T===".."?S.pop():S.push(T))}return S.join("/")},a.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&d.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(_){var A,S,C="";for(S=0;S<(_||"").length;S++)C+="\\x"+((A=_.charCodeAt(S))<16?"0":"")+A.toString(16).toUpperCase();return C},a.delay=function(_,A,S){u(function(){_.apply(S||null,A||[])})},a.inherits=function(_,A){function S(){}S.prototype=A.prototype,_.prototype=new S},a.extend=function(){var _,A,S={};for(_=0;_<arguments.length;_++)for(A in arguments[_])arguments[_].hasOwnProperty(A)&&S[A]===void 0&&(S[A]=arguments[_][A]);return S},a.prepareContent=function(_,A,S,C,T){return h.Promise.resolve(A).then(function($){return s.blob&&($ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call($))!==-1)&&typeof FileReader<"u"?new h.Promise(function(q,W){var oe=new FileReader;oe.onload=function(H){q(H.target.result)},oe.onerror=function(H){W(H.target.error)},oe.readAsArrayBuffer($)}):$}).then(function($){var q=a.getTypeOf($);return q?(q==="arraybuffer"?$=a.transformTo("uint8array",$):q==="string"&&(T?$=c.decode($):S&&C!==!0&&($=(function(W){return b(W,s.uint8array?new Uint8Array(W.length):new Array(W.length))})($))),$):h.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),d=r("./signature"),u=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(b){this.files=[],this.loadOptions=b}f.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(v)+", expected "+c.pretty(b)+")")}},isSignature:function(b,v){var m=this.reader.index;this.reader.setIndex(b);var g=this.reader.readString(4)===v;return this.reader.setIndex(m),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",m=c.transformTo(v,b);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,v,m,g=this.zip64EndOfCentralSize-44;0<g;)b=this.reader.readInt(2),v=this.reader.readInt(4),m=this.reader.readData(v),this.zip64ExtensibleData[b]={id:b,length:v,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,v;for(b=0;b<this.files.length;b++)v=this.files[b],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(b=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var v=b;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var g=v-m;if(0<g)this.isSignature(v,d.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),d=r("./compressedObject"),u=r("./crc32"),h=r("./utf8"),f=r("./compressions"),b=r("./support");function v(m,g){this.options=m,this.loadOptions=g}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var g,k;if(m.skip(22),this.fileNameLength=m.readInt(2),k=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(_){for(var A in f)if(f.hasOwnProperty(A)&&f[A].magic===_)return f[A];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,g,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var g=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(g),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(m){var g,k,_,A=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<A;)g=m.readInt(2),k=m.readInt(2),_=m.readData(k),this.extraFields[g]={id:g,length:k,value:_};m.setIndex(A)},handleUTF8:function(){var m=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var k=c.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var A=c.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(A)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var g=s(m.value);return g.readInt(1)!==1||u(this.fileName)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var g=s(m.value);return g.readInt(1)!==1||u(this.fileComment)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null}},i.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(g,k,_){this.name=g,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=k,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var c=r("./stream/StreamHelper"),d=r("./stream/DataWorker"),u=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(g){var k=null,_="string";try{if(!g)throw new Error("No output type specified.");var A=(_=g.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),k=this._decompressWorker();var S=!this._dataBinary;S&&!A&&(k=k.pipe(new u.Utf8EncodeWorker)),!S&&A&&(k=k.pipe(new u.Utf8DecodeWorker))}catch(C){(k=new f("error")).error(C)}return new c(k,_,"")},async:function(g,k){return this.internalStream(g).accumulate(k)},nodeStream:function(g,k){return this.internalStream(g||"nodebuffer").toNodejsStream(k)},_compressWorker:function(g,k){if(this._data instanceof h&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new u.Utf8EncodeWorker)),h.createWorkerFrom(_,g,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new d(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<b.length;m++)s.prototype[b[m]]=v;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var c,d,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var h=0,f=new u(g),b=s.document.createTextNode("");f.observe(b,{characterData:!0}),c=function(){b.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var k=s.document.createElement("script");k.onreadystatechange=function(){g(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},s.document.documentElement.appendChild(k)}:function(){setTimeout(g,0)};else{var v=new s.MessageChannel;v.port1.onmessage=g,c=function(){v.port2.postMessage(0)}}var m=[];function g(){var k,_;d=!0;for(var A=m.length;A;){for(_=m,m=[],k=-1;++k<A;)_[k]();A=m.length}d=!1}i.exports=function(k){m.push(k)!==1||d||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function c(){}var d={},u=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function b(A){if(typeof A!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,A!==c&&k(this,A)}function v(A,S,C){this.promise=A,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function m(A,S,C){s(function(){var T;try{T=S(C)}catch($){return d.reject(A,$)}T===A?d.reject(A,new TypeError("Cannot resolve promise with itself")):d.resolve(A,T)})}function g(A){var S=A&&A.then;if(A&&(typeof A=="object"||typeof A=="function")&&typeof S=="function")return function(){S.apply(A,arguments)}}function k(A,S){var C=!1;function T(W){C||(C=!0,d.reject(A,W))}function $(W){C||(C=!0,d.resolve(A,W))}var q=_(function(){S($,T)});q.status==="error"&&T(q.value)}function _(A,S){var C={};try{C.value=A(S),C.status="success"}catch(T){C.status="error",C.value=T}return C}(i.exports=b).prototype.finally=function(A){if(typeof A!="function")return this;var S=this.constructor;return this.then(function(C){return S.resolve(A()).then(function(){return C})},function(C){return S.resolve(A()).then(function(){throw C})})},b.prototype.catch=function(A){return this.then(null,A)},b.prototype.then=function(A,S){if(typeof A!="function"&&this.state===h||typeof S!="function"&&this.state===u)return this;var C=new this.constructor(c);return this.state!==f?m(C,this.state===h?A:S,this.outcome):this.queue.push(new v(C,A,S)),C},v.prototype.callFulfilled=function(A){d.resolve(this.promise,A)},v.prototype.otherCallFulfilled=function(A){m(this.promise,this.onFulfilled,A)},v.prototype.callRejected=function(A){d.reject(this.promise,A)},v.prototype.otherCallRejected=function(A){m(this.promise,this.onRejected,A)},d.resolve=function(A,S){var C=_(g,S);if(C.status==="error")return d.reject(A,C.value);var T=C.value;if(T)k(A,T);else{A.state=h,A.outcome=S;for(var $=-1,q=A.queue.length;++$<q;)A.queue[$].callFulfilled(S)}return A},d.reject=function(A,S){A.state=u,A.outcome=S;for(var C=-1,T=A.queue.length;++C<T;)A.queue[C].callRejected(S);return A},b.resolve=function(A){return A instanceof this?A:d.resolve(new this(c),A)},b.reject=function(A){var S=new this(c);return d.reject(S,A)},b.all=function(A){var S=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=A.length,T=!1;if(!C)return this.resolve([]);for(var $=new Array(C),q=0,W=-1,oe=new this(c);++W<C;)H(A[W],W);return oe;function H(pe,we){S.resolve(pe).then(function(R){$[we]=R,++q!==C||T||(T=!0,d.resolve(oe,$))},function(R){T||(T=!0,d.reject(oe,R))})}},b.race=function(A){var S=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=A.length,T=!1;if(!C)return this.resolve([]);for(var $=-1,q=new this(c);++$<C;)W=A[$],S.resolve(W).then(function(oe){T||(T=!0,d.resolve(q,oe))},function(oe){T||(T=!0,d.reject(q,oe))});var W;return q}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),c=r("./utils/common"),d=r("./utils/strings"),u=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,b=0,v=-1,m=0,g=8;function k(A){if(!(this instanceof k))return new k(A);this.options=c.assign({level:v,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},A||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(C!==b)throw new Error(u[C]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var T;if(T=typeof S.dictionary=="string"?d.string2buf(S.dictionary):f.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(C=s.deflateSetDictionary(this.strm,T))!==b)throw new Error(u[C]);this._dict_set=!0}}function _(A,S){var C=new k(S);if(C.push(A,!0),C.err)throw C.msg||u[C.err];return C.result}k.prototype.push=function(A,S){var C,T,$=this.strm,q=this.options.chunkSize;if(this.ended)return!1;T=S===~~S?S:S===!0?4:0,typeof A=="string"?$.input=d.string2buf(A):f.call(A)==="[object ArrayBuffer]"?$.input=new Uint8Array(A):$.input=A,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new c.Buf8(q),$.next_out=0,$.avail_out=q),(C=s.deflate($,T))!==1&&C!==b)return this.onEnd(C),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(c.shrinkBuf($.output,$.next_out))):this.onData(c.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&C!==1);return T===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===b):T!==2||(this.onEnd(b),!($.avail_out=0))},k.prototype.onData=function(A){this.chunks.push(A)},k.prototype.onEnd=function(A){A===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg},a.Deflate=k,a.deflate=_,a.deflateRaw=function(A,S){return(S=S||{}).raw=!0,_(A,S)},a.gzip=function(A,S){return(S=S||{}).gzip=!0,_(A,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),c=r("./utils/common"),d=r("./utils/strings"),u=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),b=r("./zlib/gzheader"),v=Object.prototype.toString;function m(k){if(!(this instanceof m))return new m(k);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},k||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||k&&k.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var A=s.inflateInit2(this.strm,_.windowBits);if(A!==u.Z_OK)throw new Error(h[A]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function g(k,_){var A=new m(_);if(A.push(k,!0),A.err)throw A.msg||h[A.err];return A.result}m.prototype.push=function(k,_){var A,S,C,T,$,q,W=this.strm,oe=this.options.chunkSize,H=this.options.dictionary,pe=!1;if(this.ended)return!1;S=_===~~_?_:_===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof k=="string"?W.input=d.binstring2buf(k):v.call(k)==="[object ArrayBuffer]"?W.input=new Uint8Array(k):W.input=k,W.next_in=0,W.avail_in=W.input.length;do{if(W.avail_out===0&&(W.output=new c.Buf8(oe),W.next_out=0,W.avail_out=oe),(A=s.inflate(W,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&H&&(q=typeof H=="string"?d.string2buf(H):v.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,A=s.inflateSetDictionary(this.strm,q)),A===u.Z_BUF_ERROR&&pe===!0&&(A=u.Z_OK,pe=!1),A!==u.Z_STREAM_END&&A!==u.Z_OK)return this.onEnd(A),!(this.ended=!0);W.next_out&&(W.avail_out!==0&&A!==u.Z_STREAM_END&&(W.avail_in!==0||S!==u.Z_FINISH&&S!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=d.utf8border(W.output,W.next_out),T=W.next_out-C,$=d.buf2string(W.output,C),W.next_out=T,W.avail_out=oe-T,T&&c.arraySet(W.output,W.output,C,T,0),this.onData($)):this.onData(c.shrinkBuf(W.output,W.next_out)))),W.avail_in===0&&W.avail_out===0&&(pe=!0)}while((0<W.avail_in||W.avail_out===0)&&A!==u.Z_STREAM_END);return A===u.Z_STREAM_END&&(S=u.Z_FINISH),S===u.Z_FINISH?(A=s.inflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===u.Z_OK):S!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(W.avail_out=0))},m.prototype.onData=function(k){this.chunks.push(k)},m.prototype.onEnd=function(k){k===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},a.Inflate=m,a.inflate=g,a.inflateRaw=function(k,_){return(_=_||{}).raw=!0,g(k,_)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(u){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var b in f)f.hasOwnProperty(b)&&(u[b]=f[b])}}return u},a.shrinkBuf=function(u,h){return u.length===h?u:u.subarray?u.subarray(0,h):(u.length=h,u)};var c={arraySet:function(u,h,f,b,v){if(h.subarray&&u.subarray)u.set(h.subarray(f,f+b),v);else for(var m=0;m<b;m++)u[v+m]=h[f+m]},flattenChunks:function(u){var h,f,b,v,m,g;for(h=b=0,f=u.length;h<f;h++)b+=u[h].length;for(g=new Uint8Array(b),h=v=0,f=u.length;h<f;h++)m=u[h],g.set(m,v),v+=m.length;return g}},d={arraySet:function(u,h,f,b,v){for(var m=0;m<b;m++)u[v+m]=h[f+m]},flattenChunks:function(u){return[].concat.apply([],u)}};a.setTyped=function(u){u?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,d))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),c=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var u=new s.Buf8(256),h=0;h<256;h++)u[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(b,v){if(v<65537&&(b.subarray&&d||!b.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(b,v));for(var m="",g=0;g<v;g++)m+=String.fromCharCode(b[g]);return m}u[254]=u[254]=1,a.string2buf=function(b){var v,m,g,k,_,A=b.length,S=0;for(k=0;k<A;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<A&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),S+=m<128?1:m<2048?2:m<65536?3:4;for(v=new s.Buf8(S),k=_=0;_<S;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<A&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),m<128?v[_++]=m:(m<2048?v[_++]=192|m>>>6:(m<65536?v[_++]=224|m>>>12:(v[_++]=240|m>>>18,v[_++]=128|m>>>12&63),v[_++]=128|m>>>6&63),v[_++]=128|63&m);return v},a.buf2binstring=function(b){return f(b,b.length)},a.binstring2buf=function(b){for(var v=new s.Buf8(b.length),m=0,g=v.length;m<g;m++)v[m]=b.charCodeAt(m);return v},a.buf2string=function(b,v){var m,g,k,_,A=v||b.length,S=new Array(2*A);for(m=g=0;m<A;)if((k=b[m++])<128)S[g++]=k;else if(4<(_=u[k]))S[g++]=65533,m+=_-1;else{for(k&=_===2?31:_===3?15:7;1<_&&m<A;)k=k<<6|63&b[m++],_--;1<_?S[g++]=65533:k<65536?S[g++]=k:(k-=65536,S[g++]=55296|k>>10&1023,S[g++]=56320|1023&k)}return f(S,g)},a.utf8border=function(b,v){var m;for((v=v||b.length)>b.length&&(v=b.length),m=v-1;0<=m&&(192&b[m])==128;)m--;return m<0||m===0?v:m+u[b[m]]>v?m:v}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,c,d,u){for(var h=65535&s|0,f=s>>>16&65535|0,b=0;d!==0;){for(d-=b=2e3<d?2e3:d;f=f+(h=h+c[u++]|0)|0,--b;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var c,d=[],u=0;u<256;u++){c=u;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;d[u]=c}return d})();i.exports=function(c,d,u,h){var f=s,b=h+u;c^=-1;for(var v=h;v<b;v++)c=c>>>8^f[255&(c^d[v])];return-1^c}},{}],46:[function(r,i,a){"use strict";var s,c=r("../utils/common"),d=r("./trees"),u=r("./adler32"),h=r("./crc32"),f=r("./messages"),b=0,v=4,m=0,g=-2,k=-1,_=4,A=2,S=8,C=9,T=286,$=30,q=19,W=2*T+1,oe=15,H=3,pe=258,we=pe+H+1,R=42,K=113,E=1,J=2,Ie=3,ie=4;function Se(w,Q){return w.msg=f[Q],Q}function ae(w){return(w<<1)-(4<w?9:0)}function Ee(w){for(var Q=w.length;0<=--Q;)w[Q]=0}function F(w){var Q=w.state,V=Q.pending;V>w.avail_out&&(V=w.avail_out),V!==0&&(c.arraySet(w.output,Q.pending_buf,Q.pending_out,V,w.next_out),w.next_out+=V,Q.pending_out+=V,w.total_out+=V,w.avail_out-=V,Q.pending-=V,Q.pending===0&&(Q.pending_out=0))}function G(w,Q){d._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,Q),w.block_start=w.strstart,F(w.strm)}function Ae(w,Q){w.pending_buf[w.pending++]=Q}function ge(w,Q){w.pending_buf[w.pending++]=Q>>>8&255,w.pending_buf[w.pending++]=255&Q}function de(w,Q){var V,O,I=w.max_chain_length,z=w.strstart,re=w.prev_length,ne=w.nice_match,N=w.strstart>w.w_size-we?w.strstart-(w.w_size-we):0,ce=w.window,ve=w.w_mask,ue=w.prev,Me=w.strstart+pe,je=ce[z+re-1],He=ce[z+re];w.prev_length>=w.good_match&&(I>>=2),ne>w.lookahead&&(ne=w.lookahead);do if(ce[(V=Q)+re]===He&&ce[V+re-1]===je&&ce[V]===ce[z]&&ce[++V]===ce[z+1]){z+=2,V++;do;while(ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&ce[++z]===ce[++V]&&z<Me);if(O=pe-(Me-z),z=Me-pe,re<O){if(w.match_start=Q,ne<=(re=O))break;je=ce[z+re-1],He=ce[z+re]}}while((Q=ue[Q&ve])>N&&--I!=0);return re<=w.lookahead?re:w.lookahead}function Ye(w){var Q,V,O,I,z,re,ne,N,ce,ve,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-we)){for(c.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,Q=V=w.hash_size;O=w.head[--Q],w.head[Q]=ue<=O?O-ue:0,--V;);for(Q=V=ue;O=w.prev[--Q],w.prev[Q]=ue<=O?O-ue:0,--V;);I+=ue}if(w.strm.avail_in===0)break;if(re=w.strm,ne=w.window,N=w.strstart+w.lookahead,ce=I,ve=void 0,ve=re.avail_in,ce<ve&&(ve=ce),V=ve===0?0:(re.avail_in-=ve,c.arraySet(ne,re.input,re.next_in,ve,N),re.state.wrap===1?re.adler=u(re.adler,ne,ve,N):re.state.wrap===2&&(re.adler=h(re.adler,ne,ve,N)),re.next_in+=ve,re.total_in+=ve,ve),w.lookahead+=V,w.lookahead+w.insert>=H)for(z=w.strstart-w.insert,w.ins_h=w.window[z],w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+H-1])&w.hash_mask,w.prev[z&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=z,z++,w.insert--,!(w.lookahead+w.insert<H)););}while(w.lookahead<we&&w.strm.avail_in!==0)}function kt(w,Q){for(var V,O;;){if(w.lookahead<we){if(Ye(w),w.lookahead<we&&Q===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),V!==0&&w.strstart-V<=w.w_size-we&&(w.match_length=de(w,V)),w.match_length>=H)if(O=d._tr_tally(w,w.strstart-w.match_start,w.match_length-H),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=H){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else O=d._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(O&&(G(w,!1),w.strm.avail_out===0))return E}return w.insert=w.strstart<H-1?w.strstart:H-1,Q===v?(G(w,!0),w.strm.avail_out===0?Ie:ie):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?E:J}function De(w,Q){for(var V,O,I;;){if(w.lookahead<we){if(Ye(w),w.lookahead<we&&Q===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=H-1,V!==0&&w.prev_length<w.max_lazy_match&&w.strstart-V<=w.w_size-we&&(w.match_length=de(w,V),w.match_length<=5&&(w.strategy===1||w.match_length===H&&4096<w.strstart-w.match_start)&&(w.match_length=H-1)),w.prev_length>=H&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-H,O=d._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-H),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=H-1,w.strstart++,O&&(G(w,!1),w.strm.avail_out===0))return E}else if(w.match_available){if((O=d._tr_tally(w,0,w.window[w.strstart-1]))&&G(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return E}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(O=d._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<H-1?w.strstart:H-1,Q===v?(G(w,!0),w.strm.avail_out===0?Ie:ie):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?E:J}function We(w,Q,V,O,I){this.good_length=w,this.max_lazy=Q,this.nice_length=V,this.max_chain=O,this.func=I}function Et(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*W),this.dyn_dtree=new c.Buf16(2*(2*$+1)),this.bl_tree=new c.Buf16(2*(2*q+1)),Ee(this.dyn_ltree),Ee(this.dyn_dtree),Ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(oe+1),this.heap=new c.Buf16(2*T+1),Ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*T+1),Ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function rt(w){var Q;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=A,(Q=w.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?R:K,w.adler=Q.wrap===2?0:1,Q.last_flush=b,d._tr_init(Q),m):Se(w,g)}function Gt(w){var Q=rt(w);return Q===m&&(function(V){V.window_size=2*V.w_size,Ee(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=H-1,V.match_available=0,V.ins_h=0})(w.state),Q}function Yt(w,Q,V,O,I,z){if(!w)return g;var re=1;if(Q===k&&(Q=6),O<0?(re=0,O=-O):15<O&&(re=2,O-=16),I<1||C<I||V!==S||O<8||15<O||Q<0||9<Q||z<0||_<z)return Se(w,g);O===8&&(O=9);var ne=new Et;return(w.state=ne).strm=w,ne.wrap=re,ne.gzhead=null,ne.w_bits=O,ne.w_size=1<<ne.w_bits,ne.w_mask=ne.w_size-1,ne.hash_bits=I+7,ne.hash_size=1<<ne.hash_bits,ne.hash_mask=ne.hash_size-1,ne.hash_shift=~~((ne.hash_bits+H-1)/H),ne.window=new c.Buf8(2*ne.w_size),ne.head=new c.Buf16(ne.hash_size),ne.prev=new c.Buf16(ne.w_size),ne.lit_bufsize=1<<I+6,ne.pending_buf_size=4*ne.lit_bufsize,ne.pending_buf=new c.Buf8(ne.pending_buf_size),ne.d_buf=1*ne.lit_bufsize,ne.l_buf=3*ne.lit_bufsize,ne.level=Q,ne.strategy=z,ne.method=V,Gt(w)}s=[new We(0,0,0,0,function(w,Q){var V=65535;for(V>w.pending_buf_size-5&&(V=w.pending_buf_size-5);;){if(w.lookahead<=1){if(Ye(w),w.lookahead===0&&Q===b)return E;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var O=w.block_start+V;if((w.strstart===0||w.strstart>=O)&&(w.lookahead=w.strstart-O,w.strstart=O,G(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-we&&(G(w,!1),w.strm.avail_out===0))return E}return w.insert=0,Q===v?(G(w,!0),w.strm.avail_out===0?Ie:ie):(w.strstart>w.block_start&&(G(w,!1),w.strm.avail_out),E)}),new We(4,4,8,4,kt),new We(4,5,16,8,kt),new We(4,6,32,32,kt),new We(4,4,16,16,De),new We(8,16,32,32,De),new We(8,16,128,128,De),new We(8,32,128,256,De),new We(32,128,258,1024,De),new We(32,258,258,4096,De)],a.deflateInit=function(w,Q){return Yt(w,Q,S,15,8,0)},a.deflateInit2=Yt,a.deflateReset=Gt,a.deflateResetKeep=rt,a.deflateSetHeader=function(w,Q){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=Q,m):g},a.deflate=function(w,Q){var V,O,I,z;if(!w||!w.state||5<Q||Q<0)return w?Se(w,g):g;if(O=w.state,!w.output||!w.input&&w.avail_in!==0||O.status===666&&Q!==v)return Se(w,w.avail_out===0?-5:g);if(O.strm=w,V=O.last_flush,O.last_flush=Q,O.status===R)if(O.wrap===2)w.adler=0,Ae(O,31),Ae(O,139),Ae(O,8),O.gzhead?(Ae(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Ae(O,255&O.gzhead.time),Ae(O,O.gzhead.time>>8&255),Ae(O,O.gzhead.time>>16&255),Ae(O,O.gzhead.time>>24&255),Ae(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Ae(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Ae(O,255&O.gzhead.extra.length),Ae(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(w.adler=h(w.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Ae(O,3),O.status=K);else{var re=S+(O.w_bits-8<<4)<<8;re|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(re|=32),re+=31-re%31,O.status=K,ge(O,re),O.strstart!==0&&(ge(O,w.adler>>>16),ge(O,65535&w.adler)),w.adler=1}if(O.status===69)if(O.gzhead.extra){for(I=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending!==O.pending_buf_size));)Ae(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Ae(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),z===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Ae(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),z===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&F(w),O.pending+2<=O.pending_buf_size&&(Ae(O,255&w.adler),Ae(O,w.adler>>8&255),w.adler=0,O.status=K)):O.status=K),O.pending!==0){if(F(w),w.avail_out===0)return O.last_flush=-1,m}else if(w.avail_in===0&&ae(Q)<=ae(V)&&Q!==v)return Se(w,-5);if(O.status===666&&w.avail_in!==0)return Se(w,-5);if(w.avail_in!==0||O.lookahead!==0||Q!==b&&O.status!==666){var ne=O.strategy===2?(function(N,ce){for(var ve;;){if(N.lookahead===0&&(Ye(N),N.lookahead===0)){if(ce===b)return E;break}if(N.match_length=0,ve=d._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,ve&&(G(N,!1),N.strm.avail_out===0))return E}return N.insert=0,ce===v?(G(N,!0),N.strm.avail_out===0?Ie:ie):N.last_lit&&(G(N,!1),N.strm.avail_out===0)?E:J})(O,Q):O.strategy===3?(function(N,ce){for(var ve,ue,Me,je,He=N.window;;){if(N.lookahead<=pe){if(Ye(N),N.lookahead<=pe&&ce===b)return E;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=H&&0<N.strstart&&(ue=He[Me=N.strstart-1])===He[++Me]&&ue===He[++Me]&&ue===He[++Me]){je=N.strstart+pe;do;while(ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&ue===He[++Me]&&Me<je);N.match_length=pe-(je-Me),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=H?(ve=d._tr_tally(N,1,N.match_length-H),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(ve=d._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),ve&&(G(N,!1),N.strm.avail_out===0))return E}return N.insert=0,ce===v?(G(N,!0),N.strm.avail_out===0?Ie:ie):N.last_lit&&(G(N,!1),N.strm.avail_out===0)?E:J})(O,Q):s[O.level].func(O,Q);if(ne!==Ie&&ne!==ie||(O.status=666),ne===E||ne===Ie)return w.avail_out===0&&(O.last_flush=-1),m;if(ne===J&&(Q===1?d._tr_align(O):Q!==5&&(d._tr_stored_block(O,0,0,!1),Q===3&&(Ee(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),F(w),w.avail_out===0))return O.last_flush=-1,m}return Q!==v?m:O.wrap<=0?1:(O.wrap===2?(Ae(O,255&w.adler),Ae(O,w.adler>>8&255),Ae(O,w.adler>>16&255),Ae(O,w.adler>>24&255),Ae(O,255&w.total_in),Ae(O,w.total_in>>8&255),Ae(O,w.total_in>>16&255),Ae(O,w.total_in>>24&255)):(ge(O,w.adler>>>16),ge(O,65535&w.adler)),F(w),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?m:1)},a.deflateEnd=function(w){var Q;return w&&w.state?(Q=w.state.status)!==R&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==K&&Q!==666?Se(w,g):(w.state=null,Q===K?Se(w,-3):m):g},a.deflateSetDictionary=function(w,Q){var V,O,I,z,re,ne,N,ce,ve=Q.length;if(!w||!w.state||(z=(V=w.state).wrap)===2||z===1&&V.status!==R||V.lookahead)return g;for(z===1&&(w.adler=u(w.adler,Q,ve,0)),V.wrap=0,ve>=V.w_size&&(z===0&&(Ee(V.head),V.strstart=0,V.block_start=0,V.insert=0),ce=new c.Buf8(V.w_size),c.arraySet(ce,Q,ve-V.w_size,V.w_size,0),Q=ce,ve=V.w_size),re=w.avail_in,ne=w.next_in,N=w.input,w.avail_in=ve,w.next_in=0,w.input=Q,Ye(V);V.lookahead>=H;){for(O=V.strstart,I=V.lookahead-(H-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[O+H-1])&V.hash_mask,V.prev[O&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=O,O++,--I;);V.strstart=O,V.lookahead=H-1,Ye(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=H-1,V.match_available=0,w.next_in=ne,w.input=N,w.avail_in=re,V.wrap=z,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,c){var d=s.state,u=s.next_in,h,f,b,v,m,g,k,_,A,S,C,T,$,q,W,oe,H,pe,we,R,K,E=s.input,J;h=u+(s.avail_in-5),f=s.next_out,J=s.output,b=f-(c-s.avail_out),v=f+(s.avail_out-257),m=d.dmax,g=d.wsize,k=d.whave,_=d.wnext,A=d.window,S=d.hold,C=d.bits,T=d.lencode,$=d.distcode,q=(1<<d.lenbits)-1,W=(1<<d.distbits)-1;e:do{C<15&&(S+=E[u++]<<C,C+=8,S+=E[u++]<<C,C+=8),oe=T[S&q];t:for(;;){if(S>>>=H=oe>>>24,C-=H,(H=oe>>>16&255)===0)J[f++]=65535&oe;else{if(!(16&H)){if((64&H)==0){oe=T[(65535&oe)+(S&(1<<H)-1)];continue t}if(32&H){d.mode=12;break e}s.msg="invalid literal/length code",d.mode=30;break e}pe=65535&oe,(H&=15)&&(C<H&&(S+=E[u++]<<C,C+=8),pe+=S&(1<<H)-1,S>>>=H,C-=H),C<15&&(S+=E[u++]<<C,C+=8,S+=E[u++]<<C,C+=8),oe=$[S&W];n:for(;;){if(S>>>=H=oe>>>24,C-=H,!(16&(H=oe>>>16&255))){if((64&H)==0){oe=$[(65535&oe)+(S&(1<<H)-1)];continue n}s.msg="invalid distance code",d.mode=30;break e}if(we=65535&oe,C<(H&=15)&&(S+=E[u++]<<C,(C+=8)<H&&(S+=E[u++]<<C,C+=8)),m<(we+=S&(1<<H)-1)){s.msg="invalid distance too far back",d.mode=30;break e}if(S>>>=H,C-=H,(H=f-b)<we){if(k<(H=we-H)&&d.sane){s.msg="invalid distance too far back",d.mode=30;break e}if(K=A,(R=0)===_){if(R+=g-H,H<pe){for(pe-=H;J[f++]=A[R++],--H;);R=f-we,K=J}}else if(_<H){if(R+=g+_-H,(H-=_)<pe){for(pe-=H;J[f++]=A[R++],--H;);if(R=0,_<pe){for(pe-=H=_;J[f++]=A[R++],--H;);R=f-we,K=J}}}else if(R+=_-H,H<pe){for(pe-=H;J[f++]=A[R++],--H;);R=f-we,K=J}for(;2<pe;)J[f++]=K[R++],J[f++]=K[R++],J[f++]=K[R++],pe-=3;pe&&(J[f++]=K[R++],1<pe&&(J[f++]=K[R++]))}else{for(R=f-we;J[f++]=J[R++],J[f++]=J[R++],J[f++]=J[R++],2<(pe-=3););pe&&(J[f++]=J[R++],1<pe&&(J[f++]=J[R++]))}break}}break}}while(u<h&&f<v);u-=pe=C>>3,S&=(1<<(C-=pe<<3))-1,s.next_in=u,s.next_out=f,s.avail_in=u<h?h-u+5:5-(u-h),s.avail_out=f<v?v-f+257:257-(f-v),d.hold=S,d.bits=C}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),c=r("./adler32"),d=r("./crc32"),u=r("./inffast"),h=r("./inftrees"),f=1,b=2,v=0,m=-2,g=1,k=852,_=592;function A(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(R){var K;return R&&R.state?(K=R.state,R.total_in=R.total_out=K.total=0,R.msg="",K.wrap&&(R.adler=1&K.wrap),K.mode=g,K.last=0,K.havedict=0,K.dmax=32768,K.head=null,K.hold=0,K.bits=0,K.lencode=K.lendyn=new s.Buf32(k),K.distcode=K.distdyn=new s.Buf32(_),K.sane=1,K.back=-1,v):m}function T(R){var K;return R&&R.state?((K=R.state).wsize=0,K.whave=0,K.wnext=0,C(R)):m}function $(R,K){var E,J;return R&&R.state?(J=R.state,K<0?(E=0,K=-K):(E=1+(K>>4),K<48&&(K&=15)),K&&(K<8||15<K)?m:(J.window!==null&&J.wbits!==K&&(J.window=null),J.wrap=E,J.wbits=K,T(R))):m}function q(R,K){var E,J;return R?(J=new S,(R.state=J).window=null,(E=$(R,K))!==v&&(R.state=null),E):m}var W,oe,H=!0;function pe(R){if(H){var K;for(W=new s.Buf32(512),oe=new s.Buf32(32),K=0;K<144;)R.lens[K++]=8;for(;K<256;)R.lens[K++]=9;for(;K<280;)R.lens[K++]=7;for(;K<288;)R.lens[K++]=8;for(h(f,R.lens,0,288,W,0,R.work,{bits:9}),K=0;K<32;)R.lens[K++]=5;h(b,R.lens,0,32,oe,0,R.work,{bits:5}),H=!1}R.lencode=W,R.lenbits=9,R.distcode=oe,R.distbits=5}function we(R,K,E,J){var Ie,ie=R.state;return ie.window===null&&(ie.wsize=1<<ie.wbits,ie.wnext=0,ie.whave=0,ie.window=new s.Buf8(ie.wsize)),J>=ie.wsize?(s.arraySet(ie.window,K,E-ie.wsize,ie.wsize,0),ie.wnext=0,ie.whave=ie.wsize):(J<(Ie=ie.wsize-ie.wnext)&&(Ie=J),s.arraySet(ie.window,K,E-J,Ie,ie.wnext),(J-=Ie)?(s.arraySet(ie.window,K,E-J,J,0),ie.wnext=J,ie.whave=ie.wsize):(ie.wnext+=Ie,ie.wnext===ie.wsize&&(ie.wnext=0),ie.whave<ie.wsize&&(ie.whave+=Ie))),0}a.inflateReset=T,a.inflateReset2=$,a.inflateResetKeep=C,a.inflateInit=function(R){return q(R,15)},a.inflateInit2=q,a.inflate=function(R,K){var E,J,Ie,ie,Se,ae,Ee,F,G,Ae,ge,de,Ye,kt,De,We,Et,rt,Gt,Yt,w,Q,V,O,I=0,z=new s.Buf8(4),re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return m;(E=R.state).mode===12&&(E.mode=13),Se=R.next_out,Ie=R.output,Ee=R.avail_out,ie=R.next_in,J=R.input,ae=R.avail_in,F=E.hold,G=E.bits,Ae=ae,ge=Ee,Q=v;e:for(;;)switch(E.mode){case g:if(E.wrap===0){E.mode=13;break}for(;G<16;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(2&E.wrap&&F===35615){z[E.check=0]=255&F,z[1]=F>>>8&255,E.check=d(E.check,z,2,0),G=F=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&F)<<8)+(F>>8))%31){R.msg="incorrect header check",E.mode=30;break}if((15&F)!=8){R.msg="unknown compression method",E.mode=30;break}if(G-=4,w=8+(15&(F>>>=4)),E.wbits===0)E.wbits=w;else if(w>E.wbits){R.msg="invalid window size",E.mode=30;break}E.dmax=1<<w,R.adler=E.check=1,E.mode=512&F?10:12,G=F=0;break;case 2:for(;G<16;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(E.flags=F,(255&E.flags)!=8){R.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){R.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=F>>8&1),512&E.flags&&(z[0]=255&F,z[1]=F>>>8&255,E.check=d(E.check,z,2,0)),G=F=0,E.mode=3;case 3:for(;G<32;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.head&&(E.head.time=F),512&E.flags&&(z[0]=255&F,z[1]=F>>>8&255,z[2]=F>>>16&255,z[3]=F>>>24&255,E.check=d(E.check,z,4,0)),G=F=0,E.mode=4;case 4:for(;G<16;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.head&&(E.head.xflags=255&F,E.head.os=F>>8),512&E.flags&&(z[0]=255&F,z[1]=F>>>8&255,E.check=d(E.check,z,2,0)),G=F=0,E.mode=5;case 5:if(1024&E.flags){for(;G<16;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.length=F,E.head&&(E.head.extra_len=F),512&E.flags&&(z[0]=255&F,z[1]=F>>>8&255,E.check=d(E.check,z,2,0)),G=F=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(ae<(de=E.length)&&(de=ae),de&&(E.head&&(w=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,J,ie,de,w)),512&E.flags&&(E.check=d(E.check,J,de,ie)),ae-=de,ie+=de,E.length-=de),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(ae===0)break e;for(de=0;w=J[ie+de++],E.head&&w&&E.length<65536&&(E.head.name+=String.fromCharCode(w)),w&&de<ae;);if(512&E.flags&&(E.check=d(E.check,J,de,ie)),ae-=de,ie+=de,w)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(ae===0)break e;for(de=0;w=J[ie+de++],E.head&&w&&E.length<65536&&(E.head.comment+=String.fromCharCode(w)),w&&de<ae;);if(512&E.flags&&(E.check=d(E.check,J,de,ie)),ae-=de,ie+=de,w)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;G<16;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(F!==(65535&E.check)){R.msg="header crc mismatch",E.mode=30;break}G=F=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),R.adler=E.check=0,E.mode=12;break;case 10:for(;G<32;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}R.adler=E.check=A(F),G=F=0,E.mode=11;case 11:if(E.havedict===0)return R.next_out=Se,R.avail_out=Ee,R.next_in=ie,R.avail_in=ae,E.hold=F,E.bits=G,2;R.adler=E.check=1,E.mode=12;case 12:if(K===5||K===6)break e;case 13:if(E.last){F>>>=7&G,G-=7&G,E.mode=27;break}for(;G<3;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}switch(E.last=1&F,G-=1,3&(F>>>=1)){case 0:E.mode=14;break;case 1:if(pe(E),E.mode=20,K!==6)break;F>>>=2,G-=2;break e;case 2:E.mode=17;break;case 3:R.msg="invalid block type",E.mode=30}F>>>=2,G-=2;break;case 14:for(F>>>=7&G,G-=7&G;G<32;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if((65535&F)!=(F>>>16^65535)){R.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&F,G=F=0,E.mode=15,K===6)break e;case 15:E.mode=16;case 16:if(de=E.length){if(ae<de&&(de=ae),Ee<de&&(de=Ee),de===0)break e;s.arraySet(Ie,J,ie,de,Se),ae-=de,ie+=de,Ee-=de,Se+=de,E.length-=de;break}E.mode=12;break;case 17:for(;G<14;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(E.nlen=257+(31&F),F>>>=5,G-=5,E.ndist=1+(31&F),F>>>=5,G-=5,E.ncode=4+(15&F),F>>>=4,G-=4,286<E.nlen||30<E.ndist){R.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;G<3;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.lens[re[E.have++]]=7&F,F>>>=3,G-=3}for(;E.have<19;)E.lens[re[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,V={bits:E.lenbits},Q=h(0,E.lens,0,19,E.lencode,0,E.work,V),E.lenbits=V.bits,Q){R.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;We=(I=E.lencode[F&(1<<E.lenbits)-1])>>>16&255,Et=65535&I,!((De=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(Et<16)F>>>=De,G-=De,E.lens[E.have++]=Et;else{if(Et===16){for(O=De+2;G<O;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(F>>>=De,G-=De,E.have===0){R.msg="invalid bit length repeat",E.mode=30;break}w=E.lens[E.have-1],de=3+(3&F),F>>>=2,G-=2}else if(Et===17){for(O=De+3;G<O;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}G-=De,w=0,de=3+(7&(F>>>=De)),F>>>=3,G-=3}else{for(O=De+7;G<O;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}G-=De,w=0,de=11+(127&(F>>>=De)),F>>>=7,G-=7}if(E.have+de>E.nlen+E.ndist){R.msg="invalid bit length repeat",E.mode=30;break}for(;de--;)E.lens[E.have++]=w}}if(E.mode===30)break;if(E.lens[256]===0){R.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,V={bits:E.lenbits},Q=h(f,E.lens,0,E.nlen,E.lencode,0,E.work,V),E.lenbits=V.bits,Q){R.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,V={bits:E.distbits},Q=h(b,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,V),E.distbits=V.bits,Q){R.msg="invalid distances set",E.mode=30;break}if(E.mode=20,K===6)break e;case 20:E.mode=21;case 21:if(6<=ae&&258<=Ee){R.next_out=Se,R.avail_out=Ee,R.next_in=ie,R.avail_in=ae,E.hold=F,E.bits=G,u(R,ge),Se=R.next_out,Ie=R.output,Ee=R.avail_out,ie=R.next_in,J=R.input,ae=R.avail_in,F=E.hold,G=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;We=(I=E.lencode[F&(1<<E.lenbits)-1])>>>16&255,Et=65535&I,!((De=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(We&&(240&We)==0){for(rt=De,Gt=We,Yt=Et;We=(I=E.lencode[Yt+((F&(1<<rt+Gt)-1)>>rt)])>>>16&255,Et=65535&I,!(rt+(De=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}F>>>=rt,G-=rt,E.back+=rt}if(F>>>=De,G-=De,E.back+=De,E.length=Et,We===0){E.mode=26;break}if(32&We){E.back=-1,E.mode=12;break}if(64&We){R.msg="invalid literal/length code",E.mode=30;break}E.extra=15&We,E.mode=22;case 22:if(E.extra){for(O=E.extra;G<O;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.length+=F&(1<<E.extra)-1,F>>>=E.extra,G-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;We=(I=E.distcode[F&(1<<E.distbits)-1])>>>16&255,Et=65535&I,!((De=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if((240&We)==0){for(rt=De,Gt=We,Yt=Et;We=(I=E.distcode[Yt+((F&(1<<rt+Gt)-1)>>rt)])>>>16&255,Et=65535&I,!(rt+(De=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}F>>>=rt,G-=rt,E.back+=rt}if(F>>>=De,G-=De,E.back+=De,64&We){R.msg="invalid distance code",E.mode=30;break}E.offset=Et,E.extra=15&We,E.mode=24;case 24:if(E.extra){for(O=E.extra;G<O;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}E.offset+=F&(1<<E.extra)-1,F>>>=E.extra,G-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){R.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(Ee===0)break e;if(de=ge-Ee,E.offset>de){if((de=E.offset-de)>E.whave&&E.sane){R.msg="invalid distance too far back",E.mode=30;break}Ye=de>E.wnext?(de-=E.wnext,E.wsize-de):E.wnext-de,de>E.length&&(de=E.length),kt=E.window}else kt=Ie,Ye=Se-E.offset,de=E.length;for(Ee<de&&(de=Ee),Ee-=de,E.length-=de;Ie[Se++]=kt[Ye++],--de;);E.length===0&&(E.mode=21);break;case 26:if(Ee===0)break e;Ie[Se++]=E.length,Ee--,E.mode=21;break;case 27:if(E.wrap){for(;G<32;){if(ae===0)break e;ae--,F|=J[ie++]<<G,G+=8}if(ge-=Ee,R.total_out+=ge,E.total+=ge,ge&&(R.adler=E.check=E.flags?d(E.check,Ie,ge,Se-ge):c(E.check,Ie,ge,Se-ge)),ge=Ee,(E.flags?F:A(F))!==E.check){R.msg="incorrect data check",E.mode=30;break}G=F=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;G<32;){if(ae===0)break e;ae--,F+=J[ie++]<<G,G+=8}if(F!==(4294967295&E.total)){R.msg="incorrect length check",E.mode=30;break}G=F=0}E.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;default:return m}return R.next_out=Se,R.avail_out=Ee,R.next_in=ie,R.avail_in=ae,E.hold=F,E.bits=G,(E.wsize||ge!==R.avail_out&&E.mode<30&&(E.mode<27||K!==4))&&we(R,R.output,R.next_out,ge-R.avail_out)?(E.mode=31,-4):(Ae-=R.avail_in,ge-=R.avail_out,R.total_in+=Ae,R.total_out+=ge,E.total+=ge,E.wrap&&ge&&(R.adler=E.check=E.flags?d(E.check,Ie,ge,R.next_out-ge):c(E.check,Ie,ge,R.next_out-ge)),R.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(Ae==0&&ge===0||K===4)&&Q===v&&(Q=-5),Q)},a.inflateEnd=function(R){if(!R||!R.state)return m;var K=R.state;return K.window&&(K.window=null),R.state=null,v},a.inflateGetHeader=function(R,K){var E;return R&&R.state?(2&(E=R.state).wrap)==0?m:((E.head=K).done=!1,v):m},a.inflateSetDictionary=function(R,K){var E,J=K.length;return R&&R.state?(E=R.state).wrap!==0&&E.mode!==11?m:E.mode===11&&c(1,K,J,0)!==E.check?-3:we(R,K,J,J)?(E.mode=31,-4):(E.havedict=1,v):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(f,b,v,m,g,k,_,A){var S,C,T,$,q,W,oe,H,pe,we=A.bits,R=0,K=0,E=0,J=0,Ie=0,ie=0,Se=0,ae=0,Ee=0,F=0,G=null,Ae=0,ge=new s.Buf16(16),de=new s.Buf16(16),Ye=null,kt=0;for(R=0;R<=15;R++)ge[R]=0;for(K=0;K<m;K++)ge[b[v+K]]++;for(Ie=we,J=15;1<=J&&ge[J]===0;J--);if(J<Ie&&(Ie=J),J===0)return g[k++]=20971520,g[k++]=20971520,A.bits=1,0;for(E=1;E<J&&ge[E]===0;E++);for(Ie<E&&(Ie=E),R=ae=1;R<=15;R++)if(ae<<=1,(ae-=ge[R])<0)return-1;if(0<ae&&(f===0||J!==1))return-1;for(de[1]=0,R=1;R<15;R++)de[R+1]=de[R]+ge[R];for(K=0;K<m;K++)b[v+K]!==0&&(_[de[b[v+K]]++]=K);if(W=f===0?(G=Ye=_,19):f===1?(G=c,Ae-=257,Ye=d,kt-=257,256):(G=u,Ye=h,-1),R=E,q=k,Se=K=F=0,T=-1,$=(Ee=1<<(ie=Ie))-1,f===1&&852<Ee||f===2&&592<Ee)return 1;for(;;){for(oe=R-Se,pe=_[K]<W?(H=0,_[K]):_[K]>W?(H=Ye[kt+_[K]],G[Ae+_[K]]):(H=96,0),S=1<<R-Se,E=C=1<<ie;g[q+(F>>Se)+(C-=S)]=oe<<24|H<<16|pe|0,C!==0;);for(S=1<<R-1;F&S;)S>>=1;if(S!==0?(F&=S-1,F+=S):F=0,K++,--ge[R]==0){if(R===J)break;R=b[v+_[K]]}if(Ie<R&&(F&$)!==T){for(Se===0&&(Se=Ie),q+=E,ae=1<<(ie=R-Se);ie+Se<J&&!((ae-=ge[ie+Se])<=0);)ie++,ae<<=1;if(Ee+=1<<ie,f===1&&852<Ee||f===2&&592<Ee)return 1;g[T=F&$]=Ie<<24|ie<<16|q-k|0}}return F!==0&&(g[q+F]=R-Se<<24|4194304),A.bits=Ie,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),c=0,d=1;function u(I){for(var z=I.length;0<=--z;)I[z]=0}var h=0,f=29,b=256,v=b+1+f,m=30,g=19,k=2*v+1,_=15,A=16,S=7,C=256,T=16,$=17,q=18,W=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(v+2));u(we);var R=new Array(2*m);u(R);var K=new Array(512);u(K);var E=new Array(256);u(E);var J=new Array(f);u(J);var Ie,ie,Se,ae=new Array(m);function Ee(I,z,re,ne,N){this.static_tree=I,this.extra_bits=z,this.extra_base=re,this.elems=ne,this.max_length=N,this.has_stree=I&&I.length}function F(I,z){this.dyn_tree=I,this.max_code=0,this.stat_desc=z}function G(I){return I<256?K[I]:K[256+(I>>>7)]}function Ae(I,z){I.pending_buf[I.pending++]=255&z,I.pending_buf[I.pending++]=z>>>8&255}function ge(I,z,re){I.bi_valid>A-re?(I.bi_buf|=z<<I.bi_valid&65535,Ae(I,I.bi_buf),I.bi_buf=z>>A-I.bi_valid,I.bi_valid+=re-A):(I.bi_buf|=z<<I.bi_valid&65535,I.bi_valid+=re)}function de(I,z,re){ge(I,re[2*z],re[2*z+1])}function Ye(I,z){for(var re=0;re|=1&I,I>>>=1,re<<=1,0<--z;);return re>>>1}function kt(I,z,re){var ne,N,ce=new Array(_+1),ve=0;for(ne=1;ne<=_;ne++)ce[ne]=ve=ve+re[ne-1]<<1;for(N=0;N<=z;N++){var ue=I[2*N+1];ue!==0&&(I[2*N]=Ye(ce[ue]++,ue))}}function De(I){var z;for(z=0;z<v;z++)I.dyn_ltree[2*z]=0;for(z=0;z<m;z++)I.dyn_dtree[2*z]=0;for(z=0;z<g;z++)I.bl_tree[2*z]=0;I.dyn_ltree[2*C]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function We(I){8<I.bi_valid?Ae(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function Et(I,z,re,ne){var N=2*z,ce=2*re;return I[N]<I[ce]||I[N]===I[ce]&&ne[z]<=ne[re]}function rt(I,z,re){for(var ne=I.heap[re],N=re<<1;N<=I.heap_len&&(N<I.heap_len&&Et(z,I.heap[N+1],I.heap[N],I.depth)&&N++,!Et(z,ne,I.heap[N],I.depth));)I.heap[re]=I.heap[N],re=N,N<<=1;I.heap[re]=ne}function Gt(I,z,re){var ne,N,ce,ve,ue=0;if(I.last_lit!==0)for(;ne=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],N=I.pending_buf[I.l_buf+ue],ue++,ne===0?de(I,N,z):(de(I,(ce=E[N])+b+1,z),(ve=W[ce])!==0&&ge(I,N-=J[ce],ve),de(I,ce=G(--ne),re),(ve=oe[ce])!==0&&ge(I,ne-=ae[ce],ve)),ue<I.last_lit;);de(I,C,z)}function Yt(I,z){var re,ne,N,ce=z.dyn_tree,ve=z.stat_desc.static_tree,ue=z.stat_desc.has_stree,Me=z.stat_desc.elems,je=-1;for(I.heap_len=0,I.heap_max=k,re=0;re<Me;re++)ce[2*re]!==0?(I.heap[++I.heap_len]=je=re,I.depth[re]=0):ce[2*re+1]=0;for(;I.heap_len<2;)ce[2*(N=I.heap[++I.heap_len]=je<2?++je:0)]=1,I.depth[N]=0,I.opt_len--,ue&&(I.static_len-=ve[2*N+1]);for(z.max_code=je,re=I.heap_len>>1;1<=re;re--)rt(I,ce,re);for(N=Me;re=I.heap[1],I.heap[1]=I.heap[I.heap_len--],rt(I,ce,1),ne=I.heap[1],I.heap[--I.heap_max]=re,I.heap[--I.heap_max]=ne,ce[2*N]=ce[2*re]+ce[2*ne],I.depth[N]=(I.depth[re]>=I.depth[ne]?I.depth[re]:I.depth[ne])+1,ce[2*re+1]=ce[2*ne+1]=N,I.heap[1]=N++,rt(I,ce,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(He,zt){var Yn,Xt,Xn,at,br,Ur,un=zt.dyn_tree,Eo=zt.max_code,$l=zt.stat_desc.static_tree,Dl=zt.stat_desc.has_stree,zl=zt.stat_desc.extra_bits,wi=zt.stat_desc.extra_base,wr=zt.stat_desc.max_length,Ao=0;for(at=0;at<=_;at++)He.bl_count[at]=0;for(un[2*He.heap[He.heap_max]+1]=0,Yn=He.heap_max+1;Yn<k;Yn++)wr<(at=un[2*un[2*(Xt=He.heap[Yn])+1]+1]+1)&&(at=wr,Ao++),un[2*Xt+1]=at,Eo<Xt||(He.bl_count[at]++,br=0,wi<=Xt&&(br=zl[Xt-wi]),Ur=un[2*Xt],He.opt_len+=Ur*(at+br),Dl&&(He.static_len+=Ur*($l[2*Xt+1]+br)));if(Ao!==0){do{for(at=wr-1;He.bl_count[at]===0;)at--;He.bl_count[at]--,He.bl_count[at+1]+=2,He.bl_count[wr]--,Ao-=2}while(0<Ao);for(at=wr;at!==0;at--)for(Xt=He.bl_count[at];Xt!==0;)Eo<(Xn=He.heap[--Yn])||(un[2*Xn+1]!==at&&(He.opt_len+=(at-un[2*Xn+1])*un[2*Xn],un[2*Xn+1]=at),Xt--)}})(I,z),kt(ce,je,I.bl_count)}function w(I,z,re){var ne,N,ce=-1,ve=z[1],ue=0,Me=7,je=4;for(ve===0&&(Me=138,je=3),z[2*(re+1)+1]=65535,ne=0;ne<=re;ne++)N=ve,ve=z[2*(ne+1)+1],++ue<Me&&N===ve||(ue<je?I.bl_tree[2*N]+=ue:N!==0?(N!==ce&&I.bl_tree[2*N]++,I.bl_tree[2*T]++):ue<=10?I.bl_tree[2*$]++:I.bl_tree[2*q]++,ce=N,je=(ue=0)===ve?(Me=138,3):N===ve?(Me=6,3):(Me=7,4))}function Q(I,z,re){var ne,N,ce=-1,ve=z[1],ue=0,Me=7,je=4;for(ve===0&&(Me=138,je=3),ne=0;ne<=re;ne++)if(N=ve,ve=z[2*(ne+1)+1],!(++ue<Me&&N===ve)){if(ue<je)for(;de(I,N,I.bl_tree),--ue!=0;);else N!==0?(N!==ce&&(de(I,N,I.bl_tree),ue--),de(I,T,I.bl_tree),ge(I,ue-3,2)):ue<=10?(de(I,$,I.bl_tree),ge(I,ue-3,3)):(de(I,q,I.bl_tree),ge(I,ue-11,7));ce=N,je=(ue=0)===ve?(Me=138,3):N===ve?(Me=6,3):(Me=7,4)}}u(ae);var V=!1;function O(I,z,re,ne){ge(I,(h<<1)+(ne?1:0),3),(function(N,ce,ve,ue){We(N),ue&&(Ae(N,ve),Ae(N,~ve)),s.arraySet(N.pending_buf,N.window,ce,ve,N.pending),N.pending+=ve})(I,z,re,!0)}a._tr_init=function(I){V||((function(){var z,re,ne,N,ce,ve=new Array(_+1);for(N=ne=0;N<f-1;N++)for(J[N]=ne,z=0;z<1<<W[N];z++)E[ne++]=N;for(E[ne-1]=N,N=ce=0;N<16;N++)for(ae[N]=ce,z=0;z<1<<oe[N];z++)K[ce++]=N;for(ce>>=7;N<m;N++)for(ae[N]=ce<<7,z=0;z<1<<oe[N]-7;z++)K[256+ce++]=N;for(re=0;re<=_;re++)ve[re]=0;for(z=0;z<=143;)we[2*z+1]=8,z++,ve[8]++;for(;z<=255;)we[2*z+1]=9,z++,ve[9]++;for(;z<=279;)we[2*z+1]=7,z++,ve[7]++;for(;z<=287;)we[2*z+1]=8,z++,ve[8]++;for(kt(we,v+1,ve),z=0;z<m;z++)R[2*z+1]=5,R[2*z]=Ye(z,5);Ie=new Ee(we,W,b+1,v,_),ie=new Ee(R,oe,0,m,_),Se=new Ee(new Array(0),H,0,g,S)})(),V=!0),I.l_desc=new F(I.dyn_ltree,Ie),I.d_desc=new F(I.dyn_dtree,ie),I.bl_desc=new F(I.bl_tree,Se),I.bi_buf=0,I.bi_valid=0,De(I)},a._tr_stored_block=O,a._tr_flush_block=function(I,z,re,ne){var N,ce,ve=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Me,je=4093624447;for(Me=0;Me<=31;Me++,je>>>=1)if(1&je&&ue.dyn_ltree[2*Me]!==0)return c;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return d;for(Me=32;Me<b;Me++)if(ue.dyn_ltree[2*Me]!==0)return d;return c})(I)),Yt(I,I.l_desc),Yt(I,I.d_desc),ve=(function(ue){var Me;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Yt(ue,ue.bl_desc),Me=g-1;3<=Me&&ue.bl_tree[2*pe[Me]+1]===0;Me--);return ue.opt_len+=3*(Me+1)+5+5+4,Me})(I),N=I.opt_len+3+7>>>3,(ce=I.static_len+3+7>>>3)<=N&&(N=ce)):N=ce=re+5,re+4<=N&&z!==-1?O(I,z,re,ne):I.strategy===4||ce===N?(ge(I,2+(ne?1:0),3),Gt(I,we,R)):(ge(I,4+(ne?1:0),3),(function(ue,Me,je,He){var zt;for(ge(ue,Me-257,5),ge(ue,je-1,5),ge(ue,He-4,4),zt=0;zt<He;zt++)ge(ue,ue.bl_tree[2*pe[zt]+1],3);Q(ue,ue.dyn_ltree,Me-1),Q(ue,ue.dyn_dtree,je-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,ve+1),Gt(I,I.dyn_ltree,I.dyn_dtree)),De(I),ne&&We(I)},a._tr_tally=function(I,z,re){return I.pending_buf[I.d_buf+2*I.last_lit]=z>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&z,I.pending_buf[I.l_buf+I.last_lit]=255&re,I.last_lit++,z===0?I.dyn_ltree[2*re]++:(I.matches++,z--,I.dyn_ltree[2*(E[re]+b+1)]++,I.dyn_dtree[2*G(z)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){ge(I,2,3),de(I,C,we),(function(z){z.bi_valid===16?(Ae(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),D0=Di(Fp(),1),z0=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),oo=z0,B0=z0;function Ko(e,t){let r=e.length,i,a,s=!1,c=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],c=!0);let d=a[0].length,u=a[0].map((f,b)=>a.map(v=>v[b])),h=i.map(f=>u.map(b=>{let v=0;if(!Array.isArray(f)){for(let m of b)v+=f*m;return v}for(let m=0;m<f.length;m++)v+=f[m]*(b[m]||0);return v}));return r===1&&s&&(h=h[0]),d===1&&c?r===1&&s?h[0]:h.map(f=>f[0]):h}function Ps(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function pt(e,t,r=[0,0,0]){const i=Ps(e,t[0]),a=Ps(e,t[1]),s=Ps(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}function io(e){return lr(e)==="string"}function lr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function $s(e,{precision:t=16,unit:r}){return qe(e)?"none":(e=+Ds(e,t),e+(r??""))}function qe(e){return e===null}function wt(e){return qe(e)?0:e}function Ds(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function Yo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function N0(e,t,r){return(r-e)/(t-e)}function zs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Yo(t[0],t[1],N0(e[0],e[1],r))}function ji(e,t,r){return Math.max(Math.min(r,t),e)}function qi(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function _t(e,t){return qi(Math.abs(e)**t,e)}function Bs(e,t){return t===0?0:e/t}function H0(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function ao(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}var Gp=Object.freeze({__proto__:null,bisectLeft:H0,clamp:ji,copySign:qi,interpolate:Yo,interpolateInv:N0,isInstance:ao,isNone:qe,isString:io,mapRange:zs,multiplyMatrices:Ko,multiply_v3_m3x3:pt,serializeNumber:$s,skipNone:wt,spow:_t,toPrecision:Ds,type:lr,zdiv:Bs}),Wp=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},cr=new Wp,rn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},F0=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),zs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=zs(this.coordRange,r,e),$s(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return ao(e,this)?e:new this(e,t)}},Ns=Symbol("instance"),G0=class Kf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Ns]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(c=>F0.get(c,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>F0.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let c=t[s];if(qe(c)||isNaN(c))return c;let d=r[s],u=this.coords[s].find(h=>h.type==d);if(!u){let h=a.name||i;throw new TypeError(`${d??c?.raw??c} not allowed for ${h} in ${this.name}()`)}return c=u.resolve(c),u.range&&(r[s]=u.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ao(t,this)?t:t[Ns]?t[Ns]:new Kf(t,...r)}},Ht={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Hs(e){return Array.isArray(e)?e:Ht[e]}function Ki(e,t,r,i={}){if(e=Hs(e),t=Hs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(cr.run("chromatic-adaptation-start",a),a.M||(a.W1===Ht.D65&&a.W2===Ht.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Ht.D50&&a.W2===Ht.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),cr.run("chromatic-adaptation-end",a),a.M)return pt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function W0(e,t){let r={str:String(e)?.trim(),options:t};if(cr.run("parse-start",r),r.color)return r.color;r.parsed=Vp(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,c,d,u=r.parsed.args,h=u.map((v,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let v=u.shift();h.shift();let m=v.startsWith("--")?v.substring(2):`--${v}`,g=[v,m];if(c=ye.findFormat({name:s,id:g,type:"function"}),!c){let k,_=v in ye.registry?v:m;if(_ in ye.registry){let A=ye.registry[_].formats?.color?.id;A&&(k=`Did you mean ${e.replace("color("+v,"color("+A)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(k??"Missing a plugin?"))}d=c.space,c.id.startsWith("--")&&!v.startsWith("--")&&rn.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${v}).`),v.startsWith("--")&&!c.id.startsWith("--")&&rn.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${v}).`)}else c=ye.findFormat({name:s,type:"function"}),d=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let b=c.coords.length;if(u.length!==b)throw new TypeError(`Expected ${b} coordinates for ${d.id} in ${r.str}), got ${u.length}`);u=c.coerceCoords(u,h),i={spaceId:d.id,coords:u,alpha:f}}else e:for(let s of ye.all)for(let c in s.formats){let d=s.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let u=s.getFormat(d),h=u.parse(r.str);if(h){a&&Object.assign(a,{format:u,formatId:c}),i=h;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=qe(i.alpha)?i.alpha:i.alpha===void 0?1:ji(0,i.alpha,1),i}var U0={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Yi={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(U0).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Up(e){let t={},r=e.match(Yi.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*U0[r]):Yi.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function Vp(e){if(!e)return;e=e.trim();let t=e.match(Yi.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Yi.singleArgument,(d,u)=>{let{value:h,meta:f}=Up(u);return(d.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),i.push(f),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Le(e,t){if(Array.isArray(e))return e.map(i=>Le(i,t));if(!e)throw new TypeError("Empty color reference");io(e)&&(e=W0(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ye.get(r)),e.alpha===void 0&&(e.alpha=1),e}var Zp=75e-6,ye=class Hn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Hn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r,this.white=Hs(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||="function",a.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Hn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:jp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),cr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Zp}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let c=i[s];if(c.type!=="angle"&&c.range){if(qe(a))return!0;let[d,u]=c.range;return(d===void 0||a>=d-r)&&(u===void 0||a<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=G0.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const d=Le(t);[t,r]=[d.space,d.coords]}if(t=Hn.get(t),this.equals(t))return r;r=r.map(d=>qe(d)?0:d);let i=this.path,a=t.path,s,c;for(let d=0;d<i.length&&i[d].equals(a[d]);d++)s=i[d],c=d;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let d=i.length-1;d>c;d--)r=i[d].toBase(r);for(let d=c+1;d<a.length;d++)r=a[d].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Le(t);[t,r]=[i.space,i.coords]}return t=Hn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Hn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||ao(t,this))return t;if(lr(t)==="string"){let i=Hn.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Hn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Hn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let d=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];c&&=u.some(h=>d.includes(h))}if(c){let d=G0.get(s,i);return d!==s&&(i.formats[s.name]=d),d}}return null}static resolveCoord(t,r){let i=lr(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Hn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=lr(s),i==="number"||i==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=Hn.get(a);let c=s.toLowerCase(),d=0;for(let u in a.coords){let h=a.coords[u];if(u.toLowerCase()===c||h.name?.toLowerCase()===c)return{space:a,id:u,index:d,...h};d++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function jp(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Rt=new ye({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Dt=class extends ye{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Rt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=pt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=Ki(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=Ki(this.base.white,this.white,t),pt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function V0(e,t={}){if(Array.isArray(e))return e.map(u=>V0(u,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Le(e,a)}catch(u){s=u}let{CSS:c,getComputedStyle:d}=globalThis;if(io(e)&&i&&c&&d&&c.supports(r,e)){let u=i.style[r];e!==u&&(i.style[r]=e);let h=d(i).getPropertyValue(r);if(e!==u&&(i.style[r]=u),h!==e)try{return Le(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Xo(e,t){e=Le(e);let r=ye.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>Ds(s,i))}function on(e,t){if(e=Le(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=ye.resolveCoord(t,e.space);return Xo(e,r)[i]}function Fs(e,t,r,i){return e=Le(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=ye.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Fs.returns="color";function qn(e,t,r){if(e=Le(e),arguments.length===2&&lr(arguments[1])==="object"){let i=arguments[1];for(let a in i)qn(e,a,i[a])}else if(typeof r=="function"&&(r=r(on(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=ye.resolveCoord(t,e.space),s=Xo(e,i);s[a]=r,Fs(e,i,s)}return e}qn.returns="color";var Gs=new ye({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Rt,fromBase:e=>Ki(Rt.white,"D50",e),toBase:e=>Ki("D50",Rt.white,e)}),qp=216/24389,Z0=24/116,Xi=24389/27,Ws=Ht.D50,an=new ye({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ws,base:Gs,fromBase(e){let t=e.map((r,i)=>r/Ws[i]).map(r=>r>qp?Math.cbrt(r):(Xi*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Z0?Math.pow(a[0],3):(116*a[0]-16)/Xi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Xi,a[2]>Z0?Math.pow(a[2],3):(116*a[2]-16)/Xi].map((s,c)=>s*Ws[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function bn(e){return typeof e!="number"?e:(e%360+360)%360}function j0(e,t){let[r,i]=t,a=qe(r),s=qe(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=bn(r),i=bn(i);let c=i-r;return e==="increasing"?c<0&&(i+=360):e==="decreasing"?c>0&&(r+=360):e==="longer"?-180<c&&c<180&&(c>0?r+=360:i+=360):e==="shorter"&&(c>180?r+=360:c<-180&&(i+=360)),[r,i]}var sn=new ye({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:an,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange;this.ε=(c[1]-c[0])/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:bn(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return qe(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),q0=25**7,Ji=Math.PI,K0=180/Ji,so=Ji/180;function Y0(e){const t=e*e;return t*t*t*e}function X0(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Le([e,t]);let[s,c,d]=an.from(e),u=sn.from(an,[s,c,d])[1],[h,f,b]=an.from(t),v=sn.from(an,[h,f,b])[1];u<0&&(u=0),v<0&&(v=0);let m=Y0((u+v)/2),g=.5*(1-Math.sqrt(m/(m+q0))),k=(1+g)*c,_=(1+g)*f,A=Math.sqrt(k**2+d**2),S=Math.sqrt(_**2+b**2),C=k===0&&d===0?0:Math.atan2(d,k),T=_===0&&b===0?0:Math.atan2(b,_);C<0&&(C+=2*Ji),T<0&&(T+=2*Ji),C*=K0,T*=K0;let $=h-s,q=S-A,W=T-C,oe=C+T,H=Math.abs(W),pe;A*S===0?pe=0:H<=180?pe=W:W>180?pe=W-360:W<-180?pe=W+360:rn.warn("the unthinkable has happened");let we=2*Math.sqrt(S*A)*Math.sin(pe*so/2),R=(s+h)/2,K=(A+S)/2,E=Y0(K),J;A*S===0?J=oe:H<=180?J=oe/2:oe<360?J=(oe+360)/2:J=(oe-360)/2;let Ie=(R-50)**2,ie=1+.015*Ie/Math.sqrt(20+Ie),Se=1+.045*K,ae=1;ae-=.17*Math.cos((J-30)*so),ae+=.24*Math.cos(2*J*so),ae+=.32*Math.cos((3*J+6)*so),ae-=.2*Math.cos((4*J-63)*so);let Ee=1+.015*K*ae,F=30*Math.exp(-1*((J-275)/25)**2),G=2*Math.sqrt(E/(E+q0)),Ae=-1*Math.sin(2*F*so)*G,ge=($/(r*ie))**2;return ge+=(q/(i*Se))**2,ge+=(we/(a*Ee))**2,ge+=Ae*(q/(i*Se))*(we/(a*Ee)),Math.sqrt(ge)}var Kp=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Yp=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Xp=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],ur=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Rn=new ye({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Rt,fromBase(e){let t=pt(e,Kp);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),pt(t,Xp,t)},toBase(e){let t=pt(e,ur);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,pt(t,Yp,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Us(e,t){[e,t]=Le([e,t]);let[r,i,a]=Rn.from(e),[s,c,d]=Rn.from(t),u=r-s,h=i-c,f=a-d;return Math.sqrt(u**2+h**2+f**2)}var Jp=75e-6;function zr(e,t,{epsilon:r=Jp}={}){e=Le(e),t||(t=e.space),t=ye.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function lo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function J0(e,t,r="lab"){r=ye.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,c,d)=>{let u=a[d];return qe(c)||qe(u)?s:s+(u-c)**2},0))}function Qp(e,t){return J0(e,t,"lab")}var Q0=Math.PI/180;function eg(e,t,{l:r=2,c:i=1}={}){[e,t]=Le([e,t]);let[a,s,c]=an.from(e),[,d,u]=sn.from(an,[a,s,c]),[h,f,b]=an.from(t),v=sn.from(an,[h,f,b])[1];d<0&&(d=0),v<0&&(v=0);let m=a-h,g=d-v,k=s-f,_=c-b,A=k**2+_**2-g**2,S=.511;a>=16&&(S=.040975*a/(1+.01765*a));let C=.0638*d/(1+.0131*d)+.638,T;qe(u)&&(u=0),u>=164&&u<=345?T=.56+Math.abs(.2*Math.cos((u+168)*Q0)):T=.36+Math.abs(.4*Math.cos((u+35)*Q0));let $=Math.pow(d,4),q=Math.sqrt($/($+1900)),W=C*(q*T+1-q),oe=(m/(r*S))**2;return oe+=(g/(i*C))**2,oe+=A/W**2,Math.sqrt(oe)}var eu=203,Vs=new ye({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Rt,fromBase(e){return e.map(t=>t*eu)},toBase(e){return e.map(t=>t/eu)}}),Qi=1.15,ea=.66,tu=2610/2**14,tg=2**14/2610,nu=3424/2**12,ru=2413/2**7,ou=2392/2**7,ng=1.7*2523/2**5,iu=2**5/(1.7*2523),ta=-.56,Zs=16295499532821565e-27,rg=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],og=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ig=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ag=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],au=new ye({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Vs,fromBase(e){let[t,r,i]=e,[a,s,c]=pt(pt([Qi*t-(Qi-1)*i,ea*r-(ea-1)*t,i],rg).map(function(d){return _t((nu+ru*_t(d/1e4,tu))/(1+ou*_t(d/1e4,tu)),ng)}),ig);return[(1+ta)*a/(1+ta*a)-Zs,s,c]},toBase(e){let[t,r,i]=e,[a,s,c]=pt(pt([(t+Zs)/(1+ta-ta*(t+Zs)),r,i],ag).map(function(u){return 1e4*_t((nu-_t(u,iu))/(ou*_t(u,iu)-ru),tg)}),og),d=(a+(Qi-1)*c)/Qi;return[d,(s+(ea-1)*d)/ea,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),js=new ye({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:au,fromBase:sn.fromBase,toBase:sn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function sg(e,t){[e,t]=Le([e,t]);let[r,i,a]=js.from(e),[s,c,d]=js.from(t),u=r-s,h=i-c;qe(a)&&qe(d)?(a=0,d=0):qe(a)?a=d:qe(d)&&(d=a);let f=a-d,b=2*Math.sqrt(i*c)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+h**2+b**2)}var su=3424/4096,lu=2413/128,cu=2392/128,uu=2610/16384,lg=2523/32,cg=16384/2610,du=32/2523,ug=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],dg=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hg=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],fg=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],qs=new ye({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Vs,fromBase(e){return pg(pt(e,ug))},toBase(e){return pt(gg(e),fg)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function pg(e){return pt(e.map(function(t){return((su+lu*(t/1e4)**uu)/(1+cu*(t/1e4)**uu))**lg}),dg)}function gg(e){return pt(e,hg).map(function(t){return 1e4*(Math.max(t**du-su,0)/(lu-cu*t**du))**cg})}function mg(e,t){[e,t]=Le([e,t]);let[r,i,a]=qs.from(e),[s,c,d]=qs.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-c)**2+(a-d)**2)}function vg(e,t){[e,t]=Le([e,t]);let r=2,[i,a,s]=Rn.from(e),[c,d,u]=Rn.from(t),h=i-c,f=r*(a-d),b=r*(s-u);return Math.sqrt(h**2+f**2+b**2)}var bg=Ht.D65,hu=.42,fu=1/hu,Ks=2*Math.PI,pu=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],wg=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],_g=[[460,451,288],[460,-891,-261],[460,-220,-6300]],yg={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Br={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},kg=180/Math.PI,gu=Math.PI/180;function mu(e,t){return e.map(r=>{const i=_t(t*Math.abs(r)*.01,hu);return 400*qi(i,r)/(i+27.13)})}function Eg(e,t){const r=100/t*27.13**fu;return e.map(i=>{const a=Math.abs(i);return qi(r*_t(a/(400-a),fu),i)})}function Ag(e){let t=bn(e);t<=Br.h[0]&&(t+=360);const r=H0(Br.h,t)-1,[i,a]=Br.h.slice(r,r+2),[s,c]=Br.e.slice(r,r+2),d=Br.H[r],u=(t-i)/s;return d+100*u/(u+(a-t)/c)}function Mg(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=Br.h.slice(r,r+2),[s,c]=Br.e.slice(r,r+2);return bn((t*(c*i-s*a)-100*i*c)/(t*(c-s)-100*c))}function vu(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const c=e.map(g=>g*100);s.la=t,s.yb=r;const d=c[1],u=pt(c,pu);let h=yg[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/d,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const v=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(g=>Yo(1,d/g,v)),s.dRgbInv=s.dRgb.map(g=>1/g);const m=mu(u.map((g,k)=>g*s.dRgb[k]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var bu=vu(bg,64/Math.PI*.2,20,"average",!1);function Ys(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=bn(e.h)*gu:r=Mg(e.H)*gu;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=_t(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const d=_t(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),h=t.aW*_t(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,b=h/t.nbb,v=23*(b+.305)*Bs(d,23*f+d*(11*i+108*a));return pt(Eg(pt([b,v*i,v*a],_g).map(m=>m*1/1403),t.fl).map((m,g)=>m*t.dRgbInv[g]),wg).map(m=>m/100)}function wu(e,t){const r=mu(pt(e.map(k=>k*100),pu).map((k,_)=>k*t.dRgb[_]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%Ks+Ks)%Ks,c=.25*(Math.cos(s+2)+3.8),d=_t(5e4/13*t.nc*t.ncb*Bs(c*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=_t(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),h=100*_t(u,2),f=4/t.c*u*(t.aW+4)*t.flRoot,b=d*u,v=b*t.flRoot,m=bn(s*kg),g=Ag(m);return{J:h,C:b,h:m,s:50*_t(t.c*d/(t.aW+4),1/2),Q:f,M:v,H:g}}var Sg=new ye({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=wu(e,bu),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Ys({J:e[0],M:e[1],h:e[2]},bu)}}),xg=Ht.D65,Ig=216/24389,_u=24389/27;function Og(e){return 116*(e>Ig?Math.cbrt(e):(_u*e+16)/116)-16}function Xs(e){return e>8?Math.pow((e+16)/116,3):e/_u}function Cg(e,t){let[r,i,a]=e,s=[],c=0;if(a===0)return[0,0,0];let d=Xs(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const u=2e-12,h=15;let f=0,b=1/0;for(;f<=h;){s=Ys({J:c,C:i,h:r},t);const v=Math.abs(s[1]-d);if(v<b){if(v<=u)return s;b=v}c=c-(s[1]-d)*c/(2*s[1]),f+=1}return Ys({J:c,C:i,h:r},t)}function Tg(e,t){const r=Og(e[1]);if(r===0)return[0,0,0];const i=wu(e,Js);return[bn(i.h),i.C,r]}var Js=vu(xg,200/Math.PI*Xs(50),Xs(50)*100,"average",!1),Jo=new ye({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Tg(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Cg(e,Js)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Lg=Math.PI/180,yu=[1,.007,.0228];function ku(e){e[1]<0&&(e=Jo.fromBase(Jo.toBase(e)));const t=Math.log(Math.max(1+yu[2]*e[1]*Js.flRoot,1))/yu[2],r=e[0]*Lg,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function Rg(e,t){[e,t]=Le([e,t]);let[r,i,a]=ku(Jo.from(e)),[s,c,d]=ku(Jo.from(t));return Math.sqrt((r-s)**2+(i-c)**2+(a-d)**2)}var co={deltaE76:Qp,deltaECMC:eg,deltaE2000:X0,deltaEJz:sg,deltaEITP:mg,deltaEOK:Us,deltaEOK2:vg,deltaEHCT:Rg};function Pg(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Eu={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function dr(e,{method:t=rn.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Le(e),io(arguments[1])?r=arguments[1]:r||(r=e.space),r=ye.get(r),zr(e,r,{epsilon:0}))return e;let c;if(t==="css")c=$g(e,{space:r});else{if(t!=="clip"&&!zr(e,r)){Object.prototype.hasOwnProperty.call(Eu,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=Eu[t]);let d=X0;if(i!==""){for(let h in co)if("deltae"+i.toLowerCase()===h.toLowerCase()){d=co[h];break}}a===0&&(a=1e-16);let u=dr(nt(e,r),{method:"clip",space:r});if(d(e,u)>a){if(s&&Object.keys(s).length===3){let A=ye.resolveCoord(s.channel),S=on(nt(e,A.space),A.id);if(qe(S)&&(S=0),S>=s.max)return nt({space:"xyz-d65",coords:Ht.D65},e.space);if(S<=s.min)return nt({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=ye.resolveCoord(t),f=h.space,b=h.id,v=nt(e,f);v.coords.forEach((A,S)=>{qe(A)&&(v.coords[S]=0)});let m=(h.range||h.refRange)[0],g=Pg(a),k=m,_=on(v,b);for(;_-k>g;){let A=lo(v);A=dr(A,{space:r,method:"clip"}),d(v,A)-a<g?k=on(v,b):_=on(v,b),qn(v,b,(k+_)/2)}c=nt(v,r)}else c=u}else c=nt(e,r);if(t==="clip"||!zr(c,r,{epsilon:0})){let d=Object.values(r.coords).map(u=>u.range||[]);c.coords=c.coords.map((u,h)=>{let[f,b]=d[h];return f!==void 0&&(u=Math.max(f,u)),b!==void 0&&(u=Math.min(u,b)),u})}}return r!==e.space&&(c=nt(c,e.space)),e.coords=c.coords,e}dr.returns="color";var Au={WHITE:{space:Rn,coords:[1,0,0],alpha:1},BLACK:{space:Rn,coords:[0,0,0],alpha:1}};function $g(e,{space:t}={}){e=Le(e),t||(t=e.space),t=ye.get(t);const a=ye.get("oklch");if(t.isUnbounded)return nt(e,t);const s=nt(e,a);let c=s.coords[0];if(c>=1){const g=nt(Au.WHITE,t);return g.alpha=e.alpha,nt(g,t)}if(c<=0){const g=nt(Au.BLACK,t);return g.alpha=e.alpha,nt(g,t)}if(zr(s,t,{epsilon:0}))return nt(s,t);function d(g){const k=nt(g,t),_=Object.values(t.coords);return k.coords=k.coords.map((A,S)=>{if("range"in _[S]){const[C,T]=_[S].range;return ji(C,A,T)}return A}),k}let u=0,h=s.coords[1],f=!0,b=lo(s),v=d(b),m=Us(v,b);if(m<.02)return v;for(;h-u>1e-4;){const g=(u+h)/2;if(b.coords[1]=g,f&&zr(b,t,{epsilon:0}))u=g;else if(v=d(b),m=Us(v,b),m<.02){if(.02-m<1e-4)break;f=!1,u=g}else h=g}return v}function nt(e,t,{inGamut:r}={}){e=Le(e),t=ye.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=dr(a,r===!0?void 0:r)),a}nt.returns="color";function Qo(e,t={}){let{precision:r=rn.precision,format:i,inGamut:a=!0,coords:s,alpha:c,commas:d}=t,u,h=Le(e),f=i,b=h.parseMeta;b&&!i&&(b.format.canSerialize()&&(i=b.format,f=b.formatId),s??=b.types,c??=b.alphaType,d??=b.commas),f&&(i=h.space.getFormat(i)??ye.findFormat(f)),i||(i=h.space.getFormat("default")??ye.DEFAULT_FORMAT,f=i.name),i&&i.space&&i.space!==h.space&&(h=nt(h,i.space));let v=h.coords.slice();if(a||=i.toGamut,a&&!zr(h)&&(v=dr(lo(h),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)u=i.serialize(v,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=i.name||"color",g=i.serializeCoords(v,r,s);if(m==="color"){let C=i.id||i.ids?.[0]||h.space.cssId||h.space.id;g.unshift(C)}let k=h.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let _=c?.type??"<number>",A=c?.include===!0||i.alpha===!0||c?.include!==!1&&i.alpha!==!1&&k<1,S="";if(d??=i.commas,A){if(r!==null){let C;_==="<percentage>"&&(C="%",k*=100),k=$s(k,{precision:r,unit:C})}S=`${d?",":" /"} ${k}`}u=`${m}(${g.join(d?", ":" ")}${S})`}return u}var ei=new Dt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Mu=new Dt({id:"rec2020",name:"REC.2020",base:ei,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),Su=new Dt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Dg=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Mt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],xu=new Dt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Dg,fromXYZ_M:Mt}),Iu={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Ou=Array(3).fill("<percentage> | <number>[0, 255]"),Cu=Array(3).fill("<number>[0, 255]"),Nr=new Dt({id:"srgb",name:"sRGB",base:xu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:Ou},rgb_number:{name:"rgb",commas:!0,coords:Cu,alpha:!1},color:{},rgba:{coords:Ou,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Cu},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Iu.black,t.alpha=0):t.coords=Iu[e],t.coords)return t}}}}),Tu=new Dt({id:"p3",cssId:"display-p3",name:"P3",base:Su,fromBase:Nr.fromBase,toBase:Nr.toBase});rn.display_space=Nr;var zg;if(typeof CSS<"u"&&CSS.supports)for(let e of[an,Mu,Tu]){let t=Qo({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){rn.display_space=e;break}}function Bg(e,{space:t=rn.display_space,...r}={}){e=Le(e);let i=Qo(e,r);if(typeof CSS>"u"||CSS.supports("color",i)||!rn.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(qe)||qe(e.alpha))&&!(zg??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=lo(e),a.coords=a.coords.map(wt),a.alpha=wt(a.alpha),i=Qo(a,r),CSS.supports("color",i)))return i=new String(i),i.color=a,i;a=nt(a,t),i=new String(Qo(a,r)),i.color=a}return i}function Ng(e,t,{space:r,hue:i="shorter"}={}){e=Le(e),r||=e.space,r=ye.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>nt(h,r));let[s,c]=[e,t].map(h=>h.coords),d=s.map((h,f)=>{let b=a[f],v=c[f];return b.type==="angle"&&([h,v]=j0(i,[h,v])),Lu(h,v)}),u=Lu(e.alpha,t.alpha);return{space:r,coords:d,alpha:u}}function Lu(e,t){return qe(e)||qe(t)?e===t?null:0:e-t}function Hg(e,t){return e=Le(e),t=Le(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}function hr(e){return on(e,[Rt,"y"])}function Ru(e,t){qn(e,[Rt,"y"],t)}function Fg(e){Object.defineProperty(e.prototype,"luminance",{get(){return hr(this)},set(t){Ru(this,t)}})}var Gg=Object.freeze({__proto__:null,getLuminance:hr,register:Fg,setLuminance:Ru});function Wg(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),i=Math.max(hr(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var Ug=.56,Vg=.57,Zg=.62,jg=.65,Pu=.022,qg=1.414,Kg=.1,Yg=5e-4,Xg=1.14,$u=.027,Jg=1.14;function Du(e){return e>=Pu?e:e+(Pu-e)**qg}function uo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function Qg(e,t){t=Le(t),e=Le(e);let r,i,a,s,c,d;t=nt(t,"srgb"),[s,c,d]=t.coords.map(m=>qe(m)?0:m);let u=uo(s)*.2126729+uo(c)*.7151522+uo(d)*.072175;e=nt(e,"srgb"),[s,c,d]=e.coords.map(m=>qe(m)?0:m);let h=uo(s)*.2126729+uo(c)*.7151522+uo(d)*.072175,f=Du(u),b=Du(h),v=b>f;return Math.abs(b-f)<Yg?i=0:v?(r=b**Ug-f**Vg,i=r*Xg):(r=b**jg-f**Zg,i=r*Jg),Math.abs(i)<Kg?a=0:i>0?a=i-$u:a=i+$u,a*100}function em(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),i=Math.max(hr(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var tm=5e4;function nm(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),i=Math.max(hr(t),0);return i>r&&([r,i]=[i,r]),i===0?tm:(r-i)/i}function rm(e,t){e=Le(e),t=Le(t);let r=on(e,[an,"l"]),i=on(t,[an,"l"]);return Math.abs(r-i)}var om=216/24389,zu=24/116,na=24389/27,Qs=Ht.D65,el=new ye({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Qs,base:Rt,fromBase(e){let t=e.map((r,i)=>r/Qs[i]).map(r=>r>om?Math.cbrt(r):(na*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>zu?Math.pow(t[0],3):(116*t[0]-16)/na,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/na,t[2]>zu?Math.pow(t[2],3):(116*t[2]-16)/na].map((r,i)=>r*Qs[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),tl=Math.pow(5,.5)*.5+.5;function im(e,t){e=Le(e),t=Le(t);let r=on(e,[el,"l"]),i=on(t,[el,"l"]),a=Math.abs(Math.pow(r,tl)-Math.pow(i,tl)),s=Math.pow(a,1/tl)*Math.SQRT2-40;return s<7.5?0:s}var ra=Object.freeze({__proto__:null,contrastAPCA:Qg,contrastDeltaPhi:im,contrastLstar:rm,contrastMichelson:em,contrastWCAG21:Wg,contrastWeber:nm});function am(e,t,r){io(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(ra).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Le(e),t=Le(t);for(let s in ra)if("contrast"+i.toLowerCase()===s.toLowerCase())return ra[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function oa(e){let[t,r,i]=Xo(e,Rt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function Bu(e){let[t,r,i]=Xo(e,Rt),a=t+r+i;return[t/a,r/a]}function sm(e){Object.defineProperty(e.prototype,"uv",{get(){return oa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Bu(this)}})}var lm=Object.freeze({__proto__:null,register:sm,uv:oa,xy:Bu});function ti(e,t,r={}){io(r)&&(r={method:r});let{method:i=rn.deltaE,...a}=r;for(let s in co)if("deltae"+i.toLowerCase()===s.toLowerCase())return co[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}function Nu(e,t=.25){return qn(e,[ye.get("oklch","lch"),"l"],r=>r*(1+t))}function Hu(e,t=.25){return qn(e,[ye.get("oklch","lch"),"l"],r=>r*(1-t))}Nu.returns="color",Hu.returns="color";var cm=Object.freeze({__proto__:null,darken:Hu,lighten:Nu});function Fu(e,t,r,i={}){return[e,t]=[Le(e),Le(t)],lr(r)==="object"&&([r,i]=[.5,r]),ni(e,t,i)(r??.5)}function Gu(e,t,r={}){let i;nl(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:d=1e3,...u}=r;i||([e,t]=[Le(e),Le(t)],i=ni(e,t,u));let h=ti(e,t),f=a>0?Math.max(c,Math.ceil(h/a)+1):c,b=[];if(d!==void 0&&(f=Math.min(f,d)),f===1)b=[{p:.5,color:i(.5)}];else{let v=1/(f-1);b=Array.from({length:f},(m,g)=>{let k=g*v;return{p:k,color:i(k)}})}if(a>0){let v=b.reduce((m,g,k)=>{if(k===0)return 0;let _=ti(g.color,b[k-1].color,s);return Math.max(m,_)},0);for(;v>a;){v=0;for(let m=1;m<b.length&&b.length<d;m++){let g=b[m-1],k=b[m],_=(k.p+g.p)/2,A=i(_);v=Math.max(v,ti(A,g.color),ti(A,k.color)),b.splice(m,0,{p:_,color:i(_)}),m++}}}return b=b.map(v=>v.color),b}function ni(e,t,r={}){if(nl(e)){let[u,h]=[e,t];return ni(...u.rangeArgs.colors,{...u.rangeArgs.options,...h})}let{space:i,outputSpace:a,progression:s,premultiplied:c}=r;e=Le(e),t=Le(t),e=lo(e),t=lo(t);let d={colors:[e,t],options:r};if(i?i=ye.get(i):i=ye.registry[rn.interpolationSpace]||e.space,a=a?ye.get(a):i,e=nt(e,i),t=nt(t,i),e=dr(e),t=dr(t),i.coords.h&&i.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",h=[i,"h"],[f,b]=[on(e,h),on(t,h)];qe(f)&&!qe(b)?f=b:qe(b)&&!qe(f)&&(b=f),[f,b]=j0(u,[f,b]),qn(e,h,f),qn(t,h,b)}return c&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let h=e.coords.map((v,m)=>{let g=t.coords[m];return Yo(v,g,u)}),f=Yo(e.alpha,t.alpha,u),b={space:i,coords:h,alpha:f};return c&&(b.coords=b.coords.map(v=>v/f)),a!==i&&(b=nt(b,a)),b},{rangeArgs:d})}function nl(e){return lr(e)==="function"&&!!e.rangeArgs}rn.interpolationSpace="lab";function um(e){e.defineFunction("mix",Fu,{returns:"color"}),e.defineFunction("range",ni,{returns:"function<color>"}),e.defineFunction("steps",Gu,{returns:"array<color>"})}var dm=Object.freeze({__proto__:null,isRange:nl,mix:Fu,range:ni,register:um,steps:Gu}),hm=new ye({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Nr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[c,d,u]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(d=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case i:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-i)/h+2;break;case s:c=(i-a)/h+4}c=c*60}return d<0&&(c+=180,d=Math.abs(d)),c>=360&&(c-=360),[c,d*100,u*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let c=(s+t/30)%12,d=r*Math.min(i,1-i);return i-d*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Wu=new ye({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Nr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[c,d,u]=[null,0,t],h=t-r;if(h!==0){switch(t){case i:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-i)/h+2;break;case s:c=(i-a)/h+4}c=c*60}return u&&(d=h/u),c>=360&&(c-=360),[c,d*100,u*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let c=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fm=new ye({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Wu,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Uu=new Dt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),pm=new Dt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Uu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Vu=new Dt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Gs,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),gm=1/512,mm=16/512,vm=new Dt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Vu,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<mm?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=gm?r*i**(1/1.8):16*t})}}),ia=1.09929682680944,Zu=.018053968510807,bm=new Dt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:ei,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<Zu*4.5?t/4.5:r*Math.pow((i+ia-1)/ia,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=Zu?r*(ia*Math.pow(i,.45)-(ia-1)):4.5*t})}}),wm=new ye({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Rn,fromBase:sn.fromBase,toBase:sn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),ho=2*Math.PI,aa=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],sa=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],rl=Number.MAX_VALUE,ri=.206,ol=.03,oi=(1+ri)/(1+ol);function Pt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function ii(e){return .5*(oi*e-ri+Math.sqrt((oi*e-ri)*(oi*e-ri)+4*ol*oi*e))}function fo(e){return(e**2+ri*e)/(oi*(e+ol))}function il(e){let[t,r]=e;return[r/t,r/(1-t)]}function _m(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function al(e,t){let r=pt(e,ur);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,pt(r,t,r)}function la(e,t,r,i){let a=km(e,t,r,i),s=al([1,a*e,a*t],r),c=_t(1/Math.max(...s),1/3);return[c,c*a]}function ym(e,t,r,i,a,s,c,d){let u;if(d===void 0&&(d=la(e,t,s,c)),(r-a)*d[1]-(d[0]-a)*i<=0)u=d[1]*a/(i*d[0]+d[1]*(a-r));else{u=d[1]*(a-1)/(i*(d[0]-1)+d[1]*(a-r));let h=r-a,f=i,b=Pt(ur[0].slice(1),[e,t]),v=Pt(ur[1].slice(1),[e,t]),m=Pt(ur[2].slice(1),[e,t]),g=h+f*b,k=h+f*v,_=h+f*m,A=a*(1-u)+u*r,S=u*i,C=A+S*b,T=A+S*v,$=A+S*m,q=C**3,W=T**3,oe=$**3,H=3*g*C**2,pe=3*k*T**2,we=3*_*$**2,R=6*g**2*C,K=6*k**2*T,E=6*_**2*$,J=Pt(s[0],[q,W,oe])-1,Ie=Pt(s[0],[H,pe,we]),ie=Pt(s[0],[R,K,E]),Se=Ie/(Ie*Ie-.5*J*ie),ae=-J*Se,Ee=Pt(s[1],[q,W,oe])-1,F=Pt(s[1],[H,pe,we]),G=Pt(s[1],[R,K,E]),Ae=F/(F*F-.5*Ee*G),ge=-Ee*Ae,de=Pt(s[2],[q,W,oe])-1,Ye=Pt(s[2],[H,pe,we]),kt=Pt(s[2],[R,K,E]),De=Ye/(Ye*Ye-.5*de*kt),We=-de*De;ae=Se>=0?ae:rl,ge=Ae>=0?ge:rl,We=De>=0?We:rl,u+=Math.min(ae,Math.min(ge,We))}return u}function ju(e,t,r){let[i,a,s]=e,c=la(a,s,t,r),d=ym(a,s,i,1,i,t,r,c),u=il(c),h=d/Math.min(i*u[0],(1-i)*u[1]),f=_m(a,s),b=i*f[0],v=(1-i)*f[1],m=.9*h*Math.sqrt(Math.sqrt(1/(1/b**4+1/v**4)));return b=i*.4,v=(1-i)*.8,[Math.sqrt(1/(1/b**2+1/v**2)),m,d]}function km(e,t,r,i){let a,s,c,d,u,h,f,b;Pt(i[0][0],[e,t])>1?([a,s,c,d,u]=i[0][1],[h,f,b]=r[0]):Pt(i[1][0],[e,t])>1?([a,s,c,d,u]=i[1][1],[h,f,b]=r[1]):([a,s,c,d,u]=i[2][1],[h,f,b]=r[2]);let v=a+s*e+c*t+d*e**2+u*e*t,m=Pt(ur[0].slice(1),[e,t]),g=Pt(ur[1].slice(1),[e,t]),k=Pt(ur[2].slice(1),[e,t]),_=1+v*m,A=1+v*g,S=1+v*k,C=_**3,T=A**3,$=S**3,q=3*m*_**2,W=3*g*A**2,oe=3*k*S**2,H=6*m**2*_,pe=6*g**2*A,we=6*k**2*S,R=h*C+f*T+b*$,K=h*q+f*W+b*oe,E=h*H+f*pe+b*we;return v=v-R*K/(K**2-.5*R*E),v}function Em(e,t,r){let[i,a,s]=e,c=fo(s),d=null,u=null;if(i=bn(i)/360,c!==0&&c!==1&&a!==0){let h=Math.cos(ho*i),f=Math.sin(ho*i),[b,v,m]=ju([c,h,f],t,r),g=.8,k=1.25,_,A,S,C;a<g?(_=k*a,A=0,S=g*b,C=1-S/v):(_=5*(a-.8),A=v,S=.2*v**2*1.25**2/b,C=1-S/(m-v));let T=A+_*S/(1-C*_);d=T*h,u=T*f}return[c,d,u]}function Am(e,t,r){let i=1e-7,a=1e-4,s=e[0],c=0,d=ii(s),u=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/ho;if(d!==0&&d!==1&&u!==0){let[b,v,m]=ju([s,e[1]/u,e[2]/u],t,r),g=.8,k=1.25,_,A,S,C;u<v?(A=g*b,S=1-A/v,C=u/(A+S*u),c=C*g):(_=v,A=.2*v**2*k**2/b,S=1-A/(m-v),C=(u-_)/(A+S*(u-_)),c=g+.2*C)}const f=Math.abs(c)<a;return f||d===0||Math.abs(1-d)<i?(h=null,f||(c=0)):h=bn(h*360),[h,c,d]}var Mm=new ye({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Rn,gamutSpace:"self",fromBase(e){return Am(e,aa,sa)},toBase(e){return Em(e,aa,sa)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),qu=new ye({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Rn,fromBase(e){return[ii(e[0]),e[1],e[2]]},toBase(e){return[fo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Sm=new ye({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qu,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function xm(e,t,r){let[i,a,s]=e;i=bn(i)/360;let c=fo(s),d=null,u=null;if(c!==0&&a!==0){let h=Math.cos(ho*i),f=Math.sin(ho*i),[b,v]=il(la(h,f,t,r)),m=.5,g=1-m/b,k=1-a*m/(m+v-v*g*a),_=a*v*m/(m+v-v*g*a);c=s*k;let A=s*_,S=fo(k),C=_*S/k,T=fo(c);A=A*T/c,c=T;let[$,q,W]=al([S,h*C,f*C],t),oe=_t(1/Math.max(Math.max($,q),Math.max(W,0)),1/3);c=c*oe,A=A*oe,d=A*h,u=A*f}return[c,d,u]}function Im(e,t,r){let i=1e-4,a=e[0],s=0,c=ii(a),d=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/ho;if(a!==0&&a!==1&&d!==0){let h=e[1]/d,f=e[2]/d,[b,v]=il(la(h,f,t,r)),m=.5,g=1-m/b,k=v/(d+a*v),_=k*a,A=k*d,S=fo(_),C=A*S/_,[T,$,q]=al([S,h*C,f*C],t),W=_t(1/Math.max(Math.max(T,$),Math.max(q,0)),1/3);a=a/W,d=d/W,d=d*ii(a)/a,a=ii(a),c=a/_,s=(m+v)*A/(v*m+v*g*A)}return Math.abs(s)<i||c===0?u=null:u=bn(u*360),[u,s,c]}var Om=new ye({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Rn,gamutSpace:"self",fromBase(e){return Im(e,aa,sa)},toBase(e){return xm(e,aa,sa)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ku=Ht.D65,Cm=216/24389,Yu=24389/27,[Xu,Ju]=oa({space:Rt,coords:Ku}),Qu=new ye({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ku,base:Rt,fromBase(e){let t=[wt(e[0]),wt(e[1]),wt(e[2])],r=t[1],[i,a]=oa({space:Rt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=Cm?Yu*r:116*Math.cbrt(r)-16;return[s,13*s*(i-Xu),13*s*(a-Ju)]},toBase(e){let[t,r,i]=e;if(t===0||qe(t))return[0,0,0];r=wt(r),i=wt(i);let a=r/(13*t)+Xu,s=i/(13*t)+Ju,c=t<=8?t/Yu:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),sl=new ye({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qu,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Tm=216/24389,Lm=24389/27,ed=Mt[0][0],td=Mt[0][1],ll=Mt[0][2],nd=Mt[1][0],rd=Mt[1][1],cl=Mt[1][2],od=Mt[2][0],id=Mt[2][1],ul=Mt[2][2];function po(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function ca(e){const t=Math.pow(e+16,3)/1560896,r=t>Tm?t:e/Lm,i=r*(284517*ed-94839*ll),a=r*(838422*ll+769860*td+731718*ed),s=r*(632260*ll-126452*td),c=r*(284517*nd-94839*cl),d=r*(838422*cl+769860*rd+731718*nd),u=r*(632260*cl-126452*rd),h=r*(284517*od-94839*ul),f=r*(838422*ul+769860*id+731718*od),b=r*(632260*ul-126452*id);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/u,g0i:d*e/u,g1s:c/(u+126452),g1i:(d-769860)*e/(u+126452),b0s:h/b,b0i:f*e/b,b1s:h/(b+126452),b1i:(f-769860)*e/(b+126452)}}function ad(e,t){const r=t/360*Math.PI*2,i=po(e.r0s,e.r0i,r),a=po(e.r1s,e.r1i,r),s=po(e.g0s,e.g0i,r),c=po(e.g1s,e.g1i,r),d=po(e.b0s,e.b0i,r),u=po(e.b1s,e.b1i,r);return Math.min(i,a,s,c,d,u)}var Rm=new ye({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:sl,gamutSpace:Nr,fromBase(e){let[t,r,i]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/ad(ca(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=ad(ca(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Mt[0][0],Mt[0][1],Mt[0][2],Mt[1][0],Mt[1][1],Mt[1][2],Mt[2][0],Mt[2][1],Mt[2][2];function go(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function sd(e){let t=go(e.r0s,e.r0i),r=go(e.r1s,e.r1i),i=go(e.g0s,e.g0i),a=go(e.g1s,e.g1i),s=go(e.b0s,e.b0i),c=go(e.b1s,e.b1i);return Math.min(t,r,i,a,s,c)}var Pm=new ye({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:sl,gamutSpace:"self",fromBase(e){let[t,r,i]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/sd(ca(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=sd(ca(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),dl=new Dt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:ei.toBase,fromBase:ei.fromBase}),ld=203,cd=2610/2**14,$m=2**14/2610,Dm=2523/2**5,ud=2**5/2523,dd=3424/2**12,hd=2413/2**7,fd=2392/2**7,zm=new Dt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:dl,toBase(e){return e.map(function(t){return(Math.max(t**ud-dd,0)/(hd-fd*t**ud))**$m*1e4/ld})},fromBase(e){return e.map(function(t){let r=Math.max(t*ld/1e4,0);return((dd+hd*r**cd)/(1+fd*r**cd))**Dm})}}),pd=.17883277,gd=.28466892,md=.55991073,hl=3.7743,Bm=new Dt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:dl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*hl:(Math.exp((t-md)/pd)+gd)/12*hl})},fromBase(e){return e.map(function(t){return t/=hl,t<=1/12?_t(3*t,.5):pd*Math.log(12*t-gd)+md})}}),vd={};cr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=bd(e.W1,e.W2,e.options.method))}),cr.add("chromatic-adaptation-end",e=>{e.M||(e.M=bd(e.W1,e.W2,e.options.method))});function ua({id:e,toCone_M:t,fromCone_M:r}){vd[e]=arguments[0]}function bd(e,t,r="Bradford"){let i=vd[r],[a,s,c]=Ko(i.toCone_M,e),[d,u,h]=Ko(i.toCone_M,t),f=Ko([[d/a,0,0],[0,u/s,0],[0,0,h/c]],i.toCone_M);return Ko(i.fromCone_M,f)}ua({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ua({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ua({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ua({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Ht,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Ht.ACES=[.32168/.33767,1,.34065/.33767];var wd=new Dt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ht.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),da=2**-16,fl=-.35828683,ha=(Math.log2(65504)+9.72)/17.52,Nm=new Dt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[fl,ha],name:"Red"},g:{range:[fl,ha],name:"Green"},b:{range:[fl,ha],name:"Blue"}},referred:"scene",base:wd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-da)*2:r<ha?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(da)+9.72)/17.52:t<da?(Math.log2(da+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),_d=Object.freeze({__proto__:null,A98RGB:pm,A98RGB_Linear:Uu,ACEScc:Nm,ACEScg:wd,CAM16_JMh:Sg,HCT:Jo,HPLuv:Pm,HSL:hm,HSLuv:Rm,HSV:Wu,HWB:fm,ICTCP:qs,JzCzHz:js,Jzazbz:au,LCH:sn,LCHuv:sl,Lab:an,Lab_D65:el,Luv:Qu,OKLCH:wm,OKLab:Rn,OKLrCH:Sm,OKLrab:qu,Okhsl:Mm,Okhsv:Om,P3:Tu,P3_Linear:Su,ProPhoto:vm,ProPhoto_Linear:Vu,REC_2020:Mu,REC_2020_Linear:ei,REC_2020_Scene_Referred:bm,REC_2100_HLG:Bm,REC_2100_Linear:dl,REC_2100_PQ:zm,XYZ_ABS_D65:Vs,XYZ_D50:Gs,XYZ_D65:Rt,sRGB:Nr,sRGB_Linear:xu}),lt=class nn{constructor(...t){let r;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Le(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:ye.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=qe(s)?s:s===void 0?1:ji(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:d=>this.set(c,d)})}get spaceId(){return this.space.id}clone(){return new nn(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Bg(this,...t);return r.color=new nn(r.color),r}static get(t,...r){return ao(t,this)?t:new nn(t,...r)}static try(t,r){if(ao(t,this))return t;let i=V0(t,r);return i?new nn(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,c=function(...d){let u=r(...d);if(s==="color")u=nn.get(u);else if(s==="function<color>"){let h=u;u=function(...f){let b=h(...f);return nn.get(b)},Object.assign(u,h)}else s==="array<color>"&&(u=u.map(h=>nn.get(h)));return u};t in nn||(nn[t]=c),a&&(nn.prototype[t]=function(...d){return c(this,...d)})}static defineFunctions(t){for(let r in t)nn.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(nn);else for(let r in t)nn.defineFunction(r,t[r])}};lt.defineFunctions({get:on,getAll:Xo,set:qn,setAll:Fs,to:nt,equals:Hg,inGamut:zr,toGamut:dr,distance:J0,deltas:Ng,toString:Qo}),Object.assign(lt,{util:Gp,hooks:cr,WHITES:Ht,Space:ye,spaces:ye.registry,parse:W0,defaults:rn});for(let e of Object.keys(_d))ye.register(_d[e]);for(let e in ye.registry)pl(e,ye.registry[e]);cr.add("colorspace-init-end",e=>{pl(e.id,e),e.aliases?.forEach(t=>{pl(t,e)})});function pl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(lt.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,c)=>{try{return ye.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,d)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:u}=ye.resolveCoord([t,c]);if(u>=0)return s[u]}return Reflect.get(s,c,d)},set:(s,c,d,u)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:h}=ye.resolveCoord([t,c]);if(h>=0)return s[h]=d,this.setAll(e,s),!0}return Reflect.set(s,c,d,u)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}lt.extend(co),lt.extend({deltaE:ti}),Object.assign(lt,{deltaEMethods:co}),lt.extend(cm),lt.extend({contrast:am}),lt.extend(lm),lt.extend(Gg),lt.extend(dm),lt.extend(ra);var gl={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},yt={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function Hm(e){try{lt.get(e)}catch{return!0}return lt.contrast(e,"white","Lstar")>lt.contrast(e,"black","Lstar")}function mo(e){return Hm(e)?"#FFFFFF":"#000000"}function ai(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var fa=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Fm(e,t,r,i){let a="";for(let s=0;s<=e;s+=5){const c=oo` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${fa(s)}"
    />`;if(a+=c,s!==0&&s%50===0){const d=oo` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${fa(s)}px"
      >
        ${s}
      </text>`;a+=d}}for(let s=0;s<=t;s+=5){const c=oo` <line
      x1="0"
      y1="${s}"
      x2="${fa(s)}"
      y2="${s}"
    />`;if(a+=c,s!==0&&s%50===0){const d=oo` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${fa(s)}px"
      >
        ${s}
      </text>`;a+=d}}return oo` <svg
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
  </svg>`}function Ft(e,t,r="#0F1C3F",i="#ECEAD9"){return ai(Fm(e,t,r,i))}var yd=xe.default.values(yt).map(e=>e[900]),kd=[400,600,900,1200,1400,1600,1970],Ed=[600,800,1e3,1200,1400,2e3,2600];function Gm(){const e=Math.floor(Math.random()*kd.length),t=Math.floor(Math.random()*Ed.length),r=Math.floor(Math.random()*yd.length);return Ft(kd[e],Ed[t],yd[r])}var Ad={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[Be.RAW],category:Ge.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:t,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Ft(1970,1400,"#2D1657"),Ft(985,1400,"#152C55"),Ft(985,1400,"#7A1420"),Ft(1970,1400,"#806D15"),Ft(985,1400,"#0F5B30"),Ft(1970,1400,"#1a3e3c"),Ft(985,1400,"#480f5b"),Ft(985,1400,"#a9bf7a"),Ft(985,1400,"#147a56"),Ft(1970,1400,"#190343"),Ft(985,1400,"#d5b91e"),Ft(985,1400,"#836ecd"),Ft(985,1400,"#bf19b2"),Ft(985,1400,"#152055"),...Array(t).fill(0).map(Gm)]}}},Wm=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Um=/.(png|jpg|jpeg|gif|bmp|webp)$/i,Md=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function Vm(e){return Wm.includes(e.type)}var Zm=e=>{const t=new Uint8Array(e),r=new Blob([t.buffer]);return URL.createObjectURL(r)};async function jm(e){const t=await D0.default.loadAsync(e),r=t.filter((i,a)=>!a.dir&&Um.test(a.name)).sort((i,a)=>Md(i.name,a.name));return ke("Files in zip:",t.files),Promise.all(r.map(i=>i.async("arraybuffer").then(Zm)))}function Sd(e,t){bh([{...Ad,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>ke("Page loaded"))}async function qm(e){const t=await jm(e);Sd(typeof e=="string"?e:e.name,t)}function xd(e){const t=e.target,r=Array.from(t.files).filter(Vm).sort((i,a)=>Md(i.webkitRelativePath||i.name,a.webkitRelativePath||a.name));ke("Local Files: ",r,r.map(i=>i.webkitRelativePath||i.name)),t.files?.[0]&&Sd(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",r.map(URL.createObjectURL))}function Km(){return Ad.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&qm(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",xd),document.querySelector("#images")?.addEventListener("change",xd),ke("Waiting for zip/images upload")),!0):!1}var pa=globalThis,ml=pa.ShadowRoot&&(pa.ShadyCSS===void 0||pa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vl=Symbol(),Id=new WeakMap,Od=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==vl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ml&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Id.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Id.set(t,e))}return e}toString(){return this.cssText}},Kt=e=>new Od(typeof e=="string"?e:e+"",void 0,vl),Ot=(e,...t)=>new Od(e.length===1?e[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,vl),Ym=(e,t)=>{if(ml)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=pa.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},Cd=ml?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Kt(r)})(e):e,{is:Xm,defineProperty:Jm,getOwnPropertyDescriptor:Qm,getOwnPropertyNames:e5,getOwnPropertySymbols:t5,getPrototypeOf:n5}=Object,ga=globalThis,Td=ga.trustedTypes,r5=Td?Td.emptyScript:"",o5=ga.reactiveElementPolyfillSupport,si=(e,t)=>e,ma={toAttribute(e,t){switch(t){case Boolean:e=e?r5:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bl=(e,t)=>!Xm(e,t),Ld={attribute:!0,type:String,converter:ma,reflect:!1,useDefault:!1,hasChanged:bl};Symbol.metadata??=Symbol("metadata"),ga.litPropertyMetadata??=new WeakMap;var vo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ld){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Jm(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=Qm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const c=i?.call(this);a?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ld}static _$Ei(){if(this.hasOwnProperty(si("elementProperties")))return;const e=n5(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(si("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(si("properties"))){const t=this.properties,r=[...e5(t),...t5(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Cd(i))}else e!==void 0&&t.push(Cd(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ym(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ma).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ma;this._$Em=i;const c=s.fromAttribute(t,a.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??bl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,c=this[i];s!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};vo.elementStyles=[],vo.shadowRootOptions={mode:"open"},vo[si("elementProperties")]=new Map,vo[si("finalized")]=new Map,o5?.({ReactiveElement:vo}),(ga.reactiveElementVersions??=[]).push("2.1.2");var wl=globalThis,Qe=class extends vo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return jn}};Qe._$litElement$=!0,Qe.finalized=!0,wl.litElementHydrateSupport?.({LitElement:Qe});var i5=wl.litElementPolyfillSupport;i5?.({LitElement:Qe}),(wl.litElementVersions??=[]).push("4.2.2");var dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},a5={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:bl},s5=(e=a5,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,u,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(i==="setter"){const{name:c}=r;return function(d){const u=this[c];t.call(this,d),this.requestUpdate(c,u,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function he(e){return(t,r)=>typeof r=="object"?s5(e,t,r):((i,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function ln(e){return he({...e,state:!0,attribute:!1})}var Rd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Hr(e,t){return(r,i,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:d}=typeof i=="object"?r:a??(()=>{const u=Symbol();return{get(){return this[u]},set(h){this[u]=h}}})();return Rd(r,i,{get(){let u=c.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&d.call(this,u)),u}})}return Rd(r,i,{get(){return s(this)}})}}var va=class extends Ui{constructor(e){if(super(e),this.it=$e,e.type!==Wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$e||e==null)return this._t=void 0,this.it=e;if(e===jn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};va.directiveName="unsafeHTML",va.resultType=1;var Pd=Vo(va),_l=class extends va{};_l.directiveName="unsafeSVG",_l.resultType=2;var $d=Vo(_l);function Dd(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var l5=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",c5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',u5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',d5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',h5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',f5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',p5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',g5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',m5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',v5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',b5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',_5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',y5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',k5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',E5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',A5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',M5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',S5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',x5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',I5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',O5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',C5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',T5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',L5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',R5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',P5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',$5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,D5=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,z5=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="
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
            " id="path5107"/></g></g></g></g></svg>`,B5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',N5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,H5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',F5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',G5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',W5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',U5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',V5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',Z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',j5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',q5='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',K5=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Y5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',X5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,J5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',Q5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',ev='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',tv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',nv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',rv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',ov='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',iv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',av='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',sv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',lv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',cv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',uv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',dv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',hv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',fv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',pv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',gv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',mv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',vv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',bv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',wv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',_v='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',yv=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,kv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Ev='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',Av='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Mv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Sv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',xv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Iv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Ov='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Cv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',Tv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Lv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',Rv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',Pv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',$v='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',Dv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',zv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Bv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',Nv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',Hv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',Fv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',Gv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Wv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',Uv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Vv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',Zv=Yc({IconAdjustmentsHorizontal:()=>c5,IconAlertCircle:()=>u5,IconApiBook:()=>d5,IconArrowAutofitDown:()=>h5,IconArrowAutofitHeight:()=>f5,IconArrowAutofitLeft:()=>p5,IconArrowAutofitRight:()=>g5,IconArrowAutofitWidth:()=>m5,IconArrowBigLeft:()=>v5,IconArrowBigRight:()=>b5,IconArrowsHorizontal:()=>w5,IconArrowsLeftRight:()=>_5,IconArrowsMove:()=>y5,IconArrowsMoveVertical:()=>k5,IconArrowsVertical:()=>E5,IconBook:()=>A5,IconBookArrowLeft:()=>M5,IconBookArrowRight:()=>S5,IconBookOff:()=>x5,IconBookUpload:()=>I5,IconBookmark:()=>O5,IconBookmarkOff:()=>C5,IconBookmarks:()=>T5,IconBooksReturn:()=>L5,IconBoxAlignTop:()=>R5,IconCategory:()=>H5,IconCheck:()=>F5,IconChevronLeft:()=>G5,IconChevronRight:()=>W5,IconCircleCheck:()=>U5,IconCircleX:()=>V5,IconComic1:()=>$5,IconComic1Flat:()=>P5,IconComic2:()=>z5,IconComic2Flat:()=>D5,IconComic3:()=>N5,IconComic3Flat:()=>B5,IconDeviceFloppy:()=>Z5,IconDotsVertical:()=>j5,IconEReader1:()=>K5,IconEReader1Flat:()=>q5,IconEReader2:()=>X5,IconEReader2Flat:()=>Y5,IconExternalLink:()=>J5,IconEye:()=>Q5,IconEyeOff:()=>ev,IconFileDownload:()=>tv,IconFilePercent:()=>nv,IconHandClick:()=>rv,IconHelp:()=>ov,IconInfoCircle:()=>iv,IconKeyboard:()=>av,IconLayoutBottombar:()=>sv,IconLayoutBottombarInactive:()=>lv,IconLayoutSidebar:()=>cv,IconLayoutSidebarInactive:()=>uv,IconLayoutSidebarRight:()=>dv,IconLayoutSidebarRightInactive:()=>hv,IconListNumbers:()=>fv,IconLoader2:()=>pv,IconLocationCog:()=>gv,IconMenu2:()=>mv,IconMenuDeep:()=>vv,IconMessage:()=>bv,IconMoon:()=>wv,IconPage:()=>yv,IconPageFlat:()=>_v,IconPalette:()=>kv,IconPencil:()=>Ev,IconPencilCog:()=>Av,IconPhoto:()=>Mv,IconPhotoOff:()=>Sv,IconPin:()=>xv,IconPlayerPause:()=>Iv,IconPlayerPlay:()=>Ov,IconRefresh:()=>Cv,IconSettings:()=>Tv,IconSettingsOff:()=>Lv,IconSpacingHorizontal:()=>Rv,IconSpacingVertical:()=>Pv,IconSun:()=>$v,IconTrash:()=>Dv,IconWorldCog:()=>zv,IconX:()=>Bv,IconZoom:()=>Nv,IconZoomCancel:()=>Hv,IconZoomIn:()=>Fv,IconZoomInArea:()=>Gv,IconZoomOut:()=>Wv,IconZoomOutArea:()=>Uv,IconZoomPan:()=>Vv}),yl=Yc({IconAdjustmentsHorizontal:()=>Qv,IconAlertCircle:()=>x4,IconApiBook:()=>e4,IconArrowAutofitDown:()=>r4,IconArrowAutofitHeight:()=>o4,IconArrowAutofitLeft:()=>i4,IconArrowAutofitRight:()=>a4,IconArrowAutofitWidth:()=>s4,IconArrowBigLeft:()=>l4,IconArrowBigRight:()=>c4,IconArrowsHorizontal:()=>t4,IconArrowsLeftRight:()=>n4,IconArrowsMove:()=>u4,IconArrowsMoveVertical:()=>d4,IconArrowsVertical:()=>h4,IconBook:()=>f4,IconBookArrowLeft:()=>g4,IconBookArrowRight:()=>m4,IconBookOff:()=>p4,IconBookUpload:()=>b4,IconBookmark:()=>w4,IconBookmarkOff:()=>_4,IconBookmarks:()=>y4,IconBooksReturn:()=>v4,IconBoxAlignTop:()=>k4,IconCategory:()=>E4,IconCheck:()=>A4,IconChevronLeft:()=>M4,IconChevronRight:()=>S4,IconCircleCheck:()=>I4,IconCircleX:()=>O4,IconComic1:()=>L4,IconComic1Flat:()=>R4,IconComic2:()=>P4,IconComic2Flat:()=>$4,IconComic3:()=>D4,IconComic3Flat:()=>z4,IconDeviceFloppy:()=>B4,IconDotsVertical:()=>N4,IconEReader1:()=>H4,IconEReader1Flat:()=>F4,IconEReader2:()=>G4,IconEReader2Flat:()=>W4,IconExternalLink:()=>U4,IconEye:()=>V4,IconEyeOff:()=>Z4,IconFileDownload:()=>j4,IconFilePercent:()=>q4,IconHandClick:()=>K4,IconHelp:()=>C4,IconInfoCircle:()=>T4,IconKeyboard:()=>Y4,IconLayoutBottombar:()=>X4,IconLayoutBottombarInactive:()=>J4,IconLayoutSidebar:()=>Q4,IconLayoutSidebarInactive:()=>e3,IconLayoutSidebarRight:()=>t3,IconLayoutSidebarRightInactive:()=>n3,IconListNumbers:()=>r3,IconLoader2:()=>o3,IconLocationCog:()=>i3,IconMenu2:()=>a3,IconMenuDeep:()=>s3,IconMessage:()=>l3,IconMoon:()=>c3,IconPage:()=>u3,IconPageFlat:()=>d3,IconPalette:()=>h3,IconPencil:()=>f3,IconPencilCog:()=>p3,IconPhoto:()=>kl,IconPhotoOff:()=>El,IconPin:()=>g3,IconPlayerPause:()=>m3,IconPlayerPlay:()=>v3,IconRefresh:()=>b3,IconSettings:()=>w3,IconSettingsOff:()=>_3,IconSpacingHorizontal:()=>y3,IconSpacingVertical:()=>k3,IconSun:()=>E3,IconTrash:()=>A3,IconWorldCog:()=>M3,IconX:()=>S3,IconZoom:()=>x3,IconZoomCancel:()=>I3,IconZoomIn:()=>O3,IconZoomInArea:()=>C3,IconZoomOut:()=>T3,IconZoomOutArea:()=>L3,IconZoomPan:()=>R3});function jv(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var qv=jv(l5),ba=new Map;for(const e of qv)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),ba.has(i)||ba.set(i,[]),ba.get(i)?.push({subSelector:s,color:e.color})}var Kv=new DOMParser,Yv=new XMLSerializer;function Xv(e,t){const r=ba.get(t);if(!r?.length)return e;const i=Kv.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return Yv.serializeToString(i)}var Jv=xe.default.mapValues(Zv,(e,t)=>Xv(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:Qv,IconApiBook:e4,IconArrowsHorizontal:t4,IconArrowsLeftRight:n4,IconArrowAutofitDown:r4,IconArrowAutofitHeight:o4,IconArrowAutofitLeft:i4,IconArrowAutofitRight:a4,IconArrowAutofitWidth:s4,IconArrowBigLeft:l4,IconArrowBigRight:c4,IconArrowsMove:u4,IconArrowsMoveVertical:d4,IconArrowsVertical:h4,IconBook:f4,IconBookOff:p4,IconBookArrowLeft:g4,IconBookArrowRight:m4,IconBooksReturn:v4,IconBookUpload:b4,IconBookmark:w4,IconBookmarkOff:_4,IconBookmarks:y4,IconBoxAlignTop:k4,IconCategory:E4,IconCheck:A4,IconChevronLeft:M4,IconChevronRight:S4,IconAlertCircle:x4,IconCircleCheck:I4,IconCircleX:O4,IconHelp:C4,IconInfoCircle:T4,IconComic1:L4,IconComic1Flat:R4,IconComic2:P4,IconComic2Flat:$4,IconComic3:D4,IconComic3Flat:z4,IconDeviceFloppy:B4,IconDotsVertical:N4,IconEReader1:H4,IconEReader1Flat:F4,IconEReader2:G4,IconEReader2Flat:W4,IconExternalLink:U4,IconEye:V4,IconEyeOff:Z4,IconFileDownload:j4,IconFilePercent:q4,IconHandClick:K4,IconKeyboard:Y4,IconLayoutBottombar:X4,IconLayoutBottombarInactive:J4,IconLayoutSidebar:Q4,IconLayoutSidebarInactive:e3,IconLayoutSidebarRight:t3,IconLayoutSidebarRightInactive:n3,IconListNumbers:r3,IconLoader2:o3,IconLocationCog:i3,IconMenu2:a3,IconMenuDeep:s3,IconMessage:l3,IconMoon:c3,IconPage:u3,IconPageFlat:d3,IconPalette:h3,IconPencil:f3,IconPencilCog:p3,IconPhoto:kl,IconPhotoOff:El,IconPin:g3,IconPlayerPause:m3,IconPlayerPlay:v3,IconRefresh:b3,IconSettings:w3,IconSettingsOff:_3,IconSpacingHorizontal:y3,IconSpacingVertical:k3,IconSun:E3,IconTrash:A3,IconWorldCog:M3,IconX:S3,IconZoom:x3,IconZoomCancel:I3,IconZoomIn:O3,IconZoomInArea:C3,IconZoomOut:T3,IconZoomOutArea:L3,IconZoomPan:R3}=Jv;function Y(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(s=(a<3?c(s):a>3?c(t,r,s):c(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Fr=class extends Qe{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Ot`
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
  `}updated(t){super.updated(t),t.has("name")&&(yl[Dd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=yl[Dd(this.name)];if(!t)return $e;const r=this.size?`--mov-icon-size: ${this.size};`:"";return le`<span
      role=${this.label?"img":$e}
      aria-label=${this.label||$e}
      aria-hidden=${this.label?$e:"true"}
      style=${r}
      >${$d(t)}</span
    >`}};Y([he({type:String})],Fr.prototype,"name",void 0),Y([he({type:String,reflect:!0})],Fr.prototype,"variant",void 0),Y([he({type:String,reflect:!0})],Fr.prototype,"family",void 0),Y([he({type:String})],Fr.prototype,"label",void 0),Y([he({type:String})],Fr.prototype,"size",void 0),Fr=Y([dt("mov-icon")],Fr);var Ct=Vo(class extends Ui{constructor(e){if(super(e),e.type!==Wi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return jn}}),cn=e=>e??$e,P3=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ct=class extends Qe{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static{this.styles=[Kt(P3)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=le`
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
          class=${Ct(r)}
          href=${cn(this.href)}
          target=${cn(this.target)}
          title=${cn(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${cn(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:le`
        <button
          part="base"
          class=${Ct(r)}
          ?disabled=${this.disabled||this.loading}
          type=${cn(this.type)}
          title=${cn(this.title)}
          name=${cn(this.name)}
          value=${cn(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),i=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};Y([Hr(".button")],ct.prototype,"button",void 0),Y([Hr("slot:not([name])")],ct.prototype,"labelSlot",void 0),Y([ln()],ct.prototype,"isIconButton",void 0),Y([ln()],ct.prototype,"hasLabel",void 0),Y([ln()],ct.prototype,"hasStart",void 0),Y([ln()],ct.prototype,"hasEnd",void 0),Y([he()],ct.prototype,"title",void 0),Y([he({reflect:!0})],ct.prototype,"appearance",void 0),Y([he({reflect:!0})],ct.prototype,"variant",void 0),Y([he({reflect:!0})],ct.prototype,"size",void 0),Y([he({attribute:"with-caret",type:Boolean,reflect:!0})],ct.prototype,"withCaret",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"disabled",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"loading",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"pill",void 0),Y([he()],ct.prototype,"type",void 0),Y([he({reflect:!0})],ct.prototype,"name",void 0),Y([he({reflect:!0})],ct.prototype,"value",void 0),Y([he({reflect:!0})],ct.prototype,"href",void 0),Y([he()],ct.prototype,"target",void 0),Y([he()],ct.prototype,"rel",void 0),Y([he()],ct.prototype,"download",void 0),Y([he({reflect:!0})],ct.prototype,"form",void 0),ct=Y([dt("mov-button")],ct);var wn=class extends Qe{constructor(...t){super(...t),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Ot`
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
        .appearance=${cn(this.appearance)}
        .size=${cn(this.size)}
        ?disabled=${cn(this.disabled)}
        ?loading=${cn(this.loading)}
        .title=${cn(this.title)}
        class=${Ct(r)}
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
    `:$e}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};Y([he({type:String})],wn.prototype,"mode",void 0),Y([he({type:Boolean,reflect:!0})],wn.prototype,"active",void 0),Y([he({type:String})],wn.prototype,"label",void 0),Y([he({type:String})],wn.prototype,"activeLabel",void 0),Y([he({type:String})],wn.prototype,"icon",void 0),Y([he({type:String})],wn.prototype,"activeIcon",void 0),Y([he({type:String,reflect:!0})],wn.prototype,"appearance",void 0),Y([he({type:String,reflect:!0})],wn.prototype,"size",void 0),Y([he({type:Boolean})],wn.prototype,"disabled",void 0),Y([he({type:Boolean,reflect:!0})],wn.prototype,"loading",void 0),wn=Y([dt("toggle-button")],wn);var zd="important",$3=" !"+zd,Fn=Vo(class extends Ui{constructor(e){if(super(e),e.type!==Wi.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith($3);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?zd:""):r[i]=a}}return jn}}),D3=xe.default.fromPairs(xe.default.entries(yl).map(([e,t])=>[e,$d(t)])),{IconAdjustmentsHorizontal:MA,IconApiBook:SA,IconArrowsHorizontal:xA,IconArrowsLeftRight:IA,IconArrowAutofitDown:OA,IconArrowAutofitHeight:z3,IconArrowAutofitLeft:CA,IconArrowAutofitRight:TA,IconArrowAutofitWidth:B3,IconArrowBigLeft:LA,IconArrowBigRight:RA,IconArrowsMove:PA,IconArrowsMoveVertical:$A,IconArrowsVertical:DA,IconBook:zA,IconBookOff:BA,IconBookArrowLeft:NA,IconBookArrowRight:HA,IconBooksReturn:FA,IconBookUpload:GA,IconBookmark:N3,IconBookmarkOff:H3,IconBookmarks:WA,IconBoxAlignTop:UA,IconCategory:F3,IconCheck:wa,IconChevronLeft:VA,IconChevronRight:ZA,IconAlertCircle:jA,IconCircleCheck:qA,IconCircleX:KA,IconHelp:YA,IconInfoCircle:XA,IconComic1:JA,IconComic1Flat:QA,IconComic2:eM,IconComic2Flat:tM,IconComic3:nM,IconComic3Flat:rM,IconDeviceFloppy:oM,IconDotsVertical:iM,IconEReader1:aM,IconEReader1Flat:sM,IconEReader2:lM,IconEReader2Flat:cM,IconExternalLink:uM,IconEye:G3,IconEyeOff:W3,IconFileDownload:dM,IconFilePercent:hM,IconHandClick:fM,IconKeyboard:pM,IconLayoutBottombar:gM,IconLayoutBottombarInactive:mM,IconLayoutSidebar:vM,IconLayoutSidebarInactive:bM,IconLayoutSidebarRight:wM,IconLayoutSidebarRightInactive:_M,IconListNumbers:yM,IconLoader2:kM,IconLocationCog:EM,IconMenu2:AM,IconMenuDeep:MM,IconMessage:SM,IconMoon:xM,IconPage:IM,IconPageFlat:OM,IconPalette:CM,IconPencil:TM,IconPencilCog:LM,IconPhoto:RM,IconPhotoOff:PM,IconPin:$M,IconPlayerPause:DM,IconPlayerPlay:zM,IconRefresh:U3,IconSettings:BM,IconSettingsOff:NM,IconSpacingHorizontal:V3,IconSpacingVertical:HM,IconSun:FM,IconTrash:WM,IconWorldCog:UM,IconX:Al,IconZoom:VM,IconZoomCancel:Z3,IconZoomIn:j3,IconZoomInArea:ZM,IconZoomOut:q3,IconZoomOutArea:jM,IconZoomPan:qM}=D3,fr=class extends Qe{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Ot`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=mo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return le`
      <div style=${Fn(t)}>
        <div
          class="swatch"
          style=${Fn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${wa} </span>
        </div>
      </div>
    `}};Y([he({type:String})],fr.prototype,"color",void 0),Y([he({type:String})],fr.prototype,"selected",void 0),Y([he({type:Number})],fr.prototype,"size",void 0),Y([he({type:String})],fr.prototype,"radius",void 0),Y([he({state:!0})],fr.prototype,"contrastColor",void 0),Y([he({type:Boolean,reflect:!0})],fr.prototype,"checked",void 0),fr=Y([dt("color-swatch")],fr);function K3(e){const[t,r,i]=e.to("oklch").coords.map(u=>u??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(u=>new lt("oklch",[u,r,i]).toString({format:"hex"}));let c=-1,d=1/0;for(let u=0;u<a.length;u++){const h=Math.abs(a[u]-t);h<d&&(d=h,c=u)}return c!==-1&&(s[c]=e.toString({format:"hex"})),s.map(u=>u.toUpperCase())}function Y3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const c=s.coords[1]??0;a>.8?s.coords[1]=c*.4:a>.6?s.coords[1]=c*.8:a<.3&&(s.coords[1]=Math.min(100,c*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function X3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function J3(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(i.lightest.lightness-50)/a,d=(50-i.darkest.lightness)/s,u=i.lightest.rotate/a,h=i.darkest.rotate/s,f=i.lightest.saturate/a,b=i.darkest.saturate/s;for(let v=1;v<=a;v++){const m=a-v,g=r.clone();g.coords[2]=(g.coords[2]??0)+c*(v-.5),g.coords[0]=(g.coords[0]??0)+u*v,g.coords[1]=(g.coords[1]??0)+f*v,t[m]=g.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let v=1;v<=s;v++){const m=a+v,g=r.clone();g.coords[2]=(g.coords[2]??0)-d*(v-.5),g.coords[0]=(g.coords[0]??0)+h*v,g.coords[1]=(g.coords[1]??0)+b*v,t[m]=g.toString({format:"hex"})}return t}function Q3(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,d=i+(100-i)*c;a[s]=new lt("hsl",[t,r-r*c,d]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,d=i-i*c,u=r+(100-r)*c;a[s+6]=new lt("hsl",[t,u,d]).toString({format:"hex"})}return a}function Bd(e,t="steps"){let r;try{r=lt.get(e)}catch{r=lt.get(gl.navy)}switch(t){case"saturation":return Y3(r);case"lightness":return X3(r);case"mantine":return Q3(r);case"chakra":return J3(r);default:return K3(r)}}var pr=class extends Qe{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Ot`
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
              style="--color: ${t}; --text-color: ${mo(t)}"
            >
              <span class="checkmark">${wa}</span>
            </div>
          </div>
        `)}
    `}};Y([he({type:String})],pr.prototype,"baseColor",void 0),Y([he({type:String})],pr.prototype,"mode",void 0),Y([he({type:String,reflect:!0})],pr.prototype,"orientation",void 0),Y([he({type:String})],pr.prototype,"selected",void 0),Y([he({type:String,reflect:!0})],pr.prototype,"value",void 0),Y([ln()],pr.prototype,"gradient",void 0),pr=Y([dt("color-palette")],pr);var _a=class extends Qe{constructor(...t){super(...t),this.value=""}static{this.styles=Ot`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(yt).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>le` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=yt[i][a],c=mo(s);return le`
          <span
            title="${s}"
            class="${Ct({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${c}"
            @click=${this.handleColorClick}
          >
            ${wa}
          </span>
        `})}</div>
      </div>`)}};Y([he({type:String,reflect:!0})],_a.prototype,"value",void 0),Y([he({type:String})],_a.prototype,"selected",void 0),_a=Y([dt("color-panel")],_a);var Pn=class extends Qe{constructor(...t){super(...t),this.value="#228be6",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&(this.opened=!1)}togglePopup(){if(this.mode==="popup"){if(!this.opened){const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left"}this.opened=!this.opened}}isSameColor(t,r){return!t||!r?!1:lt.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return le`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Fn({stroke:mo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new lt("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return le`
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
          style=${Fn(i)}
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
        ${(this.swatches||xe.default.entries(yt).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>le`
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
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?le`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Fn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?le`<div class=${Ct(t)}>${r}</div>`:""}
      `:le`<div class=${Ct(t)}>${r}</div>`}parseColor(t){try{return lt.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new lt("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),c=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};Y([he({type:String})],Pn.prototype,"value",void 0),Y([he({type:Array})],Pn.prototype,"swatches",void 0),Y([he({type:String})],Pn.prototype,"mode",void 0),Y([ln()],Pn.prototype,"opened",void 0),Y([ln()],Pn.prototype,"popupDirection",void 0),Y([ln()],Pn.prototype,"sourceSpace",void 0),Y([ln()],Pn.prototype,"hsv",void 0),Y([ln()],Pn.prototype,"saturationThumbPosition",void 0),Y([ln()],Pn.prototype,"hueThumbPosition",void 0),Pn=Y([dt("mov-color-picker")],Pn);var Nd=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},gr=class extends Qe{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),d=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${d}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return le`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>le`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:$e}"
            >
              <button
                class="${Ct({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?le`<mov-icon
                      name="${t.icon}"
                      .size=${Nd(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:$e}
                ${this.labelPosition!=="tooltip"?le`<span>${t.label}</span>`:$e}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Y([he({type:String,reflect:!0})],gr.prototype,"value",void 0),Y([he({type:String})],gr.prototype,"labelPosition",void 0),Y([he({type:String})],gr.prototype,"size",void 0),Y([ln()],gr.prototype,"_options",void 0),Y([Hr(".thumb")],gr.prototype,"thumb",void 0),Y([Hr("slot")],gr.prototype,"_slotEl",void 0),gr=Y([dt("segmented-control")],gr);var li=class extends Qe{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};Y([he({type:String,reflect:!0})],li.prototype,"value",void 0),Y([he({type:String,reflect:!0})],li.prototype,"label",void 0),Y([he({type:String,reflect:!0})],li.prototype,"icon",void 0),li=Y([dt("segmented-control-option")],li);var mr=class extends Qe{constructor(...t){super(...t),this.name="",this.checked=!1,this.disabled=!1,this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Ot`
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
        class="${Ct({switch:!0,[this.design]:!0})}"
      >
        <div class="knob">${t}</div>
      </label>
    `}};Y([he({type:String})],mr.prototype,"name",void 0),Y([he({type:Boolean,reflect:!0})],mr.prototype,"checked",void 0),Y([he({type:Boolean,reflect:!0})],mr.prototype,"disabled",void 0),Y([he({type:String,reflect:!0})],mr.prototype,"design",void 0),Y([he({type:String})],mr.prototype,"textOn",void 0),Y([he({type:String})],mr.prototype,"textOff",void 0),mr=Y([dt("mov-switch")],mr);var e6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),t6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=e6();function r(d){return t.relativeFirstCharacters.indexOf(d[0])>-1}function i(d){return d.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,h){return String.fromCharCode(h)})}function a(d){return URL.canParse(d)}function s(d){try{return decodeURIComponent(d)}catch{return d}}function c(d){if(!d)return t.BLANK_URL;var u,h=s(d.trim());do h=i(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),u=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var b=f.trimStart(),v=b.match(t.urlSchemeRegex);if(!v)return f;var m=v[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var g=b.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return g;if(m==="http:"||m==="https:"){if(!a(g))return t.BLANK_URL;var k=new URL(g);return k.protocol=k.protocol.toLowerCase(),k.hostname=k.hostname.toLowerCase(),k.toString()}return g}})),n6=gn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,f,b){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){u(v.response,f,b)},v.onerror=function(){console.error("could not download file")},v.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,d=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(h,f,b){var v=c.URL||c.webkitURL,m=document.createElement("a");f=f||h.name||"download",m.download=f,m.rel="noopener",typeof h=="string"?(m.href=h,m.origin===location.origin?s(m):a(m.href)?i(h,f,b):s(m,m.target="_blank")):(m.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,b){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,b),f);else if(a(h))i(h,f,b);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){s(v)})}}:function(h,f,b,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return i(h,f,b);var m=h.type==="application/octet-stream",g=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||m&&g||d)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var C=_.result;C=k?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=C:location=C,v=null},_.readAsDataURL(h)}else{var A=c.URL||c.webkitURL,S=A.createObjectURL(h);v?v.location=S:location.href=S,v=null,setTimeout(function(){A.revokeObjectURL(S)},4e4)}});c.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),Hd=t6(),r6=n6();function o6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function i6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ke(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ke(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ke(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function a6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ke(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ke(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function s6(e){if(e.blob)return ke(`Got blob for page ${e.src} from cache`),e.blob;const t=await i6(e)||await a6(e);return t||ke(`Failed to get blob for page ${e.src}`),t}async function l6(){Ne("download","working");const e=new D0.default,t=fe("images")??{},r=fe("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=xe.default.sortBy(xe.default.entries(t),([h])=>Number(h)),c=[],d=h=>{Ne("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:le`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${j("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",i.toString())}</p>
          <progress value='${h}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:le``})};d(0);let u=0;for(const[h,f]of s)try{const b=await s6(f);if(b){const v=o6(b.type),m=`Page-${Number(h).toString().padStart(a,"0")}.${v}`;ke(`${m} Added to Zip from Blob`),e.file(m,b,{createFolders:!0,compression:"DEFLATE"})}else c.push(f.src??h)}catch(b){ke(`Error processing page ${h}`,b),c.push(f.src??h)}finally{u+=1,d(u)}Ne("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:le`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${j("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:le``}),c.length>0&&(ke("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),ke("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{ke("Download Ready"),(0,r6.saveAs)(h,`${r?.title??document.title}.zip`,{autoBom:!1}),c.length>0?Ne("dialog",{open:!0,title:j("DOWNLOAD_INCOMPLETE"),icon:"warning",content:le`<p>${j("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:le`<mov-button @click=${()=>Ne("dialog",null)}>
            ${j("CLOSE")}
          </mov-button>`}):Ne("dialog",null)}).catch(h=>{ke("Error generating zip",h),Ne("dialog",{open:!0,title:j("WARNING"),icon:"error",content:le`<p>Error generating zip: ${h.message}</p>`,footer:le`<mov-button @click=${()=>Ne("dialog",null)}>
          ${j("CLOSE")}
        </mov-button>`})}).finally(()=>{Ne("download",void 0)})}function Fd(){fe("download")!=="working"&&(ke("Downloading Chapter"),l6().catch(e=>ke("Error downloading chapter",e)))}function c6(){qo("hidePageControls",e=>!e)}function ci(e){const t=e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,Hd.sanitizeUrl)(r):t.id==="series"&&window.history.back())}function u6(e){if(e)if(Z("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}qt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):u6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Ne("scrollToPage",void 0),10))});function d6(e){const t=e.currentTarget.value;Ne("scrollToPage",parseInt(t,10))}function h6(e){Ne("scrollToPage",e)}var Ml=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Sl(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function ui(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function Gd(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function Wd(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function f6(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function Ud(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var di={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Ml?173:189,"=":Ml?61:187,";":Ml?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},_n={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},hi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},St={16:!1,18:!1,17:!1,91:!1},ht={};for(let e=1;e<20;e++)di[`f${e}`]=111+e;var it=[],fi=null,bo=null,Vd="all",Kn=new Map,wo=e=>di[e.toLowerCase()]||_n[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),p6=e=>Object.keys(di).find(t=>di[t]===e),g6=e=>Object.keys(_n).find(t=>_n[t]===e),Zd=e=>{Vd=e||"all"},pi=()=>Vd||"all",m6=()=>it.slice(0),v6=()=>it.map(e=>p6(e)||g6(e)||String.fromCharCode(e)),b6=()=>{const e=[];return Object.keys(ht).forEach(t=>{ht[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(c=>wo(c))})})}),e},jd=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},w6=e=>(typeof e=="string"&&(e=wo(e)),it.indexOf(e)!==-1),_6=(e,t)=>{let r,i;e||(e=pi());for(const a in ht)if(Object.prototype.hasOwnProperty.call(ht,a))for(r=ht[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>xl(s)):i++;pi()===e&&Zd(t||"all")};function y6(e){let t=Ud(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=wo(e.key));const r=it.indexOf(t);if(r>=0&&it.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&it.splice(0,it.length),(t===93||t===224)&&(t=91),t in St){St[t]=!1;for(const i in _n)_n[i]===t&&(yn[i]=!1)}}var qd=(e,...t)=>{if(typeof e>"u")Object.keys(ht).forEach(r=>{Array.isArray(ht[r])&&ht[r].forEach(i=>ya(i)),delete ht[r]}),xl(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ya(r)});else if(typeof e=="object")e.key&&ya(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),ya({key:e,scope:r,method:i,splitKey:"+"})}},ya=({key:e,scope:t,method:r,splitKey:i="+"})=>{Wd(e).forEach(a=>{const s=a.split(i),c=s.length,d=s[c-1],u=d==="*"?"*":wo(d);if(!ht[u])return;t||(t=pi());const h=c>1?Gd(_n,s):[],f=[];ht[u]=ht[u].filter(b=>{const v=(r?b.method===r:!0)&&b.scope===t&&f6(b.mods,h);return v&&f.push(b.element),!v}),f.forEach(b=>xl(b))})};function Kd(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in St)Object.prototype.hasOwnProperty.call(St,s)&&(!St[s]&&t.mods.indexOf(+s)>-1||St[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!St[16]&&!St[18]&&!St[17]&&!St[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(it),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Yd(e,t){const r=ht["*"];let i=Ud(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(yn.filter||jd).call(this,e))return;if((i===93||i===224)&&(i=91),it.indexOf(i)===-1&&i!==229&&it.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(d=>{const u=hi[d];e[d]&&it.indexOf(u)===-1?it.push(u):!e[d]&&it.indexOf(u)>-1?it.splice(it.indexOf(u),1):d==="metaKey"&&e[d]&&(it=it.filter(h=>h in hi||h===i))}),i in St){St[i]=!0;for(const d in _n)Object.prototype.hasOwnProperty.call(_n,d)&&(yn[d]=e[hi[_n[d]]]);if(!r)return}for(const d in St)Object.prototype.hasOwnProperty.call(St,d)&&(St[d]=e[hi[d]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(it.indexOf(17)===-1&&it.push(17),it.indexOf(18)===-1&&it.push(18),St[17]=!0,St[18]=!0);const a=pi();if(r)for(let d=0;d<r.length;d++)r[d].scope===a&&(e.type==="keydown"&&r[d].keydown||e.type==="keyup"&&r[d].keyup)&&Kd(e,r[d],a,t);if(!(i in ht))return;const s=ht[i],c=s.length;for(let d=0;d<c;d++)if((e.type==="keydown"&&s[d].keydown||e.type==="keyup"&&s[d].keyup)&&s[d].key){const u=s[d],{splitKey:h}=u,f=u.key.split(h),b=[];for(let v=0;v<f.length;v++)b.push(wo(f[v]));b.sort().join("")===it.sort().join("")&&Kd(e,u,a,t)}}var yn=function e(t,r,i){it=[];const a=Wd(t);let s=[],c="all",d=document,u=0,h=!1,f=!0,b="+",v=!1,m=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const g=r;g.scope&&(c=g.scope),g.element&&(d=g.element),g.keyup&&(h=g.keyup),g.keydown!==void 0&&(f=g.keydown),g.capture!==void 0&&(v=g.capture),typeof g.splitKey=="string"&&(b=g.splitKey),g.single===!0&&(m=!0)}for(typeof r=="string"&&(c=r),m&&qd(t,c);u<a.length;u++){const g=a[u].split(b);s=[],g.length>1&&(s=Gd(_n,g));let k=g[g.length-1];k=k==="*"?"*":wo(k),k in ht||(ht[k]=[]),ht[k].push({keyup:h,keydown:f,scope:c,mods:s,shortcut:a[u],method:i,key:a[u],splitKey:b,element:d})}if(typeof d<"u"&&typeof window<"u"){if(!Kn.has(d)){const g=(_=window.event)=>Yd(_,d),k=(_=window.event)=>{Yd(_,d),y6(_)};Kn.set(d,{keydownListener:g,keyupListenr:k,capture:v}),Sl(d,"keydown",g,v),Sl(d,"keyup",k,v)}if(!fi){const g=()=>{it=[]};fi={listener:g,capture:v},Sl(window,"focus",g,v)}if(!bo&&typeof document<"u"){const g=()=>{it=[];for(const A in St)St[A]=!1;for(const A in _n)e[A]=!1},k=g,_=g;document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",_),bo={fullscreen:k,webkit:_}}}};function k6(e,t="all"){Object.keys(ht).forEach(r=>{ht[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function xl(e){const t=Object.values(ht).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=Kn.get(e)||{};r&&i&&(ui(e,"keyup",i,a),ui(e,"keydown",r,a),Kn.delete(e))}if(t.length<=0||Kn.size<=0){if(Array.from(Kn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=Kn.get(r)||{};i&&a&&(ui(r,"keyup",a,s),ui(r,"keydown",i,s),Kn.delete(r))}),Kn.clear(),Object.keys(ht).forEach(r=>delete ht[r]),fi){const{listener:r,capture:i}=fi;ui(window,"focus",r,i),fi=null}bo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",bo.fullscreen),document.removeEventListener("webkitfullscreenchange",bo.webkit),bo=null)}}var Il={getPressedKeyString:v6,setScope:Zd,getScope:pi,deleteScope:_6,getPressedKeyCodes:m6,getAllKeyCodes:b6,isPressed:w6,filter:jd,trigger:k6,unbind:qd,keyMap:di,modifier:_n,modifierMap:hi};for(const e in Il){const t=e;Object.prototype.hasOwnProperty.call(Il,t)&&(yn[t]=Il[t])}if(typeof window<"u"){const e=window.hotkeys;yn.noConflict=t=>(t&&window.hotkeys===yn&&(window.hotkeys=e),yn),window.hotkeys=yn}typeof module<"u"&&module.exports&&(module.exports=yn,module.exports.default=yn);function Xd(){const e=fe("chapter").value;if(Z("viewMode").startsWith("Fluid")){const t=Z("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:Z("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Ne("autoScroll",!1),ke("Finished auto scroll"))}else window.scrollBy({top:Z("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Ne("autoScroll",!1),ke("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(Xd)}function ka(){fe("autoScroll")?(Ne("autoScroll",!1),ke("Stopped auto scroll")):(Ne("autoScroll",!0),requestAnimationFrame(Xd),ke("Start auto scroll"))}var Ea=!1,E6=xe.default.debounce(()=>{ka(),Ea=!1},500);function A6(){!Ea&&fe("autoScroll")&&(ka(),Ea=!0),Ea&&!fe("autoScroll")&&E6()}function M6(){window.addEventListener("wheel",xe.default.throttle(A6,500))}function S6(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function x6(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(S6(e,t))}function I6(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function O6(e,t){I6(e),x6(e,t)}function C6(e,t){return oo`
    <style id="${e}">
      ${t}
    </style>
  `}var Gr=class extends Qe{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1}static{this.styles=Ot`
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
                    .name=${T6(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `}};Y([he({type:Boolean,reflect:!0})],Gr.prototype,"open",void 0),Y([he({type:String,reflect:!0})],Gr.prototype,"mode",void 0),Y([he({type:Boolean,reflect:!0})],Gr.prototype,"fullscreen",void 0),Y([he({type:String,reflect:!0})],Gr.prototype,"icon",void 0),Y([Hr("dialog")],Gr.prototype,"dialog",void 0),Gr=Y([dt("mov-dialog")],Gr);function Ol(e){const t=()=>Ne("dialog",null);e.timer&&setTimeout(t,e.timer),Ne("dialog",{open:!0,icon:e.icon,title:e.title,content:le`<div style="padding: 1rem;">${Pd(e.html)}</div>`,footer:le`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function T6(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function L6(e){const t=e.currentTarget.value;$0(t==="true")}function R6(e){const t=e.currentTarget.value;bt("locale",t)}function P6(e){const t=e.currentTarget.value;bt("loadMode",t)}function $6(e){const t=e.detail.checked;bt("fitWidthIfOversize",t)}function D6(e){const t=e.currentTarget.value;bt("navbar",t)}function z6(e){const t=e.currentTarget.value;bt("pagination",t)}function B6(e){const t=e.detail.checked;bt("downloadZip",t),t&&Ol({title:j("ATTENTION"),html:j("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function N6(e){const t=e.detail.checked;bt("lazyLoadImages",t),t&&Ol({title:j("WARNING"),html:j("LAZY_LOAD"),icon:"warning"})}function H6(e){const t=e.currentTarget.value;bt("lazyStart",parseInt(t,10))}function F6(e){const t=parseInt(e.currentTarget.value,10);bt("throttlePageLoad",t),t<100&&Ol({title:j("SPEED_WARNING"),html:j("SPEED_WARNING_MESSAGE"),icon:"warning"})}function G6(e){const t=e.currentTarget.value;bt("zoomStep",parseInt(t,10))}function W6(e){const t=e.currentTarget.value;O6("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),bt("minZoom",parseInt(t,10))}function U6(e){const t=e.detail.checked;bt("hidePageControls",t)}function V6(e){const t=e.currentTarget.value;bt("header",t)}function Z6(e){const{value:t}=e.currentTarget;bt("scrollHeight",parseInt(t,10))}function Jd(e){qo("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function j6(){const e=Z("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function q6(){return Z("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function Qd(e,t=Z("zoomMode"),r=Z("zoomValue")){const i=j6(),a=q6();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Wr(e=Z("zoomMode"),t=Z("zoomValue")){ke("Zoom",e,t),no("zoomMode",e),no("zoomValue",t),e==="height"?Ne("scrollToPage",fe("currentPage")):Dr("header");const r=fe("images"),i=fe("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=Qd({...r?.[s]},e,t);Ne("images",a)}function _o(e,t=Z("zoomValue")){return()=>{Wr(e,t)}}function Aa(e=1){return()=>{const t=Z("zoomValue")+e*Z("zoomStep");t>0&&t<500&&Wr("percent",t)}}function K6(e){const t=e.currentTarget.value;bt("zoomMode",t)}function Y6(e){const t=parseInt(e.currentTarget.value,10);bt("zoomValue",t),Wr("percent",t)}function X6(e){Wr("percent",parseInt(e.currentTarget.value,10))}function $n(e){return()=>{no("viewMode",e),e.startsWith("Fluid")?(no("zoomMode","height"),no("header","click")):(Dr("zoomMode"),Dr("zoomValue"),Dr("header")),Wr()}}function J6(e){const t=e.currentTarget.value;bt("viewMode",t),$n(t)()}function Q6(e){const t=Z("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function eb(e){const t=fe("currentPage")+e;t<0?Ne("scrollToPage",0):t>(fe("manga")?.pages??1)||Ne("scrollToPage",t)}function tb(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function nb(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const i=fe("images")??{},a=r.begin??1,s=r.pages??1,c=u=>{if(u<a||u>s)return!1;if(i[u]?.doublePage)return!0;let h=0;for(let f=u-1;f>=a&&!i[f]?.doublePage;f--)h++;return h%2===0};let d;if(e===1)for(d=t+1;d<=s&&!c(d);)d++;else if(c(t))for(d=t-1;d>a&&!c(d);)d--;else for(d=t;d>a&&!c(d);)d--;d<a?Ne("scrollToPage",0):d>s?Ne("scrollToPage",s):Ne("scrollToPage",d)}function eh(e){const t=Z("viewMode"),r=Z("zoomMode");ke("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?nb(e):t.startsWith("Fluid")?Q6(e):r==="height"?eb(e):tb(e)}function gi(e){const t=fe("manga")?.[e];t&&t!=="#"?location.href=(0,Hd.sanitizeUrl)(t):e!=="next"&&history.back()}var rb={SCROLL_UP(){eh(-1)},SCROLL_DOWN(){eh(1)},NEXT_CHAPTER(){gi("next")},PREVIOUS_CHAPTER(){gi("prev")},RETURN_CHAPTER_LIST(){gi("series")},ENLARGE(){Aa(1)()},REDUCE(){Aa(-1)()},RESTORE(){_o("percent",100)()},FIT_WIDTH(){_o("width")()},FIT_HEIGHT(){_o("height")()},SETTINGS(){P0("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){$n("WebComic")()},VIEW_MODE_VERTICAL(){$n("Vertical")()},VIEW_MODE_LEFT(){$n("FluidRTL")()},VIEW_MODE_RIGHT(){$n("FluidLTR")()},SCROLL_START(){ka()},INCREASE_SPEED(){Jd(1)},DECREASE_SPEED(){Jd(-1)}};function th(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,yn.unbind(),xe.default.keys(Z("keybinds")).forEach(e=>{yn(Z("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),rb[e]()},100))})}var vr=class extends Qe{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Ot`
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
          @click=${ci}
          value="${this.prev}"
          ?disabled=${mn(this.prev)||this.prev==="#"}
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
            @input="${d6}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${ci}
          value="${this.next}"
          ?disabled=${mn(this.next)||this.next==="#"}
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
          ?disabled=${this.isFirstPage&&(mn(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(mn(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return $e;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return le`
      ${t?this.renderSlider():$e} ${r?this.renderSideArrows():$e}
    `}handleLeftArrowClick(){this.isFirstPage?gi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?gi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Ne("scrollToPage",t)}};Y([he({type:String})],vr.prototype,"mode",void 0),Y([he({type:Number})],vr.prototype,"currentPage",void 0),Y([he({type:Number})],vr.prototype,"totalPages",void 0),Y([he({type:Number})],vr.prototype,"startPage",void 0),Y([he({type:String})],vr.prototype,"next",void 0),Y([he({type:String})],vr.prototype,"prev",void 0),vr=Y([dt("manga-pagination")],vr);var mi=class extends Qe{constructor(...t){super(...t),this.open=!1,this.placement="end"}static{this.styles=Ot`
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
    `}};Y([he({type:Boolean,reflect:!0})],mi.prototype,"open",void 0),Y([he({type:String,reflect:!0})],mi.prototype,"placement",void 0),Y([Hr("dialog")],mi.prototype,"dialog",void 0),mi=Y([dt("mov-drawer")],mi);var Ma=class extends Qe{static{this.styles=Ot`
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
    `}};Y([he({type:Boolean,reflect:!0})],Ma.prototype,"open",void 0),Y([he({type:Boolean,reflect:!0})],Ma.prototype,"checkable",void 0),Ma=Y([dt("mov-dropdown")],Ma);var Cl=class extends Qe{constructor(...t){super(...t),this.selected=!1}static{this.styles=Ot`
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
    `}};Y([he({type:Boolean,reflect:!0})],Cl.prototype,"selected",void 0),Cl=Y([dt("mov-dropdown-item")],Cl);var nh=class extends Qe{static{this.styles=Ot`
    :host {
      display: block;
    }
    .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
  `}render(){return le`<div
      class="divider"
      role="separator"
    ></div>`}};nh=Y([dt("mov-divider")],nh);var rh="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",ob=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Tl=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),ib=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Tl();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),ab=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Tl(),r=(i,a)=>class extends i{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=r})),sb=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=ob();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Tl();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=ib();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=ab();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),yo=sb(),Sa=49,lb=100,cb=class Yf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=Z("header"),{scrollY:a}=window;let s="none";Z("zoomMode")!=="height"&&a+window.innerHeight+lb>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Sa?s="hide":i==="scroll"&&a<this.prevOffset&&a>Sa?s="show":i!=="click"&&a<=Sa&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),i==="scroll"){const d=s!=="hide";this.headerVisible!==d&&(this.headerVisible=d,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(Z("header"))){const a=Yf.isMouseInsideRegion(i,window.innerWidth,Sa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{Z("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=Z("header");Z("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},ub=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",c="";for(let d=1;d<t.length;d++){const u=t.substring(0,d),h=t.substring(t.length-d);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(h).width>a)break;s=u,c=h}this.value=`${s}${i}${c}`,this.host.requestUpdate()}};function Ll(e=window.location.href){mn(ro(e))||(ke(`Bookmark Removed ${e}`),qo("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function db(e){const t=e.currentTarget.value;ke(`Bookmark Removed ${t}`),Ho.error({title:j("BOOKMARK_REMOVED"),duration:1e4}),Ll(t)}function hb(){Ne("panel","bookmarks")}function oh(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};ro(t.url)?(qo("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),Ho.error({title:j("BOOKMARK_REMOVED"),duration:1e4})):(qo("bookmarks",r=>[...r,t]),Ho.success({title:j("BOOKMARK_SAVED"),description:j("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Rl(){Ne("panel","none")}function fb(){Ne("panel","settings")}function pb(){Ne("panel","keybindings")}function gb(e){const t={};xe.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),bt("keybinds",t),Ne("panel","keybindings"),th()}function mb(){Ne("panel","keybindingsEditor")}var vb="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",ih="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",xa=class extends Qe{static{this.styles=[Kt(vb),Kt(ih),Kt(rh),Ot``]}constructor(){super(),this.headroomController=new cb(this),this.titleController=new ub(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return le``;const{headroom:t,headerVisible:r}=this.headroomController,i=Z("keybinds"),a=s=>{if(fe("device")!=="desktop")return $e;const c=i[s];return!c||c.length===0?$e:c.map(d=>le`<kbd slot="details">${d}</kbd>`)};return le`
      <mov-button
        id="menu"
        class="${Ct({[Z("header")]:!0,hide:["top","end"].includes(t)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Ct({[Z("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${j("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${fb}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${j("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${pb}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${j("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${hb}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${j("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Ct({running:fe("autoScroll")})}"
              @click=${ka}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${j("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${c6}"
              ?selected=${Z("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${j("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${j("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${$n("WebComic")}"
              ?selected=${Z("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${j("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${$n("Vertical")}"
              ?selected=${Z("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${j("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${$n("FluidLTR")}"
              ?selected=${Z("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${j("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${$n("FluidRTL")}"
              ?selected=${Z("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${j("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${$n("Book")}"
              ?selected=${Z("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${j("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${$n("Manga")}"
              ?selected=${Z("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${j("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${j("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Aa()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${j("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${_o("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${j("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Aa(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${j("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${_o("width")}"
              ?selected=${Z("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${j("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${_o("height")}"
              ?selected=${Z("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${j("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
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
            .value="${Z("zoomValue")}"
            min="${Z("minZoom")}"
            max="200"
            @input=${X6}
          />
          <span id="ZoomVal">
            Zoom:
            ${Z("zoomMode")==="percent"?`${Z("zoomValue")}%`:Z("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??$e}"
            @click=${ci}
            title="${j("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${j("DOWNLOAD_ZIP")}"
            @click=${Fd}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??$e}"
            title="${j("PREVIOUS_CHAPTER")}"
            @click=${ci}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??$e}"
            title="${j("NEXT_CHAPTER")}"
            @click=${ci}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};Y([Hr("#MangaTitle")],xa.prototype,"mangaTitleElement",void 0),Y([he({type:Object})],xa.prototype,"manga",void 0),xa=Y([dt("reader-header"),(0,yo.useStores)(At,to,qt)],xa);var bb="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",ah=class extends Qe{static{this.styles=[Kt(bb)]}listBookmarks(){return _s(Z("bookmarks"))?[j("LIST_EMPTY")]:Z("bookmarks").map((t,r)=>le`
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
              @click=${db}
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
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Rl}
      >
        <mov-button
          class="Bookmark"
          title="${j("BOOKMARK")}"
          @click=${oh}
          slot="header-actions"
        >
          <mov-icon
            name="${ro()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${j("BOOKMARKS")}</h2>
        <h2 slot="label">${j("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};ah=Y([dt("bookmark-panel"),(0,yo.useStores)(At,to,qt)],ah);function*wb(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var _b="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",sh=class extends Qe{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(Z("keybinds")).reduce((r,i)=>(r[i]=Cs(),r),{})}static{this.styles=[Kt(_b),Kt(rh)]}keybindList(){const t=Z("keybinds");return xe.default.keys(t).map(r=>{const i=t[r]?.length?wb(t[r]?.map(a=>le`<kbd class="dark">${a}</kbd>`)," / "):"";return le`<span>${j(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=Z("keybinds");return xe.default.keys(t).map(r=>le`<label for="${r}">${j(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??$e}"
            ${Ls(this.keybindsRefs[r])}
          />`)}render(){return le`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Rl}
      >
        <h2 slot="label">${j("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?le` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${j("SAVE_KEYBINDS")}"
                @click=${()=>gb(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${j("BUTTON_SAVE")}
              </mov-button>`:le` <mov-button
                id="EditKeybindings"
                type="button"
                title="${j("EDIT_KEYBINDS")}"
                @click=${mb}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${j("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Pd(j("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};sh=Y([dt("keybindings-panel"),(0,yo.useStores)(At,to,qt)],sh);function*yb(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function vi(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function lh(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function kb(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var Eb=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",bi=class extends Qe{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Kt(Eb),Ot`
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
        background-image: url('${Kt(ai(kl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Kt(ai(El))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return $e;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=fe("images")||{},a=xe.default.keys(i).filter(s=>{const c=parseInt(s,10);return c>=(t?.begin??1)&&c<=(t?.pages??1)&&i[c]?.status==="loaded"}).length;return le`
      <nav
        id="Navigation"
        class="${Ct(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${F3}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${j("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?lh:null}
        >
          ${yb(vi(t?.pages??1,t?.begin??1),s=>le` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>h6(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??$e}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};Y([he({type:String})],bi.prototype,"mode",void 0),Y([he({type:Boolean})],bi.prototype,"forceExpanded",void 0),Y([ln()],bi.prototype,"isHiding",void 0),bi=Y([dt("navbar-thumbnails"),(0,yo.useStores)(At,to,qt)],bi);function Ab(){const e=$r()?"true":"false";return le` <div class="ControlLabel">
    ${j("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${L6}
    >
      <segmented-control-option
        value="false"
        label=${j("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Mb(){return eo.map(e=>le`
      <option
        value="${e.ID}"
        ?selected=${Z("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function Sb(){return le` <div class="ControlLabel locale">
    ${j("LANGUAGE")}
    <select
      id="locale"
      @change="${R6}"
    >
      ${Mb()}
    </select>
  </div>`}var xb=()=>le`${Ab()} ${Sb()}`;function Ib(){return le`
    <div class="ControlLabel loadMode">
      ${j("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${P6}"
      >
        <option
          value="wait"
          ?selected=${Z("loadMode")==="wait"}
        >
          ${j("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${Z("loadMode")==="always"}
        >
          ${j("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${Z("loadMode")==="never"}
        >
          ${j("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function Ob(){return le`
    <div class="ControlLabel PagesPerSecond">
      ${j("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${F6}"
      >
        <option
          value="3000"
          ?selected=${Z("throttlePageLoad")===3e3}
        >
          0.3(${j("SLOWLY")})
        </option>
        <option
          value="2000"
          ?selected=${Z("throttlePageLoad")===2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${Z("throttlePageLoad")===1e3}
        >
          01(${j("NORMAL")})
        </option>
        <option
          value="500"
          ?selected=${Z("throttlePageLoad")===500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${Z("throttlePageLoad")===250}
        >
          04(${j("FAST")})
        </option>
        <option
          value="125"
          ?selected=${Z("throttlePageLoad")===125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${Z("throttlePageLoad")===100}
        >
          10(${j("EXTREME")})
        </option>
        <option
          value="1"
          ?selected=${Z("throttlePageLoad")===1}
        >
          ${j("ALL_PAGES")}
        </option>
      </select>
    </div>
  `}var Cb=()=>le`${Ib()} ${Ob()}`;function Tb(){return le`
    <div class="ControlLabel fitIfOversize">
      ${j("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${Z("fitWidthIfOversize")}
        @change=${$6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${j("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${Z("downloadZip")}
        @change=${B6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${j("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${Z("hidePageControls")}
        @change=${U6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${j("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${Z("lazyLoadImages")}
        @change=${N6}
      ></mov-switch>
    </div>
  `}function Lb(){return le`
    <div
      class="${Ct({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:Z("lazyLoadImages")})}"
    >
      <span>
        ${j("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${Z("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${Z("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${H6}"
      />
    </div>
  `}function Rb(){return le`
    <div class="ControlLabel headerType">
      ${j("HEADER_TYPE")}
      <segmented-control
        .value=${Z("header")}
        @change=${V6}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${j("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${j("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${j("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${j("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${j("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Pb(){return le`
    <div class="ControlLabel pagination">
      ${j("PAGINATION_TYPE")}
      <segmented-control
        .value=${Z("pagination")}
        @change=${z6}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${j("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${j("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${j("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${j("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function $b(){return le`
    <div class="ControlLabel navbarType">
      ${j("NAVBAR_TYPE")}
      <segmented-control
        .value=${Z("navbar")}
        @change=${D6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${j("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${j("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${j("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${j("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Db(){return le`
    <div class="ControlLabel autoScroll">
      <span>
        ${j("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${Z("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${Z("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @change="${Z6}"
      />
    </div>
  `}var zb=()=>le`${Tb()} ${Pb()} ${Lb()} ${Rb()} ${$b()} ${Db()}`;function Bb(){const e=Z("colorScheme")==="dark";bt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(Z("colorScheme"))}function Ia(e){bt("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Nb(){return le`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${j("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${Bb}
        ?active=${Z("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${j("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${Z("theme")}"
        title="${Z("theme")}"
        @input=${Ia}
        .swatches=${xe.default.values(gl)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${Z("theme")}"
      mode="steps"
      .selected=${Z("theme")}
      @change="${Ia}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(gl).map(e=>le`<color-swatch
            .color="${e}"
            .selected=${Z("theme")}
            @change=${Ia}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${j("THEME_HUE")} & ${j("THEME_SHADE")}</summary>
      <color-panel
        .selected=${Z("theme")}
        @change=${Ia}
      ></color-panel>
    </details>
  `}function Hb(){return le` <div class="ControlLabel DefaultZoomMode">
    ${j("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${Z("zoomMode")}
      @change=${K6}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${j("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${j("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${j("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Fb(){return le`
    <div
      class="${Ct({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:Z("zoomMode")==="percent"})}"
    >
      <span>
        ${j("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${Z("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${Z("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${Y6}"
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
  `}function Gb(){return le`
    <div class="ControlLabel minZoom">
      <span>
        ${j("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${Z("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${Z("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${W6}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function Wb(){return le`
    <div class="ControlLabel zoomStep">
      <span>
        ${j("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${Z("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${Z("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${G6}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function Ub(){return le`
    <div class="ControlLabel viewMode">
      ${j("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${Z("viewMode")}
        @change=${J6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${j("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${j("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${j("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${j("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${j("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${j("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var Vb=()=>le`${Hb()} ${Fb()} ${Gb()} ${Wb()} ${Ub()}`,Zb="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",ch=class extends Qe{static{this.styles=[Ot`
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
    `,Kt(Zb)]}render(){return le`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Rl}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${j("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Bp}"
          title="${j("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${j("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${j("GENERAL")}</legend>
            ${xb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${j("THEME")}</legend>
            ${Nb()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${j("LOADING")}</legend>
            ${Cb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${j("ZOOM")}</legend>
            ${Vb()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${j("OTHERS")}</legend>
            ${zb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};ch=Y([dt("settings-panel"),(0,yo.useStores)(At,to,qt)],ch);function jb(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(Yb(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function qb(e){return jb(e).then(btoa)}function Kb(e){return qb(e).then(function(t){return"data:"+e.type+";base64,"+t})}function Yb(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function Xb(e,t){ke("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ke("Failed to fetch page: ",r),r}}async function Jb(e){return Xb(e,"text/html")}async function Qb(e,t,r){try{return(await Jb(e)).querySelector(t)?.getAttribute(r)}catch(i){return ke("Failed to get element attribute: ",i),null}}function e9(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Oa(e,t,r,i=0){const a=fe("images")?.[t];a?.status&&a.status!=="pending"||(Ln(t,()=>({status:"loading"})),setTimeout(async()=>{let s=e9(r),c,d="loaded";try{const u=await fetch(s,e.fetchOptions);u.ok?(c=await u.blob(),s=await Kb(c)):d="error"}catch(u){ke("Failed to fetch image",u),d="error"}Ln(t,()=>({src:s,blob:c,status:d})),vn("Loaded Image:",t,"Source:",s)},(e.timer??Z("throttlePageLoad"))*i),e.pages===t&&Ll())}async function uh(e,t,r,i=0){const a=fe("images")?.[t];a?.status&&a.status!=="pending"||(Ln(t,()=>({status:"loading"})),setTimeout(async()=>{try{const s=await Qb(r,e.img,e.lazyAttr??"src");s?(Ln(t,()=>({status:"pending"})),await Oa(e,t,s,0)):Ln(t,()=>({status:"error"}))}catch(s){ke("Failed to get page attribute",s),Ln(t,()=>({status:"error"}))}},(e.timer??Z("throttlePageLoad"))*i),e.pages===i&&Ll())}function dh(e,t){vi(t.pages,e).filter((r,i)=>!(t.lazy??Z("lazyLoadImages"))||i<=Z("lazyStart")).forEach((r,i)=>{uh(t,r,t.listPages[r-1],i)})}function hh(e,t){vi(t.pages,e).filter((r,i)=>!(t.lazy??Z("lazyLoadImages"))||i<=Z("lazyStart")).forEach((r,i)=>{Oa(t,r,t.listImages[r-1],i)})}async function t9(){await ys(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;vn("Loading Images"),vn(`Intervals: ${e.timer??Z("throttlePageLoad")??"Default(1000)"}`),vn(`Lazy: ${e.lazy??Z("lazyLoadImages")}, Starting from: ${Z("lazyStart")}`),Wr(),Xc(e)?(vn("Method: Images:",e.listImages),hh(t,e)):Jc(e)?(vn("Method: Pages:",e.listPages),dh(t,e)):o2(e)?(vn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Oa,loadImages(r){hh(t,{...e,listImages:r})},loadPages(r,i,a){dh(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:Z("throttlePageLoad")})):ke("No Loading Method Found"),qt.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src===void 0&&(Xc(e)?Oa(e,s,e.listImages[s-1]):Jc(e)&&uh(e,s,e.listPages[s-1]))})}function n9(){const e=fe("images");if(!e)return null;const t=Z("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const d in e){const u=e[d].ref?.value;if(!u)continue;const h=u?.getBoundingClientRect();let f;r?i?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!c||f>c.edge)&&(c={index:parseInt(d,10),edge:f})}return c?c.index:fe("manga")?.begin??1}function fh(){const e=n9();e!=null&&fe("currentPage")!==e&&Ne("currentPage",e)}function r9(){const e=xe.default.throttle(()=>{requestAnimationFrame(fh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(fh)}function ph(){if(!fe("chapter").value){setTimeout(ph,50);return}r9()}var gh=xe.default.debounce(()=>{Ne("device",Bo()),Wr()},200);async function o9(){await ys(()=>fe("manga")!==void 0),th(),window.addEventListener("resize",gh),window.addEventListener("orientationchange",gh),M6(),ph()}var i9=gn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(g){var k,_;for(k in g)_=g[k],_!==void 0&&g.hasOwnProperty(k)&&(i[k]=_);return this},r.status=null,r.set=function(g){var k=r.isStarted();g=a(g,i.minimum,1),r.status=g===1?null:g;var _=r.render(!k),A=_.querySelector(i.barSelector),S=i.speed,C=i.easing;return _.offsetWidth,d(function(T){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),u(A,c(g,S,C)),g===1?(u(_,{transition:"none",opacity:1}),_.offsetWidth,setTimeout(function(){u(_,{transition:"all "+S+"ms linear",opacity:0}),setTimeout(function(){r.remove(),T()},S)},S)):setTimeout(T,S)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var g=function(){setTimeout(function(){r.status&&(r.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},r.done=function(g){return!g&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(g){var k=r.status;return k?(typeof g!="number"&&(g=(1-k)*a(Math.random()*k,.1,.95)),k=a(k+g,0,.994),r.set(k)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var g=0,k=0;r.promise=function(_){return!_||_.state()==="resolved"?this:(k===0&&r.start(),g++,k++,_.always(function(){k--,k===0?(g=0,r.done()):r.set((g-k)/g)}),this)}})(),r.render=function(g){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var k=document.createElement("div");k.id="nprogress",k.innerHTML=i.template;var _=k.querySelector(i.barSelector),A=g?"-100":s(r.status||0),S=document.querySelector(i.parent),C;return u(_,{transition:"all 0 linear",transform:"translate3d("+A+"%,0,0)"}),i.showSpinner||(C=k.querySelector(i.spinnerSelector),C&&m(C)),S!=document.body&&f(S,"nprogress-custom-parent"),S.appendChild(k),k},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var g=document.body.style,k="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return k+"Perspective"in g?"translate3d":k+"Transform"in g?"translate":"margin"};function a(g,k,_){return g<k?k:g>_?_:g}function s(g){return(-1+g)*100}function c(g,k,_){var A;return i.positionUsing==="translate3d"?A={transform:"translate3d("+s(g)+"%,0,0)"}:i.positionUsing==="translate"?A={transform:"translate("+s(g)+"%,0)"}:A={"margin-left":s(g)+"%"},A.transition="all "+k+"ms "+_,A}var d=(function(){var g=[];function k(){var _=g.shift();_&&_(k)}return function(_){g.push(_),g.length==1&&k()}})(),u=(function(){var g=["Webkit","O","Moz","ms"],k={};function _(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function($,q){return q.toUpperCase()})}function A(T){var $=document.body.style;if(T in $)return T;for(var q=g.length,W=T.charAt(0).toUpperCase()+T.slice(1),oe;q--;)if(oe=g[q]+W,oe in $)return oe;return T}function S(T){return T=_(T),k[T]||(k[T]=A(T))}function C(T,$,q){$=S($),T.style[$]=q}return function(T,$){var q=arguments,W,oe;if(q.length==2)for(W in $)oe=$[W],oe!==void 0&&$.hasOwnProperty(W)&&C(T,W,oe);else C(T,q[1],q[2])}})();function h(g,k){return(typeof g=="string"?g:v(g)).indexOf(" "+k+" ")>=0}function f(g,k){var _=v(g),A=_+k;h(_,k)||(g.className=A.substring(1))}function b(g,k){var _=v(g),A;h(g,k)&&(A=_.replace(" "+k+" "," "),g.className=A.substring(1,A.length-1))}function v(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return r})})),a9=Di(i9(),1);function s9(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function l9(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function mh(e,t){ke(`Reloading Page ${e}`,t);const r=fe("images")?.[e]?.src;if(!r)return;const i=l9(r);i>Z("maxReload")||(t?.removeAttribute("src"),A2(r)||M2(r)?t?.setAttribute("src",r):t?.setAttribute("src",s9(r,i)))}function c9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images")?.[r]?.ref?.value;i&&mh(r,i)}function u9(e){const t=e.currentTarget;Ln(parseInt(t.value,10),r=>({hide:!r.hide}))}function d9(e){const t=e.currentTarget;Ln(parseInt(t.id.replace("PageImg",""),10),d=>({...Qd({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=fe("manga"),i=fe("images")||{},a=xe.default.keys(i).filter(d=>{const u=parseInt(d,10);return u>=(r?.begin??1)&&u<=(r?.pages??1)&&i[u]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),c=Math.floor(a/s*100);document.title=`(${c}%) ${fe("manga")?.title}`,a9.default.configure({showSpinner:!1}).set(a/s),ke(`Progress: ${c}%`),a===s&&(ke("Images Loading Complete"),Ne("download","available"),Z("downloadZip")&&Fd())}function h9(e){const t=e.currentTarget;if(_s(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Ln(r,()=>({status:"error"})),mh(r,t)}function f9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Ne("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+Z("zoomStep")/100),height:void 0}})}function p9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Ne("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-Z("zoomStep")/100),height:void 0}})}function g9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Ne("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function m9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Ne("images",{...i,[r]:{...a,width:window.innerWidth+(Z("navbar")==="left"||Z("navbar")==="right"?-34:0),height:void 0}})}function v9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Ne("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(Z("navbar")==="bottom"?-34:0)}})}function b9(e){const t=fe("images")?.[e],r=Z("viewMode").match(/^(Book|Manga)$/),i=Z("viewMode").startsWith("Fluid"),a=Z("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":i?`${window.innerHeight+(a?-34:0)}px`:void 0,"min-width":r?void 0:`${Z("minZoom")}vw`}}var w9=(e,t)=>vi(e,t).map(r=>{fe("images")?.[r]?.ref||Ln(r,u=>({ref:Cs()}));let i=0;for(let u=r-1;u>=t&&!fe("images")?.[u].doublePage;u--)fe("images")?.[u].doublePage||i++;const a=fe("images")?.[r].doublePage??!1,s=Z("viewMode")==="Book",c=!a&&(s?i%2===0:i%2===1),d=!a&&(s?i%2===1:i%2===0);return le`
      <div
        id="Page${r}"
        class="${Ct({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:c&&!a,RightPage:d&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${j("BOOKMARK")}"
            @click=${oh}
            value="${r}"
          >
            ${ro()?H3:N3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${j("ZOOM_IN")}"
            @click=${f9}
            value="${r}"
          >
            ${j3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${j("ZOOM_RESET")}"
            @click=${g9}
            value="${r}"
          >
            ${Z3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${j("ZOOM_OUT")}"
            @click=${p9}
            value="${r}"
          >
            ${q3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${j("ZOOM_HEIGHT")}"
            @click=${v9}
            value="${r}"
          >
            ${z3}
          </button>
          ${Z("viewMode").match(/^(Book|Manga)$/)?le`
            <button
              class="DoublePage PageButton"
              title="${j("DOUBLE_PAGE")}"
              @click=${()=>{Ln(r,u=>({doublePage:!u.doublePage}))}}
              value="${r}"
            >
              ${V3}
            </button>`:le`
              <button
                class="ZoomWidth PageButton"
                title="${j("ZOOM_WIDTH")}"
                @click=${m9}
                value="${r}"
              >
                ${B3}
              </button>`}
          <button
            class="Hide PageButton"
            title="${j("HIDE")}"
            @click=${u9}
            value="${r}"
          >
            ${fe("images")?.[r].hide?G3:W3}
          </button>
          <button
            class="Reload PageButton"
            title="${j("RELOAD")}"
            @click=${c9}
            value="${r}"
          >
            ${U3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Ct({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??$e}
            style="${Fn(b9(r))}"
            @load=${d9}
            @error=${h9}
            ${Ls(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?j("END"):`${r} / ${e}`} ]
      </div>
    `}),_9=e=>le`
  <main
    id="Chapter"
    ${Ls(fe("chapter"))}
    class="${Ct({fitWidthIfOversize:Z("fitWidthIfOversize"),[Z("viewMode")]:!0,separator:Z("viewMode")==="Vertical"})}"
    @wheel=${t=>{Z("viewMode")==="FluidLTR"?lh(t):Z("viewMode")==="FluidRTL"&&kb(t)}}
  >
    ${w9(e.pages,e.begin??0)}
  </main>
`,y9=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",k9="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",E9="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",A9="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",M9='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',S9="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",x9=B0`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${ai(kl)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${ai(El)}');
  }

  ${S9}
  ${y9}
  ${M9}
  ${A9}
  ${E9}
  ${ih}
  ${k9}
`,I9=(e="#MangaOnlineViewer",t=Z("theme"))=>{const r=Bd(t),i=mo(t),a=Z("colorScheme")==="dark"?r[8]:r[2];return B0`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${i};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${mo(a)};

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
  `},O9="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",ko=class extends Qe{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Kt(O9)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return le`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${j("STARTING")}</span>
        <div style="padding: 1rem;">${j("WAITING")}</div>
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
        ${j("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const i=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return le`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${j("STARTING")}</span>
        <div style="padding: 1rem;">
          ${j("CHOOSE_BEGINNING")}
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
              data="${vi(this.mangaPages).join(", ")}"
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
    `}};Y([he({type:Number,reflect:!0})],ko.prototype,"mangaPages",void 0),Y([he({type:Number,reflect:!0})],ko.prototype,"begin",void 0),Y([he({type:Number})],ko.prototype,"timeoutMs",void 0),Y([he({type:String,reflect:!0})],ko.prototype,"status",void 0),ko=Y([dt("script-startup")],ko);function C9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var T9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},L9=(...e)=>{e?.forEach(T9),e?.forEach(C9)};function R9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var vh,Ca=class extends Qe{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Ot``,Kt(x9)]}async start(t,r){this.manga&&(L9(document.documentElement,document.head,document.body),window.scrollTo(0,0),Ne("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){this.loadMode==="always"&&this.start(),o9(),t9()}render(){const t=fe("manga"),r=fe("dialog");return le`
      <style>
        ${I9()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Ct({[Z("colorScheme")]:!0,hideControls:Z("hidePageControls"),bookmarked:!!ro(),[fe("device")]:!0})}"
        style="${Fn({[`padding-${Z("navbar")}`]:"34px"})}"
        .locale="${Z("locale")}"
      >
        ${t?le`
              <reader-header .manga=${t}></reader-header>
              ${_9(t)}
              <navbar-thumbnails
                      .mode=${Z("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                      .mode="${Z("pagination")}"
                      .startPage=${t.begin}
                      .totalPages=${t.pages}
                      .currentPage=${fe("currentPage")}
                      .next=${t.next}
                      .prev=${t.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:le(vh||(vh=R9([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              initialStatus="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,Nd(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?le`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Ne("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};Y([he({type:String,reflect:!0})],Ca.prototype,"loadMode",void 0),Y([he({type:Object})],Ca.prototype,"manga",void 0),Ca=Y([dt("manga-online-viewer"),(0,yo.useStores)(At,to,qt)],Ca);var Pl="@moaqzdev/toast",P9=class ws extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>ws.#e)return t;const r=this.getAttribute("duration");if(r){const i=Number.parseInt(r);if(!Number.isNaN(i))return i}return ws.#e}async createToast({title:t,type:r,description:i,onConfirm:a,onCancel:s,confirmText:c="✅",cancelText:d="❌",duration:u}){const h=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),f={container:h.querySelector("[data-toast]"),title:h.querySelector("[data-title]"),description:h.querySelector("[data-description]"),actions:h.querySelector("[data-actions]"),confirmBtn:h.querySelector("button[data-action-type='confirm']"),cancelBtn:h.querySelector("button[data-action-type='cancel']"),closeBtn:h.querySelector("[data-close-button]")};u=this.parseDuration(u),f.title.textContent=t||"",f.container.setAttribute("data-type",r),i==null?f.description?.remove():f.description.textContent=i;const b=()=>this.removeToast(f.container);if(r==="confirm"?(f.confirmBtn.textContent=c,f.confirmBtn.addEventListener("click",()=>{a?.(),b()},{once:!0}),f.cancelBtn.textContent=d,f.cancelBtn.addEventListener("click",()=>{s?.(),b()},{once:!0})):f.actions?.remove(),this.hasAttribute("dismissable")?f.closeBtn.addEventListener("click",b,{once:!0}):f.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(h),u!=="none"){const v=new AbortController,m=Date.now();let g=null,k=0;const _=()=>{v.abort(),b()};let A=setTimeout(_,u);const S=()=>{g??(clearTimeout(A),g=Date.now())},C=()=>{g!=null&&(k=g-m,g=null,A=setTimeout(_,Math.max(u-k,0)))};["focusin","pointerenter","mouseenter"].forEach(T=>{f.container.addEventListener(T,S,{signal:v.signal})}),["focusout","pointerleave","mouseleave"].forEach(T=>{f.container.addEventListener(T,C,{signal:v.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===Pl){const r=t.detail;this.createToast(r)}}connectedCallback(){this.render(),document.addEventListener(Pl,this)}disconnectedCallback(){document.removeEventListener(Pl,this)}render(){this.shadowRoot.innerHTML=`
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
  }`};customElements.define("moaqz-toaster",P9);var $9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,D9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",z9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",B9=[$9,D9,z9].join(`
`);async function bh([e,t]){ke(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=ro()??t.begin??1,t.before!==void 0&&(vn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=C6("externals",B9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??Z("loadMode"),r.manga=t,document.body.appendChild(r)}async function N9(e){if(ke(`Starting ${ks.script.name} ${ks.script.version} on ${Bo()} ${op()} with ${ip()}`),Km())return;ke(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));ke(t.length,"Found sites:",t);const r=t.map(async i=>{ke(`Testing site: ${i.name}`),await sp(i);const a=await i.run();if(a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{bh(await Promise.any(r))}catch(i){if(i instanceof AggregateError){ke("All sites failed to run:");for(const a of i.errors)ke(a.message)}else ke("An unexpected error occurred:",i)}}N9(X2).catch(ke)})();
