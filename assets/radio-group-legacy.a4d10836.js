!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}(e,r)||t(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}System.register(["./index-legacy.d725e61e.js","./form-control-legacy.c81669f2.js","./selection-group-control-legacy.da519394.js","./selection-control-legacy.382a0925.js","./vendor-legacy.7b34909f.js"],(function(t){"use strict";var n,o,a,i,u,l,c,f,d,s,y,p,v,b;return{setters:[function(e){n=e.k,o=e.x,a=e.y,i=e.z},function(e){u=e.m,l=e.f,c=e.F},function(e){f=e.f,d=e.S},function(e){s=e.a},function(e){y=e.c,p=e.e,v=e.a,b=e.m}],execute:function(){var m=Object.defineProperty,g=Object.defineProperties,h=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,S=function(e,r,t){return r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},A=function(e,t){for(var n in t||(t={}))O.call(t,n)&&S(e,n,t[n]);if(j){var o,a=r(j(t));try{for(a.s();!(o=a.n()).done;){n=o.value;w.call(t,n)&&S(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e};t("R",n({name:"VeRadioGroup",inheritAttrs:!1,props:A(A({height:{type:[Number,String],default:"auto"}},u()),s({type:"radio",trueIcon:"veno-ui:$radioOn",falseIcon:"veno-ui:$radioOff"})),setup:function(t,n){var u=n.attrs,s=n.slots,m=i(),S=y((function(){return t.id||"ve-radio-group-".concat(m)}));return o(p({defaults:{VeRadio:{density:y((function(){return t.density})),readonly:y((function(){return t.readonly})),disabled:y((function(){return t.disabled}))}}})),function(){var n,o=e(a(u),2),i=o[0],y=o[1],p=e(l(t),1)[0],m=e(f(t),1)[0],I=s,x=I.default,P=function(e,t){var n={};for(var o in e)O.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&j){var a,i=r(j(e));try{for(i.s();!(a=i.n()).done;)o=a.value,t.indexOf(o)<0&&w.call(e,o)&&(n[o]=e[o])}catch(u){i.e(u)}finally{i.f()}}return n}(I,["default"]);return v(c,b(p,{class:"ve-radio-group"},i),(n=A({},P),g(n,h({default:function(e){var r=e.isDisabled,t=e.isReadonly,n=e.props;return v(d,b(m,n,{id:S.value,disabled:r.value,readonly:t.value},y),{default:x,_:1},16,["id","disabled","readonly"])},_:2}))),16)}}}))}}}))}();
