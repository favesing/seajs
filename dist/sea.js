/*
 SeaJS - A Module Loader for the Web
 v2.0.0-dev | seajs.org | MIT Licensed
*/
'use strict';(function(q,u){function F(a){return"[object String]"===G.call(a)}function A(a){return"[object Function]"===G.call(a)}function H(a){var b={};m(a,function(a){b[a]=1});return N(b)}function x(){if("undefined"!==typeof l){var a=Array.prototype.slice.call(arguments),b="log";l[a[a.length-1]]&&(b=a.pop());if("log"!==b||g.debug)if(l[b].apply)l[b].apply(l,a);else{var c=a.length;if(1===c)l[b](a[0]);else if(2===c)l[b](a[0],a[1]);else if(3===c)l[b](a[0],a[1],a[2]);else l[b](a.join(" "))}}}function I(a){a=
a.match(ea);return(a?a[0]:".")+"/"}function O(a){J.lastIndex=0;J.test(a)&&(a=a.replace(J,"$1/"));if(-1===a.indexOf("."))return a;for(var b=a.split("/"),c=[],f,h=0;h<b.length;h++)if(f=b[h],".."===f){if(0===c.length)throw Error("The path is invalid: "+a);c.pop()}else"."!==f&&c.push(f);return c.join("/")}function P(a,b){if(!a)return"";var c=a,f=j.alias,h;if(h=f)if(h=f.hasOwnProperty(c)){h=c;var g=h.charAt(0);h=-1===h.indexOf("://")&&"."!==g&&"/"!==g}h&&(c=f[c]);var e=j.vars;e&&-1<c.indexOf("{")&&(c=
c.replace(fa,function(a,b){return e.hasOwnProperty(b)?e[b]:b}));f=b||r;K(c)||(0===c.indexOf("./")||0===c.indexOf("../")?(0===c.indexOf("./")&&(c=c.substring(2)),c=I(f)+c):c="/"===c.charAt(0)&&"/"!==c.charAt(1)?f.match(ga)[1]+c:j.base+"/"+c);c=O(c);"#"===c.charAt(c.length-1)?c=c.slice(0,-1):!ha.test(c)&&-1===c.indexOf("?")&&(c+=".js");var c=c.replace(":80/","/"),f=j.map||[],d=c;if(h=f.length){for(g=0;g<h&&!(d=f[g],d=A(d)?d(c):c.replace(d[0],d[1]),d!==c);g++);K(d)||(d=O(I(r)+d))}return d}function K(a){return 0<
a.indexOf("://")||0===a.indexOf("//")}function Q(a,b){var c;if(R)a.sheet&&(c=!0);else if(a.sheet)try{a.sheet.cssRules&&(c=!0)}catch(f){"NS_ERROR_DOM_SECURITY_ERR"===f.name&&(c=!0)}setTimeout(function(){c?b():Q(a,b)},1)}function ia(){}function ja(){if(B)return B;if(C&&"interactive"===C.readyState)return C;for(var a=y.getElementsByTagName("script"),b=0;b<a.length;b++){var c=a[b];if("interactive"===c.readyState)return C=c}}function t(a,b){this.uri=a;this.status=b||k.LOADING;this.dependencies=[];this.waitings=
[]}function v(a,b){if(F(a)){var c=g.emitData("resolve",{id:a,refUri:b},"id");return P(c,b)}return S(a,function(a){return v(a,b)})}function ka(a,b,c){var f=arguments.length;1===f?(c=a,a=u):2===f&&(c=b,b=u,T(a)&&(b=a,a=u));if(!T(b)&&A(c)){var f=c.toString(),h=[],d;U.lastIndex=0;for(f=f.replace(la,"");d=U.exec(f);)d[2]&&h.push(d[2]);b=H(h)}var f={id:a,dependencies:b,factory:c},e;!a&&document.attachEvent&&((h=ja())&&h.src?(e=h.hasAttribute?h.src:h.getAttribute("src",4),e=g.emitData("derived",{uri:e})):
x("Failed to derive URI from interactive script for:",c.toString(),"warn"));(e=a?v(a):e)?V(e,f):D=f}function V(a,b){var c=n[a]||(n[a]=new t(a));c.status<k.SAVED&&(c.id=b.id||a,c.dependencies=v(W(b.dependencies||[],function(a){return!!a}),a),c.factory=b.factory,c.status=k.SAVED);return c}function X(a){var b=j.preload.slice();j.preload=[];b.length?Y.use(b,a):a()}function Z(a){return W(a,function(a){return!n[a]||n[a].status<k.LOADED})}function $(a){var b=a.waitings;if(0===b.length)return!1;z.push(a.uri);
a=b.concat(z);if(a.length>H(a).length)return!0;for(a=0;a<b.length;a++)if($(n[b[a]]))return!0;z.pop();return!1}if(!q.seajs){var g={version:"2.0.0-dev"},j={debug:"",preload:[]},e=[],d={},G=d.toString,ma=d.hasOwnProperty,T=Array.isArray||function(a){return"[object Array]"===G.call(a)},m=e.forEach?function(a,b){a.forEach(b)}:function(a,b){for(var c=0,f=a.length;c<f;c++)b(a[c],c,a)},S=e.map?function(a,b){return a.map(b)}:function(a,b){var c=[];m(a,function(a,h,d){c.push(b(a,h,d))});return c},W=e.filter?
function(a,b){return a.filter(b)}:function(a,b){var c=[];m(a,function(a,h,d){b(a,h,d)&&c.push(a)});return c},N=Object.keys||function(a){for(var b in a)ma.apply(a,b);return[]},w={};g.on=function(a,b){if(!b)return this;(w[a]||(w[a]=[])).push(b);return this};g.off=function(a,b){if(!a&&!b)return w={},this;var c=w[a];if(c)if(b)for(var f=c.length-1;0<=f;f--)c[f]===b&&c.splice(f,1);else delete w[a];return this};g.emit=function(a){var b=w[a];if(!b)return this;for(var c=[],f=1,h=arguments.length;f<h;f++)c[f-
1]=arguments[f];b=b.slice();m(b,function(a){a.apply(q,c)});return this};g.emitData=function(a,b,c){this.emit(a,b);return b[c||N(b)[0]]};var l=q.console,ea=/[^?]*(?=\/.*$)/,J=/([^:\/])\/\/+/g,ha=/\.(?:css|js)|\/$/,ga=/^(.*?\w)(?:\/|$)/,fa=/{([^{}]+)}/g,d=q.location,e=d.protocol+"//"+d.host,d=d.pathname;"/"!==d.charAt(0)&&(d="/"+d);var r=e+d;0<r.indexOf("\\")&&(r=r.replace(/\\/g,"/"));var e=document,y=e.head||e.getElementsByTagName("head")[0]||e.documentElement,aa=y.getElementsByTagName("base")[0],
na=/\.css(?:\?|$)/i,oa=/loaded|complete|undefined/,B,C,e=navigator.userAgent,R=536>Number(e.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")),pa=0<e.indexOf("Firefox")&&!("onload"in document.createElement("link")),U=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,la=/\\\\/g,n={},L=[],k={LOADING:1,SAVED:2,LOADED:3,COMPILING:4,COMPILED:5};t.prototype.use=function(a,b){F(a)&&(a=[a]);var c=v(a,this.uri);this.load(c,
function(){X(function(){var a=S(c,function(a){return a?n[a].compile():null});b&&b.apply(null,a)})})};t.prototype.load=function(a,b,c){function f(a){a&&a.status<k.LOADED&&(a.status=k.LOADED);0===--h&&b()}c=c||{};a=c.filtered?a:Z(a);c=a.length;if(0===c)b();else{g.emit("load",a);for(var h=c,d=0;d<c;d++)(function(a){function b(){if(c.status<k.SAVED)return f();if($(c)){var a=z;a.push(a[0]);x("Found circular dependencies:",a.join(" --\x3e "));z.length=0;f(c)}a=c.waitings=Z(c.dependencies);if(0===a.length)return f(c);
t.prototype.load(a,function(){f(c)},{filtered:!0})}var c=n[a]||(n[a]=new t(a,void 0));if(c.status<k.SAVED){var h=function(){delete M[d];ba[d]=!0;D&&(V(a,D),D=null);var b,c=E[d];for(delete E[d];b=c.shift();)b()},d=g.emitData("fetch",{uri:a});if(ba[d])b();else if(M[d])E[d].push(b);else{M[d]=!0;E[d]=[b];var e=j.charset;if(!g.emitData("request",{uri:d,callback:h,charset:e},"requested")){var l=d,r=na.test(l),p=document.createElement(r?"link":"script");e&&(e=A(e)?e(l):e)&&(p.charset=e);var q=h||ia;if("SCRIPT"===
p.nodeName){var s=p;s.onload=s.onerror=s.onreadystatechange=function(){oa.test(s.readyState)&&(s.onload=s.onerror=s.onreadystatechange=null,s.parentNode&&!j.debug&&y.removeChild(s),s=u,q())}}else{var m=p;R||pa?(x("Start poll to fetch css"),setTimeout(function(){Q(m,q)},1)):m.onload=m.onerror=function(){m.onload=m.onerror=null;m=u;q()}}r?(p.rel="stylesheet",p.href=l):(p.async="async",p.src=l);B=p;aa?y.insertBefore(p,aa):y.appendChild(p);B=null}}}else b()})(a[d])}};t.prototype.compile=function(){function a(a){a=
v(a,b.uri);a=n[a];if(!a)return null;if(a.status===k.COMPILING)return a.exports;a.parent=b;return a.compile()}var b=this;if(b.status===k.COMPILED)return b.exports;g.emit("compile",b);if(b.status<k.SAVED&&!b.exports)return null;L.push(b);b.status=k.COMPILING;a.async=function(a,c){b.use(a,c)};a.resolve=function(a){return v(a,b.uri)};a.cache=n;b.require=a;b.exports=b.exports||{};var c=b.factory,d=c;A(c)&&(d=c(b.require,b.exports,b));d!==u&&(b.exports=d);b.status=k.COMPILED;L.pop();g.emit("compiled",b);
return b.exports};var M={},ba={},E={},D=null,z=[],Y=new t(r,k.COMPILED);g.use=function(a,b){X(function(){Y.use(a,b)});return g};g.cache=n;e=document.getElementById("seajsnode");e||(e=document.getElementsByTagName("script"),e=e[e.length-1]);var d=e&&(e.hasAttribute?e.src:e.getAttribute("src",4))||r,qa=d=I(d),ca=d.match(/^(.+\/)seajs\/[\.\d]+(?:-dev)?\/$/);ca&&(d=ca[1]);j.base=d;j.main=e&&e.getAttribute("data-main");j.charset="utf-8";g.config=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
j[b],d=a[b];if(c&&("alias"===b||"vars"===b))for(var e in d){if(d.hasOwnProperty(e)){var k=c[e],l=d[e];k&&k!==l&&x("The alias config is conflicted:","key =",'"'+e+'"',"previous =",'"'+k+'"',"current =",'"'+l+'"',"warn");c[e]=l}}else c&&("map"===b||"preload"===b)?(F(d)&&(d=[d]),m(d,function(a){a&&c.push(a)})):j[b]=d}if((a=j.base)&&!K(a))j.base=P(("/"===a.charAt(0)&&"/"!==a.charAt(1)?"":"./")+a+"/");g.debug=!!j.debug;return this};g.debug=!!j.debug;g.log=x;g.config({vars:{seajs:qa}});var e=m,da=[],d=
q.location.search,d=d.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),d=d+(" "+document.cookie);d.replace(/seajs-(\w+)=[1-9]/g,function(a,b){da.push(b)});d=H(da);e(d,function(a){g.use("{seajs}/plugin-"+a);"debug"===a&&(g._use=g.use,g._useArgs=[],g.use=function(){g._useArgs.push(arguments);return g})});q.define=ka;j.main&&g.use(j.main);g.pluginSDK={config:j,cachedModules:n,compilingStack:L,STATUS:k}}})(this);
