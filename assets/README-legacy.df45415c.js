System.register(["./app-legacy.dccf8ff6.js","./Demo-legacy.e8e7275f.js","./plugin-vue_export-helper-legacy.7bb61c33.js"],(function(e){"use strict";var t,a,i,l,n,o,r,s,c,u,A,d,E,p,m,f,v,h,g;return{setters:[function(e){t=e.q,a=e.s,i=e.u,l=e.v,n=e.x,o=e.a1,r=e.a2,s=e.L,c=e.H,u=e.b,A=e.R,d=e.l,E=e.T,p=e.I,m=e.J,f=e.k,v=e.C},function(e){h=e._},function(e){g=e._}],execute:function(){const B={},C=n("基本用法"),x=n("数据驱动"),D=n("默认插槽");var _=g(B,[["render",function(e,n,s,c,u,A){const d=o,E=r,p=h;return t(),a("div",null,[i(p,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/anchor/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-anchor%20offset%3D%2270%22%3E%0A%20%20%20%20%3Cve-anchor-item%20value%3D%22%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%22%3E%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%3C%2Fve-anchor-item%3E%0A%20%20%20%20%3Cve-anchor-item%20value%3D%22%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8%22%3E%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8%3C%2Fve-anchor-item%3E%0A%20%20%20%20%3Cve-anchor-item%20value%3D%22%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%22%3E%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%3C%2Fve-anchor-item%3E%0A%20%20%3C%2Fve-anchor%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[i(E,{offset:"70"},{default:l((()=>[i(d,{value:"基本用法"},{default:l((()=>[C])),_:1}),i(d,{value:"数据驱动"},{default:l((()=>[x])),_:1}),i(d,{value:"默认插槽"},{default:l((()=>[D])),_:1})])),_:1})])),_:1})])}]]),y=g({},[["render",function(e,n,o,s,c,u){const A=r,d=h;return t(),a("div",null,[i(d,{title:"数据驱动",slug:"数据驱动",file:"/packages/veno-ui/src/components/anchor/docs/items.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-anchor%0A%20%20%20%20%3Aitems%3D%22%5B%20%0A%20%20%20%20%20%20%7B%20text%3A%20'%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95'%2C%20value%3A%20'%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95'%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20'%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8'%2C%20value%3A%20'%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8'%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20'%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD'%2C%20value%3A%20'%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD'%20%7D%2C%0A%20%20%20%20%5D%22%0A%20%20%20%20offset%3D%2270%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[i(A,{items:[{text:"基本用法",value:"基本用法"},{text:"数据驱动",value:"数据驱动"},{text:"默认插槽",value:"默认插槽"}],offset:"70"})])),_:1})])}]]);const F={},b=n("目录");var W=g(F,[["render",function(e,n,o,c,u,A){const d=s,E=r,p=h;return t(),a("div",null,[i(p,{title:"默认插槽",slug:"默认插槽",file:"/packages/veno-ui/src/components/anchor/docs/slots.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-anchor%0A%20%20%20%20%3Aitems%3D%22%5B%20%0A%20%20%20%20%20%20%7B%20text%3A%20'%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95'%2C%20value%3A%20'%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95'%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20'%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8'%2C%20value%3A%20'%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8'%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20'%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD'%2C%20value%3A%20'%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD'%20%7D%2C%0A%20%20%20%20%5D%22%0A%20%20%20%20offset%3D%2270%22%0A%20%20%3E%0A%20%20%20%20%3Cve-list-subheader%20tag%3D%22li%22%3E%E7%9B%AE%E5%BD%95%3C%2Fve-list-subheader%3E%0A%20%20%3C%2Fve-anchor%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[i(E,{items:[{text:"基本用法",value:"基本用法"},{text:"数据驱动",value:"数据驱动"},{text:"默认插槽",value:"默认插槽"}],offset:"70"},{default:l((()=>[i(d,{tag:"li"},{default:l((()=>[b])),_:1})])),_:1})])),_:1})])}]]);const P=n("命名锚点 Anchor"),j=n("演示"),I=n("API"),k=n("Anchor Props"),z=n("AnchorItem Props"),J=(e("__pageData",{title:"命名锚点 Anchor",headers:[{level:1,title:"命名锚点 Anchor",slug:"命名锚点-anchor"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据驱动",slug:"数据驱动"},{level:3,title:"默认插槽",slug:"默认插槽"},{level:2,title:"API",slug:"api"},{level:3,title:"Anchor Props",slug:"anchor-props"},{level:3,title:"AnchorItem Props",slug:"anchoritem-props"}],frontmatter:{meta:{category:"Navigation 导航"}}}),{});e("default",Object.assign(J,{setup:e=>(e,o)=>{const r=c,s=u,h=f,g=A,B=d,C=v,x=E;return t(),a("div",null,[i(r,{id:"命名锚点-anchor",tabindex:"-1"},{default:l((()=>[P])),_:1}),i(s,{id:"演示",tabindex:"-1"},{default:l((()=>[j])),_:1}),i(g,null,{default:l((()=>[i(h,{cols:"12",md:"12"},{default:l((()=>[i(g,null,{default:l((()=>[i(h,{cols:"12"},{default:l((()=>[i(p(_))])),_:1}),i(h,{cols:"12"},{default:l((()=>[i(p(y))])),_:1}),i(h,{cols:"12"},{default:l((()=>[i(p(W))])),_:1})])),_:1})])),_:1})])),_:1}),i(s,{id:"api",tabindex:"-1"},{default:l((()=>[I])),_:1}),i(B,{id:"anchor-props",tabindex:"-1"},{default:l((()=>[k])),_:1}),i(x,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"active-color",default:"!primary!",type:"string",descriptions:[{language:"zh",name:"activeColor",description:"激活时的颜色",source:"anchor"}],description:"激活时的颜色"},{name:"items",type:"array",descriptions:[{language:"zh",name:"items",description:"锚点项",source:"anchor"}],description:"锚点项"},{name:"offset",source:"named-anchor",default:12,type:"string | number",descriptions:[]},{name:"scroll-target",source:"named-anchor",type:"string | object",descriptions:[]}]},{"item.type":l((({item:e})=>[i(C,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[n(m(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[i(C,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[n(m("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),i(B,{id:"anchoritem-props",tabindex:"-1"},{default:l((()=>[z])),_:1}),i(x,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"active-color",default:"!primary!",type:"string",descriptions:[{language:"zh",name:"activeColor",description:"激活时的颜色",source:"anchor-item"}],description:"激活时的颜色"},{name:"text",type:"string",descriptions:[{language:"zh",name:"text",description:"文本",source:"anchor-item"}],description:"文本"},{name:"value",source:"named-anchor-item",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[i(C,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[n(m(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[i(C,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[n(m("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1})])}}))}}}));
