import{_ as b,B as g,x as P,b as $,d as k,ag as x,Q as y,U as w,m as H,D as I,M as V,n as z,H as W,a as j,e as N,R as T,g as O,T as R}from"./app.f67f7891.js";import{_ as D}from"./Demo.8857ba17.js";import{W as r,_ as m,n as e,Y as t,m as G,a8 as f,a9 as h,P as n,u as C}from"./vendor.38bd3902.js";const L={};function S(v,E,A,p,_,l){const o=g,s=P,a=$,c=k,u=x,i=D;return r(),m("div",null,[e(i,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/menu/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20anchor%3D%22bottom%20end%22%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button-group%20divided%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20text%3D%22Submit%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%20icon%3D%22%24dropdown%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20isActive%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list%20%40click%3D%22isActive.value%20%3D%20false%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-plus%22%20text%3D%22%E6%96%B0%E5%A2%9E%22%20link%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cve-list-item%20prepend-icon%3D%22mdi-delete%22%20text%3D%22%E5%88%A0%E9%99%A4%22%20link%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(u,{anchor:"bottom end"},{activator:t(({props:d})=>[e(s,{divided:""},{default:t(()=>[e(o,{text:"Submit"}),e(o,G(d,{icon:"$dropdown"}),null,16)]),_:2},1024)]),default:t(({isActive:d})=>[e(c,{onClick:F=>d.value=!1},{default:t(()=>[e(a,{"prepend-icon":"mdi-plus",text:"\u65B0\u589E",link:""}),e(a,{"prepend-icon":"mdi-delete",text:"\u5220\u9664",link:""})]),_:2},1032,["onClick"])]),_:1})]),_:1})])}var Q=b(L,[["render",S]]);const U={},Y=n("Click Me"),q=n("\u9009\u98791"),J=n("\u9009\u98793"),K=n("\u9009\u98794"),X=n("\u9009\u98792");function Z(v,E,A,p,_,l){const o=g,s=$,a=k,c=x,u=D;return r(),m("div",null,[e(u,{title:"\u5D4C\u5957",slug:"\u5D4C\u5957",file:"/packages/veno-ui/src/components/menu/docs/nested.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EClick%20Me%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%3Cve-menu%20anchor%3D%22end%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%20v-bind%3D%22props%22%3E%E9%80%89%E9%A1%B91%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%20%20%20%20%3Cve-list%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B93%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B94%3C%2Fve-list-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-list%3E%0A%20%20%20%20%20%20%3C%2Fve-menu%3E%0A%20%20%20%20%20%20%3Cve-list-item%3E%E9%80%89%E9%A1%B92%3C%2Fve-list-item%3E%0A%20%20%20%20%3C%2Fve-list%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(c,null,{activator:t(({props:i})=>[e(o,f(h(i)),{default:t(()=>[Y]),_:2},1040)]),default:t(()=>[e(a,null,{default:t(()=>[e(c,{anchor:"end"},{activator:t(({props:i})=>[e(s,f(h(i)),{default:t(()=>[q]),_:2},1040)]),default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[J]),_:1}),e(s,null,{default:t(()=>[K]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[X]),_:1})]),_:1})]),_:1})]),_:1})])}var e2=b(U,[["render",Z]]);const t2={},n2=n("Hover"),o2=n("\u91CD\u7F6E"),s2=n("\u786E\u8BA4");function a2(v,E,A,p,_,l){const o=g,s=y,a=w,c=H,u=I,i=V,d=z,F=x,B=D;return r(),m("div",null,[e(B,{title:"\u60AC\u505C\u65F6\u6253\u5F00",slug:"\u60AC\u505C\u65F6\u6253\u5F00",file:"/packages/veno-ui/src/components/menu/docs/open-on-hover.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-menu%20open-on-hover%3E%0A%20%20%20%20%3Ctemplate%20%23activator%3D%22%7B%20props%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-button%20v-bind%3D%22props%22%3EHover%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-card%20width%3D%22180%22%3E%0A%20%20%20%20%20%20%3Cve-card-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-checkbox-group%20hide-details%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22%3E%2020000%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22%3E%2030000%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fve-checkbox-group%3E%0A%20%20%20%20%20%20%3C%2Fve-card-text%3E%0A%0A%20%20%20%20%20%20%3Cve-divider%20%2F%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cve-card-actions%20class%3D%22justify-center%22%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20size%3D%22sm%22%20class%3D%22mr-3%22%3E%E9%87%8D%E7%BD%AE%3C%2Fve-button%3E%0A%20%20%20%20%20%20%20%20%3Cve-button%20size%3D%22sm%22%20color%3D%22primary%22%3E%E7%A1%AE%E8%AE%A4%3C%2Fve-button%3E%0A%20%20%20%20%20%20%3C%2Fve-card-actions%3E%0A%20%20%20%20%3C%2Fve-card%3E%0A%20%20%3C%2Fve-menu%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(F,{"open-on-hover":""},{activator:t(({props:M})=>[e(o,f(h(M)),{default:t(()=>[n2]),_:2},1040)]),default:t(()=>[e(d,{width:"180"},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{"hide-details":""},{default:t(()=>[e(s,{value:"> 20000"}),e(s,{value:"> 30000"})]),_:1})]),_:1}),e(u),e(i,{class:"justify-center"},{default:t(()=>[e(o,{size:"sm",class:"mr-3"},{default:t(()=>[o2]),_:1}),e(o,{size:"sm",color:"primary"},{default:t(()=>[s2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}var l2=b(t2,[["render",a2]]);const i2=n("\u83DC\u5355 Menu"),c2=n("\u6F14\u793A"),_2=n("API"),u2=n("Menu Props"),d2=n("Menu Events"),E2={title:"\u83DC\u5355 Menu",headers:[{level:1,title:"\u83DC\u5355 Menu",slug:"\u83DC\u5355-menu"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u60AC\u505C\u65F6\u6253\u5F00",slug:"\u60AC\u505C\u65F6\u6253\u5F00"},{level:3,title:"\u5D4C\u5957",slug:"\u5D4C\u5957"},{level:2,title:"API",slug:"api"},{level:3,title:"Menu Props",slug:"menu-props"},{level:3,title:"Menu Events",slug:"menu-events"}],frontmatter:{category:"Navigation \u5BFC\u822A"}},p2={},A2=Object.assign(p2,{setup(v){return(E,A)=>{const p=W,_=j,l=N,o=T,s=O,a=R;return r(),m("div",null,[e(p,{id:"\u83DC\u5355-menu",tabindex:"-1"},{default:t(()=>[i2]),_:1}),e(_,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[c2]),_:1}),e(o,null,{default:t(()=>[e(l,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(C(Q))]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(C(e2))]),_:1})]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(C(l2))]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{id:"api",tabindex:"-1"},{default:t(()=>[_2]),_:1}),e(s,{id:"menu-props",tabindex:"-1"},{default:t(()=>[u2]),_:1}),e(a,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"model-value",type:"boolean",default:"false"},{name:"id",type:"string"},{name:"transition",source:"transition",type:"boolean | string | object",default:'{"component":{"name":"ve-menu-transition","props":{"mode":{},"origin":{"default":"top center 0"}}}}'}]}),e(s,{id:"menu-events",tabindex:"-1"},{default:t(()=>[d2]),_:1}),e(a,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{E2 as __pageData,A2 as default};
