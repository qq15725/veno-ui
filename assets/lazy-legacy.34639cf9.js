!function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.d725e61e.js","./index-legacy.3d752c8b.js","./vendor-legacy.7b34909f.js"],(function(e){"use strict";var n,r,o,i,a,u,l,c,f,s,y,d;return{setters:[function(t){n=t.g,r=t.m,o=t.F,i=t.ao,a=t.j,u=t.ap,l=t.e,c=t.M},function(t){f=t.I},function(t){s=t.n,y=t.q,d=t.a}],execute:function(){var v=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=function(t,e,n){return e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},h=function(e,n){for(var r in n||(n={}))m.call(n,r)&&g(e,r,n[r]);if(p){var o,i=t(p(n));try{for(i.s();!(o=i.n()).done;){r=o.value;b.call(n,r)&&g(e,r,n[r])}}catch(a){i.e(a)}finally{i.f()}}return e};e("L",n()({name:"VeLazy",directives:{Intersect:f},props:h(h(h({modelValue:Boolean,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}}},i()),a()),r({transition:{component:o}})),emits:{"update:modelValue":function(t){return!0}},setup:function(t,e){var n=e.slots,r=u(t).dimensionStyles,o=l(t,"modelValue");function i(t){o.value||(o.value=t)}return function(){return s(d(t.tag,{class:"ve-lazy",style:r.value},{default:function(){return[o.value&&d(c,{transition:t.transition},{default:function(){var t;return[null==(t=n.default)?void 0:t.call(n)]}},8,["transition"])]}},8,["style"]),[[y("intersect"),i,t.options]])}}}))}}}))}();
