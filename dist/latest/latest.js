/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-01-26; 0eb7) */

!function(d,t,e){if(d){var n="https:",r=n+"//",h=r+e+t+"/v2/post",a=r+e+t,l=r+"online."+t+"/v1/visit",i=d.console,o="doNotTrack",p="pageviews",f="events",s=d.navigator,c=s.userAgent,u=d.location,m=d.document,v=u.hostname,g="Not sending requests ",y="localhost",w="Content-Type",T=null,E=encodeURIComponent,q="text/plain; charset=UTF-8",b=d.addEventListener,S=function(e){i&&i.warn&&i.warn("Simple Analytics: "+e)};b("error",function(e){e.filename&&-1<e.filename.indexOf(t)&&ae(e.message)},!1);function x(e,t){return e&&e.getAttribute("data-"+t)}var M,O,D="pushState",R=d.dispatchEvent,B=Date.now(),H=0,L=m.querySelector('script[src*="'+t+'"]'),$=x(L,"mode"),_="true"===x(L,"skip-dnt"),k=x(L,"sa-global")||"sa";if(!_&&o in s&&"1"===s[o])return S(g+"when "+o+" is enabled");if(v===y||"file:"===u.protocol)return S(g+"from "+y);if(!c||-1<c.search(/(bot|spider|crawl)/gi))return S(g+"because bot detected");try{function A(e){var t=u.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var C;try{C=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ie){}var F="(utm_)?",I={version:2,hostname:v,https:u.protocol===n,timezone:C,width:d.innerWidth,source:{source:A(F+"source|source|ref"),medium:A(F+"medium"),campaign:A(F+"campaign"),referrer:(m.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||T},pageviews:[]},N=0,P=T;d.addEventListener("visibilitychange",function(){m.hidden?P=Date.now():N+=Date.now()-P},!1);function U(e){return Math.round((Date.now()-(e||0))/1e3)}var X,z="sendBeacon",J=JSON.stringify,W=z in s&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(c);W&&b("unload",function(){try{var e=I[p][I[p].length-1];e.duration=U(B+N),N=0;var t=Math.max(0,H,K());t&&(e.scrolled=t),I.time=U(),s[z](h,J(I))}catch(n){ae(n)}},!1);var Z="scroll",j=m.body||{},G=m.documentElement||{},K=function(){try{var e="Height",t=Z+e,n="offset"+e,r="client"+e,a=G[r]||0,i=Math.max(j[t]||0,j[n]||0,G[r]||0,G[t]||0,G[n]||0);return Math.min(100,5*Math.round(100*((G.scrollTop||0)+a)/i/5))}catch(o){return ae(o),0}};b("load",function(){H=K(),b(Z,function(){H<K()&&(H=K())},!1)});function Q(e,t,n){try{var r,a=I[p],i=a?a.length:0,o=i?a[i-1]:T;if(e===f){try{r=""+(t instanceof Function?t():t)}catch(u){S("in your event function: "+u.message),r="event_errored"}if(o?o[f]?o[f].push(r):o[f]=[r]:W&&S("Couldn't save event '"+r+"'"),W)return;delete I[p],I[f]=[r]}else{i&&(o.duration=U(B+N),o.scrolled=H),I[p]?I[p].push(t):I[p]=[t],n&&0===i&&delete I.source;try{var s=new XMLHttpRequest;s.open("POST",l,!0),s.setRequestHeader(w,q),s.send(J(I))}catch(u){}if(W)return B=Date.now(),N=0,void(H=d.setTimeout(K,500))}n&&delete I.source;var c=new XMLHttpRequest;c.open("POST",h,!0),I.time=U(),c.setRequestHeader(w,q),c.send(J(I)),delete I[p],delete I[f]}catch(u){ae(u)}}function V(e){var t=u.pathname;if("hash"===$&&u.hash&&(t+=u.hash.split("?")[0]),X!==t){var n={path:X=t,added:U()},r=d.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);n.unique=!e&&!i&&(!m.referrer||m.referrer.split("/")[2]!==v),Q(p,n,e||i)}}var Y=d.history;if((Y?Y.pushState:T)&&Event&&R){Y.pushState=(O=Y[M=D],function(){var e=O.apply(this,arguments),t=new Event(M);return t.arguments=arguments,R(t),e}),b(D,function(){V(1)},!1),b("popstate",function(){V(1)},!1)}"hash"===$&&"onhashchange"in d&&b("hashchange",function(){V(1)},!1),V();function ee(e){Q(f,e)}d[k]||(d[k]=ee);var te=d[k],ne=te&&te.q?te.q:[];for(var re in d[k]=ee,ne)Q(f,ne[re])}catch(ie){ae(ie)}}function ae(e){e=e.message||e,S(e),(new Image).src=a+"/error.gif?error="+E(e)+"&url="+E(v+u.pathname)}}(window,"simpleanalyticscdn.com","queue.");