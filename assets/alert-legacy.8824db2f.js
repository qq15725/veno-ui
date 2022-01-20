!function(){function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r=document.createElement("style");r.innerHTML=".ve-alert{position:relative;display:flex;padding:16px;border-color:rgba(var(--ve-border-color),var(--ve-border-opacity));border-style:solid;border-width:0;border-radius:4px}.ve-alert--variant-contained{background:rgb(var(--ve-theme-surface));color:rgb(var(--ve-theme-on-surface))}.ve-alert--variant-text,.ve-alert--variant-outlined{background:transparent;color:inherit}.ve-alert--variant-outlined{border-width:thin;border-color:currentColor}.ve-alert--absolute{position:absolute}.ve-alert--fixed{position:fixed}.ve-alert--size-xs{--ve-alert-size-offset: -8px}.ve-alert--size-sm{--ve-alert-size-offset: -4px}.ve-alert--size-md{--ve-alert-size-offset: 0px}.ve-alert--size-lg{--ve-alert-size-offset: 4px}.ve-alert--size-xl{--ve-alert-size-offset: 8px}.ve-alert--density-compact{--ve-alert-density-offset: -8px}.ve-alert--density-comfortable{--ve-alert-density-offset: -4px}.ve-alert--density-medium{--ve-alert-density-offset: 0px}.ve-alert--border{border-width:thin}.ve-alert .ve-alert__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:.08;transition:opacity .2s ease-in-out}.ve-alert__icon{margin-inline-end:8px;height:24px;width:24px}.ve-alert__action{margin-inline-start:8px}.ve-alert__action .ve-button{height:24px;width:24px;min-width:24px}.ve-alert__wrapper{flex:1 1 auto;display:flex;flex-direction:column;line-height:24px}.ve-alert__title{font-size:16px;font-weight:500}.ve-alert__title+.ve-alert__content{opacity:var(--ve-medium-emphasis-opacity);margin-top:4px}\n",document.head.appendChild(r),System.register(["./index-legacy.a03e877d.js","./vendor-legacy.79fbe0b4.js"],(function(t){"use strict";var r,n,o,a,l,i,c,u,s,v,f,d;return{setters:[function(e){r=e.g,n=e.m,o=e.F,a=e.b,l=e.u,i=e.d,c=e.e,u=e.A,s=e.B,v=e.M},function(e){f=e.c,d=e.a}],execute:function(){var p=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,x=function(e,t,r){return t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},g=function(t,r){for(var n in r||(r={}))b.call(r,n)&&x(t,n,r[n]);if(y){var o,a=e(y(r));try{for(a.s();!(o=a.n()).done;){n=o.value;m.call(r,n)&&x(t,n,r[n])}}catch(l){a.e(l)}finally{a.f()}}return t},h=["success","info","warning","error"];t("A",r()({name:"VeAlert",props:g(g({modelValue:{type:Boolean,default:!0},title:String,text:String,type:{type:String,validator:function(e){return h.includes(e)}},icon:{type:[Boolean,String],default:null},closable:Boolean,closeIcon:{type:String,default:"veno-ui:$close"},overlayColor:String},a()),n({transition:{component:o}})),emits:{"update:modelValue":function(e){return!0}},setup:function(e,t){var r=t.slots,n=l(e),o=n.paperClasses,a=n.paperStyles,p=f((function(){var t;return null!=(t=e.textColor)?t:e.type})),y=i(f((function(){var t;return null!=(t=e.overlayColor)?t:p.value}))),b=y.textColorClasses,m=y.textColorStyles,x=c(e,"modelValue"),g=f((function(){return e.icon?e.icon:"veno-ui:$".concat(e.type)}));function h(e){x.value=!1}return function(){var t=!1!==e.icon&&(e.type||e.icon),n=e.closable||r.action,l=e.text||r.default;return d(v,{transition:e.transition},{default:function(){return[x.value&&d(e.tag,{role:"alert",class:["ve-alert",o.value],style:a.value},{default:function(){var o,a,i,c;return[d("div",{class:["ve-alert__overlay",b.value],style:m.value},null,6),t&&d(u,{class:"ve-alert__icon",icon:g.value,color:"transparent","text-color":p.value},null,8,["icon","text-color"]),d("div",{class:"ve-alert__wrapper"},[e.title&&d("div",{class:"ve-alert__title"},[e.title]),l&&d("div",{class:"ve-alert__content"},[null!=(a=e.text)?a:null==(o=r.default)?void 0:o.call(r)])]),n&&d("div",{class:"ve-alert__action"},[null!=(c=null==(i=r.action)?void 0:i.call(r,{props:{onClick:h}}))?c:d(s,{icon:e.closeIcon,color:"transparent",onClick:h},null,8,["icon","onClick"])])]},_:1},8,["class","style"])]}},8,["transition"])}}}))}}}))}();
