// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.04.07.build-2128
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
// @include       /https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/
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
(function(){var Wf=Object.create,$o=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,Vf=Object.getOwnPropertyNames,Zf=Object.getPrototypeOf,jf=Object.prototype.hasOwnProperty,wn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Kc=(e,t)=>{let r={};for(var o in e)$o(r,o,{get:e[o],enumerable:!0});return t||$o(r,Symbol.toStringTag,{value:"Module"}),r},qf=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=Vf(t),s=0,c=a.length,u;s<c;s++)u=a[s],!jf.call(e,u)&&u!==r&&$o(e,u,{get:(d=>t[d]).bind(null,u),enumerable:!(o=Uf(t,u))||o.enumerable});return e},Do=(e,t,r)=>(r=e!=null?Wf(Zf(e)):{},qf(t||!e||!e.__esModule?$o(r,"default",{value:e,enumerable:!0}):r,e)),Kf=wn(((e,t)=>{(function(){var r,o="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="Invalid `imports` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,b="__lodash_placeholder__",v=1,m=2,g=4,k=1,y=2,S=1,M=2,T=4,O=8,D=16,q=32,Z=64,re=128,G=256,pe=512,we=30,R="...",Y=800,E=16,J=1,xe=2,ce=3,Ie=1/0,ie=9007199254740991,Ae=17976931348623157e292,W=NaN,F=4294967295,Ee=F-1,ge=F>>>1,he=[["ary",re],["bind",S],["bindKey",M],["curry",O],["curryRight",D],["flip",pe],["partial",q],["partialRight",Z],["rearg",G]],je="[object Arguments]",ft="[object Array]",We="[object AsyncFunction]",He="[object Boolean]",dt="[object Date]",pt="[object DOMException]",Ut="[object Error]",Nt="[object Function]",w="[object GeneratorFunction]",X="[object Map]",V="[object Number]",C="[object Null]",I="[object Object]",z="[object Promise]",oe="[object Proxy]",ae="[object RegExp]",N="[object Set]",de="[object String]",me="[object Symbol]",ue="[object Undefined]",ke="[object WeakMap]",Qe="[object WeakSet]",Fe="[object ArrayBuffer]",It="[object DataView]",er="[object Float32Array]",Xt="[object Float64Array]",tr="[object Int8Array]",ot="[object Int16Array]",kr="[object Int32Array]",qr="[object Uint8Array]",fn="[object Uint8ClampedArray]",Mi="[object Uint16Array]",wo="[object Uint32Array]",Pl=/\b__p \+= '';/g,$l=/\b(__p \+=) '' \+/g,Ta=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Er=/&(?:amp|lt|gt|quot|#39);/g,Kr=/[&<>"']/g,T9=RegExp(Er.source),L9=RegExp(Kr.source),R9=/<%-([\s\S]+?)%>/g,P9=/<%([\s\S]+?)%>/g,ch=/<%=([\s\S]+?)%>/g,$9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,D9=/^\w*$/,z9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dl=/[\\^$.*+?()[\]{}|]/g,B9=RegExp(Dl.source),zl=/^\s+/,N9=/\s/,H9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,F9=/\{\n\/\* \[wrapped with (.+)\] \*/,G9=/,? & /,W9=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,dh=/[()=,{}\[\]\/\s]/,U9=/\\(\\)?/g,V9=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,uh=/\w*$/,Z9=/^[-+]0x[0-9a-f]+$/i,j9=/^0b[01]+$/i,q9=/^\[object .+?Constructor\]$/,K9=/^0o[0-7]+$/i,Y9=/^(?:0|[1-9]\d*)$/,X9=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,La=/($^)/,J9=/['\n\r\u2028\u2029\\]/g,Ra="\\ud800-\\udfff",hh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",fh="\\u2700-\\u27bf",ph="a-z\\xdf-\\xf6\\xf8-\\xff",Q9="\\xac\\xb1\\xd7\\xf7",e7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",t7="\\u2000-\\u206f",n7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gh="A-Z\\xc0-\\xd6\\xd8-\\xde",mh="\\ufe0e\\ufe0f",vh=Q9+e7+t7+n7,Bl="['’]",r7="["+Ra+"]",bh="["+vh+"]",Pa="["+hh+"]",wh="\\d+",i7="["+fh+"]",_h="["+ph+"]",yh="[^"+Ra+vh+wh+fh+ph+gh+"]",Nl="\\ud83c[\\udffb-\\udfff]",o7="(?:"+Pa+"|"+Nl+")",kh="[^"+Ra+"]",Hl="(?:\\ud83c[\\udde6-\\uddff]){2}",Fl="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="["+gh+"]",Eh="\\u200d",Sh="(?:"+_h+"|"+yh+")",a7="(?:"+xi+"|"+yh+")",Ah="(?:"+Bl+"(?:d|ll|m|re|s|t|ve))?",Mh="(?:"+Bl+"(?:D|LL|M|RE|S|T|VE))?",xh=o7+"?",Ih="["+mh+"]?",s7="(?:"+Eh+"(?:"+[kh,Hl,Fl].join("|")+")"+Ih+xh+")*",l7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ch=Ih+xh+s7,d7="(?:"+[i7,Hl,Fl].join("|")+")"+Ch,u7="(?:"+[kh+Pa+"?",Pa,Hl,Fl,r7].join("|")+")",h7=RegExp(Bl,"g"),f7=RegExp(Pa,"g"),Gl=RegExp(Nl+"(?="+Nl+")|"+u7+Ch,"g"),p7=RegExp([xi+"?"+_h+"+"+Ah+"(?="+[bh,xi,"$"].join("|")+")",a7+"+"+Mh+"(?="+[bh,xi+Sh,"$"].join("|")+")",xi+"?"+Sh+"+"+Ah,xi+"+"+Mh,c7,l7,wh,d7].join("|"),"g"),g7=RegExp("["+Eh+Ra+hh+mh+"]"),m7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,v7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],b7=-1,at={};at[er]=at[Xt]=at[tr]=at[ot]=at[kr]=at[qr]=at[fn]=at[Mi]=at[wo]=!0,at[je]=at[ft]=at[Fe]=at[He]=at[It]=at[dt]=at[Ut]=at[Nt]=at[X]=at[V]=at[I]=at[ae]=at[N]=at[de]=at[ke]=!1;var rt={};rt[je]=rt[ft]=rt[Fe]=rt[It]=rt[He]=rt[dt]=rt[er]=rt[Xt]=rt[tr]=rt[ot]=rt[kr]=rt[X]=rt[V]=rt[I]=rt[ae]=rt[N]=rt[de]=rt[me]=rt[qr]=rt[fn]=rt[Mi]=rt[wo]=!0,rt[Ut]=rt[Nt]=rt[ke]=!1;var w7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},_7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},k7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},E7=parseFloat,S7=parseInt,Oh=typeof global=="object"&&global&&global.Object===Object&&global,A7=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Oh||A7||Function("return this")(),Wl=typeof e=="object"&&e&&!e.nodeType&&e,Yr=Wl&&typeof t=="object"&&t&&!t.nodeType&&t,Th=Yr&&Yr.exports===Wl,Ul=Th&&Oh.process,An=(function(){try{var $=Yr&&Yr.require&&Yr.require("util").types;return $||Ul&&Ul.binding&&Ul.binding("util")}catch{}})(),Lh=An&&An.isArrayBuffer,Rh=An&&An.isDate,Ph=An&&An.isMap,$h=An&&An.isRegExp,Dh=An&&An.isSet,zh=An&&An.isTypedArray;function pn($,Q,U){switch(U.length){case 0:return $.call(Q);case 1:return $.call(Q,U[0]);case 2:return $.call(Q,U[0],U[1]);case 3:return $.call(Q,U[0],U[1],U[2])}return $.apply(Q,U)}function M7($,Q,U,be){for(var Pe=-1,Ke=$==null?0:$.length;++Pe<Ke;){var Ct=$[Pe];Q(be,Ct,U(Ct),$)}return be}function gn($,Q){for(var U=-1,be=$==null?0:$.length;++U<be&&Q($[U],U,$)!==!1;);return $}function x7($,Q){for(var U=$==null?0:$.length;U--&&Q($[U],U,$)!==!1;);return $}function Bh($,Q){for(var U=-1,be=$==null?0:$.length;++U<be;)if(!Q($[U],U,$))return!1;return!0}function Sr($,Q){for(var U=-1,be=$==null?0:$.length,Pe=0,Ke=[];++U<be;){var Ct=$[U];Q(Ct,U,$)&&(Ke[Pe++]=Ct)}return Ke}function $a($,Q){return!!($!=null&&$.length)&&Ii($,Q,0)>-1}function Vl($,Q,U){for(var be=-1,Pe=$==null?0:$.length;++be<Pe;)if(U(Q,$[be]))return!0;return!1}function ut($,Q){for(var U=-1,be=$==null?0:$.length,Pe=Array(be);++U<be;)Pe[U]=Q($[U],U,$);return Pe}function Ar($,Q){for(var U=-1,be=Q.length,Pe=$.length;++U<be;)$[Pe+U]=Q[U];return $}function Zl($,Q,U,be){var Pe=-1,Ke=$==null?0:$.length;for(be&&Ke&&(U=$[++Pe]);++Pe<Ke;)U=Q(U,$[Pe],Pe,$);return U}function I7($,Q,U,be){var Pe=$==null?0:$.length;for(be&&Pe&&(U=$[--Pe]);Pe--;)U=Q(U,$[Pe],Pe,$);return U}function jl($,Q){for(var U=-1,be=$==null?0:$.length;++U<be;)if(Q($[U],U,$))return!0;return!1}var C7=ql("length");function O7($){return $.split("")}function T7($){return $.match(W9)||[]}function Nh($,Q,U){var be;return U($,function(Pe,Ke,Ct){if(Q(Pe,Ke,Ct))return be=Ke,!1}),be}function Da($,Q,U,be){for(var Pe=$.length,Ke=U+(be?1:-1);be?Ke--:++Ke<Pe;)if(Q($[Ke],Ke,$))return Ke;return-1}function Ii($,Q,U){return Q===Q?W7($,Q,U):Da($,Hh,U)}function L7($,Q,U,be){for(var Pe=U-1,Ke=$.length;++Pe<Ke;)if(be($[Pe],Q))return Pe;return-1}function Hh($){return $!==$}function Fh($,Q){var U=$==null?0:$.length;return U?Yl($,Q)/U:W}function ql($){return function(Q){return Q==null?r:Q[$]}}function Kl($){return function(Q){return $==null?r:$[Q]}}function Gh($,Q,U,be,Pe){return Pe($,function(Ke,Ct,et){U=be?(be=!1,Ke):Q(U,Ke,Ct,et)}),U}function R7($,Q){var U=$.length;for($.sort(Q);U--;)$[U]=$[U].value;return $}function Yl($,Q){for(var U,be=-1,Pe=$.length;++be<Pe;){var Ke=Q($[be]);Ke!==r&&(U=U===r?Ke:U+Ke)}return U}function Xl($,Q){for(var U=-1,be=Array($);++U<$;)be[U]=Q(U);return be}function P7($,Q){return ut(Q,function(U){return[U,$[U]]})}function Wh($){return $&&$.slice(0,jh($)+1).replace(zl,"")}function mn($){return function(Q){return $(Q)}}function Jl($,Q){return ut(Q,function(U){return $[U]})}function _o($,Q){return $.has(Q)}function Uh($,Q){for(var U=-1,be=$.length;++U<be&&Ii(Q,$[U],0)>-1;);return U}function Vh($,Q){for(var U=$.length;U--&&Ii(Q,$[U],0)>-1;);return U}function $7($,Q){for(var U=$.length,be=0;U--;)$[U]===Q&&++be;return be}var D7=Kl(w7),z7=Kl(_7);function B7($){return"\\"+k7[$]}function N7($,Q){return $==null?r:$[Q]}function Ci($){return g7.test($)}function H7($){return m7.test($)}function F7($){for(var Q,U=[];!(Q=$.next()).done;)U.push(Q.value);return U}function Ql($){var Q=-1,U=Array($.size);return $.forEach(function(be,Pe){U[++Q]=[Pe,be]}),U}function Zh($,Q){return function(U){return $(Q(U))}}function Mr($,Q){for(var U=-1,be=$.length,Pe=0,Ke=[];++U<be;){var Ct=$[U];(Ct===Q||Ct===b)&&($[U]=b,Ke[Pe++]=U)}return Ke}function za($){var Q=-1,U=Array($.size);return $.forEach(function(be){U[++Q]=be}),U}function G7($){var Q=-1,U=Array($.size);return $.forEach(function(be){U[++Q]=[be,be]}),U}function W7($,Q,U){for(var be=U-1,Pe=$.length;++be<Pe;)if($[be]===Q)return be;return-1}function U7($,Q,U){for(var be=U+1;be--;)if($[be]===Q)return be;return be}function Oi($){return Ci($)?Z7($):C7($)}function Dn($){return Ci($)?j7($):O7($)}function jh($){for(var Q=$.length;Q--&&N9.test($.charAt(Q)););return Q}var V7=Kl(y7);function Z7($){for(var Q=Gl.lastIndex=0;Gl.test($);)++Q;return Q}function j7($){return $.match(Gl)||[]}function q7($){return $.match(p7)||[]}var xr=(function $(Q){Q=Q==null?Lt:xr.defaults(Lt.Object(),Q,xr.pick(Lt,v7));var U=Q.Array,be=Q.Date,Pe=Q.Error,Ke=Q.Function,Ct=Q.Math,et=Q.Object,ec=Q.RegExp,K7=Q.String,Mn=Q.TypeError,Ba=U.prototype,Y7=Ke.prototype,Ti=et.prototype,Na=Q["__core-js_shared__"],Ha=Y7.toString,Ye=Ti.hasOwnProperty,X7=0,qh=(function(){var n=/[^.]+$/.exec(Na&&Na.keys&&Na.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Fa=Ti.toString,J7=Ha.call(et),Q7=Lt._,ew=ec("^"+Ha.call(Ye).replace(Dl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ga=Th?Q.Buffer:r,Ir=Q.Symbol,Wa=Q.Uint8Array,Kh=Ga?Ga.allocUnsafe:r,Ua=Zh(et.getPrototypeOf,et),Yh=et.create,Xh=Ti.propertyIsEnumerable,Va=Ba.splice,Jh=Ir?Ir.isConcatSpreadable:r,yo=Ir?Ir.iterator:r,Xr=Ir?Ir.toStringTag:r,Za=(function(){try{var n=ni(et,"defineProperty");return n({},"",{}),n}catch{}})(),tw=Q.clearTimeout!==Lt.clearTimeout&&Q.clearTimeout,nw=be&&be.now!==Lt.Date.now&&be.now,rw=Q.setTimeout!==Lt.setTimeout&&Q.setTimeout,ja=Ct.ceil,qa=Ct.floor,tc=et.getOwnPropertySymbols,iw=Ga?Ga.isBuffer:r,Qh=Q.isFinite,ow=Ba.join,aw=Zh(et.keys,et),Ot=Ct.max,Ht=Ct.min,sw=be.now,lw=Q.parseInt,e1=Ct.random,cw=Ba.reverse,nc=ni(Q,"DataView"),ko=ni(Q,"Map"),rc=ni(Q,"Promise"),Li=ni(Q,"Set"),Eo=ni(Q,"WeakMap"),So=ni(et,"create"),Ka=Eo&&new Eo,Ri={},dw=ri(nc),uw=ri(ko),hw=ri(rc),fw=ri(Li),pw=ri(Eo),Ya=Ir?Ir.prototype:r,Ao=Ya?Ya.valueOf:r,t1=Ya?Ya.toString:r;function A(n){if(vt(n)&&!ze(n)&&!(n instanceof Ve)){if(n instanceof xn)return n;if(Ye.call(n,"__wrapped__"))return nf(n)}return new xn(n)}var Pi=(function(){function n(){}return function(i){if(!gt(i))return{};if(Yh)return Yh(i);n.prototype=i;var l=new n;return n.prototype=r,l}})();function Xa(){}function xn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}A.templateSettings={escape:R9,evaluate:P9,interpolate:ch,variable:"",imports:{_:A}},A.prototype=Xa.prototype,A.prototype.constructor=A,xn.prototype=Pi(Xa.prototype),xn.prototype.constructor=xn;function Ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function gw(){var n=new Ve(this.__wrapped__);return n.__actions__=Jt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Jt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Jt(this.__views__),n}function mw(){if(this.__filtered__){var n=new Ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function vw(){var n=this.__wrapped__.value(),i=this.__dir__,l=ze(n),p=i<0,_=l?n.length:0,x=C8(0,_,this.__views__),L=x.start,P=x.end,B=P-L,ne=p?P:L-1,ee=this.__iteratees__,le=ee.length,ve=0,_e=Ht(B,this.__takeCount__);if(!l||!p&&_==B&&_e==B)return A1(n,this.__actions__);var Ce=[];e:for(;B--&&ve<_e;){ne+=i;for(var $e=-1,Oe=n[ne];++$e<le;){var tt=ee[$e],Ze=tt.iteratee,jt=tt.type,Kn=Ze(Oe);if(jt==xe)Oe=Kn;else if(!Kn){if(jt==J)continue e;break e}}Ce[ve++]=Oe}return Ce}Ve.prototype=Pi(Xa.prototype),Ve.prototype.constructor=Ve;function Jr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function bw(){this.__data__=So?So(null):{},this.size=0}function ww(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function _w(n){var i=this.__data__;if(So){var l=i[n];return l===h?r:l}return Ye.call(i,n)?i[n]:r}function yw(n){var i=this.__data__;return So?i[n]!==r:Ye.call(i,n)}function kw(n,i){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=So&&i===r?h:i,this}Jr.prototype.clear=bw,Jr.prototype.delete=ww,Jr.prototype.get=_w,Jr.prototype.has=yw,Jr.prototype.set=kw;function nr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function Ew(){this.__data__=[],this.size=0}function Sw(n){var i=this.__data__,l=Ja(i,n);return l<0?!1:(l==i.length-1?i.pop():Va.call(i,l,1),--this.size,!0)}function Aw(n){var i=this.__data__,l=Ja(i,n);return l<0?r:i[l][1]}function Mw(n){return Ja(this.__data__,n)>-1}function xw(n,i){var l=this.__data__,p=Ja(l,n);return p<0?(++this.size,l.push([n,i])):l[p][1]=i,this}nr.prototype.clear=Ew,nr.prototype.delete=Sw,nr.prototype.get=Aw,nr.prototype.has=Mw,nr.prototype.set=xw;function rr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function Iw(){this.size=0,this.__data__={hash:new Jr,map:new(ko||nr),string:new Jr}}function Cw(n){var i=ds(this,n).delete(n);return this.size-=i?1:0,i}function Ow(n){return ds(this,n).get(n)}function Tw(n){return ds(this,n).has(n)}function Lw(n,i){var l=ds(this,n),p=l.size;return l.set(n,i),this.size+=l.size==p?0:1,this}rr.prototype.clear=Iw,rr.prototype.delete=Cw,rr.prototype.get=Ow,rr.prototype.has=Tw,rr.prototype.set=Lw;function Qr(n){var i=-1,l=n==null?0:n.length;for(this.__data__=new rr;++i<l;)this.add(n[i])}function Rw(n){return this.__data__.set(n,h),this}function Pw(n){return this.__data__.has(n)}Qr.prototype.add=Qr.prototype.push=Rw,Qr.prototype.has=Pw;function zn(n){this.size=(this.__data__=new nr(n)).size}function $w(){this.__data__=new nr,this.size=0}function Dw(n){var i=this.__data__,l=i.delete(n);return this.size=i.size,l}function zw(n){return this.__data__.get(n)}function Bw(n){return this.__data__.has(n)}function Nw(n,i){var l=this.__data__;if(l instanceof nr){var p=l.__data__;if(!ko||p.length<a-1)return p.push([n,i]),this.size=++l.size,this;l=this.__data__=new rr(p)}return l.set(n,i),this.size=l.size,this}zn.prototype.clear=$w,zn.prototype.delete=Dw,zn.prototype.get=zw,zn.prototype.has=Bw,zn.prototype.set=Nw;function n1(n,i){var l=ze(n),p=!l&&ii(n),_=!l&&!p&&Rr(n),x=!l&&!p&&!_&&Bi(n),L=l||p||_||x,P=L?Xl(n.length,K7):[],B=P.length;for(var ne in n)(i||Ye.call(n,ne))&&!(L&&(ne=="length"||_&&(ne=="offset"||ne=="parent")||x&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||ar(ne,B)))&&P.push(ne);return P}function r1(n){var i=n.length;return i?n[pc(0,i-1)]:r}function Hw(n,i){return us(Jt(n),ei(i,0,n.length))}function Fw(n){return us(Jt(n))}function ic(n,i,l){(l!==r&&!Nn(n[i],l)||l===r&&!(i in n))&&Zn(n,i,l)}function Mo(n,i,l){var p=n[i];(!(Ye.call(n,i)&&Nn(p,l))||l===r&&!(i in n))&&Zn(n,i,l)}function Ja(n,i){for(var l=n.length;l--;)if(Nn(n[l][0],i))return l;return-1}function Gw(n,i,l,p){return Cr(n,function(_,x,L){i(p,_,l(_),L)}),p}function i1(n,i){return n&&qn(i,Rt(i),n)}function Ww(n,i){return n&&qn(i,en(i),n)}function Zn(n,i,l){i=="__proto__"&&Za?Za(n,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[i]=l}function oc(n,i){for(var l=-1,p=i.length,_=U(p),x=n==null;++l<p;)_[l]=x?r:Hc(n,i[l]);return _}function ei(n,i,l){return n===n&&(l!==r&&(n=n<=l?n:l),i!==r&&(n=n>=i?n:i)),n}function In(n,i,l,p,_,x){var L,P=i&v,B=i&m,ne=i&g;if(l&&(L=_?l(n,p,_,x):l(n)),L!==r)return L;if(!gt(n))return n;var ee=ze(n);if(ee){if(L=T8(n),!P)return Jt(n,L)}else{var le=Ft(n),ve=le==Nt||le==w;if(Rr(n))return I1(n,P);if(le==I||le==je||ve&&!_){if(L=B||ve?{}:j1(n),!P)return B?_8(n,Ww(L,n)):w8(n,i1(L,n))}else{if(!rt[le])return _?n:{};L=L8(n,le,P)}}x||(x=new zn);var _e=x.get(n);if(_e)return _e;x.set(n,L),Ef(n)?n.forEach(function($e){L.add(In($e,i,l,$e,n,x))}):yf(n)&&n.forEach(function($e,Oe){L.set(Oe,In($e,i,l,Oe,n,x))});var Ce=ee?r:(ne?B?Ac:Sc:B?en:Rt)(n);return gn(Ce||n,function($e,Oe){Ce&&(Oe=$e,$e=n[Oe]),Mo(L,Oe,In($e,i,l,Oe,n,x))}),L}function Uw(n){var i=Rt(n);return function(l){return o1(l,n,i)}}function o1(n,i,l){var p=l.length;if(n==null)return!p;for(n=et(n);p--;){var _=l[p],x=i[_],L=n[_];if(L===r&&!(_ in n)||!x(L))return!1}return!0}function a1(n,i,l){if(typeof n!="function")throw new Mn(c);return Ro(function(){n.apply(r,l)},i)}function xo(n,i,l,p){var _=-1,x=$a,L=!0,P=n.length,B=[],ne=i.length;if(!P)return B;l&&(i=ut(i,mn(l))),p?(x=Vl,L=!1):i.length>=a&&(x=_o,L=!1,i=new Qr(i));e:for(;++_<P;){var ee=n[_],le=l==null?ee:l(ee);if(ee=p||ee!==0?ee:0,L&&le===le){for(var ve=ne;ve--;)if(i[ve]===le)continue e;B.push(ee)}else x(i,le,p)||B.push(ee)}return B}var Cr=R1(jn),s1=R1(sc,!0);function Vw(n,i){var l=!0;return Cr(n,function(p,_,x){return l=!!i(p,_,x),l}),l}function Qa(n,i,l){for(var p=-1,_=n.length;++p<_;){var x=n[p],L=i(x);if(L!=null&&(P===r?L===L&&!bn(L):l(L,P)))var P=L,B=x}return B}function Zw(n,i,l,p){var _=n.length;for(l=Ne(l),l<0&&(l=-l>_?0:_+l),p=p===r||p>_?_:Ne(p),p<0&&(p+=_),p=l>p?0:Af(p);l<p;)n[l++]=i;return n}function l1(n,i){var l=[];return Cr(n,function(p,_,x){i(p,_,x)&&l.push(p)}),l}function zt(n,i,l,p,_){var x=-1,L=n.length;for(l||(l=P8),_||(_=[]);++x<L;){var P=n[x];i>0&&l(P)?i>1?zt(P,i-1,l,p,_):Ar(_,P):p||(_[_.length]=P)}return _}var ac=P1(),c1=P1(!0);function jn(n,i){return n&&ac(n,i,Rt)}function sc(n,i){return n&&c1(n,i,Rt)}function es(n,i){return Sr(i,function(l){return sr(n[l])})}function ti(n,i){i=Tr(i,n);for(var l=0,p=i.length;n!=null&&l<p;)n=n[Bn(i[l++])];return l&&l==p?n:r}function d1(n,i,l){var p=i(n);return ze(n)?p:Ar(p,l(n))}function Vt(n){return n==null?n===r?ue:C:Xr&&Xr in et(n)?I8(n):F8(n)}function lc(n,i){return n>i}function jw(n,i){return n!=null&&Ye.call(n,i)}function qw(n,i){return n!=null&&i in et(n)}function Kw(n,i,l){return n>=Ht(i,l)&&n<Ot(i,l)}function cc(n,i,l){for(var p=l?Vl:$a,_=n[0].length,x=n.length,L=x,P=U(x),B=1/0,ne=[];L--;){var ee=n[L];L&&i&&(ee=ut(ee,mn(i))),B=Ht(ee.length,B),P[L]=!l&&(i||_>=120&&ee.length>=120)?new Qr(L&&ee):r}ee=n[0];var le=-1,ve=P[0];e:for(;++le<_&&ne.length<B;){var _e=ee[le],Ce=i?i(_e):_e;if(_e=l||_e!==0?_e:0,!(ve?_o(ve,Ce):p(ne,Ce,l))){for(L=x;--L;){var $e=P[L];if(!($e?_o($e,Ce):p(n[L],Ce,l)))continue e}ve&&ve.push(Ce),ne.push(_e)}}return ne}function Yw(n,i,l,p){return jn(n,function(_,x,L){i(p,l(_),x,L)}),p}function Io(n,i,l){i=Tr(i,n),n=X1(n,i);var p=n==null?n:n[Bn(On(i))];return p==null?r:pn(p,n,l)}function u1(n){return vt(n)&&Vt(n)==je}function Xw(n){return vt(n)&&Vt(n)==Fe}function Jw(n){return vt(n)&&Vt(n)==dt}function Co(n,i,l,p,_){return n===i?!0:n==null||i==null||!vt(n)&&!vt(i)?n!==n&&i!==i:Qw(n,i,l,p,Co,_)}function Qw(n,i,l,p,_,x){var L=ze(n),P=ze(i),B=L?ft:Ft(n),ne=P?ft:Ft(i);B=B==je?I:B,ne=ne==je?I:ne;var ee=B==I,le=ne==I,ve=B==ne;if(ve&&Rr(n)){if(!Rr(i))return!1;L=!0,ee=!1}if(ve&&!ee)return x||(x=new zn),L||Bi(n)?U1(n,i,l,p,_,x):M8(n,i,B,l,p,_,x);if(!(l&k)){var _e=ee&&Ye.call(n,"__wrapped__"),Ce=le&&Ye.call(i,"__wrapped__");if(_e||Ce){var $e=_e?n.value():n,Oe=Ce?i.value():i;return x||(x=new zn),_($e,Oe,l,p,x)}}return ve?(x||(x=new zn),x8(n,i,l,p,_,x)):!1}function e8(n){return vt(n)&&Ft(n)==X}function dc(n,i,l,p){var _=l.length,x=_,L=!p;if(n==null)return!x;for(n=et(n);_--;){var P=l[_];if(L&&P[2]?P[1]!==n[P[0]]:!(P[0]in n))return!1}for(;++_<x;){P=l[_];var B=P[0],ne=n[B],ee=P[1];if(L&&P[2]){if(ne===r&&!(B in n))return!1}else{var le=new zn;if(p)var ve=p(ne,ee,B,n,i,le);if(!(ve===r?Co(ee,ne,k|y,p,le):ve))return!1}}return!0}function h1(n){return!gt(n)||D8(n)?!1:(sr(n)?ew:q9).test(ri(n))}function t8(n){return vt(n)&&Vt(n)==ae}function n8(n){return vt(n)&&Ft(n)==N}function r8(n){return vt(n)&&vs(n.length)&&!!at[Vt(n)]}function f1(n){return typeof n=="function"?n:n==null?tn:typeof n=="object"?ze(n)?m1(n[0],n[1]):g1(n):zf(n)}function uc(n){if(!Lo(n))return aw(n);var i=[];for(var l in et(n))Ye.call(n,l)&&l!="constructor"&&i.push(l);return i}function i8(n){if(!gt(n))return H8(n);var i=Lo(n),l=[];for(var p in n)p=="constructor"&&(i||!Ye.call(n,p))||l.push(p);return l}function hc(n,i){return n<i}function p1(n,i){var l=-1,p=Qt(n)?U(n.length):[];return Cr(n,function(_,x,L){p[++l]=i(_,x,L)}),p}function g1(n){var i=xc(n);return i.length==1&&i[0][2]?K1(i[0][0],i[0][1]):function(l){return l===n||dc(l,n,i)}}function m1(n,i){return Cc(n)&&q1(i)?K1(Bn(n),i):function(l){var p=Hc(l,n);return p===r&&p===i?Fc(l,n):Co(i,p,k|y)}}function ts(n,i,l,p,_){n!==i&&ac(i,function(x,L){if(_||(_=new zn),gt(x))o8(n,i,L,l,ts,p,_);else{var P=p?p(Tc(n,L),x,L+"",n,i,_):r;P===r&&(P=x),ic(n,L,P)}},en)}function o8(n,i,l,p,_,x,L){var P=Tc(n,l),B=Tc(i,l),ne=L.get(B);if(ne){ic(n,l,ne);return}var ee=x?x(P,B,l+"",n,i,L):r,le=ee===r;if(le){var ve=ze(B),_e=!ve&&Rr(B),Ce=!ve&&!_e&&Bi(B);ee=B,ve||_e||Ce?ze(P)?ee=P:bt(P)?ee=Jt(P):_e?(le=!1,ee=I1(B,!0)):Ce?(le=!1,ee=C1(B,!0)):ee=[]:Po(B)||ii(B)?(ee=P,ii(P)?ee=Mf(P):(!gt(P)||sr(P))&&(ee=j1(B))):le=!1}le&&(L.set(B,ee),_(ee,B,p,x,L),L.delete(B)),ic(n,l,ee)}function v1(n,i){var l=n.length;if(l)return i+=i<0?l:0,ar(i,l)?n[i]:r}function b1(n,i,l){i.length?i=ut(i,function(_){return ze(_)?function(x){return ti(x,_.length===1?_[0]:_)}:_}):i=[tn];var p=-1;return i=ut(i,mn(Te())),R7(p1(n,function(_,x,L){return{criteria:ut(i,function(P){return P(_)}),index:++p,value:_}}),function(_,x){return b8(_,x,l)})}function a8(n,i){return w1(n,i,function(l,p){return Fc(n,p)})}function w1(n,i,l){for(var p=-1,_=i.length,x={};++p<_;){var L=i[p],P=ti(n,L);l(P,L)&&Oo(x,Tr(L,n),P)}return x}function s8(n){return function(i){return ti(i,n)}}function fc(n,i,l,p){var _=p?L7:Ii,x=-1,L=i.length,P=n;for(n===i&&(i=Jt(i)),l&&(P=ut(n,mn(l)));++x<L;)for(var B=0,ne=i[x],ee=l?l(ne):ne;(B=_(P,ee,B,p))>-1;)P!==n&&Va.call(P,B,1),Va.call(n,B,1);return n}function _1(n,i){for(var l=n?i.length:0,p=l-1;l--;){var _=i[l];if(l==p||_!==x){var x=_;ar(_)?Va.call(n,_,1):vc(n,_)}}return n}function pc(n,i){return n+qa(e1()*(i-n+1))}function l8(n,i,l,p){for(var _=-1,x=Ot(ja((i-n)/(l||1)),0),L=U(x);x--;)L[p?x:++_]=n,n+=l;return L}function gc(n,i){var l="";if(!n||i<1||i>ie)return l;do i%2&&(l+=n),i=qa(i/2),i&&(n+=n);while(i);return l}function Ue(n,i){return Lc(Y1(n,i,tn),n+"")}function c8(n){return r1(Ni(n))}function d8(n,i){var l=Ni(n);return us(l,ei(i,0,l.length))}function Oo(n,i,l,p){if(!gt(n))return n;i=Tr(i,n);for(var _=-1,x=i.length,L=x-1,P=n;P!=null&&++_<x;){var B=Bn(i[_]),ne=l;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(_!=L){var ee=P[B];ne=p?p(ee,B,P):r,ne===r&&(ne=gt(ee)?ee:ar(i[_+1])?[]:{})}Mo(P,B,ne),P=P[B]}return n}var y1=Ka?function(n,i){return Ka.set(n,i),n}:tn,u8=Za?function(n,i){return Za(n,"toString",{configurable:!0,enumerable:!1,value:Wc(i),writable:!0})}:tn;function h8(n){return us(Ni(n))}function Cn(n,i,l){var p=-1,_=n.length;i<0&&(i=-i>_?0:_+i),l=l>_?_:l,l<0&&(l+=_),_=i>l?0:l-i>>>0,i>>>=0;for(var x=U(_);++p<_;)x[p]=n[p+i];return x}function f8(n,i){var l;return Cr(n,function(p,_,x){return l=i(p,_,x),!l}),!!l}function ns(n,i,l){var p=0,_=n==null?p:n.length;if(typeof i=="number"&&i===i&&_<=ge){for(;p<_;){var x=p+_>>>1,L=n[x];L!==null&&!bn(L)&&(l?L<=i:L<i)?p=x+1:_=x}return _}return mc(n,i,tn,l)}function mc(n,i,l,p){var _=0,x=n==null?0:n.length;if(x===0)return 0;i=l(i);for(var L=i!==i,P=i===null,B=bn(i),ne=i===r;_<x;){var ee=qa((_+x)/2),le=l(n[ee]),ve=le!==r,_e=le===null,Ce=le===le,$e=bn(le);if(L)var Oe=p||Ce;else ne?Oe=Ce&&(p||ve):P?Oe=Ce&&ve&&(p||!_e):B?Oe=Ce&&ve&&!_e&&(p||!$e):_e||$e?Oe=!1:Oe=p?le<=i:le<i;Oe?_=ee+1:x=ee}return Ht(x,Ee)}function k1(n,i){for(var l=-1,p=n.length,_=0,x=[];++l<p;){var L=n[l],P=i?i(L):L;if(!l||!Nn(P,B)){var B=P;x[_++]=L===0?0:L}}return x}function E1(n){return typeof n=="number"?n:bn(n)?W:+n}function vn(n){if(typeof n=="string")return n;if(ze(n))return ut(n,vn)+"";if(bn(n))return t1?t1.call(n):"";var i=n+"";return i=="0"&&1/n==-Ie?"-0":i}function Or(n,i,l){var p=-1,_=$a,x=n.length,L=!0,P=[],B=P;if(l)L=!1,_=Vl;else if(x>=a){var ne=i?null:S8(n);if(ne)return za(ne);L=!1,_=_o,B=new Qr}else B=i?[]:P;e:for(;++p<x;){var ee=n[p],le=i?i(ee):ee;if(ee=l||ee!==0?ee:0,L&&le===le){for(var ve=B.length;ve--;)if(B[ve]===le)continue e;i&&B.push(le),P.push(ee)}else _(B,le,l)||(B!==P&&B.push(le),P.push(ee))}return P}function vc(n,i){i=Tr(i,n);var l=-1,p=i.length;if(!p)return!0;for(;++l<p;){var _=Bn(i[l]);if(_==="__proto__"&&!Ye.call(n,"__proto__")||(_==="constructor"||_==="prototype")&&l<p-1)return!1}var x=X1(n,i);return x==null||delete x[Bn(On(i))]}function S1(n,i,l,p){return Oo(n,i,l(ti(n,i)),p)}function rs(n,i,l,p){for(var _=n.length,x=p?_:-1;(p?x--:++x<_)&&i(n[x],x,n););return l?Cn(n,p?0:x,p?x+1:_):Cn(n,p?x+1:0,p?_:x)}function A1(n,i){var l=n;return l instanceof Ve&&(l=l.value()),Zl(i,function(p,_){return _.func.apply(_.thisArg,Ar([p],_.args))},l)}function bc(n,i,l){var p=n.length;if(p<2)return p?Or(n[0]):[];for(var _=-1,x=U(p);++_<p;)for(var L=n[_],P=-1;++P<p;)P!=_&&(x[_]=xo(x[_]||L,n[P],i,l));return Or(zt(x,1),i,l)}function M1(n,i,l){for(var p=-1,_=n.length,x=i.length,L={};++p<_;){var P=p<x?i[p]:r;l(L,n[p],P)}return L}function wc(n){return bt(n)?n:[]}function _c(n){return typeof n=="function"?n:tn}function Tr(n,i){return ze(n)?n:Cc(n,i)?[n]:tf(Xe(n))}var p8=Ue;function Lr(n,i,l){var p=n.length;return l=l===r?p:l,!i&&l>=p?n:Cn(n,i,l)}var x1=tw||function(n){return Lt.clearTimeout(n)};function I1(n,i){if(i)return n.slice();var l=n.length,p=Kh?Kh(l):new n.constructor(l);return n.copy(p),p}function yc(n){var i=new n.constructor(n.byteLength);return new Wa(i).set(new Wa(n)),i}function g8(n,i){var l=i?yc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function m8(n){var i=new n.constructor(n.source,uh.exec(n));return i.lastIndex=n.lastIndex,i}function v8(n){return Ao?et(Ao.call(n)):{}}function C1(n,i){var l=i?yc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function O1(n,i){if(n!==i){var l=n!==r,p=n===null,_=n===n,x=bn(n),L=i!==r,P=i===null,B=i===i,ne=bn(i);if(!P&&!ne&&!x&&n>i||x&&L&&B&&!P&&!ne||p&&L&&B||!l&&B||!_)return 1;if(!p&&!x&&!ne&&n<i||ne&&l&&_&&!p&&!x||P&&l&&_||!L&&_||!B)return-1}return 0}function b8(n,i,l){for(var p=-1,_=n.criteria,x=i.criteria,L=_.length,P=l.length;++p<L;){var B=O1(_[p],x[p]);if(B)return p>=P?B:B*(l[p]=="desc"?-1:1)}return n.index-i.index}function T1(n,i,l,p){for(var _=-1,x=n.length,L=l.length,P=-1,B=i.length,ne=Ot(x-L,0),ee=U(B+ne),le=!p;++P<B;)ee[P]=i[P];for(;++_<L;)(le||_<x)&&(ee[l[_]]=n[_]);for(;ne--;)ee[P++]=n[_++];return ee}function L1(n,i,l,p){for(var _=-1,x=n.length,L=-1,P=l.length,B=-1,ne=i.length,ee=Ot(x-P,0),le=U(ee+ne),ve=!p;++_<ee;)le[_]=n[_];for(var _e=_;++B<ne;)le[_e+B]=i[B];for(;++L<P;)(ve||_<x)&&(le[_e+l[L]]=n[_++]);return le}function Jt(n,i){var l=-1,p=n.length;for(i||(i=U(p));++l<p;)i[l]=n[l];return i}function qn(n,i,l,p){var _=!l;l||(l={});for(var x=-1,L=i.length;++x<L;){var P=i[x],B=p?p(l[P],n[P],P,l,n):r;B===r&&(B=n[P]),_?Zn(l,P,B):Mo(l,P,B)}return l}function w8(n,i){return qn(n,Ic(n),i)}function _8(n,i){return qn(n,V1(n),i)}function is(n,i){return function(l,p){var _=ze(l)?M7:Gw,x=i?i():{};return _(l,n,Te(p,2),x)}}function $i(n){return Ue(function(i,l){var p=-1,_=l.length,x=_>1?l[_-1]:r,L=_>2?l[2]:r;for(x=n.length>3&&typeof x=="function"?(_--,x):r,L&&Zt(l[0],l[1],L)&&(x=_<3?r:x,_=1),i=et(i);++p<_;){var P=l[p];P&&n(i,P,p,x)}return i})}function R1(n,i){return function(l,p){if(l==null)return l;if(!Qt(l))return n(l,p);for(var _=l.length,x=i?_:-1,L=et(l);(i?x--:++x<_)&&p(L[x],x,L)!==!1;);return l}}function P1(n){return function(i,l,p){for(var _=-1,x=et(i),L=p(i),P=L.length;P--;){var B=L[n?P:++_];if(l(x[B],B,x)===!1)break}return i}}function y8(n,i,l){var p=i&S,_=To(n);function x(){return(this&&this!==Lt&&this instanceof x?_:n).apply(p?l:this,arguments)}return x}function $1(n){return function(i){i=Xe(i);var l=Ci(i)?Dn(i):r,p=l?l[0]:i.charAt(0),_=l?Lr(l,1).join(""):i.slice(1);return p[n]()+_}}function Di(n){return function(i){return Zl($f(Pf(i).replace(h7,"")),n,"")}}function To(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var l=Pi(n.prototype),p=n.apply(l,i);return gt(p)?p:l}}function k8(n,i,l){var p=To(n);function _(){for(var x=arguments.length,L=U(x),P=x,B=zi(_);P--;)L[P]=arguments[P];var ne=x<3&&L[0]!==B&&L[x-1]!==B?[]:Mr(L,B);return x-=ne.length,x<l?H1(n,i,os,_.placeholder,r,L,ne,r,r,l-x):pn(this&&this!==Lt&&this instanceof _?p:n,this,L)}return _}function D1(n){return function(i,l,p){var _=et(i);if(!Qt(i)){var x=Te(l,3);i=Rt(i),l=function(P){return x(_[P],P,_)}}var L=n(i,l,p);return L>-1?_[x?i[L]:L]:r}}function z1(n){return or(function(i){var l=i.length,p=l,_=xn.prototype.thru;for(n&&i.reverse();p--;){var x=i[p];if(typeof x!="function")throw new Mn(c);if(_&&!L&&cs(x)=="wrapper")var L=new xn([],!0)}for(p=L?p:l;++p<l;){x=i[p];var P=cs(x),B=P=="wrapper"?Mc(x):r;B&&Oc(B[0])&&B[1]==(re|O|q|G)&&!B[4].length&&B[9]==1?L=L[cs(B[0])].apply(L,B[3]):L=x.length==1&&Oc(x)?L[P]():L.thru(x)}return function(){var ne=arguments,ee=ne[0];if(L&&ne.length==1&&ze(ee))return L.plant(ee).value();for(var le=0,ve=l?i[le].apply(this,ne):ee;++le<l;)ve=i[le].call(this,ve);return ve}})}function os(n,i,l,p,_,x,L,P,B,ne){var ee=i&re,le=i&S,ve=i&M,_e=i&(O|D),Ce=i&pe,$e=ve?r:To(n);function Oe(){for(var tt=arguments.length,Ze=U(tt),jt=tt;jt--;)Ze[jt]=arguments[jt];if(_e)var Kn=zi(Oe),Pr=$7(Ze,Kn);if(p&&(Ze=T1(Ze,p,_,_e)),x&&(Ze=L1(Ze,x,L,_e)),tt-=Pr,_e&&tt<ne){var wt=Mr(Ze,Kn);return H1(n,i,os,Oe.placeholder,l,Ze,wt,P,B,ne-tt)}var Hn=le?l:this,cr=ve?Hn[n]:n;return tt=Ze.length,P?Ze=G8(Ze,P):Ce&&tt>1&&Ze.reverse(),ee&&B<tt&&(Ze.length=B),this&&this!==Lt&&this instanceof Oe&&(cr=$e||To(cr)),cr.apply(Hn,Ze)}return Oe}function B1(n,i){return function(l,p){return Yw(l,n,i(p),{})}}function as(n,i){return function(l,p){var _;if(l===r&&p===r)return i;if(l!==r&&(_=l),p!==r){if(_===r)return p;typeof l=="string"||typeof p=="string"?(l=vn(l),p=vn(p)):(l=E1(l),p=E1(p)),_=n(l,p)}return _}}function kc(n){return or(function(i){return i=ut(i,mn(Te())),Ue(function(l){var p=this;return n(i,function(_){return pn(_,p,l)})})})}function ss(n,i){i=i===r?" ":vn(i);var l=i.length;if(l<2)return l?gc(i,n):i;var p=gc(i,ja(n/Oi(i)));return Ci(i)?Lr(Dn(p),0,n).join(""):p.slice(0,n)}function E8(n,i,l,p){var _=i&S,x=To(n);function L(){for(var P=-1,B=arguments.length,ne=-1,ee=p.length,le=U(ee+B),ve=this&&this!==Lt&&this instanceof L?x:n;++ne<ee;)le[ne]=p[ne];for(;B--;)le[ne++]=arguments[++P];return pn(ve,_?l:this,le)}return L}function N1(n){return function(i,l,p){return p&&typeof p!="number"&&Zt(i,l,p)&&(l=p=r),i=lr(i),l===r?(l=i,i=0):l=lr(l),p=p===r?i<l?1:-1:lr(p),l8(i,l,p,n)}}function ls(n){return function(i,l){return typeof i=="string"&&typeof l=="string"||(i=Tn(i),l=Tn(l)),n(i,l)}}function H1(n,i,l,p,_,x,L,P,B,ne){var ee=i&O,le=ee?L:r,ve=ee?r:L,_e=ee?x:r,Ce=ee?r:x;i|=ee?q:Z,i&=~(ee?Z:q),i&T||(i&=~(S|M));var $e=[n,i,_,_e,le,Ce,ve,P,B,ne],Oe=l.apply(r,$e);return Oc(n)&&J1(Oe,$e),Oe.placeholder=p,Q1(Oe,n,i)}function Ec(n){var i=Ct[n];return function(l,p){if(l=Tn(l),p=p==null?0:Ht(Ne(p),292),p&&Qh(l)){var _=(Xe(l)+"e").split("e");return _=(Xe(i(_[0]+"e"+(+_[1]+p)))+"e").split("e"),+(_[0]+"e"+(+_[1]-p))}return i(l)}}var S8=Li&&1/za(new Li([,-0]))[1]==Ie?function(n){return new Li(n)}:Zc;function F1(n){return function(i){var l=Ft(i);return l==X?Ql(i):l==N?G7(i):P7(i,n(i))}}function ir(n,i,l,p,_,x,L,P){var B=i&M;if(!B&&typeof n!="function")throw new Mn(c);var ne=p?p.length:0;if(ne||(i&=~(q|Z),p=_=r),L=L===r?L:Ot(Ne(L),0),P=P===r?P:Ne(P),ne-=_?_.length:0,i&Z){var ee=p,le=_;p=_=r}var ve=B?r:Mc(n),_e=[n,i,l,p,_,ee,le,x,L,P];if(ve&&N8(_e,ve),n=_e[0],i=_e[1],l=_e[2],p=_e[3],_=_e[4],P=_e[9]=_e[9]===r?B?0:n.length:Ot(_e[9]-ne,0),!P&&i&(O|D)&&(i&=~(O|D)),!i||i==S)var Ce=y8(n,i,l);else i==O||i==D?Ce=k8(n,i,P):(i==q||i==(S|q))&&!_.length?Ce=E8(n,i,l,p):Ce=os.apply(r,_e);return Q1((ve?y1:J1)(Ce,_e),n,i)}function G1(n,i,l,p){return n===r||Nn(n,Ti[l])&&!Ye.call(p,l)?i:n}function W1(n,i,l,p,_,x){return gt(n)&&gt(i)&&(x.set(i,n),ts(n,i,r,W1,x),x.delete(i)),n}function A8(n){return Po(n)?r:n}function U1(n,i,l,p,_,x){var L=l&k,P=n.length,B=i.length;if(P!=B&&!(L&&B>P))return!1;var ne=x.get(n),ee=x.get(i);if(ne&&ee)return ne==i&&ee==n;var le=-1,ve=!0,_e=l&y?new Qr:r;for(x.set(n,i),x.set(i,n);++le<P;){var Ce=n[le],$e=i[le];if(p)var Oe=L?p($e,Ce,le,i,n,x):p(Ce,$e,le,n,i,x);if(Oe!==r){if(Oe)continue;ve=!1;break}if(_e){if(!jl(i,function(tt,Ze){if(!_o(_e,Ze)&&(Ce===tt||_(Ce,tt,l,p,x)))return _e.push(Ze)})){ve=!1;break}}else if(!(Ce===$e||_(Ce,$e,l,p,x))){ve=!1;break}}return x.delete(n),x.delete(i),ve}function M8(n,i,l,p,_,x,L){switch(l){case It:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case Fe:return!(n.byteLength!=i.byteLength||!x(new Wa(n),new Wa(i)));case He:case dt:case V:return Nn(+n,+i);case Ut:return n.name==i.name&&n.message==i.message;case ae:case de:return n==i+"";case X:var P=Ql;case N:var B=p&k;if(P||(P=za),n.size!=i.size&&!B)return!1;var ne=L.get(n);if(ne)return ne==i;p|=y,L.set(n,i);var ee=U1(P(n),P(i),p,_,x,L);return L.delete(n),ee;case me:if(Ao)return Ao.call(n)==Ao.call(i)}return!1}function x8(n,i,l,p,_,x){var L=l&k,P=Sc(n),B=P.length;if(B!=Sc(i).length&&!L)return!1;for(var ne=B;ne--;){var ee=P[ne];if(!(L?ee in i:Ye.call(i,ee)))return!1}var le=x.get(n),ve=x.get(i);if(le&&ve)return le==i&&ve==n;var _e=!0;x.set(n,i),x.set(i,n);for(var Ce=L;++ne<B;){ee=P[ne];var $e=n[ee],Oe=i[ee];if(p)var tt=L?p(Oe,$e,ee,i,n,x):p($e,Oe,ee,n,i,x);if(!(tt===r?$e===Oe||_($e,Oe,l,p,x):tt)){_e=!1;break}Ce||(Ce=ee=="constructor")}if(_e&&!Ce){var Ze=n.constructor,jt=i.constructor;Ze!=jt&&"constructor"in n&&"constructor"in i&&!(typeof Ze=="function"&&Ze instanceof Ze&&typeof jt=="function"&&jt instanceof jt)&&(_e=!1)}return x.delete(n),x.delete(i),_e}function or(n){return Lc(Y1(n,r,af),n+"")}function Sc(n){return d1(n,Rt,Ic)}function Ac(n){return d1(n,en,V1)}var Mc=Ka?function(n){return Ka.get(n)}:Zc;function cs(n){for(var i=n.name+"",l=Ri[i],p=Ye.call(Ri,i)?l.length:0;p--;){var _=l[p],x=_.func;if(x==null||x==n)return _.name}return i}function zi(n){return(Ye.call(A,"placeholder")?A:n).placeholder}function Te(){var n=A.iteratee||Uc;return n=n===Uc?f1:n,arguments.length?n(arguments[0],arguments[1]):n}function ds(n,i){var l=n.__data__;return $8(i)?l[typeof i=="string"?"string":"hash"]:l.map}function xc(n){for(var i=Rt(n),l=i.length;l--;){var p=i[l],_=n[p];i[l]=[p,_,q1(_)]}return i}function ni(n,i){var l=N7(n,i);return h1(l)?l:r}function I8(n){var i=Ye.call(n,Xr),l=n[Xr];try{n[Xr]=r;var p=!0}catch{}var _=Fa.call(n);return p&&(i?n[Xr]=l:delete n[Xr]),_}var Ic=tc?function(n){return n==null?[]:(n=et(n),Sr(tc(n),function(i){return Xh.call(n,i)}))}:jc,V1=tc?function(n){for(var i=[];n;)Ar(i,Ic(n)),n=Ua(n);return i}:jc,Ft=Vt;(nc&&Ft(new nc(new ArrayBuffer(1)))!=It||ko&&Ft(new ko)!=X||rc&&Ft(rc.resolve())!=z||Li&&Ft(new Li)!=N||Eo&&Ft(new Eo)!=ke)&&(Ft=function(n){var i=Vt(n),l=i==I?n.constructor:r,p=l?ri(l):"";if(p)switch(p){case dw:return It;case uw:return X;case hw:return z;case fw:return N;case pw:return ke}return i});function C8(n,i,l){for(var p=-1,_=l.length;++p<_;){var x=l[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":i-=L;break;case"take":i=Ht(i,n+L);break;case"takeRight":n=Ot(n,i-L);break}}return{start:n,end:i}}function O8(n){var i=n.match(F9);return i?i[1].split(G9):[]}function Z1(n,i,l){i=Tr(i,n);for(var p=-1,_=i.length,x=!1;++p<_;){var L=Bn(i[p]);if(!(x=n!=null&&l(n,L)))break;n=n[L]}return x||++p!=_?x:(_=n==null?0:n.length,!!_&&vs(_)&&ar(L,_)&&(ze(n)||ii(n)))}function T8(n){var i=n.length,l=new n.constructor(i);return i&&typeof n[0]=="string"&&Ye.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function j1(n){return typeof n.constructor=="function"&&!Lo(n)?Pi(Ua(n)):{}}function L8(n,i,l){var p=n.constructor;switch(i){case Fe:return yc(n);case He:case dt:return new p(+n);case It:return g8(n,l);case er:case Xt:case tr:case ot:case kr:case qr:case fn:case Mi:case wo:return C1(n,l);case X:return new p;case V:case de:return new p(n);case ae:return m8(n);case N:return new p;case me:return v8(n)}}function R8(n,i){var l=i.length;if(!l)return n;var p=l-1;return i[p]=(l>1?"& ":"")+i[p],i=i.join(l>2?", ":" "),n.replace(H9,`{
/* [wrapped with `+i+`] */
`)}function P8(n){return ze(n)||ii(n)||!!(Jh&&n&&n[Jh])}function ar(n,i){var l=typeof n;return i=i??ie,!!i&&(l=="number"||l!="symbol"&&Y9.test(n))&&n>-1&&n%1==0&&n<i}function Zt(n,i,l){if(!gt(l))return!1;var p=typeof i;return(p=="number"?Qt(l)&&ar(i,l.length):p=="string"&&i in l)?Nn(l[i],n):!1}function Cc(n,i){if(ze(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||bn(n)?!0:D9.test(n)||!$9.test(n)||i!=null&&n in et(i)}function $8(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Oc(n){var i=cs(n),l=A[i];if(typeof l!="function"||!(i in Ve.prototype))return!1;if(n===l)return!0;var p=Mc(l);return!!p&&n===p[0]}function D8(n){return!!qh&&qh in n}var z8=Na?sr:qc;function Lo(n){var i=n&&n.constructor;return n===(typeof i=="function"&&i.prototype||Ti)}function q1(n){return n===n&&!gt(n)}function K1(n,i){return function(l){return l==null?!1:l[n]===i&&(i!==r||n in et(l))}}function B8(n){var i=gs(n,function(p){return l.size===f&&l.clear(),p}),l=i.cache;return i}function N8(n,i){var l=n[1],p=i[1],_=l|p,x=_<(S|M|re),L=p==re&&l==O||p==re&&l==G&&n[7].length<=i[8]||p==(re|G)&&i[7].length<=i[8]&&l==O;if(!(x||L))return n;p&S&&(n[2]=i[2],_|=l&S?0:T);var P=i[3];if(P){var B=n[3];n[3]=B?T1(B,P,i[4]):P,n[4]=B?Mr(n[3],b):i[4]}return P=i[5],P&&(B=n[5],n[5]=B?L1(B,P,i[6]):P,n[6]=B?Mr(n[5],b):i[6]),P=i[7],P&&(n[7]=P),p&re&&(n[8]=n[8]==null?i[8]:Ht(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=_,n}function H8(n){var i=[];if(n!=null)for(var l in et(n))i.push(l);return i}function F8(n){return Fa.call(n)}function Y1(n,i,l){return i=Ot(i===r?n.length-1:i,0),function(){for(var p=arguments,_=-1,x=Ot(p.length-i,0),L=U(x);++_<x;)L[_]=p[i+_];_=-1;for(var P=U(i+1);++_<i;)P[_]=p[_];return P[i]=l(L),pn(n,this,P)}}function X1(n,i){return i.length<2?n:ti(n,Cn(i,0,-1))}function G8(n,i){for(var l=n.length,p=Ht(i.length,l),_=Jt(n);p--;){var x=i[p];n[p]=ar(x,l)?_[x]:r}return n}function Tc(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var J1=ef(y1),Ro=rw||function(n,i){return Lt.setTimeout(n,i)},Lc=ef(u8);function Q1(n,i,l){var p=i+"";return Lc(n,R8(p,W8(O8(p),l)))}function ef(n){var i=0,l=0;return function(){var p=sw(),_=E-(p-l);if(l=p,_>0){if(++i>=Y)return arguments[0]}else i=0;return n.apply(r,arguments)}}function us(n,i){var l=-1,p=n.length,_=p-1;for(i=i===r?p:i;++l<i;){var x=pc(l,_),L=n[x];n[x]=n[l],n[l]=L}return n.length=i,n}var tf=B8(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(z9,function(l,p,_,x){i.push(_?x.replace(U9,"$1"):p||l)}),i});function Bn(n){if(typeof n=="string"||bn(n))return n;var i=n+"";return i=="0"&&1/n==-Ie?"-0":i}function ri(n){if(n!=null){try{return Ha.call(n)}catch{}try{return n+""}catch{}}return""}function W8(n,i){return gn(he,function(l){var p="_."+l[0];i&l[1]&&!$a(n,p)&&n.push(p)}),n.sort()}function nf(n){if(n instanceof Ve)return n.clone();var i=new xn(n.__wrapped__,n.__chain__);return i.__actions__=Jt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function U8(n,i,l){(l?Zt(n,i,l):i===r)?i=1:i=Ot(Ne(i),0);var p=n==null?0:n.length;if(!p||i<1)return[];for(var _=0,x=0,L=U(ja(p/i));_<p;)L[x++]=Cn(n,_,_+=i);return L}function V8(n){for(var i=-1,l=n==null?0:n.length,p=0,_=[];++i<l;){var x=n[i];x&&(_[p++]=x)}return _}function Z8(){var n=arguments.length;if(!n)return[];for(var i=U(n-1),l=arguments[0],p=n;p--;)i[p-1]=arguments[p];return Ar(ze(l)?Jt(l):[l],zt(i,1))}var j8=Ue(function(n,i){return bt(n)?xo(n,zt(i,1,bt,!0)):[]}),q8=Ue(function(n,i){var l=On(i);return bt(l)&&(l=r),bt(n)?xo(n,zt(i,1,bt,!0),Te(l,2)):[]}),K8=Ue(function(n,i){var l=On(i);return bt(l)&&(l=r),bt(n)?xo(n,zt(i,1,bt,!0),r,l):[]});function Y8(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Ne(i),Cn(n,i<0?0:i,p)):[]}function X8(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Ne(i),i=p-i,Cn(n,0,i<0?0:i)):[]}function J8(n,i){return n&&n.length?rs(n,Te(i,3),!0,!0):[]}function Q8(n,i){return n&&n.length?rs(n,Te(i,3),!0):[]}function e_(n,i,l,p){var _=n==null?0:n.length;return _?(l&&typeof l!="number"&&Zt(n,i,l)&&(l=0,p=_),Zw(n,i,l,p)):[]}function rf(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var _=l==null?0:Ne(l);return _<0&&(_=Ot(p+_,0)),Da(n,Te(i,3),_)}function of(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var _=p-1;return l!==r&&(_=Ne(l),_=l<0?Ot(p+_,0):Ht(_,p-1)),Da(n,Te(i,3),_,!0)}function af(n){return n!=null&&n.length?zt(n,1):[]}function t_(n){return n!=null&&n.length?zt(n,Ie):[]}function n_(n,i){return n!=null&&n.length?(i=i===r?1:Ne(i),zt(n,i)):[]}function r_(n){for(var i=-1,l=n==null?0:n.length,p={};++i<l;){var _=n[i];Zn(p,_[0],_[1])}return p}function sf(n){return n&&n.length?n[0]:r}function i_(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var _=l==null?0:Ne(l);return _<0&&(_=Ot(p+_,0)),Ii(n,i,_)}function o_(n){return n!=null&&n.length?Cn(n,0,-1):[]}var a_=Ue(function(n){var i=ut(n,wc);return i.length&&i[0]===n[0]?cc(i):[]}),s_=Ue(function(n){var i=On(n),l=ut(n,wc);return i===On(l)?i=r:l.pop(),l.length&&l[0]===n[0]?cc(l,Te(i,2)):[]}),l_=Ue(function(n){var i=On(n),l=ut(n,wc);return i=typeof i=="function"?i:r,i&&l.pop(),l.length&&l[0]===n[0]?cc(l,r,i):[]});function c_(n,i){return n==null?"":ow.call(n,i)}function On(n){var i=n==null?0:n.length;return i?n[i-1]:r}function d_(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var _=p;return l!==r&&(_=Ne(l),_=_<0?Ot(p+_,0):Ht(_,p-1)),i===i?U7(n,i,_):Da(n,Hh,_,!0)}function u_(n,i){return n&&n.length?v1(n,Ne(i)):r}var h_=Ue(lf);function lf(n,i){return n&&n.length&&i&&i.length?fc(n,i):n}function f_(n,i,l){return n&&n.length&&i&&i.length?fc(n,i,Te(l,2)):n}function p_(n,i,l){return n&&n.length&&i&&i.length?fc(n,i,r,l):n}var g_=or(function(n,i){var l=n==null?0:n.length,p=oc(n,i);return _1(n,ut(i,function(_){return ar(_,l)?+_:_}).sort(O1)),p});function m_(n,i){var l=[];if(!(n&&n.length))return l;var p=-1,_=[],x=n.length;for(i=Te(i,3);++p<x;){var L=n[p];i(L,p,n)&&(l.push(L),_.push(p))}return _1(n,_),l}function Rc(n){return n==null?n:cw.call(n)}function v_(n,i,l){var p=n==null?0:n.length;return p?(l&&typeof l!="number"&&Zt(n,i,l)?(i=0,l=p):(i=i==null?0:Ne(i),l=l===r?p:Ne(l)),Cn(n,i,l)):[]}function b_(n,i){return ns(n,i)}function w_(n,i,l){return mc(n,i,Te(l,2))}function __(n,i){var l=n==null?0:n.length;if(l){var p=ns(n,i);if(p<l&&Nn(n[p],i))return p}return-1}function y_(n,i){return ns(n,i,!0)}function k_(n,i,l){return mc(n,i,Te(l,2),!0)}function E_(n,i){if(n!=null&&n.length){var l=ns(n,i,!0)-1;if(Nn(n[l],i))return l}return-1}function S_(n){return n&&n.length?k1(n):[]}function A_(n,i){return n&&n.length?k1(n,Te(i,2)):[]}function M_(n){var i=n==null?0:n.length;return i?Cn(n,1,i):[]}function x_(n,i,l){return n&&n.length?(i=l||i===r?1:Ne(i),Cn(n,0,i<0?0:i)):[]}function I_(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Ne(i),i=p-i,Cn(n,i<0?0:i,p)):[]}function C_(n,i){return n&&n.length?rs(n,Te(i,3),!1,!0):[]}function O_(n,i){return n&&n.length?rs(n,Te(i,3)):[]}var T_=Ue(function(n){return Or(zt(n,1,bt,!0))}),L_=Ue(function(n){var i=On(n);return bt(i)&&(i=r),Or(zt(n,1,bt,!0),Te(i,2))}),R_=Ue(function(n){var i=On(n);return i=typeof i=="function"?i:r,Or(zt(n,1,bt,!0),r,i)});function P_(n){return n&&n.length?Or(n):[]}function $_(n,i){return n&&n.length?Or(n,Te(i,2)):[]}function D_(n,i){return i=typeof i=="function"?i:r,n&&n.length?Or(n,r,i):[]}function Pc(n){if(!(n&&n.length))return[];var i=0;return n=Sr(n,function(l){if(bt(l))return i=Ot(l.length,i),!0}),Xl(i,function(l){return ut(n,ql(l))})}function cf(n,i){if(!(n&&n.length))return[];var l=Pc(n);return i==null?l:ut(l,function(p){return pn(i,r,p)})}var z_=Ue(function(n,i){return bt(n)?xo(n,i):[]}),B_=Ue(function(n){return bc(Sr(n,bt))}),N_=Ue(function(n){var i=On(n);return bt(i)&&(i=r),bc(Sr(n,bt),Te(i,2))}),H_=Ue(function(n){var i=On(n);return i=typeof i=="function"?i:r,bc(Sr(n,bt),r,i)}),F_=Ue(Pc);function G_(n,i){return M1(n||[],i||[],Mo)}function W_(n,i){return M1(n||[],i||[],Oo)}var U_=Ue(function(n){var i=n.length,l=i>1?n[i-1]:r;return l=typeof l=="function"?(n.pop(),l):r,cf(n,l)});function df(n){var i=A(n);return i.__chain__=!0,i}function V_(n,i){return i(n),n}function hs(n,i){return i(n)}var Z_=or(function(n){var i=n.length,l=i?n[0]:0,p=this.__wrapped__,_=function(x){return oc(x,n)};return i>1||this.__actions__.length||!(p instanceof Ve)||!ar(l)?this.thru(_):(p=p.slice(l,+l+(i?1:0)),p.__actions__.push({func:hs,args:[_],thisArg:r}),new xn(p,this.__chain__).thru(function(x){return i&&!x.length&&x.push(r),x}))});function j_(){return df(this)}function q_(){return new xn(this.value(),this.__chain__)}function K_(){this.__values__===r&&(this.__values__=Sf(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function Y_(){return this}function X_(n){for(var i,l=this;l instanceof Xa;){var p=nf(l);p.__index__=0,p.__values__=r,i?_.__wrapped__=p:i=p;var _=p;l=l.__wrapped__}return _.__wrapped__=n,i}function J_(){var n=this.__wrapped__;if(n instanceof Ve){var i=n;return this.__actions__.length&&(i=new Ve(this)),i=i.reverse(),i.__actions__.push({func:hs,args:[Rc],thisArg:r}),new xn(i,this.__chain__)}return this.thru(Rc)}function Q_(){return A1(this.__wrapped__,this.__actions__)}var ey=is(function(n,i,l){Ye.call(n,l)?++n[l]:Zn(n,l,1)});function ty(n,i,l){var p=ze(n)?Bh:Vw;return l&&Zt(n,i,l)&&(i=r),p(n,Te(i,3))}function ny(n,i){return(ze(n)?Sr:l1)(n,Te(i,3))}var ry=D1(rf),iy=D1(of);function oy(n,i){return zt(fs(n,i),1)}function ay(n,i){return zt(fs(n,i),Ie)}function sy(n,i,l){return l=l===r?1:Ne(l),zt(fs(n,i),l)}function uf(n,i){return(ze(n)?gn:Cr)(n,Te(i,3))}function hf(n,i){return(ze(n)?x7:s1)(n,Te(i,3))}var ly=is(function(n,i,l){Ye.call(n,l)?n[l].push(i):Zn(n,l,[i])});function cy(n,i,l,p){n=Qt(n)?n:Ni(n),l=l&&!p?Ne(l):0;var _=n.length;return l<0&&(l=Ot(_+l,0)),bs(n)?l<=_&&n.indexOf(i,l)>-1:!!_&&Ii(n,i,l)>-1}var dy=Ue(function(n,i,l){var p=-1,_=typeof i=="function",x=Qt(n)?U(n.length):[];return Cr(n,function(L){x[++p]=_?pn(i,L,l):Io(L,i,l)}),x}),uy=is(function(n,i,l){Zn(n,l,i)});function fs(n,i){return(ze(n)?ut:p1)(n,Te(i,3))}function hy(n,i,l,p){return n==null?[]:(ze(i)||(i=i==null?[]:[i]),l=p?r:l,ze(l)||(l=l==null?[]:[l]),b1(n,i,l))}var fy=is(function(n,i,l){n[l?0:1].push(i)},function(){return[[],[]]});function py(n,i,l){var p=ze(n)?Zl:Gh,_=arguments.length<3;return p(n,Te(i,4),l,_,Cr)}function gy(n,i,l){var p=ze(n)?I7:Gh,_=arguments.length<3;return p(n,Te(i,4),l,_,s1)}function my(n,i){return(ze(n)?Sr:l1)(n,ms(Te(i,3)))}function vy(n){return(ze(n)?r1:c8)(n)}function by(n,i,l){return(l?Zt(n,i,l):i===r)?i=1:i=Ne(i),(ze(n)?Hw:d8)(n,i)}function wy(n){return(ze(n)?Fw:h8)(n)}function _y(n){if(n==null)return 0;if(Qt(n))return bs(n)?Oi(n):n.length;var i=Ft(n);return i==X||i==N?n.size:uc(n).length}function yy(n,i,l){var p=ze(n)?jl:f8;return l&&Zt(n,i,l)&&(i=r),p(n,Te(i,3))}var ky=Ue(function(n,i){if(n==null)return[];var l=i.length;return l>1&&Zt(n,i[0],i[1])?i=[]:l>2&&Zt(i[0],i[1],i[2])&&(i=[i[0]]),b1(n,zt(i,1),[])}),ps=nw||function(){return Lt.Date.now()};function Ey(n,i){if(typeof i!="function")throw new Mn(c);return n=Ne(n),function(){if(--n<1)return i.apply(this,arguments)}}function ff(n,i,l){return i=l?r:i,i=n&&i==null?n.length:i,ir(n,re,r,r,r,r,i)}function pf(n,i){var l;if(typeof i!="function")throw new Mn(c);return n=Ne(n),function(){return--n>0&&(l=i.apply(this,arguments)),n<=1&&(i=r),l}}var $c=Ue(function(n,i,l){var p=S;if(l.length){var _=Mr(l,zi($c));p|=q}return ir(n,p,i,l,_)}),gf=Ue(function(n,i,l){var p=S|M;if(l.length){var _=Mr(l,zi(gf));p|=q}return ir(i,p,n,l,_)});function mf(n,i,l){i=l?r:i;var p=ir(n,O,r,r,r,r,r,i);return p.placeholder=mf.placeholder,p}function vf(n,i,l){i=l?r:i;var p=ir(n,D,r,r,r,r,r,i);return p.placeholder=vf.placeholder,p}function bf(n,i,l){var p,_,x,L,P,B,ne=0,ee=!1,le=!1,ve=!0;if(typeof n!="function")throw new Mn(c);i=Tn(i)||0,gt(l)&&(ee=!!l.leading,le="maxWait"in l,x=le?Ot(Tn(l.maxWait)||0,i):x,ve="trailing"in l?!!l.trailing:ve);function _e(wt){var Hn=p,cr=_;return p=_=r,ne=wt,L=n.apply(cr,Hn),L}function Ce(wt){return ne=wt,P=Ro(tt,i),ee?_e(wt):L}function $e(wt){var Hn=wt-B,cr=wt-ne,Bf=i-Hn;return le?Ht(Bf,x-cr):Bf}function Oe(wt){var Hn=wt-B,cr=wt-ne;return B===r||Hn>=i||Hn<0||le&&cr>=x}function tt(){var wt=ps();if(Oe(wt))return Ze(wt);P=Ro(tt,$e(wt))}function Ze(wt){return P=r,ve&&p?_e(wt):(p=_=r,L)}function jt(){P!==r&&x1(P),ne=0,p=B=_=P=r}function Kn(){return P===r?L:Ze(ps())}function Pr(){var wt=ps(),Hn=Oe(wt);if(p=arguments,_=this,B=wt,Hn){if(P===r)return Ce(B);if(le)return x1(P),P=Ro(tt,i),_e(B)}return P===r&&(P=Ro(tt,i)),L}return Pr.cancel=jt,Pr.flush=Kn,Pr}var Sy=Ue(function(n,i){return a1(n,1,i)}),Ay=Ue(function(n,i,l){return a1(n,Tn(i)||0,l)});function My(n){return ir(n,pe)}function gs(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new Mn(c);var l=function(){var p=arguments,_=i?i.apply(this,p):p[0],x=l.cache;if(x.has(_))return x.get(_);var L=n.apply(this,p);return l.cache=x.set(_,L)||x,L};return l.cache=new(gs.Cache||rr),l}gs.Cache=rr;function ms(n){if(typeof n!="function")throw new Mn(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function xy(n){return pf(2,n)}var Iy=p8(function(n,i){i=i.length==1&&ze(i[0])?ut(i[0],mn(Te())):ut(zt(i,1),mn(Te()));var l=i.length;return Ue(function(p){for(var _=-1,x=Ht(p.length,l);++_<x;)p[_]=i[_].call(this,p[_]);return pn(n,this,p)})}),Dc=Ue(function(n,i){return ir(n,q,r,i,Mr(i,zi(Dc)))}),wf=Ue(function(n,i){return ir(n,Z,r,i,Mr(i,zi(wf)))}),Cy=or(function(n,i){return ir(n,G,r,r,r,i)});function Oy(n,i){if(typeof n!="function")throw new Mn(c);return i=i===r?i:Ne(i),Ue(n,i)}function Ty(n,i){if(typeof n!="function")throw new Mn(c);return i=i==null?0:Ot(Ne(i),0),Ue(function(l){var p=l[i],_=Lr(l,0,i);return p&&Ar(_,p),pn(n,this,_)})}function Ly(n,i,l){var p=!0,_=!0;if(typeof n!="function")throw new Mn(c);return gt(l)&&(p="leading"in l?!!l.leading:p,_="trailing"in l?!!l.trailing:_),bf(n,i,{leading:p,maxWait:i,trailing:_})}function Ry(n){return ff(n,1)}function Py(n,i){return Dc(_c(i),n)}function $y(){if(!arguments.length)return[];var n=arguments[0];return ze(n)?n:[n]}function Dy(n){return In(n,g)}function zy(n,i){return i=typeof i=="function"?i:r,In(n,g,i)}function By(n){return In(n,v|g)}function Ny(n,i){return i=typeof i=="function"?i:r,In(n,v|g,i)}function Hy(n,i){return i==null||o1(n,i,Rt(i))}function Nn(n,i){return n===i||n!==n&&i!==i}var Fy=ls(lc),Gy=ls(function(n,i){return n>=i}),ii=u1((function(){return arguments})())?u1:function(n){return vt(n)&&Ye.call(n,"callee")&&!Xh.call(n,"callee")},ze=U.isArray,Wy=Lh?mn(Lh):Xw;function Qt(n){return n!=null&&vs(n.length)&&!sr(n)}function bt(n){return vt(n)&&Qt(n)}function Uy(n){return n===!0||n===!1||vt(n)&&Vt(n)==He}var Rr=iw||qc,Vy=Rh?mn(Rh):Jw;function Zy(n){return vt(n)&&n.nodeType===1&&!Po(n)}function jy(n){if(n==null)return!0;if(Qt(n)&&(ze(n)||typeof n=="string"||typeof n.splice=="function"||Rr(n)||Bi(n)||ii(n)))return!n.length;var i=Ft(n);if(i==X||i==N)return!n.size;if(Lo(n))return!uc(n).length;for(var l in n)if(Ye.call(n,l))return!1;return!0}function qy(n,i){return Co(n,i)}function Ky(n,i,l){l=typeof l=="function"?l:r;var p=l?l(n,i):r;return p===r?Co(n,i,r,l):!!p}function zc(n){if(!vt(n))return!1;var i=Vt(n);return i==Ut||i==pt||typeof n.message=="string"&&typeof n.name=="string"&&!Po(n)}function Yy(n){return typeof n=="number"&&Qh(n)}function sr(n){if(!gt(n))return!1;var i=Vt(n);return i==Nt||i==w||i==We||i==oe}function _f(n){return typeof n=="number"&&n==Ne(n)}function vs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ie}function gt(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function vt(n){return n!=null&&typeof n=="object"}var yf=Ph?mn(Ph):e8;function Xy(n,i){return n===i||dc(n,i,xc(i))}function Jy(n,i,l){return l=typeof l=="function"?l:r,dc(n,i,xc(i),l)}function Qy(n){return kf(n)&&n!=+n}function ek(n){if(z8(n))throw new Pe(s);return h1(n)}function tk(n){return n===null}function nk(n){return n==null}function kf(n){return typeof n=="number"||vt(n)&&Vt(n)==V}function Po(n){if(!vt(n)||Vt(n)!=I)return!1;var i=Ua(n);if(i===null)return!0;var l=Ye.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&Ha.call(l)==J7}var Bc=$h?mn($h):t8;function rk(n){return _f(n)&&n>=-ie&&n<=ie}var Ef=Dh?mn(Dh):n8;function bs(n){return typeof n=="string"||!ze(n)&&vt(n)&&Vt(n)==de}function bn(n){return typeof n=="symbol"||vt(n)&&Vt(n)==me}var Bi=zh?mn(zh):r8;function ik(n){return n===r}function ok(n){return vt(n)&&Ft(n)==ke}function ak(n){return vt(n)&&Vt(n)==Qe}var sk=ls(hc),lk=ls(function(n,i){return n<=i});function Sf(n){if(!n)return[];if(Qt(n))return bs(n)?Dn(n):Jt(n);if(yo&&n[yo])return F7(n[yo]());var i=Ft(n);return(i==X?Ql:i==N?za:Ni)(n)}function lr(n){return n?(n=Tn(n),n===Ie||n===-Ie?(n<0?-1:1)*Ae:n===n?n:0):n===0?n:0}function Ne(n){var i=lr(n),l=i%1;return i===i?l?i-l:i:0}function Af(n){return n?ei(Ne(n),0,F):0}function Tn(n){if(typeof n=="number")return n;if(bn(n))return W;if(gt(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=gt(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=Wh(n);var l=j9.test(n);return l||K9.test(n)?S7(n.slice(2),l?2:8):Z9.test(n)?W:+n}function Mf(n){return qn(n,en(n))}function ck(n){return n?ei(Ne(n),-ie,ie):n===0?n:0}function Xe(n){return n==null?"":vn(n)}var dk=$i(function(n,i){if(Lo(i)||Qt(i)){qn(i,Rt(i),n);return}for(var l in i)Ye.call(i,l)&&Mo(n,l,i[l])}),xf=$i(function(n,i){qn(i,en(i),n)}),If=$i(function(n,i,l,p){qn(i,en(i),n,p)}),Nc=$i(function(n,i,l,p){qn(i,Rt(i),n,p)}),uk=or(oc);function hk(n,i){var l=Pi(n);return i==null?l:i1(l,i)}var fk=Ue(function(n,i){n=et(n);var l=-1,p=i.length,_=p>2?i[2]:r;for(_&&Zt(i[0],i[1],_)&&(p=1);++l<p;)for(var x=i[l],L=en(x),P=-1,B=L.length;++P<B;){var ne=L[P],ee=n[ne];(ee===r||Nn(ee,Ti[ne])&&!Ye.call(n,ne))&&(n[ne]=x[ne])}return n}),pk=Ue(function(n){return n.push(r,W1),pn(Cf,r,n)});function gk(n,i){return Nh(n,Te(i,3),jn)}function mk(n,i){return Nh(n,Te(i,3),sc)}function vk(n,i){return n==null?n:ac(n,Te(i,3),en)}function bk(n,i){return n==null?n:c1(n,Te(i,3),en)}function wk(n,i){return n&&jn(n,Te(i,3))}function _k(n,i){return n&&sc(n,Te(i,3))}function yk(n){return n==null?[]:es(n,Rt(n))}function kk(n){return n==null?[]:es(n,en(n))}function Hc(n,i,l){var p=n==null?r:ti(n,i);return p===r?l:p}function Ek(n,i){return n!=null&&Z1(n,i,jw)}function Fc(n,i){return n!=null&&Z1(n,i,qw)}var Sk=B1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Fa.call(i)),n[i]=l},Wc(tn)),Ak=B1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Fa.call(i)),Ye.call(n,i)?n[i].push(l):n[i]=[l]},Te),Mk=Ue(Io);function Rt(n){return Qt(n)?n1(n):uc(n)}function en(n){return Qt(n)?n1(n,!0):i8(n)}function xk(n,i){var l={};return i=Te(i,3),jn(n,function(p,_,x){Zn(l,i(p,_,x),p)}),l}function Ik(n,i){var l={};return i=Te(i,3),jn(n,function(p,_,x){Zn(l,_,i(p,_,x))}),l}var Ck=$i(function(n,i,l){ts(n,i,l)}),Cf=$i(function(n,i,l,p){ts(n,i,l,p)}),Ok=or(function(n,i){var l={};if(n==null)return l;var p=!1;i=ut(i,function(x){return x=Tr(x,n),p||(p=x.length>1),x}),qn(n,Ac(n),l),p&&(l=In(l,v|m|g,A8));for(var _=i.length;_--;)vc(l,i[_]);return l});function Tk(n,i){return Of(n,ms(Te(i)))}var Lk=or(function(n,i){return n==null?{}:a8(n,i)});function Of(n,i){if(n==null)return{};var l=ut(Ac(n),function(p){return[p]});return i=Te(i),w1(n,l,function(p,_){return i(p,_[0])})}function Rk(n,i,l){i=Tr(i,n);var p=-1,_=i.length;for(_||(_=1,n=r);++p<_;){var x=n==null?r:n[Bn(i[p])];x===r&&(p=_,x=l),n=sr(x)?x.call(n):x}return n}function Pk(n,i,l){return n==null?n:Oo(n,i,l)}function $k(n,i,l,p){return p=typeof p=="function"?p:r,n==null?n:Oo(n,i,l,p)}var Tf=F1(Rt),Lf=F1(en);function Dk(n,i,l){var p=ze(n),_=p||Rr(n)||Bi(n);if(i=Te(i,4),l==null){var x=n&&n.constructor;_?l=p?new x:[]:gt(n)?l=sr(x)?Pi(Ua(n)):{}:l={}}return(_?gn:jn)(n,function(L,P,B){return i(l,L,P,B)}),l}function zk(n,i){return n==null?!0:vc(n,i)}function Bk(n,i,l){return n==null?n:S1(n,i,_c(l))}function Nk(n,i,l,p){return p=typeof p=="function"?p:r,n==null?n:S1(n,i,_c(l),p)}function Ni(n){return n==null?[]:Jl(n,Rt(n))}function Hk(n){return n==null?[]:Jl(n,en(n))}function Fk(n,i,l){return l===r&&(l=i,i=r),l!==r&&(l=Tn(l),l=l===l?l:0),i!==r&&(i=Tn(i),i=i===i?i:0),ei(Tn(n),i,l)}function Gk(n,i,l){return i=lr(i),l===r?(l=i,i=0):l=lr(l),n=Tn(n),Kw(n,i,l)}function Wk(n,i,l){if(l&&typeof l!="boolean"&&Zt(n,i,l)&&(i=l=r),l===r&&(typeof i=="boolean"?(l=i,i=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&i===r?(n=0,i=1):(n=lr(n),i===r?(i=n,n=0):i=lr(i)),n>i){var p=n;n=i,i=p}if(l||n%1||i%1){var _=e1();return Ht(n+_*(i-n+E7("1e-"+((_+"").length-1))),i)}return pc(n,i)}var Uk=Di(function(n,i,l){return i=i.toLowerCase(),n+(l?Rf(i):i)});function Rf(n){return Gc(Xe(n).toLowerCase())}function Pf(n){return n=Xe(n),n&&n.replace(X9,D7).replace(f7,"")}function Vk(n,i,l){n=Xe(n),i=vn(i);var p=n.length;l=l===r?p:ei(Ne(l),0,p);var _=l;return l-=i.length,l>=0&&n.slice(l,_)==i}function Zk(n){return n=Xe(n),n&&L9.test(n)?n.replace(Kr,z7):n}function jk(n){return n=Xe(n),n&&B9.test(n)?n.replace(Dl,"\\$&"):n}var qk=Di(function(n,i,l){return n+(l?"-":"")+i.toLowerCase()}),Kk=Di(function(n,i,l){return n+(l?" ":"")+i.toLowerCase()}),Yk=$1("toLowerCase");function Xk(n,i,l){n=Xe(n),i=Ne(i);var p=i?Oi(n):0;if(!i||p>=i)return n;var _=(i-p)/2;return ss(qa(_),l)+n+ss(ja(_),l)}function Jk(n,i,l){n=Xe(n),i=Ne(i);var p=i?Oi(n):0;return i&&p<i?n+ss(i-p,l):n}function Qk(n,i,l){n=Xe(n),i=Ne(i);var p=i?Oi(n):0;return i&&p<i?ss(i-p,l)+n:n}function eE(n,i,l){return l||i==null?i=0:i&&(i=+i),lw(Xe(n).replace(zl,""),i||0)}function tE(n,i,l){return(l?Zt(n,i,l):i===r)?i=1:i=Ne(i),gc(Xe(n),i)}function nE(){var n=arguments,i=Xe(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var rE=Di(function(n,i,l){return n+(l?"_":"")+i.toLowerCase()});function iE(n,i,l){return l&&typeof l!="number"&&Zt(n,i,l)&&(i=l=r),l=l===r?F:l>>>0,l?(n=Xe(n),n&&(typeof i=="string"||i!=null&&!Bc(i))&&(i=vn(i),!i&&Ci(n))?Lr(Dn(n),0,l):n.split(i,l)):[]}var oE=Di(function(n,i,l){return n+(l?" ":"")+Gc(i)});function aE(n,i,l){return n=Xe(n),l=l==null?0:ei(Ne(l),0,n.length),i=vn(i),n.slice(l,l+i.length)==i}function sE(n,i,l){var p=A.templateSettings;l&&Zt(n,i,l)&&(i=r),n=Xe(n),i=Nc({},i,p,G1);var _=Nc({},i.imports,p.imports,G1),x=Rt(_),L=Jl(_,x);gn(x,function(Oe){if(dh.test(Oe))throw new Pe(d)});var P,B,ne=0,ee=i.interpolate||La,le="__p += '",ve=ec((i.escape||La).source+"|"+ee.source+"|"+(ee===ch?V9:La).source+"|"+(i.evaluate||La).source+"|$","g"),_e="//# sourceURL="+(Ye.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++b7+"]")+`
`;n.replace(ve,function(Oe,tt,Ze,jt,Kn,Pr){return Ze||(Ze=jt),le+=n.slice(ne,Pr).replace(J9,B7),tt&&(P=!0,le+=`' +
__e(`+tt+`) +
'`),Kn&&(B=!0,le+=`';
`+Kn+`;
__p += '`),Ze&&(le+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),ne=Pr+Oe.length,Oe}),le+=`';
`;var Ce=Ye.call(i,"variable")&&i.variable;if(!Ce)le=`with (obj) {
`+le+`
}
`;else if(dh.test(Ce))throw new Pe(u);le=(B?le.replace(Pl,""):le).replace($l,"$1").replace(Ta,"$1;"),le="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+le+`return __p
}`;var $e=Df(function(){return Ke(x,_e+"return "+le).apply(r,L)});if($e.source=le,zc($e))throw $e;return $e}function lE(n){return Xe(n).toLowerCase()}function cE(n){return Xe(n).toUpperCase()}function dE(n,i,l){if(n=Xe(n),n&&(l||i===r))return Wh(n);if(!n||!(i=vn(i)))return n;var p=Dn(n),_=Dn(i);return Lr(p,Uh(p,_),Vh(p,_)+1).join("")}function uE(n,i,l){if(n=Xe(n),n&&(l||i===r))return n.slice(0,jh(n)+1);if(!n||!(i=vn(i)))return n;var p=Dn(n);return Lr(p,0,Vh(p,Dn(i))+1).join("")}function hE(n,i,l){if(n=Xe(n),n&&(l||i===r))return n.replace(zl,"");if(!n||!(i=vn(i)))return n;var p=Dn(n);return Lr(p,Uh(p,Dn(i))).join("")}function fE(n,i){var l=we,p=R;if(gt(i)){var _="separator"in i?i.separator:_;l="length"in i?Ne(i.length):l,p="omission"in i?vn(i.omission):p}n=Xe(n);var x=n.length;if(Ci(n)){var L=Dn(n);x=L.length}if(l>=x)return n;var P=l-Oi(p);if(P<1)return p;var B=L?Lr(L,0,P).join(""):n.slice(0,P);if(_===r)return B+p;if(L&&(P+=B.length-P),Bc(_)){if(n.slice(P).search(_)){var ne,ee=B;for(_.global||(_=ec(_.source,Xe(uh.exec(_))+"g")),_.lastIndex=0;ne=_.exec(ee);)var le=ne.index;B=B.slice(0,le===r?P:le)}}else if(n.indexOf(vn(_),P)!=P){var ve=B.lastIndexOf(_);ve>-1&&(B=B.slice(0,ve))}return B+p}function pE(n){return n=Xe(n),n&&T9.test(n)?n.replace(Er,V7):n}var gE=Di(function(n,i,l){return n+(l?" ":"")+i.toUpperCase()}),Gc=$1("toUpperCase");function $f(n,i,l){return n=Xe(n),i=l?r:i,i===r?H7(n)?q7(n):T7(n):n.match(i)||[]}var Df=Ue(function(n,i){try{return pn(n,r,i)}catch(l){return zc(l)?l:new Pe(l)}}),mE=or(function(n,i){return gn(i,function(l){l=Bn(l),Zn(n,l,$c(n[l],n))}),n});function vE(n){var i=n==null?0:n.length,l=Te();return n=i?ut(n,function(p){if(typeof p[1]!="function")throw new Mn(c);return[l(p[0]),p[1]]}):[],Ue(function(p){for(var _=-1;++_<i;){var x=n[_];if(pn(x[0],this,p))return pn(x[1],this,p)}})}function bE(n){return Uw(In(n,v))}function Wc(n){return function(){return n}}function wE(n,i){return n==null||n!==n?i:n}var _E=z1(),yE=z1(!0);function tn(n){return n}function Uc(n){return f1(typeof n=="function"?n:In(n,v))}function kE(n){return g1(In(n,v))}function EE(n,i){return m1(n,In(i,v))}var SE=Ue(function(n,i){return function(l){return Io(l,n,i)}}),AE=Ue(function(n,i){return function(l){return Io(n,l,i)}});function Vc(n,i,l){var p=Rt(i),_=es(i,p);l==null&&!(gt(i)&&(_.length||!p.length))&&(l=i,i=n,n=this,_=es(i,Rt(i)));var x=!(gt(l)&&"chain"in l)||!!l.chain,L=sr(n);return gn(_,function(P){var B=i[P];n[P]=B,L&&(n.prototype[P]=function(){var ne=this.__chain__;if(x||ne){var ee=n(this.__wrapped__);return(ee.__actions__=Jt(this.__actions__)).push({func:B,args:arguments,thisArg:n}),ee.__chain__=ne,ee}return B.apply(n,Ar([this.value()],arguments))})}),n}function ME(){return Lt._===this&&(Lt._=Q7),this}function Zc(){}function xE(n){return n=Ne(n),Ue(function(i){return v1(i,n)})}var IE=kc(ut),CE=kc(Bh),OE=kc(jl);function zf(n){return Cc(n)?ql(Bn(n)):s8(n)}function TE(n){return function(i){return n==null?r:ti(n,i)}}var LE=N1(),RE=N1(!0);function jc(){return[]}function qc(){return!1}function PE(){return{}}function $E(){return""}function DE(){return!0}function zE(n,i){if(n=Ne(n),n<1||n>ie)return[];var l=F,p=Ht(n,F);i=Te(i),n-=F;for(var _=Xl(p,i);++l<n;)i(l);return _}function BE(n){return ze(n)?ut(n,Bn):bn(n)?[n]:Jt(tf(Xe(n)))}function NE(n){var i=++X7;return Xe(n)+i}var HE=as(function(n,i){return n+i},0),FE=Ec("ceil"),GE=as(function(n,i){return n/i},1),WE=Ec("floor");function UE(n){return n&&n.length?Qa(n,tn,lc):r}function VE(n,i){return n&&n.length?Qa(n,Te(i,2),lc):r}function ZE(n){return Fh(n,tn)}function jE(n,i){return Fh(n,Te(i,2))}function qE(n){return n&&n.length?Qa(n,tn,hc):r}function KE(n,i){return n&&n.length?Qa(n,Te(i,2),hc):r}var YE=as(function(n,i){return n*i},1),XE=Ec("round"),JE=as(function(n,i){return n-i},0);function QE(n){return n&&n.length?Yl(n,tn):0}function eS(n,i){return n&&n.length?Yl(n,Te(i,2)):0}return A.after=Ey,A.ary=ff,A.assign=dk,A.assignIn=xf,A.assignInWith=If,A.assignWith=Nc,A.at=uk,A.before=pf,A.bind=$c,A.bindAll=mE,A.bindKey=gf,A.castArray=$y,A.chain=df,A.chunk=U8,A.compact=V8,A.concat=Z8,A.cond=vE,A.conforms=bE,A.constant=Wc,A.countBy=ey,A.create=hk,A.curry=mf,A.curryRight=vf,A.debounce=bf,A.defaults=fk,A.defaultsDeep=pk,A.defer=Sy,A.delay=Ay,A.difference=j8,A.differenceBy=q8,A.differenceWith=K8,A.drop=Y8,A.dropRight=X8,A.dropRightWhile=J8,A.dropWhile=Q8,A.fill=e_,A.filter=ny,A.flatMap=oy,A.flatMapDeep=ay,A.flatMapDepth=sy,A.flatten=af,A.flattenDeep=t_,A.flattenDepth=n_,A.flip=My,A.flow=_E,A.flowRight=yE,A.fromPairs=r_,A.functions=yk,A.functionsIn=kk,A.groupBy=ly,A.initial=o_,A.intersection=a_,A.intersectionBy=s_,A.intersectionWith=l_,A.invert=Sk,A.invertBy=Ak,A.invokeMap=dy,A.iteratee=Uc,A.keyBy=uy,A.keys=Rt,A.keysIn=en,A.map=fs,A.mapKeys=xk,A.mapValues=Ik,A.matches=kE,A.matchesProperty=EE,A.memoize=gs,A.merge=Ck,A.mergeWith=Cf,A.method=SE,A.methodOf=AE,A.mixin=Vc,A.negate=ms,A.nthArg=xE,A.omit=Ok,A.omitBy=Tk,A.once=xy,A.orderBy=hy,A.over=IE,A.overArgs=Iy,A.overEvery=CE,A.overSome=OE,A.partial=Dc,A.partialRight=wf,A.partition=fy,A.pick=Lk,A.pickBy=Of,A.property=zf,A.propertyOf=TE,A.pull=h_,A.pullAll=lf,A.pullAllBy=f_,A.pullAllWith=p_,A.pullAt=g_,A.range=LE,A.rangeRight=RE,A.rearg=Cy,A.reject=my,A.remove=m_,A.rest=Oy,A.reverse=Rc,A.sampleSize=by,A.set=Pk,A.setWith=$k,A.shuffle=wy,A.slice=v_,A.sortBy=ky,A.sortedUniq=S_,A.sortedUniqBy=A_,A.split=iE,A.spread=Ty,A.tail=M_,A.take=x_,A.takeRight=I_,A.takeRightWhile=C_,A.takeWhile=O_,A.tap=V_,A.throttle=Ly,A.thru=hs,A.toArray=Sf,A.toPairs=Tf,A.toPairsIn=Lf,A.toPath=BE,A.toPlainObject=Mf,A.transform=Dk,A.unary=Ry,A.union=T_,A.unionBy=L_,A.unionWith=R_,A.uniq=P_,A.uniqBy=$_,A.uniqWith=D_,A.unset=zk,A.unzip=Pc,A.unzipWith=cf,A.update=Bk,A.updateWith=Nk,A.values=Ni,A.valuesIn=Hk,A.without=z_,A.words=$f,A.wrap=Py,A.xor=B_,A.xorBy=N_,A.xorWith=H_,A.zip=F_,A.zipObject=G_,A.zipObjectDeep=W_,A.zipWith=U_,A.entries=Tf,A.entriesIn=Lf,A.extend=xf,A.extendWith=If,Vc(A,A),A.add=HE,A.attempt=Df,A.camelCase=Uk,A.capitalize=Rf,A.ceil=FE,A.clamp=Fk,A.clone=Dy,A.cloneDeep=By,A.cloneDeepWith=Ny,A.cloneWith=zy,A.conformsTo=Hy,A.deburr=Pf,A.defaultTo=wE,A.divide=GE,A.endsWith=Vk,A.eq=Nn,A.escape=Zk,A.escapeRegExp=jk,A.every=ty,A.find=ry,A.findIndex=rf,A.findKey=gk,A.findLast=iy,A.findLastIndex=of,A.findLastKey=mk,A.floor=WE,A.forEach=uf,A.forEachRight=hf,A.forIn=vk,A.forInRight=bk,A.forOwn=wk,A.forOwnRight=_k,A.get=Hc,A.gt=Fy,A.gte=Gy,A.has=Ek,A.hasIn=Fc,A.head=sf,A.identity=tn,A.includes=cy,A.indexOf=i_,A.inRange=Gk,A.invoke=Mk,A.isArguments=ii,A.isArray=ze,A.isArrayBuffer=Wy,A.isArrayLike=Qt,A.isArrayLikeObject=bt,A.isBoolean=Uy,A.isBuffer=Rr,A.isDate=Vy,A.isElement=Zy,A.isEmpty=jy,A.isEqual=qy,A.isEqualWith=Ky,A.isError=zc,A.isFinite=Yy,A.isFunction=sr,A.isInteger=_f,A.isLength=vs,A.isMap=yf,A.isMatch=Xy,A.isMatchWith=Jy,A.isNaN=Qy,A.isNative=ek,A.isNil=nk,A.isNull=tk,A.isNumber=kf,A.isObject=gt,A.isObjectLike=vt,A.isPlainObject=Po,A.isRegExp=Bc,A.isSafeInteger=rk,A.isSet=Ef,A.isString=bs,A.isSymbol=bn,A.isTypedArray=Bi,A.isUndefined=ik,A.isWeakMap=ok,A.isWeakSet=ak,A.join=c_,A.kebabCase=qk,A.last=On,A.lastIndexOf=d_,A.lowerCase=Kk,A.lowerFirst=Yk,A.lt=sk,A.lte=lk,A.max=UE,A.maxBy=VE,A.mean=ZE,A.meanBy=jE,A.min=qE,A.minBy=KE,A.stubArray=jc,A.stubFalse=qc,A.stubObject=PE,A.stubString=$E,A.stubTrue=DE,A.multiply=YE,A.nth=u_,A.noConflict=ME,A.noop=Zc,A.now=ps,A.pad=Xk,A.padEnd=Jk,A.padStart=Qk,A.parseInt=eE,A.random=Wk,A.reduce=py,A.reduceRight=gy,A.repeat=tE,A.replace=nE,A.result=Rk,A.round=XE,A.runInContext=$,A.sample=vy,A.size=_y,A.snakeCase=rE,A.some=yy,A.sortedIndex=b_,A.sortedIndexBy=w_,A.sortedIndexOf=__,A.sortedLastIndex=y_,A.sortedLastIndexBy=k_,A.sortedLastIndexOf=E_,A.startCase=oE,A.startsWith=aE,A.subtract=JE,A.sum=QE,A.sumBy=eS,A.template=sE,A.times=zE,A.toFinite=lr,A.toInteger=Ne,A.toLength=Af,A.toLower=lE,A.toNumber=Tn,A.toSafeInteger=ck,A.toString=Xe,A.toUpper=cE,A.trim=dE,A.trimEnd=uE,A.trimStart=hE,A.truncate=fE,A.unescape=pE,A.uniqueId=NE,A.upperCase=gE,A.upperFirst=Gc,A.each=uf,A.eachRight=hf,A.first=sf,Vc(A,(function(){var n={};return jn(A,function(i,l){Ye.call(A.prototype,l)||(n[l]=i)}),n})(),{chain:!1}),A.VERSION=o,gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),gn(["drop","take"],function(n,i){Ve.prototype[n]=function(l){l=l===r?1:Ot(Ne(l),0);var p=this.__filtered__&&!i?new Ve(this):this.clone();return p.__filtered__?p.__takeCount__=Ht(l,p.__takeCount__):p.__views__.push({size:Ht(l,F),type:n+(p.__dir__<0?"Right":"")}),p},Ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),gn(["filter","map","takeWhile"],function(n,i){var l=i+1,p=l==J||l==ce;Ve.prototype[n]=function(_){var x=this.clone();return x.__iteratees__.push({iteratee:Te(_,3),type:l}),x.__filtered__=x.__filtered__||p,x}}),gn(["head","last"],function(n,i){var l="take"+(i?"Right":"");Ve.prototype[n]=function(){return this[l](1).value()[0]}}),gn(["initial","tail"],function(n,i){var l="drop"+(i?"":"Right");Ve.prototype[n]=function(){return this.__filtered__?new Ve(this):this[l](1)}}),Ve.prototype.compact=function(){return this.filter(tn)},Ve.prototype.find=function(n){return this.filter(n).head()},Ve.prototype.findLast=function(n){return this.reverse().find(n)},Ve.prototype.invokeMap=Ue(function(n,i){return typeof n=="function"?new Ve(this):this.map(function(l){return Io(l,n,i)})}),Ve.prototype.reject=function(n){return this.filter(ms(Te(n)))},Ve.prototype.slice=function(n,i){n=Ne(n);var l=this;return l.__filtered__&&(n>0||i<0)?new Ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),i!==r&&(i=Ne(i),l=i<0?l.dropRight(-i):l.take(i-n)),l)},Ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ve.prototype.toArray=function(){return this.take(F)},jn(Ve.prototype,function(n,i){var l=/^(?:filter|find|map|reject)|While$/.test(i),p=/^(?:head|last)$/.test(i),_=A[p?"take"+(i=="last"?"Right":""):i],x=p||/^find/.test(i);_&&(A.prototype[i]=function(){var L=this.__wrapped__,P=p?[1]:arguments,B=L instanceof Ve,ne=P[0],ee=B||ze(L),le=function(tt){var Ze=_.apply(A,Ar([tt],P));return p&&ve?Ze[0]:Ze};ee&&l&&typeof ne=="function"&&ne.length!=1&&(B=ee=!1);var ve=this.__chain__,_e=!!this.__actions__.length,Ce=x&&!ve,$e=B&&!_e;if(!x&&ee){L=$e?L:new Ve(this);var Oe=n.apply(L,P);return Oe.__actions__.push({func:hs,args:[le],thisArg:r}),new xn(Oe,ve)}return Ce&&$e?n.apply(this,P):(Oe=this.thru(le),Ce?p?Oe.value()[0]:Oe.value():Oe)})}),gn(["pop","push","shift","sort","splice","unshift"],function(n){var i=Ba[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var _=arguments;if(p&&!this.__chain__){var x=this.value();return i.apply(ze(x)?x:[],_)}return this[l](function(L){return i.apply(ze(L)?L:[],_)})}}),jn(Ve.prototype,function(n,i){var l=A[i];if(l){var p=l.name+"";Ye.call(Ri,p)||(Ri[p]=[]),Ri[p].push({name:i,func:l})}}),Ri[os(r,M).name]=[{name:"wrapper",func:r}],Ve.prototype.clone=gw,Ve.prototype.reverse=mw,Ve.prototype.value=vw,A.prototype.at=Z_,A.prototype.chain=j_,A.prototype.commit=q_,A.prototype.next=K_,A.prototype.plant=X_,A.prototype.reverse=J_,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=Q_,A.prototype.first=A.prototype.head,yo&&(A.prototype[yo]=Y_),A})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Lt._=xr,define(function(){return xr})):Yr?((Yr.exports=xr)._=xr,Wl._=xr):Lt._=xr}).call(e)})),Me=Do(Kf(),1);function ws(e){return Me.default.isEmpty(e)||Me.default.isNil(e)}function _n(e){return ws(e)||e===!1||e===0}function Yc(e){return"listImages"in e&&!_n(e.listImages)}function Xc(e){return"listPages"in e&&!_n(e.listPages)}function Yf(e){return"bruteForce"in e&&!_n(e.bruteForce)}var Be=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Ge=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function Xf(e,t){return t in e}var Jf={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Me.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function Qf(e,t=document.body){return new Promise(r=>{const o=document.querySelector(e);if(o){r(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function _s(e,t=250){return new Promise(r=>{const o=setInterval(()=>{e()&&(clearInterval(o),r(!0))},t)})}function Jc(e,t,r=document.body){return new Promise(o=>{const a=r.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=r.querySelector(e);c?.getAttribute(t)&&(o(c.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Qc(e,t=document.body){return new Promise(r=>{if(!_n(unsafeWindow[e])){r(unsafeWindow[e]);return}const o=new MutationObserver(()=>{_n(unsafeWindow[e])||(r(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function e2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function t2(e,t=1e3){const[r]=await Promise.all([e,e2(t)]);return r}async function ed(e,t,r,o,a="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const u=document.querySelector(r),d=document.querySelector(o),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await t2(Jc(a,s,d??document.body),100),d?.querySelector(a)?.removeAttribute(s),u?.dispatchEvent(new Event("click"));return h}var n2={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await ed(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return o}},r2={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async o=>o.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((o,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},i2={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[Be.RAW],category:Ge.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},o2={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[Be.ENGLISH],category:Ge.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},a2={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},s2={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[Be.SPANISH],category:Ge.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},l2={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[Be.ENGLISH],obs:"May get your IP Banned, use with moderation",category:Ge.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(t).fill(0).map(async(s,c)=>fetch(`${r}?p=${c}`).then(async u=>u.text()).then(u=>new DOMParser().parseFromString(u,"text/html"))),a=(await Promise.all(o)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(c=>c.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const c=`${a[s-1]}`,u=await fetch(c).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),d=`${c}${c.indexOf("?")?"&":"?"}nl=${u}`;return fetch(d).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},c2={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[Be.ENGLISH],category:Ge.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},d2={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},u2={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[Be.SPANISH],category:Ge.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},h2={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},f2={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},p2={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},g2=/^blob:(.+?)\/(.+)$/;function m2(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function v2(e){return g2.test(e)}function td(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var b2={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,o)=>`${t+(o+1)}.${td(unsafeWindow.g_th[o+1][0])}`)}}},w2={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},_2={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},y2={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},k2={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],o=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${o}/${s}`)}}},E2={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},S2={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[Be.ENGLISH],category:Ge.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await Qc("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${o}/${t}/${e}/${s+1}.${td(unsafeWindow.g_th[s+1][0])}`)}}},A2={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[Be.ENGLISH,Be.SPANISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},M2={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(c,u)=>{const d=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${u+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:d}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(c=>c.data.picture.list.items.map(u=>u.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},nd=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function rd(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>nd.test(r.value))?.value??e?.getAttribute("src")??""})}var x2={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Be.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Ge.MANGA,waitFunc:()=>{const e=rd();return e.length>0&&e.every(t=>t&&nd.test(t))},run(){const e=rd();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},I2={...x2,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:Ge.HENTAI},C2={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},O2={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},T2={name:["nHentai.net"],url:/https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/,homepage:["https://nhentai.net/"],language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:"#image-container img",async run(){const e=await fetch("https://nhentai.net/api/v2/config").then(async r=>r.json()),t=await fetch(`https://nhentai.net/api/v2/galleries/${window.location.pathname.split("/")[2]}`).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:t.pages.length,prev:"#",next:"#",listImages:t.pages.map(r=>`${e.image_servers[Math.floor(Math.random()*e.image_servers.length)]}/${r.path}`)}}},L2={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[Be.SPANISH],category:Ge.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},R2={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[Be.ENGLISH],category:Ge.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},P2={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:o}=history.state.memo.data,a=o.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},$2={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[Be.ENGLISH],category:Ge.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},D2={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[Be.SPANISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},z2={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},B2={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[Be.SPANISH],category:Ge.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},N2={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[Be.ENGLISH,Be.RAW,Be.CHINESE],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},H2={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},F2={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[Be.ENGLISH],category:Ge.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},G2={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[Be.ENGLISH],category:Ge.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await ed(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},W2=[i2,o2,a2,s2,n2,l2,d2,c2,u2,h2,f2,p2,b2,w2,_2,y2,k2,E2,S2,A2,M2,C2,O2,T2,r2,L2,R2,P2,$2,D2,Jf,z2,B2,N2,H2,F2,G2,I2],U2=wn(((e,t)=>{(function(r,o){typeof e=="object"&&typeof t=="object"?t.exports=o():typeof define=="function"&&define.amd?define([],o):typeof e=="object"?e.bowser=o():r.bowser=o()})(e,(function(){return(function(r){var o={};function a(s){if(o[s])return o[s].exports;var c=o[s]={i:s,l:!1,exports:{}};return r[s].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=r,a.c=o,a.d=function(s,c,u){a.o(s,c)||Object.defineProperty(s,c,{enumerable:!0,get:u})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,c){if(1&c&&(s=a(s)),8&c||4&c&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),2&c&&typeof s!="string")for(var d in s)a.d(u,d,function(h){return s[h]}.bind(null,d));return u},a.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(c,"a",c),c},a.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},a.p="",a(a.s=90)})({17:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=a(18);o.default=(function(){function c(){}return c.getFirstMatch=function(u,d){var h=d.match(u);return h&&h.length>0&&h[1]||""},c.getSecondMatch=function(u,d){var h=d.match(u);return h&&h.length>1&&h[2]||""},c.matchAndReturnConst=function(u,d,h){if(u.test(d))return h},c.getWindowsVersionName=function(u){switch(u){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},c.getMacOSVersionName=function(u){var d=u.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));d.push(0);var h=d[0],f=d[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},c.getAndroidVersionName=function(u){var d=u.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(d.push(0),!(d[0]===1&&d[1]<5))return d[0]===1&&d[1]<6?"Cupcake":d[0]===1&&d[1]>=6?"Donut":d[0]===2&&d[1]<2?"Eclair":d[0]===2&&d[1]===2?"Froyo":d[0]===2&&d[1]>2?"Gingerbread":d[0]===3?"Honeycomb":d[0]===4&&d[1]<1?"Ice Cream Sandwich":d[0]===4&&d[1]<4?"Jelly Bean":d[0]===4&&d[1]>=4?"KitKat":d[0]===5?"Lollipop":d[0]===6?"Marshmallow":d[0]===7?"Nougat":d[0]===8?"Oreo":d[0]===9?"Pie":void 0},c.getVersionPrecision=function(u){return u.split(".").length},c.compareVersions=function(u,d,h){h===void 0&&(h=!1);var f=c.getVersionPrecision(u),b=c.getVersionPrecision(d),v=Math.max(f,b),m=0,g=c.map([u,d],(function(k){var y=v-c.getVersionPrecision(k),S=k+new Array(y+1).join(".0");return c.map(S.split("."),(function(M){return new Array(20-M.length).join("0")+M})).reverse()}));for(h&&(m=v-Math.min(f,b)),v-=1;v>=m;){if(g[0][v]>g[1][v])return 1;if(g[0][v]===g[1][v]){if(v===m)return 0;v-=1}else if(g[0][v]<g[1][v])return-1}},c.map=function(u,d){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(u,d);for(h=0;h<u.length;h+=1)f.push(d(u[h]));return f},c.find=function(u,d){var h,f;if(Array.prototype.find)return Array.prototype.find.call(u,d);for(h=0,f=u.length;h<f;h+=1){var b=u[h];if(d(b,h))return b}},c.assign=function(u){for(var d,h,f=u,b=arguments.length,v=new Array(b>1?b-1:0),m=1;m<b;m++)v[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[u].concat(v));var g=function(){var k=v[d];typeof k=="object"&&k!==null&&Object.keys(k).forEach((function(y){f[y]=k[y]}))};for(d=0,h=v.length;d<h;d+=1)g();return u},c.getBrowserAlias=function(u){return s.BROWSER_ALIASES_MAP[u]},c.getBrowserTypeByAlias=function(u){return s.BROWSER_MAP[u]||""},c})(),r.exports=o.default},18:function(r,o,a){"use strict";o.__esModule=!0,o.ENGINE_MAP=o.OS_MAP=o.PLATFORMS_MAP=o.BROWSER_MAP=o.BROWSER_ALIASES_MAP=void 0,o.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},o.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},o.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},o.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},o.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(91))&&s.__esModule?s:{default:s},u=a(18);function d(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}o.default=(function(){function h(){}var f,b,v;return h.getParser=function(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),typeof m!="string")throw new Error("UserAgent should be a string");return new c.default(m,g,k)},h.parse=function(m,g){return g===void 0&&(g=null),new c.default(m,g).getResult()},f=h,v=[{key:"BROWSER_MAP",get:function(){return u.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return u.ENGINE_MAP}},{key:"OS_MAP",get:function(){return u.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return u.PLATFORMS_MAP}}],(b=null)&&d(f.prototype,b),v&&d(f,v),h})(),r.exports=o.default},91:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=f(a(92)),c=f(a(93)),u=f(a(94)),d=f(a(95)),h=f(a(17));function f(b){return b&&b.__esModule?b:{default:b}}o.default=(function(){function b(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var y=!1;typeof g=="boolean"?(y=g,this._hints=k):this._hints=g!=null&&typeof g=="object"?g:null,this.parsedResult={},y!==!0&&this.parse()}var v=b.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var g=m.toLowerCase();return this._hints.brands.some((function(k){return k.brand&&k.brand.toLowerCase()===g}))},v.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var g=m.toLowerCase(),k=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===g}));return k?k.version:void 0}},v.getUA=function(){return this._ua},v.test=function(m){return m.test(this._ua)},v.parseBrowser=function(){var m=this;this.parsedResult.browser={};var g=h.default.find(s.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.browser=g.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var m=this;this.parsedResult.os={};var g=h.default.find(c.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.os=g.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(m){var g=this.getOS().name;return m?String(g).toLowerCase()||"":g||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(m){m===void 0&&(m=!1);var g=this.getPlatform().type;return m?String(g).toLowerCase()||"":g||""},v.parsePlatform=function(){var m=this;this.parsedResult.platform={};var g=h.default.find(u.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.platform=g.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var m=this;this.parsedResult.engine={};var g=h.default.find(d.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.engine=g.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return h.default.assign({},this.parsedResult)},v.satisfies=function(m){var g=this,k={},y=0,S={},M=0;if(Object.keys(m).forEach((function(pe){var we=m[pe];typeof we=="string"?(S[pe]=we,M+=1):typeof we=="object"&&(k[pe]=we,y+=1)})),y>0){var T=Object.keys(k),O=h.default.find(T,(function(pe){return g.isOS(pe)}));if(O){var D=this.satisfies(k[O]);if(D!==void 0)return D}var q=h.default.find(T,(function(pe){return g.isPlatform(pe)}));if(q){var Z=this.satisfies(k[q]);if(Z!==void 0)return Z}}if(M>0){var re=Object.keys(S),G=h.default.find(re,(function(pe){return g.isBrowser(pe,!0)}));if(G!==void 0)return this.compareVersion(S[G])}},v.isBrowser=function(m,g){g===void 0&&(g=!1);var k=this.getBrowserName().toLowerCase(),y=m.toLowerCase(),S=h.default.getBrowserTypeByAlias(y);return g&&S&&(y=S.toLowerCase()),y===k},v.compareVersion=function(m){var g=[0],k=m,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return m[0]===">"||m[0]==="<"?(k=m.substr(1),m[1]==="="?(y=!0,k=m.substr(2)):g=[],m[0]===">"?g.push(1):g.push(-1)):m[0]==="="?k=m.substr(1):m[0]==="~"&&(y=!0,k=m.substr(1)),g.indexOf(h.default.compareVersions(S,k,y))>-1},v.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},v.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},v.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},v.is=function(m,g){return g===void 0&&(g=!1),this.isBrowser(m,g)||this.isOS(m)||this.isPlatform(m)},v.some=function(m){var g=this;return m===void 0&&(m=[]),m.some((function(k){return g.is(k)}))},b})(),r.exports=o.default},92:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=/version\/(\d+(\.?_?\d+)+)/i;o.default=[{test:[/gptbot/i],describe:function(d){var h={name:"GPTBot"},f=c.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(d){var h={name:"ChatGPT-User"},f=c.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(d){var h={name:"OAI-SearchBot"},f=c.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(d){var h={name:"ClaudeBot"},f=c.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(d){var h={name:"Omgilibot"},f=c.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(d){var h={name:"Diffbot"},f=c.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(d){var h={name:"PerplexityBot"},f=c.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(d){var h={name:"Perplexity-User"},f=c.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(d){var h={name:"YouBot"},f=c.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(d){var h={name:"Meta-WebIndexer"},f=c.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(d){var h={name:"Meta-ExternalAds"},f=c.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(d){var h={name:"Meta-ExternalAgent"},f=c.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(d){var h={name:"Meta-ExternalFetcher"},f=c.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(d){var h={name:"Googlebot"},f=c.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(d){var h={name:"Linespider"},f=c.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(d){var h={name:"AmazonBot"},f=c.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(d){var h={name:"BingCrawler"},f=c.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(d){var h={name:"BaiduSpider"},f=c.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(d){var h={name:"DuckDuckBot"},f=c.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(d){var h={name:"InternetArchiveCrawler"},f=c.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(d){var h={name:"SlackBot"},f=c.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(d){var h={name:"Opera"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(d){var h={name:"Opera"},f=c.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(d){var h={name:"Samsung Internet for Android"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(d){var h={name:"NAVER Whale Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(d){var h={name:"Pale Moon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(d){var h={name:"MZ Browser"},f=c.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(d){var h={name:"Focus"},f=c.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(d){var h={name:"Swing"},f=c.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(d){var h={name:"Opera Coast"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(d){var h={name:"Opera Touch"},f=c.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(d){var h={name:"Yandex Browser"},f=c.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(d){var h={name:"UC Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(d){var h={name:"Maxthon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(d){var h={name:"Epiphany"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(d){var h={name:"Puffin"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(d){var h={name:"Sleipnir"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(d){var h={name:"K-Meleon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(d){var h={name:"WeChat"},f=c.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(d){var h={name:/qqbrowserlite/i.test(d)?"QQ Browser Lite":"QQ Browser"},f=c.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(d){var h={name:"Internet Explorer"},f=c.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(d){var h={name:"Microsoft Edge"},f=c.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(d){var h={name:"Microsoft Edge"},f=c.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(d){var h={name:"Vivaldi"},f=c.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(d){var h={name:"SeaMonkey"},f=c.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(d){var h={name:"Sailfish"},f=c.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,d);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(d){var h={name:"Amazon Silk"},f=c.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(d){var h={name:"PhantomJS"},f=c.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(d){var h={name:"SlimerJS"},f=c.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h={name:"BlackBerry"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h={name:"WebOS Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(d){var h={name:"Bada"},f=c.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(d){var h={name:"Tizen"},f=c.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(d){var h={name:"QupZilla"},f=c.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(d){var h={name:"LibreWolf"},f=c.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(d){var h={name:"Firefox"},f=c.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(d){var h={name:"Electron"},f=c.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(d){var h={name:"Sogou Browser"},f=c.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,d),b=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d),v=c.default.getFirstMatch(/se ([\d.]+)x/i,d),m=f||b||v;return m&&(h.version=m),h}},{test:[/MiuiBrowser/i],describe:function(d){var h={name:"Miui"},f=c.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return!!d.hasBrand("DuckDuckGo")||d.test(/\sDdg\/[\d.]+$/i)},describe:function(d,h){var f={name:"DuckDuckGo"};if(h){var b=h.getBrandVersion("DuckDuckGo");if(b)return f.version=b,f}var v=c.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,d);return v&&(f.version=v),f}},{test:function(d){return d.hasBrand("Brave")},describe:function(d,h){var f={name:"Brave"};if(h){var b=h.getBrandVersion("Brave");if(b)return f.version=b,f}return f}},{test:[/chromium/i],describe:function(d){var h={name:"Chromium"},f=c.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(d){var h={name:"Chrome"},f=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(d){var h={name:"Google Search"},f=c.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h={name:"Android Browser"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(d){var h={name:"PlayStation 4"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(d){var h={name:"Safari"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(d){var h=d.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:c.default.getFirstMatch(h,d),version:c.default.getSecondMatch(h,d)}}}],r.exports=o.default},93:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:[/Roku\/DVP/],describe:function(d){var h=c.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,d);return{name:u.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(d){var h=c.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(d){var h=c.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,d),f=c.default.getWindowsVersionName(h);return{name:u.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(d){var h={name:u.OS_MAP.iOS},f=c.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,d);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(d){var h=c.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,d).replace(/[_\s]/g,"."),f=c.default.getMacOSVersionName(h),b={name:u.OS_MAP.MacOS,version:h};return f&&(b.versionName=f),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(d){var h=c.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,d).replace(/[_\s]/g,".");return{name:u.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(d){var h=c.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.HarmonyOS,version:h}}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h=c.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,d),f=c.default.getAndroidVersionName(h),b={name:u.OS_MAP.Android,version:h};return f&&(b.versionName=f),b}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h=c.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,d),f={name:u.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h=c.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,d)||c.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,d)||c.default.getFirstMatch(/\bbb(\d+)/i,d);return{name:u.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(d){var h=c.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(d){var h=c.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:u.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:u.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(d){var h=c.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.PlayStation4,version:h}}}],r.exports=o.default},94:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:[/googlebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(d){var h=c.default.getFirstMatch(/(can-l01)/i,d)&&"Nova",f={type:u.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){var h=d.test(/ipod|iphone/i),f=d.test(/like (ipod|iphone)/i);return h&&!f},describe:function(d){var h=c.default.getFirstMatch(/(ipod|iphone)/i,d);return{type:u.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(d){var h=c.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,d),f={type:u.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName(!0)==="blackberry"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(d){return d.getBrowserName(!0)==="bada"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName()==="windows phone"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(d){var h=Number(String(d.getOSVersion()).split(".")[0]);return d.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){return d.getOSName(!0)==="android"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="macos"},describe:function(){return{type:u.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(d){return d.getOSName(!0)==="windows"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="linux"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="playstation 4"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="roku"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}}],r.exports=o.default},95:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);o.default=[{test:function(d){return d.getBrowserName(!0)==="microsoft edge"},describe:function(d){if(/\sedg\//i.test(d))return{name:u.ENGINE_MAP.Blink};var h=c.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,d);return{name:u.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(d){var h={name:u.ENGINE_MAP.Trident},f=c.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return d.test(/presto/i)},describe:function(d){var h={name:u.ENGINE_MAP.Presto},f=c.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=d.test(/gecko/i),f=d.test(/like gecko/i);return h&&!f},describe:function(d){var h={name:u.ENGINE_MAP.Gecko},f=c.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:u.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(d){var h={name:u.ENGINE_MAP.WebKit},f=c.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}}],r.exports=o.default}})}))})),id=Do(U2(),1);function V2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Se(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function yn(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function od(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):yn("Fake Removing: ",e)}var ys=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Z2(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(yn("Fake Getting: ",e," = ",t),t)}function ad(e,t){const r=Z2(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(o){return Se("Failed to parse JSON from storage",e,o),t}return r}function j2(e){return ad("settings",e)}function q2(e){return ad(window.location.hostname,e)}function sd(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Se("Setting: ",e," = ",t),t.toString()):(yn("Fake Setting: ",e," = ",t),String(t))}function K2(e){return sd("settings",e)}function ld(e){return sd(window.location.hostname,e)}function Y2(){const e=id.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function X2(){return ys.scriptHandler??"Greasemonkey"}var Hi=()=>{const e=id.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},J2=()=>Hi()==="mobile"||Hi()==="tablet",ks=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),cd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,o,a,s)=>{s&&e(a)})}catch(r){Se("Failed to add settings listener",r)}};async function Fi(e,t,r,o){e!==void 0&&(Se(r),Se(o,await t(e)))}async function Q2(e){await Fi(e.waitAttr,t=>Jc(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Fi(e.waitEle,Qf,`Waiting for Element ${e.waitEle}`,"Found Element"),await Fi(e.waitVar,Qc,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Fi(e.waitFunc,_s,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Fi(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Ln=[],dr=0,zo=4,Bo=0,dd=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(o){return r.lc=t.push(o),()=>{for(let s=dr+zo;s<Ln.length;)Ln[s]===o?Ln.splice(s,zo):s+=zo;let a=t.indexOf(o);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(o,a){Bo++;let s=!Ln.length;for(let c of t)Ln.push(c,r.value,o,a);if(s){for(dr=0;dr<Ln.length;dr+=zo)Ln[dr](Ln[dr+1],Ln[dr+2],Ln[dr+3]);Ln.length=0}},off(){},set(o){let a=r.value;a!==o&&(r.value=o,r.notify(a))},subscribe(o){let a=r.listen(o);return o(r.value),a},value:e};return r},ep=5,No=6,Ho=10,tp=(e,t,r,o)=>(e.events=e.events||{},e.events[r+Ho]||(e.events[r+Ho]=o(a=>{e.events[r].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Ho](),delete e.events[r+Ho])}),np=1e3,rp=(e,t)=>tp(e,o=>{let a=t(o);a&&e.events[No].push(a)},ep,o=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...c));let s=e.off;return e.events[No]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[No])c();e.events[No]=[]}},np)},()=>{e.listen=a,e.off=s}}),ip=(e,t,r)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===Bo)return;a=Bo;let f=e.map(b=>b.get());if(!o||f.some((b,v)=>b!==o[v])){o=f;let b=t(...f);b&&b.then&&b.t?b.then(v=>{o===f&&c.set(v)}):(c.set(b),a=Bo)}},c=dd(void 0),u=c.get;c.get=()=>(s(),u());let d,h=r?()=>{clearTimeout(d),d=setTimeout(s)}:s;return rp(c,()=>{let f=e.map(b=>b.listen(h));return s(),()=>{for(let b of f)b()}}),c},op=(e,t)=>ip(e,t),ud=(e={})=>{let t=dd(e);return t.setKey=function(r,o){let a=t.value;typeof o>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==o&&(t.value={...t.value,[r]:o},t.notify(a,r))},t},Es=globalThis,hd=e=>e,Fo=Es.trustedTypes,fd=Fo?Fo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ss="$lit$",Yn=`lit$${Math.random().toFixed(9).slice(2)}$`,As="?"+Yn,ap=`<${As}>`,$r=document,Gi=()=>$r.createComment(""),Wi=e=>e===null||typeof e!="object"&&typeof e!="function",Ms=Array.isArray,pd=e=>Ms(e)||typeof e?.[Symbol.iterator]=="function",xs=`[ 	
\f\r]`,Ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gd=/-->/g,md=/>/g,Dr=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vd=/'/g,bd=/"/g,wd=/^(?:script|style|textarea|title)$/i,Is=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),se=Is(1),tS=Is(2),nS=Is(3),Xn=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),_d=new WeakMap,zr=$r.createTreeWalker($r,129);function yd(e,t){if(!Ms(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fd!==void 0?fd.createHTML(t):t}var kd=(e,t)=>{const r=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=Ui;for(let u=0;u<r;u++){const d=e[u];let h,f,b=-1,v=0;for(;v<d.length&&(c.lastIndex=v,f=c.exec(d),f!==null);)v=c.lastIndex,c===Ui?f[1]==="!--"?c=gd:f[1]!==void 0?c=md:f[2]!==void 0?(wd.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=Dr):f[3]!==void 0&&(c=Dr):c===Dr?f[0]===">"?(c=a??Ui,b=-1):f[1]===void 0?b=-2:(b=c.lastIndex-f[2].length,h=f[1],c=f[3]===void 0?Dr:f[3]==='"'?bd:vd):c===bd||c===vd?c=Dr:c===gd||c===md?c=Ui:(c=Dr,a=void 0);const m=c===Dr&&e[u+1].startsWith("/>")?" ":"";s+=c===Ui?d+ap:b>=0?(o.push(h),d.slice(0,b)+Ss+d.slice(b)+Yn+m):d+Yn+(b===-2?u:m)}return[yd(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},Cs=class Nf{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let s=0,c=0;const u=t.length-1,d=this.parts,[h,f]=kd(t,r);if(this.el=Nf.createElement(h,o),zr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=zr.nextNode())!==null&&d.length<u;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(Ss)){const v=f[c++],m=a.getAttribute(b).split(Yn),g=/([.?@])?(.*)/.exec(v);d.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Sd:g[1]==="?"?Ad:g[1]==="@"?Md:Vi}),a.removeAttribute(b)}else b.startsWith(Yn)&&(d.push({type:6,index:s}),a.removeAttribute(b));if(wd.test(a.tagName)){const b=a.textContent.split(Yn),v=b.length-1;if(v>0){a.textContent=Fo?Fo.emptyScript:"";for(let m=0;m<v;m++)a.append(b[m],Gi()),zr.nextNode(),d.push({type:2,index:++s});a.append(b[v],Gi())}}}else if(a.nodeType===8)if(a.data===As)d.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Yn,b+1))!==-1;)d.push({type:7,index:s}),b+=Yn.length-1}s++}}static createElement(t,r){const o=$r.createElement("template");return o.innerHTML=t,o}};function Br(e,t,r=e,o){if(t===Xn)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Wi(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=Br(e,a._$AS(e,t.values),a,o)),t}var Ed=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??$r).importNode(t,!0);zr.currentNode=o;let a=zr.nextNode(),s=0,c=0,u=r[0];for(;u!==void 0;){if(s===u.index){let d;u.type===2?d=new Go(a,a.nextSibling,this,e):u.type===1?d=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(d=new xd(a,this,e)),this._$AV.push(d),u=r[++c]}s!==u?.index&&(a=zr.nextNode(),s++)}return zr.currentNode=$r,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Go=class Hf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Br(this,t,r),Wi(t)?t===De||t==null||t===""?(this._$AH!==De&&this._$AR(),this._$AH=De):t!==this._$AH&&t!==Xn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==De&&Wi(this._$AH)?this._$AA.nextSibling.data=t:this.T($r.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Cs.createElement(yd(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new Ed(a,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=_d.get(t.strings);return r===void 0&&_d.set(t.strings,r=new Cs(t)),r}k(t){Ms(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const s of t)a===r.length?r.push(o=new Hf(this.O(Gi()),this.O(Gi()),this,this.options)):o=r[a],o._$AI(s),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=hd(t).nextSibling;hd(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Vi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,a){this.type=1,this._$AH=De,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=De}_$AI(e,t=this,r,o){const a=this.strings;let s=!1;if(a===void 0)e=Br(this,e,t,0),s=!Wi(e)||e!==this._$AH&&e!==Xn,s&&(this._$AH=e);else{const c=e;let u,d;for(e=a[0],u=0;u<a.length-1;u++)d=Br(this,c[r+u],t,u),d===Xn&&(d=this._$AH[u]),s||=!Wi(d)||d!==this._$AH[u],d===De?e=De:e!==De&&(e+=(d??"")+a[u+1]),this._$AH[u]=d}s&&!o&&this.j(e)}j(e){e===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Sd=class extends Vi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===De?void 0:e}},Ad=class extends Vi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==De)}},Md=class extends Vi{constructor(e,t,r,o,a){super(e,t,r,o,a),this.type=5}_$AI(e,t=this){if((e=Br(this,e,t,0)??De)===Xn)return;const r=this._$AH,o=e===De&&r!==De||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==De&&(r===De||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xd=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Br(this,e)}},sp={M:Ss,P:Yn,A:As,C:1,L:kd,R:Ed,D:pd,V:Br,I:Go,H:Vi,N:Ad,U:Md,B:Sd,F:xd},lp=Es.litHtmlPolyfillSupport;lp?.(Cs,Go),(Es.litHtmlVersions??=[]).push("3.3.2");var cp=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=r?.renderBefore??null;o._$litPart$=a=new Go(t.insertBefore(Gi(),s),s,void 0,r??{})}return a._$AI(e),a},{I:dp}=sp,Id=e=>e,rS=e=>e===null||typeof e!="object"&&typeof e!="function",iS={HTML:1,SVG:2,MATHML:3},oS=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,aS=e=>e?._$litType$?.h!=null,sS=e=>e?._$litDirective$!==void 0,lS=e=>e?._$litDirective$,up=e=>e.strings===void 0,Cd=()=>document.createComment(""),cS=(e,t,r)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new dp(o.insertBefore(Cd(),a),o.insertBefore(Cd(),a),e,e.options);else{const s=r._$AB.nextSibling,c=r._$AM,u=c!==e;if(u){let d;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(d=e._$AU)!==c._$AU&&r._$AP(d)}if(s!==a||u){let d=r._$AA;for(;d!==s;){const h=Id(d).nextSibling;Id(o).insertBefore(d,a),d=h}}}return r},dS=(e,t,r=e)=>(e._$AI(t,r),e),hp={},uS=(e,t=hp)=>e._$AH=t,hS=e=>e._$AH,fS=e=>{e._$AR(),e._$AA.remove()},pS=e=>{e._$AR()},Wo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=e=>(...t)=>({_$litDirective$:e,values:t}),Uo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ji=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const o of r)o._$AO?.(t,!1),ji(o,t);return!0},Vo=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Od=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),gp(t)}};function fp(e){this._$AN!==void 0?(Vo(this),this._$AM=e,Od(this)):this._$AM=e}function pp(e,t=!1,r=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)ji(o[s],!1),Vo(o[s]);else o!=null&&(ji(o,!1),Vo(o));else ji(this,e)}var gp=e=>{e.type==Wo.CHILD&&(e._$AP??=pp,e._$AQ??=fp)},mp=class extends Uo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Od(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ji(this,e),Vo(this))}setValue(e){if(up(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Os=()=>new vp,vp=class{},Ts=new WeakMap,Ls=Zi(class extends mp{render(e){return De}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),De}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ts.get(t);r===void 0&&(r=new WeakMap,Ts.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ts.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bp={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},wp={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},_p={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},yp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},kp={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},Ep={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},oi=[wp,_p,kp,Ep,bp,yp],Zo=globalThis,Rs=Zo.ShadowRoot&&(Zo.ShadyCSS===void 0||Zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ps=Symbol(),Td=new WeakMap,Ld=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Rs&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Td.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Td.set(t,e))}return e}toString(){return this.cssText}},Gt=e=>new Ld(typeof e=="string"?e:e+"",void 0,Ps),Tt=(e,...t)=>new Ld(e.length===1?e[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]),e,Ps),Sp=(e,t)=>{if(Rs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=Zo.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},Rd=Rs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Gt(r)})(e):e,{is:Ap,defineProperty:Mp,getOwnPropertyDescriptor:xp,getOwnPropertyNames:Ip,getOwnPropertySymbols:Cp,getPrototypeOf:Op}=Object,jo=globalThis,Pd=jo.trustedTypes,Tp=Pd?Pd.emptyScript:"",Lp=jo.reactiveElementPolyfillSupport,qi=(e,t)=>e,qo={toAttribute(e,t){switch(t){case Boolean:e=e?Tp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$s=(e,t)=>!Ap(e,t),$d={attribute:!0,type:String,converter:qo,reflect:!1,useDefault:!1,hasChanged:$s};Symbol.metadata??=Symbol("metadata"),jo.litPropertyMetadata??=new WeakMap;var ai=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$d){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Mp(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=xp(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const c=o?.call(this);a?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$d}static _$Ei(){if(this.hasOwnProperty(qi("elementProperties")))return;const e=Op(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qi("properties"))){const t=this.properties,r=[...Ip(t),...Cp(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Rd(o))}else e!==void 0&&t.push(Rd(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:qo).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:qo;this._$Em=o;const c=s.fromAttribute(t,a.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,r,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??$s)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:s}=a,c=this[o];s!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ai.elementStyles=[],ai.shadowRootOptions={mode:"open"},ai[qi("elementProperties")]=new Map,ai[qi("finalized")]=new Map,Lp?.({ReactiveElement:ai}),(jo.reactiveElementVersions??=[]).push("2.1.2");var Ds=globalThis,Je=class extends ai{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xn}};Je._$litElement$=!0,Je.finalized=!0,Ds.litElementHydrateSupport?.({LitElement:Je});var Rp=Ds.litElementPolyfillSupport;Rp?.({LitElement:Je}),(Ds.litElementVersions??=[]).push("4.2.2");var st=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Pp={attribute:!0,type:String,converter:qo,reflect:!1,hasChanged:$s},$p=(e=Pp,t,r)=>{const{kind:o,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(u){const d=t.get.call(this);t.set.call(this,u),this.requestUpdate(c,d,e,!0,u)},init(u){return u!==void 0&&this.C(c,void 0,e,u),u}}}if(o==="setter"){const{name:c}=r;return function(u){const d=this[c];t.call(this,u),this.requestUpdate(c,d,e,!0,u)}}throw Error("Unsupported decorator location: "+o)};function te(e){return(t,r)=>typeof r=="object"?$p(e,t,r):((o,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function rn(e){return te({...e,state:!0,attribute:!1})}var Dd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Nr(e,t){return(r,o,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:u}=typeof o=="object"?r:a??(()=>{const d=Symbol();return{get(){return this[d]},set(h){this[d]=h}}})();return Dd(r,o,{get(){let d=c.call(this);return d===void 0&&(d=s(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return Dd(r,o,{get(){return s(this)}})}}var St=Zi(class extends Uo{constructor(e){if(super(e),e.type!==Wo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Xn}}),Ko=class extends Uo{constructor(e){if(super(e),this.it=De,e.type!==Wo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===De||e==null)return this._t=void 0,this.it=e;if(e===Xn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ko.directiveName="unsafeHTML",Ko.resultType=1;var zd=Zi(Ko),zs=class extends Ko{};zs.directiveName="unsafeSVG",zs.resultType=2;var Bd=Zi(zs);function Nd(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${Me.default.upperFirst(Me.default.camelCase(t))}`}var Dp=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",zp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Bp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Np='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Hp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Fp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',Gp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Wp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Up='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Vp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Zp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',jp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',qp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Kp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Yp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Xp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Jp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Qp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',rg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',lg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',cg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,dg=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,ug=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="
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
            " id="path5107"/></g></g></g></g></svg>`,hg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',fg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',kg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',Eg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Sg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',Ag=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,Mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',$g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',Dg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',zg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',Ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Hg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',jg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Yg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Xg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',em='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',nm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',rm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',im='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',am='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',sm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',lm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',cm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',dm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',um='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',hm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',pm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',gm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',mm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',vm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',bm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',wm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',_m='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',ym='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',km=Kc({IconAdjustmentsHorizontal:()=>zp,IconAlertCircle:()=>Bp,IconApiBook:()=>Np,IconArrowAutofitDown:()=>Hp,IconArrowAutofitHeight:()=>Fp,IconArrowAutofitLeft:()=>Gp,IconArrowAutofitRight:()=>Wp,IconArrowAutofitWidth:()=>Up,IconArrowBigLeft:()=>Vp,IconArrowBigRight:()=>Zp,IconArrowsHorizontal:()=>jp,IconArrowsLeftRight:()=>qp,IconArrowsMove:()=>Kp,IconArrowsMoveVertical:()=>Yp,IconArrowsVertical:()=>Xp,IconBook:()=>Jp,IconBookArrowLeft:()=>Qp,IconBookArrowRight:()=>eg,IconBookOff:()=>tg,IconBookUpload:()=>ng,IconBookmark:()=>rg,IconBookmarkOff:()=>ig,IconBookmarks:()=>og,IconBooksReturn:()=>ag,IconBoxAlignTop:()=>sg,IconCategory:()=>pg,IconCheck:()=>gg,IconChevronLeft:()=>mg,IconChevronRight:()=>vg,IconCircleCheck:()=>bg,IconCircleX:()=>wg,IconComic1:()=>cg,IconComic1Flat:()=>lg,IconComic2:()=>ug,IconComic2Flat:()=>dg,IconComic3:()=>fg,IconComic3Flat:()=>hg,IconDeviceFloppy:()=>_g,IconDotsVertical:()=>yg,IconEReader1:()=>Eg,IconEReader1Flat:()=>kg,IconEReader2:()=>Ag,IconEReader2Flat:()=>Sg,IconExternalLink:()=>Mg,IconEye:()=>xg,IconEyeOff:()=>Ig,IconFileDownload:()=>Cg,IconFilePercent:()=>Og,IconFolderOpen:()=>Tg,IconHandClick:()=>Lg,IconHelp:()=>Rg,IconInfoCircle:()=>Pg,IconKeyboard:()=>$g,IconLayoutBottombar:()=>Dg,IconLayoutBottombarInactive:()=>zg,IconLayoutDashboard:()=>Bg,IconLayoutSidebar:()=>Ng,IconLayoutSidebarInactive:()=>Hg,IconLayoutSidebarRight:()=>Fg,IconLayoutSidebarRightInactive:()=>Gg,IconListNumbers:()=>Wg,IconLoader2:()=>Ug,IconLocationCog:()=>Vg,IconMenu2:()=>Zg,IconMenuDeep:()=>jg,IconMessage:()=>qg,IconMoon:()=>Kg,IconPage:()=>Xg,IconPageFlat:()=>Yg,IconPalette:()=>Jg,IconPencil:()=>Qg,IconPencilCog:()=>em,IconPhoto:()=>tm,IconPhotoOff:()=>nm,IconPin:()=>rm,IconPlayerPause:()=>im,IconPlayerPlay:()=>om,IconRefresh:()=>am,IconSettings:()=>sm,IconSettingsOff:()=>lm,IconSpacingHorizontal:()=>cm,IconSpacingVertical:()=>dm,IconSun:()=>um,IconTrash:()=>hm,IconWorldCog:()=>fm,IconX:()=>pm,IconZoom:()=>gm,IconZoomCancel:()=>mm,IconZoomIn:()=>vm,IconZoomInArea:()=>bm,IconZoomOut:()=>wm,IconZoomOutArea:()=>_m,IconZoomPan:()=>ym}),Bs=Kc({IconAdjustmentsHorizontal:()=>Cm,IconAlertCircle:()=>r5,IconApiBook:()=>Om,IconArrowAutofitDown:()=>Rm,IconArrowAutofitHeight:()=>Pm,IconArrowAutofitLeft:()=>$m,IconArrowAutofitRight:()=>Dm,IconArrowAutofitWidth:()=>zm,IconArrowBigLeft:()=>Bm,IconArrowBigRight:()=>Nm,IconArrowsHorizontal:()=>Tm,IconArrowsLeftRight:()=>Lm,IconArrowsMove:()=>Hm,IconArrowsMoveVertical:()=>Fm,IconArrowsVertical:()=>Gm,IconBook:()=>Wm,IconBookArrowLeft:()=>Vm,IconBookArrowRight:()=>Zm,IconBookOff:()=>Um,IconBookUpload:()=>qm,IconBookmark:()=>Km,IconBookmarkOff:()=>Ym,IconBookmarks:()=>Xm,IconBooksReturn:()=>jm,IconBoxAlignTop:()=>Jm,IconCategory:()=>Qm,IconCheck:()=>e5,IconChevronLeft:()=>t5,IconChevronRight:()=>n5,IconCircleCheck:()=>i5,IconCircleX:()=>o5,IconComic1:()=>l5,IconComic1Flat:()=>c5,IconComic2:()=>d5,IconComic2Flat:()=>u5,IconComic3:()=>h5,IconComic3Flat:()=>f5,IconDeviceFloppy:()=>p5,IconDotsVertical:()=>g5,IconEReader1:()=>m5,IconEReader1Flat:()=>v5,IconEReader2:()=>b5,IconEReader2Flat:()=>w5,IconExternalLink:()=>_5,IconEye:()=>y5,IconEyeOff:()=>k5,IconFileDownload:()=>E5,IconFilePercent:()=>S5,IconFolderOpen:()=>A5,IconHandClick:()=>M5,IconHelp:()=>a5,IconInfoCircle:()=>s5,IconKeyboard:()=>x5,IconLayoutBottombar:()=>C5,IconLayoutBottombarInactive:()=>O5,IconLayoutDashboard:()=>I5,IconLayoutSidebar:()=>T5,IconLayoutSidebarInactive:()=>L5,IconLayoutSidebarRight:()=>R5,IconLayoutSidebarRightInactive:()=>P5,IconListNumbers:()=>$5,IconLoader2:()=>D5,IconLocationCog:()=>z5,IconMenu2:()=>B5,IconMenuDeep:()=>N5,IconMessage:()=>H5,IconMoon:()=>F5,IconPage:()=>G5,IconPageFlat:()=>W5,IconPalette:()=>U5,IconPencil:()=>V5,IconPencilCog:()=>Z5,IconPhoto:()=>Ns,IconPhotoOff:()=>Hs,IconPin:()=>j5,IconPlayerPause:()=>q5,IconPlayerPlay:()=>K5,IconRefresh:()=>Y5,IconSettings:()=>X5,IconSettingsOff:()=>J5,IconSpacingHorizontal:()=>Q5,IconSpacingVertical:()=>ev,IconSun:()=>tv,IconTrash:()=>nv,IconWorldCog:()=>rv,IconX:()=>iv,IconZoom:()=>ov,IconZoomCancel:()=>av,IconZoomIn:()=>sv,IconZoomInArea:()=>lv,IconZoomOut:()=>cv,IconZoomOutArea:()=>dv,IconZoomPan:()=>uv});function Em(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:r.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var Sm=Em(Dp),Yo=new Map;for(const e of Sm)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,o,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),Yo.has(o)||Yo.set(o,[]),Yo.get(o)?.push({subSelector:s,color:e.color})}var Am=new DOMParser,Mm=new XMLSerializer;function xm(e,t){const r=Yo.get(t);if(!r?.length)return e;const o=Am.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{o.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return Mm.serializeToString(o)}var Im=Me.default.mapValues(km,(e,t)=>xm(e,`icon-tabler-${Me.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:Cm,IconApiBook:Om,IconArrowsHorizontal:Tm,IconArrowsLeftRight:Lm,IconArrowAutofitDown:Rm,IconArrowAutofitHeight:Pm,IconArrowAutofitLeft:$m,IconArrowAutofitRight:Dm,IconArrowAutofitWidth:zm,IconArrowBigLeft:Bm,IconArrowBigRight:Nm,IconArrowsMove:Hm,IconArrowsMoveVertical:Fm,IconArrowsVertical:Gm,IconBook:Wm,IconBookOff:Um,IconBookArrowLeft:Vm,IconBookArrowRight:Zm,IconBooksReturn:jm,IconBookUpload:qm,IconBookmark:Km,IconBookmarkOff:Ym,IconBookmarks:Xm,IconBoxAlignTop:Jm,IconCategory:Qm,IconCheck:e5,IconChevronLeft:t5,IconChevronRight:n5,IconAlertCircle:r5,IconCircleCheck:i5,IconCircleX:o5,IconHelp:a5,IconInfoCircle:s5,IconComic1:l5,IconComic1Flat:c5,IconComic2:d5,IconComic2Flat:u5,IconComic3:h5,IconComic3Flat:f5,IconDeviceFloppy:p5,IconDotsVertical:g5,IconEReader1:m5,IconEReader1Flat:v5,IconEReader2:b5,IconEReader2Flat:w5,IconExternalLink:_5,IconEye:y5,IconEyeOff:k5,IconFileDownload:E5,IconFilePercent:S5,IconFolderOpen:A5,IconHandClick:M5,IconKeyboard:x5,IconLayoutDashboard:I5,IconLayoutBottombar:C5,IconLayoutBottombarInactive:O5,IconLayoutSidebar:T5,IconLayoutSidebarInactive:L5,IconLayoutSidebarRight:R5,IconLayoutSidebarRightInactive:P5,IconListNumbers:$5,IconLoader2:D5,IconLocationCog:z5,IconMenu2:B5,IconMenuDeep:N5,IconMessage:H5,IconMoon:F5,IconPage:G5,IconPageFlat:W5,IconPalette:U5,IconPencil:V5,IconPencilCog:Z5,IconPhoto:Ns,IconPhotoOff:Hs,IconPin:j5,IconPlayerPause:q5,IconPlayerPlay:K5,IconRefresh:Y5,IconSettings:X5,IconSettingsOff:J5,IconSpacingHorizontal:Q5,IconSpacingVertical:ev,IconSun:tv,IconTrash:nv,IconWorldCog:rv,IconX:iv,IconZoom:ov,IconZoomCancel:av,IconZoomIn:sv,IconZoomInArea:lv,IconZoomOut:cv,IconZoomOutArea:dv,IconZoomPan:uv}=Im;function H(e,t,r,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)(c=e[u])&&(s=(a<3?c(s):a>3?c(t,r,s):c(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Hr=class extends Je{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Tt`
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
  `}updated(t){super.updated(t),t.has("name")&&(Bs[Nd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Bs[Nd(this.name)];if(!t)return De;const r=this.size?`--mov-icon-size: ${this.size};`:"";return se`<span
      role=${this.label?"img":De}
      aria-label=${this.label||De}
      aria-hidden=${this.label?De:"true"}
      style=${r}
      >${Bd(t)}</span
    >`}};H([te({type:String})],Hr.prototype,"name",void 0),H([te({type:String,reflect:!0})],Hr.prototype,"variant",void 0),H([te({type:String,reflect:!0})],Hr.prototype,"family",void 0),H([te({type:String})],Hr.prototype,"label",void 0),H([te({type:String})],Hr.prototype,"size",void 0),Hr=H([st("mov-icon")],Hr);var Hd=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),hv=Hd,Fd=Hd;function fv(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function Gd(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(fv(e,t))}function pv(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function gv(e,t){pv(e),Gd(e,t)}function mv(e,t){return hv`
    <style id="${e}">
      ${t}
    </style>
  `}var Xo=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:1.25rem;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:.875rem;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:.8125rem;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Gn=class extends Je{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Gt(Xo)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return se`
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
            ${this.title?se`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?se`
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
    `}};H([te({type:Boolean,reflect:!0})],Gn.prototype,"open",void 0),H([te({reflect:!0})],Gn.prototype,"variant",void 0),H([te({type:Number})],Gn.prototype,"duration",void 0),H([te({type:Boolean})],Gn.prototype,"closable",void 0),H([te()],Gn.prototype,"title",void 0),H([te()],Gn.prototype,"description",void 0),H([te()],Gn.prototype,"icon",void 0),H([te({reflect:!0})],Gn.prototype,"placement",void 0),Gn=H([st("mov-toast")],Gn);var on=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let o=document.querySelector(`.mov-toast-stack.${r}`);const a=Xo.indexOf(":host");Gd("mov-toast-stack-styles",a>-1?Xo.substring(0,a).trim():Xo),o||(o=document.createElement("div"),o.className=`mov-toast-stack ${r}`,document.body.appendChild(o));const s=document.createElement("mov-toast");let c=e.variant||"primary";return c==="info"&&(c="primary"),c==="error"&&(c="danger"),s.variant=c,s.title=e.title||"",s.description=e.description||e.message||"",s.duration=e.duration??3e3,s.closable=e.closable??!0,s.placement=t,e.icon&&(s.icon=e.icon),o.appendChild(s),requestAnimationFrame(()=>{s.show()}),s};on.info=e=>on({...e,variant:"primary"}),on.success=e=>on({...e,variant:"success"}),on.warning=e=>on({...e,variant:"warning"}),on.error=e=>on({...e,variant:"danger"});var Ki=(e,t)=>{const r=(o,a)=>Me.default.transform(o,(s,c,u)=>{Me.default.isEqual(c,a[u])||(Me.default.isObject(c)&&Me.default.isObject(a[u])&&!Me.default.isArray(c)?s[u]=r(c,a[u]):s[u]=c)});return r(e,t)},vv={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},bv={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},wv={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Rn(e=!0){const t={...vv,theme:e?"#29487D":"#004526"};let r=J2()?Me.default.defaultsDeep(bv,t):t;return ks()&&(r=Me.default.defaultsDeep(wv,r)),r}function _v(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,o=[...e].sort((s,c)=>r(s).localeCompare(r(c))),a=[...t].sort((s,c)=>r(s).localeCompare(r(c)));return Me.default.isEqual(o,a)}}function yv(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,o=t,a=Me.default.keys(r).sort((c,u)=>c.localeCompare(u)),s=Me.default.keys(o).sort((c,u)=>c.localeCompare(u));if(!Me.default.isEqual(a,s))return!1;for(const c of a){const u=r[c]?[...r[c]].sort((h,f)=>h.localeCompare(f)):[],d=o[c]?[...o[c]].sort((h,f)=>h.localeCompare(f)):[];if(!Me.default.isEqual(u,d))return!1}return!0}}function Wd(e,t,r){if(r==="bookmarks")return _v(e,t);if(r==="keybinds")return yv(e,t)}function Jo(e,t,r){if(e===t)return!1;if(r){const o={[r]:e},a={[r]:t};return!Me.default.isEqualWith(o,a,Wd)}return!Me.default.isEqualWith(e,t,Wd)}var qt=Me.default.defaultsDeep(j2(Rn()),Rn()),Kt=Me.default.defaultsDeep(q2(Rn(!1)),Rn(!1)),Fr=()=>Kt?.enabled===!0,Fs=e=>Fr()&&!["locale","bookmarks","keybinds"].includes(e),At=ud(Fr()?{...Kt,locale:qt.locale,keybinds:qt.keybinds,bookmarks:qt.bookmarks}:qt),si=op(At,e=>oi.find(t=>t.ID===e.locale)??oi[1]),Yt=ud({autoScroll:!1,chapter:Os(),currentPage:0,device:Hi(),manga:void 0,panel:"none",scrollToPage:void 0});function Gr(e){if(e){const t=Fs(e)?Kt[e]:qt[e],r=At.get()?.[e];Jo(r,t,e)&&(At.setKey(e,t),Se("Refreshed Settings",e,t));return}for(const t in At.get()){const r=At.get()[t],o=Fs(t)?Kt[t]:qt[t];Jo(r,o)&&At.setKey(t,o)}Se("Refreshed All Settings")}function kv(e){const t=Me.default.defaultsDeep(e,Rn()),r=qt?Ki(t,qt):t;if(!_n(r)){Se("Imported Global Settings",r),qt=t;for(const o in r)Gr(o)}}cd(Me.default.debounce(kv,300),"settings");function Ev(e){const t=Me.default.defaultsDeep(e,Rn(!1)),r=Kt?Ki(t,Kt):t;if(!_n(r)){Se("Imported Local Settings",r),Kt=t;for(const o in r)Gr(o)}}cd(Me.default.debounce(Ev,300),location.hostname);function K(e){return At.get()?.[e]}function li(e,t){const r=At.get()?.[e];Jo(r,t,e)&&At.setKey(e,t)}function _t(e,t){Jo(K(e),t,e)&&(At.setKey(e,t),Fs(e)?(Kt[e]=t,ld(Ki(Kt,Rn(!1)))):(qt[e]=t,K2(Ki(qt,Rn()))))}function Yi(e,t){li(e,t(K(e)))}function fe(e){return Yt.get()[e]}function Re(e,t){const r=Yt.get()[e];Me.default.isEqual(r,t)||Yt.setKey(e,t)}function Ud(e,t){const r=Yt.get()[e],o=t(r);Me.default.isEqual(r,o)||Yt.setKey(e,o)}function Pn(e,t){Ud("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function j(e){const t=oi.find(r=>r.ID===K("locale"))??oi[1];return Xf(t,e)?t?.[e]??oi[1]?.[e]:`##MISSING_STRING_${e}##`}function Vd(e=!1){return Kt.enabled=e,ld(Ki(Kt,Rn(!1))),Se("Local Settings ",e?"Enabled":"Disabled"),on.info({title:"Changed Settings to",description:Fr()?"Local":"Global",duration:2e3}),Fr()}function Sv(){Fr()?(od(location.hostname),Kt=Rn(!1),Vd(!1)):(od("settings"),qt=Rn(),Gr()),Se("Settings Reset")}function ci(e=location.href){return K("bookmarks").find(t=>t.url===e)?.page}function Av(e=null){yn("Current Settings (Local:",Fr(),") ",e?At.get()[e]:At.get(),`
Global Settings`,e?qt[e]:qt,`
Local Settings`,e?Kt[e]:Kt,`
AppState`,Yt.get())}V2("MOVSettings",Av);var Mv=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const o=t[r],a=e[r];on.info({title:`${r} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};At.listen(Me.default.debounce(Mv,300));var an=e=>e??De,xv=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",lt=class extends Je{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Gt(xv)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=se`
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
      ${this.withCaret?se`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?se`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?se`
        <a
          part="base"
          class=${St(r)}
          href=${an(this.href)}
          target=${an(this.target)}
          title=${an(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${an(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:se`
        <button
          part="base"
          class=${St(r)}
          ?disabled=${this.disabled||this.loading}
          type=${an(this.type)}
          title=${an(this.title)}
          name=${an(this.name)}
          value=${an(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),o=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=r.some(a);this.isIconButton=o.length===0&&s}};H([Nr(".button")],lt.prototype,"button",void 0),H([Nr("slot:not([name])")],lt.prototype,"labelSlot",void 0),H([rn()],lt.prototype,"isIconButton",void 0),H([rn()],lt.prototype,"hasLabel",void 0),H([rn()],lt.prototype,"hasStart",void 0),H([rn()],lt.prototype,"hasEnd",void 0),H([te()],lt.prototype,"title",void 0),H([te({reflect:!0})],lt.prototype,"appearance",void 0),H([te({reflect:!0})],lt.prototype,"variant",void 0),H([te({reflect:!0})],lt.prototype,"size",void 0),H([te({attribute:"with-caret",type:Boolean,reflect:!0})],lt.prototype,"withCaret",void 0),H([te({type:Boolean,reflect:!0})],lt.prototype,"disabled",void 0),H([te({type:Boolean,reflect:!0})],lt.prototype,"loading",void 0),H([te({type:Boolean,reflect:!0})],lt.prototype,"pill",void 0),H([te()],lt.prototype,"type",void 0),H([te({reflect:!0})],lt.prototype,"name",void 0),H([te({reflect:!0})],lt.prototype,"value",void 0),H([te({reflect:!0})],lt.prototype,"href",void 0),H([te()],lt.prototype,"target",void 0),H([te({reflect:!0})],lt.prototype,"rel",void 0),H([te()],lt.prototype,"download",void 0),H([te({reflect:!0})],lt.prototype,"form",void 0),lt=H([st("mov-button")],lt);var kn=class extends Je{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Tt`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return se`
      <mov-button
        @click=${this._onClick}
        .appearance=${an(this.appearance)}
        .size=${an(this.size)}
        ?disabled=${an(this.disabled)}
        ?loading=${an(this.loading)}
        .title=${an(this.title)}
        class=${St(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return se`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?se`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?se`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?se`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:se`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:De}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};H([te({type:String})],kn.prototype,"mode",void 0),H([te({type:Boolean,reflect:!0})],kn.prototype,"active",void 0),H([te({type:String})],kn.prototype,"label",void 0),H([te({type:String})],kn.prototype,"activeLabel",void 0),H([te({type:String})],kn.prototype,"icon",void 0),H([te({type:String})],kn.prototype,"activeIcon",void 0),H([te({type:String,reflect:!0})],kn.prototype,"appearance",void 0),H([te({type:String,reflect:!0})],kn.prototype,"size",void 0),H([te({type:Boolean})],kn.prototype,"disabled",void 0),H([te({type:Boolean,reflect:!0})],kn.prototype,"loading",void 0),kn=H([st("toggle-button")],kn);var Zd="important",Iv=" !"+Zd,Wn=Zi(class extends Uo{constructor(e){if(super(e),e.type!==Wo.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(Iv);o.includes("-")||s?r.setProperty(o,s?a.slice(0,-11):a,s?Zd:""):r[o]=a}}return Xn}});function Xi(e,t){let r=e.length,o,a,s=!1,c=!1;Array.isArray(e[0])?o=e:(o=[e],r=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],c=!0);let u=a[0].length,d=a[0].map((f,b)=>a.map(v=>v[b])),h=o.map(f=>d.map(b=>{let v=0;if(!Array.isArray(f)){for(let m of b)v+=f*m;return v}for(let m=0;m<f.length;m++)v+=f[m]*(b[m]||0);return v}));return r===1&&s&&(h=h[0]),u===1&&c?r===1&&s?h[0]:h.map(f=>f[0]):h}function Gs(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function mt(e,t,r=[0,0,0]){const o=Gs(e,t[0]),a=Gs(e,t[1]),s=Gs(e,t[2]);return r[0]=o,r[1]=a,r[2]=s,r}function di(e){return ur(e)==="string"}function ur(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ws(e,{precision:t=16,unit:r}){return qe(e)?"none":(e=+Us(e,t),e+(r??""))}function qe(e){return e===null}function yt(e){return qe(e)?0:e}function Us(e,t){if(e===0)return 0;let r=~~e,o=0;r&&t&&(o=~~Math.log10(Math.abs(r))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function Ji(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function jd(e,t,r){return(r-e)/(t-e)}function Vs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Ji(t[0],t[1],jd(e[0],e[1],r))}function Qo(e,t,r){return Math.max(Math.min(r,t),e)}function ea(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function kt(e,t){return ea(Math.abs(e)**t,e)}function Zs(e,t){return t===0?0:e/t}function qd(e,t,r=0,o=e.length){for(;r<o;){const a=r+o>>1;e[a]<t?r=a+1:o=a}return r}function ui(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=o}return!1}var Cv=Object.freeze({__proto__:null,bisectLeft:qd,clamp:Qo,copySign:ea,interpolate:Ji,interpolateInv:jd,isInstance:ui,isNone:qe,isString:di,mapRange:Vs,multiplyMatrices:Xi,multiply_v3_m3x3:mt,serializeNumber:Ws,skipNone:yt,spow:kt,toPrecision:Us,type:ur,zdiv:Zs}),Ov=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},hr=new Ov,sn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Kd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:o,max:a}=r.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Vs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=Vs(this.coordRange,r,e),Ws(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return ui(e,this)?e:new this(e,t)}},js=Symbol("instance"),Yd=class Ff{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[js]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(c=>Kd.get(c,s))}))}serializeCoords(t,r,o){return o=t.map((a,s)=>Kd.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([o,a],s)=>{let c=t[s];if(qe(c)||isNaN(c))return c;let u=r[s],d=this.coords[s].find(h=>h.type==u);if(!d){let h=a.name||o;throw new TypeError(`${u??c?.raw??c} not allowed for ${h} in ${this.name}()`)}return c=d.resolve(c),d.range&&(r[s]=d.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ui(t,this)?t:t[js]?t[js]:new Ff(t,...r)}},Wt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function qs(e){return Array.isArray(e)?e:Wt[e]}function ta(e,t,r,o={}){if(e=qs(e),t=qs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:o};if(hr.run("chromatic-adaptation-start",a),a.M||(a.W1===Wt.D65&&a.W2===Wt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Wt.D50&&a.W2===Wt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),hr.run("chromatic-adaptation-end",a),a.M)return mt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Xd(e,t){let r={str:String(e)?.trim(),options:t};if(hr.run("parse-start",r),r.color)return r.color;r.parsed=Lv(r.str);let o,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,c,u,d=r.parsed.args,h=d.map((v,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let v=d.shift();h.shift();let m=v.startsWith("--")?v.substring(2):`--${v}`,g=[v,m];if(c=ye.findFormat({name:s,id:g,type:"function"}),!c){let k,y=v in ye.registry?v:m;if(y in ye.registry){let S=ye.registry[y].formats?.color?.id;S&&(k=`Did you mean ${e.replace("color("+v,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(k??"Missing a plugin?"))}u=c.space,c.id.startsWith("--")&&!v.startsWith("--")&&sn.warn(`${u.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${v}).`),v.startsWith("--")&&!c.id.startsWith("--")&&sn.warn(`${u.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${v}).`)}else c=ye.findFormat({name:s,type:"function"}),u=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let b=c.coords.length;if(d.length!==b)throw new TypeError(`Expected ${b} coordinates for ${u.id} in ${r.str}), got ${d.length}`);d=c.coerceCoords(d,h),o={spaceId:u.id,coords:d,alpha:f}}else e:for(let s of ye.all)for(let c in s.formats){let u=s.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=s.getFormat(u),h=d.parse(r.str);if(h){a&&Object.assign(a,{format:d,formatId:c}),o=h;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=qe(o.alpha)?o.alpha:o.alpha===void 0?1:Qo(0,o.alpha,1),o}var Jd={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},na={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Jd).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Tv(e){let t={},r=e.match(na.unitValue)?.[0],o=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(o.slice(0,-r.length)),o=t.unitless*Jd[r]):na.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function Lv(e){if(!e)return;e=e.trim();let t=e.match(na.function);if(t){let r=[],o=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(na.singleArgument,(u,d)=>{let{value:h,meta:f}=Tv(d);return(u.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),o.push(f),""});return{name:s,args:r,argMeta:o,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Le(e,t){if(Array.isArray(e))return e.map(o=>Le(o,t));if(!e)throw new TypeError("Empty color reference");di(e)&&(e=Xd(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ye.get(r)),e.alpha===void 0&&(e.alpha=1),e}var Rv=75e-6,ye=class Fn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Fn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r,this.white=qs(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Fn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Pv(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),hr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Rv}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let o=Object.values(this.coords);return t.every((a,s)=>{let c=o[s];if(c.type!=="angle"&&c.range){if(qe(a))return!0;let[u,d]=c.range;return(u===void 0||a>=u-r)&&(d===void 0||a<=d+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Yd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const u=Le(t);[t,r]=[u.space,u.coords]}if(t=Fn.get(t),this.equals(t))return r;r=r.map(u=>qe(u)?0:u);let o=this.path,a=t.path,s,c;for(let u=0;u<o.length&&o[u].equals(a[u]);u++)s=o[u],c=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=o.length-1;u>c;u--)r=o[u].toBase(r);for(let u=c+1;u<a.length;u++)r=a[u].fromBase(r);return r}from(t,r){if(arguments.length===1){const o=Le(t);[t,r]=[o.space,o.coords]}return t=Fn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let o=this.coords[r],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Fn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let o of r.aliases)this.register(o,r);return r}static get(t,...r){if(!t||ui(t,this))return t;if(ur(t)==="string"){let o=Fn.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Fn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Fn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of r)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let u=s.ids||[s.id],d=Array.isArray(t.id)?t.id:[t.id];c&&=d.some(h=>u.includes(h))}if(c){let u=Yd.get(s,o);return u!==s&&(o.formats[s.name]=u),u}}return null}static resolveCoord(t,r){let o=ur(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Fn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=ur(s),o==="number"||o==="string"&&s>=0){let d=Object.entries(a.coords)[s];if(d)return{space:a,id:d[0],index:s,...d[1]}}a=Fn.get(a);let c=s.toLowerCase(),u=0;for(let d in a.coords){let h=a.coords[d];if(d.toLowerCase()===c||h.name?.toLowerCase()===c)return{space:a,id:d,index:u,...h};u++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function Pv(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Pt=new ye({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Bt=class extends ye{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Pt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=mt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=ta(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=ta(this.base.white,this.white,t),mt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Qd(e,t={}){if(Array.isArray(e))return e.map(d=>Qd(d,t));let{cssProperty:r="background-color",element:o,...a}=t,s=null;try{return Le(e,a)}catch(d){s=d}let{CSS:c,getComputedStyle:u}=globalThis;if(di(e)&&o&&c&&u&&c.supports(r,e)){let d=o.style[r];e!==d&&(o.style[r]=e);let h=u(o).getPropertyValue(r);if(e!==d&&(o.style[r]=d),h!==e)try{return Le(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Qi(e,t){e=Le(e);let r=ye.get(t,t?.space),o=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),o===void 0?a:a.map(s=>Us(s,o))}function ln(e,t){if(e=Le(e),t==="alpha")return e.alpha??1;let{space:r,index:o}=ye.resolveCoord(t,e.space);return Qi(e,r)[o]}function Ks(e,t,r,o){return e=Le(e),Array.isArray(t)&&([t,r,o]=[e.space,t,r]),t=ye.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),o!==void 0&&(e.alpha=o),e}Ks.returns="color";function Jn(e,t,r){if(e=Le(e),arguments.length===2&&ur(arguments[1])==="object"){let o=arguments[1];for(let a in o)Jn(e,a,o[a])}else if(typeof r=="function"&&(r=r(ln(e,t))),t==="alpha")e.alpha=r;else{let{space:o,index:a}=ye.resolveCoord(t,e.space),s=Qi(e,o);s[a]=r,Ks(e,o,s)}return e}Jn.returns="color";var Ys=new ye({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Pt,fromBase:e=>ta(Pt.white,"D50",e),toBase:e=>ta("D50",Pt.white,e)}),$v=216/24389,eu=24/116,ra=24389/27,Xs=Wt.D50,cn=new ye({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Xs,base:Ys,fromBase(e){let t=e.map((r,o)=>r/Xs[o]).map(r=>r>$v?Math.cbrt(r):(ra*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,o]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-o/200,[a[0]>eu?Math.pow(a[0],3):(116*a[0]-16)/ra,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ra,a[2]>eu?Math.pow(a[2],3):(116*a[2]-16)/ra].map((s,c)=>s*Xs[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function En(e){return typeof e!="number"?e:(e%360+360)%360}function tu(e,t){let[r,o]=t,a=qe(r),s=qe(o);if(a&&s)return[r,o];if(a?r=o:s&&(o=r),e==="raw")return t;r=En(r),o=En(o);let c=o-r;return e==="increasing"?c<0&&(o+=360):e==="decreasing"?c>0&&(r+=360):e==="longer"?-180<c&&c<180&&(c>0?r+=360:o+=360):e==="shorter"&&(c>180?r+=360:c<-180&&(o+=360)),[r,o]}var dn=new ye({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:cn,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange;this.ε=(c[1]-c[0])/1e5}let[t,r,o]=e,a=Math.abs(r)<this.ε&&Math.abs(o)<this.ε,s=a?null:En(Math.atan2(o,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+o**2),s]},toBase(e){let[t,r,o]=e,a=null,s=null;return qe(o)||(r=r<0?0:r,a=r*Math.cos(o*Math.PI/180),s=r*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),nu=25**7,ia=Math.PI,ru=180/ia,hi=ia/180;function iu(e){const t=e*e;return t*t*t*e}function ou(e,t,{kL:r=1,kC:o=1,kH:a=1}={}){[e,t]=Le([e,t]);let[s,c,u]=cn.from(e),d=dn.from(cn,[s,c,u])[1],[h,f,b]=cn.from(t),v=dn.from(cn,[h,f,b])[1];d<0&&(d=0),v<0&&(v=0);let m=iu((d+v)/2),g=.5*(1-Math.sqrt(m/(m+nu))),k=(1+g)*c,y=(1+g)*f,S=Math.sqrt(k**2+u**2),M=Math.sqrt(y**2+b**2),T=k===0&&u===0?0:Math.atan2(u,k),O=y===0&&b===0?0:Math.atan2(b,y);T<0&&(T+=2*ia),O<0&&(O+=2*ia),T*=ru,O*=ru;let D=h-s,q=M-S,Z=O-T,re=T+O,G=Math.abs(Z),pe;S*M===0?pe=0:G<=180?pe=Z:Z>180?pe=Z-360:Z<-180?pe=Z+360:sn.warn("the unthinkable has happened");let we=2*Math.sqrt(M*S)*Math.sin(pe*hi/2),R=(s+h)/2,Y=(S+M)/2,E=iu(Y),J;S*M===0?J=re:G<=180?J=re/2:re<360?J=(re+360)/2:J=(re-360)/2;let xe=(R-50)**2,ce=1+.015*xe/Math.sqrt(20+xe),Ie=1+.045*Y,ie=1;ie-=.17*Math.cos((J-30)*hi),ie+=.24*Math.cos(2*J*hi),ie+=.32*Math.cos((3*J+6)*hi),ie-=.2*Math.cos((4*J-63)*hi);let Ae=1+.015*Y*ie,W=30*Math.exp(-1*((J-275)/25)**2),F=2*Math.sqrt(E/(E+nu)),Ee=-1*Math.sin(2*W*hi)*F,ge=(D/(r*ce))**2;return ge+=(q/(o*Ie))**2,ge+=(we/(a*Ae))**2,ge+=Ee*(q/(o*Ie))*(we/(a*Ae)),Math.sqrt(ge)}var Dv=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],zv=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Bv=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],fr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],$n=new ye({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pt,fromBase(e){let t=mt(e,Dv);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),mt(t,Bv,t)},toBase(e){let t=mt(e,fr);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,mt(t,zv,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Js(e,t){[e,t]=Le([e,t]);let[r,o,a]=$n.from(e),[s,c,u]=$n.from(t),d=r-s,h=o-c,f=a-u;return Math.sqrt(d**2+h**2+f**2)}var Nv=75e-6;function Wr(e,t,{epsilon:r=Nv}={}){e=Le(e),t||(t=e.space),t=ye.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:r})}function fi(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function au(e,t,r="lab"){r=ye.get(r);let o=r.from(e),a=r.from(t);return Math.sqrt(o.reduce((s,c,u)=>{let d=a[u];return qe(c)||qe(d)?s:s+(d-c)**2},0))}function Hv(e,t){return au(e,t,"lab")}var su=Math.PI/180;function Fv(e,t,{l:r=2,c:o=1}={}){[e,t]=Le([e,t]);let[a,s,c]=cn.from(e),[,u,d]=dn.from(cn,[a,s,c]),[h,f,b]=cn.from(t),v=dn.from(cn,[h,f,b])[1];u<0&&(u=0),v<0&&(v=0);let m=a-h,g=u-v,k=s-f,y=c-b,S=k**2+y**2-g**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let T=.0638*u/(1+.0131*u)+.638,O;qe(d)&&(d=0),d>=164&&d<=345?O=.56+Math.abs(.2*Math.cos((d+168)*su)):O=.36+Math.abs(.4*Math.cos((d+35)*su));let D=Math.pow(u,4),q=Math.sqrt(D/(D+1900)),Z=T*(q*O+1-q),re=(m/(r*M))**2;return re+=(g/(o*T))**2,re+=S/Z**2,Math.sqrt(re)}var lu=203,Qs=new ye({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Pt,fromBase(e){return e.map(t=>t*lu)},toBase(e){return e.map(t=>t/lu)}}),oa=1.15,aa=.66,cu=2610/2**14,Gv=2**14/2610,du=3424/2**12,uu=2413/2**7,hu=2392/2**7,Wv=1.7*2523/2**5,fu=2**5/(1.7*2523),sa=-.56,el=16295499532821565e-27,Uv=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Vv=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Zv=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],jv=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],pu=new ye({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Qs,fromBase(e){let[t,r,o]=e,[a,s,c]=mt(mt([oa*t-(oa-1)*o,aa*r-(aa-1)*t,o],Uv).map(function(u){return kt((du+uu*kt(u/1e4,cu))/(1+hu*kt(u/1e4,cu)),Wv)}),Zv);return[(1+sa)*a/(1+sa*a)-el,s,c]},toBase(e){let[t,r,o]=e,[a,s,c]=mt(mt([(t+el)/(1+sa-sa*(t+el)),r,o],jv).map(function(d){return 1e4*kt((du-kt(d,fu))/(hu*kt(d,fu)-uu),Gv)}),Vv),u=(a+(oa-1)*c)/oa;return[u,(s+(aa-1)*u)/aa,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),tl=new ye({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:pu,fromBase:dn.fromBase,toBase:dn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function qv(e,t){[e,t]=Le([e,t]);let[r,o,a]=tl.from(e),[s,c,u]=tl.from(t),d=r-s,h=o-c;qe(a)&&qe(u)?(a=0,u=0):qe(a)?a=u:qe(u)&&(u=a);let f=a-u,b=2*Math.sqrt(o*c)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(d**2+h**2+b**2)}var gu=3424/4096,mu=2413/128,vu=2392/128,bu=2610/16384,Kv=2523/32,Yv=16384/2610,wu=32/2523,Xv=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Jv=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Qv=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],e4=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],nl=new ye({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Qs,fromBase(e){return t4(mt(e,Xv))},toBase(e){return mt(n4(e),e4)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function t4(e){return mt(e.map(function(t){return((gu+mu*(t/1e4)**bu)/(1+vu*(t/1e4)**bu))**Kv}),Jv)}function n4(e){return mt(e,Qv).map(function(t){return 1e4*(Math.max(t**wu-gu,0)/(mu-vu*t**wu))**Yv})}function r4(e,t){[e,t]=Le([e,t]);let[r,o,a]=nl.from(e),[s,c,u]=nl.from(t);return 720*Math.sqrt((r-s)**2+.25*(o-c)**2+(a-u)**2)}function i4(e,t){[e,t]=Le([e,t]);let r=2,[o,a,s]=$n.from(e),[c,u,d]=$n.from(t),h=o-c,f=r*(a-u),b=r*(s-d);return Math.sqrt(h**2+f**2+b**2)}var o4=Wt.D65,_u=.42,yu=1/_u,rl=2*Math.PI,ku=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],a4=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],s4=[[460,451,288],[460,-891,-261],[460,-220,-6300]],l4={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ur={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},c4=180/Math.PI,Eu=Math.PI/180;function Su(e,t){return e.map(r=>{const o=kt(t*Math.abs(r)*.01,_u);return 400*ea(o,r)/(o+27.13)})}function d4(e,t){const r=100/t*27.13**yu;return e.map(o=>{const a=Math.abs(o);return ea(r*kt(a/(400-a),yu),o)})}function u4(e){let t=En(e);t<=Ur.h[0]&&(t+=360);const r=qd(Ur.h,t)-1,[o,a]=Ur.h.slice(r,r+2),[s,c]=Ur.e.slice(r,r+2),u=Ur.H[r],d=(t-o)/s;return u+100*d/(d+(a-t)/c)}function h4(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[o,a]=Ur.h.slice(r,r+2),[s,c]=Ur.e.slice(r,r+2);return En((t*(c*o-s*a)-100*o*c)/(t*(c-s)-100*c))}function Au(e,t,r,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const c=e.map(g=>g*100);s.la=t,s.yb=r;const u=c[1],d=mt(c,ku);let h=l4[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const v=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=d.map(g=>Ji(1,u/g,v)),s.dRgbInv=s.dRgb.map(g=>1/g);const m=Su(d.map((g,k)=>g*s.dRgb[k]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var Mu=Au(o4,64/Math.PI*.2,20,"average",!1);function il(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=En(e.h)*Eu:r=h4(e.H)*Eu;const o=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=kt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const u=kt(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),d=.25*(Math.cos(r+2)+3.8),h=t.aW*kt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*d,b=h/t.nbb,v=23*(b+.305)*Zs(u,23*f+u*(11*o+108*a));return mt(d4(mt([b,v*o,v*a],s4).map(m=>m*1/1403),t.fl).map((m,g)=>m*t.dRgbInv[g]),a4).map(m=>m/100)}function xu(e,t){const r=Su(mt(e.map(k=>k*100),ku).map((k,y)=>k*t.dRgb[y]),t.fl),o=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,o)%rl+rl)%rl,c=.25*(Math.cos(s+2)+3.8),u=kt(5e4/13*t.nc*t.ncb*Zs(c*Math.sqrt(o**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=kt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),h=100*kt(d,2),f=4/t.c*d*(t.aW+4)*t.flRoot,b=u*d,v=b*t.flRoot,m=En(s*c4),g=u4(m);return{J:h,C:b,h:m,s:50*kt(t.c*u/(t.aW+4),1/2),Q:f,M:v,H:g}}var f4=new ye({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=xu(e,Mu),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return il({J:e[0],M:e[1],h:e[2]},Mu)}}),p4=Wt.D65,g4=216/24389,Iu=24389/27;function m4(e){return 116*(e>g4?Math.cbrt(e):(Iu*e+16)/116)-16}function ol(e){return e>8?Math.pow((e+16)/116,3):e/Iu}function v4(e,t){let[r,o,a]=e,s=[],c=0;if(a===0)return[0,0,0];let u=ol(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const d=2e-12,h=15;let f=0,b=1/0;for(;f<=h;){s=il({J:c,C:o,h:r},t);const v=Math.abs(s[1]-u);if(v<b){if(v<=d)return s;b=v}c=c-(s[1]-u)*c/(2*s[1]),f+=1}return il({J:c,C:o,h:r},t)}function b4(e,t){const r=m4(e[1]);if(r===0)return[0,0,0];const o=xu(e,al);return[En(o.h),o.C,r]}var al=Au(p4,200/Math.PI*ol(50),ol(50)*100,"average",!1),eo=new ye({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=b4(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return v4(e,al)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),w4=Math.PI/180,Cu=[1,.007,.0228];function Ou(e){e[1]<0&&(e=eo.fromBase(eo.toBase(e)));const t=Math.log(Math.max(1+Cu[2]*e[1]*al.flRoot,1))/Cu[2],r=e[0]*w4,o=t*Math.cos(r),a=t*Math.sin(r);return[e[2],o,a]}function _4(e,t){[e,t]=Le([e,t]);let[r,o,a]=Ou(eo.from(e)),[s,c,u]=Ou(eo.from(t));return Math.sqrt((r-s)**2+(o-c)**2+(a-u)**2)}var pi={deltaE76:Hv,deltaECMC:Fv,deltaE2000:ou,deltaEJz:qv,deltaEITP:r4,deltaEOK:Js,deltaEOK2:i4,deltaEHCT:_4};function y4(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Tu={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function pr(e,{method:t=sn.gamut_mapping,space:r=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Le(e),di(arguments[1])?r=arguments[1]:r||(r=e.space),r=ye.get(r),Wr(e,r,{epsilon:0}))return e;let c;if(t==="css")c=k4(e,{space:r});else{if(t!=="clip"&&!Wr(e,r)){Object.prototype.hasOwnProperty.call(Tu,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=Tu[t]);let u=ou;if(o!==""){for(let h in pi)if("deltae"+o.toLowerCase()===h.toLowerCase()){u=pi[h];break}}a===0&&(a=1e-16);let d=pr(nt(e,r),{method:"clip",space:r});if(u(e,d)>a){if(s&&Object.keys(s).length===3){let S=ye.resolveCoord(s.channel),M=ln(nt(e,S.space),S.id);if(qe(M)&&(M=0),M>=s.max)return nt({space:"xyz-d65",coords:Wt.D65},e.space);if(M<=s.min)return nt({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=ye.resolveCoord(t),f=h.space,b=h.id,v=nt(e,f);v.coords.forEach((S,M)=>{qe(S)&&(v.coords[M]=0)});let m=(h.range||h.refRange)[0],g=y4(a),k=m,y=ln(v,b);for(;y-k>g;){let S=fi(v);S=pr(S,{space:r,method:"clip"}),u(v,S)-a<g?k=ln(v,b):y=ln(v,b),Jn(v,b,(k+y)/2)}c=nt(v,r)}else c=d}else c=nt(e,r);if(t==="clip"||!Wr(c,r,{epsilon:0})){let u=Object.values(r.coords).map(d=>d.range||[]);c.coords=c.coords.map((d,h)=>{let[f,b]=u[h];return f!==void 0&&(d=Math.max(f,d)),b!==void 0&&(d=Math.min(d,b)),d})}}return r!==e.space&&(c=nt(c,e.space)),e.coords=c.coords,e}pr.returns="color";var Lu={WHITE:{space:$n,coords:[1,0,0],alpha:1},BLACK:{space:$n,coords:[0,0,0],alpha:1}};function k4(e,{space:t}={}){e=Le(e),t||(t=e.space),t=ye.get(t);const a=ye.get("oklch");if(t.isUnbounded)return nt(e,t);const s=nt(e,a);let c=s.coords[0];if(c>=1){const g=nt(Lu.WHITE,t);return g.alpha=e.alpha,nt(g,t)}if(c<=0){const g=nt(Lu.BLACK,t);return g.alpha=e.alpha,nt(g,t)}if(Wr(s,t,{epsilon:0}))return nt(s,t);function u(g){const k=nt(g,t),y=Object.values(t.coords);return k.coords=k.coords.map((S,M)=>{if("range"in y[M]){const[T,O]=y[M].range;return Qo(T,S,O)}return S}),k}let d=0,h=s.coords[1],f=!0,b=fi(s),v=u(b),m=Js(v,b);if(m<.02)return v;for(;h-d>1e-4;){const g=(d+h)/2;if(b.coords[1]=g,f&&Wr(b,t,{epsilon:0}))d=g;else if(v=u(b),m=Js(v,b),m<.02){if(.02-m<1e-4)break;f=!1,d=g}else h=g}return v}function nt(e,t,{inGamut:r}={}){e=Le(e),t=ye.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return r&&(a=pr(a,r===!0?void 0:r)),a}nt.returns="color";function to(e,t={}){let{precision:r=sn.precision,format:o,inGamut:a=!0,coords:s,alpha:c,commas:u}=t,d,h=Le(e),f=o,b=h.parseMeta;b&&!o&&(b.format.canSerialize()&&(o=b.format,f=b.formatId),s??=b.types,c??=b.alphaType,u??=b.commas),f&&(o=h.space.getFormat(o)??ye.findFormat(f)),o||(o=h.space.getFormat("default")??ye.DEFAULT_FORMAT,f=o.name),o&&o.space&&o.space!==h.space&&(h=nt(h,o.space));let v=h.coords.slice();if(a||=o.toGamut,a&&!Wr(h)&&(v=pr(fi(h),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)d=o.serialize(v,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=o.name||"color",g=o.serializeCoords(v,r,s);if(m==="color"){let T=o.id||o.ids?.[0]||h.space.cssId||h.space.id;g.unshift(T)}let k=h.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let y=c?.type??"<number>",S=c?.include===!0||o.alpha===!0||c?.include!==!1&&o.alpha!==!1&&k<1,M="";if(u??=o.commas,S){if(r!==null){let T;y==="<percentage>"&&(T="%",k*=100),k=Ws(k,{precision:r,unit:T})}M=`${u?",":" /"} ${k}`}d=`${m}(${g.join(u?", ":" ")}${M})`}return d}var no=new Bt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Ru=new Bt({id:"rec2020",name:"REC.2020",base:no,toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,1/2.4)})}}),Pu=new Bt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),E4=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Mt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],$u=new Bt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:E4,fromXYZ_M:Mt}),Du={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},zu=Array(3).fill("<percentage> | <number>[0, 255]"),Bu=Array(3).fill("<number>[0, 255]"),Vr=new Bt({id:"srgb",name:"sRGB",base:$u,fromBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o>.0031308?r*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o<=.04045?t/12.92:r*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:zu},rgb_number:{name:"rgb",commas:!0,coords:Bu,alpha:!1},color:{},rgba:{coords:zu,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Bu},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Du.black,t.alpha=0):t.coords=Du[e],t.coords)return t}}}}),Nu=new Bt({id:"p3",cssId:"display-p3",name:"P3",base:Pu,fromBase:Vr.fromBase,toBase:Vr.toBase});sn.display_space=Vr;var S4;if(typeof CSS<"u"&&CSS.supports)for(let e of[cn,Ru,Nu]){let t=to({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){sn.display_space=e;break}}function A4(e,{space:t=sn.display_space,...r}={}){e=Le(e);let o=to(e,r);if(typeof CSS>"u"||CSS.supports("color",o)||!sn.display_space)o=new String(o),o.color=e;else{let a=e;if((e.coords.some(qe)||qe(e.alpha))&&!(S4??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=fi(e),a.coords=a.coords.map(yt),a.alpha=yt(a.alpha),o=to(a,r),CSS.supports("color",o)))return o=new String(o),o.color=a,o;a=nt(a,t),o=new String(to(a,r)),o.color=a}return o}function M4(e,t,{space:r,hue:o="shorter"}={}){e=Le(e),r||=e.space,r=ye.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>nt(h,r));let[s,c]=[e,t].map(h=>h.coords),u=s.map((h,f)=>{let b=a[f],v=c[f];return b.type==="angle"&&([h,v]=tu(o,[h,v])),Hu(h,v)}),d=Hu(e.alpha,t.alpha);return{space:r,coords:u,alpha:d}}function Hu(e,t){return qe(e)||qe(t)?e===t?null:0:e-t}function x4(e,t){return e=Le(e),t=Le(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,o)=>r===t.coords[o])}function gr(e){return ln(e,[Pt,"y"])}function Fu(e,t){Jn(e,[Pt,"y"],t)}function I4(e){Object.defineProperty(e.prototype,"luminance",{get(){return gr(this)},set(t){Fu(this,t)}})}var C4=Object.freeze({__proto__:null,getLuminance:gr,register:I4,setLuminance:Fu});function O4(e,t){e=Le(e),t=Le(t);let r=Math.max(gr(e),0),o=Math.max(gr(t),0);return o>r&&([r,o]=[o,r]),(r+.05)/(o+.05)}var T4=.56,L4=.57,R4=.62,P4=.65,Gu=.022,$4=1.414,D4=.1,z4=5e-4,B4=1.14,Wu=.027,N4=1.14;function Uu(e){return e>=Gu?e:e+(Gu-e)**$4}function gi(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function H4(e,t){t=Le(t),e=Le(e);let r,o,a,s,c,u;t=nt(t,"srgb"),[s,c,u]=t.coords.map(m=>qe(m)?0:m);let d=gi(s)*.2126729+gi(c)*.7151522+gi(u)*.072175;e=nt(e,"srgb"),[s,c,u]=e.coords.map(m=>qe(m)?0:m);let h=gi(s)*.2126729+gi(c)*.7151522+gi(u)*.072175,f=Uu(d),b=Uu(h),v=b>f;return Math.abs(b-f)<z4?o=0:v?(r=b**T4-f**L4,o=r*B4):(r=b**P4-f**R4,o=r*N4),Math.abs(o)<D4?a=0:o>0?a=o-Wu:a=o+Wu,a*100}function F4(e,t){e=Le(e),t=Le(t);let r=Math.max(gr(e),0),o=Math.max(gr(t),0);o>r&&([r,o]=[o,r]);let a=r+o;return a===0?0:(r-o)/a}var G4=5e4;function W4(e,t){e=Le(e),t=Le(t);let r=Math.max(gr(e),0),o=Math.max(gr(t),0);return o>r&&([r,o]=[o,r]),o===0?G4:(r-o)/o}function U4(e,t){e=Le(e),t=Le(t);let r=ln(e,[cn,"l"]),o=ln(t,[cn,"l"]);return Math.abs(r-o)}var V4=216/24389,Vu=24/116,la=24389/27,sl=Wt.D65,ll=new ye({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:sl,base:Pt,fromBase(e){let t=e.map((r,o)=>r/sl[o]).map(r=>r>V4?Math.cbrt(r):(la*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Vu?Math.pow(t[0],3):(116*t[0]-16)/la,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/la,t[2]>Vu?Math.pow(t[2],3):(116*t[2]-16)/la].map((r,o)=>r*sl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),cl=Math.pow(5,.5)*.5+.5;function Z4(e,t){e=Le(e),t=Le(t);let r=ln(e,[ll,"l"]),o=ln(t,[ll,"l"]),a=Math.abs(Math.pow(r,cl)-Math.pow(o,cl)),s=Math.pow(a,1/cl)*Math.SQRT2-40;return s<7.5?0:s}var ca=Object.freeze({__proto__:null,contrastAPCA:H4,contrastDeltaPhi:Z4,contrastLstar:U4,contrastMichelson:F4,contrastWCAG21:O4,contrastWeber:W4});function j4(e,t,r){di(r)&&(r={algorithm:r});let{algorithm:o,...a}=r||{};if(!o){let s=Object.keys(ca).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Le(e),t=Le(t);for(let s in ca)if("contrast"+o.toLowerCase()===s.toLowerCase())return ca[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}function da(e){let[t,r,o]=Qi(e,Pt),a=t+15*r+3*o;return[4*t/a,9*r/a]}function Zu(e){let[t,r,o]=Qi(e,Pt),a=t+r+o;return[t/a,r/a]}function q4(e){Object.defineProperty(e.prototype,"uv",{get(){return da(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Zu(this)}})}var K4=Object.freeze({__proto__:null,register:q4,uv:da,xy:Zu});function ro(e,t,r={}){di(r)&&(r={method:r});let{method:o=sn.deltaE,...a}=r;for(let s in pi)if("deltae"+o.toLowerCase()===s.toLowerCase())return pi[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}function ju(e,t=.25){return Jn(e,[ye.get("oklch","lch"),"l"],r=>r*(1+t))}function qu(e,t=.25){return Jn(e,[ye.get("oklch","lch"),"l"],r=>r*(1-t))}ju.returns="color",qu.returns="color";var Y4=Object.freeze({__proto__:null,darken:qu,lighten:ju});function Ku(e,t,r,o={}){return[e,t]=[Le(e),Le(t)],ur(r)==="object"&&([r,o]=[.5,r]),io(e,t,o)(r??.5)}function Yu(e,t,r={}){let o;dl(e)&&([o,r]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:u=1e3,...d}=r;o||([e,t]=[Le(e),Le(t)],o=io(e,t,d));let h=ro(e,t),f=a>0?Math.max(c,Math.ceil(h/a)+1):c,b=[];if(u!==void 0&&(f=Math.min(f,u)),f===1)b=[{p:.5,color:o(.5)}];else{let v=1/(f-1);b=Array.from({length:f},(m,g)=>{let k=g*v;return{p:k,color:o(k)}})}if(a>0){let v=b.reduce((m,g,k)=>{if(k===0)return 0;let y=ro(g.color,b[k-1].color,s);return Math.max(m,y)},0);for(;v>a;){v=0;for(let m=1;m<b.length&&b.length<u;m++){let g=b[m-1],k=b[m],y=(k.p+g.p)/2,S=o(y);v=Math.max(v,ro(S,g.color),ro(S,k.color)),b.splice(m,0,{p:y,color:o(y)}),m++}}}return b=b.map(v=>v.color),b}function io(e,t,r={}){if(dl(e)){let[d,h]=[e,t];return io(...d.rangeArgs.colors,{...d.rangeArgs.options,...h})}let{space:o,outputSpace:a,progression:s,premultiplied:c}=r;e=Le(e),t=Le(t),e=fi(e),t=fi(t);let u={colors:[e,t],options:r};if(o?o=ye.get(o):o=ye.registry[sn.interpolationSpace]||e.space,a=a?ye.get(a):o,e=nt(e,o),t=nt(t,o),e=pr(e),t=pr(t),o.coords.h&&o.coords.h.type==="angle"){let d=r.hue=r.hue||"shorter",h=[o,"h"],[f,b]=[ln(e,h),ln(t,h)];qe(f)&&!qe(b)?f=b:qe(b)&&!qe(f)&&(b=f),[f,b]=tu(d,[f,b]),Jn(e,h,f),Jn(t,h,b)}return c&&(e.coords=e.coords.map(d=>d*e.alpha),t.coords=t.coords.map(d=>d*t.alpha)),Object.assign(d=>{d=s?s(d):d;let h=e.coords.map((v,m)=>{let g=t.coords[m];return Ji(v,g,d)}),f=Ji(e.alpha,t.alpha,d),b={space:o,coords:h,alpha:f};return c&&(b.coords=b.coords.map(v=>v/f)),a!==o&&(b=nt(b,a)),b},{rangeArgs:u})}function dl(e){return ur(e)==="function"&&!!e.rangeArgs}sn.interpolationSpace="lab";function X4(e){e.defineFunction("mix",Ku,{returns:"color"}),e.defineFunction("range",io,{returns:"function<color>"}),e.defineFunction("steps",Yu,{returns:"array<color>"})}var J4=Object.freeze({__proto__:null,isRange:dl,mix:Ku,range:io,register:X4,steps:Yu}),Q4=new ye({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Vr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,u,d]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(u=d===0||d===1?0:(t-d)/Math.min(d,1-d),t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return u<0&&(c+=180,u=Math.abs(u)),c>=360&&(c-=360),[c,u*100,d*100]},toBase:e=>{let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/30)%12,u=r*Math.min(o,1-o);return o-u*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Xu=new ye({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Vr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,u,d]=[null,0,t],h=t-r;if(h!==0){switch(t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return d&&(u=h/d),c>=360&&(c-=360),[c,u*100,d*100]},toBase(e){let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/60)%6;return o-o*r*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),e3=new ye({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Xu,fromBase(e){let[t,r,o]=e;return[t,o*(100-r)/100,100-o]},toBase(e){let[t,r,o]=e;r/=100,o/=100;let a=r+o;if(a>=1)return[t,0,r/a*100];let s=1-o;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ju=new Bt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),t3=new Bt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Ju,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Qu=new Bt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ys,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),n3=1/512,r3=16/512,i3=new Bt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Qu,toBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o<r3?t/16:r*o**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o>=n3?r*o**(1/1.8):16*t})}}),ua=1.09929682680944,e0=.018053968510807,o3=new Bt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:no,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o<e0*4.5?t/4.5:r*Math.pow((o+ua-1)/ua,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o>=e0?r*(ua*Math.pow(o,.45)-(ua-1)):4.5*t})}}),a3=new ye({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$n,fromBase:dn.fromBase,toBase:dn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),mi=2*Math.PI,ha=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],fa=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ul=Number.MAX_VALUE,oo=.206,hl=.03,ao=(1+oo)/(1+hl);function $t(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function so(e){return .5*(ao*e-oo+Math.sqrt((ao*e-oo)*(ao*e-oo)+4*hl*ao*e))}function vi(e){return(e**2+oo*e)/(ao*(e+hl))}function fl(e){let[t,r]=e;return[r/t,r/(1-t)]}function s3(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function pl(e,t){let r=mt(e,fr);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,mt(r,t,r)}function pa(e,t,r,o){let a=c3(e,t,r,o),s=pl([1,a*e,a*t],r),c=kt(1/Math.max(...s),1/3);return[c,c*a]}function l3(e,t,r,o,a,s,c,u){let d;if(u===void 0&&(u=pa(e,t,s,c)),(r-a)*u[1]-(u[0]-a)*o<=0)d=u[1]*a/(o*u[0]+u[1]*(a-r));else{d=u[1]*(a-1)/(o*(u[0]-1)+u[1]*(a-r));let h=r-a,f=o,b=$t(fr[0].slice(1),[e,t]),v=$t(fr[1].slice(1),[e,t]),m=$t(fr[2].slice(1),[e,t]),g=h+f*b,k=h+f*v,y=h+f*m,S=a*(1-d)+d*r,M=d*o,T=S+M*b,O=S+M*v,D=S+M*m,q=T**3,Z=O**3,re=D**3,G=3*g*T**2,pe=3*k*O**2,we=3*y*D**2,R=6*g**2*T,Y=6*k**2*O,E=6*y**2*D,J=$t(s[0],[q,Z,re])-1,xe=$t(s[0],[G,pe,we]),ce=$t(s[0],[R,Y,E]),Ie=xe/(xe*xe-.5*J*ce),ie=-J*Ie,Ae=$t(s[1],[q,Z,re])-1,W=$t(s[1],[G,pe,we]),F=$t(s[1],[R,Y,E]),Ee=W/(W*W-.5*Ae*F),ge=-Ae*Ee,he=$t(s[2],[q,Z,re])-1,je=$t(s[2],[G,pe,we]),ft=$t(s[2],[R,Y,E]),We=je/(je*je-.5*he*ft),He=-he*We;ie=Ie>=0?ie:ul,ge=Ee>=0?ge:ul,He=We>=0?He:ul,d+=Math.min(ie,Math.min(ge,He))}return d}function t0(e,t,r){let[o,a,s]=e,c=pa(a,s,t,r),u=l3(a,s,o,1,o,t,r,c),d=fl(c),h=u/Math.min(o*d[0],(1-o)*d[1]),f=s3(a,s),b=o*f[0],v=(1-o)*f[1],m=.9*h*Math.sqrt(Math.sqrt(1/(1/b**4+1/v**4)));return b=o*.4,v=(1-o)*.8,[Math.sqrt(1/(1/b**2+1/v**2)),m,u]}function c3(e,t,r,o){let a,s,c,u,d,h,f,b;$t(o[0][0],[e,t])>1?([a,s,c,u,d]=o[0][1],[h,f,b]=r[0]):$t(o[1][0],[e,t])>1?([a,s,c,u,d]=o[1][1],[h,f,b]=r[1]):([a,s,c,u,d]=o[2][1],[h,f,b]=r[2]);let v=a+s*e+c*t+u*e**2+d*e*t,m=$t(fr[0].slice(1),[e,t]),g=$t(fr[1].slice(1),[e,t]),k=$t(fr[2].slice(1),[e,t]),y=1+v*m,S=1+v*g,M=1+v*k,T=y**3,O=S**3,D=M**3,q=3*m*y**2,Z=3*g*S**2,re=3*k*M**2,G=6*m**2*y,pe=6*g**2*S,we=6*k**2*M,R=h*T+f*O+b*D,Y=h*q+f*Z+b*re,E=h*G+f*pe+b*we;return v=v-R*Y/(Y**2-.5*R*E),v}function d3(e,t,r){let[o,a,s]=e,c=vi(s),u=null,d=null;if(o=En(o)/360,c!==0&&c!==1&&a!==0){let h=Math.cos(mi*o),f=Math.sin(mi*o),[b,v,m]=t0([c,h,f],t,r),g=.8,k=1.25,y,S,M,T;a<g?(y=k*a,S=0,M=g*b,T=1-M/v):(y=5*(a-.8),S=v,M=.2*v**2*1.25**2/b,T=1-M/(m-v));let O=S+y*M/(1-T*y);u=O*h,d=O*f}return[c,u,d]}function u3(e,t,r){let o=1e-7,a=1e-4,s=e[0],c=0,u=so(s),d=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/mi;if(u!==0&&u!==1&&d!==0){let[b,v,m]=t0([s,e[1]/d,e[2]/d],t,r),g=.8,k=1.25,y,S,M,T;d<v?(S=g*b,M=1-S/v,T=d/(S+M*d),c=T*g):(y=v,S=.2*v**2*k**2/b,M=1-S/(m-v),T=(d-y)/(S+M*(d-y)),c=g+.2*T)}const f=Math.abs(c)<a;return f||u===0||Math.abs(1-u)<o?(h=null,f||(c=0)):h=En(h*360),[h,c,u]}var h3=new ye({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:$n,gamutSpace:"self",fromBase(e){return u3(e,ha,fa)},toBase(e){return d3(e,ha,fa)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),n0=new ye({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:$n,fromBase(e){return[so(e[0]),e[1],e[2]]},toBase(e){return[vi(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),f3=new ye({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:n0,fromBase:dn.fromBase,toBase:dn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function p3(e,t,r){let[o,a,s]=e;o=En(o)/360;let c=vi(s),u=null,d=null;if(c!==0&&a!==0){let h=Math.cos(mi*o),f=Math.sin(mi*o),[b,v]=fl(pa(h,f,t,r)),m=.5,g=1-m/b,k=1-a*m/(m+v-v*g*a),y=a*v*m/(m+v-v*g*a);c=s*k;let S=s*y,M=vi(k),T=y*M/k,O=vi(c);S=S*O/c,c=O;let[D,q,Z]=pl([M,h*T,f*T],t),re=kt(1/Math.max(Math.max(D,q),Math.max(Z,0)),1/3);c=c*re,S=S*re,u=S*h,d=S*f}return[c,u,d]}function g3(e,t,r){let o=1e-4,a=e[0],s=0,c=so(a),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/mi;if(a!==0&&a!==1&&u!==0){let h=e[1]/u,f=e[2]/u,[b,v]=fl(pa(h,f,t,r)),m=.5,g=1-m/b,k=v/(u+a*v),y=k*a,S=k*u,M=vi(y),T=S*M/y,[O,D,q]=pl([M,h*T,f*T],t),Z=kt(1/Math.max(Math.max(O,D),Math.max(q,0)),1/3);a=a/Z,u=u/Z,u=u*so(a)/a,a=so(a),c=a/y,s=(m+v)*S/(v*m+v*g*S)}return Math.abs(s)<o||c===0?d=null:d=En(d*360),[d,s,c]}var m3=new ye({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:$n,gamutSpace:"self",fromBase(e){return g3(e,ha,fa)},toBase(e){return p3(e,ha,fa)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),r0=Wt.D65,v3=216/24389,i0=24389/27,[o0,a0]=da({space:Pt,coords:r0}),s0=new ye({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:r0,base:Pt,fromBase(e){let t=[yt(e[0]),yt(e[1]),yt(e[2])],r=t[1],[o,a]=da({space:Pt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=r<=v3?i0*r:116*Math.cbrt(r)-16;return[s,13*s*(o-o0),13*s*(a-a0)]},toBase(e){let[t,r,o]=e;if(t===0||qe(t))return[0,0,0];r=yt(r),o=yt(o);let a=r/(13*t)+o0,s=o/(13*t)+a0,c=t<=8?t/i0:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),gl=new ye({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:s0,fromBase:dn.fromBase,toBase:dn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),b3=216/24389,w3=24389/27,l0=Mt[0][0],c0=Mt[0][1],ml=Mt[0][2],d0=Mt[1][0],u0=Mt[1][1],vl=Mt[1][2],h0=Mt[2][0],f0=Mt[2][1],bl=Mt[2][2];function bi(e,t,r){const o=t/(Math.sin(r)-e*Math.cos(r));return o<0?1/0:o}function ga(e){const t=Math.pow(e+16,3)/1560896,r=t>b3?t:e/w3,o=r*(284517*l0-94839*ml),a=r*(838422*ml+769860*c0+731718*l0),s=r*(632260*ml-126452*c0),c=r*(284517*d0-94839*vl),u=r*(838422*vl+769860*u0+731718*d0),d=r*(632260*vl-126452*u0),h=r*(284517*h0-94839*bl),f=r*(838422*bl+769860*f0+731718*h0),b=r*(632260*bl-126452*f0);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/d,g0i:u*e/d,g1s:c/(d+126452),g1i:(u-769860)*e/(d+126452),b0s:h/b,b0i:f*e/b,b1s:h/(b+126452),b1i:(f-769860)*e/(b+126452)}}function p0(e,t){const r=t/360*Math.PI*2,o=bi(e.r0s,e.r0i,r),a=bi(e.r1s,e.r1i,r),s=bi(e.g0s,e.g0i,r),c=bi(e.g1s,e.g1i,r),u=bi(e.b0s,e.b0i,r),d=bi(e.b1s,e.b1i,r);return Math.min(o,a,s,c,u,d)}var _3=new ye({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gl,gamutSpace:Vr,fromBase(e){let[t,r,o]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/p0(ga(t),o)*100,[o,a,t]},toBase(e){let[t,r,o]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=p0(ga(o),t)/100*r,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Mt[0][0],Mt[0][1],Mt[0][2],Mt[1][0],Mt[1][1],Mt[1][2],Mt[2][0],Mt[2][1],Mt[2][2];function wi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function g0(e){let t=wi(e.r0s,e.r0i),r=wi(e.r1s,e.r1i),o=wi(e.g0s,e.g0i),a=wi(e.g1s,e.g1i),s=wi(e.b0s,e.b0i),c=wi(e.b1s,e.b1i);return Math.min(t,r,o,a,s,c)}var y3=new ye({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gl,gamutSpace:"self",fromBase(e){let[t,r,o]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/g0(ga(t))*100,[o,a,t]},toBase(e){let[t,r,o]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=g0(ga(o))/100*r,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),wl=new Bt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:no.toBase,fromBase:no.fromBase}),m0=203,v0=2610/2**14,k3=2**14/2610,E3=2523/2**5,b0=2**5/2523,w0=3424/2**12,_0=2413/2**7,y0=2392/2**7,S3=new Bt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:wl,toBase(e){return e.map(function(t){return(Math.max(t**b0-w0,0)/(_0-y0*t**b0))**k3*1e4/m0})},fromBase(e){return e.map(function(t){let r=Math.max(t*m0/1e4,0);return((w0+_0*r**v0)/(1+y0*r**v0))**E3})}}),k0=.17883277,E0=.28466892,S0=.55991073,_l=3.7743,A3=new Bt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:wl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*_l:(Math.exp((t-S0)/k0)+E0)/12*_l})},fromBase(e){return e.map(function(t){return t/=_l,t<=1/12?kt(3*t,.5):k0*Math.log(12*t-E0)+S0})}}),A0={};hr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=M0(e.W1,e.W2,e.options.method))}),hr.add("chromatic-adaptation-end",e=>{e.M||(e.M=M0(e.W1,e.W2,e.options.method))});function ma({id:e,toCone_M:t,fromCone_M:r}){A0[e]=arguments[0]}function M0(e,t,r="Bradford"){let o=A0[r],[a,s,c]=Xi(o.toCone_M,e),[u,d,h]=Xi(o.toCone_M,t),f=Xi([[u/a,0,0],[0,d/s,0],[0,0,h/c]],o.toCone_M);return Xi(o.fromCone_M,f)}ma({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ma({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ma({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ma({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Wt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Wt.ACES=[.32168/.33767,1,.34065/.33767];var x0=new Bt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Wt.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),va=2**-16,yl=-.35828683,ba=(Math.log2(65504)+9.72)/17.52,M3=new Bt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[yl,ba],name:"Red"},g:{range:[yl,ba],name:"Green"},b:{range:[yl,ba],name:"Blue"}},referred:"scene",base:x0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-va)*2:r<ba?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(va)+9.72)/17.52:t<va?(Math.log2(va+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),I0=Object.freeze({__proto__:null,A98RGB:t3,A98RGB_Linear:Ju,ACEScc:M3,ACEScg:x0,CAM16_JMh:f4,HCT:eo,HPLuv:y3,HSL:Q4,HSLuv:_3,HSV:Xu,HWB:e3,ICTCP:nl,JzCzHz:tl,Jzazbz:pu,LCH:dn,LCHuv:gl,Lab:cn,Lab_D65:ll,Luv:s0,OKLCH:a3,OKLab:$n,OKLrCH:f3,OKLrab:n0,Okhsl:h3,Okhsv:m3,P3:Nu,P3_Linear:Pu,ProPhoto:i3,ProPhoto_Linear:Qu,REC_2020:Ru,REC_2020_Linear:no,REC_2020_Scene_Referred:o3,REC_2100_HLG:A3,REC_2100_Linear:wl,REC_2100_PQ:S3,XYZ_ABS_D65:Qs,XYZ_D50:Ys,XYZ_D65:Pt,sRGB:Vr,sRGB_Linear:$u}),ct=class nn{constructor(...t){let r;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Le(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let o,a,s;r?(o=r.space||r.spaceId,a=r.coords,s=r.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:ye.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=qe(s)?s:s===void 0?1:Qo(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:u=>this.set(c,u)})}get spaceId(){return this.space.id}clone(){return new nn(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=A4(this,...t);return r.color=new nn(r.color),r}static get(t,...r){return ui(t,this)?t:new nn(t,...r)}static try(t,r){if(ui(t,this))return t;let o=Qd(t,r);return o?new nn(o):null}static defineFunction(t,r,o=r){let{instance:a=!0,returns:s}=o,c=function(...u){let d=r(...u);if(s==="color")d=nn.get(d);else if(s==="function<color>"){let h=d;d=function(...f){let b=h(...f);return nn.get(b)},Object.assign(d,h)}else s==="array<color>"&&(d=d.map(h=>nn.get(h)));return d};t in nn||(nn[t]=c),a&&(nn.prototype[t]=function(...u){return c(this,...u)})}static defineFunctions(t){for(let r in t)nn.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(nn);else for(let r in t)nn.defineFunction(r,t[r])}};ct.defineFunctions({get:ln,getAll:Qi,set:Jn,setAll:Ks,to:nt,equals:x4,inGamut:Wr,toGamut:pr,distance:au,deltas:M4,toString:to}),Object.assign(ct,{util:Cv,hooks:hr,WHITES:Wt,Space:ye,spaces:ye.registry,parse:Xd,defaults:sn});for(let e of Object.keys(I0))ye.register(I0[e]);for(let e in ye.registry)kl(e,ye.registry[e]);hr.add("colorspace-init-end",e=>{kl(e.id,e),e.aliases?.forEach(t=>{kl(t,e)})});function kl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ct.prototype,r,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,c)=>{try{return ye.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,u)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:d}=ye.resolveCoord([t,c]);if(d>=0)return s[d]}return Reflect.get(s,c,u)},set:(s,c,u,d)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:h}=ye.resolveCoord([t,c]);if(h>=0)return s[h]=u,this.setAll(e,s),!0}return Reflect.set(s,c,u,d)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}ct.extend(pi),ct.extend({deltaE:ro}),Object.assign(ct,{deltaEMethods:pi}),ct.extend(Y4),ct.extend({contrast:j4}),ct.extend(K4),ct.extend(C4),ct.extend(J4),ct.extend(ca);var El={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Et={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function x3(e){try{ct.get(e)}catch{return!0}return ct.contrast(e,"white","Lstar")>ct.contrast(e,"black","Lstar")}function _i(e){return x3(e)?"#FFFFFF":"#000000"}var I3=Me.default.fromPairs(Me.default.entries(Bs).map(([e,t])=>[e,Bd(t)])),{IconAdjustmentsHorizontal:gS,IconApiBook:mS,IconArrowsHorizontal:vS,IconArrowsLeftRight:bS,IconArrowAutofitDown:wS,IconArrowAutofitHeight:C3,IconArrowAutofitLeft:_S,IconArrowAutofitRight:yS,IconArrowAutofitWidth:O3,IconArrowBigLeft:kS,IconArrowBigRight:ES,IconArrowsMove:SS,IconArrowsMoveVertical:AS,IconArrowsVertical:MS,IconBook:xS,IconBookOff:IS,IconBookArrowLeft:CS,IconBookArrowRight:OS,IconBooksReturn:TS,IconBookUpload:LS,IconBookmark:T3,IconBookmarkOff:L3,IconBookmarks:RS,IconBoxAlignTop:PS,IconCategory:R3,IconCheck:wa,IconChevronLeft:$S,IconChevronRight:DS,IconAlertCircle:zS,IconCircleCheck:BS,IconCircleX:NS,IconHelp:HS,IconInfoCircle:FS,IconComic1:GS,IconComic1Flat:WS,IconComic2:US,IconComic2Flat:VS,IconComic3:ZS,IconComic3Flat:jS,IconDeviceFloppy:qS,IconDotsVertical:KS,IconEReader1:YS,IconEReader1Flat:XS,IconEReader2:JS,IconEReader2Flat:QS,IconExternalLink:eA,IconEye:P3,IconEyeOff:$3,IconFileDownload:tA,IconFilePercent:nA,IconFolderOpen:rA,IconHandClick:iA,IconKeyboard:oA,IconLayoutDashboard:aA,IconLayoutBottombar:sA,IconLayoutBottombarInactive:lA,IconLayoutSidebar:cA,IconLayoutSidebarInactive:dA,IconLayoutSidebarRight:uA,IconLayoutSidebarRightInactive:hA,IconListNumbers:fA,IconLoader2:pA,IconLocationCog:gA,IconMenu2:mA,IconMenuDeep:vA,IconMessage:bA,IconMoon:wA,IconPage:_A,IconPageFlat:yA,IconPalette:kA,IconPencil:EA,IconPencilCog:SA,IconPhoto:AA,IconPhotoOff:MA,IconPin:xA,IconPlayerPause:IA,IconPlayerPlay:CA,IconRefresh:D3,IconSettings:OA,IconSettingsOff:TA,IconSpacingHorizontal:z3,IconSpacingVertical:LA,IconSun:RA,IconTrash:PA,IconWorldCog:$A,IconX:Sl,IconZoom:DA,IconZoomCancel:B3,IconZoomIn:N3,IconZoomInArea:zA,IconZoomOut:H3,IconZoomOutArea:BA,IconZoomPan:NA}=I3,mr=class extends Je{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Tt`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=_i(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return se`
      <div style=${Wn(t)}>
        <div
          class="swatch"
          style=${Wn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${wa} </span>
        </div>
      </div>
    `}};H([te({type:String})],mr.prototype,"color",void 0),H([te({type:String})],mr.prototype,"selected",void 0),H([te({type:Number})],mr.prototype,"size",void 0),H([te({type:String})],mr.prototype,"radius",void 0),H([te({state:!0})],mr.prototype,"contrastColor",void 0),H([te({type:Boolean,reflect:!0})],mr.prototype,"checked",void 0),mr=H([st("color-swatch")],mr);function F3(e){const[t,r,o]=e.to("oklch").coords.map(d=>d??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(d=>new ct("oklch",[d,r,o]).toString({format:"hex"}));let c=-1,u=1/0;for(let d=0;d<a.length;d++){const h=Math.abs(a[d]-t);h<u&&(u=h,c=d)}return c!==-1&&(s[c]=e.toString({format:"hex"})),s.map(d=>d.toUpperCase())}function G3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const c=s.coords[1]??0;a>.8?s.coords[1]=c*.4:a>.6?s.coords[1]=c*.8:a<.3&&(s.coords[1]=Math.min(100,c*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function W3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of r){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function U3(e){const t=new Array(11).fill(""),r=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(o.lightest.lightness-50)/a,u=(50-o.darkest.lightness)/s,d=o.lightest.rotate/a,h=o.darkest.rotate/s,f=o.lightest.saturate/a,b=o.darkest.saturate/s;for(let v=1;v<=a;v++){const m=a-v,g=r.clone();g.coords[2]=(g.coords[2]??0)+c*(v-.5),g.coords[0]=(g.coords[0]??0)+d*v,g.coords[1]=(g.coords[1]??0)+f*v,t[m]=g.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let v=1;v<=s;v++){const m=a+v,g=r.clone();g.coords[2]=(g.coords[2]??0)-u*(v-.5),g.coords[0]=(g.coords[0]??0)+h*v,g.coords[1]=(g.coords[1]??0)+b*v,t[m]=g.toString({format:"hex"})}return t}function V3(e){const[t,r,o]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,u=o+(100-o)*c;a[s]=new ct("hsl",[t,r-r*c,u]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,u=o-o*c,d=r+(100-r)*c;a[s+6]=new ct("hsl",[t,d,u]).toString({format:"hex"})}return a}function C0(e,t="steps"){let r;try{r=ct.get(e)}catch{r=ct.get(El.navy)}switch(t){case"saturation":return G3(r);case"lightness":return W3(r);case"mantine":return V3(r);case"chakra":return U3(r);default:return F3(r)}}var vr=class extends Je{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Tt`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=C0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return se`
      ${this.gradient.map(t=>se`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${_i(t)}"
            >
              <span class="checkmark">${wa}</span>
            </div>
          </div>
        `)}
    `}};H([te({type:String})],vr.prototype,"baseColor",void 0),H([te({type:String})],vr.prototype,"mode",void 0),H([te({type:String,reflect:!0})],vr.prototype,"orientation",void 0),H([te({type:String})],vr.prototype,"selected",void 0),H([te({type:String,reflect:!0})],vr.prototype,"value",void 0),H([rn()],vr.prototype,"gradient",void 0),vr=H([st("color-palette")],vr);var _a=class extends Je{constructor(...t){super(...t),this.value=""}static{this.styles=Tt`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=Me.default.keys(Et).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),r=[200,300,400,500,600,700,800,900,950];return t.map(o=>se` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${r.map(a=>{const s=Et[o][a],c=_i(s);return se`
          <span
            title="${s}"
            class="${St({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${c}"
            @click=${this.handleColorClick}
          >
            ${wa}
          </span>
        `})}</div>
      </div>`)}};H([te({type:String,reflect:!0})],_a.prototype,"value",void 0),H([te({type:String})],_a.prototype,"selected",void 0),_a=H([st("color-panel")],_a);var Dt=class extends Je{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Tt`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+r>o.right?t.right-r>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:ct.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return se`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Wn({stroke:_i(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new ct("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return se`
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
          style=${Wn(o)}
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
        ${(this.swatches||Me.default.entries(Et).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>se`
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
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?se`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Wn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?se`<div class=${St(t)}>${r}</div>`:""}
      `:se`<div class=${St(t)}>${r}</div>`}parseColor(t){try{return ct.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,o,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:o,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const o=this.colorToHsv(r);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new ct("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=r.to("srgb").toString({format:"hex"}):o=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=r.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),c=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};H([te({type:String})],Dt.prototype,"value",void 0),H([te({type:String,attribute:"default-value"})],Dt.prototype,"defaultValue",void 0),H([te({type:String})],Dt.prototype,"label",void 0),H([te({type:String})],Dt.prototype,"hint",void 0),H([te({type:String})],Dt.prototype,"name",void 0),H([te({type:Boolean,reflect:!0})],Dt.prototype,"disabled",void 0),H([te({type:String,reflect:!0})],Dt.prototype,"size",void 0),H([te({type:Array})],Dt.prototype,"swatches",void 0),H([te({type:String})],Dt.prototype,"mode",void 0),H([rn()],Dt.prototype,"opened",void 0),H([rn()],Dt.prototype,"popupDirection",void 0),H([rn()],Dt.prototype,"sourceSpace",void 0),H([rn()],Dt.prototype,"hsv",void 0),H([rn()],Dt.prototype,"saturationThumbPosition",void 0),H([rn()],Dt.prototype,"hueThumbPosition",void 0),Dt=H([st("mov-color-picker")],Dt);var O0=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()},br=class extends Je{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Tt`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),u=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${u}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return se`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>se`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:De}"
            >
              <button
                class="${St({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?se`<mov-icon
                      name="${t.icon}"
                      .size=${O0(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:De}
                ${this.labelPosition!=="tooltip"?se`<span>${t.label}</span>`:De}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};H([te({type:String,reflect:!0})],br.prototype,"value",void 0),H([te({type:String})],br.prototype,"labelPosition",void 0),H([te({type:String})],br.prototype,"size",void 0),H([rn()],br.prototype,"_options",void 0),H([Nr(".thumb")],br.prototype,"thumb",void 0),H([Nr("slot")],br.prototype,"_slotEl",void 0),br=H([st("segmented-control")],br);var lo=class extends Je{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};H([te({type:String,reflect:!0})],lo.prototype,"value",void 0),H([te({type:String,reflect:!0})],lo.prototype,"label",void 0),H([te({type:String,reflect:!0})],lo.prototype,"icon",void 0),lo=H([st("segmented-control-option")],lo);var un=class extends Je{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Tt`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=se`${this.checked?wa:Sl}`:r=se`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,se`
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
    `}};H([te({type:String})],un.prototype,"name",void 0),H([te({type:String})],un.prototype,"value",void 0),H([te({type:Boolean,reflect:!0})],un.prototype,"checked",void 0),H([te({type:Boolean,reflect:!0,attribute:"default-checked"})],un.prototype,"defaultChecked",void 0),H([te({type:Boolean,reflect:!0})],un.prototype,"disabled",void 0),H([te({type:Boolean,reflect:!0})],un.prototype,"required",void 0),H([te({type:String,reflect:!0})],un.prototype,"size",void 0),H([te({type:String})],un.prototype,"hint",void 0),H([te({type:String,reflect:!0})],un.prototype,"design",void 0),H([te({type:String})],un.prototype,"textOn",void 0),H([te({type:String})],un.prototype,"textOff",void 0),un=H([st("mov-switch")],un);var Z3=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),j3=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=Z3();function r(u){return t.relativeFirstCharacters.indexOf(u[0])>-1}function o(u){return u.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(d,h){return String.fromCharCode(h)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function c(u){if(!u)return t.BLANK_URL;var d,h=s(u.trim());do h=o(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),d=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(d&&d.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var b=f.trimStart(),v=b.match(t.urlSchemeRegex);if(!v)return f;var m=v[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var g=b.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return g;if(m==="http:"||m==="https:"){if(!a(g))return t.BLANK_URL;var k=new URL(g);return k.protocol=k.protocol.toLowerCase(),k.hostname=k.hostname.toLowerCase(),k.toString()}return g}})),q3=wn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define([],o):typeof e<"u"?o():(o(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function o(h,f,b){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){d(v.response,f,b)},v.onerror=function(){console.error("could not download file")},v.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,u=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(h,f,b){var v=c.URL||c.webkitURL,m=document.createElement("a");f=f||h.name||"download",m.download=f,m.rel="noopener",typeof h=="string"?(m.href=h,m.origin===location.origin?s(m):a(m.href)?o(h,f,b):s(m,m.target="_blank")):(m.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,b){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,b),f);else if(a(h))o(h,f,b);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){s(v)})}}:function(h,f,b,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return o(h,f,b);var m=h.type==="application/octet-stream",g=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||m&&g||u)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var T=y.result;T=k?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=T:location=T,v=null},y.readAsDataURL(h)}else{var S=c.URL||c.webkitURL,M=S.createObjectURL(h);v?v.location=M:location.href=M,v=null,setTimeout(function(){S.revokeObjectURL(M)},4e4)}});c.saveAs=d.saveAs=d,typeof t<"u"&&(t.exports=d)})})),K3=wn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(o,a,s){function c(h,f){if(!a[h]){if(!o[h]){var b=typeof require=="function"&&require;if(!f&&b)return b(h,!0);if(u)return u(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var m=a[h]={exports:{}};o[h][0].call(m.exports,function(g){var k=o[h][1][g];return c(k||g)},m,m.exports,r,o,a,s)}return a[h].exports}for(var u=typeof require=="function"&&require,d=0;d<s.length;d++)c(s[d]);return c})({1:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(d){for(var h,f,b,v,m,g,k,y=[],S=0,M=d.length,T=M,O=s.getTypeOf(d)!=="string";S<d.length;)T=M-S,b=O?(h=d[S++],f=S<M?d[S++]:0,S<M?d[S++]:0):(h=d.charCodeAt(S++),f=S<M?d.charCodeAt(S++):0,S<M?d.charCodeAt(S++):0),v=h>>2,m=(3&h)<<4|f>>4,g=1<T?(15&f)<<2|b>>6:64,k=2<T?63&b:64,y.push(u.charAt(v)+u.charAt(m)+u.charAt(g)+u.charAt(k));return y.join("")},a.decode=function(d){var h,f,b,v,m,g,k=0,y=0,S="data:";if(d.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var M,T=3*(d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(d.charAt(d.length-1)===u.charAt(64)&&T--,d.charAt(d.length-2)===u.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=c.uint8array?new Uint8Array(0|T):new Array(0|T);k<d.length;)h=u.indexOf(d.charAt(k++))<<2|(v=u.indexOf(d.charAt(k++)))>>4,f=(15&v)<<4|(m=u.indexOf(d.charAt(k++)))>>2,b=(3&m)<<6|(g=u.indexOf(d.charAt(k++))),M[y++]=h,m!==64&&(M[y++]=f),g!==64&&(M[y++]=b);return M}},{"./support":30,"./utils":32}],2:[function(r,o,a){"use strict";var s=r("./external"),c=r("./stream/DataWorker"),u=r("./stream/Crc32Probe"),d=r("./stream/DataLengthProbe");function h(f,b,v,m,g){this.compressedSize=f,this.uncompressedSize=b,this.crc32=v,this.compression=m,this.compressedContent=g}h.prototype={getContentWorker:function(){var f=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),b=this;return f.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,b,v){return f.pipe(new u).pipe(new d("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new d("compressedSize")).withStreamInfo("compression",b)},o.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,a){"use strict";var s=r("./utils"),c=(function(){for(var u,d=[],h=0;h<256;h++){u=h;for(var f=0;f<8;f++)u=1&u?3988292384^u>>>1:u>>>1;d[h]=u}return d})();o.exports=function(u,d){return u!==void 0&&u.length?s.getTypeOf(u)!=="string"?(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f[k])];return-1^h})(0|d,u,u.length,0):(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f.charCodeAt(k))];return-1^h})(0|d,u,u.length,0):0}},{"./utils":32}],5:[function(r,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:s}},{lie:37}],7:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=r("pako"),u=r("./utils"),d=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(b,v){d.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=v,this.meta={}}a.magic="\b\0",u.inherits(f,d),f.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(h,b.data),!1)},f.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(v){b.push({data:v,meta:b.meta})}},a.compressWorker=function(b){return new f("Deflate",b)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,a){"use strict";function s(m,g){var k,y="";for(k=0;k<g;k++)y+=String.fromCharCode(255&m),m>>>=8;return y}function c(m,g,k,y,S,M){var T,O,D=m.file,q=m.compression,Z=M!==h.utf8encode,re=u.transformTo("string",M(D.name)),G=u.transformTo("string",h.utf8encode(D.name)),pe=D.comment,we=u.transformTo("string",M(pe)),R=u.transformTo("string",h.utf8encode(pe)),Y=G.length!==D.name.length,E=R.length!==pe.length,J="",xe="",ce="",Ie=D.dir,ie=D.date,Ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!k||(Ae.crc32=m.crc32,Ae.compressedSize=m.compressedSize,Ae.uncompressedSize=m.uncompressedSize);var W=0;g&&(W|=8),Z||!Y&&!E||(W|=2048);var F=0,Ee=0;Ie&&(F|=16),S==="UNIX"?(Ee=798,F|=(function(he,je){var ft=he;return he||(ft=je?16893:33204),(65535&ft)<<16})(D.unixPermissions,Ie)):(Ee=20,F|=(function(he){return 63&(he||0)})(D.dosPermissions)),T=ie.getUTCHours(),T<<=6,T|=ie.getUTCMinutes(),T<<=5,T|=ie.getUTCSeconds()/2,O=ie.getUTCFullYear()-1980,O<<=4,O|=ie.getUTCMonth()+1,O<<=5,O|=ie.getUTCDate(),Y&&(xe=s(1,1)+s(f(re),4)+G,J+="up"+s(xe.length,2)+xe),E&&(ce=s(1,1)+s(f(we),4)+R,J+="uc"+s(ce.length,2)+ce);var ge="";return ge+=`
\0`,ge+=s(W,2),ge+=q.magic,ge+=s(T,2),ge+=s(O,2),ge+=s(Ae.crc32,4),ge+=s(Ae.compressedSize,4),ge+=s(Ae.uncompressedSize,4),ge+=s(re.length,2),ge+=s(J.length,2),{fileRecord:b.LOCAL_FILE_HEADER+ge+re+J,dirRecord:b.CENTRAL_FILE_HEADER+s(Ee,2)+ge+s(we.length,2)+"\0\0\0\0"+s(F,4)+s(y,4)+re+J+we}}var u=r("../utils"),d=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),b=r("../signature");function v(m,g,k,y){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=k,this.encodeFileName=y,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(v,d),v.prototype.push=function(m){var g=m.meta.percent||0,k=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,d.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:k?(g+100*(k-y-1))/k:100}}))},v.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var g=this.streamFiles&&!m.file.dir;if(g){var k=c(m,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(m){this.accumulate=!1;var g=this.streamFiles&&!m.file.dir,k=c(m,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),g)this.push({data:(function(y){return b.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var m=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var k=this.bytesWritten-m,y=(function(S,M,T,O,D){var q=u.transformTo("string",D(O));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(M,4)+s(T,4)+s(q.length,2)+q})(this.dirRecords.length,k,m,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(m){this._sources.push(m);var g=this;return m.on("data",function(k){g.processChunk(k)}),m.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),m.on("error",function(k){g.error(k)}),this},v.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(m){var g=this._sources;if(!d.prototype.error.call(this,m))return!1;for(var k=0;k<g.length;k++)try{g[k].error(m)}catch{}return!0},v.prototype.lock=function(){d.prototype.lock.call(this);for(var m=this._sources,g=0;g<m.length;g++)m[g].lock()},o.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,a){"use strict";var s=r("../compressions"),c=r("./ZipFileWorker");a.generateWorker=function(u,d,h){var f=new c(d.streamFiles,h,d.platform,d.encodeFileName),b=0;try{u.forEach(function(v,m){b++;var g=(function(M,T){var O=M||T,D=s[O];if(!D)throw new Error(O+" is not a valid compression method !");return D})(m.options.compression,d.compression),k=m.options.compressionOptions||d.compressionOptions||{},y=m.dir,S=m.date;m._compressWorker(g,k).withStreamInfo("file",{name:v,dir:y,date:S,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(f)}),f.entriesCount=b}catch(v){f.error(v)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var u in this)typeof this[u]!="function"&&(c[u]=this[u]);return c}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(c,u){return new s().loadAsync(c,u)},s.external=r("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./external"),u=r("./utf8"),d=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function b(v){return new c.Promise(function(m,g){var k=v.decompressed.getContentWorker().pipe(new h);k.on("error",function(y){g(y)}).on("end",function(){k.streamInfo.crc32!==v.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}o.exports=function(v,m){var g=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),f.isNode&&f.isStream(v)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,m.optimizedBinaryString,m.base64).then(function(k){var y=new d(m);return y.load(k),y}).then(function(k){var y=[c.Promise.resolve(k)],S=k.files;if(m.checkCRC32)for(var M=0;M<S.length;M++)y.push(b(S[M]));return c.Promise.all(y)}).then(function(k){for(var y=k.shift(),S=y.files,M=0;M<S.length;M++){var T=S[M],O=T.fileNameStr,D=s.resolve(T.fileNameStr);g.file(D,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:m.createFolders}),T.dir||(g.file(D).unsafeOriginalName=O)}return y.zipComment.length&&(g.comment=y.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../stream/GenericWorker");function u(d,h){c.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(u,c),u.prototype._bindStream=function(d){var h=this;(this._stream=d).pause(),d.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},u.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,a){"use strict";var s=r("readable-stream").Readable;function c(u,d,h){s.call(this,d),this._helper=u;var f=this;u.on("data",function(b,v){f.push(b)||f._helper.pause(),h&&h(v)}).on("error",function(b){f.emit("error",b)}).on("end",function(){f.push(null)})}r("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},o.exports=c},{"../utils":32,"readable-stream":16}],14:[function(r,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,o,a){"use strict";function s(O,D,q){var Z,re=u.getTypeOf(D),G=u.extend(q||{},f);G.date=G.date||new Date,G.compression!==null&&(G.compression=G.compression.toUpperCase()),typeof G.unixPermissions=="string"&&(G.unixPermissions=parseInt(G.unixPermissions,8)),G.unixPermissions&&16384&G.unixPermissions&&(G.dir=!0),G.dosPermissions&&16&G.dosPermissions&&(G.dir=!0),G.dir&&(O=S(O)),G.createFolders&&(Z=y(O))&&M.call(this,Z,!0);var pe=re==="string"&&G.binary===!1&&G.base64===!1;q&&q.binary!==void 0||(G.binary=!pe),(D instanceof b&&D.uncompressedSize===0||G.dir||!D||D.length===0)&&(G.base64=!1,G.binary=!0,D="",G.compression="STORE",re="string");var we=null;we=D instanceof b||D instanceof d?D:g.isNode&&g.isStream(D)?new k(O,D):u.prepareContent(O,D,G.binary,G.optimizedBinaryString,G.base64);var R=new v(O,we,G);this.files[O]=R}var c=r("./utf8"),u=r("./utils"),d=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),b=r("./compressedObject"),v=r("./zipObject"),m=r("./generate"),g=r("./nodejsUtils"),k=r("./nodejs/NodejsStreamInputAdapter"),y=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var D=O.lastIndexOf("/");return 0<D?O.substring(0,D):""},S=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},M=function(O,D){return D=D!==void 0?D:f.createFolders,O=S(O),this.files[O]||s.call(this,O,null,{dir:!0,createFolders:D}),this.files[O]};function T(O){return Object.prototype.toString.call(O)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var D,q,Z;for(D in this.files)Z=this.files[D],(q=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&O(q,Z)},filter:function(O){var D=[];return this.forEach(function(q,Z){O(q,Z)&&D.push(Z)}),D},file:function(O,D,q){if(arguments.length!==1)return O=this.root+O,s.call(this,O,D,q),this;if(T(O)){var Z=O;return this.filter(function(G,pe){return!pe.dir&&Z.test(G)})}var re=this.files[this.root+O];return re&&!re.dir?re:null},folder:function(O){if(!O)return this;if(T(O))return this.filter(function(re,G){return G.dir&&O.test(re)});var D=this.root+O,q=M.call(this,D),Z=this.clone();return Z.root=q.name,Z},remove:function(O){O=this.root+O;var D=this.files[O];if(D||(O.slice(-1)!=="/"&&(O+="/"),D=this.files[O]),D&&!D.dir)delete this.files[O];else for(var q=this.filter(function(re,G){return G.name.slice(0,O.length)===O}),Z=0;Z<q.length;Z++)delete this.files[q[Z].name];return this},generate:function(O){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var D,q={};try{if((q=u.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");u.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var Z=q.comment||this.comment||"";D=m.generateWorker(this,q,Z)}catch(re){(D=new d("error")).error(re)}return new h(D,q.type||"string",q.mimeType)},generateAsync:function(O,D){return this.generateInternalStream(O).accumulate(D)},generateNodeStream:function(O,D){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,a){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,a){"use strict";var s=r("./DataReader");function c(u){s.call(this,u);for(var d=0;d<this.data.length;d++)u[d]=255&u[d]}r("../utils").inherits(c,s),c.prototype.byteAt=function(u){return this.data[this.zero+u]},c.prototype.lastIndexOfSignature=function(u){for(var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===d&&this.data[v+1]===h&&this.data[v+2]===f&&this.data[v+3]===b)return v-this.zero;return-1},c.prototype.readAndCheckSignature=function(u){var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.readData(4);return d===v[0]&&h===v[1]&&f===v[2]&&b===v[3]},c.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},o.exports=c},{"../utils":32,"./DataReader":18}],18:[function(r,o,a){"use strict";var s=r("../utils");function c(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(u){},readInt:function(u){var d,h=0;for(this.checkOffset(u),d=this.index+u-1;d>=this.index;d--)h=(h<<8)+this.byteAt(d);return this.index+=u,h},readString:function(u){return s.transformTo("string",this.readData(u))},readData:function(u){},lastIndexOfSignature:function(u){},readAndCheckSignature:function(u){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},o.exports=c},{"../utils":32}],19:[function(r,o,a){"use strict";var s=r("./Uint8ArrayReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},o.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,a){"use strict";var s=r("./DataReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},c.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},c.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},c.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},o.exports=c},{"../utils":32,"./DataReader":18}],21:[function(r,o,a){"use strict";var s=r("./ArrayReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},o.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../support"),u=r("./ArrayReader"),d=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");o.exports=function(b){var v=s.getTypeOf(b);return s.checkSupport(v),v!=="string"||c.uint8array?v==="nodebuffer"?new h(b):c.uint8array?new f(s.transformTo("uint8array",b)):new u(s.transformTo("array",b)):new d(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../utils");function u(d){s.call(this,"ConvertWorker to "+d),this.destType=d}c.inherits(u,s),u.prototype.processChunk=function(d){this.push({data:c.transformTo(this.destType,d.data),meta:d.meta})},o.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../crc32");function u(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(u,s),u.prototype.processChunk=function(d){this.streamInfo.crc32=c(d.data,this.streamInfo.crc32||0),this.push(d)},o.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function u(d){c.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}s.inherits(u,c),u.prototype.processChunk=function(d){if(d){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+d.data.length}c.prototype.processChunk.call(this,d)},o.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function u(d){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(u,c),u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,h);break;case"uint8array":d=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":d=this.data.slice(this.index,h)}return this.index=h,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,u){return this._listeners[c].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,u){if(this._listeners[c])for(var d=0;d<this._listeners[c].length;d++)this._listeners[c][d].call(this,u)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var u=this;return c.on("data",function(d){u.processChunk(d)}),c.on("end",function(){u.end()}),c.on("error",function(d){u.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,u){return this.extraStreamInfo[c]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},o.exports=s},{}],29:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./ConvertWorker"),u=r("./GenericWorker"),d=r("../base64"),h=r("../support"),f=r("../external"),b=null;if(h.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(g,k){return new f.Promise(function(y,S){var M=[],T=g._internalType,O=g._outputType,D=g._mimeType;g.on("data",function(q,Z){M.push(q),k&&k(Z)}).on("error",function(q){M=[],S(q)}).on("end",function(){try{y((function(q,Z,re){switch(q){case"blob":return s.newBlob(s.transformTo("arraybuffer",Z),re);case"base64":return d.encode(Z);default:return s.transformTo(q,Z)}})(O,(function(q,Z){var re,G=0,pe=null,we=0;for(re=0;re<Z.length;re++)we+=Z[re].length;switch(q){case"string":return Z.join("");case"array":return Array.prototype.concat.apply([],Z);case"uint8array":for(pe=new Uint8Array(we),re=0;re<Z.length;re++)pe.set(Z[re],G),G+=Z[re].length;return pe;case"nodebuffer":return Buffer.concat(Z);default:throw new Error("concat : unsupported type '"+q+"'")}})(T,M),D))}catch(q){S(q)}M=[]}).resume()})}function m(g,k,y){var S=k;switch(k){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=k,this._mimeType=y,s.checkSupport(S),this._worker=g.pipe(new c(S)),g.lock()}catch(M){this._worker=new u("error"),this._worker.error(M)}}m.prototype={accumulate:function(g){return v(this,g)},on:function(g,k){var y=this;return g==="data"?this._worker.on(g,function(S){k.call(y,S.data,S.meta)}):this._worker.on(g,function(){s.delay(k,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},g)}},o.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,a){"use strict";for(var s=r("./utils"),c=r("./support"),u=r("./nodejsUtils"),d=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function b(){d.call(this,"utf-8 decode"),this.leftOver=null}function v(){d.call(this,"utf-8 encode")}a.utf8encode=function(m){return c.nodebuffer?u.newBufferFrom(m,"utf-8"):(function(g){var k,y,S,M,T,O=g.length,D=0;for(M=0;M<O;M++)(64512&(y=g.charCodeAt(M)))==55296&&M+1<O&&(64512&(S=g.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),D+=y<128?1:y<2048?2:y<65536?3:4;for(k=c.uint8array?new Uint8Array(D):new Array(D),M=T=0;T<D;M++)(64512&(y=g.charCodeAt(M)))==55296&&M+1<O&&(64512&(S=g.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),y<128?k[T++]=y:(y<2048?k[T++]=192|y>>>6:(y<65536?k[T++]=224|y>>>12:(k[T++]=240|y>>>18,k[T++]=128|y>>>12&63),k[T++]=128|y>>>6&63),k[T++]=128|63&y);return k})(m)},a.utf8decode=function(m){return c.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(g){var k,y,S,M,T=g.length,O=new Array(2*T);for(k=y=0;k<T;)if((S=g[k++])<128)O[y++]=S;else if(4<(M=h[S]))O[y++]=65533,k+=M-1;else{for(S&=M===2?31:M===3?15:7;1<M&&k<T;)S=S<<6|63&g[k++],M--;1<M?O[y++]=65533:S<65536?O[y++]=S:(S-=65536,O[y++]=55296|S>>10&1023,O[y++]=56320|1023&S)}return O.length!==y&&(O.subarray?O=O.subarray(0,y):O.length=y),s.applyFromCharCode(O)})(m=s.transformTo(c.uint8array?"uint8array":"array",m))},s.inherits(b,d),b.prototype.processChunk=function(m){var g=s.transformTo(c.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var k=g;(g=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),g.set(k,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var y=(function(M,T){var O;for((T=T||M.length)>M.length&&(T=M.length),O=T-1;0<=O&&(192&M[O])==128;)O--;return O<0||O===0?T:O+h[M[O]]>T?O:T})(g),S=g;y!==g.length&&(c.uint8array?(S=g.subarray(0,y),this.leftOver=g.subarray(y,g.length)):(S=g.slice(0,y),this.leftOver=g.slice(y,g.length))),this.push({data:a.utf8decode(S),meta:m.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(v,d),v.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,a){"use strict";var s=r("./support"),c=r("./base64"),u=r("./nodejsUtils"),d=r("set-immediate-shim"),h=r("./external");function f(y){return y}function b(y,S){for(var M=0;M<y.length;++M)S[M]=255&y.charCodeAt(M);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(y),M.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(y,S,M){var T=[],O=0,D=y.length;if(D<=M)return String.fromCharCode.apply(null,y);for(;O<D;)S==="array"||S==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(O,Math.min(O+M,D)))):T.push(String.fromCharCode.apply(null,y.subarray(O,Math.min(O+M,D)))),O+=M;return T.join("")},stringifyByChar:function(y){for(var S="",M=0;M<y.length;M++)S+=String.fromCharCode(y[M]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function m(y){var S=65536,M=a.getTypeOf(y),T=!0;if(M==="uint8array"?T=v.applyCanBeUsed.uint8array:M==="nodebuffer"&&(T=v.applyCanBeUsed.nodebuffer),T)for(;1<S;)try{return v.stringifyByChunk(y,M,S)}catch{S=Math.floor(S/2)}return v.stringifyByChar(y)}function g(y,S){for(var M=0;M<y.length;M++)S[M]=y[M];return S}a.applyFromCharCode=m;var k={};k.string={string:f,array:function(y){return b(y,new Array(y.length))},arraybuffer:function(y){return k.string.uint8array(y).buffer},uint8array:function(y){return b(y,new Uint8Array(y.length))},nodebuffer:function(y){return b(y,u.allocBuffer(y.length))}},k.array={string:m,array:f,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return u.newBufferFrom(y)}},k.arraybuffer={string:function(y){return m(new Uint8Array(y))},array:function(y){return g(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:f,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return u.newBufferFrom(new Uint8Array(y))}},k.uint8array={string:m,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:f,nodebuffer:function(y){return u.newBufferFrom(y)}},k.nodebuffer={string:m,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return k.nodebuffer.uint8array(y).buffer},uint8array:function(y){return g(y,new Uint8Array(y.length))},nodebuffer:f},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),k[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),M=[],T=0;T<S.length;T++){var O=S[T];O==="."||O===""&&T!==0&&T!==S.length-1||(O===".."?M.pop():M.push(O))}return M.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&u.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,M,T="";for(M=0;M<(y||"").length;M++)T+="\\x"+((S=y.charCodeAt(M))<16?"0":"")+S.toString(16).toUpperCase();return T},a.delay=function(y,S,M){d(function(){y.apply(M||null,S||[])})},a.inherits=function(y,S){function M(){}M.prototype=S.prototype,y.prototype=new M},a.extend=function(){var y,S,M={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&M[S]===void 0&&(M[S]=arguments[y][S]);return M},a.prepareContent=function(y,S,M,T,O){return h.Promise.resolve(S).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new h.Promise(function(q,Z){var re=new FileReader;re.onload=function(G){q(G.target.result)},re.onerror=function(G){Z(G.target.error)},re.readAsArrayBuffer(D)}):D}).then(function(D){var q=a.getTypeOf(D);return q?(q==="arraybuffer"?D=a.transformTo("uint8array",D):q==="string"&&(O?D=c.decode(D):M&&T!==!0&&(D=(function(Z){return b(Z,s.uint8array?new Uint8Array(Z.length):new Array(Z.length))})(D))),D):h.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),u=r("./signature"),d=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(b){this.files=[],this.loadOptions=b}f.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(v)+", expected "+c.pretty(b)+")")}},isSignature:function(b,v){var m=this.reader.index;this.reader.setIndex(b);var g=this.reader.readString(4)===v;return this.reader.setIndex(m),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",m=c.transformTo(v,b);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,v,m,g=this.zip64EndOfCentralSize-44;0<g;)b=this.reader.readInt(2),v=this.reader.readInt(4),m=this.reader.readData(v),this.zip64ExtensibleData[b]={id:b,length:v,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,v;for(b=0;b<this.files.length;b++)v=this.files[b],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(b=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var v=b;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var g=v-m;if(0<g)this.isSignature(v,u.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),u=r("./compressedObject"),d=r("./crc32"),h=r("./utf8"),f=r("./compressions"),b=r("./support");function v(m,g){this.options=m,this.loadOptions=g}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var g,k;if(m.skip(22),this.fileNameLength=m.readInt(2),k=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(y){for(var S in f)if(f.hasOwnProperty(S)&&f[S].magic===y)return f[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,g,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var g=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(g),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(m){var g,k,y,S=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<S;)g=m.readInt(2),k=m.readInt(2),y=m.readData(k),this.extraFields[g]={id:g,length:k,value:y};m.setIndex(S)},handleUTF8:function(){var m=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var k=c.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=c.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileName)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileComment)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null}},o.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,a){"use strict";function s(g,k,y){this.name=g,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=k,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var c=r("./stream/StreamHelper"),u=r("./stream/DataWorker"),d=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(g){var k=null,y="string";try{if(!g)throw new Error("No output type specified.");var S=(y=g.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),k=this._decompressWorker();var M=!this._dataBinary;M&&!S&&(k=k.pipe(new d.Utf8EncodeWorker)),!M&&S&&(k=k.pipe(new d.Utf8DecodeWorker))}catch(T){(k=new f("error")).error(T)}return new c(k,y,"")},async:function(g,k){return this.internalStream(g).accumulate(k)},nodeStream:function(g,k){return this.internalStream(g||"nodebuffer").toNodejsStream(k)},_compressWorker:function(g,k){if(this._data instanceof h&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new d.Utf8EncodeWorker)),h.createWorkerFrom(y,g,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new u(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<b.length;m++)s.prototype[b[m]]=v;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,a){(function(s){"use strict";var c,u,d=s.MutationObserver||s.WebKitMutationObserver;if(d){var h=0,f=new d(g),b=s.document.createTextNode("");f.observe(b,{characterData:!0}),c=function(){b.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var k=s.document.createElement("script");k.onreadystatechange=function(){g(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},s.document.documentElement.appendChild(k)}:function(){setTimeout(g,0)};else{var v=new s.MessageChannel;v.port1.onmessage=g,c=function(){v.port2.postMessage(0)}}var m=[];function g(){var k,y;u=!0;for(var S=m.length;S;){for(y=m,m=[],k=-1;++k<S;)y[k]();S=m.length}u=!1}o.exports=function(k){m.push(k)!==1||u||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,a){"use strict";var s=r("immediate");function c(){}var u={},d=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function b(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,S!==c&&k(this,S)}function v(S,M,T){this.promise=S,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function m(S,M,T){s(function(){var O;try{O=M(T)}catch(D){return u.reject(S,D)}O===S?u.reject(S,new TypeError("Cannot resolve promise with itself")):u.resolve(S,O)})}function g(S){var M=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof M=="function")return function(){M.apply(S,arguments)}}function k(S,M){var T=!1;function O(Z){T||(T=!0,u.reject(S,Z))}function D(Z){T||(T=!0,u.resolve(S,Z))}var q=y(function(){M(D,O)});q.status==="error"&&O(q.value)}function y(S,M){var T={};try{T.value=S(M),T.status="success"}catch(O){T.status="error",T.value=O}return T}(o.exports=b).prototype.finally=function(S){if(typeof S!="function")return this;var M=this.constructor;return this.then(function(T){return M.resolve(S()).then(function(){return T})},function(T){return M.resolve(S()).then(function(){throw T})})},b.prototype.catch=function(S){return this.then(null,S)},b.prototype.then=function(S,M){if(typeof S!="function"&&this.state===h||typeof M!="function"&&this.state===d)return this;var T=new this.constructor(c);return this.state!==f?m(T,this.state===h?S:M,this.outcome):this.queue.push(new v(T,S,M)),T},v.prototype.callFulfilled=function(S){u.resolve(this.promise,S)},v.prototype.otherCallFulfilled=function(S){m(this.promise,this.onFulfilled,S)},v.prototype.callRejected=function(S){u.reject(this.promise,S)},v.prototype.otherCallRejected=function(S){m(this.promise,this.onRejected,S)},u.resolve=function(S,M){var T=y(g,M);if(T.status==="error")return u.reject(S,T.value);var O=T.value;if(O)k(S,O);else{S.state=h,S.outcome=M;for(var D=-1,q=S.queue.length;++D<q;)S.queue[D].callFulfilled(M)}return S},u.reject=function(S,M){S.state=d,S.outcome=M;for(var T=-1,O=S.queue.length;++T<O;)S.queue[T].callRejected(M);return S},b.resolve=function(S){return S instanceof this?S:u.resolve(new this(c),S)},b.reject=function(S){var M=new this(c);return u.reject(M,S)},b.all=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,O=!1;if(!T)return this.resolve([]);for(var D=new Array(T),q=0,Z=-1,re=new this(c);++Z<T;)G(S[Z],Z);return re;function G(pe,we){M.resolve(pe).then(function(R){D[we]=R,++q!==T||O||(O=!0,u.resolve(re,D))},function(R){O||(O=!0,u.reject(re,R))})}},b.race=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,O=!1;if(!T)return this.resolve([]);for(var D=-1,q=new this(c);++D<T;)Z=S[D],M.resolve(Z).then(function(re){O||(O=!0,u.resolve(q,re))},function(re){O||(O=!0,u.reject(q,re))});var Z;return q}},{immediate:36}],38:[function(r,o,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,a){"use strict";var s=r("./zlib/deflate"),c=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,b=0,v=-1,m=0,g=8;function k(S){if(!(this instanceof k))return new k(S);this.options=c.assign({level:v,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(T!==b)throw new Error(d[T]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var O;if(O=typeof M.dictionary=="string"?u.string2buf(M.dictionary):f.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(T=s.deflateSetDictionary(this.strm,O))!==b)throw new Error(d[T]);this._dict_set=!0}}function y(S,M){var T=new k(M);if(T.push(S,!0),T.err)throw T.msg||d[T.err];return T.result}k.prototype.push=function(S,M){var T,O,D=this.strm,q=this.options.chunkSize;if(this.ended)return!1;O=M===~~M?M:M===!0?4:0,typeof S=="string"?D.input=u.string2buf(S):f.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new c.Buf8(q),D.next_out=0,D.avail_out=q),(T=s.deflate(D,O))!==1&&T!==b)return this.onEnd(T),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||O!==4&&O!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(c.shrinkBuf(D.output,D.next_out))):this.onData(c.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&T!==1);return O===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===b):O!==2||(this.onEnd(b),!(D.avail_out=0))},k.prototype.onData=function(S){this.chunks.push(S)},k.prototype.onEnd=function(S){S===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=k,a.deflate=y,a.deflateRaw=function(S,M){return(M=M||{}).raw=!0,y(S,M)},a.gzip=function(S,M){return(M=M||{}).gzip=!0,y(S,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,a){"use strict";var s=r("./zlib/inflate"),c=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),b=r("./zlib/gzheader"),v=Object.prototype.toString;function m(k){if(!(this instanceof m))return new m(k);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},k||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||k&&k.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==d.Z_OK)throw new Error(h[S]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function g(k,y){var S=new m(y);if(S.push(k,!0),S.err)throw S.msg||h[S.err];return S.result}m.prototype.push=function(k,y){var S,M,T,O,D,q,Z=this.strm,re=this.options.chunkSize,G=this.options.dictionary,pe=!1;if(this.ended)return!1;M=y===~~y?y:y===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof k=="string"?Z.input=u.binstring2buf(k):v.call(k)==="[object ArrayBuffer]"?Z.input=new Uint8Array(k):Z.input=k,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new c.Buf8(re),Z.next_out=0,Z.avail_out=re),(S=s.inflate(Z,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&G&&(q=typeof G=="string"?u.string2buf(G):v.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,S=s.inflateSetDictionary(this.strm,q)),S===d.Z_BUF_ERROR&&pe===!0&&(S=d.Z_OK,pe=!1),S!==d.Z_STREAM_END&&S!==d.Z_OK)return this.onEnd(S),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&S!==d.Z_STREAM_END&&(Z.avail_in!==0||M!==d.Z_FINISH&&M!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=u.utf8border(Z.output,Z.next_out),O=Z.next_out-T,D=u.buf2string(Z.output,T),Z.next_out=O,Z.avail_out=re-O,O&&c.arraySet(Z.output,Z.output,T,O,0),this.onData(D)):this.onData(c.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(pe=!0)}while((0<Z.avail_in||Z.avail_out===0)&&S!==d.Z_STREAM_END);return S===d.Z_STREAM_END&&(M=d.Z_FINISH),M===d.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===d.Z_OK):M!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(Z.avail_out=0))},m.prototype.onData=function(k){this.chunks.push(k)},m.prototype.onEnd=function(k){k===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},a.Inflate=m,a.inflate=g,a.inflateRaw=function(k,y){return(y=y||{}).raw=!0,g(k,y)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(d){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var b in f)f.hasOwnProperty(b)&&(d[b]=f[b])}}return d},a.shrinkBuf=function(d,h){return d.length===h?d:d.subarray?d.subarray(0,h):(d.length=h,d)};var c={arraySet:function(d,h,f,b,v){if(h.subarray&&d.subarray)d.set(h.subarray(f,f+b),v);else for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){var h,f,b,v,m,g;for(h=b=0,f=d.length;h<f;h++)b+=d[h].length;for(g=new Uint8Array(b),h=v=0,f=d.length;h<f;h++)m=d[h],g.set(m,v),v+=m.length;return g}},u={arraySet:function(d,h,f,b,v){for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){return[].concat.apply([],d)}};a.setTyped=function(d){d?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,u))},a.setTyped(s)},{}],42:[function(r,o,a){"use strict";var s=r("./common"),c=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var d=new s.Buf8(256),h=0;h<256;h++)d[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(b,v){if(v<65537&&(b.subarray&&u||!b.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(b,v));for(var m="",g=0;g<v;g++)m+=String.fromCharCode(b[g]);return m}d[254]=d[254]=1,a.string2buf=function(b){var v,m,g,k,y,S=b.length,M=0;for(k=0;k<S;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),M+=m<128?1:m<2048?2:m<65536?3:4;for(v=new s.Buf8(M),k=y=0;y<M;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),m<128?v[y++]=m:(m<2048?v[y++]=192|m>>>6:(m<65536?v[y++]=224|m>>>12:(v[y++]=240|m>>>18,v[y++]=128|m>>>12&63),v[y++]=128|m>>>6&63),v[y++]=128|63&m);return v},a.buf2binstring=function(b){return f(b,b.length)},a.binstring2buf=function(b){for(var v=new s.Buf8(b.length),m=0,g=v.length;m<g;m++)v[m]=b.charCodeAt(m);return v},a.buf2string=function(b,v){var m,g,k,y,S=v||b.length,M=new Array(2*S);for(m=g=0;m<S;)if((k=b[m++])<128)M[g++]=k;else if(4<(y=d[k]))M[g++]=65533,m+=y-1;else{for(k&=y===2?31:y===3?15:7;1<y&&m<S;)k=k<<6|63&b[m++],y--;1<y?M[g++]=65533:k<65536?M[g++]=k:(k-=65536,M[g++]=55296|k>>10&1023,M[g++]=56320|1023&k)}return f(M,g)},a.utf8border=function(b,v){var m;for((v=v||b.length)>b.length&&(v=b.length),m=v-1;0<=m&&(192&b[m])==128;)m--;return m<0||m===0?v:m+d[b[m]]>v?m:v}},{"./common":41}],43:[function(r,o,a){"use strict";o.exports=function(s,c,u,d){for(var h=65535&s|0,f=s>>>16&65535|0,b=0;u!==0;){for(u-=b=2e3<u?2e3:u;f=f+(h=h+c[d++]|0)|0,--b;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,a){"use strict";var s=(function(){for(var c,u=[],d=0;d<256;d++){c=d;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;u[d]=c}return u})();o.exports=function(c,u,d,h){var f=s,b=h+d;c^=-1;for(var v=h;v<b;v++)c=c>>>8^f[255&(c^u[v])];return-1^c}},{}],46:[function(r,o,a){"use strict";var s,c=r("../utils/common"),u=r("./trees"),d=r("./adler32"),h=r("./crc32"),f=r("./messages"),b=0,v=4,m=0,g=-2,k=-1,y=4,S=2,M=8,T=9,O=286,D=30,q=19,Z=2*O+1,re=15,G=3,pe=258,we=pe+G+1,R=42,Y=113,E=1,J=2,xe=3,ce=4;function Ie(w,X){return w.msg=f[X],X}function ie(w){return(w<<1)-(4<w?9:0)}function Ae(w){for(var X=w.length;0<=--X;)w[X]=0}function W(w){var X=w.state,V=X.pending;V>w.avail_out&&(V=w.avail_out),V!==0&&(c.arraySet(w.output,X.pending_buf,X.pending_out,V,w.next_out),w.next_out+=V,X.pending_out+=V,w.total_out+=V,w.avail_out-=V,X.pending-=V,X.pending===0&&(X.pending_out=0))}function F(w,X){u._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,X),w.block_start=w.strstart,W(w.strm)}function Ee(w,X){w.pending_buf[w.pending++]=X}function ge(w,X){w.pending_buf[w.pending++]=X>>>8&255,w.pending_buf[w.pending++]=255&X}function he(w,X){var V,C,I=w.max_chain_length,z=w.strstart,oe=w.prev_length,ae=w.nice_match,N=w.strstart>w.w_size-we?w.strstart-(w.w_size-we):0,de=w.window,me=w.w_mask,ue=w.prev,ke=w.strstart+pe,Qe=de[z+oe-1],Fe=de[z+oe];w.prev_length>=w.good_match&&(I>>=2),ae>w.lookahead&&(ae=w.lookahead);do if(de[(V=X)+oe]===Fe&&de[V+oe-1]===Qe&&de[V]===de[z]&&de[++V]===de[z+1]){z+=2,V++;do;while(de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&z<ke);if(C=pe-(ke-z),z=ke-pe,oe<C){if(w.match_start=X,ae<=(oe=C))break;Qe=de[z+oe-1],Fe=de[z+oe]}}while((X=ue[X&me])>N&&--I!=0);return oe<=w.lookahead?oe:w.lookahead}function je(w){var X,V,C,I,z,oe,ae,N,de,me,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-we)){for(c.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,X=V=w.hash_size;C=w.head[--X],w.head[X]=ue<=C?C-ue:0,--V;);for(X=V=ue;C=w.prev[--X],w.prev[X]=ue<=C?C-ue:0,--V;);I+=ue}if(w.strm.avail_in===0)break;if(oe=w.strm,ae=w.window,N=w.strstart+w.lookahead,de=I,me=void 0,me=oe.avail_in,de<me&&(me=de),V=me===0?0:(oe.avail_in-=me,c.arraySet(ae,oe.input,oe.next_in,me,N),oe.state.wrap===1?oe.adler=d(oe.adler,ae,me,N):oe.state.wrap===2&&(oe.adler=h(oe.adler,ae,me,N)),oe.next_in+=me,oe.total_in+=me,me),w.lookahead+=V,w.lookahead+w.insert>=G)for(z=w.strstart-w.insert,w.ins_h=w.window[z],w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+G-1])&w.hash_mask,w.prev[z&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=z,z++,w.insert--,!(w.lookahead+w.insert<G)););}while(w.lookahead<we&&w.strm.avail_in!==0)}function ft(w,X){for(var V,C;;){if(w.lookahead<we){if(je(w),w.lookahead<we&&X===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),V!==0&&w.strstart-V<=w.w_size-we&&(w.match_length=he(w,V)),w.match_length>=G)if(C=u._tr_tally(w,w.strstart-w.match_start,w.match_length-G),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=G){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else C=u._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(C&&(F(w,!1),w.strm.avail_out===0))return E}return w.insert=w.strstart<G-1?w.strstart:G-1,X===v?(F(w,!0),w.strm.avail_out===0?xe:ce):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?E:J}function We(w,X){for(var V,C,I;;){if(w.lookahead<we){if(je(w),w.lookahead<we&&X===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=G-1,V!==0&&w.prev_length<w.max_lazy_match&&w.strstart-V<=w.w_size-we&&(w.match_length=he(w,V),w.match_length<=5&&(w.strategy===1||w.match_length===G&&4096<w.strstart-w.match_start)&&(w.match_length=G-1)),w.prev_length>=G&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-G,C=u._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-G),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=G-1,w.strstart++,C&&(F(w,!1),w.strm.avail_out===0))return E}else if(w.match_available){if((C=u._tr_tally(w,0,w.window[w.strstart-1]))&&F(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return E}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(C=u._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<G-1?w.strstart:G-1,X===v?(F(w,!0),w.strm.avail_out===0?xe:ce):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?E:J}function He(w,X,V,C,I){this.good_length=w,this.max_lazy=X,this.nice_length=V,this.max_chain=C,this.func=I}function dt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*Z),this.dyn_dtree=new c.Buf16(2*(2*D+1)),this.bl_tree=new c.Buf16(2*(2*q+1)),Ae(this.dyn_ltree),Ae(this.dyn_dtree),Ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(re+1),this.heap=new c.Buf16(2*O+1),Ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*O+1),Ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function pt(w){var X;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=S,(X=w.state).pending=0,X.pending_out=0,X.wrap<0&&(X.wrap=-X.wrap),X.status=X.wrap?R:Y,w.adler=X.wrap===2?0:1,X.last_flush=b,u._tr_init(X),m):Ie(w,g)}function Ut(w){var X=pt(w);return X===m&&(function(V){V.window_size=2*V.w_size,Ae(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=G-1,V.match_available=0,V.ins_h=0})(w.state),X}function Nt(w,X,V,C,I,z){if(!w)return g;var oe=1;if(X===k&&(X=6),C<0?(oe=0,C=-C):15<C&&(oe=2,C-=16),I<1||T<I||V!==M||C<8||15<C||X<0||9<X||z<0||y<z)return Ie(w,g);C===8&&(C=9);var ae=new dt;return(w.state=ae).strm=w,ae.wrap=oe,ae.gzhead=null,ae.w_bits=C,ae.w_size=1<<ae.w_bits,ae.w_mask=ae.w_size-1,ae.hash_bits=I+7,ae.hash_size=1<<ae.hash_bits,ae.hash_mask=ae.hash_size-1,ae.hash_shift=~~((ae.hash_bits+G-1)/G),ae.window=new c.Buf8(2*ae.w_size),ae.head=new c.Buf16(ae.hash_size),ae.prev=new c.Buf16(ae.w_size),ae.lit_bufsize=1<<I+6,ae.pending_buf_size=4*ae.lit_bufsize,ae.pending_buf=new c.Buf8(ae.pending_buf_size),ae.d_buf=1*ae.lit_bufsize,ae.l_buf=3*ae.lit_bufsize,ae.level=X,ae.strategy=z,ae.method=V,Ut(w)}s=[new He(0,0,0,0,function(w,X){var V=65535;for(V>w.pending_buf_size-5&&(V=w.pending_buf_size-5);;){if(w.lookahead<=1){if(je(w),w.lookahead===0&&X===b)return E;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var C=w.block_start+V;if((w.strstart===0||w.strstart>=C)&&(w.lookahead=w.strstart-C,w.strstart=C,F(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-we&&(F(w,!1),w.strm.avail_out===0))return E}return w.insert=0,X===v?(F(w,!0),w.strm.avail_out===0?xe:ce):(w.strstart>w.block_start&&(F(w,!1),w.strm.avail_out),E)}),new He(4,4,8,4,ft),new He(4,5,16,8,ft),new He(4,6,32,32,ft),new He(4,4,16,16,We),new He(8,16,32,32,We),new He(8,16,128,128,We),new He(8,32,128,256,We),new He(32,128,258,1024,We),new He(32,258,258,4096,We)],a.deflateInit=function(w,X){return Nt(w,X,M,15,8,0)},a.deflateInit2=Nt,a.deflateReset=Ut,a.deflateResetKeep=pt,a.deflateSetHeader=function(w,X){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=X,m):g},a.deflate=function(w,X){var V,C,I,z;if(!w||!w.state||5<X||X<0)return w?Ie(w,g):g;if(C=w.state,!w.output||!w.input&&w.avail_in!==0||C.status===666&&X!==v)return Ie(w,w.avail_out===0?-5:g);if(C.strm=w,V=C.last_flush,C.last_flush=X,C.status===R)if(C.wrap===2)w.adler=0,Ee(C,31),Ee(C,139),Ee(C,8),C.gzhead?(Ee(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),Ee(C,255&C.gzhead.time),Ee(C,C.gzhead.time>>8&255),Ee(C,C.gzhead.time>>16&255),Ee(C,C.gzhead.time>>24&255),Ee(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),Ee(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(Ee(C,255&C.gzhead.extra.length),Ee(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(w.adler=h(w.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(Ee(C,0),Ee(C,0),Ee(C,0),Ee(C,0),Ee(C,0),Ee(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),Ee(C,3),C.status=Y);else{var oe=M+(C.w_bits-8<<4)<<8;oe|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(oe|=32),oe+=31-oe%31,C.status=Y,ge(C,oe),C.strstart!==0&&(ge(C,w.adler>>>16),ge(C,65535&w.adler)),w.adler=1}if(C.status===69)if(C.gzhead.extra){for(I=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending!==C.pending_buf_size));)Ee(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){I=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending===C.pending_buf_size)){z=1;break}z=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,Ee(C,z)}while(z!==0);C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),z===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){I=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending===C.pending_buf_size)){z=1;break}z=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,Ee(C,z)}while(z!==0);C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),z===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&W(w),C.pending+2<=C.pending_buf_size&&(Ee(C,255&w.adler),Ee(C,w.adler>>8&255),w.adler=0,C.status=Y)):C.status=Y),C.pending!==0){if(W(w),w.avail_out===0)return C.last_flush=-1,m}else if(w.avail_in===0&&ie(X)<=ie(V)&&X!==v)return Ie(w,-5);if(C.status===666&&w.avail_in!==0)return Ie(w,-5);if(w.avail_in!==0||C.lookahead!==0||X!==b&&C.status!==666){var ae=C.strategy===2?(function(N,de){for(var me;;){if(N.lookahead===0&&(je(N),N.lookahead===0)){if(de===b)return E;break}if(N.match_length=0,me=u._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,me&&(F(N,!1),N.strm.avail_out===0))return E}return N.insert=0,de===v?(F(N,!0),N.strm.avail_out===0?xe:ce):N.last_lit&&(F(N,!1),N.strm.avail_out===0)?E:J})(C,X):C.strategy===3?(function(N,de){for(var me,ue,ke,Qe,Fe=N.window;;){if(N.lookahead<=pe){if(je(N),N.lookahead<=pe&&de===b)return E;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=G&&0<N.strstart&&(ue=Fe[ke=N.strstart-1])===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]){Qe=N.strstart+pe;do;while(ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ue===Fe[++ke]&&ke<Qe);N.match_length=pe-(Qe-ke),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=G?(me=u._tr_tally(N,1,N.match_length-G),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(me=u._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),me&&(F(N,!1),N.strm.avail_out===0))return E}return N.insert=0,de===v?(F(N,!0),N.strm.avail_out===0?xe:ce):N.last_lit&&(F(N,!1),N.strm.avail_out===0)?E:J})(C,X):s[C.level].func(C,X);if(ae!==xe&&ae!==ce||(C.status=666),ae===E||ae===xe)return w.avail_out===0&&(C.last_flush=-1),m;if(ae===J&&(X===1?u._tr_align(C):X!==5&&(u._tr_stored_block(C,0,0,!1),X===3&&(Ae(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),W(w),w.avail_out===0))return C.last_flush=-1,m}return X!==v?m:C.wrap<=0?1:(C.wrap===2?(Ee(C,255&w.adler),Ee(C,w.adler>>8&255),Ee(C,w.adler>>16&255),Ee(C,w.adler>>24&255),Ee(C,255&w.total_in),Ee(C,w.total_in>>8&255),Ee(C,w.total_in>>16&255),Ee(C,w.total_in>>24&255)):(ge(C,w.adler>>>16),ge(C,65535&w.adler)),W(w),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?m:1)},a.deflateEnd=function(w){var X;return w&&w.state?(X=w.state.status)!==R&&X!==69&&X!==73&&X!==91&&X!==103&&X!==Y&&X!==666?Ie(w,g):(w.state=null,X===Y?Ie(w,-3):m):g},a.deflateSetDictionary=function(w,X){var V,C,I,z,oe,ae,N,de,me=X.length;if(!w||!w.state||(z=(V=w.state).wrap)===2||z===1&&V.status!==R||V.lookahead)return g;for(z===1&&(w.adler=d(w.adler,X,me,0)),V.wrap=0,me>=V.w_size&&(z===0&&(Ae(V.head),V.strstart=0,V.block_start=0,V.insert=0),de=new c.Buf8(V.w_size),c.arraySet(de,X,me-V.w_size,V.w_size,0),X=de,me=V.w_size),oe=w.avail_in,ae=w.next_in,N=w.input,w.avail_in=me,w.next_in=0,w.input=X,je(V);V.lookahead>=G;){for(C=V.strstart,I=V.lookahead-(G-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[C+G-1])&V.hash_mask,V.prev[C&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=C,C++,--I;);V.strstart=C,V.lookahead=G-1,je(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=G-1,V.match_available=0,w.next_in=ae,w.input=N,w.avail_in=oe,V.wrap=z,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,a){"use strict";o.exports=function(s,c){var u=s.state,d=s.next_in,h,f,b,v,m,g,k,y,S,M,T,O,D,q,Z,re,G,pe,we,R,Y,E=s.input,J;h=d+(s.avail_in-5),f=s.next_out,J=s.output,b=f-(c-s.avail_out),v=f+(s.avail_out-257),m=u.dmax,g=u.wsize,k=u.whave,y=u.wnext,S=u.window,M=u.hold,T=u.bits,O=u.lencode,D=u.distcode,q=(1<<u.lenbits)-1,Z=(1<<u.distbits)-1;e:do{T<15&&(M+=E[d++]<<T,T+=8,M+=E[d++]<<T,T+=8),re=O[M&q];t:for(;;){if(M>>>=G=re>>>24,T-=G,(G=re>>>16&255)===0)J[f++]=65535&re;else{if(!(16&G)){if((64&G)==0){re=O[(65535&re)+(M&(1<<G)-1)];continue t}if(32&G){u.mode=12;break e}s.msg="invalid literal/length code",u.mode=30;break e}pe=65535&re,(G&=15)&&(T<G&&(M+=E[d++]<<T,T+=8),pe+=M&(1<<G)-1,M>>>=G,T-=G),T<15&&(M+=E[d++]<<T,T+=8,M+=E[d++]<<T,T+=8),re=D[M&Z];n:for(;;){if(M>>>=G=re>>>24,T-=G,!(16&(G=re>>>16&255))){if((64&G)==0){re=D[(65535&re)+(M&(1<<G)-1)];continue n}s.msg="invalid distance code",u.mode=30;break e}if(we=65535&re,T<(G&=15)&&(M+=E[d++]<<T,(T+=8)<G&&(M+=E[d++]<<T,T+=8)),m<(we+=M&(1<<G)-1)){s.msg="invalid distance too far back",u.mode=30;break e}if(M>>>=G,T-=G,(G=f-b)<we){if(k<(G=we-G)&&u.sane){s.msg="invalid distance too far back",u.mode=30;break e}if(Y=S,(R=0)===y){if(R+=g-G,G<pe){for(pe-=G;J[f++]=S[R++],--G;);R=f-we,Y=J}}else if(y<G){if(R+=g+y-G,(G-=y)<pe){for(pe-=G;J[f++]=S[R++],--G;);if(R=0,y<pe){for(pe-=G=y;J[f++]=S[R++],--G;);R=f-we,Y=J}}}else if(R+=y-G,G<pe){for(pe-=G;J[f++]=S[R++],--G;);R=f-we,Y=J}for(;2<pe;)J[f++]=Y[R++],J[f++]=Y[R++],J[f++]=Y[R++],pe-=3;pe&&(J[f++]=Y[R++],1<pe&&(J[f++]=Y[R++]))}else{for(R=f-we;J[f++]=J[R++],J[f++]=J[R++],J[f++]=J[R++],2<(pe-=3););pe&&(J[f++]=J[R++],1<pe&&(J[f++]=J[R++]))}break}}break}}while(d<h&&f<v);d-=pe=T>>3,M&=(1<<(T-=pe<<3))-1,s.next_in=d,s.next_out=f,s.avail_in=d<h?h-d+5:5-(d-h),s.avail_out=f<v?v-f+257:257-(f-v),u.hold=M,u.bits=T}},{}],49:[function(r,o,a){"use strict";var s=r("../utils/common"),c=r("./adler32"),u=r("./crc32"),d=r("./inffast"),h=r("./inftrees"),f=1,b=2,v=0,m=-2,g=1,k=852,y=592;function S(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(R){var Y;return R&&R.state?(Y=R.state,R.total_in=R.total_out=Y.total=0,R.msg="",Y.wrap&&(R.adler=1&Y.wrap),Y.mode=g,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new s.Buf32(k),Y.distcode=Y.distdyn=new s.Buf32(y),Y.sane=1,Y.back=-1,v):m}function O(R){var Y;return R&&R.state?((Y=R.state).wsize=0,Y.whave=0,Y.wnext=0,T(R)):m}function D(R,Y){var E,J;return R&&R.state?(J=R.state,Y<0?(E=0,Y=-Y):(E=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?m:(J.window!==null&&J.wbits!==Y&&(J.window=null),J.wrap=E,J.wbits=Y,O(R))):m}function q(R,Y){var E,J;return R?(J=new M,(R.state=J).window=null,(E=D(R,Y))!==v&&(R.state=null),E):m}var Z,re,G=!0;function pe(R){if(G){var Y;for(Z=new s.Buf32(512),re=new s.Buf32(32),Y=0;Y<144;)R.lens[Y++]=8;for(;Y<256;)R.lens[Y++]=9;for(;Y<280;)R.lens[Y++]=7;for(;Y<288;)R.lens[Y++]=8;for(h(f,R.lens,0,288,Z,0,R.work,{bits:9}),Y=0;Y<32;)R.lens[Y++]=5;h(b,R.lens,0,32,re,0,R.work,{bits:5}),G=!1}R.lencode=Z,R.lenbits=9,R.distcode=re,R.distbits=5}function we(R,Y,E,J){var xe,ce=R.state;return ce.window===null&&(ce.wsize=1<<ce.wbits,ce.wnext=0,ce.whave=0,ce.window=new s.Buf8(ce.wsize)),J>=ce.wsize?(s.arraySet(ce.window,Y,E-ce.wsize,ce.wsize,0),ce.wnext=0,ce.whave=ce.wsize):(J<(xe=ce.wsize-ce.wnext)&&(xe=J),s.arraySet(ce.window,Y,E-J,xe,ce.wnext),(J-=xe)?(s.arraySet(ce.window,Y,E-J,J,0),ce.wnext=J,ce.whave=ce.wsize):(ce.wnext+=xe,ce.wnext===ce.wsize&&(ce.wnext=0),ce.whave<ce.wsize&&(ce.whave+=xe))),0}a.inflateReset=O,a.inflateReset2=D,a.inflateResetKeep=T,a.inflateInit=function(R){return q(R,15)},a.inflateInit2=q,a.inflate=function(R,Y){var E,J,xe,ce,Ie,ie,Ae,W,F,Ee,ge,he,je,ft,We,He,dt,pt,Ut,Nt,w,X,V,C,I=0,z=new s.Buf8(4),oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return m;(E=R.state).mode===12&&(E.mode=13),Ie=R.next_out,xe=R.output,Ae=R.avail_out,ce=R.next_in,J=R.input,ie=R.avail_in,W=E.hold,F=E.bits,Ee=ie,ge=Ae,X=v;e:for(;;)switch(E.mode){case g:if(E.wrap===0){E.mode=13;break}for(;F<16;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(2&E.wrap&&W===35615){z[E.check=0]=255&W,z[1]=W>>>8&255,E.check=u(E.check,z,2,0),F=W=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&W)<<8)+(W>>8))%31){R.msg="incorrect header check",E.mode=30;break}if((15&W)!=8){R.msg="unknown compression method",E.mode=30;break}if(F-=4,w=8+(15&(W>>>=4)),E.wbits===0)E.wbits=w;else if(w>E.wbits){R.msg="invalid window size",E.mode=30;break}E.dmax=1<<w,R.adler=E.check=1,E.mode=512&W?10:12,F=W=0;break;case 2:for(;F<16;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(E.flags=W,(255&E.flags)!=8){R.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){R.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=W>>8&1),512&E.flags&&(z[0]=255&W,z[1]=W>>>8&255,E.check=u(E.check,z,2,0)),F=W=0,E.mode=3;case 3:for(;F<32;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.head&&(E.head.time=W),512&E.flags&&(z[0]=255&W,z[1]=W>>>8&255,z[2]=W>>>16&255,z[3]=W>>>24&255,E.check=u(E.check,z,4,0)),F=W=0,E.mode=4;case 4:for(;F<16;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.head&&(E.head.xflags=255&W,E.head.os=W>>8),512&E.flags&&(z[0]=255&W,z[1]=W>>>8&255,E.check=u(E.check,z,2,0)),F=W=0,E.mode=5;case 5:if(1024&E.flags){for(;F<16;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.length=W,E.head&&(E.head.extra_len=W),512&E.flags&&(z[0]=255&W,z[1]=W>>>8&255,E.check=u(E.check,z,2,0)),F=W=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(ie<(he=E.length)&&(he=ie),he&&(E.head&&(w=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,J,ce,he,w)),512&E.flags&&(E.check=u(E.check,J,he,ce)),ie-=he,ce+=he,E.length-=he),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(ie===0)break e;for(he=0;w=J[ce+he++],E.head&&w&&E.length<65536&&(E.head.name+=String.fromCharCode(w)),w&&he<ie;);if(512&E.flags&&(E.check=u(E.check,J,he,ce)),ie-=he,ce+=he,w)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(ie===0)break e;for(he=0;w=J[ce+he++],E.head&&w&&E.length<65536&&(E.head.comment+=String.fromCharCode(w)),w&&he<ie;);if(512&E.flags&&(E.check=u(E.check,J,he,ce)),ie-=he,ce+=he,w)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;F<16;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(W!==(65535&E.check)){R.msg="header crc mismatch",E.mode=30;break}F=W=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),R.adler=E.check=0,E.mode=12;break;case 10:for(;F<32;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}R.adler=E.check=S(W),F=W=0,E.mode=11;case 11:if(E.havedict===0)return R.next_out=Ie,R.avail_out=Ae,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,2;R.adler=E.check=1,E.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(E.last){W>>>=7&F,F-=7&F,E.mode=27;break}for(;F<3;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}switch(E.last=1&W,F-=1,3&(W>>>=1)){case 0:E.mode=14;break;case 1:if(pe(E),E.mode=20,Y!==6)break;W>>>=2,F-=2;break e;case 2:E.mode=17;break;case 3:R.msg="invalid block type",E.mode=30}W>>>=2,F-=2;break;case 14:for(W>>>=7&F,F-=7&F;F<32;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if((65535&W)!=(W>>>16^65535)){R.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&W,F=W=0,E.mode=15,Y===6)break e;case 15:E.mode=16;case 16:if(he=E.length){if(ie<he&&(he=ie),Ae<he&&(he=Ae),he===0)break e;s.arraySet(xe,J,ce,he,Ie),ie-=he,ce+=he,Ae-=he,Ie+=he,E.length-=he;break}E.mode=12;break;case 17:for(;F<14;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(E.nlen=257+(31&W),W>>>=5,F-=5,E.ndist=1+(31&W),W>>>=5,F-=5,E.ncode=4+(15&W),W>>>=4,F-=4,286<E.nlen||30<E.ndist){R.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;F<3;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.lens[oe[E.have++]]=7&W,W>>>=3,F-=3}for(;E.have<19;)E.lens[oe[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,V={bits:E.lenbits},X=h(0,E.lens,0,19,E.lencode,0,E.work,V),E.lenbits=V.bits,X){R.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;He=(I=E.lencode[W&(1<<E.lenbits)-1])>>>16&255,dt=65535&I,!((We=I>>>24)<=F);){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(dt<16)W>>>=We,F-=We,E.lens[E.have++]=dt;else{if(dt===16){for(C=We+2;F<C;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(W>>>=We,F-=We,E.have===0){R.msg="invalid bit length repeat",E.mode=30;break}w=E.lens[E.have-1],he=3+(3&W),W>>>=2,F-=2}else if(dt===17){for(C=We+3;F<C;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}F-=We,w=0,he=3+(7&(W>>>=We)),W>>>=3,F-=3}else{for(C=We+7;F<C;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}F-=We,w=0,he=11+(127&(W>>>=We)),W>>>=7,F-=7}if(E.have+he>E.nlen+E.ndist){R.msg="invalid bit length repeat",E.mode=30;break}for(;he--;)E.lens[E.have++]=w}}if(E.mode===30)break;if(E.lens[256]===0){R.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,V={bits:E.lenbits},X=h(f,E.lens,0,E.nlen,E.lencode,0,E.work,V),E.lenbits=V.bits,X){R.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,V={bits:E.distbits},X=h(b,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,V),E.distbits=V.bits,X){R.msg="invalid distances set",E.mode=30;break}if(E.mode=20,Y===6)break e;case 20:E.mode=21;case 21:if(6<=ie&&258<=Ae){R.next_out=Ie,R.avail_out=Ae,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,d(R,ge),Ie=R.next_out,xe=R.output,Ae=R.avail_out,ce=R.next_in,J=R.input,ie=R.avail_in,W=E.hold,F=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;He=(I=E.lencode[W&(1<<E.lenbits)-1])>>>16&255,dt=65535&I,!((We=I>>>24)<=F);){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(He&&(240&He)==0){for(pt=We,Ut=He,Nt=dt;He=(I=E.lencode[Nt+((W&(1<<pt+Ut)-1)>>pt)])>>>16&255,dt=65535&I,!(pt+(We=I>>>24)<=F);){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}W>>>=pt,F-=pt,E.back+=pt}if(W>>>=We,F-=We,E.back+=We,E.length=dt,He===0){E.mode=26;break}if(32&He){E.back=-1,E.mode=12;break}if(64&He){R.msg="invalid literal/length code",E.mode=30;break}E.extra=15&He,E.mode=22;case 22:if(E.extra){for(C=E.extra;F<C;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.length+=W&(1<<E.extra)-1,W>>>=E.extra,F-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;He=(I=E.distcode[W&(1<<E.distbits)-1])>>>16&255,dt=65535&I,!((We=I>>>24)<=F);){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if((240&He)==0){for(pt=We,Ut=He,Nt=dt;He=(I=E.distcode[Nt+((W&(1<<pt+Ut)-1)>>pt)])>>>16&255,dt=65535&I,!(pt+(We=I>>>24)<=F);){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}W>>>=pt,F-=pt,E.back+=pt}if(W>>>=We,F-=We,E.back+=We,64&He){R.msg="invalid distance code",E.mode=30;break}E.offset=dt,E.extra=15&He,E.mode=24;case 24:if(E.extra){for(C=E.extra;F<C;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}E.offset+=W&(1<<E.extra)-1,W>>>=E.extra,F-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){R.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(Ae===0)break e;if(he=ge-Ae,E.offset>he){if((he=E.offset-he)>E.whave&&E.sane){R.msg="invalid distance too far back",E.mode=30;break}je=he>E.wnext?(he-=E.wnext,E.wsize-he):E.wnext-he,he>E.length&&(he=E.length),ft=E.window}else ft=xe,je=Ie-E.offset,he=E.length;for(Ae<he&&(he=Ae),Ae-=he,E.length-=he;xe[Ie++]=ft[je++],--he;);E.length===0&&(E.mode=21);break;case 26:if(Ae===0)break e;xe[Ie++]=E.length,Ae--,E.mode=21;break;case 27:if(E.wrap){for(;F<32;){if(ie===0)break e;ie--,W|=J[ce++]<<F,F+=8}if(ge-=Ae,R.total_out+=ge,E.total+=ge,ge&&(R.adler=E.check=E.flags?u(E.check,xe,ge,Ie-ge):c(E.check,xe,ge,Ie-ge)),ge=Ae,(E.flags?W:S(W))!==E.check){R.msg="incorrect data check",E.mode=30;break}F=W=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;F<32;){if(ie===0)break e;ie--,W+=J[ce++]<<F,F+=8}if(W!==(4294967295&E.total)){R.msg="incorrect length check",E.mode=30;break}F=W=0}E.mode=29;case 29:X=1;break e;case 30:X=-3;break e;case 31:return-4;default:return m}return R.next_out=Ie,R.avail_out=Ae,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,(E.wsize||ge!==R.avail_out&&E.mode<30&&(E.mode<27||Y!==4))&&we(R,R.output,R.next_out,ge-R.avail_out)?(E.mode=31,-4):(Ee-=R.avail_in,ge-=R.avail_out,R.total_in+=Ee,R.total_out+=ge,E.total+=ge,E.wrap&&ge&&(R.adler=E.check=E.flags?u(E.check,xe,ge,R.next_out-ge):c(E.check,xe,ge,R.next_out-ge)),R.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(Ee==0&&ge===0||Y===4)&&X===v&&(X=-5),X)},a.inflateEnd=function(R){if(!R||!R.state)return m;var Y=R.state;return Y.window&&(Y.window=null),R.state=null,v},a.inflateGetHeader=function(R,Y){var E;return R&&R.state?(2&(E=R.state).wrap)==0?m:((E.head=Y).done=!1,v):m},a.inflateSetDictionary=function(R,Y){var E,J=Y.length;return R&&R.state?(E=R.state).wrap!==0&&E.mode!==11?m:E.mode===11&&c(1,Y,J,0)!==E.check?-3:we(R,Y,J,J)?(E.mode=31,-4):(E.havedict=1,v):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,a){"use strict";var s=r("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(f,b,v,m,g,k,y,S){var M,T,O,D,q,Z,re,G,pe,we=S.bits,R=0,Y=0,E=0,J=0,xe=0,ce=0,Ie=0,ie=0,Ae=0,W=0,F=null,Ee=0,ge=new s.Buf16(16),he=new s.Buf16(16),je=null,ft=0;for(R=0;R<=15;R++)ge[R]=0;for(Y=0;Y<m;Y++)ge[b[v+Y]]++;for(xe=we,J=15;1<=J&&ge[J]===0;J--);if(J<xe&&(xe=J),J===0)return g[k++]=20971520,g[k++]=20971520,S.bits=1,0;for(E=1;E<J&&ge[E]===0;E++);for(xe<E&&(xe=E),R=ie=1;R<=15;R++)if(ie<<=1,(ie-=ge[R])<0)return-1;if(0<ie&&(f===0||J!==1))return-1;for(he[1]=0,R=1;R<15;R++)he[R+1]=he[R]+ge[R];for(Y=0;Y<m;Y++)b[v+Y]!==0&&(y[he[b[v+Y]]++]=Y);if(Z=f===0?(F=je=y,19):f===1?(F=c,Ee-=257,je=u,ft-=257,256):(F=d,je=h,-1),R=E,q=k,Ie=Y=W=0,O=-1,D=(Ae=1<<(ce=xe))-1,f===1&&852<Ae||f===2&&592<Ae)return 1;for(;;){for(re=R-Ie,pe=y[Y]<Z?(G=0,y[Y]):y[Y]>Z?(G=je[ft+y[Y]],F[Ee+y[Y]]):(G=96,0),M=1<<R-Ie,E=T=1<<ce;g[q+(W>>Ie)+(T-=M)]=re<<24|G<<16|pe|0,T!==0;);for(M=1<<R-1;W&M;)M>>=1;if(M!==0?(W&=M-1,W+=M):W=0,Y++,--ge[R]==0){if(R===J)break;R=b[v+y[Y]]}if(xe<R&&(W&D)!==O){for(Ie===0&&(Ie=xe),q+=E,ie=1<<(ce=R-Ie);ce+Ie<J&&!((ie-=ge[ce+Ie])<=0);)ce++,ie<<=1;if(Ae+=1<<ce,f===1&&852<Ae||f===2&&592<Ae)return 1;g[O=W&D]=xe<<24|ce<<16|q-k|0}}return W!==0&&(g[q+W]=R-Ie<<24|4194304),S.bits=xe,0}},{"../utils/common":41}],51:[function(r,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,a){"use strict";var s=r("../utils/common"),c=0,u=1;function d(I){for(var z=I.length;0<=--z;)I[z]=0}var h=0,f=29,b=256,v=b+1+f,m=30,g=19,k=2*v+1,y=15,S=16,M=7,T=256,O=16,D=17,q=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],re=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(v+2));d(we);var R=new Array(2*m);d(R);var Y=new Array(512);d(Y);var E=new Array(256);d(E);var J=new Array(f);d(J);var xe,ce,Ie,ie=new Array(m);function Ae(I,z,oe,ae,N){this.static_tree=I,this.extra_bits=z,this.extra_base=oe,this.elems=ae,this.max_length=N,this.has_stree=I&&I.length}function W(I,z){this.dyn_tree=I,this.max_code=0,this.stat_desc=z}function F(I){return I<256?Y[I]:Y[256+(I>>>7)]}function Ee(I,z){I.pending_buf[I.pending++]=255&z,I.pending_buf[I.pending++]=z>>>8&255}function ge(I,z,oe){I.bi_valid>S-oe?(I.bi_buf|=z<<I.bi_valid&65535,Ee(I,I.bi_buf),I.bi_buf=z>>S-I.bi_valid,I.bi_valid+=oe-S):(I.bi_buf|=z<<I.bi_valid&65535,I.bi_valid+=oe)}function he(I,z,oe){ge(I,oe[2*z],oe[2*z+1])}function je(I,z){for(var oe=0;oe|=1&I,I>>>=1,oe<<=1,0<--z;);return oe>>>1}function ft(I,z,oe){var ae,N,de=new Array(y+1),me=0;for(ae=1;ae<=y;ae++)de[ae]=me=me+oe[ae-1]<<1;for(N=0;N<=z;N++){var ue=I[2*N+1];ue!==0&&(I[2*N]=je(de[ue]++,ue))}}function We(I){var z;for(z=0;z<v;z++)I.dyn_ltree[2*z]=0;for(z=0;z<m;z++)I.dyn_dtree[2*z]=0;for(z=0;z<g;z++)I.bl_tree[2*z]=0;I.dyn_ltree[2*T]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function He(I){8<I.bi_valid?Ee(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function dt(I,z,oe,ae){var N=2*z,de=2*oe;return I[N]<I[de]||I[N]===I[de]&&ae[z]<=ae[oe]}function pt(I,z,oe){for(var ae=I.heap[oe],N=oe<<1;N<=I.heap_len&&(N<I.heap_len&&dt(z,I.heap[N+1],I.heap[N],I.depth)&&N++,!dt(z,ae,I.heap[N],I.depth));)I.heap[oe]=I.heap[N],oe=N,N<<=1;I.heap[oe]=ae}function Ut(I,z,oe){var ae,N,de,me,ue=0;if(I.last_lit!==0)for(;ae=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],N=I.pending_buf[I.l_buf+ue],ue++,ae===0?he(I,N,z):(he(I,(de=E[N])+b+1,z),(me=Z[de])!==0&&ge(I,N-=J[de],me),he(I,de=F(--ae),oe),(me=re[de])!==0&&ge(I,ae-=ie[de],me)),ue<I.last_lit;);he(I,T,z)}function Nt(I,z){var oe,ae,N,de=z.dyn_tree,me=z.stat_desc.static_tree,ue=z.stat_desc.has_stree,ke=z.stat_desc.elems,Qe=-1;for(I.heap_len=0,I.heap_max=k,oe=0;oe<ke;oe++)de[2*oe]!==0?(I.heap[++I.heap_len]=Qe=oe,I.depth[oe]=0):de[2*oe+1]=0;for(;I.heap_len<2;)de[2*(N=I.heap[++I.heap_len]=Qe<2?++Qe:0)]=1,I.depth[N]=0,I.opt_len--,ue&&(I.static_len-=me[2*N+1]);for(z.max_code=Qe,oe=I.heap_len>>1;1<=oe;oe--)pt(I,de,oe);for(N=ke;oe=I.heap[1],I.heap[1]=I.heap[I.heap_len--],pt(I,de,1),ae=I.heap[1],I.heap[--I.heap_max]=oe,I.heap[--I.heap_max]=ae,de[2*N]=de[2*oe]+de[2*ae],I.depth[N]=(I.depth[oe]>=I.depth[ae]?I.depth[oe]:I.depth[ae])+1,de[2*oe+1]=de[2*ae+1]=N,I.heap[1]=N++,pt(I,de,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(Fe,It){var er,Xt,tr,ot,kr,qr,fn=It.dyn_tree,Mi=It.max_code,wo=It.stat_desc.static_tree,Pl=It.stat_desc.has_stree,$l=It.stat_desc.extra_bits,Ta=It.stat_desc.extra_base,Er=It.stat_desc.max_length,Kr=0;for(ot=0;ot<=y;ot++)Fe.bl_count[ot]=0;for(fn[2*Fe.heap[Fe.heap_max]+1]=0,er=Fe.heap_max+1;er<k;er++)Er<(ot=fn[2*fn[2*(Xt=Fe.heap[er])+1]+1]+1)&&(ot=Er,Kr++),fn[2*Xt+1]=ot,Mi<Xt||(Fe.bl_count[ot]++,kr=0,Ta<=Xt&&(kr=$l[Xt-Ta]),qr=fn[2*Xt],Fe.opt_len+=qr*(ot+kr),Pl&&(Fe.static_len+=qr*(wo[2*Xt+1]+kr)));if(Kr!==0){do{for(ot=Er-1;Fe.bl_count[ot]===0;)ot--;Fe.bl_count[ot]--,Fe.bl_count[ot+1]+=2,Fe.bl_count[Er]--,Kr-=2}while(0<Kr);for(ot=Er;ot!==0;ot--)for(Xt=Fe.bl_count[ot];Xt!==0;)Mi<(tr=Fe.heap[--er])||(fn[2*tr+1]!==ot&&(Fe.opt_len+=(ot-fn[2*tr+1])*fn[2*tr],fn[2*tr+1]=ot),Xt--)}})(I,z),ft(de,Qe,I.bl_count)}function w(I,z,oe){var ae,N,de=-1,me=z[1],ue=0,ke=7,Qe=4;for(me===0&&(ke=138,Qe=3),z[2*(oe+1)+1]=65535,ae=0;ae<=oe;ae++)N=me,me=z[2*(ae+1)+1],++ue<ke&&N===me||(ue<Qe?I.bl_tree[2*N]+=ue:N!==0?(N!==de&&I.bl_tree[2*N]++,I.bl_tree[2*O]++):ue<=10?I.bl_tree[2*D]++:I.bl_tree[2*q]++,de=N,Qe=(ue=0)===me?(ke=138,3):N===me?(ke=6,3):(ke=7,4))}function X(I,z,oe){var ae,N,de=-1,me=z[1],ue=0,ke=7,Qe=4;for(me===0&&(ke=138,Qe=3),ae=0;ae<=oe;ae++)if(N=me,me=z[2*(ae+1)+1],!(++ue<ke&&N===me)){if(ue<Qe)for(;he(I,N,I.bl_tree),--ue!=0;);else N!==0?(N!==de&&(he(I,N,I.bl_tree),ue--),he(I,O,I.bl_tree),ge(I,ue-3,2)):ue<=10?(he(I,D,I.bl_tree),ge(I,ue-3,3)):(he(I,q,I.bl_tree),ge(I,ue-11,7));de=N,Qe=(ue=0)===me?(ke=138,3):N===me?(ke=6,3):(ke=7,4)}}d(ie);var V=!1;function C(I,z,oe,ae){ge(I,(h<<1)+(ae?1:0),3),(function(N,de,me,ue){He(N),ue&&(Ee(N,me),Ee(N,~me)),s.arraySet(N.pending_buf,N.window,de,me,N.pending),N.pending+=me})(I,z,oe,!0)}a._tr_init=function(I){V||((function(){var z,oe,ae,N,de,me=new Array(y+1);for(N=ae=0;N<f-1;N++)for(J[N]=ae,z=0;z<1<<Z[N];z++)E[ae++]=N;for(E[ae-1]=N,N=de=0;N<16;N++)for(ie[N]=de,z=0;z<1<<re[N];z++)Y[de++]=N;for(de>>=7;N<m;N++)for(ie[N]=de<<7,z=0;z<1<<re[N]-7;z++)Y[256+de++]=N;for(oe=0;oe<=y;oe++)me[oe]=0;for(z=0;z<=143;)we[2*z+1]=8,z++,me[8]++;for(;z<=255;)we[2*z+1]=9,z++,me[9]++;for(;z<=279;)we[2*z+1]=7,z++,me[7]++;for(;z<=287;)we[2*z+1]=8,z++,me[8]++;for(ft(we,v+1,me),z=0;z<m;z++)R[2*z+1]=5,R[2*z]=je(z,5);xe=new Ae(we,Z,b+1,v,y),ce=new Ae(R,re,0,m,y),Ie=new Ae(new Array(0),G,0,g,M)})(),V=!0),I.l_desc=new W(I.dyn_ltree,xe),I.d_desc=new W(I.dyn_dtree,ce),I.bl_desc=new W(I.bl_tree,Ie),I.bi_buf=0,I.bi_valid=0,We(I)},a._tr_stored_block=C,a._tr_flush_block=function(I,z,oe,ae){var N,de,me=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var ke,Qe=4093624447;for(ke=0;ke<=31;ke++,Qe>>>=1)if(1&Qe&&ue.dyn_ltree[2*ke]!==0)return c;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return u;for(ke=32;ke<b;ke++)if(ue.dyn_ltree[2*ke]!==0)return u;return c})(I)),Nt(I,I.l_desc),Nt(I,I.d_desc),me=(function(ue){var ke;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Nt(ue,ue.bl_desc),ke=g-1;3<=ke&&ue.bl_tree[2*pe[ke]+1]===0;ke--);return ue.opt_len+=3*(ke+1)+5+5+4,ke})(I),N=I.opt_len+3+7>>>3,(de=I.static_len+3+7>>>3)<=N&&(N=de)):N=de=oe+5,oe+4<=N&&z!==-1?C(I,z,oe,ae):I.strategy===4||de===N?(ge(I,2+(ae?1:0),3),Ut(I,we,R)):(ge(I,4+(ae?1:0),3),(function(ue,ke,Qe,Fe){var It;for(ge(ue,ke-257,5),ge(ue,Qe-1,5),ge(ue,Fe-4,4),It=0;It<Fe;It++)ge(ue,ue.bl_tree[2*pe[It]+1],3);X(ue,ue.dyn_ltree,ke-1),X(ue,ue.dyn_dtree,Qe-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,me+1),Ut(I,I.dyn_ltree,I.dyn_dtree)),We(I),ae&&He(I)},a._tr_tally=function(I,z,oe){return I.pending_buf[I.d_buf+2*I.last_lit]=z>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&z,I.pending_buf[I.l_buf+I.last_lit]=255&oe,I.last_lit++,z===0?I.dyn_ltree[2*oe]++:(I.matches++,z--,I.dyn_ltree[2*(E[oe]+b+1)]++,I.dyn_dtree[2*F(z)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){ge(I,2,3),he(I,T,we),(function(z){z.bi_valid===16?(Ee(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),T0=j3(),Y3=q3(),X3=Do(K3(),1);function J3(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function Q3(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Se(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Se(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(Se(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(Se(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{Se(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function e6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),o=r.getContext("2d");if(o)return r.width=t.naturalWidth,r.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&Se(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){Se(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function t6(e){if(e.blob)return Se(`Got blob for page ${e.src} from cache`),e.blob;const t=await Q3(e)||await e6(e);return t||Se(`Failed to get blob for page ${e.src}`),t}async function n6(){Re("download","working");const e=new X3.default,t=fe("images")??{},r=fe("manga"),o=r?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=Me.default.sortBy(Me.default.entries(t),([h])=>Number(h)),c=[],u=h=>{Re("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:se`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${j("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",o.toString())}</p>
          <progress value='${h}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:se`
        <mov-button @click=${()=>Re("download","cancelled")}>
          ${j("CANCEL")}
        </mov-button>
      `})};u(0);let d=0;for(const[h,f]of s){if(fe("download")==="cancelled"){Se("Download cancelled"),Re("dialog",null),Re("download",void 0);return}try{const b=await t6(f);if(b){const v=J3(b.type),m=`Page-${Number(h).toString().padStart(a,"0")}.${v}`;Se(`${m} Added to Zip from Blob`),e.file(m,b,{createFolders:!0,compression:"DEFLATE"})}else c.push(f.src??h)}catch(b){Se(`Error processing page ${h}`,b),c.push(f.src??h)}finally{d+=1,u(d)}}Re("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:se`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${j("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:se``}),c.length>0&&(Se("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),Se("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{Se("Download Ready"),(0,Y3.saveAs)(h,`${r?.title??document.title}.zip`,{autoBom:!1}),c.length>0?Re("dialog",{open:!0,title:j("DOWNLOAD_INCOMPLETE"),icon:"warning",content:se`<p>${j("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:se`<mov-button @click=${()=>Re("dialog",null)}>
            ${j("CLOSE")}
          </mov-button>`}):Re("dialog",null)}).catch(h=>{Se("Error generating zip",h),Re("dialog",{open:!0,title:j("WARNING"),icon:"error",content:se`<p>Error generating zip: ${h.message}</p>`,footer:se`<mov-button @click=${()=>Re("dialog",null)}>
          ${j("CLOSE")}
        </mov-button>`})}).finally(()=>{Re("download",void 0)})}function L0(){fe("download")!=="working"&&(Se("Downloading Chapter"),n6().catch(e=>Se("Error downloading chapter",e)))}function r6(){Yi("hidePageControls",e=>!e)}function co(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,T0.sanitizeUrl)(r):t.id==="series"&&(ks()?window.location.href=window.location.pathname:window.history.back()))}function i6(e){if(e)if(K("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();t.scrollBy({left:r.left-o.left,top:r.top-o.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}Yt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):i6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Re("scrollToPage",void 0),10))});function o6(e){const t=e.currentTarget.value;Re("scrollToPage",parseInt(t,10))}function a6(e){Re("scrollToPage",e)}var Al=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ml(e,t,r,o){e.addEventListener?e.addEventListener(t,r,o):e.attachEvent&&e.attachEvent(`on${t}`,r)}function uo(e,t,r,o){e&&(e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent&&e.detachEvent(`on${t}`,r))}function R0(e,t){const r=t.slice(0,t.length-1),o=[];for(let a=0;a<r.length;a++)o.push(e[r[a].toLowerCase()]);return o}function P0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function s6(e,t){const r=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)o.indexOf(r[s])===-1&&(a=!1);return a}function $0(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var ho={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Al?173:189,"=":Al?61:187,";":Al?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},Sn={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},fo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},xt={16:!1,18:!1,17:!1,91:!1},ht={};for(let e=1;e<20;e++)ho[`f${e}`]=111+e;var it=[],po=null,yi=null,D0="all",Qn=new Map,ki=e=>ho[e.toLowerCase()]||Sn[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),l6=e=>Object.keys(ho).find(t=>ho[t]===e),c6=e=>Object.keys(Sn).find(t=>Sn[t]===e),z0=e=>{D0=e||"all"},go=()=>D0||"all",d6=()=>it.slice(0),u6=()=>it.map(e=>l6(e)||c6(e)||String.fromCharCode(e)),h6=()=>{const e=[];return Object.keys(ht).forEach(t=>{ht[t].forEach(({key:r,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:r.split("+").map(c=>ki(c))})})}),e},B0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let o=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(o=!1),o},f6=e=>(typeof e=="string"&&(e=ki(e)),it.indexOf(e)!==-1),p6=(e,t)=>{let r,o;e||(e=go());for(const a in ht)if(Object.prototype.hasOwnProperty.call(ht,a))for(r=ht[a],o=0;o<r.length;)r[o].scope===e?r.splice(o,1).forEach(({element:s})=>xl(s)):o++;go()===e&&z0(t||"all")};function g6(e){let t=$0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=ki(e.key));const r=it.indexOf(t);if(r>=0&&it.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&it.splice(0,it.length),(t===93||t===224)&&(t=91),t in xt){xt[t]=!1;for(const o in Sn)Sn[o]===t&&(Un[o]=!1)}}var N0=(e,...t)=>{if(typeof e>"u")Object.keys(ht).forEach(r=>{Array.isArray(ht[r])&&ht[r].forEach(o=>ya(o)),delete ht[r]}),xl(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ya(r)});else if(typeof e=="object")e.key&&ya(e);else if(typeof e=="string"){let[r,o]=t;typeof r=="function"&&(o=r,r=""),ya({key:e,scope:r,method:o,splitKey:"+"})}},ya=({key:e,scope:t,method:r,splitKey:o="+"})=>{P0(e).forEach(a=>{const s=a.split(o),c=s.length,u=s[c-1],d=u==="*"?"*":ki(u);if(!ht[d])return;t||(t=go());const h=c>1?R0(Sn,s):[],f=[];ht[d]=ht[d].filter(b=>{const v=(r?b.method===r:!0)&&b.scope===t&&s6(b.mods,h);return v&&f.push(b.element),!v}),f.forEach(b=>xl(b))})};function H0(e,t,r,o){if(t.element!==o)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in xt)Object.prototype.hasOwnProperty.call(xt,s)&&(!xt[s]&&t.mods.indexOf(+s)>-1||xt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!xt[16]&&!xt[18]&&!xt[17]&&!xt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(it),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function F0(e,t){const r=ht["*"];let o=$0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Un.filter||B0).call(this,e))return;if((o===93||o===224)&&(o=91),it.indexOf(o)===-1&&o!==229&&it.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(u=>{const d=fo[u];e[u]&&it.indexOf(d)===-1?it.push(d):!e[u]&&it.indexOf(d)>-1?it.splice(it.indexOf(d),1):u==="metaKey"&&e[u]&&(it=it.filter(h=>h in fo||h===o))}),o in xt){xt[o]=!0;for(const u in Sn)Object.prototype.hasOwnProperty.call(Sn,u)&&(Un[u]=e[fo[Sn[u]]]);if(!r)return}for(const u in xt)Object.prototype.hasOwnProperty.call(xt,u)&&(xt[u]=e[fo[u]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(it.indexOf(17)===-1&&it.push(17),it.indexOf(18)===-1&&it.push(18),xt[17]=!0,xt[18]=!0);const a=go();if(r)for(let u=0;u<r.length;u++)r[u].scope===a&&(e.type==="keydown"&&r[u].keydown||e.type==="keyup"&&r[u].keyup)&&H0(e,r[u],a,t);if(!(o in ht))return;const s=ht[o],c=s.length;for(let u=0;u<c;u++)if((e.type==="keydown"&&s[u].keydown||e.type==="keyup"&&s[u].keyup)&&s[u].key){const d=s[u],{splitKey:h}=d,f=d.key.split(h),b=[];for(let v=0;v<f.length;v++)b.push(ki(f[v]));b.sort().join("")===it.sort().join("")&&H0(e,d,a,t)}}var Un=function e(t,r,o){it=[];const a=P0(t);let s=[],c="all",u=document,d=0,h=!1,f=!0,b="+",v=!1,m=!1;if(o===void 0&&typeof r=="function"&&(o=r),Object.prototype.toString.call(r)==="[object Object]"){const g=r;g.scope&&(c=g.scope),g.element&&(u=g.element),g.keyup&&(h=g.keyup),g.keydown!==void 0&&(f=g.keydown),g.capture!==void 0&&(v=g.capture),typeof g.splitKey=="string"&&(b=g.splitKey),g.single===!0&&(m=!0)}for(typeof r=="string"&&(c=r),m&&N0(t,c);d<a.length;d++){const g=a[d].split(b);s=[],g.length>1&&(s=R0(Sn,g));let k=g[g.length-1];k=k==="*"?"*":ki(k),k in ht||(ht[k]=[]),ht[k].push({keyup:h,keydown:f,scope:c,mods:s,shortcut:a[d],method:o,key:a[d],splitKey:b,element:u})}if(typeof u<"u"&&typeof window<"u"){if(!Qn.has(u)){const g=(y=window.event)=>F0(y,u),k=(y=window.event)=>{F0(y,u),g6(y)};Qn.set(u,{keydownListener:g,keyupListenr:k,capture:v}),Ml(u,"keydown",g,v),Ml(u,"keyup",k,v)}if(!po){const g=()=>{it=[]};po={listener:g,capture:v},Ml(window,"focus",g,v)}if(!yi&&typeof document<"u"){const g=()=>{it=[];for(const S in xt)xt[S]=!1;for(const S in Sn)e[S]=!1},k=g,y=g;document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",y),yi={fullscreen:k,webkit:y}}}};function m6(e,t="all"){Object.keys(ht).forEach(r=>{ht[r].filter(o=>o.scope===t&&o.shortcut===e).forEach(o=>{o&&o.method&&o.method({},o)})})}function xl(e){const t=Object.values(ht).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:o,capture:a}=Qn.get(e)||{};r&&o&&(uo(e,"keyup",o,a),uo(e,"keydown",r,a),Qn.delete(e))}if(t.length<=0||Qn.size<=0){if(Array.from(Qn.keys()).forEach(r=>{const{keydownListener:o,keyupListenr:a,capture:s}=Qn.get(r)||{};o&&a&&(uo(r,"keyup",a,s),uo(r,"keydown",o,s),Qn.delete(r))}),Qn.clear(),Object.keys(ht).forEach(r=>delete ht[r]),po){const{listener:r,capture:o}=po;uo(window,"focus",r,o),po=null}yi&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",yi.fullscreen),document.removeEventListener("webkitfullscreenchange",yi.webkit),yi=null)}}var Il={getPressedKeyString:u6,setScope:z0,getScope:go,deleteScope:p6,getPressedKeyCodes:d6,getAllKeyCodes:h6,isPressed:f6,filter:B0,trigger:m6,unbind:N0,keyMap:ho,modifier:Sn,modifierMap:fo};for(const e in Il){const t=e;Object.prototype.hasOwnProperty.call(Il,t)&&(Un[t]=Il[t])}if(typeof window<"u"){const e=window.hotkeys;Un.noConflict=t=>(t&&window.hotkeys===Un&&(window.hotkeys=e),Un),window.hotkeys=Un}function G0(){const e=fe("chapter").value;if(K("viewMode").startsWith("Fluid")){const t=K("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:K("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Re("autoScroll",!1),Se("Finished auto scroll"))}else window.scrollBy({top:K("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Re("autoScroll",!1),Se("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(G0)}function ka(){fe("autoScroll")?(Re("autoScroll",!1),Se("Stopped auto scroll")):(Re("autoScroll",!0),requestAnimationFrame(G0),Se("Start auto scroll"))}var Ea=!1,v6=Me.default.debounce(()=>{ka(),Ea=!1},500);function b6(){!Ea&&fe("autoScroll")&&(ka(),Ea=!0),Ea&&!fe("autoScroll")&&v6()}function w6(){window.addEventListener("wheel",Me.default.throttle(b6,500))}var Vn=class extends Je{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Tt`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return se`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":se`
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
                ${Sl}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?se`
                <div class="icon-container">
                  <mov-icon
                    .name=${_6(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};H([te({type:Boolean,reflect:!0})],Vn.prototype,"open",void 0),H([te({type:String,reflect:!0})],Vn.prototype,"mode",void 0),H([te({type:Boolean,reflect:!0})],Vn.prototype,"fullscreen",void 0),H([te({type:String,reflect:!0})],Vn.prototype,"label",void 0),H([te({type:Boolean,reflect:!0,attribute:"without-header"})],Vn.prototype,"withoutHeader",void 0),H([te({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Vn.prototype,"lightDismiss",void 0),H([te({type:String,reflect:!0})],Vn.prototype,"icon",void 0),H([Nr("dialog")],Vn.prototype,"dialog",void 0),Vn=H([st("mov-dialog")],Vn);function Cl(e){const t=()=>Re("dialog",null);e.timer&&setTimeout(t,e.timer),Re("dialog",{open:!0,icon:e.icon,title:e.title,content:se`<div style="padding: 1rem;">${zd(e.html)}</div>`,footer:se`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function _6(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function y6(e){const t=e.currentTarget.value;Vd(t==="true")}function k6(e){const t=e.currentTarget.value;_t("locale",t)}function E6(e){const t=e.currentTarget.value;_t("loadMode",t)}function S6(e){const t=e.detail.checked;_t("fitWidthIfOversize",t)}function A6(e){const t=e.currentTarget.value;_t("navbar",t)}function M6(e){const t=e.currentTarget.value;_t("pagination",t)}function x6(e){const t=e.detail.checked;_t("downloadZip",t),t&&Cl({title:j("ATTENTION"),html:j("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function I6(e){const t=e.detail.checked;_t("lazyLoadImages",t),t&&Cl({title:j("WARNING"),html:j("LAZY_LOAD"),icon:"warning"})}function C6(e){const t=e.currentTarget.value;_t("lazyStart",parseInt(t,10))}function O6(e){const t=e.currentTarget.value;_t("loadSpeed",t),["Extreme","All"].includes(t)&&Cl({title:j("SPEED_WARNING"),html:j("SPEED_WARNING_MESSAGE"),icon:"warning"})}function T6(e){const t=e.currentTarget.value;_t("zoomStep",parseInt(t,10))}function L6(e){const t=e.currentTarget.value;gv("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),_t("minZoom",parseInt(t,10))}function R6(e){const t=e.detail.checked;_t("hidePageControls",t)}function P6(e){const t=e.currentTarget.value;_t("header",t)}function $6(e){const{value:t}=e.currentTarget;_t("scrollHeight",parseInt(t,10))}function W0(e){Yi("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return r>=o?o:r})}function D6(){const e=K("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function z6(){return K("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function U0(e,t=K("zoomMode"),r=K("zoomValue")){const o=D6(),a=z6();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Zr(e=K("zoomMode"),t=K("zoomValue")){Se("Zoom",e,t),li("zoomMode",e),li("zoomValue",t),e==="height"?Re("scrollToPage",fe("currentPage")):Gr("header");const r=fe("images"),o=fe("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=U0({...r?.[s]},e,t);Re("images",a)}function Ei(e,t=K("zoomValue")){return()=>{Zr(e,t)}}function Sa(e=1){return()=>{const t=K("zoomValue")+e*K("zoomStep");t>0&&t<500&&Zr("percent",t)}}function B6(e){const t=e.currentTarget.value;_t("zoomMode",t)}function N6(e){const t=parseInt(e.currentTarget.value,10);_t("zoomValue",t),Zr("percent",t)}function H6(e){Zr("percent",parseInt(e.currentTarget.value,10))}function hn(e){return()=>{li("viewMode",e),e.startsWith("Fluid")?(li("zoomMode","height"),li("header","click")):(Gr("zoomMode"),Gr("zoomValue"),Gr("header")),Zr()}}function F6(e){const t=e.currentTarget.value;_t("viewMode",t),hn(t)()}function G6(e){const t=K("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function W6(e){const t=fe("currentPage")+e;t<0?Re("scrollToPage",0):t>(fe("manga")?.pages??1)||Re("scrollToPage",t)}function U6(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function V6(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const o=fe("images")??{},a=r.begin??1,s=r.pages??1,c=d=>{if(d<a||d>s)return!1;if(o[d]?.doublePage)return!0;let h=0;for(let f=d-1;f>=a&&!o[f]?.doublePage;f--)h++;return h%2===0};let u;if(e===1)for(u=t+1;u<=s&&!c(u);)u++;else if(c(t))for(u=t-1;u>a&&!c(u);)u--;else for(u=t;u>a&&!c(u);)u--;u<a?Re("scrollToPage",0):u>s?Re("scrollToPage",s):Re("scrollToPage",u)}function V0(e){const t=K("viewMode"),r=K("zoomMode");Se("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?V6(e):t.startsWith("Fluid")?G6(e):r==="height"?W6(e):U6(e)}function mo(e){const t=fe("manga")?.[e];t&&t!=="#"?window.location.href=(0,T0.sanitizeUrl)(t):e==="series"&&(ks()?window.location.href=window.location.pathname:window.history.back())}var Z6={SCROLL_UP(){V0(-1)},SCROLL_DOWN(){V0(1)},NEXT_CHAPTER(){mo("next")},PREVIOUS_CHAPTER(){mo("prev")},RETURN_CHAPTER_LIST(){mo("series")},ENLARGE(){Sa(1)()},REDUCE(){Sa(-1)()},RESTORE(){Ei("percent",100)()},FIT_WIDTH(){Ei("width")()},FIT_HEIGHT(){Ei("height")()},SETTINGS(){Ud("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){hn("WebComic")()},VIEW_MODE_VERTICAL(){hn("Vertical")()},VIEW_MODE_LEFT(){hn("FluidRTL")()},VIEW_MODE_RIGHT(){hn("FluidLTR")()},VIEW_MODE_GALLERY(){hn("Gallery")()},SCROLL_START(){ka()},INCREASE_SPEED(){W0(1)},DECREASE_SPEED(){W0(-1)}};function Z0(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Un.unbind(),Me.default.keys(K("keybinds")).forEach(e=>{Un(K("keybinds")[e]?.join(",")??"",Me.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),Z6[e]()},100))})}var wr=class extends Je{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Tt`
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return se`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${co}
          value="${this.prev}"
          ?disabled=${_n(this.prev)||this.prev==="#"}
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
            @input="${o6}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${co}
          value="${this.next}"
          ?disabled=${_n(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return se`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(_n(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(_n(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return De;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return se`
      ${t?this.renderSlider():De} ${r?this.renderSideArrows():De}
    `}handleLeftArrowClick(){this.isFirstPage?mo("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?mo("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Re("scrollToPage",t)}};H([te({type:String})],wr.prototype,"mode",void 0),H([te({type:Number})],wr.prototype,"currentPage",void 0),H([te({type:Number})],wr.prototype,"totalPages",void 0),H([te({type:Number})],wr.prototype,"startPage",void 0),H([te({type:String})],wr.prototype,"next",void 0),H([te({type:String})],wr.prototype,"prev",void 0),wr=H([st("manga-pagination")],wr);var _r=class extends Je{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Tt`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return se`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":se`
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
                ${Sl}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};H([te({type:Boolean,reflect:!0})],_r.prototype,"open",void 0),H([te({type:String,reflect:!0})],_r.prototype,"placement",void 0),H([te({type:String,reflect:!0})],_r.prototype,"label",void 0),H([te({type:Boolean,reflect:!0,attribute:"without-header"})],_r.prototype,"withoutHeader",void 0),H([te({type:Boolean,reflect:!0,attribute:"light-dismiss"})],_r.prototype,"lightDismiss",void 0),H([Nr("dialog")],_r.prototype,"dialog",void 0),_r=H([st("mov-drawer")],_r);var jr=class extends Je{static{this.styles=Tt`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return se`
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
    `}};H([te({type:Boolean,reflect:!0})],jr.prototype,"open",void 0),H([te({type:Boolean,reflect:!0})],jr.prototype,"checkable",void 0),H([te({type:Number})],jr.prototype,"distance",void 0),H([te({type:Number})],jr.prototype,"skidding",void 0),H([te({type:String})],jr.prototype,"placement",void 0),jr=H([st("mov-dropdown")],jr);var yr=class extends Je{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Tt`
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
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return se`
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
    `}};H([te({type:Boolean,reflect:!0})],yr.prototype,"selected",void 0),H([te({type:Boolean,reflect:!0})],yr.prototype,"checked",void 0),H([te({type:Boolean,reflect:!0})],yr.prototype,"disabled",void 0),H([te({type:String})],yr.prototype,"value",void 0),H([te({type:String,reflect:!0})],yr.prototype,"variant",void 0),H([te({type:String,reflect:!0})],yr.prototype,"type",void 0),yr=H([st("mov-dropdown-item")],yr);var Ol=class extends Je{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Tt`
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
  `}render(){return se`<div
      class="divider"
      role="separator"
    ></div>`}};H([te({type:String,reflect:!0})],Ol.prototype,"orientation",void 0),Ol=H([st("mov-divider")],Ol);var j0="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",j6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atom=o,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Tl=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atoms=o,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(o=>o())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),q6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Tl();function r(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=r})),K6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Tl(),r=(o,a)=>class extends o{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=r})),Y6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=j6();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Tl();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var o=q6();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=K6();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Si=Y6(),Aa=49,X6=100,J6=class Gf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=Me.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=K("header"),{scrollY:a}=window;let s="none";K("zoomMode")!=="height"&&a+window.innerHeight+X6>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Aa?s="hide":o==="scroll"&&a<this.prevOffset&&a>Aa?s="show":o!=="click"&&a<=Aa&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),o==="scroll"){const u=s!=="hide";this.headerVisible!==u&&(this.headerVisible=u,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=Me.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(K("header"))){const a=Gf.isMouseInsideRegion(o,window.innerWidth,Aa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{K("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=K("header");K("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,o){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=o}},Q6=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const o="...",a=r-this.canvasContext.measureText(o).width;let s="",c="";for(let u=1;u<t.length;u++){const d=t.substring(0,u),h=t.substring(t.length-u);if(this.canvasContext.measureText(d).width+this.canvasContext.measureText(h).width>a)break;s=d,c=h}this.value=`${s}${o}${c}`,this.host.requestUpdate()}};function q0(e=window.location.href){_n(ci(e))||(Se(`Bookmark Removed ${e}`),Yi("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function eb(e){const t=e.currentTarget.value;Se(`Bookmark Removed ${t}`),on.error({title:j("BOOKMARK_REMOVED"),duration:1e4}),q0(t)}function tb(){Re("panel","bookmarks")}function K0(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};ci(t.url)?(Yi("bookmarks",r=>[...r.filter(o=>o.url!==t.url)]),on.error({title:j("BOOKMARK_REMOVED"),duration:1e4})):(Yi("bookmarks",r=>[...r,t]),on.success({title:j("BOOKMARK_SAVED"),description:j("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Ll(){Re("panel","none")}function nb(){Re("panel","settings")}function rb(){Re("panel","keybindings")}function ib(e){const t={};Me.default.keys(e).forEach(r=>{const o=e[r].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),_t("keybinds",t),Re("panel","keybindings"),Z0()}function ob(){Re("panel","keybindingsEditor")}var ab="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",Y0="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Ma=class extends Je{static{this.styles=[Gt(ab),Gt(Y0),Gt(j0),Tt``]}constructor(){super(),this.headroomController=new J6(this),this.titleController=new Q6(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return se``;const{headroom:t,headerVisible:r}=this.headroomController,o=K("keybinds"),a=s=>{if(fe("device")!=="desktop")return De;const c=o[s];return!c||c.length===0?De:c.map(u=>se`<kbd slot="details">${u}</kbd>`)};return se`
      <toggle-button
        id="menu"
        mode="burger"
        class="${St({[K("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${St({[K("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
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
              @click=${nb}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${j("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${rb}
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
              @click=${tb}
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
              class="${St({running:fe("autoScroll")})}"
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
              @click="${r6}"
              ?selected=${K("hidePageControls")}
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
              @click="${hn("WebComic")}"
              ?selected=${K("viewMode")==="WebComic"}
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
              @click="${hn("Vertical")}"
              ?selected=${K("viewMode")==="Vertical"}
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
              @click="${hn("FluidLTR")}"
              ?selected=${K("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${j("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${hn("FluidRTL")}"
              ?selected=${K("viewMode")==="FluidRTL"}
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
              @click="${hn("Book")}"
              ?selected=${K("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${j("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${hn("Manga")}"
              ?selected=${K("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${j("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${hn("Gallery")}"
              ?selected=${K("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${j("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
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
              @click="${Sa()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${j("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Ei("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${j("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Sa(-1)}"
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
              @click="${Ei("width")}"
              ?selected=${K("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${j("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Ei("height")}"
              ?selected=${K("zoomMode")==="height"}
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
          <span id="ZoomVal">
            Zoom:
            ${K("zoomMode")==="percent"?`${K("zoomValue")}%`:K("zoomMode")}
          </span>
          <input
            type="range"
            id="Zoom"
            name="Zoom"
            .value="${K("zoomValue")}"
            min="${K("minZoom")}"
            max="200"
            @input=${H6}
          />
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??De}"
            @click=${co}
            title="${j("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${j("DOWNLOAD_ZIP")}"
            @click=${L0}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??De}"
            title="${j("PREVIOUS_CHAPTER")}"
            @click=${co}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??De}"
            title="${j("NEXT_CHAPTER")}"
            @click=${co}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};H([Nr("#MangaTitle")],Ma.prototype,"mangaTitleElement",void 0),H([te({type:Object})],Ma.prototype,"manga",void 0),Ma=H([st("reader-header"),(0,Si.useStores)(At,si,Yt)],Ma);var sb="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",X0=class extends Je{static{this.styles=[Gt(sb)]}listBookmarks(){return ws(K("bookmarks"))?[j("LIST_EMPTY")]:K("bookmarks").map((t,r)=>se`
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
              @click=${eb}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return se`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Ll}
      >
        <mov-button
          class="Bookmark"
          title="${j("BOOKMARK")}"
          @click=${K0}
          slot="header-actions"
        >
          <mov-icon
            name="${ci()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${j("BOOKMARKS")}</h2>
        <h2 slot="label">${j("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};X0=H([st("bookmark-panel"),(0,Si.useStores)(At,si,Yt)],X0);function*lb(e,t){const r=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield r?t(o):t),o++,yield a}}var cb="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",J0=class extends Je{constructor(...t){super(...t),this.keybindsRefs=Me.default.keys(K("keybinds")).reduce((r,o)=>(r[o]=Os(),r),{})}static{this.styles=[Gt(cb),Gt(j0)]}keybindList(){const t=K("keybinds");return Me.default.keys(t).map(r=>{const o=t[r]?.length?lb(t[r]?.map(a=>se`<kbd class="dark">${a}</kbd>`)," / "):"";return se`<span>${j(r)}:</span> <span>${o}</span>`})}keybindEditor(){const t=K("keybinds");return Me.default.keys(t).map(r=>se`<label for="${r}">${j(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??De}"
            ${Ls(this.keybindsRefs[r])}
          />`)}render(){return se`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Ll}
      >
        <h2 slot="label">${j("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?se` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${j("SAVE_KEYBINDS")}"
                @click=${()=>ib(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${j("BUTTON_SAVE")}
              </mov-button>`:se` <mov-button
                id="EditKeybindings"
                type="button"
                title="${j("EDIT_KEYBINDS")}"
                @click=${ob}
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
        <div id="HotKeysRules">${zd(j("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};J0=H([st("keybindings-panel"),(0,Si.useStores)(At,si,Yt)],J0);function*db(e,t){if(e!==void 0){let r=0;for(const o of e)yield t(o,r++)}}function vo(e,t=1){return Array(e).fill(0).map((r,o)=>o+1).filter(r=>r>=t)}function xa(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var HA=Me.default.values(Et).map(e=>e[900]);function Q0(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function ub(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var hb=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",bo=class extends Je{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Gt(hb),Tt`
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
        background-image: url('${Gt(xa(Ns))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Gt(xa(Hs))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return De;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=fe("images")||{},a=Me.default.keys(o).filter(s=>{const c=parseInt(s,10);return c>=(t?.begin??1)&&c<=(t?.pages??1)&&o[c]?.status==="loaded"}).length;return se`
      <nav
        id="Navigation"
        class="${St(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${R3}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${j("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?Q0:null}
        >
          ${db(vo(t?.pages??1,t?.begin??1),s=>se` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>a6(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??De}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};H([te({type:String})],bo.prototype,"mode",void 0),H([te({type:Boolean})],bo.prototype,"forceExpanded",void 0),H([rn()],bo.prototype,"isHiding",void 0),bo=H([st("navbar-thumbnails"),(0,Si.useStores)(At,si,Yt)],bo);function fb(){const e=Fr()?"true":"false";return se` <div class="ControlLabel">
    ${j("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${y6}
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
  </div>`}function pb(){return oi.map(e=>se`
      <option
        value="${e.ID}"
        ?selected=${K("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function gb(){return se` <div class="ControlLabel locale">
    ${j("LANGUAGE")}
    <select
      id="locale"
      @change="${k6}"
    >
      ${pb()}
    </select>
  </div>`}var mb=()=>se`${fb()} ${gb()}`;function vb(){return se`
    <div class="ControlLabel loadMode">
      ${j("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${E6}"
      >
        <option
          value="wait"
          ?selected=${K("loadMode")==="wait"}
        >
          ${j("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${K("loadMode")==="always"}
        >
          ${j("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${K("loadMode")==="never"}
        >
          ${j("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function bb(){return se`
    <div class="ControlLabel PagesPerSecond">
      ${j("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${O6}"
      >
        <option
          value="Safe"
          ?selected=${K("loadSpeed")==="Safe"}
        >
          ${j("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${K("loadSpeed")==="Standard"}
        >
          ${j("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${K("loadSpeed")==="Faster"}
        >
          ${j("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${K("loadSpeed")==="Extreme"}
        >
          ${j("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${K("loadSpeed")==="All"}
        >
          ${j("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var wb=()=>se`${vb()} ${bb()}`;function _b(){return se`
    <div class="ControlLabel fitIfOversize">
      ${j("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${K("fitWidthIfOversize")}
        @change=${S6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${j("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${K("downloadZip")}
        @change=${x6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${j("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${K("hidePageControls")}
        @change=${R6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${j("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${K("lazyLoadImages")}
        @change=${I6}
      ></mov-switch>
    </div>
  `}function yb(){return se`
    <div
      class="${St({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:K("lazyLoadImages")})}"
    >
      <span>
        ${j("LAZY_LOAD_IMAGES")}
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
        @change="${C6}"
      />
    </div>
  `}function kb(){return se`
    <div class="ControlLabel headerType">
      ${j("HEADER_TYPE")}
      <segmented-control
        .value=${K("header")}
        @change=${P6}
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
  `}function Eb(){return se`
    <div class="ControlLabel pagination">
      ${j("PAGINATION_TYPE")}
      <segmented-control
        .value=${K("pagination")}
        @change=${M6}
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
  `}function Sb(){return se`
    <div class="ControlLabel navbarType">
      ${j("NAVBAR_TYPE")}
      <segmented-control
        .value=${K("navbar")}
        @change=${A6}
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
  `}function Ab(){return se`
    <div class="ControlLabel autoScroll">
      <span>
        ${j("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${K("scrollHeight")}px
        </output>
      </span>
      <input
        type="range"
        value="${K("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @input="${$6}"
      />
    </div>
  `}var Mb=()=>se`${_b()} ${Eb()} ${yb()} ${kb()} ${Sb()} ${Ab()}`;function xb(){const e=K("colorScheme")==="dark";_t("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(K("colorScheme"))}function Ia(e){_t("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Ib(){return se`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${j("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${xb}
        ?active=${K("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${j("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${K("theme")}"
        title="${K("theme")}"
        @input=${Ia}
        .swatches=${Me.default.values(El)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${K("theme")}"
      mode="steps"
      .selected=${K("theme")}
      @change="${Ia}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Me.default.values(El).map(e=>se`<color-swatch
            .color="${e}"
            .selected=${K("theme")}
            @change=${Ia}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${j("THEME_HUE")} & ${j("THEME_SHADE")}</summary>
      <color-panel
        .selected=${K("theme")}
        @change=${Ia}
      ></color-panel>
    </details>
  `}function Cb(){return se` <div class="ControlLabel DefaultZoomMode">
    ${j("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${K("zoomMode")}
      @change=${B6}
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
  </div>`}function Ob(){return se`
    <div
      class="${St({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:K("zoomMode")==="percent"})}"
    >
      <span>
        ${j("DEFAULT_ZOOM")}
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
  `}function Tb(){return se`
    <div class="ControlLabel minZoom">
      <span>
        ${j("MINIMUM_ZOOM")}
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
        @input="${L6}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function Lb(){return se`
    <div class="ControlLabel zoomStep">
      <span>
        ${j("ZOOM_STEP")}
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
        @input="${T6}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function Rb(){return se`
    <div class="ControlLabel viewMode">
      ${j("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${K("viewMode")}
        @change=${F6}
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
        <segmented-control-option
            value="Gallery"
            label=${j("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var Pb=()=>se`${Cb()} ${Ob()} ${Tb()} ${Lb()} ${Rb()}`,$b="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",eh=class extends Je{static{this.styles=[Tt`
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
    `,Gt($b)]}render(){return se`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Ll}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${j("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Sv}"
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
            ${mb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${j("THEME")}</legend>
            ${Ib()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${j("LOADING")}</legend>
            ${wb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${j("ZOOM")}</legend>
            ${Pb()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${j("OTHERS")}</legend>
            ${Mb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};eh=H([st("settings-panel"),(0,Si.useStores)(At,si,Yt)],eh);function Db(e){return new Promise(function(t,r){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t(Nb(s))},o.onerror=r,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function zb(e){return Db(e).then(btoa)}function Bb(e){return zb(e).then(function(t){return"data:"+e.type+";base64,"+t})}function Nb(e){for(var t="",r=new Uint8Array(e),o=r.byteLength,a=-1;++a<o;)t+=String.fromCharCode(r[a]);return t}async function Hb(e,t){Se("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw Se("Failed to fetch page: ",r),r}}async function Fb(e){return Hb(e,"text/html")}async function Gb(e,t,r){try{return(await Fb(e)).querySelector(t)?.getAttribute(r)}catch(o){return Se("Failed to get element attribute: ",o),null}}var Wb=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Rl;function Ub(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Ca(e,t,r){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(Pn(t,()=>({status:"loading"})),Rl.add(async()=>{let a=Ub(r),s,c="loaded";try{const u=await fetch(a,e.fetchOptions);u.ok?(s=await u.blob(),a=await Bb(s)):c="error"}catch(u){Se("Failed to fetch image",u),c="error"}Pn(t,()=>({src:a,blob:s,status:c})),yn("Loaded Image:",t,"Source:",a)}),e.pages===t&&q0())}async function th(e,t,r){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(Pn(t,()=>({status:"loading"})),Rl.add(async()=>{try{const a=await Gb(r,e.img,e.lazyAttr??"src");a?(Pn(t,()=>({status:"pending"})),await Ca(e,t,a)):Pn(t,()=>({status:"error"}))}catch(a){Se("Failed to get page attribute",a),Pn(t,()=>({status:"error"}))}}))}function nh(e,t){vo(t.pages,e).filter((r,o)=>!(t.lazy??K("lazyLoadImages"))||o<=K("lazyStart")).forEach(r=>{th(t,r,t.listPages[r-1])})}function rh(e,t){vo(t.pages,e).filter((r,o)=>!(t.lazy??K("lazyLoadImages"))||o<=K("lazyStart")).forEach(r=>{Ca(t,r,t.listImages[r-1])})}async function Vb(){await _s(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Rl=new Wb(K("loadSpeed"),e.timer),yn("Loading Images"),yn(`Speed: ${K("loadSpeed")}`),yn(`Lazy: ${e.lazy??K("lazyLoadImages")}, Starting from: ${K("lazyStart")}`),Zr(),Yc(e)?(yn("Method: Images:",e.listImages),rh(t,e)):Xc(e)?(yn("Method: Pages:",e.listPages),nh(t,e)):Yf(e)?(yn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Ca,loadImages(r){rh(t,{...e,listImages:r})},loadPages(r,o,a){nh(t,{...e,listPages:r,img:o,lazyAttr:a})},wait:0})):Se("No Loading Method Found"),Yt.listen((r,o,a)=>{if(a==="currentPage"&&r.currentPage>o.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Yc(e)?Ca(e,s,e.listImages[s-1]):Xc(e)&&th(e,s,e.listPages[s-1]))})}function Zb(){const e=fe("images");if(!e)return null;const t=K("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const u in e){const d=e[u].ref?.value;if(!d)continue;const h=d?.getBoundingClientRect();let f;r?o?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!c||f>c.edge)&&(c={index:parseInt(u,10),edge:f})}return c?c.index:fe("manga")?.begin??1}function ih(){const e=Zb();e!=null&&fe("currentPage")!==e&&Re("currentPage",e)}function jb(){const e=Me.default.throttle(()=>{requestAnimationFrame(ih)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(ih)}function oh(){if(!fe("chapter").value){setTimeout(oh,50);return}jb()}var ah=Me.default.debounce(()=>{Re("device",Hi()),Zr()},200);async function qb(){await _s(()=>fe("manga")!==void 0),Z0(),window.addEventListener("resize",ah),window.addEventListener("orientationchange",ah),w6(),oh()}var Kb=wn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define(o):typeof e=="object"?t.exports=o():r.NProgress=o()})(e,function(){var r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(g){var k,y;for(k in g)y=g[k],y!==void 0&&g.hasOwnProperty(k)&&(o[k]=y);return this},r.status=null,r.set=function(g){var k=r.isStarted();g=a(g,o.minimum,1),r.status=g===1?null:g;var y=r.render(!k),S=y.querySelector(o.barSelector),M=o.speed,T=o.easing;return y.offsetWidth,u(function(O){o.positionUsing===""&&(o.positionUsing=r.getPositioningCSS()),d(S,c(g,M,T)),g===1?(d(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){d(y,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){r.remove(),O()},M)},M)):setTimeout(O,M)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var g=function(){setTimeout(function(){r.status&&(r.trickle(),g())},o.trickleSpeed)};return o.trickle&&g(),this},r.done=function(g){return!g&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(g){var k=r.status;return k?(typeof g!="number"&&(g=(1-k)*a(Math.random()*k,.1,.95)),k=a(k+g,0,.994),r.set(k)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},(function(){var g=0,k=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(k===0&&r.start(),g++,k++,y.always(function(){k--,k===0?(g=0,r.done()):r.set((g-k)/g)}),this)}})(),r.render=function(g){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var k=document.createElement("div");k.id="nprogress",k.innerHTML=o.template;var y=k.querySelector(o.barSelector),S=g?"-100":s(r.status||0),M=document.querySelector(o.parent),T;return d(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),o.showSpinner||(T=k.querySelector(o.spinnerSelector),T&&m(T)),M!=document.body&&f(M,"nprogress-custom-parent"),M.appendChild(k),k},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(o.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var g=document.body.style,k="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return k+"Perspective"in g?"translate3d":k+"Transform"in g?"translate":"margin"};function a(g,k,y){return g<k?k:g>y?y:g}function s(g){return(-1+g)*100}function c(g,k,y){var S;return o.positionUsing==="translate3d"?S={transform:"translate3d("+s(g)+"%,0,0)"}:o.positionUsing==="translate"?S={transform:"translate("+s(g)+"%,0)"}:S={"margin-left":s(g)+"%"},S.transition="all "+k+"ms "+y,S}var u=(function(){var g=[];function k(){var y=g.shift();y&&y(k)}return function(y){g.push(y),g.length==1&&k()}})(),d=(function(){var g=["Webkit","O","Moz","ms"],k={};function y(O){return O.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(D,q){return q.toUpperCase()})}function S(O){var D=document.body.style;if(O in D)return O;for(var q=g.length,Z=O.charAt(0).toUpperCase()+O.slice(1),re;q--;)if(re=g[q]+Z,re in D)return re;return O}function M(O){return O=y(O),k[O]||(k[O]=S(O))}function T(O,D,q){D=M(D),O.style[D]=q}return function(O,D){var q=arguments,Z,re;if(q.length==2)for(Z in D)re=D[Z],re!==void 0&&D.hasOwnProperty(Z)&&T(O,Z,re);else T(O,q[1],q[2])}})();function h(g,k){return(typeof g=="string"?g:v(g)).indexOf(" "+k+" ")>=0}function f(g,k){var y=v(g),S=y+k;h(y,k)||(g.className=S.substring(1))}function b(g,k){var y=v(g),S;h(g,k)&&(S=y.replace(" "+k+" "," "),g.className=S.substring(1,S.length-1))}function v(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return r})})),Yb=Do(Kb(),1);function Xb(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function Jb(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function sh(e,t){Se(`Reloading Page ${e}`,t);const r=fe("images")?.[e]?.src;if(!r)return;const o=Jb(r);o>K("maxReload")||(t?.removeAttribute("src"),m2(r)||v2(r)?t?.setAttribute("src",r):t?.setAttribute("src",Xb(r,o)))}function Qb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images")?.[r]?.ref?.value;o&&sh(r,o)}function e9(e){const t=e.currentTarget;Pn(parseInt(t.value,10),r=>({hide:!r.hide}))}function t9(e){const t=e.currentTarget;Pn(parseInt(t.id.replace("PageImg",""),10),u=>({...U0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=fe("manga"),o=fe("images")||{},a=Me.default.keys(o).filter(u=>{const d=parseInt(u,10);return d>=(r?.begin??1)&&d<=(r?.pages??1)&&o[d]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),c=Math.floor(a/s*100);document.title=`(${c}%) ${fe("manga")?.title}`,Yb.default.configure({showSpinner:!1}).set(a/s),Se(`Progress: ${c}%`),a===s&&(Se("Images Loading Complete"),Re("download","available"),K("downloadZip")&&L0())}function n9(e){const t=e.currentTarget;if(ws(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Pn(r,()=>({status:"error"})),sh(r,t)}function r9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Re("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+K("zoomStep")/100),height:void 0}})}function i9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Re("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-K("zoomStep")/100),height:void 0}})}function o9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&Re("images",{...o,[r]:{...a,width:void 0,height:void 0}})}function a9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&Re("images",{...o,[r]:{...a,width:window.innerWidth+(K("navbar")==="left"||K("navbar")==="right"?-34:0),height:void 0}})}function s9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[r];a&&Re("images",{...o,[r]:{...a,width:void 0,height:window.innerHeight+(K("navbar")==="bottom"?-34:0)}})}function l9(e){const t=fe("images")?.[e],r=K("viewMode").match(/^(Book|Manga)$/),o=K("viewMode")==="Gallery",a=K("viewMode").startsWith("Fluid"),s=K("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!o?`${K("minZoom")}vw`:void 0}}var c9=(e,t)=>vo(e,t).map(r=>{fe("images")?.[r]?.ref||Pn(r,d=>({ref:Os()}));let o=0;for(let d=r-1;d>=t&&!fe("images")?.[d].doublePage;d--)fe("images")?.[d].doublePage||o++;const a=fe("images")?.[r].doublePage??!1,s=K("viewMode")==="Book",c=!a&&(s?o%2===0:o%2===1),u=!a&&(s?o%2===1:o%2===0);return se`
      <div
        id="Page${r}"
        class="${St({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:c&&!a,RightPage:u&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${j("BOOKMARK")}"
            @click=${K0}
            value="${r}"
          >
            ${ci()?L3:T3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${j("ZOOM_IN")}"
            @click=${r9}
            value="${r}"
          >
            ${N3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${j("ZOOM_RESET")}"
            @click=${o9}
            value="${r}"
          >
            ${B3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${j("ZOOM_OUT")}"
            @click=${i9}
            value="${r}"
          >
            ${H3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${j("ZOOM_HEIGHT")}"
            @click=${s9}
            value="${r}"
          >
            ${C3}
          </button>
          ${K("viewMode").match(/^(Book|Manga)$/)?se`
            <button
              class="DoublePage PageButton"
              title="${j("DOUBLE_PAGE")}"
              @click=${()=>{Pn(r,d=>({doublePage:!d.doublePage}))}}
              value="${r}"
            >
              ${z3}
            </button>`:se`
              <button
                class="ZoomWidth PageButton"
                title="${j("ZOOM_WIDTH")}"
                @click=${a9}
                value="${r}"
              >
                ${O3}
              </button>`}
          <button
            class="Hide PageButton"
            title="${j("HIDE")}"
            @click=${e9}
            value="${r}"
          >
            ${fe("images")?.[r].hide?P3:$3}
          </button>
          <button
            class="Reload PageButton"
            title="${j("RELOAD")}"
            @click=${Qb}
            value="${r}"
          >
            ${D3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${St({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??De}
            style="${Wn(l9(r))}"
            @load=${t9}
            @error=${n9}
            ${Ls(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?j("END"):`${r} / ${e}`} ]
      </div>
    `}),d9=e=>se`
  <main
    id="Chapter"
    ${Ls(fe("chapter"))}
    class="${St({fitWidthIfOversize:K("fitWidthIfOversize"),[K("viewMode")]:!0,separator:K("viewMode")==="Vertical"})}"
    @wheel=${t=>{K("viewMode")==="FluidLTR"?Q0(t):K("viewMode")==="FluidRTL"&&ub(t)}}
  >
    ${c9(e.pages,e.begin??0)}
  </main>
`,u9=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",h9="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",f9="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",p9="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",g9="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",m9='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',v9="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",b9=Fd`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${xa(Ns)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${xa(Hs)}');
  }

  ${v9}
  ${u9}
  ${m9}
  ${p9}
  ${f9}
  ${g9}
  ${Y0}
  ${h9}
`,w9=(e="#MangaOnlineViewer",t=K("theme"))=>{const r=C0(t),o=_i(t),a=K("colorScheme")==="dark"?r[8]:r[2];return Fd`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${o};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${_i(a)};

      color-scheme: dark;
      --theme-body-background: ${Et.dark[600]};
      --theme-body-text-color: ${Et.dark[50]};
      --theme-text-color: ${Et.dark[50]};
      --theme-background-color: ${Et.dark[600]};
      --theme-hightlight-color: ${Et.dark[500]};
      --theme-border-color: ${Et.dark[400]};

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
      --theme-body-background: ${Et.gray[50]};
      --theme-body-text-color: ${Et.gray[900]};
      --theme-text-color: ${Et.gray[900]};
      --theme-background-color: ${Et.gray[50]};
      --theme-hightlight-color: ${Et.gray[500]};
      --theme-border-color: ${Et.gray[100]};

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
  `},_9="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",Ai=class extends Je{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Gt(_9)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return se`
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
            style="--mov-color-fill-loud: ${Et.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Et.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return se`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${j("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const o=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return se`
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
            style="--mov-color-fill-loud: ${Et.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(t,r)}
            style="--mov-color-fill-loud: ${Et.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};H([te({type:Number,reflect:!0})],Ai.prototype,"mangaPages",void 0),H([te({type:Number,reflect:!0})],Ai.prototype,"begin",void 0),H([te({type:Number})],Ai.prototype,"timeoutMs",void 0),H([te({type:String,reflect:!0})],Ai.prototype,"status",void 0),Ai=H([st("script-startup")],Ai);function y9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var k9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},E9=(...e)=>{e?.forEach(k9),e?.forEach(y9)};function S9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var lh,Oa=class extends Je{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Tt``,Gt(b9)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(E9(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),Re("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),qb(),Vb()}render(){const t=fe("manga"),r=fe("dialog");return se`
      <style>
        ${w9()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${St({[K("colorScheme")]:!0,hideControls:K("hidePageControls"),bookmarked:!!ci(),[fe("device")]:!0})}"
        style="${Wn({[`padding-${K("navbar")}`]:"34px"})}"
        .locale="${K("locale")}"
      >
        ${t?se`
              <reader-header .manga=${t}></reader-header>
              ${d9(t)}
              <navbar-thumbnails
                .mode=${K("navbar")}
              ></navbar-thumbnails>
              <manga-pagination
                .mode="${K("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${fe("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:se(lh||(lh=S9([`
              <script-startup
                .mangaPages="`,`"
                begin="`,`"
                initialStatus="`,`"
                @start=`,`
              ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,O0(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${r?se`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Re("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};H([te({type:String,reflect:!0})],Oa.prototype,"loadMode",void 0),H([te({type:Object})],Oa.prototype,"manga",void 0),Oa=H([st("manga-online-viewer"),(0,Si.useStores)(At,si,Yt)],Oa);var A9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,M9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",x9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",I9=[A9,M9,x9].join(`
`);async function C9([e,t]){Se(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=ci()??t.begin??1,t.before!==void 0&&(yn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=mv("externals",I9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??K("loadMode"),r.manga=t,document.body.appendChild(r)}async function O9(e){Se(`Starting ${ys.script.name} ${ys.script.version} on ${Hi()} ${Y2()} with ${X2()}`),Se(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));Se(t.length,"Found sites:",t);const r=t.map(async o=>{Se(`Testing site: ${o.name}`),await Q2(o);const a=await o.run();if(a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{C9(await Promise.any(r))}catch(o){if(o instanceof AggregateError){Se("All sites failed to run:");for(const a of o.errors)Se(a.message)}else Se("An unexpected error occurred:",o)}}O9(W2).catch(Se)})();
