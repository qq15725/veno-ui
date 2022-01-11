import e from"./basic.2db830f0.js";import t from"./hide-language.5e1fd2e8.js";import l from"./highlighted-line-numbers.a631b8f7.js";import a from"./highlight.463887f7.js";import s from"./line-numbers.d9de41ae.js";import{H as i,a as o,b as r}from"./headers.823d2665.js";import{P as n}from"./p.aea6482f.js";import{A as u}from"./alert.e2e82b60.js";import{C as d,f as m,R as f}from"./index.410c00f7.js";import{T as g}from"./table.60cc1875.js";import{O as p,U as h,a as A,Q as c,u as b,K as j}from"./vendor.ff7a2168.js";import"./pagination.39bafa7d.js";const v=j("代码 Code"),_=j("由于尺寸原因，Veno UI 并不把代码高亮插件内置。如果你需要使用该组件的代码高亮，请在创建实例时配置 highlighter 选项。"),y=j("下面的代码展示了如何设定 "),B=j("prismjs"),x=j(" 作为代码高亮插件。"),E=j("演示"),F=j("API"),C=j("Code Props"),D={title:"代码 Code",headers:[{level:1,title:"代码 Code",slug:"代码-code"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"隐藏代码语言显示",slug:"隐藏代码语言显示"},{level:3,title:"行高亮",slug:"行高亮"},{level:3,title:"代码高亮",slug:"代码高亮"},{level:3,title:"显示行号",slug:"显示行号"},{level:2,title:"API",slug:"api"},{level:3,title:"Code Props",slug:"code-props"}],frontmatter:{category:"Data 数据展示"}},w={},I=Object.assign(w,{setup:j=>(j,D)=>{const w=i,I=n,P=u,U=d,V=o,L=m,N=f,O=r,R=g;return p(),h("div",null,[A(w,{id:"代码-code",tabindex:"-1"},{default:c((()=>[v])),_:1}),A(P,{type:"warning",title:"WARNING",class:"mb-3"},{default:c((()=>[A(I,null,{default:c((()=>[_])),_:1})])),_:1}),A(I,null,{default:c((()=>[y,A(U,null,{default:c((()=>[B])),_:1}),x])),_:1}),A(U,{"show-line-numbers":"","highlighted-line-numbers":[],language:"typescript",value:"import%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20prismjs%20from%20'prismjs'%0A%0Aexport%20default%20createVenoUi(%7B%0A%20%20highlighter%3A%20%7B%0A%20%20%20%20prismjs%2C%0A%20%20%20%20prismjsLoadLanguage%3A%20async%20(language%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20switch%20(language)%20%7B%0A%20%20%20%20%20%20%20%20case%20'bash'%3A%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20await%20import('prismjs%2Fcomponents%2Fprism-bash.js')%0A%20%20%20%20%20%20%20%20%20%20break%0A%20%20%20%20%20%20%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%9A%84%20import%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%20veno-ui%20%E9%80%89%E9%A1%B9%0A%7D)%0A"}),A(V,{id:"演示",tabindex:"-1"},{default:c((()=>[E])),_:1}),A(N,null,{default:c((()=>[A(L,{cols:"12",md:"6"},{default:c((()=>[A(N,null,{default:c((()=>[A(L,{cols:"12"},{default:c((()=>[A(b(e))])),_:1}),A(L,{cols:"12"},{default:c((()=>[A(b(t))])),_:1}),A(L,{cols:"12"},{default:c((()=>[A(b(l))])),_:1})])),_:1})])),_:1}),A(L,{cols:"12",md:"6"},{default:c((()=>[A(N,null,{default:c((()=>[A(L,{cols:"12"},{default:c((()=>[A(b(a))])),_:1}),A(L,{cols:"12"},{default:c((()=>[A(b(s))])),_:1})])),_:1})])),_:1})])),_:1}),A(V,{id:"api",tabindex:"-1"},{default:c((()=>[F])),_:1}),A(O,{id:"code-props",tabindex:"-1"},{default:c((()=>[C])),_:1}),A(R,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"value",type:"string"},{name:"language",type:"string",default:'"html"'},{name:"show-language",type:"boolean",default:"true"},{name:"show-line-numbers",type:"boolean",default:"false"},{name:"highlighted-line-numbers",type:"array"},{name:"highlighted-line-bg-color",type:"string",default:'"warning"'},{name:"color",type:"string",default:'"secondary"'}]})])}});export{D as __pageData,I as default};
