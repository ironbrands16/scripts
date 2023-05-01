/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2023-05-01; 9a20; SRI-version; v11) */

!function(s,e,t,u){try{var i=undefined,n="https:",r=s.console,a="doNotTrack",p=s.navigator,c=s.location,l=c.host,o=s.document,d=p.userAgent,m="Not sending request ",f=!1,g=encodeURIComponent,h=decodeURIComponent,v=JSON.stringify,y=s.addEventListener,_="https://"+t,w=(o.documentElement,"language"),b=p.userAgentData,O="platform",S="platformVersion",j="https://docs.simpleanalytics.com",k=/(bot|spider|crawl)/i.test(d)&&!/(cubot)/i.test(d),E=o.currentScript||o.querySelector('script[src*="'+t+'"]');u=function(){var e=[].slice.call(arguments);return e.unshift("Simple Analytics:"),Function.prototype.apply.call(r.warn,r,e)};var x=function(e,t){return e&&e.getAttribute("data-"+t)},A=function(){for(var e,t,n,r={},a=arguments,o=0;o<a.length;o++){var i=a[o];if((n=i)&&n.constructor===Object)for(var c in i)e=i,t=c,Object.prototype.hasOwnProperty.call(e,t)&&(r[c]=i[c])}return r},$=s.sa_settings,q=$||Object.values(e).length;e=A(e,$),q&&u("Settings",e);Date.now;var D=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},I="namespace",N=e[I]||x(E,I)||"sa",R=e.strictUtm||"true"==x(E,"strict-utm"),U=N+"_loaded";if(1==s[U])return u(m+"twice");s.sa_event_loaded=!0,s[U]=!0;var V,B=function(t,e,n){t=n?t:A(F,J,t),p.brave&&!n&&(t.brave=!0),p._duckduckgoloader_&&!n&&(t.duck=!0),(new Image).src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=i}).map(function(e){return g(e)+"="+g(t[e])}).join("&")+"&time="+Date.now()},C=e.hostname||x(E,"hostname"),H=C||l,T={version:"custom_light_11",hostname:H};e.mode||x(E,"mode");try{V=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Q){u(Q)}k&&(T.bot=!0);var F=A(T,{ua:d,https:c.protocol==n,timezone:V,page_id:D(),session_id:D()});if(F.sri=!0,b&&(F.mobile=b.mobile,F.brands=v(b.brands)),H!==l&&(F.hostname_original=l),a in p&&"1"==p[a])return u("Not sending request when "+a+" is enabled. See "+j+"/dnt");-1!=l.indexOf(".")&&!/^[0-9.:]+$/.test(l)||C||u("Set hostname on "+l+". See "+j+"/overwrite-domain-name");var z,J={},L=(o.referrer||"").replace(l,H).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,M=function(e,t){var n=A(T,{type:"append",original_id:t?e:F.page_id});t||!p.sendBeacon?B(n,0,!0):p.sendBeacon(_+"/append",v(n))};y("pagehide",M,!1);var P,Z,G=function(e){var t="";try{t=e||h(c.pathname)}catch(Q){u(Q)}return t},K=function(e,t,n,r){e&&M(""+F.page_id,!0),F.page_id=D();var a,o=H+G();B({id:F.page_id,type:"pageview",referrer:!t||n?L:null,query:(a=t,c.search.slice(1).split("&").filter(function(e){return!a&&new RegExp("^((utm_)"+(R?"":"?")+"(source|medium|content|term|campaign)"+(R?"":"|ref")+")=").test(e)}).join("&")||i)}),L=o,0};!function(e,t){var n=G(t);if(n&&z!=n){z=n,J.path=n,p[w]&&(J[w]=p[w]);var r,a=s.performance,o="navigation";try{r=a.getEntriesByType(o)[0].type}catch(Q){u(Q)}Z=r?-1<["reload","back_forward"].indexOf(r):a&&a[o]&&-1<[1,2].indexOf(a[o].type),P=!!L&&L.split("/")[0]==l;var i=function(){f=!0,K(e,e||Z||!1,P)};if(f)i();else try{b&&"function"==typeof b.getHighEntropyValues?b.getHighEntropyValues([O,S]).then(function(e){F.os_name=e[O],F.os_version=e[S],i()})["catch"](i):i()}catch(c){i()}}}()}catch(W){u(W)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map