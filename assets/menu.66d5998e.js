import{an as l,F as u,W as p,g as m,a1 as d,ao as c}from"./app.6e85b0a5.js";import{a as v,j as f,n as P}from"./vendor.4a6e0395.js";const _=l("ve-menu-transition");var g=Object.defineProperty,o=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,n=(a,e,r)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,O=(a,e)=>{for(var r in e||(e={}))y.call(e,r)&&n(a,r,e[r]);if(o)for(var r of o(e))V.call(e,r)&&n(a,r,e[r]);return a};const h=u()({name:"VeMenu",inheritAttrs:!1,props:O({modelValue:Boolean,id:String},p({transition:{component:_}})),emits:{"update:modelValue":a=>!0},setup(a,{attrs:e,slots:r}){const t=m(a,"modelValue"),s=v(()=>a.id||`ve-menu-${d()}`);return()=>f(c,P({modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["ve-menu"],transition:a.transition,absolute:!0,"position-strategy":"connected","scroll-strategy":"reposition","close-delay":100,"min-width":0,offset:4,scrim:!1,activatorProps:{"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":s.value}},e),r,16,["modelValue","onUpdate:modelValue","transition","absolute","activatorProps"])}});export{h as M};
