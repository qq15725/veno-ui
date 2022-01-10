import{_ as e}from"./index.5028aa1c.js";import{R as l,V as t,Y as n,b as s,U as o,M as a,u}from"./vendor.0627d41c.js";const i={},r=a(" 基本用法 "),d=a("console.log('code')");var c=e(i,[["render",function(e,a,u,i,c,m){const v=l("ve-code"),g=l("demo");return t(),n("div",null,[s(g,{file:"/packages/veno-ui/src/components/code/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%3Econsole.log('code')%3C%2Fve-code%3E%0A%3C%2Ftemplate%3E"},{title:o((()=>[r])),default:o((()=>[s(v,null,{default:o((()=>[d])),_:1})])),_:1})])}]]);const m={},v=a(" 隐藏代码语言显示 ");var g=e(m,[["render",function(e,a,u,i,r,d){const c=l("ve-code"),m=l("demo");return t(),n("div",null,[s(m,{file:"/packages/veno-ui/src/components/code/docs/hide-language.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20%3Ashow-language%3D%22false%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((()=>[v])),default:o((()=>[s(c,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-language":!1},null,8,["value"])])),_:1})])}]]);const A={},p=a(" 行高亮 ");var f=e(A,[["render",function(e,a,u,i,r,d){const c=l("ve-code"),m=l("demo");return t(),n("div",null,[s(m,{file:"/packages/veno-ui/src/components/code/docs/highlighted-line-numbers.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20show-line-numbers%0A%20%20%20%20%3Ahighlighted-line-numbers%3D%22%5B%5B2%2C%203%5D%5D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((()=>[p])),default:o((()=>[s(c,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-line-numbers":"","highlighted-line-numbers":[[2,3]]},null,8,["value"])])),_:1})])}]]);const h={},D=a(" 代码高亮 ");var E=e(h,[["render",function(e,a,u,i,r,d){const c=l("ve-code"),m=l("demo");return t(),n("div",null,[s(m,{file:"/packages/veno-ui/src/components/code/docs/highlight.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((()=>[D])),default:o((()=>[s(c,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js"},null,8,["value"])])),_:1})])}]]);const C={},b=a(" 显示行号 ");var _=e(C,[["render",function(e,a,u,i,r,d){const c=l("ve-code"),m=l("demo");return t(),n("div",null,[s(m,{file:"/packages/veno-ui/src/components/code/docs/line-numbers.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20show-line-numbers%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((()=>[b])),default:o((()=>[s(c,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-line-numbers":""},null,8,["value"])])),_:1})])}]]);const w=a("代码 Code"),F=a("由于尺寸原因，Veno UI 并不把代码高亮插件内置。如果你需要使用该组件的代码高亮，请在创建实例时配置 highlighter 选项。"),j=a("下面的代码展示了如何设定 "),B=a("prismjs"),y=a(" 作为代码高亮插件。"),P=a("演示"),x=a("API"),T=a("Code Props"),k={title:"代码 Code",headers:[{level:1,title:"代码 Code",slug:"代码-code"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"隐藏代码语言显示",slug:"隐藏代码语言显示"},{level:3,title:"行高亮",slug:"行高亮"},{level:3,title:"代码高亮",slug:"代码高亮"},{level:3,title:"显示行号",slug:"显示行号"},{level:2,title:"API",slug:"api"},{level:3,title:"Code Props",slug:"code-props"}],frontmatter:{category:"Data 数据展示"}},I={},U=Object.assign(I,{setup:e=>(e,a)=>{const i=l("ve-h1"),r=l("ve-p"),d=l("ve-alert"),m=l("ve-code"),v=l("ve-h2"),A=l("ve-col"),p=l("ve-row"),h=l("ve-h3"),D=l("ve-table");return t(),n("div",null,[s(i,{id:"代码-code",tabindex:"-1"},{default:o((()=>[w])),_:1}),s(d,{type:"warning",title:"WARNING",class:"mb-3"},{default:o((()=>[s(r,null,{default:o((()=>[F])),_:1})])),_:1}),s(r,null,{default:o((()=>[j,s(m,null,{default:o((()=>[B])),_:1}),y])),_:1}),s(m,{"show-line-numbers":"","highlighted-line-numbers":[],language:"typescript",value:"import%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20prismjs%20from%20'prismjs'%0A%0Aexport%20default%20createVenoUi(%7B%0A%20%20highlighter%3A%20%7B%0A%20%20%20%20prismjs%2C%0A%20%20%20%20prismjsLoadLanguage%3A%20async%20(language%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20switch%20(language)%20%7B%0A%20%20%20%20%20%20%20%20case%20'bash'%3A%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20await%20import('prismjs%2Fcomponents%2Fprism-bash.js')%0A%20%20%20%20%20%20%20%20%20%20break%0A%20%20%20%20%20%20%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%9A%84%20import%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%20veno-ui%20%E9%80%89%E9%A1%B9%0A%7D)%0A"}),s(v,{id:"演示",tabindex:"-1"},{default:o((()=>[P])),_:1}),s(p,null,{default:o((()=>[s(A,{cols:"12",md:"6"},{default:o((()=>[s(p,null,{default:o((()=>[s(A,{cols:"12"},{default:o((()=>[s(u(c))])),_:1}),s(A,{cols:"12"},{default:o((()=>[s(u(g))])),_:1}),s(A,{cols:"12"},{default:o((()=>[s(u(f))])),_:1})])),_:1})])),_:1}),s(A,{cols:"12",md:"6"},{default:o((()=>[s(p,null,{default:o((()=>[s(A,{cols:"12"},{default:o((()=>[s(u(E))])),_:1}),s(A,{cols:"12"},{default:o((()=>[s(u(_))])),_:1})])),_:1})])),_:1})])),_:1}),s(v,{id:"api",tabindex:"-1"},{default:o((()=>[x])),_:1}),s(h,{id:"code-props",tabindex:"-1"},{default:o((()=>[T])),_:1}),s(D,{headers:[{text:"名称",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"value",type:"string"},{name:"language",type:"string",default:'"html"'},{name:"show-language",type:"boolean",default:"true"},{name:"show-line-numbers",type:"boolean",default:"false"},{name:"highlighted-line-numbers",type:"array"},{name:"highlighted-line-bg-color",type:"string",default:'"warning"'},{name:"color",type:"string",default:'"secondary"'}]})])}});export{k as __pageData,U as default};
