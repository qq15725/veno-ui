System.register(["./basic-legacy.76eaefc7.js","./closable-legacy.41b5f49a.js","./headers-legacy.de726351.js","./index-legacy.0991e0f0.js","./table-legacy.05f9c2ee.js","./vendor-legacy.f35e774c.js","./Demo-legacy.37d8aab0.js","./code-legacy.2b433194.js","./alert-legacy.9446f028.js","./pagination-legacy.2859db53.js"],(function(e){"use strict";var t,a,n,r,l,u,i,o,s,p,c,f,d,m;return{setters:[function(e){t=e.default},function(e){a=e.default},function(e){n=e.H,r=e.a,l=e.b},function(e){u=e.C,i=e.R},function(e){o=e.T},function(e){s=e.O,p=e.U,c=e.j,f=e.Q,d=e.u,m=e.R},function(){},function(){},function(){},function(){}],execute:function(){var g=m("警告 Alert"),y=m("演示"),b=m("API"),v=m("Alert Props"),h=m("Alert Events"),x=(e("__pageData",{title:"警告 Alert",headers:[{level:1,title:"警告 Alert",slug:"警告-alert"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"可关闭的",slug:"可关闭的"},{level:2,title:"API",slug:"api"},{level:3,title:"Alert Props",slug:"alert-props"},{level:3,title:"Alert Events",slug:"alert-events"}],frontmatter:{meta:{category:"Feedback 反馈组件","wai-aria":"https://www.w3.org/TR/wai-aria-practices/#alert"}}}),{});e("default",Object.assign(x,{setup:function(e){return function(e,m){var x=n,_=r,j=u,w=i,A=l,P=o;return s(),p("div",null,[c(x,{id:"警告-alert",tabindex:"-1"},{default:f((function(){return[g]})),_:1}),c(_,{id:"演示",tabindex:"-1"},{default:f((function(){return[y]})),_:1}),c(w,null,{default:f((function(){return[c(j,{cols:"12",md:"6"},{default:f((function(){return[c(w,null,{default:f((function(){return[c(j,{cols:"12"},{default:f((function(){return[c(d(t))]})),_:1})]})),_:1})]})),_:1}),c(j,{cols:"12",md:"6"},{default:f((function(){return[c(w,null,{default:f((function(){return[c(j,{cols:"12"},{default:f((function(){return[c(d(a))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(_,{id:"api",tabindex:"-1"},{default:f((function(){return[b]})),_:1}),c(A,{id:"alert-props",tabindex:"-1"},{default:f((function(){return[v]})),_:1}),c(P,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"model-value",type:"boolean",default:"true"},{name:"title",type:"string"},{name:"text",type:"string"},{name:"type",type:"string"},{name:"icon",type:"boolean | string",default:"false"},{name:"closable",type:"boolean",default:"false"},{name:"close-icon",type:"string",default:'"$close"'},{name:"overlay-color",type:"string"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"},{name:"transition",source:"transition",type:"boolean | string | object",default:'{"component":{"name":"ve-fade-transition","props":{"mode":{},"origin":{"default":"top center 0"}}}}'}]}),c(A,{id:"alert-events",tabindex:"-1"},{default:f((function(){return[h]})),_:1}),c(P,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}}))}}}));