import{e as y}from"./app.5f4a9383.js";import{m as h,f as C,F as j}from"./form-control.6a79a0d0.js";import{m as S,f as g,S as V}from"./selection-control.7a9a198e.js";import{r as k,j as n,n as c}from"./vendor.4605c240.js";var F=Object.defineProperty,x=Object.defineProperties,I=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(r,e,o)=>e in r?F(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,p=(r,e)=>{for(var o in e||(e={}))f.call(e,o)&&d(r,o,e[o]);if(s)for(var o of s(e))m.call(e,o)&&d(r,o,e[o]);return r},D=(r,e)=>x(r,I(e)),E=(r,e)=>{var o={};for(var t in r)f.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&s)for(var t of s(r))e.indexOf(t)<0&&m.call(r,t)&&(o[t]=r[t]);return o};const q=y({name:"VeSwitch",inheritAttrs:!1,props:p(p({},h()),S({color:"primary"})),emits:{"update:modelValue":r=>!0},setup(r,{slots:e,emit:o}){const t=k();function u(){var a,l;(l=(a=t.value)==null?void 0:a.inputRef)==null||l.click()}return()=>{const[a]=C(r),[l]=g(r),_=l,v=E(_,["label"]);return n(j,c(a,{class:"ve-switch"}),D(p({},e),{default:({isDisabled:P,isReadonly:O,props:w})=>n(V,c(v,{ref:t,type:"checkbox","onUpdate:modelValue":i=>o("update:modelValue",i),disabled:P.value,readonly:O.value},w),{default:({textColorClasses:i,textColorStyles:b})=>n("div",{class:["ve-switch__track",i.value],style:[b.value],onClick:u},null,14,["onClick"]),input:()=>n("div",{class:"ve-switch__thumb"},null),_:1},16,["onUpdate:modelValue","disabled","readonly"]),_:2}),16)}}});export{q as S};
