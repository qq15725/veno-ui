import{k as e,z as o,D as r,E as a}from"./index.6ca76632.js";import{m as t,f as s,F as l}from"./form-control.42f481bd.js";import{f as n,S as c}from"./selection-group-control.119b5dbe.js";import{a as i}from"./selection-control.28af0e8d.js";import{c as d,e as f,a as p,m as u}from"./vendor.36e87ff2.js";var b=Object.defineProperty,m=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,o,r)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,h=(e,o)=>{for(var r in o||(o={}))O.call(o,r)&&x(e,r,o[r]);if(y)for(var r of y(o))j.call(o,r)&&x(e,r,o[r]);return e};const k=e({name:"VeCheckboxGroup",props:h(h({},t()),i({type:"checkbox",falseIcon:"veno-ui:$checkboxOff",trueIcon:"veno-ui:$checkboxOn",multiple:!0})),emits:{"update:modelValue":e=>!0},setup(e,{slots:t,attrs:i}){const b=o(),x=d((()=>e.id||`ve-checkbox-group-${b}`));return r(f({defaults:{VeCheckbox:{density:d((()=>e.density)),readonly:d((()=>e.readonly)),disabled:d((()=>e.disabled))}}})),()=>{const[o,r]=a(i),[d]=s(e),[f]=n(e),b=t,{default:k}=b,g=((e,o)=>{var r={};for(var a in e)O.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))o.indexOf(a)<0&&j.call(e,a)&&(r[a]=e[a]);return r})(b,["default"]);return p(l,u(d,{class:"ve-checkbox-group"},o),(P=h({},g),m(P,v({default:({isDisabled:e,isReadonly:o,props:a})=>p(c,u(f,a,{id:x.value,disabled:e.value,readonly:o.value},r),{default:k,_:1},16,["id","disabled","readonly"]),_:2}))),16);var P}}});export{k as C};
