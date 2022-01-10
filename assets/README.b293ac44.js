import{_ as e}from"./index.cc0d1799.js";import{R as t,V as a,Y as s,b as l,U as i,M as o,u as n}from"./vendor.0627d41c.js";const d={},c=o(" 基本用法 ");var m=e(d,[["render",function(e,o,n,d,m,p){const u=t("ve-image"),r=t("demo");return a(),s("div",null,[l(r,{file:"/packages/veno-ui/src/components/image/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-image%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[c])),default:i((()=>[l(u,{src:"https://picsum.photos/id/11/500/300"})])),_:1})])}]]);const p={},u=o(" 封面 ");var r=e(p,[["render",function(e,o,n,d,c,m){const p=t("ve-image"),r=t("demo");return a(),s("div",null,[l(r,{file:"/packages/veno-ui/src/components/image/docs/cover.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-image%20%3Aaspect-ratio%3D%223%20%2F%201%22%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%20class%3D%22mb-3%22%20%2F%3E%0A%20%20%3Cve-image%20%3Aaspect-ratio%3D%223%20%2F%201%22%20cover%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[u])),default:i((()=>[l(p,{"aspect-ratio":3,src:"https://picsum.photos/id/11/500/300",class:"mb-3"}),l(p,{"aspect-ratio":3,cover:"",src:"https://picsum.photos/id/11/500/300"})])),_:1})])}]]);const v={},g=o(" 长宽比 "),f=o("如果你想改变图像的长宽比，你可以设置一个固定的宽高比。");var F=e(v,[["render",function(e,o,n,d,c,m){const p=t("ve-p"),u=t("ve-image"),r=t("demo");return a(),s("div",null,[l(r,{file:"/packages/veno-ui/src/components/image/docs/aspect-ratio.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-image%20%0A%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%3Aaspect-ratio%3D%223%20%2F%201%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((()=>[g])),prepend:i((()=>[l(p,null,{default:i((()=>[f])),_:1})])),default:i((()=>[l(u,{src:"https://picsum.photos/id/11/500/300","aspect-ratio":3})])),_:1})])}]]);const h=o("图片 Image"),_=o("image"),A=o(" 组件。"),b=o("演示"),y=o("API"),E=o("Image Props"),x=o("Image Events"),C={title:"图片 Image",headers:[{level:1,title:"图片 Image",slug:"图片-image"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"封面",slug:"封面"},{level:3,title:"长宽比",slug:"长宽比"},{level:2,title:"API",slug:"api"},{level:3,title:"Image Props",slug:"image-props"},{level:3,title:"Image Events",slug:"image-events"}],frontmatter:{category:"Data 数据展示"}},D={},I=Object.assign(D,{setup:e=>(e,o)=>{const d=t("ve-h1"),c=t("ve-code"),p=t("ve-p"),u=t("ve-h2"),v=t("ve-col"),g=t("ve-row"),f=t("ve-h3"),C=t("ve-table");return a(),s("div",null,[l(d,{id:"图片-image",tabindex:"-1"},{default:i((()=>[h])),_:1}),l(p,null,{default:i((()=>[l(c,null,{default:i((()=>[_])),_:1}),A])),_:1}),l(u,{id:"演示",tabindex:"-1"},{default:i((()=>[b])),_:1}),l(g,null,{default:i((()=>[l(v,{cols:"12",md:"6"},{default:i((()=>[l(g,null,{default:i((()=>[l(v,{cols:"12"},{default:i((()=>[l(n(m))])),_:1}),l(v,{cols:"12"},{default:i((()=>[l(n(r))])),_:1})])),_:1})])),_:1}),l(v,{cols:"12",md:"6"},{default:i((()=>[l(g,null,{default:i((()=>[l(v,{cols:"12"},{default:i((()=>[l(n(F))])),_:1})])),_:1})])),_:1})])),_:1}),l(u,{id:"api",tabindex:"-1"},{default:i((()=>[y])),_:1}),l(f,{id:"image-props",tabindex:"-1"},{default:i((()=>[E])),_:1}),l(C,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"aspect-ratio",type:"any"},{name:"cover",type:"boolean",default:"false"},{name:"eager",type:"boolean",default:"false"},{name:"alt",type:"string"},{name:"src",type:"string"},{name:"sizes",type:"string"},{name:"srcset",type:"string"},{name:"width",type:"any"}]}),l(f,{id:"image-events",tabindex:"-1"},{default:i((()=>[x])),_:1}),l(C,{pagination:!1,headers:[{text:"事件名",value:"name"}],items:[{name:"0"},{name:"1"},{name:"2"}]})])}});export{C as __pageData,I as default};