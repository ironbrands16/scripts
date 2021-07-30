/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-07-30; fae9; v7) */

!function(u,e,t,n){try{var r=n+"_loaded";if(!u||!0===u[r])return;u[r]=!0;var p="https:",i="error",a=u.console,o="doNotTrack",l=u.navigator,f=u.location,h=f.hostname,d=u.document,c=l.userAgent,s="Not sending request ",g=!1,m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=u.addEventListener,_="https://"+t,b=undefined,E=d.documentElement||{},x="language",O="Height",A="scroll",S="true",M=l.userAgentData,T=A+O,D="offset"+O,$="client"+O,q="pagehide",B="platform",C="platformVersion",H=/(bot|spider|crawl)/i.test(c)&&!/(cubot)/i.test(c),R=u.screen,k=l.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||H,I={version:"custom_app_7",ua:c};k&&(I.bot=!0),I.sri=!0,M&&(I.mobile=M.mobile,I.brands=y(M.brands));var P=function(e){a&&a.warn&&a.warn("Simple Analytics:",e)},V=Date.now,j=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},N=function(e){return"function"==typeof e},U=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},z=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},L=function(t,e){t=U(I,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return m(e)+"="+m(t[e])}).join("&")+"&time="+Date.now()},W=function(e){e=e.message||e,P(e),L({type:i,error:e,url:te+f.pathname})};w(i,function(e){e.filename&&-1<e.filename.indexOf(t)&&W(e.message)},!1);var F,G="pushState",J=u.dispatchEvent,Y=V(),Z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Be){}var K=d.currentScript||d.querySelector('script[src*="'+t+'"]'),Q=function(e,t){return e&&e.getAttribute("data-"+t)},X=e.mode||Q(K,"mode"),ee=!!(qe=e.collectDnt)===qe?e.collectDnt:Q(K,"ignore-dnt")==S||Q(K,"skip-dnt")==S||Q(K,"collect-dnt")==S,te=e.hostname||Q(K,"hostname")||h,ne=!("false"==Q(K,"auto-collect")||!1===e.autoCollect),re=e.saGlobal||Q(K,"sa-global")||n,ie=e.ignorePages||Q(K,"ignore-pages"),ae=Array.isArray(ie)?ie:"string"==typeof ie&&ie.length?ie.split(/, ?/):[];if(I.hostname=te,d.doctype||P("Add DOCTYPE html for more accurate dimensions"),te!==h&&(I.hostname_original=h),!ee&&o in l&&"1"==l[o])return P(s+"when "+o+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return P(s+"from "+h);var oe,ce,se={},ue=j(),pe=(d.referrer||"").replace(h,te).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,le="(utm_)?",fe={source:z(le+"source|ref"),medium:z(le+"medium"),campaign:z(le+"campaign"),term:z(le+"term"),content:z(le+"content"),referrer:pe},he=0,de="sendBeacon",ge=function(e,t){var n={type:"append",original_id:t?e:ue};n.duration=Math.round((V()-Y-he)/1e3),he=0,Y=V(),n.scrolled=Math.max(0,Z,ve()),!t&&de in l?l[de](_+"/append",y(U(I,n))):L(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+q in u||ge(),ce=V()):he+=V()-ce},!1),w(q,ge,!1);var me=d.body||{},ve=function(){try{var e=E[$]||0,t=Math.max(me[T]||0,me[D]||0,E[$]||0,E[T]||0,E[D]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Z=ve(),w(A,function(){Z<ve()&&(Z=ve())},!1)});var ye=function(e){var t="";try{t=e||v(f.pathname)}catch(Be){}if(!function(e){for(var t in ae){var n=ae[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==X&&f.hash&&(t+=f.hash.split("?")[0]),t;P(s+"because "+t+" is ignored")},we=function(e,t){var n=ye(t);if(n&&oe!=n){var r={path:oe=n,viewport_width:Math.max(E.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(E[$]||0,u.innerHeight||0)||null};l[x]&&(r[x]=l[x]),R&&(r.screen_width=R.width,r.screen_height=R.height);var i=u.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!pe&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,se=r;var s=function(){g=!0,function(e,t,n){e&&ge(""+ue,!0),ue=j(),se.id=ue;var r=te+ye();L(U(se,t?{referrer:n?pe:null}:fe,{https:f.protocol==p,timezone:F,type:"pageview"})),pe=r}(e,e||o,c)};if(g)s();else try{M&&N(M.getHighEntropyValues)?M.getHighEntropyValues([B,C]).then(function(e){I.os_name=e[B],I.os_version=e[C],s()})["catch"](s):s()}catch(Be){s()}}},_e=u.history,be=_e?_e.pushState:b;ne&&be&&Event&&J&&(_e.pushState=($e=_e[De=G],function(){var e,t=arguments,n=$e.apply(this,t);return"function"==typeof Event?e=new Event(De):(e=d.createEvent("Event")).initEvent(De,!0,!0),e.arguments=t,J(e),n}),w(G,function(){we(1)},!1),w("popstate",function(){we(1)},!1)),ne&&"hash"==X&&"onhashchange"in u&&w("hashchange",function(){we(1)},!1),ne?we():u.sa_pageview=function(e){we(0,e)};var Ee=j(),xe=["string","number"],Oe=function(e,t){var n=N(e),r=N(t)?t:function(){};if(xe.indexOf(typeof e)<0&&!n)return P("event is not a string: "+e),r();try{if(n&&(e=e(),xe.indexOf(typeof e)<0))return P("event function output is not a string: "+e),r()}catch(i){return P("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&L(U(fe,k?{bot:!0}:{},{type:"event",event:e,page_id:se.id,session_id:Ee}),r)},Ae=function(e,t){Oe(e,t)};u[re]||(u[re]=Ae);var Se=u[re],Me=Se&&Se.q?Se.q:[];for(var Te in u[re]=Ae,Me)Array.isArray(Me[Te])?Oe.apply(null,Me[Te]):Oe(Me[Te])}catch(Be){W(Be)}var De,$e,qe}(window,{},"<!--# echo var="http_host" default="" -->","sa_event");
//# sourceMappingURL=app.js.map