System.register(["./index-legacy.0afdc784.js","./vendor-legacy.2ecb56c6.js"],(function(e){"use strict";var n,t,l,u,r,o,s,i;return{setters:[function(e){n=e._},function(e){t=e.R,l=e.S,u=e.Y,r=e.b,o=e.V,s=e.M,i=e.u}],execute:function(){var a={},c=s(" 基本用法 "),d=s("console.log('code')"),m=n(a,[["render",function(e,n,s,i,a,m){var f=t("ve-code"),v=t("demo");return l(),u("div",null,[r(v,{file:"/packages/veno-ui/src/components/code/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%3Econsole.log('code')%3C%2Fve-code%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[c]})),default:o((function(){return[r(f,null,{default:o((function(){return[d]})),_:1})]})),_:1})])}]]),f={},v=s(" 隐藏代码语言显示 "),g=n(f,[["render",function(e,n,s,i,a,c){var d=t("ve-code"),m=t("demo");return l(),u("div",null,[r(m,{file:"/packages/veno-ui/src/components/code/docs/hide-language.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20%3Ashow-language%3D%22false%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[v]})),default:o((function(){return[r(d,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-language":!1},null,8,["value"])]})),_:1})])}]]),A={},p=s(" 行高亮 "),h=n(A,[["render",function(e,n,s,i,a,c){var d=t("ve-code"),m=t("demo");return l(),u("div",null,[r(m,{file:"/packages/veno-ui/src/components/code/docs/highlighted-line-numbers.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20show-line-numbers%0A%20%20%20%20%3Ahighlighted-line-numbers%3D%22%5B%5B2%2C%203%5D%5D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[p]})),default:o((function(){return[r(d,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-line-numbers":"","highlighted-line-numbers":[[2,3]]},null,8,["value"])]})),_:1})])}]]),D={},E=s(" 代码高亮 "),b=n(D,[["render",function(e,n,s,i,a,c){var d=t("ve-code"),m=t("demo");return l(),u("div",null,[r(m,{file:"/packages/veno-ui/src/components/code/docs/highlight.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[E]})),default:o((function(){return[r(d,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js"},null,8,["value"])]})),_:1})])}]]),C={},_=s(" 显示行号 "),w=n(C,[["render",function(e,n,s,i,a,c){var d=t("ve-code"),m=t("demo");return l(),u("div",null,[r(m,{file:"/packages/veno-ui/src/components/code/docs/line-numbers.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-code%0A%20%20%20%20%3Avalue%3D%22%60%0A%20%20function%20sleep%20(ms%20%3D%201000)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20ms))%0A%20%20%7D%0A%20%20%60%22%0A%20%20%20%20language%3D%22js%22%0A%20%20%20%20show-line-numbers%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:o((function(){return[_]})),default:o((function(){return[r(d,{value:"\nfunction sleep (ms = 1000) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n",language:"js","show-line-numbers":""},null,8,["value"])]})),_:1})])}]]),F=s("代码 Code"),j=s("由于尺寸原因，Veno UI 并不把代码高亮插件内置。如果你需要使用该组件的代码高亮，请在创建实例时配置 highlighter 选项。"),B=s("下面的代码展示了如何设定 "),y=s("prismjs"),x=s(" 作为代码高亮插件。"),P=s("演示"),T=s("code props"),k=(e("__pageData",{title:"代码 Code",headers:[{level:1,title:"代码 Code",slug:"代码-code"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"隐藏代码语言显示",slug:"隐藏代码语言显示"},{level:3,title:"行高亮",slug:"行高亮"},{level:3,title:"代码高亮",slug:"代码高亮"},{level:3,title:"显示行号",slug:"显示行号"}],frontmatter:{category:"Data 数据展示"}}),{});e("default",Object.assign(k,{setup:function(e){return function(e,n){var s=t("ve-h1"),a=t("ve-p"),c=t("ve-alert"),d=t("ve-code"),f=t("ve-h2"),v=t("ve-col"),A=t("ve-row"),p=t("ve-h3"),D=t("ve-table");return l(),u("div",null,[r(s,{id:"代码-code",tabindex:"-1"},{default:o((function(){return[F]})),_:1}),r(c,{type:"warning",title:"WARNING",class:"mb-3"},{default:o((function(){return[r(a,null,{default:o((function(){return[j]})),_:1})]})),_:1}),r(a,null,{default:o((function(){return[B,r(d,null,{default:o((function(){return[y]})),_:1}),x]})),_:1}),r(d,{"show-line-numbers":"","highlighted-line-numbers":[],language:"typescript",value:"import%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20prismjs%20from%20'prismjs'%0A%0Aexport%20default%20createVenoUi(%7B%0A%20%20highlighter%3A%20%7B%0A%20%20%20%20prismjs%2C%0A%20%20%20%20prismjsLoadLanguage%3A%20async%20(language%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20switch%20(language)%20%7B%0A%20%20%20%20%20%20%20%20case%20'bash'%3A%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20%40ts-ignore%0A%20%20%20%20%20%20%20%20%20%20await%20import('prismjs%2Fcomponents%2Fprism-bash.js')%0A%20%20%20%20%20%20%20%20%20%20break%0A%20%20%20%20%20%20%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%9A%84%20import%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%2F%2F%20...%20%E5%85%B6%E4%BB%96%20veno-ui%20%E9%80%89%E9%A1%B9%0A%7D)%0A"}),r(f,{id:"演示",tabindex:"-1"},{default:o((function(){return[P]})),_:1}),r(A,null,{default:o((function(){return[r(v,{cols:"12",md:"6"},{default:o((function(){return[r(A,null,{default:o((function(){return[r(v,{cols:"12"},{default:o((function(){return[r(i(m))]})),_:1}),r(v,{cols:"12"},{default:o((function(){return[r(i(g))]})),_:1}),r(v,{cols:"12"},{default:o((function(){return[r(i(h))]})),_:1})]})),_:1})]})),_:1}),r(v,{cols:"12",md:"6"},{default:o((function(){return[r(A,null,{default:o((function(){return[r(v,{cols:"12"},{default:o((function(){return[r(i(b))]})),_:1}),r(v,{cols:"12"},{default:o((function(){return[r(i(w))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),r(p,null,{default:o((function(){return[T]})),_:1}),r(D,{headers:[{text:"名称",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"value",type:"string"},{name:"language",type:"string",default:'"html"'},{name:"show-language",type:"boolean",default:"true"},{name:"show-line-numbers",type:"boolean",default:"false"},{name:"highlighted-line-numbers",type:"array"},{name:"highlighted-line-bg-color",type:"string",default:'"warning"'},{name:"color",type:"string",default:'"secondary"'}]})])}}}))}}}));
