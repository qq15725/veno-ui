System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,n,a,l,i,u,r,s,o,d,f,m;return{setters:[function(e){t=e._},function(e){n=e.d,a=e.r,l=e.R,i=e.V,u=e.Y,r=e.b,s=e.U,o=e.a2,d=e.X,f=e.M,m=e.u}],execute:function(){var c=n({setup:function(){return{value:a(!1)}}}),p=f(" 基本用法 "),v={class:"mt-3"},y=t(c,[["render",function(e,t,n,a,f,m){var c=l("ve-switch"),y=l("demo");return i(),u("div",null,[r(y,{file:"/packages/veno-ui/src/components/switch/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-switch%20%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20hide-details%0A%20%20%2F%3E%0A%0A%20%20%3Cdiv%20class%3D%22mt-3%22%3E%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:s((function(){return[p]})),default:s((function(){return[r(c,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),"hide-details":""},null,8,["modelValue"]),o("div",v,d(e.value),1)]})),_:1})])}]]),g=f("开关 Switch"),h=f("switch"),b=f(" 组件。"),A=f("演示"),w=f("API"),_=f("Switch Props"),x=f("Switch Events"),C=(e("__pageData",{title:"开关 Switch",headers:[{level:1,title:"开关 Switch",slug:"开关-switch"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:2,title:"API",slug:"api"},{level:3,title:"Switch Props",slug:"switch-props"},{level:3,title:"Switch Events",slug:"switch-events"}],frontmatter:{category:"Form 表单组件"}}),{});e("default",Object.assign(C,{setup:function(e){return function(e,t){var n=l("ve-h1"),a=l("ve-code"),o=l("ve-p"),d=l("ve-h2"),f=l("ve-col"),c=l("ve-row"),p=l("ve-h3"),v=l("ve-table");return i(),u("div",null,[r(n,{id:"开关-switch",tabindex:"-1"},{default:s((function(){return[g]})),_:1}),r(o,null,{default:s((function(){return[r(a,null,{default:s((function(){return[h]})),_:1}),b]})),_:1}),r(d,{id:"演示",tabindex:"-1"},{default:s((function(){return[A]})),_:1}),r(c,null,{default:s((function(){return[r(f,{cols:"12",md:"12"},{default:s((function(){return[r(c,null,{default:s((function(){return[r(f,{cols:"12"},{default:s((function(){return[r(m(y))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),r(d,{id:"api",tabindex:"-1"},{default:s((function(){return[w]})),_:1}),r(p,{id:"switch-props",tabindex:"-1"},{default:s((function(){return[_]})),_:1}),r(v,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"append-icon",type:"string"},{name:"prepend-icon",type:"string"},{name:"label",type:"string"},{name:"label-id",type:"string"},{name:"label-width",type:"string | number"},{name:"hide-details",type:"boolean | string",default:"false"},{name:"hint",type:"string"},{name:"messages",type:"array | string",default:"[]"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"density",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"},{name:"color",type:"string",default:'"primary"'},{name:"id",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"false-icon",type:"string"},{name:"true-icon",type:"string"},{name:"multiple",type:"boolean",default:"false"},{name:"true-value",type:"any"},{name:"false-value",type:"any"},{name:"type",type:"string"},{name:"value",type:"any"},{name:"value-comparator",type:"function"},{name:"theme",type:"string"}]}),r(p,{id:"switch-events",tabindex:"-1"},{default:s((function(){return[x]})),_:1}),r(v,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}}))}}}));