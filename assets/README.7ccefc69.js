import e from"./basic.4bb7bbe1.js";import s from"./preset.8b64dab2.js";import{H as l,a as t,b as i}from"./headers.a3615513.js";import{P as a}from"./p.b2256c9e.js";import{C as n}from"./code.105e6a0f.js";import{C as u,R as o,i as r}from"./index.d88d629a.js";import{T as d}from"./table.4af0be38.js";import{O as m,U as g,j as f,Q as p,u as c,R as v}from"./vendor.b3232dc0.js";import"./Demo.d7c99e3e.js";import"./pagination.ee5f9831.js";const A=v("图标 Icon"),b=v("默认使用的 mdi 图标。"),h=v("安装依赖。"),F=v("引入 css。"),_=v("演示"),D=v("加载本地 svg 作为图标使用"),B=v("安装 svg 转组件的 vite 插件。"),x=v("配置插件。"),j=v("新建 src/svgs 目录，并写入 index.ts。"),C=v("载入 aliases 。"),y=v("尝试创建 "),w=v("src/svgs/dashboard.svg"),I=v(" ，使用 "),E=v('icon="$dashboard"'),V=v(" 。"),P=v("详情参见 "),U=v("veno-admin"),W=v(" 使用。"),O=v("API"),S=v("Icon Props"),k={title:"图标 Icon",headers:[{level:1,title:"图标 Icon",slug:"图标-icon"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"预设图标",slug:"预设图标"},{level:2,title:"加载本地 svg 作为图标使用",slug:"加载本地-svg-作为图标使用"},{level:2,title:"API",slug:"api"},{level:3,title:"Icon Props",slug:"icon-props"}],frontmatter:{category:"Basic 通用组件"}},q={},R=Object.assign(q,{setup:v=>(v,k)=>{const q=l,R=a,z=n,H=t,Q=u,T=o,$=r,G=i,J=d;return m(),g("div",null,[f(q,{id:"图标-icon",tabindex:"-1"},{default:p((()=>[A])),_:1}),f(R,null,{default:p((()=>[b])),_:1}),f(R,null,{default:p((()=>[h])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"shell",value:"%24%20npm%20i%20%40mdi%2Ffont%20-D%0A"}),f(R,null,{default:p((()=>[F])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"ts",value:"%2F%2F%20src%2Fplugins%2Fveno-ui.ts%0Aimport%20'%40mdi%2Ffont%2Fcss%2Fmaterialdesignicons.css'%0Aimport%20%7B%20createVenoUi%20%7D%20from%20'veno-ui'%0Aimport%20%7B%20aliases%2C%20mdi%20%7D%20from%20'veno-ui%2Flib%2Ficonsets%2Fmdi'%0A%0Aexport%20default%20createVenoUi(%7B%0A%20%20icons%3A%20%7B%0A%20%20%20%20defaultSet%3A%20'mdi'%2C%0A%20%20%20%20aliases%2C%0A%20%20%20%20sets%3A%20%7B%0A%20%20%20%20%20%20mdi%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A"}),f(H,{id:"演示",tabindex:"-1"},{default:p((()=>[_])),_:1}),f(T,null,{default:p((()=>[f(Q,{cols:"12",md:"12"},{default:p((()=>[f(T,null,{default:p((()=>[f(Q,{cols:"12"},{default:p((()=>[f(c(e))])),_:1}),f(Q,{cols:"12"},{default:p((()=>[f(c(s))])),_:1})])),_:1})])),_:1})])),_:1}),f(H,{id:"加载本地-svg-作为图标使用",tabindex:"-1"},{default:p((()=>[D])),_:1}),f(R,null,{default:p((()=>[B])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"shell",value:"%24%20npm%20i%20%40veno-ui%2Fvite-plugin-svg%20-D%0A"}),f(R,null,{default:p((()=>[x])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"ts",value:"%2F%2F%20vite.config.ts%0Aimport%20%7B%20defineConfig%20%7D%20from%20'vite'%0Aimport%20Vue%20from%20'%40vitejs%2Fplugin-vue'%0Aimport%20Svg%20from%20'%40veno-ui%2Fvite-plugin-svg'%0A%0Aexport%20default%20defineConfig(%7B%0A%20%20plugins%3A%20%5B%0A%20%20%20%20Svg()%2C%0A%20%20%20%20%2F%2F%20...%20%0A%20%20%20%20Vue()%0A%20%20%5D%0A%7D)%0A"}),f(R,null,{default:p((()=>[j])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"ts",value:"%2F%2F%20src%2Fsvgs%2Findex.ts%0Aconst%20modules%20%3D%20import.meta.globEager('.%2F*.svg')%0A%0Aexport%20default%20Object.keys(modules).reduce((svgs%2C%20path)%20%3D%3E%20(%7B%0A%20%20...svgs%2C%0A%20%20%5Bpath.match(%2F(%5Cw%2B%3F)%5C.svg%24%2F)!%5B1%5D%5D%3A%20modules%5Bpath%5D.default%0A%7D)%2C%20%7B%7D)%0A"}),f(R,null,{default:p((()=>[C])),_:1}),f(z,{class:"mb-4","show-line-numbers":"","highlighted-line-numbers":[],language:"ts",value:"%2F%2F%20src%2Fplugins%2Fveno-ui.ts%0A%2F%2F%20%40%2Fsvgs%20%E7%AD%89%E4%BA%8E%20src%2Fsvgs%0Aimport%20svgs%20from%20'%40%2Fsvgs'%0A%2F%2F%20...%0AcreateVenoUi(%7B%0A%20%20icons%3A%20%7B%0A%20%20%20%20aliases%3A%20svgs%0A%20%20%7D%0A%7D)%0A%2F%2F%20...%0A"}),f(R,null,{default:p((()=>[y,f(z,null,{default:p((()=>[w])),_:1}),I,f(z,null,{default:p((()=>[E])),_:1}),V])),_:1}),f(R,null,{default:p((()=>[P,f($,{href:"https://github.com/qq15725/veno-admin",underline:"",color:"primary",target:"_blank"},{default:p((()=>[U])),_:1}),W])),_:1}),f(H,{id:"api",tabindex:"-1"},{default:p((()=>[O])),_:1}),f(G,{id:"icon-props",tabindex:"-1"},{default:p((()=>[S])),_:1}),f(J,{"per-page":"999",pagination:!1,headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"color",type:"string"},{name:"left",type:"boolean",default:"false"},{name:"right",type:"boolean",default:"false"},{name:"icon",type:"string | object"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"tag",source:"tag",type:"string",default:'"i"'}]})])}});export{k as __pageData,R as default};
