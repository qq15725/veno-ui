import{k as e,z as r,D as o,E as a}from"./index.1ec068e7.js";import{m as t,f as s,F as i}from"./form-control.fd70fc7f.js";import{f as l,S as n}from"./selection-group-control.2f468d03.js";import{a as d}from"./selection-control.9e3dc56c.js";import{c as f,e as c,a as p,m as u}from"./vendor.bd78ac10.js";var b=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,g=(e,r,o)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,P=(e,r)=>{for(var o in r||(r={}))O.call(r,o)&&g(e,o,r[o]);if(v)for(var o of v(r))j.call(r,o)&&g(e,o,r[o]);return e};const h=e({name:"VeRadioGroup",inheritAttrs:!1,props:P(P({height:{type:[Number,String],default:"auto"}},t()),d({type:"radio",trueIcon:"veno-ui:$radioOn",falseIcon:"veno-ui:$radioOff"})),setup(e,{attrs:t,slots:d}){const b=r(),g=f((()=>e.id||`ve-radio-group-${b}`));return o(c({defaults:{VeRadio:{density:f((()=>e.density)),readonly:f((()=>e.readonly)),disabled:f((()=>e.disabled))}}})),()=>{const[r,o]=a(t),[f]=s(e),[c]=l(e),b=d,{default:h}=b,w=((e,r)=>{var o={};for(var a in e)O.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&v)for(var a of v(e))r.indexOf(a)<0&&j.call(e,a)&&(o[a]=e[a]);return o})(b,["default"]);return p(i,u(f,{class:"ve-radio-group"},r),(x=P({},w),m(x,y({default:({isDisabled:e,isReadonly:r,props:a})=>p(n,u(c,a,{id:g.value,disabled:e.value,readonly:r.value},o),{default:h,_:1},16,["id","disabled","readonly"]),_:2}))),16);var x}}});export{h as R};
