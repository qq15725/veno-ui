import{_ as e,C as n,L as t}from"./index.31f0f374.js";import{H as i,a as o,b as l}from"./headers.e952eefe.js";import{P as a}from"./p.18ac77eb.js";import{L as s,M as u,b as r,U as p,K as m}from"./vendor.2cc6d4f3.js";const A={title:"快速上手",headers:[{level:1,title:"快速上手",slug:"快速上手"},{level:2,title:"Vue 版本",slug:"vue-版本"},{level:2,title:"安装",slug:"安装"},{level:2,title:"完整引入",slug:"完整引入"},{level:2,title:"按需加载",slug:"按需加载"},{level:3,title:"手动引入组件",slug:"手动引入组件"},{level:3,title:"或者自动导入组件",slug:"或者自动导入组件"}],frontmatter:{meta:{title:"快速上手"}}},v={},f=m("快速上手"),d=m("Vue 版本"),c=m("vue >= 3.2.0"),g=m("安装"),h=m("完整引入"),b=m("按需加载"),D=m("组件库已经默认支持 Tree Shaking。"),B=m("手动引入组件"),F=m("或者自动导入组件"),_=m("使用 "),V=m("unplugin-vue-components"),j=m(" 插件来开启按需加载的支持。 插件会自动解析模板中的使用到的组件，并导入组件和对应的样式文件。");var U=e(v,[["render",function(e,m,A,v,U,x){const C=i,w=o,y=a,k=n,E=l,L=t;return s(),u("div",null,[r(C,{id:"快速上手",tabindex:"-1"},{default:p((()=>[f])),_:1}),r(w,{id:"vue-版本",tabindex:"-1"},{default:p((()=>[d])),_:1}),r(y,null,{default:p((()=>[c])),_:1}),r(w,{id:"安装",tabindex:"-1"},{default:p((()=>[g])),_:1}),r(k,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"shell",value:"%24%20npm%20install%20veno-ui%0A"}),r(w,{id:"完整引入",tabindex:"-1"},{default:p((()=>[h])),_:1}),r(k,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[[4,9],[12]],language:"js",value:"import%20%7B%20createApp%20%7D%20from%20'vue'%0Aimport%20App%20from%20'.%2FApp.vue'%0A%0Aimport%20'veno-ui%2Fstyles'%0Aimport%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20*%20as%20components%20from%20'veno-ui%2Fcomponents'%0Aconst%20venoUi%20%3D%20createVenoUi(%7B%0A%20%20components%0A%7D)%0A%0Aconst%20app%20%3D%20createApp(App)%0Aapp.use(venoUi)%0Aapp.mount('%23app')%0A"}),r(w,{id:"按需加载",tabindex:"-1"},{default:p((()=>[b])),_:1}),r(y,null,{default:p((()=>[D])),_:1}),r(k,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[[5,7],[10]],language:"js",value:"%2F%2F%20main.js%0Aimport%20%7B%20createApp%20%7D%20from%20'vue'%0Aimport%20App%20from%20'.%2FApp.vue'%0A%0Aimport%20'veno-ui%2Fstyles'%0Aimport%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aconst%20venoUi%20%3D%20createVenoUi()%0A%0Aconst%20app%20%3D%20createApp(App)%0Aapp.use(venoUi)%0Aapp.mount('%23app')%0A"}),r(E,{id:"手动引入组件",tabindex:"-1"},{default:p((()=>[B])),_:1}),r(k,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"js",value:"import%20%7B%20Button%20%7D%20from%20'veno-ui%2Fcomponentns'%0A"}),r(E,{id:"或者自动导入组件",tabindex:"-1"},{default:p((()=>[F])),_:1}),r(y,null,{default:p((()=>[_,r(L,{href:"https://github.com/antfu/unplugin-vue-components",underline:"",color:"primary",target:"_blank"},{default:p((()=>[V])),_:1}),j])),_:1}),r(k,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"js",value:"%2F%2F%20vite.config.js%0Aimport%20%7B%20defineConfig%20%7D%20from%20'vite'%0Aimport%20Vue%20from%20'%40vitejs%2Fplugin-vue'%0Aimport%20Components%20from%20'unplugin-vue-components%2Fvite'%0A%0Afunction%20VenoUiResolver()%20%7B%0A%20%20return%20%7B%0A%20%20%20%20type%3A%20'component'%2C%0A%20%20%20%20resolve%3A%20name%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(!name.match(%2F%5EVe%5BA-Z%5D%2F))%20return%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20importName%3A%20name.replace('Ve'%2C%20'')%2C%0A%20%20%20%20%20%20%20%20path%3A%20'veno-ui%2Fcomponents'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20defineConfig(%7B%0A%20%20plugins%3A%20%5B%0A%20%20%20%20Vue()%2C%0A%20%20%20%20Components(%7B%0A%20%20%20%20%20%20resolvers%3A%20%5B%0A%20%20%20%20%20%20%20%20VenoUiResolver()%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D)%0A%20%20%5D%0A%7D)%0A"})])}]]);export{A as __pageData,U as default};
