import{_ as e,C as a,P as l,a as t}from"./index.740d7899.js";import{P as r}from"./p.1283b8fc.js";import{I as s}from"./input.f5c7df10.js";import{d as o,r as d,P as i,U as u,b as A,R as n,M as m,S as p}from"./vendor.157c333c.js";import"./form-control.ada405fa.js";import"./label.0453aa60.js";import"./index.5d63b19c.js";const v=o({setup:()=>({value:d(30),strokeWidth:d(3)})}),c={title:"基本用法",headers:[],frontmatter:{}},f=m("进度条有2种变体 "),D=m("linear"),h=m(" - 线性进度条（默认）、"),b=m("circular"),E=m(" - 圆形进度条。");var k=e(v,[["render",function(e,o,d,v,c,k){const C=a,B=r,F=l,W=s,g=t;return i(),u("div",null,[A(g,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/progress/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-input%20label%3D%22%E8%BF%9B%E5%BA%A6%E6%AF%94%22%20v-model%3D%22value%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%3Cve-input%20label%3D%22%E6%8F%8F%E7%BA%BF%E5%AE%BD%22%20v-model%3D%22strokeWidth%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(30)%2C%0A%20%20%20%20%20%20%20%20strokeWidth%3A%20ref(3)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:n((()=>[A(B,null,{default:n((()=>[f,A(C,null,{default:n((()=>[D])),_:1}),h,A(C,null,{default:n((()=>[b])),_:1}),E])),_:1})])),default:n((()=>[A(F,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"circular",class:"mb-3"},{default:n((()=>[m(p(e.value),1)])),_:1},8,["model-value","stroke-width"]),A(F,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"linear",class:"mb-3"},{default:n((()=>[m(p(e.value),1)])),_:1},8,["model-value","stroke-width"]),A(W,{label:"进度比",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"number","hide-details":""},null,8,["modelValue"]),A(W,{label:"描线宽",modelValue:e.strokeWidth,"onUpdate:modelValue":o[1]||(o[1]=a=>e.strokeWidth=a),type:"number","hide-details":""},null,8,["modelValue"])])),_:1})])}]]);export{c as __pageData,k as default};
