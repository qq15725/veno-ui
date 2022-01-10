import{d as e,r as s,R as t,Y as r,b as a,U as o,V as n,q as l,E as i,M as c}from"./vendor.0627d41c.js";import{_ as d}from"./index.cc0d1799.js";const A=e({setup:()=>({show:s(!0)})}),u={title:"scale 缩放",headers:[],frontmatter:{}},p=c(" scale 缩放 "),f=c("使用 "),m=c("scale-transition"),v=c(" 组件实现缩放效果。"),C=c("点击方块查看。");var D=d(A,[["render",function(e,s,c,d,A,u){const D=t("ve-code"),h=t("ve-p"),E=t("ve-card"),w=t("ve-scale-transition"),_=t("demo");return n(),r("div",null,[a(_,{file:"/packages/veno-ui/src/components/transition/docs/scale.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20size%3D%22100%22%0A%20%20%20%20border%3D%220%22%0A%20%20%20%20%40click%3D%22show%20%3D%20!show%22%0A%20%20%3E%0A%20%20%20%20%3Cve-scale-transition%3E%0A%20%20%20%20%20%20%3Cve-card%0A%20%20%20%20%20%20%20%20v-show%3D%22show%22%0A%20%20%20%20%20%20%20%20color%3D%22primary%22%0A%20%20%20%20%20%20%20%20size%3D%22100%25%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fve-scale-transition%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20show%3A%20ref(true)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{title:o((()=>[p])),prepend:o((()=>[a(h,null,{default:o((()=>[f,a(D,null,{default:o((()=>[m])),_:1}),v])),_:1}),a(h,null,{default:o((()=>[C])),_:1})])),default:o((()=>[a(E,{size:"100",border:"0",onClick:s[0]||(s[0]=s=>e.show=!e.show)},{default:o((()=>[a(w,null,{default:o((()=>[l(a(E,{color:"primary",size:"100%"},null,512),[[i,e.show]])])),_:1})])),_:1})])),_:1})])}]]);export{u as __pageData,D as default};