/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-22; 28d9) */

!function(s,e,n){var r,i,t;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=/[018]/g,f=s.navigator,l=s.location,h=l.hostname,d=s.document,g=f.userAgent,m="Not sending request ",v=encodeURIComponent,y=decodeURIComponent,w=JSON.stringify,_=s.addEventListener,E="https://queue."+n,b=undefined,O=d.documentElement||{},x="language",A="Height",M="scroll",S=M+A,T="offset"+A,k="client"+A,q=s.screen,$=f.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||/(bot|spider|crawl)/i.test(g)||s.chrome&&(""===f.languages||!f.plugins.length||!(f.plugins instanceof PluginArray)),B={version:3};$&&(B.bot=!0);var C=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},D=Date.now,P=function(){var n=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;try{return e.replace(p,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(t){return e.replace(p,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}},R=function(){for(var e={},n=arguments,t=0;t<n.length;t++){var r=n[t];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},I=function(e){var n=l.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]},j=function(n,e){n=R(B,n);var t=new Image;e&&(t.onerror=e,t.onload=e),t.src=E+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=b}).map(function(e){return v(e)+"="+v(n[e])}).join("&")},F=function(e){e=e.message||e,C(e),j({type:a,error:e,url:Y+l.pathname})};_(a,function(e){e.filename&&-1<e.filename.indexOf(n)&&F(e.message)},!1);var N,U="pushState",z=s.dispatchEvent,H=D(),L=0;try{N=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Oe){}var W=d.querySelector('script[src*="'+n+'"]'),G=function(e,n){return e&&e.getAttribute("data-"+n)},J=e.mode||G(W,"mode"),V=!!(t=e.skipDnt)===t?e.skipDnt:"true"==G(W,"ignore-dnt")||"true"==G(W,"skip-dnt"),Y=e.hostname||G(W,"hostname")||h,Z=!("false"==G(W,"auto-collect")||!1===e.autoCollect),K=e.saGlobal||G(W,"sa-global")||"sa_event",Q=e.ignorePages||G(W,"ignore-pages"),X=Array.isArray(Q)?Q:"string"==typeof Q&&Q.length?Q.split(/, ?/):[];if(B.hostname=Y,d.doctype||C("Add DOCTYPE html for more accurate dimensions"),Y!==h&&(B.hostname_original=h),!V&&c in f&&"1"==f[c])return C(m+"when "+c+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return C(m+"from "+h);var ee,ne,te={},re=P(),ie=(d.referrer||"").replace(h,Y).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,ae="(utm_)?",oe={source:I(ae+"source|ref"),medium:I(ae+"medium"),campaign:I(ae+"campaign"),term:I(ae+"term"),content:I(ae+"content"),referrer:ie},ce=0;s.addEventListener("visibilitychange",function(){d.hidden?ne=D():ce+=D()-ne},!1);var se="sendBeacon",ue=function(e,n){var t={type:"append",original_id:n?e:re};t.duration=Math.round((D()-H+ce)/1e3),ce=0,H=D(),t.scrolled=Math.max(0,L,fe()),!n&&se in f?f[se](E+"/append",w(R(B,t))):j(t)};_("unload",ue,!1);var pe=d.body||{},fe=function(){try{var e=O[k]||0,n=Math.max(pe[S]||0,pe[T]||0,O[k]||0,O[S]||0,O[T]||0);return Math.min(100,5*Math.round(100*((O.scrollTop||0)+e)/n/5))}catch(t){return 0}};_("load",function(){L=fe(),_(M,function(){L<fe()&&(L=fe())},!1)});var le=function(e){var n=e||y(l.pathname);if(!function(e){for(var n in X){var t=X[n];if(t){var r="/"==t[0]?t:"/"+t;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(n))return"hash"==J&&l.hash&&(n+=l.hash.split("?")[0]),n;C(m+"because "+n+" is ignored")},he=function(e,n){var t,r,i,a,o,c=le(n);c&&ee!=c&&(t={path:ee=c,viewport_width:Math.max(O.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(O[k]||0,s.innerHeight||0)||null},f[x]&&(t[x]=f[x]),q&&(t.screen_width=q.width,t.screen_height=q.height),i="navigation",a=(r=s.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!ie&&ie.split("/")[0]==Y,t.unique=!e&&!a&&!o,te=t,function(e,n,t){e&&ue(""+re,!0),re=P(),te.id=re;var r=Y+le();j(R(te,n?{referrer:t?ie:null}:oe,{https:l.protocol==u,timezone:N,type:"pageview"})),ie=r}(e,e||a,o))},de=s.history,ge=de?de.pushState:b;Z&&ge&&Event&&z&&(de.pushState=(i=de[r=U],function(){var e,n=arguments,t=i.apply(this,n);return"function"==typeof Event?e=new Event(r):(e=d.createEvent("Event")).initEvent(r,!0,!0),e.arguments=n,z(e),t}),_(U,function(){he(1)},!1),_("popstate",function(){he(1)},!1)),Z&&"hash"==J&&"onhashchange"in s&&_("hashchange",function(){he(1)},!1),Z?he():s.sa_pageview=function(e){he(0,e)};var me=P(),ve=["string","number"],ye=function(e,n){var t=e instanceof Function,r=n instanceof Function?n:function(){};if(ve.indexOf(typeof e)<0&&!t)return C("event is not a string: "+e),r();try{if(t&&(e=e(),ve.indexOf(typeof e)<0))return C("event function output is not a string: "+e),r()}catch(i){return C("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&j(R(oe,$?{bot:!0}:{},{type:"event",event:e,page_id:te.id,session_id:me}),r)},we=function(e,n){ye(e,n)};s[K]||(s[K]=we);var _e=s[K],Ee=_e&&_e.q?_e.q:[];for(var be in s[K]=we,Ee)ye(Ee[be])}catch(Oe){F(Oe)}}(window,{},"simpleanalyticscdn.com");
//# sourceMappingURL=latest.js.map