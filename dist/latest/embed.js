/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-07-30; d2e8; v1) */

var o;o=document,NodeList.prototype.forEach=Array.prototype.forEach,o.addEventListener("DOMContentLoaded",function(){var n=1;o.querySelectorAll("[data-sa-graph-url]").forEach(function(e){var t=e.getAttribute("data-sa-graph-url"),a=-1<t.indexOf("?")?"&":"?",r=o.createElement("iframe");r.setAttribute("src",t+a+"embed=true&graph_id="+n),r.setAttribute("id","sa-graph-"+n),r.setAttribute("scrolling","no"),r.style.width="100%",r.style.border="none",e.innerHTML=r.outerHTML,n+=1}),window.onresize=function(){o.querySelectorAll("[data-sa-graph-url] iframe").forEach(function(e){e.contentWindow.postMessage("true","*")})},window.addEventListener("message",function(t){var e;"object"==typeof t.data&&("resize"===t.data.type?o.getElementById("sa-graph-"+t.data.id).height=t.data.height+"px":"pageviews"!==t.data.type||(e=o.getElementById("sa-graph-"+t.data.id).parentNode.getAttribute("data-sa-page-views-selector"))&&o.querySelectorAll(e).forEach(function(e){e.textContent=t.data.pageviews}))})});
//# sourceMappingURL=embed.js.map