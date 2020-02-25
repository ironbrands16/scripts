/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-24; 984f) */

!function(o,n){if(o){function c(){return Math.random().toString(36).slice(2)}var s,u="https:",t="error",r=o.console,e="doNotTrack",i=o.navigator,p=o.location,a=o.document,f="Not sending requests ",h=encodeURIComponent,m=decodeURIComponent,d=JSON.stringify,l=o.addEventListener,g="https://"+n,v=undefined,y=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},w=function(e){return Math.round((Date.now()-(e||0))/1e3)};try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(J){}l(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&H(e.message)},!1);function E(e,n){return e&&e.getAttribute("data-"+n)}var O,S,b="pushState",x=o.dispatchEvent,T=a.querySelector('script[src*="'+n+'"]'),B=E(T,"mode"),k="true"==E(T,"skip-dnt"),I=E(T,"hostname")||p.hostname;E(T,"sa-global");if(!k&&e in i&&"1"==i[e])return y(f+"when "+e+" is enabled");if(-1==I.indexOf("."))return y(f+"from localhost");try{function $(e){var n=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}function j(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function N(e,n){var t=j(A,{type:"append",original_id:n?e:q});t.time=w(),n?F(t):i[M](g+"/append",d(t))}var R,_={},q=c(),A={version:2,hostname:I},C="(utm_)?",D={source:$(C+"source|source|ref"),medium:$(C+"medium"),campaign:$(C+"campaign"),referrer:(a.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||v},M="sendBeacon";M in i&&l("unload",N,!1);function U(e){var n=m(p.pathname);if("hash"==B&&p.hash&&(n+=p.hash.split("?")[0]),R!=n){var t={path:R=n},r=o.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);_=t,function(e,n){e&&N(""+q,!0),q=c(),_.id=q,F(j(_,A,n?null:D,{https:p.protocol==u,timezone:s,width:o.innerWidth,type:"pageview"}))}(e,e||a)}}var z=o.history;if((z?z.pushState:v)&&Event&&x){l(b,function(){U(1)},!(z.pushState=(S=z[O=b],function(){var e,n=S.apply(this,arguments);return"function"==typeof Event?e=new Event(O):(e=document.createEvent("Event")).initEvent(O,!0,!0),e.arguments=arguments,x(e),n}))),l("popstate",function(){U(1)},!1)}"hash"==B&&"onhashchange"in o&&l("hashchange",function(){U(1)},!1),U()}catch(J){H(J)}}function F(n){n.time=w(),(new Image).src=g+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=v}).map(function(e){return h(e)+"="+h(n[e])}).join("&")}function H(e){e=e.message||e,y(e),F({type:t,error:e,url:I+p.pathname})}}(window,"<!--# echo var="http_host" default="" -->");