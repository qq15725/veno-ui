import{am as a,k as e,z as o,g as r,a0 as t,an as l}from"./index.59e593d7.js";import{a as i,j as n,n as s}from"./vendor.b3232dc0.js";const d=a("ve-modal-transition");var p=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,v=(a,e,o)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;const b=e()({name:"VeDialog",props:((a,e)=>{for(var o in e||(e={}))m.call(e,o)&&v(a,o,e[o]);if(u)for(var o of u(e))c.call(e,o)&&v(a,o,e[o]);return a})({id:String,modelValue:Boolean},o({transition:{component:d}})),emits:{"update:modelValue":a=>!0},setup(a,{slots:e,attrs:o}){const d=r(a,"modelValue"),p=t(),u=i((()=>a.id||`ve-dialog-${p}`));return()=>n(l,s({"aria-role":"dialog","aria-modal":"true","activator-props":{"aria-haspopup":"dialog","aria-expanded":String(d.value),"aria-describedby":u.value},modelValue:d.value,"onUpdate:modelValue":a=>d.value=a,class:["ve-dialog"],id:u.value,transition:a.transition},o),e,16,["activator-props","modelValue","onUpdate:modelValue","id","transition"])}});export{b as D};