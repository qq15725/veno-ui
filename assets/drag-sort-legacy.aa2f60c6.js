!function(){function e(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}System.register(["./index-legacy.d725e61e.js","./vendor-legacy.7b34909f.js"],(function(r){"use strict";var n,t,a,o,i,u;return{setters:[function(e){n=e.aj,t=e.ak},function(e){a=e.d,o=e.c,i=e.a,u=e.F}],execute:function(){var c=Object.defineProperty,l=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=function(e,r,n){return r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},m=function(r,n){for(var t in n||(n={}))d.call(n,t)&&s(r,t,n[t]);if(y){var a,o=e(y(n));try{for(o.s();!(a=o.n()).done;){t=a.value;p.call(n,t)&&s(r,t,n[t])}}catch(i){o.e(i)}finally{o.f()}}return r};r("D",a({name:"VeDragSort",props:m({itemKey:[String,Function]},n()),emits:{"update:modelValue":function(e){return!0},change:function(e){return!0}},setup:function(e,r){var n=r.slots,a=t(e),c=a.items,y=a.makeDrag,d=a.makeDragArea,p=o((function(){return c.value.map((function(e,r){return n=m(m({},y(r)),d(r)),l(n,f({item:e}));var n}))})),s=d().dragAreaOn;return function(){var r,t;return i(u,null,[null==(r=n.prepend)?void 0:r.call(n,{dragAreaOn:s,on:s}),p.value.flatMap((function(r,t){var a,o=r.item,i=r.dragOn,u=(r.dragNode,r.dragAreaOn);return null==(a=n.item)?void 0:a.call(n,{item:o,index:t,dragOn:i,dragAreaOn:u,on:m(m({},i),u)}).map((function(r){return e.itemKey&&(r.key="function"==typeof e.itemKey?e.itemKey(o,t):o[e.itemKey]),r}))})),null==(t=n.append)?void 0:t.call(n,{dragAreaOn:s,on:s})])}}}))}}}))}();
