import{_ as e}from"./index.0c24caa4.js";import{d as t,r as a,R as l,V as n,Y as s,b as i,U as d,a2 as r,X as u,M as o,u as p}from"./vendor.0627d41c.js";const m=t({setup:()=>({value:a(!1)})}),c=o(" 基本用法 "),f={class:"mt-3"};var v=e(m,[["render",function(e,t,a,o,p,m){const v=l("ve-switch"),y=l("demo");return n(),s("div",null,[i(y,{file:"/packages/veno-ui/src/components/switch/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-switch%20%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20hide-details%0A%20%20%2F%3E%0A%0A%20%20%3Cdiv%20class%3D%22mt-3%22%3E%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:d((()=>[c])),default:d((()=>[i(v,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),"hide-details":""},null,8,["modelValue"]),r("div",f,u(e.value),1)])),_:1})])}]]);const y=o("开关 Switch"),g=o("switch"),h=o(" 组件。"),b=o("演示"),A=o("API"),w=o("Switch Props"),x=o("Switch Events"),_={title:"开关 Switch",headers:[{level:1,title:"开关 Switch",slug:"开关-switch"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Switch Props",slug:"switch-props"},{level:3,title:"Switch Events",slug:"switch-events"}],frontmatter:{category:"Form 表单组件"}},C={},E=Object.assign(C,{setup:e=>(e,t)=>{const a=l("ve-h1"),r=l("ve-code"),u=l("ve-p"),o=l("ve-h2"),m=l("ve-col"),c=l("ve-row"),f=l("ve-h3"),_=l("ve-table");return n(),s("div",null,[i(a,{id:"开关-switch",tabindex:"-1"},{default:d((()=>[y])),_:1}),i(u,null,{default:d((()=>[i(r,null,{default:d((()=>[g])),_:1}),h])),_:1}),i(o,{id:"演示",tabindex:"-1"},{default:d((()=>[b])),_:1}),i(c,null,{default:d((()=>[i(m,{cols:"12",md:"12"},{default:d((()=>[i(c,null,{default:d((()=>[i(m,{cols:"12"},{default:d((()=>[i(p(v))])),_:1})])),_:1})])),_:1})])),_:1}),i(o,{id:"api",tabindex:"-1"},{default:d((()=>[A])),_:1}),i(f,{id:"switch-props",tabindex:"-1"},{default:d((()=>[w])),_:1}),i(_,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"append-icon",type:"string"},{name:"prepend-icon",type:"string"},{name:"label",type:"string"},{name:"label-id",type:"string"},{name:"label-width",type:"string | number"},{name:"hide-details",type:"boolean | string",default:"false"},{name:"hint",type:"string"},{name:"messages",type:"array | string",default:"[]"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"},{name:"color",type:"string",default:'"primary"'},{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"false-icon",type:"string"},{name:"true-icon",type:"string"},{name:"multiple",type:"boolean",default:"false"},{name:"true-value",type:"any"},{name:"false-value",type:"any"},{name:"type",type:"string"},{name:"value",type:"any"},{name:"value-comparator",type:"function"},{name:"theme",type:"string"}]}),i(f,{id:"switch-events",tabindex:"-1"},{default:d((()=>[x])),_:1}),i(_,{"per-page":"999",pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}});export{_ as __pageData,E as default};
