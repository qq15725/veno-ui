System.register(["./index-legacy.60017b58.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,n,l,a,u,i,o,r,c,d;return{setters:[function(e){t=e._},function(e){n=e.R,l=e.V,a=e.Y,u=e.b,i=e.U,o=e.a4,r=e.a5,c=e.M,d=e.u}],execute:function(){var s={},v=c(" 基本用法 "),f=c("对话框"),E=c("取消"),A=c("确认"),p=t(s,[["render",function(e,t,c,d,s,p){var g=n("ve-button"),m=n("ve-spacer"),D=n("ve-card"),b=n("ve-dialog"),C=n("demo");return l(),a("div",null,[u(C,{file:"/packages/veno-ui/src/components/dialog/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-dialog%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3E%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%20%20%20%20text%3D%22%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%AD%90%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20%23actions%0A%20%20%20%20%20%20%20%20width%3D%22400%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20class%3D%22mr-3%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E5%8F%96%E6%B6%88%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%40click%3D%22isActive.value%20%3D%20false%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card%3E%20%20%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-dialog%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[v]})),default:i((function(){return[u(b,null,{activator:i((function(e){var t=e.props;return[u(g,o(r(t)),{default:i((function(){return[f]})),_:2},1040)]})),default:i((function(e){var t=e.isActive;return[u(D,{title:"确认",text:"一些例子文本内容",width:"400"},{actions:i((function(){return[u(m),u(g,{class:"mr-3",onClick:function(e){return t.value=!1}},{default:i((function(){return[E]})),_:2},1032,["onClick"]),u(g,{color:"primary",onClick:function(e){return t.value=!1}},{default:i((function(){return[A]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:1})]})),_:1})])}]]),g=c("对话框 Dialog"),m=c("对话框是 "),D=c("modal"),b=c(" 窗体的一种类型，它通常在应用程序内容之前呈现，来提供一些关键信息，或者要求用户做出决策。 对话框出现的时候会禁用应用程序的所有功能，只有被确认、被取消或已采取其他必要的操作时，对话框会从屏幕中消失。"),C=c("对话框会带有目的性地打断工作流程，所以请您谨慎使用。"),_=c("演示"),x=c("API"),F=c("Dialog Props"),y=c("Dialog Events"),B=(e("__pageData",{title:"对话框 Dialog",headers:[{level:1,title:"对话框 Dialog",slug:"对话框-dialog"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Dialog Props",slug:"dialog-props"},{level:3,title:"Dialog Events",slug:"dialog-events"}],frontmatter:{category:"Feedback 反馈组件"}}),{});e("default",Object.assign(B,{setup:function(e){return function(e,t){var o=n("ve-h1"),r=n("ve-code"),c=n("ve-p"),s=n("ve-h2"),v=n("ve-col"),f=n("ve-row"),E=n("ve-h3"),A=n("ve-table");return l(),a("div",null,[u(o,{id:"对话框-dialog",tabindex:"-1"},{default:i((function(){return[g]})),_:1}),u(c,null,{default:i((function(){return[m,u(r,null,{default:i((function(){return[D]})),_:1}),b]})),_:1}),u(c,null,{default:i((function(){return[C]})),_:1}),u(s,{id:"演示",tabindex:"-1"},{default:i((function(){return[_]})),_:1}),u(f,null,{default:i((function(){return[u(v,{cols:"12",md:"12"},{default:i((function(){return[u(f,null,{default:i((function(){return[u(v,{cols:"12"},{default:i((function(){return[u(d(p))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),u(s,{id:"api",tabindex:"-1"},{default:i((function(){return[x]})),_:1}),u(E,{id:"dialog-props",tabindex:"-1"},{default:i((function(){return[F]})),_:1}),u(A,{headers:[{text:"名称",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"id",type:"string"},{name:"model-value",type:"boolean",default:"false"},{name:"transition",type:"boolean | string | object",default:'{"component":{"name":"ve-modal-transition","props":{"mode":{},"origin":{"default":"top center 0"}}}}'}]}),u(E,{id:"dialog-events",tabindex:"-1"},{default:i((function(){return[y]})),_:1}),u(A,{headers:[{text:"名称",value:"name"}],items:[{name:"update:modelValue"}]})])}}}))}}}));
