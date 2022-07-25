/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-07-25; 96d0; SRI-version; v9) */

!function(f,t,e,n){try{var i=undefined,h=!0,d=!1,r="true",a="https:",m="pageview",c="event",s="error",o=f.console,u="doNotTrack",g=f.navigator,l=f.location,v=l.host,y=f.document,p=g.userAgent,_="Not sending request ",w=_+"when ",b=d,E=encodeURIComponent,O=decodeURIComponent,x=JSON.stringify,S=f.addEventListener,A="https://"+e,q=y.documentElement||{},M="language",$="Height",D="scroll",j=g.userAgentData,C=D+$,H="offset"+$,R="client"+$,T="pagehide",U="platform",k="platformVersion",I="https://docs.simpleanalytics.com",P=/(bot|spider|crawl)/i.test(p)&&!/(cubot)/i.test(p),V=f.screen,B=y.currentScript||y.querySelector('script[src*="'+e+'"]'),N=function(t){o&&o.warn&&o.warn("Simple Analytics:",t)},z=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},W=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},F=function(t,e){return t&&t.getAttribute("data-"+e)},G=function(t){return Array.isArray(t)?t:"string"==typeof t&&t.length?t.split(/, ?/):[]},J=G(t.ignoreMetrics||F(B,"ignore-metrics")),L=function(e){return 0===J.filter(function(t){return new RegExp("^"+e).test(t)}).length},Y=Date.now,Z=function(){var e=f.crypto||f.msCrypto,t=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return t.replace(n,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}catch(r){return t.replace(n,function(t){var e=16*Math.random()|0;return(t<2?e:3&e|8).toString(16)})}},K=function(t){return"function"==typeof t},Q=function(t){return t&&t.constructor===Object},X=function(){for(var t={},e=arguments,n=0;n<e.length;n++){var r=e[n];if(Q(r))for(var a in r)z(r,a)&&(t[a]=r[a])}return t},tt="namespace",et=t[tt]||F(B,tt)||"sa",nt=f[et+"_metadata"],rt=function(t,e){Q(nt)&&(t=X(t,nt));var n=f[bt];if(!K(n))return t;try{return X(t,n.call(f,X(e,t)))}catch(r){N(s+" in your metadata function: "+r)}},at=t.strictUtm||F(B,"strict-utm")==r,it=function(a){return l.search.slice(1).split("&").filter(function(t){var e=a||!L("ut"),n=yt.map(W).join("|"),r=e?"^("+n+")=":"^((utm_)"+(at?"":"?")+"(source|medium|content|term|campaign)"+(at?"":"|ref")+"|"+n+")=";return e&&!yt.length?d:new RegExp(r).test(t)}).join("&")||i},ot=et+"_loaded";if(f[ot]==h)return N(_+"twice");f.sa_event_loaded=h,f[ot]=h;var ct=function(e,t,n){e=n?e:X(St,Mt,e),g.brave&&!n&&(e.brave=h);var r=new Image;t&&(r.onerror=t,r.onload=t),r.src=A+"/simple.gif?"+Object.keys(e).filter(function(t){return e[t]!=i}).map(function(t){return E(t)+"="+E(e[t])}).join("&")+"&time="+Date.now()};n=function(t){t=t.message||t,N(t),ct({type:s,error:t,url:dt+l.pathname})},S(s,function(t){t.filename&&-1<t.filename.indexOf(e)&&n(t.message)},d);var st,ut=Y(),lt=0,pt=t.mode||F(B,"mode"),ft=!!(Lt=t.collectDnt)===Lt?t.collectDnt:F(B,"ignore-dnt")==r||F(B,"skip-dnt")==r||F(B,"collect-dnt")==r,ht=t.hostname||F(B,"hostname"),dt=ht||v,mt=!("false"==F(B,"auto-collect")||t.autoCollect===d),gt=t.saGlobal||F(B,"sa-global")||et+"_"+c,vt=["/path*lala"],yt=G(t.allowParams||F(B,"allow-params")),_t=G(t.nonUniqueHostnames||F(B,"non-unique-hostnames")),wt=t.pathOverwriter||F(B,"path-overwriter"),bt=t.metadataCollector||F(B,"metadata-collector");try{st=L("c")?Intl.DateTimeFormat().resolvedOptions().timeZone:i}catch(Yt){}var Et=g.webdriver||f.__nightmare||f.callPhantom||f._phantom||f.phantom||f.__polypane||f._bot||P,Ot=L("t")||L("scro"),xt={version:"custom_app_9",hostname:dt};Et&&(xt.bot=h);var St=X(xt,{ua:L("us")?p:i,https:l.protocol==a,timezone:st,page_id:Ot?Z():i,session_id:L("se")?Z():i});if(St.sri=h,j&&(St.mobile=j.mobile,St.brands=x(j.brands)),y.doctype||N("Add DOCTYPE html for accurate dimensions"),dt!==v&&(St.hostname_original=v),!ft&&u in g&&"1"==g[u])return N(w+u+" is enabled. See "+I+"/dnt");-1!=v.indexOf(".")&&!/^[0-9.:]+$/.test(v)||ht||N("Set hostname on "+v+". See "+I+"/overwrite-domain-name");var At,qt,Mt={},$t=(y.referrer||"").replace(v,dt).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,Dt=0,jt=function(t,e){var n;Ot&&(n=X(xt,{type:"append",original_id:e?t:St.page_id}),L("t")&&(n.duration=Math.round((Y()-ut-Dt)/1e3)),Dt=0,ut=Y(),L("scro")&&(n.scrolled=Math.max(0,lt,Ht())),e||!g.sendBeacon?ct(n,i,h):g.sendBeacon(A+"/append",x(n)))};S("visibilitychange",function(){y.hidden?("on"+T in f||jt(),qt=Y()):Dt+=Y()-qt},d),S(T,jt,d);var Ct=y.body||{},Ht=function(){try{var t=q[R]||0,e=Math.max(Ct[C]||0,Ct[H]||0,q[R]||0,q[C]||0,q[H]||0);return Math.min(100,5*Math.round(100*((q.scrollTop||0)+t)/e/5))}catch(n){return 0}};S("load",function(){lt=Ht(),S(D,function(){lt<Ht()&&(lt=Ht())},d)});var Rt=function(t){var e="";try{e=t||O(l.pathname)}catch(Yt){}var n=f[wt];if(K(n)&&(e=n.call(f,e)),!function(t){for(var e in vt){var n=vt[e];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===t||new RegExp("^"+W(r).replace(/\\\*/gi,"(.*)")+"$","i").test(t))return h}catch(a){return d}}}return d}(e))return"hash"==pt&&l.hash&&(e+=l.hash.split("?")[0]),e;N(w+"ignoring "+e)},Tt=function(t,e,n){var r=Rt(e);if(r&&At!=r){At=r,Mt.path=r,L("v")&&(Mt.viewport_width=Math.max(q.clientWidth||0,f.innerWidth||0)||null,Mt.viewport_height=Math.max(q[R]||0,f.innerHeight||0)||null),L("l")&&g[M]&&(Mt[M]=g[M]),V&&L("sc")&&(Mt.screen_width=V.width,Mt.screen_height=V.height);var a,i=f.performance,o="navigation";try{a=i.getEntriesByType(o)[0].type}catch(p){}var c=a?-1<["reload","back_forward"].indexOf(a):i&&i[o]&&-1<[1,2].indexOf(i[o].type),s=y.referrer.split("/")[2],u=$t?-1<_t.indexOf(s)||s==v:d;Mt.unique=t||c?d:!u,n=rt(n,{type:m,path:Mt.path});var l=function(){b=h,function(t,e,n,r){t&&jt(""+St.page_id,h),Ot&&(St.page_id=Z());var a=dt+Rt();ct({id:St.page_id,type:m,referrer:!e||n?$t:null,query:it(e),metadata:x(r)}),$t=a}(t,t||c||!L("r"),u,n)};if(b)l();else try{j&&K(j.getHighEntropyValues)?j.getHighEntropyValues([U,k]).then(function(t){St.os_name=t[U],St.os_version=t[k],l()})["catch"](l):l()}catch(Yt){l()}}},Ut=f.history,kt=Ut?Ut.pushState:i,It=f.dispatchEvent,Pt="pushState";mt&&kt&&Event&&It&&(Ut.pushState=(Jt=Ut[Gt=Pt],function(){var t,e=arguments,n=Jt.apply(this,e);return K(Event)?t=new Event(Gt):(t=y.createEvent("Event")).initEvent(Gt,h,h),t.arguments=e,It(t),n}),S(Pt,function(){Tt(1)},d),S("popstate",function(){Tt(1)},d)),mt&&"hash"==pt&&"onhashchange"in f&&S("hashchange",function(){Tt(1)},d),mt?Tt():f.sa_pageview=function(t,e){Tt(0,t,e)};var Vt=["string","number"],Bt=function(t,e,n){!n&&K(e)&&(n=e);var r=K(t),a=K(n)?n:function(){};if(Vt.indexOf(typeof t)<0&&!r)return N(c+" isn't a string: "+t),a();try{if(r&&(t=t(),Vt.indexOf(typeof t)<0))return N(c+" function output isn't a string: "+t),a()}catch(o){return N(s+" in your event function: "+o),a()}t=(""+t).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,"");var i={type:c,event:t};e=rt(e,i),t&&ct(X(i,{query:it(),metadata:x(e)}),a)},Nt=function(t,e){Bt(t,e)};f[gt]||(f[gt]=Nt);var zt=f[gt],Wt=zt&&zt.q?zt.q:[];for(var Ft in f[gt]=Nt,Wt)z(Wt,Ft)&&(Array.isArray(Wt[Ft])?Bt.apply(null,Wt[Ft]):Bt(Wt[Ft]))}catch(Yt){n(Yt)}var Gt,Jt,Lt}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=app.js.map