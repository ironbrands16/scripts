/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-11-25; 8242; SRI-version; v8) */

!function(u,e,t){try{var n="sa_loaded";if(!u||!0===u[n])return;u[n]=!0;var p="https:",r="error",i=u.console,a="doNotTrack",l=u.navigator,f=u.location,h=f.hostname,d=u.document,o=l.userAgent,c="Not sending request ",g=!1,s=encodeURIComponent,m=decodeURIComponent,v=JSON.stringify,y=u.addEventListener,w="https://"+t,_=undefined,b=d.documentElement||{},E="language",O="Height",x="scroll",A="true",S=l.userAgentData,M=x+O,T="offset"+O,D="client"+O,$="pagehide",q="platform",B="platformVersion",C=/(bot|spider|crawl)/i.test(o)&&!/(cubot)/i.test(o),H=u.screen,P=l.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||C,R={version:"custom_events_8",ua:o};P&&(R.bot=!0),R.sri=!1,S&&(R.mobile=S.mobile,R.brands=v(S.brands));var j=function(e){i&&i.warn&&i.warn("Simple Analytics:",e)},k=Date.now,I=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},V=function(e){return"function"==typeof e},N=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},U=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},z=function(t,e){t=N(R,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=w+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=_}).map(function(e){return s(e)+"="+s(t[e])}).join("&")+"&time="+Date.now()},L=function(e){e=e.message||e,j(e),z({type:r,error:e,url:ee+f.pathname})};y(r,function(e){e.filename&&-1<e.filename.indexOf(t)&&L(e.message)},!1);var W,F="pushState",G=u.dispatchEvent,J=k(),Y=0;try{W=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(qe){}var Z=d.currentScript||d.querySelector('script[src*="'+t+'"]'),K=function(e,t){return e&&e.getAttribute("data-"+t)},Q=e.mode||K(Z,"mode"),X=!!($e=e.collectDnt)===$e?e.collectDnt:K(Z,"ignore-dnt")==A||K(Z,"skip-dnt")==A||K(Z,"collect-dnt")==A,ee=e.hostname||K(Z,"hostname")||h,te=!("false"==K(Z,"auto-collect")||!1===e.autoCollect),ne=e.saGlobal||K(Z,"sa-global")||"sa",re=e.ignorePages||K(Z,"ignore-pages"),ie=Array.isArray(re)?re:"string"==typeof re&&re.length?re.split(/, ?/):[];if(R.hostname=ee,d.doctype||j("Add DOCTYPE html for more accurate dimensions"),ee!==h&&(R.hostname_original=h),!X&&a in l&&"1"==l[a])return j(c+"when "+a+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return j(c+"from "+h);var ae,oe,ce={},se=I(),ue=(d.referrer||"").replace(h,ee).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||_,pe="(utm_)?",le={source:U(pe+"source|ref"),medium:U(pe+"medium"),campaign:U(pe+"campaign"),term:U(pe+"term"),content:U(pe+"content"),referrer:ue},fe=0,he="sendBeacon",de=function(e,t){var n={type:"append",original_id:t?e:se};n.duration=Math.round((k()-J-fe)/1e3),fe=0,J=k(),n.scrolled=Math.max(0,Y,me()),!t&&he in l?l[he](w+"/append",v(N(R,n))):z(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+$ in u||de(),oe=k()):fe+=k()-oe},!1),y($,de,!1);var ge=d.body||{},me=function(){try{var e=b[D]||0,t=Math.max(ge[M]||0,ge[T]||0,b[D]||0,b[M]||0,b[T]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/t/5))}catch(n){return 0}};y("load",function(){Y=me(),y(x,function(){Y<me()&&(Y=me())},!1)});var ve=function(e){var t="";try{t=e||m(f.pathname)}catch(qe){}if(!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==Q&&f.hash&&(t+=f.hash.split("?")[0]),t;j(c+"because "+t+" is ignored")},ye=function(e,t){var n=ve(t);if(n&&ae!=n){var r={path:ae=n,viewport_width:Math.max(b.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(b[D]||0,u.innerHeight||0)||null};l[E]&&(r[E]=l[E]),H&&(r.screen_width=H.width,r.screen_height=H.height);var i=u.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!ue&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,ce=r;var s=function(){g=!0,function(e,t,n){e&&de(""+se,!0),se=I(),ce.id=se;var r=ee+ve();z(N(ce,t?{referrer:n?ue:null}:le,{https:f.protocol==p,timezone:W,type:"pageview"})),ue=r}(e,e||o,c)};if(g)s();else try{S&&V(S.getHighEntropyValues)?S.getHighEntropyValues([q,B]).then(function(e){R.os_name=e[q],R.os_version=e[B],s()})["catch"](s):s()}catch(qe){s()}}},we=u.history,_e=we?we.pushState:_;te&&_e&&Event&&G&&(we.pushState=(De=we[Te=F],function(){var e,t=arguments,n=De.apply(this,t);return"function"==typeof Event?e=new Event(Te):(e=d.createEvent("Event")).initEvent(Te,!0,!0),e.arguments=t,G(e),n}),y(F,function(){ye(1)},!1),y("popstate",function(){ye(1)},!1)),te&&"hash"==Q&&"onhashchange"in u&&y("hashchange",function(){ye(1)},!1),te?ye():u.sa_pageview=function(e){ye(0,e)};var be=I(),Ee=["string","number"],Oe=function(e,t){var n=V(e),r=V(t)?t:function(){};if(Ee.indexOf(typeof e)<0&&!n)return j("event is not a string: "+e),r();try{if(n&&(e=e(),Ee.indexOf(typeof e)<0))return j("event function output is not a string: "+e),r()}catch(i){return j("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&z(N(le,P?{bot:!0}:{},{type:"event",event:e,page_id:ce.id,session_id:be}),r)},xe=function(e,t){Oe(e,t)};u[ne]||(u[ne]=xe);var Ae=u[ne],Se=Ae&&Ae.q?Ae.q:[];for(var Me in u[ne]=xe,Se)Object.prototype.hasOwnProperty.call(Se,Me)&&(Array.isArray(Se[Me])?Oe.apply(null,Se[Me]):Oe(Se[Me]))}catch(qe){L(qe)}var Te,De,$e}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=e.js.map