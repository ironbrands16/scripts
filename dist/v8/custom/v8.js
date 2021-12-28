/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-12-28; bd4e; SRI-version; v8) */

!function(s,e,t,n){try{var r=n+"_loaded";if(!s||!0===s[r])return;s[r]=!0;var i="https:",a="error",o=s.console,c="doNotTrack",u=s.navigator,p=s.location,l=p.hostname,f=s.document,h=u.userAgent,g="Not sending request ",d=!1,m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,_=s.addEventListener,w="https://"+t,b=undefined,E=f.documentElement||{},O="language",x="Height",A="scroll",S="true",M=u.userAgentData,T=A+x,D="offset"+x,P="client"+x,$="pagehide",q="platform",B="platformVersion",C=/(bot|spider|crawl)/i.test(h)&&!/(cubot)/i.test(h),H=s.screen,R=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},j=Date.now,k=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},I=function(e){return"function"==typeof e},V=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},N=function(e){var t=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},U=function(t,e){t=V(ae,se,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=w+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return m(e)+"="+m(t[e])}).join("&")+"&time="+Date.now()},z=function(e){e=e.message||e,R(e),U({type:a,error:e,url:X+p.pathname})};_(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&z(e.message)},!1);var L,W="pushState",F=s.dispatchEvent,G=j(),J=0;try{L=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Pe){}var Y=f.currentScript||f.querySelector('script[src*="'+t+'"]'),Z=function(e,t){return e&&e.getAttribute("data-"+t)},K=e.mode||Z(Y,"mode"),Q=!!(De=e.collectDnt)===De?e.collectDnt:Z(Y,"ignore-dnt")==S||Z(Y,"skip-dnt")==S||Z(Y,"collect-dnt")==S,X=e.hostname||Z(Y,"hostname")||l,ee=!("false"==Z(Y,"auto-collect")||!1===e.autoCollect),te=e.saGlobal||Z(Y,"sa-global")||n,ne=e.ignorePages||Z(Y,"ignore-pages"),re=Array.isArray(ne)?ne:"string"==typeof ne&&ne.length?ne.split(/, ?/):[],ne=e.ignorePages||Z(Y,"ignore-pages"),ie=u.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||C,ae={version:"custom_latest_8",ua:h,https:p.protocol==i,timezone:L,hostname:X,page_id:k(),session_id:k()};if(ie&&(ae.bot=!0),ae.sri=!0,M&&(ae.mobile=M.mobile,ae.brands=y(M.brands)),f.doctype||R("Add DOCTYPE html for more accurate dimensions"),X!==l&&(ae.hostname_original=l),!Q&&c in u&&"1"==u[c])return R(g+"when "+c+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return R(g+"from "+l);var oe,ce,se={},ue=(f.referrer||"").replace(l,X).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,pe="(utm_)?",le={source:N(pe+"source|ref"),medium:N(pe+"medium"),campaign:N(pe+"campaign"),term:N(pe+"term"),content:N(pe+"content"),referrer:ue},fe=0,he="sendBeacon",ge=function(e,t){var n={type:"append",original_id:t?e:ae.page_id};n.duration=Math.round((j()-G-fe)/1e3),fe=0,G=j(),n.scrolled=Math.max(0,J,me()),!t&&he in u?u[he](w+"/append",y(V(ae,n))):U(n)};s.addEventListener("visibilitychange",function(){f.hidden?("on"+$ in s||ge(),ce=j()):fe+=j()-ce},!1),_($,ge,!1);var de=f.body||{},me=function(){try{var e=E[P]||0,t=Math.max(de[T]||0,de[D]||0,E[P]||0,E[T]||0,E[D]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};_("load",function(){J=me(),_(A,function(){J<me()&&(J=me())},!1)});var ve=function(e){var t="";try{t=e||v(p.pathname)}catch(Pe){}if(!function(e){for(var t in re){var n=re[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==K&&p.hash&&(t+=p.hash.split("?")[0]),t;R(g+"because "+t+" is ignored")},ye=function(e,t){var n=ve(t);if(n&&oe!=n){oe=n,se.path=n,se.viewport_width=Math.max(E.clientWidth||0,s.innerWidth||0)||null,se.viewport_height=Math.max(E[P]||0,s.innerHeight||0)||null,u[O]&&(se[O]=u[O]),H&&(se.screen_width=H.width,se.screen_height=H.height);var r=s.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!ue&&f.referrer.split("/")[2]==l;se.unique=!e&&!a&&!o;var c=function(){d=!0,function(e,t,n){e&&ge(""+ae.page_id,!0),ae.page_id=k();var r=X+ve();U(V(t?{referrer:n?ue:null}:le,{id:ae.page_id,type:"pageview"})),ue=r}(e,e||a,o)};if(d)c();else try{M&&I(M.getHighEntropyValues)?M.getHighEntropyValues([q,B]).then(function(e){ae.os_name=e[q],ae.os_version=e[B],c()})["catch"](c):c()}catch(Pe){c()}}},_e=s.history,we=_e?_e.pushState:b;ee&&we&&Event&&F&&(_e.pushState=(Te=_e[Me=W],function(){var e,t=arguments,n=Te.apply(this,t);return"function"==typeof Event?e=new Event(Me):(e=f.createEvent("Event")).initEvent(Me,!0,!0),e.arguments=t,F(e),n}),_(W,function(){ye(1)},!1),_("popstate",function(){ye(1)},!1)),ee&&"hash"==K&&"onhashchange"in s&&_("hashchange",function(){ye(1)},!1),ee?ye():s.sa_pageview=function(e){ye(0,e)};var be=["string","number"],Ee=function(e,t){var n=I(e),r=I(t)?t:function(){};if(be.indexOf(typeof e)<0&&!n)return R("event is not a string: "+e),r();try{if(n&&(e=e(),be.indexOf(typeof e)<0))return R("event function output is not a string: "+e),r()}catch(i){return R("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&U(V(le,{type:"event",event:e}),r)},Oe=function(e,t){Ee(e,t)};s[te]||(s[te]=Oe);var xe=s[te],Ae=xe&&xe.q?xe.q:[];for(var Se in s[te]=Oe,Ae)Object.prototype.hasOwnProperty.call(Ae,Se)&&(Array.isArray(Ae[Se])?Ee.apply(null,Ae[Se]):Ee(Ae[Se]))}catch(Pe){z(Pe)}var Me,Te,De}(window,{},"<!--# echo var="http_host" default="" -->","sa_event");
//# sourceMappingURL=v8.js.map