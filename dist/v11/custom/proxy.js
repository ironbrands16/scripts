/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-11-22; 37ba; SRI-version; v11) */

!function(h,t,e,n,f){try{var i=undefined,d=!0,m=!1,r="true",a="https:",g="pageview",s="event",o="error",c=h.console,u="doNotTrack",v=h.navigator,l=h.location,y=l.host,_=h.document,p=v.userAgent,w="Not sending request ",b=w+"when ",x=m,E=encodeURIComponent,O=decodeURIComponent,S=JSON.stringify,A=h.addEventListener,q="https://"+e,M=_.documentElement||{},$="language",j="Height",D="scroll",k=v.userAgentData,C=D+j,H="offset"+j,P="client"+j,R="pagehide",T="platform",U="platformVersion",I="https://docs.simpleanalytics.com",V=/(bot|spider|crawl)/i.test(p)&&!/(cubot)/i.test(p),B=h.screen,N=_.currentScript||_.querySelector('script[src*="'+e+'"]');f=function(){var t=[].slice.call(arguments);return t.unshift("Simple Analytics:"),Function.prototype.apply.call(c.warn,c,t)};var z=function(t,e){f("Error in your "+t+" function:",e)},F=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},W=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},G=function(t,e){return t&&t.getAttribute("data-"+e)},J=function(t){return Array.isArray(t)?t:"string"==typeof t&&t.length?t.split(/, ?/):[]},L=function(t){return t&&t.constructor===Object},Y=function(){for(var t={},e=arguments,n=0;n<e.length;n++){var r=e[n];if(L(r))for(var a in r)F(r,a)&&(t[a]=r[a])}return t},Z=h.sa_settings,K=Z||Object.values(t).length;t=Y(t,Z),K&&f("Settings",t);var Q=J(t.ignoreMetrics||G(N,"ignore-metrics")),X=function(e){return 0===Q.filter(function(t){return new RegExp("^"+e).test(t)}).length},tt=Date.now,et=function(){var e=h.crypto||h.msCrypto,t=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return t.replace(n,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}catch(r){return t.replace(n,function(t){var e=16*Math.random()|0;return(t<2?e:3&e|8).toString(16)})}},nt=function(t){return"function"==typeof t},rt="namespace",at=t[rt]||G(N,rt)||"sa",it=h[at+"_metadata"],ot=function(t,e){L(it)&&(t=Y(t,it));var n=h[St];if(!nt(n))return t;try{return Y(t,n.call(h,Y(t,e)))}catch(r){z("metadata",r)}},ct=t.strictUtm||G(N,"strict-utm")==r,st=function(a){return l.search.slice(1).split("&").filter(function(t){var e=a||!X("ut"),n=xt.map(W).join("|"),r=e?"^("+n+")=":"^((utm_)"+(ct?"":"?")+"(source|medium|content|term|campaign)"+(ct?"":"|ref")+"|"+n+")=";return e&&!xt.length?m:new RegExp(r).test(t)}).join("&")||i},ut=at+"_loaded";if(h[ut]==d)return f(w+"twice");h.sa_event_loaded=d,h[ut]=d;var lt=function(e,t,n){e=n?e:Y(Mt,Dt,e),v.brave&&!n&&(e.brave=d);var r=new Image;t&&(r.onerror=t,r.onload=t),r.src=q+"/simple.gif?"+Object.keys(e).filter(function(t){return e[t]!=i}).map(function(t){return E(t)+"="+E(e[t])}).join("&")+"&time="+Date.now()},pt=t.hostname||G(N,"hostname"),ht=pt||y,ft={version:"custom_proxy_11",hostname:ht};n=function(t){t=t.stack?t+" "+t.stack:t,f(t),lt(Y(ft,{type:o,error:t,path:l.pathname}),i,d)},A(o,function(t){t.filename&&-1<t.filename.indexOf(e)&&n(t.message)},m);var dt,mt=tt(),gt=0,vt=t.mode||G(N,"mode"),yt=!!(Kt=t.collectDnt)===Kt?t.collectDnt:G(N,"ignore-dnt")==r||G(N,"skip-dnt")==r||G(N,"collect-dnt")==r,_t=!("false"==G(N,"auto-collect")||t.autoCollect===m),wt=t.saGlobal||G(N,"sa-global")||at+"_"+s,bt=J(t.ignorePages||G(N,"ignore-pages")),xt=J(t.allowParams||G(N,"allow-params")),Et=J(t.nonUniqueHostnames||G(N,"non-unique-hostnames")),Ot=t.pathOverwriter||G(N,"path-overwriter"),St=t.metadataCollector||G(N,"metadata-collector");try{dt=X("c")?Intl.DateTimeFormat().resolvedOptions().timeZone:i}catch(Qt){f(Qt)}var At=v.webdriver||h.__nightmare||h.callPhantom||h._phantom||h.phantom||h.__polypane||h._bot||V,qt=X("t")||X("scro");At&&(ft.bot=d);var Mt=Y(ft,{ua:X("us")?p:i,https:l.protocol==a,timezone:dt,page_id:qt?et():i,session_id:X("se")?et():i});if(Mt.sri=d,k&&(Mt.mobile=k.mobile,Mt.brands=S(k.brands)),_.doctype||f("Add DOCTYPE html for accurate dimensions"),ht!==y&&(Mt.hostname_original=y),!yt&&u in v&&"1"==v[u])return f(b+u+" is enabled. See "+I+"/dnt");-1!=y.indexOf(".")&&!/^[0-9.:]+$/.test(y)||pt||f("Set hostname on "+y+". See "+I+"/overwrite-domain-name");var $t,jt,Dt={},kt=(_.referrer||"").replace(y,ht).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,Ct=0,Ht=function(t,e){var n;qt&&(n=Y(ft,{type:"append",original_id:e?t:Mt.page_id}),X("t")&&(n.duration=Math.round((tt()-mt-Ct)/1e3)),Ct=0,mt=tt(),X("scro")&&(n.scrolled=Math.max(0,gt,Rt())),e||!v.sendBeacon?lt(n,i,d):v.sendBeacon(q+"/append",S(n)))};A("visibilitychange",function(){_.hidden?("on"+R in h||Ht(),jt=tt()):Ct+=tt()-jt},m),A(R,Ht,m);var Pt=_.body||{},Rt=function(){try{var t=M[P]||0,e=Math.max(Pt[C]||0,Pt[H]||0,M[P]||0,M[C]||0,M[H]||0);return Math.min(100,5*Math.round(100*((M.scrollTop||0)+t)/e/5))}catch(Qt){return f(Qt),0}};A("load",function(){gt=Rt(),A(D,function(){gt<Rt()&&(gt=Rt())},m)});var Tt=function(t){var e="";try{e=t||O(l.pathname)}catch(Qt){f(Qt)}var n=h[Ot];if(nt(n))try{e=n.call(h,{path:e})||e}catch(Qt){z("path",Qt)}if(!function(t){for(var e in bt){var n=bt[e];if(n){var r="/"==n[0]?n:"/"+n;if(r===t||new RegExp("^"+W(r).replace(/\\\*/gi,"(.*)")+"$","i").test(t))return d}}return m}(e))return"hash"==vt&&l.hash&&(e+=l.hash.split("?")[0]),e;f(b+"ignoring "+e)},Ut=function(t,e,n){var r=Tt(e);if(r&&$t!=r){$t=r,Dt.path=r,X("v")&&(Dt.viewport_width=Math.max(M.clientWidth||0,h.innerWidth||0)||null,Dt.viewport_height=Math.max(M[P]||0,h.innerHeight||0)||null),X("l")&&v[$]&&(Dt[$]=v[$]),B&&X("sc")&&(Dt.screen_width=B.width,Dt.screen_height=B.height);var a,i=h.performance,o="navigation";try{a=i.getEntriesByType(o)[0].type}catch(Qt){f(Qt)}var c=a?-1<["reload","back_forward"].indexOf(a):i&&i[o]&&-1<[1,2].indexOf(i[o].type),s=_.referrer.split("/")[2],u=kt?-1<Et.indexOf(s)||s==y:m;Dt.unique=t||c?m:!u,n=ot(n,{type:g,path:Dt.path});var l=function(){x=d,function(t,e,n,r){t&&Ht(""+Mt.page_id,d),qt&&(Mt.page_id=et());var a=ht+Tt();lt({id:Mt.page_id,type:g,referrer:!e||n?kt:null,query:st(e),metadata:S(r)}),kt=a}(t,t||c||!X("r"),u,n)};if(x)l();else try{k&&nt(k.getHighEntropyValues)?k.getHighEntropyValues([T,U]).then(function(t){Mt.os_name=t[T],Mt.os_version=t[U],l()})["catch"](l):l()}catch(p){l()}}},It=h.history,Vt=It?It.pushState:i,Bt=h.dispatchEvent,Nt="pushState";_t&&Vt&&Event&&Bt&&(It.pushState=(Zt=It[Yt=Nt],function(){var t,e=arguments,n=Zt.apply(this,e);return nt(Event)?t=new Event(Yt):(t=_.createEvent("Event")).initEvent(Yt,d,d),t.arguments=e,Bt(t),n}),A(Nt,function(){Ut(1)},m),A("popstate",function(){Ut(1)},m)),_t&&"hash"==vt&&"onhashchange"in h&&A("hashchange",function(){Ut(1)},m),_t?Ut():h.sa_pageview=function(t,e){Ut(0,t,e)};var zt=["string","number"],Ft=function(t,e,n){!n&&nt(e)&&(n=e);var r=nt(t),a=nt(n)?n:function(){},i=typeof t;if(zt.indexOf(i)<0&&!r)return z(wt,s+" can't be "+i),a();try{if(r){var o=t();if(zt.indexOf(typeof o)<0)return z(wt,t+" returns no string: "+o),a();t=o}}catch(Qt){return z(wt,Qt),a()}t=(""+t).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,"");var c={type:s,event:t};e=ot(e,c),t&&lt(Y(c,{query:st(),metadata:S(e)}),a)},Wt=function(t,e,n){Ft(t,e,n)};h[wt]||(h[wt]=Wt);var Gt=h[wt],Jt=Gt&&Gt.q?Gt.q:[];for(var Lt in h[wt]=Wt,Jt)F(Jt,Lt)&&(Array.isArray(Jt[Lt])?Ft.apply(null,Jt[Lt]):Ft(Jt[Lt]))}catch(Xt){n(Xt)}var Yt,Zt,Kt}(window,{},"<!--# echo var="proxy_hostname" default="" --><!--# echo var="proxy_path" default="/simple" -->");
//# sourceMappingURL=proxy.js.map