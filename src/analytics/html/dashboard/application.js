/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
// vim: ts=4 sts=4 sw=4 expandtab
// -- kriskowal Kris Kowal Copyright (C) 2009-2011 MIT License
// -- tlrobinson Tom Robinson Copyright (C) 2009-2010 MIT License (Narwhal Project)
// -- dantman Daniel Friesen Copyright (C) 2010 XXX TODO License or CLA
// -- fschaefer Florian SchÃ¤fer Copyright (C) 2010 MIT License
// -- Gozala Irakli Gozalishvili Copyright (C) 2010 MIT License
// -- kitcambridge Kit Cambridge Copyright (C) 2011 MIT License
// -- kossnocorp Sasha Koss XXX TODO License or CLA
// -- bryanforbes Bryan Forbes XXX TODO License or CLA
// -- killdream Quildreen Motta Copyright (C) 2011 MIT Licence
// -- michaelficarra Michael Ficarra Copyright (C) 2011 3-clause BSD License
// -- sharkbrainguy Gerard Paapu Copyright (C) 2011 MIT License
// -- bbqsrc Brendan Molloy XXX TODO License or CLA
// -- iwyg XXX TODO License or CLA
// -- DomenicDenicola Domenic Denicola XXX TODO License or CLA
// -- xavierm02 Montillet Xavier XXX TODO License or CLA
// -- Raynos Raynos XXX TODO License or CLA
// -- samsonjs Sami Samhuri XXX TODO License or CLA
// -- rwldrn Rick Waldron Copyright (C) 2011 MIT License
// -- lexer Alexey Zakharov XXX TODO License or CLA

/*!
    Copyright (c) 2009, 280 North Inc. http://280north.com/
    MIT License. http://github.com/280north/narwhal/blob/master/README.md
*/

// Module systems magic dance
(function (definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
    // CommonJS and <script>
    } else {
        definition();
    }
})(function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * ES5 Draft
 * http://www.ecma-international.org/publications/files/drafts/tc39-2009-050.pdf
 *
 * NOTE: this is a draft, and as such, the URL is subject to change.  If the
 * link is broken, check in the parent directory for the latest TC39 PDF.
 * http://www.ecma-international.org/publications/files/drafts/
 *
 * Previous ES5 Draft
 * http://www.ecma-international.org/publications/files/drafts/tc39-2009-025.pdf
 * This is a broken link to the previous draft of ES5 on which most of the
 * numbered specification references and quotes herein were taken.  Updating
 * these references and quotes to reflect the new document would be a welcome
 * volunteer project.
 *
 * @module
 */

/*whatsupdoc*/

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://www.ecma-international.org/publications/files/drafts/tc39-2009-025.pdf

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function")
            throw new TypeError(); // TODO message
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 9. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 10. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 11. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 12. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        // 13. The [[Scope]] internal property of F is unused and need not
        //   exist.
        var bound = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.

                var F = function(){};
                F.prototype = target.prototype;
                var self = new F;

                var result = target.apply(
                    self,
                    args.concat(slice.call(arguments))
                );
                if (result !== null && Object(result) === result)
                    return result;
                return self;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the list
                //   boundArgs in the same order followed by the same values as
                //   the list ExtraArgs in the same order. 5.  Return the
                //   result of calling the [[Call]] internal method of target
                //   providing boundThis as the this value and providing args
                //   as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(slice.call(arguments))
                );

            }

        };
        // XXX bound.length is never writable, so don't even try
        //
        // 16. The length own property of F is given attributes as specified in
        //   15.3.5.1.
        // TODO
        // 17. Set the [[Extensible]] internal property of F to true.
        // TODO
        // 18. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Value]]: null,
        //   [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]:
        //   false}, and false.
        // TODO
        // 19. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Value]]: null,
        //   [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]:
        //   false}, and false.
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property.
        // XXX can't delete it in pure-js.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var slice = prototypeOfArray.slice;
var toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.3.2
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var self = toObject(this),
            thisp = arguments[1],
            i = 0,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object context
                fun.call(thisp, self[i], i, self);
            }
            i++;
        }
    };
}

// ES5 15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var self = toObject(this),
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, self);
        }
        return result;
    };
}

// ES5 15.4.4.20
if (!Array.prototype.filter) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var self = toObject(this),
            length = self.length >>> 0,
            result = [],
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, self))
                result.push(self[i]);
        }
        return result;
    };
}

// ES5 15.4.4.16
if (!Array.prototype.every) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var self = toObject(this),
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, self))
                return false;
        }
        return true;
    };
}

// ES5 15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var self = toObject(this),
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, self))
                return true;
        }
        return false;
    };
}

// ES5 15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var self = toObject(this),
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1)
            throw new TypeError(); // TODO message

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length)
                    throw new TypeError(); // TODO message
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self)
                result = fun.call(void 0, result, self[i], i, self);
        }

        return result;
    };
}

// ES5 15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var self = toObject(this),
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1)
            throw new TypeError(); // TODO message

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0)
                    throw new TypeError(); // TODO message
            } while (true);
        }

        do {
            if (i in this)
                result = fun.call(void 0, result, self[i], i, self);
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = toObject(this),
            length = self.length >>> 0;

        if (!length)
            return -1;

        var i = 0;
        if (arguments.length > 1)
            i = toInteger(arguments[1]);

        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = toObject(this),
            length = self.length >>> 0;

        if (!length)
            return -1;
        var i = length - 1;
        if (arguments.length > 1)
            i = toInteger(arguments[1]);
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i])
                return i;
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.2
if (!Object.getPrototypeOf) {
    // https://github.com/kriskowal/es5-shim/issues#issue/2
    // http://ejohn.org/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    Object.getPrototypeOf = function getPrototypeOf(object) {
        return object.__proto__ || (
            object.constructor ?
            object.constructor.prototype :
            prototypeOfObject
        );
    };
}

// ES5 15.2.3.3
if (!Object.getOwnPropertyDescriptor) {
    var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a " +
                         "non-object: ";
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        if ((typeof object != "object" && typeof object != "function") || object === null)
            throw new TypeError(ERR_NON_OBJECT + object);
        // If object does not owns property return undefined immediately.
        if (!owns(object, property))
            return;

        var descriptor, getter, setter;

        // If object has a property then it's for sure both `enumerable` and
        // `configurable`.
        descriptor =  { enumerable: true, configurable: true };

        // If JS engine supports accessor properties then property may be a
        // getter or setter.
        if (supportsAccessors) {
            // Unfortunately `__lookupGetter__` will return a getter even
            // if object has own non getter property along with a same named
            // inherited getter. To avoid misbehavior we temporary remove
            // `__proto__` so that `__lookupGetter__` will return getter only
            // if it's owned by an object.
            var prototype = object.__proto__;
            object.__proto__ = prototypeOfObject;

            var getter = lookupGetter(object, property);
            var setter = lookupSetter(object, property);

            // Once we have getter and setter we can put values back.
            object.__proto__ = prototype;

            if (getter || setter) {
                if (getter) descriptor.get = getter;
                if (setter) descriptor.set = setter;

                // If it was accessor property we're done and return here
                // in order to avoid adding `value` to the descriptor.
                return descriptor;
            }
        }

        // If we got this far we know that object has an own property that is
        // not an accessor so we set it as a value and return descriptor.
        descriptor.value = object[property];
        return descriptor;
    };
}

// ES5 15.2.3.4
if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        return Object.keys(object);
    };
}

// ES5 15.2.3.5
if (!Object.create) {
    Object.create = function create(prototype, properties) {
        var object;
        if (prototype === null) {
            object = { "__proto__": null };
        } else {
            if (typeof prototype != "object")
                throw new TypeError("typeof prototype["+(typeof prototype)+"] != 'object'");
            var Type = function () {};
            Type.prototype = prototype;
            object = new Type();
            // IE has no built-in implementation of `Object.getPrototypeOf`
            // neither `__proto__`, but this manually setting `__proto__` will
            // guarantee that `Object.getPrototypeOf` will work as expected with
            // objects created using `Object.create`
            object.__proto__ = prototype;
        }
        if (properties !== void 0)
            Object.defineProperties(object, properties);
        return object;
    };
}

// ES5 15.2.3.6

// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/kriskowal/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

function doesDefinePropertyWork(object) {
    try {
        Object.defineProperty(object, "sentinel", {});
        return "sentinel" in object;
    } catch (exception) {
        // returns falsy
    }
}

// check whether defineProperty works if it's given. Otherwise,
// shim partially.
if (Object.defineProperty) {
    var definePropertyWorksOnObject = doesDefinePropertyWork({});
    var definePropertyWorksOnDom = typeof document == "undefined" ||
        doesDefinePropertyWork(document.createElement("div"));
    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
        var definePropertyFallback = Object.defineProperty;
    }
}

if (!Object.defineProperty || definePropertyFallback) {
    var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
    var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: "
    var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " +
                                      "on this javascript engine";

    Object.defineProperty = function defineProperty(object, property, descriptor) {
        if ((typeof object != "object" && typeof object != "function") || object === null)
            throw new TypeError(ERR_NON_OBJECT_TARGET + object);
        if ((typeof descriptor != "object" && typeof descriptor != "function") || descriptor === null)
            throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);

        // make a valiant attempt to use the real defineProperty
        // for I8's DOM elements.
        if (definePropertyFallback) {
            try {
                return definePropertyFallback.call(Object, object, property, descriptor);
            } catch (exception) {
                // try the shim if the real one doesn't work
            }
        }

        // If it's a data property.
        if (owns(descriptor, "value")) {
            // fail silently if "writable", "enumerable", or "configurable"
            // are requested but not supported
            /*
            // alternate approach:
            if ( // can't implement these features; allow false but not true
                !(owns(descriptor, "writable") ? descriptor.writable : true) ||
                !(owns(descriptor, "enumerable") ? descriptor.enumerable : true) ||
                !(owns(descriptor, "configurable") ? descriptor.configurable : true)
            )
                throw new RangeError(
                    "This implementation of Object.defineProperty does not " +
                    "support configurable, enumerable, or writable."
                );
            */

            if (supportsAccessors && (lookupGetter(object, property) ||
                                      lookupSetter(object, property)))
            {
                // As accessors are supported only on engines implementing
                // `__proto__` we can safely override `__proto__` while defining
                // a property to make sure that we don't hit an inherited
                // accessor.
                var prototype = object.__proto__;
                object.__proto__ = prototypeOfObject;
                // Deleting a property anyway since getter / setter may be
                // defined on object itself.
                delete object[property];
                object[property] = descriptor.value;
                // Setting original `__proto__` back now.
                object.__proto__ = prototype;
            } else {
                object[property] = descriptor.value;
            }
        } else {
            if (!supportsAccessors)
                throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            // If we got that far then getters and setters can be defined !!
            if (owns(descriptor, "get"))
                defineGetter(object, property, descriptor.get);
            if (owns(descriptor, "set"))
                defineSetter(object, property, descriptor.set);
        }

        return object;
    };
}

// ES5 15.2.3.7
if (!Object.defineProperties) {
    Object.defineProperties = function defineProperties(object, properties) {
        for (var property in properties) {
            if (owns(properties, property))
                Object.defineProperty(object, property, properties[property]);
        }
        return object;
    };
}

// ES5 15.2.3.8
if (!Object.seal) {
    Object.seal = function seal(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.9
if (!Object.freeze) {
    Object.freeze = function freeze(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// detect a Rhino bug and patch it
try {
    Object.freeze(function () {});
} catch (exception) {
    Object.freeze = (function freeze(freezeObject) {
        return function freeze(object) {
            if (typeof object == "function") {
                return object;
            } else {
                return freezeObject(object);
            }
        };
    })(Object.freeze);
}

// ES5 15.2.3.10
if (!Object.preventExtensions) {
    Object.preventExtensions = function preventExtensions(object) {
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}

// ES5 15.2.3.11
if (!Object.isSealed) {
    Object.isSealed = function isSealed(object) {
        return false;
    };
}

// ES5 15.2.3.12
if (!Object.isFrozen) {
    Object.isFrozen = function isFrozen(object) {
        return false;
    };
}

// ES5 15.2.3.13
if (!Object.isExtensible) {
    Object.isExtensible = function isExtensible(object) {
        // 1. If Type(O) is not Object throw a TypeError exception.
        if (Object(object) === object) {
            throw new TypeError(); // TODO message
        }
        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
        var name = '';
        while (owns(object, name)) {
            name += '?';
        }
        object[name] = true;
        var returnValue = owns(object, name);
        delete object[name];
        return returnValue;
    };
}

// ES5 15.2.3.14
// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
if (!Object.keys) {

    var hasDontEnumBug = true,
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null})
        hasDontEnumBug = false;

    Object.keys = function keys(object) {

        if ((typeof object != "object" && typeof object != "function") || object === null)
            throw new TypeError("Object.keys called on a non-object");

        var keys = [];
        for (var name in object) {
            if (owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                var dontEnum = dontEnums[i];
                if (owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }

        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// Format a Date object as a string according to a simplified subset of the ISO 8601
// standard as defined in 15.9.1.15.
if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value;
        if (!isFinite(this))
            throw new RangeError;

        // the date time string format is specified in 15.9.1.15.
        result = [this.getUTCFullYear(), this.getUTCMonth() + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two digits.
            if (value < 10)
                result[length] = "0" + value;
        }
        // pad milliseconds to have three digits.
        return result.slice(0, 3).join("-") + "T" + result.slice(3).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z";
    }
}

// ES5 15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// ES5 15.9.5.44
if (!Date.prototype.toJSON) {
    Date.prototype.toJSON = function toJSON(key) {
        // This function provides a String representation of a Date object for
        // use by JSON.stringify (15.12.3). When the toJSON method is called
        // with argument key, the following steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ToPrimitive(O, hint Number).
        // 3. If tv is a Number and is not finite, return null.
        // XXX
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof this.toISOString != "function")
            throw new TypeError(); // TODO message
        // 6. Return the result of calling the [[Call]] internal method of
        // toISO with O as the this value and an empty argument list.
        return this.toISOString();

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// 15.9.4.2 Date.parse (string)
// 15.9.1.15 Date Time String Format
// Date.parse
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (isNaN(Date.parse("2011-06-15T21:40:05+06:00"))) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        var Date = function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format. This pattern does not implement
        // extended years (15.9.1.15.1), as `Date.UTC` cannot parse them.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4})" + // four-digit year capture
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:\\.(\\d{3}))?" + // milliseconds capture
                ")?" +
            "(?:" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate)
            Date[key] = NativeDate[key];

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                match.shift(); // kill match[0], the full match
                // parse months, days, hours, minutes, seconds, and milliseconds
                for (var i = 1; i < 7; i++) {
                    // provide default values if necessary
                    match[i] = +(match[i] || (i < 3 ? 1 : 0));
                    // match[1] is the month. Months are 0-11 in JavaScript
                    // `Date` objects, but 1-12 in ISO notation, so we
                    // decrement.
                    if (i == 1)
                        match[i]--;
                }

                // parse the UTC offset component
                var minuteOffset = +match.pop(), hourOffset = +match.pop(), sign = match.pop();

                // compute the explicit time zone offset if specified
                var offset = 0;
                if (sign) {
                    // detect invalid offsets and return early
                    if (hourOffset > 23 || minuteOffset > 59)
                        return NaN;

                    // express the provided time zone offset in minutes. The offset is
                    // negative for time zones west of UTC; positive otherwise.
                    offset = (hourOffset * 60 + minuteOffset) * 6e4 * (sign == "+" ? -1 : 1);
                }

                // compute a new UTC date value, accounting for the optional offset
                return NativeDate.UTC.apply(this, match) + offset;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

//
// String
// ======
//

// ES5 15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
    };
}

//
// Util
// ======
//

// http://jsperf.com/to-integer
var toInteger = function (n) {
    n = +n;
    if (n !== n) // isNaN
        n = -1;
    else if (n !== 0 && n !== (1/0) && n !== -(1/0))
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    return n;
};

var prepareString = "a"[0] != "a",
    // ES5 9.9
    toObject = function (o) {
        if (o == null) { // this matches both null and undefined
            throw new TypeError(); // TODO message
        }
        // If the implementation doesn't support by-index access of
        // string characters (ex. IE < 7), split the string
        if (prepareString && typeof o == "string" && o) {
            return o.split("");
        }
        return Object(o);
    };
});
(function() {
  var Batman, __slice = [].slice;

  Batman = function() {
    var mixins;
    mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor,
        result = func.apply(child, args),
        t = typeof result;
      return t == "object" || t == "function" ? result || child : child;
    })(Batman.Object, mixins, function() {});
  };

  Batman.version = '0.14.1';

  Batman.config = {
    pathPrefix: '/',
    viewPrefix: 'views',
    fetchRemoteViews: true,
    usePushState: false,
    minificationErrors: true
  };

  (Batman.container = (function() {
    return this;
  })()).Batman = Batman;

  if (typeof define === 'function') {
    define('batman', [], function() {
      return Batman;
    });
  }

  Batman.exportHelpers = function(onto) {
    var k, _i, _len, _ref;
    _ref = ['mixin', 'extend', 'unmixin', 'redirect', 'typeOf', 'redirect', 'setImmediate', 'clearImmediate'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      onto["$" + k] = Batman[k];
    }
    return onto;
  };

  Batman.exportGlobals = function() {
    return Batman.exportHelpers(Batman.container);
  };

}).call(this);

(function() {
  var _Batman;

  Batman._Batman = _Batman = (function() {

    function _Batman(object) {
      this.object = object;
    }

    _Batman.prototype.check = function(object) {
      if (object !== this.object) {
        object._batman = new Batman._Batman(object);
        return false;
      }
      return true;
    };

    _Batman.prototype.get = function(key) {
      var reduction, results;
      results = this.getAll(key);
      switch (results.length) {
      case 0:
        return void 0;
      case 1:
        return results[0];
      default:
        reduction = results[0].concat != null ?
        function(a, b) {
          return a.concat(b);
        } : results[0].merge != null ?
        function(a, b) {
          return a.merge(b);
        } : results.every(function(x) {
          return typeof x === 'object';
        }) ? (results.unshift({}), function(a, b) {
          return Batman.extend(a, b);
        }) : void 0;
        if (reduction) {
          return results.reduceRight(reduction);
        } else {
          return results;
        }
      }
    };

    _Batman.prototype.getFirst = function(key) {
      var results;
      results = this.getAll(key);
      return results[0];
    };

    _Batman.prototype.getAll = function(keyOrGetter) {
      var getter, results, val;
      if (typeof keyOrGetter === 'function') {
        getter = keyOrGetter;
      } else {
        getter = function(ancestor) {
          var _ref;
          return (_ref = ancestor._batman) != null ? _ref[keyOrGetter] : void 0;
        };
      }
      results = this.ancestors(getter);
      if (val = getter(this.object)) {
        results.unshift(val);
      }
      return results;
    };

    _Batman.prototype.ancestors = function(getter) {
      var ancestor, results, val, _i, _len, _ref;
      this._allAncestors || (this._allAncestors = this.allAncestors());
      if (getter) {
        results = [];
        _ref = this._allAncestors;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          ancestor = _ref[_i];
          val = getter(ancestor);
          if (val != null) {
            results.push(val);
          }
        }
        return results;
      } else {
        return this._allAncestors;
      }
    };

    _Batman.prototype.allAncestors = function() {
      var isClass, parent, proto, results, _ref, _ref1;
      results = [];
      isClass = !! this.object.prototype;
      parent = isClass ? (_ref = this.object.__super__) != null ? _ref.constructor : void 0 : (proto = Object.getPrototypeOf(this.object)) === this.object ? this.object.constructor.__super__ : proto;
      if (parent != null) {
        if ((_ref1 = parent._batman) != null) {
          _ref1.check(parent);
        }
        results.push(parent);
        if (parent._batman != null) {
          results = results.concat(parent._batman.allAncestors());
        }
      }
      return results;
    };

    _Batman.prototype.set = function(key, value) {
      return this[key] = value;
    };

    return _Batman;

  })();

}).call(this);

(function() {
  var chr, _encodedChars, _encodedCharsPattern, _entityMap, _implementImmediates, _objectToString, _unsafeChars, _unsafeCharsPattern, __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }
    return -1;
  };

  Batman.typeOf = function(object) {
    if (typeof object === 'undefined') {
      return "Undefined";
    }
    return _objectToString.call(object).slice(8, -1);
  };

  _objectToString = Object.prototype.toString;

  Batman.extend = function() {
    var key, object, objects, to, value, _i, _len;
    to = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = objects.length; _i < _len; _i++) {
      object = objects[_i];
      for (key in object) {
        value = object[key];
        to[key] = value;
      }
    }
    return to;
  };

  Batman.mixin = function() {
    var hasSet, key, mixin, mixins, to, value, _i, _len;
    to = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    hasSet = typeof to.set === 'function';
    for (_i = 0, _len = mixins.length; _i < _len; _i++) {
      mixin = mixins[_i];
      if (Batman.typeOf(mixin) !== 'Object') {
        continue;
      }
      for (key in mixin) {
        if (!__hasProp.call(mixin, key)) continue;
        value = mixin[key];
        if (key === 'initialize' || key === 'uninitialize' || key === 'prototype') {
          continue;
        }
        if (hasSet) {
          to.set(key, value);
        } else if (to.nodeName != null) {
          Batman.data(to, key, value);
        } else {
          to[key] = value;
        }
      }
      if (typeof mixin.initialize === 'function') {
        mixin.initialize.call(to);
      }
    }
    return to;
  };

  Batman.unmixin = function() {
    var from, key, mixin, mixins, _i, _len;
    from = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = mixins.length; _i < _len; _i++) {
      mixin = mixins[_i];
      for (key in mixin) {
        if (key === 'initialize' || key === 'uninitialize') {
          continue;
        }
        delete from[key];
      }
      if (typeof mixin.uninitialize === 'function') {
        mixin.uninitialize.call(from);
      }
    }
    return from;
  };

  Batman._functionName = Batman.functionName = function(f) {
    var _ref;
    if (f.__name__) {
      return f.__name__;
    }
    if (f.name) {
      return f.name;
    }
    return (_ref = f.toString().match(/\W*function\s+([\w\$]+)\(/)) != null ? _ref[1] : void 0;
  };

  Batman._isChildOf = Batman.isChildOf = function(parentNode, childNode) {
    var node;
    node = childNode.parentNode;
    while (node) {
      if (node === parentNode) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  _implementImmediates = function(container) {
    var canUsePostMessage, count, functions, getHandle, handler, prefix, tasks;
    canUsePostMessage = function() {
      var async, oldMessage;
      if (!container.postMessage) {
        return false;
      }
      async = true;
      oldMessage = container.onmessage;
      container.onmessage = function() {
        return async = false;
      };
      container.postMessage("", "*");
      container.onmessage = oldMessage;
      return async;
    };
    tasks = new Batman.SimpleHash;
    count = 0;
    getHandle = function() {
      return "go" + (++count);
    };
    if (container.setImmediate && container.clearImmediate) {
      Batman.setImmediate = container.setImmediate;
      return Batman.clearImmediate = container.clearImmediate;
    } else if (canUsePostMessage()) {
      prefix = 'com.batman.';
      functions = new Batman.SimpleHash;
      handler = function(e) {
        var handle, _base;
        if (!~e.data.search(prefix)) {
          return;
        }
        handle = e.data.substring(prefix.length);
        return typeof(_base = tasks.unset(handle)) === "function" ? _base() : void 0;
      };
      if (container.addEventListener) {
        container.addEventListener('message', handler, false);
      } else {
        container.attachEvent('onmessage', handler);
      }
      Batman.setImmediate = function(f) {
        var handle;
        tasks.set(handle = getHandle(), f);
        container.postMessage(prefix + handle, "*");
        return handle;
      };
      return Batman.clearImmediate = function(handle) {
        return tasks.unset(handle);
      };
    } else if (typeof document !== 'undefined' && __indexOf.call(document.createElement("script"), "onreadystatechange") >= 0) {
      Batman.setImmediate = function(f) {
        var handle, script;
        handle = getHandle();
        script = document.createElement("script");
        script.onreadystatechange = function() {
          var _base;
          if (typeof(_base = tasks.get(handle)) === "function") {
            _base();
          }
          script.onreadystatechange = null;
          script.parentNode.removeChild(script);
          return script = null;
        };
        document.documentElement.appendChild(script);
        return handle;
      };
      return Batman.clearImmediate = function(handle) {
        return tasks.unset(handle);
      };
    } else if (typeof process !== "undefined" && process !== null ? process.nextTick : void 0) {
      functions = {};
      Batman.setImmediate = function(f) {
        var handle;
        handle = getHandle();
        functions[handle] = f;
        process.nextTick(function() {
          if (typeof functions[handle] === "function") {
            functions[handle]();
          }
          return delete functions[handle];
        });
        return handle;
      };
      return Batman.clearImmediate = function(handle) {
        return delete functions[handle];
      };
    } else {
      Batman.setImmediate = function(f) {
        return setTimeout(f, 0);
      };
      return Batman.clearImmediate = function(handle) {
        return clearTimeout(handle);
      };
    }
  };

  Batman.setImmediate = function() {
    _implementImmediates(Batman.container);
    return Batman.setImmediate.apply(this, arguments);
  };

  Batman.clearImmediate = function() {
    _implementImmediates(Batman.container);
    return Batman.clearImmediate.apply(this, arguments);
  };

  Batman.forEach = function(container, iterator, ctx) {
    var e, i, k, v, _i, _len, _results, _results1;
    if (container.forEach) {
      return container.forEach(iterator, ctx);
    } else if (container.indexOf) {
      _results = [];
      for (i = _i = 0, _len = container.length; _i < _len; i = ++_i) {
        e = container[i];
        _results.push(iterator.call(ctx, e, i, container));
      }
      return _results;
    } else {
      _results1 = [];
      for (k in container) {
        v = container[k];
        _results1.push(iterator.call(ctx, k, v, container));
      }
      return _results1;
    }
  };

  Batman.objectHasKey = function(object, key) {
    if (typeof object.hasKey === 'function') {
      return object.hasKey(key);
    } else {
      return key in object;
    }
  };

  Batman.contains = function(container, item) {
    if (container.indexOf) {
      return __indexOf.call(container, item) >= 0;
    } else if (typeof container.has === 'function') {
      return container.has(item);
    } else {
      return Batman.objectHasKey(container, item);
    }
  };

  Batman.get = function(base, key) {
    if (typeof base.get === 'function') {
      return base.get(key);
    } else {
      return Batman.Property.forBaseAndKey(base, key).getValue();
    }
  };

  Batman.getPath = function(base, segments) {
    var segment, _i, _len;
    for (_i = 0, _len = segments.length; _i < _len; _i++) {
      segment = segments[_i];
      if (base != null) {
        base = Batman.get(base, segment);
        if (base == null) {
          return base;
        }
      } else {
        return void 0;
      }
    }
    return base;
  };

  _entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&#34;",
    "'": "&#39;"
  };

  _unsafeChars = [];

  _encodedChars = [];

  for (chr in _entityMap) {
    _unsafeChars.push(chr);
    _encodedChars.push(_entityMap[chr]);
  }

  _unsafeCharsPattern = new RegExp("[" + (_unsafeChars.join('')) + "]", "g");

  _encodedCharsPattern = new RegExp("(" + (_encodedChars.join('|')) + ")", "g");

  Batman.escapeHTML = (function() {
    return function(s) {
      return ("" + s).replace(_unsafeCharsPattern, function(c) {
        return _entityMap[c];
      });
    };
  })();

  Batman.unescapeHTML = (function() {
    return function(s) {
      var node;
      if (s == null) {
        return;
      }
      node = Batman._unescapeHTMLNode || (Batman._unescapeHTMLNode = document.createElement('DIV'));
      node.innerHTML = s;
      return Batman.DOM.innerText(node);
    };
  })();

  Batman.translate = function(x, values) {
    if (values == null) {
      values = {};
    }
    return Batman.helpers.interpolate(Batman.get(Batman.translate.messages, x), values);
  };

  Batman.translate.messages = {};

  Batman.t = function() {
    return Batman.translate.apply(Batman, arguments);
  };

  Batman.redirect = function(url) {
    var _ref;
    return (_ref = Batman.navigator) != null ? _ref.redirect(url) : void 0;
  };

  Batman.initializeObject = function(object) {
    if (object._batman != null) {
      return object._batman.check(object);
    } else {
      return object._batman = new Batman._Batman(object);
    }
  };

}).call(this);

(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }
    return -1;
  };

  Batman.Inflector = (function() {

    Inflector.prototype.plural = function(regex, replacement) {
      return this._plural.unshift([regex, replacement]);
    };

    Inflector.prototype.singular = function(regex, replacement) {
      return this._singular.unshift([regex, replacement]);
    };

    Inflector.prototype.human = function(regex, replacement) {
      return this._human.unshift([regex, replacement]);
    };

    Inflector.prototype.uncountable = function() {
      var strings;
      strings = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this._uncountable = this._uncountable.concat(strings.map(function(x) {
        return new RegExp("" + x + "$", 'i');
      }));
    };

    Inflector.prototype.irregular = function(singular, plural) {
      if (singular.charAt(0) === plural.charAt(0)) {
        this.plural(new RegExp("(" + (singular.charAt(0)) + ")" + (singular.slice(1)) + "$", "i"), "$1" + plural.slice(1));
        this.plural(new RegExp("(" + (singular.charAt(0)) + ")" + (plural.slice(1)) + "$", "i"), "$1" + plural.slice(1));
        return this.singular(new RegExp("(" + (plural.charAt(0)) + ")" + (plural.slice(1)) + "$", "i"), "$1" + singular.slice(1));
      } else {
        this.plural(new RegExp("" + singular + "$", 'i'), plural);
        this.plural(new RegExp("" + plural + "$", 'i'), plural);
        return this.singular(new RegExp("" + plural + "$", 'i'), singular);
      }
    };

    function Inflector() {
      this._plural = [];
      this._singular = [];
      this._uncountable = [];
      this._human = [];
    }

    Inflector.prototype.ordinalize = function(number) {
      var absNumber, _ref;
      absNumber = Math.abs(parseInt(number));
      if (_ref = absNumber % 100, __indexOf.call([11, 12, 13], _ref) >= 0) {
        return number + "th";
      } else {
        switch (absNumber % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
        default:
          return number + "th";
        }
      }
    };

    Inflector.prototype.pluralize = function(word) {
      var regex, replace_string, uncountableRegex, _i, _j, _len, _len1, _ref, _ref1, _ref2;
      _ref = this._uncountable;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        uncountableRegex = _ref[_i];
        if (uncountableRegex.test(word)) {
          return word;
        }
      }
      _ref1 = this._plural;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _ref2 = _ref1[_j], regex = _ref2[0], replace_string = _ref2[1];
        if (regex.test(word)) {
          return word.replace(regex, replace_string);
        }
      }
      return word;
    };

    Inflector.prototype.singularize = function(word) {
      var regex, replace_string, uncountableRegex, _i, _j, _len, _len1, _ref, _ref1, _ref2;
      _ref = this._uncountable;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        uncountableRegex = _ref[_i];
        if (uncountableRegex.test(word)) {
          return word;
        }
      }
      _ref1 = this._singular;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _ref2 = _ref1[_j], regex = _ref2[0], replace_string = _ref2[1];
        if (regex.test(word)) {
          return word.replace(regex, replace_string);
        }
      }
      return word;
    };

    Inflector.prototype.humanize = function(word) {
      var regex, replace_string, _i, _len, _ref, _ref1;
      _ref = this._human;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], regex = _ref1[0], replace_string = _ref1[1];
        if (regex.test(word)) {
          return word.replace(regex, replace_string);
        }
      }
      return word;
    };

    return Inflector;

  })();

}).call(this);

(function() {
  var Inflector, camelize_rx, capitalize_rx, humanize_rx1, humanize_rx2, humanize_rx3, underscore_rx1, underscore_rx2;

  camelize_rx = /(?:^|_|\-)(.)/g;

  capitalize_rx = /(^|\s)([a-z])/g;

  underscore_rx1 = /([A-Z]+)([A-Z][a-z])/g;

  underscore_rx2 = /([a-z\d])([A-Z])/g;

  humanize_rx1 = /_id$/;

  humanize_rx2 = /_|-/g;

  humanize_rx3 = /^\w/g;

  Batman.helpers = {
    ordinalize: function() {
      return Batman.helpers.inflector.ordinalize.apply(Batman.helpers.inflector, arguments);
    },
    singularize: function() {
      return Batman.helpers.inflector.singularize.apply(Batman.helpers.inflector, arguments);
    },
    pluralize: function(count, singular, plural, includeCount) {
      var result;
      if (includeCount == null) {
        includeCount = true;
      }
      if (arguments.length < 2) {
        return Batman.helpers.inflector.pluralize(count);
      } else {
        result = +count === 1 ? singular : plural || Batman.helpers.inflector.pluralize(singular);
        if (includeCount) {
          result = ("" + (count || 0) + " ") + result;
        }
        return result;
      }
    },
    camelize: function(string, firstLetterLower) {
      string = string.replace(camelize_rx, function(str, p1) {
        return p1.toUpperCase();
      });
      if (firstLetterLower) {
        return string.substr(0, 1).toLowerCase() + string.substr(1);
      } else {
        return string;
      }
    },
    underscore: function(string) {
      return string.replace(underscore_rx1, '$1_$2').replace(underscore_rx2, '$1_$2').replace('-', '_').toLowerCase();
    },
    capitalize: function(string) {
      return string.replace(capitalize_rx, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
      });
    },
    trim: function(string) {
      if (string) {
        return string.trim();
      } else {
        return "";
      }
    },
    interpolate: function(stringOrObject, keys) {
      var key, string, value;
      if (typeof stringOrObject === 'object') {
        string = stringOrObject[keys.count];
        if (!string) {
          string = stringOrObject['other'];
        }
      } else {
        string = stringOrObject;
      }
      for (key in keys) {
        value = keys[key];
        string = string.replace(new RegExp("%\\{" + key + "\\}", "g"), value);
      }
      return string;
    },
    humanize: function(string) {
      string = Batman.helpers.underscore(string);
      string = Batman.helpers.inflector.humanize(string);
      return string.replace(humanize_rx1, '').replace(humanize_rx2, ' ').replace(humanize_rx3, function(match) {
        return match.toUpperCase();
      });
    }
  };

  Inflector = new Batman.Inflector;

  Batman.helpers.inflector = Inflector;

  Inflector.plural(/$/, 's');

  Inflector.plural(/s$/i, 's');

  Inflector.plural(/(ax|test)is$/i, '$1es');

  Inflector.plural(/(octop|vir)us$/i, '$1i');

  Inflector.plural(/(octop|vir)i$/i, '$1i');

  Inflector.plural(/(alias|status)$/i, '$1es');

  Inflector.plural(/(bu)s$/i, '$1ses');

  Inflector.plural(/(buffal|tomat)o$/i, '$1oes');

  Inflector.plural(/([ti])um$/i, '$1a');

  Inflector.plural(/([ti])a$/i, '$1a');

  Inflector.plural(/sis$/i, 'ses');

  Inflector.plural(/(?:([^f])fe|([lr])f)$/i, '$1$2ves');

  Inflector.plural(/(hive)$/i, '$1s');

  Inflector.plural(/([^aeiouy]|qu)y$/i, '$1ies');

  Inflector.plural(/(x|ch|ss|sh)$/i, '$1es');

  Inflector.plural(/(matr|vert|ind)(?:ix|ex)$/i, '$1ices');

  Inflector.plural(/([m|l])ouse$/i, '$1ice');

  Inflector.plural(/([m|l])ice$/i, '$1ice');

  Inflector.plural(/^(ox)$/i, '$1en');

  Inflector.plural(/^(oxen)$/i, '$1');

  Inflector.plural(/(quiz)$/i, '$1zes');

  Inflector.singular(/s$/i, '');

  Inflector.singular(/(n)ews$/i, '$1ews');

  Inflector.singular(/([ti])a$/i, '$1um');

  Inflector.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, '$1$2sis');

  Inflector.singular(/(^analy)ses$/i, '$1sis');

  Inflector.singular(/([^f])ves$/i, '$1fe');

  Inflector.singular(/(hive)s$/i, '$1');

  Inflector.singular(/(tive)s$/i, '$1');

  Inflector.singular(/([lr])ves$/i, '$1f');

  Inflector.singular(/([^aeiouy]|qu)ies$/i, '$1y');

  Inflector.singular(/(s)eries$/i, '$1eries');

  Inflector.singular(/(m)ovies$/i, '$1ovie');

  Inflector.singular(/(x|ch|ss|sh)es$/i, '$1');

  Inflector.singular(/([m|l])ice$/i, '$1ouse');

  Inflector.singular(/(bus)es$/i, '$1');

  Inflector.singular(/(o)es$/i, '$1');

  Inflector.singular(/(shoe)s$/i, '$1');

  Inflector.singular(/(cris|ax|test)es$/i, '$1is');

  Inflector.singular(/(octop|vir)i$/i, '$1us');

  Inflector.singular(/(alias|status)es$/i, '$1');

  Inflector.singular(/^(ox)en/i, '$1');

  Inflector.singular(/(vert|ind)ices$/i, '$1ex');

  Inflector.singular(/(matr)ices$/i, '$1ix');

  Inflector.singular(/(quiz)zes$/i, '$1');

  Inflector.singular(/(database)s$/i, '$1');

  Inflector.irregular('person', 'people');

  Inflector.irregular('man', 'men');

  Inflector.irregular('child', 'children');

  Inflector.irregular('sex', 'sexes');

  Inflector.irregular('move', 'moves');

  Inflector.irregular('cow', 'kine');

  Inflector.irregular('zombie', 'zombies');

  Inflector.uncountable('equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'jeans');

}).call(this);

(function() {
  var developer;

  Batman.developer = {
    suppressed: false,
    DevelopmentError: (function() {
      var DevelopmentError;
      DevelopmentError = function(message) {
        this.message = message;
        return this.name = "DevelopmentError";
      };
      DevelopmentError.prototype = Error.prototype;
      return DevelopmentError;
    })(),
    _ie_console: function(f, args) {
      var arg, _i, _len, _results;
      if (args.length !== 1) {
        if (typeof console !== "undefined" && console !== null) {
          console[f]("..." + f + " of " + args.length + " items...");
        }
      }
      _results = [];
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        _results.push(typeof console !== "undefined" && console !== null ? console[f](arg) : void 0);
      }
      return _results;
    },
    suppress: function(f) {
      developer.suppressed = true;
      if (f) {
        f();
        return developer.suppressed = false;
      }
    },
    unsuppress: function() {
      return developer.suppressed = false;
    },
    log: function() {
      if (developer.suppressed || !((typeof console !== "undefined" && console !== null ? console.log : void 0) != null)) {
        return;
      }
      if (console.log.apply) {
        return console.log.apply(console, arguments);
      } else {
        return developer._ie_console("log", arguments);
      }
    },
    warn: function() {
      if (developer.suppressed || !((typeof console !== "undefined" && console !== null ? console.warn : void 0) != null)) {
        return;
      }
      if (console.warn.apply) {
        return console.warn.apply(console, arguments);
      } else {
        return developer._ie_console("warn", arguments);
      }
    },
    error: function(message) {
      throw new developer.DevelopmentError(message);
    },
    assert: function(result, message) {
      if (!result) {
        return developer.error(message);
      }
    },
    "do": function(f) {
      if (!developer.suppressed) {
        return f();
      }
    },
    addFilters: function() {
      return Batman.extend(Batman.Filters, {
        log: function(value, key) {
          if (typeof console !== "undefined" && console !== null) {
            if (typeof console.log === "function") {
              console.log(arguments);
            }
          }
          return value;
        },
        logStack: function(value) {
          if (typeof console !== "undefined" && console !== null) {
            if (typeof console.log === "function") {
              console.log(developer.currentFilterStack);
            }
          }
          return value;
        }
      });
    },
    deprecated: function(deprecatedName, upgradeString) {
      return Batman.developer.warn("" + deprecatedName + " has been deprecated.", upgradeString || '');
    }
  };

  developer = Batman.developer;

  Batman.developer.assert((function() {}).bind, "Error! Batman needs Function.bind to work! Please shim it using something like es5-shim or augmentjs!");

}).call(this);

(function() {

  Batman.Event = (function() {

    Event.forBaseAndKey = function(base, key) {
      if (base.isEventEmitter) {
        return base.event(key);
      } else {
        return new Batman.Event(base, key);
      }
    };

    function Event(base, key) {
      this.base = base;
      this.key = key;
      this._preventCount = 0;
    }

    Event.prototype.isEvent = true;

    Event.prototype.isEqual = function(other) {
      return this.constructor === other.constructor && this.base === other.base && this.key === other.key;
    };

    Event.prototype.hashKey = function() {
      var key;
      this.hashKey = function() {
        return key;
      };
      return key = "<Batman.Event base: " + (Batman.Hash.prototype.hashKeyFor(this.base)) + ", key: \"" + (Batman.Hash.prototype.hashKeyFor(this.key)) + "\">";
    };

    Event.prototype.addHandler = function(handler) {
      this.handlers || (this.handlers = []);
      if (this.handlers.indexOf(handler) === -1) {
        this.handlers.push(handler);
      }
      if (this.oneShot) {
        this.autofireHandler(handler);
      }
      return this;
    };

    Event.prototype.removeHandler = function(handler) {
      var index;
      if (this.handlers && (index = this.handlers.indexOf(handler)) !== -1) {
        this.handlers.splice(index, 1);
      }
      return this;
    };

    Event.prototype.eachHandler = function(iterator) {
      var ancestor, key, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _results;
      if ((_ref = this.handlers) != null) {
        _ref.slice().forEach(iterator);
      }
      if ((_ref1 = this.base) != null ? _ref1.isEventEmitter : void 0) {
        key = this.key;
        _ref3 = (_ref2 = this.base._batman) != null ? _ref2.ancestors() : void 0;
        _results = [];
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          ancestor = _ref3[_i];
          if (ancestor.isEventEmitter && ((_ref4 = ancestor._batman) != null ? (_ref5 = _ref4.events) != null ? _ref5.hasOwnProperty(key) : void 0 : void 0)) {
            _results.push((_ref6 = ancestor.event(key, false)) != null ? (_ref7 = _ref6.handlers) != null ? _ref7.slice().forEach(iterator) : void 0 : void 0);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    Event.prototype.clearHandlers = function() {
      return this.handlers = void 0;
    };

    Event.prototype.handlerContext = function() {
      return this.base;
    };

    Event.prototype.prevent = function() {
      return ++this._preventCount;
    };

    Event.prototype.allow = function() {
      if (this._preventCount) {
        --this._preventCount;
      }
      return this._preventCount;
    };

    Event.prototype.isPrevented = function() {
      return this._preventCount > 0;
    };

    Event.prototype.autofireHandler = function(handler) {
      if (this._oneShotFired && (this._oneShotArgs != null)) {
        return handler.apply(this.handlerContext(), this._oneShotArgs);
      }
    };

    Event.prototype.resetOneShot = function() {
      this._oneShotFired = false;
      return this._oneShotArgs = null;
    };

    Event.prototype.fire = function() {
      return this.fireWithContext(this.handlerContext(), arguments);
    };

    Event.prototype.fireWithContext = function(context, args) {
      if (this.isPrevented() || this._oneShotFired) {
        return false;
      }
      if (this.oneShot) {
        this._oneShotFired = true;
        this._oneShotArgs = args;
      }
      return this.eachHandler(function(handler) {
        return handler.apply(context, args);
      });
    };

    Event.prototype.allowAndFire = function() {
      return this.allowAndFireWithContext(this.handlerContext, arguments);
    };

    Event.prototype.allowAndFireWithContext = function(context, args) {
      this.allow();
      return this.fireWithContext(context, args);
    };

    return Event;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PropertyEvent = (function(_super) {

    __extends(PropertyEvent, _super);

    function PropertyEvent() {
      return PropertyEvent.__super__.constructor.apply(this, arguments);
    }

    PropertyEvent.prototype.eachHandler = function(iterator) {
      return this.base.eachObserver(iterator);
    };

    PropertyEvent.prototype.handlerContext = function() {
      return this.base.base;
    };

    return PropertyEvent;

  })(Batman.Event);

}).call(this);

(function() {
  var __slice = [].slice;

  Batman.EventEmitter = {
    isEventEmitter: true,
    hasEvent: function(key) {
      var _ref, _ref1;
      return (_ref = this._batman) != null ? typeof _ref.get === "function" ? (_ref1 = _ref.get('events')) != null ? _ref1.hasOwnProperty(key) : void 0 : void 0 : void 0;
    },
    event: function(key, createEvent) {
      var ancestor, eventClass, events, existingEvent, newEvent, _base, _i, _len, _ref, _ref1, _ref2, _ref3;
      if (createEvent == null) {
        createEvent = true;
      }
      Batman.initializeObject(this);
      eventClass = this.eventClass || Batman.Event;
      if ((_ref = this._batman.events) != null ? _ref.hasOwnProperty(key) : void 0) {
        return existingEvent = this._batman.events[key];
      } else {
        _ref1 = this._batman.ancestors();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          ancestor = _ref1[_i];
          existingEvent = (_ref2 = ancestor._batman) != null ? (_ref3 = _ref2.events) != null ? _ref3[key] : void 0 : void 0;
          if (existingEvent) {
            break;
          }
        }
        if (createEvent || (existingEvent != null ? existingEvent.oneShot : void 0)) {
          events = (_base = this._batman).events || (_base.events = {});
          newEvent = events[key] = new eventClass(this, key);
          newEvent.oneShot = existingEvent != null ? existingEvent.oneShot : void 0;
          return newEvent;
        } else {
          return existingEvent;
        }
      }
    },
    on: function() {
      var handler, key, keys, _i, _j, _len, _results;
      keys = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), handler = arguments[_i++];
      _results = [];
      for (_j = 0, _len = keys.length; _j < _len; _j++) {
        key = keys[_j];
        _results.push(this.event(key).addHandler(handler));
      }
      return _results;
    },
    once: function(key, handler) {
      var event, handlerWrapper;
      event = this.event(key);
      handlerWrapper = function() {
        handler.apply(this, arguments);
        return event.removeHandler(handlerWrapper);
      };
      return event.addHandler(handlerWrapper);
    },
    registerAsMutableSource: function() {
      return Batman.Property.registerSource(this);
    },
    mutation: function(wrappedFunction) {
      return function() {
        var result, _ref;
        result = wrappedFunction.apply(this, arguments);
        if ((_ref = this.event('change', false)) != null) {
          _ref.fire(this, this);
        }
        return result;
      };
    },
    prevent: function(key) {
      this.event(key).prevent();
      return this;
    },
    allow: function(key) {
      this.event(key).allow();
      return this;
    },
    isPrevented: function(key) {
      var _ref;
      return (_ref = this.event(key, false)) != null ? _ref.isPrevented() : void 0;
    },
    fire: function() {
      var args, key, _ref;
      key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = this.event(key, false)) != null ? _ref.fireWithContext(this, args) : void 0;
    },
    allowAndFire: function() {
      var args, key, _ref;
      key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = this.event(key, false)) != null ? _ref.allowAndFireWithContext(this, args) : void 0;
    }
  };

}).call(this);

(function() {
  var __slice = [].slice;

  Batman.Enumerable = {
    isEnumerable: true,
    map: function(f, ctx) {
      var result;
      if (ctx == null) {
        ctx = Batman.container;
      }
      result = [];
      this.forEach(function() {
        return result.push(f.apply(ctx, arguments));
      });
      return result;
    },
    mapToProperty: function(key) {
      var result;
      result = [];
      this.forEach(function(item) {
        return result.push(item.get(key));
      });
      return result;
    },
    every: function(f, ctx) {
      var result;
      if (ctx == null) {
        ctx = Batman.container;
      }
      result = true;
      this.forEach(function() {
        return result = result && f.apply(ctx, arguments);
      });
      return result;
    },
    some: function(f, ctx) {
      var result;
      if (ctx == null) {
        ctx = Batman.container;
      }
      result = false;
      this.forEach(function() {
        return result = result || f.apply(ctx, arguments);
      });
      return result;
    },
    reduce: function(f, accumulator) {
      var count, initialValuePassed, self;
      count = 0;
      self = this;
      if (accumulator != null) {
        initialValuePassed = true;
      } else {
        initialValuePassed = false;
      }
      this.forEach(function() {
        if (!initialValuePassed) {
          accumulator = arguments[0];
          initialValuePassed = true;
          return;
        }
        return accumulator = f.apply(null, [accumulator].concat(__slice.call(arguments), [count], [self]));
      });
      return accumulator;
    },
    filter: function(f) {
      var result, wrap;
      result = new this.constructor;
      if (result.add) {
        wrap = function(result, element) {
          if (f(element)) {
            result.add(element);
          }
          return result;
        };
      } else if (result.set) {
        wrap = function(result, key, value) {
          if (f(key, value)) {
            result.set(key, value);
          }
          return result;
        };
      } else {
        if (!result.push) {
          result = [];
        }
        wrap = function(result, element) {
          if (f(element)) {
            result.push(element);
          }
          return result;
        };
      }
      return this.reduce(wrap, result);
    },
    inGroupsOf: function(groupSize) {
      var current, i, result;
      result = [];
      current = false;
      i = 0;
      this.forEach(function(element) {
        if (i++ % groupSize === 0) {
          current = [];
          result.push(current);
        }
        return current.push(element);
      });
      return result;
    }
  };

}).call(this);

(function() {
  var _objectToString, __slice = [].slice;

  _objectToString = Object.prototype.toString;

  Batman.SimpleHash = (function() {

    function SimpleHash(obj) {
      this._storage = {};
      this.length = 0;
      if (obj != null) {
        this.update(obj);
      }
    }

    Batman.extend(SimpleHash.prototype, Batman.Enumerable);

    SimpleHash.prototype.hasKey = function(key) {
      var pair, pairs, _i, _len;
      if (this.objectKey(key)) {
        if (!this._objectStorage) {
          return false;
        }
        if (pairs = this._objectStorage[this.hashKeyFor(key)]) {
          for (_i = 0, _len = pairs.length; _i < _len; _i++) {
            pair = pairs[_i];
            if (this.equality(pair[0], key)) {
              return true;
            }
          }
        }
        return false;
      } else {
        key = this.prefixedKey(key);
        return this._storage.hasOwnProperty(key);
      }
    };

    SimpleHash.prototype.get = function(key) {
      var pair, pairs, _i, _len;
      if (this.objectKey(key)) {
        if (!this._objectStorage) {
          return void 0;
        }
        if (pairs = this._objectStorage[this.hashKeyFor(key)]) {
          for (_i = 0, _len = pairs.length; _i < _len; _i++) {
            pair = pairs[_i];
            if (this.equality(pair[0], key)) {
              return pair[1];
            }
          }
        }
      } else {
        return this._storage[this.prefixedKey(key)];
      }
    };

    SimpleHash.prototype.set = function(key, val) {
      var pair, pairs, _base, _i, _len, _name;
      if (this.objectKey(key)) {
        this._objectStorage || (this._objectStorage = {});
        pairs = (_base = this._objectStorage)[_name = this.hashKeyFor(key)] || (_base[_name] = []);
        for (_i = 0, _len = pairs.length; _i < _len; _i++) {
          pair = pairs[_i];
          if (this.equality(pair[0], key)) {
            return pair[1] = val;
          }
        }
        this.length++;
        pairs.push([key, val]);
        return val;
      } else {
        key = this.prefixedKey(key);
        if (this._storage[key] == null) {
          this.length++;
        }
        return this._storage[key] = val;
      }
    };

    SimpleHash.prototype.unset = function(key) {
      var hashKey, index, obj, pair, pairs, val, value, _i, _len, _ref;
      if (this.objectKey(key)) {
        if (!this._objectStorage) {
          return void 0;
        }
        hashKey = this.hashKeyFor(key);
        if (pairs = this._objectStorage[hashKey]) {
          for (index = _i = 0, _len = pairs.length; _i < _len; index = ++_i) {
            _ref = pairs[index], obj = _ref[0], value = _ref[1];
            if (this.equality(obj, key)) {
              pair = pairs.splice(index, 1);
              if (!pairs.length) {
                delete this._objectStorage[hashKey];
              }
              this.length--;
              return pair[0][1];
            }
          }
        }
      } else {
        key = this.prefixedKey(key);
        val = this._storage[key];
        if (this._storage[key] != null) {
          this.length--;
          delete this._storage[key];
        }
        return val;
      }
    };

    SimpleHash.prototype.getOrSet = function(key, valueFunction) {
      var currentValue;
      currentValue = this.get(key);
      if (!currentValue) {
        currentValue = valueFunction();
        this.set(key, currentValue);
      }
      return currentValue;
    };

    SimpleHash.prototype.prefixedKey = function(key) {
      return "_" + key;
    };

    SimpleHash.prototype.unprefixedKey = function(key) {
      return key.slice(1);
    };

    SimpleHash.prototype.hashKeyFor = function(obj) {
      var hashKey, typeString;
      if (hashKey = obj != null ? typeof obj.hashKey === "function" ? obj.hashKey() : void 0 : void 0) {
        return hashKey;
      } else {
        typeString = _objectToString.call(obj);
        if (typeString === "[object Array]") {
          return typeString;
        } else {
          return obj;
        }
      }
    };

    SimpleHash.prototype.equality = function(lhs, rhs) {
      if (lhs === rhs) {
        return true;
      }
      if (lhs !== lhs && rhs !== rhs) {
        return true;
      }
      if ((lhs != null ? typeof lhs.isEqual === "function" ? lhs.isEqual(rhs) : void 0 : void 0) && (rhs != null ? typeof rhs.isEqual === "function" ? rhs.isEqual(lhs) : void 0 : void 0)) {
        return true;
      }
      return false;
    };

    SimpleHash.prototype.objectKey = function(key) {
      return typeof key !== 'string';
    };

    SimpleHash.prototype.forEach = function(iterator, ctx) {
      var key, obj, results, value, values, _i, _len, _ref, _ref1, _ref2, _ref3;
      results = [];
      if (this._objectStorage) {
        _ref = this._objectStorage;
        for (key in _ref) {
          values = _ref[key];
          _ref1 = values.slice();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            _ref2 = _ref1[_i], obj = _ref2[0], value = _ref2[1];
            results.push(iterator.call(ctx, obj, value, this));
          }
        }
      }
      _ref3 = this._storage;
      for (key in _ref3) {
        value = _ref3[key];
        results.push(iterator.call(ctx, this.unprefixedKey(key), value, this));
      }
      return results;
    };

    SimpleHash.prototype.keys = function() {
      var result;
      result = [];
      Batman.SimpleHash.prototype.forEach.call(this, function(key) {
        return result.push(key);
      });
      return result;
    };

    SimpleHash.prototype.toArray = SimpleHash.prototype.keys;

    SimpleHash.prototype.clear = function() {
      this._storage = {};
      delete this._objectStorage;
      return this.length = 0;
    };

    SimpleHash.prototype.isEmpty = function() {
      return this.length === 0;
    };

    SimpleHash.prototype.merge = function() {
      var hash, merged, others, _i, _len;
      others = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      merged = new this.constructor;
      others.unshift(this);
      for (_i = 0, _len = others.length; _i < _len; _i++) {
        hash = others[_i];
        hash.forEach(function(obj, value) {
          return merged.set(obj, value);
        });
      }
      return merged;
    };

    SimpleHash.prototype.update = function(object) {
      var k, v, _results;
      _results = [];
      for (k in object) {
        v = object[k];
        _results.push(this.set(k, v));
      }
      return _results;
    };

    SimpleHash.prototype.replace = function(object) {
      var _this = this;
      this.forEach(function(key, value) {
        if (!(key in object)) {
          return _this.unset(key);
        }
      });
      return this.update(object);
    };

    SimpleHash.prototype.toObject = function() {
      var key, obj, pair, value, _ref, _ref1;
      obj = {};
      _ref = this._storage;
      for (key in _ref) {
        value = _ref[key];
        obj[this.unprefixedKey(key)] = value;
      }
      if (this._objectStorage) {
        _ref1 = this._objectStorage;
        for (key in _ref1) {
          pair = _ref1[key];
          obj[key] = pair[0][1];
        }
      }
      return obj;
    };

    SimpleHash.prototype.toJSON = SimpleHash.prototype.toObject;

    return SimpleHash;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.AssociationCurator = (function(_super) {

    __extends(AssociationCurator, _super);

    AssociationCurator.availableAssociations = ['belongsTo', 'hasOne', 'hasMany'];

    function AssociationCurator(model) {
      this.model = model;
      AssociationCurator.__super__.constructor.call(this);
      this._byTypeStorage = new Batman.SimpleHash;
    }

    AssociationCurator.prototype.add = function(association) {
      var associationTypeSet;
      this.set(association.label, association);
      if (!(associationTypeSet = this._byTypeStorage.get(association.associationType))) {
        associationTypeSet = new Batman.SimpleSet;
        this._byTypeStorage.set(association.associationType, associationTypeSet);
      }
      return associationTypeSet.add(association);
    };

    AssociationCurator.prototype.getByType = function(type) {
      return this._byTypeStorage.get(type);
    };

    AssociationCurator.prototype.getByLabel = function(label) {
      return this.get(label);
    };

    AssociationCurator.prototype.reset = function() {
      this.forEach(function(label, association) {
        return association.reset();
      });
      return true;
    };

    AssociationCurator.prototype.merge = function() {
      var others, result;
      others = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      result = AssociationCurator.__super__.merge.apply(this, arguments);
      result._byTypeStorage = this._byTypeStorage.merge(others.map(function(other) {
        return other._byTypeStorage;
      }));
      return result;
    };

    AssociationCurator.prototype._markDirtyAttribute = function(key, oldValue) {
      var _ref;
      if ((_ref = this.lifecycle.get('state')) !== 'loading' && _ref !== 'creating' && _ref !== 'saving' && _ref !== 'saved') {
        if (this.lifecycle.startTransition('set')) {
          return this.dirtyKeys.set(key, oldValue);
        } else {
          throw new Batman.StateMachine.InvalidTransitionError("Can't set while in state " + (this.lifecycle.get('state')));
        }
      }
    };

    return AssociationCurator;

  })(Batman.SimpleHash);

}).call(this);

(function() {
  var __slice = [].slice;

  Batman.SimpleSet = (function() {

    function SimpleSet() {
      var item, itemsToAdd;
      this._storage = [];
      this.length = 0;
      itemsToAdd = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          item = arguments[_i];
          if (item != null) {
            _results.push(item);
          }
        }
        return _results;
      }).apply(this, arguments);
      if (itemsToAdd.length > 0) {
        this.add.apply(this, itemsToAdd);
      }
    }

    Batman.extend(SimpleSet.prototype, Batman.Enumerable);

    SimpleSet.prototype.has = function(item) {
      return !!(~this._indexOfItem(item));
    };

    SimpleSet.prototype.add = function() {
      var addedItems, item, items, _i, _len;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      addedItems = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if (!(!~this._indexOfItem(item))) {
          continue;
        }
        this._storage.push(item);
        addedItems.push(item);
      }
      this.length = this._storage.length;
      if (this.fire && addedItems.length !== 0) {
        this.fire('change', this, this);
        this.fire.apply(this, ['itemsWereAdded'].concat(__slice.call(addedItems)));
      }
      return addedItems;
    };

    SimpleSet.prototype.remove = function() {
      var index, item, items, removedItems, _i, _len;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      removedItems = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if (!(~ (index = this._indexOfItem(item)))) {
          continue;
        }
        this._storage.splice(index, 1);
        removedItems.push(item);
      }
      this.length = this._storage.length;
      if (this.fire && removedItems.length !== 0) {
        this.fire('change', this, this);
        this.fire.apply(this, ['itemsWereRemoved'].concat(__slice.call(removedItems)));
      }
      return removedItems;
    };

    SimpleSet.prototype.find = function(f) {
      var item, _i, _len, _ref;
      _ref = this._storage;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (f(item)) {
          return item;
        }
      }
    };

    SimpleSet.prototype.forEach = function(iterator, ctx) {
      var key, _i, _len, _ref, _results;
      _ref = this._storage;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        _results.push(iterator.call(ctx, key, null, this));
      }
      return _results;
    };

    SimpleSet.prototype.isEmpty = function() {
      return this.length === 0;
    };

    SimpleSet.prototype.clear = function() {
      var items;
      items = this._storage;
      this._storage = [];
      this.length = 0;
      if (this.fire && items.length !== 0) {
        this.fire('change', this, this);
        this.fire.apply(this, ['itemsWereRemoved'].concat(__slice.call(items)));
      }
      return items;
    };

    SimpleSet.prototype.replace = function(other) {
      try {
        if (typeof this.prevent === "function") {
          this.prevent('change');
        }
        this.clear();
        return this.add.apply(this, other.toArray());
      } finally {
        if (typeof this.allowAndFire === "function") {
          this.allowAndFire('change', this, this);
        }
      }
    };

    SimpleSet.prototype.toArray = function() {
      return this._storage.slice();
    };

    SimpleSet.prototype.merge = function() {
      var merged, others, set, _i, _len;
      others = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      merged = new this.constructor;
      others.unshift(this);
      for (_i = 0, _len = others.length; _i < _len; _i++) {
        set = others[_i];
        set.forEach(function(v) {
          return merged.add(v);
        });
      }
      return merged;
    };

    SimpleSet.prototype.indexedBy = function(key) {
      this._indexes || (this._indexes = new Batman.SimpleHash);
      return this._indexes.get(key) || this._indexes.set(key, new Batman.SetIndex(this, key));
    };

    SimpleSet.prototype.indexedByUnique = function(key) {
      this._uniqueIndexes || (this._uniqueIndexes = new Batman.SimpleHash);
      return this._uniqueIndexes.get(key) || this._uniqueIndexes.set(key, new Batman.UniqueSetIndex(this, key));
    };

    SimpleSet.prototype.sortedBy = function(key, order) {
      var sortsForKey;
      if (order == null) {
        order = "asc";
      }
      order = order.toLowerCase() === "desc" ? "desc" : "asc";
      this._sorts || (this._sorts = new Batman.SimpleHash);
      sortsForKey = this._sorts.get(key) || this._sorts.set(key, new Batman.Object);
      return sortsForKey.get(order) || sortsForKey.set(order, new Batman.SetSort(this, key, order));
    };

    SimpleSet.prototype.equality = Batman.SimpleHash.prototype.equality;

    SimpleSet.prototype._indexOfItem = function(givenItem) {
      var index, item, _i, _len, _ref;
      _ref = this._storage;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        item = _ref[index];
        if (this.equality(givenItem, item)) {
          return index;
        }
      }
      return -1;
    };

    return SimpleSet;

  })();

}).call(this);

(function() {
  var SOURCE_TRACKER_STACK, SOURCE_TRACKER_STACK_VALID, __slice = [].slice;

  SOURCE_TRACKER_STACK = [];

  SOURCE_TRACKER_STACK_VALID = true;

  Batman.Property = (function() {

    Batman.mixin(Property.prototype, Batman.EventEmitter);

    Property._sourceTrackerStack = SOURCE_TRACKER_STACK;

    Property._sourceTrackerStackValid = SOURCE_TRACKER_STACK_VALID;

    Property.defaultAccessor = {
      get: function(key) {
        return this[key];
      },
      set: function(key, val) {
        return this[key] = val;
      },
      unset: function(key) {
        var x;
        x = this[key];
        delete this[key];
        return x;
      },
      cache: false
    };

    Property.defaultAccessorForBase = function(base) {
      var _ref;
      return ((_ref = base._batman) != null ? _ref.getFirst('defaultAccessor') : void 0) || Batman.Property.defaultAccessor;
    };

    Property.accessorForBaseAndKey = function(base, key) {
      var accessor, ancestor, _bm, _i, _len, _ref, _ref1, _ref2, _ref3;
      if ((_bm = base._batman) != null) {
        accessor = (_ref = _bm.keyAccessors) != null ? _ref.get(key) : void 0;
        if (!accessor) {
          _ref1 = _bm.ancestors();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            ancestor = _ref1[_i];
            accessor = (_ref2 = ancestor._batman) != null ? (_ref3 = _ref2.keyAccessors) != null ? _ref3.get(key) : void 0 : void 0;
            if (accessor) {
              break;
            }
          }
        }
      }
      return accessor || this.defaultAccessorForBase(base);
    };

    Property.forBaseAndKey = function(base, key) {
      if (base.isObservable) {
        return base.property(key);
      } else {
        return new Batman.Keypath(base, key);
      }
    };

    Property.withoutTracking = function(block) {
      return this.wrapTrackingPrevention(block)();
    };

    Property.wrapTrackingPrevention = function(block) {
      return function() {
        Batman.Property.pushDummySourceTracker();
        try {
          return block.apply(this, arguments);
        } finally {
          Batman.Property.popSourceTracker();
        }
      };
    };

    Property.registerSource = function(obj) {
      var set;
      if (!obj.isEventEmitter) {
        return;
      }
      if (SOURCE_TRACKER_STACK_VALID) {
        set = SOURCE_TRACKER_STACK[SOURCE_TRACKER_STACK.length - 1];
      } else {
        set = [];
        SOURCE_TRACKER_STACK.push(set);
        SOURCE_TRACKER_STACK_VALID = true;
      }
      if (set != null) {
        set.push(obj);
      }
      return void 0;
    };

    Property.pushSourceTracker = function() {
      if (SOURCE_TRACKER_STACK_VALID) {
        return SOURCE_TRACKER_STACK_VALID = false;
      } else {
        return SOURCE_TRACKER_STACK.push([]);
      }
    };

    Property.popSourceTracker = function() {
      if (SOURCE_TRACKER_STACK_VALID) {
        return SOURCE_TRACKER_STACK.pop();
      } else {
        SOURCE_TRACKER_STACK_VALID = true;
        return void 0;
      }
    };

    Property.pushDummySourceTracker = function() {
      if (!SOURCE_TRACKER_STACK_VALID) {
        SOURCE_TRACKER_STACK.push([]);
        SOURCE_TRACKER_STACK_VALID = true;
      }
      return SOURCE_TRACKER_STACK.push(null);
    };

    function Property(base, key) {
      this.base = base;
      this.key = key;
    }

    Property.prototype._isolationCount = 0;

    Property.prototype.cached = false;

    Property.prototype.value = null;

    Property.prototype.sources = null;

    Property.prototype.isProperty = true;

    Property.prototype.isDead = false;

    Property.prototype.eventClass = Batman.PropertyEvent;

    Property.prototype.isEqual = function(other) {
      return this.constructor === other.constructor && this.base === other.base && this.key === other.key;
    };

    Property.prototype.hashKey = function() {
      return this._hashKey || (this._hashKey = "<Batman.Property base: " + (Batman.Hash.prototype.hashKeyFor(this.base)) + ", key: \"" + (Batman.Hash.prototype.hashKeyFor(this.key)) + "\">");
    };

    Property.prototype.event = function(key) {
      var eventClass, _base;
      eventClass = this.eventClass || Batman.Event;
      this.events || (this.events = {});
      (_base = this.events)[key] || (_base[key] = new eventClass(this, key));
      return this.events[key];
    };

    Property.prototype.changeEvent = function() {
      return this._changeEvent || (this._changeEvent = this.event('change'));
    };

    Property.prototype.accessor = function() {
      return this._accessor || (this._accessor = this.constructor.accessorForBaseAndKey(this.base, this.key));
    };

    Property.prototype.eachObserver = function(iterator) {
      var ancestor, handlers, key, object, property, _i, _j, _len, _len1, _ref, _ref1, _ref2, _results;
      key = this.key;
      handlers = (_ref = this.changeEvent().handlers) != null ? _ref.slice() : void 0;
      if (handlers) {
        for (_i = 0, _len = handlers.length; _i < _len; _i++) {
          object = handlers[_i];
          iterator(object);
        }
      }
      if (this.base.isObservable) {
        _ref1 = this.base._batman.ancestors();
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          ancestor = _ref1[_j];
          if (ancestor.isObservable && ancestor.hasProperty(key)) {
            property = ancestor.property(key);
            handlers = (_ref2 = property.changeEvent().handlers) != null ? _ref2.slice() : void 0;
            if (handlers) {
              _results.push((function() {
                var _k, _len2, _results1;
                _results1 = [];
                for (_k = 0, _len2 = handlers.length; _k < _len2; _k++) {
                  object = handlers[_k];
                  _results1.push(iterator(object));
                }
                return _results1;
              })());
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    Property.prototype.observers = function() {
      var results;
      results = [];
      this.eachObserver(function(observer) {
        return results.push(observer);
      });
      return results;
    };

    Property.prototype.hasObservers = function() {
      return this.observers().length > 0;
    };

    Property.prototype.updateSourcesFromTracker = function() {
      var handler, newSources, source, _i, _j, _len, _len1, _ref, _ref1, _results;
      newSources = this.constructor.popSourceTracker();
      handler = this.sourceChangeHandler();
      if (this.sources) {
        _ref = this.sources;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          source = _ref[_i];
          if (source != null) {
            source.event('change').removeHandler(handler);
          }
        }
      }
      this.sources = newSources;
      if (this.sources) {
        _ref1 = this.sources;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          source = _ref1[_j];
          _results.push(source != null ? source.event('change').addHandler(handler) : void 0);
        }
        return _results;
      }
    };

    Property.prototype.getValue = function() {
      this.registerAsMutableSource();
      if (!this.isCached()) {
        this.constructor.pushSourceTracker();
        try {
          this.value = this.valueFromAccessor();
          this.cached = true;
        } finally {
          this.updateSourcesFromTracker();
        }
      }
      return this.value;
    };

    Property.prototype.isCachable = function() {
      var cacheable;
      if (this.isFinal()) {
        return true;
      }
      cacheable = this.accessor().cache;
      if (cacheable != null) {
        return !!cacheable;
      } else {
        return true;
      }
    };

    Property.prototype.isCached = function() {
      return this.isCachable() && this.cached;
    };

    Property.prototype.isFinal = function() {
      return !!this.accessor()['final'];
    };

    Property.prototype.refresh = function() {
      var previousValue, value;
      this.cached = false;
      previousValue = this.value;
      value = this.getValue();
      if (value !== previousValue && !this.isIsolated()) {
        this.fire(value, previousValue);
      }
      if (this.value !== void 0 && this.isFinal()) {
        return this.lockValue();
      }
    };

    Property.prototype.sourceChangeHandler = function() {
      var _this = this;
      this._sourceChangeHandler || (this._sourceChangeHandler = this._handleSourceChange.bind(this));
      Batman.developer["do"](function() {
        return _this._sourceChangeHandler.property = _this;
      });
      return this._sourceChangeHandler;
    };

    Property.prototype._handleSourceChange = function() {
      if (this.isIsolated()) {
        return this._needsRefresh = true;
      } else if (!this.isFinal() && !this.hasObservers()) {
        return this.cached = false;
      } else {
        return this.refresh();
      }
    };

    Property.prototype.valueFromAccessor = function() {
      var _ref;
      return (_ref = this.accessor().get) != null ? _ref.call(this.base, this.key) : void 0;
    };

    Property.prototype.setValue = function(val) {
      var set;
      if (!(set = this.accessor().set)) {
        return;
      }
      return this._changeValue(function() {
        return set.call(this.base, this.key, val);
      });
    };

    Property.prototype.unsetValue = function() {
      var unset;
      if (!(unset = this.accessor().unset)) {
        return;
      }
      return this._changeValue(function() {
        return unset.call(this.base, this.key);
      });
    };

    Property.prototype._changeValue = function(block) {
      var result;
      this.cached = false;
      this.constructor.pushDummySourceTracker();
      try {
        result = block.apply(this);
        this.refresh();
      } finally {
        this.constructor.popSourceTracker();
      }
      if (!(this.isCached() || this.hasObservers())) {
        this.die();
      }
      return result;
    };

    Property.prototype.forget = function(handler) {
      if (handler != null) {
        return this.changeEvent().removeHandler(handler);
      } else {
        return this.changeEvent().clearHandlers();
      }
    };

    Property.prototype.observeAndFire = function(handler) {
      this.observe(handler);
      return handler.call(this.base, this.value, this.value, this.key);
    };

    Property.prototype.observe = function(handler) {
      this.changeEvent().addHandler(handler);
      if (this.sources == null) {
        this.getValue();
      }
      return this;
    };

    Property.prototype.observeOnce = function(originalHandler) {
      var event, handler;
      event = this.changeEvent();
      handler = function() {
        originalHandler.apply(this, arguments);
        return event.removeHandler(handler);
      };
      event.addHandler(handler);
      if (this.sources == null) {
        this.getValue();
      }
      return this;
    };

    Property.prototype._removeHandlers = function() {
      var handler, source, _i, _len, _ref;
      handler = this.sourceChangeHandler();
      if (this.sources) {
        _ref = this.sources;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          source = _ref[_i];
          source.event('change').removeHandler(handler);
        }
      }
      delete this.sources;
      return this.changeEvent().clearHandlers();
    };

    Property.prototype.lockValue = function() {
      this._removeHandlers();
      this.getValue = function() {
        return this.value;
      };
      return this.setValue = this.unsetValue = this.refresh = this.observe = function() {};
    };

    Property.prototype.die = function() {
      var _ref, _ref1;
      this._removeHandlers();
      if ((_ref = this.base._batman) != null) {
        if ((_ref1 = _ref.properties) != null) {
          _ref1.unset(this.key);
        }
      }
      return this.isDead = true;
    };

    Property.prototype.fire = function() {
      var _ref;
      return (_ref = this.changeEvent()).fire.apply(_ref, __slice.call(arguments).concat([this.key]));
    };

    Property.prototype.isolate = function() {
      if (this._isolationCount === 0) {
        this._preIsolationValue = this.getValue();
      }
      return this._isolationCount++;
    };

    Property.prototype.expose = function() {
      if (this._isolationCount === 1) {
        this._isolationCount--;
        if (this._needsRefresh) {
          this.value = this._preIsolationValue;
          this.refresh();
        } else if (this.value !== this._preIsolationValue) {
          this.fire(this.value, this._preIsolationValue);
        }
        return this._preIsolationValue = null;
      } else if (this._isolationCount > 0) {
        return this._isolationCount--;
      }
    };

    Property.prototype.isIsolated = function() {
      return this._isolationCount > 0;
    };

    return Property;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Keypath = (function(_super) {

    __extends(Keypath, _super);

    function Keypath(base, key) {
      if (typeof key === 'string') {
        this.segments = key.split('.');
        this.depth = this.segments.length;
      } else {
        this.segments = [key];
        this.depth = 1;
      }
      Keypath.__super__.constructor.apply(this, arguments);
    }

    Keypath.prototype.isCachable = function() {
      if (this.depth === 1) {
        return Keypath.__super__.isCachable.apply(this, arguments);
      } else {
        return true;
      }
    };

    Keypath.prototype.terminalProperty = function() {
      var base;
      base = Batman.getPath(this.base, this.segments.slice(0, -1));
      if (base == null) {
        return;
      }
      return Batman.Keypath.forBaseAndKey(base, this.segments[this.depth - 1]);
    };

    Keypath.prototype.valueFromAccessor = function() {
      if (this.depth === 1) {
        return Keypath.__super__.valueFromAccessor.apply(this, arguments);
      } else {
        return Batman.getPath(this.base, this.segments);
      }
    };

    Keypath.prototype.setValue = function(val) {
      var _ref;
      if (this.depth === 1) {
        return Keypath.__super__.setValue.apply(this, arguments);
      } else {
        return (_ref = this.terminalProperty()) != null ? _ref.setValue(val) : void 0;
      }
    };

    Keypath.prototype.unsetValue = function() {
      var _ref;
      if (this.depth === 1) {
        return Keypath.__super__.unsetValue.apply(this, arguments);
      } else {
        return (_ref = this.terminalProperty()) != null ? _ref.unsetValue() : void 0;
      }
    };

    return Keypath;

  })(Batman.Property);

}).call(this);

(function() {
  var __slice = [].slice;

  Batman.Observable = {
    isObservable: true,
    hasProperty: function(key) {
      var _ref, _ref1;
      return (_ref = this._batman) != null ? (_ref1 = _ref.properties) != null ? typeof _ref1.hasKey === "function" ? _ref1.hasKey(key) : void 0 : void 0 : void 0;
    },
    property: function(key) {
      var properties, propertyClass, _base;
      Batman.initializeObject(this);
      propertyClass = this.propertyClass || Batman.Keypath;
      properties = (_base = this._batman).properties || (_base.properties = new Batman.SimpleHash);
      return properties.get(key) || properties.set(key, new propertyClass(this, key));
    },
    get: function(key) {
      return this.property(key).getValue();
    },
    set: function(key, val) {
      return this.property(key).setValue(val);
    },
    unset: function(key) {
      return this.property(key).unsetValue();
    },
    getOrSet: Batman.SimpleHash.prototype.getOrSet,
    forget: function(key, observer) {
      var _ref;
      if (key) {
        this.property(key).forget(observer);
      } else {
        if ((_ref = this._batman.properties) != null) {
          _ref.forEach(function(key, property) {
            return property.forget();
          });
        }
      }
      return this;
    },
    observe: function() {
      var args, key, _ref;
      key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.property(key)).observe.apply(_ref, args);
      return this;
    },
    observeAndFire: function() {
      var args, key, _ref;
      key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.property(key)).observeAndFire.apply(_ref, args);
      return this;
    },
    observeOnce: function() {
      var args, key, _ref;
      key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      (_ref = this.property(key)).observeOnce.apply(_ref, args);
      return this;
    }
  };

}).call(this);

(function() {

  Batman.DOM = {
    textInputTypes: ['text', 'search', 'tel', 'url', 'email', 'password'],
    scrollIntoView: function(elementID) {
      var _ref;
      return (_ref = document.getElementById(elementID)) != null ? typeof _ref.scrollIntoView === "function" ? _ref.scrollIntoView() : void 0 : void 0;
    },
    partial: function(container, path, context, renderer) {
      var view;
      renderer.prevent('rendered');
      view = new Batman.View({
        source: path,
        context: context
      });
      return view.on('ready', function() {
        Batman.DOM.setInnerHTML(container, '');
        Batman.DOM.appendChild(container, view.get('node'));
        return renderer.allowAndFire('rendered');
      });
    },
    propagateBindingEvent: function(binding, node) {
      var current, parentBinding, parentBindings, _i, _len;
      while ((current = (current || node).parentNode)) {
        parentBindings = Batman._data(current, 'bindings');
        if (parentBindings != null) {
          for (_i = 0, _len = parentBindings.length; _i < _len; _i++) {
            parentBinding = parentBindings[_i];
            if (typeof parentBinding.childBindingAdded === "function") {
              parentBinding.childBindingAdded(binding);
            }
          }
        }
      }
    },
    propagateBindingEvents: function(newNode) {
      var binding, bindings, child, _i, _j, _len, _len1, _ref;
      _ref = newNode.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Batman.DOM.propagateBindingEvents(child);
      }
      if (bindings = Batman._data(newNode, 'bindings')) {
        for (_j = 0, _len1 = bindings.length; _j < _len1; _j++) {
          binding = bindings[_j];
          Batman.DOM.propagateBindingEvent(binding, newNode);
        }
      }
    },
    trackBinding: function(binding, node) {
      var bindings;
      if (bindings = Batman._data(node, 'bindings')) {
        bindings.push(binding);
      } else {
        Batman._data(node, 'bindings', [binding]);
      }
      Batman.DOM.fire('bindingAdded', binding);
      Batman.DOM.propagateBindingEvent(binding, node);
      return true;
    },
    onParseExit: function(node, callback) {
      var set;
      set = Batman._data(node, 'onParseExit') || Batman._data(node, 'onParseExit', new Batman.SimpleSet);
      if (callback != null) {
        set.add(callback);
      }
      return set;
    },
    forgetParseExit: function(node, callback) {
      return Batman.removeData(node, 'onParseExit', true);
    },
    defineView: function(name, node) {
      var contents;
      contents = node.innerHTML;
      Batman.View.store.set(Batman.Navigator.normalizePath(name), contents);
      return contents;
    },
    setStyleProperty: function(node, property, value, importance) {
      if (node.style.setProperty) {
        return node.style.setProperty(property, value, importance);
      } else {
        return node.style.setAttribute(property, value, importance);
      }
    },
    removeOrDestroyNode: function(node) {
      var view;
      view = Batman._data(node, 'view');
      view || (view = Batman._data(node, 'yielder'));
      if ((view != null) && view.get('cached')) {
        return Batman.DOM.removeNode(node);
      } else {
        return Batman.DOM.destroyNode(node);
      }
    },
    insertBefore: function(parentNode, newNode, referenceNode) {
      if (referenceNode == null) {
        referenceNode = null;
      }
      if (!referenceNode || parentNode.childNodes.length <= 0) {
        return Batman.DOM.appendChild(parentNode, newNode);
      } else {
        Batman.DOM.willInsertNode(newNode);
        parentNode.insertBefore(newNode, referenceNode);
        return Batman.DOM.didInsertNode(newNode);
      }
    },
    valueForNode: function(node, value, escapeValue) {
      var isSetting;
      if (value == null) {
        value = '';
      }
      if (escapeValue == null) {
        escapeValue = true;
      }
      isSetting = arguments.length > 1;
      switch (node.nodeName.toUpperCase()) {
      case 'INPUT':
      case 'TEXTAREA':
        if (isSetting) {
          return node.value = value;
        } else {
          return node.value;
        }
        break;
      case 'SELECT':
        if (isSetting) {
          return node.value = value;
        }
        break;
      default:
        if (isSetting) {
          return Batman.DOM.setInnerHTML(node, escapeValue ? Batman.escapeHTML(value) : value);
        } else {
          return node.innerHTML;
        }
      }
    },
    nodeIsEditable: function(node) {
      var _ref;
      return (_ref = node.nodeName.toUpperCase()) === 'INPUT' || _ref === 'TEXTAREA' || _ref === 'SELECT';
    },
    addEventListener: function(node, eventName, callback) {
      var listeners;
      if (!(listeners = Batman._data(node, 'listeners'))) {
        listeners = Batman._data(node, 'listeners', {});
      }
      if (!listeners[eventName]) {
        listeners[eventName] = [];
      }
      listeners[eventName].push(callback);
      if (Batman.DOM.hasAddEventListener) {
        return node.addEventListener(eventName, callback, false);
      } else {
        return node.attachEvent("on" + eventName, callback);
      }
    },
    removeEventListener: function(node, eventName, callback) {
      var eventListeners, index, listeners;
      if (listeners = Batman._data(node, 'listeners')) {
        if (eventListeners = listeners[eventName]) {
          index = eventListeners.indexOf(callback);
          if (index !== -1) {
            eventListeners.splice(index, 1);
          }
        }
      }
      if (Batman.DOM.hasAddEventListener) {
        return node.removeEventListener(eventName, callback, false);
      } else {
        return node.detachEvent('on' + eventName, callback);
      }
    },
    hasAddEventListener: !! (typeof window !== "undefined" && window !== null ? window.addEventListener : void 0),
    preventDefault: function(e) {
      if (typeof e.preventDefault === "function") {
        return e.preventDefault();
      } else {
        return e.returnValue = false;
      }
    },
    stopPropagation: function(e) {
      if (e.stopPropagation) {
        return e.stopPropagation();
      } else {
        return e.cancelBubble = true;
      }
    },
    willInsertNode: function(node) {
      var child, view, _i, _len, _ref, _ref1;
      view = Batman._data(node, 'view');
      if (view != null) {
        view.fire('beforeAppear', node);
      }
      if ((_ref = Batman.data(node, 'show')) != null) {
        _ref.call(node);
      }
      _ref1 = node.childNodes;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        child = _ref1[_i];
        Batman.DOM.willInsertNode(child);
      }
      return true;
    },
    didInsertNode: function(node) {
      var child, view, _i, _len, _ref;
      view = Batman._data(node, 'view');
      if (view) {
        view.fire('appear', node);
        view.applyYields();
      }
      _ref = node.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Batman.DOM.didInsertNode(child);
      }
      return true;
    },
    willRemoveNode: function(node) {
      var child, view, _i, _len, _ref, _ref1;
      view = Batman._data(node, 'view');
      if (view) {
        view.fire('beforeDisappear', node);
      }
      if ((_ref = Batman.data(node, 'hide')) != null) {
        _ref.call(node);
      }
      _ref1 = node.childNodes;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        child = _ref1[_i];
        Batman.DOM.willRemoveNode(child);
      }
      return true;
    },
    didRemoveNode: function(node) {
      var child, view, _i, _len, _ref;
      view = Batman._data(node, 'view');
      if (view) {
        view.retractYields();
        view.fire('disappear', node);
      }
      _ref = node.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Batman.DOM.didRemoveNode(child);
      }
      return true;
    },
    willDestroyNode: function(node) {
      var child, view, _i, _len, _ref;
      view = Batman._data(node, 'view');
      if (view) {
        view.fire('beforeDestroy', node);
        view.get('yields').forEach(function(name, actions) {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = actions.length; _i < _len; _i++) {
            node = actions[_i].node;
            _results.push(Batman.DOM.willDestroyNode(node));
          }
          return _results;
        });
      }
      _ref = node.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Batman.DOM.willDestroyNode(child);
      }
      return true;
    },
    didDestroyNode: function(node) {
      var bindings, child, eventListeners, eventName, listeners, view, _i, _len, _ref;
      view = Batman._data(node, 'view');
      if (view) {
        view.die();
      }
      if (bindings = Batman._data(node, 'bindings')) {
        bindings.forEach(function(binding) {
          return binding.die();
        });
      }
      if (listeners = Batman._data(node, 'listeners')) {
        for (eventName in listeners) {
          eventListeners = listeners[eventName];
          eventListeners.forEach(function(listener) {
            return Batman.DOM.removeEventListener(node, eventName, listener);
          });
        }
      }
      Batman.removeData(node);
      Batman.removeData(node, void 0, true);
      _ref = node.childNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Batman.DOM.didDestroyNode(child);
      }
      return true;
    }
  };

  Batman.mixin(Batman.DOM, Batman.EventEmitter, Batman.Observable);

  Batman.DOM.event('bindingAdded');

}).call(this);

(function() {

  Batman.DOM.ReaderBindingDefinition = (function() {

    function ReaderBindingDefinition(node, keyPath, context, renderer) {
      this.node = node;
      this.keyPath = keyPath;
      this.context = context;
      this.renderer = renderer;
    }

    return ReaderBindingDefinition;

  })();

  Batman.BindingDefinitionOnlyObserve = {
    Data: 'data',
    Node: 'node',
    All: 'all',
    None: 'none'
  };

  Batman.DOM.readers = {
    target: function(definition) {
      definition.onlyObserve = Batman.BindingDefinitionOnlyObserve.Node;
      return Batman.DOM.readers.bind(definition);
    },
    source: function(definition) {
      definition.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;
      return Batman.DOM.readers.bind(definition);
    },
    bind: function(definition) {
      var bindingClass, node;
      node = definition.node;
      switch (node.nodeName.toLowerCase()) {
      case 'input':
        switch (node.getAttribute('type')) {
        case 'checkbox':
          definition.attr = 'checked';
          Batman.DOM.attrReaders.bind(definition);
          return true;
        case 'radio':
          bindingClass = Batman.DOM.RadioBinding;
          break;
        case 'file':
          bindingClass = Batman.DOM.FileBinding;
        }
        break;
      case 'select':
        bindingClass = Batman.DOM.SelectBinding;
      }
      bindingClass || (bindingClass = Batman.DOM.ValueBinding);
      return new bindingClass(definition);
    },
    context: function(definition) {
      return definition.context.descendWithDefinition(definition);
    },
    mixin: function(definition) {
      definition.context = definition.context.descend(Batman.mixins);
      return new Batman.DOM.MixinBinding(definition);
    },
    showif: function(definition) {
      return new Batman.DOM.ShowHideBinding(definition);
    },
    hideif: function(definition) {
      definition.invert = true;
      return new Batman.DOM.ShowHideBinding(definition);
    },
    insertif: function(definition) {
      return new Batman.DOM.InsertionBinding(definition);
    },
    removeif: function(definition) {
      definition.invert = true;
      return new Batman.DOM.InsertionBinding(definition);
    },
    route: function(definition) {
      return new Batman.DOM.RouteBinding(definition);
    },
    view: function(definition) {
      return new Batman.DOM.ViewBinding(definition);
    },
    partial: function(definition) {
      return Batman.DOM.partial(definition.node, definition.keyPath, definition.context, definition.renderer);
    },
    defineview: function(definition) {
      var node;
      node = definition.node;
      Batman.DOM.onParseExit(node, function() {
        var _ref;
        return (_ref = node.parentNode) != null ? _ref.removeChild(node) : void 0;
      });
      Batman.DOM.defineView(definition.keyPath, node);
      return {
        skipChildren: true
      };
    },
    renderif: function(definition) {
      return new Batman.DOM.DeferredRenderingBinding(definition);
    },
    "yield": function(definition) {
      var keyPath, node;
      node = definition.node, keyPath = definition.keyPath;
      return Batman.DOM.onParseExit(node, function() {
        return Batman.DOM.Yield.withName(keyPath).set('containerNode', node);
      });
    },
    contentfor: function(definition) {
      var keyPath, node, renderer, swapMethod, value;
      node = definition.node, value = definition.value, swapMethod = definition.swapMethod, renderer = definition.renderer, keyPath = definition.keyPath;
      swapMethod || (swapMethod = 'append');
      return Batman.DOM.onParseExit(node, function() {
        var _ref;
        if ((_ref = node.parentNode) != null) {
          _ref.removeChild(node);
        }
        return renderer.view.pushYieldAction(keyPath, swapMethod, node);
      });
    },
    replace: function(definition) {
      definition.swapMethod = 'replace';
      return Batman.DOM.readers.contentfor(definition);
    }
  };

}).call(this);

(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }
    return -1;
  };

  Batman.DOM.events = {
    click: function(node, callback, context, eventName) {
      if (eventName == null) {
        eventName = 'click';
      }
      Batman.DOM.addEventListener(node, eventName, function() {
        var args, event;
        event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (event.metaKey || event.ctrlKey || event.button === 1) {
          return;
        }
        Batman.DOM.preventDefault(event);
        if (!Batman.DOM.eventIsAllowed(eventName, event)) {
          return;
        }
        return callback.apply(null, [node, event].concat(__slice.call(args), [context]));
      });
      if (node.nodeName.toUpperCase() === 'A' && !node.href) {
        node.href = '#';
      }
      return node;
    },
    doubleclick: function(node, callback, context) {
      return Batman.DOM.events.click(node, callback, context, 'dblclick');
    },
    change: function(node, callback, context) {
      var eventName, eventNames, oldCallback, _i, _len, _results;
      eventNames = (function() {
        var _ref;
        switch (node.nodeName.toUpperCase()) {
        case 'TEXTAREA':
          return ['input', 'keyup', 'change'];
        case 'INPUT':
          if (_ref = node.type.toLowerCase(), __indexOf.call(Batman.DOM.textInputTypes, _ref) >= 0) {
            oldCallback = callback;
            callback = function(node, event) {
              if (event.type === 'keyup' && Batman.DOM.events.isEnter(event)) {
                return;
              }
              return oldCallback(node, event);
            };
            return ['input', 'keyup', 'change'];
          } else {
            return ['input', 'change'];
          }
          break;
        default:
          return ['change'];
        }
      })();
      _results = [];
      for (_i = 0, _len = eventNames.length; _i < _len; _i++) {
        eventName = eventNames[_i];
        _results.push(Batman.DOM.addEventListener(node, eventName, function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return callback.apply(null, [node].concat(__slice.call(args), [context]));
        }));
      }
      return _results;
    },
    isEnter: function(ev) {
      var _ref, _ref1;
      return ((13 <= (_ref = ev.keyCode) && _ref <= 14)) || ((13 <= (_ref1 = ev.which) && _ref1 <= 14)) || ev.keyIdentifier === 'Enter' || ev.key === 'Enter';
    },
    submit: function(node, callback, context) {
      if (Batman.DOM.nodeIsEditable(node)) {
        Batman.DOM.addEventListener(node, 'keydown', function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (Batman.DOM.events.isEnter(args[0])) {
            return Batman.DOM._keyCapturingNode = node;
          }
        });
        Batman.DOM.addEventListener(node, 'keyup', function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (Batman.DOM.events.isEnter(args[0])) {
            if (Batman.DOM._keyCapturingNode === node) {
              Batman.DOM.preventDefault(args[0]);
              callback.apply(null, [node].concat(__slice.call(args), [context]));
            }
            return Batman.DOM._keyCapturingNode = null;
          }
        });
      } else {
        Batman.DOM.addEventListener(node, 'submit', function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          Batman.DOM.preventDefault(args[0]);
          return callback.apply(null, [node].concat(__slice.call(args), [context]));
        });
      }
      return node;
    },
    other: function(node, eventName, callback, context) {
      return Batman.DOM.addEventListener(node, eventName, function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return callback.apply(null, [node].concat(__slice.call(args), [context]));
      });
    }
  };

  Batman.DOM.eventIsAllowed = function(eventName, event) {
    var delegate, _ref, _ref1;
    if (delegate = (_ref = Batman.currentApp) != null ? (_ref1 = _ref.shouldAllowEvent) != null ? _ref1[eventName] : void 0 : void 0) {
      if (delegate(event) === false) {
        return false;
      }
    }
    return true;
  };

}).call(this);

(function() {

  Batman.DOM.AttrReaderBindingDefinition = (function() {

    function AttrReaderBindingDefinition(node, attr, keyPath, context, renderer) {
      this.node = node;
      this.attr = attr;
      this.keyPath = keyPath;
      this.context = context;
      this.renderer = renderer;
    }

    return AttrReaderBindingDefinition;

  })();

  Batman.DOM.attrReaders = {
    _parseAttribute: function(value) {
      if (value === 'false') {
        value = false;
      }
      if (value === 'true') {
        value = true;
      }
      return value;
    },
    source: function(definition) {
      definition.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;
      return Batman.DOM.attrReaders.bind(definition);
    },
    bind: function(definition) {
      var bindingClass;
      bindingClass = (function() {
        switch (definition.attr) {
        case 'checked':
        case 'disabled':
        case 'selected':
          return Batman.DOM.CheckedBinding;
        case 'value':
        case 'href':
        case 'src':
        case 'size':
          return Batman.DOM.NodeAttributeBinding;
        case 'class':
          return Batman.DOM.ClassBinding;
        case 'style':
          return Batman.DOM.StyleBinding;
        default:
          return Batman.DOM.AttributeBinding;
        }
      })();
      return new bindingClass(definition);
    },
    context: function(definition) {
      return definition.context.descendWithDefinition(definition);
    },
    event: function(definition) {
      return new Batman.DOM.EventBinding(definition);
    },
    addclass: function(definition) {
      return new Batman.DOM.AddClassBinding(definition);
    },
    removeclass: function(definition) {
      definition.invert = true;
      return new Batman.DOM.AddClassBinding(definition);
    },
    foreach: function(definition) {
      return new Batman.DOM.IteratorBinding(definition);
    },
    formfor: function(definition) {
      new Batman.DOM.FormBinding(definition);
      return definition.context.descendWithDefinition(definition);
    }
  };

}).call(this);

(function() {
  var BatmanObject, ObjectFunctions, getAccessorObject, promiseWrapper, wrapSingleAccessor, __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  getAccessorObject = function(base, accessor) {
    var deprecated, _i, _len, _ref;
    if (typeof accessor === 'function') {
      accessor = {
        get: accessor
      };
    }
    _ref = ['cachable', 'cacheable'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      deprecated = _ref[_i];
      if (deprecated in accessor) {
        Batman.developer.warn("Property accessor option \"" + deprecated + "\" is deprecated. Use \"cache\" instead.");
        if (!('cache' in accessor)) {
          accessor.cache = accessor[deprecated];
        }
      }
    }
    return accessor;
  };

  promiseWrapper = function(fetcher) {
    return function(defaultAccessor) {
      return {
        get: function(key) {
          var asyncDeliver, existingValue, newValue, _base, _base1, _ref, _ref1, _this = this;
          if ((existingValue = defaultAccessor.get.apply(this, arguments)) != null) {
            return existingValue;
          }
          asyncDeliver = false;
          newValue = void 0;
          if ((_ref = (_base = this._batman).promises) == null) {
            _base.promises = {};
          }
          if ((_ref1 = (_base1 = this._batman.promises)[key]) == null) {
            _base1[key] = (function() {
              var deliver, returnValue;
              deliver = function(err, result) {
                if (asyncDeliver) {
                  _this.set(key, result);
                }
                return newValue = result;
              };
              returnValue = fetcher.call(_this, deliver, key);
              if (newValue == null) {
                newValue = returnValue;
              }
              return true;
            })();
          }
          asyncDeliver = true;
          return newValue;
        },
        cache: true
      };
    };
  };

  wrapSingleAccessor = function(core, wrapper) {
    var k, v;
    wrapper = (typeof wrapper === "function" ? wrapper(core) : void 0) || wrapper;
    for (k in core) {
      v = core[k];
      if (!(k in wrapper)) {
        wrapper[k] = v;
      }
    }
    return wrapper;
  };

  ObjectFunctions = {
    _defineAccessor: function() {
      var accessor, key, keys, _base, _i, _j, _len, _ref, _results;
      keys = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), accessor = arguments[_i++];
      if (!(accessor != null)) {
        return Batman.Property.defaultAccessorForBase(this);
      } else if (keys.length === 0 && ((_ref = Batman.typeOf(accessor)) !== 'Object' && _ref !== 'Function')) {
        return Batman.Property.accessorForBaseAndKey(this, accessor);
      } else if (typeof accessor.promise === 'function') {
        return this._defineWrapAccessor.apply(this, __slice.call(keys).concat([promiseWrapper(accessor.promise)]));
      }
      Batman.initializeObject(this);
      if (keys.length === 0) {
        return this._batman.defaultAccessor = getAccessorObject(this, accessor);
      } else {
        (_base = this._batman).keyAccessors || (_base.keyAccessors = new Batman.SimpleHash);
        _results = [];
        for (_j = 0, _len = keys.length; _j < _len; _j++) {
          key = keys[_j];
          _results.push(this._batman.keyAccessors.set(key, getAccessorObject(this, accessor)));
        }
        return _results;
      }
    },
    _defineWrapAccessor: function() {
      var key, keys, wrapper, _i, _j, _len, _results;
      keys = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), wrapper = arguments[_i++];
      Batman.initializeObject(this);
      if (keys.length === 0) {
        return this._defineAccessor(wrapSingleAccessor(this._defineAccessor(), wrapper));
      } else {
        _results = [];
        for (_j = 0, _len = keys.length; _j < _len; _j++) {
          key = keys[_j];
          _results.push(this._defineAccessor(key, wrapSingleAccessor(this._defineAccessor(key), wrapper)));
        }
        return _results;
      }
    },
    _resetPromises: function() {
      var key;
      if (this._batman.promises == null) {
        return;
      }
      for (key in this._batman.promises) {
        this._resetPromise(key);
      }
    },
    _resetPromise: function(key) {
      this.unset(key);
      this.property(key).cached = false;
      delete this._batman.promises[key];
    }
  };

  BatmanObject = (function(_super) {
    var counter;

    __extends(BatmanObject, _super);

    Batman.initializeObject(BatmanObject);

    Batman.initializeObject(BatmanObject.prototype);

    Batman.mixin(BatmanObject.prototype, ObjectFunctions, Batman.EventEmitter, Batman.Observable);

    Batman.mixin(BatmanObject, ObjectFunctions, Batman.EventEmitter, Batman.Observable);

    BatmanObject.classMixin = function() {
      return Batman.mixin.apply(Batman, [this].concat(__slice.call(arguments)));
    };

    BatmanObject.mixin = function() {
      return this.classMixin.apply(this.prototype, arguments);
    };

    BatmanObject.prototype.mixin = BatmanObject.classMixin;

    BatmanObject.classAccessor = BatmanObject._defineAccessor;

    BatmanObject.accessor = function() {
      var _ref;
      return (_ref = this.prototype)._defineAccessor.apply(_ref, arguments);
    };

    BatmanObject.prototype.accessor = BatmanObject._defineAccessor;

    BatmanObject.wrapClassAccessor = BatmanObject._defineWrapAccessor;

    BatmanObject.wrapAccessor = function() {
      var _ref;
      return (_ref = this.prototype)._defineWrapAccessor.apply(_ref, arguments);
    };

    BatmanObject.prototype.wrapAccessor = BatmanObject._defineWrapAccessor;

    BatmanObject.observeAll = function() {
      return this.prototype.observe.apply(this.prototype, arguments);
    };

    BatmanObject.singleton = function(singletonMethodName) {
      if (singletonMethodName == null) {
        singletonMethodName = "sharedInstance";
      }
      return this.classAccessor(singletonMethodName, {
        get: function() {
          var _name;
          return this[_name = "_" + singletonMethodName] || (this[_name] = new this);
        }
      });
    };

    BatmanObject.accessor('_batmanID', function() {
      return this._batmanID();
    });

    function BatmanObject() {
      var mixins;
      mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this._batman = new Batman._Batman(this);
      this.mixin.apply(this, mixins);
    }

    counter = 0;

    BatmanObject.prototype._batmanID = function() {
      var _base, _ref;
      this._batman.check(this);
      if ((_ref = (_base = this._batman).id) == null) {
        _base.id = counter++;
      }
      return this._batman.id;
    };

    BatmanObject.prototype.hashKey = function() {
      var _base;
      if (typeof this.isEqual === 'function') {
        return;
      }
      return (_base = this._batman).hashKey || (_base.hashKey = "<Batman.Object " + (this._batmanID()) + ">");
    };

    BatmanObject.prototype.toJSON = function() {
      var key, obj, value;
      obj = {};
      for (key in this) {
        if (!__hasProp.call(this, key)) continue;
        value = this[key];
        if (key !== "_batman" && key !== "hashKey" && key !== "_batmanID") {
          obj[key] = (value != null ? value.toJSON : void 0) ? value.toJSON() : value;
        }
      }
      return obj;
    };

    return BatmanObject;

  })(Object);

  Batman.Object = BatmanObject;

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Renderer = (function(_super) {
    var bindingRegexp, bindingSortOrder, bindingSortPositions, k, name, pos, _i, _j, _len, _len1, _ref;

    __extends(Renderer, _super);

    Renderer.prototype.deferEvery = 50;

    function Renderer(node, context, view) {
      this.node = node;
      this.context = context;
      this.view = view;
      this.resume = __bind(this.resume, this);

      this.start = __bind(this.start, this);

      Renderer.__super__.constructor.call(this);
      if (!(this.context instanceof Batman.RenderContext)) {
        Batman.developer.error("Must pass a RenderContext to a renderer for rendering");
      }
      this.immediate = Batman.setImmediate(this.start);
    }

    Renderer.prototype.start = function() {
      this.startTime = new Date;
      this.prevent('parsed');
      this.prevent('rendered');
      return this.parseNode(this.node);
    };

    Renderer.prototype.resume = function() {
      this.startTime = new Date;
      return this.parseNode(this.resumeNode);
    };

    Renderer.prototype.finish = function() {
      this.startTime = null;
      this.prevent('stopped');
      this.allowAndFire('parsed');
      return this.allowAndFire('rendered');
    };

    Renderer.prototype.stop = function() {
      Batman.clearImmediate(this.immediate);
      return this.fire('stopped');
    };

    _ref = ['parsed', 'rendered', 'stopped'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      Renderer.prototype.event(k).oneShot = true;
    }

    bindingRegexp = /^data\-(.*)/;

    bindingSortOrder = ["view", "renderif", "foreach", "formfor", "context", "bind", "source", "target"];

    bindingSortPositions = {};

    for (pos = _j = 0, _len1 = bindingSortOrder.length; _j < _len1; pos = ++_j) {
      name = bindingSortOrder[pos];
      bindingSortPositions[name] = pos;
    }

    Renderer.prototype._sortBindings = function(a, b) {
      var aindex, bindex;
      aindex = bindingSortPositions[a[0]];
      bindex = bindingSortPositions[b[0]];
      if (aindex == null) {
        aindex = bindingSortOrder.length;
      }
      if (bindex == null) {
        bindex = bindingSortOrder.length;
      }
      if (aindex > bindex) {
        return 1;
      } else if (bindex > aindex) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else if (b[0] > a[0]) {
        return -1;
      } else {
        return 0;
      }
    };

    Renderer.prototype.parseNode = function(node) {
      var attr, attribute, binding, bindingDefinition, bindings, names, nextNode, oldContext, reader, skipChildren, value, _k, _l, _len2, _len3, _ref1, _ref2, _ref3, _ref4, _this = this;
      if (this.deferEvery && (new Date - this.startTime) > this.deferEvery) {
        this.resumeNode = node;
        this.timeout = Batman.setImmediate(this.resume);
        return;
      }
      if (node.getAttribute && node.attributes) {
        bindings = [];
        _ref1 = node.attributes;
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          attribute = _ref1[_k];
          name = (_ref2 = attribute.nodeName.match(bindingRegexp)) != null ? _ref2[1] : void 0;
          if (!name) {
            continue;
          }
          bindings.push((names = name.split('-')).length > 1 ? [names[0], names.slice(1, names.length + 1 || 9e9).join('-'), attribute.value] : [name, void 0, attribute.value]);
        }
        _ref3 = bindings.sort(this._sortBindings);
        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
          _ref4 = _ref3[_l], name = _ref4[0], attr = _ref4[1], value = _ref4[2];
          binding = attr ? (reader = Batman.DOM.attrReaders[name]) ? (bindingDefinition = new Batman.DOM.AttrReaderBindingDefinition(node, attr, value, this.context, this), reader(bindingDefinition)) : void 0 : (reader = Batman.DOM.readers[name]) ? (bindingDefinition = new Batman.DOM.ReaderBindingDefinition(node, value, this.context, this), reader(bindingDefinition)) : void 0;
          if (binding instanceof Batman.RenderContext) {
            oldContext = this.context;
            this.context = binding;
            Batman.DOM.onParseExit(node, function() {
              return _this.context = oldContext;
            });
          } else if (binding != null ? binding.skipChildren : void 0) {
            skipChildren = true;
            break;
          }
        }
      }
      if ((nextNode = this.nextNode(node, skipChildren))) {
        return this.parseNode(nextNode);
      } else {
        return this.finish();
      }
    };

    Renderer.prototype.nextNode = function(node, skipChildren) {
      var children, nextParent, parentSibling, sibling, _ref1, _ref2;
      if (!skipChildren) {
        children = node.childNodes;
        if (children != null ? children.length : void 0) {
          return children[0];
        }
      }
      sibling = node.nextSibling;
      if ((_ref1 = Batman.DOM.onParseExit(node)) != null) {
        _ref1.forEach(function(callback) {
          return callback();
        });
      }
      Batman.DOM.forgetParseExit(node);
      if (this.node === node) {
        return;
      }
      if (sibling) {
        return sibling;
      }
      nextParent = node;
      while (nextParent = nextParent.parentNode) {
        parentSibling = nextParent.nextSibling;
        if ((_ref2 = Batman.DOM.onParseExit(nextParent)) != null) {
          _ref2.forEach(function(callback) {
            return callback();
          });
        }
        Batman.DOM.forgetParseExit(nextParent);
        if (this.node === nextParent) {
          return;
        }
        if (parentSibling) {
          return parentSibling;
        }
      }
    };

    return Renderer;

  })(Batman.Object);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.AbstractBinding = (function(_super) {
    var get_dot_rx, get_rx, keypath_rx, onlyAll, onlyData, onlyNode;

    __extends(AbstractBinding, _super);

    keypath_rx = /(^|,)\s*(?:(true|false)|("[^"]*")|(\{[^\}]*\})|(([0-9]+[a-zA-Z\_]|[a-zA-Z])[\w\-\.]*[\?\!]?))\s*(?=$|,)/g;

    get_dot_rx = /(?:\]\.)(.+?)(?=[\[\.]|\s*\||$)/;

    get_rx = /(?!^\s*)\[(.*?)\]/g;

    AbstractBinding.accessor('filteredValue', {
      get: function() {
        var renderContext, result, self, unfilteredValue;
        unfilteredValue = this.get('unfilteredValue');
        self = this;
        renderContext = this.get('renderContext');
        if (this.filterFunctions.length > 0) {
          Batman.developer.currentFilterStack = renderContext;
          result = this.filterFunctions.reduce(function(value, fn, i) {
            var args;
            args = self.filterArguments[i].map(function(argument) {
              if (argument._keypath) {
                return self.renderContext.get(argument._keypath);
              } else {
                return argument;
              }
            });
            args.unshift(value);
            while (args.length < (fn.length - 1)) {
              args.push(void 0);
            }
            args.push(self);
            return fn.apply(renderContext, args);
          }, unfilteredValue);
          Batman.developer.currentFilterStack = null;
          return result;
        } else {
          return unfilteredValue;
        }
      },
      set: function(_, newValue) {
        return this.set('unfilteredValue', newValue);
      }
    });

    AbstractBinding.accessor('unfilteredValue', {
      get: function() {
        var k;
        if (k = this.get('key')) {
          return Batman.RenderContext.deProxy(Batman.getPath(this, ['keyContext', k]));
        } else {
          return this.get('value');
        }
      },
      set: function(_, value) {
        var k, keyContext, prop;
        if (k = this.get('key')) {
          keyContext = this.get('keyContext');
          if (keyContext && keyContext !== Batman.container) {
            prop = Batman.Property.forBaseAndKey(keyContext, k);
            return prop.setValue(value);
          }
        } else {
          return this.set('value', value);
        }
      }
    });

    AbstractBinding.accessor('keyContext', function() {
      return this.renderContext.contextForKey(this.key);
    });

    onlyAll = Batman.BindingDefinitionOnlyObserve.All;

    onlyData = Batman.BindingDefinitionOnlyObserve.Data;

    onlyNode = Batman.BindingDefinitionOnlyObserve.Node;

    AbstractBinding.prototype.bindImmediately = true;

    AbstractBinding.prototype.shouldSet = true;

    AbstractBinding.prototype.isInputBinding = false;

    AbstractBinding.prototype.escapeValue = true;

    AbstractBinding.prototype.onlyObserve = onlyAll;

    AbstractBinding.prototype.skipParseFilter = false;

    function AbstractBinding(definition) {
      this._fireDataChange = __bind(this._fireDataChange, this);
      this.node = definition.node, this.keyPath = definition.keyPath, this.renderContext = definition.context, this.renderer = definition.renderer;
      if (definition.onlyObserve) {
        this.onlyObserve = definition.onlyObserve;
      }
      if (definition.skipParseFilter != null) {
        this.skipParseFilter = definition.skipParseFilter;
      }
      if (!this.skipParseFilter) {
        this.parseFilter();
      }
      if (this.bindImmediately) {
        this.bind();
      }
    }

    AbstractBinding.prototype.isTwoWay = function() {
      return (this.key != null) && this.filterFunctions.length === 0;
    };

    AbstractBinding.prototype.bind = function() {
      var _ref, _ref1;
      if (this.node && ((_ref = this.onlyObserve) === onlyAll || _ref === onlyNode) && Batman.DOM.nodeIsEditable(this.node)) {
        Batman.DOM.events.change(this.node, this._fireNodeChange.bind(this));
        if (this.onlyObserve === onlyNode) {
          this._fireNodeChange();
        }
      }
      if ((_ref1 = this.onlyObserve) === onlyAll || _ref1 === onlyData) {
        this.observeAndFire('filteredValue', this._fireDataChange);
      }
      if (this.node) {
        return Batman.DOM.trackBinding(this, this.node);
      }
    };

    AbstractBinding.prototype._fireNodeChange = function(event) {
      var val;
      this.shouldSet = false;
      val = this.value || this.get('keyContext');
      if (typeof this.nodeChange === "function") {
        this.nodeChange(this.node, val, event);
      }
      this.fire('nodeChange', this.node, val);
      return this.shouldSet = true;
    };

    AbstractBinding.prototype._fireDataChange = function(value) {
      if (this.shouldSet) {
        if (typeof this.dataChange === "function") {
          this.dataChange(value, this.node);
        }
        return this.fire('dataChange', value, this.node);
      }
    };

    AbstractBinding.prototype.die = function() {
      var _ref;
      this.forget();
      if ((_ref = this._batman.properties) != null) {
        _ref.forEach(function(key, property) {
          return property.die();
        });
      }
      this.fire('die');
      this.node = null;
      this.keyPath = null;
      this.renderContext = null;
      this.renderer = null;
      this.dead = true;
      return true;
    };

    AbstractBinding.prototype.parseFilter = function() {
      var args, filter, filterName, filterString, filters, key, keyPath, orig, split;
      this.filterFunctions = [];
      this.filterArguments = [];
      keyPath = this.keyPath;
      while (get_dot_rx.test(keyPath)) {
        keyPath = keyPath.replace(get_dot_rx, "]['$1']");
      }
      filters = keyPath.replace(get_rx, " | get $1 ").replace(/'/g, '"').split(/(?!")\s+\|\s+(?!")/);
      try {
        key = this.parseSegment(orig = filters.shift())[0];
      } catch (e) {
        Batman.developer.warn(e);
        Batman.developer.error("Error! Couldn't parse keypath in \"" + orig + "\". Parsing error above.");
      }
      if (key && key._keypath) {
        this.key = key._keypath;
      } else {
        this.value = key;
      }
      if (filters.length) {
        while (filterString = filters.shift()) {
          split = filterString.indexOf(' ');
          if (split === -1) {
            split = filterString.length;
          }
          filterName = filterString.substr(0, split);
          args = filterString.substr(split);
          if (!(filter = Batman.Filters[filterName])) {
            return Batman.developer.error("Unrecognized filter '" + filterName + "' in key \"" + this.keyPath + "\"!");
          }
          this.filterFunctions.push(filter);
          try {
            this.filterArguments.push(this.parseSegment(args));
          } catch (e) {
            Batman.developer.error("Bad filter arguments \"" + args + "\"!");
          }
        }
        return true;
      }
    };

    AbstractBinding.prototype.parseSegment = function(segment) {
      segment = segment.replace(keypath_rx, function(match, start, bool, string, object, keypath, offset) {
        var replacement;
        if (start == null) {
          start = '';
        }
        replacement = keypath ? '{"_keypath": "' + keypath + '"}' : bool || string || object;
        return start + replacement;
      });
      return JSON.parse("[" + segment + "]");
    };

    return AbstractBinding;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.ViewBinding = (function(_super) {

    __extends(ViewBinding, _super);

    ViewBinding.prototype.skipChildren = true;

    ViewBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function ViewBinding() {
      ViewBinding.__super__.constructor.apply(this, arguments);
      this.renderer.prevent('rendered');
      this.node.removeAttribute('data-view');
    }

    ViewBinding.prototype.dataChange = function(viewClassOrInstance) {
      var _ref, _this = this;
      if (viewClassOrInstance == null) {
        return;
      }
      if (viewClassOrInstance.isView) {
        this.view = viewClassOrInstance;
        this.view.set('context', this.renderContext);
        this.view.set('node', this.node);
      } else {
        this.view = new viewClassOrInstance({
          node: this.node,
          context: this.renderContext,
          parentView: this.renderer.view
        });
      }
      this.view.on('ready', function() {
        return _this.renderer.allowAndFire('rendered');
      });
      this.forget();
      return (_ref = this._batman.properties) != null ? _ref.forEach(function(key, property) {
        return property.die();
      }) : void 0;
    };

    ViewBinding.prototype.die = function() {
      this.view = null;
      return ViewBinding.__super__.die.apply(this, arguments);
    };

    return ViewBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.ViewArgumentBinding = (function(_super) {

    __extends(ViewArgumentBinding, _super);

    function ViewArgumentBinding() {
      return ViewArgumentBinding.__super__.constructor.apply(this, arguments);
    }

    ViewArgumentBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.None;

    return ViewArgumentBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.ValueBinding = (function(_super) {

    __extends(ValueBinding, _super);

    function ValueBinding(definition) {
      var _ref;
      this.isInputBinding = (_ref = definition.node.nodeName.toLowerCase()) === 'input' || _ref === 'textarea';
      ValueBinding.__super__.constructor.apply(this, arguments);
    }

    ValueBinding.prototype.nodeChange = function(node, context) {
      if (this.isTwoWay()) {
        return this.set('filteredValue', this.node.value);
      }
    };

    ValueBinding.prototype.dataChange = function(value, node) {
      return Batman.DOM.valueForNode(this.node, value, this.escapeValue);
    };

    return ValueBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.ShowHideBinding = (function(_super) {

    __extends(ShowHideBinding, _super);

    ShowHideBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function ShowHideBinding(definition) {
      var display;
      display = definition.node.style.display;
      if (!display || display === 'none') {
        display = '';
      }
      this.originalDisplay = display;
      this.invert = definition.invert;
      ShowHideBinding.__super__.constructor.apply(this, arguments);
    }

    ShowHideBinding.prototype.dataChange = function(value) {
      var hide, view, _ref;
      view = Batman._data(this.node, 'view');
      if ( !! value === !this.invert) {
        if (view != null) {
          view.fire('beforeAppear', this.node);
        }
        if ((_ref = Batman.data(this.node, 'show')) != null) {
          _ref.call(this.node);
        }
        this.node.style.display = this.originalDisplay;
        return view != null ? view.fire('appear', this.node) : void 0;
      } else {
        if (view != null) {
          view.fire('beforeDisappear', this.node);
        }
        if (typeof(hide = Batman.data(this.node, 'hide')) === 'function') {
          hide.call(this.node);
        } else {
          Batman.DOM.setStyleProperty(this.node, 'display', 'none', 'important');
        }
        return view != null ? view.fire('disappear', this.node) : void 0;
      }
    };

    return ShowHideBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.SelectBinding = (function(_super) {

    __extends(SelectBinding, _super);

    SelectBinding.prototype.isInputBinding = true;

    SelectBinding.prototype.canSetImplicitly = true;

    function SelectBinding() {
      this.updateOptionBindings = __bind(this.updateOptionBindings, this);

      this.nodeChange = __bind(this.nodeChange, this);

      this.dataChange = __bind(this.dataChange, this);

      this.childBindingAdded = __bind(this.childBindingAdded, this);
      this.selectedBindings = new Batman.SimpleSet;
      SelectBinding.__super__.constructor.apply(this, arguments);
    }

    SelectBinding.prototype.childBindingAdded = function(binding) {
      var dataChangeHandler, _this = this;
      if (binding instanceof Batman.DOM.CheckedBinding) {
        binding.on('dataChange', dataChangeHandler = function() {
          return _this.nodeChange();
        });
        binding.on('die', function() {
          binding.forget('dataChange', dataChangeHandler);
          return _this.selectedBindings.remove(binding);
        });
        this.selectedBindings.add(binding);
      } else if (binding instanceof Batman.DOM.IteratorBinding) {
        binding.on('nodeAdded', dataChangeHandler = function() {
          return _this._fireDataChange(_this.get('filteredValue'));
        });
        binding.on('nodeRemoved', dataChangeHandler);
        binding.on('die', function() {
          binding.forget('nodeAdded', dataChangeHandler);
          return binding.forget('nodeRemoved', dataChangeHandler);
        });
      } else {
        return;
      }
      return this._fireDataChange(this.get('filteredValue'));
    };

    SelectBinding.prototype.lastKeyContext = null;

    SelectBinding.prototype.dataChange = function(newValue) {
      var child, matches, valueToChild, _i, _len, _name, _ref, _this = this;
      this.lastKeyContext || (this.lastKeyContext = this.get('keyContext'));
      if (this.lastKeyContext !== this.get('keyContext')) {
        this.canSetImplicitly = true;
        this.lastKeyContext = this.get('keyContext');
      }
      if (newValue != null ? newValue.forEach : void 0) {
        valueToChild = {};
        _ref = this.node.children;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          child.selected = false;
          matches = valueToChild[_name = child.value] || (valueToChild[_name] = []);
          matches.push(child);
        }
        newValue.forEach(function(value) {
          var children, node, _j, _len1, _results;
          if (children = valueToChild[value]) {
            _results = [];
            for (_j = 0, _len1 = children.length; _j < _len1; _j++) {
              node = children[_j];
              _results.push(node.selected = true);
            }
            return _results;
          }
        });
      } else {
        if (!(newValue != null) && this.canSetImplicitly) {
          if (this.node.value) {
            this.canSetImplicitly = false;
            this.set('unfilteredValue', this.node.value);
          }
        } else {
          this.canSetImplicitly = false;
          Batman.DOM.valueForNode(this.node, newValue, this.escapeValue);
        }
      }
      this.updateOptionBindings();
    };

    SelectBinding.prototype.nodeChange = function() {
      var c, selections;
      if (this.isTwoWay()) {
        selections = this.node.multiple ? (function() {
          var _i, _len, _ref, _results;
          _ref = this.node.children;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            if (c.selected) {
              _results.push(c.value);
            }
          }
          return _results;
        }).call(this) : this.node.value;
        if (typeof selections === Array && selections.length === 1) {
          selections = selections[0];
        }
        this.set('unfilteredValue', selections);
        this.updateOptionBindings();
      }
    };

    SelectBinding.prototype.updateOptionBindings = function() {
      return this.selectedBindings.forEach(function(binding) {
        return binding._fireNodeChange();
      });
    };

    return SelectBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.RouteBinding = (function(_super) {

    __extends(RouteBinding, _super);

    function RouteBinding() {
      return RouteBinding.__super__.constructor.apply(this, arguments);
    }

    RouteBinding.prototype.onAnchorTag = false;

    RouteBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    RouteBinding.accessor('dispatcher', function() {
      return this.renderContext.get('dispatcher') || Batman.App.get('current.dispatcher');
    });

    RouteBinding.prototype.bind = function() {
      var _this = this;
      if (this.node.nodeName.toUpperCase() === 'A') {
        this.onAnchorTag = true;
      }
      RouteBinding.__super__.bind.apply(this, arguments);
      return Batman.DOM.events.click(this.node, function(node, event) {
        var params;
        if (event.__batmanActionTaken) {
          return;
        }
        event.__batmanActionTaken = true;
        params = _this.pathFromValue(_this.get('filteredValue'));
        if (params != null) {
          return Batman.redirect(params);
        }
      });
    };

    RouteBinding.prototype.dataChange = function(value) {
      var path;
      if (value) {
        path = this.pathFromValue(value);
      }
      if (this.onAnchorTag) {
        if (path && Batman.navigator) {
          path = Batman.navigator.linkTo(path);
        } else {
          path = "#";
        }
        return this.node.href = path;
      }
    };

    RouteBinding.prototype.pathFromValue = function(value) {
      var _ref;
      if (value) {
        if (value.isNamedRouteQuery) {
          return value.get('path');
        } else {
          return (_ref = this.get('dispatcher')) != null ? _ref.pathFromParams(value) : void 0;
        }
      }
    };

    return RouteBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.RadioBinding = (function(_super) {

    __extends(RadioBinding, _super);

    function RadioBinding() {
      return RadioBinding.__super__.constructor.apply(this, arguments);
    }

    RadioBinding.accessor('parsedNodeValue', function() {
      return Batman.DOM.attrReaders._parseAttribute(this.node.value);
    });

    RadioBinding.prototype.firstBind = true;

    RadioBinding.prototype.dataChange = function(value) {
      var boundValue;
      boundValue = this.get('filteredValue');
      if (boundValue != null) {
        this.node.checked = boundValue === Batman.DOM.attrReaders._parseAttribute(this.node.value);
      } else {
        if (this.firstBind && this.node.checked) {
          this.set('filteredValue', this.get('parsedNodeValue'));
        }
      }
      return this.firstBind = false;
    };

    RadioBinding.prototype.nodeChange = function(node) {
      if (this.isTwoWay()) {
        return this.set('filteredValue', this.get('parsedNodeValue'));
      }
    };

    return RadioBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.MixinBinding = (function(_super) {

    __extends(MixinBinding, _super);

    function MixinBinding() {
      return MixinBinding.__super__.constructor.apply(this, arguments);
    }

    MixinBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    MixinBinding.prototype.dataChange = function(value) {
      if (value != null) {
        return Batman.mixin(this.node, value);
      }
    };

    return MixinBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.FileBinding = (function(_super) {

    __extends(FileBinding, _super);

    function FileBinding() {
      return FileBinding.__super__.constructor.apply(this, arguments);
    }

    FileBinding.prototype.isInputBinding = true;

    FileBinding.prototype.nodeChange = function(node, subContext) {
      if (!this.isTwoWay()) {
        return;
      }
      if (node.hasAttribute('multiple')) {
        return this.set('filteredValue', Array.prototype.slice.call(node.files));
      } else {
        return this.set('filteredValue', node.files[0]);
      }
    };

    return FileBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.DeferredRenderingBinding = (function(_super) {

    __extends(DeferredRenderingBinding, _super);

    DeferredRenderingBinding.prototype.rendered = false;

    DeferredRenderingBinding.prototype.skipChildren = true;

    function DeferredRenderingBinding() {
      DeferredRenderingBinding.__super__.constructor.apply(this, arguments);
      this.node.removeAttribute("data-renderif");
    }

    DeferredRenderingBinding.prototype.nodeChange = function() {};

    DeferredRenderingBinding.prototype.dataChange = function(value) {
      if (value && !this.rendered) {
        return this.render();
      }
    };

    DeferredRenderingBinding.prototype.render = function() {
      new Batman.Renderer(this.node, this.renderContext, this.renderer.view);
      return this.rendered = true;
    };

    return DeferredRenderingBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.AbstractAttributeBinding = (function(_super) {

    __extends(AbstractAttributeBinding, _super);

    function AbstractAttributeBinding(definition) {
      this.attributeName = definition.attr;
      AbstractAttributeBinding.__super__.constructor.apply(this, arguments);
    }

    return AbstractAttributeBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.FormBinding = (function(_super) {

    __extends(FormBinding, _super);

    FormBinding.current = null;

    FormBinding.prototype.errorClass = 'error';

    FormBinding.prototype.defaultErrorsListSelector = 'div.errors';

    FormBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.None;

    FormBinding.accessor('errorsListSelector', function() {
      return this.get('node').getAttribute('data-errors-list') || this.defaultErrorsListSelector;
    });

    function FormBinding() {
      this.childBindingAdded = __bind(this.childBindingAdded, this);
      FormBinding.__super__.constructor.apply(this, arguments);
      this.contextName = this.attributeName;
      delete this.attributeName;
      Batman.DOM.events.submit(this.get('node'), function(node, e) {
        return Batman.DOM.preventDefault(e);
      });
      this.setupErrorsList();
    }

    FormBinding.prototype.childBindingAdded = function(binding) {
      var definition, field, index, node;
      if (binding.isInputBinding && Batman.isChildOf(this.get('node'), binding.get('node'))) {
        if (~ (index = binding.get('key').indexOf(this.contextName))) {
          node = binding.get('node');
          field = binding.get('key').slice(index + this.contextName.length + 1);
          definition = new Batman.DOM.AttrReaderBindingDefinition(node, this.errorClass, this.get('keyPath') + (" | get 'errors." + field + ".length'"), this.renderContext, this.renderer);
          return new Batman.DOM.AddClassBinding(definition);
        }
      }
    };

    FormBinding.prototype.setupErrorsList = function() {
      if (this.errorsListNode = Batman.DOM.querySelector(this.get('node'), this.get('errorsListSelector'))) {
        Batman.DOM.setInnerHTML(this.errorsListNode, this.errorsListHTML());
        if (!this.errorsListNode.getAttribute('data-showif')) {
          return this.errorsListNode.setAttribute('data-showif', "" + this.contextName + ".errors.length");
        }
      }
    };

    FormBinding.prototype.errorsListHTML = function() {
      return "<ul>\n  <li data-foreach-error=\"" + this.contextName + ".errors\" data-bind=\"error.fullMessage\"></li>\n</ul>";
    };

    return FormBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.EventBinding = (function(_super) {

    __extends(EventBinding, _super);

    EventBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.None;

    function EventBinding() {
      var attacher, callback, confirmText, _this = this;
      EventBinding.__super__.constructor.apply(this, arguments);
      if (confirmText = this.node.getAttribute('data-confirm')) {
        Batman.developer.deprecated("data-confirm");
      }
      callback = function() {
        var _ref;
        if (confirmText && !confirm(confirmText)) {
          return;
        }
        return (_ref = _this.get('filteredValue')) != null ? _ref.apply(_this.get('callbackContext'), arguments) : void 0;
      };
      if (attacher = Batman.DOM.events[this.attributeName]) {
        attacher(this.node, callback, this.renderContext);
      } else {
        Batman.DOM.events.other(this.node, this.attributeName, callback, this.renderContext);
      }
    }

    EventBinding.accessor('callbackContext', function() {
      var contextKeySegments;
      contextKeySegments = this.key.split('.');
      contextKeySegments.pop();
      if (contextKeySegments.length > 0) {
        return this.get('keyContext').get(contextKeySegments.join('.'));
      } else {
        return this.get('keyContext');
      }
    });

    EventBinding.wrapAccessor('unfilteredValue', function(core) {
      return {
        get: function() {
          var functionKey, k, keyContext, keys;
          if (k = this.get('key')) {
            keys = k.split('.');
            if (keys.length > 1) {
              functionKey = keys.pop();
              keyContext = Batman.getPath(this, ['keyContext'].concat(keys));
              keyContext = Batman.RenderContext.deProxy(keyContext);
              if (keyContext != null) {
                return keyContext[functionKey];
              }
            }
          }
          return core.get.apply(this, arguments);
        }
      };
    });

    return EventBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.NodeAttributeBinding = (function(_super) {

    __extends(NodeAttributeBinding, _super);

    function NodeAttributeBinding() {
      return NodeAttributeBinding.__super__.constructor.apply(this, arguments);
    }

    NodeAttributeBinding.prototype.dataChange = function(value) {
      if (value == null) {
        value = "";
      }
      return this.node[this.attributeName] = value;
    };

    NodeAttributeBinding.prototype.nodeChange = function(node) {
      if (this.isTwoWay()) {
        return this.set('filteredValue', Batman.DOM.attrReaders._parseAttribute(node[this.attributeName]));
      }
    };

    return NodeAttributeBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.CheckedBinding = (function(_super) {

    __extends(CheckedBinding, _super);

    function CheckedBinding() {
      return CheckedBinding.__super__.constructor.apply(this, arguments);
    }

    CheckedBinding.prototype.isInputBinding = true;

    CheckedBinding.prototype.dataChange = function(value) {
      return this.node[this.attributeName] = !! value;
    };

    return CheckedBinding;

  })(Batman.DOM.NodeAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.AttributeBinding = (function(_super) {

    __extends(AttributeBinding, _super);

    function AttributeBinding() {
      return AttributeBinding.__super__.constructor.apply(this, arguments);
    }

    AttributeBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    AttributeBinding.prototype.dataChange = function(value) {
      return this.node.setAttribute(this.attributeName, value);
    };

    AttributeBinding.prototype.nodeChange = function(node) {
      if (this.isTwoWay()) {
        return this.set('filteredValue', Batman.DOM.attrReaders._parseAttribute(node.getAttribute(this.attributeName)));
      }
    };

    return AttributeBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.AddClassBinding = (function(_super) {

    __extends(AddClassBinding, _super);

    AddClassBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function AddClassBinding(definition) {
      var name;
      this.invert = definition.invert;
      this.classes = (function() {
        var _i, _len, _ref, _results;
        _ref = definition.attr.split('|');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          _results.push({
            name: name,
            pattern: new RegExp("(?:^|\\s)" + name + "(?:$|\\s)", 'i')
          });
        }
        return _results;
      })();
      AddClassBinding.__super__.constructor.apply(this, arguments);
    }

    AddClassBinding.prototype.dataChange = function(value) {
      var currentName, includesClassName, name, pattern, _i, _len, _ref, _ref1;
      currentName = this.node.className;
      _ref = this.classes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], name = _ref1.name, pattern = _ref1.pattern;
        includesClassName = pattern.test(currentName);
        if ( !! value === !this.invert) {
          if (!includesClassName) {
            this.node.className = "" + currentName + " " + name;
          }
        } else {
          if (includesClassName) {
            this.node.className = currentName.replace(pattern, ' ');
          }
        }
      }
      return true;
    };

    return AddClassBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.AbstractCollectionBinding = (function(_super) {

    __extends(AbstractCollectionBinding, _super);

    function AbstractCollectionBinding() {
      return AbstractCollectionBinding.__super__.constructor.apply(this, arguments);
    }

    AbstractCollectionBinding.prototype.bindCollection = function(newCollection) {
      var _ref;
      if (newCollection instanceof Batman.Hash) {
        newCollection = newCollection.meta;
      }
      if (newCollection === this.collection) {
        return true;
      } else {
        this.unbindCollection();
        this.collection = newCollection;
        if ((_ref = this.collection) != null ? _ref.isObservable : void 0) {
          this.collection.observeAndFire('toArray', this.handleArrayChanged);
          return true;
        }
      }
      return false;
    };

    AbstractCollectionBinding.prototype.unbindCollection = function() {
      var _ref;
      if ((_ref = this.collection) != null ? _ref.isObservable : void 0) {
        return this.collection.forget('toArray', this.handleArrayChanged);
      }
    };

    AbstractCollectionBinding.prototype.handleArrayChanged = function() {};

    AbstractCollectionBinding.prototype.die = function() {
      this.unbindCollection();
      return AbstractCollectionBinding.__super__.die.apply(this, arguments);
    };

    return AbstractCollectionBinding;

  })(Batman.DOM.AbstractAttributeBinding);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.DOM.StyleBinding = (function(_super) {

    __extends(StyleBinding, _super);

    StyleBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function StyleBinding() {
      this.setStyle = __bind(this.setStyle, this);

      this.handleArrayChanged = __bind(this.handleArrayChanged, this);
      this.oldStyles = {};
      this.styleBindings = {};
      StyleBinding.__super__.constructor.apply(this, arguments);
    }

    StyleBinding.prototype.dataChange = function(value) {
      var colonSplitCSSValues, cssName, key, style, _i, _len, _ref, _ref1, _results;
      if (!value) {
        this.resetStyles();
        return;
      }
      this.unbindCollection();
      if (typeof value === 'string') {
        this.resetStyles();
        _ref = value.split(';');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          style = _ref[_i];
          _ref1 = style.split(":"), cssName = _ref1[0], colonSplitCSSValues = 2 <= _ref1.length ? __slice.call(_ref1, 1) : [];
          this.setStyle(cssName, colonSplitCSSValues.join(":"));
        }
        return;
      }
      if (value instanceof Batman.Hash) {
        return this.bindCollection(value);
      } else {
        if (value instanceof Batman.Object) {
          value = value.toJSON();
        }
        this.resetStyles();
        _results = [];
        for (key in value) {
          if (!__hasProp.call(value, key)) continue;
          _results.push(this.bindSingleAttribute(key, "" + this.keyPath + "." + key));
        }
        return _results;
      }
    };

    StyleBinding.prototype.handleArrayChanged = function(array) {
      var _this = this;
      return this.collection.forEach(function(key, value) {
        return _this.bindSingleAttribute(key, "" + _this.keyPath + "." + key);
      });
    };

    StyleBinding.prototype.bindSingleAttribute = function(attr, keyPath) {
      var definition;
      definition = new Batman.DOM.AttrReaderBindingDefinition(this.node, attr, keyPath, this.renderContext, this.renderer);
      return this.styleBindings[attr] = new Batman.DOM.StyleBinding.SingleStyleBinding(definition, this);
    };

    StyleBinding.prototype.setStyle = function(key, value) {
      key = Batman.helpers.camelize(key.trim(), true);
      if (this.oldStyles[key] == null) {
        this.oldStyles[key] = this.node.style[key] || "";
      }
      if (value != null ? value.trim : void 0) {
        value = value.trim();
      }
      if (value == null) {
        value = "";
      }
      return this.node.style[key] = value;
    };

    StyleBinding.prototype.resetStyles = function() {
      var cssName, cssValue, _ref, _results;
      _ref = this.oldStyles;
      _results = [];
      for (cssName in _ref) {
        if (!__hasProp.call(_ref, cssName)) continue;
        cssValue = _ref[cssName];
        _results.push(this.setStyle(cssName, cssValue));
      }
      return _results;
    };

    StyleBinding.prototype.resetBindings = function() {
      var attribute, binding, _ref;
      _ref = this.styleBindings;
      for (attribute in _ref) {
        binding = _ref[attribute];
        binding._fireDataChange('');
        binding.die();
      }
      return this.styleBindings = {};
    };

    StyleBinding.prototype.unbindCollection = function() {
      this.resetBindings();
      return StyleBinding.__super__.unbindCollection.apply(this, arguments);
    };

    StyleBinding.SingleStyleBinding = (function(_super1) {

      __extends(SingleStyleBinding, _super1);

      SingleStyleBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

      SingleStyleBinding.prototype.isTwoWay = function() {
        return false;
      };

      function SingleStyleBinding(definition, parent) {
        this.parent = parent;
        SingleStyleBinding.__super__.constructor.call(this, definition);
      }

      SingleStyleBinding.prototype.dataChange = function(value) {
        return this.parent.setStyle(this.attributeName, value);
      };

      return SingleStyleBinding;

    })(Batman.DOM.AbstractAttributeBinding);

    return StyleBinding;

  })(Batman.DOM.AbstractCollectionBinding);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.IteratorBinding = (function(_super) {

    __extends(IteratorBinding, _super);

    IteratorBinding.prototype.currentActionNumber = 0;

    IteratorBinding.prototype.queuedActionNumber = 0;

    IteratorBinding.prototype.bindImmediately = false;

    IteratorBinding.prototype.skipChildren = true;

    IteratorBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function IteratorBinding(definition) {
      this.handleArrayChanged = __bind(this.handleArrayChanged, this);

      var previousSiblingNode, sourceNode, _this = this;
      sourceNode = definition.node, this.iteratorName = definition.attr, this.key = definition.keyPath, this.parentRenderer = definition.renderer;
      this.nodeMap = new Batman.SimpleHash;
      this.rendererMap = new Batman.SimpleHash;
      this.prototypeNode = sourceNode.cloneNode(true);
      this.prototypeNode.removeAttribute("data-foreach-" + this.iteratorName);
      previousSiblingNode = sourceNode.nextSibling;
      this.startNode = document.createComment("start " + this.iteratorName + "-" + (this.get('_batmanID')));
      this.endNode = document.createComment("end " + this.iteratorName + "-" + (this.get('_batmanID')));
      this.endNode[Batman.expando] = sourceNode[Batman.expando];
      if (Batman.canDeleteExpando) {
        delete sourceNode[Batman.expando];
      }
      Batman.DOM.insertBefore(sourceNode.parentNode, this.startNode, previousSiblingNode);
      Batman.DOM.insertBefore(sourceNode.parentNode, this.endNode, previousSiblingNode);
      this.parentRenderer.prevent('rendered');
      Batman.DOM.onParseExit(sourceNode.parentNode, function() {
        Batman.DOM.destroyNode(sourceNode);
        _this.bind();
        return _this.parentRenderer.allowAndFire('rendered');
      });
      definition.node = this.endNode;
      IteratorBinding.__super__.constructor.apply(this, arguments);
    }

    IteratorBinding.prototype.parentNode = function() {
      return this.endNode.parentNode;
    };

    IteratorBinding.prototype.dataChange = function(collection) {
      var items, _items;
      if (collection != null) {
        if (!this.bindCollection(collection)) {
          items = (collection != null ? collection.forEach : void 0) ? (_items = [], collection.forEach(function(item) {
            return _items.push(item);
          }), _items) : Object.keys(collection);
          return this.handleArrayChanged(items);
        }
      } else {
        return this.handleArrayChanged([]);
      }
    };

    IteratorBinding.prototype.handleArrayChanged = function(newItems) {
      var existingNode, index, newItem, node, nodeAtIndex, parentNode, startIndex, unseenNodeMap, _i, _len, _this = this;
      parentNode = this.parentNode();
      startIndex = this._getStartNodeIndex() + 1;
      unseenNodeMap = this.nodeMap.merge();
      if (newItems) {
        for (index = _i = 0, _len = newItems.length; _i < _len; index = ++_i) {
          newItem = newItems[index];
          nodeAtIndex = parentNode.childNodes[startIndex + index];
          if ((nodeAtIndex != null) && this._itemForNode(nodeAtIndex) === newItem) {
            unseenNodeMap.unset(newItem);
            continue;
          } else {
            node = (existingNode = this.nodeMap.get(newItem)) ? (unseenNodeMap.unset(newItem), existingNode) : this._newNodeForItem(newItem);
            Batman.DOM.insertBefore(this.parentNode(), node, nodeAtIndex);
          }
        }
      }
      unseenNodeMap.forEach(function(item, node) {
        if (_this._nodesToBeRendered.has(node)) {
          _this._nodesToBeRemoved || (_this._nodesToBeRemoved = new Batman.SimpleSet);
          return _this._nodesToBeRemoved.add(node);
        } else {
          return _this._removeItem(item);
        }
      });
    };

    IteratorBinding.prototype._itemForNode = function(node) {
      return Batman._data(node, "" + this.iteratorName + "Item");
    };

    IteratorBinding.prototype._newNodeForItem = function(newItem) {
      var newNode, renderer, _this = this;
      newNode = this.prototypeNode.cloneNode(true);
      this._nodesToBeRendered || (this._nodesToBeRendered = new Batman.SimpleSet);
      this._nodesToBeRendered.add(newNode);
      Batman._data(newNode, "" + this.iteratorName + "Item", newItem);
      this.nodeMap.set(newItem, newNode);
      this.parentRenderer.prevent('rendered');
      renderer = new Batman.Renderer(newNode, this.renderContext.descend(newItem, this.iteratorName), this.parentRenderer.view);
      renderer.once('rendered', function() {
        var _ref;
        _this._nodesToBeRendered.remove(newNode);
        if ((_ref = _this._nodesToBeRemoved) != null ? _ref.has(newNode) : void 0) {
          _this._nodesToBeRemoved.remove(newNode);
          _this._removeItem(newItem);
        } else {
          Batman.DOM.propagateBindingEvents(newNode);
          _this.fire('nodeAdded', newNode, newItem);
        }
        return _this.parentRenderer.allowAndFire('rendered');
      });
      return newNode;
    };

    IteratorBinding.prototype._getStartNodeIndex = function() {
      var index, node, _i, _len, _ref;
      _ref = this.parentNode().childNodes;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        node = _ref[index];
        if (node === this.startNode) {
          return index;
        }
      }
      return 0;
    };

    IteratorBinding.prototype._removeItem = function(item) {
      var node;
      node = this.nodeMap.unset(item);
      Batman.DOM.destroyNode(node);
      return this.fire('nodeRemoved', node, item);
    };

    IteratorBinding.prototype.die = function() {
      var _ref;
      if (this._nodesToBeRendered && !this._nodesToBeRendered.isEmpty()) {
        this._nodesToBeRemoved || (this._nodesToBeRemoved = new Batman.SimpleSet);
        (_ref = this._nodesToBeRemoved).add.apply(_ref, this._nodesToBeRendered.toArray());
      }
      return IteratorBinding.__super__.die.apply(this, arguments);
    };

    return IteratorBinding;

  })(Batman.DOM.AbstractCollectionBinding);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.ClassBinding = (function(_super) {

    __extends(ClassBinding, _super);

    function ClassBinding() {
      this.handleArrayChanged = __bind(this.handleArrayChanged, this);
      return ClassBinding.__super__.constructor.apply(this, arguments);
    }

    ClassBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    ClassBinding.prototype.dataChange = function(value) {
      if (value != null) {
        this.unbindCollection();
        if (typeof value === 'string') {
          return this.node.className = value;
        } else {
          this.bindCollection(value);
          return this.updateFromCollection();
        }
      }
    };

    ClassBinding.prototype.updateFromCollection = function() {
      var array, k, v;
      if (this.collection) {
        array = this.collection.map ? this.collection.map(function(x) {
          return x;
        }) : (function() {
          var _ref, _results;
          _ref = this.collection;
          _results = [];
          for (k in _ref) {
            if (!__hasProp.call(_ref, k)) continue;
            v = _ref[k];
            _results.push(k);
          }
          return _results;
        }).call(this);
        if (array.toArray != null) {
          array = array.toArray();
        }
        return this.node.className = array.join(' ');
      }
    };

    ClassBinding.prototype.handleArrayChanged = function() {
      return this.updateFromCollection();
    };

    return ClassBinding;

  })(Batman.DOM.AbstractCollectionBinding);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ValidationError = (function(_super) {

    __extends(ValidationError, _super);

    ValidationError.accessor('fullMessage', function() {
      return Batman.t('errors.format', {
        attribute: Batman.helpers.humanize(this.attribute),
        message: this.message
      });
    });

    function ValidationError(attribute, message) {
      ValidationError.__super__.constructor.call(this, {
        attribute: attribute,
        message: message
      });
    }

    return ValidationError;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.StorageAdapter = (function(_super) {

    __extends(StorageAdapter, _super);

    StorageAdapter.StorageError = (function(_super1) {

      __extends(StorageError, _super1);

      StorageError.prototype.name = "StorageError";

      function StorageError(message) {
        StorageError.__super__.constructor.apply(this, arguments);
        this.message = message;
      }

      return StorageError;

    })(Error);

    StorageAdapter.RecordExistsError = (function(_super1) {

      __extends(RecordExistsError, _super1);

      RecordExistsError.prototype.name = 'RecordExistsError';

      function RecordExistsError(message) {
        RecordExistsError.__super__.constructor.call(this, message || "Can't create this record because it already exists in the store!");
      }

      return RecordExistsError;

    })(StorageAdapter.StorageError);

    StorageAdapter.NotFoundError = (function(_super1) {

      __extends(NotFoundError, _super1);

      NotFoundError.prototype.name = 'NotFoundError';

      function NotFoundError(message) {
        NotFoundError.__super__.constructor.call(this, message || "Record couldn't be found in storage!");
      }

      return NotFoundError;

    })(StorageAdapter.StorageError);

    StorageAdapter.NotAllowedError = (function(_super1) {

      __extends(NotAllowedError, _super1);

      NotAllowedError.prototype.name = "NotAllowedError";

      function NotAllowedError(message) {
        NotAllowedError.__super__.constructor.call(this, message || "Storage operation denied access to the operation!");
      }

      return NotAllowedError;

    })(StorageAdapter.StorageError);

    StorageAdapter.NotAcceptableError = (function(_super1) {

      __extends(NotAcceptableError, _super1);

      NotAcceptableError.prototype.name = "NotAcceptableError";

      function NotAcceptableError(message) {
        NotAcceptableError.__super__.constructor.call(this, message || "Storage operation permitted but the request was malformed!");
      }

      return NotAcceptableError;

    })(StorageAdapter.StorageError);

    StorageAdapter.UnprocessableRecordError = (function(_super1) {

      __extends(UnprocessableRecordError, _super1);

      UnprocessableRecordError.prototype.name = "UnprocessableRecordError";

      function UnprocessableRecordError(message) {
        UnprocessableRecordError.__super__.constructor.call(this, message || "Storage adapter could not process the record!");
      }

      return UnprocessableRecordError;

    })(StorageAdapter.StorageError);

    StorageAdapter.InternalStorageError = (function(_super1) {

      __extends(InternalStorageError, _super1);

      InternalStorageError.prototype.name = "InternalStorageError";

      function InternalStorageError(message) {
        InternalStorageError.__super__.constructor.call(this, message || "An error occured during the storage operation!");
      }

      return InternalStorageError;

    })(StorageAdapter.StorageError);

    StorageAdapter.NotImplementedError = (function(_super1) {

      __extends(NotImplementedError, _super1);

      NotImplementedError.prototype.name = "NotImplementedError";

      function NotImplementedError(message) {
        NotImplementedError.__super__.constructor.call(this, message || "This operation is not implemented by the storage adpater!");
      }

      return NotImplementedError;

    })(StorageAdapter.StorageError);

    function StorageAdapter(model) {
      var constructor;
      StorageAdapter.__super__.constructor.call(this, {
        model: model
      });
      constructor = this.constructor;
      if (constructor.ModelMixin) {
        Batman.extend(model, constructor.ModelMixin);
      }
      if (constructor.RecordMixin) {
        Batman.extend(model.prototype, constructor.RecordMixin);
      }
    }

    StorageAdapter.prototype.isStorageAdapter = true;

    StorageAdapter.prototype.storageKey = function(record) {
      var model;
      model = (record != null ? record.constructor : void 0) || this.model;
      return model.get('storageKey') || Batman.helpers.pluralize(Batman.helpers.underscore(model.get('resourceName')));
    };

    StorageAdapter.prototype.getRecordFromData = function(attributes, constructor) {
      var record;
      if (constructor == null) {
        constructor = this.model;
      }
      record = new constructor();
      record._withoutDirtyTracking(function() {
        return this.fromJSON(attributes);
      });
      return record;
    };

    StorageAdapter.skipIfError = function(f) {
      return function(env, next) {
        if (env.error != null) {
          return next();
        } else {
          return f.call(this, env, next);
        }
      };
    };

    StorageAdapter.prototype.before = function() {
      return this._addFilter.apply(this, ['before'].concat(__slice.call(arguments)));
    };

    StorageAdapter.prototype.after = function() {
      return this._addFilter.apply(this, ['after'].concat(__slice.call(arguments)));
    };

    StorageAdapter.prototype._inheritFilters = function() {
      var filtersByKey, filtersList, key, oldFilters, position, _results;
      if (!this._batman.check(this) || !this._batman.filters) {
        oldFilters = this._batman.getFirst('filters');
        this._batman.filters = {
          before: {},
          after: {}
        };
        if (oldFilters != null) {
          _results = [];
          for (position in oldFilters) {
            filtersByKey = oldFilters[position];
            _results.push((function() {
              var _results1;
              _results1 = [];
              for (key in filtersByKey) {
                filtersList = filtersByKey[key];
                _results1.push(this._batman.filters[position][key] = filtersList.slice(0));
              }
              return _results1;
            }).call(this));
          }
          return _results;
        }
      }
    };

    StorageAdapter.prototype._addFilter = function() {
      var filter, key, keys, position, _base, _i, _j, _len;
      position = arguments[0], keys = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), filter = arguments[_i++];
      this._inheritFilters();
      for (_j = 0, _len = keys.length; _j < _len; _j++) {
        key = keys[_j];
        (_base = this._batman.filters[position])[key] || (_base[key] = []);
        this._batman.filters[position][key].push(filter);
      }
      return true;
    };

    StorageAdapter.prototype.runFilter = function(position, action, env, callback) {
      var actionFilters, allFilters, filters, next, _this = this;
      this._inheritFilters();
      allFilters = this._batman.filters[position].all || [];
      actionFilters = this._batman.filters[position][action] || [];
      env.action = action;
      filters = position === 'before' ? actionFilters.concat(allFilters) : allFilters.concat(actionFilters);
      next = function(newEnv) {
        var nextFilter;
        if (newEnv != null) {
          env = newEnv;
        }
        if ((nextFilter = filters.shift()) != null) {
          return nextFilter.call(_this, env, next);
        } else {
          return callback.call(_this, env);
        }
      };
      return next();
    };

    StorageAdapter.prototype.runBeforeFilter = function() {
      return this.runFilter.apply(this, ['before'].concat(__slice.call(arguments)));
    };

    StorageAdapter.prototype.runAfterFilter = function(action, env, callback) {
      return this.runFilter('after', action, env, this.exportResult(callback));
    };

    StorageAdapter.prototype.exportResult = function(callback) {
      return function(env) {
        return callback(env.error, env.result, env);
      };
    };

    StorageAdapter.prototype._jsonToAttributes = function(json) {
      return JSON.parse(json);
    };

    StorageAdapter.prototype.perform = function(key, subject, options, callback) {
      var env, next, _this = this;
      options || (options = {});
      env = {
        options: options,
        subject: subject
      };
      next = function(newEnv) {
        if (newEnv != null) {
          env = newEnv;
        }
        return _this.runAfterFilter(key, env, callback);
      };
      this.runBeforeFilter(key, env, function(env) {
        return this[key](env, next);
      });
      return void 0;
    };

    return StorageAdapter;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice,
    __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }
    return -1;
  };

  Batman.RestStorage = (function(_super) {
    var key, _fn, _i, _len, _ref, _this = this;

    __extends(RestStorage, _super);

    RestStorage.CommunicationError = (function(_super1) {

      __extends(CommunicationError, _super1);

      CommunicationError.prototype.name = 'CommunicationError';

      function CommunicationError(message) {
        CommunicationError.__super__.constructor.call(this, message || "A communication error has occurred!");
      }

      return CommunicationError;

    })(RestStorage.StorageError);

    RestStorage.JSONContentType = 'application/json';

    RestStorage.PostBodyContentType = 'application/x-www-form-urlencoded';

    RestStorage.BaseMixin = {
      request: function(action, options, callback) {
        if (!callback) {
          callback = options;
          options = {};
        }
        options.method || (options.method = 'GET');
        options.action = action;
        return this._doStorageOperation(options.method.toLowerCase(), options, callback);
      }
    };

    RestStorage.ModelMixin = Batman.extend({}, RestStorage.BaseMixin, {
      urlNestsUnder: function() {
        var key, keys, parents, _i, _len;
        keys = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        parents = {};
        for (_i = 0, _len = keys.length; _i < _len; _i++) {
          key = keys[_i];
          parents[key + '_id'] = Batman.helpers.pluralize(key);
        }
        this.url = function(options) {
          var childSegment, parentID, plural;
          childSegment = Batman.helpers.pluralize(this.get('resourceName').toLowerCase());
          for (key in parents) {
            plural = parents[key];
            parentID = options.data[key];
            if (parentID) {
              delete options.data[key];
              return "" + plural + "/" + parentID + "/" + childSegment;
            }
          }
          return childSegment;
        };
        return this.prototype.url = function() {
          var childSegment, id, parentID, plural, url;
          childSegment = Batman.helpers.pluralize(this.constructor.get('resourceName').toLowerCase());
          for (key in parents) {
            plural = parents[key];
            parentID = this.get('dirtyKeys').get(key);
            if (parentID === void 0) {
              parentID = this.get(key);
            }
            if (parentID) {
              url = "" + plural + "/" + parentID + "/" + childSegment;
              break;
            }
          }
          url || (url = childSegment);
          if (id = this.get('id')) {
            url += '/' + id;
          }
          return url;
        };
      }
    });

    RestStorage.RecordMixin = Batman.extend({}, RestStorage.BaseMixin);

    RestStorage.prototype.defaultRequestOptions = {
      type: 'json'
    };

    RestStorage.prototype._implicitActionNames = ['create', 'read', 'update', 'destroy', 'readAll'];

    RestStorage.prototype.serializeAsForm = true;

    function RestStorage() {
      RestStorage.__super__.constructor.apply(this, arguments);
      this.defaultRequestOptions = Batman.extend({}, this.defaultRequestOptions);
    }

    RestStorage.prototype.recordJsonNamespace = function(record) {
      return Batman.helpers.singularize(this.storageKey(record));
    };

    RestStorage.prototype.collectionJsonNamespace = function(constructor) {
      return Batman.helpers.pluralize(this.storageKey(constructor.prototype));
    };

    RestStorage.prototype._execWithOptions = function(object, key, options, context) {
      if (context == null) {
        context = object;
      }
      if (typeof object[key] === 'function') {
        return object[key].call(context, options);
      } else {
        return object[key];
      }
    };

    RestStorage.prototype._defaultCollectionUrl = function(model) {
      return "" + (this.storageKey(model.prototype));
    };

    RestStorage.prototype._addParams = function(url, options) {
      var _ref;
      if (options && options.action && !(_ref = options.action, __indexOf.call(this._implicitActionNames, _ref) >= 0)) {
        url += '/' + options.action.toLowerCase();
      }
      return url;
    };

    RestStorage.prototype._addUrlAffixes = function(url, subject, env) {
      var prefix, segments;
      segments = [url, this.urlSuffix(subject, env)];
      if (url.charAt(0) !== '/') {
        prefix = this.urlPrefix(subject, env);
        if (prefix.charAt(prefix.length - 1) !== '/') {
          segments.unshift('/');
        }
        segments.unshift(prefix);
      }
      return segments.join('');
    };

    RestStorage.prototype.urlPrefix = function(object, env) {
      return this._execWithOptions(object, 'urlPrefix', env.options) || '';
    };

    RestStorage.prototype.urlSuffix = function(object, env) {
      return this._execWithOptions(object, 'urlSuffix', env.options) || '';
    };

    RestStorage.prototype.urlForRecord = function(record, env) {
      var id, url, _ref;
      if ((_ref = env.options) != null ? _ref.recordUrl : void 0) {
        url = this._execWithOptions(env.options, 'recordUrl', env.options, record);
      } else if (record.url) {
        url = this._execWithOptions(record, 'url', env.options);
      } else {
        url = record.constructor.url ? this._execWithOptions(record.constructor, 'url', env.options) : this._defaultCollectionUrl(record.constructor);
        if (env.action !== 'create') {
          if ((id = record.get('id')) != null) {
            url = url + "/" + id;
          } else {
            throw new this.constructor.StorageError("Couldn't get/set record primary key on " + env.action + "!");
          }
        }
      }
      return this._addUrlAffixes(this._addParams(url, env.options), record, env);
    };

    RestStorage.prototype.urlForCollection = function(model, env) {
      var url, _ref;
      url = ((_ref = env.options) != null ? _ref.collectionUrl : void 0) ? this._execWithOptions(env.options, 'collectionUrl', env.options, env.options.urlContext) : model.url ? this._execWithOptions(model, 'url', env.options) : this._defaultCollectionUrl(model, env.options);
      return this._addUrlAffixes(this._addParams(url, env.options), model, env);
    };

    RestStorage.prototype.request = function(env, next) {
      var options;
      options = Batman.extend(env.options, {
        autosend: false,
        success: function(data) {
          return env.data = data;
        },
        error: function(error) {
          return env.error = error;
        },
        loaded: function() {
          env.response = env.request.get('response');
          return next();
        }
      });
      env.request = new Batman.Request(options);
      return env.request.send();
    };

    RestStorage.prototype.perform = function(key, record, options, callback) {
      options || (options = {});
      Batman.extend(options, this.defaultRequestOptions);
      return RestStorage.__super__.perform.call(this, key, record, options, callback);
    };

    RestStorage.prototype.before('all', RestStorage.skipIfError(function(env, next) {
      if (!env.options.url) {
        try {
          env.options.url = env.subject.prototype ? this.urlForCollection(env.subject, env) : this.urlForRecord(env.subject, env);
        } catch (error) {
          env.error = error;
        }
      }
      return next();
    }));

    RestStorage.prototype.before('get', 'put', 'post', 'delete', RestStorage.skipIfError(function(env, next) {
      env.options.method = env.action.toUpperCase();
      return next();
    }));

    RestStorage.prototype.before('create', 'update', RestStorage.skipIfError(function(env, next) {
      var data, json, namespace;
      json = env.subject.toJSON();
      if (namespace = this.recordJsonNamespace(env.subject)) {
        data = {};
        data[namespace] = json;
      } else {
        data = json;
      }
      env.options.data = data;
      return next();
    }));

    RestStorage.prototype.before('create', 'update', 'put', 'post', RestStorage.skipIfError(function(env, next) {
      if (this.serializeAsForm) {
        env.options.contentType = this.constructor.PostBodyContentType;
      } else {
        if (env.options.data != null) {
          env.options.data = JSON.stringify(env.options.data);
          env.options.contentType = this.constructor.JSONContentType;
        }
      }
      return next();
    }));

    RestStorage.prototype.after('all', RestStorage.skipIfError(function(env, next) {
      var json;
      if (!(env.data != null)) {
        return next();
      }
      if (typeof env.data === 'string') {
        if (env.data.length > 0) {
          try {
            json = this._jsonToAttributes(env.data);
          } catch (error) {
            env.error = error;
            return next();
          }
        }
      } else if (typeof env.data === 'object') {
        json = env.data;
      }
      if (json != null) {
        env.json = json;
      }
      return next();
    }));

    RestStorage.prototype.extractFromNamespace = function(data, namespace) {
      if (namespace && (data[namespace] != null)) {
        return data[namespace];
      } else {
        return data;
      }
    };

    RestStorage.prototype.after('create', 'read', 'update', RestStorage.skipIfError(function(env, next) {
      var json;
      if (env.json != null) {
        json = this.extractFromNamespace(env.json, this.recordJsonNamespace(env.subject));
        env.subject._withoutDirtyTracking(function() {
          return this.fromJSON(json);
        });
      }
      env.result = env.subject;
      return next();
    }));

    RestStorage.prototype.after('readAll', RestStorage.skipIfError(function(env, next) {
      var jsonRecordAttributes, namespace;
      namespace = this.collectionJsonNamespace(env.subject);
      env.recordsAttributes = this.extractFromNamespace(env.json, namespace);
      if (Batman.typeOf(env.recordsAttributes) !== 'Array') {
        namespace = this.recordJsonNamespace(env.subject.prototype);
        env.recordsAttributes = [this.extractFromNamespace(env.json, namespace)];
      }
      env.result = env.records = (function() {
        var _i, _len, _ref, _results;
        _ref = env.recordsAttributes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          jsonRecordAttributes = _ref[_i];
          _results.push(this.getRecordFromData(jsonRecordAttributes, env.subject));
        }
        return _results;
      }).call(this);
      return next();
    }));

    RestStorage.prototype.after('get', 'put', 'post', 'delete', RestStorage.skipIfError(function(env, next) {
      var json, namespace;
      if (env.json != null) {
        json = env.json;
        namespace = env.subject.prototype ? this.collectionJsonNamespace(env.subject) : this.recordJsonNamespace(env.subject);
        env.result = namespace && (env.json[namespace] != null) ? env.json[namespace] : env.json;
      }
      return next();
    }));

    RestStorage.HTTPMethods = {
      create: 'POST',
      update: 'PUT',
      read: 'GET',
      readAll: 'GET',
      destroy: 'DELETE'
    };

    _ref = ['create', 'read', 'update', 'destroy', 'readAll', 'get', 'post', 'put', 'delete'];
    _fn = function(key) {
      return RestStorage.prototype[key] = RestStorage.skipIfError(function(env, next) {
        var _base;
        (_base = env.options).method || (_base.method = this.constructor.HTTPMethods[key]);
        return this.request(env, next);
      });
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      key = _ref[_i];
      _fn(key);
    }

    RestStorage.prototype.after('all', function(env, next) {
      if (env.error) {
        env.error = this._errorFor(env.error, env);
      }
      return next();
    });

    RestStorage._statusCodeErrors = {
      '0': RestStorage.CommunicationError,
      '403': RestStorage.NotAllowedError,
      '404': RestStorage.NotFoundError,
      '406': RestStorage.NotAcceptableError,
      '409': RestStorage.RecordExistsError,
      '422': RestStorage.UnprocessableRecordError,
      '500': RestStorage.InternalStorageError,
      '501': RestStorage.NotImplementedError
    };

    RestStorage.prototype._errorFor = function(error, env) {
      var errorClass, request;
      if (error instanceof Error || !(error.request != null)) {
        return error;
      }
      if (errorClass = this.constructor._statusCodeErrors[error.request.status]) {
        request = error.request;
        error = new errorClass;
        error.request = request;
        error.env = env;
      }
      return error;
    };

    return RestStorage;

  }).call(this, Batman.StorageAdapter);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.LocalStorage = (function(_super) {

    __extends(LocalStorage, _super);

    function LocalStorage() {
      if (typeof window.localStorage === 'undefined') {
        return null;
      }
      LocalStorage.__super__.constructor.apply(this, arguments);
      this.storage = localStorage;
    }

    LocalStorage.prototype.storageRegExpForRecord = function(record) {
      return new RegExp("^" + (this.storageKey(record)) + "(\\d+)$");
    };

    LocalStorage.prototype.nextIdForRecord = function(record) {
      var nextId, re;
      re = this.storageRegExpForRecord(record);
      nextId = 1;
      this._forAllStorageEntries(function(k, v) {
        var matches;
        if (matches = re.exec(k)) {
          return nextId = Math.max(nextId, parseInt(matches[1], 10) + 1);
        }
      });
      return nextId;
    };

    LocalStorage.prototype._forAllStorageEntries = function(iterator) {
      var i, key, _i, _ref;
      for (i = _i = 0, _ref = this.storage.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        key = this.storage.key(i);
        iterator.call(this, key, this.storage.getItem(key));
      }
      return true;
    };

    LocalStorage.prototype._storageEntriesMatching = function(constructor, options) {
      var re, records;
      re = this.storageRegExpForRecord(constructor.prototype);
      records = [];
      this._forAllStorageEntries(function(storageKey, storageString) {
        var data, keyMatches;
        if (keyMatches = re.exec(storageKey)) {
          data = this._jsonToAttributes(storageString);
          data[constructor.primaryKey] = keyMatches[1];
          if (this._dataMatches(options, data)) {
            return records.push(data);
          }
        }
      });
      return records;
    };

    LocalStorage.prototype._dataMatches = function(conditions, data) {
      var k, match, v;
      match = true;
      for (k in conditions) {
        v = conditions[k];
        if (data[k] !== v) {
          match = false;
          break;
        }
      }
      return match;
    };

    LocalStorage.prototype.before('read', 'create', 'update', 'destroy', LocalStorage.skipIfError(function(env, next) {
      var _this = this;
      if (env.action === 'create') {
        env.id = env.subject.get('id') || env.subject._withoutDirtyTracking(function() {
          return env.subject.set('id', _this.nextIdForRecord(env.subject));
        });
      } else {
        env.id = env.subject.get('id');
      }
      if (env.id == null) {
        env.error = new this.constructor.StorageError("Couldn't get/set record primary key on " + env.action + "!");
      } else {
        env.key = this.storageKey(env.subject) + env.id;
      }
      return next();
    }));

    LocalStorage.prototype.before('create', 'update', LocalStorage.skipIfError(function(env, next) {
      env.recordAttributes = JSON.stringify(env.subject);
      return next();
    }));

    LocalStorage.prototype.after('read', LocalStorage.skipIfError(function(env, next) {
      if (typeof env.recordAttributes === 'string') {
        try {
          env.recordAttributes = this._jsonToAttributes(env.recordAttributes);
        } catch (error) {
          env.error = error;
          return next();
        }
      }
      env.subject._withoutDirtyTracking(function() {
        return this.fromJSON(env.recordAttributes);
      });
      return next();
    }));

    LocalStorage.prototype.after('read', 'create', 'update', 'destroy', LocalStorage.skipIfError(function(env, next) {
      env.result = env.subject;
      return next();
    }));

    LocalStorage.prototype.after('readAll', LocalStorage.skipIfError(function(env, next) {
      var recordAttributes;
      env.result = env.records = (function() {
        var _i, _len, _ref, _results;
        _ref = env.recordsAttributes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          recordAttributes = _ref[_i];
          _results.push(this.getRecordFromData(recordAttributes, env.subject));
        }
        return _results;
      }).call(this);
      return next();
    }));

    LocalStorage.prototype.read = LocalStorage.skipIfError(function(env, next) {
      env.recordAttributes = this.storage.getItem(env.key);
      if (!env.recordAttributes) {
        env.error = new this.constructor.NotFoundError();
      }
      return next();
    });

    LocalStorage.prototype.create = LocalStorage.skipIfError(function(_arg, next) {
      var key, recordAttributes;
      key = _arg.key, recordAttributes = _arg.recordAttributes;
      if (this.storage.getItem(key)) {
        arguments[0].error = new this.constructor.RecordExistsError;
      } else {
        this.storage.setItem(key, recordAttributes);
      }
      return next();
    });

    LocalStorage.prototype.update = LocalStorage.skipIfError(function(_arg, next) {
      var key, recordAttributes;
      key = _arg.key, recordAttributes = _arg.recordAttributes;
      this.storage.setItem(key, recordAttributes);
      return next();
    });

    LocalStorage.prototype.destroy = LocalStorage.skipIfError(function(_arg, next) {
      var key;
      key = _arg.key;
      this.storage.removeItem(key);
      return next();
    });

    LocalStorage.prototype.readAll = LocalStorage.skipIfError(function(env, next) {
      try {
        arguments[0].recordsAttributes = this._storageEntriesMatching(env.subject, env.options.data);
      } catch (error) {
        arguments[0].error = error;
      }
      return next();
    });

    return LocalStorage;

  })(Batman.StorageAdapter);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.SessionStorage = (function(_super) {

    __extends(SessionStorage, _super);

    function SessionStorage() {
      if (typeof window.sessionStorage === 'undefined') {
        return null;
      }
      SessionStorage.__super__.constructor.apply(this, arguments);
      this.storage = sessionStorage;
    }

    return SessionStorage;

  })(Batman.LocalStorage);

}).call(this);

(function() {

  Batman.Encoders = new Batman.Object;

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ParamsReplacer = (function(_super) {

    __extends(ParamsReplacer, _super);

    function ParamsReplacer(navigator, params) {
      this.navigator = navigator;
      this.params = params;
    }

    ParamsReplacer.prototype.redirect = function() {
      return this.navigator.replace(this.toObject());
    };

    ParamsReplacer.prototype.replace = function(params) {
      this.params.replace(params);
      return this.redirect();
    };

    ParamsReplacer.prototype.update = function(params) {
      this.params.update(params);
      return this.redirect();
    };

    ParamsReplacer.prototype.clear = function() {
      this.params.clear();
      return this.redirect();
    };

    ParamsReplacer.prototype.toObject = function() {
      return this.params.toObject();
    };

    ParamsReplacer.accessor({
      get: function(k) {
        return this.params.get(k);
      },
      set: function(k, v) {
        var oldValue, result;
        oldValue = this.params.get(k);
        result = this.params.set(k, v);
        if (oldValue !== v) {
          this.redirect();
        }
        return result;
      },
      unset: function(k) {
        var hadKey, result;
        hadKey = this.params.hasKey(k);
        result = this.params.unset(k);
        if (hadKey) {
          this.redirect();
        }
        return result;
      }
    });

    return ParamsReplacer;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ParamsPusher = (function(_super) {

    __extends(ParamsPusher, _super);

    function ParamsPusher() {
      return ParamsPusher.__super__.constructor.apply(this, arguments);
    }

    ParamsPusher.prototype.redirect = function() {
      return this.navigator.push(this.toObject());
    };

    return ParamsPusher;

  })(Batman.ParamsReplacer);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.NamedRouteQuery = (function(_super) {

    __extends(NamedRouteQuery, _super);

    NamedRouteQuery.prototype.isNamedRouteQuery = true;

    function NamedRouteQuery(routeMap, args) {
      var key;
      if (args == null) {
        args = [];
      }
      NamedRouteQuery.__super__.constructor.call(this, {
        routeMap: routeMap,
        args: args
      });
      for (key in this.get('routeMap').childrenByName) {
        this[key] = this._queryAccess.bind(this, key);
      }
    }

    NamedRouteQuery.accessor('route', function() {
      var collectionRoute, memberRoute, route, _i, _len, _ref, _ref1;
      _ref = this.get('routeMap'), memberRoute = _ref.memberRoute, collectionRoute = _ref.collectionRoute;
      _ref1 = [memberRoute, collectionRoute];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        route = _ref1[_i];
        if (route != null) {
          if (route.namedArguments.length === this.get('args').length) {
            return route;
          }
        }
      }
      return collectionRoute || memberRoute;
    });

    NamedRouteQuery.accessor('path', function() {
      return this.path();
    });

    NamedRouteQuery.accessor('routeMap', 'args', 'cardinality', 'hashValue', Batman.Property.defaultAccessor);

    NamedRouteQuery.accessor({
      get: function(key) {
        if (key == null) {
          return;
        }
        if (typeof key === 'string') {
          return this.nextQueryForName(key);
        } else {
          return this.nextQueryWithArgument(key);
        }
      },
      cache: false
    });

    NamedRouteQuery.accessor('withHash', function() {
      var _this = this;
      return new Batman.Accessible(function(hashValue) {
        return _this.withHash(hashValue);
      });
    });

    NamedRouteQuery.prototype.withHash = function(hashValue) {
      var clone;
      clone = this.clone();
      clone.set('hashValue', hashValue);
      return clone;
    };

    NamedRouteQuery.prototype.nextQueryForName = function(key) {
      var map;
      if (map = this.get('routeMap').childrenByName[key]) {
        return new Batman.NamedRouteQuery(map, this.args);
      } else {
        return Batman.developer.error("Couldn't find a route for the name " + key + "!");
      }
    };

    NamedRouteQuery.prototype.nextQueryWithArgument = function(arg) {
      var args;
      args = this.args.slice(0);
      args.push(arg);
      return this.clone(args);
    };

    NamedRouteQuery.prototype.path = function() {
      var argumentName, argumentValue, index, namedArguments, params, _i, _len;
      params = {};
      namedArguments = this.get('route.namedArguments');
      for (index = _i = 0, _len = namedArguments.length; _i < _len; index = ++_i) {
        argumentName = namedArguments[index];
        if ((argumentValue = this.get('args')[index]) != null) {
          params[argumentName] = this._toParam(argumentValue);
        }
      }
      if (this.get('hashValue') != null) {
        params['#'] = this.get('hashValue');
      }
      return this.get('route').pathFromParams(params);
    };

    NamedRouteQuery.prototype.toString = function() {
      return this.path();
    };

    NamedRouteQuery.prototype.clone = function(args) {
      if (args == null) {
        args = this.args;
      }
      return new Batman.NamedRouteQuery(this.routeMap, args);
    };

    NamedRouteQuery.prototype._toParam = function(arg) {
      if (arg instanceof Batman.AssociationProxy) {
        arg = arg.get('target');
      }
      if ((arg != null ? arg.toParam : void 0) != null) {
        return arg.toParam();
      } else {
        return arg;
      }
    };

    NamedRouteQuery.prototype._queryAccess = function(key, arg) {
      var query;
      query = this.nextQueryForName(key);
      if (arg != null) {
        query = query.nextQueryWithArgument(arg);
      }
      return query;
    };

    return NamedRouteQuery;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Dispatcher = (function(_super) {
    var ControllerDirectory;

    __extends(Dispatcher, _super);

    Dispatcher.canInferRoute = function(argument) {
      return argument instanceof Batman.Model || argument instanceof Batman.AssociationProxy || argument.prototype instanceof Batman.Model;
    };

    Dispatcher.paramsFromArgument = function(argument) {
      var resourceNameFromModel;
      resourceNameFromModel = function(model) {
        return Batman.helpers.camelize(Batman.helpers.pluralize(model.get('resourceName')), true);
      };
      if (!this.canInferRoute(argument)) {
        return argument;
      }
      if (argument instanceof Batman.Model || argument instanceof Batman.AssociationProxy) {
        if (argument.isProxy) {
          argument = argument.get('target');
        }
        if (argument != null) {
          return {
            controller: resourceNameFromModel(argument.constructor),
            action: 'show',
            id: argument.get('id')
          };
        } else {
          return {};
        }
      } else if (argument.prototype instanceof Batman.Model) {
        return {
          controller: resourceNameFromModel(argument),
          action: 'index'
        };
      } else {
        return argument;
      }
    };

    ControllerDirectory = (function(_super1) {

      __extends(ControllerDirectory, _super1);

      function ControllerDirectory() {
        return ControllerDirectory.__super__.constructor.apply(this, arguments);
      }

      ControllerDirectory.accessor('__app', Batman.Property.defaultAccessor);

      ControllerDirectory.accessor(function(key) {
        return this.get("__app." + (Batman.helpers.capitalize(key)) + "Controller.sharedController");
      });

      return ControllerDirectory;

    })(Batman.Object);

    Dispatcher.accessor('controllers', function() {
      return new ControllerDirectory({
        __app: this.get('app')
      });
    });

    function Dispatcher(app, routeMap) {
      Dispatcher.__super__.constructor.call(this, {
        app: app,
        routeMap: routeMap
      });
    }

    Dispatcher.prototype.routeForParams = function(params) {
      params = this.constructor.paramsFromArgument(params);
      return this.get('routeMap').routeForParams(params);
    };

    Dispatcher.prototype.pathFromParams = function(params) {
      var _ref;
      if (typeof params === 'string') {
        return params;
      }
      params = this.constructor.paramsFromArgument(params);
      return (_ref = this.routeForParams(params)) != null ? _ref.pathFromParams(params) : void 0;
    };

    Dispatcher.prototype.dispatch = function(params) {
      var error, inferredParams, path, route, _ref, _ref1;
      inferredParams = this.constructor.paramsFromArgument(params);
      route = this.routeForParams(inferredParams);
      if (route) {
        _ref = route.pathAndParamsFromArgument(inferredParams), path = _ref[0], params = _ref[1];
        this.set('app.currentRoute', route);
        this.set('app.currentURL', path);
        this.get('app.currentParams').replace(params || {});
        route.dispatch(params);
      } else {
        if (Batman.typeOf(params) === 'Object' && !this.constructor.canInferRoute(params)) {
          return this.get('app.currentParams').replace(params);
        } else {
          this.get('app.currentParams').clear();
        }
        error = {
          type: '404',
          isPrevented: false,
          preventDefault: function() {
            return this.isPrevented = true;
          }
        };
        if ((_ref1 = Batman.currentApp) != null) {
          _ref1.fire('error', error);
        }
        if (error.isPrevented) {
          return params;
        }
        if (params !== '/404') {
          return Batman.redirect('/404');
        }
      }
      return path;
    };

    return Dispatcher;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Route = (function(_super) {

    __extends(Route, _super);

    Route.regexps = {
      namedParam: /:([\w\d]+)/g,
      splatParam: /\*([\w\d]+)/g,
      queryParam: '(?:\\?.+)?',
      namedOrSplat: /[:|\*]([\w\d]+)/g,
      namePrefix: '[:|\*]',
      escapeRegExp: /[-[\]{}+?.,\\^$|#\s]/g,
      openOptParam: /\(/g,
      closeOptParam: /\)/g
    };

    Route.prototype.optionKeys = ['member', 'collection'];

    Route.prototype.testKeys = ['controller', 'action'];

    Route.prototype.isRoute = true;

    function Route(templatePath, baseParams) {
      var k, matches, namedArguments, pattern, properties, regexp, regexps, _i, _len, _ref;
      regexps = this.constructor.regexps;
      if (templatePath.indexOf('/') !== 0) {
        templatePath = "/" + templatePath;
      }
      pattern = templatePath.replace(regexps.escapeRegExp, '\\$&');
      regexp = RegExp("^" + (pattern.replace(regexps.openOptParam, '(?:').replace(regexps.closeOptParam, ')?').replace(regexps.namedParam, '([^\/]+)').replace(regexps.splatParam, '(.*?)')) + regexps.queryParam + "$");
      regexps.namedOrSplat.lastIndex = 0;
      namedArguments = ((function() {
        var _results;
        _results = [];
        while (matches = regexps.namedOrSplat.exec(pattern)) {
          _results.push(matches[1]);
        }
        return _results;
      })());
      properties = {
        templatePath: templatePath,
        pattern: pattern,
        regexp: regexp,
        namedArguments: namedArguments,
        baseParams: baseParams
      };
      _ref = this.optionKeys;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        properties[k] = baseParams[k];
        delete baseParams[k];
      }
      Route.__super__.constructor.call(this, properties);
    }

    Route.prototype.paramsFromPath = function(pathAndQuery) {
      var index, match, matches, name, namedArguments, params, uri, _i, _len;
      uri = new Batman.URI(pathAndQuery);
      namedArguments = this.get('namedArguments');
      params = Batman.extend({
        path: uri.path
      }, this.get('baseParams'));
      matches = this.get('regexp').exec(uri.path).slice(1);
      for (index = _i = 0, _len = matches.length; _i < _len; index = ++_i) {
        match = matches[index];
        name = namedArguments[index];
        params[name] = match;
      }
      return Batman.extend(params, uri.queryParams);
    };

    Route.prototype.pathFromParams = function(argumentParams) {
      var hash, key, name, newPath, params, path, query, regexp, regexps, _i, _j, _len, _len1, _ref, _ref1;
      params = Batman.extend({}, argumentParams);
      path = this.get('templatePath');
      regexps = this.constructor.regexps;
      _ref = this.get('namedArguments');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        regexp = RegExp("" + regexps.namePrefix + name);
        newPath = path.replace(regexp, (params[name] != null ? params[name] : ''));
        if (newPath !== path) {
          delete params[name];
          path = newPath;
        }
      }
      path = path.replace(regexps.openOptParam, '').replace(regexps.closeOptParam, '').replace(/([^\/])\/+$/, '$1');
      _ref1 = this.testKeys;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        key = _ref1[_j];
        delete params[key];
      }
      if (params['#']) {
        hash = params['#'];
        delete params['#'];
      }
      query = Batman.URI.queryFromParams(params);
      if (query) {
        path += "?" + query;
      }
      if (hash) {
        path += "#" + hash;
      }
      return path;
    };

    Route.prototype.test = function(pathOrParams) {
      var key, path, value, _i, _len, _ref;
      if (typeof pathOrParams === 'string') {
        path = pathOrParams;
      } else if (pathOrParams.path != null) {
        path = pathOrParams.path;
      } else {
        path = this.pathFromParams(pathOrParams);
        _ref = this.testKeys;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          if ((value = this.get(key)) != null) {
            if (pathOrParams[key] !== value) {
              return false;
            }
          }
        }
      }
      return this.get('regexp').test(path);
    };

    Route.prototype.pathAndParamsFromArgument = function(pathOrParams) {
      var params, path;
      if (typeof pathOrParams === 'string') {
        params = this.paramsFromPath(pathOrParams);
        path = pathOrParams;
      } else {
        params = pathOrParams;
        path = this.pathFromParams(pathOrParams);
      }
      return [path, params];
    };

    Route.prototype.dispatch = function(params) {
      if (!this.test(params)) {
        return false;
      }
      return this.get('callback')(params);
    };

    Route.prototype.callback = function() {
      throw new Batman.DevelopmentError("Override callback in a Route subclass");
    };

    return Route;

  })(Batman.Object);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ControllerActionRoute = (function(_super) {

    __extends(ControllerActionRoute, _super);

    ControllerActionRoute.prototype.optionKeys = ['member', 'collection', 'app', 'controller', 'action'];

    function ControllerActionRoute(templatePath, options) {
      this.callback = __bind(this.callback, this);

      var action, controller, _ref;
      if (options.signature) {
        _ref = options.signature.split('#'), controller = _ref[0], action = _ref[1];
        action || (action = 'index');
        options.controller = controller;
        options.action = action;
        delete options.signature;
      }
      ControllerActionRoute.__super__.constructor.call(this, templatePath, options);
    }

    ControllerActionRoute.prototype.callback = function(params) {
      var controller;
      controller = this.get("app.dispatcher.controllers." + (this.get('controller')));
      return controller.dispatch(this.get('action'), params);
    };

    return ControllerActionRoute;

  })(Batman.Route);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.CallbackActionRoute = (function(_super) {

    __extends(CallbackActionRoute, _super);

    function CallbackActionRoute() {
      return CallbackActionRoute.__super__.constructor.apply(this, arguments);
    }

    CallbackActionRoute.prototype.optionKeys = ['member', 'collection', 'callback', 'app'];

    CallbackActionRoute.prototype.controller = false;

    CallbackActionRoute.prototype.action = false;

    return CallbackActionRoute;

  })(Batman.Route);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.Hash = (function(_super) {
    var k, _fn, _i, _j, _len, _len1, _ref, _ref1, _this = this;

    __extends(Hash, _super);

    Hash.Metadata = (function(_super1) {

      __extends(Metadata, _super1);

      Batman.extend(Metadata.prototype, Batman.Enumerable);

      function Metadata(hash) {
        this.hash = hash;
      }

      Metadata.accessor('length', function() {
        this.hash.registerAsMutableSource();
        return this.hash.length;
      });

      Metadata.accessor('isEmpty', 'keys', 'toArray', function(key) {
        this.hash.registerAsMutableSource();
        return this.hash[key]();
      });

      Metadata.prototype.forEach = function() {
        var _ref;
        return (_ref = this.hash).forEach.apply(_ref, arguments);
      };

      return Metadata;

    })(Batman.Object);

    function Hash() {
      this.meta = new this.constructor.Metadata(this);
      Batman.SimpleHash.apply(this, arguments);
      Hash.__super__.constructor.apply(this, arguments);
    }

    Batman.extend(Hash.prototype, Batman.Enumerable);

    Hash.prototype.propertyClass = Batman.Property;

    Hash.defaultAccessor = {
      get: Batman.SimpleHash.prototype.get,
      set: Hash.mutation(function(key, value) {
        var result;
        result = Batman.SimpleHash.prototype.set.call(this, key, value);
        this.fire('itemsWereAdded', key);
        return result;
      }),
      unset: Hash.mutation(function(key) {
        var result;
        result = Batman.SimpleHash.prototype.unset.call(this, key);
        if (result != null) {
          this.fire('itemsWereRemoved', key);
        }
        return result;
      }),
      cache: false
    };

    Hash.accessor(Hash.defaultAccessor);

    Hash.prototype._preventMutationEvents = function(block) {
      this.prevent('change');
      this.prevent('itemsWereAdded');
      this.prevent('itemsWereRemoved');
      try {
        return block.call(this);
      } finally {
        this.allow('change');
        this.allow('itemsWereAdded');
        this.allow('itemsWereRemoved');
      }
    };

    Hash.prototype.clear = Hash.mutation(function() {
      var keys, result;
      keys = this.keys();
      this._preventMutationEvents(function() {
        var _this = this;
        return this.forEach(function(k) {
          return _this.unset(k);
        });
      });
      result = Batman.SimpleHash.prototype.clear.call(this);
      this.fire.apply(this, ['itemsWereRemoved'].concat(__slice.call(keys)));
      return result;
    });

    Hash.prototype.update = Hash.mutation(function(object) {
      var addedKeys;
      addedKeys = [];
      this._preventMutationEvents(function() {
        var _this = this;
        return Batman.forEach(object, function(k, v) {
          if (!_this.hasKey(k)) {
            addedKeys.push(k);
          }
          return _this.set(k, v);
        });
      });
      if (addedKeys.length > 0) {
        return this.fire.apply(this, ['itemsWereAdded'].concat(__slice.call(addedKeys)));
      }
    });

    Hash.prototype.replace = Hash.mutation(function(object) {
      var addedKeys, removedKeys;
      addedKeys = [];
      removedKeys = [];
      this._preventMutationEvents(function() {
        var _this = this;
        this.forEach(function(k, _) {
          if (!Batman.objectHasKey(object, k)) {
            _this.unset(k);
            return removedKeys.push(k);
          }
        });
        return Batman.forEach(object, function(k, v) {
          if (!_this.hasKey(k)) {
            addedKeys.push(k);
          }
          return _this.set(k, v);
        });
      });
      if (addedKeys.length > 0) {
        this.fire.apply(this, ['itemsWereAdded'].concat(__slice.call(addedKeys)));
      }
      if (removedKeys.length > 0) {
        return this.fire.apply(this, ['itemsWereRemoved'].concat(__slice.call(removedKeys)));
      }
    });

    _ref = ['equality', 'hashKeyFor', 'objectKey', 'prefixedKey', 'unprefixedKey'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      Hash.prototype[k] = Batman.SimpleHash.prototype[k];
    }

    _ref1 = ['hasKey', 'forEach', 'isEmpty', 'keys', 'toArray', 'merge', 'toJSON', 'toObject'];
    _fn = function(k) {
      return Hash.prototype[k] = function() {
        this.registerAsMutableSource();
        return Batman.SimpleHash.prototype[k].apply(this, arguments);
      };
    };
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      k = _ref1[_j];
      _fn(k);
    }

    return Hash;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.RenderCache = (function(_super) {

    __extends(RenderCache, _super);

    RenderCache.prototype.maximumLength = 4;

    function RenderCache() {
      RenderCache.__super__.constructor.apply(this, arguments);
      this.keyQueue = [];
    }

    RenderCache.prototype.viewForOptions = function(options) {
      var _this = this;
      if (options.cache === false || options.viewClass.prototype.cache === false) {
        return this._newViewFromOptions(options);
      }
      return this.getOrSet(options, function() {
        return _this._newViewFromOptions(Batman.extend({}, options));
      });
    };

    RenderCache.prototype._newViewFromOptions = function(options) {
      return new options.viewClass(options);
    };

    RenderCache.wrapAccessor(function(core) {
      return {
        cache: false,
        get: function(key) {
          var result;
          result = core.get.call(this, key);
          if (result) {
            this._addOrBubbleKey(key);
          }
          return result;
        },
        set: function(key, value) {
          var result;
          result = core.set.apply(this, arguments);
          result.set('cached', true);
          this._addOrBubbleKey(key);
          this._evictExpiredKeys();
          return result;
        },
        unset: function(key) {
          var result;
          result = core.unset.apply(this, arguments);
          result.set('cached', false);
          this._removeKeyFromQueue(key);
          return result;
        }
      };
    });

    RenderCache.prototype.equality = function(incomingOptions, storageOptions) {
      var key;
      if (Object.keys(incomingOptions).length !== Object.keys(storageOptions).length) {
        return false;
      }
      for (key in incomingOptions) {
        if (!(key === 'view')) {
          if (incomingOptions[key] !== storageOptions[key]) {
            return false;
          }
        }
      }
      return true;
    };

    RenderCache.prototype.reset = function() {
      var key, _i, _len, _ref, _results;
      _ref = this.keyQueue.slice(0);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        _results.push(this.unset(key));
      }
      return _results;
    };

    RenderCache.prototype._addOrBubbleKey = function(key) {
      this._removeKeyFromQueue(key);
      return this.keyQueue.unshift(key);
    };

    RenderCache.prototype._removeKeyFromQueue = function(key) {
      var index, queuedKey, _i, _len, _ref;
      _ref = this.keyQueue;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        queuedKey = _ref[index];
        if (this.equality(queuedKey, key)) {
          this.keyQueue.splice(index, 1);
          break;
        }
      }
      return key;
    };

    RenderCache.prototype._evictExpiredKeys = function() {
      var currentKeys, i, key, _i, _ref, _ref1;
      if (this.length > this.maximumLength) {
        currentKeys = this.keyQueue.slice(0);
        for (i = _i = _ref = this.maximumLength, _ref1 = currentKeys.length; _ref <= _ref1 ? _i < _ref1 : _i > _ref1; i = _ref <= _ref1 ? ++_i : --_i) {
          key = currentKeys[i];
          if (!this.get(key).isInDOM()) {
            this.unset(key);
          }
        }
      }
    };

    return RenderCache;

  })(Batman.Hash);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice,
    __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }
    return -1;
  };

  Batman.Controller = (function(_super) {
    var _optionsFromFilterArguments;

    __extends(Controller, _super);

    Controller.singleton('sharedController');

    Controller.wrapAccessor('routingKey', function(core) {
      return {
        get: function() {
          if (this.routingKey != null) {
            return this.routingKey;
          } else {
            if (Batman.config.minificationErrors) {
              Batman.developer.error("Please define `routingKey` on the prototype of " + (Batman.functionName(this.constructor)) + " in order for your controller to be minification safe.");
            }
            return Batman.functionName(this.constructor).replace(/Controller$/, '');
          }
        }
      };
    });

    Controller.accessor('_renderContext', function() {
      return Batman.RenderContext.root().descend(this);
    });

    _optionsFromFilterArguments = function(options, nameOrFunction) {
      if (!nameOrFunction) {
        nameOrFunction = options;
        options = {};
      } else {
        if (typeof options === 'string') {
          options = {
            only: [options]
          };
        } else {
          if (options.only && Batman.typeOf(options.only) !== 'Array') {
            options.only = [options.only];
          }
          if (options.except && Batman.typeOf(options.except) !== 'Array') {
            options.except = [options.except];
          }
        }
      }
      options.block = nameOrFunction;
      return options;
    };

    Controller.beforeFilter = function() {
      var filters, options, _base;
      Batman.initializeObject(this);
      options = _optionsFromFilterArguments.apply(null, arguments);
      filters = (_base = this._batman).beforeFilters || (_base.beforeFilters = []);
      return filters.push(options);
    };

    Controller.afterFilter = function() {
      var filters, options, _base;
      Batman.initializeObject(this);
      options = _optionsFromFilterArguments.apply(null, arguments);
      filters = (_base = this._batman).afterFilters || (_base.afterFilters = []);
      return filters.push(options);
    };

    Controller.afterFilter(function(params) {
      if (this.autoScrollToHash && (params['#'] != null)) {
        return this.scrollToHash(params['#']);
      }
    });

    Controller.catchError = function() {
      var currentHandlers, error, errors, handlers, options, _base, _i, _j, _len, _results;
      errors = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      Batman.initializeObject(this);
      (_base = this._batman).errorHandlers || (_base.errorHandlers = new Batman.SimpleHash);
      handlers = Batman.typeOf(options["with"]) === 'Array' ? options["with"] : [options["with"]];
      _results = [];
      for (_j = 0, _len = errors.length; _j < _len; _j++) {
        error = errors[_j];
        currentHandlers = this._batman.errorHandlers.get(error) || [];
        _results.push(this._batman.errorHandlers.set(error, currentHandlers.concat(handlers)));
      }
      return _results;
    };

    Controller.prototype.errorHandler = function(callback) {
      var errorFrame, _ref, _this = this;
      errorFrame = (_ref = this._actionFrames) != null ? _ref[this._actionFrames.length - 1] : void 0;
      return function(err, result, env) {
        if (err) {
          if (errorFrame != null ? errorFrame.error : void 0) {
            return;
          }
          if (errorFrame != null) {
            errorFrame.error = err;
          }
          if (!_this.handleError(err)) {
            throw err;
          }
        } else {
          return typeof callback === "function" ? callback(result, env) : void 0;
        }
      };
    };

    Controller.prototype.handleError = function(error) {
      var handled, _ref, _this = this;
      handled = false;
      if ((_ref = this.constructor._batman.getAll('errorHandlers')) != null) {
        _ref.forEach(function(hash) {
          return hash.forEach(function(key, value) {
            var handler, _i, _len, _results;
            if (error instanceof key) {
              handled = true;
              _results = [];
              for (_i = 0, _len = value.length; _i < _len; _i++) {
                handler = value[_i];
                _results.push(handler.call(_this, error));
              }
              return _results;
            }
          });
        });
      }
      return handled;
    };

    function Controller() {
      this.redirect = __bind(this.redirect, this);

      this.handleError = __bind(this.handleError, this);

      this.errorHandler = __bind(this.errorHandler, this);
      Controller.__super__.constructor.apply(this, arguments);
      this._resetActionFrames();
    }

    Controller.prototype.renderCache = new Batman.RenderCache;

    Controller.prototype.defaultRenderYield = 'main';

    Controller.prototype.autoScrollToHash = true;

    Controller.prototype.dispatch = function(action, params) {
      var redirectTo;
      if (params == null) {
        params = {};
      }
      params.controller || (params.controller = this.get('routingKey'));
      params.action || (params.action = action);
      params.target || (params.target = this);
      this._resetActionFrames();
      this.set('action', action);
      this.set('params', params);
      Batman.DOM.Yield.cycleAll();
      this.executeAction(action, params);
      Batman.DOM.Yield.clearAllStale();
      redirectTo = this._afterFilterRedirect;
      delete this._afterFilterRedirect;
      if (redirectTo) {
        return Batman.redirect(redirectTo);
      }
    };

    Controller.prototype.executeAction = function(action, params) {
      var frame, oldRedirect, parentFrame, result, _ref, _ref1, _this = this;
      if (params == null) {
        params = this.get('params');
      }
      Batman.developer.assert(this[action], "Error! Controller action " + (this.get('routingKey')) + "." + action + " couldn't be found!");
      parentFrame = this._actionFrames[this._actionFrames.length - 1];
      frame = new Batman.ControllerActionFrame({
        parentFrame: parentFrame,
        action: action
      }, function() {
        var _ref;
        if (!_this._afterFilterRedirect) {
          _this._runFilters(action, params, 'afterFilters');
        }
        _this._resetActionFrames();
        return (_ref = Batman.navigator) != null ? _ref.redirect = oldRedirect : void 0;
      });
      this._actionFrames.push(frame);
      frame.startOperation({
        internal: true
      });
      oldRedirect = (_ref = Batman.navigator) != null ? _ref.redirect : void 0;
      if ((_ref1 = Batman.navigator) != null) {
        _ref1.redirect = this.redirect;
      }
      this._runFilters(action, params, 'beforeFilters');
      if (!this._afterFilterRedirect) {
        result = this[action](params);
      }
      if (!frame.operationOccurred) {
        this.render();
      }
      frame.finishOperation();
      return result;
    };

    Controller.prototype.redirect = function(url) {
      var frame;
      frame = this._actionFrames[this._actionFrames.length - 1];
      if (frame) {
        if (frame.operationOccurred) {
          Batman.developer.warn("Warning! Trying to redirect but an action has already been taken during " + (this.get('routingKey')) + "." + (frame.action || this.get('action')));
        }
        frame.startAndFinishOperation();
        if (this._afterFilterRedirect != null) {
          return Batman.developer.warn("Warning! Multiple actions trying to redirect!");
        } else {
          return this._afterFilterRedirect = url;
        }
      } else {
        if (Batman.typeOf(url) === 'Object') {
          if (!url.controller) {
            url.controller = this;
          }
        }
        return Batman.redirect(url);
      }
    };

    Controller.prototype.render = function(options) {
      var action, frame, view, _ref, _ref1, _this = this;
      if (options == null) {
        options = {};
      }
      if (frame = (_ref = this._actionFrames) != null ? _ref[this._actionFrames.length - 1] : void 0) {
        frame.startOperation();
      }
      if (options === false) {
        frame.finishOperation();
        return;
      }
      action = (frame != null ? frame.action : void 0) || this.get('action');
      if (options) {
        options.into || (options.into = this.defaultRenderYield);
      }
      if (!options.view) {
        options.viewClass || (options.viewClass = this._viewClassForAction(action));
        options.context || (options.context = this.get('_renderContext'));
        options.source || (options.source = Batman.helpers.underscore(this.get('routingKey') + '/' + action));
        view = this.renderCache.viewForOptions(options);
      } else {
        view = options.view;
        options.view = null;
      }
      if (view) {
        if ((_ref1 = Batman.currentApp) != null) {
          _ref1.prevent('ready');
        }
        view.once('ready', function() {
          var _ref2;
          Batman.DOM.Yield.withName(options.into).replace(view.get('node'));
          if ((_ref2 = Batman.currentApp) != null) {
            _ref2.allowAndFire('ready');
          }
          return frame != null ? frame.finishOperation() : void 0;
        });
      }
      return view;
    };

    Controller.prototype.scrollToHash = function(hash) {
      if (hash == null) {
        hash = this.get('params')['#'];
      }
      return Batman.DOM.scrollIntoView(hash);
    };

    Controller.prototype._resetActionFrames = function() {
      return this._actionFrames = [];
    };

    Controller.prototype._viewClassForAction = function(action) {
      var classPrefix, _ref;
      classPrefix = this.get('routingKey').replace('/', '_');
      return ((_ref = Batman.currentApp) != null ? _ref[Batman.helpers.camelize("" + classPrefix + "_" + action + "_view")] : void 0) || Batman.View;
    };

    Controller.prototype._runFilters = function(action, params, filters) {
      var block, options, _i, _len, _ref;
      if (filters = (_ref = this.constructor._batman) != null ? _ref.get(filters) : void 0) {
        for (_i = 0, _len = filters.length; _i < _len; _i++) {
          options = filters[_i];
          if (options.only && __indexOf.call(options.only, action) < 0) {
            continue;
          }
          if (options.except && __indexOf.call(options.except, action) >= 0) {
            continue;
          }
          if (this._afterFilterRedirect) {
            return;
          }
          block = options.block;
          if (typeof block === 'function') {
            block.call(this, params);
          } else {
            if (typeof this[block] === "function") {
              this[block](params);
            }
          }
        }
      }
    };

    return Controller;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Set = (function(_super) {
    var k, _fn, _i, _j, _len, _len1, _ref, _ref1, _this = this;

    __extends(Set, _super);

    function Set() {
      Batman.SimpleSet.apply(this, arguments);
    }

    Batman.extend(Set.prototype, Batman.Enumerable);

    Set._applySetAccessors = function(klass) {
      var accessor, accessors, key, _results;
      accessors = {
        first: function() {
          return this.toArray()[0];
        },
        last: function() {
          return this.toArray()[this.length - 1];
        },
        isEmpty: function() {
          return this.isEmpty();
        },
        toArray: function() {
          return this.toArray();
        },
        length: function() {
          this.registerAsMutableSource();
          return this.length;
        },
        indexedBy: function() {
          var _this = this;
          return new Batman.TerminalAccessible(function(key) {
            return _this.indexedBy(key);
          });
        },
        indexedByUnique: function() {
          var _this = this;
          return new Batman.TerminalAccessible(function(key) {
            return _this.indexedByUnique(key);
          });
        },
        sortedBy: function() {
          var _this = this;
          return new Batman.TerminalAccessible(function(key) {
            return _this.sortedBy(key);
          });
        },
        sortedByDescending: function() {
          var _this = this;
          return new Batman.TerminalAccessible(function(key) {
            return _this.sortedBy(key, 'desc');
          });
        }
      };
      _results = [];
      for (key in accessors) {
        accessor = accessors[key];
        _results.push(klass.accessor(key, accessor));
      }
      return _results;
    };

    Set._applySetAccessors(Set);

    _ref = ['add', 'remove', 'clear', 'replace', 'indexedBy', 'indexedByUnique', 'sortedBy', 'equality', '_indexOfItem'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      Set.prototype[k] = Batman.SimpleSet.prototype[k];
    }

    _ref1 = ['find', 'merge', 'forEach', 'toArray', 'isEmpty', 'has'];
    _fn = function(k) {
      return Set.prototype[k] = function() {
        this.registerAsMutableSource();
        return Batman.SimpleSet.prototype[k].apply(this, arguments);
      };
    };
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      k = _ref1[_j];
      _fn(k);
    }

    Set.prototype.toJSON = Set.prototype.toArray;

    return Set;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ErrorsSet = (function(_super) {

    __extends(ErrorsSet, _super);

    function ErrorsSet() {
      return ErrorsSet.__super__.constructor.apply(this, arguments);
    }

    ErrorsSet.accessor(function(key) {
      return this.indexedBy('attribute').get(key);
    });

    ErrorsSet.prototype.add = function(key, error) {
      return ErrorsSet.__super__.add.call(this, new Batman.ValidationError(key, error));
    };

    return ErrorsSet;

  })(Batman.Set);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetProxy = (function(_super) {
    var k, _fn, _i, _len, _ref, _this = this;

    __extends(SetProxy, _super);

    function SetProxy(base) {
      var _this = this;
      this.base = base;
      SetProxy.__super__.constructor.call(this);
      this.length = this.base.length;
      this.base.on('itemsWereAdded', function() {
        var items;
        items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        _this.set('length', _this.base.length);
        return _this.fire.apply(_this, ['itemsWereAdded'].concat(__slice.call(items)));
      });
      this.base.on('itemsWereRemoved', function() {
        var items;
        items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        _this.set('length', _this.base.length);
        return _this.fire.apply(_this, ['itemsWereRemoved'].concat(__slice.call(items)));
      });
    }

    Batman.extend(SetProxy.prototype, Batman.Enumerable);

    SetProxy.prototype.filter = function(f) {
      return this.reduce(function(accumulator, element) {
        if (f(element)) {
          accumulator.add(element);
        }
        return accumulator;
      }, new Batman.Set());
    };

    SetProxy.prototype.replace = function() {
      var length, result;
      length = this.property('length');
      length.isolate();
      result = this.base.replace.apply(this, arguments);
      length.expose();
      return result;
    };

    Batman.Set._applySetAccessors(SetProxy);

    _ref = ['add', 'remove', 'find', 'clear', 'has', 'merge', 'toArray', 'isEmpty', 'indexedBy', 'indexedByUnique', 'sortedBy'];
    _fn = function(k) {
      return SetProxy.prototype[k] = function() {
        var _ref1;
        return (_ref1 = this.base)[k].apply(_ref1, arguments);
      };
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      _fn(k);
    }

    SetProxy.accessor('length', {
      get: function() {
        this.registerAsMutableSource();
        return this.length;
      },
      set: function(_, v) {
        return this.length = v;
      }
    });

    return SetProxy;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.BinarySetOperation = (function(_super) {

    __extends(BinarySetOperation, _super);

    function BinarySetOperation(left, right) {
      this.left = left;
      this.right = right;
      this._setup = __bind(this._setup, this);

      BinarySetOperation.__super__.constructor.call(this);
      this._setup(this.left, this.right);
      this._setup(this.right, this.left);
    }

    BinarySetOperation.prototype._setup = function(set, opposite) {
      var _this = this;
      set.on('itemsWereAdded', function() {
        var items;
        items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return _this._itemsWereAddedToSource.apply(_this, [set, opposite].concat(__slice.call(items)));
      });
      set.on('itemsWereRemoved', function() {
        var items;
        items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return _this._itemsWereRemovedFromSource.apply(_this, [set, opposite].concat(__slice.call(items)));
      });
      return this._itemsWereAddedToSource.apply(this, [set, opposite].concat(__slice.call(set.toArray())));
    };

    BinarySetOperation.prototype.merge = function() {
      var merged, others, set, _i, _len;
      others = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      merged = new Batman.Set;
      others.unshift(this);
      for (_i = 0, _len = others.length; _i < _len; _i++) {
        set = others[_i];
        set.forEach(function(v) {
          return merged.add(v);
        });
      }
      return merged;
    };

    BinarySetOperation.prototype.filter = Batman.SetProxy.prototype.filter;

    return BinarySetOperation;

  })(Batman.Set);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetUnion = (function(_super) {

    __extends(SetUnion, _super);

    function SetUnion() {
      return SetUnion.__super__.constructor.apply(this, arguments);
    }

    SetUnion.prototype._itemsWereAddedToSource = function() {
      var items, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      return this.add.apply(this, items);
    };

    SetUnion.prototype._itemsWereRemovedFromSource = function() {
      var item, items, itemsToRemove, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      itemsToRemove = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (!opposite.has(item)) {
            _results.push(item);
          }
        }
        return _results;
      })();
      return this.remove.apply(this, itemsToRemove);
    };

    return SetUnion;

  })(Batman.BinarySetOperation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetIntersection = (function(_super) {

    __extends(SetIntersection, _super);

    function SetIntersection() {
      return SetIntersection.__super__.constructor.apply(this, arguments);
    }

    SetIntersection.prototype._itemsWereAddedToSource = function() {
      var item, items, itemsToAdd, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      itemsToAdd = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (opposite.has(item)) {
            _results.push(item);
          }
        }
        return _results;
      })();
      if (itemsToAdd.length > 0) {
        return this.add.apply(this, itemsToAdd);
      }
    };

    SetIntersection.prototype._itemsWereRemovedFromSource = function() {
      var items, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      return this.remove.apply(this, items);
    };

    return SetIntersection;

  })(Batman.BinarySetOperation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetComplement = (function(_super) {

    __extends(SetComplement, _super);

    function SetComplement() {
      return SetComplement.__super__.constructor.apply(this, arguments);
    }

    SetComplement.prototype._itemsWereAddedToSource = function() {
      var item, items, itemsToAdd, itemsToRemove, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (source === this.left) {
        itemsToAdd = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            if (!opposite.has(item)) {
              _results.push(item);
            }
          }
          return _results;
        })();
        if (itemsToAdd.length > 0) {
          return this.add.apply(this, itemsToAdd);
        }
      } else {
        itemsToRemove = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            if (opposite.has(item)) {
              _results.push(item);
            }
          }
          return _results;
        })();
        if (itemsToRemove.length > 0) {
          return this.remove.apply(this, itemsToRemove);
        }
      }
    };

    SetComplement.prototype._itemsWereRemovedFromSource = function() {
      var item, items, itemsToAdd, opposite, source;
      source = arguments[0], opposite = arguments[1], items = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (source === this.left) {
        return this.remove.apply(this, items);
      } else {
        itemsToAdd = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            if (opposite.has(item)) {
              _results.push(item);
            }
          }
          return _results;
        })();
        if (itemsToAdd.length > 0) {
          return this.add.apply(this, itemsToAdd);
        }
      }
    };

    SetComplement.prototype._addComplement = function(items, opposite) {
      var item, itemsToAdd;
      itemsToAdd = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (opposite.has(item)) {
            _results.push(item);
          }
        }
        return _results;
      })();
      if (itemsToAdd.length > 0) {
        return this.add.apply(this, itemsToAdd);
      }
    };

    return SetComplement;

  })(Batman.BinarySetOperation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.StateMachine = (function(_super) {

    __extends(StateMachine, _super);

    StateMachine.InvalidTransitionError = function(message) {
      this.message = message != null ? message : "";
    };

    StateMachine.InvalidTransitionError.prototype = new Error;

    StateMachine.transitions = function(table) {
      var definePredicate, fromState, k, object, predicateKeys, toState, transitions, v, _fn, _ref, _this = this;
      for (k in table) {
        v = table[k];
        if (!(v.from && v.to)) {
          continue;
        }
        object = {};
        if (v.from.forEach) {
          v.from.forEach(function(fromKey) {
            return object[fromKey] = v.to;
          });
        } else {
          object[v.from] = v.to;
        }
        table[k] = object;
      }
      this.prototype.transitionTable = Batman.extend({}, this.prototype.transitionTable, table);
      predicateKeys = [];
      definePredicate = function(state) {
        var key;
        key = "is" + (Batman.helpers.capitalize(state));
        if (_this.prototype[key] != null) {
          return;
        }
        predicateKeys.push(key);
        return _this.prototype[key] = function() {
          return this.get('state') === state;
        };
      };
      _ref = this.prototype.transitionTable;
      _fn = function(k) {
        return _this.prototype[k] = function() {
          return this.startTransition(k);
        };
      };
      for (k in _ref) {
        transitions = _ref[k];
        if (!(!this.prototype[k])) {
          continue;
        }
        _fn(k);
        for (fromState in transitions) {
          toState = transitions[fromState];
          definePredicate(fromState);
          definePredicate(toState);
        }
      }
      if (predicateKeys.length) {
        this.accessor.apply(this, __slice.call(predicateKeys).concat([function(key) {
          return this[key]();
        }]));
      }
      return this;
    };

    function StateMachine(startState) {
      this.nextEvents = [];
      this.set('_state', startState);
    }

    StateMachine.accessor('state', function() {
      return this.get('_state');
    });

    StateMachine.prototype.isTransitioning = false;

    StateMachine.prototype.transitionTable = {};

    StateMachine.prototype.onTransition = function(from, into, callback) {
      return this.on("" + from + "->" + into, callback);
    };

    StateMachine.prototype.onEnter = function(into, callback) {
      return this.on("enter " + into, callback);
    };

    StateMachine.prototype.onExit = function(from, callback) {
      return this.on("exit " + from, callback);
    };

    StateMachine.prototype.startTransition = Batman.Property.wrapTrackingPrevention(function(event) {
      var nextState, previousState;
      if (this.isTransitioning) {
        this.nextEvents.push(event);
        return;
      }
      previousState = this.get('state');
      nextState = this.nextStateForEvent(event);
      if (!nextState) {
        return false;
      }
      this.isTransitioning = true;
      this.fire("exit " + previousState);
      this.set('_state', nextState);
      this.fire("" + previousState + "->" + nextState);
      this.fire("enter " + nextState);
      this.fire(event);
      this.isTransitioning = false;
      if (this.nextEvents.length > 0) {
        this.startTransition(this.nextEvents.shift());
      }
      return true;
    });

    StateMachine.prototype.canStartTransition = function(event, fromState) {
      if (fromState == null) {
        fromState = this.get('state');
      }
      return !!this.nextStateForEvent(event, fromState);
    };

    StateMachine.prototype.nextStateForEvent = function(event, fromState) {
      var _ref;
      if (fromState == null) {
        fromState = this.get('state');
      }
      return (_ref = this.transitionTable[event]) != null ? _ref[fromState] : void 0;
    };

    return StateMachine;

  })(Batman.Object);

  Batman.DelegatingStateMachine = (function(_super) {

    __extends(DelegatingStateMachine, _super);

    function DelegatingStateMachine(startState, base) {
      this.base = base;
      DelegatingStateMachine.__super__.constructor.call(this, startState);
    }

    DelegatingStateMachine.prototype.fire = function() {
      var result, _ref;
      result = DelegatingStateMachine.__super__.fire.apply(this, arguments);
      (_ref = this.base).fire.apply(_ref, arguments);
      return result;
    };

    return DelegatingStateMachine;

  })(Batman.StateMachine);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.Model = (function(_super) {
    var functionName, _i, _j, _len, _len1, _ref, _ref1;

    __extends(Model, _super);

    Model.storageKey = null;

    Model.primaryKey = 'id';

    Model.persist = function() {
      var mechanism, options;
      mechanism = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      Batman.initializeObject(this.prototype);
      mechanism = mechanism.isStorageAdapter ? mechanism : new mechanism(this);
      if (options.length > 0) {
        Batman.mixin.apply(Batman, [mechanism].concat(__slice.call(options)));
      }
      this.prototype._batman.storage = mechanism;
      return mechanism;
    };

    Model.storageAdapter = function() {
      Batman.initializeObject(this.prototype);
      return this.prototype._batman.storage;
    };

    Model.encode = function() {
      var encoder, encoderForKey, encoderOrLastKey, key, keys, _base, _i, _j, _len;
      keys = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), encoderOrLastKey = arguments[_i++];
      Batman.initializeObject(this.prototype);
      (_base = this.prototype._batman).encoders || (_base.encoders = new Batman.SimpleHash);
      encoder = {};
      switch (Batman.typeOf(encoderOrLastKey)) {
      case 'String':
        keys.push(encoderOrLastKey);
        break;
      case 'Function':
        encoder.encode = encoderOrLastKey;
        break;
      default:
        encoder = encoderOrLastKey;
      }
      for (_j = 0, _len = keys.length; _j < _len; _j++) {
        key = keys[_j];
        encoderForKey = Batman.extend({
          as: key
        }, this.defaultEncoder, encoder);
        this.prototype._batman.encoders.set(key, encoderForKey);
      }
    };

    Model.defaultEncoder = {
      encode: function(x) {
        return x;
      },
      decode: function(x) {
        return x;
      }
    };

    Model.observeAndFire('primaryKey', function(newPrimaryKey, oldPrimaryKey) {
      this.encode(oldPrimaryKey, {
        encode: false,
        decode: false
      });
      return this.encode(newPrimaryKey, {
        encode: false,
        decode: this.defaultEncoder.decode
      });
    });

    Model.validate = function() {
      var keys, matches, optionsOrFunction, validatorClass, validators, _base, _i, _j, _len, _ref, _results;
      keys = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), optionsOrFunction = arguments[_i++];
      Batman.initializeObject(this.prototype);
      validators = (_base = this.prototype._batman).validators || (_base.validators = []);
      if (typeof optionsOrFunction === 'function') {
        return validators.push({
          keys: keys,
          callback: optionsOrFunction
        });
      } else {
        _ref = Batman.Validators;
        _results = [];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
          validatorClass = _ref[_j];
          if ((matches = validatorClass.matches(optionsOrFunction))) {
            _results.push(validators.push({
              keys: keys,
              validator: new validatorClass(matches)
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    Model.classAccessor('resourceName', {
      get: function() {
        if (this.resourceName != null) {
          return this.resourceName;
        } else {
          if (Batman.config.minificationErrors) {
            Batman.developer.error("Please define " + (Batman.functionName(this)) + ".resourceName in order for your model to be minification safe.");
          }
          return Batman.helpers.underscore(Batman.functionName(this));
        }
      }
    });

    Model.classAccessor('all', {
      get: function() {
        this._batman.check(this);
        if (this.prototype.hasStorage() && !this._batman.allLoadTriggered) {
          this.load();
          this._batman.allLoadTriggered = true;
        }
        return this.get('loaded');
      },
      set: function(k, v) {
        return this.set('loaded', v);
      }
    });

    Model.classAccessor('loaded', {
      get: function() {
        return this._loaded || (this._loaded = new Batman.Set);
      },
      set: function(k, v) {
        return this._loaded = v;
      }
    });

    Model.classAccessor('first', function() {
      return this.get('all').toArray()[0];
    });

    Model.classAccessor('last', function() {
      var x;
      x = this.get('all').toArray();
      return x[x.length - 1];
    });

    Model.clear = function() {
      var result, _ref;
      Batman.initializeObject(this);
      result = this.get('loaded').clear();
      if ((_ref = this._batman.get('associations')) != null) {
        _ref.reset();
      }
      this._resetPromises();
      return result;
    };

    Model.find = function(id, callback) {
      return this.findWithOptions(id, void 0, callback);
    };

    Model.findWithOptions = function(id, options, callback) {
      var record;
      if (options == null) {
        options = {};
      }
      Batman.developer.assert(callback, "Must call find with a callback!");
      record = new this();
      record._withoutDirtyTracking(function() {
        return this.set('id', id);
      });
      record.loadWithOptions(options, callback);
      return record;
    };

    Model.load = function(options, callback) {
      var _ref;
      if ((_ref = typeof options) === 'function' || _ref === 'undefined') {
        callback = options;
        options = {};
      } else {
        options = {
          data: options
        };
      }
      return this.loadWithOptions(options, callback);
    };

    Model.loadWithOptions = function(options, callback) {
      var _this = this;
      this.fire('loading', options);
      return this._doStorageOperation('readAll', options, function(err, records, env) {
        var mappedRecords;
        if (err != null) {
          _this.fire('error', err);
          return typeof callback === "function" ? callback(err, []) : void 0;
        } else {
          mappedRecords = _this._mapIdentities(records);
          _this.fire('loaded', mappedRecords, env);
          return typeof callback === "function" ? callback(err, mappedRecords, env) : void 0;
        }
      });
    };

    Model.create = function(attrs, callback) {
      var obj, _ref;
      if (!callback) {
        _ref = [{},
        attrs], attrs = _ref[0], callback = _ref[1];
      }
      obj = new this(attrs);
      obj.save(callback);
      return obj;
    };

    Model.findOrCreate = function(attrs, callback) {
      var foundRecord, record;
      record = new this(attrs);
      if (record.isNew()) {
        record.save(callback);
      } else {
        foundRecord = this._mapIdentity(record);
        callback(void 0, foundRecord);
      }
      return record;
    };

    Model.createFromJSON = function(json) {
      var record;
      record = new this;
      record._withoutDirtyTracking(function() {
        return this.fromJSON(json);
      });
      return this._mapIdentity(record);
    };

    Model._mapIdentity = function(record) {
      return this._mapIdentities([record])[0];
    };

    Model._mapIdentities = function(records) {
      var existing, id, index, newRecords, record, _i, _len, _ref, _ref1;
      newRecords = [];
      for (index = _i = 0, _len = records.length; _i < _len; index = ++_i) {
        record = records[index];
        if (!((id = record.get('id')) != null)) {
          continue;
        } else if (existing = (_ref = this.get('loaded.indexedBy.id').get(id)) != null ? _ref.toArray()[0] : void 0) {
          existing._withoutDirtyTracking(function() {
            var _ref1;
            return this.updateAttributes(((_ref1 = record.get('attributes')) != null ? _ref1.toObject() : void 0) || {});
          });
          records[index] = existing;
        } else {
          newRecords.push(record);
        }
      }
      if (newRecords.length) {
        (_ref1 = this.get('loaded')).add.apply(_ref1, newRecords);
      }
      return records;
    };

    Model._doStorageOperation = function(operation, options, callback) {
      var adapter;
      Batman.developer.assert(this.prototype.hasStorage(), "Can't " + operation + " model " + (Batman.functionName(this.constructor)) + " without any storage adapters!");
      adapter = this.prototype._batman.get('storage');
      return adapter.perform(operation, this, options, callback);
    };

    _ref = ['find', 'load', 'create'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      functionName = _ref[_i];
      Model[functionName] = Batman.Property.wrapTrackingPrevention(Model[functionName]);
    }

    Model.InstanceLifecycleStateMachine = (function(_super1) {

      __extends(InstanceLifecycleStateMachine, _super1);

      function InstanceLifecycleStateMachine() {
        return InstanceLifecycleStateMachine.__super__.constructor.apply(this, arguments);
      }

      InstanceLifecycleStateMachine.transitions({
        load: {
          from: ['dirty', 'clean'],
          to: 'loading'
        },
        create: {
          from: ['dirty', 'clean'],
          to: 'creating'
        },
        save: {
          from: ['dirty', 'clean'],
          to: 'saving'
        },
        destroy: {
          from: ['dirty', 'clean'],
          to: 'destroying'
        },
        failedValidation: {
          from: ['saving', 'creating'],
          to: 'dirty'
        },
        loaded: {
          loading: 'clean'
        },
        created: {
          creating: 'clean'
        },
        saved: {
          saving: 'clean'
        },
        destroyed: {
          destroying: 'destroyed'
        },
        set: {
          from: ['dirty', 'clean'],
          to: 'dirty'
        },
        error: {
          from: ['saving', 'creating', 'loading', 'destroying'],
          to: 'error'
        }
      });

      return InstanceLifecycleStateMachine;

    })(Batman.DelegatingStateMachine);

    function Model(idOrAttributes) {
      if (idOrAttributes == null) {
        idOrAttributes = {};
      }
      Batman.developer.assert(this instanceof Batman.Object, "constructors must be called with new");
      if (Batman.typeOf(idOrAttributes) === 'Object') {
        Model.__super__.constructor.call(this, idOrAttributes);
      } else {
        Model.__super__.constructor.call(this);
        this.set('id', idOrAttributes);
      }
    }

    Model.accessor('lifecycle', function() {
      return this.lifecycle || (this.lifecycle = new Batman.Model.InstanceLifecycleStateMachine('clean', this));
    });

    Model.accessor('attributes', function() {
      return this.attributes || (this.attributes = new Batman.Hash);
    });

    Model.accessor('dirtyKeys', function() {
      return this.dirtyKeys || (this.dirtyKeys = new Batman.Hash);
    });

    Model.accessor('_dirtiedKeys', function() {
      return this._dirtiedKeys || (this._dirtiedKeys = new Batman.SimpleSet);
    });

    Model.accessor('errors', function() {
      return this.errors || (this.errors = new Batman.ErrorsSet);
    });

    Model.accessor('isNew', function() {
      return this.isNew();
    });

    Model.accessor('isDirty', function() {
      return this.isDirty();
    });

    Model.accessor(Model.defaultAccessor = {
      get: function(k) {
        return Batman.getPath(this, ['attributes', k]);
      },
      set: function(k, v) {
        if (this._willSet(k)) {
          return this.get('attributes').set(k, v);
        } else {
          return this.get(k);
        }
      },
      unset: function(k) {
        return this.get('attributes').unset(k);
      }
    });

    Model.wrapAccessor('id', function(core) {
      return {
        get: function() {
          var primaryKey;
          primaryKey = this.constructor.primaryKey;
          if (primaryKey === 'id') {
            return core.get.apply(this, arguments);
          } else {
            return this.get(primaryKey);
          }
        },
        set: function(key, value) {
          var parsedValue, primaryKey;
          if ((typeof value === "string") && (value.match(/[^0-9]/) === null) && (("" + (parsedValue = parseInt(value, 10))) === value)) {
            value = parsedValue;
          }
          primaryKey = this.constructor.primaryKey;
          if (primaryKey === 'id') {
            this._willSet(key);
            return core.set.apply(this, arguments);
          } else {
            return this.set(primaryKey, value);
          }
        }
      };
    });

    Model.prototype.isNew = function() {
      return typeof this.get('id') === 'undefined';
    };

    Model.prototype.isDirty = function() {
      return this.get('lifecycle.state') === 'dirty';
    };

    Model.prototype.updateAttributes = function(attrs) {
      this.mixin(attrs);
      return this;
    };

    Model.prototype.toString = function() {
      return "" + (this.constructor.get('resourceName')) + ": " + (this.get('id'));
    };

    Model.prototype.toParam = function() {
      return this.get('id');
    };

    Model.prototype.toJSON = function() {
      var encoders, obj, _this = this;
      obj = {};
      encoders = this._batman.get('encoders');
      if (!(!encoders || encoders.isEmpty())) {
        encoders.forEach(function(key, encoder) {
          var encodedVal, val;
          if (encoder.encode) {
            val = _this.get(key);
            if (typeof val !== 'undefined') {
              encodedVal = encoder.encode(val, key, obj, _this);
              if (typeof encodedVal !== 'undefined') {
                return obj[encoder.as] = encodedVal;
              }
            }
          }
        });
      }
      return obj;
    };

    Model.prototype.fromJSON = function(data) {
      var encoders, key, obj, value, _this = this;
      obj = {};
      encoders = this._batman.get('encoders');
      if (!encoders || encoders.isEmpty() || !encoders.some(function(key, encoder) {
        return encoder.decode != null;
      })) {
        for (key in data) {
          value = data[key];
          obj[key] = value;
        }
      } else {
        encoders.forEach(function(key, encoder) {
          if (encoder.decode && typeof data[encoder.as] !== 'undefined') {
            return obj[key] = encoder.decode(data[encoder.as], encoder.as, data, obj, _this);
          }
        });
      }
      if (this.constructor.primaryKey !== 'id') {
        obj.id = data[this.constructor.primaryKey];
      }
      Batman.developer["do"](function() {
        if ((!encoders) || encoders.length <= 1) {
          return Batman.developer.warn("Warning: Model " + (Batman.functionName(_this.constructor)) + " has suspiciously few decoders!");
        }
      });
      return this.mixin(obj);
    };

    Model.prototype.hasStorage = function() {
      return this._batman.get('storage') != null;
    };

    Model.prototype.load = function(options, callback) {
      var _ref1;
      if (!callback) {
        _ref1 = [{},
        options], options = _ref1[0], callback = _ref1[1];
      } else {
        options = {
          data: options
        };
      }
      return this.loadWithOptions(options, callback);
    };

    Model.prototype.loadWithOptions = function(options, callback) {
      var callbackQueue, hasOptions, _ref1, _this = this;
      hasOptions = Object.keys(options).length !== 0;
      if ((_ref1 = this.get('lifecycle.state')) === 'destroying' || _ref1 === 'destroyed') {
        if (typeof callback === "function") {
          callback(new Error("Can't load a destroyed record!"));
        }
        return;
      }
      if (this.get('lifecycle').load()) {
        callbackQueue = [];
        if (callback != null) {
          callbackQueue.push(callback);
        }
        if (!hasOptions) {
          this._currentLoad = callbackQueue;
        }
        return this._doStorageOperation('read', options, function(err, record, env) {
          var _j, _len1;
          if (!err) {
            _this.get('lifecycle').loaded();
            record = _this.constructor._mapIdentity(record);
          } else {
            _this.get('lifecycle').error();
          }
          if (!hasOptions) {
            _this._currentLoad = null;
          }
          for (_j = 0, _len1 = callbackQueue.length; _j < _len1; _j++) {
            callback = callbackQueue[_j];
            callback(err, record, env);
          }
        });
      } else {
        if (this.get('lifecycle.state') === 'loading' && !hasOptions) {
          if (callback != null) {
            return this._currentLoad.push(callback);
          }
        } else {
          return typeof callback === "function" ? callback(new Batman.StateMachine.InvalidTransitionError("Can't load while in state " + (this.get('lifecycle.state')))) : void 0;
        }
      }
    };

    Model.prototype.save = function(options, callback) {
      var endState, isNew, startState, storageOperation, _ref1, _ref2, _this = this;
      if (!callback) {
        _ref1 = [{},
        options], options = _ref1[0], callback = _ref1[1];
      }
      isNew = this.isNew();
      _ref2 = isNew ? ['create', 'create', 'created'] : ['save', 'update', 'saved'], startState = _ref2[0], storageOperation = _ref2[1], endState = _ref2[2];
      if (this.get('lifecycle').startTransition(startState)) {
        return this.validate(function(error, errors) {
          var associations;
          if (error || errors.length) {
            _this.get('lifecycle').failedValidation();
            return typeof callback === "function" ? callback(error || errors, _this) : void 0;
          }
          associations = _this.constructor._batman.get('associations');
          _this._withoutDirtyTracking(function() {
            var _ref3, _this = this;
            return associations != null ? (_ref3 = associations.getByType('belongsTo')) != null ? _ref3.forEach(function(association, label) {
              return association.apply(_this);
            }) : void 0 : void 0;
          });
          return _this._doStorageOperation(storageOperation, {
            data: options
          }, function(err, record, env) {
            if (!err) {
              _this.get('dirtyKeys').clear();
              _this.get('_dirtiedKeys').clear();
              if (associations) {
                record._withoutDirtyTracking(function() {
                  var _ref3, _ref4;
                  if ((_ref3 = associations.getByType('hasOne')) != null) {
                    _ref3.forEach(function(association, label) {
                      return association.apply(err, record);
                    });
                  }
                  return (_ref4 = associations.getByType('hasMany')) != null ? _ref4.forEach(function(association, label) {
                    return association.apply(err, record);
                  }) : void 0;
                });
              }
              record = _this.constructor._mapIdentity(record);
              _this.get('lifecycle').startTransition(endState);
            } else {
              if (err instanceof Batman.ErrorsSet) {
                _this.get('lifecycle').failedValidation();
              } else {
                _this.get('lifecycle').error();
              }
            }
            return typeof callback === "function" ? callback(err, record || _this, env) : void 0;
          });
        });
      } else {
        return typeof callback === "function" ? callback(new Batman.StateMachine.InvalidTransitionError("Can't save while in state " + (this.get('lifecycle.state')))) : void 0;
      }
    };

    Model.prototype.destroy = function(options, callback) {
      var _ref1, _this = this;
      if (!callback) {
        _ref1 = [{},
        options], options = _ref1[0], callback = _ref1[1];
      }
      if (this.get('lifecycle').destroy()) {
        return this._doStorageOperation('destroy', {
          data: options
        }, function(err, record, env) {
          if (!err) {
            _this.constructor.get('loaded').remove(_this);
            _this.get('lifecycle').destroyed();
          } else {
            _this.get('lifecycle').error();
          }
          return typeof callback === "function" ? callback(err, record, env) : void 0;
        });
      } else {
        return typeof callback === "function" ? callback(new Batman.StateMachine.InvalidTransitionError("Can't destroy while in state " + (this.get('lifecycle.state')))) : void 0;
      }
    };

    Model.prototype.validate = function(callback) {
      var args, count, errors, finishedValidation, key, validator, validators, _j, _k, _len1, _len2, _ref1;
      errors = this.get('errors');
      errors.clear();
      validators = this._batman.get('validators') || [];
      if (!validators || validators.length === 0) {
        if (typeof callback === "function") {
          callback(void 0, errors);
        }
        return true;
      }
      count = validators.reduce((function(acc, validator) {
        return acc + validator.keys.length;
      }), 0);
      finishedValidation = function() {
        if (--count === 0) {
          return typeof callback === "function" ? callback(void 0, errors) : void 0;
        }
      };
      for (_j = 0, _len1 = validators.length; _j < _len1; _j++) {
        validator = validators[_j];
        _ref1 = validator.keys;
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          key = _ref1[_k];
          args = [errors, this, key, finishedValidation];
          try {
            if (validator.validator) {
              validator.validator.validateEach.apply(validator.validator, args);
            } else {
              validator.callback.apply(validator, args);
            }
          } catch (e) {
            if (typeof callback === "function") {
              callback(e, errors);
            }
          }
        }
      }
    };

    Model.prototype.associationProxy = function(association) {
      var proxies, _base, _name;
      Batman.initializeObject(this);
      proxies = (_base = this._batman).associationProxies || (_base.associationProxies = {});
      proxies[_name = association.label] || (proxies[_name] = new association.proxyClass(association, this));
      return proxies[association.label];
    };

    Model.prototype._willSet = function(key) {
      if (this._pauseDirtyTracking) {
        return true;
      }
      if (this.get('lifecycle').startTransition('set')) {
        if (!this.get('_dirtiedKeys').has(key)) {
          this.set("dirtyKeys." + key, this.get(key));
          this.get('_dirtiedKeys').add(key);
        }
        return true;
      } else {
        return false;
      }
    };

    Model.prototype._doStorageOperation = function(operation, options, callback) {
      var adapter, _this = this;
      Batman.developer.assert(this.hasStorage(), "Can't " + operation + " model " + (Batman.functionName(this.constructor)) + " without any storage adapters!");
      adapter = this._batman.get('storage');
      return adapter.perform(operation, this, options, function() {
        return callback.apply(null, arguments);
      });
    };

    Model.prototype._withoutDirtyTracking = function(block) {
      var result;
      this._pauseDirtyTracking = true;
      result = block.call(this);
      this._pauseDirtyTracking = false;
      return result;
    };

    _ref1 = ['load', 'save', 'validate', 'destroy'];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      functionName = _ref1[_j];
      Model.prototype[functionName] = Batman.Property.wrapTrackingPrevention(Model.prototype[functionName]);
    }

    return Model;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var k, _fn, _i, _len, _ref, _this = this;

  _ref = Batman.AssociationCurator.availableAssociations;
  _fn = function(k) {
    return Batman.Model[k] = function(label, scope) {
      var collection, _base;
      Batman.initializeObject(this);
      collection = (_base = this._batman).associations || (_base.associations = new Batman.AssociationCurator(this));
      return collection.add(new Batman["" + (Batman.helpers.capitalize(k)) + "Association"](this, label, scope));
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    k = _ref[_i];
    _fn(k);
  }

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Proxy = (function(_super) {

    __extends(Proxy, _super);

    Proxy.prototype.isProxy = true;

    function Proxy(target) {
      Proxy.__super__.constructor.call(this);
      if (target != null) {
        this.set('target', target);
      }
    }

    Proxy.accessor('target', Batman.Property.defaultAccessor);

    Proxy.accessor({
      get: function(key) {
        var _ref;
        return (_ref = this.get('target')) != null ? _ref.get(key) : void 0;
      },
      set: function(key, value) {
        var _ref;
        return (_ref = this.get('target')) != null ? _ref.set(key, value) : void 0;
      },
      unset: function(key) {
        var _ref;
        return (_ref = this.get('target')) != null ? _ref.unset(key) : void 0;
      }
    });

    return Proxy;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.AssociationProxy = (function(_super) {

    __extends(AssociationProxy, _super);

    AssociationProxy.prototype.loaded = false;

    function AssociationProxy(association, model) {
      this.association = association;
      this.model = model;
      AssociationProxy.__super__.constructor.call(this);
    }

    AssociationProxy.prototype.toJSON = function() {
      var target;
      target = this.get('target');
      if (target != null) {
        return this.get('target').toJSON();
      }
    };

    AssociationProxy.prototype.load = function(callback) {
      var _this = this;
      this.fetch(function(err, proxiedRecord) {
        if (!err) {
          _this._setTarget(proxiedRecord);
        }
        return typeof callback === "function" ? callback(err, proxiedRecord) : void 0;
      });
      return this.get('target');
    };

    AssociationProxy.prototype.loadFromLocal = function() {
      var target;
      if (!this._canLoad()) {
        return;
      }
      if (target = this.fetchFromLocal()) {
        this._setTarget(target);
      }
      return target;
    };

    AssociationProxy.prototype.fetch = function(callback) {
      var record;
      if (!this._canLoad()) {
        return callback(void 0, void 0);
      }
      record = this.fetchFromLocal();
      if (record) {
        return callback(void 0, record);
      } else {
        return this.fetchFromRemote(callback);
      }
    };

    AssociationProxy.accessor('loaded', Batman.Property.defaultAccessor);

    AssociationProxy.accessor('target', {
      get: function() {
        return this.fetchFromLocal();
      },
      set: function(_, v) {
        return v;
      }
    });

    AssociationProxy.prototype._canLoad = function() {
      return (this.get('foreignValue') || this.get('primaryValue')) != null;
    };

    AssociationProxy.prototype._setTarget = function(target) {
      this.set('target', target);
      this.set('loaded', true);
      return this.fire('loaded', target);
    };

    return AssociationProxy;

  })(Batman.Proxy);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.HasOneProxy = (function(_super) {

    __extends(HasOneProxy, _super);

    function HasOneProxy() {
      return HasOneProxy.__super__.constructor.apply(this, arguments);
    }

    HasOneProxy.accessor('primaryValue', function() {
      return this.model.get(this.association.primaryKey);
    });

    HasOneProxy.prototype.fetchFromLocal = function() {
      return this.association.setIndex().get(this.get('primaryValue'));
    };

    HasOneProxy.prototype.fetchFromRemote = function(callback) {
      var loadOptions, _this = this;
      loadOptions = {
        data: {}
      };
      loadOptions.data[this.association.foreignKey] = this.get('primaryValue');
      if (this.association.options.url) {
        loadOptions.collectionUrl = this.association.options.url;
        loadOptions.urlContext = this.model;
      }
      return this.association.getRelatedModel().loadWithOptions(loadOptions, function(error, loadedRecords) {
        if (error) {
          throw error;
        }
        if (!loadedRecords || loadedRecords.length <= 0) {
          return callback(new Error("Couldn't find related record!"), void 0);
        } else {
          return callback(void 0, loadedRecords[0]);
        }
      });
    };

    return HasOneProxy;

  })(Batman.AssociationProxy);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.BelongsToProxy = (function(_super) {

    __extends(BelongsToProxy, _super);

    function BelongsToProxy() {
      return BelongsToProxy.__super__.constructor.apply(this, arguments);
    }

    BelongsToProxy.accessor('foreignValue', function() {
      return this.model.get(this.association.foreignKey);
    });

    BelongsToProxy.prototype.fetchFromLocal = function() {
      return this.association.setIndex().get(this.get('foreignValue'));
    };

    BelongsToProxy.prototype.fetchFromRemote = function(callback) {
      var loadOptions, _this = this;
      loadOptions = {};
      if (this.association.options.url) {
        loadOptions.recordUrl = this.association.options.url;
      }
      return this.association.getRelatedModel().findWithOptions(this.get('foreignValue'), loadOptions, function(error, loadedRecord) {
        if (error) {
          throw error;
        }
        return callback(void 0, loadedRecord);
      });
    };

    return BelongsToProxy;

  })(Batman.AssociationProxy);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicBelongsToProxy = (function(_super) {

    __extends(PolymorphicBelongsToProxy, _super);

    function PolymorphicBelongsToProxy() {
      return PolymorphicBelongsToProxy.__super__.constructor.apply(this, arguments);
    }

    PolymorphicBelongsToProxy.accessor('foreignTypeValue', function() {
      return this.model.get(this.association.foreignTypeKey);
    });

    PolymorphicBelongsToProxy.prototype.fetchFromLocal = function() {
      return this.association.setIndexForType(this.get('foreignTypeValue')).get(this.get('foreignValue'));
    };

    PolymorphicBelongsToProxy.prototype.fetchFromRemote = function(callback) {
      var loadOptions, _this = this;
      loadOptions = {};
      if (this.association.options.url) {
        loadOptions.recordUrl = this.association.options.url;
      }
      return this.association.getRelatedModelForType(this.get('foreignTypeValue')).findWithOptions(this.get('foreignValue'), loadOptions, function(error, loadedRecord) {
        if (error) {
          throw error;
        }
        return callback(void 0, loadedRecord);
      });
    };

    return PolymorphicBelongsToProxy;

  })(Batman.BelongsToProxy);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Accessible = (function(_super) {

    __extends(Accessible, _super);

    function Accessible() {
      this.accessor.apply(this, arguments);
    }

    return Accessible;

  })(Batman.Object);

  Batman.TerminalAccessible = (function(_super) {

    __extends(TerminalAccessible, _super);

    function TerminalAccessible() {
      return TerminalAccessible.__super__.constructor.apply(this, arguments);
    }

    TerminalAccessible.prototype.propertyClass = Batman.Property;

    return TerminalAccessible;

  })(Batman.Accessible);

}).call(this);

(function() {

  Batman.mixins = new Batman.Object;

}).call(this);

(function() {

  Batman.URI = (function() {
    /*
      # URI parsing
    */

    var attributes, childKeyMatchers, decodeQueryComponent, encodeComponent, encodeQueryComponent, keyVal, nameParser, normalizeParams, plus, queryFromParams, r20, strictParser;

    strictParser = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/;

    attributes = ["source", "protocol", "authority", "userInfo", "user", "password", "hostname", "port", "relative", "path", "directory", "file", "query", "hash"];

    function URI(str) {
      var i, matches;
      matches = strictParser.exec(str);
      i = 14;
      while (i--) {
        this[attributes[i]] = matches[i] || '';
      }
      this.queryParams = this.constructor.paramsFromQuery(this.query);
      delete this.authority;
      delete this.userInfo;
      delete this.relative;
      delete this.directory;
      delete this.file;
      delete this.query;
    }

    URI.prototype.queryString = function() {
      return this.constructor.queryFromParams(this.queryParams);
    };

    URI.prototype.toString = function() {
      return [this.protocol ? "" + this.protocol + ":" : void 0, this.authority() ? "//" : void 0, this.authority(), this.relative()].join("");
    };

    URI.prototype.userInfo = function() {
      return [this.user, this.password ? ":" + this.password : void 0].join("");
    };

    URI.prototype.authority = function() {
      return [this.userInfo(), this.user || this.password ? "@" : void 0, this.hostname, this.port ? ":" + this.port : void 0].join("");
    };

    URI.prototype.relative = function() {
      var query;
      query = this.queryString();
      return [this.path, query ? "?" + query : void 0, this.hash ? "#" + this.hash : void 0].join("");
    };

    URI.prototype.directory = function() {
      var splitPath;
      splitPath = this.path.split('/');
      if (splitPath.length > 1) {
        return splitPath.slice(0, splitPath.length - 1).join('/') + "/";
      } else {
        return "";
      }
    };

    URI.prototype.file = function() {
      var splitPath;
      splitPath = this.path.split("/");
      return splitPath[splitPath.length - 1];
    };

    /*
      # query parsing
    */


    URI.paramsFromQuery = function(query) {
      var matches, params, segment, _i, _len, _ref;
      params = {};
      _ref = query.split('&');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        segment = _ref[_i];
        if (matches = segment.match(keyVal)) {
          normalizeParams(params, decodeQueryComponent(matches[1]), decodeQueryComponent(matches[2]));
        } else {
          normalizeParams(params, decodeQueryComponent(segment), null);
        }
      }
      return params;
    };

    URI.decodeQueryComponent = decodeQueryComponent = function(str) {
      return decodeURIComponent(str.replace(plus, '%20'));
    };

    nameParser = /^[\[\]]*([^\[\]]+)\]*(.*)/;

    childKeyMatchers = [/^\[\]\[([^\[\]]+)\]$/, /^\[\](.+)$/];

    plus = /\+/g;

    r20 = /%20/g;

    keyVal = /^([^=]*)=(.*)/;

    normalizeParams = function(params, name, v) {
      var after, childKey, k, last, matches, _ref, _ref1, _ref2;
      if (matches = name.match(nameParser)) {
        k = matches[1];
        after = matches[2];
      } else {
        return;
      }
      if (after === '') {
        params[k] = v;
      } else if (after === '[]') {
        if ((_ref = params[k]) == null) {
          params[k] = [];
        }
        if (Batman.typeOf(params[k]) !== 'Array') {
          throw new Error("expected Array (got " + (Batman.typeOf(params[k])) + ") for param \"" + k + "\"");
        }
        params[k].push(v);
      } else if (matches = after.match(childKeyMatchers[0]) || after.match(childKeyMatchers[1])) {
        childKey = matches[1];
        if ((_ref1 = params[k]) == null) {
          params[k] = [];
        }
        if (Batman.typeOf(params[k]) !== 'Array') {
          throw new Error("expected Array (got " + (Batman.typeOf(params[k])) + ") for param \"" + k + "\"");
        }
        last = params[k][params[k].length - 1];
        if (Batman.typeOf(last) === 'Object' && !(childKey in last)) {
          normalizeParams(last, childKey, v);
        } else {
          params[k].push(normalizeParams({}, childKey, v));
        }
      } else {
        if ((_ref2 = params[k]) == null) {
          params[k] = {};
        }
        if (Batman.typeOf(params[k]) !== 'Object') {
          throw new Error("expected Object (got " + (Batman.typeOf(params[k])) + ") for param \"" + k + "\"");
        }
        params[k] = normalizeParams(params[k], after, v);
      }
      return params;
    };

    /*
      # query building
    */


    URI.queryFromParams = queryFromParams = function(value, prefix) {
      var arrayResults, k, v, valueType;
      if (value == null) {
        return prefix;
      }
      valueType = Batman.typeOf(value);
      if (!((prefix != null) || valueType === 'Object')) {
        throw new Error("value must be an Object");
      }
      switch (valueType) {
      case 'Array':
        return ((function() {
          var _i, _len;
          arrayResults = [];
          if (value.length === 0) {
            arrayResults.push(queryFromParams(null, "" + prefix + "[]"));
          } else {
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              v = value[_i];
              arrayResults.push(queryFromParams(v, "" + prefix + "[]"));
            }
          }
          return arrayResults;
        })()).join("&");
      case 'Object':
        return ((function() {
          var _results;
          _results = [];
          for (k in value) {
            v = value[k];
            _results.push(queryFromParams(v, prefix ? "" + prefix + "[" + (encodeQueryComponent(k)) + "]" : encodeQueryComponent(k)));
          }
          return _results;
        })()).join("&");
      default:
        if (prefix != null) {
          return "" + prefix + "=" + (encodeQueryComponent(value));
        } else {
          return encodeQueryComponent(value);
        }
      }
    };

    URI.encodeComponent = encodeComponent = function(str) {
      if (str != null) {
        return encodeURIComponent(str);
      } else {
        return '';
      }
    };

    URI.encodeQueryComponent = encodeQueryComponent = function(str) {
      return encodeComponent(str).replace(r20, '+');
    };

    return URI;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.Request = (function(_super) {
    var dataHasFileUploads;

    __extends(Request, _super);

    Request.objectToFormData = function(data) {
      var formData, key, pairForList, val, _i, _len, _ref, _ref1;
      pairForList = function(key, object, first) {
        var k, list, v;
        if (first == null) {
          first = false;
        }
        if (object instanceof Batman.container.File) {
          return [[key, object]];
        }
        return list = (function() {
          switch (Batman.typeOf(object)) {
          case 'Object':
            list = (function() {
              var _results;
              _results = [];
              for (k in object) {
                v = object[k];
                _results.push(pairForList((first ? k : "" + key + "[" + k + "]"), v));
              }
              return _results;
            })();
            return list.reduce(function(acc, list) {
              return acc.concat(list);
            }, []);
          case 'Array':
            return object.reduce(function(acc, element) {
              return acc.concat(pairForList("" + key + "[]", element));
            }, []);
          default:
            return [[key, object != null ? object : ""]];
          }
        })();
      };
      formData = new Batman.container.FormData();
      _ref = pairForList("", data, true);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], key = _ref1[0], val = _ref1[1];
        formData.append(key, val);
      }
      return formData;
    };

    Request.dataHasFileUploads = dataHasFileUploads = function(data) {
      var k, type, v, _i, _len;
      if ((typeof File !== "undefined" && File !== null) && data instanceof File) {
        return true;
      }
      type = Batman.typeOf(data);
      switch (type) {
      case 'Object':
        for (k in data) {
          v = data[k];
          if (dataHasFileUploads(v)) {
            return true;
          }
        }
        break;
      case 'Array':
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          v = data[_i];
          if (dataHasFileUploads(v)) {
            return true;
          }
        }
      }
      return false;
    };

    Request.wrapAccessor('method', function(core) {
      return {
        set: function(k, val) {
          return core.set.call(this, k, val != null ? typeof val.toUpperCase === "function" ? val.toUpperCase() : void 0 : void 0);
        }
      };
    });

    Request.prototype.method = 'GET';

    Request.prototype.hasFileUploads = function() {
      return dataHasFileUploads(this.data);
    };

    Request.prototype.contentType = 'application/x-www-form-urlencoded';

    Request.prototype.autosend = true;

    function Request(options) {
      var handler, handlers, k, _ref;
      handlers = {};
      for (k in options) {
        handler = options[k];
        if (!(k === 'success' || k === 'error' || k === 'loading' || k === 'loaded')) {
          continue;
        }
        handlers[k] = handler;
        delete options[k];
      }
      Request.__super__.constructor.call(this, options);
      for (k in handlers) {
        handler = handlers[k];
        this.on(k, handler);
      }
      if (((_ref = this.get('url')) != null ? _ref.length : void 0) > 0) {
        if (this.autosend) {
          this.send();
        }
      } else {
        this.observe('url', function(url) {
          if (url != null) {
            return this.send();
          }
        });
      }
    }

    Request.prototype.send = function() {
      return Batman.developer.error("Please source a dependency file for a request implementation");
    };

    return Request;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetObserver = (function(_super) {

    __extends(SetObserver, _super);

    function SetObserver(base) {
      var _this = this;
      this.base = base;
      this._itemObservers = new Batman.SimpleHash;
      this._setObservers = new Batman.SimpleHash;
      this._setObservers.set("itemsWereAdded", function() {
        return _this.fire.apply(_this, ['itemsWereAdded'].concat(__slice.call(arguments)));
      });
      this._setObservers.set("itemsWereRemoved", function() {
        return _this.fire.apply(_this, ['itemsWereRemoved'].concat(__slice.call(arguments)));
      });
      this.on('itemsWereAdded', this.startObservingItems.bind(this));
      this.on('itemsWereRemoved', this.stopObservingItems.bind(this));
    }

    SetObserver.prototype.observedItemKeys = [];

    SetObserver.prototype.observerForItemAndKey = function(item, key) {};

    SetObserver.prototype._getOrSetObserverForItemAndKey = function(item, key) {
      var _this = this;
      return this._itemObservers.getOrSet(item, function() {
        var observersByKey;
        observersByKey = new Batman.SimpleHash;
        return observersByKey.getOrSet(key, function() {
          return _this.observerForItemAndKey(item, key);
        });
      });
    };

    SetObserver.prototype.startObserving = function() {
      this._manageItemObservers("observe");
      return this._manageSetObservers("addHandler");
    };

    SetObserver.prototype.stopObserving = function() {
      this._manageItemObservers("forget");
      return this._manageSetObservers("removeHandler");
    };

    SetObserver.prototype.startObservingItems = function() {
      var item, items, _i, _len, _results;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        _results.push(this._manageObserversForItem(item, "observe"));
      }
      return _results;
    };

    SetObserver.prototype.stopObservingItems = function() {
      var item, items, _i, _len, _results;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        _results.push(this._manageObserversForItem(item, "forget"));
      }
      return _results;
    };

    SetObserver.prototype._manageObserversForItem = function(item, method) {
      var key, _i, _len, _ref;
      if (!item.isObservable) {
        return;
      }
      _ref = this.observedItemKeys;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        item[method](key, this._getOrSetObserverForItemAndKey(item, key));
      }
      if (method === "forget") {
        return this._itemObservers.unset(item);
      }
    };

    SetObserver.prototype._manageItemObservers = function(method) {
      var _this = this;
      return this.base.forEach(function(item) {
        return _this._manageObserversForItem(item, method);
      });
    };

    SetObserver.prototype._manageSetObservers = function(method) {
      var _this = this;
      if (!this.base.isObservable) {
        return;
      }
      return this._setObservers.forEach(function(key, observer) {
        return _this.base.event(key)[method](observer);
      });
    };

    return SetObserver;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.SetSort = (function(_super) {

    __extends(SetSort, _super);

    function SetSort(base, key, order) {
      var boundReIndex, _this = this;
      this.key = key;
      if (order == null) {
        order = "asc";
      }
      SetSort.__super__.constructor.call(this, base);
      this.descending = order.toLowerCase() === "desc";
      if (this.base.isObservable) {
        this._setObserver = new Batman.SetObserver(this.base);
        this._setObserver.observedItemKeys = [this.key];
        boundReIndex = function() {
          return _this._reIndex();
        };
        this._setObserver.observerForItemAndKey = function() {
          return boundReIndex;
        };
        this._setObserver.on('itemsWereAdded', boundReIndex);
        this._setObserver.on('itemsWereRemoved', boundReIndex);
        this.startObserving();
      }
      this._reIndex();
    }

    SetSort.prototype.startObserving = function() {
      var _ref;
      return (_ref = this._setObserver) != null ? _ref.startObserving() : void 0;
    };

    SetSort.prototype.stopObserving = function() {
      var _ref;
      return (_ref = this._setObserver) != null ? _ref.stopObserving() : void 0;
    };

    SetSort.prototype.toArray = function() {
      return this.get('_storage');
    };

    SetSort.prototype.forEach = function(iterator, ctx) {
      var e, i, _i, _len, _ref, _results;
      _ref = this.get('_storage');
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        e = _ref[i];
        _results.push(iterator.call(ctx, e, i, this));
      }
      return _results;
    };

    SetSort.prototype.find = function(block) {
      var item, _i, _len, _ref;
      this.base.registerAsMutableSource();
      _ref = this.get('_storage');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (block(item)) {
          return item;
        }
      }
    };

    SetSort.prototype.merge = function(other) {
      this.base.registerAsMutableSource();
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor,
          result = func.apply(child, args),
          t = typeof result;
        return t == "object" || t == "function" ? result || child : child;
      })(Batman.Set, this._storage, function() {}).merge(other).sortedBy(this.key, this.order);
    };

    SetSort.prototype.compare = function(a, b) {
      if (a === b) {
        return 0;
      }
      if (a === void 0) {
        return 1;
      }
      if (b === void 0) {
        return -1;
      }
      if (a === null) {
        return 1;
      }
      if (b === null) {
        return -1;
      }
      if (a === false) {
        return 1;
      }
      if (b === false) {
        return -1;
      }
      if (a === true) {
        return 1;
      }
      if (b === true) {
        return -1;
      }
      if (a !== a) {
        if (b !== b) {
          return 0;
        } else {
          return 1;
        }
      }
      if (b !== b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    };

    SetSort.prototype._reIndex = function() {
      var newOrder, _ref, _this = this;
      newOrder = this.base.toArray().sort(function(a, b) {
        var multiple, valueA, valueB;
        valueA = Batman.get(a, _this.key);
        if (typeof valueA === 'function') {
          valueA = valueA.call(a);
        }
        if (valueA != null) {
          valueA = valueA.valueOf();
        }
        valueB = Batman.get(b, _this.key);
        if (typeof valueB === 'function') {
          valueB = valueB.call(b);
        }
        if (valueB != null) {
          valueB = valueB.valueOf();
        }
        multiple = _this.descending ? -1 : 1;
        return _this.compare.call(_this, valueA, valueB) * multiple;
      });
      if ((_ref = this._setObserver) != null) {
        _ref.startObservingItems.apply(_ref, newOrder);
      }
      return this.set('_storage', newOrder);
    };

    return SetSort;

  })(Batman.SetProxy);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.AssociationSet = (function(_super) {

    __extends(AssociationSet, _super);

    function AssociationSet(foreignKeyValue, association) {
      var base;
      this.foreignKeyValue = foreignKeyValue;
      this.association = association;
      base = new Batman.Set;
      AssociationSet.__super__.constructor.call(this, base, '_batmanID');
    }

    AssociationSet.prototype.loaded = false;

    AssociationSet.prototype.load = function(callback) {
      var _this = this;
      if (this.foreignKeyValue == null) {
        return callback(void 0, this);
      }
      return this.association.getRelatedModel().loadWithOptions(this._getLoadOptions(), function(err, records) {
        if (!err) {
          _this.markAsLoaded();
        }
        return callback(err, _this);
      });
    };

    AssociationSet.prototype._getLoadOptions = function() {
      var loadOptions;
      loadOptions = {
        data: {}
      };
      loadOptions.data[this.association.foreignKey] = this.foreignKeyValue;
      if (this.association.options.url) {
        loadOptions.collectionUrl = this.association.options.url;
        loadOptions.urlContext = this.association.parentSetIndex().get(this.foreignKeyValue);
      }
      return loadOptions;
    };

    AssociationSet.accessor('loaded', Batman.Property.defaultAccessor);

    AssociationSet.prototype.markAsLoaded = function() {
      this.set('loaded', true);
      return this.fire('loaded');
    };

    return AssociationSet;

  })(Batman.SetSort);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicAssociationSet = (function(_super) {

    __extends(PolymorphicAssociationSet, _super);

    function PolymorphicAssociationSet(foreignKeyValue, foreignTypeKeyValue, association) {
      this.foreignKeyValue = foreignKeyValue;
      this.foreignTypeKeyValue = foreignTypeKeyValue;
      this.association = association;
      PolymorphicAssociationSet.__super__.constructor.call(this, this.foreignKeyValue, this.association);
    }

    PolymorphicAssociationSet.prototype._getLoadOptions = function() {
      var loadOptions;
      loadOptions = {
        data: {}
      };
      loadOptions.data[this.association.foreignKey] = this.foreignKeyValue;
      loadOptions.data[this.association.foreignTypeKey] = this.foreignTypeKeyValue;
      if (this.association.options.url) {
        loadOptions.collectionUrl = this.association.options.url;
        loadOptions.urlContext = this.association.parentSetIndex().get(this.foreignKeyValue);
      }
      return loadOptions;
    };

    return PolymorphicAssociationSet;

  })(Batman.AssociationSet);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.SetIndex = (function(_super) {

    __extends(SetIndex, _super);

    SetIndex.accessor('toArray', function() {
      return this.toArray();
    });

    Batman.extend(SetIndex.prototype, Batman.Enumerable);

    SetIndex.prototype.propertyClass = Batman.Property;

    function SetIndex(base, key) {
      var _this = this;
      this.base = base;
      this.key = key;
      SetIndex.__super__.constructor.call(this);
      this._storage = new Batman.Hash;
      if (this.base.isEventEmitter) {
        this._setObserver = new Batman.SetObserver(this.base);
        this._setObserver.observedItemKeys = [this.key];
        this._setObserver.observerForItemAndKey = this.observerForItemAndKey.bind(this);
        this._setObserver.on('itemsWereAdded', function() {
          var item, items, _i, _len, _results;
          items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            _results.push(_this._addItem(item));
          }
          return _results;
        });
        this._setObserver.on('itemsWereRemoved', function() {
          var item, items, _i, _len, _results;
          items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _results = [];
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            item = items[_i];
            _results.push(_this._removeItem(item));
          }
          return _results;
        });
      }
      this.base.forEach(this._addItem.bind(this));
      this.startObserving();
    }

    SetIndex.accessor(function(key) {
      return this._resultSetForKey(key);
    });

    SetIndex.prototype.startObserving = function() {
      var _ref;
      return (_ref = this._setObserver) != null ? _ref.startObserving() : void 0;
    };

    SetIndex.prototype.stopObserving = function() {
      var _ref;
      return (_ref = this._setObserver) != null ? _ref.stopObserving() : void 0;
    };

    SetIndex.prototype.observerForItemAndKey = function(item, key) {
      var _this = this;
      return function(newValue, oldValue) {
        _this._removeItemFromKey(item, oldValue);
        return _this._addItemToKey(item, newValue);
      };
    };

    SetIndex.prototype.forEach = function(iterator, ctx) {
      var _this = this;
      return this._storage.forEach(function(key, set) {
        if (set.get('length') > 0) {
          return iterator.call(ctx, key, set, _this);
        }
      });
    };

    SetIndex.prototype.toArray = function() {
      var results;
      results = [];
      this._storage.forEach(function(key, set) {
        if (set.get('length') > 0) {
          return results.push(key);
        }
      });
      return results;
    };

    SetIndex.prototype._addItem = function(item) {
      return this._addItemToKey(item, this._keyForItem(item));
    };

    SetIndex.prototype._addItemToKey = function(item, key) {
      return this._resultSetForKey(key).add(item);
    };

    SetIndex.prototype._removeItem = function(item) {
      return this._removeItemFromKey(item, this._keyForItem(item));
    };

    SetIndex.prototype._removeItemFromKey = function(item, key) {
      return this._resultSetForKey(key).remove(item);
    };

    SetIndex.prototype._resultSetForKey = function(key) {
      return this._storage.getOrSet(key, function() {
        return new Batman.Set;
      });
    };

    SetIndex.prototype._keyForItem = function(item) {
      return Batman.Keypath.forBaseAndKey(item, this.key).getValue();
    };

    return SetIndex;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicAssociationSetIndex = (function(_super) {

    __extends(PolymorphicAssociationSetIndex, _super);

    function PolymorphicAssociationSetIndex(association, type, key) {
      this.association = association;
      this.type = type;
      PolymorphicAssociationSetIndex.__super__.constructor.call(this, this.association.getRelatedModel().get('loaded'), key);
    }

    PolymorphicAssociationSetIndex.prototype._resultSetForKey = function(key) {
      return this.association.setForKey(key);
    };

    PolymorphicAssociationSetIndex.prototype._addItem = function(item) {
      if (this.association.modelType() !== item.get(this.association.foreignTypeKey)) {
        return;
      }
      return PolymorphicAssociationSetIndex.__super__._addItem.apply(this, arguments);
    };

    PolymorphicAssociationSetIndex.prototype._removeItem = function(item) {
      if (this.association.modelType() !== item.get(this.association.foreignTypeKey)) {
        return;
      }
      return PolymorphicAssociationSetIndex.__super__._removeItem.apply(this, arguments);
    };

    return PolymorphicAssociationSetIndex;

  })(Batman.SetIndex);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.AssociationSetIndex = (function(_super) {

    __extends(AssociationSetIndex, _super);

    function AssociationSetIndex(association, key) {
      this.association = association;
      AssociationSetIndex.__super__.constructor.call(this, this.association.getRelatedModel().get('loaded'), key);
    }

    AssociationSetIndex.prototype._resultSetForKey = function(key) {
      return this.association.setForKey(key);
    };

    AssociationSetIndex.prototype.forEach = function(iterator, ctx) {
      var _this = this;
      return this.association.proxies.forEach(function(record, set) {
        var key;
        key = _this.association.indexValueForRecord(record);
        if (set.get('length') > 0) {
          return iterator.call(ctx, key, set, _this);
        }
      });
    };

    AssociationSetIndex.prototype.toArray = function() {
      var results;
      results = [];
      this.forEach(function(key) {
        return results.push(key);
      });
      return results;
    };

    return AssociationSetIndex;

  })(Batman.SetIndex);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.UniqueSetIndex = (function(_super) {

    __extends(UniqueSetIndex, _super);

    function UniqueSetIndex() {
      this._uniqueIndex = new Batman.Hash;
      UniqueSetIndex.__super__.constructor.apply(this, arguments);
    }

    UniqueSetIndex.accessor(function(key) {
      return this._uniqueIndex.get(key);
    });

    UniqueSetIndex.prototype._addItemToKey = function(item, key) {
      this._resultSetForKey(key).add(item);
      if (!this._uniqueIndex.hasKey(key)) {
        return this._uniqueIndex.set(key, item);
      }
    };

    UniqueSetIndex.prototype._removeItemFromKey = function(item, key) {
      var resultSet;
      resultSet = this._resultSetForKey(key);
      UniqueSetIndex.__super__._removeItemFromKey.apply(this, arguments);
      if (resultSet.isEmpty()) {
        return this._uniqueIndex.unset(key);
      } else {
        return this._uniqueIndex.set(key, resultSet.toArray()[0]);
      }
    };

    return UniqueSetIndex;

  })(Batman.SetIndex);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.UniqueAssociationSetIndex = (function(_super) {

    __extends(UniqueAssociationSetIndex, _super);

    function UniqueAssociationSetIndex(association, key) {
      this.association = association;
      UniqueAssociationSetIndex.__super__.constructor.call(this, this.association.getRelatedModel().get('loaded'), key);
    }

    return UniqueAssociationSetIndex;

  })(Batman.UniqueSetIndex);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicUniqueAssociationSetIndex = (function(_super) {

    __extends(PolymorphicUniqueAssociationSetIndex, _super);

    function PolymorphicUniqueAssociationSetIndex(association, type, key) {
      this.association = association;
      this.type = type;
      PolymorphicUniqueAssociationSetIndex.__super__.constructor.call(this, this.association.getRelatedModelForType(type).get('loaded'), key);
    }

    return PolymorphicUniqueAssociationSetIndex;

  })(Batman.UniqueSetIndex);

}).call(this);

(function() {
  var __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    },
    __slice = [].slice;

  Batman.Navigator = (function() {

    Navigator.defaultClass = function() {
      if (Batman.config.usePushState && Batman.PushStateNavigator.isSupported()) {
        return Batman.PushStateNavigator;
      } else {
        return Batman.HashbangNavigator;
      }
    };

    Navigator.forApp = function(app) {
      return new(this.defaultClass())(app);
    };

    function Navigator(app) {
      this.app = app;
      this.handleCurrentLocation = __bind(this.handleCurrentLocation, this);

    }

    Navigator.prototype.start = function() {
      var _this = this;
      if (typeof window === 'undefined') {
        return;
      }
      if (this.started) {
        return;
      }
      this.started = true;
      this.startWatching();
      Batman.currentApp.prevent('ready');
      return Batman.setImmediate(function() {
        if (_this.started && Batman.currentApp) {
          _this.handleCurrentLocation();
          return Batman.currentApp.allowAndFire('ready');
        }
      });
    };

    Navigator.prototype.stop = function() {
      this.stopWatching();
      return this.started = false;
    };

    Navigator.prototype.handleLocation = function(location) {
      var path;
      path = this.pathFromLocation(location);
      if (path === this.cachedPath) {
        return;
      }
      return this.dispatch(path);
    };

    Navigator.prototype.handleCurrentLocation = function() {
      return this.handleLocation(window.location);
    };

    Navigator.prototype.dispatch = function(params) {
      this.cachedPath = this.app.get('dispatcher').dispatch(params);
      if (this._lastRedirect) {
        this.cachedPath = this._lastRedirect;
      }
      return this.cachedPath;
    };

    Navigator.prototype.push = function(params) {
      var path, pathFromParams, _base;
      pathFromParams = typeof(_base = this.app.get('dispatcher')).pathFromParams === "function" ? _base.pathFromParams(params) : void 0;
      if (pathFromParams) {
        this._lastRedirect = pathFromParams;
      }
      path = this.dispatch(params);
      if (!this._lastRedirect || this._lastRedirect === path) {
        this.pushState(null, '', path);
      }
      return path;
    };

    Navigator.prototype.replace = function(params) {
      var path, pathFromParams, _base;
      pathFromParams = typeof(_base = this.app.get('dispatcher')).pathFromParams === "function" ? _base.pathFromParams(params) : void 0;
      if (pathFromParams) {
        this._lastRedirect = pathFromParams;
      }
      path = this.dispatch(params);
      if (!this._lastRedirect || this._lastRedirect === path) {
        this.replaceState(null, '', path);
      }
      return path;
    };

    Navigator.prototype.redirect = Navigator.prototype.push;

    Navigator.prototype.normalizePath = function() {
      var i, seg, segments;
      segments = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      segments = (function() {
        var _i, _len, _results;
        _results = [];
        for (i = _i = 0, _len = segments.length; _i < _len; i = ++_i) {
          seg = segments[i];
          _results.push(("" + seg).replace(/^(?!\/)/, '/').replace(/\/+$/, ''));
        }
        return _results;
      })();
      return segments.join('') || '/';
    };

    Navigator.normalizePath = Navigator.prototype.normalizePath;

    return Navigator;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PushStateNavigator = (function(_super) {

    __extends(PushStateNavigator, _super);

    function PushStateNavigator() {
      return PushStateNavigator.__super__.constructor.apply(this, arguments);
    }

    PushStateNavigator.isSupported = function() {
      var _ref;
      return (typeof window !== "undefined" && window !== null ? (_ref = window.history) != null ? _ref.pushState : void 0 : void 0) != null;
    };

    PushStateNavigator.prototype.startWatching = function() {
      return Batman.DOM.addEventListener(window, 'popstate', this.handleCurrentLocation);
    };

    PushStateNavigator.prototype.stopWatching = function() {
      return Batman.DOM.removeEventListener(window, 'popstate', this.handleCurrentLocation);
    };

    PushStateNavigator.prototype.pushState = function(stateObject, title, path) {
      if (path !== this.pathFromLocation(window.location)) {
        return window.history.pushState(stateObject, title, this.linkTo(path));
      }
    };

    PushStateNavigator.prototype.replaceState = function(stateObject, title, path) {
      if (path !== this.pathFromLocation(window.location)) {
        return window.history.replaceState(stateObject, title, this.linkTo(path));
      }
    };

    PushStateNavigator.prototype.linkTo = function(url) {
      return this.normalizePath(Batman.config.pathPrefix, url);
    };

    PushStateNavigator.prototype.pathFromLocation = function(location) {
      var fullPath, prefixPattern;
      fullPath = "" + (location.pathname || '') + (location.search || '');
      prefixPattern = new RegExp("^" + (this.normalizePath(Batman.config.pathPrefix)));
      return this.normalizePath(fullPath.replace(prefixPattern, ''));
    };

    PushStateNavigator.prototype.handleLocation = function(location) {
      var hashbangPath, path;
      path = this.pathFromLocation(location);
      if (path === '/' && (hashbangPath = Batman.HashbangNavigator.prototype.pathFromLocation(location)) !== '/') {
        return this.replace(hashbangPath);
      } else {
        return PushStateNavigator.__super__.handleLocation.apply(this, arguments);
      }
    };

    return PushStateNavigator;

  })(Batman.Navigator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.HashbangNavigator = (function(_super) {

    __extends(HashbangNavigator, _super);

    function HashbangNavigator() {
      return HashbangNavigator.__super__.constructor.apply(this, arguments);
    }

    HashbangNavigator.prototype.HASH_PREFIX = '#!';

    if ((typeof window !== "undefined" && window !== null) && 'onhashchange' in window) {
      HashbangNavigator.prototype.startWatching = function() {
        return Batman.DOM.addEventListener(window, 'hashchange', this.handleCurrentLocation);
      };
      HashbangNavigator.prototype.stopWatching = function() {
        return Batman.DOM.removeEventListener(window, 'hashchange', this.handleCurrentLocation);
      };
    } else {
      HashbangNavigator.prototype.startWatching = function() {
        return this.interval = setInterval(this.handleCurrentLocation, 100);
      };
      HashbangNavigator.prototype.stopWatching = function() {
        return this.interval = clearInterval(this.interval);
      };
    }

    HashbangNavigator.prototype.pushState = function(stateObject, title, path) {
      return window.location.hash = this.linkTo(path);
    };

    HashbangNavigator.prototype.replaceState = function(stateObject, title, path) {
      var loc;
      loc = window.location;
      return loc.replace("" + loc.pathname + loc.search + (this.linkTo(path)));
    };

    HashbangNavigator.prototype.linkTo = function(url) {
      return this.HASH_PREFIX + url;
    };

    HashbangNavigator.prototype.pathFromLocation = function(location) {
      var hash;
      hash = location.hash;
      if ((hash != null ? hash.substr(0, 2) : void 0) === this.HASH_PREFIX) {
        return this.normalizePath(hash.substr(2));
      } else {
        return '/';
      }
    };

    HashbangNavigator.prototype.handleLocation = function(location) {
      var realPath;
      if (!Batman.config.usePushState) {
        return HashbangNavigator.__super__.handleLocation.apply(this, arguments);
      }
      realPath = Batman.PushStateNavigator.prototype.pathFromLocation(location);
      if (realPath === '/') {
        return HashbangNavigator.__super__.handleLocation.apply(this, arguments);
      } else {
        return location.replace(this.normalizePath("" + Batman.config.pathPrefix + (this.linkTo(realPath))));
      }
    };

    return HashbangNavigator;

  })(Batman.Navigator);

}).call(this);

(function() {

  Batman.RouteMap = (function() {

    RouteMap.prototype.memberRoute = null;

    RouteMap.prototype.collectionRoute = null;

    function RouteMap() {
      this.childrenByOrder = [];
      this.childrenByName = {};
    }

    RouteMap.prototype.routeForParams = function(params) {
      var route, _i, _len, _ref;
      _ref = this.childrenByOrder;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        route = _ref[_i];
        if (route.test(params)) {
          return route;
        }
      }
      return void 0;
    };

    RouteMap.prototype.addRoute = function(name, route) {
      var base, names, _this = this;
      this.childrenByOrder.push(route);
      if (name.length > 0 && (names = name.split('.')).length > 0) {
        base = names.shift();
        if (!this.childrenByName[base]) {
          this.childrenByName[base] = new Batman.RouteMap;
        }
        this.childrenByName[base].addRoute(names.join('.'), route);
      } else {
        if (route.get('member')) {
          Batman.developer["do"](function() {
            if (_this.memberRoute) {
              return Batman.developer.error("Member route with name " + name + " already exists!");
            }
          });
          this.memberRoute = route;
        } else {
          Batman.developer["do"](function() {
            if (_this.collectionRoute) {
              return Batman.developer.error("Collection route with name " + name + " already exists!");
            }
          });
          this.collectionRoute = route;
        }
      }
      return true;
    };

    return RouteMap;

  })();

}).call(this);

(function() {
  var __slice = [].slice;

  Batman.RouteMapBuilder = (function() {

    RouteMapBuilder.BUILDER_FUNCTIONS = ['resources', 'member', 'collection', 'route', 'root'];

    RouteMapBuilder.ROUTES = {
      index: {
        cardinality: 'collection',
        path: function(resource) {
          return resource;
        },
        name: function(resource) {
          return resource;
        }
      },
      "new": {
        cardinality: 'collection',
        path: function(resource) {
          return "" + resource + "/new";
        },
        name: function(resource) {
          return "" + resource + ".new";
        }
      },
      show: {
        cardinality: 'member',
        path: function(resource) {
          return "" + resource + "/:id";
        },
        name: function(resource) {
          return resource;
        }
      },
      edit: {
        cardinality: 'member',
        path: function(resource) {
          return "" + resource + "/:id/edit";
        },
        name: function(resource) {
          return "" + resource + ".edit";
        }
      },
      collection: {
        cardinality: 'collection',
        path: function(resource, name) {
          return "" + resource + "/" + name;
        },
        name: function(resource, name) {
          return "" + resource + "." + name;
        }
      },
      member: {
        cardinality: 'member',
        path: function(resource, name) {
          return "" + resource + "/:id/" + name;
        },
        name: function(resource, name) {
          return "" + resource + "." + name;
        }
      }
    };

    function RouteMapBuilder(app, routeMap, parent, baseOptions) {
      this.app = app;
      this.routeMap = routeMap;
      this.parent = parent;
      this.baseOptions = baseOptions != null ? baseOptions : {};
      if (this.parent) {
        this.rootPath = this.parent._nestingPath();
        this.rootName = this.parent._nestingName();
      } else {
        this.rootPath = '';
        this.rootName = '';
      }
    }

    RouteMapBuilder.prototype.resources = function() {
      var action, actions, arg, args, as, callback, childBuilder, controller, included, k, options, path, resourceName, resourceNames, resourceRoot, routeOptions, routeTemplate, v, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      resourceNames = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = args.length; _i < _len; _i++) {
          arg = args[_i];
          if (typeof arg === 'string') {
            _results.push(arg);
          }
        }
        return _results;
      })();
      if (typeof args[args.length - 1] === 'function') {
        callback = args.pop();
      }
      if (typeof args[args.length - 1] === 'object') {
        options = args.pop();
      } else {
        options = {};
      }
      actions = {
        index: true,
        "new": true,
        show: true,
        edit: true
      };
      if (options.except) {
        _ref = options.except;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          k = _ref[_i];
          actions[k] = false;
        }
        delete options.except;
      } else if (options.only) {
        for (k in actions) {
          v = actions[k];
          actions[k] = false;
        }
        _ref1 = options.only;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          k = _ref1[_j];
          actions[k] = true;
        }
        delete options.only;
      }
      for (_k = 0, _len2 = resourceNames.length; _k < _len2; _k++) {
        resourceName = resourceNames[_k];
        resourceRoot = Batman.helpers.pluralize(resourceName);
        controller = Batman.helpers.camelize(resourceRoot, true);
        childBuilder = this._childBuilder({
          controller: controller
        });
        if (callback != null) {
          callback.call(childBuilder);
        }
        for (action in actions) {
          included = actions[action];
          if (!(included)) {
            continue;
          }
          routeTemplate = this.constructor.ROUTES[action];
          as = routeTemplate.name(resourceRoot);
          path = routeTemplate.path(resourceRoot);
          routeOptions = Batman.extend({
            controller: controller,
            action: action,
            path: path,
            as: as
          }, options);
          childBuilder[routeTemplate.cardinality](action, routeOptions);
        }
      }
      return true;
    };

    RouteMapBuilder.prototype.member = function() {
      return this._addRoutesWithCardinality.apply(this, ['member'].concat(__slice.call(arguments)));
    };

    RouteMapBuilder.prototype.collection = function() {
      return this._addRoutesWithCardinality.apply(this, ['collection'].concat(__slice.call(arguments)));
    };

    RouteMapBuilder.prototype.root = function(signature, options) {
      return this.route('/', signature, options);
    };

    RouteMapBuilder.prototype.route = function(path, signature, options, callback) {
      if (!callback) {
        if (typeof options === 'function') {
          callback = options;
          options = void 0;
        } else if (typeof signature === 'function') {
          callback = signature;
          signature = void 0;
        }
      }
      if (!options) {
        if (typeof signature === 'string') {
          options = {
            signature: signature
          };
        } else {
          options = signature;
        }
        options || (options = {});
      } else {
        if (signature) {
          options.signature = signature;
        }
      }
      if (callback) {
        options.callback = callback;
      }
      options.as || (options.as = this._nameFromPath(path));
      options.path = path;
      return this._addRoute(options);
    };

    RouteMapBuilder.prototype._addRoutesWithCardinality = function() {
      var cardinality, name, names, options, resourceRoot, routeOptions, routeTemplate, _i, _j, _len;
      cardinality = arguments[0], names = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
      if (typeof options === 'string') {
        names.push(options);
        options = {};
      }
      options = Batman.extend({}, this.baseOptions, options);
      options[cardinality] = true;
      routeTemplate = this.constructor.ROUTES[cardinality];
      resourceRoot = Batman.helpers.underscore(options.controller);
      for (_j = 0, _len = names.length; _j < _len; _j++) {
        name = names[_j];
        routeOptions = Batman.extend({
          action: name
        }, options);
        if (routeOptions.path == null) {
          routeOptions.path = routeTemplate.path(resourceRoot, name);
        }
        if (routeOptions.as == null) {
          routeOptions.as = routeTemplate.name(resourceRoot, name);
        }
        this._addRoute(routeOptions);
      }
      return true;
    };

    RouteMapBuilder.prototype._addRoute = function(options) {
      var klass, name, path, route;
      if (options == null) {
        options = {};
      }
      path = this.rootPath + options.path;
      name = this.rootName + Batman.helpers.camelize(options.as, true);
      delete options.as;
      delete options.path;
      klass = options.callback ? Batman.CallbackActionRoute : Batman.ControllerActionRoute;
      options.app = this.app;
      route = new klass(path, options);
      return this.routeMap.addRoute(name, route);
    };

    RouteMapBuilder.prototype._nameFromPath = function(path) {
      path = path.replace(Batman.Route.regexps.namedOrSplat, '').replace(/\/+/g, '.').replace(/(^\.)|(\.$)/g, '');
      return path;
    };

    RouteMapBuilder.prototype._nestingPath = function() {
      var nestingParam, nestingSegment;
      if (!this.parent) {
        return "";
      } else {
        nestingParam = ":" + Batman.helpers.singularize(this.baseOptions.controller) + "Id";
        nestingSegment = Batman.helpers.underscore(this.baseOptions.controller);
        return "" + (this.parent._nestingPath()) + nestingSegment + "/" + nestingParam + "/";
      }
    };

    RouteMapBuilder.prototype._nestingName = function() {
      if (!this.parent) {
        return "";
      } else {
        return this.parent._nestingName() + this.baseOptions.controller + ".";
      }
    };

    RouteMapBuilder.prototype._childBuilder = function(baseOptions) {
      if (baseOptions == null) {
        baseOptions = {};
      }
      return new Batman.RouteMapBuilder(this.app, this.routeMap, this, baseOptions);
    };

    return RouteMapBuilder;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.App = (function(_super) {
    var name, _fn, _i, _len, _ref, _this = this;

    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.classAccessor('currentParams', {
      get: function() {
        return new Batman.Hash;
      },
      'final': true
    });

    App.classAccessor('paramsManager', {
      get: function() {
        var nav, params;
        if (!(nav = this.get('navigator'))) {
          return;
        }
        params = this.get('currentParams');
        return params.replacer = new Batman.ParamsReplacer(nav, params);
      },
      'final': true
    });

    App.classAccessor('paramsPusher', {
      get: function() {
        var nav, params;
        if (!(nav = this.get('navigator'))) {
          return;
        }
        params = this.get('currentParams');
        return params.pusher = new Batman.ParamsPusher(nav, params);
      },
      'final': true
    });

    App.classAccessor('routes', function() {
      return new Batman.NamedRouteQuery(this.get('routeMap'));
    });

    App.classAccessor('routeMap', function() {
      return new Batman.RouteMap;
    });

    App.classAccessor('routeMapBuilder', function() {
      return new Batman.RouteMapBuilder(this, this.get('routeMap'));
    });

    App.classAccessor('dispatcher', function() {
      return new Batman.Dispatcher(this, this.get('routeMap'));
    });

    App.classAccessor('controllers', function() {
      return this.get('dispatcher.controllers');
    });

    App.classAccessor('_renderContext', function() {
      return Batman.RenderContext.base.descend(this);
    });

    App.requirePath = '';

    Batman.developer["do"](function() {
      var requireDeprecated;
      requireDeprecated = "Please use whatever means you'd like to load your code before calling App.run.";
      App.require = function() {
        var base, name, names, path, _i, _len, _this = this;
        path = arguments[0], names = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        Batman.developer.deprecated("App.require", requireDeprecated);
        base = this.requirePath + path;
        for (_i = 0, _len = names.length; _i < _len; _i++) {
          name = names[_i];
          this.prevent('run');
          path = base + '/' + name + '.coffee';
          new Batman.Request({
            url: path,
            type: 'html',
            success: function(response) {
              CoffeeScript["eval"](response);
              _this.allow('run');
              if (!_this.isPrevented('run')) {
                _this.fire('loaded');
              }
              if (_this.wantsToRun) {
                return _this.run();
              }
            }
          });
        }
        return this;
      };
      App.controller = function() {
        var names;
        names = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        Batman.developer.deprecated("App.controller", requireDeprecated);
        names = names.map(function(n) {
          return n + '_controller';
        });
        return this.require.apply(this, ['controllers'].concat(__slice.call(names)));
      };
      App.model = function() {
        Batman.developer.deprecated("App.model", requireDeprecated);
        return this.require.apply(this, ['models'].concat(__slice.call(arguments)));
      };
      return App.view = function() {
        Batman.developer.deprecated("App.view", requireDeprecated);
        return this.require.apply(this, ['views'].concat(__slice.call(arguments)));
      };
    });

    App.layout = void 0;

    App.shouldAllowEvent = {};

    _ref = Batman.RouteMapBuilder.BUILDER_FUNCTIONS;
    _fn = function(name) {
      return App[name] = function() {
        var _ref1;
        return (_ref1 = this.get('routeMapBuilder'))[name].apply(_ref1, arguments);
      };
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      _fn(name);
    }

    App.event('ready').oneShot = true;

    App.event('run').oneShot = true;

    App.run = function() {
      var layout, layoutClass, _this = this;
      if (Batman.currentApp) {
        if (Batman.currentApp === this) {
          return;
        }
        Batman.currentApp.stop();
      }
      if (this.hasRun) {
        return false;
      }
      if (this.isPrevented('run')) {
        this.wantsToRun = true;
        return false;
      } else {
        delete this.wantsToRun;
      }
      Batman.currentApp = this;
      Batman.App.set('current', this);
      if (this.get('dispatcher') == null) {
        this.set('dispatcher', new Batman.Dispatcher(this, this.get('routeMap')));
        this.set('controllers', this.get('dispatcher.controllers'));
      }
      if (this.get('navigator') == null) {
        this.set('navigator', Batman.Navigator.forApp(this));
        this.on('run', function() {
          Batman.navigator = _this.get('navigator');
          if (Object.keys(_this.get('dispatcher').routeMap).length > 0) {
            return Batman.navigator.start();
          }
        });
      }
      this.observe('layout', function(layout) {
        return layout != null ? layout.on('ready', function() {
          return _this.fire('ready');
        }) : void 0;
      });
      layout = this.get('layout');
      if (layout) {
        if (typeof layout === 'string') {
          layoutClass = this[Batman.helpers.camelize(layout) + 'View'];
        }
      } else {
        if (layout !== null) {
          layoutClass = Batman.View;
        }
      }
      if (layoutClass) {
        layout = this.set('layout', new layoutClass({
          context: this,
          node: document
        }));
      }
      this.hasRun = true;
      this.fire('run');
      return this;
    };

    App.event('ready').oneShot = true;

    App.event('stop').oneShot = true;

    App.stop = function() {
      var _ref1;
      if ((_ref1 = this.navigator) != null) {
        _ref1.stop();
      }
      Batman.navigator = null;
      this.hasRun = false;
      this.fire('stop');
      return this;
    };

    return App;

  }).call(this, Batman.Object);

}).call(this);

(function() {

  Batman.Association = (function() {

    Association.prototype.associationType = '';

    Association.prototype.isPolymorphic = false;

    Association.prototype.defaultOptions = {
      saveInline: true,
      autoload: true,
      nestUrl: false
    };

    function Association(model, label, options) {
      var defaultOptions, encoder, getAccessor, self;
      this.model = model;
      this.label = label;
      if (options == null) {
        options = {};
      }
      defaultOptions = {
        namespace: Batman.currentApp,
        name: Batman.helpers.camelize(Batman.helpers.singularize(this.label))
      };
      this.options = Batman.extend(defaultOptions, this.defaultOptions, options);
      if (this.options.nestUrl) {
        if (!(this.model.urlNestsUnder != null)) {
          Batman.developer.error("You must persist the the model " + this.model.constructor.name + " to use the url helpers on an association");
        }
        this.model.urlNestsUnder(Batman.helpers.underscore(this.getRelatedModel().get('resourceName')));
      }
      if (this.options.extend != null) {
        Batman.extend(this, this.options.extend);
      }
      encoder = {
        encode: this.options.saveInline ? this.encoder() : false,
        decode: this.decoder()
      };
      this.model.encode(this.label, encoder);
      self = this;
      getAccessor = function() {
        return self.getAccessor.call(this, self, this.model, this.label);
      };
      this.model.accessor(this.label, {
        get: getAccessor,
        set: model.defaultAccessor.set,
        unset: model.defaultAccessor.unset
      });
    }

    Association.prototype.getRelatedModel = function() {
      var className, relatedModel, scope;
      scope = this.options.namespace || Batman.currentApp;
      className = this.options.name;
      relatedModel = scope != null ? scope[className] : void 0;
      Batman.developer["do"](function() {
        if ((Batman.currentApp != null) && !relatedModel) {
          return Batman.developer.warn("Related model " + className + " hasn't loaded yet.");
        }
      });
      return relatedModel;
    };

    Association.prototype.getFromAttributes = function(record) {
      return record.get("attributes." + this.label);
    };

    Association.prototype.setIntoAttributes = function(record, value) {
      return record.get('attributes').set(this.label, value);
    };

    Association.prototype.inverse = function() {
      var inverse, relatedAssocs, _this = this;
      if (relatedAssocs = this.getRelatedModel()._batman.get('associations')) {
        if (this.options.inverseOf) {
          return relatedAssocs.getByLabel(this.options.inverseOf);
        }
        inverse = null;
        relatedAssocs.forEach(function(label, assoc) {
          if (assoc.getRelatedModel() === _this.model) {
            return inverse = assoc;
          }
        });
        return inverse;
      }
    };

    Association.prototype.reset = function() {
      delete this.index;
      return true;
    };

    return Association;

  })();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PluralAssociation = (function(_super) {

    __extends(PluralAssociation, _super);

    PluralAssociation.prototype.proxyClass = Batman.AssociationSet;

    PluralAssociation.prototype.isSingular = false;

    function PluralAssociation() {
      PluralAssociation.__super__.constructor.apply(this, arguments);
      this._resetSetHashes();
    }

    PluralAssociation.prototype.setForRecord = function(record) {
      var childModelSetIndex, indexValue, _this = this;
      indexValue = this.indexValueForRecord(record);
      childModelSetIndex = this.setIndex();
      Batman.Property.withoutTracking(function() {
        return _this._setsByRecord.getOrSet(record, function() {
          var existingValueSet, newSet;
          if (indexValue != null) {
            existingValueSet = _this._setsByValue.get(indexValue);
            if (existingValueSet != null) {
              return existingValueSet;
            }
          }
          newSet = _this.proxyClassInstanceForKey(indexValue);
          if (indexValue != null) {
            _this._setsByValue.set(indexValue, newSet);
          }
          return newSet;
        });
      });
      if (indexValue != null) {
        return childModelSetIndex.get(indexValue);
      } else {
        return this._setsByRecord.get(record);
      }
    };

    PluralAssociation.prototype.setForKey = Batman.Property.wrapTrackingPrevention(function(indexValue) {
      var foundSet, _this = this;
      foundSet = void 0;
      this._setsByRecord.forEach(function(record, set) {
        if (foundSet != null) {
          return;
        }
        if (_this.indexValueForRecord(record) === indexValue) {
          return foundSet = set;
        }
      });
      if (foundSet != null) {
        foundSet.foreignKeyValue = indexValue;
        return foundSet;
      }
      return this._setsByValue.getOrSet(indexValue, function() {
        return _this.proxyClassInstanceForKey(indexValue);
      });
    });

    PluralAssociation.prototype.proxyClassInstanceForKey = function(indexValue) {
      return new this.proxyClass(indexValue, this);
    };

    PluralAssociation.prototype.getAccessor = function(self, model, label) {
      var relatedRecords, setInAttributes, _this = this;
      if (!self.getRelatedModel()) {
        return;
      }
      if (setInAttributes = self.getFromAttributes(this)) {
        return setInAttributes;
      } else {
        relatedRecords = self.setForRecord(this);
        self.setIntoAttributes(this, relatedRecords);
        Batman.Property.withoutTracking(function() {
          if (self.options.autoload && !_this.isNew() && !relatedRecords.loaded) {
            return relatedRecords.load(function(error, records) {
              if (error) {
                throw error;
              }
            });
          }
        });
        return relatedRecords;
      }
    };

    PluralAssociation.prototype.parentSetIndex = function() {
      this.parentIndex || (this.parentIndex = this.model.get('loaded').indexedByUnique(this.primaryKey));
      return this.parentIndex;
    };

    PluralAssociation.prototype.setIndex = function() {
      this.index || (this.index = new Batman.AssociationSetIndex(this, this[this.indexRelatedModelOn]));
      return this.index;
    };

    PluralAssociation.prototype.indexValueForRecord = function(record) {
      return record.get(this.primaryKey);
    };

    PluralAssociation.prototype.reset = function() {
      PluralAssociation.__super__.reset.apply(this, arguments);
      return this._resetSetHashes();
    };

    PluralAssociation.prototype._resetSetHashes = function() {
      this._setsByRecord = new Batman.SimpleHash;
      return this._setsByValue = new Batman.SimpleHash;
    };

    return PluralAssociation;

  })(Batman.Association);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.HasManyAssociation = (function(_super) {

    __extends(HasManyAssociation, _super);

    HasManyAssociation.prototype.associationType = 'hasMany';

    HasManyAssociation.prototype.indexRelatedModelOn = 'foreignKey';

    function HasManyAssociation(model, label, options) {
      if (options != null ? options.as : void 0) {
        return (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor,
            result = func.apply(child, args),
            t = typeof result;
          return t == "object" || t == "function" ? result || child : child;
        })(Batman.PolymorphicHasManyAssociation, arguments, function() {});
      }
      HasManyAssociation.__super__.constructor.apply(this, arguments);
      this.primaryKey = this.options.primaryKey || "id";
      this.foreignKey = this.options.foreignKey || ("" + (Batman.helpers.underscore(model.get('resourceName'))) + "_id");
    }

    HasManyAssociation.prototype.apply = function(baseSaveError, base) {
      var relations, set, _this = this;
      if (!baseSaveError) {
        if (relations = this.getFromAttributes(base)) {
          relations.forEach(function(model) {
            return model.set(_this.foreignKey, base.get(_this.primaryKey));
          });
        }
        base.set(this.label, set = this.setForRecord(base));
        if (base.lifecycle.get('state') === 'creating') {
          return set.markAsLoaded();
        }
      }
    };

    HasManyAssociation.prototype.encoder = function() {
      var association;
      association = this;
      return function(relationSet, _, __, record) {
        var jsonArray;
        if (relationSet != null) {
          jsonArray = [];
          relationSet.forEach(function(relation) {
            var relationJSON;
            relationJSON = relation.toJSON();
            if (!association.inverse() || association.inverse().options.encodeForeignKey) {
              relationJSON[association.foreignKey] = record.get(association.primaryKey);
            }
            return jsonArray.push(relationJSON);
          });
        }
        return jsonArray;
      };
    };

    HasManyAssociation.prototype.decoder = function() {
      var association;
      association = this;
      return function(data, key, _, __, parentRecord) {
        var existingRecord, existingRelations, jsonObject, newRelations, record, relatedModel, savedRecord, _i, _len;
        if (relatedModel = association.getRelatedModel()) {
          existingRelations = association.getFromAttributes(parentRecord) || association.setForRecord(parentRecord);
          newRelations = existingRelations.filter(function(relation) {
            return relation.isNew();
          }).toArray();
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            jsonObject = data[_i];
            record = new relatedModel();
            record._withoutDirtyTracking(function() {
              return this.fromJSON(jsonObject);
            });
            existingRecord = relatedModel.get('loaded').indexedByUnique('id').get(record.get('id'));
            if (existingRecord != null) {
              existingRecord._withoutDirtyTracking(function() {
                return this.fromJSON(jsonObject);
              });
              record = existingRecord;
            } else {
              if (newRelations.length > 0) {
                savedRecord = newRelations.shift();
                savedRecord._withoutDirtyTracking(function() {
                  return this.fromJSON(jsonObject);
                });
                record = savedRecord;
              }
            }
            record = relatedModel._mapIdentity(record);
            existingRelations.add(record);
            if (association.options.inverseOf) {
              record.set(association.options.inverseOf, parentRecord);
            }
          }
          existingRelations.markAsLoaded();
        } else {
          Batman.developer.error("Can't decode model " + association.options.name + " because it hasn't been loaded yet!");
        }
        return existingRelations;
      };
    };

    return HasManyAssociation;

  })(Batman.PluralAssociation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicHasManyAssociation = (function(_super) {

    __extends(PolymorphicHasManyAssociation, _super);

    PolymorphicHasManyAssociation.prototype.proxyClass = Batman.PolymorphicAssociationSet;

    PolymorphicHasManyAssociation.prototype.isPolymorphic = true;

    function PolymorphicHasManyAssociation(model, label, options) {
      options.inverseOf = this.foreignLabel = options.as;
      delete options.as;
      options.foreignKey || (options.foreignKey = "" + this.foreignLabel + "_id");
      PolymorphicHasManyAssociation.__super__.constructor.call(this, model, label, options);
      this.foreignTypeKey = options.foreignTypeKey || ("" + this.foreignLabel + "_type");
      this.model.encode(this.foreignTypeKey);
    }

    PolymorphicHasManyAssociation.prototype.apply = function(baseSaveError, base) {
      var relations, _this = this;
      if (!baseSaveError) {
        if (relations = this.getFromAttributes(base)) {
          PolymorphicHasManyAssociation.__super__.apply.apply(this, arguments);
          relations.forEach(function(model) {
            return model.set(_this.foreignTypeKey, _this.modelType());
          });
        }
      }
      return true;
    };

    PolymorphicHasManyAssociation.prototype.proxyClassInstanceForKey = function(indexValue) {
      return new this.proxyClass(indexValue, this.modelType(), this);
    };

    PolymorphicHasManyAssociation.prototype.getRelatedModelForType = function(type) {
      var relatedModel, scope;
      scope = this.options.namespace || Batman.currentApp;
      if (type) {
        relatedModel = scope != null ? scope[type] : void 0;
        relatedModel || (relatedModel = scope != null ? scope[Batman.helpers.camelize(type)] : void 0);
      } else {
        relatedModel = this.getRelatedModel();
      }
      Batman.developer["do"](function() {
        if ((Batman.currentApp != null) && !relatedModel) {
          return Batman.developer.warn("Related model " + type + " for polymorphic association not found.");
        }
      });
      return relatedModel;
    };

    PolymorphicHasManyAssociation.prototype.modelType = function() {
      return this.model.get('resourceName');
    };

    PolymorphicHasManyAssociation.prototype.setIndex = function() {
      this.typeIndex || (this.typeIndex = new Batman.PolymorphicAssociationSetIndex(this, this.modelType(), this[this.indexRelatedModelOn]));
      return this.typeIndex;
    };

    PolymorphicHasManyAssociation.prototype.encoder = function() {
      var association;
      association = this;
      return function(relationSet, _, __, record) {
        var jsonArray;
        if (relationSet != null) {
          jsonArray = [];
          relationSet.forEach(function(relation) {
            var relationJSON;
            relationJSON = relation.toJSON();
            relationJSON[association.foreignKey] = record.get(association.primaryKey);
            relationJSON[association.foreignTypeKey] = association.modelType();
            return jsonArray.push(relationJSON);
          });
        }
        return jsonArray;
      };
    };

    PolymorphicHasManyAssociation.prototype.decoder = function() {
      var association;
      association = this;
      return function(data, key, _, __, parentRecord) {
        var existingRecord, existingRelations, jsonObject, newRelations, record, relatedModel, savedRecord, subType, type, _i, _len;
        if (relatedModel = association.getRelatedModel()) {
          existingRelations = association.getFromAttributes(parentRecord) || association.setForRecord(parentRecord);
          newRelations = existingRelations.filter(function(relation) {
            return relation.isNew();
          }).toArray();
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            jsonObject = data[_i];
            type = jsonObject[association.options.foreignTypeKey];
            subType = association.getRelatedModelForType(type);
            record = new subType();
            record._withoutDirtyTracking(function() {
              return this.fromJSON(jsonObject);
            });
            existingRecord = relatedModel.get('loaded').indexedByUnique('id').get(record.get('id'));
            if (existingRecord != null) {
              existingRecord._withoutDirtyTracking(function() {
                return this.fromJSON(jsonObject);
              });
              record = existingRecord;
            } else {
              if (newRelations.length > 0) {
                savedRecord = newRelations.shift();
                savedRecord._withoutDirtyTracking(function() {
                  return this.fromJSON(jsonObject);
                });
                record = savedRecord;
              }
            }
            record = relatedModel._mapIdentity(record);
            existingRelations.add(record);
            if (association.options.inverseOf) {
              record.set(association.options.inverseOf, parentRecord);
            }
          }
          existingRelations.markAsLoaded();
        } else {
          Batman.developer.error("Can't decode model " + association.options.name + " because it hasn't been loaded yet!");
        }
        return existingRelations;
      };
    };

    return PolymorphicHasManyAssociation;

  })(Batman.HasManyAssociation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.SingularAssociation = (function(_super) {

    __extends(SingularAssociation, _super);

    function SingularAssociation() {
      return SingularAssociation.__super__.constructor.apply(this, arguments);
    }

    SingularAssociation.prototype.isSingular = true;

    SingularAssociation.prototype.getAccessor = function(self, model, label) {
      var parent, proxy, record, recordInAttributes, _ref;
      if (recordInAttributes = self.getFromAttributes(this)) {
        return recordInAttributes;
      }
      if (self.getRelatedModel()) {
        proxy = this.associationProxy(self);
        record = false;
        parent = this;
        if ((_ref = proxy._loadSetter) == null) {
          proxy._loadSetter = proxy.once('loaded', function(child) {
            return parent._withoutDirtyTracking(function() {
              return this.set(self.label, child);
            });
          });
        }
        if (!Batman.Property.withoutTracking(function() {
          return proxy.get('loaded');
        })) {
          if (self.options.autoload) {
            Batman.Property.withoutTracking(function() {
              return proxy.load();
            });
          } else {
            record = proxy.loadFromLocal();
          }
        }
        return record || proxy;
      }
    };

    SingularAssociation.prototype.setIndex = function() {
      this.index || (this.index = new Batman.UniqueAssociationSetIndex(this, this[this.indexRelatedModelOn]));
      return this.index;
    };

    return SingularAssociation;

  })(Batman.Association);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.HasOneAssociation = (function(_super) {

    __extends(HasOneAssociation, _super);

    HasOneAssociation.prototype.associationType = 'hasOne';

    HasOneAssociation.prototype.proxyClass = Batman.HasOneProxy;

    HasOneAssociation.prototype.indexRelatedModelOn = 'foreignKey';

    function HasOneAssociation() {
      HasOneAssociation.__super__.constructor.apply(this, arguments);
      this.primaryKey = this.options.primaryKey || "id";
      this.foreignKey = this.options.foreignKey || ("" + (Batman.helpers.underscore(this.model.get('resourceName'))) + "_id");
    }

    HasOneAssociation.prototype.apply = function(baseSaveError, base) {
      var relation;
      if (relation = this.getFromAttributes(base)) {
        return relation.set(this.foreignKey, base.get(this.primaryKey));
      }
    };

    HasOneAssociation.prototype.encoder = function() {
      var association;
      association = this;
      return function(val, key, object, record) {
        var json;
        if (!association.options.saveInline) {
          return;
        }
        if (json = val.toJSON()) {
          json[association.foreignKey] = record.get(association.primaryKey);
        }
        return json;
      };
    };

    HasOneAssociation.prototype.decoder = function() {
      var association;
      association = this;
      return function(data, _, __, ___, parentRecord) {
        var record, relatedModel;
        if (!data) {
          return;
        }
        relatedModel = association.getRelatedModel();
        record = relatedModel.createFromJSON(data);
        if (association.options.inverseOf) {
          record.set(association.options.inverseOf, parentRecord);
        }
        return record;
      };
    };

    return HasOneAssociation;

  })(Batman.SingularAssociation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.BelongsToAssociation = (function(_super) {

    __extends(BelongsToAssociation, _super);

    BelongsToAssociation.prototype.associationType = 'belongsTo';

    BelongsToAssociation.prototype.proxyClass = Batman.BelongsToProxy;

    BelongsToAssociation.prototype.indexRelatedModelOn = 'primaryKey';

    BelongsToAssociation.prototype.defaultOptions = {
      saveInline: false,
      autoload: true,
      encodeForeignKey: true
    };

    function BelongsToAssociation(model, label, options) {
      if (options != null ? options.polymorphic : void 0) {
        delete options.polymorphic;
        return (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor,
            result = func.apply(child, args),
            t = typeof result;
          return t == "object" || t == "function" ? result || child : child;
        })(Batman.PolymorphicBelongsToAssociation, arguments, function() {});
      }
      BelongsToAssociation.__super__.constructor.apply(this, arguments);
      this.foreignKey = this.options.foreignKey || ("" + this.label + "_id");
      this.primaryKey = this.options.primaryKey || "id";
      if (this.options.encodeForeignKey) {
        this.model.encode(this.foreignKey);
      }
    }

    BelongsToAssociation.prototype.encoder = function() {
      return function(val) {
        return val.toJSON();
      };
    };

    BelongsToAssociation.prototype.decoder = function() {
      var association;
      association = this;
      return function(data, _, __, ___, childRecord) {
        var inverse, record, relatedModel;
        relatedModel = association.getRelatedModel();
        record = relatedModel.createFromJSON(data);
        if (association.options.inverseOf) {
          if (inverse = association.inverse()) {
            if (inverse instanceof Batman.HasManyAssociation) {
              childRecord.set(association.foreignKey, record.get(association.primaryKey));
            } else {
              record.set(inverse.label, childRecord);
            }
          }
        }
        childRecord.set(association.label, record);
        return record;
      };
    };

    BelongsToAssociation.prototype.apply = function(base) {
      var foreignValue, model;
      if (model = base.get(this.label)) {
        foreignValue = model.get(this.primaryKey);
        if (foreignValue !== void 0) {
          return base.set(this.foreignKey, foreignValue);
        }
      }
    };

    return BelongsToAssociation;

  })(Batman.SingularAssociation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PolymorphicBelongsToAssociation = (function(_super) {

    __extends(PolymorphicBelongsToAssociation, _super);

    PolymorphicBelongsToAssociation.prototype.isPolymorphic = true;

    PolymorphicBelongsToAssociation.prototype.proxyClass = Batman.PolymorphicBelongsToProxy;

    PolymorphicBelongsToAssociation.prototype.defaultOptions = Batman.mixin({}, Batman.BelongsToAssociation.prototype.defaultOptions, {
      encodeForeignTypeKey: true
    });

    function PolymorphicBelongsToAssociation() {
      PolymorphicBelongsToAssociation.__super__.constructor.apply(this, arguments);
      this.foreignTypeKey = this.options.foreignTypeKey || ("" + this.label + "_type");
      if (this.options.encodeForeignTypeKey) {
        this.model.encode(this.foreignTypeKey);
      }
      this.typeIndicies = {};
    }

    PolymorphicBelongsToAssociation.prototype.getRelatedModel = false;

    PolymorphicBelongsToAssociation.prototype.setIndex = false;

    PolymorphicBelongsToAssociation.prototype.inverse = false;

    PolymorphicBelongsToAssociation.prototype.apply = function(base) {
      var foreignTypeValue, instanceOrProxy;
      PolymorphicBelongsToAssociation.__super__.apply.apply(this, arguments);
      if (instanceOrProxy = base.get(this.label)) {
        foreignTypeValue = instanceOrProxy instanceof Batman.PolymorphicBelongsToProxy ? instanceOrProxy.get('foreignTypeValue') : instanceOrProxy.constructor.get('resourceName');
        return base.set(this.foreignTypeKey, foreignTypeValue);
      }
    };

    PolymorphicBelongsToAssociation.prototype.getAccessor = function(self, model, label) {
      var proxy, recordInAttributes;
      if (recordInAttributes = self.getFromAttributes(this)) {
        return recordInAttributes;
      }
      if (self.getRelatedModelForType(this.get(self.foreignTypeKey))) {
        proxy = this.associationProxy(self);
        Batman.Property.withoutTracking(function() {
          if (!proxy.get('loaded') && self.options.autoload) {
            return proxy.load();
          }
        });
        return proxy;
      }
    };

    PolymorphicBelongsToAssociation.prototype.url = function(recordOptions) {
      var ending, helper, id, inverse, root, type, _ref, _ref1;
      type = (_ref = recordOptions.data) != null ? _ref[this.foreignTypeKey] : void 0;
      if (type && (inverse = this.inverseForType(type))) {
        root = Batman.helpers.pluralize(type).toLowerCase();
        id = (_ref1 = recordOptions.data) != null ? _ref1[this.foreignKey] : void 0;
        helper = inverse.isSingular ? "singularize" : "pluralize";
        ending = Batman.helpers[helper](inverse.label);
        return "/" + root + "/" + id + "/" + ending;
      }
    };

    PolymorphicBelongsToAssociation.prototype.getRelatedModelForType = function(type) {
      var relatedModel, scope;
      scope = this.options.namespace || Batman.currentApp;
      if (type) {
        relatedModel = scope != null ? scope[type] : void 0;
        relatedModel || (relatedModel = scope != null ? scope[Batman.helpers.camelize(type)] : void 0);
      }
      Batman.developer["do"](function() {
        if ((Batman.currentApp != null) && !relatedModel) {
          return Batman.developer.warn("Related model " + type + " for polymorphic association not found.");
        }
      });
      return relatedModel;
    };

    PolymorphicBelongsToAssociation.prototype.setIndexForType = function(type) {
      var _base;
      (_base = this.typeIndicies)[type] || (_base[type] = new Batman.PolymorphicUniqueAssociationSetIndex(this, type, this.primaryKey));
      return this.typeIndicies[type];
    };

    PolymorphicBelongsToAssociation.prototype.inverseForType = function(type) {
      var inverse, relatedAssocs, _ref, _this = this;
      if (relatedAssocs = (_ref = this.getRelatedModelForType(type)) != null ? _ref._batman.get('associations') : void 0) {
        if (this.options.inverseOf) {
          return relatedAssocs.getByLabel(this.options.inverseOf);
        }
        inverse = null;
        relatedAssocs.forEach(function(label, assoc) {
          if (assoc.getRelatedModel() === _this.model) {
            return inverse = assoc;
          }
        });
        return inverse;
      }
    };

    PolymorphicBelongsToAssociation.prototype.decoder = function() {
      var association;
      association = this;
      return function(data, key, response, ___, childRecord) {
        var foreignTypeValue, inverse, record, relatedModel;
        foreignTypeValue = response[association.foreignTypeKey] || childRecord.get(association.foreignTypeKey);
        relatedModel = association.getRelatedModelForType(foreignTypeValue);
        record = relatedModel.createFromJSON(data);
        if (association.options.inverseOf) {
          if (inverse = association.inverseForType(foreignTypeValue)) {
            if (inverse instanceof Batman.PolymorphicHasManyAssociation) {
              childRecord.set(association.foreignKey, record.get(association.primaryKey));
              childRecord.set(association.foreignTypeKey, foreignTypeValue);
            } else {
              record.set(inverse.label, childRecord);
            }
          }
        }
        childRecord.set(association.label, record);
        return record;
      };
    };

    return PolymorphicBelongsToAssociation;

  })(Batman.BelongsToAssociation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.Validator = (function(_super) {

    __extends(Validator, _super);

    Validator.triggers = function() {
      var triggers;
      triggers = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this._triggers != null) {
        return this._triggers.concat(triggers);
      } else {
        return this._triggers = triggers;
      }
    };

    Validator.options = function() {
      var options;
      options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this._options != null) {
        return this._options.concat(options);
      } else {
        return this._options = options;
      }
    };

    Validator.matches = function(options) {
      var key, results, shouldReturn, value, _ref, _ref1;
      results = {};
      shouldReturn = false;
      for (key in options) {
        value = options[key];
        if (~ ((_ref = this._options) != null ? _ref.indexOf(key) : void 0)) {
          results[key] = value;
        }
        if (~ ((_ref1 = this._triggers) != null ? _ref1.indexOf(key) : void 0)) {
          results[key] = value;
          shouldReturn = true;
        }
      }
      if (shouldReturn) {
        return results;
      }
    };

    function Validator() {
      var mixins, options;
      options = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this.options = options;
      Validator.__super__.constructor.apply(this, mixins);
    }

    Validator.prototype.validate = function(record) {
      return Batman.developer.error("You must override validate in Batman.Validator subclasses.");
    };

    Validator.prototype.format = function(key, messageKey, interpolations) {
      return Batman.t("errors.messages." + messageKey, interpolations);
    };

    Validator.prototype.handleBlank = function(value) {
      if (this.options.allowBlank && !Batman.PresenceValidator.prototype.isPresent(value)) {
        return true;
      }
    };

    return Validator;

  })(Batman.Object);

}).call(this);

(function() {

  Batman.Validators = [];

  Batman.extend(Batman.translate.messages, {
    errors: {
      format: "%{attribute} %{message}",
      messages: {
        too_short: "must be at least %{count} characters",
        too_long: "must be less than %{count} characters",
        wrong_length: "must be %{count} characters",
        blank: "can't be blank",
        not_numeric: "must be a number",
        greater_than: "must be greater than %{count}",
        greater_than_or_equal_to: "must be greater than or equal to %{count}",
        equal_to: "must be equal to %{count}",
        less_than: "must be less than %{count}",
        less_than_or_equal_to: "must be less than or equal to %{count}",
        not_matching: "is not valid",
        invalid_association: "is not valid"
      }
    }
  });

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.RegExpValidator = (function(_super) {

    __extends(RegExpValidator, _super);

    RegExpValidator.triggers('regexp', 'pattern');

    RegExpValidator.options('allowBlank');

    function RegExpValidator(options) {
      var _ref;
      this.regexp = (_ref = options.regexp) != null ? _ref : options.pattern;
      RegExpValidator.__super__.constructor.apply(this, arguments);
    }

    RegExpValidator.prototype.validateEach = function(errors, record, key, callback) {
      var value;
      value = record.get(key);
      if (this.handleBlank(value)) {
        return callback();
      }
      if (!(value != null) || value === '' || !this.regexp.test(value)) {
        errors.add(key, this.format(key, 'not_matching'));
      }
      return callback();
    };

    return RegExpValidator;

  })(Batman.Validator);

  Batman.Validators.push(Batman.RegExpValidator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.PresenceValidator = (function(_super) {

    __extends(PresenceValidator, _super);

    function PresenceValidator() {
      return PresenceValidator.__super__.constructor.apply(this, arguments);
    }

    PresenceValidator.triggers('presence');

    PresenceValidator.prototype.validateEach = function(errors, record, key, callback) {
      var value;
      value = record.get(key);
      if (!this.isPresent(value)) {
        errors.add(key, this.format(key, 'blank'));
      }
      return callback();
    };

    PresenceValidator.prototype.isPresent = function(value) {
      return (value != null) && value !== '';
    };

    return PresenceValidator;

  })(Batman.Validator);

  Batman.Validators.push(Batman.PresenceValidator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.NumericValidator = (function(_super) {

    __extends(NumericValidator, _super);

    function NumericValidator() {
      return NumericValidator.__super__.constructor.apply(this, arguments);
    }

    NumericValidator.triggers('numeric', 'greaterThan', 'greaterThanOrEqualTo', 'equalTo', 'lessThan', 'lessThanOrEqualTo');

    NumericValidator.options('allowBlank');

    NumericValidator.prototype.validateEach = function(errors, record, key, callback) {
      var options, value;
      options = this.options;
      value = record.get(key);
      if (this.handleBlank(value)) {
        return callback();
      }
      if (!(value != null) || !(this.isNumeric(value) || this.canCoerceToNumeric(value))) {
        errors.add(key, this.format(key, 'not_numeric'));
      } else {
        if (options.greaterThan && value <= options.greaterThan) {
          errors.add(key, this.format(key, 'greater_than', {
            count: options.greaterThan
          }));
        }
        if (options.greaterThanOrEqualTo && value < options.greaterThanOrEqualTo) {
          errors.add(key, this.format(key, 'greater_than_or_equal_to', {
            count: options.greaterThanOrEqualTo
          }));
        }
        if (options.equalTo && value !== options.equalTo) {
          errors.add(key, this.format(key, 'equal_to', {
            count: options.equalTo
          }));
        }
        if (options.lessThan && value >= options.lessThan) {
          errors.add(key, this.format(key, 'less_than', {
            count: options.lessThan
          }));
        }
        if (options.lessThanOrEqualTo && value > options.lessThanOrEqualTo) {
          errors.add(key, this.format(key, 'less_than_or_equal_to', {
            count: options.lessThanOrEqualTo
          }));
        }
      }
      return callback();
    };

    NumericValidator.prototype.isNumeric = function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };

    NumericValidator.prototype.canCoerceToNumeric = function(value) {
      return (value - 0) == value && value.length > 0;
    };

    return NumericValidator;

  })(Batman.Validator);

  Batman.Validators.push(Batman.NumericValidator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.LengthValidator = (function(_super) {

    __extends(LengthValidator, _super);

    LengthValidator.triggers('minLength', 'maxLength', 'length', 'lengthWithin', 'lengthIn');

    LengthValidator.options('allowBlank');

    function LengthValidator(options) {
      var range;
      if (range = options.lengthIn || options.lengthWithin) {
        options.minLength = range[0];
        options.maxLength = range[1] || -1;
        delete options.lengthWithin;
        delete options.lengthIn;
      }
      LengthValidator.__super__.constructor.apply(this, arguments);
    }

    LengthValidator.prototype.validateEach = function(errors, record, key, callback) {
      var options, value;
      options = this.options;
      value = record.get(key);
      if (value !== '' && this.handleBlank(value)) {
        return callback();
      }
      if (value == null) {
        value = [];
      }
      if (options.minLength && value.length < options.minLength) {
        errors.add(key, this.format(key, 'too_short', {
          count: options.minLength
        }));
      }
      if (options.maxLength && value.length > options.maxLength) {
        errors.add(key, this.format(key, 'too_long', {
          count: options.maxLength
        }));
      }
      if (options.length && value.length !== options.length) {
        errors.add(key, this.format(key, 'wrong_length', {
          count: options.length
        }));
      }
      return callback();
    };

    return LengthValidator;

  })(Batman.Validator);

  Batman.Validators.push(Batman.LengthValidator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.AssociatedValidator = (function(_super) {

    __extends(AssociatedValidator, _super);

    function AssociatedValidator() {
      return AssociatedValidator.__super__.constructor.apply(this, arguments);
    }

    AssociatedValidator.triggers('associated');

    AssociatedValidator.prototype.validateEach = function(errors, record, key, callback) {
      var childFinished, count, value, _this = this;
      value = record.get(key);
      if (value != null) {
        if (value instanceof Batman.AssociationProxy) {
          value = typeof value.get === "function" ? value.get('target') : void 0;
        }
        count = 1;
        childFinished = function(err, childErrors) {
          if (childErrors.length > 0) {
            errors.add(key, _this.format(key, 'invalid_association'));
          }
          if (--count === 0) {
            return callback();
          }
        };
        if ((value != null ? value.forEach : void 0) != null) {
          value.forEach(function(record) {
            count += 1;
            return record.validate(childFinished);
          });
        } else if ((value != null ? value.validate : void 0) != null) {
          count += 1;
          value.validate(childFinished);
        }
        return childFinished(null, []);
      } else {
        return callback();
      }
    };

    return AssociatedValidator;

  })(Batman.Validator);

  Batman.Validators.push(Batman.AssociatedValidator);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ControllerActionFrame = (function(_super) {

    __extends(ControllerActionFrame, _super);

    ControllerActionFrame.prototype.operationOccurred = false;

    ControllerActionFrame.prototype.remainingOperations = 0;

    ControllerActionFrame.prototype.event('complete').oneShot = true;

    function ControllerActionFrame(options, onComplete) {
      ControllerActionFrame.__super__.constructor.call(this, options);
      this.once('complete', onComplete);
    }

    ControllerActionFrame.prototype.startOperation = function(options) {
      if (options == null) {
        options = {};
      }
      if (!options.internal) {
        this.operationOccurred = true;
      }
      this._changeOperationsCounter(1);
      return true;
    };

    ControllerActionFrame.prototype.finishOperation = function() {
      this._changeOperationsCounter(-1);
      return true;
    };

    ControllerActionFrame.prototype.startAndFinishOperation = function(options) {
      this.startOperation(options);
      this.finishOperation(options);
      return true;
    };

    ControllerActionFrame.prototype._changeOperationsCounter = function(delta) {
      var _ref;
      this.remainingOperations += delta;
      if (this.remainingOperations === 0) {
        this.fire('complete');
      }
      if ((_ref = this.parentFrame) != null) {
        _ref._changeOperationsCounter(delta);
      }
    };

    return ControllerActionFrame;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.DOM.InsertionBinding = (function(_super) {

    __extends(InsertionBinding, _super);

    InsertionBinding.prototype.isTwoWay = false;

    InsertionBinding.prototype.bindImmediately = false;

    InsertionBinding.prototype.onlyObserve = Batman.BindingDefinitionOnlyObserve.Data;

    function InsertionBinding(definition) {
      var _this = this;
      this.invert = definition.invert;
      this.placeholderNode = document.createComment("detached node " + (this.get('_batmanID')));
      InsertionBinding.__super__.constructor.apply(this, arguments);
      Batman.DOM.onParseExit(this.node, function() {
        _this.bind();
        if (_this.placeholderNode != null) {
          return Batman.DOM.trackBinding(_this, _this.placeholderNode);
        }
      });
    }

    InsertionBinding.prototype.dataChange = function(value) {
      var parentNode;
      parentNode = this.placeholderNode.parentNode || this.node.parentNode;
      if ( !! value === !this.invert) {
        if (!(this.node.parentNode != null)) {
          Batman.DOM.insertBefore(parentNode, this.node, this.placeholderNode);
          return parentNode.removeChild(this.placeholderNode);
        }
      } else {
        if (this.node.parentNode != null) {
          parentNode.insertBefore(this.placeholderNode, this.node);
          return Batman.DOM.removeNode(this.node);
        }
      }
    };

    InsertionBinding.prototype.die = function() {
      var filteredValue, node, placeholderNode;
      if (this.dead) {
        return;
      }
      node = this.node, placeholderNode = this.placeholderNode;
      filteredValue = this.get('filteredValue');
      InsertionBinding.__super__.die.apply(this, arguments);
      if ( !! filteredValue === !this.invert) {
        return Batman.DOM.destroyNode(placeholderNode);
      } else {
        return Batman.DOM.destroyNode(node);
      }
    };

    return InsertionBinding;

  })(Batman.DOM.AbstractBinding);

}).call(this);

(function() {
  var isEmptyDataObject;

  isEmptyDataObject = function(obj) {
    var name;
    for (name in obj) {
      return false;
    }
    return true;
  };

  Batman.extend(Batman, {
    cache: {},
    uuid: 0,
    expando: "batman" + Math.random().toString().replace(/\D/g, ''),
    canDeleteExpando: (function() {
      var div;
      try {
        div = document.createElement('div');
        return delete div.test;
      } catch (e) {
        return Batman.canDeleteExpando = false;
      }
    })(),
    noData: {
      "embed": true,
      "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      "applet": true
    },
    hasData: function(elem) {
      elem = (elem.nodeType ? Batman.cache[elem[Batman.expando]] : elem[Batman.expando]);
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function(elem, name, data, pvt) {
      var cache, getByName, id, internalKey, ret, thisCache;
      if (!Batman.acceptData(elem)) {
        return;
      }
      internalKey = Batman.expando;
      getByName = typeof name === "string";
      cache = Batman.cache;
      id = elem[Batman.expando];
      if ((!id || (pvt && id && (cache[id] && !cache[id][internalKey]))) && getByName && data === void 0) {
        return;
      }
      if (!id) {
        if (elem.nodeType !== 3) {
          elem[Batman.expando] = id = ++Batman.uuid;
        } else {
          id = Batman.expando;
        }
      }
      if (!cache[id]) {
        cache[id] = {};
      }
      if (typeof name === "object" || typeof name === "function") {
        if (pvt) {
          cache[id][internalKey] = Batman.extend(cache[id][internalKey], name);
        } else {
          cache[id] = Batman.extend(cache[id], name);
        }
      }
      thisCache = cache[id];
      if (pvt) {
        thisCache[internalKey] || (thisCache[internalKey] = {});
        thisCache = thisCache[internalKey];
      }
      if (data !== void 0) {
        thisCache[name] = data;
      }
      if (getByName) {
        ret = thisCache[name];
      } else {
        ret = thisCache;
      }
      return ret;
    },
    removeData: function(elem, name, pvt) {
      var cache, id, internalCache, internalKey, isNode, thisCache;
      if (!Batman.acceptData(elem)) {
        return;
      }
      internalKey = Batman.expando;
      isNode = elem.nodeType;
      cache = Batman.cache;
      id = elem[Batman.expando];
      if (!cache[id]) {
        return;
      }
      if (name) {
        thisCache = pvt ? cache[id][internalKey] : cache[id];
        if (thisCache) {
          delete thisCache[name];
          if (!isEmptyDataObject(thisCache)) {
            return;
          }
        }
      }
      if (pvt) {
        delete cache[id][internalKey];
        if (!isEmptyDataObject(cache[id])) {
          return;
        }
      }
      internalCache = cache[id][internalKey];
      if (Batman.canDeleteExpando || !cache.setInterval) {
        delete cache[id];
      } else {
        cache[id] = null;
      }
      if (internalCache) {
        cache[id] = {};
        return cache[id][internalKey] = internalCache;
      } else {
        if (Batman.canDeleteExpando) {
          return delete elem[Batman.expando];
        } else if (elem.removeAttribute) {
          return elem.removeAttribute(Batman.expando);
        } else {
          return elem[Batman.expando] = null;
        }
      }
    },
    _data: function(elem, name, data) {
      return Batman.data(elem, name, data, true);
    },
    acceptData: function(elem) {
      var match;
      if (elem.nodeName) {
        match = Batman.noData[elem.nodeName.toLowerCase()];
        if (match) {
          return !(match === true || elem.getAttribute("classid") !== match);
        }
      }
      return true;
    }
  });

}).call(this);

(function() {
  var buntUndefined, defaultAndOr, __slice = [].slice;

  buntUndefined = function(f) {
    return function(value) {
      if (value == null) {
        return void 0;
      } else {
        return f.apply(this, arguments);
      }
    };
  };

  defaultAndOr = function(lhs, rhs) {
    return lhs || rhs;
  };

  Batman.Filters = {
    raw: buntUndefined(function(value, binding) {
      binding.escapeValue = false;
      return value;
    }),
    get: buntUndefined(function(value, key) {
      if (value.get != null) {
        return value.get(key);
      } else {
        return value[key];
      }
    }),
    equals: buntUndefined(function(lhs, rhs, binding) {
      return lhs === rhs;
    }),
    and: function(lhs, rhs) {
      return lhs && rhs;
    },
    or: function(lhs, rhs, binding) {
      return lhs || rhs;
    },
    not: function(value, binding) {
      return !value;
    },
    trim: buntUndefined(function(value, binding) {
      return value.trim();
    }),
    matches: buntUndefined(function(value, searchFor) {
      return value.indexOf(searchFor) !== -1;
    }),
    truncate: buntUndefined(function(value, length, end, binding) {
      if (end == null) {
        end = "...";
      }
      if (!binding) {
        binding = end;
        end = "...";
      }
      if (value.length > length) {
        value = value.substr(0, length - end.length) + end;
      }
      return value;
    }),
    "default": function(value, defaultValue, binding) {
      if ((value != null) && value !== '') {
        return value;
      } else {
        return defaultValue;
      }
    },
    prepend: function(value, string, binding) {
      return (string != null ? string : '') + (value != null ? value : '');
    },
    append: function(value, string, binding) {
      return (value != null ? value : '') + (string != null ? string : '');
    },
    replace: buntUndefined(function(value, searchFor, replaceWith, flags, binding) {
      if (!binding) {
        binding = flags;
        flags = void 0;
      }
      if (flags === void 0) {
        return value.replace(searchFor, replaceWith);
      } else {
        return value.replace(searchFor, replaceWith, flags);
      }
    }),
    downcase: buntUndefined(function(value) {
      return value.toLowerCase();
    }),
    upcase: buntUndefined(function(value) {
      return value.toUpperCase();
    }),
    pluralize: buntUndefined(function(string, count, includeCount, binding) {
      if (!binding) {
        binding = includeCount;
        includeCount = true;
        if (!binding) {
          binding = count;
          count = void 0;
        }
      }
      if (count != null) {
        return Batman.helpers.pluralize(count, string, void 0, includeCount);
      } else {
        return Batman.helpers.pluralize(string);
      }
    }),
    humanize: buntUndefined(function(string, binding) {
      return Batman.helpers.humanize(string);
    }),
    join: buntUndefined(function(value, withWhat, binding) {
      if (withWhat == null) {
        withWhat = '';
      }
      if (!binding) {
        binding = withWhat;
        withWhat = '';
      }
      return value.join(withWhat);
    }),
    sort: buntUndefined(function(value) {
      return value.sort();
    }),
    map: buntUndefined(function(value, key) {
      return value.map(function(x) {
        return Batman.get(x, key);
      });
    }),
    has: function(set, item) {
      if (set == null) {
        return false;
      }
      return Batman.contains(set, item);
    },
    first: buntUndefined(function(value) {
      return value[0];
    }),
    meta: buntUndefined(function(value, keypath) {
      Batman.developer.assert(value.meta, "Error, value doesn't have a meta to filter on!");
      return value.meta.get(keypath);
    }),
    interpolate: function(string, interpolationKeypaths, binding) {
      var k, v, values;
      if (!binding) {
        binding = interpolationKeypaths;
        interpolationKeypaths = void 0;
      }
      if (!string) {
        return;
      }
      values = {};
      for (k in interpolationKeypaths) {
        v = interpolationKeypaths[k];
        values[k] = this.get(v);
        if (!(values[k] != null)) {
          Batman.developer.warn("Warning! Undefined interpolation key " + k + " for interpolation", string);
          values[k] = '';
        }
      }
      return Batman.helpers.interpolate(string, values);
    },
    withArguments: function() {
      var binding, block, curryArgs, _i;
      block = arguments[0], curryArgs = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), binding = arguments[_i++];
      if (!block) {
        return;
      }
      return function() {
        var regularArgs;
        regularArgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return block.call.apply(block, [this].concat(__slice.call(curryArgs), __slice.call(regularArgs)));
      };
    },
    routeToAction: buntUndefined(function(model, action) {
      var params;
      params = Batman.Dispatcher.paramsFromArgument(model);
      params.action = action;
      return params;
    }),
    escape: buntUndefined(Batman.escapeHTML)
  };

  (function() {
    var k, _i, _len, _ref, _results;
    _ref = ['capitalize', 'singularize', 'underscore', 'camelize'];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      _results.push(Batman.Filters[k] = buntUndefined(Batman.helpers[k]));
    }
    return _results;
  })();

  Batman.developer.addFilters();

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.RenderContext = (function() {
    var ContextProxy;

    RenderContext.deProxy = function(object) {
      if ((object != null) && object.isContextProxy) {
        return object.get('proxiedObject');
      } else {
        return object;
      }
    };

    RenderContext.root = function() {
      var root;
      if (Batman.currentApp != null) {
        root = Batman.currentApp.get('_renderContext');
      }
      return root != null ? root : root = this.base;
    };

    RenderContext.prototype.windowWrapper = {
      window: Batman.container
    };

    function RenderContext(object, parent) {
      this.object = object;
      this.parent = parent;
    }

    RenderContext.prototype.findKey = function(key) {
      var base, currentNode, val;
      base = key.split('.')[0].split('|')[0].trim();
      currentNode = this;
      while (currentNode) {
        val = Batman.get(currentNode.object, base);
        if (typeof val !== 'undefined') {
          val = Batman.get(currentNode.object, key);
          return [val, currentNode.object].map(this.constructor.deProxy);
        }
        currentNode = currentNode.parent;
      }
      return [Batman.get(this.windowWrapper, key), this.windowWrapper];
    };

    RenderContext.prototype.get = function(key) {
      return this.findKey(key)[0];
    };

    RenderContext.prototype.contextForKey = function(key) {
      return this.findKey(key)[1];
    };

    RenderContext.prototype.descend = function(object, scopedKey) {
      var oldObject;
      if (scopedKey) {
        oldObject = object;
        object = new Batman.Object();
        object[scopedKey] = oldObject;
      }
      return new this.constructor(object, this);
    };

    RenderContext.prototype.descendWithDefinition = function(definition) {
      var proxy;
      proxy = new ContextProxy(definition);
      return this.descend(proxy, definition.attr);
    };

    RenderContext.prototype.chain = function() {
      var parent, x;
      x = [];
      parent = this;
      while (parent) {
        x.push(parent.object);
        parent = parent.parent;
      }
      return x;
    };

    RenderContext.ContextProxy = ContextProxy = (function(_super) {

      __extends(ContextProxy, _super);

      ContextProxy.prototype.isContextProxy = true;

      ContextProxy.accessor('proxiedObject', function() {
        return this.binding.get('filteredValue');
      });

      ContextProxy.accessor({
        get: function(key) {
          return this.get("proxiedObject." + key);
        },
        set: function(key, value) {
          return this.set("proxiedObject." + key, value);
        },
        unset: function(key) {
          return this.unset("proxiedObject." + key);
        }
      });

      function ContextProxy(definition) {
        this.binding = new Batman.DOM.AbstractBinding(definition);
      }

      return ContextProxy;

    })(Batman.Object);

    return RenderContext;

  }).call(this);

  Batman.RenderContext.base = new Batman.RenderContext(Batman.RenderContext.prototype.windowWrapper);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Batman.ViewStore = (function(_super) {

    __extends(ViewStore, _super);

    function ViewStore() {
      ViewStore.__super__.constructor.apply(this, arguments);
      this._viewContents = {};
      this._requestedPaths = new Batman.SimpleSet;
    }

    ViewStore.prototype.propertyClass = Batman.Property;

    ViewStore.prototype.fetchView = function(path) {
      var _this = this;
      return new Batman.Request({
        url: Batman.Navigator.normalizePath(Batman.config.viewPrefix, "" + path + ".html"),
        type: 'html',
        success: function(response) {
          return _this.set(path, response);
        },
        error: function(response) {
          throw new Error("Could not load view from " + path);
        }
      });
    };

    ViewStore.accessor({
      'final': true,
      get: function(path) {
        var contents;
        if (path.charAt(0) !== '/') {
          return this.get("/" + path);
        }
        if (this._viewContents[path]) {
          return this._viewContents[path];
        }
        if (this._requestedPaths.has(path)) {
          return;
        }
        if (contents = this._sourceFromDOM(path)) {
          return contents;
        }
        if (Batman.config.fetchRemoteViews) {
          this.fetchView(path);
        } else {
          throw new Error("Couldn't find view source for \'" + path + "\'!");
        }
      },
      set: function(path, content) {
        if (path.charAt(0) !== '/') {
          return this.set("/" + path, content);
        }
        this._requestedPaths.add(path);
        return this._viewContents[path] = content;
      }
    });

    ViewStore.prototype.prefetch = function(path) {
      this.get(path);
      return true;
    };

    ViewStore.prototype._sourceFromDOM = function(path) {
      var node, relativePath;
      relativePath = path.slice(1);
      if (node = Batman.DOM.querySelector(document, "[data-defineview*='" + relativePath + "']")) {
        Batman.setImmediate(function() {
          var _ref;
          return (_ref = node.parentNode) != null ? _ref.removeChild(node) : void 0;
        });
        return Batman.DOM.defineView(path, node);
      }
    };

    return ViewStore;

  })(Batman.Object);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.View = (function(_super) {

    __extends(View, _super);

    View.YieldStorage = (function(_super1) {

      __extends(YieldStorage, _super1);

      function YieldStorage() {
        return YieldStorage.__super__.constructor.apply(this, arguments);
      }

      YieldStorage.wrapAccessor(function(core) {
        return {
          get: function(key) {
            var val;
            val = core.get.call(this, key);
            if (!(val != null)) {
              val = this.set(key, []);
            }
            return val;
          }
        };
      });

      return YieldStorage;

    })(Batman.Hash);

    View.store = new Batman.ViewStore();

    View.option = function() {
      var keys;
      keys = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.accessor.apply(this, __slice.call(keys).concat([{
        get: function(key) {
          var _ref;
          return (_ref = this.get("argumentBindings." + key)) != null ? _ref.get('filteredValue') : void 0;
        },
        set: function(key, value) {
          var _ref;
          return (_ref = this.get("argumentBindings." + key)) != null ? _ref.set('filteredValue', value) : void 0;
        },
        unset: function(key) {
          var _ref;
          return (_ref = this.get("argumentBindings." + key)) != null ? _ref.unset('filteredValue') : void 0;
        }
      }]));
    };

    View.prototype.isView = true;

    View.prototype.cache = true;

    View.prototype._rendered = false;

    View.prototype.node = null;

    View.prototype.event('ready').oneShot = true;

    View.accessor('argumentBindings', function() {
      var _this = this;
      return new Batman.TerminalAccessible(function(key) {
        var bindingKey, context, definition, keyPath, node, _ref;
        if (!((node = _this.get('node')) && (context = _this.get('context')))) {
          return;
        }
        keyPath = node.getAttribute(("data-view-" + key).toLowerCase());
        if (keyPath == null) {
          return;
        }
        bindingKey = "_argumentBinding" + key;
        if ((_ref = _this[bindingKey]) != null) {
          _ref.die();
        }
        definition = new Batman.DOM.ReaderBindingDefinition(node, keyPath, context);
        return _this[bindingKey] = new Batman.DOM.ViewArgumentBinding(definition);
      });
    });

    View.accessor('html', {
      get: function() {
        var source;
        if (this.html && this.html.length > 0) {
          return this.html;
        }
        if (!(source = this.get('source'))) {
          return;
        }
        source = Batman.Navigator.normalizePath(source);
        return this.html = this.constructor.store.get(source);
      },
      set: function(_, html) {
        return this.html = html;
      }
    });

    View.accessor('node', {
      get: function() {
        var html;
        if (this.node == null) {
          html = this.get('html');
          if (!(html && html.length > 0)) {
            return;
          }
          this.node = document.createElement('div');
          this._setNodeOwner(this.node);
          Batman.DOM.setInnerHTML(this.node, html);
        }
        return this.node;
      },
      set: function(_, node) {
        var updateHTML, _this = this;
        this.node = node;
        this._setNodeOwner(node);
        updateHTML = function(html) {
          if (html != null) {
            Batman.DOM.setInnerHTML(_this.node, html);
            return _this.forget('html', updateHTML);
          }
        };
        this.observeAndFire('html', updateHTML);
        return node;
      }
    });

    View.accessor('yields', function() {
      return new this.constructor.YieldStorage;
    });

    View.accessor('fetched?', function() {
      return this.get('source') != null;
    });

    View.accessor('readyToRender', function() {
      var _ref;
      return this.get('node') && (this.get('fetched?') ? ((_ref = this.get('html')) != null ? _ref.length : void 0) > 0 : true);
    });

    function View(options) {
      var context, _this = this;
      if (options == null) {
        options = {};
      }
      context = options.context;
      if (context) {
        if (!(context instanceof Batman.RenderContext)) {
          context = Batman.RenderContext.root().descend(context);
        }
      } else {
        context = Batman.RenderContext.root();
      }
      options.context = context.descend(this);
      View.__super__.constructor.call(this, options);
      Batman.Property.withoutTracking(function() {
        return _this.observeAndFire('readyToRender', function(ready) {
          if (ready) {
            return _this.render();
          }
        });
      });
    }

    View.prototype.render = function() {
      var node, _this = this;
      if (this._rendered) {
        return;
      }
      this._rendered = true;
      this._renderer = new Batman.Renderer(node = this.get('node'), this.get('context'), this);
      return this._renderer.once('rendered', function() {
        return _this.fire('ready', node);
      });
    };

    View.prototype.isInDOM = function() {
      var node;
      if ((node = this.get('node'))) {
        return (node.parentNode != null) || this.get('yields').some(function(name, nodes) {
          var _i, _len;
          for (_i = 0, _len = nodes.length; _i < _len; _i++) {
            node = nodes[_i].node;
            if (node.parentNode != null) {
              return true;
            }
          }
          return false;
        });
      } else {
        return false;
      }
    };

    View.prototype.die = function() {
      var _ref;
      this.fire('destroy', this.node);
      this.forget();
      if ((_ref = this._batman.properties) != null) {
        _ref.forEach(function(key, property) {
          return property.die();
        });
      }
      return this.get('yields').forEach(function(name, actions) {
        var node, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = actions.length; _i < _len; _i++) {
          node = actions[_i].node;
          _results.push(Batman.DOM.didDestroyNode(node));
        }
        return _results;
      });
    };

    View.prototype.applyYields = function() {
      return this.get('yields').forEach(function(name, nodes) {
        var action, node, yieldObject, _i, _len, _ref, _results;
        yieldObject = Batman.DOM.Yield.withName(name);
        _results = [];
        for (_i = 0, _len = nodes.length; _i < _len; _i++) {
          _ref = nodes[_i], node = _ref.node, action = _ref.action;
          _results.push(yieldObject[action](node));
        }
        return _results;
      });
    };

    View.prototype.retractYields = function() {
      return this.get('yields').forEach(function(name, nodes) {
        var node, _i, _len, _ref, _results;
        _results = [];
        for (_i = 0, _len = nodes.length; _i < _len; _i++) {
          node = nodes[_i].node;
          _results.push((_ref = node.parentNode) != null ? _ref.removeChild(node) : void 0);
        }
        return _results;
      });
    };

    View.prototype.pushYieldAction = function(key, action, node) {
      this._setNodeYielder(node);
      return this.get("yields").get(key).push({
        node: node,
        action: action
      });
    };

    View.prototype._setNodeOwner = function(node) {
      return Batman._data(node, 'view', this);
    };

    View.prototype._setNodeYielder = function(node) {
      return Batman._data(node, 'yielder', this);
    };

    View.prototype.on('ready', function() {
      return typeof this.ready === "function" ? this.ready.apply(this, arguments) : void 0;
    });

    View.prototype.on('appear', function() {
      return typeof this.viewDidAppear === "function" ? this.viewDidAppear.apply(this, arguments) : void 0;
    });

    View.prototype.on('disappear', function() {
      return typeof this.viewDidDisappear === "function" ? this.viewDidDisappear.apply(this, arguments) : void 0;
    });

    View.prototype.on('beforeAppear', function() {
      return typeof this.viewWillAppear === "function" ? this.viewWillAppear.apply(this, arguments) : void 0;
    });

    View.prototype.on('beforeDisappear', function() {
      return typeof this.viewWillDisappear === "function" ? this.viewWillDisappear.apply(this, arguments) : void 0;
    });

    return View;

  }).call(this, Batman.Object);

}).call(this);

(function() {
  var Yield, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __slice = [].slice;

  Batman.DOM.Yield = Yield = (function(_super) {

    __extends(Yield, _super);

    Yield.yields = {};

    Yield.queued = function(fn) {
      return function() {
        var args, handler, _this = this;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (this.containerNode != null) {
          return fn.apply(this, args);
        } else {
          return handler = this.observe('containerNode', function() {
            var result;
            result = fn.apply(_this, args);
            _this.forget('containerNode', handler);
            return result;
          });
        }
      };
    };

    Yield.reset = function() {
      return this.yields = {};
    };

    Yield.withName = function(name) {
      var _base;
      (_base = this.yields)[name] || (_base[name] = new this({
        name: name
      }));
      return this.yields[name];
    };

    Yield.forEach = function(f) {
      var name, yieldObject, _ref;
      _ref = this.yields;
      for (name in _ref) {
        yieldObject = _ref[name];
        f(yieldObject);
      }
    };

    Yield.clearAll = function() {
      return this.forEach(function(yieldObject) {
        return yieldObject.clear();
      });
    };

    Yield.cycleAll = function() {
      return this.forEach(function(yieldObject) {
        return yieldObject.cycle();
      });
    };

    Yield.clearAllStale = function() {
      return this.forEach(function(yieldObject) {
        return yieldObject.clearStale();
      });
    };

    function Yield() {
      this.cycle();
    }

    Yield.prototype.cycle = function() {
      return this.currentVersionNodes = [];
    };

    Yield.prototype.clear = Yield.queued(function() {
      var child, _i, _len, _ref, _results;
      this.cycle();
      _ref = (function() {
        var _j, _len, _ref, _results1;
        _ref = this.containerNode.childNodes;
        _results1 = [];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
          child = _ref[_j];
          _results1.push(child);
        }
        return _results1;
      }).call(this);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(Batman.DOM.removeOrDestroyNode(child));
      }
      return _results;
    });

    Yield.prototype.clearStale = Yield.queued(function() {
      var child, _i, _len, _ref, _results;
      _ref = (function() {
        var _j, _len, _ref, _results1;
        _ref = this.containerNode.childNodes;
        _results1 = [];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
          child = _ref[_j];
          _results1.push(child);
        }
        return _results1;
      }).call(this);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        if (!~this.currentVersionNodes.indexOf(child)) {
          _results.push(Batman.DOM.removeOrDestroyNode(child));
        }
      }
      return _results;
    });

    Yield.prototype.append = Yield.queued(function(node) {
      this.currentVersionNodes.push(node);
      return Batman.DOM.appendChild(this.containerNode, node, true);
    });

    Yield.prototype.replace = Yield.queued(function(node) {
      this.clear();
      return this.append(node);
    });

    return Yield;

  })(Batman.Object);

}).call(this);

(function() {



}).call(this);
(function() {

  Batman.extend(Batman.DOM, {
    querySelectorAll: function(node, selector) {
      return jQuery(selector, node);
    },
    querySelector: function(node, selector) {
      return jQuery(selector, node)[0];
    },
    setInnerHTML: function(node, html) {
      var child, childNodes, result, _i, _j, _len, _len1;
      childNodes = (function() {
        var _i, _len, _ref, _results;
        _ref = node.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          _results.push(child);
        }
        return _results;
      })();
      for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
        child = childNodes[_i];
        Batman.DOM.willRemoveNode(child);
      }
      result = jQuery(node).html(html);
      for (_j = 0, _len1 = childNodes.length; _j < _len1; _j++) {
        child = childNodes[_j];
        Batman.DOM.didRemoveNode(child);
      }
      return result;
    },
    removeNode: function(node) {
      var _ref;
      Batman.DOM.willRemoveNode(node);
      if ((_ref = node.parentNode) != null) {
        _ref.removeChild(node);
      }
      return Batman.DOM.didRemoveNode(node);
    },
    destroyNode: function(node) {
      Batman.DOM.willDestroyNode(node);
      Batman.DOM.willRemoveNode(node);
      jQuery(node).remove();
      Batman.DOM.didRemoveNode(node);
      return Batman.DOM.didDestroyNode(node);
    },
    appendChild: function(parent, child) {
      Batman.DOM.willInsertNode(child);
      jQuery(parent).append(child);
      return Batman.DOM.didInsertNode(child);
    },
    innerText: function(node) {
      return jQuery(node).text();
    }
  });

  Batman.Request.prototype._parseResponseHeaders = function(xhr) {
    var headers;
    return headers = xhr.getAllResponseHeaders().split('\n').reduce(function(acc, header) {
      var key, matches, value;
      if (matches = header.match(/([^:]*):\s*(.*)/)) {
        key = matches[1];
        value = matches[2];
        acc[key] = value;
      }
      return acc;
    }, {});
  };

  Batman.Request.prototype._prepareOptions = function(data) {
    var options, _ref, _this = this;
    options = {
      url: this.get('url'),
      type: this.get('method'),
      dataType: this.get('type'),
      data: data || this.get('data'),
      username: this.get('username'),
      password: this.get('password'),
      headers: this.get('headers'),
      beforeSend: function() {
        return _this.fire('loading');
      },
      success: function(response, textStatus, xhr) {
        _this.mixin({
          xhr: xhr,
          status: xhr.status,
          response: response,
          responseHeaders: _this._parseResponseHeaders(xhr)
        });
        return _this.fire('success', response);
      },
      error: function(xhr, status, error) {
        _this.mixin({
          xhr: xhr,
          status: xhr.status,
          response: xhr.responseText,
          responseHeaders: _this._parseResponseHeaders(xhr)
        });
        xhr.request = _this;
        return _this.fire('error', xhr);
      },
      complete: function() {
        return _this.fire('loaded');
      }
    };
    if ((_ref = this.get('method')) === 'PUT' || _ref === 'POST') {
      if (!this.hasFileUploads()) {
        options.contentType = this.get('contentType');
        if (typeof options.data === 'object') {
          options.processData = false;
          options.data = Batman.URI.queryFromParams(options.data);
        }
      } else {
        options.contentType = false;
        options.processData = false;
        options.data = this.constructor.objectToFormData(options.data);
      }
    }
    return options;
  };

  Batman.Request.prototype.send = function(data) {
    return jQuery.ajax(this._prepareOptions(data));
  };

  Batman.mixins.animation = {
    show: function(addToParent) {
      var jq, show, _ref, _ref1;
      jq = $(this);
      show = function() {
        return jq.show(600);
      };
      if (addToParent) {
        if ((_ref = addToParent.append) != null) {
          _ref.appendChild(this);
        }
        if ((_ref1 = addToParent.before) != null) {
          _ref1.parentNode.insertBefore(this, addToParent.before);
        }
        jq.hide();
        setTimeout(show, 0);
      } else {
        show();
      }
      return this;
    },
    hide: function(removeFromParent) {
      var _this = this;
      $(this).hide(600, function() {
        var _ref;
        if (removeFromParent) {
          if ((_ref = _this.parentNode) != null) {
            _ref.removeChild(_this);
          }
        }
        return Batman.DOM.didRemoveNode(_this);
      });
      return this;
    }
  };

}).call(this);
(function() {
  var lastEvents, source, widgets, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Batman.Filters.prettyNumber = function(num) {
    if (!isNaN(num)) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  Batman.Filters.dashize = function(str) {
    var dashes_rx1, dashes_rx2;
    dashes_rx1 = /([A-Z]+)([A-Z][a-z])/g;
    dashes_rx2 = /([a-z\d])([A-Z])/g;
    return str.replace(dashes_rx1, '$1_$2').replace(dashes_rx2, '$1_$2').replace(/_/g, '-').toLowerCase();
  };

  Batman.Filters.shortenedNumber = function(num) {
    if (isNaN(num)) {
      return num;
    }
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num;
    }
  };

  window.Dashing = (function(_super) {
    __extends(Dashing, _super);

    function Dashing() {
      _ref = Dashing.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Dashing.on('reload', function(data) {
      return window.location.reload(true);
    });

    Dashing.root(function() {});

    return Dashing;

  })(Batman.App);

  Dashing.params = Batman.URI.paramsFromQuery(window.location.search.slice(1));

  Dashing.Widget = (function(_super) {
    __extends(Widget, _super);

    function Widget() {
      this.onData = __bind(this.onData, this);
      this.receiveData = __bind(this.receiveData, this);
      var type, _base, _name;
      this.constructor.prototype.source = Batman.Filters.underscore(this.constructor.name);
      Widget.__super__.constructor.apply(this, arguments);
      this.mixin($(this.node).data());
      (_base = Dashing.widgets)[_name = this.id] || (_base[_name] = []);
      Dashing.widgets[this.id].push(this);
      this.mixin(Dashing.lastEvents[this.id]);
      type = Batman.Filters.dashize(this.view);
      $(this.node).addClass("widget widget-" + type + " " + this.id);
    }

    Widget.accessor('updatedAtMessage', function() {
      var hours, minutes, timestamp, updatedAt;
      if (updatedAt = this.get('updatedAt')) {
        timestamp = new Date(updatedAt * 1000);
        hours = timestamp.getHours();
        minutes = ("0" + timestamp.getMinutes()).slice(-2);
        return "Last updated at " + hours + ":" + minutes;
      }
    });

    Widget.prototype.on('ready', function() {
      return Dashing.Widget.fire('ready');
    });

    Widget.prototype.receiveData = function(data) {
      this.mixin(data);
      return this.onData(data);
    };

    Widget.prototype.onData = function(data) {};

    return Widget;

  })(Batman.View);

  Dashing.AnimatedValue = {
    get: Batman.Property.defaultAccessor.get,
    set: function(k, to) {
      var num, num_interval, timer, up,
        _this = this;
      if ((to == null) || isNaN(to)) {
        return this[k] = to;
      } else {
        timer = "interval_" + k;
        num = !isNaN(this[k]) && (this[k] != null) ? this[k] : 0;
        if (!(this[timer] || num === to)) {
          to = parseFloat(to);
          num = parseFloat(num);
          up = to > num;
          num_interval = Math.abs(num - to) / 90;
          this[timer] = setInterval(function() {
            num = up ? Math.ceil(num + num_interval) : Math.floor(num - num_interval);
            if ((up && num > to) || (!up && num < to)) {
              num = to;
              clearInterval(_this[timer]);
              _this[timer] = null;
              delete _this[timer];
            }
            _this[k] = num;
            return _this.set(k, to);
          }, 10);
        }
        return this[k] = num;
      }
    }
  };

  Dashing.widgets = widgets = {};

  Dashing.lastEvents = lastEvents = {};

  Dashing.debugMode = false;

  $(document).ready(function() {
    return Dashing.run();
  });

}).call(this);
d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=Ca.length;r>e;++e){var i=Ca[e]+t;if(i in n)return i}}function c(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}function l(n){return Array.prototype.slice.call(n)}function s(){}function f(){}function h(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function g(){ya.event.preventDefault()}function p(){for(var n,t=ya.event;n=t.sourceEvent;)t=n;return t}function m(n){for(var t=new f,e=0,r=arguments.length;++e<r;)t[arguments[e]]=h(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ya.event;i.target=n,ya.event=i,t[i.type].apply(e,r)}finally{ya.event=u}}},t}function d(n){return La(n,Ya),n}function v(n){return"function"==typeof n?n:function(){return Ha(n,this)}}function y(n){return"function"==typeof n?n:function(){return Fa(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ya.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return new RegExp("(?:^|\\s+)"+ya.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return"function"==typeof n?n:(n=ya.ns.qualify(n)).local?function(){return Ma.createElementNS(n.space,n.local)}:function(){return Ma.createElementNS(this.namespaceURI,n)}}function A(n){return{__data__:n}}function N(n){return function(){return Oa(this,n)}}function q(n){return arguments.length||(n=ya.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function T(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function C(n){return La(n,Ua),n}function z(n){var t,e;return function(r,i,u){var a,o=n[u].update,c=o.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(a=o[t])&&++t<c;);return a}}function D(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,za(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ya.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=j;o>0&&(n=n.substring(0,o));var l=Va.get(n);return l&&(n=l,c=L),o?t?i:r:t?s:u}function j(n,t){return function(e){var r=ya.event;ya.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ya.event=r}}}function L(n,t){var e=j(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function H(){var n=".dragsuppress-"+ ++Za,t="touchmove"+n,e="selectstart"+n,r="dragstart"+n,i="click"+n,u=ya.select(ba).on(t,g).on(e,g).on(r,g),a=xa.style,o=a[Xa];return a[Xa]="none",function(t){function e(){u.on(i,null)}u.on(n,null),a[Xa]=o,t&&(u.on(i,function(){g(),e()},!0),setTimeout(e,0))}}function F(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Ba&&(ba.scrollX||ba.scrollY)){e=ya.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var i=e[0][0].getScreenCTM();Ba=!(i.f||i.e),e.remove()}return Ba?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function P(){}function O(n,t,e){return new Y(n,t,e)}function Y(n,t,e){this.h=n,this.s=t,this.l=e}function R(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,at(i(n+120),i(n),i(n-120))}function U(n){return n>0?1:0>n?-1:0}function I(n){return n>1?0:-1>n?Ka:Math.acos(n)}function V(n){return n>1?Ka/2:-1>n?-Ka/2:Math.asin(n)}function X(n){return(Math.exp(n)-Math.exp(-n))/2}function Z(n){return(Math.exp(n)+Math.exp(-n))/2}function B(n){return(n=Math.sin(n/2))*n}function $(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=to)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=tt(i)*uo,r=tt(r)*ao,u=tt(u)*oo,at(rt(3.2404542*i-1.5371385*r-.4985314*u),rt(-.969266*i+1.8760108*r+.041556*u),rt(.0556434*i-.2040259*r+1.0572252*u))}function nt(n,t,e){return n>0?$(Math.atan2(e,t)*eo,Math.sqrt(t*t+e*e),n):$(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function it(n){return at(n>>16,255&n>>8,255&n)}function ut(n){return it(n)+""}function at(n,t,e){return new ot(n,t,e)}function ot(n,t,e){this.r=n,this.g=t,this.b=e}function ct(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function lt(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(gt(i[0]),gt(i[1]),gt(i[2]))}return(u=so.get(n))?t(u.r,u.g,u.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):7===n.length&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function st(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),O(r,i,c)}function ft(n,t,e){n=ht(n),t=ht(t),e=ht(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/uo),i=et((.2126729*n+.7151522*t+.072175*e)/ao),u=et((.0193339*n+.119192*t+.9503041*e)/oo);return G(116*i-16,500*(r-i),200*(i-u))}function ht(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function gt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function pt(n){return"function"==typeof n?n:function(){return n}}function mt(n){return n}function dt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),vt(t,e,n,r)}}function vt(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=ya.dispatch("progress","load","error"),o={},c=new XMLHttpRequest,l=null;return!ba.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=ya.event;ya.event=n;try{a.progress.call(u,c)}finally{ya.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(l=n,u):l},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(za(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},ya.rebind(u,a,"on"),null==r?u:u.get(yt(r))}function yt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Mt(){var n=bt(),t=_t()-n;t>24?(isFinite(t)&&(clearTimeout(po),po=setTimeout(Mt,t)),go=0):(go=1,vo(Mt))}function xt(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now()),mo.callback=n,mo.time=e+t}function bt(){var n=Date.now();for(mo=fo;mo;)n>=mo.time&&(mo.flush=mo.callback(n-mo.time)),mo=mo.next;return n}function _t(){for(var n,t=fo,e=1/0;t;)t.flush?t=n?n.next=t.next:fo=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return ho=n,e}function wt(n,t){var e=Math.pow(10,3*Math.abs(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function St(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Et(n){return n+""}function kt(){}function At(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function Nt(n,t){n&&qo.hasOwnProperty(n.type)&&qo[n.type](n,t)}function qt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function Tt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)qt(n[e],t,1);t.polygonEnd()}function Ct(){function n(n,t){n*=to,t=t*to/2+Ka/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),s=c*Math.sin(e);Co.add(Math.atan2(s,l)),r=n,i=a,u=o}var t,e,r,i,u;zo.point=function(a,o){zo.point=n,r=(t=a)*to,i=Math.cos(o=(e=o)*to/2+Ka/4),u=Math.sin(o)},zo.lineEnd=function(){n(t,e)}}function zt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function Dt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function jt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Lt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Ht(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Ft(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Pt(n){return[Math.atan2(n[1],n[0]),V(n[2])]}function Ot(n,t){return Math.abs(n[0]-t[0])<Qa&&Math.abs(n[1]-t[1])<Qa}function Yt(n,t){n*=to;var e=Math.cos(t*=to);Rt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Rt(n,t,e){++Do,Lo+=(n-Lo)/Do,Ho+=(t-Ho)/Do,Fo+=(e-Fo)/Do}function Ut(){function n(n,i){n*=to;var u=Math.cos(i*=to),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);jo+=l,Po+=l*(t+(t=a)),Oo+=l*(e+(e=o)),Yo+=l*(r+(r=c)),Rt(t,e,r)}var t,e,r;Vo.point=function(i,u){i*=to;var a=Math.cos(u*=to);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),Vo.point=n,Rt(t,e,r)}}function It(){Vo.point=Yt}function Vt(){function n(n,t){n*=to;var e=Math.cos(t*=to),a=e*Math.cos(n),o=e*Math.sin(n),c=Math.sin(t),l=i*c-u*o,s=u*a-r*c,f=r*o-i*a,h=Math.sqrt(l*l+s*s+f*f),g=r*a+i*o+u*c,p=h&&-I(g)/h,m=Math.atan2(h,g);Ro+=p*l,Uo+=p*s,Io+=p*f,jo+=m,Po+=m*(r+(r=a)),Oo+=m*(i+(i=o)),Yo+=m*(u+(u=c)),Rt(r,i,u)}var t,e,r,i,u;Vo.point=function(a,o){t=a,e=o,Vo.point=n,a*=to;var c=Math.cos(o*=to);r=c*Math.cos(a),i=c*Math.sin(a),u=Math.sin(o),Rt(r,i,u)},Vo.lineEnd=function(){n(t,e),Vo.lineEnd=It,Vo.point=Yt}}function Xt(){return!0}function Zt(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(Ot(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Bt(u),Bt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var s,f,h,g=u[0];;){for(s=g;s.visited;)if((s=s.next)===g)return;f=s.points,i.lineStart();do{if(s.visited=s.other.visited=!0,s.entry){if(s.subject)for(var o=0;o<f.length;o++)i.point((h=f[o])[0],h[1]);else r(s.point,s.next.point,1,i);s=s.next}else{if(s.subject){f=s.prev.points;for(var o=f.length;--o>=0;)i.point((h=f[o])[0],h[1])}else r(s.point,s.prev.point,-1,i);s=s.prev}s=s.other,f=s.points}while(!s.visited);i.lineEnd()}}}function Bt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function $t(n,t,e,r){return function(i){function u(t,e){n(t,e)&&i.point(t,e)}function a(n,t){m.point(n,t)}function o(){d.point=a,m.lineStart()}function c(){d.point=u,m.lineEnd()}function l(n,t){y.point(n,t),p.push([n,t])}function s(){y.lineStart(),p=[]}function f(){l(p[0][0],p[0][1]),y.lineEnd();var n,t=y.clean(),e=v.buffer(),r=e.length;if(p.pop(),g.push(p),p=null,r){if(1&t){n=e[0];var u,r=n.length-1,a=-1;for(i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),h.push(e.filter(Wt))}}var h,g,p,m=t(i),d={point:u,lineStart:o,lineEnd:c,polygonStart:function(){d.point=l,d.lineStart=s,d.lineEnd=f,h=[],g=[],i.polygonStart()},polygonEnd:function(){d.point=u,d.lineStart=o,d.lineEnd=c,h=ya.merge(h),h.length?Zt(h,Gt,null,e,i):r(g)&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),h=g=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},v=Jt(),y=t(v);return d}}function Wt(n){return n.length>1}function Jt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:s,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Gt(n,t){return((n=n.point)[0]<0?n[1]-Ka/2-Qa:Ka/2-n[1])-((t=t.point)[0]<0?t[1]-Ka/2-Qa:Ka/2-t[1])}function Kt(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,a=!1,o=!1,c=0;Co.reset();for(var l=0,s=t.length;s>l;++l){var f=t[l],h=f.length;if(h){for(var g=f[0],p=g[0],m=g[1]/2+Ka/4,d=Math.sin(m),v=Math.cos(m),y=1;;){y===h&&(y=0),n=f[y];var M=n[0],x=n[1]/2+Ka/4,b=Math.sin(x),_=Math.cos(x),w=M-p,S=Math.abs(w)>Ka,E=d*b;if(Co.add(Math.atan2(E*Math.sin(w),v*_+E*Math.cos(w))),Math.abs(x)<Qa&&(o=!0),u+=S?w+(w>=0?2:-2)*Ka:w,S^p>=e^M>=e){var k=jt(zt(g),zt(n));Ft(k);var A=jt(i,k);Ft(A);var N=(S^w>=0?-1:1)*V(A[2]);r>N&&(c+=S^w>=0?1:-1)}if(!y++)break;p=M,d=b,v=_,g=n}Math.abs(u)>Qa&&(a=!0)}}return(!o&&!a&&0>Co||-Qa>u)^1&c}function Qt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Ka:-Ka,c=Math.abs(u-e);Math.abs(c-Ka)<Qa?(n.point(e,r=(r+a)/2>0?Ka/2:-Ka/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Ka&&(Math.abs(e-i)<Qa&&(e-=i*Qa),Math.abs(u-o)<Qa&&(u-=o*Qa),r=ne(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function ne(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>Qa?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function te(n,t,e,r){var i;if(null==n)i=e*Ka/2,r.point(-Ka,i),r.point(0,i),r.point(Ka,i),r.point(Ka,0),r.point(Ka,-i),r.point(0,-i),r.point(-Ka,-i),r.point(-Ka,0),r.point(-Ka,i);else if(Math.abs(n[0]-t[0])>Qa){var u=(n[0]<t[0]?1:-1)*Ka;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function ee(n){return Kt(Zo,n)}function re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>a}function e(n){var e,u,a,c,s;return{lineStart:function(){c=a=!1,s=1},point:function(f,h){var g,p=[f,h],m=t(f,h),d=o?m?0:i(f,h):m?i(f+(0>f?Ka:-Ka),h):0;if(!e&&(c=a=m)&&n.lineStart(),m!==a&&(g=r(e,p),(Ot(e,g)||Ot(p,g))&&(p[0]+=Qa,p[1]+=Qa,m=t(p[0],p[1]))),m!==a)s=0,m?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(l&&e&&o^m){var v;d&u||!(v=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!m||e&&Ot(e,p)||n.point(p[0],p[1]),e=p,a=m,u=d},lineEnd:function(){a&&n.lineEnd(),e=null},clean:function(){return s|(c&&a)<<1}}}function r(n,t,e){var r=zt(n),i=zt(t),u=[1,0,0],o=jt(r,i),c=Dt(o,o),l=o[0],s=c-l*l;if(!s)return!e&&n;var f=a*c/s,h=-a*l/s,g=jt(u,o),p=Ht(u,f),m=Ht(o,h);Lt(p,m);var d=g,v=Dt(p,d),y=Dt(d,d),M=v*v-y*(Dt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Ht(d,(-v-x)/y);if(Lt(b,p),b=Pt(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Ka)<Qa,q=N||Qa>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<Qa?E:k):E<=b[1]&&b[1]<=k:A>Ka^(w<=b[0]&&b[0]<=S)){var T=Ht(d,(-v+x)/y);return Lt(T,p),[b,Pt(T)]}}}function i(t,e){var r=o?n:Ka-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}function u(n){return Kt(c,n)}var a=Math.cos(n),o=a>0,c=[n,0],l=Math.abs(a)>Qa,s=Ne(n,6*to);return $t(t,e,s,u)}function ie(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<Qa?i>0?0:3:Math.abs(r[0]-e)<Qa?i>0?2:1:Math.abs(r[1]-t)<Qa?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<Qa&&Math.abs(o)<Qa?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:ue(n-i[0],a,c)&&ue(i[0]-e,-a,c)&&ue(t-i[1],o,c)&&ue(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=s([0===a||3===a?n:e,a>1?r:t]);return o}function s(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&f(l,u,n)>0&&++t:u[1]<=r&&f(l,u,n)<0&&--t,l=u;return 0!==t}function f(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var s=0,f=0;if(null==u||(s=i(u,c))!==(f=i(o,c))||a(u,o)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function m(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function d(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-Bo,Math.min(Bo,n)),t=Math.max(-Bo,Math.min(Bo,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Jt(),T={point:p,lineStart:m,lineEnd:d,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=ya.merge(y)).length?(c.polygonStart(),Zt(y,u,l,h,c),c.polygonEnd()):s([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function ue(n,t,e){if(Math.abs(t)<Qa)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function oe(n){var t=0,e=Ka/3,r=be(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Ka/180,e=n[1]*Ka/180):[180*(t/Ka),180*(e/Ka)]},i}function ce(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,V((u-(n*n+e*e)*i*i)/(2*i))]},e}function le(){function n(n,t){Wo+=i*n-r*t,r=n,i=t}var t,e,r,i;nc.point=function(u,a){nc.point=n,t=r=u,e=i=a},nc.lineEnd=function(){n(t,e)}}function se(n,t){Jo>n&&(Jo=n),n>Ko&&(Ko=n),Go>t&&(Go=t),t>Qo&&(Qo=t)}function fe(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=he(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=he(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function he(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ge(n,t){Lo+=n,Ho+=t,++Fo}function pe(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);Po+=a*(t+n)/2,Oo+=a*(e+r)/2,Yo+=a,ge(t=n,e=r)}var t,e;ec.point=function(r,i){ec.point=n,ge(t=r,e=i)}}function me(){ec.point=ge}function de(){function n(n,t){var e=n-r,u=t-i,a=Math.sqrt(e*e+u*u);Po+=a*(r+n)/2,Oo+=a*(i+t)/2,Yo+=a,a=i*n-r*t,Ro+=a*(r+n),Uo+=a*(i+t),Io+=3*a,ge(r=n,i=t)}var t,e,r,i;ec.point=function(u,a){ec.point=n,ge(t=r=u,e=i=a)},ec.lineEnd=function(){n(t,e)}}function ve(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Ka)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:s};return o}function ye(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function i(){M=0/0,S.point=a,t.lineStart()}function a(r,i){var a=zt([r,i]),o=n(r,i);e(M,x,y,b,_,w,M=o[0],x=o[1],y=r,b=a[0],_=a[1],w=a[2],u,t),t.point(M,x)}function o(){S.point=r,t.lineEnd()}function c(){i(),S.point=l,S.lineEnd=s}function l(n,t){a(f=n,h=t),g=M,p=x,m=b,d=_,v=w,S.point=a}function s(){e(M,x,y,b,_,w,g,p,f,m,d,v,u,t),S.lineEnd=o,o()}var f,h,g,p,m,d,v,y,M,x,b,_,w,S={point:r,lineStart:i,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=i}};return S}function e(t,u,a,o,c,l,s,f,h,g,p,m,d,v){var y=s-t,M=f-u,x=y*y+M*M;if(x>4*r&&d--){var b=o+g,_=c+p,w=l+m,S=Math.sqrt(b*b+_*_+w*w),E=Math.asin(w/=S),k=Math.abs(Math.abs(w)-1)<Qa?(a+h)/2:Math.atan2(_,b),A=n(k,E),N=A[0],q=A[1],T=N-t,C=q-u,z=M*T-y*C;(z*z/x>r||Math.abs((y*T+M*C)/x-.5)>.3||i>o*g+c*p+l*m)&&(e(t,u,a,o,c,l,N,q,k,b/=S,_/=S,w,d,v),v.point(N,q),e(N,q,k,b,_,w,s,f,h,g,p,m,d,v))}}var r=.5,i=Math.cos(30*to),u=16;return t.precision=function(n){return arguments.length?(u=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Me(n){var t=ye(function(t,e){return n([t*eo,e*eo])});return function(n){return n=t(n),{point:function(t,e){n.point(t*to,e*to)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function xe(n){return be(function(){return n})()}function be(n){function t(n){return n=o(n[0]*to,n[1]*to),[n[0]*h+c,l-n[1]*h]}function e(n){return n=o.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*eo,n[1]*eo]}function r(){o=ae(a=Se(v,y,M),u);var n=u(m,d);return c=g-n[0]*h,l=p+n[1]*h,i()}function i(){return s&&(s.valid=!1,s=null),t}var u,a,o,c,l,s,f=ye(function(n,t){return n=u(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,m=0,d=0,v=0,y=0,M=0,x=Xo,b=mt,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=_e(a,x(f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Xo):re((_=+n)*to),i()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=null==n?mt:ie(n[0][0],n[0][1],n[1][0],n[1][1]),i()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(m=n[0]%360*to,d=n[1]%360*to,r()):[m*eo,d*eo]},t.rotate=function(n){return arguments.length?(v=n[0]%360*to,y=n[1]%360*to,M=n.length>2?n[2]%360*to:0,r()):[v*eo,y*eo,M*eo]},ya.rebind(t,f,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function _e(n,t){return{point:function(e,r){r=n(e*to,r*to),e=r[0],t.point(e>Ka?e-2*Ka:-Ka>e?e+2*Ka:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function we(n,t){return[n,t]}function Se(n,t,e){return n?t||e?ae(ke(n),Ae(t,e)):ke(n):t||e?Ae(t,e):we}function Ee(n){return function(t,e){return t+=n,[t>Ka?t-2*Ka:-Ka>t?t+2*Ka:t,e]}}function ke(n){var t=Ee(n);return t.invert=Ee(-n),t}function Ae(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+o*i;return[Math.atan2(c*u-s*a,o*r-l*i),V(s*u+c*a)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+s*i),V(s*r-o*i)]},e}function Ne(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=qe(e,i),u=qe(e,u),(a>0?u>i:i>u)&&(i+=2*a*Ka)):(i=n+2*a*Ka,u=n);for(var c,l=a*t,s=i;a>0?s>u:u>s;s-=l)o.point((c=Pt([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function qe(n,t){var e=zt(t);e[0]-=n,Ft(e);var r=I(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Qa)%(2*Math.PI)}function Te(n,t,e){var r=ya.range(n,t-Qa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function Ce(n,t,e){var r=ya.range(n,t-Qa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function ze(n){return n.source}function De(n){return n.target}function je(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(B(r-t)+i*a*B(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,i=e*l+t*f,a=e*u+t*o;return[Math.atan2(i,r)*eo,Math.atan2(a,Math.sqrt(r*r+i*i))*eo]}:function(){return[n*eo,t*eo]};return p.distance=h,p}function Le(){function n(n,i){var u=Math.sin(i*=to),a=Math.cos(i),o=Math.abs((n*=to)-t),c=Math.cos(o);rc+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;ic.point=function(i,u){t=i*to,e=Math.sin(u*=to),r=Math.cos(u),ic.point=n},ic.lineEnd=function(){ic.point=ic.lineEnd=s}}function He(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function Fe(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Ka/2)<Qa?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Ka/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=U(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Ka/2]},e):Oe}function Pe(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<Qa?we:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-U(i)*Math.sqrt(n*n+e*e)]},e)}function Oe(n,t){return[n,Math.log(Math.tan(Ka/4+t/2))]}function Ye(n){var t,e=xe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Ka*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Re(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Ue(n){function t(t){function a(){l.push("M",u(n(s),o))}for(var c,l=[],s=[],f=-1,h=t.length,g=pt(e),p=pt(r);++f<h;)i.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(a(),s=[]);return s.length&&a(),l.length?l.join(""):null}var e=Ie,r=Ve,i=Xt,u=Xe,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=sc.get(n)||Xe).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function Ie(n){return n[0]}function Ve(n){return n[1]}function Xe(n){return n.join("L")}function Ze(n){return Xe(n)+"Z"}function Be(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function $e(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function We(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Je(n,t){return n.length<4?Xe(n):n[1]+Qe(n.slice(1,n.length-1),nr(n,t))}function Ge(n,t){return n.length<3?Xe(n):n[0]+Qe((n.push(n[0]),n),nr([n[n.length-2]].concat(n,[n[1]]),t))}function Ke(n,t){return n.length<3?Xe(n):n[0]+Qe(n,nr(n,t))}function Qe(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Xe(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-2*a[0]/3)+","+(u[1]-2*a[1]/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var s=n[c];r+="Q"+(u[0]+2*o[0]/3)+","+(u[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function nr(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function tr(n){if(n.length<3)return Xe(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u,"L",ur(gc,a),",",ur(gc,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),ar(c,a,o);return n.pop(),c.push("L",r),c.join("")}function er(n){if(n.length<4)return Xe(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(ur(gc,u)+","+ur(gc,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),ar(e,u,a);return e.join("")}function rr(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[ur(gc,a),",",ur(gc,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),ar(t,a,o);return t.join("")}function ir(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return tr(n)}function ur(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]
}function ar(n,t,e){n.push("C",ur(fc,t),",",ur(fc,e),",",ur(hc,t),",",ur(hc,e),",",ur(gc,t),",",ur(gc,e))}function or(n,t){return(t[1]-n[1])/(t[0]-n[0])}function cr(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=or(i,u);++t<e;)r[t]=(a+(a=or(i=u,u=n[t+1])))/2;return r[t]=a,r}function lr(n){for(var t,e,r,i,u=[],a=cr(n),o=-1,c=n.length-1;++o<c;)t=or(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function sr(n){return n.length<3?Xe(n):n[0]+Qe(n,lr(n))}function fr(n,t,e,r){var i,u,a,o,c,l,s;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],s=i[1],(s-a)*(o-u)-(c-a)*(l-u)>0}function hr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function gr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(o*(c-l)-f*(i-u))/(f*a-o*s);return[i+h*a,c+h*s]}function pr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function mr(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[mc[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,s=r.region.r;l.y<s.y||l.y==s.y&&l.x<s.x?(u=n,a=e):(u=t,a=r);var f=o>=a.region.r.x;return f&&"l"===u.side||!f&&"r"===u.side?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&"l"===n.side)return 1;if(!i&&"r"===n.side)return 0;if(1===e.a){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var s=e.c-e.a*t.x,f=t.y-s,h=t.x-r.x,g=s-r.y;c=f*f>h*h+g*g}return"l"===n.side?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[mc[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return 0===u.list.length},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,s,f,h,g,p,m,d,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),f=r.createHalfEdge(v,"l"),r.insert(o,f),m=i.intersect(o,f),m&&(u.del(o),u.insert(o,m,i.distance(m,M))),o=f,f=r.createHalfEdge(v,"r"),r.insert(o,f),m=i.intersect(f,c),m&&u.insert(f,m,i.distance(m,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),s=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),d=o.vertex,i.endPoint(o.edge,o.side,d),i.endPoint(c.edge,c.side,d),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),f=r.createHalfEdge(v,y),r.insert(l,f),i.endPoint(v,mc[y],d),m=i.intersect(l,f),m&&(u.del(l),u.insert(l,m,i.distance(m,h))),m=i.intersect(f,s),m&&u.insert(f,m,i.distance(m,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function dr(n){return n.x}function vr(n){return n.y}function yr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function Mr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&Mr(n,c[0],e,r,a,o),c[1]&&Mr(n,c[1],a,r,i,o),c[2]&&Mr(n,c[2],e,o,a,u),c[3]&&Mr(n,c[3],a,o,i,u)}}function xr(n,t){n=ya.rgb(n),t=ya.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(n){return"#"+ct(Math.round(e+u*n))+ct(Math.round(r+a*n))+ct(Math.round(i+o*n))}}function br(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Sr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function _r(n,t){return t-=n=+n,function(e){return n+t*e}}function wr(n,t){var e,r,i,u,a,o=0,c=0,l=[],s=[];for(n+="",t+="",dc.lastIndex=0,r=0;e=dc.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),s.push({i:l.length,x:e[0]}),l.push(null),o=dc.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=s.length;(e=dc.exec(n))&&u>r;++r)if(a=s[r],a.x==e[0]){if(a.i)if(null==l[a.i+1])for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)s[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)s[i].i-=2;else if(null==l[a.i+1])l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)s[i].i--;s.splice(r,1),u--,r--}else a.x=_r(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=s.pop(),null==l[a.i+1]?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return 1===l.length?null==l[0]?(a=s[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=s[r]).i]=a.x(n);return l.join("")}}function Sr(n,t){for(var e,r=ya.interpolators.length;--r>=0&&!(e=ya.interpolators[r](n,t)););return e}function Er(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Sr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function kr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Ar(n){return function(t){return 1-n(1-t)}}function Nr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function qr(n){return n*n}function Tr(n){return n*n*n}function Cr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function zr(n){return function(t){return Math.pow(t,n)}}function Dr(n){return 1-Math.cos(n*Ka/2)}function jr(n){return Math.pow(2,10*(n-1))}function Lr(n){return 1-Math.sqrt(1-n*n)}function Hr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Ka)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Ka/t)}}function Fr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Pr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Or(n,t){n=ya.hcl(n),t=ya.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return J(e+u*n,r+a*n,i+o*n)+""}}function Yr(n,t){n=ya.hsl(n),t=ya.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return R(e+u*n,r+a*n,i+o*n)+""}}function Rr(n,t){n=ya.lab(n),t=ya.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(n){return Q(e+u*n,r+a*n,i+o*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ir(n){var t=[n.a,n.b],e=[n.c,n.d],r=Xr(t),i=Vr(t,e),u=Xr(Zr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*eo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*eo:0}function Vr(n,t){return n[0]*t[0]+n[1]*t[1]}function Xr(n){var t=Math.sqrt(Vr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Zr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Br(n,t){var e,r=[],i=[],u=ya.transform(n),a=ya.transform(t),o=u.translate,c=a.translate,l=u.rotate,s=a.rotate,f=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:_r(o[0],c[0])},{i:3,x:_r(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:_r(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:_r(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:_r(g[0],p[0])},{i:e-2,x:_r(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function $r(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Wr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ya.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ci,n}function ui(n){return n.children}function ai(n){return n.value}function oi(n,t){return t.value-n.value}function ci(n){return ya.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function li(n){return n.x}function si(n){return n.y}function fi(n,t,e){n.y0=t,n.y=e}function hi(n){return ya.range(n.length)}function gi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function pi(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function mi(n){return n.reduce(di,0)}function di(n,t){return n+t[1]}function vi(n,t){return yi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function yi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function Mi(n){return[ya.min(n),ya.max(n)]}function xi(n,t){return n.parent==t.parent?1:2}function bi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function _i(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function wi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=wi(e[u],t),n)>0&&(n=r);return n}function Si(n,t){return n.x-t.x}function Ei(n,t){return t.x-n.x}function ki(n,t){return n.depth-t.depth}function Ai(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function Ni(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function qi(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function Ti(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Ci(n,t){return n.value-t.value}function zi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Di(n,t){n._pack_next=t,t._pack_prev=n}function ji(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Li(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Hi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],Oi(r,i,u),t(u),zi(r,u),r._pack_prev=u,zi(u,i),i=r._pack_next,a=3;l>a;a++){Oi(r,i,u=e[a]);var p=0,m=1,d=1;for(o=i._pack_next;o!==i;o=o._pack_next,m++)if(ji(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!ji(c,u);c=c._pack_prev,d++);p?(d>m||m==d&&i.r<r.r?Di(r,i=o):Di(r=c,i),a--):(zi(r,u),i=u,t(u))}var v=(s+f)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Fi)}}function Hi(n){n._pack_next=n._pack_prev=n}function Fi(n){delete n._pack_next,delete n._pack_prev}function Pi(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Pi(i[u],t,e,r)}function Oi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Yi(n){return 1+ya.max(n,function(n){return n.y})}function Ri(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ui(n){var t=n.children;return t&&t.length?Ui(t[0]):n}function Ii(n){var t,e=n.children;return e&&(t=e.length)?Ii(e[t-1]):n}function Vi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Xi(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Zi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Bi(n){return n.rangeExtent?n.rangeExtent():Zi(n.range())}function $i(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Wi(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),n[r]=t.floor(u),n[i]=t.ceil(a),n}function Ji(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:kc}function Gi(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=ya.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Ki(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Gi:$i,c=r?Wr:$r;return a=i(n,t,c,e),o=i(t,n,c,Sr),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return ru(n,t)},u.tickFormat=function(t,e){return iu(n,t,e)},u.nice=function(t){return nu(n,t),i()},u.copy=function(){return Ki(n,t,e,r)},i()}function Qi(n,t){return ya.rebind(n,t,"range","rangeRound","interpolate","clamp")}function nu(n,t){return Wi(n,Ji(t?eu(n,t)[2]:tu(n)))}function tu(n){var t=Zi(n),e=t[1]-t[0];return Math.pow(10,Math.round(Math.log(e)/Math.LN10)-1)}function eu(n,t){var e=Zi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function ru(n,t){return ya.range.apply(ya,eu(n,t))}function iu(n,t,e){var r=-Math.floor(Math.log(eu(n,t)[2])/Math.LN10+.01);return ya.format(e?e.replace(wo,function(n,t,e,i,u,a,o,c,l,s){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===s)),s].join("")}):",."+r+"f")}function uu(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(i(t))}return a.invert=function(t){return u(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),a):t},a.nice=function(){var t=Wi(r.map(i),e?Math:Nc);return n.domain(t),r=t.map(u),a},a.ticks=function(){var n=Zi(r),a=[],o=n[0],c=n[1],l=Math.floor(i(o)),s=Math.ceil(i(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)a.push(u(l)*h);a.push(u(l))}else for(a.push(u(l));l++<s;)for(var h=f-1;h>0;h--)a.push(u(l)*h);for(l=0;a[l]<o;l++);for(s=a.length;a[s-1]>c;s--);a=a.slice(l,s)}return a},a.tickFormat=function(n,t){if(!arguments.length)return Ac;arguments.length<2?t=Ac:"function"!=typeof t&&(t=ya.format(t));var r,o=Math.max(.1,n/a.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/u(c(i(n)+r))<=o?t(n):""}},a.copy=function(){return uu(n.copy(),t,e,r)},Qi(a,n)}function au(n,t,e){function r(t){return n(i(t))}var i=ou(t),u=ou(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return ru(e,n)},r.tickFormat=function(n,t){return iu(e,n,t)},r.nice=function(n){return r.domain(nu(e,n))},r.exponent=function(a){return arguments.length?(i=ou(t=a),u=ou(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return au(n.copy(),t,e)},Qi(r,n)}function ou(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function cu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return ya.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],s=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+s*u/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=(f-s)/(n.length-u+2*c);return a=r(s+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=Math.floor((f-s)/(n.length-u+2*c)),g=f-s-(n.length-u)*h;return a=r(s+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Zi(t.a[0])},e.copy=function(){return cu(n,t)},e.domain(n)}function lu(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=ya.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?void 0:t[ya.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(ya.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?i[e-1]:n[0],e<i.length?i[e]:n[n.length-1]]},r.copy=function(){return lu(n,t)},e()}function su(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/u+n,[t,t+1/u]},r.copy=function(){return su(n,t,e)},i()}function fu(n,t){function e(e){return e>=e?t[ya.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return fu(n,t)},e}function hu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return ru(n,t)},t.tickFormat=function(t,e){return iu(n,t,e)},t.copy=function(){return hu(n)},t}function gu(n){return n.innerRadius}function pu(n){return n.outerRadius}function mu(n){return n.startAngle}function du(n){return n.endAngle}function vu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+Dc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function yu(n){function t(t){function c(){m.push("M",o(n(v),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,m=[],d=[],v=[],y=-1,M=t.length,x=pt(e),b=pt(i),_=e===r?function(){return g}:pt(r),w=i===u?function(){return p}:pt(u);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],v=[]);return d.length&&c(),m.length?m.join(""):null}var e=Ie,r=Ie,i=0,u=Ve,a=Xt,o=Xe,c=o.key,l=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=sc.get(n)||Xe).key,l=o.reverse||o,s=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Mu(n){return n.radius}function xu(n){return[n.x,n.y]}function bu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+Dc;return[e*Math.cos(r),e*Math.sin(r)]}}function _u(){return 64}function wu(){return"circle"}function Su(n){var t=Math.sqrt(n/Ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Eu(n,t){return La(n,Yc),n.id=t,n}function ku(n,t,e,r){var i=n.id;return T(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Au(n){return null==n&&(n=""),function(){this.textContent=n}}function Nu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;a=u[e]={tween:new i,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,ya.timer(function(r){function i(r){return u.active>e?l():(u.active=e,a.event&&a.event.start.call(n,s,t),a.tween.forEach(function(e,r){(r=r.call(n,s,t))&&p.push(r)}),c(r)?1:(xt(c,0,o),void 0))}function c(r){if(u.active!==e)return l();for(var i=(r-h)/g,o=f(i),c=p.length;c>0;)p[--c].call(n,o);return i>=1?(l(),a.event&&a.event.end.call(n,s,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=a.ease,h=a.delay,g=a.duration,p=[];return r>=h?i(r):(xt(i,h,o),void 0)},0,o)}}function qu(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Tu(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Cu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Zi(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function zu(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Du(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new Zc(e-1)),1),e}function u(n,e){return t(n=new Zc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{Zc=zu;var r=new zu;return r._=n,a(r,t,e)}finally{Zc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=ju(n);return c.floor=c,c.round=ju(r),c.ceil=ju(i),c.offset=ju(u),c.range=o,n}function ju(n){return function(t,e){try{Zc=zu;var r=new zu;return r._=t,n(r,e)._}finally{Zc=Date}}}function Lu(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=gl[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Hu(n){return new RegExp("^(?:"+n.map(ya.requote).join("|")+")","i")}function Fu(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Pu(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Ou(n,t,e){il.lastIndex=0;var r=il.exec(t.substring(e));return r?(n.w=ul.get(r[0].toLowerCase()),e+r[0].length):-1}function Yu(n,t,e){el.lastIndex=0;var r=el.exec(t.substring(e));return r?(n.w=rl.get(r[0].toLowerCase()),e+r[0].length):-1}function Ru(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Uu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Iu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Vu(n,t,e){cl.lastIndex=0;var r=cl.exec(t.substring(e));return r?(n.m=ll.get(r[0].toLowerCase()),e+r[0].length):-1}function Xu(n,t,e){al.lastIndex=0;var r=al.exec(t.substring(e));return r?(n.m=ol.get(r[0].toLowerCase()),e+r[0].length):-1}function Zu(n,t,e){return Lu(n,hl.c.toString(),t,e)}function Bu(n,t,e){return Lu(n,hl.x.toString(),t,e)}function $u(n,t,e){return Lu(n,hl.X.toString(),t,e)}function Wu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Ju(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.y=Gu(+r[0]),e+r[0].length):-1}function Gu(n){return n+(n>68?1900:2e3)}function Ku(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function na(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function ta(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ea(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ra(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ia(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ua(n,t,e){var r=ml.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function aa(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Pu(r,"0",2)+Pu(i,"0",2)}function oa(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ca(n){return n.toISOString()}function la(n,t,e){function r(t){return n(t)}return r.invert=function(t){return sa(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(sa)},r.nice=function(n){return r.domain(Wi(r.domain(),n))},r.ticks=function(e,i){var u=Zi(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=ya.bisect(vl,o);if(c==vl.length)return t.year(u,e);if(!c)return n.ticks(e).map(sa);o/vl[c-1]<vl[c]/o&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return la(n.copy(),t,e)},Qi(r,n)}function sa(n){return new Date(n)}function fa(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function ha(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function ga(n){var t=n.getFullYear(),e=ha(t),r=ha(t+1);return t+(n-e)/(r-e)}function pa(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ma(n){var t=n.getUTCFullYear(),e=pa(t),r=pa(t+1);return t+(n-e)/(r-e)}function da(n){return JSON.parse(n.responseText)}function va(n){var t=Ma.createRange();return t.selectNode(Ma.body),t.createContextualFragment(n.responseText)}var ya={version:"3.2.8"};Date.now||(Date.now=function(){return+new Date});var Ma=document,xa=Ma.documentElement,ba=window;try{Ma.createElement("div").style.setProperty("opacity",0,"")}catch(_a){var wa=ba.Element.prototype,Sa=wa.setAttribute,Ea=wa.setAttributeNS,ka=ba.CSSStyleDeclaration.prototype,Aa=ka.setProperty;wa.setAttribute=function(n,t){Sa.call(this,n,t+"")},wa.setAttributeNS=function(n,t,e){Ea.call(this,n,t,e+"")},ka.setProperty=function(n,t,e){Aa.call(this,n,t+"",e)}}ya.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},ya.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ya.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ya.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ya.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(1===arguments.length){for(;++u<a&&!(null!=(e=i=n[u])&&e>=e);)e=i=void 0;for(;++u<a;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&!(null!=(e=i=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<a;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ya.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(1===arguments.length)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},ya.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(1===arguments.length)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},ya.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ya.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?ya.quantile(t.sort(ya.ascending),.5):void 0},ya.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var Na=ya.bisector(function(n){return n});ya.bisectLeft=Na.left,ya.bisect=ya.bisectRight=Na.right,ya.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},ya.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ya.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=ya.min(arguments,t),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=arguments[u][n];return r},ya.transpose=function(n){return ya.zip.apply(ya,n)},ya.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ya.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ya.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ya.merge=function(n){return Array.prototype.concat.apply([],n)},ya.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},ya.map=function(n){var t=new i;if(n instanceof i)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return qa+n in this},get:function(n){return this[qa+n]},set:function(n,t){return this[qa+n]=t},remove:function(n){return n=qa+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];
return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Ta&&n.call(this,t.substring(1),this[t])}});var qa="\0",Ta=qa.charCodeAt(0);ya.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,m=a[c++],d=new i;++g<p;)(h=d.get(l=m(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ya.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ya.set=function(n){var t=new u;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(u,{has:function(n){return qa+n in this},add:function(n){return this[qa+n]=!0,n},remove:function(n){return n=qa+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Ta&&n.call(this,t.substring(1))}}),ya.behavior={},ya.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n};var Ca=["webkit","ms","moz","Moz","o","O"],za=l;try{za(xa.childNodes)[0].nodeType}catch(Da){za=c}ya.dispatch=function(){for(var n=new f,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=h(n);return n},f.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ya.event=null,ya.requote=function(n){return n.replace(ja,"\\$&")};var ja=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,La={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ha=function(n,t){return t.querySelector(n)},Fa=function(n,t){return t.querySelectorAll(n)},Pa=xa[o(xa,"matchesSelector")],Oa=function(n,t){return Pa.call(n,t)};"function"==typeof Sizzle&&(Ha=function(n,t){return Sizzle(n,t)[0]||null},Fa=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},Oa=Sizzle.matchesSelector),ya.selection=function(){return Ia};var Ya=ya.selection.prototype=[];Ya.select=function(n){var t,e,r,i,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c,a)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return d(u)},Ya.selectAll=function(n){var t,e,r=[];n=y(n);for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=za(n.call(e,e.__data__,o,i))),t.parentNode=e);return d(r)};var Ra={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ya.ns={prefix:Ra,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Ra.hasOwnProperty(e)?{space:Ra[e],local:n}:n}},Ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ya.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},Ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},Ya.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return ba.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},Ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},Ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Ya.append=function(n){return n=k(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Ya.insert=function(n,t){return n=k(n),t=v(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments))})},Ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},Ya.data=function(n,t){function e(n,e){var r,u,a,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),m=new Array(o);if(t){var d,v=new i,y=new i,M=[];for(r=-1;++r<o;)d=t.call(u=n[r],u.__data__,r),v.has(d)?m[r]=u:v.set(d,u),M.push(d);for(r=-1;++r<f;)d=t.call(e,a=e[r],r),(u=v.get(d))?(g[r]=u,u.__data__=a):y.has(d)||(p[r]=A(a)),y.set(d,a),v.remove(d);for(r=-1;++r<o;)v.has(M[r])&&(m[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=A(a);for(;f>r;++r)p[r]=A(e[r]);for(;o>r;++r)m[r]=n[r]}p.update=g,p.parentNode=g.parentNode=m.parentNode=n.parentNode,c.push(p),l.push(g),s.push(m)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=C([]),l=d([]),s=d([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return s},l},Ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Ya.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return d(i)},Ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Ya.sort=function(n){n=q.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Ya.each=function(n){return T(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Ya.call=function(n){var t=za(arguments);return n.apply(t[0]=this,t),this},Ya.empty=function(){return!this.node()},Ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Ya.size=function(){var n=0;return this.each(function(){++n}),n};var Ua=[];ya.selection.enter=C,ya.selection.enter.prototype=Ua,Ua.append=Ya.append,Ua.empty=Ya.empty,Ua.node=Ya.node,Ua.call=Ya.call,Ua.size=Ya.size,Ua.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,s=i.length;++l<s;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l,o)),e.__data__=u.__data__):t.push(null)}return d(a)},Ua.insert=function(n,t){return arguments.length<2&&(t=z(this)),Ya.insert.call(this,n,t)},Ya.transition=function(){for(var n,t,e=Hc||++Rc,r=[],i=Fc||{time:Date.now(),ease:Cr,delay:0,duration:250},u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&Nu(t,c,e,i),n.push(t)}return Eu(r,e)},ya.select=function(n){var t=["string"==typeof n?Ha(n,Ma):n];return t.parentNode=xa,d([t])},ya.selectAll=function(n){var t=za("string"==typeof n?Fa(n,Ma):n);return t.parentNode=xa,d([t])};var Ia=ya.select(xa);Ya.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(D(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(D(n,t,e))};var Va=ya.map({mouseenter:"mouseover",mouseleave:"mouseout"});Va.forEach(function(n){"on"+n in Ma&&Va.remove(n)});var Xa=o(xa.style,"userSelect"),Za=0;ya.mouse=function(n){return F(n,p())};var Ba=/WebKit/.test(ba.navigator.userAgent)?-1:0;ya.touches=function(n,t){return arguments.length<2&&(t=p().touches),t?za(t).map(function(t){var e=F(n,t);return e.identifier=t.identifier,e}):[]},ya.behavior.drag=function(){function n(){this.on("mousedown.drag",a).on("touchstart.drag",o)}function t(){return ya.event.changedTouches[0].identifier}function e(n,t){return ya.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function a(){if(!s)return o();var n=t(s,g),e=n[0]-m[0],r=n[1]-m[1];d|=e|r,m=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function o(){v.on(e+"."+p,null).on(r+"."+p,null),y(d&&ya.event.target===h),f({type:"dragend"})}var c,l=this,s=l.parentNode,f=i.of(l,arguments),h=ya.event.target,g=n(),p=null==g?"drag":"drag-"+g,m=t(s,g),d=0,v=ya.select(ba).on(e+"."+p,a).on(r+"."+p,o),y=H();u?(c=u.apply(l,arguments),c=[c.x-m[0],c.y-m[1]]):c=[0,0],f({type:"dragstart"})}}var i=m(n,"drag","dragstart","dragend"),u=null,a=r(s,ya.mouse,"mousemove","mouseup"),o=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},ya.rebind(n,i,"on")},ya.behavior.zoom=function(){function n(){this.on(w,o).on(Ja+".zoom",l).on(S,s).on("dblclick.zoom",f).on(k,c)}function t(n){return[(n[0]-x[0])/b,(n[1]-x[1])/b]}function e(n){return[n[0]*b+x[0],n[1]*b+x[1]]}function r(n){b=Math.max(_[0],Math.min(_[1],n))}function i(n,t){t=e(t),x[0]+=n[0]-t[0],x[1]+=n[1]-t[1]}function u(){v&&v.domain(d.range().map(function(n){return(n-x[0])/b}).map(d.invert)),M&&M.domain(y.range().map(function(n){return(n-x[1])/b}).map(y.invert))}function a(n){u(),n({type:"zoom",scale:b,translate:x})}function o(){function n(){c=1,i(ya.mouse(r),f),a(u)}function e(){l.on(S,ba===r?s:null).on(E,null),h(c&&ya.event.target===o)}var r=this,u=q.of(r,arguments),o=ya.event.target,c=0,l=ya.select(ba).on(S,n).on(E,e),f=t(ya.mouse(r)),h=H()}function c(){function n(){var n=ya.touches(h);return f=b,s={},n.forEach(function(n){s[n.identifier]=t(n)}),n}function e(){var t=Date.now(),e=n();if(1===e.length){if(500>t-p){var u=e[0],o=s[u.identifier];r(2*b),i(u,o),g(),a(m)}p=t}else if(e.length>1){var u=e[0],c=e[1],l=u[0]-c[0],f=u[1]-c[1];d=l*l+f*f}}function u(){var n=ya.touches(h),t=n[0],e=s[t.identifier];if(u=n[1]){var u,o=s[u.identifier],c=ya.event.scale;if(null==c){var l=(l=u[0]-t[0])*l+(l=u[1]-t[1])*l;c=d&&Math.sqrt(l/d)}t=[(t[0]+u[0])/2,(t[1]+u[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(c*f)}p=null,i(t,e),a(m)}function l(){ya.event.touches.length?n():(v.on(A,null).on(N,null),y.on(w,o).on(k,c),M())}var s,f,h=this,m=q.of(h,arguments),d=0,v=ya.select(ba).on(A,u).on(N,l),y=ya.select(h).on(w,null).on(k,e),M=H();e()}function l(){g(),h||(h=t(ya.mouse(this))),r(Math.pow(2,.002*$a())*b),i(ya.mouse(this),h),a(q.of(this,arguments))}function s(){h=null}function f(){var n=ya.mouse(this),e=t(n),u=Math.log(b)/Math.LN2;r(Math.pow(2,ya.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(q.of(this,arguments))}var h,p,d,v,y,M,x=[0,0],b=1,_=Wa,w="mousedown.zoom",S="mousemove.zoom",E="mouseup.zoom",k="touchstart.zoom",A="touchmove.zoom",N="touchend.zoom",q=m(n,"zoom");return n.translate=function(t){return arguments.length?(x=t.map(Number),u(),n):x},n.scale=function(t){return arguments.length?(b=+t,u(),n):b},n.scaleExtent=function(t){return arguments.length?(_=null==t?Wa:t.map(Number),n):_},n.x=function(t){return arguments.length?(v=t,d=t.copy(),x=[0,0],b=1,n):v},n.y=function(t){return arguments.length?(M=t,y=t.copy(),x=[0,0],b=1,n):M},ya.rebind(n,q,"on")};var $a,Wa=[0,1/0],Ja="onwheel"in Ma?($a=function(){return-ya.event.deltaY*(ya.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Ma?($a=function(){return ya.event.wheelDelta},"mousewheel"):($a=function(){return-ya.event.detail},"MozMousePixelScroll");P.prototype.toString=function(){return this.rgb()+""},ya.hsl=function(n,t,e){return 1===arguments.length?n instanceof Y?O(n.h,n.s,n.l):lt(""+n,st,O):O(+n,+t,+e)};var Ga=Y.prototype=new P;Ga.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,this.l/n)},Ga.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,n*this.l)},Ga.rgb=function(){return R(this.h,this.s,this.l)};var Ka=Math.PI,Qa=1e-6,no=Qa*Qa,to=Ka/180,eo=180/Ka;ya.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?$(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=ft((n=ya.rgb(n)).r,n.g,n.b)).l,n.a,n.b):$(+n,+t,+e)};var ro=W.prototype=new P;ro.brighter=function(n){return $(this.h,this.c,Math.min(100,this.l+io*(arguments.length?n:1)))},ro.darker=function(n){return $(this.h,this.c,Math.max(0,this.l-io*(arguments.length?n:1)))},ro.rgb=function(){return J(this.h,this.c,this.l).rgb()},ya.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):ft((n=ya.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var io=18,uo=.95047,ao=1,oo=1.08883,co=K.prototype=new P;co.brighter=function(n){return G(Math.min(100,this.l+io*(arguments.length?n:1)),this.a,this.b)},co.darker=function(n){return G(Math.max(0,this.l-io*(arguments.length?n:1)),this.a,this.b)},co.rgb=function(){return Q(this.l,this.a,this.b)},ya.rgb=function(n,t,e){return 1===arguments.length?n instanceof ot?at(n.r,n.g,n.b):lt(""+n,at,R):at(~~n,~~t,~~e)};var lo=ot.prototype=new P;lo.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),at(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):at(i,i,i)},lo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),at(~~(n*this.r),~~(n*this.g),~~(n*this.b))},lo.hsl=function(){return st(this.r,this.g,this.b)},lo.toString=function(){return"#"+ct(this.r)+ct(this.g)+ct(this.b)};var so=ya.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});so.forEach(function(n,t){so.set(n,it(t))}),ya.functor=pt,ya.xhr=dt(mt),ya.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=ya.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(i)return i=!1,u;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.substring(t,s-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,f++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e},ya.csv=ya.dsv(",","text/csv"),ya.tsv=ya.dsv("  ","text/tab-separated-values");var fo,ho,go,po,mo,vo=ba[o(ba,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ya.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={callback:n,time:i,next:null};ho?ho.next=u:fo=u,ho=u,go||(po=clearTimeout(po),go=1,vo(Mt))},ya.timer.flush=function(){bt(),_t()};var yo=".",Mo=",",xo=[3,3],bo="$",_o=["y","z","a","f","p","n","Âµ","m","","k","M","G","T","P","E","Z","Y"].map(wt);ya.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ya.round(n,St(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),_o[8+e/3]},ya.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},ya.format=function(n){var t=wo.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],s=t[9],f=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),s){case"n":c=!0,s="g";break;case"%":f=100,h="%",s="f";break;case"p":f=100,h="%",s="r";break;case"b":case"o":case"x":case"X":"#"===u&&(u="0"+s.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":f=-1,s="r"}"#"===u?u="":"$"===u&&(u=bo),"r"!=s||l||(s="g"),null!=l&&("g"==s?l=Math.max(1,Math.min(21,l)):("e"==s||"f"==s)&&(l=Math.max(0,Math.min(20,l)))),s=So.get(s)||Et;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>f){var m=ya.formatPrefix(n,l);n=m.scale(n),h=m.symbol}else n*=f;n=s(n,l);var d=n.lastIndexOf("."),v=0>d?n:n.substring(0,d),y=0>d?"":yo+n.substring(d+1);!a&&c&&(v=Eo(v));var M=u.length+v.length+y.length+(p?0:t.length),x=o>M?new Array(M=o-M+1).join(e):"";return p&&(v=Eo(x+v)),t+=u,n=v+y,("<"===r?t+n+x:">"===r?x+t+n:"^"===r?x.substring(0,M>>=1)+t+n+x.substring(M):t+(p?n:x+n))+h}};var wo=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,So=ya.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ya.round(n,St(n,t))).toFixed(Math.max(0,Math.min(20,St(n*(1+1e-15),t))))}}),Eo=mt;if(xo){var ko=xo.length;Eo=function(n){for(var t=n.length,e=[],r=0,i=xo[0];t>0&&i>0;)e.push(n.substring(t-=i,t+i)),i=xo[r=(r+1)%ko];return e.reverse().join(Mo)}}ya.geo={},kt.prototype={s:0,t:0,add:function(n){At(n,this.t,Ao),At(Ao.s,this.s,this),this.s?this.t+=Ao.t:this.s=Ao.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var Ao=new kt;ya.geo.stream=function(n,t){n&&No.hasOwnProperty(n.type)?No[n.type](n,t):Nt(n,t)};var No={Feature:function(n,t){Nt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)Nt(e[r].geometry,t)}},qo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){qt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)qt(e[r],t,0)},Polygon:function(n,t){Tt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)Tt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)Nt(e[r],t)}};ya.geo.area=function(n){return To=0,ya.geo.stream(n,zo),To};var To,Co=new kt,zo={sphere:function(){To+=4*Ka},point:s,lineStart:s,lineEnd:s,polygonStart:function(){Co.reset(),zo.lineStart=Ct},polygonEnd:function(){var n=2*Co;To+=0>n?4*Ka+n:n,zo.lineStart=zo.lineEnd=zo.point=s}};ya.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=zt([t*to,e*to]);if(v){var i=jt(v,r),u=[i[1],-i[0],0],a=jt(u,i);Ft(a),a=Pt(a);var c=t-p,l=c>0?1:-1,m=a[0]*eo*l,d=Math.abs(c)>180;if(d^(m>l*p&&l*t>m)){var y=a[1]*eo;y>g&&(g=y)}else if(m=(m+360)%360-180,d^(m>l*p&&l*t>m)){var y=-a[1]*eo;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else m=n,d=e;zo.point(n,e),t(n,e)}function u(){zo.lineStart()}function a(){i(m,d),zo.lineEnd(),Math.abs(y)>Qa&&(s=-(h=180)),x[0]=s,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,m,d,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,zo.polygonStart()},polygonEnd:function(){zo.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>Co?(s=-(h=180),f=-(g=90)):y>Qa?g=90:-Qa>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ya.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],l(e[0],i)||l(e[1],i)?(o(i[0],e[1])>o(i[0],i[1])&&(i[1]=e[1]),o(e[0],i[1])>o(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var a,e,p=-1/0,t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(a=o(i[1],e[0]))>p&&(p=a,s=e[0],h=i[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ya.geo.centroid=function(n){Do=jo=Lo=Ho=Fo=Po=Oo=Yo=Ro=Uo=Io=0,ya.geo.stream(n,Vo);var t=Ro,e=Uo,r=Io,i=t*t+e*e+r*r;return no>i&&(t=Po,e=Oo,r=Yo,Qa>jo&&(t=Lo,e=Ho,r=Fo),i=t*t+e*e+r*r,no>i)?[0/0,0/0]:[Math.atan2(e,t)*eo,V(r/Math.sqrt(i))*eo]};var Do,jo,Lo,Ho,Fo,Po,Oo,Yo,Ro,Uo,Io,Vo={sphere:s,point:Yt,lineStart:Ut,lineEnd:It,polygonStart:function(){Vo.lineStart=Vt},polygonEnd:function(){Vo.lineStart=Ut}},Xo=$t(Xt,Qt,te,ee),Zo=[-Ka,0],Bo=1e9;(ya.geo.conicEqualArea=function(){return oe(ce)}).raw=ce,ya.geo.albers=function(){return ya.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ya.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=ya.geo.albers(),a=ya.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ya.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),s=+t[0],f=+t[1];return e=u.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=a.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Qa,f+.12*l+Qa],[s-.214*l-Qa,f+.234*l-Qa]]).stream(c).point,i=o.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Qa,f+.166*l+Qa],[s-.115*l-Qa,f+.234*l-Qa]]).stream(c).point,n},n.scale(1070)};var $o,Wo,Jo,Go,Ko,Qo,nc={point:s,lineStart:s,lineEnd:s,polygonStart:function(){Wo=0,nc.lineStart=le},polygonEnd:function(){nc.lineStart=nc.lineEnd=nc.point=s,$o+=Math.abs(Wo/2)}},tc={point:se,lineStart:s,lineEnd:s,polygonStart:s,polygonEnd:s},ec={point:ge,lineStart:pe,lineEnd:me,polygonStart:function(){ec.lineStart=de},polygonEnd:function(){ec.point=ge,ec.lineStart=pe,ec.lineEnd=me}};ya.geo.path=function(){function n(n){return n&&("function"==typeof o&&u.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=i(u)),ya.geo.stream(n,a)),u.result()}function t(){return a=null,n}var e,r,i,u,a,o=4.5;return n.area=function(n){return $o=0,ya.geo.stream(n,i(nc)),$o},n.centroid=function(n){return Lo=Ho=Fo=Po=Oo=Yo=Ro=Uo=Io=0,ya.geo.stream(n,i(ec)),Io?[Ro/Io,Uo/Io]:Yo?[Po/Yo,Oo/Yo]:Fo?[Lo/Fo,Ho/Fo]:[0/0,0/0]},n.bounds=function(n){return Ko=Qo=-(Jo=Go=1/0),ya.geo.stream(n,i(tc)),[[Jo,Go],[Ko,Qo]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||Me(n):mt,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new fe:new ve(n),"function"!=typeof o&&u.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(u.pointRadius(+t),+t),n):o},n.projection(ya.geo.albersUsa()).context(null)},ya.geo.projection=xe,ya.geo.projectionMutator=be,(ya.geo.equirectangular=function(){return xe(we)}).raw=we.invert=we,ya.geo.rotation=function(n){function t(t){return t=n(t[0]*to,t[1]*to),t[0]*=eo,t[1]*=eo,t}return n=Se(n[0]%360*to,n[1]*to,n.length>2?n[2]*to:0),t.invert=function(t){return t=n.invert(t[0]*to,t[1]*to),t[0]*=eo,t[1]*=eo,t},t},ya.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=Se(-n[0]*to,-n[1]*to,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=eo,n[1]*=eo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=Ne((t=+r)*to,i*to),n):t},n.precision=function(r){return arguments.length?(e=Ne(t*to,(i=+r)*to),n):i},n.angle(90)},ya.geo.distance=function(n,t){var e,r=(t[0]-n[0])*to,i=n[1]*to,u=t[1]*to,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),s=Math.sin(u),f=Math.cos(u);return Math.atan2(Math.sqrt((e=f*a)*e+(e=l*s-c*f*o)*e),c*s+l*f*o)},ya.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ya.range(Math.ceil(u/d)*d,i,d).map(h).concat(ya.range(Math.ceil(l/v)*v,c,v).map(g)).concat(ya.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%d)>Qa}).map(s)).concat(ya.range(Math.ceil(o/m)*m,a,m).filter(function(n){return Math.abs(n%v)>Qa}).map(f))}var e,r,i,u,a,o,c,l,s,f,h,g,p=10,m=p,d=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],v=+t[1],n):[d,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],m=+t[1],n):[p,m]},n.precision=function(t){return arguments.length?(y=+t,s=Te(o,a,90),f=Ce(r,e,y),h=Te(l,c,90),g=Ce(u,i,y),n):y},n.majorExtent([[-180,-90+Qa],[180,90-Qa]]).minorExtent([[-180,-80-Qa],[180,80+Qa]])},ya.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=ze,i=De;return n.distance=function(){return ya.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ya.geo.interpolate=function(n,t){return je(n[0]*to,n[1]*to,t[0]*to,t[1]*to)},ya.geo.length=function(n){return rc=0,ya.geo.stream(n,ic),rc};var rc,ic={sphere:s,point:s,lineStart:Le,lineEnd:s,polygonStart:s,polygonEnd:s},uc=He(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ya.geo.azimuthalEqualArea=function(){return xe(uc)}).raw=uc;var ac=He(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},mt);(ya.geo.azimuthalEquidistant=function(){return xe(ac)}).raw=ac,(ya.geo.conicConformal=function(){return oe(Fe)}).raw=Fe,(ya.geo.conicEquidistant=function(){return oe(Pe)}).raw=Pe;var oc=He(function(n){return 1/n},Math.atan);(ya.geo.gnomonic=function(){return xe(oc)}).raw=oc,Oe.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ka/2]},(ya.geo.mercator=function(){return Ye(Oe)}).raw=Oe;var cc=He(function(){return 1},Math.asin);(ya.geo.orthographic=function(){return xe(cc)}).raw=cc;var lc=He(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ya.geo.stereographic=function(){return xe(lc)}).raw=lc,Re.invert=function(n,t){return[Math.atan2(X(n),Math.cos(t)),V(Math.sin(t)/Z(n))]},(ya.geo.transverseMercator=function(){return Ye(Re)}).raw=Re,ya.geom={},ya.svg={},ya.svg.line=function(){return Ue(mt)};var sc=ya.map({linear:Xe,"linear-closed":Ze,step:Be,"step-before":$e,"step-after":We,basis:tr,"basis-open":er,"basis-closed":rr,bundle:ir,cardinal:Ke,"cardinal-open":Je,"cardinal-closed":Ge,monotone:sr});
sc.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var fc=[0,2/3,1/3,0],hc=[0,1/3,2/3,0],gc=[0,1/6,2/3,1/6];ya.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,s,f,h,g,p,m=pt(e),d=pt(r),v=n.length,y=v-1,M=[],x=[],b=0;if(m===Ie&&r===Ve)t=n;else for(u=0,t=[];v>u;++u)t.push([+m.call(this,i=n[u],u),+d.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,f=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],s=t[a][1]-t[b][1],o*o+c*c>=l*l+s*s){M[u].index=-1;continue}M[f].index=-1}g=M[u].angle,f=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!fr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=Ie,r=Ve;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ya.geom.polygon=function(n){return La(n,pc),n};var pc=ya.geom.polygon.prototype=[];pc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},pc.centroid=function(n){var t,e,r=-1,i=this.length,u=0,a=0,o=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],u+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[u*n,a*n]},pc.clip=function(n){for(var t,e,r,i,u,a,o=pr(n),c=-1,l=this.length-pr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,i=this[c],u=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],hr(a,s,i)?(hr(u,s,i)||n.push(gr(u,a,s,i)),n.push(a)):hr(u,s,i)&&n.push(gr(u,a,s,i)),u=a;o&&n.push(n[0]),s=i}return n},ya.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return mr(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},ya.geom.voronoi=function(n){function t(n){var t,u,a,o=n.map(function(){return[]}),c=pt(e),l=pt(r),s=n.length,f=1e6;if(c===Ie&&l===Ve)t=n;else for(t=new Array(s),a=0;s>a;++a)t[a]=[+c.call(this,u=n[a],a),+l.call(this,u,a)];if(mr(t,function(n){var t,e,r,i,u,a;1===n.a&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),1===n.a?(u=t?t.y:-f,r=n.c-n.b*u,a=e?e.y:f,i=n.c-n.b*a):(r=t?t.x:-f,u=n.c-n.a*r,i=e?e.x:f,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)}),a=ya.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>Qa}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-f,-f],[-f,f],[f,f],[f,-f]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],s=u[1],h=a[0],g=a[1],p=Math.abs(h-l),m=g-s;if(Math.abs(m)<Qa){var d=s>c?-f:f;n.push([-f,d],[f,d])}else if(Qa>p){var v=l>o?-f:f;n.push([v,-f],[v,f])}else{var d=(l-o)*(g-s)>(h-l)*(s-c)?f:-f,y=Math.abs(m)-p;Math.abs(y)<Qa?n.push([0>m?d:-d,d]):(y>0&&(d*=-1),n.push([-f,d],[f,d]))}}}),i)for(a=0;s>a;++a)i.clip(o[a]);for(a=0;s>a;++a)o[a].point=n[a];return o}var e=Ie,r=Ve,i=null;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.clipExtent=function(n){if(!arguments.length)return i&&[i[0],i[2]];if(null==n)i=null;else{var e=+n[0][0],r=+n[0][1],u=+n[1][0],a=+n[1][1];i=ya.geom.polygon([[e,r],[e,a],[u,a],[u,r]])}return t},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):i&&i[2]},t.links=function(n){var t,i,u,a=n.map(function(){return[]}),o=[],c=pt(e),l=pt(r),s=n.length;if(c===Ie&&l===Ve)t=n;else for(t=new Array(s),u=0;s>u;++u)t[u]=[+c.call(this,i=n[u],u),+l.call(this,i,u)];return mr(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(e===Ie&&r===Ve)return ya.geom.delaunay(n);for(var t,i=new Array(c),u=pt(e),a=pt(r),o=-1,c=n.length;++o<c;)(i[o]=[+u.call(this,t=n[o],o),+a.call(this,t,o)]).data=t;return ya.geom.delaunay(i).map(function(n){return n.map(function(n){return n.data})})},t)};var mc={l:"r",r:"l"};ya.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(s-r)<.01)l(n,t,e,r,i,u,a,o);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),s=.5*(a+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=yr()),f?i=l:o=l,h?a=s:c=s,u(n,t,e,r,i,a,o,c)}var s,f,h,g,p,m,d,v,y,M=pt(o),x=pt(c);if(null!=t)m=t,d=e,v=r,y=i;else if(v=y=-(m=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<m&&(m=s.x),s.y<d&&(d=s.y),s.x>v&&(v=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);m>b&&(m=b),d>_&&(d=_),b>v&&(v=b),_>y&&(y=_),f.push(b),h.push(_)}var w=v-m,S=y-d;w>S?y=d+w:v=m+S;var E=yr();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),m,d,v,y)},E.visit=function(n){Mr(n,E,m,d,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],f[g],h[g],m,d,v,y);--g}else n.forEach(E.add);return f=h=n=s=null,E}var a,o=Ie,c=Ve;return(a=arguments.length)?(o=dr,c=vr,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ya.interpolateRgb=xr,ya.interpolateObject=br,ya.interpolateNumber=_r,ya.interpolateString=wr;var dc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;ya.interpolate=Sr,ya.interpolators=[function(n,t){var e=typeof t;return("string"===e?so.has(t)||/^(#|rgb\(|hsl\()/.test(t)?xr:wr:t instanceof P?xr:"object"===e?Array.isArray(t)?Er:br:_r)(n,t)}],ya.interpolateArray=Er;var vc=function(){return mt},yc=ya.map({linear:vc,poly:zr,quad:function(){return qr},cubic:function(){return Tr},sin:function(){return Dr},exp:function(){return jr},circle:function(){return Lr},elastic:Hr,back:Fr,bounce:function(){return Pr}}),Mc=ya.map({"in":mt,out:Ar,"in-out":Nr,"out-in":function(n){return Nr(Ar(n))}});ya.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=yc.get(e)||vc,r=Mc.get(r)||mt,kr(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},ya.interpolateHcl=Or,ya.interpolateHsl=Yr,ya.interpolateLab=Rr,ya.interpolateRound=Ur,ya.transform=function(n){var t=Ma.createElementNS(ya.ns.prefix.svg,"g");return(ya.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ir(e?e.matrix:xc)})(n)},Ir.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var xc={a:1,b:0,c:0,d:1,e:0,f:0};ya.interpolateTransform=Br,ya.layout={},ya.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ya.layout.chord=function(){function n(){var n,l,f,h,g,p={},m=[],d=ya.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];m.push(l),v.push(ya.range(u)),n+=l}for(a&&d.sort(function(n,t){return a(m[n],m[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Ka-s*u)/n,l=0,h=-1;++h<u;){for(f=l,g=-1;++g<u;){var y=d[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},s=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ya.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(m>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=ya.event.x,n.py=ya.event.y,o.resume()}var e,r,i,u,a,o={},c=ya.dispatch("start","tick","end"),l=[1,1],s=.9,f=bc,h=_c,g=-30,p=.1,m=.8,d=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,f,h,m,y,M,x,b=d.length,_=v.length;for(e=0;_>e;++e)o=v[e],f=o.source,h=o.target,M=h.x-f.x,x=h.y-f.y,(m=M*M+x*x)&&(m=r*u[e]*((m=Math.sqrt(m))-i[e])/m,M*=m,x*=m,h.x-=M*(y=f.weight/(h.weight+f.weight)),h.y-=x*y,f.x+=M*(y=1-y),f.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=d[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(ri(t=ya.geom.quadtree(d),r,a),e=-1;++e<b;)(o=d[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=d[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*s,o.y-=(o.py-(o.py=o.y))*s);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(d=n,o):d},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,o):f},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(s=+n,o):s},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(m=+n,o):m},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ya.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;m>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,s,p=d.length,m=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(s=d[e]).index=e,s.weight=0;for(e=0;m>e;++e)s=v[e],"number"==typeof s.source&&(s.source=d[s.source]),"number"==typeof s.target&&(s.target=d[s.target]),++s.source.weight,++s.target.weight;for(e=0;p>e;++e)s=d[e],isNaN(s.x)&&(s.x=n("x",y)),isNaN(s.y)&&(s.y=n("y",M)),isNaN(s.px)&&(s.px=s.x),isNaN(s.py)&&(s.py=s.y);if(i=[],"function"==typeof f)for(e=0;m>e;++e)i[e]=+f.call(this,v[e],e);else for(e=0;m>e;++e)i[e]=f;if(u=[],"function"==typeof h)for(e=0;m>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;m>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,d[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ya.behavior.drag().origin(mt).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?(this.on("mouseover.force",ti).on("mouseout.force",ei).call(e),void 0):e},ya.rebind(o,c,"on")};var bc=20,_c=1;ya.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,s,f=-1,h=t.children=[],g=0,p=a+1;++f<l;)s=n(c[f],p,o),s.parent=t,h.push(s),g+=s.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=oi,i=ui,u=ai;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},ya.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=ya.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ya.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/ya.sum(a),l=ya.range(u.length);null!=e&&l.sort(e===wc?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),s}var t=Number,e=wc,r=0,i=2*Ka;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var wc={};ya.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,c);l=ya.permute(l,f),s=ya.permute(s,f);var h,g,p,m=r.call(n,s,c),d=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=m[g],s[0][g][1]),h=1;d>h;++h)i.call(n,l[h][g],p+=s[h-1][g][1],s[h][g][1]);return o}var t=mt,e=hi,r=gi,i=fi,u=li,a=si;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Sc.get(t)||hi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:Ec.get(t)||gi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var Sc=ya.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(pi),u=n.map(mi),a=ya.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ya.range(n.length).reverse()},"default":hi}),Ec=ya.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;s>t;++t)i+=n[t][e][1];for(t=0,u=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:gi});ya.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),s=r.call(this,l,u),f=i.call(this,s,l,u),u=-1,h=l.length,g=f.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=f[u+1]-(a.x=f[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=s[0]&&o<=s[1]&&(a=c[ya.bisect(f,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=Mi,i=vi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=pt(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return yi(n,t)}:pt(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ya.layout.tree=function(){function n(n,u){function a(n,t){var r=n.children,i=n._tree;if(r&&(u=r.length)){for(var u,o,l,s=r[0],f=s,h=-1;++h<u;)l=r[h],a(l,o),f=c(l,o,f),o=l;Ni(n);var g=.5*(s._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function o(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)o(e[i],t)}}function c(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,s=a._tree.mod,f=o._tree.mod,h=c._tree.mod;o=_i(o),u=bi(u),o&&u;)c=bi(c),a=_i(a),a._tree.ancestor=n,i=o._tree.prelim+f-u._tree.prelim-l+e(o,u),i>0&&(qi(Ti(o,n,r),n,i),l+=i,s+=i),f+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,s+=a._tree.mod;o&&!_i(a)&&(a._tree.thread=o,a._tree.mod+=f-s),u&&!bi(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var l=t.call(this,n,u),s=l[0];Ai(s,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),a(s),o(s,-s._tree.prelim);var f=wi(s,Ei),h=wi(s,Si),g=wi(s,ki),p=f.x-e(f,h)/2,m=h.x+e(h,f)/2,d=g.depth||1;return Ai(s,i?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(m-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),l}var t=ya.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ya.layout.pack=function(){function n(n,u){var a=e.call(this,n,u),o=a[0],c=i[0],l=i[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,Ai(o,function(n){n.r=+s(n.value)}),Ai(o,Li),r){var f=r*(t?1:Math.max(2*o.r/c,2*o.r/l))/2;Ai(o,function(n){n.r+=f}),Ai(o,Li),Ai(o,function(n){n.r-=f})}return Pi(o,c/2,l/2,t?1:1/Math.max(2*o.r/c,2*o.r/l)),a}var t,e=ya.layout.hierarchy().sort(Ci),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ya.layout.cluster=function(){function n(n,u){var a,o=t.call(this,n,u),c=o[0],l=0;Ai(c,function(n){var t=n.children;t&&t.length?(n.x=Ri(t),n.y=Yi(t)):(n.x=a?l+=e(n,a):0,n.y=0,a=n)});var s=Ui(c),f=Ii(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Ai(c,i?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),o}var t=ya.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ya.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=f(e),s=[],h=u.slice(),p=1/0,m="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(a=h[c-1]),s.area+=a.area,"squarify"!==g||(o=r(s,m))<=p?(h.pop(),p=o):(s.area-=s.pop().area,i(s,m,l,!1),m=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(i(s,m,l,!0),s.length=s.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=f(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,null!=u.z&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=s,o+=i.dx=Math.min(e.x+e.dx-o,s?c(i.area/s):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=s,l+=i.dy=Math.min(e.y+e.dy-l,s?c(i.area/s):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=ya.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Vi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Vi(t):Xi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Xi(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Vi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},ii(u,o)},ya.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ya.random.normal.apply(ya,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},ya.scale={};var kc={floor:mt,ceil:mt};ya.scale.linear=function(){return Ki([0,1],[0,1],Sr,!1)},ya.scale.log=function(){return uu(ya.scale.linear().domain([0,1]),10,!0,[1,10])};var Ac=ya.format(".0e"),Nc={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ya.scale.pow=function(){return au(ya.scale.linear(),1,[0,1])},ya.scale.sqrt=function(){return ya.scale.pow().exponent(.5)},ya.scale.ordinal=function(){return cu([],{t:"range",a:[[]]})},ya.scale.category10=function(){return ya.scale.ordinal().range(qc)},ya.scale.category20=function(){return ya.scale.ordinal().range(Tc)},ya.scale.category20b=function(){return ya.scale.ordinal().range(Cc)},ya.scale.category20c=function(){return ya.scale.ordinal().range(zc)};var qc=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ut),Tc=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ut),Cc=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ut),zc=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ut);ya.scale.quantile=function(){return lu([],[])},ya.scale.quantize=function(){return su(0,1,[0,1])},ya.scale.threshold=function(){return fu([.5],[0,1])},ya.scale.identity=function(){return hu([0,1])},ya.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+Dc,o=i.apply(this,arguments)+Dc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Ka>c?"0":"1",s=Math.cos(a),f=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=jc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=gu,e=pu,r=mu,i=du;return n.innerRadius=function(e){return arguments.length?(t=pt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=pt(t),n):e},n.startAngle=function(t){return arguments.length?(r=pt(t),n):r},n.endAngle=function(t){return arguments.length?(i=pt(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+Dc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var Dc=-Ka/2,jc=2*Ka-1e-6;ya.svg.line.radial=function(){var n=Ue(vu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},$e.reverse=We,We.reverse=$e,ya.svg.area=function(){return yu(mt)},ya.svg.area.radial=function(){var n=yu(vu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ya.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+Dc,s=l.call(n,i,r)+Dc;return{r:u,a0:a,a1:s,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(s),u*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ka)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=ze,a=De,o=Mu,c=mu,l=du;return n.radius=function(t){return arguments.length?(o=pt(t),n):o},n.source=function(t){return arguments.length?(u=pt(t),n):u},n.target=function(t){return arguments.length?(a=pt(t),n):a},n.startAngle=function(t){return arguments.length?(c=pt(t),n):c},n.endAngle=function(t){return arguments.length?(l=pt(t),n):l},n},ya.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=ze,e=De,r=xu;return n.source=function(e){return arguments.length?(t=pt(e),n):t},n.target=function(t){return arguments.length?(e=pt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ya.svg.diagonal.radial=function(){var n=ya.svg.diagonal(),t=xu,e=n.projection;return n.projection=function(n){return arguments.length?e(bu(t=n)):t},n},ya.svg.symbol=function(){function n(n,r){return(Lc.get(t.call(this,n,r))||Su)(e.call(this,n,r))}var t=wu,e=_u;return n.type=function(e){return arguments.length?(t=pt(e),n):t},n.size=function(t){return arguments.length?(e=pt(t),n):e},n};var Lc=ya.map({circle:Su,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Oc)),e=t*Oc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Pc),e=t*Pc/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Pc),e=t*Pc/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ya.svg.symbolTypes=Lc.keys();var Hc,Fc,Pc=Math.sqrt(3),Oc=Math.tan(30*to),Yc=[],Rc=0;Yc.call=Ya.call,Yc.empty=Ya.empty,Yc.node=Ya.node,Yc.size=Ya.size,ya.transition=function(n){return arguments.length?Hc?n.transition():n:Ia.transition()},ya.transition.prototype=Yc,Yc.select=function(n){var t,e,r,i=this.id,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,a))?("__data__"in r&&(e.__data__=r.__data__),Nu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return Eu(u,i)},Yc.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];n=y(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){u=r.__transition__[a],e=n.call(r,r.__data__,f,c),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)(i=e[g])&&Nu(i,g,a,u),t.push(i)}return Eu(o,a)},Yc.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return Eu(i,this.id)},Yc.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):T(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Yc.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?Br:Sr,o=ya.ns.qualify(n);return ku(this,"attr."+n,t,o.local?u:i)},Yc.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ya.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yc.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=ba.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=Sr(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return ku(this,"style."+n,t,i)},Yc.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,ba.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Yc.text=function(n){return ku(this,"text",n,Au)},Yc.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},Yc.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=ya.ease.apply(ya,arguments)),T(this,function(e){e.__transition__[t].ease=n}))},Yc.delay=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=0|n.call(e,e.__data__,r,i)}:(n|=0,function(e){e.__transition__[t].delay=n}))},Yc.duration=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,0|n.call(e,e.__data__,r,i))}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},Yc.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Fc,i=Hc;Hc=e,T(this,function(t,r,i){Fc=t.__transition__[e],n.call(t,t.__data__,r,i)}),Fc=r,Hc=i}else T(this,function(r){var i=r.__transition__[e];(i.event||(i.event=ya.dispatch("start","end"))).on(n,t)});return this},Yc.transition=function(){for(var n,t,e,r,i=this.id,u=++Rc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,Nu(e,l,u,r)),n.push(e)}return Eu(a,u)},ya.svg.axis=function(){function n(n){n.each(function(){var n,f=ya.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=Cu(e,h,s),m=f.selectAll(".tick.minor").data(p,String),d=m.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=ya.transition(m.exit()).style("opacity",1e-6).remove(),y=ya.transition(m).style("opacity",1),M=f.selectAll(".tick.major").data(h,String),x=M.enter().insert("g",".domain").attr("class","tick major").style("opacity",1e-6),b=ya.transition(M.exit()).style("opacity",1e-6).remove(),_=ya.transition(M).style("opacity",1),w=Bi(e),S=f.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),ya.transition(S)),k=e.copy(),A=this.__chart__||k;
this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=qu,d.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=qu,d.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=Tu,d.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=Tu,d.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.rangeBand){var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}else x.call(n,A),_.call(n,k),b.call(n,k),d.call(n,A),y.call(n,k),v.call(n,k)})}var t,e=ya.scale.linear(),r=Uc,i=6,u=6,a=6,o=3,c=[10],l=null,s=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ic?t+"":Uc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(s=+t,n):s},n};var Uc="bottom",Ic={top:1,right:1,bottom:1,left:1};ya.svg.brush=function(){function n(u){u.each(function(){var u,a=ya.select(this),s=a.selectAll(".background").data([0]),f=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(l,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),s.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Vc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Bi(o),s.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Bi(c),s.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=ya.event.changedTouches;return n?ya.touches(M,n)[0]:ya.mouse(M)}function l(){32==ya.event.keyCode&&(k||(v=null,N[0]-=s[1][0],N[1]-=s[1][1],k=2),g())}function h(){32==ya.event.keyCode&&2==k&&(N[0]+=s[1][0],N[1]+=s[1][1],k=0,g())}function p(){var n=i(),u=!1;y&&(n[0]+=y[0],n[1]+=y[1]),k||(ya.event.altKey?(v||(v=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),N[0]=s[+(n[0]<v[0])][0],N[1]=s[+(n[1]<v[1])][1]):v=null),S&&m(n,o,0)&&(e(_),u=!0),E&&m(n,c,1)&&(r(_),u=!0),u&&(t(_),b({type:"brush",mode:k?"move":"resize"}))}function m(n,t,e){var r,i,a=Bi(t),o=a[0],c=a[1],l=N[e],h=s[1][e]-s[0][e];return k&&(o-=l,c-=h+l),r=f[e]?Math.max(o,Math.min(c,n[e])):n[e],k?i=(r+=l)+h:(v&&(l=Math.max(o,Math.min(c,2*v[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function d(){p(),_.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ya.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),A(),b({type:"brushend"})}var v,y,M=this,x=ya.select(ya.event.target),b=a.of(M,arguments),_=ya.select(M),w=x.datum(),S=!/^(n|s)$/.test(w)&&o,E=!/^(e|w)$/.test(w)&&c,k=x.classed("extent"),A=H(),N=i(),q=ya.select(ba).on("keydown.brush",l).on("keyup.brush",h);if(ya.event.changedTouches?q.on("touchmove.brush",p).on("touchend.brush",d):q.on("mousemove.brush",p).on("mouseup.brush",d),k)N[0]=s[0][0]-N[0],N[1]=s[0][1]-N[1];else if(w){var T=+/w$/.test(w),C=+/^n/.test(w);y=[s[1-T][0]-N[0],s[1-C][1]-N[1]],N[0]=s[T][0],N[1]=s[C][1]}else ya.event.altKey&&(v=N.slice());_.style("pointer-events","none").selectAll(".resize").style("display",null),ya.select("body").style("cursor",x.style("cursor")),b({type:"brushstart"}),p()}var u,a=m(n,"brushstart","brush","brushend"),o=null,c=null,l=Xc[0],s=[[0,0],[0,0]],f=[!0,!0];return n.x=function(t){return arguments.length?(o=t,l=Xc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,l=Xc[!o<<1|!c],n):c},n.clamp=function(t){return arguments.length?(o&&c?f=[!!t[0],!!t[1]]:(o||c)&&(f[+!o]=!!t),n):o&&c?f:o||c?f[+!o]:null},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},ya.rebind(n,a,"on")};var Vc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Xc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];ya.time={};var Zc=Date,Bc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];zu.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){$c.setUTCDate.apply(this._,arguments)},setDay:function(){$c.setUTCDay.apply(this._,arguments)},setFullYear:function(){$c.setUTCFullYear.apply(this._,arguments)},setHours:function(){$c.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){$c.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){$c.setUTCMinutes.apply(this._,arguments)},setMonth:function(){$c.setUTCMonth.apply(this._,arguments)},setSeconds:function(){$c.setUTCSeconds.apply(this._,arguments)},setTime:function(){$c.setTime.apply(this._,arguments)}};var $c=Date.prototype,Wc="%a %b %e %X %Y",Jc="%m/%d/%Y",Gc="%H:%M:%S",Kc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Qc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],nl=["January","February","March","April","May","June","July","August","September","October","November","December"],tl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ya.time.year=Du(function(n){return n=ya.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ya.time.years=ya.time.year.range,ya.time.years.utc=ya.time.year.utc.range,ya.time.day=Du(function(n){var t=new Zc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ya.time.days=ya.time.day.range,ya.time.days.utc=ya.time.day.utc.range,ya.time.dayOfYear=function(n){var t=ya.time.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Bc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=ya.time[n]=Du(function(n){return(n=ya.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ya.time.year(n).getDay();return Math.floor((ya.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ya.time[n+"s"]=e.range,ya.time[n+"s"].utc=e.utc.range,ya.time[n+"OfYear"]=function(n){var e=ya.time.year(n).getDay();return Math.floor((ya.time.dayOfYear(n)+(e+t)%7)/7)}}),ya.time.week=ya.time.sunday,ya.time.weeks=ya.time.sunday.range,ya.time.weeks.utc=ya.time.sunday.utc.range,ya.time.weekOfYear=ya.time.sundayOfYear,ya.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)37===n.charCodeAt(o)&&(a.push(n.substring(c,o)),null!=(i=fl[r=n.charAt(++o)])&&(r=n.charAt(++o)),(u=hl[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Lu(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var i=new Zc;return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var el=Hu(Kc),rl=Fu(Kc),il=Hu(Qc),ul=Fu(Qc),al=Hu(nl),ol=Fu(nl),cl=Hu(tl),ll=Fu(tl),sl=/^%/,fl={"-":"",_:" ",0:"0"},hl={a:function(n){return Qc[n.getDay()]},A:function(n){return Kc[n.getDay()]},b:function(n){return tl[n.getMonth()]},B:function(n){return nl[n.getMonth()]},c:ya.time.format(Wc),d:function(n,t){return Pu(n.getDate(),t,2)},e:function(n,t){return Pu(n.getDate(),t,2)},H:function(n,t){return Pu(n.getHours(),t,2)},I:function(n,t){return Pu(n.getHours()%12||12,t,2)},j:function(n,t){return Pu(1+ya.time.dayOfYear(n),t,3)},L:function(n,t){return Pu(n.getMilliseconds(),t,3)},m:function(n,t){return Pu(n.getMonth()+1,t,2)},M:function(n,t){return Pu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Pu(n.getSeconds(),t,2)},U:function(n,t){return Pu(ya.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Pu(ya.time.mondayOfYear(n),t,2)},x:ya.time.format(Jc),X:ya.time.format(Gc),y:function(n,t){return Pu(n.getFullYear()%100,t,2)},Y:function(n,t){return Pu(n.getFullYear()%1e4,t,4)},Z:aa,"%":function(){return"%"}},gl={a:Ou,A:Yu,b:Vu,B:Xu,c:Zu,d:Qu,e:Qu,H:ta,I:ta,j:na,L:ia,m:Ku,M:ea,p:ua,S:ra,U:Uu,w:Ru,W:Iu,x:Bu,X:$u,y:Ju,Y:Wu,"%":oa},pl=/^\s*\d+/,ml=ya.map({am:0,pm:1});ya.time.format.utc=function(n){function t(n){try{Zc=zu;var t=new Zc;return t._=n,e(t)}finally{Zc=Date}}var e=ya.time.format(n);return t.parse=function(n){try{Zc=zu;var t=e.parse(n);return t&&t._}finally{Zc=Date}},t.toString=e.toString,t};var dl=ya.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");ya.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ca:dl,ca.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ca.toString=dl.toString,ya.time.second=Du(function(n){return new Zc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ya.time.seconds=ya.time.second.range,ya.time.seconds.utc=ya.time.second.utc.range,ya.time.minute=Du(function(n){return new Zc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ya.time.minutes=ya.time.minute.range,ya.time.minutes.utc=ya.time.minute.utc.range,ya.time.hour=Du(function(n){var t=n.getTimezoneOffset()/60;return new Zc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ya.time.hours=ya.time.hour.range,ya.time.hours.utc=ya.time.hour.utc.range,ya.time.month=Du(function(n){return n=ya.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ya.time.months=ya.time.month.range,ya.time.months.utc=ya.time.month.utc.range;var vl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],yl=[[ya.time.second,1],[ya.time.second,5],[ya.time.second,15],[ya.time.second,30],[ya.time.minute,1],[ya.time.minute,5],[ya.time.minute,15],[ya.time.minute,30],[ya.time.hour,1],[ya.time.hour,3],[ya.time.hour,6],[ya.time.hour,12],[ya.time.day,1],[ya.time.day,2],[ya.time.week,1],[ya.time.month,1],[ya.time.month,3],[ya.time.year,1]],Ml=[[ya.time.format("%Y"),Xt],[ya.time.format("%B"),function(n){return n.getMonth()}],[ya.time.format("%b %d"),function(n){return 1!=n.getDate()}],[ya.time.format("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[ya.time.format("%I %p"),function(n){return n.getHours()}],[ya.time.format("%I:%M"),function(n){return n.getMinutes()}],[ya.time.format(":%S"),function(n){return n.getSeconds()}],[ya.time.format(".%L"),function(n){return n.getMilliseconds()}]],xl=ya.scale.linear(),bl=fa(Ml);yl.year=function(n,t){return xl.domain(n.map(ga)).ticks(t).map(ha)},ya.time.scale=function(){return la(ya.scale.linear(),yl,bl)};var _l=yl.map(function(n){return[n[0].utc,n[1]]}),wl=[[ya.time.format.utc("%Y"),Xt],[ya.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[ya.time.format.utc("%b %d"),function(n){return 1!=n.getUTCDate()}],[ya.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[ya.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[ya.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[ya.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[ya.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],Sl=fa(wl);return _l.year=function(n,t){return xl.domain(n.map(ma)).ticks(t).map(pa)},ya.time.scale.utc=function(){return la(ya.scale.linear(),_l,Sl)},ya.text=dt(function(n){return n.responseText}),ya.json=function(n,t){return vt(n,"application/json",da,t)},ya.html=function(n,t){return vt(n,"text/html",va,t)},ya.xml=dt(function(n){return n.responseXML}),ya}();
/*! gridster.js - v0.1.0 - 2013-02-15
* http://gridster.net/
* Copyright (c) 2013 ducksboard; Licensed MIT */


;(function($, window, document, undefined){
    /**
    * Creates objects with coordinates (x1, y1, x2, y2, cx, cy, width, height)
    * to simulate DOM elements on the screen.
    * Coords is used by Gridster to create a faux grid with any DOM element can
    * collide.
    *
    * @class Coords
    * @param {HTMLElement|Object} obj The jQuery HTMLElement or a object with: left,
    * top, width and height properties.
    * @return {Object} Coords instance.
    * @constructor
    */
    function Coords(obj) {
        if (obj[0] && $.isPlainObject(obj[0])) {
            this.data = obj[0];
        }else {
            this.el = obj;
        }

        this.isCoords = true;
        this.coords = {};
        this.init();
        return this;
    }


    var fn = Coords.prototype;


    fn.init = function(){
        this.set();
        this.original_coords = this.get();
    };


    fn.set = function(update, not_update_offsets) {
        var el = this.el;

        if (el && !update) {
            this.data = el.offset();
            this.data.width = el.width();
            this.data.height = el.height();
        }

        if (el && update && !not_update_offsets) {
            var offset = el.offset();
            this.data.top = offset.top;
            this.data.left = offset.left;
        }

        var d = this.data;

        this.coords.x1 = d.left;
        this.coords.y1 = d.top;
        this.coords.x2 = d.left + d.width;
        this.coords.y2 = d.top + d.height;
        this.coords.cx = d.left + (d.width / 2);
        this.coords.cy = d.top + (d.height / 2);
        this.coords.width  = d.width;
        this.coords.height = d.height;
        this.coords.el  = el || false ;

        return this;
    };


    fn.update = function(data){
        if (!data && !this.el) {
            return this;
        }

        if (data) {
            var new_data = $.extend({}, this.data, data);
            this.data = new_data;
            return this.set(true, true);
        }

        this.set(true);
        return this;
    };


    fn.get = function(){
        return this.coords;
    };


    //jQuery adapter
    $.fn.coords = function() {
        if (this.data('coords') ) {
            return this.data('coords');
        }

        var ins = new Coords(this, arguments[0]);
        this.data('coords', ins);
        return ins;
    };

}(jQuery, window, document));

;(function($, window, document, undefined){

    var defaults = {
        colliders_context: document.body
        // ,on_overlap: function(collider_data){},
        // on_overlap_start : function(collider_data){},
        // on_overlap_stop : function(collider_data){}
    };


    /**
    * Detects collisions between a DOM element against other DOM elements or
    * Coords objects.
    *
    * @class Collision
    * @uses Coords
    * @param {HTMLElement} el The jQuery wrapped HTMLElement.
    * @param {HTMLElement|Array} colliders Can be a jQuery collection
    *  of HTMLElements or an Array of Coords instances.
    * @param {Object} [options] An Object with all options you want to
    *        overwrite:
    *   @param {Function} [options.on_overlap_start] Executes a function the first
    *    time each `collider ` is overlapped.
    *   @param {Function} [options.on_overlap_stop] Executes a function when a
    *    `collider` is no longer collided.
    *   @param {Function} [options.on_overlap] Executes a function when the
    * mouse is moved during the collision.
    * @return {Object} Collision instance.
    * @constructor
    */
    function Collision(el, colliders, options) {
        this.options = $.extend(defaults, options);
        this.$element = el;
        this.last_colliders = [];
        this.last_colliders_coords = [];
        if (typeof colliders === 'string' || colliders instanceof jQuery) {
            this.$colliders = $(colliders,
                 this.options.colliders_context).not(this.$element);
        }else{
            this.colliders = $(colliders);
        }

        this.init();
    }


    var fn = Collision.prototype;


    fn.init = function() {
        this.find_collisions();
    };


    fn.overlaps = function(a, b) {
        var x = false;
        var y = false;

        if ((b.x1 >= a.x1 && b.x1 <= a.x2) ||
            (b.x2 >= a.x1 && b.x2 <= a.x2) ||
            (a.x1 >= b.x1 && a.x2 <= b.x2)
        ) { x = true; }

        if ((b.y1 >= a.y1 && b.y1 <= a.y2) ||
            (b.y2 >= a.y1 && b.y2 <= a.y2) ||
            (a.y1 >= b.y1 && a.y2 <= b.y2)
        ) { y = true; }

        return (x && y);
    };


    fn.detect_overlapping_region = function(a, b){
        var regionX = '';
        var regionY = '';

        if (a.y1 > b.cy && a.y1 < b.y2) { regionX = 'N'; }
        if (a.y2 > b.y1 && a.y2 < b.cy) { regionX = 'S'; }
        if (a.x1 > b.cx && a.x1 < b.x2) { regionY = 'W'; }
        if (a.x2 > b.x1 && a.x2 < b.cx) { regionY = 'E'; }

        return (regionX + regionY) || 'C';
    };


    fn.calculate_overlapped_area_coords = function(a, b){
        var x1 = Math.max(a.x1, b.x1);
        var y1 = Math.max(a.y1, b.y1);
        var x2 = Math.min(a.x2, b.x2);
        var y2 = Math.min(a.y2, b.y2);

        return $({
            left: x1,
            top: y1,
             width : (x2 - x1),
            height: (y2 - y1)
          }).coords().get();
    };


    fn.calculate_overlapped_area = function(coords){
        return (coords.width * coords.height);
    };


    fn.manage_colliders_start_stop = function(new_colliders_coords, start_callback, stop_callback){
        var last = this.last_colliders_coords;

        for (var i = 0, il = last.length; i < il; i++) {
            if ($.inArray(last[i], new_colliders_coords) === -1) {
                start_callback.call(this, last[i]);
            }
        }

        for (var j = 0, jl = new_colliders_coords.length; j < jl; j++) {
            if ($.inArray(new_colliders_coords[j], last) === -1) {
                stop_callback.call(this, new_colliders_coords[j]);
            }

        }
    };


    fn.find_collisions = function(player_data_coords){
        var self = this;
        var colliders_coords = [];
        var colliders_data = [];
        var $colliders = (this.colliders || this.$colliders);
        var count = $colliders.length;
        var player_coords = self.$element.coords()
                             .update(player_data_coords || false).get();

        while(count--){
          var $collider = self.$colliders ?
                           $($colliders[count]) : $colliders[count];
          var $collider_coords_ins = ($collider.isCoords) ?
                  $collider : $collider.coords();
          var collider_coords = $collider_coords_ins.get();
          var overlaps = self.overlaps(player_coords, collider_coords);

          if (!overlaps) {
            continue;
          }

          var region = self.detect_overlapping_region(
              player_coords, collider_coords);

            //todo: make this an option
            if (region === 'C'){
                var area_coords = self.calculate_overlapped_area_coords(
                    player_coords, collider_coords);
                var area = self.calculate_overlapped_area(area_coords);
                var collider_data = {
                    area: area,
                    area_coords : area_coords,
                    region: region,
                    coords: collider_coords,
                    player_coords: player_coords,
                    el: $collider
                };

                if (self.options.on_overlap) {
                    self.options.on_overlap.call(this, collider_data);
                }
                colliders_coords.push($collider_coords_ins);
                colliders_data.push(collider_data);
            }
        }

        if (self.options.on_overlap_stop || self.options.on_overlap_start) {
            this.manage_colliders_start_stop(colliders_coords,
                self.options.on_overlap_stop, self.options.on_overlap_start);
        }

        this.last_colliders_coords = colliders_coords;

        return colliders_data;
    };


    fn.get_closest_colliders = function(player_data_coords){
        var colliders = this.find_collisions(player_data_coords);

        colliders.sort(function(a, b) {
            /* if colliders are being overlapped by the "C" (center) region,
             * we have to set a lower index in the array to which they are placed
             * above in the grid. */
            if (a.region === 'C' && b.region === 'C') {
                if (a.coords.y1 < b.coords.y1 || a.coords.x1 < b.coords.x1) {
                    return - 1;
                }else{
                    return 1;
                }
            }

            if (a.area < b.area) {
                return 1;
            }

            return 1;
        });
        return colliders;
    };


    //jQuery adapter
    $.fn.collision = function(collider, options) {
          return new Collision( this, collider, options );
    };


}(jQuery, window, document));

;(function(window, undefined) {
    /* Debounce and throttle functions taken from underscore.js */
    window.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          if (immediate && !timeout) func.apply(context, args);
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
    };


    window.throttle = function(func, wait) {
        var context, args, timeout, throttling, more, result;
        var whenDone = debounce(
            function(){ more = throttling = false; }, wait);
        return function() {
          context = this; args = arguments;
          var later = function() {
            timeout = null;
            if (more) func.apply(context, args);
            whenDone();
          };
          if (!timeout) timeout = setTimeout(later, wait);
          if (throttling) {
            more = true;
          } else {
            result = func.apply(context, args);
          }
          whenDone();
          throttling = true;
          return result;
        };
    };

})(window);

;(function($, window, document, undefined){

    var defaults = {
        items: '.gs_w',
        distance: 1,
        limit: true,
        offset_left: 0,
        autoscroll: true,
        ignore_dragging: ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'],
        handle: null
        // drag: function(e){},
        // start : function(e, ui){},
        // stop : function(e){}
    };

    var $window = $(window);
    var isTouch = !!('ontouchstart' in window);
    var pointer_events = {
        start: isTouch ? 'touchstart' : 'mousedown.draggable',
        move: isTouch ? 'touchmove' : 'mousemove.draggable',
        end: isTouch ? 'touchend' : 'mouseup.draggable'
    };

    /**
    * Basic drag implementation for DOM elements inside a container.
    * Provide start/stop/drag callbacks.
    *
    * @class Draggable
    * @param {HTMLElement} el The HTMLelement that contains all the widgets
    *  to be dragged.
    * @param {Object} [options] An Object with all options you want to
    *        overwrite:
    *    @param {HTMLElement|String} [options.items] Define who will
    *     be the draggable items. Can be a CSS Selector String or a
    *     collection of HTMLElements.
    *    @param {Number} [options.distance] Distance in pixels after mousedown
    *     the mouse must move before dragging should start.
    *    @param {Boolean} [options.limit] Constrains dragging to the width of
    *     the container
    *    @param {offset_left} [options.offset_left] Offset added to the item
    *     that is being dragged.
    *    @param {Number} [options.drag] Executes a callback when the mouse is
    *     moved during the dragging.
    *    @param {Number} [options.start] Executes a callback when the drag
    *     starts.
    *    @param {Number} [options.stop] Executes a callback when the drag stops.
    * @return {Object} Returns `el`.
    * @constructor
    */
    function Draggable(el, options) {
      this.options = $.extend({}, defaults, options);
      this.$body = $(document.body);
      this.$container = $(el);
      this.$dragitems = $(this.options.items, this.$container);
      this.is_dragging = false;
      this.player_min_left = 0 + this.options.offset_left;
      this.init();
    }

    var fn = Draggable.prototype;

    fn.init = function() {
        this.calculate_positions();
        this.$container.css('position', 'relative');
        this.disabled = false;
        this.events();

        this.on_window_resize = throttle($.proxy(this.calculate_positions, this), 200);
        $(window).bind('resize', this.on_window_resize);
    };

    fn.events = function() {
        this.proxied_on_select_start = $.proxy(this.on_select_start, this);
        this.$container.on('selectstart', this.proxied_on_select_start);

        this.proxied_drag_handler = $.proxy(this.drag_handler, this);
        this.$container.on(pointer_events.start, this.options.items, this.proxied_drag_handler);

        this.proxied_pointer_events_end = $.proxy(function(e) {
            this.is_dragging = false;
            if (this.disabled) { return; }
            this.$body.off(pointer_events.move);
            if (this.drag_start) {
                this.on_dragstop(e);
            }
        }, this);
        this.$body.on(pointer_events.end, this.proxied_pointer_events_end);
    };

    fn.get_actual_pos = function($el) {
        var pos = $el.position();
        return pos;
    };


    fn.get_mouse_pos = function(e) {
        if (isTouch) {
            var oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
        }

        return {
            left: e.clientX,
            top: e.clientY
        };
    };


    fn.get_offset = function(e) {
        e.preventDefault();
        var mouse_actual_pos = this.get_mouse_pos(e);
        var diff_x = Math.round(
            mouse_actual_pos.left - this.mouse_init_pos.left);
        var diff_y = Math.round(mouse_actual_pos.top - this.mouse_init_pos.top);

        var left = Math.round(this.el_init_offset.left + diff_x - this.baseX);
        var top = Math.round(
            this.el_init_offset.top + diff_y - this.baseY + this.scrollOffset);

        if (this.options.limit) {
            if (left > this.player_max_left) {
                left = this.player_max_left;
            }else if(left < this.player_min_left) {
                left = this.player_min_left;
            }
        }

        return {
            left: left,
            top: top,
            mouse_left: mouse_actual_pos.left,
            mouse_top: mouse_actual_pos.top
        };
    };


    fn.manage_scroll = function(offset) {
        /* scroll document */
        var nextScrollTop;
        var scrollTop = $window.scrollTop();
        var min_window_y = scrollTop;
        var max_window_y = min_window_y + this.window_height;

        var mouse_down_zone = max_window_y - 50;
        var mouse_up_zone = min_window_y + 50;

        var abs_mouse_left = offset.mouse_left;
        var abs_mouse_top = min_window_y + offset.mouse_top;

        var max_player_y = (this.doc_height - this.window_height +
            this.player_height);

        if (abs_mouse_top >= mouse_down_zone) {
            nextScrollTop = scrollTop + 30;
            if (nextScrollTop < max_player_y) {
                $window.scrollTop(nextScrollTop);
                this.scrollOffset = this.scrollOffset + 30;
            }
        }

        if (abs_mouse_top <= mouse_up_zone) {
            nextScrollTop = scrollTop - 30;
            if (nextScrollTop > 0) {
                $window.scrollTop(nextScrollTop);
                this.scrollOffset = this.scrollOffset - 30;
            }
        }
    };


    fn.calculate_positions = function(e) {
        this.window_height = $window.height();
    };


    fn.drag_handler = function(e) {
        var node = e.target.nodeName;
        if (this.disabled || e.which !== 1 && !isTouch) {
            return;
        }

        if (this.ignore_drag(e)) {
            return;
        }

        var self = this;
        var first = true;
        this.$player = $(e.currentTarget);

        this.el_init_pos = this.get_actual_pos(this.$player);
        this.mouse_init_pos = this.get_mouse_pos(e);
        this.offsetY = this.mouse_init_pos.top - this.el_init_pos.top;

        this.on_pointer_events_move = function(mme){
            var mouse_actual_pos = self.get_mouse_pos(mme);
            var diff_x = Math.abs(
                mouse_actual_pos.left - self.mouse_init_pos.left);
            var diff_y = Math.abs(
                mouse_actual_pos.top - self.mouse_init_pos.top);
            if (!(diff_x > self.options.distance ||
                diff_y > self.options.distance)
                ) {
                return false;
            }

            if (first) {
                first = false;
                self.on_dragstart.call(self, mme);
                return false;
            }

            if (self.is_dragging === true) {
                self.on_dragmove.call(self, mme);
            }

            return false;
        };

        this.$body.on(pointer_events.move, this.on_pointer_events_move);

        return false;
    };


    fn.on_dragstart = function(e) {
        e.preventDefault();
        this.drag_start = true;
        this.is_dragging = true;
        var offset = this.$container.offset();
        this.baseX = Math.round(offset.left);
        this.baseY = Math.round(offset.top);
        this.doc_height = $(document).height();

        if (this.options.helper === 'clone') {
            this.$helper = this.$player.clone()
                .appendTo(this.$container).addClass('helper');
            this.helper = true;
        }else{
            this.helper = false;
        }
        this.scrollOffset = 0;
        this.el_init_offset = this.$player.offset();
        this.player_width = this.$player.width();
        this.player_height = this.$player.height();
        this.player_max_left = (this.$container.width() - this.player_width +
            this.options.offset_left);

        if (this.options.start) {
            this.options.start.call(this.$player, e, {
                helper: this.helper ? this.$helper : this.$player
            });
        }
        return false;
    };


    fn.on_dragmove = function(e) {
        var offset = this.get_offset(e);

        this.options.autoscroll && this.manage_scroll(offset);

        (this.helper ? this.$helper : this.$player).css({
            'position': 'absolute',
            'left' : offset.left,
            'top' : offset.top
        });

        var ui = {
            'position': {
                'left': offset.left,
                'top': offset.top
            }
        };

        if (this.options.drag) {
            this.options.drag.call(this.$player, e, ui);
        }
        return false;
    };


    fn.on_dragstop = function(e) {
        var offset = this.get_offset(e);
        this.drag_start = false;

        var ui = {
            'position': {
                'left': offset.left,
                'top': offset.top
            }
        };

        if (this.options.stop) {
            this.options.stop.call(this.$player, e, ui);
        }

        if (this.helper) {
            this.$helper.remove();
        }

        return false;
    };

    fn.on_select_start = function(e) {
        if (this.disabled) { return; }

        if (this.ignore_drag(e)) {
            return;
        }

        return false;
    };

    fn.enable = function() {
        this.disabled = false;
    };

    fn.disable = function() {
        this.disabled = true;
    };


    fn.destroy = function(){
        this.disable();

        this.$container.off('selectstart', this.proxied_on_select_start);
        this.$container.off(pointer_events.start, this.proxied_drag_handler);
        this.$body.off(pointer_events.end, this.proxied_pointer_events_end);
        this.$body.off(pointer_events.move, this.on_pointer_events_move);
        $(window).unbind('resize', this.on_window_resize);

        $.removeData(this.$container, 'drag');
    };

    fn.ignore_drag = function(event) {
        if (this.options.handle) {
            return !$(event.target).is(this.options.handle);
        }

        return $.inArray(event.target.nodeName, this.options.ignore_dragging) >= 0;
    };

    //jQuery adapter
    $.fn.drag = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'drag')) {
                $.data(this, 'drag', new Draggable( this, options ));
            }
        });
    };


}(jQuery, window, document));

;(function($, window, document, undefined) {

    var defaults = {
        namespace: '',
        widget_selector: 'li',
        widget_margins: [10, 10],
        widget_base_dimensions: [400, 225],
        extra_rows: 0,
        extra_cols: 0,
        min_cols: 1,
        min_rows: 15,
        max_size_x: 6,
        autogenerate_stylesheet: true,
        avoid_overlapped_widgets: true,
        serialize_params: function($w, wgd) {
            return {
                col: wgd.col,
                row: wgd.row,
                size_x: wgd.size_x,
                size_y: wgd.size_y
            };
        },
        collision: {},
        draggable: {
            distance: 4
        }
    };


    /**
    * @class Gridster
    * @uses Draggable
    * @uses Collision
    * @param {HTMLElement} el The HTMLelement that contains all the widgets.
    * @param {Object} [options] An Object with all options you want to
    *        overwrite:
    *    @param {HTMLElement|String} [options.widget_selector] Define who will
    *     be the draggable widgets. Can be a CSS Selector String or a
    *     collection of HTMLElements
    *    @param {Array} [options.widget_margins] Margin between widgets.
    *     The first index for the horizontal margin (left, right) and
    *     the second for the vertical margin (top, bottom).
    *    @param {Array} [options.widget_base_dimensions] Base widget dimensions
    *     in pixels. The first index for the width and the second for the
    *     height.
    *    @param {Number} [options.extra_cols] Add more columns in addition to
    *     those that have been calculated.
    *    @param {Number} [options.extra_rows] Add more rows in addition to
    *     those that have been calculated.
    *    @param {Number} [options.min_cols] The minimum required columns.
    *    @param {Number} [options.min_rows] The minimum required rows.
    *    @param {Number} [options.max_size_x] The maximum number of columns
    *     that a widget can span.
    *    @param {Boolean} [options.autogenerate_stylesheet] If true, all the
    *     CSS required to position all widgets in their respective columns
    *     and rows will be generated automatically and injected to the
    *     `<head>` of the document. You can set this to false, and write
    *     your own CSS targeting rows and cols via data-attributes like so:
    *     `[data-col="1"] { left: 10px; }`
    *    @param {Boolean} [options.avoid_overlapped_widgets] Avoid that widgets loaded
    *     from the DOM can be overlapped. It is helpful if the positions were
    *     bad stored in the database or if there was any conflict.
    *    @param {Function} [options.serialize_params] Return the data you want
    *     for each widget in the serialization. Two arguments are passed:
    *     `$w`: the jQuery wrapped HTMLElement, and `wgd`: the grid
    *     coords object (`col`, `row`, `size_x`, `size_y`).
    *    @param {Object} [options.collision] An Object with all options for
    *     Collision class you want to overwrite. See Collision docs for
    *     more info.
    *    @param {Object} [options.draggable] An Object with all options for
    *     Draggable class you want to overwrite. See Draggable docs for more
    *     info.
    *
    * @constructor
    */
    function Gridster(el, options) {
      this.options = $.extend(true, defaults, options);
      this.$el = $(el);
      this.$wrapper = this.$el.parent();
      this.$widgets = this.$el.children(this.options.widget_selector).addClass('gs_w');
      this.widgets = [];
      this.$changed = $([]);
      this.wrapper_width = this.$wrapper.width();
      this.min_widget_width = (this.options.widget_margins[0] * 2) +
        this.options.widget_base_dimensions[0];
      this.min_widget_height = (this.options.widget_margins[1] * 2) +
        this.options.widget_base_dimensions[1];
      this.init();
    }

    Gridster.generated_stylesheets = [];

    var fn = Gridster.prototype;

    fn.init = function() {
        this.generate_grid_and_stylesheet();
        this.get_widgets_from_DOM();
        this.set_dom_grid_height();
        this.$wrapper.addClass('ready');
        this.draggable();

        this.on_window_resize = throttle($.proxy(this.recalculate_faux_grid, this), 200);

        $(window).bind('resize', this.on_window_resize);
    };


    /**
    * Disables dragging.
    *
    * @method disable
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.disable = function() {
        this.$wrapper.find('.player-revert').removeClass('player-revert');
        this.drag_api.disable();
        return this;
    };


    /**
    * Enables dragging.
    *
    * @method enable
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.enable = function() {
        this.drag_api.enable();
        return this;
    };


    /**
    * Add a new widget to the grid.
    *
    * @method add_widget
    * @param {String|HTMLElement} html The string representing the HTML of the widget
    *  or the HTMLElement.
    * @param {Number} [size_x] The nÂº of rows the widget occupies horizontally.
    * @param {Number} [size_y] The nÂº of columns the widget occupies vertically.
    * @param {Number} [col] The column the widget should start in.
    * @param {Number} [row] The row the widget should start in.
    * @return {HTMLElement} Returns the jQuery wrapped HTMLElement representing.
    *  the widget that was just created.
    */
    fn.add_widget = function(html, size_x, size_y, col, row) {
        var pos;
        size_x || (size_x = 1);
        size_y || (size_y = 1);

        if (!col & !row) {
            pos = this.next_position(size_x, size_y);
        }else{
            pos = {
                col: col,
                row: row
            };

            this.empty_cells(col, row, size_x, size_y);
        }

        var $w = $(html).attr({
                'data-col': pos.col,
                'data-row': pos.row,
                'data-sizex' : size_x,
                'data-sizey' : size_y
            }).addClass('gs_w').appendTo(this.$el).hide();

        this.$widgets = this.$widgets.add($w);

        this.register_widget($w);

        this.add_faux_rows(pos.size_y);
        //this.add_faux_cols(pos.size_x);

        this.set_dom_grid_height();

        return $w.fadeIn();
    };



    /**
    * Change the size of a widget.
    *
    * @method resize_widget
    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
    *  representing the widget.
    * @param {Number} size_x The number of columns that will occupy the widget.
    * @param {Number} size_y The number of rows that will occupy the widget.
    * @return {HTMLElement} Returns $widget.
    */
    fn.resize_widget = function($widget, size_x, size_y) {
        var wgd = $widget.coords().grid;
        size_x || (size_x = wgd.size_x);
        size_y || (size_y = wgd.size_y);

        if (size_x > this.cols) {
            size_x = this.cols;
        }

        var old_cells_occupied = this.get_cells_occupied(wgd);
        var old_size_x = wgd.size_x;
        var old_size_y = wgd.size_y;
        var old_col = wgd.col;
        var new_col = old_col;
        var wider = size_x > old_size_x;
        var taller = size_y > old_size_y;

        if (old_col + size_x - 1 > this.cols) {
            var diff = old_col + (size_x - 1) - this.cols;
            var c = old_col - diff;
            new_col = Math.max(1, c);
        }

        var new_grid_data = {
            col: new_col,
            row: wgd.row,
            size_x: size_x,
            size_y: size_y
        };

        var new_cells_occupied = this.get_cells_occupied(new_grid_data);

        var empty_cols = [];
        $.each(old_cells_occupied.cols, function(i, col) {
            if ($.inArray(col, new_cells_occupied.cols) === -1) {
                empty_cols.push(col);
            }
        });

        var occupied_cols = [];
        $.each(new_cells_occupied.cols, function(i, col) {
            if ($.inArray(col, old_cells_occupied.cols) === -1) {
                occupied_cols.push(col);
            }
        });

        var empty_rows = [];
        $.each(old_cells_occupied.rows, function(i, row) {
            if ($.inArray(row, new_cells_occupied.rows) === -1) {
                empty_rows.push(row);
            }
        });

        var occupied_rows = [];
        $.each(new_cells_occupied.rows, function(i, row) {
            if ($.inArray(row, old_cells_occupied.rows) === -1) {
                occupied_rows.push(row);
            }
        });

        this.remove_from_gridmap(wgd);

        if (occupied_cols.length) {
            var cols_to_empty = [
                new_col, wgd.row, size_x, Math.min(old_size_y, size_y), $widget
            ];
            this.empty_cells.apply(this, cols_to_empty);
        }

        if (occupied_rows.length) {
            var rows_to_empty = [new_col, wgd.row, size_x, size_y, $widget];
            this.empty_cells.apply(this, rows_to_empty);
        }

        wgd.col = new_col;
        wgd.size_x = size_x;
        wgd.size_y = size_y;
        this.add_to_gridmap(new_grid_data, $widget);

        //update coords instance attributes
        $widget.data('coords').update({
            width: (size_x * this.options.widget_base_dimensions[0] +
                ((size_x - 1) * this.options.widget_margins[0]) * 2),
            height: (size_y * this.options.widget_base_dimensions[1] +
                ((size_y - 1) * this.options.widget_margins[1]) * 2)
        });

        if (size_y > old_size_y) {
            this.add_faux_rows(size_y - old_size_y);
        }

        if (size_x > old_size_x) {
            this.add_faux_cols(size_x - old_size_x);
        }

        $widget.attr({
            'data-col': new_col,
            'data-sizex': size_x,
            'data-sizey': size_y
        });

        if (empty_cols.length) {
            var cols_to_remove_holes = [
                empty_cols[0], wgd.row,
                empty_cols.length,
                Math.min(old_size_y, size_y),
                $widget
            ];

            this.remove_empty_cells.apply(this, cols_to_remove_holes);
        }

        if (empty_rows.length) {
            var rows_to_remove_holes = [
                new_col, wgd.row, size_x, size_y, $widget
            ];
            this.remove_empty_cells.apply(this, rows_to_remove_holes);
        }

        return $widget;
    };

    /**
    * Move down widgets in cells represented by the arguments col, row, size_x,
    * size_y
    *
    * @method empty_cells
    * @param {Number} col The column where the group of cells begin.
    * @param {Number} row The row where the group of cells begin.
    * @param {Number} size_x The number of columns that the group of cells
    * occupy.
    * @param {Number} size_y The number of rows that the group of cells
    * occupy.
    * @param {HTMLElement} $exclude Exclude widgets from being moved.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.empty_cells = function(col, row, size_x, size_y, $exclude) {
        var $nexts = this.widgets_below({
                col: col,
                row: row - size_y,
                size_x: size_x,
                size_y: size_y
            });

        $nexts.not($exclude).each($.proxy(function(i, w) {
            var wgd = $(w).coords().grid;
            if (!(wgd.row <= (row + size_y - 1))) { return; }
            var diff =  (row + size_y) - wgd.row;
            this.move_widget_down($(w), diff);
        }, this));

        this.set_dom_grid_height();

        return this;
    };


    /**
    * Move up widgets below cells represented by the arguments col, row, size_x,
    * size_y.
    *
    * @method remove_empty_cells
    * @param {Number} col The column where the group of cells begin.
    * @param {Number} row The row where the group of cells begin.
    * @param {Number} size_x The number of columns that the group of cells
    * occupy.
    * @param {Number} size_y The number of rows that the group of cells
    * occupy.
    * @param {HTMLElement} exclude Exclude widgets from being moved.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.remove_empty_cells = function(col, row, size_x, size_y, exclude) {
        var $nexts = this.widgets_below({
            col: col,
            row: row,
            size_x: size_x,
            size_y: size_y
        });

        $nexts.not(exclude).each($.proxy(function(i, widget) {
            this.move_widget_up( $(widget), size_y );
        }, this));

        this.set_dom_grid_height();

        return this;
    };


    /**
    * Get the most left column below to add a new widget.
    *
    * @method next_position
    * @param {Number} size_x The nÂº of rows the widget occupies horizontally.
    * @param {Number} size_y The nÂº of columns the widget occupies vertically.
    * @return {Object} Returns a grid coords object representing the future
    *  widget coords.
    */
    fn.next_position = function(size_x, size_y) {
        size_x || (size_x = 1);
        size_y || (size_y = 1);
        var ga = this.gridmap;
        var cols_l = ga.length;
        var valid_pos = [];
        var rows_l;

        for (var c = 1; c < cols_l; c++) {
            rows_l = ga[c].length;
            for (var r = 1; r <= rows_l; r++) {
                var can_move_to = this.can_move_to({
                    size_x: size_x,
                    size_y: size_y
                }, c, r);

                if (can_move_to) {
                    valid_pos.push({
                        col: c,
                        row: r,
                        size_y: size_y,
                        size_x: size_x
                    });
                }
            }
        }

        if (valid_pos.length) {
            return this.sort_by_row_and_col_asc(valid_pos)[0];
        }
        return false;
    };


    /**
    * Remove a widget from the grid.
    *
    * @method remove_widget
    * @param {HTMLElement} el The jQuery wrapped HTMLElement you want to remove.
    * @param {Boolean|Function} silent If true, widgets below the removed one
    * will not move up. If a Function is passed it will be used as callback.
    * @param {Function} callback Function executed when the widget is removed.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.remove_widget = function(el, silent, callback) {
        var $el = el instanceof jQuery ? el : $(el);
        var wgd = $el.coords().grid;

        // if silent is a function assume it's a callback
        if ($.isFunction(silent)) {
            callback = silent;
            silent = false;
        }

        this.cells_occupied_by_placeholder = {};
        this.$widgets = this.$widgets.not($el);

        var $nexts = this.widgets_below($el);

        this.remove_from_gridmap(wgd);

        $el.fadeOut($.proxy(function() {
            $el.remove();

            if (!silent) {
                $nexts.each($.proxy(function(i, widget) {
                    this.move_widget_up( $(widget), wgd.size_y );
                }, this));
            }

            this.set_dom_grid_height();

            if (callback) {
                callback.call(this, el);
            }
        }, this));
    };


    /**
    * Remove all widgets from the grid.
    *
    * @method remove_all_widgets
    * @param {Function} callback Function executed for each widget removed.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.remove_all_widgets = function(callback) {
        this.$widgets.each($.proxy(function(i, el){
              this.remove_widget(el, true, callback);
        }, this));

        return this;
    };


    /**
    * Returns a serialized array of the widgets in the grid.
    *
    * @method serialize
    * @param {HTMLElement} [$widgets] The collection of jQuery wrapped
    *  HTMLElements you want to serialize. If no argument is passed all widgets
    *  will be serialized.
    * @return {Array} Returns an Array of Objects with the data specified in
    *  the serialize_params option.
    */
    fn.serialize = function($widgets) {
        $widgets || ($widgets = this.$widgets);
        var result = [];
        $widgets.each($.proxy(function(i, widget) {
            result.push(this.options.serialize_params(
                $(widget), $(widget).coords().grid ) );
        }, this));

        return result;
    };


    /**
    * Returns a serialized array of the widgets that have changed their
    *  position.
    *
    * @method serialize_changed
    * @return {Array} Returns an Array of Objects with the data specified in
    *  the serialize_params option.
    */
    fn.serialize_changed = function() {
        return this.serialize(this.$changed);
    };


    /**
    * Creates the grid coords object representing the widget a add it to the
    * mapped array of positions.
    *
    * @method register_widget
    * @return {Array} Returns the instance of the Gridster class.
    */
    fn.register_widget = function($el) {

        var wgd = {
            'col': parseInt($el.attr('data-col'), 10),
            'row': parseInt($el.attr('data-row'), 10),
            'size_x': parseInt($el.attr('data-sizex'), 10),
            'size_y': parseInt($el.attr('data-sizey'), 10),
            'el': $el
        };

        if (this.options.avoid_overlapped_widgets &&
            !this.can_move_to(
             {size_x: wgd.size_x, size_y: wgd.size_y}, wgd.col, wgd.row)
        ) {
            wgd = this.next_position(wgd.size_x, wgd.size_y);
            wgd.el = $el;
            $el.attr({
                'data-col': wgd.col,
                'data-row': wgd.row,
                'data-sizex': wgd.size_x,
                'data-sizey': wgd.size_y
            });
        }

        // attach Coord object to player data-coord attribute
        $el.data('coords', $el.coords());

        // Extend Coord object with grid position info
        $el.data('coords').grid = wgd;

        this.add_to_gridmap(wgd, $el);

        return this;
    };


    /**
    * Update in the mapped array of positions the value of cells represented by
    * the grid coords object passed in the `grid_data` param.
    *
    * @param {Object} grid_data The grid coords object representing the cells
    *  to update in the mapped array.
    * @param {HTMLElement|Boolean} value Pass `false` or the jQuery wrapped
    *  HTMLElement, depends if you want to delete an existing position or add
    *  a new one.
    * @method update_widget_position
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.update_widget_position = function(grid_data, value) {
        this.for_each_cell_occupied(grid_data, function(col, row) {
            if (!this.gridmap[col]) { return this; }
            this.gridmap[col][row] = value;
        });
        return this;
    };


    /**
    * Remove a widget from the mapped array of positions.
    *
    * @method remove_from_gridmap
    * @param {Object} grid_data The grid coords object representing the cells
    *  to update in the mapped array.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.remove_from_gridmap = function(grid_data) {
        return this.update_widget_position(grid_data, false);
    };


    /**
    * Add a widget to the mapped array of positions.
    *
    * @method add_to_gridmap
    * @param {Object} grid_data The grid coords object representing the cells
    *  to update in the mapped array.
    * @param {HTMLElement|Boolean} value The value to set in the specified
    *  position .
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.add_to_gridmap = function(grid_data, value) {
        this.update_widget_position(grid_data, value || grid_data.el);

        if (grid_data.el) {
            var $widgets = this.widgets_below(grid_data.el);
            $widgets.each($.proxy(function(i, widget) {
                this.move_widget_up( $(widget));
            }, this));
        }
    };


    /**
    * Make widgets draggable.
    *
    * @uses Draggable
    * @method draggable
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.draggable = function() {
        var self = this;
        var draggable_options = $.extend(true, {}, this.options.draggable, {
            offset_left: this.options.widget_margins[0],
            start: function(event, ui) {
                self.$widgets.filter('.player-revert')
                    .removeClass('player-revert');

                self.$player = $(this);
                self.$helper = self.options.draggable.helper === 'clone' ?
                    $(ui.helper) : self.$player;
                self.helper = !self.$helper.is(self.$player);

                self.on_start_drag.call(self, event, ui);
                self.$el.trigger('gridster:dragstart');
            },
            stop: function(event, ui) {
                self.on_stop_drag.call(self, event, ui);
                self.$el.trigger('gridster:dragstop');
            },
            drag: throttle(function(event, ui) {
                self.on_drag.call(self, event, ui);
                self.$el.trigger('gridster:drag');
            }, 60)
          });

        this.drag_api = this.$el.drag(draggable_options).data('drag');
        return this;
    };


    /**
    * This function is executed when the player begins to be dragged.
    *
    * @method on_start_drag
    * @param {Event} event The original browser event
    * @param {Object} ui A prepared ui object.
    */
    fn.on_start_drag = function(event, ui) {

        this.$helper.add(this.$player).add(this.$wrapper).addClass('dragging');

        this.$player.addClass('player');
        this.player_grid_data = this.$player.coords().grid;
        this.placeholder_grid_data = $.extend({}, this.player_grid_data);

        //set new grid height along the dragging period
        this.$el.css('height', this.$el.height() +
          (this.player_grid_data.size_y * this.min_widget_height));

        var colliders = this.faux_grid;
        var coords = this.$player.data('coords').coords;

        this.cells_occupied_by_player = this.get_cells_occupied(
            this.player_grid_data);
        this.cells_occupied_by_placeholder = this.get_cells_occupied(
            this.placeholder_grid_data);

        this.last_cols = [];
        this.last_rows = [];


        // see jquery.collision.js
        this.collision_api = this.$helper.collision(
            colliders, this.options.collision);

        this.$preview_holder = $('<li />', {
              'class': 'preview-holder',
              'data-row': this.$player.attr('data-row'),
              'data-col': this.$player.attr('data-col'),
              css: {
                  width: coords.width,
                  height: coords.height
              }
        }).appendTo(this.$el);

        if (this.options.draggable.start) {
          this.options.draggable.start.call(this, event, ui);
        }
    };


    /**
    * This function is executed when the player is being dragged.
    *
    * @method on_drag
    * @param {Event} event The original browser event
    * @param {Object} ui A prepared ui object.
    */
    fn.on_drag = function(event, ui) {
        //break if dragstop has been fired
        if (this.$player === null) {
            return false;
        }

        var abs_offset = {
            left: ui.position.left + this.baseX,
            top: ui.position.top + this.baseY
        };

        this.colliders_data = this.collision_api.get_closest_colliders(
            abs_offset);

        this.on_overlapped_column_change(
            this.on_start_overlapping_column,
            this.on_stop_overlapping_column
        );

        this.on_overlapped_row_change(
            this.on_start_overlapping_row,
            this.on_stop_overlapping_row
        );

        if (this.helper && this.$player) {
            this.$player.css({
                'left': ui.position.left,
                'top': ui.position.top
            });
        }

        if (this.options.draggable.drag) {
            this.options.draggable.drag.call(this, event, ui);
        }
    };

    /**
    * This function is executed when the player stops being dragged.
    *
    * @method on_stop_drag
    * @param {Event} event The original browser event
    * @param {Object} ui A prepared ui object.
    */
    fn.on_stop_drag = function(event, ui) {
        this.$helper.add(this.$player).add(this.$wrapper)
            .removeClass('dragging');

        ui.position.left = ui.position.left + this.baseX;
        ui.position.top = ui.position.top + this.baseY;
        this.colliders_data = this.collision_api.get_closest_colliders(ui.position);

        this.on_overlapped_column_change(
            this.on_start_overlapping_column,
            this.on_stop_overlapping_column
        );

        this.on_overlapped_row_change(
            this.on_start_overlapping_row,
            this.on_stop_overlapping_row
        );

        this.$player.addClass('player-revert').removeClass('player')
            .attr({
                'data-col': this.placeholder_grid_data.col,
                'data-row': this.placeholder_grid_data.row
            }).css({
                'left': '',
                'top': ''
            });

        this.$changed = this.$changed.add(this.$player);

        this.cells_occupied_by_player = this.get_cells_occupied(
            this.placeholder_grid_data);
        this.set_cells_player_occupies(
            this.placeholder_grid_data.col, this.placeholder_grid_data.row);

        this.$player.coords().grid.row = this.placeholder_grid_data.row;
        this.$player.coords().grid.col = this.placeholder_grid_data.col;

        if (this.options.draggable.stop) {
          this.options.draggable.stop.call(this, event, ui);
        }

        this.$preview_holder.remove();

        this.$player = null;
        this.$helper = null;
        this.placeholder_grid_data = {};
        this.player_grid_data = {};
        this.cells_occupied_by_placeholder = {};
        this.cells_occupied_by_player = {};

        this.set_dom_grid_height();
    };


    /**
    * Executes the callbacks passed as arguments when a column begins to be
    * overlapped or stops being overlapped.
    *
    * @param {Function} start_callback Function executed when a new column
    *  begins to be overlapped. The column is passed as first argument.
    * @param {Function} stop_callback Function executed when a column stops
    *  being overlapped. The column is passed as first argument.
    * @method on_overlapped_column_change
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.on_overlapped_column_change = function(start_callback, stop_callback) {
        if (!this.colliders_data.length) {
            return this;
        }
        var cols = this.get_targeted_columns(
            this.colliders_data[0].el.data.col);

        var last_n_cols = this.last_cols.length;
        var n_cols = cols.length;
        var i;

        for (i = 0; i < n_cols; i++) {
            if ($.inArray(cols[i], this.last_cols) === -1) {
                (start_callback || $.noop).call(this, cols[i]);
            }
        }

        for (i = 0; i< last_n_cols; i++) {
            if ($.inArray(this.last_cols[i], cols) === -1) {
                (stop_callback || $.noop).call(this, this.last_cols[i]);
            }
        }

        this.last_cols = cols;

        return this;
    };


    /**
    * Executes the callbacks passed as arguments when a row starts to be
    * overlapped or stops being overlapped.
    *
    * @param {Function} start_callback Function executed when a new row begins
    *  to be overlapped. The row is passed as first argument.
    * @param {Function} end_callback Function executed when a row stops being
    *  overlapped. The row is passed as first argument.
    * @method on_overlapped_row_change
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.on_overlapped_row_change = function(start_callback, end_callback) {
        if (!this.colliders_data.length) {
            return this;
        }
        var rows = this.get_targeted_rows(this.colliders_data[0].el.data.row);
        var last_n_rows = this.last_rows.length;
        var n_rows = rows.length;
        var i;

        for (i = 0; i < n_rows; i++) {
            if ($.inArray(rows[i], this.last_rows) === -1) {
                (start_callback || $.noop).call(this, rows[i]);
            }
        }

        for (i = 0; i < last_n_rows; i++) {
            if ($.inArray(this.last_rows[i], rows) === -1) {
                (end_callback || $.noop).call(this, this.last_rows[i]);
            }
        }

        this.last_rows = rows;
    };


    /**
    * Sets the current position of the player
    *
    * @param {Number} col
    * @param {Number} row
    * @param {Boolean} no_player
    * @method set_player
    * @return {object}
    */
    fn.set_player = function(col, row, no_player) {
        var self = this;
        if (!no_player) {
            this.empty_cells_player_occupies();
        }
        var cell = !no_player ? self.colliders_data[0].el.data : {col: col};
        var to_col = cell.col;
        var to_row = row || cell.row;

        this.player_grid_data = {
            col: to_col,
            row: to_row,
            size_y : this.player_grid_data.size_y,
            size_x : this.player_grid_data.size_x
        };

        this.cells_occupied_by_player = this.get_cells_occupied(
            this.player_grid_data);

        var $overlapped_widgets = this.get_widgets_overlapped(
            this.player_grid_data);

        var constraints = this.widgets_constraints($overlapped_widgets);

        this.manage_movements(constraints.can_go_up, to_col, to_row);
        this.manage_movements(constraints.can_not_go_up, to_col, to_row);

        /* if there is not widgets overlapping in the new player position,
         * update the new placeholder position. */
        if (!$overlapped_widgets.length) {
            var pp = this.can_go_player_up(this.player_grid_data);
            if (pp !== false) {
                to_row = pp;
            }
            this.set_placeholder(to_col, to_row);
        }

        return {
            col: to_col,
            row: to_row
        };
    };


    /**
    * See which of the widgets in the $widgets param collection can go to
    * a upper row and which not.
    *
    * @method widgets_contraints
    * @param {jQuery} $widgets A jQuery wrapped collection of
    * HTMLElements.
    * @return {object} Returns a literal Object with two keys: `can_go_up` &
    * `can_not_go_up`. Each contains a set of HTMLElements.
    */
    fn.widgets_constraints = function($widgets) {
        var $widgets_can_go_up = $([]);
        var $widgets_can_not_go_up;
        var wgd_can_go_up = [];
        var wgd_can_not_go_up = [];

        $widgets.each($.proxy(function(i, w) {
            var $w = $(w);
            var wgd = $w.coords().grid;
            if (this.can_go_widget_up(wgd)) {
                $widgets_can_go_up = $widgets_can_go_up.add($w);
                wgd_can_go_up.push(wgd);
            }else{
                wgd_can_not_go_up.push(wgd);
            }
        }, this));

        $widgets_can_not_go_up = $widgets.not($widgets_can_go_up);

        return {
            can_go_up: this.sort_by_row_asc(wgd_can_go_up),
            can_not_go_up: this.sort_by_row_desc(wgd_can_not_go_up)
        };
    };


    /**
    * Sorts an Array of grid coords objects (representing the grid coords of
    * each widget) in ascending way.
    *
    * @method sort_by_row_asc
    * @param {Array} widgets Array of grid coords objects
    * @return {Array} Returns the array sorted.
    */
    fn.sort_by_row_asc = function(widgets) {
        widgets = widgets.sort(function(a, b) {
            if (!a.row) {
                a = $(a).coords().grid;
                b = $(b).coords().grid;
            }

           if (a.row > b.row) {
               return 1;
           }
           return -1;
        });

        return widgets;
    };


    /**
    * Sorts an Array of grid coords objects (representing the grid coords of
    * each widget) placing first the empty cells upper left.
    *
    * @method sort_by_row_and_col_asc
    * @param {Array} widgets Array of grid coords objects
    * @return {Array} Returns the array sorted.
    */
    fn.sort_by_row_and_col_asc = function(widgets) {
        widgets = widgets.sort(function(a, b) {
           if (a.row > b.row || a.row === b.row && a.col > b.col) {
               return 1;
           }
           return -1;
        });

        return widgets;
    };


    /**
    * Sorts an Array of grid coords objects by column (representing the grid
    * coords of each widget) in ascending way.
    *
    * @method sort_by_col_asc
    * @param {Array} widgets Array of grid coords objects
    * @return {Array} Returns the array sorted.
    */
    fn.sort_by_col_asc = function(widgets) {
        widgets = widgets.sort(function(a, b) {
           if (a.col > b.col) {
               return 1;
           }
           return -1;
        });

        return widgets;
    };


    /**
    * Sorts an Array of grid coords objects (representing the grid coords of
    * each widget) in descending way.
    *
    * @method sort_by_row_desc
    * @param {Array} widgets Array of grid coords objects
    * @return {Array} Returns the array sorted.
    */
    fn.sort_by_row_desc = function(widgets) {
        widgets = widgets.sort(function(a, b) {
            if (a.row + a.size_y < b.row + b.size_y) {
                return 1;
            }
           return -1;
        });
        return widgets;
    };


    /**
    * Sorts an Array of grid coords objects (representing the grid coords of
    * each widget) in descending way.
    *
    * @method manage_movements
    * @param {jQuery} $widgets A jQuery collection of HTMLElements
    *  representing the widgets you want to move.
    * @param {Number} to_col The column to which we want to move the widgets.
    * @param {Number} to_row The row to which we want to move the widgets.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.manage_movements = function($widgets, to_col, to_row) {
        $.each($widgets, $.proxy(function(i, w) {
            var wgd = w;
            var $w = wgd.el;

            var can_go_widget_up = this.can_go_widget_up(wgd);

            if (can_go_widget_up) {
                //target CAN go up
                //so move widget up
                this.move_widget_to($w, can_go_widget_up);
                this.set_placeholder(to_col, can_go_widget_up + wgd.size_y);

            } else {
                //target can't go up
                var can_go_player_up = this.can_go_player_up(
                    this.player_grid_data);

                if (!can_go_player_up) {
                    // target can't go up
                    // player cant't go up
                    // so we need to move widget down to a position that dont
                    // overlaps player
                    var y = (to_row + this.player_grid_data.size_y) - wgd.row;

                    this.move_widget_down($w, y);
                    this.set_placeholder(to_col, to_row);
                }
            }
        }, this));

        return this;
    };

    /**
    * Determines if there is a widget in the row and col given. Or if the
    * HTMLElement passed as first argument is the player.
    *
    * @method is_player
    * @param {Number|HTMLElement} col_or_el A jQuery wrapped collection of
    * HTMLElements.
    * @param {Number} [row] The column to which we want to move the widgets.
    * @return {Boolean} Returns true or false.
    */
    fn.is_player = function(col_or_el, row) {
        if (row && !this.gridmap[col_or_el]) { return false; }
        var $w = row ? this.gridmap[col_or_el][row] : col_or_el;
        return $w && ($w.is(this.$player) || $w.is(this.$helper));
    };


    /**
    * Determines if the widget that is being dragged is currently over the row
    * and col given.
    *
    * @method is_player_in
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_player_in = function(col, row) {
        var c = this.cells_occupied_by_player || {};
        return $.inArray(col, c.cols) >= 0 && $.inArray(row, c.rows) >= 0;
    };


    /**
    * Determines if the placeholder is currently over the row and col given.
    *
    * @method is_placeholder_in
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_placeholder_in = function(col, row) {
        var c = this.cells_occupied_by_placeholder || {};
        return this.is_placeholder_in_col(col) && $.inArray(row, c.rows) >= 0;
    };


    /**
    * Determines if the placeholder is currently over the column given.
    *
    * @method is_placeholder_in_col
    * @param {Number} col The column to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_placeholder_in_col = function(col) {
        var c = this.cells_occupied_by_placeholder || [];
        return $.inArray(col, c.cols) >= 0;
    };


    /**
    * Determines if the cell represented by col and row params is empty.
    *
    * @method is_empty
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_empty = function(col, row) {
        if (typeof this.gridmap[col] !== 'undefined' &&
            typeof this.gridmap[col][row] !== 'undefined' &&
            this.gridmap[col][row] === false
        ) {
            return true;
        }
        return false;
    };


    /**
    * Determines if the cell represented by col and row params is occupied.
    *
    * @method is_occupied
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_occupied = function(col, row) {
        if (!this.gridmap[col]) {
            return false;
        }

        if (this.gridmap[col][row]) {
            return true;
        }
        return false;
    };


    /**
    * Determines if there is a widget in the cell represented by col/row params.
    *
    * @method is_widget
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean|HTMLElement} Returns false if there is no widget,
    * else returns the jQuery HTMLElement
    */
    fn.is_widget = function(col, row) {
        var cell = this.gridmap[col];
        if (!cell) {
            return false;
        }

        cell = cell[row];

        if (cell) {
            return cell;
        }

        return false;
    };


    /**
    * Determines if there is a widget in the cell represented by col/row
    * params and if this is under the widget that is being dragged.
    *
    * @method is_widget_under_player
    * @param {Number} col The column to check.
    * @param {Number} row The row to check.
    * @return {Boolean} Returns true or false.
    */
    fn.is_widget_under_player = function(col, row) {
        if (this.is_widget(col, row)) {
            return this.is_player_in(col, row);
        }
        return false;
    };


    /**
    * Get widgets overlapping with the player or with the object passed
    * representing the grid cells.
    *
    * @method get_widgets_under_player
    * @return {HTMLElement} Returns a jQuery collection of HTMLElements
    */
    fn.get_widgets_under_player = function(cells) {
        cells || (cells = this.cells_occupied_by_player || {cols: [], rows: []});
        var $widgets = $([]);

        $.each(cells.cols, $.proxy(function(i, col) {
            $.each(cells.rows, $.proxy(function(i, row) {
                if(this.is_widget(col, row)) {
                    $widgets = $widgets.add(this.gridmap[col][row]);
                }
            }, this));
        }, this));

        return $widgets;
    };


    /**
    * Put placeholder at the row and column specified.
    *
    * @method set_placeholder
    * @param {Number} col The column to which we want to move the
    *  placeholder.
    * @param {Number} row The row to which we want to move the
    *  placeholder.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.set_placeholder = function(col, row) {
        var phgd = $.extend({}, this.placeholder_grid_data);
        var $nexts = this.widgets_below({
                col: phgd.col,
                row: phgd.row,
                size_y: phgd.size_y,
                size_x: phgd.size_x
            });

        // Prevents widgets go out of the grid
        var right_col = (col + phgd.size_x - 1);
        if (right_col > this.cols) {
            col = col - (right_col - col);
        }

        var moved_down = this.placeholder_grid_data.row < row;
        var changed_column = this.placeholder_grid_data.col !== col;

        this.placeholder_grid_data.col = col;
        this.placeholder_grid_data.row = row;

        this.cells_occupied_by_placeholder = this.get_cells_occupied(
            this.placeholder_grid_data);

        this.$preview_holder.attr({
            'data-row' : row,
            'data-col' : col
        });

        if (moved_down || changed_column) {
            $nexts.each($.proxy(function(i, widget) {
                this.move_widget_up(
                 $(widget), this.placeholder_grid_data.col - col + phgd.size_y);
            }, this));
        }


        var $widgets_under_ph = this.get_widgets_under_player(this.cells_occupied_by_placeholder);
        if ($widgets_under_ph.length) {
            $widgets_under_ph.each($.proxy(function(i, widget) {
                var $w = $(widget);
                this.move_widget_down(
                 $w, row + phgd.size_y - $w.data('coords').grid.row);
            }, this));
        }

    };


    /**
    * Determines whether the player can move to a position above.
    *
    * @method can_go_player_up
    * @param {Object} widget_grid_data The actual grid coords object of the
    *  player.
    * @return {Number|Boolean} If the player can be moved to an upper row
    *  returns the row number, else returns false.
    */
    fn.can_go_player_up = function(widget_grid_data) {
        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
        var result = true;
        var upper_rows = [];
        var min_row = 10000;
        var $widgets_under_player = this.get_widgets_under_player();

        /* generate an array with columns as index and array with upper rows
         * empty as value */
        this.for_each_column_occupied(widget_grid_data, function(tcol) {
            var grid_col = this.gridmap[tcol];
            var r = p_bottom_row + 1;
            upper_rows[tcol] = [];

            while (--r > 0) {
                if (this.is_empty(tcol, r) || this.is_player(tcol, r) ||
                    this.is_widget(tcol, r) &&
                    grid_col[r].is($widgets_under_player)
                ) {
                    upper_rows[tcol].push(r);
                    min_row = r < min_row ? r : min_row;
                }else{
                    break;
                }
            }

            if (upper_rows[tcol].length === 0) {
                result = false;
                return true; //break
            }

            upper_rows[tcol].sort();
        });

        if (!result) { return false; }

        return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
    };


    /**
    * Determines whether a widget can move to a position above.
    *
    * @method can_go_widget_up
    * @param {Object} widget_grid_data The actual grid coords object of the
    *  widget we want to check.
    * @return {Number|Boolean} If the widget can be moved to an upper row
    *  returns the row number, else returns false.
    */
    fn.can_go_widget_up = function(widget_grid_data) {
        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
        var result = true;
        var upper_rows = [];
        var min_row = 10000;

        /* generate an array with columns as index and array with topmost rows
         * empty as value */
        this.for_each_column_occupied(widget_grid_data, function(tcol) {
            var grid_col = this.gridmap[tcol];
            upper_rows[tcol] = [];

            var r = p_bottom_row + 1;
            // iterate over each row
            while (--r > 0) {
                if (this.is_widget(tcol, r) && !this.is_player_in(tcol, r)) {
                    if (!grid_col[r].is(widget_grid_data.el)) {
                        break;
                    }
                }

                if (!this.is_player(tcol, r) &&
                    !this.is_placeholder_in(tcol, r) &&
                    !this.is_player_in(tcol, r)) {
                    upper_rows[tcol].push(r);
                }

                if (r < min_row) {
                    min_row = r;
                }
            }

            if (upper_rows[tcol].length === 0) {
                result = false;
                return true; //break
            }

            upper_rows[tcol].sort();
        });

        if (!result) { return false; }

        return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
    };


    /**
    * Search a valid row for the widget represented by `widget_grid_data' in
    * the `upper_rows` array. Iteration starts from row specified in `min_row`.
    *
    * @method get_valid_rows
    * @param {Object} widget_grid_data The actual grid coords object of the
    *  player.
    * @param {Array} upper_rows An array with columns as index and arrays
    *  of valid rows as values.
    * @param {Number} min_row The upper row from which the iteration will start.
    * @return {Number|Boolean} Returns the upper row valid from the `upper_rows`
    *  for the widget in question.
    */
    fn.get_valid_rows = function(widget_grid_data, upper_rows, min_row) {
        var p_top_row = widget_grid_data.row;
        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
        var size_y = widget_grid_data.size_y;
        var r = min_row - 1;
        var valid_rows = [];

        while (++r <= p_bottom_row ) {
            var common = true;
            $.each(upper_rows, function(col, rows) {
                if ($.isArray(rows) && $.inArray(r, rows) === -1) {
                    common = false;
                }
            });

            if (common === true) {
                valid_rows.push(r);
                if (valid_rows.length === size_y) {
                    break;
                }
            }
        }

        var new_row = false;
        if (size_y === 1) {
            if (valid_rows[0] !== p_top_row) {
                new_row = valid_rows[0] || false;
            }
        }else{
            if (valid_rows[0] !== p_top_row) {
                new_row = this.get_consecutive_numbers_index(
                    valid_rows, size_y);
            }
        }

        return new_row;
    };


    fn.get_consecutive_numbers_index = function(arr, size_y) {
        var max = arr.length;
        var result = [];
        var first = true;
        var prev = -1; // or null?

        for (var i=0; i < max; i++) {
            if (first || arr[i] === prev + 1) {
                result.push(i);
                if (result.length === size_y) {
                    break;
                }
                first = false;
            }else{
                result = [];
                first = true;
            }

            prev = arr[i];
        }

        return result.length >= size_y ? arr[result[0]] : false;
    };


    /**
    * Get widgets overlapping with the player.
    *
    * @method get_widgets_overlapped
    * @return {jQuery} Returns a jQuery collection of HTMLElements.
    */
    fn.get_widgets_overlapped = function() {
        var $w;
        var $widgets = $([]);
        var used = [];
        var rows_from_bottom = this.cells_occupied_by_player.rows.slice(0);
        rows_from_bottom.reverse();

        $.each(this.cells_occupied_by_player.cols, $.proxy(function(i, col) {
            $.each(rows_from_bottom, $.proxy(function(i, row) {
                // if there is a widget in the player position
                if (!this.gridmap[col]) { return true; } //next iteration
                var $w = this.gridmap[col][row];
                if (this.is_occupied(col, row) && !this.is_player($w) &&
                    $.inArray($w, used) === -1
                ) {
                    $widgets = $widgets.add($w);
                    used.push($w);
                }

            }, this));
        }, this));

        return $widgets;
    };


    /**
    * This callback is executed when the player begins to collide with a column.
    *
    * @method on_start_overlapping_column
    * @param {Number} col The collided column.
    * @return {jQuery} Returns a jQuery collection of HTMLElements.
    */
    fn.on_start_overlapping_column = function(col) {
        this.set_player(col, false);
    };


    /**
    * A callback executed when the player begins to collide with a row.
    *
    * @method on_start_overlapping_row
    * @param {Number} row The collided row.
    * @return {jQuery} Returns a jQuery collection of HTMLElements.
    */
    fn.on_start_overlapping_row = function(row) {
        this.set_player(false, row);
    };


    /**
    * A callback executed when the the player ends to collide with a column.
    *
    * @method on_stop_overlapping_column
    * @param {Number} col The collided row.
    * @return {jQuery} Returns a jQuery collection of HTMLElements.
    */
    fn.on_stop_overlapping_column = function(col) {
        this.set_player(col, false);

        var self = this;
        this.for_each_widget_below(col, this.cells_occupied_by_player.rows[0],
            function(tcol, trow) {
                self.move_widget_up(this, self.player_grid_data.size_y);
        });
    };


    /**
    * This callback is executed when the player ends to collide with a row.
    *
    * @method on_stop_overlapping_row
    * @param {Number} row The collided row.
    * @return {jQuery} Returns a jQuery collection of HTMLElements.
    */
    fn.on_stop_overlapping_row = function(row) {
        this.set_player(false, row);

        var self = this;
        var cols = this.cells_occupied_by_player.cols;
        for (var c = 0, cl = cols.length; c < cl; c++) {
            this.for_each_widget_below(cols[c], row, function(tcol, trow) {
                self.move_widget_up(this, self.player_grid_data.size_y);
            });
        }
    };


    /**
    * Move a widget to a specific row. The cell or cells must be empty.
    * If the widget has widgets below, all of these widgets will be moved also
    * if they can.
    *
    * @method move_widget_to
    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement of the
    * widget is going to be moved.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.move_widget_to = function($widget, row) {
        var self = this;
        var widget_grid_data = $widget.coords().grid;
        var diff = row - widget_grid_data.row;
        var $next_widgets = this.widgets_below($widget);

        var can_move_to_new_cell = this.can_move_to(
            widget_grid_data, widget_grid_data.col, row, $widget);

        if (can_move_to_new_cell === false) {
            return false;
        }

        this.remove_from_gridmap(widget_grid_data);
        widget_grid_data.row = row;
        this.add_to_gridmap(widget_grid_data);
        $widget.attr('data-row', row);
        this.$changed = this.$changed.add($widget);


        $next_widgets.each(function(i, widget) {
            var $w = $(widget);
            var wgd = $w.coords().grid;
            var can_go_up = self.can_go_widget_up(wgd);
            if (can_go_up && can_go_up !== wgd.row) {
                self.move_widget_to($w, can_go_up);
            }
        });

        return this;
    };


    /**
    * Move up the specified widget and all below it.
    *
    * @method move_widget_up
    * @param {HTMLElement} $widget The widget you want to move.
    * @param {Number} [y_units] The number of cells that the widget has to move.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.move_widget_up = function($widget, y_units) {
        var el_grid_data = $widget.coords().grid;
        var actual_row = el_grid_data.row;
        var moved = [];
        var can_go_up = true;
        y_units || (y_units = 1);

        if (!this.can_go_up($widget)) { return false; } //break;

        this.for_each_column_occupied(el_grid_data, function(col) {
            // can_go_up
            if ($.inArray($widget, moved) === -1) {
                var widget_grid_data = $widget.coords().grid;
                var next_row = actual_row - y_units;
                next_row = this.can_go_up_to_row(
                    widget_grid_data, col, next_row);

                if (!next_row) {
                    return true;
                }

                var $next_widgets = this.widgets_below($widget);

                this.remove_from_gridmap(widget_grid_data);
                widget_grid_data.row = next_row;
                this.add_to_gridmap(widget_grid_data);
                $widget.attr('data-row', widget_grid_data.row);
                this.$changed = this.$changed.add($widget);

                moved.push($widget);

                $next_widgets.each($.proxy(function(i, widget) {
                    this.move_widget_up($(widget), y_units);
                }, this));
            }
        });

    };


    /**
    * Move down the specified widget and all below it.
    *
    * @method move_widget_down
    * @param {jQuery} $widget The jQuery object representing the widget
    *  you want to move.
    * @param {Number} y_units The number of cells that the widget has to move.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.move_widget_down = function($widget, y_units) {
        var el_grid_data = $widget.coords().grid;
        var actual_row = el_grid_data.row;
        var moved = [];
        var y_diff = y_units;

        if (!$widget) { return false; }

        if ($.inArray($widget, moved) === -1) {

            var widget_grid_data = $widget.coords().grid;
            var next_row = actual_row + y_units;
            var $next_widgets = this.widgets_below($widget);

            this.remove_from_gridmap(widget_grid_data);

            $next_widgets.each($.proxy(function(i, widget) {
                var $w = $(widget);
                var wd = $w.coords().grid;
                var tmp_y = this.displacement_diff(
                             wd, widget_grid_data, y_diff);

                if (tmp_y > 0) {
                    this.move_widget_down($w, tmp_y);
                }
            }, this));

            widget_grid_data.row = next_row;
            this.update_widget_position(widget_grid_data, $widget);
            $widget.attr('data-row', widget_grid_data.row);
            this.$changed = this.$changed.add($widget);

            moved.push($widget);
        }
    };


    /**
    * Check if the widget can move to the specified row, else returns the
    * upper row possible.
    *
    * @method can_go_up_to_row
    * @param {Number} widget_grid_data The current grid coords object of the
    *  widget.
    * @param {Number} col The target column.
    * @param {Number} row The target row.
    * @return {Boolean|Number} Returns the row number if the widget can move
    *  to the target position, else returns false.
    */
    fn.can_go_up_to_row = function(widget_grid_data, col, row) {
        var ga = this.gridmap;
        var result = true;
        var urc = []; // upper_rows_in_columns
        var actual_row = widget_grid_data.row;
        var r;

        /* generate an array with columns as index and array with
         * upper rows empty in the column */
        this.for_each_column_occupied(widget_grid_data, function(tcol) {
            var grid_col = ga[tcol];
            urc[tcol] = [];

            r = actual_row;
            while (r--) {
                if (this.is_empty(tcol, r) &&
                    !this.is_placeholder_in(tcol, r)
                ) {
                    urc[tcol].push(r);
                }else{
                    break;
                }
            }

            if (!urc[tcol].length) {
                result = false;
                return true;
            }

        });

        if (!result) { return false; }

        /* get common rows starting from upper position in all the columns
         * that widget occupies */
        r = row;
        for (r = 1; r < actual_row; r++) {
            var common = true;

            for (var uc = 0, ucl = urc.length; uc < ucl; uc++) {
                if (urc[uc] && $.inArray(r, urc[uc]) === -1) {
                    common = false;
                }
            }

            if (common === true) {
                result = r;
                break;
            }
        }

        return result;
    };


    fn.displacement_diff = function(widget_grid_data, parent_bgd, y_units) {
        var actual_row = widget_grid_data.row;
        var diffs = [];
        var parent_max_y = parent_bgd.row + parent_bgd.size_y;

        this.for_each_column_occupied(widget_grid_data, function(col) {
            var temp_y_units = 0;

            for (var r = parent_max_y; r < actual_row; r++) {
                if (this.is_empty(col, r)) {
                    temp_y_units = temp_y_units + 1;
                }
            }

            diffs.push(temp_y_units);
        });

        var max_diff = Math.max.apply(Math, diffs);
        y_units = (y_units - max_diff);

        return y_units > 0 ? y_units : 0;
    };


    /**
    * Get widgets below a widget.
    *
    * @method widgets_below
    * @param {HTMLElement} $el The jQuery wrapped HTMLElement.
    * @return {jQuery} A jQuery collection of HTMLElements.
    */
    fn.widgets_below = function($el) {
        var el_grid_data = $.isPlainObject($el) ? $el : $el.coords().grid;
        var self = this;
        var ga = this.gridmap;
        var next_row = el_grid_data.row + el_grid_data.size_y - 1;
        var $nexts = $([]);

        this.for_each_column_occupied(el_grid_data, function(col) {
            self.for_each_widget_below(col, next_row, function(tcol, trow) {
                if (!self.is_player(this) && $.inArray(this, $nexts) === -1) {
                    $nexts = $nexts.add(this);
                    return true; // break
                }
            });
        });

        return this.sort_by_row_asc($nexts);
    };


    /**
    * Update the array of mapped positions with the new player position.
    *
    * @method set_cells_player_occupies
    * @param {Number} col The new player col.
    * @param {Number} col The new player row.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.set_cells_player_occupies = function(col, row) {
        this.remove_from_gridmap(this.placeholder_grid_data);
        this.placeholder_grid_data.col = col;
        this.placeholder_grid_data.row = row;
        this.add_to_gridmap(this.placeholder_grid_data, this.$player);
        return this;
    };


    /**
    * Remove from the array of mapped positions the reference to the player.
    *
    * @method empty_cells_player_occupies
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.empty_cells_player_occupies = function() {
        this.remove_from_gridmap(this.placeholder_grid_data);
        return this;
    };


    fn.can_go_up = function($el) {
        var el_grid_data = $el.coords().grid;
        var initial_row = el_grid_data.row;
        var prev_row = initial_row - 1;
        var ga = this.gridmap;
        var upper_rows_by_column = [];

        var result = true;
        if (initial_row === 1) { return false; }

        this.for_each_column_occupied(el_grid_data, function(col) {
            var $w = this.is_widget(col, prev_row);

            if (this.is_occupied(col, prev_row) ||
                this.is_player(col, prev_row) ||
                this.is_placeholder_in(col, prev_row) ||
                this.is_player_in(col, prev_row)
            ) {
                result = false;
                return true; //break
            }
        });

        return result;
    };



    /**
    * Check if it's possible to move a widget to a specific col/row. It takes
    * into account the dimensions (`size_y` and `size_x` attrs. of the grid
    *  coords object) the widget occupies.
    *
    * @method can_move_to
    * @param {Object} widget_grid_data The grid coords object that represents
    *  the widget.
    * @param {Object} col The col to check.
    * @param {Object} row The row to check.
    * @param {Number} [max_row] The max row allowed.
    * @return {Boolean} Returns true if all cells are empty, else return false.
    */
    fn.can_move_to = function(widget_grid_data, col, row, max_row) {
        var ga = this.gridmap;
        var $w = widget_grid_data.el;
        var future_wd = {
            size_y: widget_grid_data.size_y,
            size_x: widget_grid_data.size_x,
            col: col,
            row: row
        };
        var result = true;

        //Prevents widgets go out of the grid
        var right_col = col + widget_grid_data.size_x - 1;
        if (right_col > this.cols) {
            return false;
        }

        if (max_row && max_row < row + widget_grid_data.size_y - 1) {
            return false;
        }

        this.for_each_cell_occupied(future_wd, function(tcol, trow) {
            var $tw = this.is_widget(tcol, trow);
            if ($tw && (!widget_grid_data.el || $tw.is($w))) {
                result = false;
            }
        });

        return result;
    };


    /**
    * Given the leftmost column returns all columns that are overlapping
    *  with the player.
    *
    * @method get_targeted_columns
    * @param {Number} [from_col] The leftmost column.
    * @return {Array} Returns an array with column numbers.
    */
    fn.get_targeted_columns = function(from_col) {
        var max = (from_col || this.player_grid_data.col) +
            (this.player_grid_data.size_x - 1);
        var cols = [];
        for (var col = from_col; col <= max; col++) {
            cols.push(col);
        }
        return cols;
    };


    /**
    * Given the upper row returns all rows that are overlapping with the player.
    *
    * @method get_targeted_rows
    * @param {Number} [from_row] The upper row.
    * @return {Array} Returns an array with row numbers.
    */
    fn.get_targeted_rows = function(from_row) {
        var max = (from_row || this.player_grid_data.row) +
            (this.player_grid_data.size_y - 1);
        var rows = [];
        for (var row = from_row; row <= max; row++) {
            rows.push(row);
        }
        return rows;
    };

    /**
    * Get all columns and rows that a widget occupies.
    *
    * @method get_cells_occupied
    * @param {Object} el_grid_data The grid coords object of the widget.
    * @return {Object} Returns an object like `{ cols: [], rows: []}`.
    */
    fn.get_cells_occupied = function(el_grid_data) {
        var cells = { cols: [], rows: []};
        var i;
        if (arguments[1] instanceof jQuery) {
            el_grid_data = arguments[1].coords().grid;
        }

        for (i = 0; i < el_grid_data.size_x; i++) {
            var col = el_grid_data.col + i;
            cells.cols.push(col);
        }

        for (i = 0; i < el_grid_data.size_y; i++) {
            var row = el_grid_data.row + i;
            cells.rows.push(row);
        }

        return cells;
    };


    /**
    * Iterate over the cells occupied by a widget executing a function for
    * each one.
    *
    * @method for_each_cell_occupied
    * @param {Object} el_grid_data The grid coords object that represents the
    *  widget.
    * @param {Function} callback The function to execute on each column
    *  iteration. Column and row are passed as arguments.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.for_each_cell_occupied = function(grid_data, callback) {
        this.for_each_column_occupied(grid_data, function(col) {
            this.for_each_row_occupied(grid_data, function(row) {
                callback.call(this, col, row);
            });
        });
        return this;
    };


    /**
    * Iterate over the columns occupied by a widget executing a function for
    * each one.
    *
    * @method for_each_column_occupied
    * @param {Object} el_grid_data The grid coords object that represents
    *  the widget.
    * @param {Function} callback The function to execute on each column
    *  iteration. The column number is passed as first argument.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.for_each_column_occupied = function(el_grid_data, callback) {
        for (var i = 0; i < el_grid_data.size_x; i++) {
            var col = el_grid_data.col + i;
            callback.call(this, col, el_grid_data);
        }
    };


    /**
    * Iterate over the rows occupied by a widget executing a function for
    * each one.
    *
    * @method for_each_row_occupied
    * @param {Object} el_grid_data The grid coords object that represents
    *  the widget.
    * @param {Function} callback The function to execute on each column
    *  iteration. The row number is passed as first argument.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.for_each_row_occupied = function(el_grid_data, callback) {
        for (var i = 0; i < el_grid_data.size_y; i++) {
            var row = el_grid_data.row + i;
            callback.call(this, row, el_grid_data);
        }
    };



    fn._traversing_widgets = function(type, direction, col, row, callback) {
        var ga = this.gridmap;
        if (!ga[col]) { return; }

        var cr, max;
        var action = type + '/' + direction;
        if (arguments[2] instanceof jQuery) {
            var el_grid_data = arguments[2].coords().grid;
            col = el_grid_data.col;
            row = el_grid_data.row;
            callback = arguments[3];
        }
        var matched = [];
        var trow = row;


        var methods = {
            'for_each/above': function() {
                while (trow--) {
                    if (trow > 0 && this.is_widget(col, trow) &&
                        $.inArray(ga[col][trow], matched) === -1
                    ) {
                        cr = callback.call(ga[col][trow], col, trow);
                        matched.push(ga[col][trow]);
                        if (cr) { break; }
                    }
                }
            },
            'for_each/below': function() {
                for (trow = row + 1, max = ga[col].length; trow < max; trow++) {
                    if (this.is_widget(col, trow) &&
                        $.inArray(ga[col][trow], matched) === -1
                    ) {
                        cr = callback.call(ga[col][trow], col, trow);
                        matched.push(ga[col][trow]);
                        if (cr) { break; }
                    }
                }
            }
        };

        if (methods[action]) {
            methods[action].call(this);
        }
    };


    /**
    * Iterate over each widget above the column and row specified.
    *
    * @method for_each_widget_above
    * @param {Number} col The column to start iterating.
    * @param {Number} row The row to start iterating.
    * @param {Function} callback The function to execute on each widget
    *  iteration. The value of `this` inside the function is the jQuery
    *  wrapped HTMLElement.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.for_each_widget_above = function(col, row, callback) {
        this._traversing_widgets('for_each', 'above', col, row, callback);
        return this;
    };


    /**
    * Iterate over each widget below the column and row specified.
    *
    * @method for_each_widget_below
    * @param {Number} col The column to start iterating.
    * @param {Number} row The row to start iterating.
    * @param {Function} callback The function to execute on each widget
    *  iteration. The value of `this` inside the function is the jQuery wrapped
    *  HTMLElement.
    * @return {Class} Returns the instance of the Gridster Class.
    */
    fn.for_each_widget_below = function(col, row, callback) {
        this._traversing_widgets('for_each', 'below', col, row, callback);
        return this;
    };


    /**
    * Returns the highest occupied cell in the grid.
    *
    * @method get_highest_occupied_cell
    * @return {Object} Returns an object with `col` and `row` numbers.
    */
    fn.get_highest_occupied_cell = function() {
        var r;
        var gm = this.gridmap;
        var rows = [];
        var row_in_col = [];
        for (var c = gm.length - 1; c >= 1; c--) {
            for (r = gm[c].length - 1; r >= 1; r--) {
                if (this.is_widget(c, r)) {
                    rows.push(r);
                    row_in_col[r] = c;
                    break;
                }
            }
        }

        var highest_row = Math.max.apply(Math, rows);

        this.highest_occupied_cell = {
            col: row_in_col[highest_row],
            row: highest_row
        };

        return this.highest_occupied_cell;
    };


    fn.get_widgets_from = function(col, row) {
        var ga = this.gridmap;
        var $widgets = $();

        if (col) {
            $widgets = $widgets.add(
                this.$widgets.filter(function() {
                    var tcol = $(this).attr('data-col');
                    return (tcol === col || tcol > col);
                })
            );
        }

        if (row) {
            $widgets = $widgets.add(
                this.$widgets.filter(function() {
                    var trow = $(this).attr('data-row');
                    return (trow === row || trow > row);
                })
            );
        }

        return $widgets;
    };


    /**
    * Set the current height of the parent grid.
    *
    * @method set_dom_grid_height
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.set_dom_grid_height = function() {
        var r = this.get_highest_occupied_cell().row;
        this.$el.css('height', r * this.min_widget_height);
        return this;
    };


    /**
    * It generates the neccessary styles to position the widgets.
    *
    * @method generate_stylesheet
    * @param {Number} rows Number of columns.
    * @param {Number} cols Number of rows.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.generate_stylesheet = function(opts) {
        var styles = '';
        var max_size_x = this.options.max_size_x;
        var max_rows = 0;
        var max_cols = 0;
        var i;
        var rules;

        opts || (opts = {});
        opts.cols || (opts.cols = this.cols);
        opts.rows || (opts.rows = this.rows);
        opts.namespace || (opts.namespace = this.options.namespace);
        opts.widget_base_dimensions ||
            (opts.widget_base_dimensions = this.options.widget_base_dimensions);
        opts.widget_margins ||
            (opts.widget_margins = this.options.widget_margins);
        opts.min_widget_width = (opts.widget_margins[0] * 2) +
            opts.widget_base_dimensions[0];
        opts.min_widget_height = (opts.widget_margins[1] * 2) +
            opts.widget_base_dimensions[1];

        // don't duplicate stylesheets for the same configuration
        var serialized_opts = $.param(opts);
        if ($.inArray(serialized_opts, Gridster.generated_stylesheets) >= 0) {
            return false;
        }

        Gridster.generated_stylesheets.push(serialized_opts);

        /* generate CSS styles for cols */
        for (i = opts.cols; i >= 0; i--) {
            styles += (opts.namespace + ' [data-col="'+ (i + 1) + '"] { left:' +
                ((i * opts.widget_base_dimensions[0]) +
                (i * opts.widget_margins[0]) +
                ((i + 1) * opts.widget_margins[0])) + 'px;} ');
        }

        /* generate CSS styles for rows */
        for (i = opts.rows; i >= 0; i--) {
            styles += (opts.namespace + ' [data-row="' + (i + 1) + '"] { top:' +
                ((i * opts.widget_base_dimensions[1]) +
                (i * opts.widget_margins[1]) +
                ((i + 1) * opts.widget_margins[1]) ) + 'px;} ');
        }

        for (var y = 1; y <= opts.rows; y++) {
            styles += (opts.namespace + ' [data-sizey="' + y + '"] { height:' +
                (y * opts.widget_base_dimensions[1] +
                (y - 1) * (opts.widget_margins[1] * 2)) + 'px;}');
        }

        for (var x = 1; x <= max_size_x; x++) {
            styles += (opts.namespace + ' [data-sizex="' + x + '"] { width:' +
                (x * opts.widget_base_dimensions[0] +
                (x - 1) * (opts.widget_margins[0] * 2)) + 'px;}');
        }

        return this.add_style_tag(styles);
    };


    /**
    * Injects the given CSS as string to the head of the document.
    *
    * @method add_style_tag
    * @param {String} css The styles to apply.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.add_style_tag = function(css) {
      var d = document;
      var tag = d.createElement('style');

      d.getElementsByTagName('head')[0].appendChild(tag);
      tag.setAttribute('type', 'text/css');

      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      }else{
        tag.appendChild(document.createTextNode(css));
      }
      return this;
    };


    /**
    * Generates a faux grid to collide with it when a widget is dragged and
    * detect row or column that we want to go.
    *
    * @method generate_faux_grid
    * @param {Number} rows Number of columns.
    * @param {Number} cols Number of rows.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.generate_faux_grid = function(rows, cols) {
        this.faux_grid = [];
        this.gridmap = [];
        var col;
        var row;
        for (col = cols; col > 0; col--) {
            this.gridmap[col] = [];
            for (row = rows; row > 0; row--) {
                this.add_faux_cell(row, col);
            }
        }
        return this;
    };


    /**
    * Add cell to the faux grid.
    *
    * @method add_faux_cell
    * @param {Number} row The row for the new faux cell.
    * @param {Number} col The col for the new faux cell.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.add_faux_cell = function(row, col) {
        var coords = $({
                        left: this.baseX + ((col - 1) * this.min_widget_width),
                        top: this.baseY + (row -1) * this.min_widget_height,
                        width: this.min_widget_width,
                        height: this.min_widget_height,
                        col: col,
                        row: row,
                        original_col: col,
                        original_row: row
                    }).coords();

        if (!$.isArray(this.gridmap[col])) {
            this.gridmap[col] = [];
        }

        this.gridmap[col][row] = false;
        this.faux_grid.push(coords);

        return this;
    };


    /**
    * Add rows to the faux grid.
    *
    * @method add_faux_rows
    * @param {Number} rows The number of rows you want to add to the faux grid.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.add_faux_rows = function(rows) {
        var actual_rows = this.rows;
        var max_rows = actual_rows + (rows || 1);

        for (var r = max_rows; r > actual_rows; r--) {
            for (var c = this.cols; c >= 1; c--) {
                this.add_faux_cell(r, c);
            }
        }

        this.rows = max_rows;

        if (this.options.autogenerate_stylesheet) {
            this.generate_stylesheet();
        }

        return this;
    };

     /**
    * Add cols to the faux grid.
    *
    * @method add_faux_cols
    * @param {Number} cols The number of cols you want to add to the faux grid.
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.add_faux_cols = function(cols) {
        var actual_cols = this.cols;
        var max_cols = actual_cols + (cols || 1);

        for (var c = actual_cols; c < max_cols; c++) {
            for (var r = this.rows; r >= 1; r--) {
                this.add_faux_cell(r, c);
            }
        }

        this.cols = max_cols;

        if (this.options.autogenerate_stylesheet) {
            this.generate_stylesheet();
        }

        return this;
    };


    /**
    * Recalculates the offsets for the faux grid. You need to use it when
    * the browser is resized.
    *
    * @method recalculate_faux_grid
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.recalculate_faux_grid = function() {
        var aw = this.$wrapper.width();
        this.baseX = ($(window).width() - aw) / 2;
        this.baseY = this.$wrapper.offset().top;

        $.each(this.faux_grid, $.proxy(function(i, coords) {
            this.faux_grid[i] = coords.update({
                left: this.baseX + (coords.data.col -1) * this.min_widget_width,
                top: this.baseY + (coords.data.row -1) * this.min_widget_height
            });

        }, this));

        return this;
    };


    /**
    * Get all widgets in the DOM and register them.
    *
    * @method get_widgets_from_DOM
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.get_widgets_from_DOM = function() {
        this.$widgets.each($.proxy(function(i, widget) {
            this.register_widget($(widget));
        }, this));
        return this;
    };


    /**
    * Calculate columns and rows to be set based on the configuration
    *  parameters, grid dimensions, etc ...
    *
    * @method generate_grid_and_stylesheet
    * @return {Object} Returns the instance of the Gridster class.
    */
    fn.generate_grid_and_stylesheet = function() {
        var aw = this.$wrapper.width();
        var ah = this.$wrapper.height();

        var cols = Math.floor(aw / this.min_widget_width) +
                   this.options.extra_cols;

        var actual_cols = this.$widgets.map(function() {
            return $(this).attr('data-col');
        });
        actual_cols = Array.prototype.slice.call(actual_cols, 0);
        //needed to pass tests with phantomjs
        actual_cols.length || (actual_cols = [0]);

        var min_cols = Math.max.apply(Math, actual_cols);

        // get all rows that could be occupied by the current widgets
        var max_rows = this.options.extra_rows;
        this.$widgets.each(function(i, w) {
            max_rows += (+$(w).attr('data-sizey'));
        });

        this.cols = Math.max(min_cols, cols, this.options.min_cols);
        this.rows = Math.max(max_rows, this.options.min_rows);

        this.baseX = ($(window).width() - aw) / 2;
        this.baseY = this.$wrapper.offset().top;

        if (this.options.autogenerate_stylesheet) {
            this.generate_stylesheet();
        }

        return this.generate_faux_grid(this.rows, this.cols);
    };

    /**
     * Destroy this gridster by removing any sign of its presence, making it easy to avoid memory leaks
     *
     * @method destroy
     * @return {undefined}
     */
    fn.destroy = function(){
        // remove bound callback on window resize
        $(window).unbind('resize', this.on_window_resize);

        if(this.drag_api){
            this.drag_api.destroy();
        }
        
        // lastly, remove gridster element
        // this will additionally cause any data associated to this element to be removed, including this
        // very gridster instance
        this.$el.remove();
    };


    //jQuery adapter
    $.fn.gridster = function(options) {
     return this.each(function() {
       if (!$(this).data('gridster')) {
         $(this).data('gridster', new Gridster( this, options ));
       }
     });
    };

    $.Gridster = fn;

}(jQuery, window, document));
// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);
(function() {
  Dashing.gridsterLayout = function(positions) {
    var index, widget, widgets, _i, _len, _results;
    Dashing.customGridsterLayout = true;
    positions = positions.replace(/^"|"$/g, '');
    positions = $.parseJSON(positions);
    widgets = $("[data-row^=]");
    _results = [];
    for (index = _i = 0, _len = widgets.length; _i < _len; index = ++_i) {
      widget = widgets[index];
      $(widget).attr('data-row', positions[index].row);
      _results.push($(widget).attr('data-col', positions[index].col));
    }
    return _results;
  };

  Dashing.getWidgetPositions = function() {
    return $(".gridster ul:first").gridster().data('gridster').serialize();
  };

  Dashing.showGridsterInstructions = function() {
    var newWidgetPositions;
    newWidgetPositions = Dashing.getWidgetPositions();
    if (JSON.stringify(newWidgetPositions) !== JSON.stringify(Dashing.currentWidgetPositions)) {
      Dashing.currentWidgetPositions = newWidgetPositions;
      $('#save-gridster').slideDown();
      return $('#gridster-code').text("      <script type='text/javascript'>\n      $(function() {\n      \ \ Dashing.gridsterLayout('" + (JSON.stringify(Dashing.currentWidgetPositions)) + "')\n      });\n      </script>    ");
    }
  };

  $(function() {
    $('#save-gridster').leanModal();
    return $('#save-gridster').click(function() {
      return $('#save-gridster').slideUp();
    });
  });

}).call(this);
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */

$(function () {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s.init();
                s._configure()
                 ._draw();
            };

            if(this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend(
                {
                    // Config
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    stopper : true,
                    readOnly : this.$.data('readonly'),

                    // UI
                    cursor : (this.$.data('cursor') === true && 30)
                                || this.$.data('cursor')
                                || 0,
                    thickness : this.$.data('thickness') || 0.35,
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious : this.$.data('displayprevious'),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    inline : false,

                    // Hooks
                    draw : null, // function () {}
                    change : null, // function (value) {}
                    cancel : null, // function () {}
                    release : null // function (value) {}
                }, this.o
            );

            // routing value
            if(this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input')
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = $this.val();

                    $this.bind(
                        'change'
                        , function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();

            } else {
                // input = integer
                this.i = this.$;
                this.v = this.$.val();
                (this.v == '') && (this.v = this.o.min);

                this.$.bind(
                    'change'
                    , function () {
                        s.val(s.$.val());
                    }
                );
            }

            (!this.o.displayInput) && this.$.hide();

            this.$c = $('<canvas width="' +
                            this.o.width + 'px" height="' +
                            this.o.height + 'px"></canvas>');
            this.c = this.$c[0].getContext("2d");

            this.$
                .wrap($('<div style="' + (this.o.inline ? 'display:inline;' : '') +
                        'width:' + this.o.width + 'px;height:' +
                        this.o.height + 'px;"></div>'))
                .before(this.$c);

            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this._draw();

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true,
                c = document.createElement('canvas');

            c.width = s.o.width;
            c.height = s.o.height;
            s.g = c.getContext('2d');

            s.clear();

            s.dH
            && (d = s.dH());

            (d !== false) && s.draw();

            s.c.drawImage(c, 0, 0);
            c = null;
        };

        this._touch = function (e) {

            var touchMove = function (e) {

                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                            );

                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;


                s.change(v);
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {

            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);
                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;

                s.change(v);
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            return this;
        };

        this._listen = function () {

            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                         }
                    )
                    .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                         }
                    );
                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [parseInt(h.substring(0,2),16)
                   ,parseInt(h.substring(2,4),16)
                   ,parseInt(h.substring(4,6),16)];
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) { t[i] = f[i]; }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend(
                {
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset : this.$.data('angleoffset') || 0,
                    angleArc : this.$.data('anglearc') || 360,
                    inline : true
                }, this.o
            );
        };

        this.val = function (v) {
            if (null != v) {
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.v);
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2)
                        , - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                    + this.o.min;

            this.o.stopper
            && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {
            // bind MouseWheel
            var s = this,
                mw = function (e) {
                            e.preventDefault();

                            var ori = e.originalEvent
                                ,deltaX = ori.detail || ori.wheelDeltaX
                                ,deltaY = ori.detail || ori.wheelDeltaY
                                ,v = parseInt(s.$.val()) + (deltaX>0 || deltaY>0 ? 1 : deltaX<0 || deltaY<0 ? -1 : 0);

                            if (
                                s.cH
                                && (s.cH(v) === false)
                            ) return;

                            s.val(v);
                        }
                , kval, to, m = 1, kv = {37:-1, 38:1, 39:1, 40:-1};

            this.$
                .bind(
                    "keydown"
                    ,function (e) {
                        var kc = e.keyCode;
                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {

            if (
                this.v < this.o.min
                || this.v > this.o.max
            ) this.v = this.o.min;

            this.$.val(this.v);
            this.w2 = this.o.width / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2;
            this.lineWidth = this.xy * this.o.thickness;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                            String(Math.abs(this.o.max)).length
                            , String(Math.abs(this.o.min)).length
                            , 2
                            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.o.width / 2 + 4) >> 0) + 'px'
                        ,'height' : ((this.o.width / 3) >> 0) + 'px'
                        ,'position' : 'absolute'
                        ,'vertical-align' : 'middle'
                        ,'margin-top' : ((this.o.width / 3) >> 0) + 'px'
                        ,'margin-left' : '-' + ((this.o.width * 3 / 4 + 2) >> 0) + 'px'
                        ,'border' : 0
                        ,'background' : 'none'
                        ,'font' : 'bold ' + ((this.o.width / s) >> 0) + 'px Arial'
                        ,'text-align' : 'center'
                        ,'color' : this.o.fgColor
                        ,'padding' : '0px'
                        ,'-webkit-appearance': 'none'
                        })
                || this.i.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(v);
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.draw = function () {

            var c = this.g,                 // context
                a = this.angle(this.cv)    // Angle
                , sat = this.startAngle     // Start angle
                , eat = sat + a             // End angle
                , sa, ea                    // Previous angles
                , r = 1;

            c.lineWidth = this.lineWidth;

            this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

            c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, true);
            c.stroke();

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                sa = this.startAngle;
                this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa, ea, false);
                c.stroke();
                r = (this.cv == this.v);
            }

            c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat, eat, false);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

});
var Rickshaw={namespace:function(namespace,obj){var parts=namespace.split(".");var parent=Rickshaw;for(var i=1,length=parts.length;i<length;i++){var currentPart=parts[i];parent[currentPart]=parent[currentPart]||{};parent=parent[currentPart]}return parent},keys:function(obj){var keys=[];for(var key in obj)keys.push(key);return keys},extend:function(destination,source){for(var property in source){destination[property]=source[property]}return destination},clone:function(obj){return JSON.parse(JSON.stringify(obj))}};if(typeof module!=="undefined"&&module.exports){var d3=require("d3");module.exports=Rickshaw}(function(globalContext){var _toString=Object.prototype.toString,NULL_TYPE="Null",UNDEFINED_TYPE="Undefined",BOOLEAN_TYPE="Boolean",NUMBER_TYPE="Number",STRING_TYPE="String",OBJECT_TYPE="Object",FUNCTION_CLASS="[object Function]";function isFunction(object){return _toString.call(object)===FUNCTION_CLASS}function extend(destination,source){for(var property in source)if(source.hasOwnProperty(property))destination[property]=source[property];return destination}function keys(object){if(Type(object)!==OBJECT_TYPE){throw new TypeError}var results=[];for(var property in object){if(object.hasOwnProperty(property)){results.push(property)}}return results}function Type(o){switch(o){case null:return NULL_TYPE;case void 0:return UNDEFINED_TYPE}var type=typeof o;switch(type){case"boolean":return BOOLEAN_TYPE;case"number":return NUMBER_TYPE;case"string":return STRING_TYPE}return OBJECT_TYPE}function isUndefined(object){return typeof object==="undefined"}var slice=Array.prototype.slice;function argumentNames(fn){var names=fn.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return names.length==1&&!names[0]?[]:names}function wrap(fn,wrapper){var __method=fn;return function(){var a=update([bind(__method,this)],arguments);return wrapper.apply(this,a)}}function update(array,args){var arrayLength=array.length,length=args.length;while(length--)array[arrayLength+length]=args[length];return array}function merge(array,args){array=slice.call(array,0);return update(array,args)}function bind(fn,context){if(arguments.length<2&&isUndefined(arguments[0]))return this;var __method=fn,args=slice.call(arguments,2);return function(){var a=merge(args,arguments);return __method.apply(context,a)}}var emptyFunction=function(){};var Class=function(){var IS_DONTENUM_BUGGY=function(){for(var p in{toString:1}){if(p==="toString")return false}return true}();function subclass(){}function create(){var parent=null,properties=[].slice.apply(arguments);if(isFunction(properties[0]))parent=properties.shift();function klass(){this.initialize.apply(this,arguments)}extend(klass,Class.Methods);klass.superclass=parent;klass.subclasses=[];if(parent){subclass.prototype=parent.prototype;klass.prototype=new subclass;try{parent.subclasses.push(klass)}catch(e){}}for(var i=0,length=properties.length;i<length;i++)klass.addMethods(properties[i]);if(!klass.prototype.initialize)klass.prototype.initialize=emptyFunction;klass.prototype.constructor=klass;return klass}function addMethods(source){var ancestor=this.superclass&&this.superclass.prototype,properties=keys(source);if(IS_DONTENUM_BUGGY){if(source.toString!=Object.prototype.toString)properties.push("toString");if(source.valueOf!=Object.prototype.valueOf)properties.push("valueOf")}for(var i=0,length=properties.length;i<length;i++){var property=properties[i],value=source[property];if(ancestor&&isFunction(value)&&argumentNames(value)[0]=="$super"){var method=value;value=wrap(function(m){return function(){return ancestor[m].apply(this,arguments)}}(property),method);value.valueOf=bind(method.valueOf,method);value.toString=bind(method.toString,method)}this.prototype[property]=value}return this}return{create:create,Methods:{addMethods:addMethods}}}();if(globalContext.exports){globalContext.exports.Class=Class}else{globalContext.Class=Class}})(Rickshaw);Rickshaw.namespace("Rickshaw.Compat.ClassList");Rickshaw.Compat.ClassList=function(){if(typeof document!=="undefined"&&!("classList"in document.createElement("a"))){(function(view){"use strict";var classListProp="classList",protoProp="prototype",elemCtrProto=(view.HTMLElement||view.Element)[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[protoProp].indexOf||function(item){var i=0,len=this.length;for(;i<len;i++){if(i in this&&this[i]===item){return i}}return-1},DOMEx=function(type,message){this.name=type;this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")}return arrIndexOf.call(classList,token)},ClassList=function(elem){var trimmedClasses=strTrim.call(elem.className),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;for(;i<len;i++){this.push(classes[i])}this._updateClassName=function(){elem.className=this.toString()}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1};classListProto.add=function(token){token+="";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);this._updateClassName()}};classListProto.remove=function(token){token+="";var index=checkTokenAndGetIndex(this,token);if(index!==-1){this.splice(index,1);this._updateClassName()}};classListProto.toggle=function(token){token+="";if(checkTokenAndGetIndex(this,token)===-1){this.add(token)}else{this.remove(token)}};classListProto.toString=function(){return this.join(" ")};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:true,configurable:true};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===-2146823252){classListPropDesc.enumerable=false;objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)}})(window)}};if(typeof RICKSHAW_NO_COMPAT!=="undefined"&&!RICKSHAW_NO_COMPAT||typeof RICKSHAW_NO_COMPAT==="undefined"){new Rickshaw.Compat.ClassList}Rickshaw.namespace("Rickshaw.Graph");Rickshaw.Graph=function(args){if(!args.element)throw"Rickshaw.Graph needs a reference to an element";this.element=args.element;this.series=args.series;this.defaults={interpolation:"cardinal",offset:"zero",min:undefined,max:undefined,preserve:false};Rickshaw.keys(this.defaults).forEach(function(k){this[k]=args[k]||this.defaults[k]},this);this.window={};this.updateCallbacks=[];var self=this;this.initialize=function(args){this.validateSeries(args.series);this.series.active=function(){return self.series.filter(function(s){return!s.disabled})};this.setSize({width:args.width,height:args.height});this.element.classList.add("rickshaw_graph");this.vis=d3.select(this.element).append("svg:svg").attr("width",this.width).attr("height",this.height);for(var name in Rickshaw.Graph.Renderer){if(!name||!Rickshaw.Graph.Renderer.hasOwnProperty(name))continue;var r=Rickshaw.Graph.Renderer[name];if(!r||!r.prototype||!r.prototype.render)continue;self.registerRenderer(new r({graph:self}))}this.setRenderer(args.renderer||"stack",args);this.discoverRange()};this.validateSeries=function(series){if(!Array.isArray(series)&&!(series instanceof Rickshaw.Series)){var seriesSignature=Object.prototype.toString.apply(series);throw"series is not an array: "+seriesSignature}var pointsCount;series.forEach(function(s){if(!(s instanceof Object)){throw"series element is not an object: "+s}if(!s.data){throw"series has no data: "+JSON.stringify(s)}if(!Array.isArray(s.data)){throw"series data is not an array: "+JSON.stringify(s.data)}var x=s.data[0].x;var y=s.data[0].y;if(typeof x!="number"||typeof y!="number"&&y!==null){throw"x and y properties of points should be numbers instead of "+typeof x+" and "+typeof y}if(s.data.length>=3){if(s.data[2].x<s.data[1].x||s.data[1].x<s.data[0].x||s.data[s.data.length-1].x<s.data[0].x){throw"series data needs to be sorted on x values for series name: "+s.name}}},this)};this.dataDomain=function(){var data=this.series.map(function(s){return s.data});var min=d3.min(data.map(function(d){return d[0].x}));var max=d3.max(data.map(function(d){return d[d.length-1].x}));return[min,max]};this.discoverRange=function(){var domain=this.renderer.domain();this.x=d3.scale.linear().domain(domain.x).range([0,this.width]);this.y=d3.scale.linear().domain(domain.y).range([this.height,0]);this.y.magnitude=d3.scale.linear().domain([domain.y[0]-domain.y[0],domain.y[1]-domain.y[0]]).range([0,this.height])};this.render=function(){var stackedData=this.stackData();this.discoverRange();this.renderer.render();this.updateCallbacks.forEach(function(callback){callback()})};this.update=this.render;this.stackData=function(){var data=this.series.active().map(function(d){return d.data}).map(function(d){return d.filter(function(d){return this._slice(d)},this)},this);var preserve=this.preserve;if(!preserve){this.series.forEach(function(series){if(series.scale){preserve=true}})}data=preserve?Rickshaw.clone(data):data;this.series.active().forEach(function(series,index){if(series.scale){var seriesData=data[index];if(seriesData){seriesData.forEach(function(d){d.y=series.scale(d.y)})}}});this.stackData.hooks.data.forEach(function(entry){data=entry.f.apply(self,[data])});var stackedData;if(!this.renderer.unstack){this._validateStackable();var layout=d3.layout.stack();layout.offset(self.offset);stackedData=layout(data)}stackedData=stackedData||data;this.stackData.hooks.after.forEach(function(entry){stackedData=entry.f.apply(self,[data])});var i=0;this.series.forEach(function(series){if(series.disabled)return;series.stack=stackedData[i++]});this.stackedData=stackedData;return stackedData};this._validateStackable=function(){var series=this.series;var pointsCount;series.forEach(function(s){pointsCount=pointsCount||s.data.length;if(pointsCount&&s.data.length!=pointsCount){throw"stacked series cannot have differing numbers of points: "+pointsCount+" vs "+s.data.length+"; see Rickshaw.Series.fill()"}},this)};this.stackData.hooks={data:[],after:[]};this._slice=function(d){if(this.window.xMin||this.window.xMax){var isInRange=true;if(this.window.xMin&&d.x<this.window.xMin)isInRange=false;if(this.window.xMax&&d.x>this.window.xMax)isInRange=false;return isInRange}return true};this.onUpdate=function(callback){this.updateCallbacks.push(callback)};this.registerRenderer=function(renderer){this._renderers=this._renderers||{};this._renderers[renderer.name]=renderer};this.configure=function(args){if(args.width||args.height){this.setSize(args)}Rickshaw.keys(this.defaults).forEach(function(k){this[k]=k in args?args[k]:k in this?this[k]:this.defaults[k]},this);this.setRenderer(args.renderer||this.renderer.name,args)};this.setRenderer=function(r,args){if(typeof r=="function"){this.renderer=new r({graph:self});this.registerRenderer(this.renderer)}else{if(!this._renderers[r]){throw"couldn't find renderer "+r}this.renderer=this._renderers[r]}if(typeof args=="object"){this.renderer.configure(args)}};this.setSize=function(args){args=args||{};if(typeof window!==undefined){var style=window.getComputedStyle(this.element,null);var elementWidth=parseInt(style.getPropertyValue("width"),10);var elementHeight=parseInt(style.getPropertyValue("height"),10)}this.width=args.width||elementWidth||400;this.height=args.height||elementHeight||250;this.vis&&this.vis.attr("width",this.width).attr("height",this.height)};this.initialize(args)};Rickshaw.namespace("Rickshaw.Fixtures.Color");Rickshaw.Fixtures.Color=function(){this.schemes={};this.schemes.spectrum14=["#ecb796","#dc8f70","#b2a470","#92875a","#716c49","#d2ed82","#bbe468","#a1d05d","#e7cbe6","#d8aad6","#a888c2","#9dc2d3","#649eb9","#387aa3"].reverse();this.schemes.spectrum2000=["#57306f","#514c76","#646583","#738394","#6b9c7d","#84b665","#a7ca50","#bfe746","#e2f528","#fff726","#ecdd00","#d4b11d","#de8800","#de4800","#c91515","#9a0000","#7b0429","#580839","#31082b"];this.schemes.spectrum2001=["#2f243f","#3c2c55","#4a3768","#565270","#6b6b7c","#72957f","#86ad6e","#a1bc5e","#b8d954","#d3e04e","#ccad2a","#cc8412","#c1521d","#ad3821","#8a1010","#681717","#531e1e","#3d1818","#320a1b"];this.schemes.classic9=["#423d4f","#4a6860","#848f39","#a2b73c","#ddcb53","#c5a32f","#7d5836","#963b20","#7c2626","#491d37","#2f254a"].reverse();this.schemes.httpStatus={503:"#ea5029",502:"#d23f14",500:"#bf3613",410:"#efacea",409:"#e291dc",403:"#f457e8",408:"#e121d2",401:"#b92dae",405:"#f47ceb",404:"#a82a9f",400:"#b263c6",301:"#6fa024",302:"#87c32b",307:"#a0d84c",304:"#28b55c",200:"#1a4f74",206:"#27839f",201:"#52adc9",202:"#7c979f",203:"#a5b8bd",204:"#c1cdd1"};this.schemes.colorwheel=["#b5b6a9","#858772","#785f43","#96557e","#4682b4","#65b9ac","#73c03a","#cb513a"].reverse();this.schemes.cool=["#5e9d2f","#73c03a","#4682b4","#7bc3b8","#a9884e","#c1b266","#a47493","#c09fb5"];this.schemes.munin=["#00cc00","#0066b3","#ff8000","#ffcc00","#330099","#990099","#ccff00","#ff0000","#808080","#008f00","#00487d","#b35a00","#b38f00","#6b006b","#8fb300","#b30000","#bebebe","#80ff80","#80c9ff","#ffc080","#ffe680","#aa80ff","#ee00cc","#ff8080","#666600","#ffbfff","#00ffcc","#cc6699","#999900"]};Rickshaw.namespace("Rickshaw.Fixtures.RandomData");Rickshaw.Fixtures.RandomData=function(timeInterval){var addData;timeInterval=timeInterval||1;var lastRandomValue=200;var timeBase=Math.floor((new Date).getTime()/1e3);this.addData=function(data){var randomValue=Math.random()*100+15+lastRandomValue;var index=data[0].length;var counter=1;data.forEach(function(series){var randomVariance=Math.random()*20;var v=randomValue/25+counter++ +(Math.cos(index*counter*11/960)+2)*15+(Math.cos(index/7)+2)*7+(Math.cos(index/17)+2)*1;series.push({x:index*timeInterval+timeBase,y:v+randomVariance})});lastRandomValue=randomValue*.85};this.removeData=function(data){data.forEach(function(series){series.shift()});timeBase+=timeInterval}};Rickshaw.namespace("Rickshaw.Fixtures.Time");Rickshaw.Fixtures.Time=function(){var tzOffset=(new Date).getTimezoneOffset()*60;var self=this;this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.units=[{name:"decade",seconds:86400*365.25*10,formatter:function(d){return parseInt(d.getUTCFullYear()/10,10)*10}},{name:"year",seconds:86400*365.25,formatter:function(d){return d.getUTCFullYear()}},{name:"month",seconds:86400*30.5,formatter:function(d){return self.months[d.getUTCMonth()]}},{name:"week",seconds:86400*7,formatter:function(d){return self.formatDate(d)}},{name:"day",seconds:86400,formatter:function(d){return d.getUTCDate()}},{name:"6 hour",seconds:3600*6,formatter:function(d){return self.formatTime(d)}},{name:"hour",seconds:3600,formatter:function(d){return self.formatTime(d)}},{name:"15 minute",seconds:60*15,formatter:function(d){return self.formatTime(d)}},{name:"minute",seconds:60,formatter:function(d){return d.getUTCMinutes()}},{name:"15 second",seconds:15,formatter:function(d){return d.getUTCSeconds()+"s"}},{name:"second",seconds:1,formatter:function(d){return d.getUTCSeconds()+"s"}}];this.unit=function(unitName){return this.units.filter(function(unit){return unitName==unit.name}).shift()};this.formatDate=function(d){return d3.time.format("%b %e")(d)};this.formatTime=function(d){return d.toUTCString().match(/(\d+:\d+):/)[1]};this.ceil=function(time,unit){var nearFuture;var rounded;if(unit.name=="month"){nearFuture=new Date((time+unit.seconds-1)*1e3);rounded=new Date(0);rounded.setUTCFullYear(nearFuture.getUTCFullYear());rounded.setUTCMonth(nearFuture.getUTCMonth());rounded.setUTCDate(1);rounded.setUTCHours(0);rounded.setUTCMinutes(0);rounded.setUTCSeconds(0);rounded.setUTCMilliseconds(0);return rounded.getTime()/1e3}if(unit.name=="year"){nearFuture=new Date((time+unit.seconds-1)*1e3);rounded=new Date(0);rounded.setUTCFullYear(nearFuture.getUTCFullYear());rounded.setUTCMonth(0);rounded.setUTCDate(1);rounded.setUTCHours(0);rounded.setUTCMinutes(0);rounded.setUTCSeconds(0);rounded.setUTCMilliseconds(0);return rounded.getTime()/1e3}return Math.ceil(time/unit.seconds)*unit.seconds}};Rickshaw.namespace("Rickshaw.Fixtures.Time.Local");Rickshaw.Fixtures.Time.Local=function(){var tzOffset=(new Date).getTimezoneOffset()*60;var self=this;this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.units=[{name:"decade",seconds:86400*365.25*10,formatter:function(d){return parseInt(d.getFullYear()/10,10)*10}},{name:"year",seconds:86400*365.25,formatter:function(d){return d.getFullYear()}},{name:"month",seconds:86400*30.5,formatter:function(d){return self.months[d.getMonth()]}},{name:"week",seconds:86400*7,formatter:function(d){return self.formatDate(d)}},{name:"day",seconds:86400,formatter:function(d){return d.getDate()}},{name:"6 hour",seconds:3600*6,formatter:function(d){return self.formatTime(d)}},{name:"hour",seconds:3600,formatter:function(d){return self.formatTime(d)}},{name:"15 minute",seconds:60*15,formatter:function(d){return self.formatTime(d)}},{name:"minute",seconds:60,formatter:function(d){return d.getMinutes()}},{name:"15 second",seconds:15,formatter:function(d){return d.getSeconds()+"s"}},{name:"second",seconds:1,formatter:function(d){return d.getSeconds()+"s"}}];this.unit=function(unitName){return this.units.filter(function(unit){return unitName==unit.name}).shift()};this.formatDate=function(d){return d3.time.format("%b %e")(d)};this.formatTime=function(d){return d.toString().match(/(\d+:\d+):/)[1]};this.ceil=function(time,unit){var nearFuture;var rounded;if(unit.name=="day"){nearFuture=new Date((time+unit.seconds-1)*1e3);rounded=new Date(0);rounded.setMilliseconds(0);rounded.setSeconds(0);rounded.setMinutes(0);rounded.setHours(0);rounded.setDate(nearFuture.getDate());rounded.setMonth(nearFuture.getMonth());rounded.setFullYear(nearFuture.getFullYear());return rounded.getTime()/1e3}if(unit.name=="month"){nearFuture=new Date((time+unit.seconds-1)*1e3);rounded=new Date(0);rounded.setMilliseconds(0);rounded.setSeconds(0);rounded.setMinutes(0);rounded.setHours(0);rounded.setDate(1);rounded.setMonth(nearFuture.getMonth());rounded.setFullYear(nearFuture.getFullYear());return rounded.getTime()/1e3}if(unit.name=="year"){nearFuture=new Date((time+unit.seconds-1)*1e3);rounded=new Date(0);rounded.setFullYear(nearFuture.getFullYear());rounded.setMilliseconds(0);rounded.setSeconds(0);rounded.setMinutes(0);rounded.setHours(0);rounded.setDate(1);rounded.setMonth(0);return rounded.getTime()/1e3}return Math.ceil(time/unit.seconds)*unit.seconds}};Rickshaw.namespace("Rickshaw.Fixtures.Number");Rickshaw.Fixtures.Number.formatKMBT=function(y){var abs_y=Math.abs(y);if(abs_y>=1e12){return y/1e12+"T"}else if(abs_y>=1e9){return y/1e9+"B"}else if(abs_y>=1e6){return y/1e6+"M"}else if(abs_y>=1e3){return y/1e3+"K"}else if(abs_y<1&&y>0){return y.toFixed(2)}else if(abs_y===0){return""}else{return y}};Rickshaw.Fixtures.Number.formatBase1024KMGTP=function(y){var abs_y=Math.abs(y);if(abs_y>=0x4000000000000){return y/0x4000000000000+"P"}else if(abs_y>=1099511627776){return y/1099511627776+"T"}else if(abs_y>=1073741824){return y/1073741824+"G"}else if(abs_y>=1048576){return y/1048576+"M"}else if(abs_y>=1024){return y/1024+"K"}else if(abs_y<1&&y>0){return y.toFixed(2)}else if(abs_y===0){return""}else{return y}};Rickshaw.namespace("Rickshaw.Color.Palette");Rickshaw.Color.Palette=function(args){var color=new Rickshaw.Fixtures.Color;args=args||{};this.schemes={};this.scheme=color.schemes[args.scheme]||args.scheme||color.schemes.colorwheel;this.runningIndex=0;this.generatorIndex=0;if(args.interpolatedStopCount){var schemeCount=this.scheme.length-1;var i,j,scheme=[];for(i=0;i<schemeCount;i++){scheme.push(this.scheme[i]);var generator=d3.interpolateHsl(this.scheme[i],this.scheme[i+1]);for(j=1;j<args.interpolatedStopCount;j++){scheme.push(generator(1/args.interpolatedStopCount*j))}}scheme.push(this.scheme[this.scheme.length-1]);this.scheme=scheme}this.rotateCount=this.scheme.length;this.color=function(key){return this.scheme[key]||this.scheme[this.runningIndex++]||this.interpolateColor()||"#808080"};this.interpolateColor=function(){if(!Array.isArray(this.scheme))return;var color;if(this.generatorIndex==this.rotateCount*2-1){color=d3.interpolateHsl(this.scheme[this.generatorIndex],this.scheme[0])(.5);this.generatorIndex=0;this.rotateCount*=2}else{color=d3.interpolateHsl(this.scheme[this.generatorIndex],this.scheme[this.generatorIndex+1])(.5);this.generatorIndex++}this.scheme.push(color);return color}};Rickshaw.namespace("Rickshaw.Graph.Ajax");Rickshaw.Graph.Ajax=Rickshaw.Class.create({initialize:function(args){this.dataURL=args.dataURL;this.onData=args.onData||function(d){return d};this.onComplete=args.onComplete||function(){};this.onError=args.onError||function(){};this.args=args;this.request()},request:function(){$.ajax({url:this.dataURL,dataType:"json",success:this.success.bind(this),error:this.error.bind(this)})},error:function(){console.log("error loading dataURL: "+this.dataURL);this.onError(this)},success:function(data,status){data=this.onData(data);this.args.series=this._splice({data:data,series:this.args.series});this.graph=this.graph||new Rickshaw.Graph(this.args);this.graph.render();this.onComplete(this)},_splice:function(args){var data=args.data;var series=args.series;if(!args.series)return data;series.forEach(function(s){var seriesKey=s.key||s.name;if(!seriesKey)throw"series needs a key or a name";data.forEach(function(d){var dataKey=d.key||d.name;if(!dataKey)throw"data needs a key or a name";if(seriesKey==dataKey){var properties=["color","name","data"];properties.forEach(function(p){if(d[p])s[p]=d[p]})}})});return series}});Rickshaw.namespace("Rickshaw.Graph.Annotate");Rickshaw.Graph.Annotate=function(args){var graph=this.graph=args.graph;this.elements={timeline:args.element};var self=this;this.data={};this.elements.timeline.classList.add("rickshaw_annotation_timeline");this.add=function(time,content,end_time){self.data[time]=self.data[time]||{boxes:[]};self.data[time].boxes.push({content:content,end:end_time})};this.update=function(){Rickshaw.keys(self.data).forEach(function(time){var annotation=self.data[time];var left=self.graph.x(time);if(left<0||left>self.graph.x.range()[1]){if(annotation.element){annotation.line.classList.add("offscreen");annotation.element.style.display="none"}annotation.boxes.forEach(function(box){if(box.rangeElement)box.rangeElement.classList.add("offscreen")});return}if(!annotation.element){var element=annotation.element=document.createElement("div");element.classList.add("annotation");this.elements.timeline.appendChild(element);element.addEventListener("click",function(e){element.classList.toggle("active");annotation.line.classList.toggle("active");annotation.boxes.forEach(function(box){if(box.rangeElement)box.rangeElement.classList.toggle("active")})},false)}annotation.element.style.left=left+"px";annotation.element.style.display="block";annotation.boxes.forEach(function(box){var element=box.element;if(!element){element=box.element=document.createElement("div");element.classList.add("content");element.innerHTML=box.content;annotation.element.appendChild(element);annotation.line=document.createElement("div");annotation.line.classList.add("annotation_line");self.graph.element.appendChild(annotation.line);if(box.end){box.rangeElement=document.createElement("div");box.rangeElement.classList.add("annotation_range");self.graph.element.appendChild(box.rangeElement)}}if(box.end){var annotationRangeStart=left;var annotationRangeEnd=Math.min(self.graph.x(box.end),self.graph.x.range()[1]);if(annotationRangeStart>annotationRangeEnd){annotationRangeEnd=left;annotationRangeStart=Math.max(self.graph.x(box.end),self.graph.x.range()[0])}var annotationRangeWidth=annotationRangeEnd-annotationRangeStart;box.rangeElement.style.left=annotationRangeStart+"px";box.rangeElement.style.width=annotationRangeWidth+"px";box.rangeElement.classList.remove("offscreen")}annotation.line.classList.remove("offscreen");annotation.line.style.left=left+"px"})},this)};this.graph.onUpdate(function(){self.update()})};Rickshaw.namespace("Rickshaw.Graph.Axis.Time");Rickshaw.Graph.Axis.Time=function(args){var self=this;this.graph=args.graph;this.elements=[];this.ticksTreatment=args.ticksTreatment||"plain";this.fixedTimeUnit=args.timeUnit;var time=args.timeFixture||new Rickshaw.Fixtures.Time;this.appropriateTimeUnit=function(){var unit;var units=time.units;var domain=this.graph.x.domain();var rangeSeconds=domain[1]-domain[0];units.forEach(function(u){if(Math.floor(rangeSeconds/u.seconds)>=2){unit=unit||u}});return unit||time.units[time.units.length-1]};this.tickOffsets=function(){var domain=this.graph.x.domain();var unit=this.fixedTimeUnit||this.appropriateTimeUnit();var count=Math.ceil((domain[1]-domain[0])/unit.seconds);var runningTick=domain[0];var offsets=[];for(var i=0;i<count;i++){var tickValue=time.ceil(runningTick,unit);runningTick=tickValue+unit.seconds/2;offsets.push({value:tickValue,unit:unit})}return offsets};this.render=function(){this.elements.forEach(function(e){e.parentNode.removeChild(e)});this.elements=[];var offsets=this.tickOffsets();offsets.forEach(function(o){if(self.graph.x(o.value)>self.graph.x.range()[1])return;var element=document.createElement("div");element.style.left=self.graph.x(o.value)+"px";element.classList.add("x_tick");element.classList.add(self.ticksTreatment);var title=document.createElement("div");title.classList.add("title");title.innerHTML=o.unit.formatter(new Date(o.value*1e3));element.appendChild(title);self.graph.element.appendChild(element);self.elements.push(element)})};this.graph.onUpdate(function(){self.render()})};Rickshaw.namespace("Rickshaw.Graph.Axis.X");Rickshaw.Graph.Axis.X=function(args){var self=this;var berthRate=.1;this.initialize=function(args){this.graph=args.graph;this.orientation=args.orientation||"top";this.pixelsPerTick=args.pixelsPerTick||75;if(args.ticks)this.staticTicks=args.ticks;if(args.tickValues)this.tickValues=args.tickValues;this.tickSize=args.tickSize||4;this.ticksTreatment=args.ticksTreatment||"plain";if(args.element){this.element=args.element;this._discoverSize(args.element,args);this.vis=d3.select(args.element).append("svg:svg").attr("height",this.height).attr("width",this.width).attr("class","rickshaw_graph x_axis_d3");this.element=this.vis[0][0];this.element.style.position="relative";this.setSize({width:args.width,height:args.height})}else{this.vis=this.graph.vis}this.graph.onUpdate(function(){self.render()})};this.setSize=function(args){args=args||{};if(!this.element)return;this._discoverSize(this.element.parentNode,args);this.vis.attr("height",this.height).attr("width",this.width*(1+berthRate));var berth=Math.floor(this.width*berthRate/2);this.element.style.left=-1*berth+"px"};this.render=function(){if(this.graph.width!==this._renderWidth)this.setSize({auto:true});var axis=d3.svg.axis().scale(this.graph.x).orient(this.orientation);axis.tickFormat(args.tickFormat||function(x){return x});if(this.tickValues)axis.tickValues(this.tickValues);this.ticks=this.staticTicks||Math.floor(this.graph.width/this.pixelsPerTick);var berth=Math.floor(this.width*berthRate/2)||0;var transform;if(this.orientation=="top"){var yOffset=this.height||this.graph.height;transform="translate("+berth+","+yOffset+")"}else{transform="translate("+berth+", 0)"}if(this.element){this.vis.selectAll("*").remove()}this.vis.append("svg:g").attr("class",["x_ticks_d3",this.ticksTreatment].join(" ")).attr("transform",transform).call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));var gridSize=(this.orientation=="bottom"?1:-1)*this.graph.height;this.graph.vis.append("svg:g").attr("class","x_grid_d3").call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(gridSize));this._renderHeight=this.graph.height};this._discoverSize=function(element,args){if(typeof window!=="undefined"){var style=window.getComputedStyle(element,null);var elementHeight=parseInt(style.getPropertyValue("height"),10);if(!args.auto){var elementWidth=parseInt(style.getPropertyValue("width"),10)}}this.width=(args.width||elementWidth||this.graph.width)*(1+berthRate);this.height=args.height||elementHeight||40};this.initialize(args)};Rickshaw.namespace("Rickshaw.Graph.Axis.Y");Rickshaw.Graph.Axis.Y=Rickshaw.Class.create({initialize:function(args){this.graph=args.graph;this.orientation=args.orientation||"right";this.pixelsPerTick=args.pixelsPerTick||75;if(args.ticks)this.staticTicks=args.ticks;if(args.tickValues)this.tickValues=args.tickValues;this.tickSize=args.tickSize||4;this.ticksTreatment=args.ticksTreatment||"plain";this.tickFormat=args.tickFormat||function(y){return y};this.berthRate=.1;if(args.element){this.element=args.element;this.vis=d3.select(args.element).append("svg:svg").attr("class","rickshaw_graph y_axis");this.element=this.vis[0][0];this.element.style.position="relative";this.setSize({width:args.width,height:args.height})}else{this.vis=this.graph.vis}var self=this;this.graph.onUpdate(function(){self.render()})},setSize:function(args){args=args||{};if(!this.element)return;if(typeof window!=="undefined"){var style=window.getComputedStyle(this.element.parentNode,null);var elementWidth=parseInt(style.getPropertyValue("width"),10);if(!args.auto){var elementHeight=parseInt(style.getPropertyValue("height"),10)}}this.width=args.width||elementWidth||this.graph.width*this.berthRate;this.height=args.height||elementHeight||this.graph.height;this.vis.attr("width",this.width).attr("height",this.height*(1+this.berthRate));var berth=this.height*this.berthRate;if(this.orientation=="left"){this.element.style.top=-1*berth+"px"}},render:function(){if(this.graph.height!==this._renderHeight)this.setSize({auto:true});this.ticks=this.staticTicks||Math.floor(this.graph.height/this.pixelsPerTick);var axis=this._drawAxis(this.graph.y);this._drawGrid(axis);this._renderHeight=this.graph.height},_drawAxis:function(scale){var axis=d3.svg.axis().scale(scale).orient(this.orientation);axis.tickFormat(this.tickFormat);if(this.tickValues)axis.tickValues(this.tickValues);if(this.orientation=="left"){var berth=this.height*this.berthRate;var transform="translate("+this.width+", "+berth+")"}if(this.element){this.vis.selectAll("*").remove()}this.vis.append("svg:g").attr("class",["y_ticks",this.ticksTreatment].join(" ")).attr("transform",transform).call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));return axis},_drawGrid:function(axis){var gridSize=(this.orientation=="right"?1:-1)*this.graph.width;this.graph.vis.append("svg:g").attr("class","y_grid").call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(gridSize))}});Rickshaw.namespace("Rickshaw.Graph.Axis.Y.Scaled");Rickshaw.Graph.Axis.Y.Scaled=Rickshaw.Class.create(Rickshaw.Graph.Axis.Y,{initialize:function($super,args){if(typeof args.scale==="undefined"){throw new Error("Scaled requires scale")}this.scale=args.scale;if(typeof args.grid==="undefined"){this.grid=true}else{this.grid=args.grid}$super(args)},_drawAxis:function($super,scale){var adjustedScale=this.scale.copy().range(scale.range());return $super(adjustedScale)},_drawGrid:function($super,axis){if(this.grid){$super(axis)}}});Rickshaw.namespace("Rickshaw.Graph.Behavior.Series.Highlight");Rickshaw.Graph.Behavior.Series.Highlight=function(args){this.graph=args.graph;this.legend=args.legend;var self=this;var colorSafe={};var activeLine=null;var disabledColor=args.disabledColor||function(seriesColor){return d3.interpolateRgb(seriesColor,d3.rgb("#d8d8d8"))(.8).toString()};this.addHighlightEvents=function(l){l.element.addEventListener("mouseover",function(e){if(activeLine)return;else activeLine=l;self.legend.lines.forEach(function(line,index){if(l===line){if(index>0&&self.graph.renderer.unstack&&(line.series.renderer?line.series.renderer.unstack:true)){var seriesIndex=self.graph.series.length-index-1;
line.originalIndex=seriesIndex;var series=self.graph.series.splice(seriesIndex,1)[0];self.graph.series.push(series)}return}colorSafe[line.series.name]=colorSafe[line.series.name]||line.series.color;line.series.color=disabledColor(line.series.color)});self.graph.update()},false);l.element.addEventListener("mouseout",function(e){if(!activeLine)return;else activeLine=null;self.legend.lines.forEach(function(line){if(l===line&&line.hasOwnProperty("originalIndex")){var series=self.graph.series.pop();self.graph.series.splice(line.originalIndex,0,series);delete line.originalIndex}if(colorSafe[line.series.name]){line.series.color=colorSafe[line.series.name]}});self.graph.update()},false)};if(this.legend){this.legend.lines.forEach(function(l){self.addHighlightEvents(l)})}};Rickshaw.namespace("Rickshaw.Graph.Behavior.Series.Order");Rickshaw.Graph.Behavior.Series.Order=function(args){this.graph=args.graph;this.legend=args.legend;var self=this;if(typeof window.$=="undefined"){throw"couldn't find jQuery at window.$"}if(typeof window.$.ui=="undefined"){throw"couldn't find jQuery UI at window.$.ui"}$(function(){$(self.legend.list).sortable({containment:"parent",tolerance:"pointer",update:function(event,ui){var series=[];$(self.legend.list).find("li").each(function(index,item){if(!item.series)return;series.push(item.series)});for(var i=self.graph.series.length-1;i>=0;i--){self.graph.series[i]=series.shift()}self.graph.update()}});$(self.legend.list).disableSelection()});this.graph.onUpdate(function(){var h=window.getComputedStyle(self.legend.element).height;self.legend.element.style.height=h})};Rickshaw.namespace("Rickshaw.Graph.Behavior.Series.Toggle");Rickshaw.Graph.Behavior.Series.Toggle=function(args){this.graph=args.graph;this.legend=args.legend;var self=this;this.addAnchor=function(line){var anchor=document.createElement("a");anchor.innerHTML="&#10004;";anchor.classList.add("action");line.element.insertBefore(anchor,line.element.firstChild);anchor.onclick=function(e){if(line.series.disabled){line.series.enable();line.element.classList.remove("disabled")}else{if(this.graph.series.filter(function(s){return!s.disabled}).length<=1)return;line.series.disable();line.element.classList.add("disabled")}}.bind(this);var label=line.element.getElementsByTagName("span")[0];label.onclick=function(e){var disableAllOtherLines=line.series.disabled;if(!disableAllOtherLines){for(var i=0;i<self.legend.lines.length;i++){var l=self.legend.lines[i];if(line.series===l.series){}else if(l.series.disabled){}else{disableAllOtherLines=true;break}}}if(disableAllOtherLines){line.series.enable();line.element.classList.remove("disabled");self.legend.lines.forEach(function(l){if(line.series===l.series){}else{l.series.disable();l.element.classList.add("disabled")}})}else{self.legend.lines.forEach(function(l){l.series.enable();l.element.classList.remove("disabled")})}}};if(this.legend){if(typeof $!="undefined"&&$(this.legend.list).sortable){$(this.legend.list).sortable({start:function(event,ui){ui.item.bind("no.onclick",function(event){event.preventDefault()})},stop:function(event,ui){setTimeout(function(){ui.item.unbind("no.onclick")},250)}})}this.legend.lines.forEach(function(l){self.addAnchor(l)})}this._addBehavior=function(){this.graph.series.forEach(function(s){s.disable=function(){if(self.graph.series.length<=1){throw"only one series left"}s.disabled=true;self.graph.update()};s.enable=function(){s.disabled=false;self.graph.update()}})};this._addBehavior();this.updateBehaviour=function(){this._addBehavior()}};Rickshaw.namespace("Rickshaw.Graph.HoverDetail");Rickshaw.Graph.HoverDetail=Rickshaw.Class.create({initialize:function(args){var graph=this.graph=args.graph;this.xFormatter=args.xFormatter||function(x){return new Date(x*1e3).toUTCString()};this.yFormatter=args.yFormatter||function(y){return y===null?y:y.toFixed(2)};var element=this.element=document.createElement("div");element.className="detail";this.visible=true;graph.element.appendChild(element);this.lastEvent=null;this._addListeners();this.onShow=args.onShow;this.onHide=args.onHide;this.onRender=args.onRender;this.formatter=args.formatter||this.formatter},formatter:function(series,x,y,formattedX,formattedY,d){return series.name+":&nbsp;"+formattedY},update:function(e){e=e||this.lastEvent;if(!e)return;this.lastEvent=e;if(!e.target.nodeName.match(/^(path|svg|rect|circle)$/))return;var graph=this.graph;var eventX=e.offsetX||e.layerX;var eventY=e.offsetY||e.layerY;var j=0;var points=[];var nearestPoint;this.graph.series.active().forEach(function(series){var data=this.graph.stackedData[j++];if(!data.length)return;var domainX=graph.x.invert(eventX);var domainIndexScale=d3.scale.linear().domain([data[0].x,data.slice(-1)[0].x]).range([0,data.length-1]);var approximateIndex=Math.round(domainIndexScale(domainX));if(approximateIndex==data.length-1)approximateIndex--;var dataIndex=Math.min(approximateIndex||0,data.length-1);for(var i=approximateIndex;i<data.length-1;){if(!data[i]||!data[i+1])break;if(data[i].x<=domainX&&data[i+1].x>domainX){dataIndex=Math.abs(domainX-data[i].x)<Math.abs(domainX-data[i+1].x)?i:i+1;break}if(data[i+1].x<=domainX){i++}else{i--}}if(dataIndex<0)dataIndex=0;var value=data[dataIndex];var distance=Math.sqrt(Math.pow(Math.abs(graph.x(value.x)-eventX),2)+Math.pow(Math.abs(graph.y(value.y+value.y0)-eventY),2));var xFormatter=series.xFormatter||this.xFormatter;var yFormatter=series.yFormatter||this.yFormatter;var point={formattedXValue:xFormatter(value.x),formattedYValue:yFormatter(series.scale?series.scale.invert(value.y):value.y),series:series,value:value,distance:distance,order:j,name:series.name};if(!nearestPoint||distance<nearestPoint.distance){nearestPoint=point}points.push(point)},this);if(!nearestPoint)return;nearestPoint.active=true;var domainX=nearestPoint.value.x;var formattedXValue=nearestPoint.formattedXValue;this.element.innerHTML="";this.element.style.left=graph.x(domainX)+"px";this.visible&&this.render({points:points,detail:points,mouseX:eventX,mouseY:eventY,formattedXValue:formattedXValue,domainX:domainX})},hide:function(){this.visible=false;this.element.classList.add("inactive");if(typeof this.onHide=="function"){this.onHide()}},show:function(){this.visible=true;this.element.classList.remove("inactive");if(typeof this.onShow=="function"){this.onShow()}},render:function(args){var graph=this.graph;var points=args.points;var point=points.filter(function(p){return p.active}).shift();if(point.value.y===null)return;var formattedXValue=point.formattedXValue;var formattedYValue=point.formattedYValue;this.element.innerHTML="";this.element.style.left=graph.x(point.value.x)+"px";var xLabel=document.createElement("div");xLabel.className="x_label";xLabel.innerHTML=formattedXValue;this.element.appendChild(xLabel);var item=document.createElement("div");item.className="item";var series=point.series;var actualY=series.scale?series.scale.invert(point.value.y):point.value.y;item.innerHTML=this.formatter(series,point.value.x,actualY,formattedXValue,formattedYValue,point);item.style.top=this.graph.y(point.value.y0+point.value.y)+"px";this.element.appendChild(item);var dot=document.createElement("div");dot.className="dot";dot.style.top=item.style.top;dot.style.borderColor=series.color;this.element.appendChild(dot);if(point.active){item.className="item active";dot.className="dot active"}this.show();if(typeof this.onRender=="function"){this.onRender(args)}},_addListeners:function(){this.graph.element.addEventListener("mousemove",function(e){this.visible=true;this.update(e)}.bind(this),false);this.graph.onUpdate(function(){this.update()}.bind(this));this.graph.element.addEventListener("mouseout",function(e){if(e.relatedTarget&&!(e.relatedTarget.compareDocumentPosition(this.graph.element)&Node.DOCUMENT_POSITION_CONTAINS)){this.hide()}}.bind(this),false)}});Rickshaw.namespace("Rickshaw.Graph.JSONP");Rickshaw.Graph.JSONP=Rickshaw.Class.create(Rickshaw.Graph.Ajax,{request:function(){$.ajax({url:this.dataURL,dataType:"jsonp",success:this.success.bind(this),error:this.error.bind(this)})}});Rickshaw.namespace("Rickshaw.Graph.Legend");Rickshaw.Graph.Legend=function(args){var element=this.element=args.element;var graph=this.graph=args.graph;var self=this;element.classList.add("rickshaw_legend");var list=this.list=document.createElement("ul");element.appendChild(list);var series=graph.series.map(function(s){return s});if(!args.naturalOrder){series=series.reverse()}this.lines=[];this.addLine=function(series){var line=document.createElement("li");line.className="line";if(series.disabled){line.className+=" disabled"}var swatch=document.createElement("div");swatch.className="swatch";swatch.style.backgroundColor=series.color;line.appendChild(swatch);var label=document.createElement("span");label.className="label";label.innerHTML=series.name;line.appendChild(label);list.appendChild(line);line.series=series;if(series.noLegend){line.style.display="none"}var _line={element:line,series:series};if(self.shelving){self.shelving.addAnchor(_line);self.shelving.updateBehaviour()}if(self.highlighter){self.highlighter.addHighlightEvents(_line)}self.lines.push(_line)};series.forEach(function(s){self.addLine(s)});graph.onUpdate(function(){})};Rickshaw.namespace("Rickshaw.Graph.RangeSlider");Rickshaw.Graph.RangeSlider=Rickshaw.Class.create({initialize:function(args){var element=this.element=args.element;var graph=this.graph=args.graph;this.build();graph.onUpdate(function(){this.update()}.bind(this))},build:function(){var element=this.element;var graph=this.graph;var domain=graph.dataDomain();$(function(){$(element).slider({range:true,min:domain[0],max:domain[1],values:[domain[0],domain[1]],slide:function(event,ui){if(ui.values[1]<=ui.values[0])return;graph.window.xMin=ui.values[0];graph.window.xMax=ui.values[1];graph.update();var domain=graph.dataDomain();if(domain[0]==ui.values[0]){graph.window.xMin=undefined}if(domain[1]==ui.values[1]){graph.window.xMax=undefined}}})});element[0].style.width=graph.width+"px"},update:function(){var element=this.element;var graph=this.graph;var values=$(element).slider("option","values");var domain=graph.dataDomain();$(element).slider("option","min",domain[0]);$(element).slider("option","max",domain[1]);if(graph.window.xMin==null){values[0]=domain[0]}if(graph.window.xMax==null){values[1]=domain[1]}$(element).slider("option","values",values)}});Rickshaw.namespace("Rickshaw.Graph.Renderer");Rickshaw.Graph.Renderer=Rickshaw.Class.create({initialize:function(args){this.graph=args.graph;this.tension=args.tension||this.tension;this.graph.unstacker=this.graph.unstacker||new Rickshaw.Graph.Unstacker({graph:this.graph});this.configure(args)},seriesPathFactory:function(){},seriesStrokeFactory:function(){},defaults:function(){return{tension:.8,strokeWidth:2,unstack:true,padding:{top:.01,right:0,bottom:.01,left:0},stroke:false,fill:false}},domain:function(data){var stackedData=data||this.graph.stackedData||this.graph.stackData();var firstPoint=stackedData[0][0];if(firstPoint===undefined){return{x:[null,null],y:[null,null]}}var xMin=firstPoint.x;var xMax=firstPoint.x;var yMin=firstPoint.y+firstPoint.y0;var yMax=firstPoint.y+firstPoint.y0;stackedData.forEach(function(series){series.forEach(function(d){if(d.y==null)return;var y=d.y+d.y0;if(y<yMin)yMin=y;if(y>yMax)yMax=y});if(series[0].x<xMin)xMin=series[0].x;if(series[series.length-1].x>xMax)xMax=series[series.length-1].x});xMin-=(xMax-xMin)*this.padding.left;xMax+=(xMax-xMin)*this.padding.right;yMin=this.graph.min==="auto"?yMin:this.graph.min||0;yMax=this.graph.max===undefined?yMax:this.graph.max;if(this.graph.min==="auto"||yMin<0){yMin-=(yMax-yMin)*this.padding.bottom}if(this.graph.max===undefined){yMax+=(yMax-yMin)*this.padding.top}return{x:[xMin,xMax],y:[yMin,yMax]}},render:function(args){args=args||{};var graph=this.graph;var series=args.series||graph.series;var vis=args.vis||graph.vis;vis.selectAll("*").remove();var data=series.filter(function(s){return!s.disabled}).map(function(s){return s.stack});var nodes=vis.selectAll("path").data(data).enter().append("svg:path").attr("d",this.seriesPathFactory());var i=0;series.forEach(function(series){if(series.disabled)return;series.path=nodes[0][i++];this._styleSeries(series)},this)},_styleSeries:function(series){var fill=this.fill?series.color:"none";var stroke=this.stroke?series.color:"none";series.path.setAttribute("fill",fill);series.path.setAttribute("stroke",stroke);series.path.setAttribute("stroke-width",this.strokeWidth);series.path.setAttribute("class",series.className)},configure:function(args){args=args||{};Rickshaw.keys(this.defaults()).forEach(function(key){if(!args.hasOwnProperty(key)){this[key]=this[key]||this.graph[key]||this.defaults()[key];return}if(typeof this.defaults()[key]=="object"){Rickshaw.keys(this.defaults()[key]).forEach(function(k){this[key][k]=args[key][k]!==undefined?args[key][k]:this[key][k]!==undefined?this[key][k]:this.defaults()[key][k]},this)}else{this[key]=args[key]!==undefined?args[key]:this[key]!==undefined?this[key]:this.graph[key]!==undefined?this.graph[key]:this.defaults()[key]}},this)},setStrokeWidth:function(strokeWidth){if(strokeWidth!==undefined){this.strokeWidth=strokeWidth}},setTension:function(tension){if(tension!==undefined){this.tension=tension}}});Rickshaw.namespace("Rickshaw.Graph.Renderer.Line");Rickshaw.Graph.Renderer.Line=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"line",defaults:function($super){return Rickshaw.extend($super(),{unstack:true,fill:false,stroke:true})},seriesPathFactory:function(){var graph=this.graph;var factory=d3.svg.line().x(function(d){return graph.x(d.x)}).y(function(d){return graph.y(d.y)}).interpolate(this.graph.interpolation).tension(this.tension);factory.defined&&factory.defined(function(d){return d.y!==null});return factory}});Rickshaw.namespace("Rickshaw.Graph.Renderer.Stack");Rickshaw.Graph.Renderer.Stack=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"stack",defaults:function($super){return Rickshaw.extend($super(),{fill:true,stroke:false,unstack:false})},seriesPathFactory:function(){var graph=this.graph;var factory=d3.svg.area().x(function(d){return graph.x(d.x)}).y0(function(d){return graph.y(d.y0)}).y1(function(d){return graph.y(d.y+d.y0)}).interpolate(this.graph.interpolation).tension(this.tension);factory.defined&&factory.defined(function(d){return d.y!==null});return factory}});Rickshaw.namespace("Rickshaw.Graph.Renderer.Bar");Rickshaw.Graph.Renderer.Bar=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"bar",defaults:function($super){var defaults=Rickshaw.extend($super(),{gapSize:.05,unstack:false});delete defaults.tension;return defaults},initialize:function($super,args){args=args||{};this.gapSize=args.gapSize||this.gapSize;$super(args)},domain:function($super){var domain=$super();var frequentInterval=this._frequentInterval(this.graph.stackedData.slice(-1).shift());domain.x[1]+=Number(frequentInterval.magnitude);return domain},barWidth:function(series){var frequentInterval=this._frequentInterval(series.stack);var barWidth=this.graph.x(series.stack[0].x+frequentInterval.magnitude*(1-this.gapSize));return barWidth},render:function(args){args=args||{};var graph=this.graph;var series=args.series||graph.series;var vis=args.vis||graph.vis;vis.selectAll("*").remove();var barWidth=this.barWidth(series.active()[0]);var barXOffset=0;var activeSeriesCount=series.filter(function(s){return!s.disabled}).length;var seriesBarWidth=this.unstack?barWidth/activeSeriesCount:barWidth;var transform=function(d){var matrix=[1,0,0,d.y<0?-1:1,0,d.y<0?graph.y.magnitude(Math.abs(d.y))*2:0];return"matrix("+matrix.join(",")+")"};series.forEach(function(series){if(series.disabled)return;var barWidth=this.barWidth(series);var nodes=vis.selectAll("path").data(series.stack.filter(function(d){return d.y!==null})).enter().append("svg:rect").attr("x",function(d){return graph.x(d.x)+barXOffset}).attr("y",function(d){return graph.y(d.y0+Math.abs(d.y))*(d.y<0?-1:1)}).attr("width",seriesBarWidth).attr("height",function(d){return graph.y.magnitude(Math.abs(d.y))}).attr("transform",transform);Array.prototype.forEach.call(nodes[0],function(n){n.setAttribute("fill",series.color)});if(this.unstack)barXOffset+=seriesBarWidth},this)},_frequentInterval:function(data){var intervalCounts={};for(var i=0;i<data.length-1;i++){var interval=data[i+1].x-data[i].x;intervalCounts[interval]=intervalCounts[interval]||0;intervalCounts[interval]++}var frequentInterval={count:0,magnitude:1};Rickshaw.keys(intervalCounts).forEach(function(i){if(frequentInterval.count<intervalCounts[i]){frequentInterval={count:intervalCounts[i],magnitude:i}}});return frequentInterval}});Rickshaw.namespace("Rickshaw.Graph.Renderer.Area");Rickshaw.Graph.Renderer.Area=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"area",defaults:function($super){return Rickshaw.extend($super(),{unstack:false,fill:false,stroke:false})},seriesPathFactory:function(){var graph=this.graph;var factory=d3.svg.area().x(function(d){return graph.x(d.x)}).y0(function(d){return graph.y(d.y0)}).y1(function(d){return graph.y(d.y+d.y0)}).interpolate(graph.interpolation).tension(this.tension);factory.defined&&factory.defined(function(d){return d.y!==null});return factory},seriesStrokeFactory:function(){var graph=this.graph;var factory=d3.svg.line().x(function(d){return graph.x(d.x)}).y(function(d){return graph.y(d.y+d.y0)}).interpolate(graph.interpolation).tension(this.tension);factory.defined&&factory.defined(function(d){return d.y!==null});return factory},render:function(){var graph=this.graph;graph.vis.selectAll("*").remove();var method=this.unstack?"append":"insert";var nodes=graph.vis.selectAll("path").data(this.graph.stackedData).enter()[method]("svg:g","g");nodes.append("svg:path").attr("d",this.seriesPathFactory()).attr("class","area");if(this.stroke){nodes.append("svg:path").attr("d",this.seriesStrokeFactory()).attr("class","line")}var i=0;graph.series.forEach(function(series){if(series.disabled)return;series.path=nodes[0][i++];this._styleSeries(series)},this)},_styleSeries:function(series){if(!series.path)return;d3.select(series.path).select(".area").attr("fill",series.color);if(this.stroke){d3.select(series.path).select(".line").attr("fill","none").attr("stroke",series.stroke||d3.interpolateRgb(series.color,"black")(.125)).attr("stroke-width",this.strokeWidth)}if(series.className){series.path.setAttribute("class",series.className)}}});Rickshaw.namespace("Rickshaw.Graph.Renderer.ScatterPlot");Rickshaw.Graph.Renderer.ScatterPlot=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"scatterplot",defaults:function($super){return Rickshaw.extend($super(),{unstack:true,fill:true,stroke:false,padding:{top:.01,right:.01,bottom:.01,left:.01},dotSize:4})},initialize:function($super,args){$super(args)},render:function(args){args=args||{};var graph=this.graph;var series=args.series||graph.series;var vis=args.vis||graph.vis;var dotSize=this.dotSize;vis.selectAll("*").remove();series.forEach(function(series){if(series.disabled)return;var nodes=vis.selectAll("path").data(series.stack.filter(function(d){return d.y!==null})).enter().append("svg:circle").attr("cx",function(d){return graph.x(d.x)}).attr("cy",function(d){return graph.y(d.y)}).attr("r",function(d){return"r"in d?d.r:dotSize});Array.prototype.forEach.call(nodes[0],function(n){n.setAttribute("fill",series.color)})},this)}});Rickshaw.namespace("Rickshaw.Graph.Renderer.Multi");Rickshaw.Graph.Renderer.Multi=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"multi",initialize:function($super,args){$super(args)},defaults:function($super){return Rickshaw.extend($super(),{unstack:true,fill:false,stroke:true})},domain:function($super){this.graph.stackData();var domains=[];var groups=this._groups();this._stack(groups);groups.forEach(function(group){var data=group.series.filter(function(s){return!s.disabled}).map(function(s){return s.stack});if(!data.length)return;var domain=$super(data);domains.push(domain)});var xMin=d3.min(domains.map(function(d){return d.x[0]}));var xMax=d3.max(domains.map(function(d){return d.x[1]}));var yMin=d3.min(domains.map(function(d){return d.y[0]}));var yMax=d3.max(domains.map(function(d){return d.y[1]}));return{x:[xMin,xMax],y:[yMin,yMax]}},_groups:function(){var graph=this.graph;var renderGroups={};graph.series.forEach(function(series){if(series.disabled)return;if(!renderGroups[series.renderer]){var ns="http://www.w3.org/2000/svg";var vis=document.createElementNS(ns,"g");graph.vis[0][0].appendChild(vis);var renderer=graph._renderers[series.renderer];renderGroups[series.renderer]={renderer:renderer,series:[],vis:d3.select(vis)}}renderGroups[series.renderer].series.push(series)},this);var groups=[];Object.keys(renderGroups).forEach(function(key){var group=renderGroups[key];groups.push(group)});return groups},_stack:function(groups){groups.forEach(function(group){var series=group.series.filter(function(series){return!series.disabled});var data=series.map(function(series){return series.stack});if(!group.renderer.unstack){var layout=d3.layout.stack();var stackedData=Rickshaw.clone(layout(data));series.forEach(function(series,index){series._stack=Rickshaw.clone(stackedData[index])})}},this);return groups},render:function(){this.graph.series.forEach(function(series){if(!series.renderer){throw new Error("Each series needs a renderer for graph 'multi' renderer")}});this.graph.vis.selectAll("*").remove();var groups=this._groups();groups=this._stack(groups);groups.forEach(function(group){var series=group.series.filter(function(series){return!series.disabled});group.renderer.render({series:series,vis:group.vis});series.forEach(function(s){s.stack=s._stack||s.stack||s.data})})}});Rickshaw.namespace("Rickshaw.Graph.Renderer.LinePlot");Rickshaw.Graph.Renderer.LinePlot=Rickshaw.Class.create(Rickshaw.Graph.Renderer,{name:"lineplot",defaults:function($super){return Rickshaw.extend($super(),{unstack:true,fill:false,stroke:true,padding:{top:.01,right:.01,bottom:.01,left:.01},dotSize:3,strokeWidth:2})},initialize:function($super,args){$super(args)},seriesPathFactory:function(){var graph=this.graph;var factory=d3.svg.line().x(function(d){return graph.x(d.x)}).y(function(d){return graph.y(d.y)}).interpolate(this.graph.interpolation).tension(this.tension);factory.defined&&factory.defined(function(d){return d.y!==null});return factory},_renderDots:function(){var graph=this.graph;graph.series.forEach(function(series){if(series.disabled)return;var nodes=graph.vis.selectAll("x").data(series.stack.filter(function(d){return d.y!==null})).enter().append("svg:circle").attr("cx",function(d){return graph.x(d.x)}).attr("cy",function(d){return graph.y(d.y)}).attr("r",function(d){return"r"in d?d.r:graph.renderer.dotSize});Array.prototype.forEach.call(nodes[0],function(n){if(!n)return;n.setAttribute("data-color",series.color);n.setAttribute("fill","white");n.setAttribute("stroke",series.color);n.setAttribute("stroke-width",this.strokeWidth)}.bind(this))},this)},_renderLines:function(){var graph=this.graph;var nodes=graph.vis.selectAll("path").data(this.graph.stackedData).enter().append("svg:path").attr("d",this.seriesPathFactory());var i=0;graph.series.forEach(function(series){if(series.disabled)return;series.path=nodes[0][i++];this._styleSeries(series)},this)},render:function(){var graph=this.graph;graph.vis.selectAll("*").remove();this._renderLines();this._renderDots()}});Rickshaw.namespace("Rickshaw.Graph.Smoother");Rickshaw.Graph.Smoother=Rickshaw.Class.create({initialize:function(args){this.graph=args.graph;this.element=args.element;this.aggregationScale=1;this.build();this.graph.stackData.hooks.data.push({name:"smoother",orderPosition:50,f:this.transformer.bind(this)})},build:function(){var self=this;if(this.element){$(function(){$(self.element).slider({min:1,max:100,slide:function(event,ui){self.setScale(ui.value);self.graph.update()}})})}},setScale:function(scale){if(scale<1){throw"scale out of range: "+scale}this.aggregationScale=scale;this.graph.update()},transformer:function(data){if(this.aggregationScale==1)return data;var aggregatedData=[];data.forEach(function(seriesData){var aggregatedSeriesData=[];while(seriesData.length){var avgX=0,avgY=0;var slice=seriesData.splice(0,this.aggregationScale);slice.forEach(function(d){avgX+=d.x/slice.length;avgY+=d.y/slice.length});aggregatedSeriesData.push({x:avgX,y:avgY})}aggregatedData.push(aggregatedSeriesData)}.bind(this));return aggregatedData}});Rickshaw.namespace("Rickshaw.Graph.Unstacker");Rickshaw.Graph.Unstacker=function(args){this.graph=args.graph;var self=this;this.graph.stackData.hooks.after.push({name:"unstacker",f:function(data){if(!self.graph.renderer.unstack)return data;data.forEach(function(seriesData){seriesData.forEach(function(d){d.y0=0})});return data}})};Rickshaw.namespace("Rickshaw.Series");Rickshaw.Series=Rickshaw.Class.create(Array,{initialize:function(data,palette,options){options=options||{};this.palette=new Rickshaw.Color.Palette(palette);this.timeBase=typeof options.timeBase==="undefined"?Math.floor((new Date).getTime()/1e3):options.timeBase;var timeInterval=typeof options.timeInterval=="undefined"?1e3:options.timeInterval;this.setTimeInterval(timeInterval);if(data&&typeof data=="object"&&Array.isArray(data)){data.forEach(function(item){this.addItem(item)},this)}},addItem:function(item){if(typeof item.name==="undefined"){throw"addItem() needs a name"}item.color=item.color||this.palette.color(item.name);item.data=item.data||[];if(item.data.length===0&&this.length&&this.getIndex()>0){this[0].data.forEach(function(plot){item.data.push({x:plot.x,y:0})})}else if(item.data.length===0){item.data.push({x:this.timeBase-(this.timeInterval||0),y:0})}this.push(item);if(this.legend){this.legend.addLine(this.itemByName(item.name))}},addData:function(data,x){var index=this.getIndex();Rickshaw.keys(data).forEach(function(name){if(!this.itemByName(name)){this.addItem({name:name})}},this);this.forEach(function(item){item.data.push({x:x||(index*this.timeInterval||1)+this.timeBase,y:data[item.name]||0})},this)},getIndex:function(){return this[0]&&this[0].data&&this[0].data.length?this[0].data.length:0},itemByName:function(name){for(var i=0;i<this.length;i++){if(this[i].name==name)return this[i]}},setTimeInterval:function(iv){this.timeInterval=iv/1e3},setTimeBase:function(t){this.timeBase=t},dump:function(){var data={timeBase:this.timeBase,timeInterval:this.timeInterval,items:[]};this.forEach(function(item){var newItem={color:item.color,name:item.name,data:[]};item.data.forEach(function(plot){newItem.data.push({x:plot.x,y:plot.y})});data.items.push(newItem)});return data},load:function(data){if(data.timeInterval){this.timeInterval=data.timeInterval}if(data.timeBase){this.timeBase=data.timeBase}if(data.items){data.items.forEach(function(item){this.push(item);if(this.legend){this.legend.addLine(this.itemByName(item.name))}},this)}}});Rickshaw.Series.zeroFill=function(series){Rickshaw.Series.fill(series,0)};Rickshaw.Series.fill=function(series,fill){var x;var i=0;var data=series.map(function(s){return s.data});while(i<Math.max.apply(null,data.map(function(d){return d.length}))){x=Math.min.apply(null,data.filter(function(d){return d[i]}).map(function(d){return d[i].x}));data.forEach(function(d){if(!d[i]||d[i].x!=x){d.splice(i,0,{x:x,y:fill})}});i++}};Rickshaw.namespace("Rickshaw.Series.FixedDuration");Rickshaw.Series.FixedDuration=Rickshaw.Class.create(Rickshaw.Series,{initialize:function(data,palette,options){options=options||{};if(typeof options.timeInterval==="undefined"){throw new Error("FixedDuration series requires timeInterval")}if(typeof options.maxDataPoints==="undefined"){throw new Error("FixedDuration series requires maxDataPoints")}this.palette=new Rickshaw.Color.Palette(palette);this.timeBase=typeof options.timeBase==="undefined"?Math.floor((new Date).getTime()/1e3):options.timeBase;this.setTimeInterval(options.timeInterval);if(this[0]&&this[0].data&&this[0].data.length){this.currentSize=this[0].data.length;this.currentIndex=this[0].data.length}else{this.currentSize=0;this.currentIndex=0}this.maxDataPoints=options.maxDataPoints;if(data&&typeof data=="object"&&Array.isArray(data)){data.forEach(function(item){this.addItem(item)},this);this.currentSize+=1;this.currentIndex+=1}this.timeBase-=(this.maxDataPoints-this.currentSize)*this.timeInterval;if(typeof this.maxDataPoints!=="undefined"&&this.currentSize<this.maxDataPoints){for(var i=this.maxDataPoints-this.currentSize-1;i>1;i--){this.currentSize+=1;this.currentIndex+=1;this.forEach(function(item){item.data.unshift({x:((i-1)*this.timeInterval||1)+this.timeBase,y:0,i:i})},this)}}},addData:function($super,data,x){$super(data,x);this.currentSize+=1;this.currentIndex+=1;if(this.maxDataPoints!==undefined){while(this.currentSize>this.maxDataPoints){this.dropData()}}},dropData:function(){this.forEach(function(item){item.data.splice(0,1)});this.currentSize-=1},getIndex:function(){return this.currentIndex}});
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Clock = (function(_super) {
    __extends(Clock, _super);

    function Clock() {
      this.startTime = __bind(this.startTime, this);
      _ref = Clock.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Clock.prototype.ready = function() {
      return setInterval(this.startTime, 500);
    };

    Clock.prototype.startTime = function() {
      var h, m, s, today;
      today = new Date();
      h = today.getHours();
      m = today.getMinutes();
      s = today.getSeconds();
      m = this.formatTime(m);
      s = this.formatTime(s);
      this.set('time', h + ":" + m + ":" + s);
      return this.set('date', today.toDateString());
    };

    Clock.prototype.formatTime = function(i) {
      if (i < 10) {
        return "0" + i;
      } else {
        return i;
      }
    };

    return Clock;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Comments = (function(_super) {
    __extends(Comments, _super);

    function Comments() {
      this.nextComment = __bind(this.nextComment, this);
      _ref = Comments.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Comments.accessor('quote', function() {
      var _ref1;
      return "â€œ" + ((_ref1 = this.get('current_comment')) != null ? _ref1.body : void 0) + "â€";
    });

    Comments.prototype.ready = function() {
      this.currentIndex = 0;
      this.commentElem = $(this.node).find('.comment-container');
      this.nextComment();
      return this.startCarousel();
    };

    Comments.prototype.onData = function(data) {
      return this.currentIndex = 0;
    };

    Comments.prototype.startCarousel = function() {
      return setInterval(this.nextComment, 8000);
    };

    Comments.prototype.nextComment = function() {
      var comments,
        _this = this;
      comments = this.get('comments');
      if (comments) {
        return this.commentElem.fadeOut(function() {
          _this.currentIndex = (_this.currentIndex + 1) % comments.length;
          _this.set('current_comment', comments[_this.currentIndex]);
          return _this.commentElem.fadeIn();
        });
      }
    };

    return Comments;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Graph = (function(_super) {
    __extends(Graph, _super);

    function Graph() {
      _ref = Graph.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Graph.accessor('current', function() {
      var points;
      if (this.get('displayedValue')) {
        return this.get('displayedValue');
      }
      points = this.get('points');
      if (points) {
        return points[points.length - 1].y;
      }
    });

    Graph.prototype.ready = function() {
      var container, height, width, x_axis, y_axis;
      container = $(this.node).parent();
      width = (Dashing.widget_base_dimensions[0] * container.data("sizex")) + Dashing.widget_margins[0] * 2 * (container.data("sizex") - 1);
      height = Dashing.widget_base_dimensions[1] * container.data("sizey");
      this.graph = new Rickshaw.Graph({
        element: this.node,
        width: width,
        height: height,
        renderer: this.get("graphtype"),
        series: [
          {
            color: "#fff",
            data: [
              {
                x: 0,
                y: 0
              }
            ]
          }
        ]
      });
      if (this.get('points')) {
        this.graph.series[0].data = this.get('points');
      }
      x_axis = new Rickshaw.Graph.Axis.Time({
        graph: this.graph
      });
      y_axis = new Rickshaw.Graph.Axis.Y({
        graph: this.graph,
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT
      });
      return this.graph.render();
    };

    Graph.prototype.onData = function(data) {
      if (this.graph) {
        this.graph.series[0].data = data.points;
        return this.graph.render();
      }
    };

    return Graph;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Iframe = (function(_super) {
    __extends(Iframe, _super);

    function Iframe() {
      _ref = Iframe.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Iframe.prototype.ready = function() {};

    Iframe.prototype.onData = function(data) {};

    return Iframe;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Image = (function(_super) {
    __extends(Image, _super);

    function Image() {
      _ref = Image.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Image.prototype.ready = function() {};

    Image.prototype.onData = function(data) {};

    return Image;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.List = (function(_super) {
    __extends(List, _super);

    function List() {
      _ref = List.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    List.prototype.ready = function() {
      if (this.get('unordered')) {
        return $(this.node).find('ol').remove();
      } else {
        return $(this.node).find('ul').remove();
      }
    };

    return List;

  })(Dashing.Widget);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Meter = (function(_super) {
    __extends(Meter, _super);

    Meter.accessor('value', Dashing.AnimatedValue);

    function Meter() {
      Meter.__super__.constructor.apply(this, arguments);
      this.observe('value', function(value) {
        return $(this.node).find(".meter").val(value).trigger('change');
      });
    }

    Meter.prototype.ready = function() {
      var meter;
      meter = $(this.node).find(".meter");
      meter.attr("data-bgcolor", meter.css("background-color"));
      meter.attr("data-fgcolor", meter.css("color"));
      return meter.knob();
    };

    return Meter;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Number = (function(_super) {
    __extends(Number, _super);

    function Number() {
      _ref = Number.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Number.accessor('current', Dashing.AnimatedValue);

    Number.accessor('difference', function() {
      var current, diff, last;
      if (this.get('last')) {
        last = parseInt(this.get('last'));
        current = parseInt(this.get('current'));
        if (last !== 0) {
          diff = Math.abs(Math.round((current - last) / last * 100));
          return "" + diff + "%";
        }
      } else {
        return "";
      }
    });

    Number.accessor('arrow', function() {
      if (this.get('last')) {
        if (parseInt(this.get('current')) > parseInt(this.get('last'))) {
          return 'icon-arrow-up';
        } else {
          return 'icon-arrow-down';
        }
      }
    });

    Number.prototype.onData = function(data) {
      if (data.status) {
        $(this.get('node')).attr('class', function(i, c) {
          return c.replace(/\bstatus-\S+/g, '');
        });
        return $(this.get('node')).addClass("status-" + data.status);
      }
    };

    return Number;

  })(Dashing.Widget);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dashing.Text = (function(_super) {
    __extends(Text, _super);

    function Text() {
      _ref = Text.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Text;

  })(Dashing.Widget);

}).call(this);
(function() {
  console.log("Yeah! The dashboard has started!");

  Dashing.on('ready', function() {
    var contentWidth;
    Dashing.widget_margins || (Dashing.widget_margins = [5, 5]);
    Dashing.widget_base_dimensions || (Dashing.widget_base_dimensions = [300, 360]);
    Dashing.numColumns || (Dashing.numColumns = 4);
    contentWidth = (Dashing.widget_base_dimensions[0] + Dashing.widget_margins[0] * 2) * Dashing.numColumns;
    return Batman.setImmediate(function() {
      $('.gridster').width(contentWidth);
      return $('.gridster ul:first').gridster({
        widget_margins: Dashing.widget_margins,
        widget_base_dimensions: Dashing.widget_base_dimensions,
        avoid_overlapped_widgets: !Dashing.customGridsterLayout,
        draggable: {
          stop: Dashing.showGridsterInstructions,
          start: function() {
            return Dashing.currentWidgetPositions = Dashing.getWidgetPositions();
          }
        }
      });
    });
  });

}).call(this);