import{k as e,y as o,z as r,D as a}from"./index.eedd9a14.js";import{m as t,f as s,F as l}from"./form-control.9d4db415.js";import{f as n,S as d}from"./selection-group-control.88e2a805.js";import{a as i}from"./selection-control.f86d9ee6.js";import{c,e as f,a as p,m as u}from"./vendor.5323b972.js";var b=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,o,r)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,h=(e,o)=>{for(var r in o||(o={}))O.call(o,r)&&x(e,r,o[r]);if(v)for(var r of v(o))j.call(o,r)&&x(e,r,o[r]);return e};const k=e({name:"VeCheckboxGroup",props:h(h({},t()),i({type:"checkbox",falseIcon:"veno-ui:$checkboxOff",trueIcon:"veno-ui:$checkboxOn",multiple:!0})),emits:{"update:modelValue":e=>!0},setup(e,{slots:t,attrs:i}){const b=o(),x=c((()=>e.id||`ve-checkbox-group-${b}`));return r(f({defaults:{VeCheckbox:{density:c((()=>e.density)),readonly:c((()=>e.readonly)),disabled:c((()=>e.disabled))}}})),()=>{const[o,r]=a(i),[c]=s(e),[f]=n(e),b=t,{default:k}=b,g=((e,o)=>{var r={};for(var a in e)O.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&v)for(var a of v(e))o.indexOf(a)<0&&j.call(e,a)&&(r[a]=e[a]);return r})(b,["default"]);return p(l,u(c,{class:"ve-checkbox-group"},o),(P=h({},g),m(P,y({default:({isDisabled:e,isReadonly:o,props:a})=>p(d,u(f,a,{id:x.value,disabled:e.value,readonly:o.value},r),{default:k,_:1},16,["id","disabled","readonly"]),_:2}))),16);var P}}});export{k as C};
