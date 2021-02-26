/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-02-26; 86df) */

!function(u,e,t){var r,i,n;if(u)try{var p="https:",a="error",o=u.console,c="doNotTrack",f=u.navigator,l=u.location,h=l.hostname,d=u.document,s=f.userAgent,g="Not sending request ",m=!1,v=encodeURIComponent,y=decodeURIComponent,w=JSON.stringify,_=u.addEventListener,b="https://queue."+t,E=undefined,O=d.documentElement||{},x="language",A="Height",M="scroll",S=f.userAgentData,T=M+A,q="offset"+A,D="client"+A,$="pagehide",B="platform",C="platformVersion",R=/(bot|spider|crawl)/i.test(s)&&!/(cubot)/i.test(s),k=u.screen,H=f.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||R,I={version:"cdn_latest_6",ua:s};H&&(I.bot=!0),S&&(I.mobile=S.mobile,I.brands=w(S.brands));var P=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},V=Date.now,j=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},N=function(e){return"function"==typeof e},U=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},z=function(e){var t=l.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},L=function(t,e){t=U(I,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=b+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=E}).map(function(e){return v(e)+"="+v(t[e])}).join("&")},W=function(e){e=e.message||e,P(e),L({type:a,error:e,url:te+l.pathname})};_(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&W(e.message)},!1);var F,G="pushState",J=u.dispatchEvent,Y=V(),Z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(qe){}var K=d.querySelector('script[src*="'+t+'"]'),Q=function(e,t){return e&&e.getAttribute("data-"+t)},X=e.mode||Q(K,"mode"),ee=!!(n=e.collectDnt)===n?e.collectDnt:"true"==Q(K,"ignore-dnt")||"true"==Q(K,"skip-dnt"),te=e.hostname||Q(K,"hostname")||h,ne=!("false"==Q(K,"auto-collect")||!1===e.autoCollect),re=e.saGlobal||Q(K,"sa-global")||"sa_event",ie=e.ignorePages||Q(K,"ignore-pages"),ae=Array.isArray(ie)?ie:"string"==typeof ie&&ie.length?ie.split(/, ?/):[];if(I.hostname=te,d.doctype||P("Add DOCTYPE html for more accurate dimensions"),te!==h&&(I.hostname_original=h),!ee&&c in f&&"1"==f[c])return P(g+"when "+c+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return P(g+"from "+h);var oe,ce,se={},ue=j(),pe=(d.referrer||"").replace(h,te).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,fe="(utm_)?",le={source:z(fe+"source|ref"),medium:z(fe+"medium"),campaign:z(fe+"campaign"),term:z(fe+"term"),content:z(fe+"content"),referrer:pe},he=0,de="sendBeacon",ge=function(e,t){var n={type:"append",original_id:t?e:ue};n.duration=Math.round((V()-Y-he)/1e3),he=0,Y=V(),n.scrolled=Math.max(0,Z,ve()),!t&&de in f?f[de](b+"/append",w(U(I,n))):L(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+$ in u||ge(),ce=V()):he+=V()-ce},!1),_($,ge,!1);var me=d.body||{},ve=function(){try{var e=O[D]||0,t=Math.max(me[T]||0,me[q]||0,O[D]||0,O[T]||0,O[q]||0);return Math.min(100,5*Math.round(100*((O.scrollTop||0)+e)/t/5))}catch(n){return 0}};_("load",function(){Z=ve(),_(M,function(){Z<ve()&&(Z=ve())},!1)});var ye=function(e){var t="";try{t=e||y(l.pathname)}catch(qe){}if(!function(e){for(var t in ae){var n=ae[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==X&&l.hash&&(t+=l.hash.split("?")[0]),t;P(g+"because "+t+" is ignored")},we=function(e,t){var n=ye(t);if(n&&oe!=n){var r={path:oe=n,viewport_width:Math.max(O.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(O[D]||0,u.innerHeight||0)||null};f[x]&&(r[x]=f[x]),k&&(r.screen_width=k.width,r.screen_height=k.height);var i=u.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!pe&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,se=r;var s=function(){m=!0,function(e,t,n){e&&ge(""+ue,!0),ue=j(),se.id=ue;var r=te+ye();L(U(se,t?{referrer:n?pe:null}:le,{https:l.protocol==p,timezone:F,type:"pageview"})),pe=r}(e,e||o,c)};if(m)s();else try{S&&N(S.getHighEntropyValues)?S.getHighEntropyValues([B,C]).then(function(e){I.os_name=e[B],I.os_version=e[C],s()})["catch"](s):s()}catch(qe){s()}}},_e=u.history,be=_e?_e.pushState:E;ne&&be&&Event&&J&&(_e.pushState=(i=_e[r=G],function(){var e,t=arguments,n=i.apply(this,t);return"function"==typeof Event?e=new Event(r):(e=d.createEvent("Event")).initEvent(r,!0,!0),e.arguments=t,J(e),n}),_(G,function(){we(1)},!1),_("popstate",function(){we(1)},!1)),ne&&"hash"==X&&"onhashchange"in u&&_("hashchange",function(){we(1)},!1),ne?we():u.sa_pageview=function(e){we(0,e)};var Ee=j(),Oe=["string","number"],xe=function(e,t){var n=N(e),r=N(t)?t:function(){};if(Oe.indexOf(typeof e)<0&&!n)return P("event is not a string: "+e),r();try{if(n&&(e=e(),Oe.indexOf(typeof e)<0))return P("event function output is not a string: "+e),r()}catch(i){return P("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&L(U(le,H?{bot:!0}:{},{type:"event",event:e,page_id:se.id,session_id:Ee}),r)},Ae=function(e,t){xe(e,t)};u[re]||(u[re]=Ae);var Me=u[re],Se=Me&&Me.q?Me.q:[];for(var Te in u[re]=Ae,Se)xe(Se[Te])}catch(qe){W(qe)}}(window,{},"simpleanalyticscdn.com");
//# sourceMappingURL=latest.js.map