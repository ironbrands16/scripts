/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-03-29; 26dd; v9) */

!function(s,e,t,n){try{var r=n+"_loaded";if(!s||!0===s[r])return;s[r]=!0;var a="https:",i="error",o=s.console,c="doNotTrack",u=s.navigator,p=s.location,l=p.hostname,f=s.document,h=u.userAgent,d="Not sending request ",m=!1,g=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://"+t,b=undefined,E=f.documentElement||{},O="language",x="Height",S="scroll",A="true",B=u.userAgentData,M=S+x,T="offset"+x,D="client"+x,P="pagehide",$="platform",k="platformVersion",q="https://docs.simpleanalytics.com",C=/(bot|spider|crawl)/i.test(h)&&!/(cubot)/i.test(h),H=s.screen,R=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},j=Date.now,I=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},U=function(e){return"function"==typeof e},V=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N=function(e,t){var n=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),r=n?n.map(function(e){return e.split(/[?&=]/).slice(-2)}):[];if(r[0])return t?r[0]:r[0][1]},z=function(n,r){return ue(function(e){n=V(le,de,n),oe&&(n.params=y(oe.map(function(e){var t=N(e,!0);if(t)return{key:t[0],value:t[1]}}).filter(Boolean))),e&&(n.brave=!0);var t=new Image;r&&(t.onerror=r,t.onload=r),t.src=_+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=b}).map(function(e){return g(e)+"="+g(n[e])}).join("&")+"&time="+Date.now()})},L=function(e){e=e.message||e,R(e),z({type:i,error:e,url:te+p.pathname})};w(i,function(e){e.filename&&-1<e.filename.indexOf(t)&&L(e.message)},!1);var W,F="pushState",G=s.dispatchEvent,J=j(),Y=0;try{W=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Ce){}var Z=f.currentScript||f.querySelector('script[src*="'+t+'"]'),K=function(e,t){return e&&e.getAttribute("data-"+t)},Q=e.mode||K(Z,"mode"),X=!!(qe=e.collectDnt)===qe?e.collectDnt:K(Z,"ignore-dnt")==A||K(Z,"skip-dnt")==A||K(Z,"collect-dnt")==A,ee=e.hostname||K(Z,"hostname"),te=ee||l,ne=!("false"==K(Z,"auto-collect")||!1===e.autoCollect),re=function(e){return Array.isArray(e)?e:"string"==typeof e&&e.length?e.split(/, ?/):[]},ae=e.saGlobal||K(Z,"sa-global")||n,ie=re(e.ignorePages||K(Z,"ignore-pages")),oe=re(e.allowParams||K(Z,"allow-params")),ce=e.pathOverwriter||K(Z,"path-overwriter"),se=e.strictUtm||K(Z,"strict-utm")==A,ue=function(e){u.brave?u.brave.isBrave().then(function(){e(!0)})["catch"](function(){e(!1)}):e(!1)},pe=u.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||s.__polypane||C,le={version:"custom_proxy_9",ua:h,https:p.protocol==a,timezone:W,hostname:te,page_id:I(),session_id:I()};if(pe&&(le.bot=!0),le.sri=!1,B&&(le.mobile=B.mobile,le.brands=y(B.brands)),f.doctype||R("Add DOCTYPE html for more accurate dimensions"),te!==l&&(le.hostname_original=l),!X&&c in u&&"1"==u[c])return R(d+"when "+c+" is enabled. See "+q+"/dnt");-1!=l.indexOf(".")&&!/^[0-9.:]+$/.test(l)||ee||R("Set a hostname when sending data from "+l+". See "+q+"/overwrite-domain-name");var fe,he,de={},me=(f.referrer||"").replace(l,te).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,ge="(utm_)"+(se?"":"?"),ve={source:N(ge+"source"+(se?"":"|ref")),medium:N(ge+"medium"),campaign:N(ge+"campaign"),term:N(ge+"term"),content:N(ge+"content"),referrer:me},ye=0,we=function(e,t){var n={type:"append",original_id:t?e:le.page_id};n.duration=Math.round((j()-J-ye)/1e3),ye=0,J=j(),n.scrolled=Math.max(0,Y,be()),t||!u.sendBeacon?z(n):u.sendBeacon(_+"/append",y(V(le,n)))};s.addEventListener("visibilitychange",function(){f.hidden?("on"+P in s||we(),he=j()):ye+=j()-he},!1),w(P,we,!1);var _e=f.body||{},be=function(){try{var e=E[D]||0,t=Math.max(_e[M]||0,_e[T]||0,E[D]||0,E[M]||0,E[T]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Y=be(),w(S,function(){Y<be()&&(Y=be())},!1)});var Ee=function(e){var t="";try{t=e||v(p.pathname)}catch(Ce){}var n=s[ce];if(U(n)&&(t=n.call(s,t)),!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(a){return!1}}}return!1}(t))return"hash"==Q&&p.hash&&(t+=p.hash.split("?")[0]),t;R(d+"because "+t+" is ignored")},Oe=function(e,t){var n=Ee(t);if(n&&fe!=n){fe=n,de.path=n,de.viewport_width=Math.max(E.clientWidth||0,s.innerWidth||0)||null,de.viewport_height=Math.max(E[D]||0,s.innerHeight||0)||null,u[O]&&(de[O]=u[O]),H&&(de.screen_width=H.width,de.screen_height=H.height);var r=s.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type),o=!!me&&f.referrer.split("/")[2]==l;de.unique=!e&&!i&&!o;var c=function(){m=!0,function(e,t,n){e&&we(""+le.page_id,!0),le.page_id=I();var r=te+Ee();z(V(t?{referrer:n?me:null}:ve,{id:le.page_id,type:"pageview"})),me=r}(e,e||i,o)};if(m)c();else try{B&&U(B.getHighEntropyValues)?B.getHighEntropyValues([$,k]).then(function(e){le.os_name=e[$],le.os_version=e[k],c()})["catch"](c):c()}catch(Ce){c()}}},xe=s.history,Se=xe?xe.pushState:b;ne&&Se&&Event&&G&&(xe.pushState=(ke=xe[$e=F],function(){var e,t=arguments,n=ke.apply(this,t);return U(Event)?e=new Event($e):(e=f.createEvent("Event")).initEvent($e,!0,!0),e.arguments=t,G(e),n}),w(F,function(){Oe(1)},!1),w("popstate",function(){Oe(1)},!1)),ne&&"hash"==Q&&"onhashchange"in s&&w("hashchange",function(){Oe(1)},!1),ne?Oe():s.sa_pageview=function(e){Oe(0,e)};var Ae=["string","number"],Be=function(e,t){var n=U(e),r=U(t)?t:function(){};if(Ae.indexOf(typeof e)<0&&!n)return R("event is not a string: "+e),r();try{if(n&&(e=e(),Ae.indexOf(typeof e)<0))return R("event function output is not a string: "+e),r()}catch(a){return R("in your event function: "+a.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&z(V(ve,{type:"event",event:e}),r)},Me=function(e,t){Be(e,t)};s[ae]||(s[ae]=Me);var Te=s[ae],De=Te&&Te.q?Te.q:[];for(var Pe in s[ae]=Me,De)Object.prototype.hasOwnProperty.call(De,Pe)&&(Array.isArray(De[Pe])?Be.apply(null,De[Pe]):Be(De[Pe]))}catch(Ce){L(Ce)}var $e,ke,qe}(window,{},"<!--# echo var="proxy_hostname" default="" --><!--# echo var="proxy_path" default="/simple" -->","sa_event");
//# sourceMappingURL=proxy.js.map