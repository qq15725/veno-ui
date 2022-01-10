System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,a,n,l,r,i,o,u;return{setters:[function(e){t=e._},function(e){a=e.R,n=e.V,l=e.Y,r=e.b,i=e.U,o=e.M,u=e.u}],execute:function(){var d={},s=o(" 基本用法 "),f=t(d,[["render",function(e,t,o,u,d,f){var p=a("ve-radio"),m=a("demo");return n(),l("div",null,[r(m,{file:"/packages/veno-ui/src/components/radio/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-radio%20label%3D%22Radio1%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[s]})),default:i((function(){return[r(p,{label:"Radio1"})]})),_:1})])}]]),p={},m=o(" 单选框组 "),y=t(p,[["render",function(e,t,o,u,d,s){var f=a("ve-radio"),p=a("ve-radio-group"),y=a("demo");return n(),l("div",null,[r(y,{file:"/packages/veno-ui/src/components/radio/docs/group.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-radio-group%20label%3D%22%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84%22%20messages%3D%22%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E5%B8%AE%E5%8A%A9%E4%BF%A1%E6%81%AF%22%3E%0A%20%20%20%20%3Cve-radio%20label%3D%22Radio1%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20label%3D%22Radio2%22%20%2F%3E%0A%20%20%20%20%3Cve-radio%20label%3D%22Radio3%22%20%2F%3E%0A%20%20%3C%2Fve-radio-group%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[m]})),default:i((function(){return[r(p,{label:"单选框组",messages:"这是一条帮助信息"},{default:i((function(){return[r(f,{label:"Radio1"}),r(f,{label:"Radio2"}),r(f,{label:"Radio3"})]})),_:1})]})),_:1})])}]]),c=o("单选框 Radio"),g=o("演示"),v=o("API"),b=o("Radio Props"),E=o("RadioGroup Props"),A=(e("__pageData",{title:"单选框 Radio",headers:[{level:1,title:"单选框 Radio",slug:"单选框-radio"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"单选框组",slug:"单选框组"},{level:2,title:"API",slug:"api"},{level:3,title:"Radio Props",slug:"radio-props"},{level:3,title:"RadioGroup Props",slug:"radiogroup-props"}],frontmatter:{category:"Form 表单组件"}}),{});e("default",Object.assign(A,{setup:function(e){return function(e,t){var o=a("ve-h1"),d=a("ve-h2"),s=a("ve-col"),p=a("ve-row"),m=a("ve-h3"),A=a("ve-table");return n(),l("div",null,[r(o,{id:"单选框-radio",tabindex:"-1"},{default:i((function(){return[c]})),_:1}),r(d,{id:"演示",tabindex:"-1"},{default:i((function(){return[g]})),_:1}),r(p,null,{default:i((function(){return[r(s,{cols:"12",md:"6"},{default:i((function(){return[r(p,null,{default:i((function(){return[r(s,{cols:"12"},{default:i((function(){return[r(u(f))]})),_:1})]})),_:1})]})),_:1}),r(s,{cols:"12",md:"6"},{default:i((function(){return[r(p,null,{default:i((function(){return[r(s,{cols:"12"},{default:i((function(){return[r(u(y))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),r(d,{id:"api",tabindex:"-1"},{default:i((function(){return[v]})),_:1}),r(m,{id:"radio-props",tabindex:"-1"},{default:i((function(){return[b]})),_:1}),r(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"color",type:"string",default:'"primary"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"label",type:"string"},{name:"false-icon",type:"string",default:'"veno-ui:$radioOff"'},{name:"true-icon",type:"string",default:'"veno-ui:$radioOn"'},{name:"multiple",type:"boolean",default:"false"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"true-value",type:"any"},{name:"false-value",type:"any"},{name:"model-value",type:"any"},{name:"type",type:"string",default:'"radio"'},{name:"value",type:"any"},{name:"value-comparator",type:"function"},{name:"theme",type:"string"},{name:"density",type:"string",default:'"medium"'}]}),r(m,{id:"radiogroup-props",tabindex:"-1"},{default:i((function(){return[E]})),_:1}),r(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"height",type:"number | string",default:'"auto"'},{name:"append-icon",type:"string"},{name:"prepend-icon",type:"string"},{name:"label",type:"string"},{name:"label-id",type:"string"},{name:"label-width",type:"string | number"},{name:"hide-details",type:"boolean | string",default:"false"},{name:"hint",type:"string"},{name:"messages",type:"array | string",default:"[]"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"},{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"false-icon",type:"string",default:'"veno-ui:$radioOff"'},{name:"true-icon",type:"string",default:'"veno-ui:$radioOn"'},{name:"multiple",type:"boolean",default:"false"},{name:"type",type:"string",default:'"radio"'}]})])}}}))}}}));