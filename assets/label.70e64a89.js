import{k as e,G as r}from"./index.31f0f374.js";import{b as l}from"./vendor.2cc6d4f3.js";var a=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,b=(e,r,l)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[r]=l;const n=e({name:"VeLabel",props:((e,r)=>{for(var l in r||(r={}))t.call(r,l)&&b(e,l,r[l]);if(o)for(var l of o(r))s.call(r,l)&&b(e,l,r[l]);return e})({disabled:Boolean,error:Boolean,text:String},r()),setup:(e,{slots:r})=>()=>{var a;return l("label",{class:["ve-label",{"ve-label--disabled":e.disabled,"ve-label--error":e.error}]},[e.text,null==(a=r.default)?void 0:a.call(r)],2)}});export{n as L};
