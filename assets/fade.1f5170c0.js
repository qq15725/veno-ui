import{d as e,r as t,R as r,Y as a,b as o,U as s,V as d,q as n,E as i,M as l}from"./vendor.0627d41c.js";import{_ as A}from"./index.cc0d1799.js";const f=e({setup:()=>({show:t(!0)})}),c={title:"fade 淡入淡出",headers:[],frontmatter:{}},u=l(" fade 淡入淡出 "),p=l("使用 "),m=l("fade-transition"),v=l(" 组件实现淡入淡出效果。"),C=l("点击方块查看。");var D=A(f,[["render",function(e,t,l,A,f,c){const D=r("ve-code"),h=r("ve-p"),E=r("ve-card"),w=r("ve-fade-transition"),_=r("demo");return d(),a("div",null,[o(_,{file:"/packages/veno-ui/src/components/transition/docs/fade.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20size%3D%22100%22%0A%20%20%20%20border%3D%220%22%0A%20%20%20%20%40click%3D%22show%20%3D%20!show%22%0A%20%20%3E%0A%20%20%20%20%3Cve-fade-transition%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20v-show%3D%22show%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20size%3D%22100%25%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-fade-transition%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:s((()=>[u])),prepend:s((()=>[o(h,null,{default:s((()=>[p,o(D,null,{default:s((()=>[m])),_:1}),v])),_:1}),o(h,null,{default:s((()=>[C])),_:1})])),default:s((()=>[o(E,{size:"100",border:"0",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:s((()=>[o(w,null,{default:s((()=>[n(o(E,{color:"primary",size:"100%"},null,512),[[i,e.show]])])),_:1})])),_:1})])),_:1})])}]]);export{c as __pageData,D as default};