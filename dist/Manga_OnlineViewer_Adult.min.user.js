// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, HDoujin, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.to, nHentai.xxx, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.08.28.build-2003
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.7/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hdoujin\.org\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?hentainexus.com\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.net\/g\/.+/
// @include       /https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/
// @include       /https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){var lp=Object.create,ra=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,dp=Object.getOwnPropertyNames,up=Object.getPrototypeOf,Wd=Object.prototype.hasOwnProperty,Sr=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),nn=(e,t)=>{let r={};for(var i in e)ra(r,i,{get:e[i],enumerable:!0});return t||ra(r,Symbol.toStringTag,{value:"Module"}),r},hp=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=dp(t),s=0,l=a.length,d;s<l;s++)d=a[s],!Wd.call(e,d)&&d!==r&&ra(e,d,{get:(c=>t[c]).bind(null,d),enumerable:!(i=cp(t,d))||i.enumerable});return e},na=(e,t,r)=>(r=e!=null?lp(up(e)):{},hp(t||!e||!e.__esModule||!Wd.call(e,"default")?ra(r,"default",{value:e,enumerable:!0}):r,e)),fp=Sr(((e,t)=>{(function(){var r,i="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",c="Invalid `imports` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,v="__lodash_placeholder__",b=1,m=2,g=4,y=1,_=2,E=1,A=2,C=4,O=8,$=16,j=32,U=64,re=128,H=256,fe=512,_e=30,P="...",X=800,M=16,Q=1,Ie=2,ce=3,Le=1/0,ie=9007199254740991,Ae=17976931348623157e292,W=NaN,G=4294967295,Se=G-1,me=G>>>1,pe=[["ary",re],["bind",E],["bindKey",A],["curry",O],["curryRight",$],["flip",fe],["partial",j],["partialRight",U],["rearg",H]],Xe="[object Arguments]",bt="[object Array]",Ze="[object AsyncFunction]",We="[object Boolean]",pt="[object Date]",wt="[object DOMException]",Kt="[object Error]",Ut="[object Function]",w="[object GeneratorFunction]",J="[object Map]",q="[object Number]",T="[object Null]",I="[object Object]",z="[object Promise]",ae="[object Proxy]",se="[object RegExp]",F="[object Set]",de="[object String]",ge="[object Symbol]",ue="[object Undefined]",Me="[object WeakMap]",ot="[object WeakSet]",Ue="[object ArrayBuffer]",Pt="[object DataView]",fn="[object Float32Array]",nr="[object Float64Array]",pn="[object Int8Array]",ut="[object Int16Array]",zn="[object Int32Array]",co="[object Uint8Array]",wr="[object Uint8ClampedArray]",qo="[object Uint16Array]",Hi="[object Uint32Array]",Ic=/\b__p \+= '';/g,Cc=/\b(__p \+=) '' \+/g,os=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Nn=/&(?:amp|lt|gt|quot|#39);/g,uo=/[&<>"']/g,uw=RegExp(Nn.source),hw=RegExp(uo.source),fw=/<%-([\s\S]+?)%>/g,pw=/<%([\s\S]+?)%>/g,I1=/<%=([\s\S]+?)%>/g,mw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gw=/^\w*$/,vw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oc=/[\\^$.*+?()[\]{}|]/g,bw=RegExp(Oc.source),Tc=/^\s+/,ww=/\s/,_w=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,yw=/\{\n\/\* \[wrapped with (.+)\] \*/,kw=/,? & /,Ew=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,C1=/[()=,{}\[\]\/\s]/,Mw=/\\(\\)?/g,Sw=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O1=/\w*$/,Aw=/^[-+]0x[0-9a-f]+$/i,xw=/^0b[01]+$/i,Iw=/^\[object .+?Constructor\]$/,Cw=/^0o[0-7]+$/i,Ow=/^(?:0|[1-9]\d*)$/,Tw=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,is=/($^)/,Lw=/['\n\r\u2028\u2029\\]/g,as="\\ud800-\\udfff",T1="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",L1="\\u2700-\\u27bf",P1="a-z\\xdf-\\xf6\\xf8-\\xff",Pw="\\xac\\xb1\\xd7\\xf7",Rw="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$w="\\u2000-\\u206f",Dw=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",R1="A-Z\\xc0-\\xd6\\xd8-\\xde",$1="\\ufe0e\\ufe0f",D1=Pw+Rw+$w+Dw,Lc="['’]",Bw="["+as+"]",B1="["+D1+"]",ss="["+T1+"]",z1="\\d+",zw="["+L1+"]",N1="["+P1+"]",H1="[^"+as+D1+z1+L1+P1+R1+"]",Pc="\\ud83c[\\udffb-\\udfff]",Nw="(?:"+ss+"|"+Pc+")",F1="[^"+as+"]",Rc="(?:\\ud83c[\\udde6-\\uddff]){2}",$c="[\\ud800-\\udbff][\\udc00-\\udfff]",Ko="["+R1+"]",G1="\\u200d",W1="(?:"+N1+"|"+H1+")",Hw="(?:"+Ko+"|"+H1+")",U1="(?:"+Lc+"(?:d|ll|m|re|s|t|ve))?",V1="(?:"+Lc+"(?:D|LL|M|RE|S|T|VE))?",Z1=Nw+"?",j1="["+$1+"]?",Fw="(?:"+G1+"(?:"+[F1,Rc,$c].join("|")+")"+j1+Z1+")*",Gw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ww="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",q1=j1+Z1+Fw,Uw="(?:"+[zw,Rc,$c].join("|")+")"+q1,Vw="(?:"+[F1+ss+"?",ss,Rc,$c,Bw].join("|")+")",Zw=RegExp(Lc,"g"),jw=RegExp(ss,"g"),Dc=RegExp(Pc+"(?="+Pc+")|"+Vw+q1,"g"),qw=RegExp([Ko+"?"+N1+"+"+U1+"(?="+[B1,Ko,"$"].join("|")+")",Hw+"+"+V1+"(?="+[B1,Ko+W1,"$"].join("|")+")",Ko+"?"+W1+"+"+U1,Ko+"+"+V1,Ww,Gw,z1,Uw].join("|"),"g"),Kw=RegExp("["+G1+as+T1+$1+"]"),Yw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Xw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Jw=-1,ht={};ht[fn]=ht[nr]=ht[pn]=ht[ut]=ht[zn]=ht[co]=ht[wr]=ht[qo]=ht[Hi]=!0,ht[Xe]=ht[bt]=ht[Ue]=ht[We]=ht[Pt]=ht[pt]=ht[Kt]=ht[Ut]=ht[J]=ht[q]=ht[I]=ht[se]=ht[F]=ht[de]=ht[Me]=!1;var ct={};ct[Xe]=ct[bt]=ct[Ue]=ct[Pt]=ct[We]=ct[pt]=ct[fn]=ct[nr]=ct[pn]=ct[ut]=ct[zn]=ct[J]=ct[q]=ct[I]=ct[se]=ct[F]=ct[de]=ct[ge]=ct[co]=ct[wr]=ct[qo]=ct[Hi]=!0,ct[Kt]=ct[Ut]=ct[Me]=!1;var Qw={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},e_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},r_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},n_=parseFloat,o_=parseInt,K1=typeof global=="object"&&global&&global.Object===Object&&global,i_=typeof self=="object"&&self&&self.Object===Object&&self,Bt=K1||i_||Function("return this")(),Bc=typeof e=="object"&&e&&!e.nodeType&&e,ho=Bc&&typeof t=="object"&&t&&!t.nodeType&&t,Y1=ho&&ho.exports===Bc,zc=Y1&&K1.process,Tr=(function(){try{var B=ho&&ho.require&&ho.require("util").types;return B||zc&&zc.binding&&zc.binding("util")}catch{}})(),X1=Tr&&Tr.isArrayBuffer,J1=Tr&&Tr.isDate,Q1=Tr&&Tr.isMap,ef=Tr&&Tr.isRegExp,tf=Tr&&Tr.isSet,rf=Tr&&Tr.isTypedArray;function _r(B,ee,Z){switch(Z.length){case 0:return B.call(ee);case 1:return B.call(ee,Z[0]);case 2:return B.call(ee,Z[0],Z[1]);case 3:return B.call(ee,Z[0],Z[1],Z[2])}return B.apply(ee,Z)}function a_(B,ee,Z,we){for(var De=-1,et=B==null?0:B.length;++De<et;){var Rt=B[De];ee(we,Rt,Z(Rt),B)}return we}function yr(B,ee){for(var Z=-1,we=B==null?0:B.length;++Z<we&&ee(B[Z],Z,B)!==!1;);return B}function s_(B,ee){for(var Z=B==null?0:B.length;Z--&&ee(B[Z],Z,B)!==!1;);return B}function nf(B,ee){for(var Z=-1,we=B==null?0:B.length;++Z<we;)if(!ee(B[Z],Z,B))return!1;return!0}function Hn(B,ee){for(var Z=-1,we=B==null?0:B.length,De=0,et=[];++Z<we;){var Rt=B[Z];ee(Rt,Z,B)&&(et[De++]=Rt)}return et}function ls(B,ee){return!!(B!=null&&B.length)&&Yo(B,ee,0)>-1}function Nc(B,ee,Z){for(var we=-1,De=B==null?0:B.length;++we<De;)if(Z(ee,B[we]))return!0;return!1}function mt(B,ee){for(var Z=-1,we=B==null?0:B.length,De=Array(we);++Z<we;)De[Z]=ee(B[Z],Z,B);return De}function Fn(B,ee){for(var Z=-1,we=ee.length,De=B.length;++Z<we;)B[De+Z]=ee[Z];return B}function Hc(B,ee,Z,we){var De=-1,et=B==null?0:B.length;for(we&&et&&(Z=B[++De]);++De<et;)Z=ee(Z,B[De],De,B);return Z}function l_(B,ee,Z,we){var De=B==null?0:B.length;for(we&&De&&(Z=B[--De]);De--;)Z=ee(Z,B[De],De,B);return Z}function Fc(B,ee){for(var Z=-1,we=B==null?0:B.length;++Z<we;)if(ee(B[Z],Z,B))return!0;return!1}var c_=Gc("length");function d_(B){return B.split("")}function u_(B){return B.match(Ew)||[]}function of(B,ee,Z){var we;return Z(B,function(De,et,Rt){if(ee(De,et,Rt))return we=et,!1}),we}function cs(B,ee,Z,we){for(var De=B.length,et=Z+(we?1:-1);we?et--:++et<De;)if(ee(B[et],et,B))return et;return-1}function Yo(B,ee,Z){return ee===ee?E_(B,ee,Z):cs(B,af,Z)}function h_(B,ee,Z,we){for(var De=Z-1,et=B.length;++De<et;)if(we(B[De],ee))return De;return-1}function af(B){return B!==B}function sf(B,ee){var Z=B==null?0:B.length;return Z?Uc(B,ee)/Z:W}function Gc(B){return function(ee){return ee==null?r:ee[B]}}function Wc(B){return function(ee){return B==null?r:B[ee]}}function lf(B,ee,Z,we,De){return De(B,function(et,Rt,it){Z=we?(we=!1,et):ee(Z,et,Rt,it)}),Z}function f_(B,ee){var Z=B.length;for(B.sort(ee);Z--;)B[Z]=B[Z].value;return B}function Uc(B,ee){for(var Z,we=-1,De=B.length;++we<De;){var et=ee(B[we]);et!==r&&(Z=Z===r?et:Z+et)}return Z}function Vc(B,ee){for(var Z=-1,we=Array(B);++Z<B;)we[Z]=ee(Z);return we}function p_(B,ee){return mt(ee,function(Z){return[Z,B[Z]]})}function cf(B){return B&&B.slice(0,ff(B)+1).replace(Tc,"")}function kr(B){return function(ee){return B(ee)}}function Zc(B,ee){return mt(ee,function(Z){return B[Z]})}function Fi(B,ee){return B.has(ee)}function df(B,ee){for(var Z=-1,we=B.length;++Z<we&&Yo(ee,B[Z],0)>-1;);return Z}function uf(B,ee){for(var Z=B.length;Z--&&Yo(ee,B[Z],0)>-1;);return Z}function m_(B,ee){for(var Z=B.length,we=0;Z--;)B[Z]===ee&&++we;return we}var g_=Wc(Qw),v_=Wc(e_);function b_(B){return"\\"+r_[B]}function w_(B,ee){return B==null?r:B[ee]}function Xo(B){return Kw.test(B)}function __(B){return Yw.test(B)}function y_(B){for(var ee,Z=[];!(ee=B.next()).done;)Z.push(ee.value);return Z}function jc(B){var ee=-1,Z=Array(B.size);return B.forEach(function(we,De){Z[++ee]=[De,we]}),Z}function hf(B,ee){return function(Z){return B(ee(Z))}}function Gn(B,ee){for(var Z=-1,we=B.length,De=0,et=[];++Z<we;){var Rt=B[Z];(Rt===ee||Rt===v)&&(B[Z]=v,et[De++]=Z)}return et}function ds(B){var ee=-1,Z=Array(B.size);return B.forEach(function(we){Z[++ee]=we}),Z}function k_(B){var ee=-1,Z=Array(B.size);return B.forEach(function(we){Z[++ee]=[we,we]}),Z}function E_(B,ee,Z){for(var we=Z-1,De=B.length;++we<De;)if(B[we]===ee)return we;return-1}function M_(B,ee,Z){for(var we=Z+1;we--;)if(B[we]===ee)return we;return we}function Jo(B){return Xo(B)?A_(B):c_(B)}function Wr(B){return Xo(B)?x_(B):d_(B)}function ff(B){for(var ee=B.length;ee--&&ww.test(B.charAt(ee)););return ee}var S_=Wc(t_);function A_(B){for(var ee=Dc.lastIndex=0;Dc.test(B);)++ee;return ee}function x_(B){return B.match(Dc)||[]}function I_(B){return B.match(qw)||[]}var Wn=(function B(ee){ee=ee==null?Bt:Wn.defaults(Bt.Object(),ee,Wn.pick(Bt,Xw));var Z=ee.Array,we=ee.Date,De=ee.Error,et=ee.Function,Rt=ee.Math,it=ee.Object,qc=ee.RegExp,C_=ee.String,Lr=ee.TypeError,us=Z.prototype,O_=et.prototype,Qo=it.prototype,hs=ee["__core-js_shared__"],fs=O_.toString,rt=Qo.hasOwnProperty,T_=0,pf=(function(){var n=/[^.]+$/.exec(hs&&hs.keys&&hs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),ps=Qo.toString,L_=fs.call(it),P_=Bt._,R_=qc("^"+fs.call(rt).replace(Oc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ms=Y1?ee.Buffer:r,Un=ee.Symbol,gs=ee.Uint8Array,mf=ms?ms.allocUnsafe:r,vs=hf(it.getPrototypeOf,it),gf=it.create,vf=Qo.propertyIsEnumerable,bs=us.splice,bf=Un?Un.isConcatSpreadable:r,Gi=Un?Un.iterator:r,fo=Un?Un.toStringTag:r,ws=(function(){try{var n=bo(it,"defineProperty");return n({},"",{}),n}catch{}})(),$_=ee.clearTimeout!==Bt.clearTimeout&&ee.clearTimeout,D_=we&&we.now!==Bt.Date.now&&we.now,B_=ee.setTimeout!==Bt.setTimeout&&ee.setTimeout,_s=Rt.ceil,ys=Rt.floor,Kc=it.getOwnPropertySymbols,z_=ms?ms.isBuffer:r,wf=ee.isFinite,N_=us.join,H_=hf(it.keys,it),$t=Rt.max,Vt=Rt.min,F_=we.now,G_=ee.parseInt,_f=Rt.random,W_=us.reverse,Yc=bo(ee,"DataView"),Wi=bo(ee,"Map"),Xc=bo(ee,"Promise"),ei=bo(ee,"Set"),Ui=bo(ee,"WeakMap"),Vi=bo(it,"create"),ks=Ui&&new Ui,ti={},U_=wo(Yc),V_=wo(Wi),Z_=wo(Xc),j_=wo(ei),q_=wo(Ui),Es=Un?Un.prototype:r,Zi=Es?Es.valueOf:r,yf=Es?Es.toString:r;function S(n){if(yt(n)&&!Fe(n)&&!(n instanceof qe)){if(n instanceof Pr)return n;if(rt.call(n,"__wrapped__"))return k2(n)}return new Pr(n)}var ri=(function(){function n(){}return function(o){if(!_t(o))return{};if(gf)return gf(o);n.prototype=o;var u=new n;return n.prototype=r,u}})();function Ms(){}function Pr(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}S.templateSettings={escape:fw,evaluate:pw,interpolate:I1,variable:"",imports:{_:S}},S.prototype=Ms.prototype,S.prototype.constructor=S,Pr.prototype=ri(Ms.prototype),Pr.prototype.constructor=Pr;function qe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=G,this.__views__=[]}function K_(){var n=new qe(this.__wrapped__);return n.__actions__=or(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=or(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=or(this.__views__),n}function Y_(){if(this.__filtered__){var n=new qe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function X_(){var n=this.__wrapped__.value(),o=this.__dir__,u=Fe(n),p=o<0,k=u?n.length:0,x=ck(0,k,this.__views__),L=x.start,R=x.end,N=R-L,oe=p?R:L-1,te=this.__iteratees__,le=te.length,ve=0,ye=Vt(N,this.__takeCount__);if(!u||!p&&k==N&&ye==N)return Vf(n,this.__actions__);var Ce=[];e:for(;N--&&ve<ye;){oe+=o;for(var Be=-1,Oe=n[oe];++Be<le;){var at=te[Be],Ke=at.iteratee,Jt=at.type,rn=Ke(Oe);if(Jt==Ie)Oe=rn;else if(!rn){if(Jt==Q)continue e;break e}}Ce[ve++]=Oe}return Ce}qe.prototype=ri(Ms.prototype),qe.prototype.constructor=qe;function po(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var p=n[o];this.set(p[0],p[1])}}function J_(){this.__data__=Vi?Vi(null):{},this.size=0}function Q_(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function ey(n){var o=this.__data__;if(Vi){var u=o[n];return u===h?r:u}return rt.call(o,n)?o[n]:r}function ty(n){var o=this.__data__;return Vi?o[n]!==r:rt.call(o,n)}function ry(n,o){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Vi&&o===r?h:o,this}po.prototype.clear=J_,po.prototype.delete=Q_,po.prototype.get=ey,po.prototype.has=ty,po.prototype.set=ry;function mn(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var p=n[o];this.set(p[0],p[1])}}function ny(){this.__data__=[],this.size=0}function oy(n){var o=this.__data__,u=Ss(o,n);return u<0?!1:(u==o.length-1?o.pop():bs.call(o,u,1),--this.size,!0)}function iy(n){var o=this.__data__,u=Ss(o,n);return u<0?r:o[u][1]}function ay(n){return Ss(this.__data__,n)>-1}function sy(n,o){var u=this.__data__,p=Ss(u,n);return p<0?(++this.size,u.push([n,o])):u[p][1]=o,this}mn.prototype.clear=ny,mn.prototype.delete=oy,mn.prototype.get=iy,mn.prototype.has=ay,mn.prototype.set=sy;function gn(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var p=n[o];this.set(p[0],p[1])}}function ly(){this.size=0,this.__data__={hash:new po,map:new(Wi||mn),string:new po}}function cy(n){var o=Bs(this,n).delete(n);return this.size-=o?1:0,o}function dy(n){return Bs(this,n).get(n)}function uy(n){return Bs(this,n).has(n)}function hy(n,o){var u=Bs(this,n),p=u.size;return u.set(n,o),this.size+=u.size==p?0:1,this}gn.prototype.clear=ly,gn.prototype.delete=cy,gn.prototype.get=dy,gn.prototype.has=uy,gn.prototype.set=hy;function mo(n){var o=-1,u=n==null?0:n.length;for(this.__data__=new gn;++o<u;)this.add(n[o])}function fy(n){return this.__data__.set(n,h),this}function py(n){return this.__data__.has(n)}mo.prototype.add=mo.prototype.push=fy,mo.prototype.has=py;function Ur(n){var o=this.__data__=new mn(n);this.size=o.size}function my(){this.__data__=new mn,this.size=0}function gy(n){var o=this.__data__,u=o.delete(n);return this.size=o.size,u}function vy(n){return this.__data__.get(n)}function by(n){return this.__data__.has(n)}function wy(n,o){var u=this.__data__;if(u instanceof mn){var p=u.__data__;if(!Wi||p.length<199)return p.push([n,o]),this.size=++u.size,this;u=this.__data__=new gn(p)}return u.set(n,o),this.size=u.size,this}Ur.prototype.clear=my,Ur.prototype.delete=gy,Ur.prototype.get=vy,Ur.prototype.has=by,Ur.prototype.set=wy;function kf(n,o){var u=Fe(n),p=!u&&_o(n),k=!u&&!p&&Kn(n),x=!u&&!p&&!k&&ai(n),L=u||p||k||x,R=L?Vc(n.length,C_):[],N=R.length;for(var oe in n)(o||rt.call(n,oe))&&!(L&&(oe=="length"||k&&(oe=="offset"||oe=="parent")||x&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||wn(oe,N)))&&R.push(oe);return R}function Ef(n){var o=n.length;return o?n[ld(0,o-1)]:r}function _y(n,o){return zs(or(n),go(o,0,n.length))}function yy(n){return zs(or(n))}function Jc(n,o,u){(u!==r&&!Zr(n[o],u)||u===r&&!(o in n))&&Qr(n,o,u)}function ji(n,o,u){var p=n[o];(!(rt.call(n,o)&&Zr(p,u))||u===r&&!(o in n))&&Qr(n,o,u)}function Ss(n,o){for(var u=n.length;u--;)if(Zr(n[u][0],o))return u;return-1}function ky(n,o,u,p){return Vn(n,function(k,x,L){o(p,k,u(k),L)}),p}function Mf(n,o){return n&&tn(o,zt(o),n)}function Ey(n,o){return n&&tn(o,ar(o),n)}function Qr(n,o,u){o=="__proto__"&&ws?ws(n,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[o]=u}function Qc(n,o){for(var u=-1,p=o.length,k=Z(p),x=n==null;++u<p;)k[u]=x?r:Rd(n,o[u]);return k}function go(n,o,u){return n===n&&(u!==r&&(n=n<=u?n:u),o!==r&&(n=n>=o?n:o)),n}function Rr(n,o,u,p,k,x){var L,R=o&b,N=o&m,oe=o&g;if(u&&(L=k?u(n,p,k,x):u(n)),L!==r)return L;if(!_t(n))return n;var te=Fe(n);if(te){if(L=uk(n),!R)return or(n,L)}else{var le=Zt(n),ve=le==Ut||le==w;if(Kn(n))return qf(n,R);if(le==I||le==Xe||ve&&!k){if(L=N||ve?{}:f2(n),!R)return N?ek(n,Ey(L,n)):Qy(n,Mf(L,n))}else{if(!ct[le])return k?n:{};L=hk(n,le,R)}}x||(x=new Ur);var ye=x.get(n);if(ye)return ye;x.set(n,L),G2(n)?n.forEach(function(Be){L.add(Rr(Be,o,u,Be,n,x))}):H2(n)&&n.forEach(function(Be,Oe){L.set(Oe,Rr(Be,o,u,Oe,n,x))});var Ce=te?r:(oe?N?wd:bd:N?ar:zt)(n);return yr(Ce||n,function(Be,Oe){Ce&&(Oe=Be,Be=n[Oe]),ji(L,Oe,Rr(Be,o,u,Oe,n,x))}),L}function My(n){var o=zt(n);return function(u){return Sf(u,n,o)}}function Sf(n,o,u){var p=u.length;if(n==null)return!p;for(n=it(n);p--;){var k=u[p],x=o[k],L=n[k];if(L===r&&!(k in n)||!x(L))return!1}return!0}function Af(n,o,u){if(typeof n!="function")throw new Lr(l);return ea(function(){n.apply(r,u)},o)}function qi(n,o,u,p){var k=-1,x=ls,L=!0,R=n.length,N=[],oe=o.length;if(!R)return N;u&&(o=mt(o,kr(u))),p?(x=Nc,L=!1):o.length>=a&&(x=Fi,L=!1,o=new mo(o));e:for(;++k<R;){var te=n[k],le=u==null?te:u(te);if(te=p||te!==0?te:0,L&&le===le){for(var ve=oe;ve--;)if(o[ve]===le)continue e;N.push(te)}else x(o,le,p)||N.push(te)}return N}var Vn=Qf(en),xf=Qf(td,!0);function Sy(n,o){var u=!0;return Vn(n,function(p,k,x){return u=!!o(p,k,x),u}),u}function As(n,o,u){for(var p=-1,k=n.length;++p<k;){var x=n[p],L=o(x);if(L!=null&&(R===r?L===L&&!Mr(L):u(L,R)))var R=L,N=x}return N}function Ay(n,o,u,p){var k=n.length;for(u=Ge(u),u<0&&(u=-u>k?0:k+u),p=p===r||p>k?k:Ge(p),p<0&&(p+=k),p=u>p?0:U2(p);u<p;)n[u++]=o;return n}function If(n,o){var u=[];return Vn(n,function(p,k,x){o(p,k,x)&&u.push(p)}),u}function Gt(n,o,u,p,k){var x=-1,L=n.length;for(u||(u=pk),k||(k=[]);++x<L;){var R=n[x];o>0&&u(R)?o>1?Gt(R,o-1,u,p,k):Fn(k,R):p||(k[k.length]=R)}return k}var ed=e2(),Cf=e2(!0);function en(n,o){return n&&ed(n,o,zt)}function td(n,o){return n&&Cf(n,o,zt)}function xs(n,o){return Hn(o,function(u){return _n(n[u])})}function vo(n,o){o=jn(o,n);for(var u=0,p=o.length;n!=null&&u<p;)n=n[Vr(o[u++])];return u&&u==p?n:r}function Of(n,o,u){var p=o(n);return Fe(n)?p:Fn(p,u(n))}function Yt(n){return n==null?n===r?ue:T:fo&&fo in it(n)?lk(n):yk(n)}function rd(n,o){return n>o}function xy(n,o){return n!=null&&rt.call(n,o)}function Iy(n,o){return n!=null&&o in it(n)}function Cy(n,o,u){return n>=Vt(o,u)&&n<$t(o,u)}function nd(n,o,u){for(var p=u?Nc:ls,k=n[0].length,x=n.length,L=x,R=Z(x),N=1/0,oe=[];L--;){var te=n[L];L&&o&&(te=mt(te,kr(o))),N=Vt(te.length,N),R[L]=!u&&(o||k>=120&&te.length>=120)?new mo(L&&te):r}te=n[0];var le=-1,ve=R[0];e:for(;++le<k&&oe.length<N;){var ye=te[le],Ce=o?o(ye):ye;if(ye=u||ye!==0?ye:0,!(ve?Fi(ve,Ce):p(oe,Ce,u))){for(L=x;--L;){var Be=R[L];if(!(Be?Fi(Be,Ce):p(n[L],Ce,u)))continue e}ve&&ve.push(Ce),oe.push(ye)}}return oe}function Oy(n,o,u,p){return en(n,function(k,x,L){o(p,u(k),x,L)}),p}function Ki(n,o,u){o=jn(o,n),n=v2(n,o);var p=n==null?n:n[Vr(Dr(o))];return p==null?r:_r(p,n,u)}function Tf(n){return yt(n)&&Yt(n)==Xe}function Ty(n){return yt(n)&&Yt(n)==Ue}function Ly(n){return yt(n)&&Yt(n)==pt}function Yi(n,o,u,p,k){return n===o?!0:n==null||o==null||!yt(n)&&!yt(o)?n!==n&&o!==o:Py(n,o,u,p,Yi,k)}function Py(n,o,u,p,k,x){var L=Fe(n),R=Fe(o),N=L?bt:Zt(n),oe=R?bt:Zt(o);N=N==Xe?I:N,oe=oe==Xe?I:oe;var te=N==I,le=oe==I,ve=N==oe;if(ve&&Kn(n)){if(!Kn(o))return!1;L=!0,te=!1}if(ve&&!te)return x||(x=new Ur),L||ai(n)?d2(n,o,u,p,k,x):ak(n,o,N,u,p,k,x);if(!(u&y)){var ye=te&&rt.call(n,"__wrapped__"),Ce=le&&rt.call(o,"__wrapped__");if(ye||Ce){var Be=ye?n.value():n,Oe=Ce?o.value():o;return x||(x=new Ur),k(Be,Oe,u,p,x)}}return ve?(x||(x=new Ur),sk(n,o,u,p,k,x)):!1}function Ry(n){return yt(n)&&Zt(n)==J}function od(n,o,u,p){var k=u.length,x=k,L=!p;if(n==null)return!x;for(n=it(n);k--;){var R=u[k];if(L&&R[2]?R[1]!==n[R[0]]:!(R[0]in n))return!1}for(;++k<x;){R=u[k];var N=R[0],oe=n[N],te=R[1];if(L&&R[2]){if(oe===r&&!(N in n))return!1}else{var le=new Ur;if(p)var ve=p(oe,te,N,n,o,le);if(!(ve===r?Yi(te,oe,3,p,le):ve))return!1}}return!0}function Lf(n){return!_t(n)||gk(n)?!1:(_n(n)?R_:Iw).test(wo(n))}function $y(n){return yt(n)&&Yt(n)==se}function Dy(n){return yt(n)&&Zt(n)==F}function By(n){return yt(n)&&Us(n.length)&&!!ht[Yt(n)]}function Pf(n){return typeof n=="function"?n:n==null?sr:typeof n=="object"?Fe(n)?Df(n[0],n[1]):$f(n):rp(n)}function id(n){if(!Qi(n))return H_(n);var o=[];for(var u in it(n))rt.call(n,u)&&u!="constructor"&&o.push(u);return o}function zy(n){if(!_t(n))return _k(n);var o=Qi(n),u=[];for(var p in n)p=="constructor"&&(o||!rt.call(n,p))||u.push(p);return u}function ad(n,o){return n<o}function Rf(n,o){var u=-1,p=ir(n)?Z(n.length):[];return Vn(n,function(k,x,L){p[++u]=o(k,x,L)}),p}function $f(n){var o=yd(n);return o.length==1&&o[0][2]?m2(o[0][0],o[0][1]):function(u){return u===n||od(u,n,o)}}function Df(n,o){return Ed(n)&&p2(o)?m2(Vr(n),o):function(u){var p=Rd(u,n);return p===r&&p===o?$d(u,n):Yi(o,p,3)}}function Is(n,o,u,p,k){n!==o&&ed(o,function(x,L){if(k||(k=new Ur),_t(x))Ny(n,o,L,u,Is,p,k);else{var R=p?p(Sd(n,L),x,L+"",n,o,k):r;R===r&&(R=x),Jc(n,L,R)}},ar)}function Ny(n,o,u,p,k,x,L){var R=Sd(n,u),N=Sd(o,u),oe=L.get(N);if(oe){Jc(n,u,oe);return}var te=x?x(R,N,u+"",n,o,L):r,le=te===r;if(le){var ve=Fe(N),ye=!ve&&Kn(N),Ce=!ve&&!ye&&ai(N);te=N,ve||ye||Ce?Fe(R)?te=R:St(R)?te=or(R):ye?(le=!1,te=qf(N,!0)):Ce?(le=!1,te=Kf(N,!0)):te=[]:ta(N)||_o(N)?(te=R,_o(R)?te=V2(R):(!_t(R)||_n(R))&&(te=f2(N))):le=!1}le&&(L.set(N,te),k(te,N,p,x,L),L.delete(N)),Jc(n,u,te)}function Bf(n,o){var u=n.length;if(u)return o+=o<0?u:0,wn(o,u)?n[o]:r}function zf(n,o,u){o.length?o=mt(o,function(k){return Fe(k)?function(x){return vo(x,k.length===1?k[0]:k)}:k}):o=[sr];var p=-1;return o=mt(o,kr(Te())),f_(Rf(n,function(k,x,L){return{criteria:mt(o,function(R){return R(k)}),index:++p,value:k}}),function(k,x){return Jy(k,x,u)})}function Hy(n,o){return Nf(n,o,function(u,p){return $d(n,p)})}function Nf(n,o,u){for(var p=-1,k=o.length,x={};++p<k;){var L=o[p],R=vo(n,L);u(R,L)&&Xi(x,jn(L,n),R)}return x}function Fy(n){return function(o){return vo(o,n)}}function sd(n,o,u,p){var k=p?h_:Yo,x=-1,L=o.length,R=n;for(n===o&&(o=or(o)),u&&(R=mt(n,kr(u)));++x<L;)for(var N=0,oe=o[x],te=u?u(oe):oe;(N=k(R,te,N,p))>-1;)R!==n&&bs.call(R,N,1),bs.call(n,N,1);return n}function Hf(n,o){for(var u=n?o.length:0,p=u-1;u--;){var k=o[u];if(u==p||k!==x){var x=k;wn(k)?bs.call(n,k,1):ud(n,k)}}return n}function ld(n,o){return n+ys(_f()*(o-n+1))}function Gy(n,o,u,p){for(var k=-1,x=$t(_s((o-n)/(u||1)),0),L=Z(x);x--;)L[p?x:++k]=n,n+=u;return L}function cd(n,o){var u="";if(!n||o<1||o>ie)return u;do o%2&&(u+=n),o=ys(o/2),o&&(n+=n);while(o);return u}function je(n,o){return Ad(g2(n,o,sr),n+"")}function Wy(n){return Ef(si(n))}function Uy(n,o){var u=si(n);return zs(u,go(o,0,u.length))}function Xi(n,o,u,p){if(!_t(n))return n;o=jn(o,n);for(var k=-1,x=o.length,L=x-1,R=n;R!=null&&++k<x;){var N=Vr(o[k]),oe=u;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(k!=L){var te=R[N];oe=p?p(te,N,R):r,oe===r&&(oe=_t(te)?te:wn(o[k+1])?[]:{})}ji(R,N,oe),R=R[N]}return n}var Ff=ks?function(n,o){return ks.set(n,o),n}:sr,Vy=ws?function(n,o){return ws(n,"toString",{configurable:!0,enumerable:!1,value:Bd(o),writable:!0})}:sr;function Zy(n){return zs(si(n))}function $r(n,o,u){var p=-1,k=n.length;o<0&&(o=-o>k?0:k+o),u=u>k?k:u,u<0&&(u+=k),k=o>u?0:u-o>>>0,o>>>=0;for(var x=Z(k);++p<k;)x[p]=n[p+o];return x}function jy(n,o){var u;return Vn(n,function(p,k,x){return u=o(p,k,x),!u}),!!u}function Cs(n,o,u){var p=0,k=n==null?p:n.length;if(typeof o=="number"&&o===o&&k<=me){for(;p<k;){var x=p+k>>>1,L=n[x];L!==null&&!Mr(L)&&(u?L<=o:L<o)?p=x+1:k=x}return k}return dd(n,o,sr,u)}function dd(n,o,u,p){var k=0,x=n==null?0:n.length;if(x===0)return 0;o=u(o);for(var L=o!==o,R=o===null,N=Mr(o),oe=o===r;k<x;){var te=ys((k+x)/2),le=u(n[te]),ve=le!==r,ye=le===null,Ce=le===le,Be=Mr(le);if(L)var Oe=p||Ce;else oe?Oe=Ce&&(p||ve):R?Oe=Ce&&ve&&(p||!ye):N?Oe=Ce&&ve&&!ye&&(p||!Be):ye||Be?Oe=!1:Oe=p?le<=o:le<o;Oe?k=te+1:x=te}return Vt(x,Se)}function Gf(n,o){for(var u=-1,p=n.length,k=0,x=[];++u<p;){var L=n[u],R=o?o(L):L;if(!u||!Zr(R,N)){var N=R;x[k++]=L===0?0:L}}return x}function Wf(n){return typeof n=="number"?n:Mr(n)?W:+n}function Er(n){if(typeof n=="string")return n;if(Fe(n))return mt(n,Er)+"";if(Mr(n))return yf?yf.call(n):"";var o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function Zn(n,o,u){var p=-1,k=ls,x=n.length,L=!0,R=[],N=R;if(u)L=!1,k=Nc;else if(x>=a){var oe=o?null:ok(n);if(oe)return ds(oe);L=!1,k=Fi,N=new mo}else N=o?[]:R;e:for(;++p<x;){var te=n[p],le=o?o(te):te;if(te=u||te!==0?te:0,L&&le===le){for(var ve=N.length;ve--;)if(N[ve]===le)continue e;o&&N.push(le),R.push(te)}else k(N,le,u)||(N!==R&&N.push(le),R.push(te))}return R}function ud(n,o){o=jn(o,n);var u=-1,p=o.length;if(!p)return!0;for(;++u<p;){var k=Vr(o[u]);if(k==="__proto__"&&!rt.call(n,"__proto__")||(k==="constructor"||k==="prototype")&&u<p-1)return!1}var x=v2(n,o);return x==null||delete x[Vr(Dr(o))]}function Uf(n,o,u,p){return Xi(n,o,u(vo(n,o)),p)}function Os(n,o,u,p){for(var k=n.length,x=p?k:-1;(p?x--:++x<k)&&o(n[x],x,n););return u?$r(n,p?0:x,p?x+1:k):$r(n,p?x+1:0,p?k:x)}function Vf(n,o){var u=n;return u instanceof qe&&(u=u.value()),Hc(o,function(p,k){return k.func.apply(k.thisArg,Fn([p],k.args))},u)}function hd(n,o,u){var p=n.length;if(p<2)return p?Zn(n[0]):[];for(var k=-1,x=Z(p);++k<p;)for(var L=n[k],R=-1;++R<p;)R!=k&&(x[k]=qi(x[k]||L,n[R],o,u));return Zn(Gt(x,1),o,u)}function Zf(n,o,u){for(var p=-1,k=n.length,x=o.length,L={};++p<k;){var R=p<x?o[p]:r;u(L,n[p],R)}return L}function fd(n){return St(n)?n:[]}function pd(n){return typeof n=="function"?n:sr}function jn(n,o){return Fe(n)?n:Ed(n,o)?[n]:y2(nt(n))}var qy=je;function qn(n,o,u){var p=n.length;return u=u===r?p:u,!o&&u>=p?n:$r(n,o,u)}var jf=$_||function(n){return Bt.clearTimeout(n)};function qf(n,o){if(o)return n.slice();var u=n.length,p=mf?mf(u):new n.constructor(u);return n.copy(p),p}function md(n){var o=new n.constructor(n.byteLength);return new gs(o).set(new gs(n)),o}function Ky(n,o){var u=o?md(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function Yy(n){var o=new n.constructor(n.source,O1.exec(n));return o.lastIndex=n.lastIndex,o}function Xy(n){return Zi?it(Zi.call(n)):{}}function Kf(n,o){var u=o?md(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function Yf(n,o){if(n!==o){var u=n!==r,p=n===null,k=n===n,x=Mr(n),L=o!==r,R=o===null,N=o===o,oe=Mr(o);if(!R&&!oe&&!x&&n>o||x&&L&&N&&!R&&!oe||p&&L&&N||!u&&N||!k)return 1;if(!p&&!x&&!oe&&n<o||oe&&u&&k&&!p&&!x||R&&u&&k||!L&&k||!N)return-1}return 0}function Jy(n,o,u){for(var p=-1,k=n.criteria,x=o.criteria,L=k.length,R=u.length;++p<L;){var N=Yf(k[p],x[p]);if(N)return p>=R?N:N*(u[p]=="desc"?-1:1)}return n.index-o.index}function Xf(n,o,u,p){for(var k=-1,x=n.length,L=u.length,R=-1,N=o.length,oe=$t(x-L,0),te=Z(N+oe),le=!p;++R<N;)te[R]=o[R];for(;++k<L;)(le||k<x)&&(te[u[k]]=n[k]);for(;oe--;)te[R++]=n[k++];return te}function Jf(n,o,u,p){for(var k=-1,x=n.length,L=-1,R=u.length,N=-1,oe=o.length,te=$t(x-R,0),le=Z(te+oe),ve=!p;++k<te;)le[k]=n[k];for(var ye=k;++N<oe;)le[ye+N]=o[N];for(;++L<R;)(ve||k<x)&&(le[ye+u[L]]=n[k++]);return le}function or(n,o){var u=-1,p=n.length;for(o||(o=Z(p));++u<p;)o[u]=n[u];return o}function tn(n,o,u,p){var k=!u;u||(u={});for(var x=-1,L=o.length;++x<L;){var R=o[x],N=p?p(u[R],n[R],R,u,n):r;N===r&&(N=n[R]),k?Qr(u,R,N):ji(u,R,N)}return u}function Qy(n,o){return tn(n,kd(n),o)}function ek(n,o){return tn(n,u2(n),o)}function Ts(n,o){return function(u,p){var k=Fe(u)?a_:ky,x=o?o():{};return k(u,n,Te(p,2),x)}}function ni(n){return je(function(o,u){var p=-1,k=u.length,x=k>1?u[k-1]:r,L=k>2?u[2]:r;for(x=n.length>3&&typeof x=="function"?(k--,x):r,L&&Xt(u[0],u[1],L)&&(x=k<3?r:x,k=1),o=it(o);++p<k;){var R=u[p];R&&n(o,R,p,x)}return o})}function Qf(n,o){return function(u,p){if(u==null)return u;if(!ir(u))return n(u,p);for(var k=u.length,x=o?k:-1,L=it(u);(o?x--:++x<k)&&p(L[x],x,L)!==!1;);return u}}function e2(n){return function(o,u,p){for(var k=-1,x=it(o),L=p(o),R=L.length;R--;){var N=L[n?R:++k];if(u(x[N],N,x)===!1)break}return o}}function tk(n,o,u){var p=o&E,k=Ji(n);function x(){return(this&&this!==Bt&&this instanceof x?k:n).apply(p?u:this,arguments)}return x}function t2(n){return function(o){o=nt(o);var u=Xo(o)?Wr(o):r,p=u?u[0]:o.charAt(0),k=u?qn(u,1).join(""):o.slice(1);return p[n]()+k}}function oi(n){return function(o){return Hc(ep(Q2(o).replace(Zw,"")),n,"")}}function Ji(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=ri(n.prototype),p=n.apply(u,o);return _t(p)?p:u}}function rk(n,o,u){var p=Ji(n);function k(){for(var x=arguments.length,L=Z(x),R=x,N=ii(k);R--;)L[R]=arguments[R];var oe=x<3&&L[0]!==N&&L[x-1]!==N?[]:Gn(L,N);return x-=oe.length,x<u?a2(n,o,Ls,k.placeholder,r,L,oe,r,r,u-x):_r(this&&this!==Bt&&this instanceof k?p:n,this,L)}return k}function r2(n){return function(o,u,p){var k=it(o);if(!ir(o)){var x=Te(u,3);o=zt(o),u=function(R){return x(k[R],R,k)}}var L=n(o,u,p);return L>-1?k[x?o[L]:L]:r}}function n2(n){return bn(function(o){var u=o.length,p=u,k=Pr.prototype.thru;for(n&&o.reverse();p--;){var x=o[p];if(typeof x!="function")throw new Lr(l);if(k&&!L&&Ds(x)=="wrapper")var L=new Pr([],!0)}for(p=L?p:u;++p<u;){x=o[p];var R=Ds(x),N=R=="wrapper"?_d(x):r;N&&Md(N[0])&&N[1]==(re|O|j|H)&&!N[4].length&&N[9]==1?L=L[Ds(N[0])].apply(L,N[3]):L=x.length==1&&Md(x)?L[R]():L.thru(x)}return function(){var oe=arguments,te=oe[0];if(L&&oe.length==1&&Fe(te))return L.plant(te).value();for(var le=0,ve=u?o[le].apply(this,oe):te;++le<u;)ve=o[le].call(this,ve);return ve}})}function Ls(n,o,u,p,k,x,L,R,N,oe){var te=o&re,le=o&E,ve=o&A,ye=o&(O|$),Ce=o&fe,Be=ve?r:Ji(n);function Oe(){for(var at=arguments.length,Ke=Z(at),Jt=at;Jt--;)Ke[Jt]=arguments[Jt];if(ye)var rn=ii(Oe),Yn=m_(Ke,rn);if(p&&(Ke=Xf(Ke,p,k,ye)),x&&(Ke=Jf(Ke,x,L,ye)),at-=Yn,ye&&at<oe){var At=Gn(Ke,rn);return a2(n,o,Ls,Oe.placeholder,u,Ke,At,R,N,oe-at)}var jr=le?u:this,kn=ve?jr[n]:n;return at=Ke.length,R?Ke=kk(Ke,R):Ce&&at>1&&Ke.reverse(),te&&N<at&&(Ke.length=N),this&&this!==Bt&&this instanceof Oe&&(kn=Be||Ji(kn)),kn.apply(jr,Ke)}return Oe}function o2(n,o){return function(u,p){return Oy(u,n,o(p),{})}}function Ps(n,o){return function(u,p){var k;if(u===r&&p===r)return o;if(u!==r&&(k=u),p!==r){if(k===r)return p;typeof u=="string"||typeof p=="string"?(u=Er(u),p=Er(p)):(u=Wf(u),p=Wf(p)),k=n(u,p)}return k}}function gd(n){return bn(function(o){return o=mt(o,kr(Te())),je(function(u){var p=this;return n(o,function(k){return _r(k,p,u)})})})}function Rs(n,o){o=o===r?" ":Er(o);var u=o.length;if(u<2)return u?cd(o,n):o;var p=cd(o,_s(n/Jo(o)));return Xo(o)?qn(Wr(p),0,n).join(""):p.slice(0,n)}function nk(n,o,u,p){var k=o&E,x=Ji(n);function L(){for(var R=-1,N=arguments.length,oe=-1,te=p.length,le=Z(te+N),ve=this&&this!==Bt&&this instanceof L?x:n;++oe<te;)le[oe]=p[oe];for(;N--;)le[oe++]=arguments[++R];return _r(ve,k?u:this,le)}return L}function i2(n){return function(o,u,p){return p&&typeof p!="number"&&Xt(o,u,p)&&(u=p=r),o=yn(o),u===r?(u=o,o=0):u=yn(u),p=p===r?o<u?1:-1:yn(p),Gy(o,u,p,n)}}function $s(n){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Br(o),u=Br(u)),n(o,u)}}function a2(n,o,u,p,k,x,L,R,N,oe){var te=o&O,le=te?L:r,ve=te?r:L,ye=te?x:r,Ce=te?r:x;o|=te?j:U,o&=~(te?U:j),o&C||(o&=~(E|A));var Be=[n,o,k,ye,le,Ce,ve,R,N,oe],Oe=u.apply(r,Be);return Md(n)&&b2(Oe,Be),Oe.placeholder=p,w2(Oe,n,o)}function vd(n){var o=Rt[n];return function(u,p){if(u=Br(u),p=p==null?0:Vt(Ge(p),292),p&&wf(u)){var k=(nt(u)+"e").split("e");return k=(nt(o(k[0]+"e"+(+k[1]+p)))+"e").split("e"),+(k[0]+"e"+(+k[1]-p))}return o(u)}}var ok=ei&&1/ds(new ei([,-0]))[1]==Le?function(n){return new ei(n)}:Hd;function s2(n){return function(o){var u=Zt(o);return u==J?jc(o):u==F?k_(o):p_(o,n(o))}}function vn(n,o,u,p,k,x,L,R){var N=o&A;if(!N&&typeof n!="function")throw new Lr(l);var oe=p?p.length:0;if(oe||(o&=~(j|U),p=k=r),L=L===r?L:$t(Ge(L),0),R=R===r?R:Ge(R),oe-=k?k.length:0,o&U){var te=p,le=k;p=k=r}var ve=N?r:_d(n),ye=[n,o,u,p,k,te,le,x,L,R];if(ve&&wk(ye,ve),n=ye[0],o=ye[1],u=ye[2],p=ye[3],k=ye[4],R=ye[9]=ye[9]===r?N?0:n.length:$t(ye[9]-oe,0),!R&&o&(O|$)&&(o&=~(O|$)),!o||o==E)var Ce=tk(n,o,u);else o==O||o==$?Ce=rk(n,o,R):(o==j||o==(E|j))&&!k.length?Ce=nk(n,o,u,p):Ce=Ls.apply(r,ye);return w2((ve?Ff:b2)(Ce,ye),n,o)}function l2(n,o,u,p){return n===r||Zr(n,Qo[u])&&!rt.call(p,u)?o:n}function c2(n,o,u,p,k,x){return _t(n)&&_t(o)&&(x.set(o,n),Is(n,o,r,c2,x),x.delete(o)),n}function ik(n){return ta(n)?r:n}function d2(n,o,u,p,k,x){var L=u&y,R=n.length,N=o.length;if(R!=N&&!(L&&N>R))return!1;var oe=x.get(n),te=x.get(o);if(oe&&te)return oe==o&&te==n;var le=-1,ve=!0,ye=u&_?new mo:r;for(x.set(n,o),x.set(o,n);++le<R;){var Ce=n[le],Be=o[le];if(p)var Oe=L?p(Be,Ce,le,o,n,x):p(Ce,Be,le,n,o,x);if(Oe!==r){if(Oe)continue;ve=!1;break}if(ye){if(!Fc(o,function(at,Ke){if(!Fi(ye,Ke)&&(Ce===at||k(Ce,at,u,p,x)))return ye.push(Ke)})){ve=!1;break}}else if(!(Ce===Be||k(Ce,Be,u,p,x))){ve=!1;break}}return x.delete(n),x.delete(o),ve}function ak(n,o,u,p,k,x,L){switch(u){case Pt:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case Ue:return!(n.byteLength!=o.byteLength||!x(new gs(n),new gs(o)));case We:case pt:case q:return Zr(+n,+o);case Kt:return n.name==o.name&&n.message==o.message;case se:case de:return n==o+"";case J:var R=jc;case F:var N=p&y;if(R||(R=ds),n.size!=o.size&&!N)return!1;var oe=L.get(n);if(oe)return oe==o;p|=_,L.set(n,o);var te=d2(R(n),R(o),p,k,x,L);return L.delete(n),te;case ge:if(Zi)return Zi.call(n)==Zi.call(o)}return!1}function sk(n,o,u,p,k,x){var L=u&y,R=bd(n),N=R.length;if(N!=bd(o).length&&!L)return!1;for(var oe=N;oe--;){var te=R[oe];if(!(L?te in o:rt.call(o,te)))return!1}var le=x.get(n),ve=x.get(o);if(le&&ve)return le==o&&ve==n;var ye=!0;x.set(n,o),x.set(o,n);for(var Ce=L;++oe<N;){te=R[oe];var Be=n[te],Oe=o[te];if(p)var at=L?p(Oe,Be,te,o,n,x):p(Be,Oe,te,n,o,x);if(!(at===r?Be===Oe||k(Be,Oe,u,p,x):at)){ye=!1;break}Ce||(Ce=te=="constructor")}if(ye&&!Ce){var Ke=n.constructor,Jt=o.constructor;Ke!=Jt&&"constructor"in n&&"constructor"in o&&!(typeof Ke=="function"&&Ke instanceof Ke&&typeof Jt=="function"&&Jt instanceof Jt)&&(ye=!1)}return x.delete(n),x.delete(o),ye}function bn(n){return Ad(g2(n,r,S2),n+"")}function bd(n){return Of(n,zt,kd)}function wd(n){return Of(n,ar,u2)}var _d=ks?function(n){return ks.get(n)}:Hd;function Ds(n){for(var o=n.name+"",u=ti[o],p=rt.call(ti,o)?u.length:0;p--;){var k=u[p],x=k.func;if(x==null||x==n)return k.name}return o}function ii(n){return(rt.call(S,"placeholder")?S:n).placeholder}function Te(){var n=S.iteratee||zd;return n=n===zd?Pf:n,arguments.length?n(arguments[0],arguments[1]):n}function Bs(n,o){var u=n.__data__;return mk(o)?u[typeof o=="string"?"string":"hash"]:u.map}function yd(n){for(var o=zt(n),u=o.length;u--;){var p=o[u],k=n[p];o[u]=[p,k,p2(k)]}return o}function bo(n,o){var u=w_(n,o);return Lf(u)?u:r}function lk(n){var o=rt.call(n,fo),u=n[fo];try{n[fo]=r;var p=!0}catch{}var k=ps.call(n);return p&&(o?n[fo]=u:delete n[fo]),k}var kd=Kc?function(n){return n==null?[]:(n=it(n),Hn(Kc(n),function(o){return vf.call(n,o)}))}:Fd,u2=Kc?function(n){for(var o=[];n;)Fn(o,kd(n)),n=vs(n);return o}:Fd,Zt=Yt;(Yc&&Zt(new Yc(new ArrayBuffer(1)))!=Pt||Wi&&Zt(new Wi)!=J||Xc&&Zt(Xc.resolve())!=z||ei&&Zt(new ei)!=F||Ui&&Zt(new Ui)!=Me)&&(Zt=function(n){var o=Yt(n),u=o==I?n.constructor:r,p=u?wo(u):"";if(p)switch(p){case U_:return Pt;case V_:return J;case Z_:return z;case j_:return F;case q_:return Me}return o});function ck(n,o,u){for(var p=-1,k=u.length;++p<k;){var x=u[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":o-=L;break;case"take":o=Vt(o,n+L);break;case"takeRight":n=$t(n,o-L)}}return{start:n,end:o}}function dk(n){var o=n.match(yw);return o?o[1].split(kw):[]}function h2(n,o,u){o=jn(o,n);for(var p=-1,k=o.length,x=!1;++p<k;){var L=Vr(o[p]);if(!(x=n!=null&&u(n,L)))break;n=n[L]}return x||++p!=k?x:(k=n==null?0:n.length,!!k&&Us(k)&&wn(L,k)&&(Fe(n)||_o(n)))}function uk(n){var o=n.length,u=new n.constructor(o);return o&&typeof n[0]=="string"&&rt.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function f2(n){return typeof n.constructor=="function"&&!Qi(n)?ri(vs(n)):{}}function hk(n,o,u){var p=n.constructor;switch(o){case Ue:return md(n);case We:case pt:return new p(+n);case Pt:return Ky(n,u);case fn:case nr:case pn:case ut:case zn:case co:case wr:case qo:case Hi:return Kf(n,u);case J:return new p;case q:case de:return new p(n);case se:return Yy(n);case F:return new p;case ge:return Xy(n)}}function fk(n,o){var u=o.length;if(!u)return n;var p=u-1;return o[p]=(u>1?"& ":"")+o[p],o=o.join(u>2?", ":" "),n.replace(_w,`{
/* [wrapped with `+o+`] */
`)}function pk(n){return Fe(n)||_o(n)||!!(bf&&n&&n[bf])}function wn(n,o){var u=typeof n;return o=o??ie,!!o&&(u=="number"||u!="symbol"&&Ow.test(n))&&n>-1&&n%1==0&&n<o}function Xt(n,o,u){if(!_t(u))return!1;var p=typeof o;return(p=="number"?ir(u)&&wn(o,u.length):p=="string"&&o in u)?Zr(u[o],n):!1}function Ed(n,o){if(Fe(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||Mr(n)?!0:gw.test(n)||!mw.test(n)||o!=null&&n in it(o)}function mk(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Md(n){var o=Ds(n),u=S[o];if(typeof u!="function"||!(o in qe.prototype))return!1;if(n===u)return!0;var p=_d(u);return!!p&&n===p[0]}function gk(n){return!!pf&&pf in n}var vk=hs?_n:Gd;function Qi(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||Qo)}function p2(n){return n===n&&!_t(n)}function m2(n,o){return function(u){return u==null?!1:u[n]===o&&(o!==r||n in it(u))}}function bk(n){var o=Gs(n,function(p){return u.size===f&&u.clear(),p}),u=o.cache;return o}function wk(n,o){var u=n[1],p=o[1],k=u|p,x=k<(E|A|re),L=p==re&&u==O||p==re&&u==H&&n[7].length<=o[8]||p==(re|H)&&o[7].length<=o[8]&&u==O;if(!(x||L))return n;p&E&&(n[2]=o[2],k|=u&E?0:C);var R=o[3];if(R){var N=n[3];n[3]=N?Xf(N,R,o[4]):R,n[4]=N?Gn(n[3],v):o[4]}return R=o[5],R&&(N=n[5],n[5]=N?Jf(N,R,o[6]):R,n[6]=N?Gn(n[5],v):o[6]),R=o[7],R&&(n[7]=R),p&re&&(n[8]=n[8]==null?o[8]:Vt(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=k,n}function _k(n){var o=[];if(n!=null)for(var u in it(n))o.push(u);return o}function yk(n){return ps.call(n)}function g2(n,o,u){return o=$t(o===r?n.length-1:o,0),function(){for(var p=arguments,k=-1,x=$t(p.length-o,0),L=Z(x);++k<x;)L[k]=p[o+k];k=-1;for(var R=Z(o+1);++k<o;)R[k]=p[k];return R[o]=u(L),_r(n,this,R)}}function v2(n,o){return o.length<2?n:vo(n,$r(o,0,-1))}function kk(n,o){for(var u=n.length,p=Vt(o.length,u),k=or(n);p--;){var x=o[p];n[p]=wn(x,u)?k[x]:r}return n}function Sd(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var b2=_2(Ff),ea=B_||function(n,o){return Bt.setTimeout(n,o)},Ad=_2(Vy);function w2(n,o,u){var p=o+"";return Ad(n,fk(p,Ek(dk(p),u)))}function _2(n){var o=0,u=0;return function(){var p=F_(),k=M-(p-u);if(u=p,k>0){if(++o>=X)return arguments[0]}else o=0;return n.apply(r,arguments)}}function zs(n,o){var u=-1,p=n.length,k=p-1;for(o=o===r?p:o;++u<o;){var x=ld(u,k),L=n[x];n[x]=n[u],n[u]=L}return n.length=o,n}var y2=bk(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(vw,function(u,p,k,x){o.push(k?x.replace(Mw,"$1"):p||u)}),o});function Vr(n){if(typeof n=="string"||Mr(n))return n;var o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function wo(n){if(n!=null){try{return fs.call(n)}catch{}try{return n+""}catch{}}return""}function Ek(n,o){return yr(pe,function(u){var p="_."+u[0];o&u[1]&&!ls(n,p)&&n.push(p)}),n.sort()}function k2(n){if(n instanceof qe)return n.clone();var o=new Pr(n.__wrapped__,n.__chain__);return o.__actions__=or(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function Mk(n,o,u){(u?Xt(n,o,u):o===r)?o=1:o=$t(Ge(o),0);var p=n==null?0:n.length;if(!p||o<1)return[];for(var k=0,x=0,L=Z(_s(p/o));k<p;)L[x++]=$r(n,k,k+=o);return L}function Sk(n){for(var o=-1,u=n==null?0:n.length,p=0,k=[];++o<u;){var x=n[o];x&&(k[p++]=x)}return k}function Ak(){var n=arguments.length;if(!n)return[];for(var o=Z(n-1),u=arguments[0],p=n;p--;)o[p-1]=arguments[p];return Fn(Fe(u)?or(u):[u],Gt(o,1))}var xk=je(function(n,o){return St(n)?qi(n,Gt(o,1,St,!0)):[]}),Ik=je(function(n,o){var u=Dr(o);return St(u)&&(u=r),St(n)?qi(n,Gt(o,1,St,!0),Te(u,2)):[]}),Ck=je(function(n,o){var u=Dr(o);return St(u)&&(u=r),St(n)?qi(n,Gt(o,1,St,!0),r,u):[]});function Ok(n,o,u){var p=n==null?0:n.length;return p?(o=u||o===r?1:Ge(o),$r(n,o<0?0:o,p)):[]}function Tk(n,o,u){var p=n==null?0:n.length;return p?(o=u||o===r?1:Ge(o),o=p-o,$r(n,0,o<0?0:o)):[]}function Lk(n,o){return n&&n.length?Os(n,Te(o,3),!0,!0):[]}function Pk(n,o){return n&&n.length?Os(n,Te(o,3),!0):[]}function Rk(n,o,u,p){var k=n==null?0:n.length;return k?(u&&typeof u!="number"&&Xt(n,o,u)&&(u=0,p=k),Ay(n,o,u,p)):[]}function E2(n,o,u){var p=n==null?0:n.length;if(!p)return-1;var k=u==null?0:Ge(u);return k<0&&(k=$t(p+k,0)),cs(n,Te(o,3),k)}function M2(n,o,u){var p=n==null?0:n.length;if(!p)return-1;var k=p-1;return u!==r&&(k=Ge(u),k=u<0?$t(p+k,0):Vt(k,p-1)),cs(n,Te(o,3),k,!0)}function S2(n){return n!=null&&n.length?Gt(n,1):[]}function $k(n){return n!=null&&n.length?Gt(n,Le):[]}function Dk(n,o){return n!=null&&n.length?(o=o===r?1:Ge(o),Gt(n,o)):[]}function Bk(n){for(var o=-1,u=n==null?0:n.length,p={};++o<u;){var k=n[o];Qr(p,k[0],k[1])}return p}function A2(n){return n&&n.length?n[0]:r}function zk(n,o,u){var p=n==null?0:n.length;if(!p)return-1;var k=u==null?0:Ge(u);return k<0&&(k=$t(p+k,0)),Yo(n,o,k)}function Nk(n){return n!=null&&n.length?$r(n,0,-1):[]}var Hk=je(function(n){var o=mt(n,fd);return o.length&&o[0]===n[0]?nd(o):[]}),Fk=je(function(n){var o=Dr(n),u=mt(n,fd);return o===Dr(u)?o=r:u.pop(),u.length&&u[0]===n[0]?nd(u,Te(o,2)):[]}),Gk=je(function(n){var o=Dr(n),u=mt(n,fd);return o=typeof o=="function"?o:r,o&&u.pop(),u.length&&u[0]===n[0]?nd(u,r,o):[]});function Wk(n,o){return n==null?"":N_.call(n,o)}function Dr(n){var o=n==null?0:n.length;return o?n[o-1]:r}function Uk(n,o,u){var p=n==null?0:n.length;if(!p)return-1;var k=p;return u!==r&&(k=Ge(u),k=k<0?$t(p+k,0):Vt(k,p-1)),o===o?M_(n,o,k):cs(n,af,k,!0)}function Vk(n,o){return n&&n.length?Bf(n,Ge(o)):r}var Zk=je(x2);function x2(n,o){return n&&n.length&&o&&o.length?sd(n,o):n}function jk(n,o,u){return n&&n.length&&o&&o.length?sd(n,o,Te(u,2)):n}function qk(n,o,u){return n&&n.length&&o&&o.length?sd(n,o,r,u):n}var Kk=bn(function(n,o){var u=n==null?0:n.length,p=Qc(n,o);return Hf(n,mt(o,function(k){return wn(k,u)?+k:k}).sort(Yf)),p});function Yk(n,o){var u=[];if(!(n&&n.length))return u;var p=-1,k=[],x=n.length;for(o=Te(o,3);++p<x;){var L=n[p];o(L,p,n)&&(u.push(L),k.push(p))}return Hf(n,k),u}function xd(n){return n==null?n:W_.call(n)}function Xk(n,o,u){var p=n==null?0:n.length;return p?(u&&typeof u!="number"&&Xt(n,o,u)?(o=0,u=p):(o=o==null?0:Ge(o),u=u===r?p:Ge(u)),$r(n,o,u)):[]}function Jk(n,o){return Cs(n,o)}function Qk(n,o,u){return dd(n,o,Te(u,2))}function eE(n,o){var u=n==null?0:n.length;if(u){var p=Cs(n,o);if(p<u&&Zr(n[p],o))return p}return-1}function tE(n,o){return Cs(n,o,!0)}function rE(n,o,u){return dd(n,o,Te(u,2),!0)}function nE(n,o){if(n!=null&&n.length){var u=Cs(n,o,!0)-1;if(Zr(n[u],o))return u}return-1}function oE(n){return n&&n.length?Gf(n):[]}function iE(n,o){return n&&n.length?Gf(n,Te(o,2)):[]}function aE(n){var o=n==null?0:n.length;return o?$r(n,1,o):[]}function sE(n,o,u){return n&&n.length?(o=u||o===r?1:Ge(o),$r(n,0,o<0?0:o)):[]}function lE(n,o,u){var p=n==null?0:n.length;return p?(o=u||o===r?1:Ge(o),o=p-o,$r(n,o<0?0:o,p)):[]}function cE(n,o){return n&&n.length?Os(n,Te(o,3),!1,!0):[]}function dE(n,o){return n&&n.length?Os(n,Te(o,3)):[]}var uE=je(function(n){return Zn(Gt(n,1,St,!0))}),hE=je(function(n){var o=Dr(n);return St(o)&&(o=r),Zn(Gt(n,1,St,!0),Te(o,2))}),fE=je(function(n){var o=Dr(n);return o=typeof o=="function"?o:r,Zn(Gt(n,1,St,!0),r,o)});function pE(n){return n&&n.length?Zn(n):[]}function mE(n,o){return n&&n.length?Zn(n,Te(o,2)):[]}function gE(n,o){return o=typeof o=="function"?o:r,n&&n.length?Zn(n,r,o):[]}function Id(n){if(!(n&&n.length))return[];var o=0;return n=Hn(n,function(u){if(St(u))return o=$t(u.length,o),!0}),Vc(o,function(u){return mt(n,Gc(u))})}function I2(n,o){if(!(n&&n.length))return[];var u=Id(n);return o==null?u:mt(u,function(p){return _r(o,r,p)})}var vE=je(function(n,o){return St(n)?qi(n,o):[]}),bE=je(function(n){return hd(Hn(n,St))}),wE=je(function(n){var o=Dr(n);return St(o)&&(o=r),hd(Hn(n,St),Te(o,2))}),_E=je(function(n){var o=Dr(n);return o=typeof o=="function"?o:r,hd(Hn(n,St),r,o)}),yE=je(Id);function kE(n,o){return Zf(n||[],o||[],ji)}function EE(n,o){return Zf(n||[],o||[],Xi)}var ME=je(function(n){var o=n.length,u=o>1?n[o-1]:r;return u=typeof u=="function"?(n.pop(),u):r,I2(n,u)});function C2(n){var o=S(n);return o.__chain__=!0,o}function SE(n,o){return o(n),n}function Ns(n,o){return o(n)}var AE=bn(function(n){var o=n.length,u=o?n[0]:0,p=this.__wrapped__,k=function(x){return Qc(x,n)};return o>1||this.__actions__.length||!(p instanceof qe)||!wn(u)?this.thru(k):(p=p.slice(u,+u+(o?1:0)),p.__actions__.push({func:Ns,args:[k],thisArg:r}),new Pr(p,this.__chain__).thru(function(x){return o&&!x.length&&x.push(r),x}))});function xE(){return C2(this)}function IE(){return new Pr(this.value(),this.__chain__)}function CE(){this.__values__===r&&(this.__values__=W2(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function OE(){return this}function TE(n){for(var o,u=this;u instanceof Ms;){var p=k2(u);p.__index__=0,p.__values__=r,o?k.__wrapped__=p:o=p;var k=p;u=u.__wrapped__}return k.__wrapped__=n,o}function LE(){var n=this.__wrapped__;if(n instanceof qe){var o=n;return this.__actions__.length&&(o=new qe(this)),o=o.reverse(),o.__actions__.push({func:Ns,args:[xd],thisArg:r}),new Pr(o,this.__chain__)}return this.thru(xd)}function PE(){return Vf(this.__wrapped__,this.__actions__)}var RE=Ts(function(n,o,u){rt.call(n,u)?++n[u]:Qr(n,u,1)});function $E(n,o,u){var p=Fe(n)?nf:Sy;return u&&Xt(n,o,u)&&(o=r),p(n,Te(o,3))}function DE(n,o){return(Fe(n)?Hn:If)(n,Te(o,3))}var BE=r2(E2),zE=r2(M2);function NE(n,o){return Gt(Hs(n,o),1)}function HE(n,o){return Gt(Hs(n,o),Le)}function FE(n,o,u){return u=u===r?1:Ge(u),Gt(Hs(n,o),u)}function O2(n,o){return(Fe(n)?yr:Vn)(n,Te(o,3))}function T2(n,o){return(Fe(n)?s_:xf)(n,Te(o,3))}var GE=Ts(function(n,o,u){rt.call(n,u)?n[u].push(o):Qr(n,u,[o])});function WE(n,o,u,p){n=ir(n)?n:si(n),u=u&&!p?Ge(u):0;var k=n.length;return u<0&&(u=$t(k+u,0)),Vs(n)?u<=k&&n.indexOf(o,u)>-1:!!k&&Yo(n,o,u)>-1}var UE=je(function(n,o,u){var p=-1,k=typeof o=="function",x=ir(n)?Z(n.length):[];return Vn(n,function(L){x[++p]=k?_r(o,L,u):Ki(L,o,u)}),x}),VE=Ts(function(n,o,u){Qr(n,u,o)});function Hs(n,o){return(Fe(n)?mt:Rf)(n,Te(o,3))}function ZE(n,o,u,p){return n==null?[]:(Fe(o)||(o=o==null?[]:[o]),u=p?r:u,Fe(u)||(u=u==null?[]:[u]),zf(n,o,u))}var jE=Ts(function(n,o,u){n[u?0:1].push(o)},function(){return[[],[]]});function qE(n,o,u){var p=Fe(n)?Hc:lf,k=arguments.length<3;return p(n,Te(o,4),u,k,Vn)}function KE(n,o,u){var p=Fe(n)?l_:lf,k=arguments.length<3;return p(n,Te(o,4),u,k,xf)}function YE(n,o){return(Fe(n)?Hn:If)(n,Ws(Te(o,3)))}function XE(n){return(Fe(n)?Ef:Wy)(n)}function JE(n,o,u){return(u?Xt(n,o,u):o===r)?o=1:o=Ge(o),(Fe(n)?_y:Uy)(n,o)}function QE(n){return(Fe(n)?yy:Zy)(n)}function eM(n){if(n==null)return 0;if(ir(n))return Vs(n)?Jo(n):n.length;var o=Zt(n);return o==J||o==F?n.size:id(n).length}function tM(n,o,u){var p=Fe(n)?Fc:jy;return u&&Xt(n,o,u)&&(o=r),p(n,Te(o,3))}var rM=je(function(n,o){if(n==null)return[];var u=o.length;return u>1&&Xt(n,o[0],o[1])?o=[]:u>2&&Xt(o[0],o[1],o[2])&&(o=[o[0]]),zf(n,Gt(o,1),[])}),Fs=D_||function(){return Bt.Date.now()};function nM(n,o){if(typeof o!="function")throw new Lr(l);return n=Ge(n),function(){if(--n<1)return o.apply(this,arguments)}}function L2(n,o,u){return o=u?r:o,o=n&&o==null?n.length:o,vn(n,re,r,r,r,r,o)}function P2(n,o){var u;if(typeof o!="function")throw new Lr(l);return n=Ge(n),function(){return--n>0&&(u=o.apply(this,arguments)),n<=1&&(o=r),u}}var Cd=je(function(n,o,u){var p=E;if(u.length){var k=Gn(u,ii(Cd));p|=j}return vn(n,p,o,u,k)}),R2=je(function(n,o,u){var p=E|A;if(u.length){var k=Gn(u,ii(R2));p|=j}return vn(o,p,n,u,k)});function $2(n,o,u){o=u?r:o;var p=vn(n,O,r,r,r,r,r,o);return p.placeholder=$2.placeholder,p}function D2(n,o,u){o=u?r:o;var p=vn(n,$,r,r,r,r,r,o);return p.placeholder=D2.placeholder,p}function B2(n,o,u){var p,k,x,L,R,N,oe=0,te=!1,le=!1,ve=!0;if(typeof n!="function")throw new Lr(l);o=Br(o)||0,_t(u)&&(te=!!u.leading,le="maxWait"in u,x=le?$t(Br(u.maxWait)||0,o):x,ve="trailing"in u?!!u.trailing:ve);function ye(At){var jr=p,kn=k;return p=k=r,oe=At,L=n.apply(kn,jr),L}function Ce(At){return oe=At,R=ea(at,o),te?ye(At):L}function Be(At){var jr=At-N,kn=At-oe,np=o-jr;return le?Vt(np,x-kn):np}function Oe(At){var jr=At-N,kn=At-oe;return N===r||jr>=o||jr<0||le&&kn>=x}function at(){var At=Fs();if(Oe(At))return Ke(At);R=ea(at,Be(At))}function Ke(At){return R=r,ve&&p?ye(At):(p=k=r,L)}function Jt(){R!==r&&jf(R),oe=0,p=N=k=R=r}function rn(){return R===r?L:Ke(Fs())}function Yn(){var At=Fs(),jr=Oe(At);if(p=arguments,k=this,N=At,jr){if(R===r)return Ce(N);if(le)return jf(R),R=ea(at,o),ye(N)}return R===r&&(R=ea(at,o)),L}return Yn.cancel=Jt,Yn.flush=rn,Yn}var oM=je(function(n,o){return Af(n,1,o)}),iM=je(function(n,o,u){return Af(n,Br(o)||0,u)});function aM(n){return vn(n,fe)}function Gs(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new Lr(l);var u=function(){var p=arguments,k=o?o.apply(this,p):p[0],x=u.cache;if(x.has(k))return x.get(k);var L=n.apply(this,p);return u.cache=x.set(k,L)||x,L};return u.cache=new(Gs.Cache||gn),u}Gs.Cache=gn;function Ws(n){if(typeof n!="function")throw new Lr(l);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function sM(n){return P2(2,n)}var lM=qy(function(n,o){o=o.length==1&&Fe(o[0])?mt(o[0],kr(Te())):mt(Gt(o,1),kr(Te()));var u=o.length;return je(function(p){for(var k=-1,x=Vt(p.length,u);++k<x;)p[k]=o[k].call(this,p[k]);return _r(n,this,p)})}),Od=je(function(n,o){return vn(n,j,r,o,Gn(o,ii(Od)))}),z2=je(function(n,o){return vn(n,U,r,o,Gn(o,ii(z2)))}),cM=bn(function(n,o){return vn(n,H,r,r,r,o)});function dM(n,o){if(typeof n!="function")throw new Lr(l);return o=o===r?o:Ge(o),je(n,o)}function uM(n,o){if(typeof n!="function")throw new Lr(l);return o=o==null?0:$t(Ge(o),0),je(function(u){var p=u[o],k=qn(u,0,o);return p&&Fn(k,p),_r(n,this,k)})}function hM(n,o,u){var p=!0,k=!0;if(typeof n!="function")throw new Lr(l);return _t(u)&&(p="leading"in u?!!u.leading:p,k="trailing"in u?!!u.trailing:k),B2(n,o,{leading:p,maxWait:o,trailing:k})}function fM(n){return L2(n,1)}function pM(n,o){return Od(pd(o),n)}function mM(){if(!arguments.length)return[];var n=arguments[0];return Fe(n)?n:[n]}function gM(n){return Rr(n,g)}function vM(n,o){return o=typeof o=="function"?o:r,Rr(n,g,o)}function bM(n){return Rr(n,5)}function wM(n,o){return o=typeof o=="function"?o:r,Rr(n,5,o)}function _M(n,o){return o==null||Sf(n,o,zt(o))}function Zr(n,o){return n===o||n!==n&&o!==o}var yM=$s(rd),kM=$s(function(n,o){return n>=o}),_o=Tf((function(){return arguments})())?Tf:function(n){return yt(n)&&rt.call(n,"callee")&&!vf.call(n,"callee")},Fe=Z.isArray,EM=X1?kr(X1):Ty;function ir(n){return n!=null&&Us(n.length)&&!_n(n)}function St(n){return yt(n)&&ir(n)}function MM(n){return n===!0||n===!1||yt(n)&&Yt(n)==We}var Kn=z_||Gd,SM=J1?kr(J1):Ly;function AM(n){return yt(n)&&n.nodeType===1&&!ta(n)}function xM(n){if(n==null)return!0;if(ir(n)&&(Fe(n)||typeof n=="string"||typeof n.splice=="function"||Kn(n)||ai(n)||_o(n)))return!n.length;var o=Zt(n);if(o==J||o==F)return!n.size;if(Qi(n))return!id(n).length;for(var u in n)if(rt.call(n,u))return!1;return!0}function IM(n,o){return Yi(n,o)}function CM(n,o,u){u=typeof u=="function"?u:r;var p=u?u(n,o):r;return p===r?Yi(n,o,r,u):!!p}function Td(n){if(!yt(n))return!1;var o=Yt(n);return o==Kt||o==wt||typeof n.message=="string"&&typeof n.name=="string"&&!ta(n)}function OM(n){return typeof n=="number"&&wf(n)}function _n(n){if(!_t(n))return!1;var o=Yt(n);return o==Ut||o==w||o==Ze||o==ae}function N2(n){return typeof n=="number"&&n==Ge(n)}function Us(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ie}function _t(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function yt(n){return n!=null&&typeof n=="object"}var H2=Q1?kr(Q1):Ry;function TM(n,o){return n===o||od(n,o,yd(o))}function LM(n,o,u){return u=typeof u=="function"?u:r,od(n,o,yd(o),u)}function PM(n){return F2(n)&&n!=+n}function RM(n){if(vk(n))throw new De(s);return Lf(n)}function $M(n){return n===null}function DM(n){return n==null}function F2(n){return typeof n=="number"||yt(n)&&Yt(n)==q}function ta(n){if(!yt(n)||Yt(n)!=I)return!1;var o=vs(n);if(o===null)return!0;var u=rt.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&fs.call(u)==L_}var Ld=ef?kr(ef):$y;function BM(n){return N2(n)&&n>=-ie&&n<=ie}var G2=tf?kr(tf):Dy;function Vs(n){return typeof n=="string"||!Fe(n)&&yt(n)&&Yt(n)==de}function Mr(n){return typeof n=="symbol"||yt(n)&&Yt(n)==ge}var ai=rf?kr(rf):By;function zM(n){return n===r}function NM(n){return yt(n)&&Zt(n)==Me}function HM(n){return yt(n)&&Yt(n)==ot}var FM=$s(ad),WM=$s(function(n,o){return n<=o});function W2(n){if(!n)return[];if(ir(n))return Vs(n)?Wr(n):or(n);if(Gi&&n[Gi])return y_(n[Gi]());var o=Zt(n);return(o==J?jc:o==F?ds:si)(n)}function yn(n){return n?(n=Br(n),n===Le||n===-1/0?(n<0?-1:1)*Ae:n===n?n:0):n===0?n:0}function Ge(n){var o=yn(n),u=o%1;return o===o?u?o-u:o:0}function U2(n){return n?go(Ge(n),0,G):0}function Br(n){if(typeof n=="number")return n;if(Mr(n))return W;if(_t(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=_t(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=cf(n);var u=xw.test(n);return u||Cw.test(n)?o_(n.slice(2),u?2:8):Aw.test(n)?W:+n}function V2(n){return tn(n,ar(n))}function UM(n){return n?go(Ge(n),-ie,ie):n===0?n:0}function nt(n){return n==null?"":Er(n)}var VM=ni(function(n,o){if(Qi(o)||ir(o)){tn(o,zt(o),n);return}for(var u in o)rt.call(o,u)&&ji(n,u,o[u])}),Z2=ni(function(n,o){tn(o,ar(o),n)}),j2=ni(function(n,o,u,p){tn(o,ar(o),n,p)}),Pd=ni(function(n,o,u,p){tn(o,zt(o),n,p)}),ZM=bn(Qc);function jM(n,o){var u=ri(n);return o==null?u:Mf(u,o)}var qM=je(function(n,o){n=it(n);var u=-1,p=o.length,k=p>2?o[2]:r;for(k&&Xt(o[0],o[1],k)&&(p=1);++u<p;)for(var x=o[u],L=ar(x),R=-1,N=L.length;++R<N;){var oe=L[R],te=n[oe];(te===r||Zr(te,Qo[oe])&&!rt.call(n,oe))&&(n[oe]=x[oe])}return n}),KM=je(function(n){return n.push(r,c2),_r(q2,r,n)});function YM(n,o){return of(n,Te(o,3),en)}function XM(n,o){return of(n,Te(o,3),td)}function JM(n,o){return n==null?n:ed(n,Te(o,3),ar)}function QM(n,o){return n==null?n:Cf(n,Te(o,3),ar)}function eS(n,o){return n&&en(n,Te(o,3))}function tS(n,o){return n&&td(n,Te(o,3))}function rS(n){return n==null?[]:xs(n,zt(n))}function nS(n){return n==null?[]:xs(n,ar(n))}function Rd(n,o,u){var p=n==null?r:vo(n,o);return p===r?u:p}function oS(n,o){return n!=null&&h2(n,o,xy)}function $d(n,o){return n!=null&&h2(n,o,Iy)}var iS=o2(function(n,o,u){o!=null&&typeof o.toString!="function"&&(o=ps.call(o)),n[o]=u},Bd(sr)),aS=o2(function(n,o,u){o!=null&&typeof o.toString!="function"&&(o=ps.call(o)),rt.call(n,o)?n[o].push(u):n[o]=[u]},Te),sS=je(Ki);function zt(n){return ir(n)?kf(n):id(n)}function ar(n){return ir(n)?kf(n,!0):zy(n)}function lS(n,o){var u={};return o=Te(o,3),en(n,function(p,k,x){Qr(u,o(p,k,x),p)}),u}function cS(n,o){var u={};return o=Te(o,3),en(n,function(p,k,x){Qr(u,k,o(p,k,x))}),u}var dS=ni(function(n,o,u){Is(n,o,u)}),q2=ni(function(n,o,u,p){Is(n,o,u,p)}),uS=bn(function(n,o){var u={};if(n==null)return u;var p=!1;o=mt(o,function(x){return x=jn(x,n),p||(p=x.length>1),x}),tn(n,wd(n),u),p&&(u=Rr(u,7,ik));for(var k=o.length;k--;)ud(u,o[k]);return u});function hS(n,o){return K2(n,Ws(Te(o)))}var fS=bn(function(n,o){return n==null?{}:Hy(n,o)});function K2(n,o){if(n==null)return{};var u=mt(wd(n),function(p){return[p]});return o=Te(o),Nf(n,u,function(p,k){return o(p,k[0])})}function pS(n,o,u){o=jn(o,n);var p=-1,k=o.length;for(k||(k=1,n=r);++p<k;){var x=n==null?r:n[Vr(o[p])];x===r&&(p=k,x=u),n=_n(x)?x.call(n):x}return n}function mS(n,o,u){return n==null?n:Xi(n,o,u)}function gS(n,o,u,p){return p=typeof p=="function"?p:r,n==null?n:Xi(n,o,u,p)}var Y2=s2(zt),X2=s2(ar);function vS(n,o,u){var p=Fe(n),k=p||Kn(n)||ai(n);if(o=Te(o,4),u==null){var x=n&&n.constructor;k?u=p?new x:[]:_t(n)?u=_n(x)?ri(vs(n)):{}:u={}}return(k?yr:en)(n,function(L,R,N){return o(u,L,R,N)}),u}function bS(n,o){return n==null?!0:ud(n,o)}function wS(n,o,u){return n==null?n:Uf(n,o,pd(u))}function _S(n,o,u,p){return p=typeof p=="function"?p:r,n==null?n:Uf(n,o,pd(u),p)}function si(n){return n==null?[]:Zc(n,zt(n))}function yS(n){return n==null?[]:Zc(n,ar(n))}function kS(n,o,u){return u===r&&(u=o,o=r),u!==r&&(u=Br(u),u=u===u?u:0),o!==r&&(o=Br(o),o=o===o?o:0),go(Br(n),o,u)}function ES(n,o,u){return o=yn(o),u===r?(u=o,o=0):u=yn(u),n=Br(n),Cy(n,o,u)}function MS(n,o,u){if(u&&typeof u!="boolean"&&Xt(n,o,u)&&(o=u=r),u===r&&(typeof o=="boolean"?(u=o,o=r):typeof n=="boolean"&&(u=n,n=r)),n===r&&o===r?(n=0,o=1):(n=yn(n),o===r?(o=n,n=0):o=yn(o)),n>o){var p=n;n=o,o=p}if(u||n%1||o%1){var k=_f();return Vt(n+k*(o-n+n_("1e-"+((k+"").length-1))),o)}return ld(n,o)}var SS=oi(function(n,o,u){return o=o.toLowerCase(),n+(u?J2(o):o)});function J2(n){return Dd(nt(n).toLowerCase())}function Q2(n){return n=nt(n),n&&n.replace(Tw,g_).replace(jw,"")}function AS(n,o,u){n=nt(n),o=Er(o);var p=n.length;u=u===r?p:go(Ge(u),0,p);var k=u;return u-=o.length,u>=0&&n.slice(u,k)==o}function xS(n){return n=nt(n),n&&hw.test(n)?n.replace(uo,v_):n}function IS(n){return n=nt(n),n&&bw.test(n)?n.replace(Oc,"\\$&"):n}var CS=oi(function(n,o,u){return n+(u?"-":"")+o.toLowerCase()}),OS=oi(function(n,o,u){return n+(u?" ":"")+o.toLowerCase()}),TS=t2("toLowerCase");function LS(n,o,u){n=nt(n),o=Ge(o);var p=o?Jo(n):0;if(!o||p>=o)return n;var k=(o-p)/2;return Rs(ys(k),u)+n+Rs(_s(k),u)}function PS(n,o,u){n=nt(n),o=Ge(o);var p=o?Jo(n):0;return o&&p<o?n+Rs(o-p,u):n}function RS(n,o,u){n=nt(n),o=Ge(o);var p=o?Jo(n):0;return o&&p<o?Rs(o-p,u)+n:n}function $S(n,o,u){return u||o==null?o=0:o&&(o=+o),G_(nt(n).replace(Tc,""),o||0)}function DS(n,o,u){return(u?Xt(n,o,u):o===r)?o=1:o=Ge(o),cd(nt(n),o)}function BS(){var n=arguments,o=nt(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var zS=oi(function(n,o,u){return n+(u?"_":"")+o.toLowerCase()});function NS(n,o,u){return u&&typeof u!="number"&&Xt(n,o,u)&&(o=u=r),u=u===r?G:u>>>0,u?(n=nt(n),n&&(typeof o=="string"||o!=null&&!Ld(o))&&(o=Er(o),!o&&Xo(n))?qn(Wr(n),0,u):n.split(o,u)):[]}var HS=oi(function(n,o,u){return n+(u?" ":"")+Dd(o)});function FS(n,o,u){return n=nt(n),u=u==null?0:go(Ge(u),0,n.length),o=Er(o),n.slice(u,u+o.length)==o}function GS(n,o,u){var p=S.templateSettings;u&&Xt(n,o,u)&&(o=r),n=nt(n),o=Pd({},o,p,l2);var k=Pd({},o.imports,p.imports,l2),x=zt(k),L=Zc(k,x);yr(x,function(Oe){if(C1.test(Oe))throw new De(c)});var R,N,oe=0,te=o.interpolate||is,le="__p += '",ve=qc((o.escape||is).source+"|"+te.source+"|"+(te===I1?Sw:is).source+"|"+(o.evaluate||is).source+"|$","g"),ye="//# sourceURL="+(rt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Jw+"]")+`
`;n.replace(ve,function(Oe,at,Ke,Jt,rn,Yn){return Ke||(Ke=Jt),le+=n.slice(oe,Yn).replace(Lw,b_),at&&(R=!0,le+=`' +
__e(`+at+`) +
'`),rn&&(N=!0,le+=`';
`+rn+`;
__p += '`),Ke&&(le+=`' +
((__t = (`+Ke+`)) == null ? '' : __t) +
'`),oe=Yn+Oe.length,Oe}),le+=`';
`;var Ce=rt.call(o,"variable")&&o.variable;if(!Ce)le=`with (obj) {
`+le+`
}
`;else if(C1.test(Ce))throw new De(d);le=(N?le.replace(Ic,""):le).replace(Cc,"$1").replace(os,"$1;"),le="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+le+`return __p
}`;var Be=tp(function(){return et(x,ye+"return "+le).apply(r,L)});if(Be.source=le,Td(Be))throw Be;return Be}function WS(n){return nt(n).toLowerCase()}function US(n){return nt(n).toUpperCase()}function VS(n,o,u){if(n=nt(n),n&&(u||o===r))return cf(n);if(!n||!(o=Er(o)))return n;var p=Wr(n),k=Wr(o);return qn(p,df(p,k),uf(p,k)+1).join("")}function ZS(n,o,u){if(n=nt(n),n&&(u||o===r))return n.slice(0,ff(n)+1);if(!n||!(o=Er(o)))return n;var p=Wr(n);return qn(p,0,uf(p,Wr(o))+1).join("")}function jS(n,o,u){if(n=nt(n),n&&(u||o===r))return n.replace(Tc,"");if(!n||!(o=Er(o)))return n;var p=Wr(n);return qn(p,df(p,Wr(o))).join("")}function qS(n,o){var u=_e,p=P;if(_t(o)){var k="separator"in o?o.separator:k;u="length"in o?Ge(o.length):u,p="omission"in o?Er(o.omission):p}n=nt(n);var x=n.length;if(Xo(n)){var L=Wr(n);x=L.length}if(u>=x)return n;var R=u-Jo(p);if(R<1)return p;var N=L?qn(L,0,R).join(""):n.slice(0,R);if(k===r)return N+p;if(L&&(R+=N.length-R),Ld(k)){if(n.slice(R).search(k)){var oe,te=N;for(k.global||(k=qc(k.source,nt(O1.exec(k))+"g")),k.lastIndex=0;oe=k.exec(te);)var le=oe.index;N=N.slice(0,le===r?R:le)}}else if(n.indexOf(Er(k),R)!=R){var ve=N.lastIndexOf(k);ve>-1&&(N=N.slice(0,ve))}return N+p}function KS(n){return n=nt(n),n&&uw.test(n)?n.replace(Nn,S_):n}var YS=oi(function(n,o,u){return n+(u?" ":"")+o.toUpperCase()}),Dd=t2("toUpperCase");function ep(n,o,u){return n=nt(n),o=u?r:o,o===r?__(n)?I_(n):u_(n):n.match(o)||[]}var tp=je(function(n,o){try{return _r(n,r,o)}catch(u){return Td(u)?u:new De(u)}}),XS=bn(function(n,o){return yr(o,function(u){u=Vr(u),Qr(n,u,Cd(n[u],n))}),n});function JS(n){var o=n==null?0:n.length,u=Te();return n=o?mt(n,function(p){if(typeof p[1]!="function")throw new Lr(l);return[u(p[0]),p[1]]}):[],je(function(p){for(var k=-1;++k<o;){var x=n[k];if(_r(x[0],this,p))return _r(x[1],this,p)}})}function QS(n){return My(Rr(n,b))}function Bd(n){return function(){return n}}function eA(n,o){return n==null||n!==n?o:n}var tA=n2(),rA=n2(!0);function sr(n){return n}function zd(n){return Pf(typeof n=="function"?n:Rr(n,b))}function nA(n){return $f(Rr(n,b))}function oA(n,o){return Df(n,Rr(o,b))}var iA=je(function(n,o){return function(u){return Ki(u,n,o)}}),aA=je(function(n,o){return function(u){return Ki(n,u,o)}});function Nd(n,o,u){var p=zt(o),k=xs(o,p);u==null&&!(_t(o)&&(k.length||!p.length))&&(u=o,o=n,n=this,k=xs(o,zt(o)));var x=!(_t(u)&&"chain"in u)||!!u.chain,L=_n(n);return yr(k,function(R){var N=o[R];n[R]=N,L&&(n.prototype[R]=function(){var oe=this.__chain__;if(x||oe){var te=n(this.__wrapped__);return(te.__actions__=or(this.__actions__)).push({func:N,args:arguments,thisArg:n}),te.__chain__=oe,te}return N.apply(n,Fn([this.value()],arguments))})}),n}function sA(){return Bt._===this&&(Bt._=P_),this}function Hd(){}function lA(n){return n=Ge(n),je(function(o){return Bf(o,n)})}var cA=gd(mt),dA=gd(nf),uA=gd(Fc);function rp(n){return Ed(n)?Gc(Vr(n)):Fy(n)}function hA(n){return function(o){return n==null?r:vo(n,o)}}var fA=i2(),pA=i2(!0);function Fd(){return[]}function Gd(){return!1}function mA(){return{}}function gA(){return""}function vA(){return!0}function bA(n,o){if(n=Ge(n),n<1||n>ie)return[];var u=G,p=Vt(n,G);o=Te(o),n-=G;for(var k=Vc(p,o);++u<n;)o(u);return k}function wA(n){return Fe(n)?mt(n,Vr):Mr(n)?[n]:or(y2(nt(n)))}function _A(n){var o=++T_;return nt(n)+o}var yA=Ps(function(n,o){return n+o},0),kA=vd("ceil"),EA=Ps(function(n,o){return n/o},1),MA=vd("floor");function SA(n){return n&&n.length?As(n,sr,rd):r}function AA(n,o){return n&&n.length?As(n,Te(o,2),rd):r}function xA(n){return sf(n,sr)}function IA(n,o){return sf(n,Te(o,2))}function CA(n){return n&&n.length?As(n,sr,ad):r}function OA(n,o){return n&&n.length?As(n,Te(o,2),ad):r}var TA=Ps(function(n,o){return n*o},1),LA=vd("round"),PA=Ps(function(n,o){return n-o},0);function RA(n){return n&&n.length?Uc(n,sr):0}function $A(n,o){return n&&n.length?Uc(n,Te(o,2)):0}return S.after=nM,S.ary=L2,S.assign=VM,S.assignIn=Z2,S.assignInWith=j2,S.assignWith=Pd,S.at=ZM,S.before=P2,S.bind=Cd,S.bindAll=XS,S.bindKey=R2,S.castArray=mM,S.chain=C2,S.chunk=Mk,S.compact=Sk,S.concat=Ak,S.cond=JS,S.conforms=QS,S.constant=Bd,S.countBy=RE,S.create=jM,S.curry=$2,S.curryRight=D2,S.debounce=B2,S.defaults=qM,S.defaultsDeep=KM,S.defer=oM,S.delay=iM,S.difference=xk,S.differenceBy=Ik,S.differenceWith=Ck,S.drop=Ok,S.dropRight=Tk,S.dropRightWhile=Lk,S.dropWhile=Pk,S.fill=Rk,S.filter=DE,S.flatMap=NE,S.flatMapDeep=HE,S.flatMapDepth=FE,S.flatten=S2,S.flattenDeep=$k,S.flattenDepth=Dk,S.flip=aM,S.flow=tA,S.flowRight=rA,S.fromPairs=Bk,S.functions=rS,S.functionsIn=nS,S.groupBy=GE,S.initial=Nk,S.intersection=Hk,S.intersectionBy=Fk,S.intersectionWith=Gk,S.invert=iS,S.invertBy=aS,S.invokeMap=UE,S.iteratee=zd,S.keyBy=VE,S.keys=zt,S.keysIn=ar,S.map=Hs,S.mapKeys=lS,S.mapValues=cS,S.matches=nA,S.matchesProperty=oA,S.memoize=Gs,S.merge=dS,S.mergeWith=q2,S.method=iA,S.methodOf=aA,S.mixin=Nd,S.negate=Ws,S.nthArg=lA,S.omit=uS,S.omitBy=hS,S.once=sM,S.orderBy=ZE,S.over=cA,S.overArgs=lM,S.overEvery=dA,S.overSome=uA,S.partial=Od,S.partialRight=z2,S.partition=jE,S.pick=fS,S.pickBy=K2,S.property=rp,S.propertyOf=hA,S.pull=Zk,S.pullAll=x2,S.pullAllBy=jk,S.pullAllWith=qk,S.pullAt=Kk,S.range=fA,S.rangeRight=pA,S.rearg=cM,S.reject=YE,S.remove=Yk,S.rest=dM,S.reverse=xd,S.sampleSize=JE,S.set=mS,S.setWith=gS,S.shuffle=QE,S.slice=Xk,S.sortBy=rM,S.sortedUniq=oE,S.sortedUniqBy=iE,S.split=NS,S.spread=uM,S.tail=aE,S.take=sE,S.takeRight=lE,S.takeRightWhile=cE,S.takeWhile=dE,S.tap=SE,S.throttle=hM,S.thru=Ns,S.toArray=W2,S.toPairs=Y2,S.toPairsIn=X2,S.toPath=wA,S.toPlainObject=V2,S.transform=vS,S.unary=fM,S.union=uE,S.unionBy=hE,S.unionWith=fE,S.uniq=pE,S.uniqBy=mE,S.uniqWith=gE,S.unset=bS,S.unzip=Id,S.unzipWith=I2,S.update=wS,S.updateWith=_S,S.values=si,S.valuesIn=yS,S.without=vE,S.words=ep,S.wrap=pM,S.xor=bE,S.xorBy=wE,S.xorWith=_E,S.zip=yE,S.zipObject=kE,S.zipObjectDeep=EE,S.zipWith=ME,S.entries=Y2,S.entriesIn=X2,S.extend=Z2,S.extendWith=j2,Nd(S,S),S.add=yA,S.attempt=tp,S.camelCase=SS,S.capitalize=J2,S.ceil=kA,S.clamp=kS,S.clone=gM,S.cloneDeep=bM,S.cloneDeepWith=wM,S.cloneWith=vM,S.conformsTo=_M,S.deburr=Q2,S.defaultTo=eA,S.divide=EA,S.endsWith=AS,S.eq=Zr,S.escape=xS,S.escapeRegExp=IS,S.every=$E,S.find=BE,S.findIndex=E2,S.findKey=YM,S.findLast=zE,S.findLastIndex=M2,S.findLastKey=XM,S.floor=MA,S.forEach=O2,S.forEachRight=T2,S.forIn=JM,S.forInRight=QM,S.forOwn=eS,S.forOwnRight=tS,S.get=Rd,S.gt=yM,S.gte=kM,S.has=oS,S.hasIn=$d,S.head=A2,S.identity=sr,S.includes=WE,S.indexOf=zk,S.inRange=ES,S.invoke=sS,S.isArguments=_o,S.isArray=Fe,S.isArrayBuffer=EM,S.isArrayLike=ir,S.isArrayLikeObject=St,S.isBoolean=MM,S.isBuffer=Kn,S.isDate=SM,S.isElement=AM,S.isEmpty=xM,S.isEqual=IM,S.isEqualWith=CM,S.isError=Td,S.isFinite=OM,S.isFunction=_n,S.isInteger=N2,S.isLength=Us,S.isMap=H2,S.isMatch=TM,S.isMatchWith=LM,S.isNaN=PM,S.isNative=RM,S.isNil=DM,S.isNull=$M,S.isNumber=F2,S.isObject=_t,S.isObjectLike=yt,S.isPlainObject=ta,S.isRegExp=Ld,S.isSafeInteger=BM,S.isSet=G2,S.isString=Vs,S.isSymbol=Mr,S.isTypedArray=ai,S.isUndefined=zM,S.isWeakMap=NM,S.isWeakSet=HM,S.join=Wk,S.kebabCase=CS,S.last=Dr,S.lastIndexOf=Uk,S.lowerCase=OS,S.lowerFirst=TS,S.lt=FM,S.lte=WM,S.max=SA,S.maxBy=AA,S.mean=xA,S.meanBy=IA,S.min=CA,S.minBy=OA,S.stubArray=Fd,S.stubFalse=Gd,S.stubObject=mA,S.stubString=gA,S.stubTrue=vA,S.multiply=TA,S.nth=Vk,S.noConflict=sA,S.noop=Hd,S.now=Fs,S.pad=LS,S.padEnd=PS,S.padStart=RS,S.parseInt=$S,S.random=MS,S.reduce=qE,S.reduceRight=KE,S.repeat=DS,S.replace=BS,S.result=pS,S.round=LA,S.runInContext=B,S.sample=XE,S.size=eM,S.snakeCase=zS,S.some=tM,S.sortedIndex=Jk,S.sortedIndexBy=Qk,S.sortedIndexOf=eE,S.sortedLastIndex=tE,S.sortedLastIndexBy=rE,S.sortedLastIndexOf=nE,S.startCase=HS,S.startsWith=FS,S.subtract=PA,S.sum=RA,S.sumBy=$A,S.template=GS,S.times=bA,S.toFinite=yn,S.toInteger=Ge,S.toLength=U2,S.toLower=WS,S.toNumber=Br,S.toSafeInteger=UM,S.toString=nt,S.toUpper=US,S.trim=VS,S.trimEnd=ZS,S.trimStart=jS,S.truncate=qS,S.unescape=KS,S.uniqueId=_A,S.upperCase=YS,S.upperFirst=Dd,S.each=O2,S.eachRight=T2,S.first=A2,Nd(S,(function(){var n={};return en(S,function(o,u){rt.call(S.prototype,u)||(n[u]=o)}),n})(),{chain:!1}),S.VERSION=i,yr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),yr(["drop","take"],function(n,o){qe.prototype[n]=function(u){u=u===r?1:$t(Ge(u),0);var p=this.__filtered__&&!o?new qe(this):this.clone();return p.__filtered__?p.__takeCount__=Vt(u,p.__takeCount__):p.__views__.push({size:Vt(u,G),type:n+(p.__dir__<0?"Right":"")}),p},qe.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),yr(["filter","map","takeWhile"],function(n,o){var u=o+1,p=u==Q||u==ce;qe.prototype[n]=function(k){var x=this.clone();return x.__iteratees__.push({iteratee:Te(k,3),type:u}),x.__filtered__=x.__filtered__||p,x}}),yr(["head","last"],function(n,o){var u="take"+(o?"Right":"");qe.prototype[n]=function(){return this[u](1).value()[0]}}),yr(["initial","tail"],function(n,o){var u="drop"+(o?"":"Right");qe.prototype[n]=function(){return this.__filtered__?new qe(this):this[u](1)}}),qe.prototype.compact=function(){return this.filter(sr)},qe.prototype.find=function(n){return this.filter(n).head()},qe.prototype.findLast=function(n){return this.reverse().find(n)},qe.prototype.invokeMap=je(function(n,o){return typeof n=="function"?new qe(this):this.map(function(u){return Ki(u,n,o)})}),qe.prototype.reject=function(n){return this.filter(Ws(Te(n)))},qe.prototype.slice=function(n,o){n=Ge(n);var u=this;return u.__filtered__&&(n>0||o<0)?new qe(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),o!==r&&(o=Ge(o),u=o<0?u.dropRight(-o):u.take(o-n)),u)},qe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},qe.prototype.toArray=function(){return this.take(G)},en(qe.prototype,function(n,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),k=S[p?"take"+(o=="last"?"Right":""):o],x=p||/^find/.test(o);k&&(S.prototype[o]=function(){var L=this.__wrapped__,R=p?[1]:arguments,N=L instanceof qe,oe=R[0],te=N||Fe(L),le=function(at){var Ke=k.apply(S,Fn([at],R));return p&&ve?Ke[0]:Ke};te&&u&&typeof oe=="function"&&oe.length!=1&&(N=te=!1);var ve=this.__chain__,ye=!!this.__actions__.length,Ce=x&&!ve,Be=N&&!ye;if(!x&&te){L=Be?L:new qe(this);var Oe=n.apply(L,R);return Oe.__actions__.push({func:Ns,args:[le],thisArg:r}),new Pr(Oe,ve)}return Ce&&Be?n.apply(this,R):(Oe=this.thru(le),Ce?p?Oe.value()[0]:Oe.value():Oe)})}),yr(["pop","push","shift","sort","splice","unshift"],function(n){var o=us[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var k=arguments;if(p&&!this.__chain__){var x=this.value();return o.apply(Fe(x)?x:[],k)}return this[u](function(L){return o.apply(Fe(L)?L:[],k)})}}),en(qe.prototype,function(n,o){var u=S[o];if(u){var p=u.name+"";rt.call(ti,p)||(ti[p]=[]),ti[p].push({name:o,func:u})}}),ti[Ls(r,A).name]=[{name:"wrapper",func:r}],qe.prototype.clone=K_,qe.prototype.reverse=Y_,qe.prototype.value=X_,S.prototype.at=AE,S.prototype.chain=xE,S.prototype.commit=IE,S.prototype.next=CE,S.prototype.plant=TE,S.prototype.reverse=LE,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=PE,S.prototype.first=S.prototype.head,Gi&&(S.prototype[Gi]=OE),S})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Bt._=Wn,define(function(){return Wn})):ho?((ho.exports=Wn)._=Wn,Bc._=Wn):Bt._=Wn}).call(e)})),xe=na(fp(),1);function Zs(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function Ar(e){return Zs(e)||e===!1||e===0}function Ud(e){return"listImages"in e&&!Ar(e.listImages)}function Vd(e){return"listPages"in e&&!Ar(e.listPages)}function pp(e){return"bruteForce"in e&&!Ar(e.bruteForce)}var $e=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),ze=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function mp(e,t){return t in e}var gp={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:xe.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}},vp=Sr(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=i,a.d=function(s,l,d){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:d})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var c in s)a.d(d,c,function(h){return s[h]}.bind(null,c));return d},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function l(){}return l.getFirstMatch=function(d,c){var h=c.match(d);return h&&h.length>0&&h[1]||""},l.getSecondMatch=function(d,c){var h=c.match(d);return h&&h.length>1&&h[2]||""},l.matchAndReturnConst=function(d,c,h){if(d.test(c))return h},l.getWindowsVersionName=function(d){switch(d){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(d){var c=d.split(".").splice(0,2).map((function(v){return parseInt(v,10)||0}));c.push(0);var h=c[0],f=c[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(d){var c=d.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(c.push(0),!(c[0]===1&&c[1]<5))return c[0]===1&&c[1]<6?"Cupcake":c[0]===1&&c[1]>=6?"Donut":c[0]===2&&c[1]<2?"Eclair":c[0]===2&&c[1]===2?"Froyo":c[0]===2&&c[1]>2?"Gingerbread":c[0]===3?"Honeycomb":c[0]===4&&c[1]<1?"Ice Cream Sandwich":c[0]===4&&c[1]<4?"Jelly Bean":c[0]===4&&c[1]>=4?"KitKat":c[0]===5?"Lollipop":c[0]===6?"Marshmallow":c[0]===7?"Nougat":c[0]===8?"Oreo":c[0]===9?"Pie":void 0},l.getVersionPrecision=function(d){return d.split(".").length},l.compareVersions=function(d,c,h){h===void 0&&(h=!1);var f=l.getVersionPrecision(d),v=l.getVersionPrecision(c),b=Math.max(f,v),m=0,g=l.map([d,c],(function(y){var _=b-l.getVersionPrecision(y),E=y+new Array(_+1).join(".0");return l.map(E.split("."),(function(A){return new Array(20-A.length).join("0")+A})).reverse()}));for(h&&(m=b-Math.min(f,v)),b-=1;b>=m;){if(g[0][b]>g[1][b])return 1;if(g[0][b]===g[1][b]){if(b===m)return 0;b-=1}else if(g[0][b]<g[1][b])return-1}},l.map=function(d,c){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(d,c);for(h=0;h<d.length;h+=1)f.push(c(d[h]));return f},l.find=function(d,c){var h,f;if(Array.prototype.find)return Array.prototype.find.call(d,c);for(h=0,f=d.length;h<f;h+=1){var v=d[h];if(c(v,h))return v}},l.assign=function(d){for(var c,h,f=d,v=arguments.length,b=new Array(v>1?v-1:0),m=1;m<v;m++)b[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[d].concat(b));var g=function(){var y=b[c];typeof y=="object"&&y!==null&&Object.keys(y).forEach((function(_){f[_]=y[_]}))};for(c=0,h=b.length;c<h;c+=1)g();return d},l.getBrowserAlias=function(d){return s.BROWSER_ALIASES_MAP[d]},l.getBrowserTypeByAlias=function(d){return s.BROWSER_MAP[d]||""},l})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},d=a(18);function c(h,f){for(var v=0;v<f.length;v++){var b=f[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(h,b.key,b)}}i.default=(function(){function h(){}var f,v,b;return h.getParser=function(m,g,y){if(g===void 0&&(g=!1),y===void 0&&(y=null),typeof m!="string")throw new Error("UserAgent should be a string");return new l.default(m,g,y)},h.parse=function(m,g){return g===void 0&&(g=null),new l.default(m,g).getResult()},f=h,b=[{key:"BROWSER_MAP",get:function(){return d.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return d.ENGINE_MAP}},{key:"OS_MAP",get:function(){return d.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return d.PLATFORMS_MAP}}],(v=null)&&c(f.prototype,v),b&&c(f,b),h})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=f(a(92)),l=f(a(93)),d=f(a(94)),c=f(a(95)),h=f(a(17));function f(v){return v&&v.__esModule?v:{default:v}}i.default=(function(){function v(m,g,y){if(g===void 0&&(g=!1),y===void 0&&(y=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var _=!1;typeof g=="boolean"?(_=g,this._hints=y):this._hints=g!=null&&typeof g=="object"?g:null,this.parsedResult={},_!==!0&&this.parse()}var b=v.prototype;return b.getHints=function(){return this._hints},b.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var g=m.toLowerCase();return this._hints.brands.some((function(y){return y.brand&&y.brand.toLowerCase()===g}))},b.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var g=m.toLowerCase(),y=this._hints.brands.find((function(_){return _.brand&&_.brand.toLowerCase()===g}));return y?y.version:void 0}},b.getUA=function(){return this._ua},b.test=function(m){return m.test(this._ua)},b.parseBrowser=function(){var m=this;this.parsedResult.browser={};var g=h.default.find(s.default,(function(y){if(typeof y.test=="function")return y.test(m);if(Array.isArray(y.test))return y.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.browser=g.describe(this.getUA(),this)),this.parsedResult.browser},b.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},b.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},b.getBrowserVersion=function(){return this.getBrowser().version},b.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},b.parseOS=function(){var m=this;this.parsedResult.os={};var g=h.default.find(l.default,(function(y){if(typeof y.test=="function")return y.test(m);if(Array.isArray(y.test))return y.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.os=g.describe(this.getUA())),this.parsedResult.os},b.getOSName=function(m){var g=this.getOS().name;return m?String(g).toLowerCase()||"":g||""},b.getOSVersion=function(){return this.getOS().version},b.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},b.getPlatformType=function(m){m===void 0&&(m=!1);var g=this.getPlatform().type;return m?String(g).toLowerCase()||"":g||""},b.parsePlatform=function(){var m=this;this.parsedResult.platform={};var g=h.default.find(d.default,(function(y){if(typeof y.test=="function")return y.test(m);if(Array.isArray(y.test))return y.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.platform=g.describe(this.getUA())),this.parsedResult.platform},b.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},b.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},b.parseEngine=function(){var m=this;this.parsedResult.engine={};var g=h.default.find(c.default,(function(y){if(typeof y.test=="function")return y.test(m);if(Array.isArray(y.test))return y.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.engine=g.describe(this.getUA())),this.parsedResult.engine},b.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},b.getResult=function(){return h.default.assign({},this.parsedResult)},b.satisfies=function(m){var g=this,y={},_=0,E={},A=0;if(Object.keys(m).forEach((function(fe){var _e=m[fe];typeof _e=="string"?(E[fe]=_e,A+=1):typeof _e=="object"&&(y[fe]=_e,_+=1)})),_>0){var C=Object.keys(y),O=h.default.find(C,(function(fe){return g.isOS(fe)}));if(O){var $=this.satisfies(y[O]);if($!==void 0)return $}var j=h.default.find(C,(function(fe){return g.isPlatform(fe)}));if(j){var U=this.satisfies(y[j]);if(U!==void 0)return U}}if(A>0){var re=Object.keys(E),H=h.default.find(re,(function(fe){return g.isBrowser(fe,!0)}));if(H!==void 0)return this.compareVersion(E[H])}},b.isBrowser=function(m,g){g===void 0&&(g=!1);var y=this.getBrowserName().toLowerCase(),_=m.toLowerCase(),E=h.default.getBrowserTypeByAlias(_);return g&&E&&(_=E.toLowerCase()),_===y},b.compareVersion=function(m){var g=[0],y=m,_=!1,E=this.getBrowserVersion();if(typeof E=="string")return m[0]===">"||m[0]==="<"?(y=m.substr(1),m[1]==="="?(_=!0,y=m.substr(2)):g=[],m[0]===">"?g.push(1):g.push(-1)):m[0]==="="?y=m.substr(1):m[0]==="~"&&(_=!0,y=m.substr(1)),g.indexOf(h.default.compareVersions(E,y,_))>-1},b.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},b.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},b.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},b.is=function(m,g){return g===void 0&&(g=!1),this.isBrowser(m,g)||this.isOS(m)||this.isPlatform(m)},b.some=function(m){var g=this;return m===void 0&&(m=[]),m.some((function(y){return g.is(y)}))},v})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},d=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(c){var h={name:"GPTBot"},f=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(c){var h={name:"ChatGPT-User"},f=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(c){var h={name:"OAI-SearchBot"},f=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(c){var h={name:"ClaudeBot"},f=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(c){var h={name:"Omgilibot"},f=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(c){var h={name:"Diffbot"},f=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(c){var h={name:"PerplexityBot"},f=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(c){var h={name:"Perplexity-User"},f=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(c){var h={name:"YouBot"},f=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(c){var h={name:"Meta-WebIndexer"},f=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(c){var h={name:"Meta-ExternalAds"},f=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(c){var h={name:"Meta-ExternalAgent"},f=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(c){var h={name:"Meta-ExternalFetcher"},f=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(c){var h={name:"Googlebot"},f=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(c){var h={name:"Linespider"},f=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(c){var h={name:"AmazonBot"},f=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(c){var h={name:"BingCrawler"},f=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(c){var h={name:"BaiduSpider"},f=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(c){var h={name:"DuckDuckBot"},f=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(c){var h={name:"InternetArchiveCrawler"},f=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(c){var h={name:"SlackBot"},f=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(c){var h={name:"Opera"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(c){var h={name:"Opera"},f=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(c){var h={name:"Samsung Internet for Android"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(c){var h={name:"NAVER Whale Browser"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(c){var h={name:"Pale Moon"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(c){var h={name:"MZ Browser"},f=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(c){var h={name:"Focus"},f=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(c){var h={name:"Swing"},f=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(c){var h={name:"Opera Coast"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(c){var h={name:"Opera Touch"},f=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(c){var h={name:"Yandex Browser"},f=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(c){var h={name:"UC Browser"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(c){var h={name:"Maxthon"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(c){var h={name:"Epiphany"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(c){var h={name:"Puffin"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(c){var h={name:"Sleipnir"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(c){var h={name:"K-Meleon"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(c){var h={name:"WeChat"},f=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(c){var h={name:/qqbrowserlite/i.test(c)?"QQ Browser Lite":"QQ Browser"},f=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(c){var h={name:"Internet Explorer"},f=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(c){var h={name:"Microsoft Edge"},f=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(c){var h={name:"Microsoft Edge"},f=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(c){var h={name:"Vivaldi"},f=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(c){var h={name:"SeaMonkey"},f=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(c){var h={name:"Sailfish"},f=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,c);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(c){var h={name:"Amazon Silk"},f=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(c){var h={name:"PhantomJS"},f=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(c){var h={name:"SlimerJS"},f=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var h={name:"BlackBerry"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var h={name:"WebOS Browser"},f=l.default.getFirstMatch(d,c)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(c){var h={name:"Bada"},f=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(c){var h={name:"Tizen"},f=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(c){var h={name:"QupZilla"},f=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(c){var h={name:"LibreWolf"},f=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(c){var h={name:"Firefox"},f=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(c){var h={name:"Electron"},f=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(c){var h={name:"Sogou Browser"},f=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,c),v=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c),b=l.default.getFirstMatch(/se ([\d.]+)x/i,c),m=f||v||b;return m&&(h.version=m),h}},{test:[/MiuiBrowser/i],describe:function(c){var h={name:"Miui"},f=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:function(c){return!!c.hasBrand("DuckDuckGo")||c.test(/\sDdg\/[\d.]+$/i)},describe:function(c,h){var f={name:"DuckDuckGo"};if(h){var v=h.getBrandVersion("DuckDuckGo");if(v)return f.version=v,f}var b=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,c);return b&&(f.version=b),f}},{test:function(c){return c.hasBrand("Brave")},describe:function(c,h){var f={name:"Brave"};if(h){var v=h.getBrandVersion("Brave");if(v)return f.version=v,f}return f}},{test:[/chromium/i],describe:function(c){var h={name:"Chromium"},f=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(c){var h={name:"Chrome"},f=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(c){var h={name:"Google Search"},f=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:function(c){var h=!c.test(/like android/i),f=c.test(/android/i);return h&&f},describe:function(c){var h={name:"Android Browser"},f=l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(c){var h={name:"PlayStation 4"},f=l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(c){var h={name:"Safari"},f=l.default.getFirstMatch(d,c);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(c){var h=c.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(h,c),version:l.default.getSecondMatch(h,c)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(c){var h=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,c);return{name:d.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(c){var h=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,c);return{name:d.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(c){var h=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,c),f=l.default.getWindowsVersionName(h);return{name:d.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(c){var h={name:d.OS_MAP.iOS},f=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,c);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(c){var h=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,c).replace(/[_\s]/g,"."),f=l.default.getMacOSVersionName(h),v={name:d.OS_MAP.MacOS,version:h};return f&&(v.versionName=f),v}},{test:[/(ipod|iphone|ipad)/i],describe:function(c){var h=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,c).replace(/[_\s]/g,".");return{name:d.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(c){var h=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,c);return{name:d.OS_MAP.HarmonyOS,version:h}}},{test:function(c){var h=!c.test(/like android/i),f=c.test(/android/i);return h&&f},describe:function(c){var h=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,c),f=l.default.getAndroidVersionName(h),v={name:d.OS_MAP.Android,version:h};return f&&(v.versionName=f),v}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var h=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,c),f={name:d.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var h=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,c)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,c)||l.default.getFirstMatch(/\bbb(\d+)/i,c);return{name:d.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(c){var h=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,c);return{name:d.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(c){var h=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,c);return{name:d.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:d.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:d.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(c){var h=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,c);return{name:d.OS_MAP.PlayStation4,version:h}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(c){var h=l.default.getFirstMatch(/(can-l01)/i,c)&&"Nova",f={type:d.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(c){var h=c.test(/ipod|iphone/i),f=c.test(/like (ipod|iphone)/i);return h&&!f},describe:function(c){var h=l.default.getFirstMatch(/(ipod|iphone)/i,c);return{type:d.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(c){var h=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,c),f={type:d.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName(!0)==="blackberry"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(c){return c.getBrowserName(!0)==="bada"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName()==="windows phone"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(c){var h=Number(String(c.getOSVersion()).split(".")[0]);return c.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(c){return c.getOSName(!0)==="android"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="macos"},describe:function(){return{type:d.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(c){return c.getOSName(!0)==="windows"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="linux"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="playstation 4"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="roku"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);i.default=[{test:function(c){return c.getBrowserName(!0)==="microsoft edge"},describe:function(c){if(/\sedg\//i.test(c))return{name:d.ENGINE_MAP.Blink};var h=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,c);return{name:d.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(c){var h={name:d.ENGINE_MAP.Trident},f=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:function(c){return c.test(/presto/i)},describe:function(c){var h={name:d.ENGINE_MAP.Presto},f=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:function(c){var h=c.test(/gecko/i),f=c.test(/like gecko/i);return h&&!f},describe:function(c){var h={name:d.ENGINE_MAP.Gecko},f=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:d.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(c){var h={name:d.ENGINE_MAP.WebKit},f=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,c);return f&&(h.version=f),h}}],r.exports=i.default}})}))})),Zd=na(vp(),1);function bp(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ke(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function jt(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function jd(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):jt("Fake Removing: ",e)}var js=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function wp(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(jt("Fake Getting: ",e," = ",t),t)}function qd(e,t){const r=wp(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return ke("Failed to parse JSON from storage",e,i),t}return r}function _p(e){return qd("settings",e)}function yp(e){return qd(window.location.hostname,e)}function Kd(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ke("Setting: ",e," = ",t),t.toString()):(jt("Fake Setting: ",e," = ",t),String(t))}function kp(e){return Kd("settings",e)}function Yd(e){return Kd(window.location.hostname,e)}function Ep(){const e=Zd.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function Mp(){return js.scriptHandler??"Greasemonkey"}var oa=()=>{const e=Zd.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Sp=()=>oa()==="mobile"||oa()==="tablet",qs=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),Xd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){ke("Failed to add settings listener",r)}};function Ap(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ks(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function Jd(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(i(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Qd(e,t=document.body){return new Promise(r=>{if(!Ar(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{Ar(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function xp(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function Ip(e,t=1e3){const[r]=await Promise.all([e,xp(t)]);return r}async function Cp(e,t=5e3){const r=new Promise((i,a)=>{setTimeout(()=>a(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,r])}async function eu(e,t,r,i,a="img",s="src"){const l=document.createElement("div");l.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(l),e();const d=document.querySelector(r),c=document.querySelector(i),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await Ip(Jd(a,s,c??document.body),100),c?.querySelector(a)?.removeAttribute(s),d?.dispatchEvent(new Event("click"));return h}var Op={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),i={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(i.listImages=await eu(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return i}},Tp={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async i=>i.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((i,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},Lp={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[$e.RAW],category:ze.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},Pp={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[$e.ENGLISH],category:ze.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},Rp={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},$p={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[$e.SPANISH],category:ze.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},Dp={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[$e.ENGLISH],obs:"May get your IP Banned, use with moderation",category:ze.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),i=Array(t).fill(0).map(async(s,l)=>fetch(`${r}?p=${l}`).then(async d=>d.text()).then(d=>new DOMParser().parseFromString(d,"text/html"))),a=(await Promise.all(i)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(l=>l.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const l=`${a[s-1]}`,d=await fetch(l).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),c=`${l}${l.indexOf("?")?"&":"?"}nl=${d}`;return fetch(c).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},Bp={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[$e.ENGLISH],category:ze.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},zp={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},Np={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[$e.SPANISH],category:ze.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},Hp={name:"HDoujin",url:/https?:\/\/(www\.)?hdoujin\.org\/.+/,homepage:"https://hdoujin.org/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},Fp={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},Gp={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},Wp={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[$e.ENGLISH],category:ze.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},Up=/^blob:(.+?)\/(.+)$/;function Vp(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function Zp(e){return Up.test(e)}function tu(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var jp={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,i)=>`${t+(i+1)}.${tu(unsafeWindow.g_th[i+1][0])}`)}}},qp={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/,homepage:["https://hentaihand.com/","https://nhentai.com/"],language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".reader img, #reader img, .comic-page img, .page-image img, #image-container img, .pages-selector, .comic-title",async run(){const e=document.querySelector('.reader-header h5 a, .comic-title a, a.back-to-gallery, a.go-back, a[href*="/comic/"]')?.getAttribute("href")??window.location.href.replace(/\/\d+\/?$/,""),t=document.querySelector(".reader-header h5, .comic-title, h1.title, h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.replace(/\s*-\s*Page.*$/i,"")?.trim(),r=[...document.querySelectorAll(".reader img, #reader img, .comic-page img, .page-image img, .reader-images img")];if(r.length>1)return{title:t,series:e,pages:r.length,prev:"#",next:"#",listImages:r.map(s=>s.getAttribute("data-src")??s.getAttribute("src")??"")};try{const s=e.startsWith("http")?e:`${window.location.origin}${e}`,l=await fetch(s).then(async h=>h.text()),d=new DOMParser().parseFromString(l,"text/html"),c=[...d.querySelectorAll(".comic-thumb, .gallery-thumb, .thumbnails > div, #thumbnail-container .thumb-container, .thumbs > div, .grid > div")];if(c.length>0){const h=c.map(f=>{const v=f.querySelector("img");return(v?.getAttribute("data-src")??v?.getAttribute("src")??"").replace(/\/thumb\//,"/image/").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:d.querySelector("h1.title, h1, .comic-title")?.textContent?.trim()??t,series:e,pages:h.length,prev:"#",next:"#",listImages:h}}}catch{}const i=document.querySelectorAll("select.pages-selector option, select.page-select option, .page-dropdown option").length||r.length||1,a=(r[0]?.getAttribute("data-src")??r[0]?.getAttribute("src")??document.querySelector("#image-container img, .reader img")?.getAttribute("src")??"").match(/^(.*\/)(0*1)(\.[a-zA-Z0-9]+)(?:\?.*)?$/);if(a&&i>1){const[,s,l,d]=a,c=l.length;return{title:t,series:e,pages:i,prev:"#",next:"#",listImages:Array.from({length:i},(h,f)=>`${s}${String(f+1).padStart(c,"0")}${d}`)}}return{title:t,series:e,pages:i,prev:"#",next:"#",listImages:r.map(s=>s.getAttribute("data-src")??s.getAttribute("src")??"")}}},Kp={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},Yp={name:"HentaiNexus",url:/https?:\/\/(www\.)?hentainexus.com\/read\/.+/,homepage:"https://hentainexus.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"pageData",run(){const e=unsafeWindow.pageData?.map(t=>t.image_avif??t.image_fallback??t.image);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Xp={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],i=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${i}/${s}`)}}},Jp={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},Qp={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),i=await Qd("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${i}/${t}/${e}/${s+1}.${tu(unsafeWindow.g_th[s+1][0])}`)}}},em={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[$e.ENGLISH,$e.SPANISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},tm={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),i="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(l,d)=>{const c=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${d+1}}}${i}`;return GM.xmlHttpRequest({method:"GET",url:c}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(l=>l.data.picture.list.items.map(d=>d.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},ru=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function nu(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>ru.test(r.value))?.value??e?.getAttribute("src")??""})}var rm={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[$e.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:ze.MANGA,waitFunc:()=>{const e=nu();return e.length>0&&e.every(t=>t&&ru.test(t))},run(){const e=nu();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},nm={...rm,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:ze.HENTAI},om={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},im={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,i)=>window.location.href.replace(/\/\d+$/,`/${i+1}`)),img:".gallery-slide img"}}},am={j:"jpg",p:"png",w:"webp",g:"gif"},sm={name:"nHentai.net",url:/https?:\/\/(www\.)?nhentai\.net\/g\/.+/,homepage:"https://nhentai.net/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#image-container img",async run(){const e=window.location.pathname.split("/")[2],t=document.querySelector(".go-back, .back_btn")?.getAttribute("href")??`/g/${e}/`,r=document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??"";try{const l=await fetch(`https://nhentai.net/api/gallery/${e}`).then(async d=>d.json());if(l?.media_id&&Array.isArray(l.images?.pages))return{title:l.title?.pretty??l.title?.english??r,series:t,pages:l.images.pages.length,prev:"#",next:"#",listImages:l.images.pages.map((d,c)=>`https://i.nhentai.net/galleries/${l.media_id}/${c+1}.${am[d.t]||"jpg"}`)}}catch{}try{const l=await fetch("https://nhentai.net/api/v2/config").then(async c=>c.json()),d=await fetch(`https://nhentai.net/api/v2/galleries/${e}`).then(async c=>c.json());if(Array.isArray(d?.pages)&&Array.isArray(l?.image_servers))return{title:r,series:t,pages:d.pages.length,prev:"#",next:"#",listImages:d.pages.map(c=>`${l.image_servers[Math.floor(Math.random()*l.image_servers.length)]}/${c.path}`)}}catch{}try{const l=await fetch(`https://nhentai.net/g/${e}/`).then(async h=>h.text()),d=new DOMParser().parseFromString(l,"text/html"),c=[...d.querySelectorAll("#thumbnail-container .thumb-container")];if(c.length>0){const h=c.map(f=>{const v=f.querySelector("img");return(v?.getAttribute("data-src")??v?.getAttribute("src")??"").replace(/\/\/t(\d*)\.nhentai\.net/,"//i$1.nhentai.net").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:d.querySelector("#info h1")?.textContent?.trim()??r,series:t,pages:h.length,prev:"#",next:"#",listImages:h}}}catch{}const i=document.querySelector("#image-container img")?.getAttribute("src")??"",a=i.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),s=Number(document.querySelector(".num-pages")?.textContent?.trim()??0)||1;return{title:r,series:t,pages:s,prev:"#",next:"#",listImages:a?Array.from({length:s},(l,d)=>`${a[1]}${d+1}.${a[2]}`):[i]}}},lm={name:"nHentai.to",url:/https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/,homepage:"https://nhentai.to/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#image-container img",async run(){const e=document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),t=document.querySelector("#image-container img")?.getAttribute("src")??"",r=Number(document.querySelector(".num-pages")?.textContent?.trim()??0);try{const s=e.startsWith("http")?e:`${window.location.origin}${e}`,l=await fetch(s).then(async h=>h.text()),d=new DOMParser().parseFromString(l,"text/html"),c=[...d.querySelectorAll("#thumbnail-container .thumb-container")];if(c.length>0){const h=c.map(f=>{const v=f.querySelector("img");return(v?.getAttribute("data-src")??v?.getAttribute("src")??"").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:d.querySelector("#info h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:h.length,prev:"#",next:"#",listImages:h}}}catch{}const i=t.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),a=r||1;return{title:document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:a,prev:"#",next:"#",listImages:i?Array.from({length:a},(s,l)=>`${i[1]}${l+1}.${i[2]}`):[t]}}},cm={name:"nHentai.xxx",url:/https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/,homepage:"https://nhentai.xxx/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#pages, #fimg, .reader_wrap",run(){const e=document.querySelector("#server_id")?.value??document.querySelector("#load_server")?.value??"",t=document.querySelector("#image_dir")?.value??document.querySelector("#load_dir")?.value??"",r=document.querySelector("#gallery_id")?.value??document.querySelector("#load_id")?.value??"",i=Number(document.querySelector("#pages")?.value??document.querySelector("#load_pages")?.value??document.querySelector(".pages_btn .tp")?.textContent?.trim()??0),a=document.querySelector("#fimg"),s=a?.getAttribute("data-src")??a?.getAttribute("src")??"",l=s.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/),d=l?l[1]:"webp",c=s?s.replace(/\/\d+\.[a-zA-Z0-9]+(?:\?.*)?$/,""):e&&t&&r?`https://i${e}.nhentaimg.com/${t}/${r}`:"";return{title:document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??a?.getAttribute("alt")?.replace(/\s*page\s*\d+\s*full.*$/i,"")?.trim(),series:document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),pages:i,prev:"#",next:"#",listImages:Array.from({length:i},(h,f)=>`${c}/${f+1}.${d}`)}}},dm={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[$e.SPANISH],category:ze.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},um={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,i)=>e.replace(/\/\d+\./,`/${i+1}.`))}}},hm={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},fm={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},pm={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[$e.SPANISH],category:ze.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],r=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:r||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((i,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(i=>i.getAttribute("data-src")??i.getAttribute("data-original")??i.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const i=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");i&&i.click()}}}}},mm={...pm,name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/,homepage:"https://tmohentai.app/",language:[$e.SPANISH],category:ze.HENTAI},gm={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,i=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:i.reader_start_url,pages:i.reader_page_total,prev:"#",next:"#",listImages:Array(i.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},vm={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[$e.SPANISH],category:ze.HENTAI,waitEle:".pp-comic-content img",run(){const e=[...document.querySelectorAll(".pp-comic-content img")];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},bm={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[$e.ENGLISH,$e.RAW,$e.CHINESE],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},wm={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},_m={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},ym={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await eu(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},km=[Lp,Pp,Rp,$p,Op,Dp,zp,Bp,Np,Hp,Fp,Gp,Wp,jp,qp,Kp,Yp,Xp,Jp,Qp,em,tm,om,im,sm,lm,cm,Tp,dm,um,hm,fm,mm,gp,gm,vm,bm,wm,_m,ym,nm];async function li(e,t,r,i){if(e!==void 0){ke(r);const a=await t(e);ke(i,a)}}async function Em(e){await li(e.waitAttr,t=>Jd(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await li(e.waitEle,Ap,`Waiting for Element ${e.waitEle}`,"Found Element"),await li(e.waitVar,Qd,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await li(e.waitFunc,Ks,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await li(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Nr=[],En=0,ia=null,aa=4,sa=globalThis.nanostoresGlobal||={epoch:0},Mm=()=>{let e;for(En=0;En<Nr.length;En+=aa)try{Nr[En](Nr[En+1].value,Nr[En+2],Nr[En+3])}catch(t){e=t}if(Nr.length=0,e)throw e},ou=e=>{let t=[],r={eq:Object.is,get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=En+aa;s<Nr.length;)Nr[s]===i?Nr.splice(s,aa):s+=aa;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){sa.epoch++;let s=!Nr.length&&!ia;for(let l of t)ia?.has(l)||(ia?.add(l),Nr.push(l,r,i,ia?void 0:a));s&&Mm()},off(){},set(i){let a=r.value;r.eq(a,i)||(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},Sm=5,la=6,ca=10,Am=(e,t,r,i)=>(e.events=e.events||{},e.events[r+ca]||(e.events[r+ca]=i(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+ca](),delete e.events[r+ca])}),xm=1e3,Im=(e,t)=>Am(e,i=>{let a=t(i);a&&e.events[la].push(a)},Sm,i=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...l));let s=e.off;return e.events[la]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[la])l();e.events[la]=[]}},xm)},()=>{e.listen=a,e.off=s}}),Cm=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===sa.epoch)return;a=sa.epoch;let f=e.map(v=>v.get());if(!i||f.some((v,b)=>v!==i[b])){i=f;let v=t(...f);v&&v.then&&v.t?v.then(b=>{i===f&&l.set(b)}):(l.set(v),a=sa.epoch)}},l=ou(void 0),d=l.get;l.get=()=>(s(),d());let c,h=r?()=>{clearTimeout(c),c=setTimeout(s)}:s;return Im(l,()=>{let f=e.map(v=>v.listen(h));return s(),()=>{for(let v of f)v()}}),l},Om=(e,t)=>Cm(e,t),iu=(e={})=>{let t=ou(e);return t.eqKey=Object.is,t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.eqKey(t.value[r],i,r)||(t.value={...t.value,[r]:i},t.notify(a,r))},t},Ys=globalThis,au=e=>e,da=Ys.trustedTypes,su=da?da.createPolicy("lit-html",{createHTML:e=>e}):void 0,Xs="$lit$",on=`lit$${Math.random().toFixed(9).slice(2)}$`,Js="?"+on,Tm=`<${Js}>`,Xn=document,ci=()=>Xn.createComment(""),di=e=>e===null||typeof e!="object"&&typeof e!="function",Qs=Array.isArray,lu=e=>Qs(e)||typeof e?.[Symbol.iterator]=="function",el=`[ 	
\f\r]`,ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cu=/-->/g,du=/>/g,Jn=RegExp(`>|${el}(?:([^\\s"'>=/]+)(${el}*=${el}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uu=/'/g,hu=/"/g,fu=/^(?:script|style|textarea|title)$/i,tl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ne=tl(1),DA=tl(2),BA=tl(3),an=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),pu=new WeakMap,Qn=Xn.createTreeWalker(Xn,129);function mu(e,t){if(!Qs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return su!==void 0?su.createHTML(t):t}var gu=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=ui;for(let d=0;d<r;d++){const c=e[d];let h,f,v=-1,b=0;for(;b<c.length&&(l.lastIndex=b,f=l.exec(c),f!==null);)b=l.lastIndex,l===ui?f[1]==="!--"?l=cu:f[1]!==void 0?l=du:f[2]!==void 0?(fu.test(f[2])&&(a=RegExp("</"+f[2],"g")),l=Jn):f[3]!==void 0&&(l=Jn):l===Jn?f[0]===">"?(l=a??ui,v=-1):f[1]===void 0?v=-2:(v=l.lastIndex-f[2].length,h=f[1],l=f[3]===void 0?Jn:f[3]==='"'?hu:uu):l===hu||l===uu?l=Jn:l===cu||l===du?l=ui:(l=Jn,a=void 0);const m=l===Jn&&e[d+1].startsWith("/>")?" ":"";s+=l===ui?c+Tm:v>=0?(i.push(h),c.slice(0,v)+Xs+c.slice(v)+on+m):c+on+(v===-2?d:m)}return[mu(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},rl=class op{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,l=0;const d=t.length-1,c=this.parts,[h,f]=gu(t,r);if(this.el=op.createElement(h,i),Qn.currentNode=this.el.content,r===2||r===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(a=Qn.nextNode())!==null&&c.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const v of a.getAttributeNames())if(v.endsWith(Xs)){const b=f[l++],m=a.getAttribute(v).split(on),g=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?bu:g[1]==="?"?wu:g[1]==="@"?_u:hi}),a.removeAttribute(v)}else v.startsWith(on)&&(c.push({type:6,index:s}),a.removeAttribute(v));if(fu.test(a.tagName)){const v=a.textContent.split(on),b=v.length-1;if(b>0){a.textContent=da?da.emptyScript:"";for(let m=0;m<b;m++)a.append(v[m],ci()),Qn.nextNode(),c.push({type:2,index:++s});a.append(v[b],ci())}}}else if(a.nodeType===8)if(a.data===Js)c.push({type:2,index:s});else{let v=-1;for(;(v=a.data.indexOf(on,v+1))!==-1;)c.push({type:7,index:s}),v+=on.length-1}s++}}static createElement(t,r){const i=Xn.createElement("template");return i.innerHTML=t,i}};function eo(e,t,r=e,i){if(t===an)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=di(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=eo(e,a._$AS(e,t.values),a,i)),t}var vu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Xn).importNode(t,!0);Qn.currentNode=i;let a=Qn.nextNode(),s=0,l=0,d=r[0];for(;d!==void 0;){if(s===d.index){let c;d.type===2?c=new ua(a,a.nextSibling,this,e):d.type===1?c=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(c=new yu(a,this,e)),this._$AV.push(c),d=r[++l]}s!==d?.index&&(a=Qn.nextNode(),s++)}return Qn.currentNode=Xn,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ua=class ip{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=eo(this,t,r),di(t)?t===Ne||t==null||t===""?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):t!==this._$AH&&t!==an&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ne&&di(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=rl.createElement(mu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new vu(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=pu.get(t.strings);return r===void 0&&pu.set(t.strings,r=new rl(t)),r}k(t){Qs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new ip(this.O(ci()),this.O(ci()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=au(t).nextSibling;au(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},hi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ne}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=eo(this,e,t,0),s=!di(e)||e!==this._$AH&&e!==an,s&&(this._$AH=e);else{const l=e;let d,c;for(e=a[0],d=0;d<a.length-1;d++)c=eo(this,l[r+d],t,d),c===an&&(c=this._$AH[d]),s||=!di(c)||c!==this._$AH[d],c===Ne?e=Ne:e!==Ne&&(e+=(c??"")+a[d+1]),this._$AH[d]=c}s&&!i&&this.j(e)}j(e){e===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bu=class extends hi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ne?void 0:e}},wu=class extends hi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ne)}},_u=class extends hi{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=eo(this,e,t,0)??Ne)===an)return;const r=this._$AH,i=e===Ne&&r!==Ne||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Ne&&(r===Ne||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yu=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){eo(this,e)}},Lm={M:Xs,P:on,A:Js,C:1,L:gu,R:vu,D:lu,V:eo,I:ua,H:hi,N:wu,U:_u,B:bu,F:yu},Pm=Ys.litHtmlPolyfillSupport;Pm?.(rl,ua),(Ys.litHtmlVersions??=[]).push("3.3.3");var Rm=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new ua(t.insertBefore(ci(),s),s,void 0,r??{})}return a._$AI(e),a},{I:$m}=Lm,ku=e=>e,zA=e=>e===null||typeof e!="object"&&typeof e!="function",NA={HTML:1,SVG:2,MATHML:3},HA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,FA=e=>e?._$litType$?.h!=null,GA=e=>e?._$litDirective$!==void 0,WA=e=>e?._$litDirective$,Dm=e=>e.strings===void 0,Eu=()=>document.createComment(""),UA=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=i.insertBefore(Eu(),a),l=i.insertBefore(Eu(),a);r=new $m(s,l,e,e.options)}else{const s=r._$AB.nextSibling,l=r._$AM,d=l!==e;if(d){let c;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==l._$AU&&r._$AP(c)}if(s!==a||d){let c=r._$AA;for(;c!==s;){const h=ku(c).nextSibling;ku(i).insertBefore(c,a),c=h}}}return r},VA=(e,t,r=e)=>(e._$AI(t,r),e),Bm={},ZA=(e,t=Bm)=>e._$AH=t,jA=e=>e._$AH,qA=e=>{e._$AR(),e._$AA.remove()},KA=e=>{e._$AR()},ha={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fi=e=>(...t)=>({_$litDirective$:e,values:t}),fa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},pi=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),pi(i,t);return!0},pa=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Mu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Hm(t)}};function zm(e){this._$AN!==void 0?(pa(this),this._$AM=e,Mu(this)):this._$AM=e}function Nm(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)pi(i[s],!1),pa(i[s]);else i!=null&&(pi(i,!1),pa(i));else pi(this,e)}var Hm=e=>{e.type==ha.CHILD&&(e._$AP??=Nm,e._$AQ??=zm)},Fm=class extends fa{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Mu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(pi(this,e),pa(this))}setValue(e){if(Dm(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},nl=()=>new Gm,Gm=class{},ol=new WeakMap,il=fi(class extends Fm{render(e){return Ne}update(e,[t]){const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Ne}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=ol.get(t);r===void 0&&(r=new WeakMap,ol.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ol.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Wm={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Gerätemodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},Um={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},Vm={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"Móvil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},Zm={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},jm={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},qm={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",DEVICE_MODE:"设备模式",DEVICE_MODE_AUTO:"自动",DEVICE_MODE_DESKTOP:"桌面",DEVICE_MODE_TABLET:"平板",DEVICE_MODE_MOBILE:"手机",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},yo=[Um,Vm,jm,qm,Wm,Zm],ma=globalThis,al=ma.ShadowRoot&&(ma.ShadyCSS===void 0||ma.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sl=Symbol(),Su=new WeakMap,Au=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==sl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(al&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Su.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Su.set(t,e))}return e}toString(){return this.cssText}},Ee=e=>new Au(typeof e=="string"?e:e+"",void 0,sl),kt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,a,s)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1],e[0]);return new Au(r,e,sl)},Km=(e,t)=>{if(al)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=ma.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},xu=al?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ee(r)})(e):e,{is:Ym,defineProperty:Xm,getOwnPropertyDescriptor:Jm,getOwnPropertyNames:Qm,getOwnPropertySymbols:eg,getPrototypeOf:tg}=Object,ga=globalThis,Iu=ga.trustedTypes,rg=Iu?Iu.emptyScript:"",ng=ga.reactiveElementPolyfillSupport,mi=(e,t)=>e,va={toAttribute(e,t){switch(t){case Boolean:e=e?rg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ll=(e,t)=>!Ym(e,t),Cu={attribute:!0,type:String,converter:va,reflect:!1,useDefault:!1,hasChanged:ll};Symbol.metadata??=Symbol("metadata"),ga.litPropertyMetadata??=new WeakMap;var ko=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Cu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Xm(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=Jm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Cu}static _$Ei(){if(this.hasOwnProperty(mi("elementProperties")))return;const e=tg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mi("properties"))){const t=this.properties,r=[...Qm(t),...eg(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(xu(i))}else e!==void 0&&t.push(xu(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Km(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:va).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:va;this._$Em=i;const l=s.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??ll)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ko.elementStyles=[],ko.shadowRootOptions={mode:"open"},ko[mi("elementProperties")]=new Map,ko[mi("finalized")]=new Map,ng?.({ReactiveElement:ko}),(ga.reactiveElementVersions??=[]).push("2.1.2");var cl=globalThis,tt=class extends ko{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rm(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return an}};tt._$litElement$=!0,tt.finalized=!0,cl.litElementHydrateSupport?.({LitElement:tt});var og=cl.litElementPolyfillSupport;og?.({LitElement:tt}),(cl.litElementVersions??=[]).push("4.2.2");var st=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ig={attribute:!0,type:String,converter:va,reflect:!1,hasChanged:ll},ag=(e=ig,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(d){const c=t.get.call(this);t.set.call(this,d),this.requestUpdate(l,c,e,!0,d)},init(d){return d!==void 0&&this.C(l,void 0,e,d),d}}}if(i==="setter"){const{name:l}=r;return function(d){const c=this[l];t.call(this,d),this.requestUpdate(l,c,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function K(e){return(t,r)=>typeof r=="object"?ag(e,t,r):((i,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function Nt(e){return K({...e,state:!0,attribute:!1})}var Ou=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Mn(e,t){return(r,i,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:d}=typeof i=="object"?r:a??(()=>{const c=Symbol();return{get(){return this[c]},set(h){this[c]=h}}})();return Ou(r,i,{get(){let c=l.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&d.call(this,c)),c}})}return Ou(r,i,{get(){return s(this)}})}}var Et=fi(class extends fa{constructor(e){if(super(e),e.type!==ha.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return an}}),ba=class extends fa{constructor(e){if(super(e),this.it=Ne,e.type!==ha.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ne||e==null)return this._t=void 0,this.it=e;if(e===an)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ba.directiveName="unsafeHTML",ba.resultType=1;var Tu=fi(ba),dl=class extends ba{};dl.directiveName="unsafeSVG",dl.resultType=2;var Lu=fi(dl);function Pu(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var sg=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',dg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Pg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',Rg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,$g=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,Dg=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
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
            " id="path5107"/></g></g></g></g></svg>`,Bg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',zg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,Ng='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',Hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',Vg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,Zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',jg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,qg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,Kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Yg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',Xg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Jg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',Qg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,e5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',t5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',n5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',s5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',l5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',c5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',d5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',u5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',h5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',f5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',p5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',m5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',g5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',v5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',b5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',_5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',y5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',k5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',E5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',M5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',S5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,A5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',x5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',I5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',C5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',O5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',T5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',L5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',P5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',R5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',$5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',D5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',B5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',N5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',H5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',F5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',G5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',W5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',U5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',V5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',Z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',j5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',q5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',K5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',Y5=nn({IconAdjustmentsHorizontal:()=>lg,IconAlertCircle:()=>cg,IconApiBook:()=>dg,IconArrowAutofitDown:()=>ug,IconArrowAutofitHeight:()=>hg,IconArrowAutofitLeft:()=>fg,IconArrowAutofitRight:()=>pg,IconArrowAutofitWidth:()=>mg,IconArrowBigLeft:()=>gg,IconArrowBigRight:()=>vg,IconArrowsHorizontal:()=>bg,IconArrowsLeftRight:()=>wg,IconArrowsMove:()=>_g,IconArrowsMoveVertical:()=>yg,IconArrowsVertical:()=>kg,IconBook:()=>Eg,IconBookArrowLeft:()=>Mg,IconBookArrowRight:()=>Sg,IconBookOff:()=>Ag,IconBookUpload:()=>xg,IconBookmark:()=>Ig,IconBookmarkOff:()=>Cg,IconBookmarks:()=>Og,IconBooksReturn:()=>Tg,IconBoxAlignTop:()=>Lg,IconCategory:()=>Ng,IconCheck:()=>Hg,IconChevronLeft:()=>Fg,IconChevronRight:()=>Gg,IconCircleCheck:()=>Wg,IconCircleX:()=>Ug,IconComic1:()=>Rg,IconComic1Flat:()=>Pg,IconComic2:()=>Dg,IconComic2Flat:()=>$g,IconComic3:()=>zg,IconComic3Flat:()=>Bg,IconDeviceDesktop:()=>Vg,IconDeviceFloppy:()=>Zg,IconDeviceMobile:()=>jg,IconDeviceTablet:()=>qg,IconDotsVertical:()=>Kg,IconEReader1:()=>Xg,IconEReader1Flat:()=>Yg,IconEReader2:()=>Qg,IconEReader2Flat:()=>Jg,IconExternalLink:()=>e5,IconEye:()=>t5,IconEyeOff:()=>r5,IconFileDownload:()=>n5,IconFilePercent:()=>o5,IconFolderOpen:()=>i5,IconHandClick:()=>a5,IconHelp:()=>s5,IconInfoCircle:()=>l5,IconKeyboard:()=>c5,IconLayoutBottombar:()=>d5,IconLayoutBottombarInactive:()=>u5,IconLayoutDashboard:()=>h5,IconLayoutSidebar:()=>f5,IconLayoutSidebarInactive:()=>p5,IconLayoutSidebarRight:()=>m5,IconLayoutSidebarRightInactive:()=>g5,IconListNumbers:()=>v5,IconLoader2:()=>b5,IconLocationCog:()=>w5,IconMenu2:()=>_5,IconMenuDeep:()=>y5,IconMessage:()=>k5,IconMoon:()=>E5,IconPage:()=>S5,IconPageFlat:()=>M5,IconPalette:()=>A5,IconPencil:()=>x5,IconPencilCog:()=>I5,IconPhoto:()=>C5,IconPhotoOff:()=>O5,IconPin:()=>T5,IconPlayerPause:()=>L5,IconPlayerPlay:()=>P5,IconRefresh:()=>R5,IconSettings:()=>$5,IconSettingsOff:()=>D5,IconSpacingHorizontal:()=>B5,IconSpacingVertical:()=>z5,IconSun:()=>N5,IconTrash:()=>H5,IconWorldCog:()=>F5,IconX:()=>G5,IconZoom:()=>W5,IconZoomCancel:()=>U5,IconZoomIn:()=>V5,IconZoomInArea:()=>Z5,IconZoomOut:()=>j5,IconZoomOutArea:()=>q5,IconZoomPan:()=>K5}),ul=nn({IconAdjustmentsHorizontal:()=>nv,IconAlertCircle:()=>Tv,IconApiBook:()=>ov,IconArrowAutofitDown:()=>sv,IconArrowAutofitHeight:()=>lv,IconArrowAutofitLeft:()=>cv,IconArrowAutofitRight:()=>dv,IconArrowAutofitWidth:()=>uv,IconArrowBigLeft:()=>hv,IconArrowBigRight:()=>fv,IconArrowsHorizontal:()=>iv,IconArrowsLeftRight:()=>av,IconArrowsMove:()=>pv,IconArrowsMoveVertical:()=>mv,IconArrowsVertical:()=>gv,IconBook:()=>vv,IconBookArrowLeft:()=>wv,IconBookArrowRight:()=>_v,IconBookOff:()=>bv,IconBookUpload:()=>kv,IconBookmark:()=>Ev,IconBookmarkOff:()=>Mv,IconBookmarks:()=>Sv,IconBooksReturn:()=>yv,IconBoxAlignTop:()=>Av,IconCategory:()=>xv,IconCheck:()=>Iv,IconChevronLeft:()=>Cv,IconChevronRight:()=>Ov,IconCircleCheck:()=>Lv,IconCircleX:()=>Pv,IconComic1:()=>Dv,IconComic1Flat:()=>Bv,IconComic2:()=>zv,IconComic2Flat:()=>Nv,IconComic3:()=>Hv,IconComic3Flat:()=>Fv,IconDeviceDesktop:()=>Gv,IconDeviceFloppy:()=>Wv,IconDeviceMobile:()=>Uv,IconDeviceTablet:()=>Vv,IconDotsVertical:()=>Zv,IconEReader1:()=>jv,IconEReader1Flat:()=>qv,IconEReader2:()=>Kv,IconEReader2Flat:()=>Yv,IconExternalLink:()=>Xv,IconEye:()=>Jv,IconEyeOff:()=>Qv,IconFileDownload:()=>e4,IconFilePercent:()=>t4,IconFolderOpen:()=>r4,IconHandClick:()=>n4,IconHelp:()=>Rv,IconInfoCircle:()=>$v,IconKeyboard:()=>o4,IconLayoutBottombar:()=>a4,IconLayoutBottombarInactive:()=>s4,IconLayoutDashboard:()=>i4,IconLayoutSidebar:()=>l4,IconLayoutSidebarInactive:()=>c4,IconLayoutSidebarRight:()=>d4,IconLayoutSidebarRightInactive:()=>u4,IconListNumbers:()=>h4,IconLoader2:()=>f4,IconLocationCog:()=>p4,IconMenu2:()=>m4,IconMenuDeep:()=>g4,IconMessage:()=>v4,IconMoon:()=>b4,IconPage:()=>w4,IconPageFlat:()=>_4,IconPalette:()=>y4,IconPencil:()=>k4,IconPencilCog:()=>E4,IconPhoto:()=>hl,IconPhotoOff:()=>fl,IconPin:()=>M4,IconPlayerPause:()=>S4,IconPlayerPlay:()=>A4,IconRefresh:()=>x4,IconSettings:()=>I4,IconSettingsOff:()=>C4,IconSpacingHorizontal:()=>O4,IconSpacingVertical:()=>T4,IconSun:()=>L4,IconTrash:()=>P4,IconWorldCog:()=>R4,IconX:()=>$4,IconZoom:()=>D4,IconZoomCancel:()=>B4,IconZoomIn:()=>z4,IconZoomInArea:()=>N4,IconZoomOut:()=>H4,IconZoomOutArea:()=>F4,IconZoomPan:()=>G4});function X5(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var J5=X5(sg),wa=new Map;for(const e of J5)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),wa.has(i)||wa.set(i,[]),wa.get(i)?.push({subSelector:s,color:e.color})}var Q5=new DOMParser,ev=new XMLSerializer;function tv(e,t){const r=wa.get(t);if(!r?.length)return e;const i=Q5.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return ev.serializeToString(i)}var rv=xe.default.mapValues(Y5,(e,t)=>tv(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:nv,IconApiBook:ov,IconArrowsHorizontal:iv,IconArrowsLeftRight:av,IconArrowAutofitDown:sv,IconArrowAutofitHeight:lv,IconArrowAutofitLeft:cv,IconArrowAutofitRight:dv,IconArrowAutofitWidth:uv,IconArrowBigLeft:hv,IconArrowBigRight:fv,IconArrowsMove:pv,IconArrowsMoveVertical:mv,IconArrowsVertical:gv,IconBook:vv,IconBookOff:bv,IconBookArrowLeft:wv,IconBookArrowRight:_v,IconBooksReturn:yv,IconBookUpload:kv,IconBookmark:Ev,IconBookmarkOff:Mv,IconBookmarks:Sv,IconBoxAlignTop:Av,IconCategory:xv,IconCheck:Iv,IconChevronLeft:Cv,IconChevronRight:Ov,IconAlertCircle:Tv,IconCircleCheck:Lv,IconCircleX:Pv,IconHelp:Rv,IconInfoCircle:$v,IconComic1:Dv,IconComic1Flat:Bv,IconComic2:zv,IconComic2Flat:Nv,IconComic3:Hv,IconComic3Flat:Fv,IconDeviceDesktop:Gv,IconDeviceFloppy:Wv,IconDeviceMobile:Uv,IconDeviceTablet:Vv,IconDotsVertical:Zv,IconEReader1:jv,IconEReader1Flat:qv,IconEReader2:Kv,IconEReader2Flat:Yv,IconExternalLink:Xv,IconEye:Jv,IconEyeOff:Qv,IconFileDownload:e4,IconFilePercent:t4,IconFolderOpen:r4,IconHandClick:n4,IconKeyboard:o4,IconLayoutDashboard:i4,IconLayoutBottombar:a4,IconLayoutBottombarInactive:s4,IconLayoutSidebar:l4,IconLayoutSidebarInactive:c4,IconLayoutSidebarRight:d4,IconLayoutSidebarRightInactive:u4,IconListNumbers:h4,IconLoader2:f4,IconLocationCog:p4,IconMenu2:m4,IconMenuDeep:g4,IconMessage:v4,IconMoon:b4,IconPage:w4,IconPageFlat:_4,IconPalette:y4,IconPencil:k4,IconPencilCog:E4,IconPhoto:hl,IconPhotoOff:fl,IconPin:M4,IconPlayerPause:S4,IconPlayerPlay:A4,IconRefresh:x4,IconSettings:I4,IconSettingsOff:C4,IconSpacingHorizontal:O4,IconSpacingVertical:T4,IconSun:L4,IconTrash:P4,IconWorldCog:R4,IconX:$4,IconZoom:D4,IconZoomCancel:B4,IconZoomIn:z4,IconZoomInArea:N4,IconZoomOut:H4,IconZoomOutArea:F4,IconZoomPan:G4}=rv;function D(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var to=class extends tt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=kt`
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
  `}updated(t){if(super.updated(t),t.has("name")){const r=Pu(this.name);ul[r]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0})))}}render(){const t=Pu(this.name),r=ul[t];if(!r)return Ne;const i=this.size?`--mov-icon-size: ${this.size};`:"";return ne`<span
      role=${this.label?"img":Ne}
      aria-label=${this.label||Ne}
      aria-hidden=${this.label?Ne:"true"}
      style=${i}
      >${Lu(r)}</span
    >`}};D([K({type:String})],to.prototype,"name",void 0),D([K({type:String,reflect:!0})],to.prototype,"variant",void 0),D([K({type:String,reflect:!0})],to.prototype,"family",void 0),D([K({type:String})],to.prototype,"label",void 0),D([K({type:String})],to.prototype,"size",void 0),to=D([st("mov-icon")],to);var W4=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),U4=W4;function V4(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function Ru(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(V4(e,t))}function Z4(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function j4(e,t){Z4(e),Ru(e,t)}function q4(e,t){return U4`
    <style id="${e}">
      ${t}
    </style>
  `}var _a=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",qr=class extends tt{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Ee(_a)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return ne`
      <div
        part="base"
        class=${Et({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
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
    `}};D([K({type:Boolean,reflect:!0})],qr.prototype,"open",void 0),D([K({reflect:!0})],qr.prototype,"variant",void 0),D([K({type:Number})],qr.prototype,"duration",void 0),D([K({type:Boolean})],qr.prototype,"closable",void 0),D([K()],qr.prototype,"title",void 0),D([K()],qr.prototype,"description",void 0),D([K()],qr.prototype,"icon",void 0),D([K({reflect:!0})],qr.prototype,"placement",void 0),qr=D([st("mov-toast")],qr);var cr=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let i=document.querySelector(`.mov-toast-stack.${r}`);const a=_a.indexOf(":host"),s=a>-1?_a.substring(0,a).trim():_a;Ru("mov-toast-stack-styles",s),i||(i=document.createElement("div"),i.className=`mov-toast-stack ${r}`,document.body.appendChild(i));const l=document.createElement("mov-toast");let d=e.variant||"primary";return d==="info"&&(d="primary"),d==="error"&&(d="danger"),l.variant=d,l.title=e.title||"",l.description=e.description||e.message||"",l.duration=e.duration??3e3,l.closable=e.closable??!0,l.placement=t,e.icon&&(l.icon=e.icon),i.appendChild(l),requestAnimationFrame(()=>{l.show()}),l};cr.info=e=>cr({...e,variant:"primary"}),cr.success=e=>cr({...e,variant:"success"}),cr.warning=e=>cr({...e,variant:"warning"}),cr.error=e=>cr({...e,variant:"danger"});var gi=(e,t)=>{const r=(i,a)=>xe.default.transform(i,(s,l,d)=>{xe.default.isEqual(l,a[d])||(xe.default.isObject(l)&&xe.default.isObject(a[d])&&!xe.default.isArray(l)?s[d]=r(l,a[d]):s[d]=l)});return r(e,t)},K4={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},Y4={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},X4={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Hr(e=!0){const t={...K4,theme:e?"#29487D":"#004526"};let r=Sp()?xe.default.defaultsDeep(Y4,t):t;return qs()&&(r=xe.default.defaultsDeep(X4,r)),r}function J4(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return xe.default.isEqual(i,a)}}function Q4(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=xe.default.keys(r).sort((l,d)=>l.localeCompare(d)),s=xe.default.keys(i).sort((l,d)=>l.localeCompare(d));if(!xe.default.isEqual(a,s))return!1;for(const l of a){const d=r[l]?[...r[l]].sort((h,f)=>h.localeCompare(f)):[],c=i[l]?[...i[l]].sort((h,f)=>h.localeCompare(f)):[];if(!xe.default.isEqual(d,c))return!1}return!0}}function $u(e,t,r){if(r==="bookmarks")return J4(e,t);if(r==="keybinds")return Q4(e,t)}function ya(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!xe.default.isEqualWith(i,a,$u)}return!xe.default.isEqualWith(e,t,$u)}var Qt=xe.default.defaultsDeep(_p(Hr()),Hr()),er=xe.default.defaultsDeep(yp(Hr(!1)),Hr(!1)),ro=()=>er?.enabled===!0,pl=e=>ro()&&!["locale","bookmarks","keybinds"].includes(e),Ot=iu(ro()?{...er,locale:Qt.locale,keybinds:Qt.keybinds,bookmarks:Qt.bookmarks}:Qt),Eo=Om(Ot,e=>yo.find(t=>t.ID===e.locale)??yo[1]);function ml(e=Y("deviceMode")){return e==="auto"?oa():e}var tr=iu({autoScroll:!1,chapter:nl(),currentPage:0,device:ml(),manga:void 0,panel:"none",scrollToPage:void 0});function no(e){if(e){const t=pl(e)?er[e]:Qt[e],r=Ot.get()?.[e];ya(r,t,e)&&(Ot.setKey(e,t),ke("Refreshed Settings",e,t));return}for(const t in Ot.get()){const r=Ot.get()[t],i=pl(t)?er[t]:Qt[t];ya(r,i)&&Ot.setKey(t,i)}ke("Refreshed All Settings")}function e3(e){const t=xe.default.defaultsDeep(e,Hr()),r=Qt?gi(t,Qt):t;if(!Ar(r)){ke("Imported Global Settings",r),Qt=t;for(const i in r)no(i)}}Xd(xe.default.debounce(e3,300),"settings");function t3(e){const t=xe.default.defaultsDeep(e,Hr(!1)),r=er?gi(t,er):t;if(!Ar(r)){ke("Imported Local Settings",r),er=t;for(const i in r)no(i)}}Xd(xe.default.debounce(t3,300),location.hostname);function Y(e){return Ot.get()?.[e]}function Mo(e,t){const r=Ot.get()?.[e];ya(r,t,e)&&Ot.setKey(e,t)}function Mt(e,t){ya(Y(e),t,e)&&(Ot.setKey(e,t),pl(e)?(er[e]=t,Yd(gi(er,Hr(!1)))):(Qt[e]=t,kp(gi(Qt,Hr()))))}function So(e,t){Mo(e,t(Y(e)))}function he(e){return tr.get()[e]}function Re(e,t){const r=tr.get()[e];xe.default.isEqual(r,t)||tr.setKey(e,t)}function Du(e,t){const r=tr.get()[e],i=t(r);xe.default.isEqual(r,i)||tr.setKey(e,i)}function dr(e,t){Du("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function V(e){const t=yo.find(r=>r.ID===Y("locale"))??yo[1];return mp(t,e)?t?.[e]??yo[1]?.[e]:`##MISSING_STRING_${e}##`}function Bu(e=!1){return er.enabled=e,Yd(gi(er,Hr(!1))),ke("Local Settings ",e?"Enabled":"Disabled"),cr.info({title:"Changed Settings to",description:ro()?"Local":"Global",duration:2e3}),ro()}function r3(){ro()?(jd(location.hostname),er=Hr(!1),Bu(!1)):(jd("settings"),Qt=Hr(),no()),ke("Settings Reset")}function Ao(e=location.href){return Y("bookmarks").find(t=>t.url===e)?.page}function n3(e=null){jt("Current Settings (Local:",ro(),") ",e?Ot.get()[e]:Ot.get(),`
Global Settings`,e?Qt[e]:Qt,`
Local Settings`,e?er[e]:er,`
AppState`,tr.get())}bp("MOVSettings",n3);var o3=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];cr.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};Ot.listen(xe.default.debounce(o3,300));var ur=e=>e??Ne,i3=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ft=class extends tt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Ee(i3)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=ne`
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
          class=${Et(r)}
          href=${ur(this.href)}
          target=${ur(this.target)}
          title=${ur(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${ur(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:ne`
        <button
          part="base"
          class=${Et(r)}
          ?disabled=${this.disabled||this.loading}
          type=${ur(this.type)}
          title=${ur(this.title)}
          name=${ur(this.name)}
          value=${ur(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),i=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};D([Mn(".button")],ft.prototype,"button",void 0),D([Mn("slot:not([name])")],ft.prototype,"labelSlot",void 0),D([Nt()],ft.prototype,"isIconButton",void 0),D([Nt()],ft.prototype,"hasLabel",void 0),D([Nt()],ft.prototype,"hasStart",void 0),D([Nt()],ft.prototype,"hasEnd",void 0),D([K()],ft.prototype,"title",void 0),D([K({reflect:!0})],ft.prototype,"appearance",void 0),D([K({reflect:!0})],ft.prototype,"variant",void 0),D([K({reflect:!0})],ft.prototype,"size",void 0),D([K({attribute:"with-caret",type:Boolean,reflect:!0})],ft.prototype,"withCaret",void 0),D([K({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0),D([K({type:Boolean,reflect:!0})],ft.prototype,"loading",void 0),D([K({type:Boolean,reflect:!0})],ft.prototype,"pill",void 0),D([K()],ft.prototype,"type",void 0),D([K({reflect:!0})],ft.prototype,"name",void 0),D([K({reflect:!0})],ft.prototype,"value",void 0),D([K({reflect:!0})],ft.prototype,"href",void 0),D([K()],ft.prototype,"target",void 0),D([K({reflect:!0})],ft.prototype,"rel",void 0),D([K()],ft.prototype,"download",void 0),D([K({reflect:!0})],ft.prototype,"form",void 0),ft=D([st("mov-button")],ft);var xr=class extends tt{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return ne`
      <mov-button
        @click=${this._onClick}
        .appearance=${ur(this.appearance)}
        .size=${ur(this.size)}
        ?disabled=${ur(this.disabled)}
        ?loading=${ur(this.loading)}
        .title=${ur(this.title)}
        class=${Et(r)}
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
    `:Ne}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};D([K({type:String})],xr.prototype,"mode",void 0),D([K({type:Boolean,reflect:!0})],xr.prototype,"active",void 0),D([K({type:String})],xr.prototype,"label",void 0),D([K({type:String})],xr.prototype,"activeLabel",void 0),D([K({type:String})],xr.prototype,"icon",void 0),D([K({type:String})],xr.prototype,"activeIcon",void 0),D([K({type:String,reflect:!0})],xr.prototype,"appearance",void 0),D([K({type:String,reflect:!0})],xr.prototype,"size",void 0),D([K({type:Boolean})],xr.prototype,"disabled",void 0),D([K({type:Boolean,reflect:!0})],xr.prototype,"loading",void 0),xr=D([st("toggle-button")],xr);var zu="important",a3=" !"+zu,Kr=fi(class extends fa{constructor(e){if(super(e),e.type!==ha.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(a3);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?zu:""):r[i]=a}}return an}});function vi(e,t){let r=e.length,i,a,s=!1,l=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],l=!0);let d=a[0].length,c=a[0].map((f,v)=>a.map(b=>b[v])),h=i.map(f=>c.map(v=>{let b=0;if(!Array.isArray(f)){for(let m of v)b+=f*m;return b}for(let m=0;m<f.length;m++)b+=f[m]*(v[m]||0);return b}));return r===1&&s&&(h=h[0]),d===1&&l?r===1&&s?h[0]:h.map(f=>f[0]):h}function gl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ye(e,t,r=[0,0,0]){const i=gl(e,t[0]),a=gl(e,t[1]),s=gl(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}var s3=nn({bisectLeft:()=>Hu,clamp:()=>Fr,copySign:()=>ka,diag:()=>yl,interpolate:()=>bi,interpolateInv:()=>Nu,inv:()=>h3,isInstance:()=>oo,isNone:()=>He,isString:()=>xo,lu:()=>kl,mapRange:()=>wl,multiplyMatrices:()=>vi,multiply_v3_m3x3:()=>Ye,serializeNumber:()=>vl,skipNone:()=>xt,solve:()=>f3,spow:()=>lt,toPrecision:()=>bl,type:()=>Sn,zdiv:()=>_l});function xo(e){return Sn(e)==="string"}function Sn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function vl(e,{precision:t=16,unit:r}){return He(e)?"none":(e=+bl(e,t),e+(r??""))}function He(e){return e===null}function xt(e){return He(e)?0:e}function bl(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function bi(e,t,r){return He(e)||isNaN(e)?t:He(t)||isNaN(t)?e:e+(t-e)*r}function Nu(e,t,r){return(r-e)/(t-e)}function wl(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:bi(t[0],t[1],Nu(e[0],e[1],r))}function Fr(e,t,r){return Math.max(Math.min(r,t),e)}function ka(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function lt(e,t){return ka(Math.abs(e)**t,e)}function _l(e,t){return t===0?0:e/t}function Hu(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function oo(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}function yl(e){const t=e.length,r=[];for(let i=0;i<t;i++){r[i]=[];for(let a=0;a<t;a++)r[i][a]=i===a?e[i]:0}return r}function kl(e,{pIndices:t=!1}={}){let r,i,a,s;const l=e.length;t?(r=Array.from({length:l},(d,c)=>c),a=yl(new Array(l).fill(1))):(i=yl(new Array(l).fill(1)),a=structuredClone(i)),s=structuredClone(e);for(let d=0;d<l-1;d++){let c=d,h=Math.abs(s[d][d]);for(let f=d+1;f<l;f++){const v=Math.abs(s[f][d]);v>h&&(c=f,h=v)}if(c!=d){if([s[d],s[c]]=[s[c],s[d]],t?[r[d],r[c]]=[r[c],r[d]]:[i[d],i[c]]=[i[c],i[d]],d)for(let f=0;f<d;f++)[a[d][f],a[c][f]]=[a[c][f],a[d][f]]}else if(!h)continue;for(let f=d+1;f<l;f++){const v=s[f][d]/s[d][d];for(let b=d;b<l;b++)s[f][b]+=-s[d][b]*v,a[f][b]+=a[d][b]*v}}return t?[r,a,s]:[i,a,s]}function l3(e,t,r){for(let i=0;i<r;i++){const a=t[i];for(let s=0;s<i;s++)for(let l=0;l<r;l++)a[l]-=e[i][s]*t[s][l];for(let s=0;s<r;s++)a[s]/=e[i][i]}return t}function c3(e,t,r){for(let a=r-1;a>-1;a--){const s=t[a];for(let l=a+1;l<r;l++)for(var i=0;i<r;i++)s[i]-=e[a][l]*t[l][i];for(let l=0;l<r;l++)t[a][l]/=e[a][a]}return t}function d3(e,t,r){for(let i=0;i<r;i++){let a=t[i];for(let s=0;s<i;s++)a-=e[i][s]*t[s];t[i]=a/e[i][i]}return t}function u3(e,t,r){for(let i=r-1;i>-1;i--){let a=t[i];for(let s=i+1;s<r;s++)a-=e[i][s]*t[s];t[i]=a/e[i][i]}return t}function h3(e){const[t,r,i]=kl(e),a=r.length;if(r.map((s,l)=>s[l]*i[l][l]).reduce((s,l)=>s*l,1)===0)throw new Error("Matrix is singular");return c3(i,l3(r,t,a),a)}function f3(e,t){const[r,i,a]=kl(e,{pIndices:!0}),s=i.length;if(i.map((l,d)=>l[d]*a[d][d]).reduce((l,d)=>l*d,1)===0)throw new Error("Matrix is singular");return u3(a,d3(i,r.map(l=>t[l]),s),s)}var p3=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},An=new p3,hr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),wl(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=wl(this.coordRange,r,e),vl(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return oo(e,this)?e:new this(e,t)}},El=Symbol("instance"),Gu=class ap{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[El]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(l=>Fu.get(l,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>Fu.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let l=t[s];if(He(l)||isNaN(l))return l;let d=r[s],c=this.coords[s].find(h=>h.type==d);if(!c){let h=a.name||i;throw new TypeError(`${d??l?.raw??l} not allowed for ${h} in ${this.name}()`)}return l=c.resolve(l),c.range&&(r[s]=c.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||oo(t,this)?t:t[El]?t[El]:new ap(t,...r)}},qt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Ml(e){return Array.isArray(e)?e:qt[e]}function Ea(e,t,r,i={}){if(e=Ml(e),t=Ml(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(An.run("chromatic-adaptation-start",a),a.M||(a.W1===qt.D65&&a.W2===qt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===qt.D50&&a.W2===qt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),An.run("chromatic-adaptation-end",a),a.M)return Ye(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Wu(e,t){let r={str:String(e)?.trim(),options:t};if(An.run("parse-start",r),r.color)return r.color;r.parsed=g3(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,d,c=r.parsed.args,h=c.map((b,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let b=c.shift();h.shift();let m=b.startsWith("--")?b.substring(2):`--${b}`,g=[b,m];if(l=be.findFormat({name:s,id:g,type:"function"}),!l){let y,_=b in be.registry?b:m;if(_ in be.registry){let E=be.registry[_].formats?.color?.id;E&&(y=`Did you mean ${e.replace("color("+b,"color("+E)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(y??"Missing a plugin?"))}d=l.space,l.id.startsWith("--")&&!b.startsWith("--")&&hr.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${b}).`),b.startsWith("--")&&!l.id.startsWith("--")&&hr.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${b}).`)}else l=be.findFormat({name:s,type:"function"}),d=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let v=l.coords.length;if(c.length!==v)throw new TypeError(`Expected ${v} coordinates for ${d.id} in ${r.str}), got ${c.length}`);c=l.coerceCoords(c,h),i={spaceId:d.id,coords:c,alpha:f}}else e:for(let s of be.all)for(let l in s.formats){let d=s.formats[l];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let c=s.getFormat(d),h=c.parse(r.str);if(h){a&&Object.assign(a,{format:c,formatId:l}),i=h;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=He(i.alpha)?i.alpha:i.alpha===void 0?1:Fr(0,i.alpha,1),i}var Uu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ma={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Uu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function m3(e){let t={},r=e.match(Ma.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Uu[r]):Ma.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function g3(e){if(!e)return;e=e.trim();let t=e.match(Ma.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(Ma.singleArgument,(d,c)=>{let{value:h,meta:f}=m3(c);return(d.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),i.push(f),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Pe(e,t){if(Array.isArray(e))return e.map(i=>Pe(i,t));if(!e)throw new TypeError("Empty color reference");xo(e)&&(e=Wu(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=be.get(r)),e.alpha===void 0&&(e.alpha=1),e}var v3=75e-6,be=class zr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?zr.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(a=>zr.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let r=t.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let i=t.white??this.base.white??"D65";this.white=Ml(i),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:zr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:b3(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),An.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=v3}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let l=i[s];if(l.type!=="angle"&&l.range){if(He(a))return!0;let[d,c]=l.range;return(d===void 0||a>=d-r)&&(c===void 0||a<=c+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let t in this.coords)if(this.coords[t].type==="angle")return t;return null}get hueIndex(){return Object.keys(this.coords).findIndex(t=>this.coords[t].type==="angle")}get isPolar(){return this.hueId!==null}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Gu.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const d=Pe(t);[t,r]=[d.space,d.coords]}if(t=zr.get(t),this.equals(t))return r;r=r.map(d=>He(d)?0:d);let i=this.path,a=t.path,s,l;for(let d=0;d<i.length&&i[d].equals(a[d]);d++)s=i[d],l=d;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let d=i.length-1;d>l;d--)r=i[d].toBase(r);for(let d=l+1;d<a.length;d++)r=a[d].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Pe(t);[t,r]=[i.space,i.coords]}return t=zr.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(zr.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||oo(t,this))return t;if(Sn(t)==="string"){let i=zr.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return zr.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=zr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let d=s.ids||[s.id],c=Array.isArray(t.id)?t.id:[t.id];l&&=c.some(h=>d.includes(h))}if(l){let d=Gu.get(s,i);return d!==s&&(i.formats[s.name]=d),d}}return null}static resolveCoord(t,r){let i=Sn(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=zr.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=Sn(s),i==="number"||i==="string"&&s>=0){let c=Object.entries(a.coords)[s];if(c)return{space:a,id:c[0],index:s,...c[1]}}a=zr.get(a);let l=s.toLowerCase(),d=0;for(let c in a.coords){let h=a.coords[c];if(c.toLowerCase()===l||h.name?.toLowerCase()===l)return{space:a,id:c,index:d,...h};d++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function b3(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Tt=new be({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),It=class extends be{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Tt);let t=e.toXYZ_M??e.M?.toXYZ,r=e.fromXYZ_M??e.M?.fromXYZ;e.referred??="display",super(e),t&&r&&(this.M.toXYZ=t,this.M.fromXYZ=r)}toBase(e){let t=Ye(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Ea(this.white,this.base.white,t)),t}fromBase(e){return e=Ea(this.base.white,this.white,e),Ye(e,this.M.fromXYZ)}},Sl=new be({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Tt,fromBase:e=>Ea(Tt.white,"D50",e),toBase:e=>Ea("D50",Tt.white,e)}),w3=216/24389,Vu=24/116,Sa=24389/27,Al=qt.D50,fr=new be({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Al,base:Sl,fromBase(e){let t=e.map((r,i)=>r/Al[i]).map(r=>r>w3?Math.cbrt(r):(Sa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Vu?Math.pow(a[0],3):(116*a[0]-16)/Sa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Sa,a[2]>Vu?Math.pow(a[2],3):(116*a[2]-16)/Sa].map((s,l)=>s*Al[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Ir(e){return typeof e!="number"?e:(e%360+360)%360}function Zu(e,t){let[r,i]=t,a=He(r),s=He(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=Ir(r),i=Ir(i);let l=i-r;return e==="increasing"?l<0&&(i+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:i+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(i+=360)),[r,i]}var Dt=new be({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:fr,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,d=l[1]-l[0];this.ε=d/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:Ir(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return He(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),ju=25**7,Aa=Math.PI,qu=180/Aa,Io=Aa/180;function Ku(e){const t=e*e;return t*t*t*e}function Yu(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Pe([e,t]);let[s,l,d]=fr.from(e),c=Dt.from(fr,[s,l,d])[1],[h,f,v]=fr.from(t),b=Dt.from(fr,[h,f,v])[1];c<0&&(c=0),b<0&&(b=0);let m=Ku((c+b)/2),g=.5*(1-Math.sqrt(m/(m+ju))),y=(1+g)*l,_=(1+g)*f,E=Math.sqrt(y**2+d**2),A=Math.sqrt(_**2+v**2),C=y===0&&d===0?0:Math.atan2(d,y),O=_===0&&v===0?0:Math.atan2(v,_);C<0&&(C+=2*Aa),O<0&&(O+=2*Aa),C*=qu,O*=qu;let $=h-s,j=A-E,U=O-C,re=C+O,H=Math.abs(U),fe;E*A===0?fe=0:H<=180?fe=U:U>180?fe=U-360:U<-180?fe=U+360:hr.warn("the unthinkable has happened");let _e=2*Math.sqrt(A*E)*Math.sin(fe*Io/2),P=(s+h)/2,X=(E+A)/2,M=Ku(X),Q;E*A===0?Q=re:H<=180?Q=re/2:re<360?Q=(re+360)/2:Q=(re-360)/2;let Ie=(P-50)**2,ce=1+.015*Ie/Math.sqrt(20+Ie),Le=1+.045*X,ie=1;ie-=.17*Math.cos((Q-30)*Io),ie+=.24*Math.cos(2*Q*Io),ie+=.32*Math.cos((3*Q+6)*Io),ie-=.2*Math.cos((4*Q-63)*Io);let Ae=1+.015*X*ie,W=30*Math.exp(-1*((Q-275)/25)**2),G=2*Math.sqrt(M/(M+ju)),Se=-1*Math.sin(2*W*Io)*G,me=($/(r*ce))**2;return me+=(j/(i*Le))**2,me+=(_e/(a*Ae))**2,me+=Se*(j/(i*Le))*(_e/(a*Ae)),Math.sqrt(me)}var wi={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},Cr=new be({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tt,M:wi,fromBase(e){let t=Ye(e,wi.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Ye(t,wi.LMStoLab,t)},toBase(e){let t=Ye(e,wi.LabtoLMS);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Ye(t,wi.LMStoXYZ,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function xl(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Cr.from(e),[s,l,d]=Cr.from(t),c=r-s,h=i-l,f=a-d;return Math.sqrt(c**2+h**2+f**2)}var _3=75e-6;function Co(e,t,{epsilon:r=_3}={}){e=Pe(e),t||(t=e.space),t=be.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function Ve(e,t,{inGamut:r}={}){e=Pe(e),t=be.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=ln(a,r===!0?void 0:r)),a}Ve.returns="color";function _i(e,t){e=Pe(e);let r=be.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>bl(s,i))}function pr(e,t){if(e=Pe(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=be.resolveCoord(t,e.space);return _i(e,r)[i]}var xn=new be({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cr,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Il(e,t,r,i){return e=Pe(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=be.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Il.returns="color";function sn(e,t,r){if(e=Pe(e),arguments.length===2&&Sn(arguments[1])==="object"){let i=arguments[1];for(let a in i)sn(e,a,i[a])}else if(typeof r=="function"&&(r=r(pr(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=be.resolveCoord(t,e.space),s=_i(e,i);s[a]=r,Il(e,i,s)}return e}sn.returns="color";function Oo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Xu(e,t,r="lab"){r=be.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,l,d)=>{let c=a[d];return He(l)||He(c)?s:s+(c-l)**2},0))}function y3(e,t){return Xu(e,t,"lab")}var Ju=Math.PI/180;function k3(e,t,{l:r=2,c:i=1}={}){[e,t]=Pe([e,t]);let[a,s,l]=fr.from(e),[,d,c]=Dt.from(fr,[a,s,l]),[h,f,v]=fr.from(t),b=Dt.from(fr,[h,f,v])[1];d<0&&(d=0),b<0&&(b=0);let m=a-h,g=d-b,y=s-f,_=l-v,E=y**2+_**2-g**2,A=.511;a>=16&&(A=.040975*a/(1+.01765*a));let C=.0638*d/(1+.0131*d)+.638,O;He(c)&&(c=0),c>=164&&c<=345?O=.56+Math.abs(.2*Math.cos((c+168)*Ju)):O=.36+Math.abs(.4*Math.cos((c+35)*Ju));let $=Math.pow(d,4),j=Math.sqrt($/($+1900)),U=C*(j*O+1-j),re=(m/(r*A))**2;return re+=(g/(i*C))**2,re+=E/U**2,Math.sqrt(re)}var Qu=203,Cl=new be({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Tt,fromBase(e){return e.map(t=>t*Qu)},toBase(e){return e.map(t=>t/Qu)}}),e0=1.15,t0=.66,r0=2610/2**14,E3=2**14/2610,n0=3424/4096,o0=2413/128,i0=2392/128,M3=1.7*2523/32,a0=32/(1.7*2523),s0=-.56,Ol=16295499532821565e-27,yi={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},l0=new be({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Cl,M:yi,fromBase(e){let[t,r,i]=e,a=e0*t-.1499999999999999*i,s=t0*r- -.33999999999999997*t,l=Ye([a,s,i],yi.XYZtoCone).map(function(f){let v=n0+o0*lt(f/1e4,r0),b=1+i0*lt(f/1e4,r0);return lt(v/b,M3)}),[d,c,h]=Ye(l,yi.ConetoIab);return[.43999999999999995*d/(1+s0*d)-Ol,c,h]},toBase(e){let[t,r,i]=e,a=(t+Ol)/(.43999999999999995-s0*(t+Ol)),s=Ye([a,r,i],yi.IabtoCone).map(function(f){let v=n0-lt(f,a0),b=i0*lt(f,a0)-o0;return 1e4*lt(v/b,E3)}),[l,d,c]=Ye(s,yi.ConetoXYZ),h=(l+.1499999999999999*c)/e0;return[h,(d+-.33999999999999997*h)/t0,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Tl=new be({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:l0,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function S3(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Tl.from(e),[s,l,d]=Tl.from(t),c=r-s,h=i-l;He(a)&&He(d)?(a=0,d=0):He(a)?a=d:He(d)&&(d=a);let f=a-d,v=2*Math.sqrt(i*l)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(c**2+h**2+v**2)}var c0=3424/4096,d0=2413/128,u0=2392/128,h0=2610/16384,A3=2523/32,x3=16384/2610,f0=32/2523,ki={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Ll=new be({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Cl,M:ki,fromBase(e){return I3(Ye(e,ki.XYZtoLMS))},toBase(e){let t=C3(e);return Ye(t,ki.LMStoXYZ)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function I3(e){let t=e.map(function(r){return((c0+d0*(r/1e4)**h0)/(1+u0*(r/1e4)**h0))**A3});return Ye(t,ki.LMStoIPT)}function C3(e){return Ye(e,ki.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**f0-c0,0)/(d0-u0*t**f0))**x3})}function O3(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Ll.from(e),[s,l,d]=Ll.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-l)**2+(a-d)**2)}function T3(e,t){[e,t]=Pe([e,t]);let r=2,[i,a,s]=Cr.from(e),[l,d,c]=Cr.from(t),h=i-l,f=r*(a-d),v=r*(s-c);return Math.sqrt(h**2+f**2+v**2)}var L3=qt.D65,p0=.42,m0=1/p0,Pl=2*Math.PI,Ei={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},P3={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},io={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},R3=180/Math.PI,g0=Math.PI/180;function v0(e,t){return e.map(r=>{const i=lt(t*Math.abs(r)*.01,p0);return 400*ka(i,r)/(i+27.13)})}function $3(e,t){const r=100/t*27.13**m0;return e.map(i=>{const a=Math.abs(i);return ka(r*lt(a/(400-a),m0),i)})}function D3(e){let t=Ir(e);t<=io.h[0]&&(t+=360);const r=Hu(io.h,t)-1,[i,a]=io.h.slice(r,r+2),[s,l]=io.e.slice(r,r+2),d=io.H[r],c=(t-i)/s;return d+100*c/(c+(a-t)/l)}function B3(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=io.h.slice(r,r+2),[s,l]=io.e.slice(r,r+2);return Ir((t*(l*i-s*a)-100*i*l)/(t*(l-s)-100*l))}function b0(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const l=e.map(g=>g*100);s.la=t,s.yb=r;const d=l[1],c=Ye(l,Ei.cat16);let h=P3[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const v=(1/(5*s.la+1))**4;s.fl=v*s.la+.1*(1-v)*(1-v)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/d,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const b=a?1:Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=c.map(g=>bi(1,d/g,b)),s.dRgbInv=s.dRgb.map(g=>1/g);const m=v0(c.map((g,y)=>g*s.dRgb[y]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var w0=b0(L3,64/Math.PI*.2,20,"average",!1);function _0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Ir(e.h)*g0:r=B3(e.H)*g0;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=lt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const d=lt(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),c=.25*(Math.cos(r+2)+3.8),h=t.aW*lt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*c,v=h/t.nbb,b=23*(v+.305)*_l(d,23*f+d*(11*i+108*a)),m=b*i,g=b*a,y=$3(Ye([v,m,g],Ei.m1).map(_=>_*1/1403),t.fl);return Ye(y.map((_,E)=>_*t.dRgbInv[E]),Ei.cat16Inv).map(_=>_/100)}function y0(e,t){const r=e.map(A=>A*100),i=v0(Ye(r,Ei.cat16).map((A,C)=>A*t.dRgb[C]),t.fl),a=i[0]+(-12*i[1]+i[2])/11,s=(i[0]+i[1]-2*i[2])/9,l=(Math.atan2(s,a)%Pl+Pl)%Pl,d=.25*(Math.cos(l+2)+3.8),c=5e4/13*t.nc*t.ncb*_l(d*Math.sqrt(a**2+s**2),i[0]+i[1]+1.05*i[2]+.305),h=lt(c,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*i[0]+i[1]+.05*i[2]),v=lt(f/t.aW,.5*t.c*t.z),b=100*lt(v,2),m=4/t.c*v*(t.aW+4)*t.flRoot,g=h*v,y=g*t.flRoot,_=Ir(l*R3),E=D3(_);return{J:b,C:g,h:_,s:50*lt(t.c*h/(t.aW+4),1/2),Q:m,M:y,H:E}}var z3=new be({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Tt,M:Ei,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=y0(e,w0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return _0({J:e[0],M:e[1],h:e[2]},w0)}}),N3=qt.D65,H3=216/24389,k0=24389/27;function F3(e){return 116*(e>H3?Math.cbrt(e):(k0*e+16)/116)-16}function Rl(e){return e>8?Math.pow((e+16)/116,3):e/k0}function G3(e,t){let[r,i,a]=e,s=[],l=0;if(a===0)return[0,0,0];let d=Rl(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const c=2e-12,h=15;let f=0,v=1/0,b=[0,0,0];for(;f<=h;){s=_0({J:l,C:i,h:r},t);const m=Math.abs(s[1]-d);if(m<v){if(m<=c)return s;b=s,v=m}l=l-(s[1]-d)*l/(2*s[1]),f+=1}return b}function W3(e,t){const r=F3(e[1]);if(r===0)return[0,0,0];const i=y0(e,xa);return[Ir(i.h),i.C,r]}var xa=b0(N3,200/Math.PI*Rl(50),Rl(50)*100,"average",!1),Mi=new be({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Tt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=W3(e,xa);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return G3(e,xa)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});180/Math.PI;var U3=Math.PI/180,E0=[1,.007,.0228];function M0(e){e[1]<0&&(e=Mi.fromBase(Mi.toBase(e)));const t=Math.log(Math.max(1+E0[2]*e[1]*xa.flRoot,1))/E0[2],r=e[0]*U3,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function V3(e,t){[e,t]=Pe([e,t]);let[r,i,a]=M0(Mi.from(e)),[s,l,d]=M0(Mi.from(t));return Math.sqrt((r-s)**2+(i-l)**2+(a-d)**2)}var{cos:Je,sin:Qe,sqrt:To,atan2:Wt,exp:Lo,abs:$l,pow:Ia,PI:Z3}=Math,j3=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],q3=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],K3=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],Y3=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Dl=[.47229813098762524,.5149184096354483,.5113233386366979],Bl=[2.1173067060606283,1.9420552485353544,1.9557096741686448],X3=[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],J3=[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]],ao={CAT_TO_HELM:j3,CAT_FROM_HELM:q3,M1:K3,M1_INV:Y3,M2:X3,M2_INV:J3},Q3=-.02833024015436984,S0=-.21131429516166544,A0=.2189784817615645,x0=-.06871898981942523,I0=.005506053349515315,C0=-.0641329861299175,O0=-.053592461436994296,T0=-.00954137464208059,L0=.2676231133101982,P0=.8934892185255707,R0=.7173169828841472,$0=.6915224124600773,D0=.48647127559605596,B0=.9853124591201782,zl=.5385456675962418,Nl=.12508858146241716,Hl=.6768950256217603,z0=-.4963251525324449,N0=-.09564696283240552,H0=-.029053748937210654,F0=1.3346761652952872,G0=-.1698908144723919,e6=-.195370576218515,t6=.5330819227283227,r6=.08863325582067766,n6=.9365540137751136,o6=.13789738139719568,i6=.061650260197979936,a6=.0641970862504494,s6=-.027401052793571013,l6=-.09900209889026965,c6=.059635520647228726,d6=-.013586499967803128,u6=.2253393118474472,h6=-1.5239477450767043,f6=-1.751157310240011,p6=-.43576378069144767,m6=1.060094063845983,g6=.47931193034584496,v6=-.2622579649434462,b6=.13610794232685908,w6=.1168702235362288,_6=-.01617739641422492,y6=.038145638815030566,W0=-28.2*Z3/180,Ca=Je(W0),Oa=Qe(W0);function U0(e){return Q3*Je(e)+S0*Qe(e)+A0*Je(2*e)+x0*Qe(2*e)+I0*Je(3*e)+C0*Qe(3*e)+O0*Je(4*e)+T0*Qe(4*e)}function k6(e){return .02833024015436984*Qe(e)+S0*Je(e)+-2*A0*Qe(2*e)+2*x0*Je(2*e)+-3*I0*Qe(3*e)+3*C0*Je(3*e)+-4*O0*Qe(4*e)+4*T0*Je(4*e)}function V0(e){let t=e6*Je(e)+t6*Qe(e)+r6*Je(2*e)+n6*Qe(2*e)+o6*Je(3*e)+i6*Qe(3*e)+a6*Je(4*e)+s6*Qe(4*e);return Lo(t)}function Z0(e){let t=e-.5;return Lo(Fr(-30,h6*t+f6*t*t,30))}function j0(e,t){let r=p6*Je(e)+m6*Qe(e)+g6*Je(2*e)+v6*Qe(2*e);return Lo(Fr(-30,(t-.5)*r,30))}function q0(e){let t=b6*Je(e)+w6*Qe(e)+_6*Je(2*e)+y6*Qe(2*e);return Lo(t)}function K0(e){return 1+l6*Je(e)+c6*Qe(e)+d6*Je(2*e)+u6*Qe(2*e)}function E6(e,t){let r=e*(1-e),i=e+zl*r+Nl*r*(.5-e)+Hl*r*r;return i+=r*(z0*Je(t)+N0*Qe(t)),i}function M6(e,t){let r=z0*Je(t)+N0*Qe(t),i=e;for(let a=0;a<15;a++){let s=i*(1-i),l=1-2*i,d=i+(zl+r)*s+Nl*s*(.5-i)+Hl*s*s-e,c=1+(zl+r)*l+Nl*(l*(.5-i)-s)+Hl*2*s*l;$l(c)<1e-10&&(c=1),i-=d/c}return i}function S6(e,t){let r=H0+F0*Je(t)+G0*Qe(t),i=e<1?1-e:0,a=r*e*i*i;return e*Lo(Fr(-30,a,30))}function A6(e,t){let r=H0+F0*Je(t)+G0*Qe(t),i=e;for(let a=0;a<12;a++){let s=i<1?1-i:0,l=r*i*s*s,d=Lo(Fr(-30,l,30)),c=i*d-e,h=r*s*(1-3*i),f=d*(1+i*h);$l(f)<1e-10&&(f=1),i-=c/f}return i}var x6=function(e){let t=Ye(e,ao.CAT_TO_HELM),[r,i,a]=Ye(t,ao.M1),s=lt(r,Dl[0]),l=lt(i,Dl[1]),d=lt(a,Dl[2]),[c,h,f]=Ye([s,l,d],ao.M2),v=Wt(f,h),b=To(h*h+f*f),m=U0(v),g=v+m;h=b*Je(g),f=b*Qe(g);let y=To(h*h+f*f),_=L0*Ia(y,Fr(.01,P0,10)),E=Wt(f,h),A=1+R0*Je(E)+$0*Qe(E)+D0*Je(2*E)+B0*Qe(2*E);c+=_*A,v=Wt(f,h),c=E6(c,v),v=Wt(f,h),c=S6(c,v),v=Wt(f,h);let C=V0(v);h*=C,f*=C,v=Wt(f,h),b=To(h*h+f*f);let O=K0(v),$=b>0?Ia(b,O):0;h=$*Je(v),f=$*Qe(v);let j=Z0(c);h*=j,f*=j,v=Wt(f,h);let U=j0(v,c);h*=U,f*=U,v=Wt(f,h),c*=q0(v);let re=h*Ca-f*Oa,H=h*Oa+f*Ca;return[c,re,H]},I6=function(e){let[t,r,i]=e,a=r*Ca+i*Oa,s=-r*Oa+i*Ca;r=a,i=s;let l=Wt(i,r);t/=q0(l),l=Wt(i,r);let d=j0(l,t);r/=d,i/=d;let c=Z0(t);r/=c,i/=c,l=Wt(i,r);let h=To(r*r+i*i),f=K0(l),v=h>0?Ia(h,1/f):0;r=v*Je(l),i=v*Qe(l),l=Wt(i,r);let b=V0(l);r/=b,i/=b,l=Wt(i,r),t=A6(t,l),l=Wt(i,r),t=M6(t,l);let m=To(r*r+i*i),g=L0*Ia(m,Fr(.01,P0,10)),y=Wt(i,r),_=1+R0*Je(y)+$0*Qe(y)+D0*Je(2*y)+B0*Qe(2*y);t-=g*_;let E=Wt(i,r);h=To(r*r+i*i);let A=E;for(let fe=0;fe<8;fe++){let _e=A+U0(A)-E,P=1+k6(A);$l(P)<1e-10&&(P=1),A-=_e/P}r=h*Je(A),i=h*Qe(A);let[C,O,$]=Ye([t,r,i],ao.M2_INV),j=lt(C,Bl[0]),U=lt(O,Bl[1]),re=lt($,Bl[2]),H=Ye([j,U,re],ao.M1_INV);return Ye(H,ao.CAT_FROM_HELM)},Fl=new be({id:"helmlab-metric",name:"Helmlab MetricSpace",cssId:"--helmlab-metric",coords:{l:{refRange:[0,1.6],name:"Lightness"},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:"D65",base:Tt,M:ao,fromBase(e){return x6(e)},toBase(e){return I6(e)}}),C6=-.9155125151657894,O6=2.9268353744941558,T6=3.966003089807536,L6=1.9737081170404969,P6=52.473130649294724,R6=.47897301074925214;function $6(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Fl.from(e),[s,l,d]=Fl.from(t),c=r-s,h=i-l,f=a-d,v=(r+s)*.5,b=1+C6*(v-.5)**2,m=(Math.sqrt(i**2+a**2)+Math.sqrt(l**2+d**2))*.5,g=1+O6*m,y=(c**2/b**2+T6*(h**2+f**2)/g**2)**(L6/2);return(y/(1+P6*y))**R6}var Po={deltaE76:y3,deltaECMC:k3,deltaE2000:Yu,deltaEJz:S3,deltaEITP:O3,deltaEOK:xl,deltaEOK2:T3,deltaEHCT:V3,deltaEHelmlab:$6};function D6(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Y0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ln(e,{method:t=hr.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Pe(e),xo(arguments[1])?r=arguments[1]:r||(r=e.space),r=be.get(r),Co(e,r,{epsilon:0}))return e;let l;if(t==="css")l=B6(e,{space:r});else if(t==="raytrace")l=N6(e,{space:r});else{if(t!=="clip"){Object.prototype.hasOwnProperty.call(Y0,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=Y0[t]);let d=Yu;if(i!==""){for(let h in Po)if("deltae"+i.toLowerCase()===h.toLowerCase()){d=Po[h];break}}a===0&&(a=1e-16);let c=ln(Ve(e,r),{method:"clip",space:r});if(d(e,c)>a){if(s&&Object.keys(s).length===3){let E=be.resolveCoord(s.channel),A=pr(Ve(e,E.space),E.id);if(He(A)&&(A=0),A>=s.max)return Ve({space:"xyz-d65",coords:qt.D65},e.space);if(A<=s.min)return Ve({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=be.resolveCoord(t),f=h.space,v=h.id,b=Ve(e,f);b.coords.forEach((E,A)=>{He(E)&&(b.coords[A]=0)});let m=(h.range||h.refRange)[0],g=D6(a),y=m,_=pr(b,v);for(;_-y>g;){let E=Oo(b);E=ln(E,{space:r,method:"clip"}),d(b,E)-a<g?y=pr(b,v):_=pr(b,v),sn(b,v,(y+_)/2)}l=Ve(b,r)}else l=c}else l=Ve(e,r);if(t==="clip"||!Co(l,r,{epsilon:0})){let d=Object.values(r.coords).map(c=>c.range||[]);l.coords=l.coords.map((c,h)=>{let[f,v]=d[h];return f!==void 0&&(c=Math.max(f,c)),v!==void 0&&(c=Math.min(c,v)),c})}}return r!==e.space&&(l=Ve(l,e.space)),e.coords=l.coords,e}ln.returns="color";var Ta={WHITE:{space:Cr,coords:[1,0,0],alpha:1},BLACK:{space:Cr,coords:[0,0,0],alpha:1}};function B6(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=be.get(t),t.isUnbounded)return Ve(e,t);const a=Ve(e,xn);let s=a.coords[0];if(s>=1){const m=Ve(Ta.WHITE,t);return m.alpha=e.alpha,Ve(m,t)}if(s<=0){const m=Ve(Ta.BLACK,t);return m.alpha=e.alpha,Ve(m,t)}if(Co(a,t,{epsilon:0}))return Ve(a,t);function l(m){const g=Ve(m,t),y=Object.values(t.coords);return g.coords=g.coords.map((_,E)=>{if("range"in y[E]){const[A,C]=y[E].range;return Fr(A,_,C)}return _}),g}let d=0,c=a.coords[1],h=!0,f=Oo(a),v=l(f),b=xl(v,f);if(b<.02)return v;for(;c-d>1e-4;){const m=(d+c)/2;if(f.coords[1]=m,h&&Co(f,t,{epsilon:0}))d=m;else if(v=l(f),b=xl(v,f),b<.02){if(.02-b<1e-4)break;h=!1,d=m}else c=m}return v}function z6(e,t,r=[0,0,0],i=[1,1,1]){let a=1/0,s=-1/0,l=[];for(let d=0;d<3;d++){const c=e[d],h=t[d]-c,f=r[d],v=i[d];if(l.push(h),Math.abs(h)>1e-12){const b=1/h,m=(f-c)*b,g=(v-c)*b;s=Math.max(Math.min(m,g),s),a=Math.min(Math.max(m,g),a)}else if(c<f||c>v)return[]}return s>a||a<0?[]:(s<0&&(s=a),isFinite(s)?[e[0]+l[0]*s,e[1]+l[1]*s,e[2]+l[2]*s]:[])}function N6(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=be.get(t),t.isUnbounded)return Ve(e,t);let r=Ve(e,xn),[i,a,s]=r.coords;if(i>=1){const y=Ve(Ta.WHITE,t);return y.alpha=e.alpha,Ve(y,t)}else if(i<=0){const y=Ve(Ta.BLACK,t);return y.alpha=e.alpha,Ve(y,t)}const l=t,d=t.rgbGamut;if(d!==void 0&&(t=d),!oo(t,It))throw Error("An RGB gamut is required");let[c,h]=Object.values(t.coords)[0].range,f=[h,h,h];const v=t.linearGamut;v!==void 0&&(h=Ve({space:t,coords:f,alpha:e.alpha},v).coords[0],f=[h,h,h],t=v,c=Object.values(t.coords)[0].range[0]);let b=[c,c,c],m=Ve(r,t);if(!m.coords.every(y=>c<=y&&y<=h)){let y=Ve({space:xn,coords:[i,0,s]},t).coords;const _=c+1e-12,E=h-1e-12;let A=m.coords;for(let C=0;C<4;C++){if(C){const $=Ve(m,xn);$.coords[0]=i,$.coords[2]=s,m=Ve($,t)}const O=z6(y,m.coords,b,f);if(O.length===0){m.coords=[...A];break}C&&m.coords.every($=>_<$&&$<E)&&(y=[...m.coords]),A=O,m.coords=[...O]}}m=Ve(m,l);const g=Object.values(l.coords);return m.coords=m.coords.map((y,_)=>{if("range"in g[_]){const[E,A]=g[_].range;return Fr(E,y,A)}return y}),m}var Ro=class extends be{constructor(e){let t=be.get(e.base),r=e.chroma??"c",i=Object.keys(t.coords),a=i.indexOf(r);if(a===-1)throw new TypeError(`GamutRelativeColorSpace needs a "${r}" coordinate, got ${t.id}`);let s=Object.fromEntries(Object.entries(t.coords).map(([d,c])=>[d,{...c}]));s[r].range=[0,1],delete s[r].refRange,e.coords??=s,e.formats??={color:{coords:i.map(d=>{if(t.coords[d].type==="angle")return"<number> | <angle>";let[c,h]=t.coords[d].range??t.coords[d].refRange??[];return d===r||c===0&&h===1?"<percentage> | <number>":"<number> | <percentage>"})}},super(e),this.chromaIndex=a,this.method=`${t.id}.${r}`;let l=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...l.map(d=>t.from(this.gamutSpace,d)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,ln({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:"OK",jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((t,r)=>r!==this.chromaIndex&&He(t))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):He(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((t,r)=>r!==this.chromaIndex&&He(t)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!He(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function X0(e,t={}){if(Array.isArray(e))return e.map(c=>X0(c,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Pe(e,a)}catch(c){s=c}let{CSS:l,getComputedStyle:d}=globalThis;if(xo(e)&&i&&l&&d&&l.supports(r,e)){let c=i.style[r];e!==c&&(i.style[r]=e);let h=d(i).getPropertyValue(r);if(e!==c&&(i.style[r]=c),h!==e)try{return Pe(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function $o(e,t={}){let{precision:r=hr.precision,format:i,inGamut:a=!0,coords:s,alpha:l,commas:d}=t,c,h=Pe(e),f=i,v=h.parseMeta;v&&!i&&(v.format.canSerialize()&&(i=v.format,f=v.formatId),s??=v.types,l??=v.alphaType,d??=v.commas),f&&(i=h.space.getFormat(i)??be.findFormat(f)),i||(i=h.space.getFormat("default")??be.DEFAULT_FORMAT,f=i.name),i&&i.space&&i.space!==h.space&&(h=Ve(h,i.space));let b=h.coords.slice();if(a||=i.toGamut,a&&!Co(h)&&(b=ln(Oo(h),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)c=i.serialize(b,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=i.name||"color",g=i.serializeCoords(b,r,s);if(m==="color"){let C=i.id||i.ids?.[0]||h.space.cssId||h.space.id;g.unshift(C)}let y=h.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let _=l?.type??"<number>",E=l?.include===!0||i.alpha===!0||l?.include!==!1&&i.alpha!==!1&&y<1,A="";if(d??=i.commas,E){if(r!==null){let C;_==="<percentage>"&&(C="%",y*=100),y=vl(y,{precision:r,unit:C})}A=`${d?",":" /"} ${y}`}c=`${m}(${g.join(d?", ":" ")}${A})`}return c}var J0={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},Si=new It({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",M:J0}),Do=new It({id:"rec2020",name:"REC.2020",base:Si,linearGamut:Si,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),H6={toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]},Gl=new It({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",M:H6}),Wl={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Ul=new It({id:"srgb-linear",name:"Linear sRGB",white:"D65",M:Wl}),Q0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},eh=Array(3).fill("<percentage> | <number>[0, 255]"),th=Array(3).fill("<number>[0, 255]"),mr=new It({id:"srgb",name:"sRGB",base:Ul,linearGamut:Ul,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:eh},rgb_number:{name:"rgb",commas:!0,coords:th,alpha:!1},color:{},rgba:{coords:eh,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:th},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Q0.black,t.alpha=0):t.coords=Q0[e],t.coords)return t}}}}),Bo=new It({id:"p3",cssId:"display-p3",name:"P3",base:Gl,linearGamut:Gl,fromBase:mr.fromBase,toBase:mr.toBase});hr.display_space=mr;var F6;if(typeof CSS<"u"&&CSS.supports)for(let e of[fr,Do,Bo]){let t={space:e,coords:e.getMinCoords(),alpha:1},r=$o(t);if(CSS.supports("color",r)){hr.display_space=e;break}}function G6(e,{space:t,supports:r=globalThis.CSS?.supports,...i}={}){e=Pe(e);let a=$o(e,i);if(!r||r("color",a)||!hr.display_space)a=new String(a),a.color=e;else{let s=e;if((e.coords.some(He)||He(e.alpha))&&!(F6??=r("color","hsl(none 50% 50%)"))&&(s=Oo(e),s.coords=s.coords.map(xt),s.alpha=xt(s.alpha),a=$o(s,i),r("color",a)))return a=new String(a),a.color=s,a;if(t===void 0){t=s.space;let l=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith("xyz-")&&(l=l.filter(d=>!d.id.startsWith("xyz-")));for(let d of l){let c=Ve(s,d),h=$o(c,i);if(r("color",h))return a=new String(h),a.color=c,a}t=hr.display_space}s=Ve(s,t),a=new String($o(s,i)),a.color=s}return a}function W6(e,t,{space:r,hue:i="shorter"}={}){e=Pe(e),r||=e.space,r=be.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>Ve(h,r));let[s,l]=[e,t].map(h=>h.coords),d=s.map((h,f)=>{let v=a[f],b=l[f];return v.type==="angle"&&([h,b]=Zu(i,[h,b])),rh(h,b)}),c=rh(e.alpha,t.alpha);return{space:r,coords:d,alpha:c}}function rh(e,t){return He(e)||He(t)?e===t?null:0:e-t}function U6(e,t){return e=Pe(e),t=Pe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}var V6=nn({getLuminance:()=>In,register:()=>Z6,setLuminance:()=>nh});function In(e){return pr(e,[Tt,"y"])}function nh(e,t){sn(e,[Tt,"y"],t)}function Z6(e){Object.defineProperty(e.prototype,"luminance",{get(){return In(this)},set(t){nh(this,t)}})}function j6(e,t){e=Pe(e),t=Pe(t);let r=Math.max(In(e),0),i=Math.max(In(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var q6=.56,K6=.57,Y6=.62,X6=.65,oh=.022,J6=1.414,Q6=.1,eb=5e-4,tb=1.14,ih=.027,rb=1.14;function ah(e){return e>=oh?e:e+(oh-e)**J6}function zo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function nb(e,t){t=Pe(t),e=Pe(e);let r,i,a,s,l,d;t=Ve(t,"srgb"),[s,l,d]=t.coords.map(m=>He(m)?0:m);let c=zo(s)*.2126729+zo(l)*.7151522+zo(d)*.072175;e=Ve(e,"srgb"),[s,l,d]=e.coords.map(m=>He(m)?0:m);let h=zo(s)*.2126729+zo(l)*.7151522+zo(d)*.072175,f=ah(c),v=ah(h),b=v>f;return Math.abs(v-f)<eb?i=0:b?(r=v**q6-f**K6,i=r*tb):(r=v**X6-f**Y6,i=r*rb),Math.abs(i)<Q6?a=0:i>0?a=i-ih:a=i+ih,a*100}function ob(e,t){e=Pe(e),t=Pe(t);let r=Math.max(In(e),0),i=Math.max(In(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var ib=5e4;function ab(e,t){e=Pe(e),t=Pe(t);let r=Math.max(In(e),0),i=Math.max(In(t),0);return i>r&&([r,i]=[i,r]),i===0?ib:(r-i)/i}function sb(e,t){e=Pe(e),t=Pe(t);let r=pr(e,[fr,"l"]),i=pr(t,[fr,"l"]);return Math.abs(r-i)}var lb=216/24389,sh=24/116,La=24389/27,Vl=qt.D65,Zl=new be({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vl,base:Tt,fromBase(e){let t=e.map((r,i)=>r/Vl[i]).map(r=>r>lb?Math.cbrt(r):(La*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>sh?Math.pow(t[0],3):(116*t[0]-16)/La,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/La,t[2]>sh?Math.pow(t[2],3):(116*t[2]-16)/La].map((r,i)=>r*Vl[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),jl=Math.pow(5,.5)*.5+.5;function cb(e,t){e=Pe(e),t=Pe(t);let r=pr(e,[Zl,"l"]),i=pr(t,[Zl,"l"]),a=Math.abs(Math.pow(r,jl)-Math.pow(i,jl)),s=Math.pow(a,1/jl)*Math.SQRT2-40;return s<7.5?0:s}var Pa=nn({contrastAPCA:()=>nb,contrastDeltaPhi:()=>cb,contrastLstar:()=>sb,contrastMichelson:()=>ob,contrastWCAG21:()=>j6,contrastWeber:()=>ab});function db(e,t,r){xo(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(Pa).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Pe(e),t=Pe(t);for(let s in Pa)if("contrast"+i.toLowerCase()===s.toLowerCase())return Pa[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}var ub=nn({register:()=>hb,uv:()=>Ra,xy:()=>lh});function Ra(e){let[t,r,i]=_i(e,Tt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function lh(e){let[t,r,i]=_i(e,Tt),a=t+r+i;return[t/a,r/a]}function hb(e){Object.defineProperty(e.prototype,"uv",{get(){return Ra(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return lh(this)}})}function Ai(e,t,r={}){xo(r)&&(r={method:r});let{method:i=hr.deltaE,...a}=r;for(let s in Po)if("deltae"+i.toLowerCase()===s.toLowerCase())return Po[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}var fb=nn({darken:()=>dh,lighten:()=>ch});function ch(e,t=.25){let r=[be.get("oklch","lch"),"l"];return sn(e,r,i=>i*(1+t))}function dh(e,t=.25){let r=[be.get("oklch","lch"),"l"];return sn(e,r,i=>i*(1-t))}ch.returns="color",dh.returns="color";var pb=nn({isRange:()=>Kl,mix:()=>uh,range:()=>xi,register:()=>mb,steps:()=>hh});function uh(e,t,r,i={}){return[e,t]=[Pe(e),Pe(t)],Sn(r)==="object"&&([r,i]=[.5,r]),xi(e,t,i)(r??.5)}function hh(e,t,r={}){let i;Kl(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:d=1e3,...c}=r;i||([e,t]=[Pe(e),Pe(t)],i=xi(e,t,c));let h=Ai(e,t,s),f=a>0?Math.max(l,Math.ceil(h/a)+1):l,v=[];if(d!==void 0&&(f=Math.min(f,d)),f===1)v=[{p:.5,color:i(.5)}];else{let b=1/(f-1);v=Array.from({length:f},(m,g)=>{let y=g*b;return{p:y,color:i(y)}})}if(a>0){let b=v.reduce((m,g,y)=>{if(y===0)return 0;let _=Ai(g.color,v[y-1].color,s);return Math.max(m,_)},0);for(;b>a;){b=0;for(let m=1;m<v.length&&v.length<d;m++){let g=v[m-1],y=v[m],_=(y.p+g.p)/2,E=i(_);b=Math.max(b,Ai(E,g.color,s),Ai(E,y.color,s)),v.splice(m,0,{p:_,color:i(_)}),m++}}}return v=v.map(b=>b.color),v}function xi(e,t,r={}){if(Kl(e)){let[f,v]=[e,t];return xi(...f.rangeArgs.colors,{...f.rangeArgs.options,...v})}let{space:i,outputSpace:a,progression:s,premultiplied:l}=r;e=Pe(e),t=Pe(t),e=Oo(e),t=Oo(t);let d={colors:[e,t],options:r};i?i=be.get(i):i=be.registry[hr.interpolationSpace]||e.space,a=a?be.get(a):i,e=Ve(e,i),t=Ve(t,i),e=ln(e),t=ln(t);let c=i.hueId,h=i.hueIndex;if(c){let f=r.hue=r.hue||"shorter",v=[i,c],[b,m]=[pr(e,v),pr(t,v)];He(b)&&!He(m)?b=m:He(m)&&!He(b)&&(m=b),[b,m]=Zu(f,[b,m]),sn(e,v,b),sn(t,v,m)}return He(e.alpha)&&!He(t.alpha)?e.alpha=t.alpha:He(t.alpha)&&!He(e.alpha)&&(t.alpha=e.alpha),l&&(e.coords=ql(e.coords,e.alpha,h),t.coords=ql(t.coords,t.alpha,h)),Object.assign(f=>{f=s?s(f):f;let v=e.coords.map((g,y)=>{let _=t.coords[y];return bi(g,_,f)}),b=bi(e.alpha,t.alpha,f),m={space:i,coords:v,alpha:b};return l&&(m.coords=ql(m.coords,b,h,!0)),a!==i&&(m=Ve(m,a)),m},{rangeArgs:d})}function ql(e,t,r,i=!1){return He(t)||i&&t===0?e:e.map((a,s)=>s===r||He(a)?a:i?a/t:a*t)}function Kl(e){return Sn(e)==="function"&&!!e.rangeArgs}hr.interpolationSpace="lab";function mb(e){e.defineFunction("mix",uh,{returns:"color"}),e.defineFunction("range",xi,{returns:"function<color>"}),e.defineFunction("steps",hh,{returns:"array<color>"})}var Gr=new be({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mr,rgbGamut:mr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,d,c]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(d=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4}l=l*60}return d<0&&(l+=180,d=Math.abs(d)),l>=360&&(l-=360),[l,d*100,c*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/30)%12,d=r*Math.min(i,1-i);return i-d*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),gb=new be({id:"hsl-p3",cssId:"--hsl-p3",name:"HSL P3",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bo,rgbGamut:Bo,fromBase:Gr.fromBase,toBase:Gr.toBase}),vb=new be({id:"hsl-rec2020",cssId:"--hsl-rec2020",name:"HSL Rec.2020",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Do,rgbGamut:Do,fromBase:Gr.fromBase,toBase:Gr.toBase}),fh=new be({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:mr,rgbGamut:mr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,d,c]=[null,0,t],h=t-r;if(h!==0){switch(t){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4}l=l*60}return c&&(d=h/c),l>=360&&(l-=360),[l,d*100,c*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),bb=new be({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fh,rgbGamut:mr,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),wb={toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]},Yl=new It({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",M:wb}),_b=new It({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Yl,linearGamut:Yl,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),yb={toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]},Xl=new It({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Sl,M:yb}),kb=1/512,Eb=16/512,Mb=new It({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Xl,linearGamut:Xl,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<Eb?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=kb?r*i**(1/1.8):16*t})}}),Jl=1.09929682680944,ph=.018053968510807,Sb=new It({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Si,linearGamut:Si,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<ph*4.5?t/4.5:r*Math.pow((i+Jl-1)/Jl,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=ph?r*(Jl*Math.pow(i,.45)-.09929682680944008):4.5*t})}}),Ab=new Ro({id:"oklch-p3",cssId:"--oklch-p3",name:"OKLCh P3",base:xn,gamutSpace:Bo}),xb=new Ro({id:"oklch-srgb",cssId:"--oklch-srgb",name:"OKLCh sRGB",base:xn,gamutSpace:mr}),Ib=new Ro({id:"oklch-rec2020",cssId:"--oklch-rec2020",name:"OKLCh Rec.2020",base:xn,gamutSpace:Do}),Cb=new Ro({id:"lch-p3",cssId:"--lch-p3",name:"LCH P3",base:Dt,gamutSpace:Bo}),Ob=new Ro({id:"lch-srgb",cssId:"--lch-srgb",name:"LCH sRGB",base:Dt,gamutSpace:mr}),Tb=new Ro({id:"lch-rec2020",cssId:"--lch-rec2020",name:"LCH Rec.2020",base:Dt,gamutSpace:Do}),No=2*Math.PI,Yr={...Cr.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},$a=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Ql=Number.MAX_VALUE,Da=.206,mh=.03,Ii=1.206/1.03;function Ht(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function Ci(e){return .5*(Ii*e-Da+Math.sqrt((Ii*e-Da)*(Ii*e-Da)+4*mh*Ii*e))}function Ho(e){return(e**2+Da*e)/(Ii*(e+mh))}function ec(e){let[t,r]=e;return[r/t,r/(1-t)]}function Lb(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function tc(e,t){let r=Ye(e,Yr.LabtoLMS);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,Ye(r,t,r)}function Ba(e,t,r,i){let a=Rb(e,t,r,i),s=tc([1,a*e,a*t],r),l=lt(1/Math.max(...s),1/3);return[l,l*a]}function Pb(e,t,r,i,a,s,l,d){let c;if(d===void 0&&(d=Ba(e,t,s,l)),(r-a)*d[1]-(d[0]-a)*i<=0)c=d[1]*a/(i*d[0]+d[1]*(a-r));else{c=d[1]*(a-1)/(i*(d[0]-1)+d[1]*(a-r));let h=r-a,f=i,v=Ht(Yr.LabtoLMS[0].slice(1),[e,t]),b=Ht(Yr.LabtoLMS[1].slice(1),[e,t]),m=Ht(Yr.LabtoLMS[2].slice(1),[e,t]),g=h+f*v,y=h+f*b,_=h+f*m,E=a*(1-c)+c*r,A=c*i,C=E+A*v,O=E+A*b,$=E+A*m,j=C**3,U=O**3,re=$**3,H=3*g*C**2,fe=3*y*O**2,_e=3*_*$**2,P=6*g**2*C,X=6*y**2*O,M=6*_**2*$,Q=Ht(s[0],[j,U,re])-1,Ie=Ht(s[0],[H,fe,_e]),ce=Ht(s[0],[P,X,M]),Le=Ie/(Ie*Ie-.5*Q*ce),ie=-Q*Le,Ae=Ht(s[1],[j,U,re])-1,W=Ht(s[1],[H,fe,_e]),G=Ht(s[1],[P,X,M]),Se=W/(W*W-.5*Ae*G),me=-Ae*Se,pe=Ht(s[2],[j,U,re])-1,Xe=Ht(s[2],[H,fe,_e]),bt=Ht(s[2],[P,X,M]),Ze=Xe/(Xe*Xe-.5*pe*bt),We=-pe*Ze;ie=Le>=0?ie:Ql,me=Se>=0?me:Ql,We=Ze>=0?We:Ql,c+=Math.min(ie,Math.min(me,We))}return c}function gh(e,t,r){let[i,a,s]=e,l=Ba(a,s,t,r),d=Pb(a,s,i,1,i,t,r,l),c=ec(l),h=d/Math.min(i*c[0],(1-i)*c[1]),f=Lb(a,s),v=i*f[0],b=(1-i)*f[1],m=.9*h*Math.sqrt(Math.sqrt(1/(1/v**4+1/b**4)));return v=i*.4,b=(1-i)*.8,[Math.sqrt(1/(1/v**2+1/b**2)),m,d]}function Rb(e,t,r,i){let a,s,l,d,c,h,f,v;Ht(i[0][0],[e,t])>1?([a,s,l,d,c]=i[0][1],[h,f,v]=r[0]):Ht(i[1][0],[e,t])>1?([a,s,l,d,c]=i[1][1],[h,f,v]=r[1]):([a,s,l,d,c]=i[2][1],[h,f,v]=r[2]);let b=a+s*e+l*t+d*e**2+c*e*t,m=Ht(Yr.LabtoLMS[0].slice(1),[e,t]),g=Ht(Yr.LabtoLMS[1].slice(1),[e,t]),y=Ht(Yr.LabtoLMS[2].slice(1),[e,t]),_=1+b*m,E=1+b*g,A=1+b*y,C=_**3,O=E**3,$=A**3,j=3*m*_**2,U=3*g*E**2,re=3*y*A**2,H=6*m**2*_,fe=6*g**2*E,_e=6*y**2*A,P=h*C+f*O+v*$,X=h*j+f*U+v*re,M=h*H+f*fe+v*_e;return b=b-P*X/(X**2-.5*P*M),b}function $b(e,t,r){let[i,a,s]=e,l=Ho(s),d=null,c=null;if(i=Ir(i)/360,l!==0&&l!==1&&a!==0){let h=Math.cos(No*i),f=Math.sin(No*i),[v,b,m]=gh([l,h,f],t,r),g=.8,y=1.25,_,E,A,C;a<g?(_=y*a,E=0,A=g*v,C=1-A/b):(_=5*(a-.8),E=b,A=.2*b**2*1.25**2/v,C=1-A/(m-b));let O=E+_*A/(1-C*_);d=O*h,c=O*f}return[l,d,c]}function Db(e,t,r){let i=1e-7,a=1e-4,s=e[0],l=0,d=Ci(s),c=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/No;if(d!==0&&d!==1&&c!==0){let[v,b,m]=gh([s,e[1]/c,e[2]/c],t,r),g=.8,y=1.25,_,E,A,C;c<b?(E=g*v,A=1-E/b,C=c/(E+A*c),l=C*g):(_=b,E=.2*b**2*y**2/v,A=1-E/(m-b),C=(c-_)/(E+A*(c-_)),l=g+.2*C)}const f=Math.abs(l)<a;return f||d===0||Math.abs(1-d)<i?(h=null,f||(l=0)):h=Ir(h*360),[h,l,d]}var za=new be({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Cr,gamutSpace:"self",M:Yr,fromBase(e){return Db(e,Yr.toSRGBLinear,$a)},toBase(e){return $b(e,Yr.toSRGBLinear,$a)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});za.rgbGamut=new It({id:"okhsl-prism",cssId:"--okhsl-prism",name:"Okhsl Prism",base:za,fromBase(e){return Gr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Gr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var vh=new be({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Cr,fromBase(e){return[Ci(e[0]),e[1],e[2]]},toBase(e){return[Ho(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Bb=new be({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vh,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),rc={toSRGBLinear:za.M.toSRGBLinear};function zb(e,t,r){let[i,a,s]=e;i=Ir(i)/360;let l=Ho(s),d=null,c=null;if(l!==0&&a!==0){let h=Math.cos(No*i),f=Math.sin(No*i),v=Ba(h,f,t,r),[b,m]=ec(v),g=.5,y=1-g/b,_=1-a*g/(g+m-m*y*a),E=a*m*g/(g+m-m*y*a);l=s*_;let A=s*E,C=Ho(_),O=E*C/_,$=Ho(l);A=A*$/l,l=$;let[j,U,re]=tc([C,h*O,f*O],t),H=lt(1/Math.max(Math.max(j,U),Math.max(re,0)),1/3);l=l*H,A=A*H,d=A*h,c=A*f}return[l,d,c]}function Nb(e,t,r){let i=1e-4,a=e[0],s=0,l=Ci(a),d=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/No;if(a!==0&&a!==1&&d!==0){let h=e[1]/d,f=e[2]/d,v=Ba(h,f,t,r),[b,m]=ec(v),g=.5,y=1-g/b,_=m/(d+a*m),E=_*a,A=_*d,C=Ho(E),O=A*C/E,[$,j,U]=tc([C,h*O,f*O],t),re=lt(1/Math.max(Math.max($,j),Math.max(U,0)),1/3);a=a/re,d=d/re,d=d*Ci(a)/a,a=Ci(a),l=a/E,s=(g+m)*A/(m*g+m*y*A)}return Math.abs(s)<i||l===0?c=null:c=Ir(c*360),[c,s,l]}var nc=new be({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Cr,gamutSpace:"self",M:rc,fromBase(e){return Nb(e,rc.toSRGBLinear,$a)},toBase(e){return zb(e,rc.toSRGBLinear,$a)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});nc.rgbGamut=new It({id:"okhsv-prism",cssId:"--okhsv-prism",name:"Okhsv Prism",base:nc,fromBase(e){return Gr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Gr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var bh=qt.D65,Hb=216/24389,wh=24389/27,[_h,yh]=Ra({space:Tt,coords:bh}),kh=new be({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:bh,base:Tt,fromBase(e){let t=[xt(e[0]),xt(e[1]),xt(e[2])],r=t[1],[i,a]=Ra({space:Tt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=Hb?wh*r:116*Math.cbrt(r)-16;return[s,13*s*(i-_h),13*s*(a-yh)]},toBase(e){let[t,r,i]=e;if(t===0||He(t))return[0,0,0];r=xt(r),i=xt(i);let a=r/(13*t)+_h,s=i/(13*t)+yh,l=t<=8?t/wh:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),oc=new be({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:kh,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Fb=216/24389,Gb=24389/27,cn=Wl.fromXYZ,Eh=cn[0][0],Mh=cn[0][1],ic=cn[0][2],Sh=cn[1][0],Ah=cn[1][1],ac=cn[1][2],xh=cn[2][0],Ih=cn[2][1],sc=cn[2][2];function Fo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function Na(e){const t=Math.pow(e+16,3)/1560896,r=t>Fb?t:e/Gb,i=r*(284517*Eh-94839*ic),a=r*(838422*ic+769860*Mh+731718*Eh),s=r*(632260*ic-126452*Mh),l=r*(284517*Sh-94839*ac),d=r*(838422*ac+769860*Ah+731718*Sh),c=r*(632260*ac-126452*Ah),h=r*(284517*xh-94839*sc),f=r*(838422*sc+769860*Ih+731718*xh),v=r*(632260*sc-126452*Ih);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/c,g0i:d*e/c,g1s:l/(c+126452),g1i:(d-769860)*e/(c+126452),b0s:h/v,b0i:f*e/v,b1s:h/(v+126452),b1i:(f-769860)*e/(v+126452)}}function Ch(e,t){const r=t/360*Math.PI*2,i=Fo(e.r0s,e.r0i,r),a=Fo(e.r1s,e.r1i,r),s=Fo(e.g0s,e.g0i,r),l=Fo(e.g1s,e.g1i,r),d=Fo(e.b0s,e.b0i,r),c=Fo(e.b1s,e.b1i,r);return Math.min(i,a,s,l,d,c)}var Wb=new be({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oc,gamutSpace:mr,rgbGamut:mr,fromBase(e){let[t,r,i]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/Ch(Na(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=Ch(Na(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),dn=Wl.fromXYZ;dn[0][0],dn[0][1],dn[0][2],dn[1][0],dn[1][1],dn[1][2],dn[2][0],dn[2][1],dn[2][2];function Go(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Oh(e){let t=Go(e.r0s,e.r0i),r=Go(e.r1s,e.r1i),i=Go(e.g0s,e.g0i),a=Go(e.g1s,e.g1i),s=Go(e.b0s,e.b0i),l=Go(e.b1s,e.b1i);return Math.min(t,r,i,a,s,l)}var lc=new be({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oc,gamutSpace:"self",fromBase(e){let[t,r,i]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/Oh(Na(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=Oh(Na(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});lc.rgbGamut=new It({id:"hpluv-prism",cssId:"--hpluv-prism",name:"HPLuv Prism",base:lc,fromBase(e){return Gr.toBase(e)},toBase(e){return Gr.fromBase(e)}});var Ha=.021,Fa=Math.sqrt(Ha/3),Ub=Fa*Fa*Fa,Th=.978,Lh=.058,Ph=264.5*Math.PI/180,cc=.7,Vb=.37,Oi={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},Cn=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],un=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],dc=Cn.length;function uc(e){let t=e/(2*Ub),r=2*Fa*Math.sinh(Math.asinh(t)/3),i=r*r*r+Ha*r-e,a=3*r*r+Ha,s=6*r,l=2*a*a-i*s;return Math.abs(l)>1e-30&&(r-=2*i*a/l),r}function hc(e){return e*e*e+Ha*e}function Rh(e){let t=Math.max(0,Math.min(1,(e-Vb)/.63));return Math.sin(Math.PI*t)**2}function Zb(e,t,r){let i=Math.sqrt(t*t+r*r);if(i<1e-12)return[t,r];let a=Rh(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=s-Ph;l=l-Math.round(l/(2*Math.PI))*2*Math.PI;let d=Math.exp(-.5*(l/cc)**2),c=s+Lh*a*d;return[i*Math.cos(c),i*Math.sin(c)]}function jb(e,t,r){let i=Math.sqrt(t*t+r*r);if(i<1e-12)return[t,r];let a=Rh(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=cc*cc,d=Lh*a,c=s;for(let h=0;h<8;h++){let f=c-Ph;f=f-Math.round(f/(2*Math.PI))*2*Math.PI;let v=Math.exp(-.5*f*f/l),b=c+d*v-s,m=1+d*v*(-f/l),g=d*v*(-1/l+f*f/(l*l)),y=2*m*m-b*g;Math.abs(y)>1e-30&&(c-=2*b*m/y)}return[i*Math.cos(c),i*Math.sin(c)]}function qb(e){if(e<=0||e>=1)return e;let t=0,r=dc-1;for(;r-t>1;){let a=t+r>>1;Cn[a]<=e?t=a:r=a}let i=(e-Cn[t])/(Cn[r]-Cn[t]);return un[t]+i*(un[r]-un[t])}function Kb(e){if(e<=un[0]||e>=un[dc-1])return e;let t=0,r=dc-1;for(;r-t>1;){let a=t+r>>1;un[a]<=e?t=a:r=a}let i=(e-un[t])/(un[r]-un[t]);return Cn[t]+i*(Cn[r]-Cn[t])}var $h=new be({id:"helmgen",name:"HelmGen",cssId:"--helmgen",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:"D65",base:Tt,M:Oi,fromBase(e){let t=Ye(e,Oi.M1),r=uc(Math.max(t[0],0)),i=uc(Math.max(t[1],0)),a=uc(Math.max(t[2],0));{let c=(r+i+a)/3,h=(Math.max(r,i,a)-Math.min(r,i,a))/Math.max(Math.abs(c),1e-30),f=Math.exp(-((h/1e-5)**2));r+=f*(c-r),i+=f*(c-i),a+=f*(c-a)}let[s,l,d]=Ye([r,i,a],Oi.M2);{let c=Math.sqrt(l*l+d*d);if(c>1e-12){let h=Math.pow(c,Th)/c;l*=h,d*=h}}return s=qb(s),[l,d]=Zb(s,l,d),[s,l,d]},toBase(e){let[t,r,i]=e;[r,i]=jb(t,r,i),t=Kb(t);{let f=Math.sqrt(r*r+i*i);if(f>1e-12){let v=Math.pow(f,1/Th)/f;r*=v,i*=v}}let[a,s,l]=Ye([t,r,i],Oi.M2_INV);{let f=(a+s+l)/3,v=(Math.max(a,s,l)-Math.min(a,s,l))/Math.max(Math.abs(f),1e-30),b=Math.exp(-((v/1e-5)**2));a+=b*(f-a),s+=b*(f-s),l+=b*(f-l)}let d=hc(a),c=hc(s),h=hc(l);return Ye([d,c,h],Oi.M1_INV)}}),Yb=new be({id:"helmgenlch",name:"HelmGenLCh",cssId:"--helmgenlch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.65],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$h,fromBase:Dt.fromBase,toBase:Dt.toBase}),Ti=new It({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",M:J0}),Dh=203,Bh=2610/2**14,Xb=2**14/2610,Jb=2523/32,zh=32/2523,Nh=3424/4096,Hh=2413/128,Fh=2392/128,Qb=new It({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ti,linearGamut:Ti,toBase(e){return e.map(function(t){return(Math.max(t**zh-Nh,0)/(Hh-Fh*t**zh))**Xb*1e4/Dh})},fromBase(e){return e.map(function(t){let r=Math.max(t*Dh/1e4,0);return((Nh+Hh*r**Bh)/(1+Fh*r**Bh))**Jb})}}),Gh=.17883277,Wh=.28466892,Uh=.55991073,fc=3.7743,e9=new It({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ti,linearGamut:Ti,toBase(e){return e.map(function(t){return t<=.5?t**2/3*fc:(Math.exp((t-Uh)/Gh)+Wh)/12*fc})},fromBase(e){return e.map(function(t){return t/=fc,t<=1/12?lt(3*t,.5):Gh*Math.log(12*t-Wh)+Uh})}}),Vh={};An.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Zh(e.W1,e.W2,e.options.method))}),An.add("chromatic-adaptation-end",e=>{e.M||(e.M=Zh(e.W1,e.W2,e.options.method))});function Ga({id:e,toCone_M:t,fromCone_M:r}){Vh[e]=arguments[0]}function Zh(e,t,r="Bradford"){let i=Vh[r],[a,s,l]=vi(i.toCone_M,e),[d,c,h]=vi(i.toCone_M,t),f=[[d/a,0,0],[0,c/s,0],[0,0,h/l]],v=vi(f,i.toCone_M);return vi(i.fromCone_M,v)}Ga({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Ga({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Ga({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Ga({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(qt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),qt.ACES=[.32168/.33767,1,.34065/.33767];var t9={toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]},pc=new It({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:qt.ACES,M:t9}),Wa=2**-16,mc=-.35828683,Ua=(Math.log2(65504)+9.72)/17.52,r9=new It({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[mc,Ua],name:"Red"},g:{range:[mc,Ua],name:"Green"},b:{range:[mc,Ua],name:"Blue"}},referred:"scene",base:pc,linearGamut:pc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Wa)*2:r<Ua?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Wa)+9.72)/17.52:t<Wa?(Math.log2(Wa+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),jh=nn({A98RGB:()=>_b,A98RGB_Linear:()=>Yl,ACEScc:()=>r9,ACEScg:()=>pc,CAM16_JMh:()=>z3,HCT:()=>Mi,HPLuv:()=>lc,HSL:()=>Gr,HSL_P3:()=>gb,HSL_REC2020:()=>vb,HSLuv:()=>Wb,HSV:()=>fh,HWB:()=>bb,HelmGen:()=>$h,HelmGenLCh:()=>Yb,Helmlab:()=>Fl,ICTCP:()=>Ll,JzCzHz:()=>Tl,Jzazbz:()=>l0,LCH:()=>Dt,LCH_P3:()=>Cb,LCH_REC_2020:()=>Tb,LCH_sRGB:()=>Ob,LCHuv:()=>oc,Lab:()=>fr,Lab_D65:()=>Zl,Luv:()=>kh,OKLCH:()=>xn,OKLCH_P3:()=>Ab,OKLCH_REC_2020:()=>Ib,OKLCH_sRGB:()=>xb,OKLab:()=>Cr,OKLrCH:()=>Bb,OKLrab:()=>vh,Okhsl:()=>za,Okhsv:()=>nc,P3:()=>Bo,P3_Linear:()=>Gl,ProPhoto:()=>Mb,ProPhoto_Linear:()=>Xl,REC_2020:()=>Do,REC_2020_Linear:()=>Si,REC_2020_Scene_Referred:()=>Sb,REC_2100_HLG:()=>e9,REC_2100_Linear:()=>Ti,REC_2100_PQ:()=>Qb,XYZ_ABS_D65:()=>Cl,XYZ_D50:()=>Sl,XYZ_D65:()=>Tt,sRGB:()=>mr,sRGB_Linear:()=>Ul}),gr=class lr{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Pe(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:be.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=He(s)?s:s===void 0?1:Fr(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:d=>this.set(l,d)})}get spaceId(){return this.space.id}clone(){return new lr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=G6(this,...t);return r.color=new lr(r.color),r}static get(t,...r){return oo(t,this)?t:new lr(t,...r)}static try(t,r){if(oo(t,this))return t;let i=X0(t,r);return i?new lr(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,l=function(...d){let c=r(...d);if(s==="color")c=lr.get(c);else if(s==="function<color>"){let h=c;c=function(...f){let v=h(...f);return lr.get(v)},Object.assign(c,h)}else s==="array<color>"&&(c=c.map(h=>lr.get(h)));return c};t in lr||(lr[t]=l),a&&(lr.prototype[t]=function(...d){return l(this,...d)})}static defineFunctions(t){for(let r in t)lr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(lr);else for(let r in t)lr.defineFunction(r,t[r])}};gr.defineFunctions({get:pr,getAll:_i,set:sn,setAll:Il,to:Ve,equals:U6,inGamut:Co,toGamut:ln,distance:Xu,deltas:W6,toString:$o}),Object.assign(gr,{util:s3,hooks:An,WHITES:qt,Space:be,spaces:be.registry,parse:Wu,defaults:hr});for(let e of Object.keys(jh))be.register(jh[e]);for(let e in be.registry)gc(e,be.registry[e]);An.add("colorspace-init-end",e=>{gc(e.id,e),e.aliases?.forEach(t=>{gc(t,e)})});function gc(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(gr.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,l)=>{try{return be.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,d)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:c}=be.resolveCoord([t,l]);if(c>=0)return s[c]}return Reflect.get(s,l,d)},set:(s,l,d,c)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:h}=be.resolveCoord([t,l]);if(h>=0)return s[h]=d,this.setAll(e,s),!0}return Reflect.set(s,l,d,c)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}gr.extend(Po),gr.extend({deltaE:Ai}),Object.assign(gr,{deltaEMethods:Po}),gr.extend(fb),gr.extend({contrast:db}),gr.extend(ub),gr.extend(V6),gr.extend(pb),gr.extend(Pa);var Or=gr,vc={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Ct={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function n9(e){try{Or.get(e)}catch{return!0}return Or.contrast(e,"white","Lstar")>Or.contrast(e,"black","Lstar")}function Wo(e){return n9(e)?"#FFFFFF":"#000000"}var o9=xe.default.fromPairs(xe.default.entries(ul).map(([e,t])=>[e,Lu(t)])),{IconAdjustmentsHorizontal:YA,IconApiBook:XA,IconArrowsHorizontal:JA,IconArrowsLeftRight:QA,IconArrowAutofitDown:ex,IconArrowAutofitHeight:i9,IconArrowAutofitLeft:tx,IconArrowAutofitRight:rx,IconArrowAutofitWidth:a9,IconArrowBigLeft:nx,IconArrowBigRight:ox,IconArrowsMove:ix,IconArrowsMoveVertical:ax,IconArrowsVertical:sx,IconBook:lx,IconBookOff:cx,IconBookArrowLeft:dx,IconBookArrowRight:ux,IconBooksReturn:hx,IconBookUpload:fx,IconBookmark:s9,IconBookmarkOff:l9,IconBookmarks:px,IconBoxAlignTop:mx,IconCategory:c9,IconCheck:Va,IconChevronLeft:gx,IconChevronRight:vx,IconAlertCircle:bx,IconCircleCheck:wx,IconCircleX:_x,IconHelp:yx,IconInfoCircle:kx,IconComic1:Ex,IconComic1Flat:Mx,IconComic2:Sx,IconComic2Flat:Ax,IconComic3:xx,IconComic3Flat:Ix,IconDeviceDesktop:Cx,IconDeviceFloppy:Ox,IconDeviceMobile:Tx,IconDeviceTablet:Lx,IconDotsVertical:Px,IconEReader1:Rx,IconEReader1Flat:$x,IconEReader2:Dx,IconEReader2Flat:Bx,IconExternalLink:zx,IconEye:d9,IconEyeOff:u9,IconFileDownload:Nx,IconFilePercent:Hx,IconFolderOpen:Fx,IconHandClick:Gx,IconKeyboard:Wx,IconLayoutDashboard:Ux,IconLayoutBottombar:Vx,IconLayoutBottombarInactive:Zx,IconLayoutSidebar:jx,IconLayoutSidebarInactive:qx,IconLayoutSidebarRight:Kx,IconLayoutSidebarRightInactive:Yx,IconListNumbers:Xx,IconLoader2:Jx,IconLocationCog:Qx,IconMenu2:eI,IconMenuDeep:tI,IconMessage:rI,IconMoon:nI,IconPage:oI,IconPageFlat:iI,IconPalette:aI,IconPencil:sI,IconPencilCog:lI,IconPhoto:cI,IconPhotoOff:dI,IconPin:uI,IconPlayerPause:hI,IconPlayerPlay:fI,IconRefresh:h9,IconSettings:pI,IconSettingsOff:mI,IconSpacingHorizontal:f9,IconSpacingVertical:gI,IconSun:vI,IconTrash:bI,IconWorldCog:wI,IconX:bc,IconZoom:_I,IconZoomCancel:p9,IconZoomIn:m9,IconZoomInArea:yI,IconZoomOut:g9,IconZoomOutArea:kI,IconZoomPan:EI}=o9,On=class extends tt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=kt`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Wo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ne`
      <div style=${Kr(t)}>
        <div
          class="swatch"
          style=${Kr(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Va} </span>
        </div>
      </div>
    `}};D([K({type:String})],On.prototype,"color",void 0),D([K({type:String})],On.prototype,"selected",void 0),D([K({type:Number})],On.prototype,"size",void 0),D([K({type:String})],On.prototype,"radius",void 0),D([K({state:!0})],On.prototype,"contrastColor",void 0),D([K({type:Boolean,reflect:!0})],On.prototype,"checked",void 0),On=D([st("color-swatch")],On);function v9(e){const[t,r,i]=e.to("oklch").coords.map(c=>c??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(c=>new Or("oklch",[c,r,i]).toString({format:"hex"}));let l=-1,d=1/0;for(let c=0;c<a.length;c++){const h=Math.abs(a[c]-t);h<d&&(d=h,l=c)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(c=>c.toUpperCase())}function b9(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function w9(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function _9(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(i.lightest.lightness-50)/a,d=(50-i.darkest.lightness)/s,c=i.lightest.rotate/a,h=i.darkest.rotate/s,f=i.lightest.saturate/a,v=i.darkest.saturate/s;for(let b=1;b<=a;b++){const m=a-b,g=r.clone();g.coords[2]=(g.coords[2]??0)+l*(b-.5),g.coords[0]=(g.coords[0]??0)+c*b,g.coords[1]=(g.coords[1]??0)+f*b,t[m]=g.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let b=1;b<=s;b++){const m=a+b,g=r.clone();g.coords[2]=(g.coords[2]??0)-d*(b-.5),g.coords[0]=(g.coords[0]??0)+h*b,g.coords[1]=(g.coords[1]??0)+v*b,t[m]=g.toString({format:"hex"})}return t}function y9(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,d=i+(100-i)*l,c=r-r*l;a[s]=new Or("hsl",[t,c,d]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,d=i-i*l,c=r+(100-r)*l;a[s+6]=new Or("hsl",[t,c,d]).toString({format:"hex"})}return a}function qh(e,t="steps"){let r;try{r=Or.get(e)}catch{r=Or.get(vc.navy)}switch(t){case"saturation":return b9(r);case"lightness":return w9(r);case"mantine":return y9(r);case"chakra":return _9(r);default:return v9(r)}}var Tn=class extends tt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=kt`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=qh(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ne`
      ${this.gradient.map(t=>{const r=this.selected&&t.toLowerCase()===this.selected.toLowerCase(),i=Wo(t);return ne`
          <div
            class="swatch"
            ?checked=${r}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${i}"
            >
              <span class="checkmark">${Va}</span>
            </div>
          </div>
        `})}
    `}};D([K({type:String})],Tn.prototype,"baseColor",void 0),D([K({type:String})],Tn.prototype,"mode",void 0),D([K({type:String,reflect:!0})],Tn.prototype,"orientation",void 0),D([K({type:String})],Tn.prototype,"selected",void 0),D([K({type:String,reflect:!0})],Tn.prototype,"value",void 0),D([Nt()],Tn.prototype,"gradient",void 0),Tn=D([st("color-palette")],Tn);var Za=class extends tt{constructor(...t){super(...t),this.value=""}static{this.styles=kt`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(Ct).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>{const a=r.map(s=>{const l=Ct[i][s],d=Wo(l),c=this.selected?.toLowerCase()===l.toLowerCase();return ne`
          <span
            title="${l}"
            class="${Et({ThemeRadio:!0,selected:c})}"
            style="background-color: ${l}; color: ${d}"
            @click=${this.handleColorClick}
          >
            ${Va}
          </span>
        `});return ne` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${a}</div>
      </div>`})}};D([K({type:String,reflect:!0})],Za.prototype,"value",void 0),D([K({type:String})],Za.prototype,"selected",void 0),Za=D([st("color-panel")],Za);var Ft=class extends tt{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:Or.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return ne`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Kr({stroke:Wo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Or("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ne`
      <div
        class="saturation-panel"
        style=${Kr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Kr(i)}
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
            style=${Kr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(Ct).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ne`
            <button
              class="swatch"
              title=${s}
              style=${Kr({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?ne`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Kr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ne`<div class=${Et(t)}>${r}</div>`:""}
      `:ne`<div class=${Et(t)}>${r}</div>`}parseColor(t){try{return Or.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new Or("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};D([K({type:String})],Ft.prototype,"value",void 0),D([K({type:String,attribute:"default-value"})],Ft.prototype,"defaultValue",void 0),D([K({type:String})],Ft.prototype,"label",void 0),D([K({type:String})],Ft.prototype,"hint",void 0),D([K({type:String})],Ft.prototype,"name",void 0),D([K({type:Boolean,reflect:!0})],Ft.prototype,"disabled",void 0),D([K({type:String,reflect:!0})],Ft.prototype,"size",void 0),D([K({type:Array})],Ft.prototype,"swatches",void 0),D([K({type:String})],Ft.prototype,"mode",void 0),D([Nt()],Ft.prototype,"opened",void 0),D([Nt()],Ft.prototype,"popupDirection",void 0),D([Nt()],Ft.prototype,"sourceSpace",void 0),D([Nt()],Ft.prototype,"hsv",void 0),D([Nt()],Ft.prototype,"saturationThumbPosition",void 0),D([Nt()],Ft.prototype,"hueThumbPosition",void 0),Ft=D([st("mov-color-picker")],Ft);var k9=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},Ln=class extends tt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),d=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${d}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ne`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ne`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:Ne}"
            >
              <button
                class="${Et({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ne`<mov-icon
                      name="${t.icon}"
                      .size=${k9(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Ne}
                ${this.labelPosition!=="tooltip"?ne`<span>${t.label}</span>`:Ne}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};D([K({type:String,reflect:!0})],Ln.prototype,"value",void 0),D([K({type:String})],Ln.prototype,"labelPosition",void 0),D([K({type:String})],Ln.prototype,"size",void 0),D([Nt()],Ln.prototype,"_options",void 0),D([Mn(".thumb")],Ln.prototype,"thumb",void 0),D([Mn("slot")],Ln.prototype,"_slotEl",void 0),Ln=D([st("segmented-control")],Ln);var Li=class extends tt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};D([K({type:String,reflect:!0})],Li.prototype,"value",void 0),D([K({type:String,reflect:!0})],Li.prototype,"label",void 0),D([K({type:String,reflect:!0})],Li.prototype,"icon",void 0),Li=D([st("segmented-control-option")],Li);var vr=class extends tt{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=kt`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=ne`${this.checked?Va:bc}`:r=ne`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ne`
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
            class="${Et({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};D([K({type:String})],vr.prototype,"name",void 0),D([K({type:String})],vr.prototype,"value",void 0),D([K({type:Boolean,reflect:!0})],vr.prototype,"checked",void 0),D([K({type:Boolean,reflect:!0,attribute:"default-checked"})],vr.prototype,"defaultChecked",void 0),D([K({type:Boolean,reflect:!0})],vr.prototype,"disabled",void 0),D([K({type:Boolean,reflect:!0})],vr.prototype,"required",void 0),D([K({type:String,reflect:!0})],vr.prototype,"size",void 0),D([K({type:String})],vr.prototype,"hint",void 0),D([K({type:String,reflect:!0})],vr.prototype,"design",void 0),D([K({type:String})],vr.prototype,"textOn",void 0),D([K({type:String})],vr.prototype,"textOff",void 0),vr=D([st("mov-switch")],vr);var E9=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;-webkit-user-select:none;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",gt=class extends tt{static{this.styles=[Ee(E9)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const r=this.min+t/100*(this.max-this.min);return this.step?Math.round(r/this.step)*this.step:r}getValueFromPointer(t,r,i){let a;return this.vertical?a=(i.bottom-r)/i.height*100:a=(t-i.left)/i.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let r=Math.max(this.min,Math.min(this.max,t));return this.step&&(r=Math.round(r/this.step)*this.step),Number(r.toFixed(10))}handleThumbPointerDown(t,r){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:r,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=r,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:r,trackRect:i}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,i);if(this.dual){const s=this.values;if(r==="min"){const l=Math.min(a,s[1]-(this.step||1));this.updateValue([l,s[1]],"input")}else{const l=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],l],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,r="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const r=this.track.getBoundingClientRect(),i=this.getValueFromPointer(t.clientX,t.clientY,r);if(this.dual){const a=this.values;Math.abs(i-a[0])<Math.abs(i-a[1])?this.updateValue([i,a[1]]):this.updateValue([a[0],i])}else this.updateValue(i)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let r=this.tickStep;if(this.tickCount>1&&(r=Math.round((this.max-this.min)/(this.tickCount-1))),r>0){const a=Math.floor((this.max-this.min)/r);if(a<=100)for(let s=1;s<=a;s++){const l=this.min+s*r;l<this.max&&t.add(Number(l.toFixed(10)))}}const i=Array.from(t).sort((a,s)=>a-s).map(a=>{const s=this.getPercentage(a),l=this.vertical?`bottom: ${s}%`:`inset-inline-start: ${s}%`;return ne`
        <div class="mov-slider__tick" style="${l}">
          <div class="mov-slider__tick-label">${a}</div>
        </div>
      `});return ne`<div class="mov-slider__ticks">${i}</div>`}renderThumb(t,r){const i=this.getPercentage(t),a=this.focusedThumb===r,s=this.draggingThumb===r,l=this.vertical?`bottom: ${i}%`:`inset-inline-start: ${i}%`;return ne`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${l}"
        @pointerdown=${d=>this.handleThumbPointerDown(d,r)}
      >
        ${this.showTooltip?ne`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const a=this.getPercentage(t[0]),s=this.getPercentage(t[1]),l=this.vertical?`bottom: ${a}%; height: ${s-a}%`:`left: ${a}%; width: ${s-a}%`;return ne`<div
        class="mov-slider__progress"
        style="${l}"
      ></div>`}const r=this.getPercentage(t[1]),i=this.vertical?`bottom: 0; height: ${r}%`:`left: 0; width: ${r}%`;return ne`<div
      class="mov-slider__progress"
      style="${i}"
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
    `}};D([K({type:String})],gt.prototype,"label",void 0),D([K({attribute:"help-text"})],gt.prototype,"helpText",void 0),D([K({attribute:"error-message"})],gt.prototype,"errorMessage",void 0),D([K({type:Number})],gt.prototype,"min",void 0),D([K({type:Number})],gt.prototype,"max",void 0),D([K({type:Number})],gt.prototype,"step",void 0),D([K({type:Object})],gt.prototype,"value",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"dual",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"vertical",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"filled",void 0),D([K({reflect:!0})],gt.prototype,"size",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"disabled",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"readonly",void 0),D([K({type:Boolean,reflect:!0})],gt.prototype,"invalid",void 0),D([K({type:Boolean,attribute:"show-tooltip"})],gt.prototype,"showTooltip",void 0),D([K({type:Boolean,attribute:"show-ticks"})],gt.prototype,"showTicks",void 0),D([K({type:Number,attribute:"tick-step"})],gt.prototype,"tickStep",void 0),D([K({type:Number,attribute:"tick-count"})],gt.prototype,"tickCount",void 0),D([Nt()],gt.prototype,"focusedThumb",void 0),D([Nt()],gt.prototype,"draggingThumb",void 0),D([Mn(".mov-slider__track")],gt.prototype,"track",void 0),gt=D([st("mov-slider")],gt);var M9=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),S9=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=M9();function r(d){return t.relativeFirstCharacters.indexOf(d[0])>-1}function i(d){return d.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(c,h){return String.fromCharCode(h)})}function a(d){return URL.canParse(d)}function s(d){try{return decodeURIComponent(d)}catch{return d}}function l(d){if(!d)return t.BLANK_URL;var c,h=s(d.trim());do h=i(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),c=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(c&&c.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var v=f.trimStart(),b=v.match(t.urlSchemeRegex);if(!b)return f;var m=b[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var g=v.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return g;if(m==="http:"||m==="https:"){if(!a(g))return t.BLANK_URL;var y=new URL(g);return y.protocol=y.protocol.toLowerCase(),y.hostname=y.hostname.toLowerCase(),y.toString()}return g}})),A9=Sr(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,f,v){var b=new XMLHttpRequest;b.open("GET",h),b.responseType="blob",b.onload=function(){c(b.response,f,v)},b.onerror=function(){console.error("could not download file")},b.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,d=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(h,f,v){var b=l.URL||l.webkitURL,m=document.createElement("a");f=f||h.name||"download",m.download=f,m.rel="noopener",typeof h=="string"?(m.href=h,m.origin===location.origin?s(m):a(m.href)?i(h,f,v):s(m,m.target="_blank")):(m.href=b.createObjectURL(h),setTimeout(function(){b.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,v){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,v),f);else if(a(h))i(h,f,v);else{var b=document.createElement("a");b.href=h,b.target="_blank",setTimeout(function(){s(b)})}}:function(h,f,v,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof h=="string")return i(h,f,v);var m=h.type==="application/octet-stream",g=/constructor/i.test(l.HTMLElement)||l.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||m&&g||d)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var C=_.result;C=y?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=C:location=C,b=null},_.readAsDataURL(h)}else{var E=l.URL||l.webkitURL,A=E.createObjectURL(h);b?b.location=A:location.href=A,b=null,setTimeout(function(){E.revokeObjectURL(A)},4e4)}});l.saveAs=c.saveAs=c,typeof t<"u"&&(t.exports=c)})})),x9=Sr(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function l(h,f){if(!a[h]){if(!i[h]){var v=typeof require=="function"&&require;if(!f&&v)return v(h,!0);if(d)return d(h,!0);var b=new Error("Cannot find module '"+h+"'");throw b.code="MODULE_NOT_FOUND",b}var m=a[h]={exports:{}};i[h][0].call(m.exports,function(g){var y=i[h][1][g];return l(y||g)},m,m.exports,r,i,a,s)}return a[h].exports}for(var d=typeof require=="function"&&require,c=0;c<s.length;c++)l(s[c]);return l})({1:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var h,f,v,b,m,g,y,_=[],E=0,A=c.length,C=A,O=s.getTypeOf(c)!=="string";E<c.length;)C=A-E,v=O?(h=c[E++],f=E<A?c[E++]:0,E<A?c[E++]:0):(h=c.charCodeAt(E++),f=E<A?c.charCodeAt(E++):0,E<A?c.charCodeAt(E++):0),b=h>>2,m=(3&h)<<4|f>>4,g=1<C?(15&f)<<2|v>>6:64,y=2<C?63&v:64,_.push(d.charAt(b)+d.charAt(m)+d.charAt(g)+d.charAt(y));return _.join("")},a.decode=function(c){var h,f,v,b,m,g,y=0,_=0,E="data:";if(c.substr(0,E.length)===E)throw new Error("Invalid base64 input, it looks like a data url.");var A,C=3*(c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(c.charAt(c.length-1)===d.charAt(64)&&C--,c.charAt(c.length-2)===d.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=l.uint8array?new Uint8Array(0|C):new Array(0|C);y<c.length;)h=d.indexOf(c.charAt(y++))<<2|(b=d.indexOf(c.charAt(y++)))>>4,f=(15&b)<<4|(m=d.indexOf(c.charAt(y++)))>>2,v=(3&m)<<6|(g=d.indexOf(c.charAt(y++))),A[_++]=h,m!==64&&(A[_++]=f),g!==64&&(A[_++]=v);return A}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),d=r("./stream/Crc32Probe"),c=r("./stream/DataLengthProbe");function h(f,v,b,m,g){this.compressedSize=f,this.uncompressedSize=v,this.crc32=b,this.compression=m,this.compressedContent=g}h.prototype={getContentWorker:function(){var f=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),v=this;return f.on("end",function(){if(this.streamInfo.data_length!==v.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,v,b){return f.pipe(new d).pipe(new c("uncompressedSize")).pipe(v.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",v)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),l=(function(){for(var d,c=[],h=0;h<256;h++){d=h;for(var f=0;f<8;f++)d=1&d?3988292384^d>>>1:d>>>1;c[h]=d}return c})();i.exports=function(d,c){return d!==void 0&&d.length?s.getTypeOf(d)!=="string"?(function(h,f,v,b){var m=l,g=b+v;h^=-1;for(var y=b;y<g;y++)h=h>>>8^m[255&(h^f[y])];return-1^h})(0|c,d,d.length,0):(function(h,f,v,b){var m=l,g=b+v;h^=-1;for(var y=b;y<g;y++)h=h>>>8^m[255&(h^f.charCodeAt(y))];return-1^h})(0|c,d,d.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),d=r("./utils"),c=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(v,b){c.call(this,"FlateWorker/"+v),this._pako=null,this._pakoAction=v,this._pakoOptions=b,this.meta={}}a.magic="\b\0",d.inherits(f,c),f.prototype.processChunk=function(v){this.meta=v.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(h,v.data),!1)},f.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var v=this;this._pako.onData=function(b){v.push({data:b,meta:v.meta})}},a.compressWorker=function(v){return new f("Deflate",v)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(m,g){var y,_="";for(y=0;y<g;y++)_+=String.fromCharCode(255&m),m>>>=8;return _}function l(m,g,y,_,E,A){var C,O,$=m.file,j=m.compression,U=A!==h.utf8encode,re=d.transformTo("string",A($.name)),H=d.transformTo("string",h.utf8encode($.name)),fe=$.comment,_e=d.transformTo("string",A(fe)),P=d.transformTo("string",h.utf8encode(fe)),X=H.length!==$.name.length,M=P.length!==fe.length,Q="",Ie="",ce="",Le=$.dir,ie=$.date,Ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!y||(Ae.crc32=m.crc32,Ae.compressedSize=m.compressedSize,Ae.uncompressedSize=m.uncompressedSize);var W=0;g&&(W|=8),U||!X&&!M||(W|=2048);var G=0,Se=0;Le&&(G|=16),E==="UNIX"?(Se=798,G|=(function(pe,Xe){var bt=pe;return pe||(bt=Xe?16893:33204),(65535&bt)<<16})($.unixPermissions,Le)):(Se=20,G|=(function(pe){return 63&(pe||0)})($.dosPermissions)),C=ie.getUTCHours(),C<<=6,C|=ie.getUTCMinutes(),C<<=5,C|=ie.getUTCSeconds()/2,O=ie.getUTCFullYear()-1980,O<<=4,O|=ie.getUTCMonth()+1,O<<=5,O|=ie.getUTCDate(),X&&(Ie=s(1,1)+s(f(re),4)+H,Q+="up"+s(Ie.length,2)+Ie),M&&(ce=s(1,1)+s(f(_e),4)+P,Q+="uc"+s(ce.length,2)+ce);var me="";return me+=`
\0`,me+=s(W,2),me+=j.magic,me+=s(C,2),me+=s(O,2),me+=s(Ae.crc32,4),me+=s(Ae.compressedSize,4),me+=s(Ae.uncompressedSize,4),me+=s(re.length,2),me+=s(Q.length,2),{fileRecord:v.LOCAL_FILE_HEADER+me+re+Q,dirRecord:v.CENTRAL_FILE_HEADER+s(Se,2)+me+s(_e.length,2)+"\0\0\0\0"+s(G,4)+s(_,4)+re+Q+_e}}var d=r("../utils"),c=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),v=r("../signature");function b(m,g,y,_){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=y,this.encodeFileName=_,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(b,c),b.prototype.push=function(m){var g=m.meta.percent||0,y=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,c.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:y?(g+100*(y-_-1))/y:100}}))},b.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var g=this.streamFiles&&!m.file.dir;if(g){var y=l(m,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(m){this.accumulate=!1;var g=this.streamFiles&&!m.file.dir,y=l(m,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),g)this.push({data:(function(_){return v.DATA_DESCRIPTOR+s(_.crc32,4)+s(_.compressedSize,4)+s(_.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var m=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var y=this.bytesWritten-m,_=(function(E,A,C,O,$){var j=d.transformTo("string",$(O));return v.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(E,2)+s(E,2)+s(A,4)+s(C,4)+s(j.length,2)+j})(this.dirRecords.length,y,m,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(m){this._sources.push(m);var g=this;return m.on("data",function(y){g.processChunk(y)}),m.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),m.on("error",function(y){g.error(y)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(m){var g=this._sources;if(!c.prototype.error.call(this,m))return!1;for(var y=0;y<g.length;y++)try{g[y].error(m)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var m=this._sources,g=0;g<m.length;g++)m[g].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(d,c,h){var f=new l(c.streamFiles,h,c.platform,c.encodeFileName),v=0;try{d.forEach(function(b,m){v++;var g=(function(A,C){var O=A||C,$=s[O];if(!$)throw new Error(O+" is not a valid compression method !");return $})(m.options.compression,c.compression),y=m.options.compressionOptions||c.compressionOptions||{},_=m.dir,E=m.date;m._compressWorker(g,y).withStreamInfo("file",{name:b,dir:_,date:E,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(f)}),f.entriesCount=v}catch(b){f.error(b)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var d in this)typeof this[d]!="function"&&(l[d]=this[d]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,d){return new s().loadAsync(l,d)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./external"),d=r("./utf8"),c=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function v(b){return new l.Promise(function(m,g){var y=b.decompressed.getContentWorker().pipe(new h);y.on("error",function(_){g(_)}).on("end",function(){y.streamInfo.crc32!==b.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}i.exports=function(b,m){var g=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),f.isNode&&f.isStream(b)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",b,!0,m.optimizedBinaryString,m.base64).then(function(y){var _=new c(m);return _.load(y),_}).then(function(y){var _=[l.Promise.resolve(y)],E=y.files;if(m.checkCRC32)for(var A=0;A<E.length;A++)_.push(v(E[A]));return l.Promise.all(_)}).then(function(y){for(var _=y.shift(),E=_.files,A=0;A<E.length;A++){var C=E[A],O=C.fileNameStr,$=s.resolve(C.fileNameStr);g.file($,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:m.createFolders}),C.dir||(g.file($).unsafeOriginalName=O)}return _.zipComment.length&&(g.comment=_.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function d(c,h){l.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(d,l),d.prototype._bindStream=function(c){var h=this;(this._stream=c).pause(),c.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},d.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function l(d,c,h){s.call(this,c),this._helper=d;var f=this;d.on("data",function(v,b){f.push(v)||f._helper.pause(),h&&h(b)}).on("error",function(v){f.emit("error",v)}).on("end",function(){f.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},i.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(O,$,j){var U,re=d.getTypeOf($),H=d.extend(j||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(O=E(O)),H.createFolders&&(U=_(O))&&A.call(this,U,!0);var fe=re==="string"&&H.binary===!1&&H.base64===!1;j&&j.binary!==void 0||(H.binary=!fe),($ instanceof v&&$.uncompressedSize===0||H.dir||!$||$.length===0)&&(H.base64=!1,H.binary=!0,$="",H.compression="STORE",re="string");var _e=null;_e=$ instanceof v||$ instanceof c?$:g.isNode&&g.isStream($)?new y(O,$):d.prepareContent(O,$,H.binary,H.optimizedBinaryString,H.base64);var P=new b(O,_e,H);this.files[O]=P}var l=r("./utf8"),d=r("./utils"),c=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),v=r("./compressedObject"),b=r("./zipObject"),m=r("./generate"),g=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),_=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var $=O.lastIndexOf("/");return 0<$?O.substring(0,$):""},E=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},A=function(O,$){return $=$!==void 0?$:f.createFolders,O=E(O),this.files[O]||s.call(this,O,null,{dir:!0,createFolders:$}),this.files[O]};function C(O){return Object.prototype.toString.call(O)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var $,j,U;for($ in this.files)U=this.files[$],(j=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&O(j,U)},filter:function(O){var $=[];return this.forEach(function(j,U){O(j,U)&&$.push(U)}),$},file:function(O,$,j){if(arguments.length!==1)return O=this.root+O,s.call(this,O,$,j),this;if(C(O)){var U=O;return this.filter(function(H,fe){return!fe.dir&&U.test(H)})}var re=this.files[this.root+O];return re&&!re.dir?re:null},folder:function(O){if(!O)return this;if(C(O))return this.filter(function(re,H){return H.dir&&O.test(re)});var $=this.root+O,j=A.call(this,$),U=this.clone();return U.root=j.name,U},remove:function(O){O=this.root+O;var $=this.files[O];if($||(O.slice(-1)!=="/"&&(O+="/"),$=this.files[O]),$&&!$.dir)delete this.files[O];else for(var j=this.filter(function(re,H){return H.name.slice(0,O.length)===O}),U=0;U<j.length;U++)delete this.files[j[U].name];return this},generate:function(O){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var $,j={};try{if((j=d.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=j.type.toLowerCase(),j.compression=j.compression.toUpperCase(),j.type==="binarystring"&&(j.type="string"),!j.type)throw new Error("No output type specified.");d.checkSupport(j.type),j.platform!=="darwin"&&j.platform!=="freebsd"&&j.platform!=="linux"&&j.platform!=="sunos"||(j.platform="UNIX"),j.platform==="win32"&&(j.platform="DOS");var U=j.comment||this.comment||"";$=m.generateWorker(this,j,U)}catch(re){($=new c("error")).error(re)}return new h($,j.type||"string",j.mimeType)},generateAsync:function(O,$){return this.generateInternalStream(O).accumulate($)},generateNodeStream:function(O,$){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream($)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function l(d){s.call(this,d);for(var c=0;c<this.data.length;c++)d[c]=255&d[c]}r("../utils").inherits(l,s),l.prototype.byteAt=function(d){return this.data[this.zero+d]},l.prototype.lastIndexOfSignature=function(d){for(var c=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),v=d.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===h&&this.data[b+2]===f&&this.data[b+3]===v)return b-this.zero;return-1},l.prototype.readAndCheckSignature=function(d){var c=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),v=d.charCodeAt(3),b=this.readData(4);return c===b[0]&&h===b[1]&&f===b[2]&&v===b[3]},l.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,c},i.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function l(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(d){},readInt:function(d){var c,h=0;for(this.checkOffset(d),c=this.index+d-1;c>=this.index;c--)h=(h<<8)+this.byteAt(c);return this.index+=d,h},readString:function(d){return s.transformTo("string",this.readData(d))},readData:function(d){},lastIndexOfSignature:function(d){},readAndCheckSignature:function(d){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},i.exports=l},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function l(d){s.call(this,d)}r("../utils").inherits(l,s),l.prototype.readData=function(d){this.checkOffset(d);var c=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,c},i.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function l(d){s.call(this,d)}r("../utils").inherits(l,s),l.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},l.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},l.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},l.prototype.readData=function(d){this.checkOffset(d);var c=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,c},i.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function l(d){s.call(this,d)}r("../utils").inherits(l,s),l.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,c},i.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../support"),d=r("./ArrayReader"),c=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");i.exports=function(v){var b=s.getTypeOf(v);return s.checkSupport(b),b!=="string"||l.uint8array?b==="nodebuffer"?new h(v):l.uint8array?new f(s.transformTo("uint8array",v)):new d(s.transformTo("array",v)):new c(v)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function d(c){s.call(this,"ConvertWorker to "+c),this.destType=c}l.inherits(d,s),d.prototype.processChunk=function(c){this.push({data:l.transformTo(this.destType,c.data),meta:c.meta})},i.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function d(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(d,s),d.prototype.processChunk=function(c){this.streamInfo.crc32=l(c.data,this.streamInfo.crc32||0),this.push(c)},i.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function d(c){l.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(d,l),d.prototype.processChunk=function(c){if(c){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+c.data.length}l.prototype.processChunk.call(this,c)},i.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function d(c){l.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(d,l),d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,h);break;case"uint8array":c=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":c=this.data.slice(this.index,h)}return this.index=h,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,d){return this._listeners[l].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,d){if(this._listeners[l])for(var c=0;c<this._listeners[l].length;c++)this._listeners[l][c].call(this,d)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var d=this;return l.on("data",function(c){d.processChunk(c)}),l.on("end",function(){d.end()}),l.on("error",function(c){d.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,d){return this.extraStreamInfo[l]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),d=r("./GenericWorker"),c=r("../base64"),h=r("../support"),f=r("../external"),v=null;if(h.nodestream)try{v=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(g,y){return new f.Promise(function(_,E){var A=[],C=g._internalType,O=g._outputType,$=g._mimeType;g.on("data",function(j,U){A.push(j),y&&y(U)}).on("error",function(j){A=[],E(j)}).on("end",function(){try{_((function(j,U,re){switch(j){case"blob":return s.newBlob(s.transformTo("arraybuffer",U),re);case"base64":return c.encode(U);default:return s.transformTo(j,U)}})(O,(function(j,U){var re,H=0,fe=null,_e=0;for(re=0;re<U.length;re++)_e+=U[re].length;switch(j){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(fe=new Uint8Array(_e),re=0;re<U.length;re++)fe.set(U[re],H),H+=U[re].length;return fe;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+j+"'")}})(C,A),$))}catch(j){E(j)}A=[]}).resume()})}function m(g,y,_){var E=y;switch(y){case"blob":case"arraybuffer":E="uint8array";break;case"base64":E="string"}try{this._internalType=E,this._outputType=y,this._mimeType=_,s.checkSupport(E),this._worker=g.pipe(new l(E)),g.lock()}catch(A){this._worker=new d("error"),this._worker.error(A)}}m.prototype={accumulate:function(g){return b(this,g)},on:function(g,y){var _=this;return g==="data"?this._worker.on(g,function(E){y.call(_,E.data,E.meta)}):this._worker.on(g,function(){s.delay(y,arguments,_)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new v(this,{objectMode:this._outputType!=="nodebuffer"},g)}},i.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),l=r("./support"),d=r("./nodejsUtils"),c=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function v(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}a.utf8encode=function(m){return l.nodebuffer?d.newBufferFrom(m,"utf-8"):(function(g){var y,_,E,A,C,O=g.length,$=0;for(A=0;A<O;A++)(64512&(_=g.charCodeAt(A)))==55296&&A+1<O&&(64512&(E=g.charCodeAt(A+1)))==56320&&(_=65536+(_-55296<<10)+(E-56320),A++),$+=_<128?1:_<2048?2:_<65536?3:4;for(y=l.uint8array?new Uint8Array($):new Array($),A=C=0;C<$;A++)(64512&(_=g.charCodeAt(A)))==55296&&A+1<O&&(64512&(E=g.charCodeAt(A+1)))==56320&&(_=65536+(_-55296<<10)+(E-56320),A++),_<128?y[C++]=_:(_<2048?y[C++]=192|_>>>6:(_<65536?y[C++]=224|_>>>12:(y[C++]=240|_>>>18,y[C++]=128|_>>>12&63),y[C++]=128|_>>>6&63),y[C++]=128|63&_);return y})(m)},a.utf8decode=function(m){return l.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(g){var y,_,E,A,C=g.length,O=new Array(2*C);for(y=_=0;y<C;)if((E=g[y++])<128)O[_++]=E;else if(4<(A=h[E]))O[_++]=65533,y+=A-1;else{for(E&=A===2?31:A===3?15:7;1<A&&y<C;)E=E<<6|63&g[y++],A--;1<A?O[_++]=65533:E<65536?O[_++]=E:(E-=65536,O[_++]=55296|E>>10&1023,O[_++]=56320|1023&E)}return O.length!==_&&(O.subarray?O=O.subarray(0,_):O.length=_),s.applyFromCharCode(O)})(m=s.transformTo(l.uint8array?"uint8array":"array",m))},s.inherits(v,c),v.prototype.processChunk=function(m){var g=s.transformTo(l.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var y=g;(g=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),g.set(y,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var _=(function(A,C){var O;for((C=C||A.length)>A.length&&(C=A.length),O=C-1;0<=O&&(192&A[O])==128;)O--;return O<0||O===0?C:O+h[A[O]]>C?O:C})(g),E=g;_!==g.length&&(l.uint8array?(E=g.subarray(0,_),this.leftOver=g.subarray(_,g.length)):(E=g.slice(0,_),this.leftOver=g.slice(_,g.length))),this.push({data:a.utf8decode(E),meta:m.meta})},v.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=v,s.inherits(b,c),b.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),l=r("./base64"),d=r("./nodejsUtils"),c=r("set-immediate-shim"),h=r("./external");function f(_){return _}function v(_,E){for(var A=0;A<_.length;++A)E[A]=255&_.charCodeAt(A);return E}a.newBlob=function(_,E){a.checkSupport("blob");try{return new Blob([_],{type:E})}catch{try{var A=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return A.append(_),A.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var b={stringifyByChunk:function(_,E,A){var C=[],O=0,$=_.length;if($<=A)return String.fromCharCode.apply(null,_);for(;O<$;)E==="array"||E==="nodebuffer"?C.push(String.fromCharCode.apply(null,_.slice(O,Math.min(O+A,$)))):C.push(String.fromCharCode.apply(null,_.subarray(O,Math.min(O+A,$)))),O+=A;return C.join("")},stringifyByChar:function(_){for(var E="",A=0;A<_.length;A++)E+=String.fromCharCode(_[A]);return E},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function m(_){var E=65536,A=a.getTypeOf(_),C=!0;if(A==="uint8array"?C=b.applyCanBeUsed.uint8array:A==="nodebuffer"&&(C=b.applyCanBeUsed.nodebuffer),C)for(;1<E;)try{return b.stringifyByChunk(_,A,E)}catch{E=Math.floor(E/2)}return b.stringifyByChar(_)}function g(_,E){for(var A=0;A<_.length;A++)E[A]=_[A];return E}a.applyFromCharCode=m;var y={};y.string={string:f,array:function(_){return v(_,new Array(_.length))},arraybuffer:function(_){return y.string.uint8array(_).buffer},uint8array:function(_){return v(_,new Uint8Array(_.length))},nodebuffer:function(_){return v(_,d.allocBuffer(_.length))}},y.array={string:m,array:f,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(_)}},y.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return g(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:f,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(new Uint8Array(_))}},y.uint8array={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:f,nodebuffer:function(_){return d.newBufferFrom(_)}},y.nodebuffer={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return y.nodebuffer.uint8array(_).buffer},uint8array:function(_){return g(_,new Uint8Array(_.length))},nodebuffer:f},a.transformTo=function(_,E){return E=E||"",_?(a.checkSupport(_),y[a.getTypeOf(E)][_](E)):E},a.resolve=function(_){for(var E=_.split("/"),A=[],C=0;C<E.length;C++){var O=E[C];O==="."||O===""&&C!==0&&C!==E.length-1||(O===".."?A.pop():A.push(O))}return A.join("/")},a.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&d.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(_){var E,A,C="";for(A=0;A<(_||"").length;A++)C+="\\x"+((E=_.charCodeAt(A))<16?"0":"")+E.toString(16).toUpperCase();return C},a.delay=function(_,E,A){c(function(){_.apply(A||null,E||[])})},a.inherits=function(_,E){function A(){}A.prototype=E.prototype,_.prototype=new A},a.extend=function(){var _,E,A={};for(_=0;_<arguments.length;_++)for(E in arguments[_])arguments[_].hasOwnProperty(E)&&A[E]===void 0&&(A[E]=arguments[_][E]);return A},a.prepareContent=function(_,E,A,C,O){return h.Promise.resolve(E).then(function($){return s.blob&&($ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call($))!==-1)&&typeof FileReader<"u"?new h.Promise(function(j,U){var re=new FileReader;re.onload=function(H){j(H.target.result)},re.onerror=function(H){U(H.target.error)},re.readAsArrayBuffer($)}):$}).then(function($){var j=a.getTypeOf($);return j?(j==="arraybuffer"?$=a.transformTo("uint8array",$):j==="string"&&(O?$=l.decode($):A&&C!==!0&&($=(function(U){return v(U,s.uint8array?new Uint8Array(U.length):new Array(U.length))})($))),$):h.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),d=r("./signature"),c=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(v){this.files=[],this.loadOptions=v}f.prototype={checkSignature:function(v){if(!this.reader.readAndCheckSignature(v)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(b)+", expected "+l.pretty(v)+")")}},isSignature:function(v,b){var m=this.reader.index;this.reader.setIndex(v);var g=this.reader.readString(4)===b;return this.reader.setIndex(m),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var v=this.reader.readData(this.zipCommentLength),b=h.uint8array?"uint8array":"array",m=l.transformTo(b,v);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var v,b,m,g=this.zip64EndOfCentralSize-44;0<g;)v=this.reader.readInt(2),b=this.reader.readInt(4),m=this.reader.readData(b),this.zip64ExtensibleData[v]={id:v,length:b,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var v,b;for(v=0;v<this.files.length;v++)b=this.files[v],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var v;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(v=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(v);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var v=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(v<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(v);var b=v;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(v=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(v),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var g=b-m;if(0<g)this.isSignature(b,d.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(v){this.reader=s(v)},load:function(v){this.prepareReader(v),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),d=r("./compressedObject"),c=r("./crc32"),h=r("./utf8"),f=r("./compressions"),v=r("./support");function b(m,g){this.options=m,this.loadOptions=g}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var g,y;if(m.skip(22),this.fileNameLength=m.readInt(2),y=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(_){for(var E in f)if(f.hasOwnProperty(E)&&f[E].magic===_)return f[E];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,g,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var g=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(g),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(m){var g,y,_,E=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<E;)g=m.readInt(2),y=m.readInt(2),_=m.readData(y),this.extraFields[g]={id:g,length:y,value:_};m.setIndex(E)},handleUTF8:function(){var m=v.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var y=l.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var E=l.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(E)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var g=s(m.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var g=s(m.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(g,y,_){this.name=g,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=y,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var l=r("./stream/StreamHelper"),d=r("./stream/DataWorker"),c=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(g){var y=null,_="string";try{if(!g)throw new Error("No output type specified.");var E=(_=g.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),y=this._decompressWorker();var A=!this._dataBinary;A&&!E&&(y=y.pipe(new c.Utf8EncodeWorker)),!A&&E&&(y=y.pipe(new c.Utf8DecodeWorker))}catch(C){(y=new f("error")).error(C)}return new l(y,_,"")},async:function(g,y){return this.internalStream(g).accumulate(y)},nodeStream:function(g,y){return this.internalStream(g||"nodebuffer").toNodejsStream(y)},_compressWorker:function(g,y){if(this._data instanceof h&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new c.Utf8EncodeWorker)),h.createWorkerFrom(_,g,y)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new d(this._data)}};for(var v=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<v.length;m++)s.prototype[v[m]]=b;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var l,d,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var h=0,f=new c(g),v=s.document.createTextNode("");f.observe(v,{characterData:!0}),l=function(){v.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var y=s.document.createElement("script");y.onreadystatechange=function(){g(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},s.document.documentElement.appendChild(y)}:function(){setTimeout(g,0)};else{var b=new s.MessageChannel;b.port1.onmessage=g,l=function(){b.port2.postMessage(0)}}var m=[];function g(){var y,_;d=!0;for(var E=m.length;E;){for(_=m,m=[],y=-1;++y<E;)_[y]();E=m.length}d=!1}i.exports=function(y){m.push(y)!==1||d||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function l(){}var d={},c=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function v(E){if(typeof E!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,E!==l&&y(this,E)}function b(E,A,C){this.promise=E,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function m(E,A,C){s(function(){var O;try{O=A(C)}catch($){return d.reject(E,$)}O===E?d.reject(E,new TypeError("Cannot resolve promise with itself")):d.resolve(E,O)})}function g(E){var A=E&&E.then;if(E&&(typeof E=="object"||typeof E=="function")&&typeof A=="function")return function(){A.apply(E,arguments)}}function y(E,A){var C=!1;function O(U){C||(C=!0,d.reject(E,U))}function $(U){C||(C=!0,d.resolve(E,U))}var j=_(function(){A($,O)});j.status==="error"&&O(j.value)}function _(E,A){var C={};try{C.value=E(A),C.status="success"}catch(O){C.status="error",C.value=O}return C}(i.exports=v).prototype.finally=function(E){if(typeof E!="function")return this;var A=this.constructor;return this.then(function(C){return A.resolve(E()).then(function(){return C})},function(C){return A.resolve(E()).then(function(){throw C})})},v.prototype.catch=function(E){return this.then(null,E)},v.prototype.then=function(E,A){if(typeof E!="function"&&this.state===h||typeof A!="function"&&this.state===c)return this;var C=new this.constructor(l);return this.state!==f?m(C,this.state===h?E:A,this.outcome):this.queue.push(new b(C,E,A)),C},b.prototype.callFulfilled=function(E){d.resolve(this.promise,E)},b.prototype.otherCallFulfilled=function(E){m(this.promise,this.onFulfilled,E)},b.prototype.callRejected=function(E){d.reject(this.promise,E)},b.prototype.otherCallRejected=function(E){m(this.promise,this.onRejected,E)},d.resolve=function(E,A){var C=_(g,A);if(C.status==="error")return d.reject(E,C.value);var O=C.value;if(O)y(E,O);else{E.state=h,E.outcome=A;for(var $=-1,j=E.queue.length;++$<j;)E.queue[$].callFulfilled(A)}return E},d.reject=function(E,A){E.state=c,E.outcome=A;for(var C=-1,O=E.queue.length;++C<O;)E.queue[C].callRejected(A);return E},v.resolve=function(E){return E instanceof this?E:d.resolve(new this(l),E)},v.reject=function(E){var A=new this(l);return d.reject(A,E)},v.all=function(E){var A=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=E.length,O=!1;if(!C)return this.resolve([]);for(var $=new Array(C),j=0,U=-1,re=new this(l);++U<C;)H(E[U],U);return re;function H(fe,_e){A.resolve(fe).then(function(P){$[_e]=P,++j!==C||O||(O=!0,d.resolve(re,$))},function(P){O||(O=!0,d.reject(re,P))})}},v.race=function(E){var A=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=E.length,O=!1;if(!C)return this.resolve([]);for(var $=-1,j=new this(l);++$<C;)U=E[$],A.resolve(U).then(function(re){O||(O=!0,d.resolve(j,re))},function(re){O||(O=!0,d.reject(j,re))});var U;return j}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),d=r("./utils/strings"),c=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,v=0,b=-1,m=0,g=8;function y(E){if(!(this instanceof y))return new y(E);this.options=l.assign({level:b,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},E||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(C!==v)throw new Error(c[C]);if(A.header&&s.deflateSetHeader(this.strm,A.header),A.dictionary){var O;if(O=typeof A.dictionary=="string"?d.string2buf(A.dictionary):f.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(C=s.deflateSetDictionary(this.strm,O))!==v)throw new Error(c[C]);this._dict_set=!0}}function _(E,A){var C=new y(A);if(C.push(E,!0),C.err)throw C.msg||c[C.err];return C.result}y.prototype.push=function(E,A){var C,O,$=this.strm,j=this.options.chunkSize;if(this.ended)return!1;O=A===~~A?A:A===!0?4:0,typeof E=="string"?$.input=d.string2buf(E):f.call(E)==="[object ArrayBuffer]"?$.input=new Uint8Array(E):$.input=E,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new l.Buf8(j),$.next_out=0,$.avail_out=j),(C=s.deflate($,O))!==1&&C!==v)return this.onEnd(C),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||O!==4&&O!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(l.shrinkBuf($.output,$.next_out))):this.onData(l.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&C!==1);return O===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===v):O!==2||(this.onEnd(v),!($.avail_out=0))},y.prototype.onData=function(E){this.chunks.push(E)},y.prototype.onEnd=function(E){E===v&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Deflate=y,a.deflate=_,a.deflateRaw=function(E,A){return(A=A||{}).raw=!0,_(E,A)},a.gzip=function(E,A){return(A=A||{}).gzip=!0,_(E,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),d=r("./utils/strings"),c=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),v=r("./zlib/gzheader"),b=Object.prototype.toString;function m(y){if(!(this instanceof m))return new m(y);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},y||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||y&&y.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var E=s.inflateInit2(this.strm,_.windowBits);if(E!==c.Z_OK)throw new Error(h[E]);this.header=new v,s.inflateGetHeader(this.strm,this.header)}function g(y,_){var E=new m(_);if(E.push(y,!0),E.err)throw E.msg||h[E.err];return E.result}m.prototype.push=function(y,_){var E,A,C,O,$,j,U=this.strm,re=this.options.chunkSize,H=this.options.dictionary,fe=!1;if(this.ended)return!1;A=_===~~_?_:_===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof y=="string"?U.input=d.binstring2buf(y):b.call(y)==="[object ArrayBuffer]"?U.input=new Uint8Array(y):U.input=y,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new l.Buf8(re),U.next_out=0,U.avail_out=re),(E=s.inflate(U,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&H&&(j=typeof H=="string"?d.string2buf(H):b.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,E=s.inflateSetDictionary(this.strm,j)),E===c.Z_BUF_ERROR&&fe===!0&&(E=c.Z_OK,fe=!1),E!==c.Z_STREAM_END&&E!==c.Z_OK)return this.onEnd(E),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&E!==c.Z_STREAM_END&&(U.avail_in!==0||A!==c.Z_FINISH&&A!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=d.utf8border(U.output,U.next_out),O=U.next_out-C,$=d.buf2string(U.output,C),U.next_out=O,U.avail_out=re-O,O&&l.arraySet(U.output,U.output,C,O,0),this.onData($)):this.onData(l.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(fe=!0)}while((0<U.avail_in||U.avail_out===0)&&E!==c.Z_STREAM_END);return E===c.Z_STREAM_END&&(A=c.Z_FINISH),A===c.Z_FINISH?(E=s.inflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===c.Z_OK):A!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(U.avail_out=0))},m.prototype.onData=function(y){this.chunks.push(y)},m.prototype.onEnd=function(y){y===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},a.Inflate=m,a.inflate=g,a.inflateRaw=function(y,_){return(_=_||{}).raw=!0,g(y,_)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var v in f)f.hasOwnProperty(v)&&(c[v]=f[v])}}return c},a.shrinkBuf=function(c,h){return c.length===h?c:c.subarray?c.subarray(0,h):(c.length=h,c)};var l={arraySet:function(c,h,f,v,b){if(h.subarray&&c.subarray)c.set(h.subarray(f,f+v),b);else for(var m=0;m<v;m++)c[b+m]=h[f+m]},flattenChunks:function(c){var h,f,v,b,m,g;for(h=v=0,f=c.length;h<f;h++)v+=c[h].length;for(g=new Uint8Array(v),h=b=0,f=c.length;h<f;h++)m=c[h],g.set(m,b),b+=m.length;return g}},d={arraySet:function(c,h,f,v,b){for(var m=0;m<v;m++)c[b+m]=h[f+m]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,d))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),l=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var c=new s.Buf8(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(v,b){if(b<65537&&(v.subarray&&d||!v.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(v,b));for(var m="",g=0;g<b;g++)m+=String.fromCharCode(v[g]);return m}c[254]=c[254]=1,a.string2buf=function(v){var b,m,g,y,_,E=v.length,A=0;for(y=0;y<E;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<E&&(64512&(g=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),y++),A+=m<128?1:m<2048?2:m<65536?3:4;for(b=new s.Buf8(A),y=_=0;_<A;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<E&&(64512&(g=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),y++),m<128?b[_++]=m:(m<2048?b[_++]=192|m>>>6:(m<65536?b[_++]=224|m>>>12:(b[_++]=240|m>>>18,b[_++]=128|m>>>12&63),b[_++]=128|m>>>6&63),b[_++]=128|63&m);return b},a.buf2binstring=function(v){return f(v,v.length)},a.binstring2buf=function(v){for(var b=new s.Buf8(v.length),m=0,g=b.length;m<g;m++)b[m]=v.charCodeAt(m);return b},a.buf2string=function(v,b){var m,g,y,_,E=b||v.length,A=new Array(2*E);for(m=g=0;m<E;)if((y=v[m++])<128)A[g++]=y;else if(4<(_=c[y]))A[g++]=65533,m+=_-1;else{for(y&=_===2?31:_===3?15:7;1<_&&m<E;)y=y<<6|63&v[m++],_--;1<_?A[g++]=65533:y<65536?A[g++]=y:(y-=65536,A[g++]=55296|y>>10&1023,A[g++]=56320|1023&y)}return f(A,g)},a.utf8border=function(v,b){var m;for((b=b||v.length)>v.length&&(b=v.length),m=b-1;0<=m&&(192&v[m])==128;)m--;return m<0||m===0?b:m+c[v[m]]>b?m:b}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,l,d,c){for(var h=65535&s|0,f=s>>>16&65535|0,v=0;d!==0;){for(d-=v=2e3<d?2e3:d;f=f+(h=h+l[c++]|0)|0,--v;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var l,d=[],c=0;c<256;c++){l=c;for(var h=0;h<8;h++)l=1&l?3988292384^l>>>1:l>>>1;d[c]=l}return d})();i.exports=function(l,d,c,h){var f=s,v=h+c;l^=-1;for(var b=h;b<v;b++)l=l>>>8^f[255&(l^d[b])];return-1^l}},{}],46:[function(r,i,a){"use strict";var s,l=r("../utils/common"),d=r("./trees"),c=r("./adler32"),h=r("./crc32"),f=r("./messages"),v=0,b=4,m=0,g=-2,y=-1,_=4,E=2,A=8,C=9,O=286,$=30,j=19,U=2*O+1,re=15,H=3,fe=258,_e=fe+H+1,P=42,X=113,M=1,Q=2,Ie=3,ce=4;function Le(w,J){return w.msg=f[J],J}function ie(w){return(w<<1)-(4<w?9:0)}function Ae(w){for(var J=w.length;0<=--J;)w[J]=0}function W(w){var J=w.state,q=J.pending;q>w.avail_out&&(q=w.avail_out),q!==0&&(l.arraySet(w.output,J.pending_buf,J.pending_out,q,w.next_out),w.next_out+=q,J.pending_out+=q,w.total_out+=q,w.avail_out-=q,J.pending-=q,J.pending===0&&(J.pending_out=0))}function G(w,J){d._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,J),w.block_start=w.strstart,W(w.strm)}function Se(w,J){w.pending_buf[w.pending++]=J}function me(w,J){w.pending_buf[w.pending++]=J>>>8&255,w.pending_buf[w.pending++]=255&J}function pe(w,J){var q,T,I=w.max_chain_length,z=w.strstart,ae=w.prev_length,se=w.nice_match,F=w.strstart>w.w_size-_e?w.strstart-(w.w_size-_e):0,de=w.window,ge=w.w_mask,ue=w.prev,Me=w.strstart+fe,ot=de[z+ae-1],Ue=de[z+ae];w.prev_length>=w.good_match&&(I>>=2),se>w.lookahead&&(se=w.lookahead);do if(de[(q=J)+ae]===Ue&&de[q+ae-1]===ot&&de[q]===de[z]&&de[++q]===de[z+1]){z+=2,q++;do;while(de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&de[++z]===de[++q]&&z<Me);if(T=fe-(Me-z),z=Me-fe,ae<T){if(w.match_start=J,se<=(ae=T))break;ot=de[z+ae-1],Ue=de[z+ae]}}while((J=ue[J&ge])>F&&--I!=0);return ae<=w.lookahead?ae:w.lookahead}function Xe(w){var J,q,T,I,z,ae,se,F,de,ge,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-_e)){for(l.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,J=q=w.hash_size;T=w.head[--J],w.head[J]=ue<=T?T-ue:0,--q;);for(J=q=ue;T=w.prev[--J],w.prev[J]=ue<=T?T-ue:0,--q;);I+=ue}if(w.strm.avail_in===0)break;if(ae=w.strm,se=w.window,F=w.strstart+w.lookahead,de=I,ge=void 0,ge=ae.avail_in,de<ge&&(ge=de),q=ge===0?0:(ae.avail_in-=ge,l.arraySet(se,ae.input,ae.next_in,ge,F),ae.state.wrap===1?ae.adler=c(ae.adler,se,ge,F):ae.state.wrap===2&&(ae.adler=h(ae.adler,se,ge,F)),ae.next_in+=ge,ae.total_in+=ge,ge),w.lookahead+=q,w.lookahead+w.insert>=H)for(z=w.strstart-w.insert,w.ins_h=w.window[z],w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+H-1])&w.hash_mask,w.prev[z&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=z,z++,w.insert--,!(w.lookahead+w.insert<H)););}while(w.lookahead<_e&&w.strm.avail_in!==0)}function bt(w,J){for(var q,T;;){if(w.lookahead<_e){if(Xe(w),w.lookahead<_e&&J===v)return M;if(w.lookahead===0)break}if(q=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),q!==0&&w.strstart-q<=w.w_size-_e&&(w.match_length=pe(w,q)),w.match_length>=H)if(T=d._tr_tally(w,w.strstart-w.match_start,w.match_length-H),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=H){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else T=d._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(T&&(G(w,!1),w.strm.avail_out===0))return M}return w.insert=w.strstart<H-1?w.strstart:H-1,J===b?(G(w,!0),w.strm.avail_out===0?Ie:ce):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?M:Q}function Ze(w,J){for(var q,T,I;;){if(w.lookahead<_e){if(Xe(w),w.lookahead<_e&&J===v)return M;if(w.lookahead===0)break}if(q=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=H-1,q!==0&&w.prev_length<w.max_lazy_match&&w.strstart-q<=w.w_size-_e&&(w.match_length=pe(w,q),w.match_length<=5&&(w.strategy===1||w.match_length===H&&4096<w.strstart-w.match_start)&&(w.match_length=H-1)),w.prev_length>=H&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-H,T=d._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-H),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=H-1,w.strstart++,T&&(G(w,!1),w.strm.avail_out===0))return M}else if(w.match_available){if((T=d._tr_tally(w,0,w.window[w.strstart-1]))&&G(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return M}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(T=d._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<H-1?w.strstart:H-1,J===b?(G(w,!0),w.strm.avail_out===0?Ie:ce):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?M:Q}function We(w,J,q,T,I){this.good_length=w,this.max_lazy=J,this.nice_length=q,this.max_chain=T,this.func=I}function pt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*U),this.dyn_dtree=new l.Buf16(2*(2*$+1)),this.bl_tree=new l.Buf16(2*(2*j+1)),Ae(this.dyn_ltree),Ae(this.dyn_dtree),Ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(re+1),this.heap=new l.Buf16(2*O+1),Ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*O+1),Ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function wt(w){var J;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=E,(J=w.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?P:X,w.adler=J.wrap===2?0:1,J.last_flush=v,d._tr_init(J),m):Le(w,g)}function Kt(w){var J=wt(w);return J===m&&(function(q){q.window_size=2*q.w_size,Ae(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=H-1,q.match_available=0,q.ins_h=0})(w.state),J}function Ut(w,J,q,T,I,z){if(!w)return g;var ae=1;if(J===y&&(J=6),T<0?(ae=0,T=-T):15<T&&(ae=2,T-=16),I<1||C<I||q!==A||T<8||15<T||J<0||9<J||z<0||_<z)return Le(w,g);T===8&&(T=9);var se=new pt;return(w.state=se).strm=w,se.wrap=ae,se.gzhead=null,se.w_bits=T,se.w_size=1<<se.w_bits,se.w_mask=se.w_size-1,se.hash_bits=I+7,se.hash_size=1<<se.hash_bits,se.hash_mask=se.hash_size-1,se.hash_shift=~~((se.hash_bits+H-1)/H),se.window=new l.Buf8(2*se.w_size),se.head=new l.Buf16(se.hash_size),se.prev=new l.Buf16(se.w_size),se.lit_bufsize=1<<I+6,se.pending_buf_size=4*se.lit_bufsize,se.pending_buf=new l.Buf8(se.pending_buf_size),se.d_buf=1*se.lit_bufsize,se.l_buf=3*se.lit_bufsize,se.level=J,se.strategy=z,se.method=q,Kt(w)}s=[new We(0,0,0,0,function(w,J){var q=65535;for(q>w.pending_buf_size-5&&(q=w.pending_buf_size-5);;){if(w.lookahead<=1){if(Xe(w),w.lookahead===0&&J===v)return M;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var T=w.block_start+q;if((w.strstart===0||w.strstart>=T)&&(w.lookahead=w.strstart-T,w.strstart=T,G(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-_e&&(G(w,!1),w.strm.avail_out===0))return M}return w.insert=0,J===b?(G(w,!0),w.strm.avail_out===0?Ie:ce):(w.strstart>w.block_start&&(G(w,!1),w.strm.avail_out),M)}),new We(4,4,8,4,bt),new We(4,5,16,8,bt),new We(4,6,32,32,bt),new We(4,4,16,16,Ze),new We(8,16,32,32,Ze),new We(8,16,128,128,Ze),new We(8,32,128,256,Ze),new We(32,128,258,1024,Ze),new We(32,258,258,4096,Ze)],a.deflateInit=function(w,J){return Ut(w,J,A,15,8,0)},a.deflateInit2=Ut,a.deflateReset=Kt,a.deflateResetKeep=wt,a.deflateSetHeader=function(w,J){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=J,m):g},a.deflate=function(w,J){var q,T,I,z;if(!w||!w.state||5<J||J<0)return w?Le(w,g):g;if(T=w.state,!w.output||!w.input&&w.avail_in!==0||T.status===666&&J!==b)return Le(w,w.avail_out===0?-5:g);if(T.strm=w,q=T.last_flush,T.last_flush=J,T.status===P)if(T.wrap===2)w.adler=0,Se(T,31),Se(T,139),Se(T,8),T.gzhead?(Se(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),Se(T,255&T.gzhead.time),Se(T,T.gzhead.time>>8&255),Se(T,T.gzhead.time>>16&255),Se(T,T.gzhead.time>>24&255),Se(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),Se(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(Se(T,255&T.gzhead.extra.length),Se(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(w.adler=h(w.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(Se(T,0),Se(T,0),Se(T,0),Se(T,0),Se(T,0),Se(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),Se(T,3),T.status=X);else{var ae=A+(T.w_bits-8<<4)<<8;ae|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(ae|=32),ae+=31-ae%31,T.status=X,me(T,ae),T.strstart!==0&&(me(T,w.adler>>>16),me(T,65535&w.adler)),w.adler=1}if(T.status===69)if(T.gzhead.extra){for(I=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),W(w),I=T.pending,T.pending!==T.pending_buf_size));)Se(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){I=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),W(w),I=T.pending,T.pending===T.pending_buf_size)){z=1;break}z=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,Se(T,z)}while(z!==0);T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),z===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){I=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),W(w),I=T.pending,T.pending===T.pending_buf_size)){z=1;break}z=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,Se(T,z)}while(z!==0);T.gzhead.hcrc&&T.pending>I&&(w.adler=h(w.adler,T.pending_buf,T.pending-I,I)),z===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&W(w),T.pending+2<=T.pending_buf_size&&(Se(T,255&w.adler),Se(T,w.adler>>8&255),w.adler=0,T.status=X)):T.status=X),T.pending!==0){if(W(w),w.avail_out===0)return T.last_flush=-1,m}else if(w.avail_in===0&&ie(J)<=ie(q)&&J!==b)return Le(w,-5);if(T.status===666&&w.avail_in!==0)return Le(w,-5);if(w.avail_in!==0||T.lookahead!==0||J!==v&&T.status!==666){var se=T.strategy===2?(function(F,de){for(var ge;;){if(F.lookahead===0&&(Xe(F),F.lookahead===0)){if(de===v)return M;break}if(F.match_length=0,ge=d._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ge&&(G(F,!1),F.strm.avail_out===0))return M}return F.insert=0,de===b?(G(F,!0),F.strm.avail_out===0?Ie:ce):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?M:Q})(T,J):T.strategy===3?(function(F,de){for(var ge,ue,Me,ot,Ue=F.window;;){if(F.lookahead<=fe){if(Xe(F),F.lookahead<=fe&&de===v)return M;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=H&&0<F.strstart&&(ue=Ue[Me=F.strstart-1])===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]){ot=F.strstart+fe;do;while(ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&ue===Ue[++Me]&&Me<ot);F.match_length=fe-(ot-Me),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=H?(ge=d._tr_tally(F,1,F.match_length-H),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ge=d._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ge&&(G(F,!1),F.strm.avail_out===0))return M}return F.insert=0,de===b?(G(F,!0),F.strm.avail_out===0?Ie:ce):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?M:Q})(T,J):s[T.level].func(T,J);if(se!==Ie&&se!==ce||(T.status=666),se===M||se===Ie)return w.avail_out===0&&(T.last_flush=-1),m;if(se===Q&&(J===1?d._tr_align(T):J!==5&&(d._tr_stored_block(T,0,0,!1),J===3&&(Ae(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),W(w),w.avail_out===0))return T.last_flush=-1,m}return J!==b?m:T.wrap<=0?1:(T.wrap===2?(Se(T,255&w.adler),Se(T,w.adler>>8&255),Se(T,w.adler>>16&255),Se(T,w.adler>>24&255),Se(T,255&w.total_in),Se(T,w.total_in>>8&255),Se(T,w.total_in>>16&255),Se(T,w.total_in>>24&255)):(me(T,w.adler>>>16),me(T,65535&w.adler)),W(w),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?m:1)},a.deflateEnd=function(w){var J;return w&&w.state?(J=w.state.status)!==P&&J!==69&&J!==73&&J!==91&&J!==103&&J!==X&&J!==666?Le(w,g):(w.state=null,J===X?Le(w,-3):m):g},a.deflateSetDictionary=function(w,J){var q,T,I,z,ae,se,F,de,ge=J.length;if(!w||!w.state||(z=(q=w.state).wrap)===2||z===1&&q.status!==P||q.lookahead)return g;for(z===1&&(w.adler=c(w.adler,J,ge,0)),q.wrap=0,ge>=q.w_size&&(z===0&&(Ae(q.head),q.strstart=0,q.block_start=0,q.insert=0),de=new l.Buf8(q.w_size),l.arraySet(de,J,ge-q.w_size,q.w_size,0),J=de,ge=q.w_size),ae=w.avail_in,se=w.next_in,F=w.input,w.avail_in=ge,w.next_in=0,w.input=J,Xe(q);q.lookahead>=H;){for(T=q.strstart,I=q.lookahead-(H-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[T+H-1])&q.hash_mask,q.prev[T&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=T,T++,--I;);q.strstart=T,q.lookahead=H-1,Xe(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=H-1,q.match_available=0,w.next_in=se,w.input=F,w.avail_in=ae,q.wrap=z,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,l){var d=s.state,c=s.next_in,h,f,v,b,m,g,y,_,E,A,C,O,$,j,U,re,H,fe,_e,P,X,M=s.input,Q;h=c+(s.avail_in-5),f=s.next_out,Q=s.output,v=f-(l-s.avail_out),b=f+(s.avail_out-257),m=d.dmax,g=d.wsize,y=d.whave,_=d.wnext,E=d.window,A=d.hold,C=d.bits,O=d.lencode,$=d.distcode,j=(1<<d.lenbits)-1,U=(1<<d.distbits)-1;e:do{C<15&&(A+=M[c++]<<C,C+=8,A+=M[c++]<<C,C+=8),re=O[A&j];t:for(;;){if(A>>>=H=re>>>24,C-=H,(H=re>>>16&255)===0)Q[f++]=65535&re;else{if(!(16&H)){if((64&H)==0){re=O[(65535&re)+(A&(1<<H)-1)];continue t}if(32&H){d.mode=12;break e}s.msg="invalid literal/length code",d.mode=30;break e}fe=65535&re,(H&=15)&&(C<H&&(A+=M[c++]<<C,C+=8),fe+=A&(1<<H)-1,A>>>=H,C-=H),C<15&&(A+=M[c++]<<C,C+=8,A+=M[c++]<<C,C+=8),re=$[A&U];r:for(;;){if(A>>>=H=re>>>24,C-=H,!(16&(H=re>>>16&255))){if((64&H)==0){re=$[(65535&re)+(A&(1<<H)-1)];continue r}s.msg="invalid distance code",d.mode=30;break e}if(_e=65535&re,C<(H&=15)&&(A+=M[c++]<<C,(C+=8)<H&&(A+=M[c++]<<C,C+=8)),m<(_e+=A&(1<<H)-1)){s.msg="invalid distance too far back",d.mode=30;break e}if(A>>>=H,C-=H,(H=f-v)<_e){if(y<(H=_e-H)&&d.sane){s.msg="invalid distance too far back",d.mode=30;break e}if(X=E,(P=0)===_){if(P+=g-H,H<fe){for(fe-=H;Q[f++]=E[P++],--H;);P=f-_e,X=Q}}else if(_<H){if(P+=g+_-H,(H-=_)<fe){for(fe-=H;Q[f++]=E[P++],--H;);if(P=0,_<fe){for(fe-=H=_;Q[f++]=E[P++],--H;);P=f-_e,X=Q}}}else if(P+=_-H,H<fe){for(fe-=H;Q[f++]=E[P++],--H;);P=f-_e,X=Q}for(;2<fe;)Q[f++]=X[P++],Q[f++]=X[P++],Q[f++]=X[P++],fe-=3;fe&&(Q[f++]=X[P++],1<fe&&(Q[f++]=X[P++]))}else{for(P=f-_e;Q[f++]=Q[P++],Q[f++]=Q[P++],Q[f++]=Q[P++],2<(fe-=3););fe&&(Q[f++]=Q[P++],1<fe&&(Q[f++]=Q[P++]))}break}}break}}while(c<h&&f<b);c-=fe=C>>3,A&=(1<<(C-=fe<<3))-1,s.next_in=c,s.next_out=f,s.avail_in=c<h?h-c+5:5-(c-h),s.avail_out=f<b?b-f+257:257-(f-b),d.hold=A,d.bits=C}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),d=r("./crc32"),c=r("./inffast"),h=r("./inftrees"),f=1,v=2,b=0,m=-2,g=1,y=852,_=592;function E(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(P){var X;return P&&P.state?(X=P.state,P.total_in=P.total_out=X.total=0,P.msg="",X.wrap&&(P.adler=1&X.wrap),X.mode=g,X.last=0,X.havedict=0,X.dmax=32768,X.head=null,X.hold=0,X.bits=0,X.lencode=X.lendyn=new s.Buf32(y),X.distcode=X.distdyn=new s.Buf32(_),X.sane=1,X.back=-1,b):m}function O(P){var X;return P&&P.state?((X=P.state).wsize=0,X.whave=0,X.wnext=0,C(P)):m}function $(P,X){var M,Q;return P&&P.state?(Q=P.state,X<0?(M=0,X=-X):(M=1+(X>>4),X<48&&(X&=15)),X&&(X<8||15<X)?m:(Q.window!==null&&Q.wbits!==X&&(Q.window=null),Q.wrap=M,Q.wbits=X,O(P))):m}function j(P,X){var M,Q;return P?(Q=new A,(P.state=Q).window=null,(M=$(P,X))!==b&&(P.state=null),M):m}var U,re,H=!0;function fe(P){if(H){var X;for(U=new s.Buf32(512),re=new s.Buf32(32),X=0;X<144;)P.lens[X++]=8;for(;X<256;)P.lens[X++]=9;for(;X<280;)P.lens[X++]=7;for(;X<288;)P.lens[X++]=8;for(h(f,P.lens,0,288,U,0,P.work,{bits:9}),X=0;X<32;)P.lens[X++]=5;h(v,P.lens,0,32,re,0,P.work,{bits:5}),H=!1}P.lencode=U,P.lenbits=9,P.distcode=re,P.distbits=5}function _e(P,X,M,Q){var Ie,ce=P.state;return ce.window===null&&(ce.wsize=1<<ce.wbits,ce.wnext=0,ce.whave=0,ce.window=new s.Buf8(ce.wsize)),Q>=ce.wsize?(s.arraySet(ce.window,X,M-ce.wsize,ce.wsize,0),ce.wnext=0,ce.whave=ce.wsize):(Q<(Ie=ce.wsize-ce.wnext)&&(Ie=Q),s.arraySet(ce.window,X,M-Q,Ie,ce.wnext),(Q-=Ie)?(s.arraySet(ce.window,X,M-Q,Q,0),ce.wnext=Q,ce.whave=ce.wsize):(ce.wnext+=Ie,ce.wnext===ce.wsize&&(ce.wnext=0),ce.whave<ce.wsize&&(ce.whave+=Ie))),0}a.inflateReset=O,a.inflateReset2=$,a.inflateResetKeep=C,a.inflateInit=function(P){return j(P,15)},a.inflateInit2=j,a.inflate=function(P,X){var M,Q,Ie,ce,Le,ie,Ae,W,G,Se,me,pe,Xe,bt,Ze,We,pt,wt,Kt,Ut,w,J,q,T,I=0,z=new s.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return m;(M=P.state).mode===12&&(M.mode=13),Le=P.next_out,Ie=P.output,Ae=P.avail_out,ce=P.next_in,Q=P.input,ie=P.avail_in,W=M.hold,G=M.bits,Se=ie,me=Ae,J=b;e:for(;;)switch(M.mode){case g:if(M.wrap===0){M.mode=13;break}for(;G<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(2&M.wrap&&W===35615){z[M.check=0]=255&W,z[1]=W>>>8&255,M.check=d(M.check,z,2,0),G=W=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&W)<<8)+(W>>8))%31){P.msg="incorrect header check",M.mode=30;break}if((15&W)!=8){P.msg="unknown compression method",M.mode=30;break}if(G-=4,w=8+(15&(W>>>=4)),M.wbits===0)M.wbits=w;else if(w>M.wbits){P.msg="invalid window size",M.mode=30;break}M.dmax=1<<w,P.adler=M.check=1,M.mode=512&W?10:12,G=W=0;break;case 2:for(;G<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(M.flags=W,(255&M.flags)!=8){P.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){P.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=W>>8&1),512&M.flags&&(z[0]=255&W,z[1]=W>>>8&255,M.check=d(M.check,z,2,0)),G=W=0,M.mode=3;case 3:for(;G<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.head&&(M.head.time=W),512&M.flags&&(z[0]=255&W,z[1]=W>>>8&255,z[2]=W>>>16&255,z[3]=W>>>24&255,M.check=d(M.check,z,4,0)),G=W=0,M.mode=4;case 4:for(;G<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.head&&(M.head.xflags=255&W,M.head.os=W>>8),512&M.flags&&(z[0]=255&W,z[1]=W>>>8&255,M.check=d(M.check,z,2,0)),G=W=0,M.mode=5;case 5:if(1024&M.flags){for(;G<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.length=W,M.head&&(M.head.extra_len=W),512&M.flags&&(z[0]=255&W,z[1]=W>>>8&255,M.check=d(M.check,z,2,0)),G=W=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(ie<(pe=M.length)&&(pe=ie),pe&&(M.head&&(w=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,Q,ce,pe,w)),512&M.flags&&(M.check=d(M.check,Q,pe,ce)),ie-=pe,ce+=pe,M.length-=pe),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(ie===0)break e;for(pe=0;w=Q[ce+pe++],M.head&&w&&M.length<65536&&(M.head.name+=String.fromCharCode(w)),w&&pe<ie;);if(512&M.flags&&(M.check=d(M.check,Q,pe,ce)),ie-=pe,ce+=pe,w)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(ie===0)break e;for(pe=0;w=Q[ce+pe++],M.head&&w&&M.length<65536&&(M.head.comment+=String.fromCharCode(w)),w&&pe<ie;);if(512&M.flags&&(M.check=d(M.check,Q,pe,ce)),ie-=pe,ce+=pe,w)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;G<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(W!==(65535&M.check)){P.msg="header crc mismatch",M.mode=30;break}G=W=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),P.adler=M.check=0,M.mode=12;break;case 10:for(;G<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}P.adler=M.check=E(W),G=W=0,M.mode=11;case 11:if(M.havedict===0)return P.next_out=Le,P.avail_out=Ae,P.next_in=ce,P.avail_in=ie,M.hold=W,M.bits=G,2;P.adler=M.check=1,M.mode=12;case 12:if(X===5||X===6)break e;case 13:if(M.last){W>>>=7&G,G-=7&G,M.mode=27;break}for(;G<3;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}switch(M.last=1&W,G-=1,3&(W>>>=1)){case 0:M.mode=14;break;case 1:if(fe(M),M.mode=20,X!==6)break;W>>>=2,G-=2;break e;case 2:M.mode=17;break;case 3:P.msg="invalid block type",M.mode=30}W>>>=2,G-=2;break;case 14:for(W>>>=7&G,G-=7&G;G<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if((65535&W)!=(W>>>16^65535)){P.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&W,G=W=0,M.mode=15,X===6)break e;case 15:M.mode=16;case 16:if(pe=M.length){if(ie<pe&&(pe=ie),Ae<pe&&(pe=Ae),pe===0)break e;s.arraySet(Ie,Q,ce,pe,Le),ie-=pe,ce+=pe,Ae-=pe,Le+=pe,M.length-=pe;break}M.mode=12;break;case 17:for(;G<14;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(M.nlen=257+(31&W),W>>>=5,G-=5,M.ndist=1+(31&W),W>>>=5,G-=5,M.ncode=4+(15&W),W>>>=4,G-=4,286<M.nlen||30<M.ndist){P.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;G<3;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.lens[ae[M.have++]]=7&W,W>>>=3,G-=3}for(;M.have<19;)M.lens[ae[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,q={bits:M.lenbits},J=h(0,M.lens,0,19,M.lencode,0,M.work,q),M.lenbits=q.bits,J){P.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;We=(I=M.lencode[W&(1<<M.lenbits)-1])>>>16&255,pt=65535&I,!((Ze=I>>>24)<=G);){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(pt<16)W>>>=Ze,G-=Ze,M.lens[M.have++]=pt;else{if(pt===16){for(T=Ze+2;G<T;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(W>>>=Ze,G-=Ze,M.have===0){P.msg="invalid bit length repeat",M.mode=30;break}w=M.lens[M.have-1],pe=3+(3&W),W>>>=2,G-=2}else if(pt===17){for(T=Ze+3;G<T;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}G-=Ze,w=0,pe=3+(7&(W>>>=Ze)),W>>>=3,G-=3}else{for(T=Ze+7;G<T;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}G-=Ze,w=0,pe=11+(127&(W>>>=Ze)),W>>>=7,G-=7}if(M.have+pe>M.nlen+M.ndist){P.msg="invalid bit length repeat",M.mode=30;break}for(;pe--;)M.lens[M.have++]=w}}if(M.mode===30)break;if(M.lens[256]===0){P.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,q={bits:M.lenbits},J=h(f,M.lens,0,M.nlen,M.lencode,0,M.work,q),M.lenbits=q.bits,J){P.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,q={bits:M.distbits},J=h(v,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,q),M.distbits=q.bits,J){P.msg="invalid distances set",M.mode=30;break}if(M.mode=20,X===6)break e;case 20:M.mode=21;case 21:if(6<=ie&&258<=Ae){P.next_out=Le,P.avail_out=Ae,P.next_in=ce,P.avail_in=ie,M.hold=W,M.bits=G,c(P,me),Le=P.next_out,Ie=P.output,Ae=P.avail_out,ce=P.next_in,Q=P.input,ie=P.avail_in,W=M.hold,G=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;We=(I=M.lencode[W&(1<<M.lenbits)-1])>>>16&255,pt=65535&I,!((Ze=I>>>24)<=G);){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(We&&(240&We)==0){for(wt=Ze,Kt=We,Ut=pt;We=(I=M.lencode[Ut+((W&(1<<wt+Kt)-1)>>wt)])>>>16&255,pt=65535&I,!(wt+(Ze=I>>>24)<=G);){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}W>>>=wt,G-=wt,M.back+=wt}if(W>>>=Ze,G-=Ze,M.back+=Ze,M.length=pt,We===0){M.mode=26;break}if(32&We){M.back=-1,M.mode=12;break}if(64&We){P.msg="invalid literal/length code",M.mode=30;break}M.extra=15&We,M.mode=22;case 22:if(M.extra){for(T=M.extra;G<T;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.length+=W&(1<<M.extra)-1,W>>>=M.extra,G-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;We=(I=M.distcode[W&(1<<M.distbits)-1])>>>16&255,pt=65535&I,!((Ze=I>>>24)<=G);){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if((240&We)==0){for(wt=Ze,Kt=We,Ut=pt;We=(I=M.distcode[Ut+((W&(1<<wt+Kt)-1)>>wt)])>>>16&255,pt=65535&I,!(wt+(Ze=I>>>24)<=G);){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}W>>>=wt,G-=wt,M.back+=wt}if(W>>>=Ze,G-=Ze,M.back+=Ze,64&We){P.msg="invalid distance code",M.mode=30;break}M.offset=pt,M.extra=15&We,M.mode=24;case 24:if(M.extra){for(T=M.extra;G<T;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}M.offset+=W&(1<<M.extra)-1,W>>>=M.extra,G-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){P.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(Ae===0)break e;if(pe=me-Ae,M.offset>pe){if((pe=M.offset-pe)>M.whave&&M.sane){P.msg="invalid distance too far back",M.mode=30;break}Xe=pe>M.wnext?(pe-=M.wnext,M.wsize-pe):M.wnext-pe,pe>M.length&&(pe=M.length),bt=M.window}else bt=Ie,Xe=Le-M.offset,pe=M.length;for(Ae<pe&&(pe=Ae),Ae-=pe,M.length-=pe;Ie[Le++]=bt[Xe++],--pe;);M.length===0&&(M.mode=21);break;case 26:if(Ae===0)break e;Ie[Le++]=M.length,Ae--,M.mode=21;break;case 27:if(M.wrap){for(;G<32;){if(ie===0)break e;ie--,W|=Q[ce++]<<G,G+=8}if(me-=Ae,P.total_out+=me,M.total+=me,me&&(P.adler=M.check=M.flags?d(M.check,Ie,me,Le-me):l(M.check,Ie,me,Le-me)),me=Ae,(M.flags?W:E(W))!==M.check){P.msg="incorrect data check",M.mode=30;break}G=W=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;G<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<G,G+=8}if(W!==(4294967295&M.total)){P.msg="incorrect length check",M.mode=30;break}G=W=0}M.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;default:return m}return P.next_out=Le,P.avail_out=Ae,P.next_in=ce,P.avail_in=ie,M.hold=W,M.bits=G,(M.wsize||me!==P.avail_out&&M.mode<30&&(M.mode<27||X!==4))&&_e(P,P.output,P.next_out,me-P.avail_out)?(M.mode=31,-4):(Se-=P.avail_in,me-=P.avail_out,P.total_in+=Se,P.total_out+=me,M.total+=me,M.wrap&&me&&(P.adler=M.check=M.flags?d(M.check,Ie,me,P.next_out-me):l(M.check,Ie,me,P.next_out-me)),P.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(Se==0&&me===0||X===4)&&J===b&&(J=-5),J)},a.inflateEnd=function(P){if(!P||!P.state)return m;var X=P.state;return X.window&&(X.window=null),P.state=null,b},a.inflateGetHeader=function(P,X){var M;return P&&P.state?(2&(M=P.state).wrap)==0?m:((M.head=X).done=!1,b):m},a.inflateSetDictionary=function(P,X){var M,Q=X.length;return P&&P.state?(M=P.state).wrap!==0&&M.mode!==11?m:M.mode===11&&l(1,X,Q,0)!==M.check?-3:_e(P,X,Q,Q)?(M.mode=31,-4):(M.havedict=1,b):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(f,v,b,m,g,y,_,E){var A,C,O,$,j,U,re,H,fe,_e=E.bits,P=0,X=0,M=0,Q=0,Ie=0,ce=0,Le=0,ie=0,Ae=0,W=0,G=null,Se=0,me=new s.Buf16(16),pe=new s.Buf16(16),Xe=null,bt=0;for(P=0;P<=15;P++)me[P]=0;for(X=0;X<m;X++)me[v[b+X]]++;for(Ie=_e,Q=15;1<=Q&&me[Q]===0;Q--);if(Q<Ie&&(Ie=Q),Q===0)return g[y++]=20971520,g[y++]=20971520,E.bits=1,0;for(M=1;M<Q&&me[M]===0;M++);for(Ie<M&&(Ie=M),P=ie=1;P<=15;P++)if(ie<<=1,(ie-=me[P])<0)return-1;if(0<ie&&(f===0||Q!==1))return-1;for(pe[1]=0,P=1;P<15;P++)pe[P+1]=pe[P]+me[P];for(X=0;X<m;X++)v[b+X]!==0&&(_[pe[v[b+X]]++]=X);if(U=f===0?(G=Xe=_,19):f===1?(G=l,Se-=257,Xe=d,bt-=257,256):(G=c,Xe=h,-1),P=M,j=y,Le=X=W=0,O=-1,$=(Ae=1<<(ce=Ie))-1,f===1&&852<Ae||f===2&&592<Ae)return 1;for(;;){for(re=P-Le,fe=_[X]<U?(H=0,_[X]):_[X]>U?(H=Xe[bt+_[X]],G[Se+_[X]]):(H=96,0),A=1<<P-Le,M=C=1<<ce;g[j+(W>>Le)+(C-=A)]=re<<24|H<<16|fe|0,C!==0;);for(A=1<<P-1;W&A;)A>>=1;if(A!==0?(W&=A-1,W+=A):W=0,X++,--me[P]==0){if(P===Q)break;P=v[b+_[X]]}if(Ie<P&&(W&$)!==O){for(Le===0&&(Le=Ie),j+=M,ie=1<<(ce=P-Le);ce+Le<Q&&!((ie-=me[ce+Le])<=0);)ce++,ie<<=1;if(Ae+=1<<ce,f===1&&852<Ae||f===2&&592<Ae)return 1;g[O=W&$]=Ie<<24|ce<<16|j-y|0}}return W!==0&&(g[j+W]=P-Le<<24|4194304),E.bits=Ie,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),l=0,d=1;function c(I){for(var z=I.length;0<=--z;)I[z]=0}var h=0,f=29,v=256,b=v+1+f,m=30,g=19,y=2*b+1,_=15,E=16,A=7,C=256,O=16,$=17,j=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],re=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],fe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_e=new Array(2*(b+2));c(_e);var P=new Array(2*m);c(P);var X=new Array(512);c(X);var M=new Array(256);c(M);var Q=new Array(f);c(Q);var Ie,ce,Le,ie=new Array(m);function Ae(I,z,ae,se,F){this.static_tree=I,this.extra_bits=z,this.extra_base=ae,this.elems=se,this.max_length=F,this.has_stree=I&&I.length}function W(I,z){this.dyn_tree=I,this.max_code=0,this.stat_desc=z}function G(I){return I<256?X[I]:X[256+(I>>>7)]}function Se(I,z){I.pending_buf[I.pending++]=255&z,I.pending_buf[I.pending++]=z>>>8&255}function me(I,z,ae){I.bi_valid>E-ae?(I.bi_buf|=z<<I.bi_valid&65535,Se(I,I.bi_buf),I.bi_buf=z>>E-I.bi_valid,I.bi_valid+=ae-E):(I.bi_buf|=z<<I.bi_valid&65535,I.bi_valid+=ae)}function pe(I,z,ae){me(I,ae[2*z],ae[2*z+1])}function Xe(I,z){for(var ae=0;ae|=1&I,I>>>=1,ae<<=1,0<--z;);return ae>>>1}function bt(I,z,ae){var se,F,de=new Array(_+1),ge=0;for(se=1;se<=_;se++)de[se]=ge=ge+ae[se-1]<<1;for(F=0;F<=z;F++){var ue=I[2*F+1];ue!==0&&(I[2*F]=Xe(de[ue]++,ue))}}function Ze(I){var z;for(z=0;z<b;z++)I.dyn_ltree[2*z]=0;for(z=0;z<m;z++)I.dyn_dtree[2*z]=0;for(z=0;z<g;z++)I.bl_tree[2*z]=0;I.dyn_ltree[2*C]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function We(I){8<I.bi_valid?Se(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function pt(I,z,ae,se){var F=2*z,de=2*ae;return I[F]<I[de]||I[F]===I[de]&&se[z]<=se[ae]}function wt(I,z,ae){for(var se=I.heap[ae],F=ae<<1;F<=I.heap_len&&(F<I.heap_len&&pt(z,I.heap[F+1],I.heap[F],I.depth)&&F++,!pt(z,se,I.heap[F],I.depth));)I.heap[ae]=I.heap[F],ae=F,F<<=1;I.heap[ae]=se}function Kt(I,z,ae){var se,F,de,ge,ue=0;if(I.last_lit!==0)for(;se=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],F=I.pending_buf[I.l_buf+ue],ue++,se===0?pe(I,F,z):(pe(I,(de=M[F])+v+1,z),(ge=U[de])!==0&&me(I,F-=Q[de],ge),pe(I,de=G(--se),ae),(ge=re[de])!==0&&me(I,se-=ie[de],ge)),ue<I.last_lit;);pe(I,C,z)}function Ut(I,z){var ae,se,F,de=z.dyn_tree,ge=z.stat_desc.static_tree,ue=z.stat_desc.has_stree,Me=z.stat_desc.elems,ot=-1;for(I.heap_len=0,I.heap_max=y,ae=0;ae<Me;ae++)de[2*ae]!==0?(I.heap[++I.heap_len]=ot=ae,I.depth[ae]=0):de[2*ae+1]=0;for(;I.heap_len<2;)de[2*(F=I.heap[++I.heap_len]=ot<2?++ot:0)]=1,I.depth[F]=0,I.opt_len--,ue&&(I.static_len-=ge[2*F+1]);for(z.max_code=ot,ae=I.heap_len>>1;1<=ae;ae--)wt(I,de,ae);for(F=Me;ae=I.heap[1],I.heap[1]=I.heap[I.heap_len--],wt(I,de,1),se=I.heap[1],I.heap[--I.heap_max]=ae,I.heap[--I.heap_max]=se,de[2*F]=de[2*ae]+de[2*se],I.depth[F]=(I.depth[ae]>=I.depth[se]?I.depth[ae]:I.depth[se])+1,de[2*ae+1]=de[2*se+1]=F,I.heap[1]=F++,wt(I,de,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(Ue,Pt){var fn,nr,pn,ut,zn,co,wr=Pt.dyn_tree,qo=Pt.max_code,Hi=Pt.stat_desc.static_tree,Ic=Pt.stat_desc.has_stree,Cc=Pt.stat_desc.extra_bits,os=Pt.stat_desc.extra_base,Nn=Pt.stat_desc.max_length,uo=0;for(ut=0;ut<=_;ut++)Ue.bl_count[ut]=0;for(wr[2*Ue.heap[Ue.heap_max]+1]=0,fn=Ue.heap_max+1;fn<y;fn++)Nn<(ut=wr[2*wr[2*(nr=Ue.heap[fn])+1]+1]+1)&&(ut=Nn,uo++),wr[2*nr+1]=ut,qo<nr||(Ue.bl_count[ut]++,zn=0,os<=nr&&(zn=Cc[nr-os]),co=wr[2*nr],Ue.opt_len+=co*(ut+zn),Ic&&(Ue.static_len+=co*(Hi[2*nr+1]+zn)));if(uo!==0){do{for(ut=Nn-1;Ue.bl_count[ut]===0;)ut--;Ue.bl_count[ut]--,Ue.bl_count[ut+1]+=2,Ue.bl_count[Nn]--,uo-=2}while(0<uo);for(ut=Nn;ut!==0;ut--)for(nr=Ue.bl_count[ut];nr!==0;)qo<(pn=Ue.heap[--fn])||(wr[2*pn+1]!==ut&&(Ue.opt_len+=(ut-wr[2*pn+1])*wr[2*pn],wr[2*pn+1]=ut),nr--)}})(I,z),bt(de,ot,I.bl_count)}function w(I,z,ae){var se,F,de=-1,ge=z[1],ue=0,Me=7,ot=4;for(ge===0&&(Me=138,ot=3),z[2*(ae+1)+1]=65535,se=0;se<=ae;se++)F=ge,ge=z[2*(se+1)+1],++ue<Me&&F===ge||(ue<ot?I.bl_tree[2*F]+=ue:F!==0?(F!==de&&I.bl_tree[2*F]++,I.bl_tree[2*O]++):ue<=10?I.bl_tree[2*$]++:I.bl_tree[2*j]++,de=F,ot=(ue=0)===ge?(Me=138,3):F===ge?(Me=6,3):(Me=7,4))}function J(I,z,ae){var se,F,de=-1,ge=z[1],ue=0,Me=7,ot=4;for(ge===0&&(Me=138,ot=3),se=0;se<=ae;se++)if(F=ge,ge=z[2*(se+1)+1],!(++ue<Me&&F===ge)){if(ue<ot)for(;pe(I,F,I.bl_tree),--ue!=0;);else F!==0?(F!==de&&(pe(I,F,I.bl_tree),ue--),pe(I,O,I.bl_tree),me(I,ue-3,2)):ue<=10?(pe(I,$,I.bl_tree),me(I,ue-3,3)):(pe(I,j,I.bl_tree),me(I,ue-11,7));de=F,ot=(ue=0)===ge?(Me=138,3):F===ge?(Me=6,3):(Me=7,4)}}c(ie);var q=!1;function T(I,z,ae,se){me(I,(h<<1)+(se?1:0),3),(function(F,de,ge,ue){We(F),ue&&(Se(F,ge),Se(F,~ge)),s.arraySet(F.pending_buf,F.window,de,ge,F.pending),F.pending+=ge})(I,z,ae,!0)}a._tr_init=function(I){q||((function(){var z,ae,se,F,de,ge=new Array(_+1);for(F=se=0;F<f-1;F++)for(Q[F]=se,z=0;z<1<<U[F];z++)M[se++]=F;for(M[se-1]=F,F=de=0;F<16;F++)for(ie[F]=de,z=0;z<1<<re[F];z++)X[de++]=F;for(de>>=7;F<m;F++)for(ie[F]=de<<7,z=0;z<1<<re[F]-7;z++)X[256+de++]=F;for(ae=0;ae<=_;ae++)ge[ae]=0;for(z=0;z<=143;)_e[2*z+1]=8,z++,ge[8]++;for(;z<=255;)_e[2*z+1]=9,z++,ge[9]++;for(;z<=279;)_e[2*z+1]=7,z++,ge[7]++;for(;z<=287;)_e[2*z+1]=8,z++,ge[8]++;for(bt(_e,b+1,ge),z=0;z<m;z++)P[2*z+1]=5,P[2*z]=Xe(z,5);Ie=new Ae(_e,U,v+1,b,_),ce=new Ae(P,re,0,m,_),Le=new Ae(new Array(0),H,0,g,A)})(),q=!0),I.l_desc=new W(I.dyn_ltree,Ie),I.d_desc=new W(I.dyn_dtree,ce),I.bl_desc=new W(I.bl_tree,Le),I.bi_buf=0,I.bi_valid=0,Ze(I)},a._tr_stored_block=T,a._tr_flush_block=function(I,z,ae,se){var F,de,ge=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Me,ot=4093624447;for(Me=0;Me<=31;Me++,ot>>>=1)if(1&ot&&ue.dyn_ltree[2*Me]!==0)return l;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return d;for(Me=32;Me<v;Me++)if(ue.dyn_ltree[2*Me]!==0)return d;return l})(I)),Ut(I,I.l_desc),Ut(I,I.d_desc),ge=(function(ue){var Me;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Ut(ue,ue.bl_desc),Me=g-1;3<=Me&&ue.bl_tree[2*fe[Me]+1]===0;Me--);return ue.opt_len+=3*(Me+1)+5+5+4,Me})(I),F=I.opt_len+3+7>>>3,(de=I.static_len+3+7>>>3)<=F&&(F=de)):F=de=ae+5,ae+4<=F&&z!==-1?T(I,z,ae,se):I.strategy===4||de===F?(me(I,2+(se?1:0),3),Kt(I,_e,P)):(me(I,4+(se?1:0),3),(function(ue,Me,ot,Ue){var Pt;for(me(ue,Me-257,5),me(ue,ot-1,5),me(ue,Ue-4,4),Pt=0;Pt<Ue;Pt++)me(ue,ue.bl_tree[2*fe[Pt]+1],3);J(ue,ue.dyn_ltree,Me-1),J(ue,ue.dyn_dtree,ot-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,ge+1),Kt(I,I.dyn_ltree,I.dyn_dtree)),Ze(I),se&&We(I)},a._tr_tally=function(I,z,ae){return I.pending_buf[I.d_buf+2*I.last_lit]=z>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&z,I.pending_buf[I.l_buf+I.last_lit]=255&ae,I.last_lit++,z===0?I.dyn_ltree[2*ae]++:(I.matches++,z--,I.dyn_ltree[2*(M[ae]+v+1)]++,I.dyn_dtree[2*G(z)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){me(I,2,3),pe(I,C,_e),(function(z){z.bi_valid===16?(Se(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Kh=S9(),I9=A9(),C9=na(x9(),1);function O9(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function T9(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ke(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ke(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ke(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function L9(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ke(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ke(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function P9(e){if(e.blob)return ke(`Got blob for page ${e.src} from cache`),e.blob;const t=await T9(e)||await L9(e);return t||ke(`Failed to get blob for page ${e.src}`),t}async function R9(){Re("download","working");const e=new C9.default,t=he("images")??{},r=he("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=xe.default.sortBy(xe.default.entries(t),([h])=>Number(h)),l=[],d=h=>{Re("dialog",{open:!0,title:V("BUTTON_DOWNLOAD"),content:ne`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${V("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",i.toString())}</p>
          <progress value='${h}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ne`
        <mov-button @click=${()=>Re("download","cancelled")}>
          ${V("CANCEL")}
        </mov-button>
      `})};d(0);let c=0;for(const[h,f]of s){if(he("download")==="cancelled"){ke("Download cancelled"),Re("dialog",null),Re("download",void 0);return}try{const v=await P9(f);if(v){const b=O9(v.type),m=`Page-${Number(h).toString().padStart(a,"0")}.${b}`;ke(`${m} Added to Zip from Blob`),e.file(m,v,{createFolders:!0,compression:"DEFLATE"})}else l.push(f.src??h)}catch(v){ke(`Error processing page ${h}`,v),l.push(f.src??h)}finally{c+=1,d(c)}}Re("dialog",{open:!0,title:V("BUTTON_DOWNLOAD"),content:ne`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${V("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ne``}),l.length>0&&(ke("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),ke("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{ke("Download Ready");const f=`${r?.title??document.title}.zip`;(0,I9.saveAs)(h,f,{autoBom:!1}),l.length>0?Re("dialog",{open:!0,title:V("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ne`<p>${V("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ne`<mov-button @click=${()=>Re("dialog",null)}>
            ${V("CLOSE")}
          </mov-button>`}):Re("dialog",null)}).catch(h=>{ke("Error generating zip",h),Re("dialog",{open:!0,title:V("WARNING"),icon:"error",content:ne`<p>Error generating zip: ${h.message}</p>`,footer:ne`<mov-button @click=${()=>Re("dialog",null)}>
          ${V("CLOSE")}
        </mov-button>`})}).finally(()=>{Re("download",void 0)})}function Yh(){he("download")!=="working"&&(ke("Downloading Chapter"),R9().catch(e=>ke("Error downloading chapter",e)))}function $9(){So("hidePageControls",e=>!e)}function Pi(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,Kh.sanitizeUrl)(r):t.id==="series"&&(qs()?window.location.href=window.location.pathname:window.history.back()))}function D9(e){if(e)if(Y("viewMode").startsWith("Fluid")){const t=he("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}tr.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):D9(he("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Re("scrollToPage",void 0),10))});function B9(e){const t=e.detail.value;Re("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function z9(e){Re("scrollToPage",e)}var wc=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function _c(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function Ri(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function Xh(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function Jh(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function N9(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function Qh(e,t,r){let i=e.keyCode||e.which||e.charCode;if(e.key){const a=e.key.toLowerCase();if(a in t)return t[a];if(a in r)return r[a];if(/^[a-z]$/i.test(e.key))return e.key.toUpperCase().charCodeAt(0)}return e.code&&/^Key[A-Z]$/.test(e.code)&&(i=e.code.charCodeAt(3)),i}var so={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":wc?173:189,"=":wc?61:187,";":wc?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},rr={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},$i={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Lt={16:!1,18:!1,17:!1,91:!1},vt={};for(let e=1;e<20;e++)so[`f${e}`]=111+e;var dt=[],Di=null,Uo=null,e1="all",hn=new Map,Vo=e=>so[e.toLowerCase()]||rr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),H9=e=>Object.keys(so).find(t=>so[t]===e),F9=e=>Object.keys(rr).find(t=>rr[t]===e),t1=e=>{e1=e||"all"},Bi=()=>e1||"all",G9=()=>dt.slice(0),W9=()=>dt.map(e=>H9(e)||F9(e)||String.fromCharCode(e)),U9=()=>{const e=[];return Object.keys(vt).forEach(t=>{vt[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(l=>Vo(l))})})}),e},r1=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},V9=e=>(typeof e=="string"&&(e=Vo(e)),dt.indexOf(e)!==-1),Z9=(e,t)=>{let r,i;e||(e=Bi());for(const a in vt)if(Object.prototype.hasOwnProperty.call(vt,a))for(r=vt[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>yc(s)):i++;Bi()===e&&t1(t||"all")};function j9(e){let t=Qh(e,so,rr);e.key&&e.key.toLowerCase()==="capslock"&&(t=Vo(e.key));const r=dt.indexOf(t);if(r>=0&&dt.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&dt.splice(0,dt.length),(t===93||t===224)&&(t=91),t in Lt){Lt[t]=!1;for(const i in rr)rr[i]===t&&(Xr[i]=!1)}}var n1=(e,...t)=>{if(typeof e>"u")Object.keys(vt).forEach(r=>{Array.isArray(vt[r])&&vt[r].forEach(i=>ja(i)),delete vt[r]}),yc(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ja(r)});else if(typeof e=="object")e.key&&ja(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),ja({key:e,scope:r,method:i,splitKey:"+"})}},ja=({key:e,scope:t,method:r,splitKey:i="+"})=>{Jh(e).forEach(a=>{const s=a.split(i),l=s.length,d=s[l-1],c=d==="*"?"*":Vo(d);if(!vt[c])return;t||(t=Bi());const h=l>1?Xh(rr,s):[],f=[];vt[c]=vt[c].filter(v=>{const b=(r?v.method===r:!0)&&v.scope===t&&N9(v.mods,h);return b&&f.push(v.element),!b}),f.forEach(v=>yc(v))})};function o1(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Lt)Object.prototype.hasOwnProperty.call(Lt,s)&&(!Lt[s]&&t.mods.indexOf(+s)>-1||Lt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Lt[16]&&!Lt[18]&&!Lt[17]&&!Lt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(dt),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function i1(e,t){const r=vt["*"];let i=Qh(e,so,rr);if(e.key&&e.key.toLowerCase()==="capslock"||!(Xr.filter||r1).call(this,e))return;if((i===93||i===224)&&(i=91),dt.indexOf(i)===-1&&i!==229&&dt.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(d=>{const c=$i[d];e[d]&&dt.indexOf(c)===-1?dt.push(c):!e[d]&&dt.indexOf(c)>-1?dt.splice(dt.indexOf(c),1):d==="metaKey"&&e[d]&&(dt=dt.filter(h=>h in $i||h===i))}),i in Lt){Lt[i]=!0;for(const d in rr)if(Object.prototype.hasOwnProperty.call(rr,d)){const c=$i[rr[d]];Xr[d]=e[c]}if(!r)return}for(const d in Lt)Object.prototype.hasOwnProperty.call(Lt,d)&&(Lt[d]=e[$i[d]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(dt.indexOf(17)===-1&&dt.push(17),dt.indexOf(18)===-1&&dt.push(18),Lt[17]=!0,Lt[18]=!0);const a=Bi();if(r)for(let d=0;d<r.length;d++)r[d].scope===a&&(e.type==="keydown"&&r[d].keydown||e.type==="keyup"&&r[d].keyup)&&o1(e,r[d],a,t);if(!(i in vt))return;const s=vt[i],l=s.length;for(let d=0;d<l;d++)if((e.type==="keydown"&&s[d].keydown||e.type==="keyup"&&s[d].keyup)&&s[d].key){const c=s[d],{splitKey:h}=c,f=c.key.split(h),v=[];for(let b=0;b<f.length;b++)v.push(Vo(f[b]));v.sort().join("")===dt.sort().join("")&&o1(e,c,a,t)}}var Xr=function e(t,r,i){dt=[];const a=Jh(t);let s=[],l="all",d=document,c=0,h=!1,f=!0,v="+",b=!1,m=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const g=r;g.scope&&(l=g.scope),g.element&&(d=g.element),g.keyup&&(h=g.keyup),g.keydown!==void 0&&(f=g.keydown),g.capture!==void 0&&(b=g.capture),typeof g.splitKey=="string"&&(v=g.splitKey),g.single===!0&&(m=!0)}for(typeof r=="string"&&(l=r),m&&n1(t,l);c<a.length;c++){const g=a[c].split(v);s=[],g.length>1&&(s=Xh(rr,g));let y=g[g.length-1];y=y==="*"?"*":Vo(y),y in vt||(vt[y]=[]),vt[y].push({keyup:h,keydown:f,scope:l,mods:s,shortcut:a[c],method:i,key:a[c],splitKey:v,element:d})}if(typeof d<"u"&&typeof window<"u"){if(!hn.has(d)){const g=(_=window.event)=>i1(_,d),y=(_=window.event)=>{i1(_,d),j9(_)};hn.set(d,{keydownListener:g,keyupListenr:y,capture:b}),_c(d,"keydown",g,b),_c(d,"keyup",y,b)}if(!Di){const g=()=>{dt=[]};Di={listener:g,capture:b},_c(window,"focus",g,b)}if(!Uo&&typeof document<"u"){const g=()=>{dt=[];for(const E in Lt)Lt[E]=!1;for(const E in rr)e[E]=!1},y=g,_=g;document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",_),Uo={fullscreen:y,webkit:_}}}};function q9(e,t="all"){Object.keys(vt).forEach(r=>{vt[r].filter(i=>i.scope===t&&(i.shortcut===e||i.shortcut==="*")).forEach(i=>{i&&i.method&&i.method({},i)})})}function yc(e){const t=Object.values(vt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=hn.get(e)||{};r&&i&&(Ri(e,"keyup",i,a),Ri(e,"keydown",r,a),hn.delete(e))}if(t.length<=0||hn.size<=0){if(Array.from(hn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=hn.get(r)||{};i&&a&&(Ri(r,"keyup",a,s),Ri(r,"keydown",i,s),hn.delete(r))}),hn.clear(),Object.keys(vt).forEach(r=>delete vt[r]),Di){const{listener:r,capture:i}=Di;Ri(window,"focus",r,i),Di=null}Uo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Uo.fullscreen),document.removeEventListener("webkitfullscreenchange",Uo.webkit),Uo=null)}}var kc={getPressedKeyString:W9,setScope:t1,getScope:Bi,deleteScope:Z9,getPressedKeyCodes:G9,getAllKeyCodes:U9,isPressed:V9,filter:r1,trigger:q9,unbind:n1,keyMap:so,modifier:rr,modifierMap:$i};for(const e in kc){const t=e;Object.prototype.hasOwnProperty.call(kc,t)&&(Xr[t]=kc[t])}if(typeof window<"u"){const e=window.hotkeys;Xr.noConflict=t=>(t&&window.hotkeys===Xr&&(window.hotkeys=e),Xr),window.hotkeys=Xr}function a1(){const e=he("chapter").value;if(Y("viewMode").startsWith("Fluid")){const t=Y("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:Y("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Re("autoScroll",!1),ke("Finished auto scroll"))}else window.scrollBy({top:Y("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Re("autoScroll",!1),ke("Finished auto scroll"));he("autoScroll")&&requestAnimationFrame(a1)}function qa(){he("autoScroll")?(Re("autoScroll",!1),ke("Stopped auto scroll")):(Re("autoScroll",!0),requestAnimationFrame(a1),ke("Start auto scroll"))}var Ka=!1,K9=xe.default.debounce(()=>{qa(),Ka=!1},500);function Y9(){!Ka&&he("autoScroll")&&(qa(),Ka=!0),Ka&&!he("autoScroll")&&K9()}function X9(){window.addEventListener("wheel",xe.default.throttle(Y9,500))}var Jr=class extends tt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=kt`
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
                ${bc}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?ne`
                <div class="icon-container">
                  <mov-icon
                    .name=${J9(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};D([K({type:Boolean,reflect:!0})],Jr.prototype,"open",void 0),D([K({type:String,reflect:!0})],Jr.prototype,"mode",void 0),D([K({type:Boolean,reflect:!0})],Jr.prototype,"fullscreen",void 0),D([K({type:String,reflect:!0})],Jr.prototype,"label",void 0),D([K({type:Boolean,reflect:!0,attribute:"without-header"})],Jr.prototype,"withoutHeader",void 0),D([K({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Jr.prototype,"lightDismiss",void 0),D([K({type:String,reflect:!0})],Jr.prototype,"icon",void 0),D([Mn("dialog")],Jr.prototype,"dialog",void 0),Jr=D([st("mov-dialog")],Jr);function Ec(e){const t=()=>Re("dialog",null);e.timer&&setTimeout(t,e.timer),Re("dialog",{open:!0,icon:e.icon,title:e.title,content:ne`<div style="padding: 1rem;">${Tu(e.html)}</div>`,footer:ne`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function J9(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function Q9(e){const t=e.currentTarget.value;Bu(t==="true")}function e7(e){const t=e.currentTarget.value;Mt("locale",t)}function t7(e){const t=e.currentTarget.value;Mt("loadMode",t)}function r7(e){const t=e.detail.checked;Mt("fitWidthIfOversize",t)}function n7(e){const t=e.currentTarget.value;Mt("navbar",t)}function o7(e){const t=e.currentTarget.value;Mt("pagination",t)}function i7(e){const t=e.detail.checked;Mt("downloadZip",t),t&&Ec({title:V("ATTENTION"),html:V("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function a7(e){const t=e.detail.checked;Mt("lazyLoadImages",t),t&&Ec({title:V("WARNING"),html:V("LAZY_LOAD"),icon:"warning"})}function s7(e){const t=e.detail.value;Mt("lazyStart",typeof t=="string"?parseInt(t,10):t)}function l7(e){const t=e.currentTarget.value;Mt("loadSpeed",t),["Extreme","All"].includes(t)&&Ec({title:V("SPEED_WARNING"),html:V("SPEED_WARNING_MESSAGE"),icon:"warning"})}function c7(e){const t=e.detail.value;Mt("zoomStep",typeof t=="string"?parseInt(t,10):t)}function d7(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;j4("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${r}vw;}`),Mt("minZoom",r)}function u7(e){const t=e.detail.checked;Mt("hidePageControls",t)}function h7(e){const t=e.currentTarget.value;Mt("header",t)}function f7(e){const t=e.detail.value;Mt("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function s1(e){So("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function p7(e){const t=e.currentTarget.value;Mt("deviceMode",t),Re("device",ml(t))}function m7(){const e=Y("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function g7(){return Y("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function l1(e,t=Y("zoomMode"),r=Y("zoomValue")){const i=m7(),a=g7();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Pn(e=Y("zoomMode"),t=Y("zoomValue")){ke("Zoom",e,t),Mo("zoomMode",e),Mo("zoomValue",t),e==="height"?Re("scrollToPage",he("currentPage")):no("header");const r=he("images"),i=he("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=l1({...r?.[s]},e,t);Re("images",a)}function Zo(e,t=Y("zoomValue")){return()=>{Pn(e,t)}}function Ya(e=1){return()=>{const t=Y("zoomValue")+e*Y("zoomStep");t>0&&t<500&&Pn("percent",t)}}function v7(e){const t=e.currentTarget.value;Mt("zoomMode",t)}function b7(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;Mt("zoomValue",r),Pn("percent",r)}function w7(e){const t=e.detail.value;Pn("percent",typeof t=="string"?parseInt(t,10):t)}function br(e){return()=>{Mo("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(Mo("zoomMode","height"),Mo("header","click"),Pn("height")):(no("zoomMode"),no("zoomValue"),no("header")),Pn()}}function _7(e){const t=e.currentTarget.value;Mt("viewMode",t),br(t)()}function y7(e){const t=Y("viewMode")==="FluidRTL"?-1:1;he("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function k7(e){const t=he("currentPage")+e;t<0?Re("scrollToPage",0):t>(he("manga")?.pages??1)||Re("scrollToPage",t)}function E7(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function M7(e){const t=he("currentPage"),r=he("manga");if(!r)return;const i=he("images")??{},a=r.begin??1,s=r.pages??1,l=c=>{if(c<a||c>s)return!1;if(i[c]?.doublePage)return!0;let h=0;for(let f=c-1;f>=a&&!i[f]?.doublePage;f--)h++;return h%2===0};let d;if(e===1)for(d=t+1;d<=s&&!l(d);)d++;else if(l(t))for(d=t-1;d>a&&!l(d);)d--;else for(d=t;d>a&&!l(d);)d--;d<a?Re("scrollToPage",0):d>s?Re("scrollToPage",s):Re("scrollToPage",d)}function c1(e){const t=Y("viewMode"),r=Y("zoomMode");ke("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?M7(e):t.startsWith("Fluid")?y7(e):r==="height"?k7(e):E7(e)}function zi(e){const t=he("manga")?.[e];t&&t!=="#"?window.location.href=(0,Kh.sanitizeUrl)(t):e==="series"&&(qs()?window.location.href=window.location.pathname:window.history.back())}var S7={SCROLL_UP(){c1(-1)},SCROLL_DOWN(){c1(1)},NEXT_CHAPTER(){zi("next")},PREVIOUS_CHAPTER(){zi("prev")},RETURN_CHAPTER_LIST(){zi("series")},ENLARGE(){Ya(1)()},REDUCE(){Ya(-1)()},RESTORE(){Zo("percent",100)()},FIT_WIDTH(){Zo("width")()},FIT_HEIGHT(){Zo("height")()},SETTINGS(){Du("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){br("WebComic")()},VIEW_MODE_VERTICAL(){br("Vertical")()},VIEW_MODE_LEFT(){br("FluidRTL")()},VIEW_MODE_RIGHT(){br("FluidLTR")()},VIEW_MODE_GALLERY(){br("Gallery")()},SCROLL_START(){qa()},INCREASE_SPEED(){s1(1)},DECREASE_SPEED(){s1(-1)},TOGGLE_CONTROLS(){So("hidePageControls",e=>!e)}};function d1(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Xr.unbind(),xe.default.keys(Y("keybinds")).forEach(e=>{Xr(Y("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{he("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),S7[e]())},100))})}var Rn=class extends tt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=kt`
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
          @click=${Pi}
          value="${this.prev}"
          ?disabled=${Ar(this.prev)||this.prev==="#"}
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
            @input="${B9}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Pi}
          value="${this.next}"
          ?disabled=${Ar(this.next)||this.next==="#"}
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
          ?disabled=${this.isFirstPage&&(Ar(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(Ar(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return Ne;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return ne`
      ${t?this.renderSlider():Ne} ${r?this.renderSideArrows():Ne}
    `}handleLeftArrowClick(){this.isFirstPage?zi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?zi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Re("scrollToPage",t)}};D([K({type:String})],Rn.prototype,"mode",void 0),D([K({type:Number})],Rn.prototype,"currentPage",void 0),D([K({type:Number})],Rn.prototype,"totalPages",void 0),D([K({type:Number})],Rn.prototype,"startPage",void 0),D([K({type:String})],Rn.prototype,"next",void 0),D([K({type:String})],Rn.prototype,"prev",void 0),Rn=D([st("manga-pagination")],Rn);var $n=class extends tt{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=kt`
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
                ${bc}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};D([K({type:Boolean,reflect:!0})],$n.prototype,"open",void 0),D([K({type:String,reflect:!0})],$n.prototype,"placement",void 0),D([K({type:String,reflect:!0})],$n.prototype,"label",void 0),D([K({type:Boolean,reflect:!0,attribute:"without-header"})],$n.prototype,"withoutHeader",void 0),D([K({type:Boolean,reflect:!0,attribute:"light-dismiss"})],$n.prototype,"lightDismiss",void 0),D([Mn("dialog")],$n.prototype,"dialog",void 0),$n=D([st("mov-drawer")],$n);var lo=class extends tt{static{this.styles=kt`
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
    `}};D([K({type:Boolean,reflect:!0})],lo.prototype,"open",void 0),D([K({type:Boolean,reflect:!0})],lo.prototype,"checkable",void 0),D([K({type:Number})],lo.prototype,"distance",void 0),D([K({type:Number})],lo.prototype,"skidding",void 0),D([K({type:String})],lo.prototype,"placement",void 0),lo=D([st("mov-dropdown")],lo);var Dn=class extends tt{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=kt`
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
    `}};D([K({type:Boolean,reflect:!0})],Dn.prototype,"selected",void 0),D([K({type:Boolean,reflect:!0})],Dn.prototype,"checked",void 0),D([K({type:Boolean,reflect:!0})],Dn.prototype,"disabled",void 0),D([K({type:String})],Dn.prototype,"value",void 0),D([K({type:String,reflect:!0})],Dn.prototype,"variant",void 0),D([K({type:String,reflect:!0})],Dn.prototype,"type",void 0),Dn=D([st("mov-dropdown-item")],Dn);var Mc=class extends tt{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=kt`
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
    ></div>`}};D([K({type:String,reflect:!0})],Mc.prototype,"orientation",void 0),Mc=D([st("mov-divider")],Mc);var u1="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;-webkit-box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 -1px #959da5;box-shadow:inset 0 -1px #959da5}",A7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Sc=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),x7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Sc();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),I7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Sc(),r=(i,a)=>class extends i{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),C7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=A7();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Sc();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=x7();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=I7();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),jo=C7(),h1=class extends tt{static{this.styles=kt`
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
    `}};h1=D([st("mov-button-group")],h1);var Xa=49,O7=100,T7=class sp{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=Y("header"),{scrollY:a}=window;let s="none";Y("zoomMode")!=="height"&&a+window.innerHeight+O7>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Xa?s="hide":i==="scroll"&&a<this.prevOffset&&a>Xa?s="show":i!=="click"&&a<=Xa&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),i==="scroll"){const d=s!=="hide";this.headerVisible!==d&&(this.headerVisible=d,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(Y("header"))){const a=sp.isMouseInsideRegion(i,window.innerWidth,Xa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{Y("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=Y("header");Y("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},L7=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",l="";for(let d=1;d<t.length;d++){const c=t.substring(0,d),h=t.substring(t.length-d);if(this.canvasContext.measureText(c).width+this.canvasContext.measureText(h).width>a)break;s=c,l=h}this.value=`${s}${i}${l}`,this.host.requestUpdate()}};function f1(e=window.location.href){Ar(Ao(e))||(ke(`Bookmark Removed ${e}`),So("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function P7(e){const t=e.currentTarget.value;ke(`Bookmark Removed ${t}`),cr.error({title:V("BOOKMARK_REMOVED"),duration:1e4}),f1(t)}function R7(){Re("panel","bookmarks")}function p1(){const e=he("currentPage"),t={name:he("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Ao(t.url)?(So("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),cr.error({title:V("BOOKMARK_REMOVED"),duration:1e4})):(So("bookmarks",r=>[...r,t]),cr.success({title:V("BOOKMARK_SAVED"),description:V("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Ac(){Re("panel","none")}function $7(){Re("panel","settings")}function D7(){Re("panel","keybindings")}function B7(e){const t={};xe.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),Mt("keybinds",t),Re("panel","keybindings"),d1()}function z7(){Re("panel","keybindingsEditor")}var N7="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",m1="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Ja=class extends tt{static{this.styles=[Ee(N7),Ee(m1),Ee(u1),kt``]}constructor(){super(),this.headroomController=new T7(this),this.titleController=new L7(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ne``;const{headroom:t,headerVisible:r}=this.headroomController,i=Y("keybinds"),a=s=>{if(he("device")!=="desktop")return Ne;const l=i[s];return!l||l.length===0?Ne:l.map(d=>ne`<kbd slot="details">${d}</kbd>`)};return ne`
      <toggle-button
        id="menu"
        mode="burger"
        class="${Et({[Y("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${Et({[Y("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[he("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${Et({"button-group-merged-end":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${V("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${$7}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${V("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${D7}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${V("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${R7}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${V("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Et({running:he("autoScroll")})}"
              @click=${qa}
            >
              <mov-icon
                slot="icon"
                name="${he("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${V("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${$9}"
              ?selected=${Y("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${V("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${V("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${br("WebComic")}"
              ?selected=${Y("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${V("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${br("Vertical")}"
              ?selected=${Y("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${V("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${br("FluidLTR")}"
              ?selected=${Y("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${V("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${br("FluidRTL")}"
              ?selected=${Y("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${V("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${br("Book")}"
              ?selected=${Y("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${V("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${br("Manga")}"
              ?selected=${Y("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${V("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${br("Gallery")}"
              ?selected=${Y("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${V("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${V("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ya()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${V("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Zo("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${V("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ya(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${V("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Zo("width")}"
              ?selected=${Y("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${V("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Zo("height")}"
              ?selected=${Y("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${V("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${Et({"button-group-merged-start":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Ne}"
            @click=${Pi}
            title="${V("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${V("DOWNLOAD_ZIP")}"
            @click=${Yh}
            ?disabled=${he("download")!=="available"}
            ?loading=${he("download")==="working"}
          >
            <mov-icon
              name="${he("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Ne}"
            title="${V("PREVIOUS_CHAPTER")}"
            @click=${Pi}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Ne}"
            title="${V("NEXT_CHAPTER")}"
            @click=${Pi}
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
            ${Y("zoomMode")==="percent"?`${Y("zoomValue")}%`:Y("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${Y("zoomValue")}"
            min="${Y("minZoom")}"
            max="200"
            show-tooltip
            @input=${w7}
          ></mov-slider>
        </div>
      </header>
    `}};D([Mn("#MangaTitle")],Ja.prototype,"mangaTitleElement",void 0),D([K({type:Object})],Ja.prototype,"manga",void 0),Ja=D([st("reader-header"),(0,jo.useStores)(Ot,Eo,tr)],Ja);var H7="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",g1=class extends tt{static{this.styles=[Ee(H7)]}listBookmarks(){return Zs(Y("bookmarks"))?[V("LIST_EMPTY")]:Y("bookmarks").map((t,r)=>ne`
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
              @click=${P7}
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
        ?open=${he("panel")==="bookmarks"}
        light-dismiss
        @close=${Ac}
      >
        <mov-button
          class="Bookmark"
          title="${V("BOOKMARK")}"
          @click=${p1}
          slot="header-actions"
        >
          <mov-icon
            name="${Ao()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${V("BOOKMARKS")}</h2>
        <h2 slot="label">${V("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};g1=D([st("bookmark-panel"),(0,jo.useStores)(Ot,Eo,tr)],g1);function*F7(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var G7="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",v1=class extends tt{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(Y("keybinds")).reduce((r,i)=>(r[i]=nl(),r),{})}static{this.styles=[Ee(G7),Ee(u1)]}keybindList(){const t=Y("keybinds");return xe.default.keys(t).map(r=>{const i=t[r]?.length?F7(t[r]?.map(a=>ne`<kbd class="dark">${a}</kbd>`)," / "):"";return ne`<span>${V(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=Y("keybinds");return xe.default.keys(t).map(r=>ne`<label for="${r}">${V(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??Ne}"
            ${il(this.keybindsRefs[r])}
          />`)}render(){return ne`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${he("panel").startsWith("keybindings")}
        placement="end"
        @close=${Ac}
      >
        <h2 slot="label">${V("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${he("panel")==="keybindingsEditor"?ne` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${V("SAVE_KEYBINDS")}"
                @click=${()=>B7(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${V("BUTTON_SAVE")}
              </mov-button>`:ne` <mov-button
                id="EditKeybindings"
                type="button"
                title="${V("EDIT_KEYBINDS")}"
                @click=${z7}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${V("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${he("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Tu(V("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};v1=D([st("keybindings-panel"),(0,jo.useStores)(Ot,Eo,tr)],v1);function*W7(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function Qa(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function es(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var MI=xe.default.values(Ct).map(e=>e[900]);function b1(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function U7(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var V7=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",Ni=class extends tt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Ee(V7),kt`
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
        background-image: url('${Ee(es(hl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Ee(es(fl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return Ne;const t=he("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=he("images")||{},a=xe.default.keys(i).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&i[l]?.status==="loaded"}).length;return ne`
      <nav
        id="Navigation"
        class="${Et(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${c9}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${V("PAGES_LOADED")}
          <span>: ${he("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?b1:null}
        >
          ${W7(Qa(t?.pages??1,t?.begin??1),s=>ne` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>z9(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${he("images")?.[s]?.src??Ne}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};D([K({type:String})],Ni.prototype,"mode",void 0),D([K({type:Boolean})],Ni.prototype,"forceExpanded",void 0),D([Nt()],Ni.prototype,"isHiding",void 0),Ni=D([st("navbar-thumbnails"),(0,jo.useStores)(Ot,Eo,tr)],Ni);function Z7(){const e=ro()?"true":"false";return ne` <div class="ControlLabel">
    ${V("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${Q9}
    >
      <segmented-control-option
        value="false"
        label=${V("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function j7(){return yo.map(e=>ne`
      <option
        value="${e.ID}"
        ?selected=${Y("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function q7(){return ne` <div class="ControlLabel locale">
    ${V("LANGUAGE")}
    <select
      id="locale"
      @change="${e7}"
    >
      ${j7()}
    </select>
  </div>`}function K7(){const e=Y("deviceMode");return ne` <div class="ControlLabel">
    ${V("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${p7}
    >
      <segmented-control-option
        value="auto"
        label=${V("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${V("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${V("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${V("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var Y7=()=>ne`${Z7()} ${K7()} ${q7()}`;function X7(){return ne`
    <div class="ControlLabel loadMode">
      ${V("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${t7}"
      >
        <option
          value="wait"
          ?selected=${Y("loadMode")==="wait"}
        >
          ${V("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${Y("loadMode")==="always"}
        >
          ${V("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${Y("loadMode")==="never"}
        >
          ${V("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function J7(){return ne`
    <div class="ControlLabel PagesPerSecond">
      ${V("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${l7}"
      >
        <option
          value="Safe"
          ?selected=${Y("loadSpeed")==="Safe"}
        >
          ${V("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${Y("loadSpeed")==="Standard"}
        >
          ${V("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${Y("loadSpeed")==="Faster"}
        >
          ${V("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${Y("loadSpeed")==="Extreme"}
        >
          ${V("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${Y("loadSpeed")==="All"}
        >
          ${V("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var Q7=()=>ne`${X7()} ${J7()}`;function e8(){return ne`
    <div class="ControlLabel fitIfOversize">
      ${V("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${Y("fitWidthIfOversize")}
        @change=${r7}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${V("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${Y("downloadZip")}
        @change=${i7}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${V("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${Y("hidePageControls")}
        @change=${u7}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${V("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${Y("lazyLoadImages")}
        @change=${a7}
      ></mov-switch>
    </div>
  `}function t8(){return ne`
    <div
      class="${Et({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:Y("lazyLoadImages")})}"
    >
      <span>
        ${V("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${Y("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${Y("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${s7}"
      ></mov-slider>
    </div>
  `}function r8(){return ne`
    <div class="ControlLabel headerType">
      ${V("HEADER_TYPE")}
      <segmented-control
        .value=${Y("header")}
        @change=${h7}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${V("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${V("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${V("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${V("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${V("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function n8(){return ne`
    <div class="ControlLabel pagination">
      ${V("PAGINATION_TYPE")}
      <segmented-control
        .value=${Y("pagination")}
        @change=${o7}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${V("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${V("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${V("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${V("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function o8(){return ne`
    <div class="ControlLabel navbarType">
      ${V("NAVBAR_TYPE")}
      <segmented-control
        .value=${Y("navbar")}
        @change=${n7}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${V("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${V("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${V("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${V("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function i8(){return ne`
    <div class="ControlLabel autoScroll">
      <span>
        ${V("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${Y("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${Y("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${f7}"
      ></mov-slider>
    </div>
  `}var a8=()=>ne`${e8()} ${n8()} ${t8()} ${r8()} ${o8()} ${i8()}`;function s8(){const e=Y("colorScheme")==="dark";Mt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(Y("colorScheme"))}function ts(e){const t=e instanceof CustomEvent?e.detail.value:e.currentTarget.value;Mt("theme",t)}function l8(){return ne`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${V("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${s8}
        ?active=${Y("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${V("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${Y("theme")}"
        title="${Y("theme")}"
        @input=${ts}
        .swatches=${xe.default.values(vc)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${Y("theme")}"
      mode="steps"
      .selected=${Y("theme")}
      @change="${ts}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(vc).map(e=>ne`<color-swatch
            .color="${e}"
            .selected=${Y("theme")}
            @change=${ts}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${V("THEME_HUE")} & ${V("THEME_SHADE")}</summary>
      <color-panel
        .selected=${Y("theme")}
        @change=${ts}
      ></color-panel>
    </details>
  `}function c8(){return ne` <div class="ControlLabel DefaultZoomMode">
    ${V("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${Y("zoomMode")}
      @change=${v7}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${V("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${V("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${V("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function d8(){return ne`
    <div
      class="${Et({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:Y("zoomMode")==="percent"})}"
    >
      <span>
        ${V("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${Y("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${Y("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${b7}"
      ></mov-slider>
    </div>
  `}function u8(){return ne`
    <div class="ControlLabel minZoom">
      <span>
        ${V("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${Y("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${Y("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${d7}"
      ></mov-slider>
    </div>
  `}function h8(){return ne`
    <div class="ControlLabel zoomStep">
      <span>
        ${V("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${Y("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${Y("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${c7}"
      ></mov-slider>
    </div>
  `}function f8(){return ne`
    <div class="ControlLabel viewMode">
      ${V("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${Y("viewMode")}
        @change=${_7}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${V("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${V("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${V("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${V("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${V("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${V("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${V("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var p8=()=>ne`${c8()} ${d8()} ${u8()} ${h8()} ${f8()}`,m8="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",w1=class extends tt{static{this.styles=[kt`
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
    `,Ee(m8)]}render(){return ne`
      <mov-drawer
        id="SettingsPanel"
        ?open=${he("panel")==="settings"}
        @close=${Ac}
        placement="start"
        class="${he("device")}"
      >
        <h2 slot="label">${V("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${r3}"
          title="${V("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${V("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${V("GENERAL")}</legend>
            ${Y7()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${V("THEME")}</legend>
            ${l8()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${V("LOADING")}</legend>
            ${Q7()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${V("ZOOM")}</legend>
            ${p8()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${V("OTHERS")}</legend>
            ${a8()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};w1=D([st("settings-panel"),(0,jo.useStores)(Ot,Eo,tr)],w1);function g8(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(w8(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function v8(e){return g8(e).then(btoa)}function b8(e){return v8(e).then(function(t){return"data:"+e.type+";base64,"+t})}function w8(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function _8(e,t){ke("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ke("Failed to fetch page: ",r),r}}async function y8(e){return _8(e,"text/html")}async function k8(e,t,r){try{return(await y8(e)).querySelector(t)?.getAttribute(r)}catch(i){return ke("Failed to get element attribute: ",i),null}}var E8=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},xc;function M8(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function rs(e,t,r){const i=he("images")?.[t];i?.status&&i.status!=="pending"||(dr(t,()=>({status:"loading"})),xc.add(async()=>{let a=M8(r),s;try{const l=await fetch(a,e.fetchOptions);if(l.ok){const d=l.headers.get("content-type");d?.startsWith("image/")?(s=await l.blob(),a=await b8(s)):ke("Fetched content is not an image",d)}else ke("Fetch failed with status",l.status)}catch(l){ke("Failed to fetch image",l)}dr(t,()=>({src:a,blob:s,status:"loaded"})),jt("Loaded Image:",t,"Source:",a)}),e.pages===t&&f1())}async function _1(e,t,r){const i=he("images")?.[t];i?.status&&i.status!=="pending"||(dr(t,()=>({status:"loading"})),xc.add(async()=>{try{const a=await k8(r,e.img,e.lazyAttr??"src");a?(dr(t,()=>({status:"pending"})),await rs(e,t,a)):dr(t,()=>({status:"error"}))}catch(a){ke("Failed to get page attribute",a),dr(t,()=>({status:"error"}))}}))}function y1(e,t){Qa(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{_1(t,r,t.listPages[r-1])})}function k1(e,t){Qa(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{rs(t,r,t.listImages[r-1])})}async function S8(){await Ks(()=>he("manga")!==void 0);const e=he("manga"),t=e.begin??1;xc=new E8(Y("loadSpeed"),e.timer),jt("Loading Images"),jt(`Speed: ${Y("loadSpeed")}`),jt(`Lazy: ${e.lazy??Y("lazyLoadImages")}, Starting from: ${Y("lazyStart")}`),Pn(),Ud(e)?(jt("Method: Images:",e.listImages),k1(t,e)):Vd(e)?(jt("Method: Pages:",e.listPages),y1(t,e)):pp(e)?(jt("Method: Brute Force"),e.bruteForce({begin:t,addImg:rs,loadImages(r){k1(t,{...e,listImages:r})},loadPages(r,i,a){y1(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):ke("No Loading Method Found"),tr.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Ud(e)?rs(e,s,e.listImages[s-1]):Vd(e)&&_1(e,s,e.listPages[s-1]))})}function A8(){const e=he("images");if(!e)return null;const t=Y("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const d in e){const c=e[d].ref?.value;if(!c)continue;const h=c?.getBoundingClientRect();let f;r?i?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!l||f>l.edge)&&(l={index:parseInt(d,10),edge:f})}return l?l.index:he("manga")?.begin??1}function E1(){const e=A8();e!=null&&he("currentPage")!==e&&Re("currentPage",e)}function x8(){const e=xe.default.throttle(()=>{requestAnimationFrame(E1)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),he("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(E1)}function M1(){if(!he("chapter").value){setTimeout(M1,50);return}x8()}var S1=xe.default.debounce(()=>{Re("device",ml()),Pn()},200);async function I8(){await Ks(()=>he("manga")!==void 0),d1(),window.addEventListener("resize",S1),window.addEventListener("orientationchange",S1),X9(),M1()}var C8=Sr(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(g){var y,_;for(y in g)_=g[y],_!==void 0&&g.hasOwnProperty(y)&&(i[y]=_);return this},r.status=null,r.set=function(g){var y=r.isStarted();g=a(g,i.minimum,1),r.status=g===1?null:g;var _=r.render(!y),E=_.querySelector(i.barSelector),A=i.speed,C=i.easing;return _.offsetWidth,d(function(O){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),c(E,l(g,A,C)),g===1?(c(_,{transition:"none",opacity:1}),_.offsetWidth,setTimeout(function(){c(_,{transition:"all "+A+"ms linear",opacity:0}),setTimeout(function(){r.remove(),O()},A)},A)):setTimeout(O,A)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var g=function(){setTimeout(function(){r.status&&(r.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},r.done=function(g){return!g&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(g){var y=r.status;return y?(typeof g!="number"&&(g=(1-y)*a(Math.random()*y,.1,.95)),y=a(y+g,0,.994),r.set(y)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var g=0,y=0;r.promise=function(_){return!_||_.state()==="resolved"?this:(y===0&&r.start(),g++,y++,_.always(function(){y--,y===0?(g=0,r.done()):r.set((g-y)/g)}),this)}})(),r.render=function(g){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var y=document.createElement("div");y.id="nprogress",y.innerHTML=i.template;var _=y.querySelector(i.barSelector),E=g?"-100":s(r.status||0),A=document.querySelector(i.parent),C;return c(_,{transition:"all 0 linear",transform:"translate3d("+E+"%,0,0)"}),i.showSpinner||(C=y.querySelector(i.spinnerSelector),C&&m(C)),A!=document.body&&f(A,"nprogress-custom-parent"),A.appendChild(y),y},r.remove=function(){v(document.documentElement,"nprogress-busy"),v(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var g=document.body.style,y="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return y+"Perspective"in g?"translate3d":y+"Transform"in g?"translate":"margin"};function a(g,y,_){return g<y?y:g>_?_:g}function s(g){return(-1+g)*100}function l(g,y,_){var E;return i.positionUsing==="translate3d"?E={transform:"translate3d("+s(g)+"%,0,0)"}:i.positionUsing==="translate"?E={transform:"translate("+s(g)+"%,0)"}:E={"margin-left":s(g)+"%"},E.transition="all "+y+"ms "+_,E}var d=(function(){var g=[];function y(){var _=g.shift();_&&_(y)}return function(_){g.push(_),g.length==1&&y()}})(),c=(function(){var g=["Webkit","O","Moz","ms"],y={};function _(O){return O.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function($,j){return j.toUpperCase()})}function E(O){var $=document.body.style;if(O in $)return O;for(var j=g.length,U=O.charAt(0).toUpperCase()+O.slice(1),re;j--;)if(re=g[j]+U,re in $)return re;return O}function A(O){return O=_(O),y[O]||(y[O]=E(O))}function C(O,$,j){$=A($),O.style[$]=j}return function(O,$){var j=arguments,U,re;if(j.length==2)for(U in $)re=$[U],re!==void 0&&$.hasOwnProperty(U)&&C(O,U,re);else C(O,j[1],j[2])}})();function h(g,y){return(typeof g=="string"?g:b(g)).indexOf(" "+y+" ")>=0}function f(g,y){var _=b(g),E=_+y;h(_,y)||(g.className=E.substring(1))}function v(g,y){var _=b(g),E;h(g,y)&&(E=_.replace(" "+y+" "," "),g.className=E.substring(1,E.length-1))}function b(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return r})})),O8=na(C8(),1);function T8(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function A1(e,t){const r=he("images")?.[e];if(!r?.src)return;const i=(r.reload??0)+1;if(i>Y("maxReload")){ke(`Stopped reloading Page ${e} after ${i} attempts`);return}if(ke(`Reloading Page ${e} (Attempt ${i})`,t),t?.removeAttribute("src"),Vp(r.src)||Zp(r.src))dr(e,()=>({reload:i})),t?.setAttribute("src",r.src);else{const a=T8(r.src,i);dr(e,()=>({reload:i,src:a})),t?.setAttribute("src",a)}}function L8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images")?.[r]?.ref?.value;i&&A1(r,i)}function P8(e){const t=e.currentTarget,r=parseInt(t.value,10);dr(r,i=>({hide:!i.hide}))}function R8(e){const t=e.currentTarget,r=parseInt(t.id.replace("PageImg",""),10);dr(r,c=>({...l1({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const i=he("manga"),a=he("images")||{},s=xe.default.keys(a).filter(c=>{const h=parseInt(c,10);return h>=(i?.begin??1)&&h<=(i?.pages??1)&&a[h]?.status==="loaded"}).length,l=(i?.pages??1)-((i?.begin??1)-1),d=Math.floor(s/l*100);document.title=`(${d}%) ${he("manga")?.title}`,O8.default.configure({showSpinner:!1}).set(s/l),ke(`Progress: ${d}%`),s===l&&(ke("Images Loading Complete"),Re("download","available"),Y("downloadZip")&&Yh())}function $8(e){const t=e.currentTarget;if(Zs(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);dr(r,()=>({status:"error"})),A1(r,t)}function D8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a?.naturalWidth&&Re("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+Y("zoomStep")/100),height:void 0}})}function B8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a?.naturalWidth&&Re("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-Y("zoomStep")/100),height:void 0}})}function z8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function N8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:window.innerWidth+(Y("navbar")==="left"||Y("navbar")==="right"?-34:0),height:void 0}})}function H8(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(Y("navbar")==="bottom"?-34:0)}})}function F8(e){const t=he("images")?.[e],r=Y("viewMode").match(/^(Book|Manga)$/),i=Y("viewMode")==="Gallery",a=Y("viewMode").startsWith("Fluid"),s=Y("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${Y("minZoom")}vw`:void 0}}var G8=(e,t)=>Qa(e,t).map(r=>{he("images")?.[r]?.ref||dr(r,c=>({ref:nl()}));let i=0;for(let c=r-1;c>=t&&!he("images")?.[c].doublePage;c--)he("images")?.[c].doublePage||i++;const a=he("images")?.[r].doublePage??!1,s=Y("viewMode")==="Book",l=!a&&(s?i%2===0:i%2===1),d=!a&&(s?i%2===1:i%2===0);return ne`
      <div
        id="Page${r}"
        class="${Et({MangaPage:!0,hide:!!he("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:d&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${V("BOOKMARK")}"
            @click=${p1}
            value="${r}"
          >
            ${Ao()?l9:s9}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${V("ZOOM_IN")}"
            @click=${D8}
            value="${r}"
          >
            ${m9}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${V("ZOOM_RESET")}"
            @click=${z8}
            value="${r}"
          >
            ${p9}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${V("ZOOM_OUT")}"
            @click=${B8}
            value="${r}"
          >
            ${g9}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${V("ZOOM_HEIGHT")}"
            @click=${H8}
            value="${r}"
          >
            ${i9}
          </button>
          ${Y("viewMode").match(/^(Book|Manga)$/)?ne`
            <button
              class="DoublePage PageButton"
              title="${V("DOUBLE_PAGE")}"
              @click=${()=>{dr(r,c=>({doublePage:!c.doublePage}))}}
              value="${r}"
            >
              ${f9}
            </button>`:ne`
              <button
                class="ZoomWidth PageButton"
                title="${V("ZOOM_WIDTH")}"
                @click=${N8}
                value="${r}"
              >
                ${a9}
              </button>`}
          <button
            class="Hide PageButton"
            title="${V("HIDE")}"
            @click=${P8}
            value="${r}"
          >
            ${he("images")?.[r].hide?d9:u9}
          </button>
          <button
            class="Reload PageButton"
            title="${V("RELOAD")}"
            @click=${L8}
            value="${r}"
          >
            ${h9}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Et({PageImg:!0,imgBroken:he("images")?.[r]?.status==="error"})}"
            src=${he("images")?.[r]?.src??Ne}
            style="${Kr(F8(r))}"
            @load=${R8}
            @error=${$8}
            ${il(he("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?V("END"):`${r} / ${e}`} ]
      </div>
    `}),W8=e=>ne`
  <main
    id="Chapter"
    ${il(he("chapter"))}
    class="${Et({fitWidthIfOversize:Y("fitWidthIfOversize"),[Y("viewMode")]:!0,separator:Y("viewMode")==="Vertical"})}"
    @wheel=${t=>{Y("viewMode")==="FluidLTR"?b1(t):Y("viewMode")==="FluidRTL"&&U7(t)}}
  >
    ${G8(e.pages,e.begin??0)}
  </main>
`,U8=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",V8="@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}.animate-spin-reverse{-webkit-animation:1s linear infinite spin-reverse;animation:1s linear infinite spin-reverse}",Z8="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",j8="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",q8="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",K8='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',Y8="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",X8=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",J8=kt`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Ee(es(hl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Ee(es(fl))}');
  }

  ${Ee(X8)}
  ${Ee(Y8)}
  ${Ee(U8)}
  ${Ee(K8)}
  ${Ee(j8)}
  ${Ee(Z8)}
  ${Ee(q8)}
  ${Ee(m1)}
  ${Ee(V8)}
`,Q8=(e="#MangaOnlineViewer",t=Y("theme"))=>{const r=qh(t),i=Wo(t),a=Y("colorScheme")==="dark"?r[8]:r[2],s=Wo(a);return kt`
    :where(:root),
    ${Ee(e)}, .dark,
    ${Ee(e)}.dark {
      --theme-primary-color: ${Ee(t)};;
      --theme-primary-text-color: ${Ee(i)};;
      --theme-secondary-color: ${Ee(a)};;
      --theme-secondary-text-color: ${Ee(s)};;

      color-scheme: dark;
      --theme-body-background: ${Ee(Ct.dark[600])};;
      --theme-body-text-color: ${Ee(Ct.dark[50])};;
      --theme-text-color: ${Ee(Ct.dark[50])};;
      --theme-background-color: ${Ee(Ct.dark[600])};;
      --theme-hightlight-color: ${Ee(Ct.dark[500])};;
      --theme-border-color: ${Ee(Ct.dark[400])};;

      --mov-color-fill-quiet: ${Ee(r[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Ee(r[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Ee(r[8])};;
      --mov-color-border-normal: ${Ee(r[7])};;
      --mov-color-border-loud: ${Ee(r[6])};;
      --mov-color-on-quiet: ${Ee(r[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Ee(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Ee(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Ee(Ct.gray[50])};;
      --theme-body-text-color: ${Ee(Ct.gray[900])};;
      --theme-text-color: ${Ee(Ct.gray[900])};;
      --theme-background-color: ${Ee(Ct.gray[50])};;
      --theme-hightlight-color: ${Ee(Ct.gray[500])};;
      --theme-border-color: ${Ee(Ct.gray[100])};;

      --mov-color-fill-quiet: ${Ee(r[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Ee(r[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Ee(r[1])};;
      --mov-color-border-normal: ${Ee(r[2])};;
      --mov-color-border-loud: ${Ee(r[4])};;
      --mov-color-on-quiet: ${Ee(r[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Ee(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},ew="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Bn=class extends tt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Ee(ew)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ne`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${V("STARTING")}</span>
        <div style="padding: 1rem;">${V("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Ct.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Ct.green[700]}; --mov-color-on-loud: white;"
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
        ${V("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=r=>{this.beginPage=r.detail.value[0],this.endPage=r.detail.value[1]};return ne`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${V("STARTING")}</span>
        <div style="padding: 1rem;">
          ${V("CHOOSE_BEGINNING")}
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
            style="--mov-color-fill-loud: ${Ct.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${Ct.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};D([K({type:Number,reflect:!0})],Bn.prototype,"mangaPages",void 0),D([K({type:Number,reflect:!0})],Bn.prototype,"begin",void 0),D([K({type:Number})],Bn.prototype,"timeoutMs",void 0),D([K({type:String,reflect:!0})],Bn.prototype,"status",void 0),D([Nt()],Bn.prototype,"beginPage",void 0),D([Nt()],Bn.prototype,"endPage",void 0),Bn=D([st("script-startup")],Bn);function tw(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var rw=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},nw=(...e)=>{e?.forEach(rw),e?.forEach(tw)};function ow(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x1,ns=class extends tt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[kt``,Ee(J8)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(nw(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),Re("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),I8(),S8()}render(){const t=he("manga"),r=he("dialog");return ne`
      <style>
        ${Q8()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Et({[Y("colorScheme")]:!0,hideControls:Y("hidePageControls"),bookmarked:!!Ao(),[he("device")]:!0})}"
        style="${Kr({[`padding-${Y("navbar")}`]:"34px"})}"
        .locale="${Y("locale")}"
      >
        ${t?ne` <reader-header .manga=${t}></reader-header>
              ${W8(t)}
              <navbar-thumbnails .mode=${Y("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${Y("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${he("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:ne(x1||(x1=ow([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?ne`
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
    `}};D([K({type:String,reflect:!0})],ns.prototype,"loadMode",void 0),D([K({type:Object})],ns.prototype,"manga",void 0),ns=D([st("manga-online-viewer"),(0,jo.useStores)(Ot,Eo,tr)],ns);var iw=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,aw="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;-webkit-transform:rotate(3deg)translateY(-4px);-ms-transform:rotate(3deg)translateY(-4px);transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;-webkit-animation:.4s linear infinite nprogress-spinner;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",sw="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",lw=[iw,aw,sw].join(`
`);async function cw([e,t]){ke(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Ao()??t.begin??1,t.before!==void 0&&(jt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=q4("externals",lw),Cp(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??Y("loadMode"),r.manga=t,document.body.appendChild(r),ke("Viewer Ready",r)}).catch(r=>ke("Define WebComponent failed",r))}async function dw(e){ke(`Starting ${js.script.name} ${js.script.version} on ${oa()} ${Ep()} with ${Mp()}`),ke(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));ke(t.length,"Found sites:",t);const r=t.map(async i=>{ke(`Testing site: ${i.name}`),await Em(i),jt(i.name,"Passed");const a=await i.run();if(jt("Processed site:",i,a),a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{const i=await Promise.any(r);jt("Going with",i[0].name),cw(i)}catch(i){if(i instanceof AggregateError){ke("All sites failed to run:");for(const a of i.errors)ke(a.message)}else ke("An unexpected error occurred:",i)}}dw(km).catch(ke)})();
