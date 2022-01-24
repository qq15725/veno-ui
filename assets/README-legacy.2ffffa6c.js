System.register(["./basic-legacy.2bcaa2aa.js","./hide-language-legacy.553e64bb.js","./highlighted-line-numbers-legacy.124323c5.js","./highlight-legacy.2b5ff434.js","./line-numbers-legacy.7bc35b29.js","./headers-legacy.66fb035f.js","./p-legacy.03a1adaa.js","./alert-legacy.fb48e9b0.js","./code-legacy.a8ba6f35.js","./index-legacy.1349bc2c.js","./table-legacy.0b22b240.js","./vendor-legacy.f35e774c.js","./Demo-legacy.b2561142.js","./pagination-legacy.dc848a48.js"],(function(e){"use strict";var t,n,l,a,u,i,r,o,s,c,f,d,g,m,p,b,h,A,y,j;return{setters:[function(e){t=e.default},function(e){n=e.default},function(e){l=e.default},function(e){a=e.default},function(e){u=e.default},function(e){i=e.H,r=e.a,o=e.b},function(e){s=e.P},function(e){c=e.A},function(e){f=e.C},function(e){d=e.C,g=e.R},function(e){m=e.T},function(e){p=e.O,b=e.U,h=e.j,A=e.Q,y=e.u,j=e.R},function(){},function(){}],execute:function(){var v=j("代码 Code"),_=j("由于尺寸原因，Veno UI 并不把代码高亮插件内置。如果你需要使用该组件的代码高亮，请在创建实例时配置 highlighter 选项。"),B=j("下面的代码展示了如何设定 "),x=j("prismjs"),D=j(" 作为代码高亮插件。"),E=j("演示"),C=j("API"),F=j("Code Props"),w=(e("__pageData",{title:"代码 Code",headers:[{level:1,title:"代码 Code",slug:"代码-code"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"代码高亮",slug:"代码高亮"},{level:3,title:"隐藏代码语言显示",slug:"隐藏代码语言显示"},{level:3,title:"显示行号",slug:"显示行号"},{level:3,title:"行高亮",slug:"行高亮"},{level:2,title:"API",slug:"api"},{level:3,title:"Code Props",slug:"code-props"}],frontmatter:{meta:{category:"Data 数据展示"}}}),{});e("default",Object.assign(w,{setup:function(e){return function(e,j){var w=i,P=s,W=c,I=f,U=r,R=d,V=g,L=o,N=m;return p(),b("div",null,[h(w,{id:"代码-code",tabindex:"-1"},{default:A((function(){return[v]})),_:1}),h(W,{type:"warning",title:"WARNING",class:"mb-3"},{default:A((function(){return[h(P,null,{default:A((function(){return[_]})),_:1})]})),_:1}),h(P,null,{default:A((function(){return[B,h(I,null,{default:A((function(){return[x]})),_:1}),D]})),_:1}),h(I,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"typescript",value:"import%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20prismjs%20from%20'prismjs'%0A%0Aexport%20default%20createVenoUi(%7B%0A%20%20highlighter%3A%20%7B%0A%20%20%20%20prismjs%2C%0A%20%20%20%20prismjsLoadLanguage%3A%20async%20(language%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20switch%20(language)%20%7B%0A%20%20%20%20%20%20%20%20case%20'bash'%3A%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20await%20import('prismjs%2Fcomponents%2Fprism-bash.js')%0A%20%20%20%20%20%20%20%20%20%20break%0A%20%20%20%20%20%20%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%9A%84%20import%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%20veno-ui%20%E9%80%89%E9%A1%B9%0A%7D)%0A"}),h(U,{id:"演示",tabindex:"-1"},{default:A((function(){return[E]})),_:1}),h(V,null,{default:A((function(){return[h(R,{cols:"12",md:"6"},{default:A((function(){return[h(V,null,{default:A((function(){return[h(R,{cols:"12"},{default:A((function(){return[h(y(t))]})),_:1}),h(R,{cols:"12"},{default:A((function(){return[h(y(n))]})),_:1}),h(R,{cols:"12"},{default:A((function(){return[h(y(l))]})),_:1})]})),_:1})]})),_:1}),h(R,{cols:"12",md:"6"},{default:A((function(){return[h(V,null,{default:A((function(){return[h(R,{cols:"12"},{default:A((function(){return[h(y(a))]})),_:1}),h(R,{cols:"12"},{default:A((function(){return[h(y(u))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),h(U,{id:"api",tabindex:"-1"},{default:A((function(){return[C]})),_:1}),h(L,{id:"code-props",tabindex:"-1"},{default:A((function(){return[F]})),_:1}),h(N,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"value",type:"string"},{name:"language",type:"string",default:'"html"'},{name:"show-language",type:"boolean",default:"true"},{name:"show-line-numbers",type:"boolean",default:"false"},{name:"highlighted-line-numbers",type:"array"},{name:"highlighted-line-bg-color",type:"string",default:'"warning"'},{name:"color",type:"string",default:'"secondary"'}]})])}}}))}}}));
