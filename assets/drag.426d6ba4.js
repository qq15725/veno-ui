import{G as e,a4 as t,ao as l,l as a,ap as o,aq as i,g as r,ar as s,n as u}from"./index.d88d629a.js";import{r as n,a as h,e as v,b as d,j as p}from"./vendor.b3232dc0.js";var f=Object.defineProperty,g=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,m=(e,t,l)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,b=(e,t)=>{for(var l in t||(t={}))c.call(t,l)&&m(e,l,t[l]);if(g)for(var l of g(t))w.call(t,l)&&m(e,l,t[l]);return e};const O=e({resizeHandles:{type:Array,default:["top","top-left","left","bottom","bottom-left","top-right","right","bottom-right"]},resizeHandlePoint:Boolean},"resize");var z=Object.defineProperty,y=Object.defineProperties,j=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,S=(e,t,l)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,$=(e,t)=>{for(var l in t||(t={}))_.call(t,l)&&S(e,l,t[l]);if(P)for(var l of P(t))H.call(t,l)&&S(e,l,t[l]);return e};const x={left:0,top:0,width:0,height:0},D=d({name:"VeDrag",props:(B=$($($($({moveable:{type:Boolean,default:!0},resizable:Boolean},o()),i()),O()),a()),M={modelValue:Object},y(B,j(M))),emits:{"update:modelValue":e=>!0},setup(e,{slots:a}){var o,i,d,f;const g=r(e,"modelValue",$({},x)),c=n(),w=n({left:null!=(o=g.value.left)?o:x.left,top:null!=(i=g.value.top)?i:x.top,width:null!=(d=g.value.width)?d:x.width,height:null!=(f=g.value.height)?f:x.height}),{positionClasses:m,positionStyles:O}=s(e),{moveOn:z,moveState:y,movingOffsetPosition:j}=l(e),{resizeHandles:P,resizeState:_,resizingOffsetPositionDimension:H}=function(e,a=t()){const o=n("resized"),i=n(null),r=n({left:0,top:0,width:0,height:0}),s=n({left:0,top:0,width:0,height:0}),u=h((()=>({left:s.value.left-r.value.left,top:s.value.top-r.value.top,width:s.value.width-r.value.width,height:s.value.height-r.value.height}))),d=h((()=>e.resizeHandles.map((t=>{const{moveState:u,moveOn:n,movingOffsetPosition:d}=l();return v(u,(e=>{switch(e){case"moving":o.value="resizing",i.value=t;break;case"moved":o.value="resized",i.value=null,r.value=b({},s.value)}})),v(d,(e=>{if(t!==i.value)return;const l=b({},s.value);t.indexOf("left")>-1?(l.left=r.value.left+e.left,l.width=r.value.width-e.left):t.indexOf("right")>-1&&(l.width=r.value.width+e.left),t.indexOf("top")>-1?(l.top=r.value.top+e.top,l.height=r.value.height-e.top):t.indexOf("bottom")>-1&&(l.height=r.value.height+e.top),s.value=l})),{classes:h((()=>({[`${a}__handle`]:!0,[`${a}__handle--${t}`]:!0,[`${a}__handle--point`]:e.resizeHandlePoint,[`${a}__handle--hide`]:"resizing"===o.value&&t!==i.value}))),on:n}}))));return{resizeState:o,resizingOffsetPositionDimension:u,selectedResizeHandle:i,resizeHandles:d}}(e);v(c,(e=>{if(!e)return;const t=e.getBoundingClientRect();g.value.width||(w.value.width=t.width,g.value.width=t.width),g.value.height||(w.value.height=t.height,g.value.height=t.height)})),v([y,_],(([t,l])=>{var a,o,i,r;(e.moveable&&"moved"===t||e.resizable&&"resized"===l)&&(w.value={left:null!=(a=g.value.left)?a:x.left,top:null!=(o=g.value.top)?o:x.top,width:null!=(i=g.value.width)?i:x.width,height:null!=(r=g.value.height)?r:x.height})})),v(j,(t=>{e.moveable&&(g.value.top=w.value.top+t.top,g.value.left=w.value.left+t.left)})),v(H,(t=>{e.resizable&&(g.value.top=w.value.top+t.top,g.value.left=w.value.left+t.left,g.value.width=w.value.width+t.width,g.value.height=w.value.height+t.height)}));const S=h((()=>({transform:`translate3d(${u(g.value.left)}, ${u(g.value.top)}, 0)`,width:g.value.width?u(g.value.width):void 0,height:g.value.height?u(g.value.height):void 0})));return()=>p(e.tag,{ref:c,class:["ve-drag",m.value,{"ve-drag--moveable":e.moveable,"ve-drag--resizable":e.resizable}],style:[O.value,S.value],onMousedown:z.mousedown,onTouchstart:z.touchstart},{default:()=>{var t;return[e.resizable&&P.value.map((({classes:e,on:t})=>p("div",{class:[e.value],onMousedown:t.mousedown,onTouchstart:t.touchstart},null,42,["onMousedown","onTouchstart"]))),p("div",{class:"ve-drag__wrap"},[null==(t=a.default)?void 0:t.call(a)])]},_:1},8,["class","style","onMousedown","onTouchstart"])}});var B,M;export{D};
