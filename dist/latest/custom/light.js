/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-01-26; 2b0b) */

!function(o,t){if(o){var e="https:",n=e+"//",s=n+t+"/v2/post",r=n+t,a=o.console,i="doNotTrack",c="pageviews",u="events",p=o.navigator,h=p.userAgent,d=o.location,f=o.document,l=d.hostname,m="Not sending requests ",g="localhost",v=null,y=encodeURIComponent,w=o.addEventListener,E=function(e){a&&a.warn&&a.warn("Simple Analytics: "+e)};w("error",function(e){e.filename&&-1<e.filename.indexOf(t)&&M(e.message)},!1);function T(e,t){return e&&e.getAttribute("data-"+t)}var b,S,x="pushState",O=o.dispatchEvent,B=f.querySelector('script[src*="'+t+'"]'),q=T(B,"mode"),R="true"===T(B,"skip-dnt");T(B,"sa-global");if(!R&&i in p&&"1"===p[i])return E(m+"when "+i+" is enabled");if(l===g||"file:"===d.protocol)return E(m+"from "+g);if(!h||-1<h.search(/(bot|spider|crawl)/gi))return E(m+"because bot detected");try{function $(e){var t=d.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var k;try{k=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(U){}function A(e){return Math.round((Date.now()-(e||0))/1e3)}var H,I="(utm_)?",N={version:2,hostname:l,https:d.protocol===e,timezone:k,width:o.innerWidth,source:{source:$(I+"source|source|ref"),medium:$(I+"medium"),campaign:$(I+"campaign"),referrer:(f.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||v},pageviews:[]},_="sendBeacon",C=JSON.stringify,D=_ in p&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(h);D&&w("unload",function(){try{N[c][N[c].length-1];N.time=A(),p[_](s,C(N))}catch(e){M(e)}},!1);function F(e){var t=d.pathname;if("hash"===q&&d.hash&&(t+=d.hash.split("?")[0]),H!==t){var n={path:H=t,added:A()},r=o.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);!function(e,t,n){try{var r=N[c],a=r?r.length:0;a&&r[a-1];if(e===u);else if(N[c]?N[c].push(t):N[c]=[t],n&&0===a&&delete N.source,D)return;n&&delete N.source;var i=new XMLHttpRequest;i.open("POST",s,!0),N.time=A(),i.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),i.send(C(N)),delete N[c],delete N[u]}catch(o){M(o)}}(c,n,e||i)}}var L=o.history;if((L?L.pushState:v)&&Event&&O){w(x,function(){F(1)},!(L.pushState=(S=L[b=x],function(){var e=S.apply(this,arguments),t=new Event(b);return t.arguments=arguments,O(t),e}))),w("popstate",function(){F(1)},!1)}"hash"===q&&"onhashchange"in o&&w("hashchange",function(){F(1)},!1),F()}catch(U){M(U)}}function M(e){e=e.message||e,E(e),(new Image).src=r+"/error.gif?error="+y(e)+"&url="+y(l+d.pathname)}}(window,"<!--# echo var="http_host" default="" -->");