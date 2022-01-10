import{_ as e}from"./index.09ac0b2e.js";import{d as l,r as t,R as a,S as r,Y as s,b as d,V as o,M as u,X as i}from"./vendor.b9011e0d.js";const A=l({setup:()=>({value:t(30),strokeWidth:t(3)})}),n={title:"基本用法",headers:[],frontmatter:{}},v=u(" 基本用法 "),m=u("进度条有2种变体 "),p=u("linear"),c=u(" - 线性进度条（默认）、"),D=u("circular"),h=u(" - 圆形进度条。");var f=e(A,[["render",function(e,l,t,A,n,f){const E=a("ve-code"),b=a("ve-p"),k=a("ve-progress"),C=a("ve-input"),B=a("demo");return r(),s("div",null,[d(B,{file:"/packages/veno-ui/src/components/progress/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-input%20label%3D%22%E8%BF%9B%E5%BA%A6%E6%AF%94%22%20v-model%3D%22value%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%3Cve-input%20label%3D%22%E6%8F%8F%E7%BA%BF%E5%AE%BD%22%20v-model%3D%22strokeWidth%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(30)%2C%0A%20%20%20%20%20%20%20%20strokeWidth%3A%20ref(3)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:o((()=>[v])),prepend:o((()=>[d(b,null,{default:o((()=>[m,d(E,null,{default:o((()=>[p])),_:1}),c,d(E,null,{default:o((()=>[D])),_:1}),h])),_:1})])),default:o((()=>[d(k,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"circular",class:"mb-3"},{default:o((()=>[u(i(e.value),1)])),_:1},8,["model-value","stroke-width"]),d(k,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"linear",class:"mb-3"},{default:o((()=>[u(i(e.value),1)])),_:1},8,["model-value","stroke-width"]),d(C,{label:"进度比",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),type:"number","hide-details":""},null,8,["modelValue"]),d(C,{label:"描线宽",modelValue:e.strokeWidth,"onUpdate:modelValue":l[1]||(l[1]=l=>e.strokeWidth=l),type:"number","hide-details":""},null,8,["modelValue"])])),_:1})])}]]);export{n as __pageData,f as default};
