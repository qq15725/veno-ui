import{_ as p,H as c,a as u,P as m,C as A,g as d,h as _}from"./app.2727beb5.js";import{Y as v,a0 as f,n as e,_ as t,Q as o}from"./vendor.d4ba25e4.js";const Q={title:"\u5FEB\u901F\u4E0A\u624B",headers:[{level:1,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B"},{level:2,title:"Vue \u7248\u672C",slug:"vue-\u7248\u672C"},{level:2,title:"\u5B89\u88C5",slug:"\u5B89\u88C5"},{level:2,title:"\u5B8C\u6574\u5F15\u5165",slug:"\u5B8C\u6574\u5F15\u5165"},{level:2,title:"\u6309\u9700\u52A0\u8F7D",slug:"\u6309\u9700\u52A0\u8F7D"},{level:3,title:"\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6",slug:"\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6"},{level:3,title:"\u6216\u8005\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6",slug:"\u6216\u8005\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6"}],frontmatter:{meta:{category:"\u5F00\u53D1\u6307\u5357",title:"\u5FEB\u901F\u4E0A\u624B"}}},g={},h=o("\u5FEB\u901F\u4E0A\u624B"),D=o("Vue \u7248\u672C"),b=o("vue >= 3.2.0"),B=o("\u5B89\u88C5"),F=o("\u5B8C\u6574\u5F15\u5165"),C=o("\u6309\u9700\u52A0\u8F7D"),V=o("\u7EC4\u4EF6\u5E93\u5DF2\u7ECF\u9ED8\u8BA4\u652F\u6301 Tree Shaking\u3002"),x=o("\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6"),y=o("\u6216\u8005\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6"),j=o("\u4F7F\u7528 "),k=o("unplugin-vue-components"),w=o(" \u63D2\u4EF6\u6765\u5F00\u542F\u6309\u9700\u52A0\u8F7D\u7684\u652F\u6301\u3002 \u63D2\u4EF6\u4F1A\u81EA\u52A8\u89E3\u6790\u6A21\u677F\u4E2D\u7684\u4F7F\u7528\u5230\u7684\u7EC4\u4EF6\uFF0C\u5E76\u5BFC\u5165\u7EC4\u4EF6\u548C\u5BF9\u5E94\u7684\u6837\u5F0F\u6587\u4EF6\u3002");function H($,E,N,R,T,U){const r=c,s=u,a=m,n=A,i=d,l=_;return v(),f("div",null,[e(r,{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},{default:t(()=>[h]),_:1}),e(s,{id:"vue-\u7248\u672C",tabindex:"-1"},{default:t(()=>[D]),_:1}),e(a,null,{default:t(()=>[b]),_:1}),e(s,{id:"\u5B89\u88C5",tabindex:"-1"},{default:t(()=>[B]),_:1}),e(n,{class:"mb-4",color:"secondary",code:"%24%20npm%20install%20veno-ui%0A","line-numbers":[],language:"shell","show-language":""}),e(s,{id:"\u5B8C\u6574\u5F15\u5165",tabindex:"-1"},{default:t(()=>[F]),_:1}),e(n,{class:"mb-4",color:"secondary",code:"import%20%7B%20createApp%20%7D%20from%20'vue'%0Aimport%20App%20from%20'.%2FApp.vue'%0A%0Aimport%20'veno-ui%2Fstyles'%0Aimport%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aimport%20*%20as%20components%20from%20'veno-ui%2Fcomponents'%0Aimport%20*%20as%20directives%20from%20'veno-ui%2Fdirectives'%0Aimport%20*%20as%20providers%20from%20'veno-ui%2Fproviders'%0Aconst%20veno%20%3D%20createVeno(%7B%0A%20%20components%2C%0A%20%20directives%2C%0A%20%20providers%2C%0A%7D)%0A%0Aconst%20app%20%3D%20createApp(App)%0Aapp.use(veno)%0Aapp.mount('%23app')%0A","line-numbers":[[4,13],[16]],language:"js","show-language":""}),e(s,{id:"\u6309\u9700\u52A0\u8F7D",tabindex:"-1"},{default:t(()=>[C]),_:1}),e(a,null,{default:t(()=>[V]),_:1}),e(n,{class:"mb-4",color:"secondary",code:"%2F%2F%20main.js%0Aimport%20%7B%20createApp%20%7D%20from%20'vue'%0Aimport%20App%20from%20'.%2FApp.vue'%0A%0Aimport%20'veno-ui%2Fstyles'%0Aimport%20%7B%20createVeno%20%7D%20from%20'veno-ui'%0Aconst%20veno%20%3D%20createVeno()%0A%0Aconst%20app%20%3D%20createApp(App)%0Aapp.use(veno)%0Aapp.mount('%23app')%0A","line-numbers":[[5,7],[10]],language:"js","show-language":""}),e(i,{id:"\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6",tabindex:"-1"},{default:t(()=>[x]),_:1}),e(n,{class:"mb-4",color:"secondary",code:"import%20%7B%20Button%20%7D%20from%20'veno-ui%2Fcomponentns'%0A","line-numbers":[],language:"js","show-language":""}),e(i,{id:"\u6216\u8005\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6",tabindex:"-1"},{default:t(()=>[y]),_:1}),e(a,null,{default:t(()=>[j,e(l,{href:"https://github.com/antfu/unplugin-vue-components",underline:"",color:"primary",target:"_blank"},{default:t(()=>[k]),_:1}),w]),_:1}),e(n,{class:"mb-4",color:"secondary",code:"%2F%2F%20vite.config.js%0Aimport%20%7B%20defineConfig%20%7D%20from%20'vite'%0Aimport%20Vue%20from%20'%40vitejs%2Fplugin-vue'%0Aimport%20Components%20from%20'unplugin-vue-components%2Fvite'%0A%0Afunction%20VenoUiResolver()%20%7B%0A%20%20return%20%7B%0A%20%20%20%20type%3A%20'component'%2C%0A%20%20%20%20resolve%3A%20name%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(!name.match(%2F%5EVe%5BA-Z%5D%2F))%20return%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20importName%3A%20name.replace('Ve'%2C%20'')%2C%0A%20%20%20%20%20%20%20%20path%3A%20'veno-ui%2Fcomponents'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20defineConfig(%7B%0A%20%20plugins%3A%20%5B%0A%20%20%20%20Vue()%2C%0A%20%20%20%20Components(%7B%0A%20%20%20%20%20%20resolvers%3A%20%5B%0A%20%20%20%20%20%20%20%20VenoUiResolver()%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D)%0A%20%20%5D%0A%7D)%0A","line-numbers":[],language:"js","show-language":""})])}var S=p(g,[["render",H]]);export{Q as __pageData,S as default};
