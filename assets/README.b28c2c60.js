import{_ as e}from"./index.9622ecc9.js";import{d as l,r as a,R as r,V as t,Y as s,b as o,U as i,M as d,X as n,u}from"./vendor.0627d41c.js";const m=l({setup:()=>({value:a(30),strokeWidth:a(3)})}),v=d(" 基本用法 "),c=d("进度条有2种变体 "),p=d("linear"),A=d(" - 线性进度条（默认）、"),g=d("circular"),f=d(" - 圆形进度条。");var D=e(m,[["render",function(e,l,a,u,m,D){const E=r("ve-code"),b=r("ve-p"),C=r("ve-progress"),_=r("ve-input"),y=r("demo");return t(),s("div",null,[o(y,{file:"/packages/veno-ui/src/components/progress/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20%3Amodel-value%3D%22value%22%0A%20%20%20%20%3Astroke-width%3D%22strokeWidth%22%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fve-progress%3E%0A%0A%20%20%3Cve-input%20label%3D%22%E8%BF%9B%E5%BA%A6%E6%AF%94%22%20v-model%3D%22value%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%20%20%3Cve-input%20label%3D%22%E6%8F%8F%E7%BA%BF%E5%AE%BD%22%20v-model%3D%22strokeWidth%22%20type%3D%22number%22%20hide-details%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(30)%2C%0A%20%20%20%20%20%20%20%20strokeWidth%3A%20ref(3)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:i((()=>[v])),prepend:i((()=>[o(b,null,{default:i((()=>[c,o(E,null,{default:i((()=>[p])),_:1}),A,o(E,null,{default:i((()=>[g])),_:1}),f])),_:1})])),default:i((()=>[o(C,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"circular",class:"mb-3"},{default:i((()=>[d(n(e.value),1)])),_:1},8,["model-value","stroke-width"]),o(C,{"model-value":e.value,"stroke-width":e.strokeWidth,variant:"linear",class:"mb-3"},{default:i((()=>[d(n(e.value),1)])),_:1},8,["model-value","stroke-width"]),o(_,{label:"进度比",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),type:"number","hide-details":""},null,8,["modelValue"]),o(_,{label:"描线宽",modelValue:e.strokeWidth,"onUpdate:modelValue":l[1]||(l[1]=l=>e.strokeWidth=l),type:"number","hide-details":""},null,8,["modelValue"])])),_:1})])}]]);const E={},b=d(" 尺寸 "),C=d("进度条的尺寸有 "),_=d("x-small"),y=d(" - 特小、"),h=d("small"),F=d(" - 小、"),k=d("medium"),x=d(" - 中等、"),B=d("large"),z=d(" - 大、"),P=d("x-large"),W=d(" - 特大。");var w=e(E,[["render",function(e,l,a,d,n,u){const m=r("ve-code"),v=r("ve-p"),c=r("ve-progress"),p=r("ve-grid"),A=r("demo");return t(),s("div",null,[o(A,{file:"/packages/veno-ui/src/components/progress/docs/size.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20dense%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22x-small%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cve-progress%0A%20%20%20%20%20%20size%3D%22x-large%22%0A%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20%20%20%3Amodel-value%3D%2230%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fve-grid%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[b])),prepend:i((()=>[o(v,null,{default:i((()=>[C,o(m,null,{default:i((()=>[_])),_:1}),y,o(m,null,{default:i((()=>[h])),_:1}),F,o(m,null,{default:i((()=>[k])),_:1}),x,o(m,null,{default:i((()=>[B])),_:1}),z,o(m,null,{default:i((()=>[P])),_:1}),W])),_:1})])),default:i((()=>[o(p,{dense:"",align:"center"},{default:i((()=>[o(c,{size:"x-small",color:"primary",variant:"circular","model-value":30}),o(c,{size:"small",color:"primary",variant:"circular","model-value":30}),o(c,{color:"primary",variant:"circular","model-value":30}),o(c,{size:"large",color:"primary",variant:"circular","model-value":30}),o(c,{size:"x-large",color:"primary",variant:"circular","model-value":30})])),_:1})])),_:1})])}]]);const V={},j=d(" 不确定的 ");var U=e(V,[["render",function(e,l,a,d,n,u){const m=r("ve-progress"),v=r("demo");return t(),s("div",null,[o(v,{file:"/packages/veno-ui/src/components/progress/docs/indeterminate.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%0A%20%20%20%20variant%3D%22circular%22%0A%20%20%20%20indeterminate%0A%20%20%20%20class%3D%22mb-3%22%0A%20%20%2F%3E%0A%0A%20%20%3Cve-progress%0A%20%20%20%20variant%3D%22linear%22%0A%20%20%20%20indeterminate%20%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[j])),default:i((()=>[o(m,{variant:"circular",indeterminate:"",class:"mb-3"}),o(m,{variant:"linear",indeterminate:""})])),_:1})])}]]);const I={},M=d(" 颜色 ");var O=e(I,[["render",function(e,l,a,d,n,u){const m=r("ve-progress"),v=r("demo");return t(),s("div",null,[o(v,{file:"/packages/veno-ui/src/components/progress/docs/color.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-progress%20%3Amodel-value%3D%2230%22%20color%3D%22error%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[M])),default:i((()=>[o(m,{"model-value":30,color:"error"})])),_:1})])}]]);const R=d("进度条 Progress"),X=d("演示"),Y=d("API"),q=d("Progress Props"),G={title:"进度条 Progress",headers:[{level:1,title:"进度条 Progress",slug:"进度条-progress"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"尺寸",slug:"尺寸"},{level:3,title:"不确定的",slug:"不确定的"},{level:3,title:"颜色",slug:"颜色"},{level:2,title:"API",slug:"api"},{level:3,title:"Progress Props",slug:"progress-props"}],frontmatter:{category:"Feedback 反馈组件"}},H={},J=Object.assign(H,{setup:e=>(e,l)=>{const a=r("ve-h1"),d=r("ve-h2"),n=r("ve-col"),m=r("ve-row"),v=r("ve-h3"),c=r("ve-table");return t(),s("div",null,[o(a,{id:"进度条-progress",tabindex:"-1"},{default:i((()=>[R])),_:1}),o(d,{id:"演示",tabindex:"-1"},{default:i((()=>[X])),_:1}),o(m,null,{default:i((()=>[o(n,{cols:"12",md:"6"},{default:i((()=>[o(m,null,{default:i((()=>[o(n,{cols:"12"},{default:i((()=>[o(u(D))])),_:1}),o(n,{cols:"12"},{default:i((()=>[o(u(w))])),_:1})])),_:1})])),_:1}),o(n,{cols:"12",md:"6"},{default:i((()=>[o(m,null,{default:i((()=>[o(n,{cols:"12"},{default:i((()=>[o(u(U))])),_:1}),o(n,{cols:"12"},{default:i((()=>[o(u(O))])),_:1})])),_:1})])),_:1})])),_:1}),o(d,{id:"api",tabindex:"-1"},{default:i((()=>[Y])),_:1}),o(v,{id:"progress-props",tabindex:"-1"},{default:i((()=>[q])),_:1}),o(c,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"variant",type:"string",default:'"linear"'},{name:"color",type:"string | boolean",default:'"primary"'},{name:"left",type:"boolean",default:"false"},{name:"right",type:"boolean",default:"false"},{name:"size",type:"string | number",default:'"medium"'},{name:"rotate",type:"number | string",default:"0"},{name:"active",type:"boolean",default:"true"},{name:"model-value",type:"number | string",default:"0"},{name:"stroke-width",type:"number | string",default:"3"},{name:"indeterminate",type:"boolean",default:"false"},{name:"theme",type:"string"},{name:"tag",type:"string",default:'"div"'}]})])}});export{G as __pageData,J as default};
