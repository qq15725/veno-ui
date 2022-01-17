!function(){function e(e,s){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,s){if(!e)return;if("string"==typeof e)return t(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,s)}(e))||s&&e&&"number"==typeof e.length){r&&(e=r);var a=0,l=function(){};return{s:l,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,n=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){n=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(n)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}var s=document.createElement("style");s.innerHTML=".ve-layout{--v-scrollbar-offset: 0px;position:relative;display:flex;flex:1 1 auto}.ve-layout--full-height{--v-scrollbar-offset: inherit;height:100%}.ve-layout-item{transition:.2s cubic-bezier(.4,0,.2,1)}\n",document.head.appendChild(s),System.register(["./index-legacy.05ad0b58.js","./vendor-legacy.56354abd.js"],(function(t){"use strict";var s,r,a,l,i,o,n,g,u,y,c,b,d,f,m;return{setters:[function(e){s=e.k,r=e.au,a=e.av,l=e.l,i=e.aw,o=e.j,n=e.ax,g=e._,u=e.as,y=e.a},function(e){c=e.a,b=e.c,d=e.P,f=e.V,m=e.R}],execute:function(){var v=s({name:"VeLayout",props:r(),setup:function(e,t){var s=t.slots,r=a(e),i=r.layoutClasses,o=r.getLayoutItem,n=r.items;return l((function(){var e;return c("div",{class:i.value},[null==(e=s.default)?void 0:e.call(s)],2)})),{getLayoutItem:o,items:n}}}),D=Object.defineProperty,p=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,C=function(e,t,s){return t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s},E=function(t,s){for(var r in s||(s={}))A.call(s,r)&&C(t,r,s[r]);if(p){var a,l=e(p(s));try{for(l.s();!(a=l.n()).done;){r=a.value;h.call(s,r)&&C(t,r,s[r])}}catch(i){l.e(i)}finally{l.f()}}return t},F=s({name:"VeLayoutItem",props:E(E({size:{type:[String,Number],default:64}},o()),i()),setup:function(e,t){var s=t.slots,r=n(b((function(){return{priority:e.priority,position:e.position,side:e.side,size:e.size,active:e.modelValue}}))).layoutItemStyles;return function(){return c(e.tag,{class:["ve-layout-item"],style:r.value},{default:function(){var e;return[null==(e=s.default)?void 0:e.call(s)]}},8,["style"])}}});t("__pageData",{title:"自定义布局",headers:[],frontmatter:{}});t("default",g({},[["render",function(e,t,s,r,a,l){var i=F,o=u,n=v,g=y;return d(),f("div",null,[c(g,{title:"自定义布局",slug:"自定义布局",file:"/packages/veno-ui/src/components/layout/docs/custom-layout.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-layout%20class%3D%22mb-3%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22top%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22bottom%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22right%22%20%2F%3E%0A%20%20%20%20%3Cve-main%20class%3D%22bg-grey-200%22%20%2F%3E%0A%20%20%3C%2Fve-layout%3E%0A%0A%20%20%3Cve-layout%20class%3D%22mb-3%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22top%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22bottom%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22right%22%20%2F%3E%0A%20%20%20%20%3Cve-main%20class%3D%22bg-grey-200%22%20%2F%3E%0A%20%20%3C%2Fve-layout%3E%0A%0A%20%20%3Cve-layout%20class%3D%22mb-3%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22right%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22top%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22bottom%22%20%2F%3E%0A%20%20%20%20%3Cve-main%20class%3D%22bg-grey-200%22%20%2F%3E%0A%20%20%3C%2Fve-layout%3E%0A%0A%20%20%3Cve-layout%20class%3D%22mb-3%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22right%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22top%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22bottom%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-main%20class%3D%22bg-grey-200%22%20%2F%3E%0A%20%20%3C%2Fve-layout%3E%0A%0A%20%20%3Cve-layout%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22left%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22top%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-400%22%20size%3D%2240%22%20side%3D%22bottom%22%20%2F%3E%0A%20%20%20%20%3Cve-layout-item%20class%3D%22bg-grey-300%22%20side%3D%22right%22%20%2F%3E%0A%20%20%20%20%3Cve-main%20class%3D%22bg-grey-200%22%20%2F%3E%0A%20%20%3C%2Fve-layout%3E%0A%3C%2Ftemplate%3E"},{default:m((function(){return[c(n,{class:"mb-3",style:{height:"200px"}},{default:m((function(){return[c(i,{class:"bg-grey-400",size:"40",side:"top"}),c(i,{class:"bg-grey-400",size:"40",side:"bottom"}),c(i,{class:"bg-grey-300",side:"left"}),c(i,{class:"bg-grey-300",side:"right"}),c(o,{class:"bg-grey-200"})]})),_:1}),c(n,{class:"mb-3",style:{height:"200px"}},{default:m((function(){return[c(i,{class:"bg-grey-400",size:"40",side:"top"}),c(i,{class:"bg-grey-400",size:"40",side:"bottom"}),c(i,{class:"bg-grey-300",side:"left"}),c(i,{class:"bg-grey-300",side:"left"}),c(i,{class:"bg-grey-300",side:"right"}),c(o,{class:"bg-grey-200"})]})),_:1}),c(n,{class:"mb-3",style:{height:"200px"}},{default:m((function(){return[c(i,{class:"bg-grey-300",side:"left"}),c(i,{class:"bg-grey-300",side:"right"}),c(i,{class:"bg-grey-400",size:"40",side:"top"}),c(i,{class:"bg-grey-400",size:"40",side:"bottom"}),c(o,{class:"bg-grey-200"})]})),_:1}),c(n,{class:"mb-3",style:{height:"200px"}},{default:m((function(){return[c(i,{class:"bg-grey-300",side:"right"}),c(i,{class:"bg-grey-400",size:"40",side:"top"}),c(i,{class:"bg-grey-400",size:"40",side:"bottom"}),c(i,{class:"bg-grey-300",side:"left"}),c(o,{class:"bg-grey-200"})]})),_:1}),c(n,{style:{height:"200px"}},{default:m((function(){return[c(i,{class:"bg-grey-300",side:"left"}),c(i,{class:"bg-grey-400",size:"40",side:"top"}),c(i,{class:"bg-grey-400",size:"40",side:"bottom"}),c(i,{class:"bg-grey-300",side:"right"}),c(o,{class:"bg-grey-200"})]})),_:1})]})),_:1})])}]]))}}}))}();
