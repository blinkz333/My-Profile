'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var anime_min = createCommonjsModule(function (module) {
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value);};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof commonjsGlobal&&null!=commonjsGlobal?commonjsGlobal:e};$jscomp.global=$jscomp.getGlobal(commonjsGlobal);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){};};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u];}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r});}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=commonjsGlobal;
(function(e,r){"function"===typeof undefined&&undefined.amd?undefined([],r):"object"==='object'&&module.exports?module.exports=r():e.anime=r();})(commonjsGlobal,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k);}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3);}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]), n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f;}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b;}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b, b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a};}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}), 1===f.length&&(f=f[0]));d[b]=f;}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay};}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x);}if(l=h.length)for(m=h[0], w=0;w<l;w++)p=h[w+1], t=n[w], isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++;}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"), g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100;}function f(a){if(g[a])g[a](g);}function e(){g.remaining&&!0!==g.remaining&&g.remaining--;}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q);}if(q>=w||!k)g.began||(g.began=!0, f("begin")), f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0), x&&e()), q>=k&&r!==k||!k)b(k), x||e();f("update");a>=k&&(g.remaining?(t=h, "alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(), g.completed||(g.completed=!0, f("complete"), "Promise"in window&&(p(), m=c()))), l=0);}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset();};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed);};g.seek=function(a){k(d(a));};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0;};g.play=function(){g.paused&&(g.paused=!1, t=0, l=d(g.currentTime), v.push(g), B||ia());};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime);};g.restart=function(){g.pause();
g.reset();g.play();};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n;}k=l;}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2, n=a(m,c,b)-k, 0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m;}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e, d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d);}}(f)), f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")");}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c);}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c), d++;a();}else cancelAnimationFrame(B), B=0;}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1), b.length||d.pause());};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0;});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d);});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_particles__5dxGv {\n\tposition: relative;\n  display: inline-block;\n}\n\n.styles_wrapper__3KXDn {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n}\n\n.styles_content__1Phom:focus,\n.styles_content__1Phom > *:focus {\n  outline: none;\n}\n\n.styles_canvas__1krxf {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate3d(-50%, -50%, 0);\n\tpointer-events: none;\n}\n";
var styles = { "particles": "styles_particles__5dxGv", "wrapper": "styles_wrapper__3KXDn", "content": "styles_content__1Phom", "canvas": "styles_canvas__1krxf" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @class ParticleEffectButton
 */

var noop = function noop() {};

var ParticleEffectButton = function (_Component) {
  inherits(ParticleEffectButton, _Component);

  function ParticleEffectButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ParticleEffectButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ParticleEffectButton.__proto__ || Object.getPrototypeOf(ParticleEffectButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: _this.props.hidden ? 'hidden' : 'normal',
      progress: 0
    }, _this._rect = {
      width: 0,
      height: 0
    }, _this._canvasRef = function (ref) {
      _this._canvas = ref;
    }, _this._wrapperRef = function (ref) {
      _this._wrapper = ref;
    }, _this._startAnimation = function () {
      if (!_this._canvas || !_this._wrapper) return;

      var _this$props = _this.props,
          duration = _this$props.duration,
          easing = _this$props.easing,
          canvasPadding = _this$props.canvasPadding,
          onBegin = _this$props.onBegin;
      var status = _this.state.status;


      if (status === 'hiding') {
        _this._progress = 0;
      } else {
        _this._progress = 1;
      }

      _this._particles = [];

      _this._rect = _this._wrapper.getBoundingClientRect();
      _this._canvas.width = _this._rect.width + canvasPadding * 2;
      _this._canvas.height = _this._rect.height + canvasPadding * 2;
      _this._ctx = _this._canvas.getContext('2d');

      anime_min({
        targets: { value: status === 'hiding' ? 0 : 100 },
        value: status === 'hiding' ? 100 : 0,
        duration: duration,
        easing: easing,
        begin: onBegin,
        update: function update(anim) {
          var value = anim.animatables[0].target.value;
          setTimeout(function () {
            _this.setState({ progress: value });
          });

          if (duration) {
            _this._addParticles(value / 100);
          }
        }
      });
    }, _this._loop = function () {
      _this._updateParticles();
      _this._renderParticles();

      if (_this._particles.length) {
        _this._raf = raf_1(_this._loop);
      } else {
        _this._raf = null;
        _this._cycleStatus();
        _this.props.onComplete();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ParticleEffectButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.hidden !== this.props.hidden) {
        var status = this.state.status;


        if (status === 'normal' && props.hidden) {
          this.setState({ status: 'hiding' }, this._startAnimation);
        } else if (status === 'hidden' && !props.hidden) {
          this.setState({ status: 'showing' }, this._startAnimation);
        } else if (status === 'hiding' && !props.hidden) {
          // TODO: show button in middle of hiding animation
        } else if (status === 'showing' && props.hidden) {
          // TODO: hide button in middle of showing animation
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          direction = _props.direction;
      var _state = this.state,
          status = _state.status,
          progress = _state.progress;


      var wrapperStyles = {};
      var contentStyles = {};
      var canvasStyles = {};

      if (status === 'hiding' || status === 'showing') {
        var prop = this._isHorizontal() ? 'translateX' : 'translateY';
        var size = this._isHorizontal() ? this._rect.width : this._rect.height;
        var value = direction === 'left' || direction === 'top' ? progress : -progress;
        var px = Math.ceil(size * value / 100);

        wrapperStyles.transform = prop + '(' + px + 'px)';
        contentStyles.transform = prop + '(' + -px + 'px)';
      } else if (status === 'hidden') {
        wrapperStyles.visibility = 'hidden';
        canvasStyles.visibility = 'hidden';
      } else if (status === 'normal') {
        canvasStyles.visibility = 'hidden';
      }

      return React__default.createElement(
        'div',
        { className: classnames(styles.particles, className) },
        React__default.createElement(
          'div',
          {
            className: styles.wrapper,
            style: wrapperStyles,
            ref: this._wrapperRef
          },
          React__default.createElement(
            'div',
            {
              className: styles.content,
              style: contentStyles
            },
            children
          )
        ),
        React__default.createElement('canvas', {
          className: styles.canvas,
          ref: this._canvasRef,
          style: canvasStyles
        })
      );
    }
  }, {
    key: '_cycleStatus',
    value: function _cycleStatus() {
      var status = this.state.status;


      if (status === 'normal') {
        this.setState({ status: 'hiding' });
      } else if (status === 'hidden') {
        this.setState({ status: 'showing' });
      } else if (status === 'hiding') {
        this.setState({ status: 'hidden' });
      } else if (status === 'showing') {
        this.setState({ status: 'normal' });
      }
    }
  }, {
    key: '_addParticles',
    value: function _addParticles(progress) {
      var _props2 = this.props,
          canvasPadding = _props2.canvasPadding,
          direction = _props2.direction,
          particlesAmountCoefficient = _props2.particlesAmountCoefficient;
      var status = this.state.status;
      var _rect = this._rect,
          width = _rect.width,
          height = _rect.height;


      var delta = status === 'hiding' ? progress - this._progress : this._progress - progress;
      var isHorizontal = this._isHorizontal();
      var progressValue = (isHorizontal ? width : height) * progress + delta * (status === 'hiding' ? 100 : 220);

      this._progress = progress;

      var x = canvasPadding;
      var y = canvasPadding;

      if (isHorizontal) {
        x += direction === 'left' ? progressValue : width - progressValue;
      } else {
        y += direction === 'top' ? progressValue : height - progressValue;
      }

      var i = Math.floor(particlesAmountCoefficient * (delta * 100 + 1));
      if (i > 0) {
        while (i--) {
          this._addParticle({
            x: x + (isHorizontal ? 0 : width * Math.random()),
            y: y + (isHorizontal ? height * Math.random() : 0)
          });
        }
      }

      if (!this._raf) {
        this._raf = raf_1(this._loop);
      }
    }
  }, {
    key: '_addParticle',
    value: function _addParticle(opts) {
      var _props3 = this.props,
          duration = _props3.duration,
          size = _props3.size,
          speed = _props3.speed;
      var status = this.state.status;


      var frames = duration * 60 / 1000;
      var _speed = isFunc(speed) ? speed() : speed;
      var _size = isFunc(size) ? size() : size;

      this._particles.push({
        startX: opts.x,
        startY: opts.y,
        x: status === 'hiding' ? 0 : _speed * -frames,
        y: 0,
        angle: rand(360),
        counter: status === 'hiding' ? 0 : frames,
        increase: Math.PI * 2 / 100,
        life: 0,
        death: status === 'hiding' ? frames - 20 + Math.random() * 40 : frames,
        speed: _speed,
        size: _size
      });
    }
  }, {
    key: '_updateParticles',
    value: function _updateParticles() {
      var oscillationCoefficient = this.props.oscillationCoefficient;
      var status = this.state.status;


      for (var i = 0; i < this._particles.length; i++) {
        var p = this._particles[i];

        if (p.life > p.death) {
          this._particles.splice(i, 1);
        } else {
          p.x += p.speed;
          p.y = oscillationCoefficient * Math.sin(p.counter * p.increase);
          p.life++;
          p.counter += status === 'hiding' ? 1 : -1;
        }
      }
    }
  }, {
    key: '_renderParticles',
    value: function _renderParticles() {
      var _props4 = this.props,
          color = _props4.color,
          type = _props4.type,
          style = _props4.style;
      var status = this.state.status;


      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      this._ctx.fillStyle = this._ctx.strokeStyle = color;

      for (var i = 0; i < this._particles.length; ++i) {
        var p = this._particles[i];

        if (p.life < p.death) {
          this._ctx.translate(p.startX, p.startY);
          this._ctx.rotate(p.angle * Math.PI / 180);
          this._ctx.globalAlpha = status === 'hiding' ? 1 - p.life / p.death : p.life / p.death;
          this._ctx.beginPath();

          if (type === 'circle') {
            this._ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
          } else if (type === 'triangle') {
            this._ctx.moveTo(p.x, p.y);
            this._ctx.lineTo(p.x + p.size, p.y + p.size);
            this._ctx.lineTo(p.x + p.size, p.y - p.size);
          } else if (type === 'rectangle') {
            this._ctx.rect(p.x, p.y, p.size, p.size);
          }

          if (style === 'fill') {
            this._ctx.fill();
          } else if (style === 'stroke') {
            this._ctx.closePath();
            this._ctx.stroke();
          }

          this._ctx.globalAlpha = 1;
          this._ctx.rotate(-p.angle * Math.PI / 180);
          this._ctx.translate(-p.startX, -p.startY);
        }
      }
    }
  }, {
    key: '_isHorizontal',
    value: function _isHorizontal() {
      return this.props.direction === 'left' || this.props.direction === 'right';
    }
  }]);
  return ParticleEffectButton;
}(React.Component);

ParticleEffectButton.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  duration: PropTypes.number,
  easing: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)]),
  type: PropTypes.oneOf(['circle', 'rectangle', 'triangle']),
  style: PropTypes.oneOf(['fill', 'stroke']),
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  canvasPadding: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  speed: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  color: PropTypes.string,
  particlesAmountCoefficient: PropTypes.number,
  oscillationCoefficient: PropTypes.number,
  onBegin: PropTypes.func,
  onComplete: PropTypes.func
};
ParticleEffectButton.defaultProps = {
  hidden: false,
  duration: 1000,
  easing: 'easeInOutCubic',
  type: 'circle',
  style: 'fill',
  direction: 'left',
  canvasPadding: 150,
  size: function size() {
    return Math.floor(Math.random() * 3 + 1);
  },
  speed: function speed() {
    return rand(4);
  },
  color: '#000',
  particlesAmountCoefficient: 3,
  oscillationCoefficient: 20,
  onBegin: noop,
  onComplete: noop
};
function rand(value) {
  return Math.random() * value - value / 2;
}

function isFunc(value) {
  return typeof value === 'function';
}

module.exports = ParticleEffectButton;
