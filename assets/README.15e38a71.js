import{_ as v,J as g,al as f,p as y,q as x,H as A,C as b,P as z,a as C,e as E,R as F,g as w,T as L}from"./app.9edf3da3.js";import{_ as P}from"./Demo.e0744a95.js";import{X as r,Y as m,v as e,a0 as t,Z as B,u as D,Q as n}from"./vendor.960e51e5.js";const $={},V=B("div",{style:{height:"250px"}},null,-1);function W(p,u,h,d,c,_){const a=g,o=f,s=y,i=x,l=P;return r(),m("div",null,[e(l,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/lazy/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20%3Aheight%3D%22200%22%3E%0A%20%20%20%20%3Cve-card-text%20style%3D%22overflow-y%3A%20auto%3B%20max-height%3A%20100%25%3B%22%3E%0A%20%20%20%20%20%20%3Cdiv%20style%3D%22height%3A%20250px%3B%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cve-lazy%3E%0A%20%20%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%22500%20%2F%20300%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fve-lazy%3E%0A%20%20%20%20%3C%2Fve-card-text%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(i,{height:200},{default:t(()=>[e(s,{style:{"overflow-y":"auto","max-height":"100%"}},{default:t(()=>[V,e(o,null,{default:t(()=>[e(a,{src:"https://picsum.photos/id/11/500/300","aspect-ratio":500/300})]),_:1})]),_:1})]),_:1})]),_:1})])}var k=v($,[["render",W]]);const H=n("\u61D2\u52A0\u8F7D Lazy"),T=n("lazy"),j=n(" \u7EC4\u4EF6\u3002"),I=n("\u6F14\u793A"),N=n("API"),O=n("Lazy Props"),R=n("Lazy Events"),U={title:"\u61D2\u52A0\u8F7D Lazy",headers:[{level:1,title:"\u61D2\u52A0\u8F7D Lazy",slug:"\u61D2\u52A0\u8F7D-lazy"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"API",slug:"api"},{level:3,title:"Lazy Props",slug:"lazy-props"},{level:3,title:"Lazy Events",slug:"lazy-events"}],frontmatter:{category:"Others \u5176\u4ED6\u7EC4\u4EF6"}},q={},X=Object.assign(q,{setup(p){return(u,h)=>{const d=A,c=b,_=z,a=C,o=E,s=F,i=w,l=L;return r(),m("div",null,[e(d,{id:"\u61D2\u52A0\u8F7D-lazy",tabindex:"-1"},{default:t(()=>[H]),_:1}),e(_,null,{default:t(()=>[e(c,{color:"secondary",inline:""},{default:t(()=>[T]),_:1}),j]),_:1}),e(a,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(s,null,{default:t(()=>[e(o,{cols:"12",md:"12"},{default:t(()=>[e(s,null,{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(D(k))]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{id:"api",tabindex:"-1"},{default:t(()=>[N]),_:1}),e(i,{id:"lazy-props",tabindex:"-1"},{default:t(()=>[O]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"model-value",type:"boolean",default:"false"},{name:"options",type:"object",default:"{}"},{name:"height",source:"dimension",type:"number | string"},{name:"max-height",source:"dimension",type:"number | string"},{name:"max-width",source:"dimension",type:"number | string"},{name:"min-height",source:"dimension",type:"number | string"},{name:"min-width",source:"dimension",type:"number | string"},{name:"width",source:"dimension",type:"number | string"},{name:"tag",source:"tag",type:"string",default:'"div"',description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"transition",source:"transition",type:"boolean | string | object",default:`{
  "component": {
    "name": "ve-fade-transition",
    "props": {
      "mode": {},
      "origin": {
        "default": "top center 0"
      }
    }
  }
}`}]}),e(i,{id:"lazy-events",tabindex:"-1"},{default:t(()=>[R]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{U as __pageData,X as default};
