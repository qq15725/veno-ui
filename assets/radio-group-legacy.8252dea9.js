!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,u=!1;try{for(t=t.call(r);!(i=(n=t.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}(r,e)||t(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(r,e){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){l=!0,i=r},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function t(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}System.register(["./index-legacy.144c5300.js","./form-control-legacy.6c1886c8.js","./selection-group-control-legacy.86364d06.js","./selection-control-legacy.bfb9bede.js","./vendor-legacy.182c544c.js"],(function(t){"use strict";var n,o,a,i,u,l,c,f,d,s,y,b,p,v;return{setters:[function(r){n=r.k,o=r.y,a=r.z,i=r.D},function(r){u=r.m,l=r.f,c=r.F},function(r){f=r.f,d=r.S},function(r){s=r.a},function(r){y=r.c,b=r.h,p=r.b,v=r.m}],execute:function(){var m=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,S=function(r,e,t){return e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t},A=function(r,t){for(var n in t||(t={}))O.call(t,n)&&S(r,n,t[n]);if(j){var o,a=e(j(t));try{for(a.s();!(o=a.n()).done;){n=o.value;w.call(t,n)&&S(r,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return r};t("R",n({name:"VeRadioGroup",inheritAttrs:!1,props:A(A({height:{type:[Number,String],default:"auto"}},u()),s({type:"radio",trueIcon:"veno-ui:$radioOn",falseIcon:"veno-ui:$radioOff"})),setup:function(t,n){var u=n.attrs,s=n.slots,m=o(),S=y((function(){return t.id||"ve-radio-group-".concat(m)}));return a(b({defaults:{VeRadio:{density:y((function(){return t.density})),readonly:y((function(){return t.readonly})),disabled:y((function(){return t.disabled}))}}})),function(){var n,o=r(i(u),2),a=o[0],y=o[1],b=r(l(t),1)[0],m=r(f(t),1)[0],I=s,x=I.default,P=function(r,t){var n={};for(var o in r)O.call(r,o)&&t.indexOf(o)<0&&(n[o]=r[o]);if(null!=r&&j){var a,i=e(j(r));try{for(i.s();!(a=i.n()).done;)o=a.value,t.indexOf(o)<0&&w.call(r,o)&&(n[o]=r[o])}catch(u){i.e(u)}finally{i.f()}}return n}(I,["default"]);return p(c,v(b,{class:"ve-radio-group"},a),(n=A({},P),h(n,g({default:function(r){var e=r.isDisabled,t=r.isReadonly,n=r.props;return p(d,v(m,n,{id:S.value,disabled:e.value,readonly:t.value},y),{default:x,_:1},16,["id","disabled","readonly"])},_:2}))),16)}}}))}}}))}();
