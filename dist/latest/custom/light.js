/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-11-22; 3ce4; v11) */

!function(u,e,t,l){try{var i=undefined,n="https:",r=u.console,a="doNotTrack",d=u.navigator,c=u.location,m=c.host,f=u.document,o=d.userAgent,s="Not sending request ",g=!1,p=encodeURIComponent,h=decodeURIComponent,v=JSON.stringify,y=u.addEventListener,_="https://"+t,w=(f.documentElement,"language"),b=d.userAgentData,O="platform",S="platformVersion",j="https://docs.simpleanalytics.com",E=/(bot|spider|crawl)/i.test(o)&&!/(cubot)/i.test(o),x=f.currentScript||f.querySelector('script[src*="'+t+'"]');l=function(){var e=[].slice.call(arguments);return e.unshift("Simple Analytics:"),Function.prototype.apply.call(r.warn,r,e)};var A=function(e,t){return e&&e.getAttribute("data-"+t)},$=function(){for(var e,t,n,r={},a=arguments,o=0;o<a.length;o++){var i=a[o];if((n=i)&&n.constructor===Object)for(var c in i)e=i,t=c,Object.prototype.hasOwnProperty.call(e,t)&&(r[c]=i[c])}return r},q=u.sa_settings,D=q||Object.values(e).length;e=$(e,q),D&&l("Settings",e);Date.now;var I=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},N="namespace",R=e[N]||A(x,N)||"sa",U=e.strictUtm||"true"==A(x,"strict-utm"),V=R+"_loaded";if(1==u[V])return l(s+"twice");u.sa_event_loaded=!0,u[V]=!0;var k,B=function(t,e,n){t=n?t:$(F,J,t),d.brave&&!n&&(t.brave=!0),(new Image).src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=i}).map(function(e){return p(e)+"="+p(t[e])}).join("&")+"&time="+Date.now()},C=e.hostname||A(x,"hostname"),H=C||m,T={version:"custom_light_11",hostname:H};e.mode||A(x,"mode");try{k=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(G){l(G)}E&&(T.bot=!0);var F=$(T,{ua:o,https:c.protocol==n,timezone:k,page_id:I(),session_id:I()});if(F.sri=!1,b&&(F.mobile=b.mobile,F.brands=v(b.brands)),H!==m&&(F.hostname_original=m),a in d&&"1"==d[a])return l("Not sending request when "+a+" is enabled. See "+j+"/dnt");-1!=m.indexOf(".")&&!/^[0-9.:]+$/.test(m)||C||l("Set hostname on "+m+". See "+j+"/overwrite-domain-name");var z,J={},L=(f.referrer||"").replace(m,H).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,M=function(e,t){var n=$(T,{type:"append",original_id:t?e:F.page_id});t||!d.sendBeacon?B(n,0,!0):d.sendBeacon(_+"/append",v(n))};y("pagehide",M,!1);var P=function(e){var t="";try{t=e||h(c.pathname)}catch(G){l(G)}return t},Z=function(e,t,n,r){e&&M(""+F.page_id,!0),F.page_id=I();var a,o=H+P();B({id:F.page_id,type:"pageview",referrer:!t||n?L:null,query:(a=t,c.search.slice(1).split("&").filter(function(e){return!a&&new RegExp("^((utm_)"+(U?"":"?")+"(source|medium|content|term|campaign)"+(U?"":"|ref")+")=").test(e)}).join("&")||i)}),L=o};!function(e,t){var n=P(t);if(n&&z!=n){z=n,J.path=n,d[w]&&(J[w]=d[w]);var r,a=u.performance,o="navigation";try{r=a.getEntriesByType(o)[0].type}catch(G){l(G)}var i=r?-1<["reload","back_forward"].indexOf(r):a&&a[o]&&-1<[1,2].indexOf(a[o].type),c=!!L&&f.referrer.split("/")[2]==m,s=function(){g=!0,Z(e,e||i||!1,c)};if(g)s();else try{b&&"function"==typeof b.getHighEntropyValues?b.getHighEntropyValues([O,S]).then(function(e){F.os_name=e[O],F.os_version=e[S],s()})["catch"](s):s()}catch(p){s()}}}()}catch(K){l(K)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map