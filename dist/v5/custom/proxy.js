/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-11-17; c610) */

!function(s,e,t){var r,i,n;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,h=f.hostname,l=s.document,d=p.userAgent,g="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://"+t,E=undefined,b=l.documentElement||{},x="language",O="Height",M="scroll",S=M+O,T="offset"+O,A="client"+O,$="pagehide",q=/(bot|spider|crawl)/i.test(d)&&!/(cubot)/i.test(d),B=s.screen,C=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||q,D={version:"custom_proxy_5"};C&&(D.bot=!0);var P=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},R=Date.now,k=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},I=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},j=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},F=function(t,e){t=I(D,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=E}).map(function(e){return m(e)+"="+m(t[e])}).join("&")},H=function(e){e=e.message||e,P(e),F({type:a,error:e,url:Z+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&H(e.message)},!1);var N,U="pushState",z=s.dispatchEvent,L=R(),W=0;try{N=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Oe){}var G=l.querySelector('script[src*="'+t+'"]'),J=function(e,t){return e&&e.getAttribute("data-"+t)},V=e.mode||J(G,"mode"),Y=!!(n=e.collectDnt)===n?e.collectDnt:"true"==J(G,"ignore-dnt")||"true"==J(G,"skip-dnt"),Z=e.hostname||J(G,"hostname")||h,K=!("false"==J(G,"auto-collect")||!1===e.autoCollect),Q=e.saGlobal||J(G,"sa-global")||"sa_event",X=e.ignorePages||J(G,"ignore-pages"),ee=Array.isArray(X)?X:"string"==typeof X&&X.length?X.split(/, ?/):[];if(D.hostname=Z,l.doctype||P("Add DOCTYPE html for more accurate dimensions"),Z!==h&&(D.hostname_original=h),!Y&&c in p&&"1"==p[c])return P(g+"when "+c+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return P(g+"from "+h);var te,ne,re={},ie=k(),ae=(l.referrer||"").replace(h,Z).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,oe="(utm_)?",ce={source:j(oe+"source|ref"),medium:j(oe+"medium"),campaign:j(oe+"campaign"),term:j(oe+"term"),content:j(oe+"content"),referrer:ae},se=0,ue="sendBeacon",pe=function(e,t){var n={type:"append",original_id:t?e:ie};n.duration=Math.round((R()-L-se)/1e3),se=0,L=R(),n.scrolled=Math.max(0,W,he()),!t&&ue in p?p[ue](_+"/append",y(I(D,n))):F(n)};s.addEventListener("visibilitychange",function(){l.hidden?("on"+$ in s||pe(),ne=R()):se+=R()-ne},!1),w($,pe,!1);var fe=l.body||{},he=function(){try{var e=b[A]||0,t=Math.max(fe[S]||0,fe[T]||0,b[A]||0,b[S]||0,b[T]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){W=he(),w(M,function(){W<he()&&(W=he())},!1)});var le=function(e){var t=e||v(f.pathname);if(!function(e){for(var t in ee){var n=ee[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==V&&f.hash&&(t+=f.hash.split("?")[0]),t;P(g+"because "+t+" is ignored")},de=function(e,t){var n,r,i,a,o,c=le(t);c&&te!=c&&(n={path:te=c,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[A]||0,s.innerHeight||0)||null},p[x]&&(n[x]=p[x]),B&&(n.screen_width=B.width,n.screen_height=B.height),i="navigation",a=(r=s.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!ae&&ae.split("/")[0]==Z,n.unique=!e&&!a&&!o,re=n,function(e,t,n){e&&pe(""+ie,!0),ie=k(),re.id=ie;var r=Z+le();F(I(re,t?{referrer:n?ae:null}:ce,{https:f.protocol==u,timezone:N,type:"pageview"})),ae=r}(e,e||a,o))},ge=s.history,me=ge?ge.pushState:E;K&&me&&Event&&z&&(ge.pushState=(i=ge[r=U],function(){var e,t=arguments,n=i.apply(this,t);return"function"==typeof Event?e=new Event(r):(e=l.createEvent("Event")).initEvent(r,!0,!0),e.arguments=t,z(e),n}),w(U,function(){de(1)},!1),w("popstate",function(){de(1)},!1)),K&&"hash"==V&&"onhashchange"in s&&w("hashchange",function(){de(1)},!1),K?de():s.sa_pageview=function(e){de(0,e)};var ve=k(),ye=["string","number"],we=function(e,t){var n=e instanceof Function,r=t instanceof Function?t:function(){};if(ye.indexOf(typeof e)<0&&!n)return P("event is not a string: "+e),r();try{if(n&&(e=e(),ye.indexOf(typeof e)<0))return P("event function output is not a string: "+e),r()}catch(i){return P("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&F(I(ce,C?{bot:!0}:{},{type:"event",event:e,page_id:re.id,session_id:ve}),r)},_e=function(e,t){we(e,t)};s[Q]||(s[Q]=_e);var Ee=s[Q],be=Ee&&Ee.q?Ee.q:[];for(var xe in s[Q]=_e,be)we(be[xe])}catch(Oe){H(Oe)}}(window,{},"<!--# echo var="proxy_hostname" default="" --><!--# echo var="proxy_path" default="/simple" -->");
//# sourceMappingURL=proxy.js.map