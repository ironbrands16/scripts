/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-03-28; fd22; SRI-version; v9) */

!function(s,e,t){try{var n="sa_event_loaded";if(!s||!0===s[n])return;s[n]=!0;var r,a="https:",i=s.console,o="doNotTrack",p=s.navigator,c=s.location,u=c.hostname,m=s.document,d=p.userAgent,f=!1,l=encodeURIComponent,g=decodeURIComponent,h=JSON.stringify,y=s.addEventListener,v="https://"+t,w=undefined,_=(m.documentElement,"language"),b=p.userAgentData,E="platform",O="platformVersion",S="https://docs.simpleanalytics.com",B=/(bot|spider|crawl)/i.test(d)&&!/(cubot)/i.test(d),T=function(e){i&&i.warn&&i.warn("Simple Analytics:",e)},x=(Date.now,function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}}),A=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},$=function(e,t){var n=c.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),r=n?n.map(function(e){return e.split(/[?&=]/).slice(-2)}):[];if(r[0])return t?r[0]:r[0][1]},D=function(t,e){return k(function(e){t=A(H,q,t),e&&(t.brave=!0),(new Image).src=v+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=w}).map(function(e){return l(e)+"="+l(t[e])}).join("&")+"&time="+Date.now()})};try{r=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(P){}var I=m.currentScript||m.querySelector('script[src*="'+t+'"]'),R=function(e,t){return e&&e.getAttribute("data-"+t)},U=(e.mode||R(I,"mode"),e.hostname||R(I,"hostname")),V=U||u,j=e.strictUtm||"true"==R(I,"strict-utm"),k=function(e){p.brave?p.brave.isBrave().then(function(){e(!0)})["catch"](function(){e(!1)}):e(!1)},C=B,H={version:"cdn_light_9",ua:d,https:c.protocol==a,timezone:r,hostname:V,page_id:x(),session_id:x()};if(C&&(H.bot=!0),H.sri=!0,b&&(H.mobile=b.mobile,H.brands=h(b.brands)),V!==u&&(H.hostname_original=u),o in p&&"1"==p[o])return T("Not sending request when "+o+" is enabled. See "+S+"/dnt");-1!=u.indexOf(".")&&!/^[0-9.:]+$/.test(u)||U||T("Set a hostname when sending data from "+u+". See "+S+"/overwrite-domain-name");var N,q={},z=(m.referrer||"").replace(u,V).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||w,F="(utm_)"+(j?"":"?"),J={source:$(F+"source"+(j?"":"|ref")),medium:$(F+"medium"),campaign:$(F+"campaign"),term:$(F+"term"),content:$(F+"content"),referrer:z},L=function(e,t){var n={type:"append",original_id:t?e:H.page_id};t||!p.sendBeacon?D(n):p.sendBeacon(v+"/append",h(A(H,n)))};y("pagehide",L,!1);var M=function(e){var t="";try{t=e||g(c.pathname)}catch(P){}return t};!function(e,t){var n=M(t);if(n&&N!=n){N=n,q.path=n,p[_]&&(q[_]=p[_]);var r=s.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type),o=!!z&&m.referrer.split("/")[2]==u,c=function(){f=!0,function(e,t,n){e&&L(""+H.page_id,!0),H.page_id=x();var r=V+M();D(A(t?{referrer:n?z:null}:J,{id:H.page_id,type:"pageview"})),z=r}(e,e||i,o)};if(f)c();else try{b&&"function"==typeof b.getHighEntropyValues?b.getHighEntropyValues([E,O]).then(function(e){H.os_name=e[E],H.os_version=e[O],c()})["catch"](c):c()}catch(P){c()}}}()}catch(P){T(P)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map