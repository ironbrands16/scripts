/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-11-25; 03cc; v8) */

!function(u,e,t,n){try{var r=n+"_loaded";if(!u||!0===u[r])return;u[r]=!0;var p="https:",a="error",i=u.console,o="doNotTrack",l=u.navigator,f=u.location,h=f.hostname,d=u.document,c=l.userAgent,s="Not sending request ",m=!1,g=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=u.addEventListener,_="https://queue."+t,b=undefined,E=d.documentElement||{},O="language",x="Height",A="scroll",S="true",M=l.userAgentData,T=A+x,D="offset"+x,q="client"+x,$="pagehide",B="platform",C="platformVersion",P=/(bot|spider|crawl)/i.test(c)&&!/(cubot)/i.test(c),R=u.screen,j=l.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||P,k={version:"cdn_latest_8",ua:c};j&&(k.bot=!0),k.sri=!1,M&&(k.mobile=M.mobile,k.brands=y(M.brands));var H=function(e){i&&i.warn&&i.warn("Simple Analytics:",e)},I=Date.now,V=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},N=function(e){return"function"==typeof e},U=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},z=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},L=function(t,e){t=U(k,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return g(e)+"="+g(t[e])}).join("&")+"&time="+Date.now()},W=function(e){e=e.message||e,H(e),L({type:a,error:e,url:te+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&W(e.message)},!1);var F,G="pushState",J=u.dispatchEvent,Y=I(),Z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Be){}var K=d.currentScript||d.querySelector('script[src*="'+t+'"]'),Q=function(e,t){return e&&e.getAttribute("data-"+t)},X=e.mode||Q(K,"mode"),ee=!!($e=e.collectDnt)===$e?e.collectDnt:Q(K,"ignore-dnt")==S||Q(K,"skip-dnt")==S||Q(K,"collect-dnt")==S,te=e.hostname||Q(K,"hostname")||h,ne=!("false"==Q(K,"auto-collect")||!1===e.autoCollect),re=e.saGlobal||Q(K,"sa-global")||n,ae=e.ignorePages||Q(K,"ignore-pages"),ie=Array.isArray(ae)?ae:"string"==typeof ae&&ae.length?ae.split(/, ?/):[];if(k.hostname=te,d.doctype||H("Add DOCTYPE html for more accurate dimensions"),te!==h&&(k.hostname_original=h),!ee&&o in l&&"1"==l[o])return H(s+"when "+o+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return H(s+"from "+h);var oe,ce,se={},ue=V(),pe=(d.referrer||"").replace(h,te).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,le="(utm_)?",fe={source:z(le+"source|ref"),medium:z(le+"medium"),campaign:z(le+"campaign"),term:z(le+"term"),content:z(le+"content"),referrer:pe},he=0,de="sendBeacon",me=function(e,t){var n={type:"append",original_id:t?e:ue};n.duration=Math.round((I()-Y-he)/1e3),he=0,Y=I(),n.scrolled=Math.max(0,Z,ve()),!t&&de in l?l[de](_+"/append",y(U(k,n))):L(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+$ in u||me(),ce=I()):he+=I()-ce},!1),w($,me,!1);var ge=d.body||{},ve=function(){try{var e=E[q]||0,t=Math.max(ge[T]||0,ge[D]||0,E[q]||0,E[T]||0,E[D]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Z=ve(),w(A,function(){Z<ve()&&(Z=ve())},!1)});var ye=function(e){var t="";try{t=e||v(f.pathname)}catch(Be){}if(!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(a){return!1}}}return!1}(t))return"hash"==X&&f.hash&&(t+=f.hash.split("?")[0]),t;H(s+"because "+t+" is ignored")},we=function(e,t){var n=ye(t);if(n&&oe!=n){var r={path:oe=n,viewport_width:Math.max(E.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(E[q]||0,u.innerHeight||0)||null};l[O]&&(r[O]=l[O]),R&&(r.screen_width=R.width,r.screen_height=R.height);var a=u.performance,i="navigation",o=a&&a.getEntriesByType&&a.getEntriesByType(i)[0]&&a.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(a.getEntriesByType(i)[0].type):a&&a[i]&&-1<[1,2].indexOf(a[i].type),c=!!pe&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,se=r;var s=function(){m=!0,function(e,t,n){e&&me(""+ue,!0),ue=V(),se.id=ue;var r=te+ye();L(U(se,t?{referrer:n?pe:null}:fe,{https:f.protocol==p,timezone:F,type:"pageview"})),pe=r}(e,e||o,c)};if(m)s();else try{M&&N(M.getHighEntropyValues)?M.getHighEntropyValues([B,C]).then(function(e){k.os_name=e[B],k.os_version=e[C],s()})["catch"](s):s()}catch(Be){s()}}},_e=u.history,be=_e?_e.pushState:b;ne&&be&&Event&&J&&(_e.pushState=(qe=_e[De=G],function(){var e,t=arguments,n=qe.apply(this,t);return"function"==typeof Event?e=new Event(De):(e=d.createEvent("Event")).initEvent(De,!0,!0),e.arguments=t,J(e),n}),w(G,function(){we(1)},!1),w("popstate",function(){we(1)},!1)),ne&&"hash"==X&&"onhashchange"in u&&w("hashchange",function(){we(1)},!1),ne?we():u.sa_pageview=function(e){we(0,e)};var Ee=V(),Oe=["string","number"],xe=function(e,t){var n=N(e),r=N(t)?t:function(){};if(Oe.indexOf(typeof e)<0&&!n)return H("event is not a string: "+e),r();try{if(n&&(e=e(),Oe.indexOf(typeof e)<0))return H("event function output is not a string: "+e),r()}catch(a){return H("in your event function: "+a.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&L(U(fe,j?{bot:!0}:{},{type:"event",event:e,page_id:se.id,session_id:Ee}),r)},Ae=function(e,t){xe(e,t)};u[re]||(u[re]=Ae);var Se=u[re],Me=Se&&Se.q?Se.q:[];for(var Te in u[re]=Ae,Me)Object.prototype.hasOwnProperty.call(Me,Te)&&(Array.isArray(Me[Te])?xe.apply(null,Me[Te]):xe(Me[Te]))}catch(Be){W(Be)}var De,qe,$e}(window,{},"simpleanalyticscdn.com","sa_event");
//# sourceMappingURL=latest.js.map