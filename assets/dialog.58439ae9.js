import{an as d,F as p,W as u,g as m,a1 as v,ao as c}from"./app.6e85b0a5.js";import{a as g,j as f,n as _}from"./vendor.4a6e0395.js";const P=d("ve-modal-transition");var V=Object.defineProperty,i=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,n=(e,a,r)=>a in e?V(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,b=(e,a)=>{for(var r in a||(a={}))O.call(a,r)&&n(e,r,a[r]);if(i)for(var r of i(a))y.call(a,r)&&n(e,r,a[r]);return e};const S=p()({name:"VeDialog",props:b({id:String,modelValue:Boolean},u({transition:{component:P}})),emits:{"update:modelValue":e=>!0},setup(e,{slots:a,attrs:r}){const o=m(e,"modelValue"),l=v(),t=g(()=>e.id||`ve-dialog-${l}`);return()=>f(c,_({"aria-role":"dialog","aria-modal":"true","activator-props":{"aria-haspopup":"dialog","aria-expanded":String(o.value),"aria-describedby":t.value},modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["ve-dialog"],id:t.value,transition:e.transition},r),a,16,["activator-props","modelValue","onUpdate:modelValue","id","transition"])}});export{S as D};
