!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,r)||t(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n=document.createElement("style");n.innerHTML='.ve-badge{display:inline-block;line-height:1}.ve-badge__badge{align-items:center;border-radius:10px;display:flex;font-size:.75rem;font-weight:500;height:1.25rem;justify-content:center;min-width:20px;padding:4px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;transition:.225s cubic-bezier(.4,0,.2,1);white-space:nowrap}.ve-badge--bordered .ve-badge__badge:after{border-radius:inherit;border-style:solid;border-width:2px;bottom:0;color:rgb(var(--ve-theme-background));content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.2)}.ve-badge--dot .ve-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px;background:rgb(var(--ve-theme-surface));color:rgb(var(--ve-theme-on-surface))}.ve-badge--dot .ve-badge__badge:after{border-width:1.5px}.ve-badge--inline .ve-badge__badge{position:relative;vertical-align:middle}.ve-badge__badge .ve-icon{color:inherit}.ve-badge__badge img,.ve-badge__badge .ve-img{height:100%;width:100%}.ve-badge__content{padding:0 2px}.ve-badge__wrapper{display:flex;position:relative}.ve-badge--inline .ve-badge__wrapper{align-items:center;display:inline-flex;justify-content:center;margin:0 4px}\n',document.head.appendChild(n),System.register(["./index-legacy.bb6d598b.js","./vendor-legacy.e5b1fd01.js"],(function(r){"use strict";var n,o,a,i,l,u,d,c,s,b,f,g,v,p,m,y,h,_,x,w,S,C,A,j,E;return{setters:[function(e){n=e.k,o=e.m,a=e.Q,i=e.j,l=e.T,u=e.U,d=e.d,c=e.o,s=e.i,b=e.M,f=e.I,g=e._,v=e.B,p=e.S,m=e.a},function(e){y=e.h,h=e.c,_=e.a,x=e.n,w=e.G,S=e.m,C=e.P,A=e.U,j=e.R,E=e.K}],execute:function(){var O=Object.defineProperty,k=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=function(e,t,r){return t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},D=function(e,r){for(var n in r||(r={}))B.call(r,n)&&N(e,n,r[n]);if(k){var o,a=function(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}(k(r));try{for(a.s();!(o=a.n()).done;){n=o.value;I.call(r,n)&&N(e,n,r[n])}}catch(i){a.e(i)}finally{a.f()}}return e},F=n({name:"VeBadge",inheritAttrs:!1,props:D(D(D({bordered:Boolean,color:{type:String,default:"primary"},content:String,dot:Boolean,floating:Boolean,icon:String,inline:Boolean,label:{type:String,default:"$vuetify.badge"},location:{type:String,default:"top-right",validator:function(t){var r=e((null!=t?t:"").split("-"),2),n=r[0],o=r[1];return["top","bottom"].includes(n)&&["left","right"].includes(o)}},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String},a()),i()),o({transition:"scale-rotate-transition"})),setup:function(t,r){var n=l(y(t,"color")),o=n.backgroundColorClasses,a=n.backgroundColorStyles,i=u(t).shapeClasses,g=d(y(t,"textColor")),v=g.textColorClasses,p=g.textColorStyles,m=h((function(){return t.floating?t.dot?2:4:t.dot?8:12}));function C(e){return"calc(100% - ".concat(c(m.value+Number(null!=e?e:0)),")")}var A=h((function(){var r,n=e((null!=(r=t.location)?r:"").split("-"),2),o=n[0],a=n[1],i={bottom:"auto",left:"auto",right:"auto",top:"auto"};return t.inline||(i["left"===a?"right":"left"]=C(t.offsetX),i["top"===o?"bottom":"top"]=C(t.offsetY)),i}));return function(){var n=Number(t.content),l=!t.max||isNaN(n)?t.content:n<=t.max?n:"".concat(t.max,"+"),u=e(s(r.attrs,["aria-atomic","aria-label","aria-live","role","title"]),2),d=u[0],c=u[1];return _(t.tag,S({class:["ve-badge",{"ve-badge--bordered":t.bordered,"ve-badge--dot":t.dot,"ve-badge--floating":t.floating,"ve-badge--inline":t.inline}]},c),{default:function(){var e,n;return[_("div",{class:"ve-badge__wrapper"},[null==(n=(e=r.slots).default)?void 0:n.call(e),_(b,{transition:t.transition},{default:function(){var e,n;return[x(_("span",S({class:["ve-badge__badge",o.value,i.value,v.value],style:[a.value,A.value,p.value],"aria-atomic":"true","aria-label":"locale string here","aria-live":"polite",role:"status"},d),[t.dot?void 0:r.slots.badge?null==(n=(e=r.slots).badge)?void 0:n.call(e):t.icon?_(f,{icon:t.icon},null,8,["icon"]):_("span",{class:"ve-badge__content"},[l])],16),[[w,t.modelValue]])]}},8,["transition"])])]}},16,["class"])}}}),P=(r("__pageData",{title:"基本用法",headers:[],frontmatter:{}}),{}),T=E("Account");r("default",g(P,[["render",function(e,t,r,n,o,a){var i=v,l=F,u=p,d=m;return C(),A("div",null,[_(d,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/badge/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-badge%20bordered%20color%3D%22error%22%20icon%3D%22veno-ui%3A%24nodata%22%3E%0A%20%20%20%20%20%20%3Cve-button%20color%3D%22error%22%3EAccount%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-badge%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:j((function(){return[_(u,null,{default:j((function(){return[_(l,{bordered:"",color:"error",icon:"veno-ui:$nodata"},{default:j((function(){return[_(i,{color:"error"},{default:j((function(){return[T]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}]]))}}}))}();
