/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-04-20; 41db; SRI-version; v7) */

!function(p,e,t){try{var n="sa_event_loaded";if(!p||!0===p[n])return;p[n]=!0;var u="https:",r=p.console,a="doNotTrack",f=p.navigator,m=p.location,l=m.hostname,d=p.document,o=f.userAgent,i="Not sending request ",g=!1,c=encodeURIComponent,s=decodeURIComponent,y=JSON.stringify,h=p.addEventListener,v="https://"+t,w=undefined,b=(d.documentElement,"language"),_=f.userAgentData,E="platform",O="platformVersion",T=/(bot|spider|crawl)/i.test(o)&&!/(cubot)/i.test(o),x={version:"custom_light_7",ua:o};T&&(x.bot=!0),x.sri=!0,_&&(x.mobile=_.mobile,x.brands=y(_.brands));var A,B=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},S=(Date.now,function(){var t=p.crypto||p.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}}),$=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},D=function(e){var t=m.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},I=function(t,e){t=$(x,t),(new Image).src=v+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=w}).map(function(e){return c(e)+"="+c(t[e])}).join("&")+"&time="+Date.now()};try{A=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(L){}var R=d.querySelector('script[src*="'+t+'"]'),V=function(e,t){return e&&e.getAttribute("data-"+t)},j=(e.mode||V(R,"mode"),e.hostname||V(R,"hostname")||l);if((x.hostname=j)!==l&&(x.hostname_original=l),a in f&&"1"==f[a])return B(i+"when "+a+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return B(i+"from "+l);var k,C={},H=S(),N=(d.referrer||"").replace(l,j).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||w,U="(utm_)?",q={source:D(U+"source|ref"),medium:D(U+"medium"),campaign:D(U+"campaign"),term:D(U+"term"),content:D(U+"content"),referrer:N},z="sendBeacon",F=function(e,t){var n={type:"append",original_id:t?e:H};!t&&z in f?f[z](v+"/append",y($(x,n))):I(n)};h("pagehide",F,!1);var J=function(e){var t="";try{t=e||s(m.pathname)}catch(L){}return t};!function(e,t){var n=J(t);if(n&&k!=n){var r={path:k=n};f[b]&&(r[b]=f[b]);var a=p.performance,o="navigation",i=a&&a.getEntriesByType&&a.getEntriesByType(o)[0]&&a.getEntriesByType(o)[0].type?-1<["reload","back_forward"].indexOf(a.getEntriesByType(o)[0].type):a&&a[o]&&-1<[1,2].indexOf(a[o].type),c=!!N&&d.referrer.split("/")[2]==l;C=r;var s=function(){g=!0,function(e,t,n){e&&F(""+H,!0),H=S(),C.id=H;var r=j+J();I($(C,t?{referrer:n?N:null}:q,{https:m.protocol==u,timezone:A,type:"pageview"})),N=r}(e,e||i,c)};if(g)s();else try{_&&"function"==typeof _.getHighEntropyValues?_.getHighEntropyValues([E,O]).then(function(e){x.os_name=e[E],x.os_version=e[O],s()})["catch"](s):s()}catch(L){s()}}}()}catch(L){B(L)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map