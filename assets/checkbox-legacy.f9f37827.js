!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,u=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw u}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.1349bc2c.js","./selection-control-legacy.22f998e8.js","./vendor-legacy.f35e774c.js"],(function(t){"use strict";var n,r,o,c,u,a;return{setters:[function(e){n=e.e},function(e){r=e.m,o=e.S},function(e){c=e.j,u=e.C,a=e.n}],execute:function(){var i=Object.defineProperty,f=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,y=function(e,t,n){return t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};t("C",n({name:"VeCheckbox",props:function(t,n){for(var r in n||(n={}))l.call(n,r)&&y(t,r,n[r]);if(f){var o,c=e(f(n));try{for(c.s();!(o=c.n()).done;){r=o.value;s.call(n,r)&&y(t,r,n[r])}}catch(u){c.e(u)}finally{c.f()}}return t}({},r({type:"checkbox",falseIcon:"$checkboxOff",trueIcon:"$checkboxOn",color:"primary"})),emits:{"update:modelValue":function(e){return!0}},setup:function(e,t){var n=t.slots;return function(){return c(o,a({class:"ve-checkbox"},e),"function"==typeof(t=n)||"[object Object]"===Object.prototype.toString.call(t)&&!u(t)?n:{default:function(){return[n]},_:2},16);var t}}}))}}}))}();
