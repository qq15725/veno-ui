!function(){function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,u=function(){};return{s:u,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw a}}}}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}System.register(["./index-legacy.1349bc2c.js"],(function(r){"use strict";var t,n,o,u;return{setters:[function(e){t=e.e,n=e.m,o=e.g,u=e.h}],execute:function(){var a=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=function(e,r,t){return r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t};r("H",t({name:"VeHover",props:function(r,t){for(var n in t||(t={}))i.call(t,n)&&f(r,n,t[n]);if(l){var o,u=e(l(t));try{for(u.s();!(o=u.n()).done;){n=o.value;c.call(t,n)&&f(r,n,t[n])}}catch(a){u.e(a)}finally{u.f()}}return r}({disabled:Boolean,modelValue:{type:Boolean,default:void 0}},n()),emits:{"update:modelValue":function(e){return!0}},setup:function(e,r){var t=r.slots,n=o(e,"modelValue"),a=u(e,(function(r){!e.disabled&&(n.value=r)})),l=a.runOpenDelay,i=a.runCloseDelay;return function(){var e;return null==(e=t.default)?void 0:e.call(t,{hover:n.value,props:{onMouseenter:l,onMouseleave:i}})}}}))}}}))}();
