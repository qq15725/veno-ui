import{o as k,c as B,l as y,_ as g,q as m,s as E,u as e,v as t,a8 as V,G as b,ab as z,h as M,j as w,az as x,av as A,aw as h,x as n,ao as j,ap as N,Z as W,D as I,aj as S,$ as T,H as G,d as R,R as U,n as Z,T as J,I as C,J as F,k as L,C as O}from"./app.82309895.js";import{_ as D}from"./Demo.971567a7.js";const q={viewBox:"0 0 24 24"},K=y("path",{fill:"currentColor",d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1),Q=[K];function X(d,u){return k(),B("svg",q,Q)}var Y={name:"MdiDelete",render:X};const e2={viewBox:"0 0 24 24"},t2=y("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"},null,-1),n2=[t2];function o2(d,u){return k(),B("svg",e2,n2)}var a2={name:"MdiPlus",render:o2};const s2={};function i2(d,u,f,v,r,c){const o=b,a=z,i=M,l=w,s=x,_=D;return m(),E("div",null,[e(_,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/menu/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20anchor%3D%22bottom%20end%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button-group%20divided%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20text%3D%22Submit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%20icon%3D%22%24dropdown%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list%20%40click%3D%22isActive.value%20%3D%20false%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-plus%22%20text%3D%22%E6%96%B0%E5%A2%9E%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-delete%22%20text%3D%22%E5%88%A0%E9%99%A4%22%20link%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,{anchor:"bottom end"},{activator:t(({props:p})=>[e(a,{divided:""},{default:t(()=>[e(o,{text:"Submit"}),e(o,V(p,{icon:"$dropdown"}),null,16)]),_:2},1024)]),default:t(({isActive:p})=>[e(l,{onClick:$=>p.value=!1},{default:t(()=>[e(i,{"prepend-icon":a2,text:"\u65B0\u589E",link:""}),e(i,{"prepend-icon":Y,text:"\u5220\u9664",link:""})]),_:2},1032,["onClick"])]),_:1})]),_:1})])}var l2=g(s2,[["render",i2]]);const c2={},_2=n("Click Me"),d2=n("\u9009\u98791"),u2=n("\u9009\u98793"),r2=n("\u9009\u98794"),p2=n("\u9009\u98792");function v2(d,u,f,v,r,c){const o=b,a=M,i=w,l=x,s=D;return m(),E("div",null,[e(s,{title:"\u5D4C\u5957",slug:"\u5D4C\u5957",file:"/packages/veno-ui/src/components/menu/docs/nested.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EClick%20Me%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%3Cve-menu%20anchor%3D%22end%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%3E%E9%80%89%E9%A1%B91%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B93%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B94%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-menu%3E%0A%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B92%3C%2Fve-list-item%3E%0A%20%20%20%20%3C%2Fve-list%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(l,null,{activator:t(({props:_})=>[e(o,A(h(_)),{default:t(()=>[_2]),_:2},1040)]),default:t(()=>[e(i,null,{default:t(()=>[e(l,{anchor:"end"},{activator:t(({props:_})=>[e(a,A(h(_)),{default:t(()=>[d2]),_:2},1040)]),default:t(()=>[e(i,null,{default:t(()=>[e(a,null,{default:t(()=>[u2]),_:1}),e(a,null,{default:t(()=>[r2]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[p2]),_:1})]),_:1})]),_:1})]),_:1})])}var m2=g(c2,[["render",v2]]);const E2={},f2=n("Hover"),C2=n("\u91CD\u7F6E"),A2=n("\u786E\u8BA4");function h2(d,u,f,v,r,c){const o=b,a=j,i=N,l=W,s=I,_=S,p=T,$=x,P=D;return m(),E("div",null,[e(P,{title:"\u60AC\u505C\u65F6\u6253\u5F00",slug:"\u60AC\u505C\u65F6\u6253\u5F00",file:"/packages/veno-ui/src/components/menu/docs/open-on-hover.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20open-on-hover%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EHover%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-card%20width%3D%22180%22%3E%0A%20%20%20%20%20%20%3Cve-card-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-checkbox-group%20hide-details%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22%3E%2020000%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22%3E%2030000%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-checkbox-group%3E%0A%20%20%20%20%20%20%3C%2Fve-card-text%3E%0A%0A%20%20%20%20%20%20%3Cve-divider%20%2F%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cve-card-actions%20class%3D%22justify-center%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20size%3D%22sm%22%20class%3D%22mr-3%22%3E%E9%87%8D%E7%BD%AE%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20size%3D%22sm%22%20color%3D%22primary%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card-actions%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e($,{"open-on-hover":""},{activator:t(({props:H})=>[e(o,A(h(H)),{default:t(()=>[f2]),_:2},1040)]),default:t(()=>[e(p,{width:"180"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{"hide-details":""},{default:t(()=>[e(a,{value:"> 20000"}),e(a,{value:"> 30000"})]),_:1})]),_:1}),e(s),e(_,{class:"justify-center"},{default:t(()=>[e(o,{size:"sm",class:"mr-3"},{default:t(()=>[C2]),_:1}),e(o,{size:"sm",color:"primary"},{default:t(()=>[A2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}var g2=g(E2,[["render",h2]]);const b2=n("\u83DC\u5355 Menu"),x2=n("\u6F14\u793A"),D2=n("API"),$2=n("Menu Props"),F2=n("Menu Events"),M2={title:"\u83DC\u5355 Menu",headers:[{level:1,title:"\u83DC\u5355 Menu",slug:"\u83DC\u5355-menu"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u60AC\u505C\u65F6\u6253\u5F00",slug:"\u60AC\u505C\u65F6\u6253\u5F00"},{level:3,title:"\u5D4C\u5957",slug:"\u5D4C\u5957"},{level:2,title:"API",slug:"api"},{level:3,title:"Menu Props",slug:"menu-props"},{level:3,title:"Menu Events",slug:"menu-events"}],frontmatter:{category:"Navigation \u5BFC\u822A"}},k2={},w2=Object.assign(k2,{setup(d){return(u,f)=>{const v=G,r=R,c=L,o=U,a=Z,i=O,l=J;return m(),E("div",null,[e(v,{id:"\u83DC\u5355-menu",tabindex:"-1"},{default:t(()=>[b2]),_:1}),e(r,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[x2]),_:1}),e(o,null,{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(C(l2))]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(C(m2))]),_:1})]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(C(g2))]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id:"api",tabindex:"-1"},{default:t(()=>[D2]),_:1}),e(a,{id:"menu-props",tabindex:"-1"},{default:t(()=>[$2]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",default:!1,type:"boolean",descriptions:[]},{name:"id",type:"string",descriptions:[]},{name:"transition",source:"transition",default:{component:{name:"ve-menu-transition",props:{mode:{},origin:{default:"top center 0"}}}},type:"boolean | string | object",descriptions:[{language:"zh",name:"transition",description:"\u8FC7\u6E21\u52A8\u753B",source:"transition"}],description:"\u8FC7\u6E21\u52A8\u753B"}]},{"item.type":t(({item:s})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(F(s.type),1)]),_:2},1024)]),"item.default":t(({item:s})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(F(typeof s.default=="string"?s.default.replace(/!/g,"'"):JSON.stringify(s.default,null,2)),1)]),_:2},1024)]),_:1}),e(a,{id:"menu-events",tabindex:"-1"},{default:t(()=>[F2]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{M2 as __pageData,w2 as default};
