!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Sketchfab=n():t.Sketchfab=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/static/builds/web/dist/",e(e.s=39)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(25)("wks"),i=e(13),o=e(0).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,n,e){t.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(12),i=e(35),o=e(22),s=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4),i=e(11);t.exports=e(3)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(69),i=e(28);t.exports=function(t){return r(i(t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports={default:e(71),__esModule:!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(37),i=e(24);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){"use strict";n.__esModule=!0;var r=s(e(62)),i=s(e(50)),o="function"==typeof i.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof i.default&&"symbol"===o(r.default)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":o(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(0),i=e(9),o=e(21),s=e(18),u=e(4).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||u(n,t,{value:s.f(t)})}},function(t,n,e){n.f=e(2)},function(t,n,e){var r=e(4).f,i=e(1),o=e(2)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n,e){var r=e(8);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),i=e(9),o=e(64),s=e(5),u=function(t,n,e){var a,c,f,p=t&u.F,l=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,_=l?i:i[n]||(i[n]={}),b=_.prototype,m=l?r:d?r[n]:(r[n]||{}).prototype;for(a in l&&(e=n),e)(c=!p&&m&&void 0!==m[a])&&a in _||(f=c?m[a]:e[a],_[a]=l&&"function"!=typeof m[a]?e[a]:v&&c?o(f,r):y&&m[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((_.virtual||(_.virtual={}))[a]=f,t&u.R&&b&&!b[a]&&s(b,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(25)("keys"),i=e(13);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(37),i=e(24).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(12),i=e(57),o=e(24),s=e(26)("IE_PROTO"),u=function(){},a=function(){var t,n=e(34)("iframe"),r=o.length;for(n.style.display="none",e(56).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[s]=t):e=a(),void 0===n?e:i(e,n)}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";var r=e(21),i=e(23),o=e(32),s=e(5),u=e(1),a=e(20),c=e(58),f=e(19),p=e(55),l=e(2)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,y,_,b){c(e,n,v);var m,g,O,w=function(t){if(!d&&t in I)return I[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",x="values"==y,L=!1,I=t.prototype,j=I[l]||I["@@iterator"]||y&&I[y],E=!d&&j||w(y),P=y?x?w("entries"):E:void 0,M="Array"==n&&I.entries||j;if(M&&(O=p(M.call(new t)))!==Object.prototype&&O.next&&(f(O,S,!0),r||u(O,l)||s(O,l,h)),x&&j&&"values"!==j.name&&(L=!0,E=function(){return j.call(this)}),r&&!b||!d&&!L&&I[l]||s(I,l,E),a[n]=E,a[S]=h,y)if(m={values:x?E:w("values"),keys:_?E:w("keys"),entries:P},b)for(g in m)g in I||o(I,g,m[g]);else i(i.P+i.F*(d||L),n,m);return m}},function(t,n,e){var r=e(8),i=e(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){t.exports=!e(3)&&!e(7)(function(){return 7!=Object.defineProperty(e(34)("div"),"a",{get:function(){return 7}}).a})},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(1),i=e(6),o=e(68)(!1),s=e(26)("IE_PROTO");t.exports=function(t,n){var e,u=i(t),a=0,c=[];for(e in u)e!=s&&r(u,e)&&c.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~o(c,e)||c.push(e));return c}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";e.r(n);var r=e(10),i=e.n(r),o=e(15),s=e.n(o),u=function(t,n,e){this._target=t,this._requestIdCounter=0,this._pendingRequests={},this._eventListeners={},this._ready=!1,this._domain=e,this._instanceId=n,this.listenServer()};u.prototype={getIdentifier:function(){return this._instanceId},getDomain:function(){return this._domain},setIdentifier:function(t){this._instanceId=t},use:function(t,n){this._version=t,this._ready=!0;var e=this._requestIdCounter++;this._pendingRequests[e]=function(t,e,r){t?n.call(this,t):n.call(this,null,new function(t,n){t.forEach(function(t){this[t]=function(){var e,r=n._requestIdCounter++,i=Array.prototype.slice.call(arguments);i.length>0&&"function"==typeof i[i.length-1]&&(e=i.pop()),e&&(n._pendingRequests[r]=e.bind(this)),n._target.postMessage({type:"api.request",instanceId:n.getIdentifier(),requestId:r,member:t,arguments:i},n.getDomain())}},this),this.addEventListener=function(t,e,r){"viewerready"===t&&n.isViewerReady&&e(),n._eventListeners[t]||(n._eventListeners[t]=[]),n._eventListeners[t].push(e),r&&this.setListenerOptions&&(r.name=t,this.setListenerOptions(r))},this.removeEventListener=function(t,e){if(n._eventListeners[t]){var r=n._eventListeners[t].indexOf(e);-1!==r&&n._eventListeners[t].splice(r,1)}}}(r,this))}.bind(this),this._target.postMessage({type:"api.initialize",requestId:e,name:t,instanceId:this._instanceId},this._domain)},listenServer:function(){var t=["api.initialize.result","api.request.result","api.event"];window.addEventListener("message",function(n){if(n.origin===this._domain&&n.data&&n.data.type&&n.data.instanceId&&n.data.instanceId===this.getIdentifier()){var e=n.data.type;if(-1!==t.indexOf(e))if("api.event"===e){var r=n.data.results,i=r[0];if(this._eventListeners["*"]||this._eventListeners.all)return void["*","all"].forEach(function(t){var n=this._eventListeners[t];n&&n.forEach(function(t){t.apply(t,r)})},this);var o=r.slice(1),s=this._eventListeners[i];s?s.forEach(function(t){t.apply(t,o)}):"viewerready"===i&&(this.isViewerReady=!0)}else{var u=this._pendingRequests[n.data.requestId];if(!u)return;u.apply(null,n.data.results)}}}.bind(this))}};var a=u;function c(t){var n={};return i()(t).forEach(function(e){n[e]=Array.isArray(t[e])?t[e]:[t[e]]}),n}function f(t){return"object"===(void 0===t?"undefined":s()(t))?c(t):("?"===t[0]&&(t=t.substr(1)),t.split(/&+/g).reduce(function(t,n){if(0===n.length)return t;var e=n.indexOf("=");-1===e&&(e=n.length);var r=decodeURIComponent(n.substr(0,e).replace(/\+/g,"%20")),i=decodeURIComponent(n.substr(e+1).replace(/\+/g,"%20"));return void 0===t[r]&&(t[r]=[]),t[r].push(i),t},{}))}window.SketchfabAPIClient=a;var p=function(t,n){var e=t,r=n;"object"===(void 0===t?"undefined":s()(t))&&(r=t,e=null),this._version=e,this._target=r,window.sketchfabAPIinstances||(window.sketchfabAPIinstances=[]),window.sketchfabAPIinstances.push(this),this._apiId=window.sketchfabAPIinstances.length.toString(),this._target.id&&(this._apiId+="_"+this._target.id),this._target.allow||(this._target.allow="vr; autoplay; fullscreen"),this._client=void 0,this._options=void 0,this._domain="fatvoxel.com",this._domain="same-as-current"===this._domain?window.location.hostname:this._domain,this._urlTemplate="https://YYYY/models/XXXX/embed",this._url=this._urlTemplate.replace("YYYY",this._domain),this._transmitOptions={},this._getURLOptions()};p.prototype={_urlOptionsDict:{skfb_api_version:{default:"1.4.2",type:"string"}},_optionsLoaded:function(t){this._urlOptions=t,this._version=this._getURLOption("skfb_api_version",this._version)},_getURLOption:function(t,n){var e=this._urlOptionsDict[t];if(!e)return n;void 0!==n&&null!==n||(n=e.default);var r=this._urlOptions[t];return r&&r.length?r[0]:n},_getURLOptions:function(){if(!window||!window.location.search)return this._optionsLoaded({});var t=f(window.location.search);for(var n in t)n.startsWith("skfb_")&&(this._transmitOptions[n.substr(5)]=t[n]);return this._optionsLoaded(t)},getEmbedURL:function(t,n){var e=this._url+"?api_version="+this._version+"&api_id="+this._apiId;n&&i()(n).forEach(function(t){null!=n[t]&&"function"!=typeof n[t]&&(e+="&"+t.toString()+"="+n[t].toString())});var r=this._transmitOptions;return i()(this._transmitOptions).forEach(function(t){e+="&"+t.toString()+"="+r[t].toString()}),e.replace("XXXX",t)},init:function(t,n){this._options=n,this._uid=t,this._realInit()},reload:function(t){var n=document.createElement("script");n.setAttribute("src","https://static."+t+"/api/sketchfab-viewer-"+this._version+".js"),n.addEventListener("load",function(){this._url=this._urlTemplate.replace("YYYY",t),-1!==this._domain.indexOf("sketchfab.com")&&(this._transmitOptions.hook_prod=1,this._transmitOptions.model=this._uid),this._realInit()}.bind(this)),document.body.appendChild(n)},_initializeAPIEmbed:function(t){if(t.data&&t.data.instanceId&&this._apiId===t.data.instanceId&&"api.ready"===t.data.type){var n=t.data.options;if(n&&n.domain)this.reload(n.domain);else if(void 0===t.data.error){var e=this._target.src.split("/");e="https://"+e[2],this._client=new window.SketchfabAPIClient(this._target.contentWindow,this._apiId,e),this._client.use(this._version,function(t,n){if(t)throw t;this.success.call(this,n)}.bind(this)),window.removeEventListener("message",this._claimEmbedBinded)}else this.error(t.data.error)}},_realInit:function(){this._initializeAPIEmbedBinded=this._initializeAPIEmbed.bind(this),window.addEventListener("message",this._initializeAPIEmbedBinded),this._target.onload=function(t){try{var n=t.currentTarget.contentDocument.title;(n.startsWith("Page not found")||n.startsWith("400 - "))&&this.error.call(this,"Model not found "+this._uid)}catch(t){}}.bind(this),this._target.src=this.getEmbedURL(this._uid,this._options)},success:function(t){this._options.success&&"function"==typeof this._options.success&&this._options.success(t)},error:function(t){this._options.error&&"function"==typeof this._options.error&&this._options.error(t)}};n.default=p},function(t,n,e){e(17)("observable")},function(t,n,e){e(17)("asyncIterator")},function(t,n){},function(t,n,e){var r=e(16),i=e(11),o=e(6),s=e(22),u=e(1),a=e(35),c=Object.getOwnPropertyDescriptor;n.f=e(3)?c:function(t,n){if(t=o(t),n=s(n,!0),a)try{return c(t,n)}catch(t){}if(u(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(6),i=e(29).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return s.slice()}}(t):i(r(t))}},function(t,n,e){var r=e(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(14),i=e(30),o=e(16);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var s,u=e(t),a=o.f,c=0;u.length>c;)a.call(t,s=u[c++])&&n.push(s);return n}},function(t,n,e){var r=e(13)("meta"),i=e(8),o=e(1),s=e(4).f,u=0,a=Object.isExtensible||function(){return!0},c=!e(7)(function(){return a(Object.preventExtensions({}))}),f=function(t){s(t,r,{value:{i:"O"+ ++u,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!a(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!a(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&p.NEED&&a(t)&&!o(t,r)&&f(t),t}}},function(t,n,e){"use strict";var r=e(0),i=e(1),o=e(3),s=e(23),u=e(32),a=e(47).KEY,c=e(7),f=e(25),p=e(19),l=e(13),d=e(2),h=e(18),v=e(17),y=e(46),_=e(45),b=e(12),m=e(8),g=e(6),O=e(22),w=e(11),S=e(31),x=e(44),L=e(43),I=e(4),j=e(14),E=L.f,P=I.f,M=x.f,k=r.Symbol,T=r.JSON,A=T&&T.stringify,R=d("_hidden"),C=d("toPrimitive"),N={}.propertyIsEnumerable,F=f("symbol-registry"),D=f("symbols"),Y=f("op-symbols"),q=Object.prototype,U="function"==typeof k,V=r.QObject,W=!V||!V.prototype||!V.prototype.findChild,G=o&&c(function(){return 7!=S(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=E(q,n);r&&delete q[n],P(t,n,e),r&&t!==q&&P(q,n,r)}:P,z=function(t){var n=D[t]=S(k.prototype);return n._k=t,n},B=U&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},X=function(t,n,e){return t===q&&X(Y,n,e),b(t),n=O(n,!0),b(e),i(D,n)?(e.enumerable?(i(t,R)&&t[R][n]&&(t[R][n]=!1),e=S(e,{enumerable:w(0,!1)})):(i(t,R)||P(t,R,w(1,{})),t[R][n]=!0),G(t,n,e)):P(t,n,e)},K=function(t,n){b(t);for(var e,r=y(n=g(n)),i=0,o=r.length;o>i;)X(t,e=r[i++],n[e]);return t},H=function(t){var n=N.call(this,t=O(t,!0));return!(this===q&&i(D,t)&&!i(Y,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,R)&&this[R][t])||n)},J=function(t,n){if(t=g(t),n=O(n,!0),t!==q||!i(D,n)||i(Y,n)){var e=E(t,n);return!e||!i(D,n)||i(t,R)&&t[R][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=M(g(t)),r=[],o=0;e.length>o;)i(D,n=e[o++])||n==R||n==a||r.push(n);return r},Z=function(t){for(var n,e=t===q,r=M(e?Y:g(t)),o=[],s=0;r.length>s;)!i(D,n=r[s++])||e&&!i(q,n)||o.push(D[n]);return o};U||(u((k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(Y,e),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),G(this,t,w(1,e))};return o&&W&&G(q,t,{configurable:!0,set:n}),z(t)}).prototype,"toString",function(){return this._k}),L.f=J,I.f=X,e(29).f=x.f=Q,e(16).f=H,e(30).f=Z,o&&!e(21)&&u(q,"propertyIsEnumerable",H,!0),h.f=function(t){return z(d(t))}),s(s.G+s.W+s.F*!U,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var nt=j(d.store),et=0;nt.length>et;)v(nt[et++]);s(s.S+s.F*!U,"Symbol",{for:function(t){return i(F,t+="")?F[t]:F[t]=k(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var n in F)if(F[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),s(s.S+s.F*!U,"Object",{create:function(t,n){return void 0===n?S(t):K(S(t),n)},defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:J,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),T&&s(s.S+s.F*(!U||c(function(){var t=k();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(m(n)||void 0!==t)&&!B(t))return _(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!B(n))return n}),r[1]=n,A.apply(T,r)}}),k.prototype[C]||e(5)(k.prototype,C,k.prototype.valueOf),p(k,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,n,e){e(48),e(42),e(41),e(40),t.exports=e(9).Symbol},function(t,n,e){t.exports={default:e(49),__esModule:!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=function(){}},function(t,n,e){"use strict";var r=e(52),i=e(51),o=e(20),s=e(6);t.exports=e(33)(Array,"Array",function(t,n){this._t=s(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){e(53);for(var r=e(0),i=e(5),o=e(20),s=e(2)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=r[c],p=f&&f.prototype;p&&!p[s]&&i(p,s,c),o[c]=o.Array}},function(t,n,e){var r=e(1),i=e(38),o=e(26)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),i=e(12),o=e(14);t.exports=e(3)?Object.defineProperties:function(t,n){i(t);for(var e,s=o(n),u=s.length,a=0;u>a;)r.f(t,e=s[a++],n[e]);return t}},function(t,n,e){"use strict";var r=e(31),i=e(11),o=e(19),s={};e(5)(s,e(2)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(s,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(27),i=e(28);t.exports=function(t){return function(n,e){var o,s,u=String(i(n)),a=r(e),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a))<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):s-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(59)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(60),e(54),t.exports=e(18).f("iterator")},function(t,n,e){t.exports={default:e(61),__esModule:!0}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(63);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(23),i=e(9),o=e(7);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*o(function(){e(1)}),"Object",s)}},function(t,n,e){var r=e(27),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(27),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(6),i=e(67),o=e(66);t.exports=function(t){return function(n,e,s){var u,a=r(n),c=i(a.length),f=o(s,c);if(t&&e!=e){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(38),i=e(14);e(65)("keys",function(){return function(t){return i(r(t))}})},function(t,n,e){e(70),t.exports=e(9).Object.keys}]).default});
//# sourceMappingURL=sketchfab-viewer-1.4.2.js.map