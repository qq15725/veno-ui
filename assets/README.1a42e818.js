import{_ as g,q as _,s as m,u as e,v as t,ad as W,$ as h,S as b,ae as A,x as n,af as H,Y as P,ag as V,ah as B,ai as M,Z as F,aj as k,a7 as w,D as T,G as S,H as N,d as U,R as J,n as O,T as I,I as f,J as o,k as Z,C as L}from"./app.a96df827.js";import{_ as x}from"./Demo.bd4056a9.js";const R={};function j(C,c,v,u,p,d){const s=W,r=h,i=x;return _(),m("div",null,[e(i,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/card/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20elevation%3D%228%22%20title%3D%22%E6%A0%87%E9%A2%98%22%20subtitle%3D%22%E5%AD%90%E6%A0%87%E9%A2%98%22%20text%3D%22%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%3Ctemplate%20%23media%3E%0A%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%225%20%2F%203%22%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(r,{elevation:"8",title:"\u6807\u9898",subtitle:"\u5B50\u6807\u9898",text:"\u5185\u5BB9"},{media:t(()=>[e(s,{"aspect-ratio":5/3,src:"https://picsum.photos/id/11/500/300"})]),_:1})]),_:1})])}var z=g(R,[["render",j]]);const q={};function G(C,c,v,u,p,d){const s=h,r=b,i=x;return _(),m("div",null,[e(i,{title:"\u5361\u7247\u5F62\u72B6",slug:"\u5361\u7247\u5F62\u72B6",file:"/packages/veno-ui/src/components/card/docs/shape.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22tile%22%20text%3D%22Tile%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22rounded%22%20text%3D%22Rounded%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22pill%22%20text%3D%22Pill%22%20border%20%2F%3E%20%20%0A%20%20%20%20%3Cve-card%20shape%3D%22circle%22%20text%3D%22Circle%22%20border%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(r,{gutter:"md",align:"center"},{default:t(()=>[e(s,{shape:"tile",text:"Tile",border:""}),e(s,{shape:"rounded",text:"Rounded",border:""}),e(s,{shape:"pill",text:"Pill",border:""}),e(s,{shape:"circle",text:"Circle",border:""})]),_:1})]),_:1})])}var Y=g(q,[["render",G]]);const K={};function Q(C,c,v,u,p,d){const s=h,r=x;return _(),m("div",null,[e(r,{title:"\u53EF\u70B9\u51FB",slug:"\u53EF\u70B9\u51FB",file:"/packages/veno-ui/src/components/card/docs/click.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20title%3D%22%E7%94%A8%E6%88%B7%E6%80%BB%E6%95%B0%EF%BC%9A100%22%20border%20%40click%3D%22%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,{title:"\u7528\u6237\u603B\u6570\uFF1A100",border:"",onClick:c[0]||(c[0]=()=>{})})]),_:1})])}var X=g(K,[["render",Q]]);const ee={},te=A("div",{class:"px-3 pt-3"},"Media",-1),ae=n("Prepend"),ne=n("Title"),ie=n("Subtitle"),se=n("Append"),re=n("Text"),oe=n("Actions");function de(C,c,v,u,p,d){const s=H,r=P,i=V,l=B,a=M,y=F,E=k,D=h,$=x;return _(),m("div",null,[e($,{title:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",slug:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",file:"/packages/veno-ui/src/components/card/docs/slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20border%3E%0A%20%20%20%20%3Cdiv%20class%3D%22px-3%20pt-3%22%3EMedia%3C%2Fdiv%3E%0A%20%20%20%20%3Cve-card-header%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3EPrepend%3C%2Fve-card-avatar%3E%0A%20%20%20%20%20%20%3Cve-card-header-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-title%3ETitle%3C%2Fve-card-title%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-subtitle%3ESubtitle%3C%2Fve-card-subtitle%3E%0A%20%20%20%20%20%20%3C%2Fve-card-header-text%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3EAppend%3C%2Fve-card-avatar%3E%0A%20%20%20%20%3C%2Fve-card-header%3E%0A%20%20%20%20%3Cve-card-text%3EText%3C%2Fve-card-text%3E%0A%20%20%20%20%3Cve-card-actions%3EActions%3C%2Fve-card-actions%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(D,{border:""},{default:t(()=>[te,e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[ae]),_:1}),e(l,null,{default:t(()=>[e(r,null,{default:t(()=>[ne]),_:1}),e(i,null,{default:t(()=>[ie]),_:1})]),_:1}),e(s,null,{default:t(()=>[se]),_:1})]),_:1}),e(y,null,{default:t(()=>[re]),_:1}),e(E,null,{default:t(()=>[oe]),_:1})]),_:1})]),_:1})])}var le=g(ee,[["render",de]]);const ce={};function pe(C,c,v,u,p,d){const s=h,r=b,i=x;return _(),m("div",null,[e(i,{title:"\u5361\u7247\u5BC6\u5EA6",slug:"\u5361\u7247\u5BC6\u5EA6",file:"/packages/veno-ui/src/components/card/docs/density.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-low%22%20title%3D%22UltraLow%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22low%22%20title%3D%22Low%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22medium%22%20title%3D%22Medium%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22high%22%20title%3D%22High%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-high%22%20title%3D%22UltraHigh%22%20border%20%2F%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(r,{gutter:"md",align:"center",cols:"12"},{default:t(()=>[e(s,{density:"ultra-low",title:"UltraLow",border:""}),e(s,{density:"low",title:"Low",border:""}),e(s,{density:"medium",title:"Medium",border:""}),e(s,{density:"high",title:"High",border:""}),e(s,{density:"ultra-high",title:"UltraHigh",border:""})]),_:1})]),_:1})])}var ue=g(ce,[["render",pe]]);const _e={};function me(C,c,v,u,p,d){const s=h,r=x;return _(),m("div",null,[e(r,{title:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",slug:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",file:"/packages/veno-ui/src/components/card/docs/personal-card-concise.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20title%3D%22%E8%89%BA%E6%9C%AF%E5%AE%B6%22%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%20%20hover%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(s,{title:"\u827A\u672F\u5BB6",subtitle:"\u5FAE\u4FE1\u53F7\uFF1Axxxxxx","prepend-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8",hover:""})]),_:1})])}var Ce=g(_e,[["render",me]]);const ve={},fe=A("span",null,"\u827A\u672F\u5BB6",-1),ge=A("span",{class:"text-grey mr-3"},"\u5730 \u533A",-1),he=A("span",null,"\u6E56\u5357 \u957F\u6C99",-1);function xe(C,c,v,u,p,d){const s=w,r=T,i=F,l=b,a=S,y=h,E=x;return _(),m("div",null,[e(E,{title:"\u4E2A\u4EBA\u540D\u7247",slug:"\u4E2A\u4EBA\u540D\u7247",file:"/packages/veno-ui/src/components/card/docs/personal-card.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20append-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23title%3E%0A%20%20%20%20%20%20%3Cspan%3E%E8%89%BA%E6%9C%AF%E5%AE%B6%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cve-icon%0A%20%20%20%20%20%20%20%20right%0A%20%20%20%20%20%20%20%20color%3D%22info%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C4A4%2C4%200%200%2C1%2016%2C8A4%2C4%200%200%2C1%2012%2C12A4%2C4%200%200%2C1%208%2C8A4%2C4%200%200%2C1%2012%2C4M12%2C14C16.42%2C14%2020%2C15.79%2020%2C18V20H4V18C4%2C15.79%207.58%2C14%2012%2C14Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-divider%20%2F%3E%0A%0A%20%20%20%20%3CVeCardText%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22text-grey%20mr-3%22%3E%E5%9C%B0%20%E5%8C%BA%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%B9%96%E5%8D%97%20%E9%95%BF%E6%B2%99%3C%2Fspan%3E%0A%20%20%20%20%3C%2FVeCardText%3E%0A%0A%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20class%3D%22mr-3%22%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C1L8%2C5H11V14H13V5H16M18%2C23H6C4.89%2C23%204%2C22.1%204%2C21V9A2%2C2%200%200%2C1%206%2C7H9V9H6V21H18V9H15V7H18A2%2C2%200%200%2C1%2020%2C9V21A2%2C2%200%200%2C1%2018%2C23Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C3C6.5%2C3%202%2C6.58%202%2C11C2.05%2C13.15%203.06%2C15.17%204.75%2C16.5C4.75%2C17.1%204.33%2C18.67%202%2C21C4.37%2C20.89%206.64%2C20%208.47%2C18.5C9.61%2C18.83%2010.81%2C19%2012%2C19C17.5%2C19%2022%2C15.42%2022%2C11C22%2C6.58%2017.5%2C3%2012%2C3M12%2C17C7.58%2C17%204%2C14.31%204%2C11C4%2C7.69%207.58%2C5%2012%2C5C16.42%2C5%2020%2C7.69%2020%2C11C20%2C14.31%2016.42%2C17%2012%2C17Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(y,{subtitle:"\u5FAE\u4FE1\u53F7\uFF1Axxxxxx","append-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8"},{title:t(()=>[fe,e(s,{right:"",color:"info",icon:"svg:M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"})]),actions:t(()=>[e(l),e(a,{class:"mr-3",variant:"text",icon:"svg:M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"}),e(a,{variant:"text",icon:"svg:M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"})]),default:t(()=>[e(r),e(i,null,{default:t(()=>[ge,he]),_:1})]),_:1})]),_:1})])}var Ae=g(ve,[["render",xe]]);const ye=n("\u5361\u7247 Card"),Ee=n("\u6F14\u793A"),be=n("API"),Fe=n("Card Props"),De=n("CardActions Props"),$e=n("CardAvatar Props"),We=n("CardHeader Props"),He=n("CardHeaderText Props"),Pe=n("CardImage Props"),Ve=n("CardSubtitle Props"),Be=n("CardText Props"),Me=n("CardTitle Props"),Se={title:"\u5361\u7247 Card",headers:[{level:1,title:"\u5361\u7247 Card",slug:"\u5361\u7247-card"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5361\u7247\u5BC6\u5EA6",slug:"\u5361\u7247\u5BC6\u5EA6"},{level:3,title:"\u5361\u7247\u5F62\u72B6",slug:"\u5361\u7247\u5F62\u72B6"},{level:3,title:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",slug:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247"},{level:3,title:"\u53EF\u70B9\u51FB",slug:"\u53EF\u70B9\u51FB"},{level:3,title:"\u4E2A\u4EBA\u540D\u7247",slug:"\u4E2A\u4EBA\u540D\u7247"},{level:3,title:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",slug:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09"},{level:2,title:"API",slug:"api"},{level:3,title:"Card Props",slug:"card-props"},{level:3,title:"CardActions Props",slug:"cardactions-props"},{level:3,title:"CardAvatar Props",slug:"cardavatar-props"},{level:3,title:"CardHeader Props",slug:"cardheader-props"},{level:3,title:"CardHeaderText Props",slug:"cardheadertext-props"},{level:3,title:"CardImage Props",slug:"cardimage-props"},{level:3,title:"CardSubtitle Props",slug:"cardsubtitle-props"},{level:3,title:"CardText Props",slug:"cardtext-props"},{level:3,title:"CardTitle Props",slug:"cardtitle-props"}],frontmatter:{meta:{category:"Data \u6570\u636E\u5C55\u793A"}}},ke={},Ne=Object.assign(ke,{setup(C){return(c,v)=>{const u=N,p=U,d=Z,s=J,r=O,i=L,l=I;return _(),m("div",null,[e(u,{id:"\u5361\u7247-card",tabindex:"-1"},{default:t(()=>[ye]),_:1}),e(p,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[Ee]),_:1}),e(s,null,{default:t(()=>[e(d,{cols:"12",md:"6"},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(f(z))]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(f(Y))]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(f(X))]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(f(le))]),_:1})]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(f(ue))]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(f(Ce))]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(f(Ae))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{id:"api",tabindex:"-1"},{default:t(()=>[be]),_:1}),e(r,{id:"card-props",tabindex:"-1"},{default:t(()=>[Fe]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"link",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"hover",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"image",source:"card",type:"string",descriptions:[]},{name:"prepend-avatar",source:"card",type:"string",descriptions:[]},{name:"prepend-icon",source:"card",type:"string",descriptions:[]},{name:"append-avatar",source:"card",type:"string",descriptions:[]},{name:"append-icon",source:"card",type:"string",descriptions:[]},{name:"title",source:"card",type:"string",descriptions:[]},{name:"subtitle",source:"card",type:"string",descriptions:[]},{name:"divided",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"text",source:"card",type:"string",descriptions:[]},{name:"ripple",source:"alert",default:!0,type:"boolean",descriptions:[]},{name:"href",source:"alert",type:"string",descriptions:[]},{name:"replace",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"to",source:"alert",type:"string | object",descriptions:[]},{name:"loading",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"disabled",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E",source:"tag"}],description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"card",default:"!contained!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"card",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardactions-props",tabindex:"-1"},{default:t(()=>[De]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardavatar-props",tabindex:"-1"},{default:t(()=>[$e]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardheader-props",tabindex:"-1"},{default:t(()=>[We]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardheadertext-props",tabindex:"-1"},{default:t(()=>[He]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardimage-props",tabindex:"-1"},{default:t(()=>[Pe]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardsubtitle-props",tabindex:"-1"},{default:t(()=>[Ve]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardtext-props",tabindex:"-1"},{default:t(()=>[Be]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"cardtitle-props",tabindex:"-1"},{default:t(()=>[Me]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(a.type),1)]),_:2},1024)]),"item.default":t(({item:a})=>[e(i,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[n(o(typeof a.default=="string"?a.default.replace(/!/g,"'"):JSON.stringify(a.default,null,2)),1)]),_:2},1024)]),_:1})])}}});export{Se as __pageData,Ne as default};
