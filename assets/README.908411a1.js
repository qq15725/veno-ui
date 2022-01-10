import{d as e,r as t,R as l,S as n,Y as o,b as a,V as s,q as r,E as d,M as i,u}from"./vendor.b9011e0d.js";import{_ as c}from"./index.09ac0b2e.js";const A=e({setup:()=>({show:t(!0)})}),f=i(" fade 淡入淡出 "),p=i("使用 "),v=i("fade-transition"),C=i(" 组件实现淡入淡出效果。"),m=i("点击方块查看。");var D=c(A,[["render",function(e,t,i,u,c,A){const D=l("ve-code"),h=l("ve-p"),_=l("ve-card"),w=l("ve-fade-transition"),E=l("demo");return n(),o("div",null,[a(E,{file:"/packages/veno-ui/src/components/transition/docs/fade.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20size%3D%22100%22%0A%20%20%20%20border%3D%220%22%0A%20%20%20%20%40click%3D%22show%20%3D%20!show%22%0A%20%20%3E%0A%20%20%20%20%3Cve-fade-transition%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20v-show%3D%22show%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20size%3D%22100%25%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-fade-transition%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:s((()=>[f])),prepend:s((()=>[a(h,null,{default:s((()=>[p,a(D,null,{default:s((()=>[v])),_:1}),C])),_:1}),a(h,null,{default:s((()=>[m])),_:1})])),default:s((()=>[a(_,{size:"100",border:"0",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:s((()=>[a(w,null,{default:s((()=>[r(a(_,{color:"primary",size:"100%"},null,512),[[d,e.show]])])),_:1})])),_:1})])),_:1})])}]]);const h=e({setup:()=>({show:t(!0)})}),_=i(" scale 缩放 "),w=i("使用 "),E=i("scale-transition"),x=i(" 组件实现缩放效果。"),F=i("点击方块查看。");var B=c(h,[["render",function(e,t,i,u,c,A){const f=l("ve-code"),p=l("ve-p"),v=l("ve-card"),C=l("ve-scale-transition"),m=l("demo");return n(),o("div",null,[a(m,{file:"/packages/veno-ui/src/components/transition/docs/scale.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20size%3D%22100%22%0A%20%20%20%20border%3D%220%22%0A%20%20%20%20%40click%3D%22show%20%3D%20!show%22%0A%20%20%3E%0A%20%20%20%20%3Cve-scale-transition%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20v-show%3D%22show%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20size%3D%22100%25%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-scale-transition%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:s((()=>[_])),prepend:s((()=>[a(p,null,{default:s((()=>[w,a(f,null,{default:s((()=>[E])),_:1}),x])),_:1}),a(p,null,{default:s((()=>[F])),_:1})])),default:s((()=>[a(v,{size:"100",border:"0",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:s((()=>[a(C,null,{default:s((()=>[r(a(v,{color:"primary",size:"100%"},null,512),[[d,e.show]])])),_:1})])),_:1})])),_:1})])}]]);const b=e({setup:()=>({show:t(!0)})}),z=i(" expand 扩展 "),g=i("使用 "),k=i("expand-transition"),y=i(" 组件实现扩展效果。"),j=i("点击方块查看。");var T=c(b,[["render",function(e,t,i,u,c,A){const f=l("ve-code"),p=l("ve-p"),v=l("ve-card"),C=l("ve-expand-transition"),m=l("demo");return n(),o("div",null,[a(m,{file:"/packages/veno-ui/src/components/transition/docs/expand.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20size%3D%22100%22%20%0A%20%20%20%20border%3D%220%22%20%0A%20%20%20%20%40click%3D%22show%20%3D%20!show%22%0A%20%20%3E%0A%20%20%20%20%3Cve-expand-transition%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20v-show%3D%22show%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20size%3D%22100%25%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-expand-transition%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:s((()=>[z])),prepend:s((()=>[a(p,null,{default:s((()=>[g,a(f,null,{default:s((()=>[k])),_:1}),y])),_:1}),a(p,null,{default:s((()=>[j])),_:1})])),default:s((()=>[a(v,{size:"100",border:"0",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:s((()=>[a(C,null,{default:s((()=>[r(a(v,{color:"primary",size:"100%"},null,512),[[d,e.show]])])),_:1})])),_:1})])),_:1})])}]]);const q=i("过渡 Transition"),M=i("演示"),O={title:"过渡 Transition",headers:[{level:1,title:"过渡 Transition",slug:"过渡-transition"},{level:2,title:"演示",slug:"演示"},{level:3,title:"fade 淡入淡出",slug:"fade-淡入淡出"},{level:3,title:"scale 缩放",slug:"scale-缩放"},{level:3,title:"expand 扩展",slug:"expand-扩展"}],frontmatter:{category:"Basic 通用组件"}},R={},S=Object.assign(R,{setup:e=>(e,t)=>{const r=l("ve-h1"),d=l("ve-h2"),i=l("ve-col"),c=l("ve-row");return n(),o("div",null,[a(r,{id:"过渡-transition",tabindex:"-1"},{default:s((()=>[q])),_:1}),a(d,{id:"演示",tabindex:"-1"},{default:s((()=>[M])),_:1}),a(c,null,{default:s((()=>[a(i,{cols:"12",md:"6"},{default:s((()=>[a(c,null,{default:s((()=>[a(i,{cols:"12"},{default:s((()=>[a(u(D))])),_:1}),a(i,{cols:"12"},{default:s((()=>[a(u(B))])),_:1})])),_:1})])),_:1}),a(i,{cols:"12",md:"6"},{default:s((()=>[a(c,null,{default:s((()=>[a(i,{cols:"12"},{default:s((()=>[a(u(T))])),_:1})])),_:1})])),_:1})])),_:1})])}});export{O as __pageData,S as default};
