import{_ as e}from"./Demo.9ecb8065.js";import{_ as t,V as l}from"./index.59e593d7.js";import{C as a}from"./code.3da98d69.js";import{P as r}from"./p.8ee5e30b.js";import{I as o}from"./input.056b4d58.js";import{b as s,r as d,O as i,U as u,j as m,Q as A,R as n,S as p}from"./vendor.b3232dc0.js";import"./form-control.13d4c4c5.js";import"./label.bede15f4.js";import"./index.e18b8715.js";const v=s({setup:()=>({value:d(30),strokeWidth:d(3)})}),c={title:"基本用法",headers:[],frontmatter:{}},f=n("进度条有2种变体 "),D=n("linear"),b=n(" - 线性进度条（默认）、"),h=n("circular"),E=n(" - 圆形进度条。");var k=t(v,[["render",function(t,s,d,v,c,k){const C=a,B=r,F=l,j=o,W=e;return i(),u("div",null,[m(W,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/progress/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-input%20label%3D%22%E8%BF%9B%E5%BA%A6%E6%AF%94%22%20v-model%3D%22value%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%3Cve-input%20label%3D%22%E6%8F%8F%E7%BA%BF%E5%AE%BD%22%20v-model%3D%22strokeWidth%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(30)%2C%0A%20%20%20%20%20%20%20%20strokeWidth%3A%20ref(3)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:A((()=>[m(B,null,{default:A((()=>[f,m(C,null,{default:A((()=>[D])),_:1}),b,m(C,null,{default:A((()=>[h])),_:1}),E])),_:1})])),default:A((()=>[m(F,{"model-value":t.value,"stroke-width":t.strokeWidth,variant:"circular",class:"mb-3"},{default:A((()=>[n(p(t.value),1)])),_:1},8,["model-value","stroke-width"]),m(F,{"model-value":t.value,"stroke-width":t.strokeWidth,variant:"linear",class:"mb-3"},{default:A((()=>[n(p(t.value),1)])),_:1},8,["model-value","stroke-width"]),m(j,{label:"进度比",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),type:"number","hide-details":""},null,8,["modelValue"]),m(j,{label:"描线宽",modelValue:t.strokeWidth,"onUpdate:modelValue":s[1]||(s[1]=e=>t.strokeWidth=e),type:"number","hide-details":""},null,8,["modelValue"])])),_:1})])}]]);export{c as __pageData,k as default};