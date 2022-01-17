!function(){function e(e,r){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){u=!0,o=e},f:function(){try{l||null==i.return||i.return()}finally{if(u)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var r=document.createElement("style");r.innerHTML=".ve-device{display:flex;flex-direction:column;position:relative;border-color:rgba(var(--ve-border-color),var(--ve-border-opacity));border-style:solid;border-width:thin;border-radius:4px}.ve-device--border{border-width:thin}.ve-device--variant-contained{background:rgb(var(--ve-theme-surface));color:rgb(var(--ve-theme-on-surface))}.ve-device--variant-text,.ve-device--variant-outlined{background:transparent;color:inherit}.ve-device--variant-outlined{border-width:thin;border-color:currentColor}.ve-device__app-header{display:block;border-radius:inherit}.ve-device__app-bar{height:40px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid rgba(0,0,0,.12)!important}.ve-device__app-main{position:relative;display:block;flex:1 1 auto}.ve-device__height-tip{position:absolute;height:20px;font-size:.875rem;left:-130px;width:130px;border-bottom:1px solid #dedede}\n",document.head.appendChild(r),System.register(["./index-legacy.4738e6bc.js","./vendor-legacy.e5b1fd01.js","./device-status-bar-legacy.d11b3608.js"],(function(t){"use strict";var r,i,a,n,o,l,u,d,c,s,h,v,p,f,g;return{setters:[function(e){r=e.p,i=e.o,a=e.g,n=e.a8,o=e.j,l=e.a9,u=e._,d=e.a},function(e){c=e.c,s=e.a,h=e.K,v=e.P,p=e.U,f=e.R},function(e){g=e.D}],execute:function(){var b={iphonex:{width:375,height:812,statusBarHeight:24},iphone6plus:{width:414,height:736,statusBarHeight:24},iphone7plus:{width:414,height:736,statusBarHeight:24},iphone8plus:{width:414,height:736,statusBarHeight:24},iphone6:{width:375,height:667,statusBarHeight:24},iphone7:{width:375,height:667,statusBarHeight:24},iphone8:{width:375,height:667,statusBarHeight:24}},y=r({model:String,autoHeight:Boolean},"device");var m=Object.defineProperty,w=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,H=function(e,t,r){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},S=function(t,r){for(var i in r||(r={}))_.call(r,i)&&H(t,i,r[i]);if(w){var a,n=e(w(r));try{for(n.s();!(a=n.n()).done;){i=a.value;x.call(r,i)&&H(t,i,r[i])}}catch(o){n.e(o)}finally{n.f()}}return t},j=a()({name:"VeDevice",props:S(S(S({battery:{type:Number,default:100},operator:{type:String,default:"Z+"},headerColor:String},y()),o()),n()),setup:function(e,t){var r=t.slots,a=l(e),n=a.colorClasses,o=a.colorStyles,u=a.variantClasses,d=function(e){var t=c((function(){return e.model&&e.model in b?b[e.model]:{width:"100%",height:"100%",statusBarHeight:0}})),r=c((function(){return{width:i(t.value.width),height:e.autoHeight?null:i(t.value.height),minHeight:e.autoHeight?i(t.value.height):null}}));return{deviceModel:t,deviceStyles:r}}(e),v=d.deviceModel,p=d.deviceStyles;return function(){return s(e.tag,{class:["ve-device",u.value,n.value],style:[p.value,o.value]},{default:function(){var t,a;return[s("div",{class:"ve-device__app-header",style:{backgroundColor:e.headerColor}},[v.value.statusBarHeight>0&&s(g,{height:v.value.statusBarHeight,battery:e.battery,operator:e.operator},null,8,["height","battery","operator"]),r.header&&s("div",{class:"ve-device__app-bar"},[null==(t=r.header)?void 0:t.call(r)])],4),s("div",{class:"ve-device__app-main"},[null==(a=r.default)?void 0:a.call(r)]),e.autoHeight&&"number"==typeof v.value.height&&s("div",{class:"ve-device__height-tip",style:{top:i(v.value.height-21)}},[e.model,h("高度")],4)]},_:1},8,["class","style"])}}});t("__pageData",{title:"基本用法",headers:[],frontmatter:{}});t("default",u({},[["render",function(e,t,r,i,a,n){var o=j,l=d;return v(),p("div",null,[s(l,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/device/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-device%20model%3D%22iphone8%22%20class%3D%22mx-auto%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:f((function(){return[s(o,{model:"iphone8",class:"mx-auto"})]})),_:1})])}]]))}}}))}();