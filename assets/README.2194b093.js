import{_ as e}from"./index.09ac0b2e.js";import{R as t,S as l,Y as a,b as o,V as i,a4 as d,a5 as n,M as s,u}from"./vendor.b9011e0d.js";const c={},v=s(" 基本用法 "),r=s("对话框"),E=s("取消"),A=s("确认");var p=e(c,[["render",function(e,s,u,c,p,m){const f=t("ve-button"),C=t("ve-spacer"),b=t("ve-card"),g=t("ve-dialog"),D=t("demo");return l(),a("div",null,[o(D,{file:"/packages/veno-ui/src/components/dialog/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[v])),default:i((()=>[o(g,null,{activator:i((({props:e})=>[o(f,d(n(e)),{default:i((()=>[r])),_:2},1040)])),default:i((({isActive:e})=>[o(b,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:i((()=>[o(C),o(f,{class:"mr-3",onClick:t=>e.value=!1},{default:i((()=>[E])),_:2},1032,["onClick"]),o(f,{color:"primary",onClick:t=>e.value=!1},{default:i((()=>[A])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})])),_:1})])}]]);const m=s("对话框 Dialog"),f=s("对话框是 "),C=s("modal"),b=s(" 窗体的一种类型，它通常在应用程序内容之前呈现，来提供一些关键信息，或者要求用户做出决策。 对话框出现的时候会禁用应用程序的所有功能，只有被确认、被取消或已采取其他必要的操作时，对话框会从屏幕中消失。"),g=s("对话框会带有目的性地打断工作流程，所以请您谨慎使用。"),D=s("演示"),_=s("dialog props"),F={title:"对话框 Dialog",headers:[{level:1,title:"对话框 Dialog",slug:"对话框-dialog"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"}],frontmatter:{category:"Feedback 反馈组件"}},B={},x=Object.assign(B,{setup:e=>(e,d)=>{const n=t("ve-h1"),s=t("ve-code"),c=t("ve-p"),v=t("ve-h2"),r=t("ve-col"),E=t("ve-row"),A=t("ve-h3"),F=t("ve-table");return l(),a("div",null,[o(n,{id:"对话框-dialog",tabindex:"-1"},{default:i((()=>[m])),_:1}),o(c,null,{default:i((()=>[f,o(s,null,{default:i((()=>[C])),_:1}),b])),_:1}),o(c,null,{default:i((()=>[g])),_:1}),o(v,{id:"演示",tabindex:"-1"},{default:i((()=>[D])),_:1}),o(E,null,{default:i((()=>[o(r,{cols:"12",md:"12"},{default:i((()=>[o(E,null,{default:i((()=>[o(r,{cols:"12"},{default:i((()=>[o(u(p))])),_:1})])),_:1})])),_:1})])),_:1}),o(A,null,{default:i((()=>[_])),_:1}),o(F,{headers:[{text:"名称",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"id",type:"string"},{name:"model-value",type:"boolean",default:"false"},{name:"transition",type:"boolean | string | object",default:'{"component":{"name":"ve-modal-transition","props":{"mode":{},"origin":{"default":"top center 0"}}}}'}]})])}});export{F as __pageData,x as default};
