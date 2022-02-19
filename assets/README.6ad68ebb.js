import{_ as C,z as $,n as v,S as b,F as W,l as B,G as H,J as P,K as V,m as F,M as T,t as M,D as k,B as w,H as I,a as S,e as Z,R as L,g as R,T as U}from"./app.f67f7891.js";import{_ as g}from"./Demo.8857ba17.js";import{W as c,_ as p,n as e,Y as t,Z as A,P as o,u as _}from"./vendor.38bd3902.js";const N={};function j(u,d,m,l,i,s){const a=$,n=v,r=g;return c(),p("div",null,[e(r,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/card/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20elevation%3D%228%22%20title%3D%22%E6%A0%87%E9%A2%98%22%20subtitle%3D%22%E5%AD%90%E6%A0%87%E9%A2%98%22%20text%3D%22%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%3Ctemplate%20%23media%3E%0A%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%225%20%2F%203%22%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,{elevation:"8",title:"\u6807\u9898",subtitle:"\u5B50\u6807\u9898",text:"\u5185\u5BB9"},{media:t(()=>[e(a,{"aspect-ratio":5/3,src:"https://picsum.photos/id/11/500/300"})]),_:1})]),_:1})])}var z=C(N,[["render",j]]);const G={};function J(u,d,m,l,i,s){const a=v,n=b,r=g;return c(),p("div",null,[e(r,{title:"\u5361\u7247\u5F62\u72B6",slug:"\u5361\u7247\u5F62\u72B6",file:"/packages/veno-ui/src/components/card/docs/shape.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22tile%22%20text%3D%22Tile%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22rounded%22%20text%3D%22Rounded%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22pill%22%20text%3D%22Pill%22%20border%20%2F%3E%20%20%0A%20%20%20%20%3Cve-card%20shape%3D%22circle%22%20text%3D%22Circle%22%20border%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,{gutter:"md",align:"center"},{default:t(()=>[e(a,{shape:"tile",text:"Tile",border:""}),e(a,{shape:"rounded",text:"Rounded",border:""}),e(a,{shape:"pill",text:"Pill",border:""}),e(a,{shape:"circle",text:"Circle",border:""})]),_:1})]),_:1})])}var K=C(G,[["render",J]]);const O={};function Y(u,d,m,l,i,s){const a=v,n=g;return c(),p("div",null,[e(n,{title:"\u53EF\u70B9\u51FB",slug:"\u53EF\u70B9\u51FB",file:"/packages/veno-ui/src/components/card/docs/click.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20title%3D%22%E7%94%A8%E6%88%B7%E6%80%BB%E6%95%B0%EF%BC%9A100%22%20border%20%40click%3D%22%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,{title:"\u7528\u6237\u603B\u6570\uFF1A100",border:"",onClick:d[0]||(d[0]=()=>{})})]),_:1})])}var q=C(O,[["render",Y]]);const Q={},X=A("div",{class:"px-5 pt-3"},"media \u63D2\u69FD",-1),ee=o("prepend \u63D2\u69FD"),te=o("title \u63D2\u69FD"),ae=o("subtitle \u63D2\u69FD"),ne=o("append \u63D2\u69FD"),re=o("text \u63D2\u69FD"),oe=o("actions \u63D2\u69FD");function se(u,d,m,l,i,s){const a=W,n=B,r=H,f=P,h=V,x=F,E=T,y=v,D=g;return c(),p("div",null,[e(D,{title:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",slug:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",file:"/packages/veno-ui/src/components/card/docs/slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20border%3E%0A%20%20%20%20%3Cdiv%20class%3D%22px-5%20pt-3%22%3Emedia%20%E6%8F%92%E6%A7%BD%3C%2Fdiv%3E%0A%20%20%20%20%3Cve-card-header%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3Eprepend%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-avatar%3E%0A%20%20%20%20%20%20%3Cve-card-header-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-title%3Etitle%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-title%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-subtitle%3Esubtitle%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-subtitle%3E%0A%20%20%20%20%20%20%3C%2Fve-card-header-text%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3Eappend%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-avatar%3E%0A%20%20%20%20%3C%2Fve-card-header%3E%0A%20%20%20%20%3Cve-card-text%3Etext%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-text%3E%0A%20%20%20%20%3Cve-card-actions%3Eactions%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-actions%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(y,{border:""},{default:t(()=>[X,e(h,null,{default:t(()=>[e(a,null,{default:t(()=>[ee]),_:1}),e(f,null,{default:t(()=>[e(n,null,{default:t(()=>[te]),_:1}),e(r,null,{default:t(()=>[ae]),_:1})]),_:1}),e(a,null,{default:t(()=>[ne]),_:1})]),_:1}),e(x,null,{default:t(()=>[re]),_:1}),e(E,null,{default:t(()=>[oe]),_:1})]),_:1})]),_:1})])}var de=C(Q,[["render",se]]);const ie={};function le(u,d,m,l,i,s){const a=v,n=b,r=g;return c(),p("div",null,[e(r,{title:"\u5361\u7247\u5BC6\u5EA6",slug:"\u5361\u7247\u5BC6\u5EA6",file:"/packages/veno-ui/src/components/card/docs/density.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-low%22%20title%3D%22UltraLow%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22low%22%20title%3D%22Low%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22medium%22%20title%3D%22Medium%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22high%22%20title%3D%22High%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-high%22%20title%3D%22UltraHigh%22%20border%20%2F%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,{gutter:"md",align:"center",cols:"12"},{default:t(()=>[e(a,{density:"ultra-low",title:"UltraLow",border:""}),e(a,{density:"low",title:"Low",border:""}),e(a,{density:"medium",title:"Medium",border:""}),e(a,{density:"high",title:"High",border:""}),e(a,{density:"ultra-high",title:"UltraHigh",border:""})]),_:1})]),_:1})])}var ce=C(ie,[["render",le]]);const pe={};function ue(u,d,m,l,i,s){const a=v,n=g;return c(),p("div",null,[e(n,{title:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",slug:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",file:"/packages/veno-ui/src/components/card/docs/personal-card-concise.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20title%3D%22%E8%89%BA%E6%9C%AF%E5%AE%B6%22%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%20%20hover%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(a,{title:"\u827A\u672F\u5BB6",subtitle:"\u5FAE\u4FE1\u53F7\uFF1Axxxxxx","prepend-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8",hover:""})]),_:1})])}var me=C(pe,[["render",ue]]);const _e={},Ce=A("span",null,"\u827A\u672F\u5BB6",-1),ve=A("span",{class:"text-grey mr-3"},"\u5730 \u533A",-1),ge=A("span",null,"\u6E56\u5357 \u957F\u6C99",-1);function he(u,d,m,l,i,s){const a=M,n=k,r=F,f=b,h=w,x=v,E=g;return c(),p("div",null,[e(E,{title:"\u4E2A\u4EBA\u540D\u7247",slug:"\u4E2A\u4EBA\u540D\u7247",file:"/packages/veno-ui/src/components/card/docs/personal-card.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20append-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23title%3E%0A%20%20%20%20%20%20%3Cspan%3E%E8%89%BA%E6%9C%AF%E5%AE%B6%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cve-icon%0A%20%20%20%20%20%20%20%20right%0A%20%20%20%20%20%20%20%20color%3D%22info%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C4A4%2C4%200%200%2C1%2016%2C8A4%2C4%200%200%2C1%2012%2C12A4%2C4%200%200%2C1%208%2C8A4%2C4%200%200%2C1%2012%2C4M12%2C14C16.42%2C14%2020%2C15.79%2020%2C18V20H4V18C4%2C15.79%207.58%2C14%2012%2C14Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-divider%20%2F%3E%0A%0A%20%20%20%20%3CVeCardText%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22text-grey%20mr-3%22%3E%E5%9C%B0%20%E5%8C%BA%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%B9%96%E5%8D%97%20%E9%95%BF%E6%B2%99%3C%2Fspan%3E%0A%20%20%20%20%3C%2FVeCardText%3E%0A%0A%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20class%3D%22mr-3%22%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C1L8%2C5H11V14H13V5H16M18%2C23H6C4.89%2C23%204%2C22.1%204%2C21V9A2%2C2%200%200%2C1%206%2C7H9V9H6V21H18V9H15V7H18A2%2C2%200%200%2C1%2020%2C9V21A2%2C2%200%200%2C1%2018%2C23Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C3C6.5%2C3%202%2C6.58%202%2C11C2.05%2C13.15%203.06%2C15.17%204.75%2C16.5C4.75%2C17.1%204.33%2C18.67%202%2C21C4.37%2C20.89%206.64%2C20%208.47%2C18.5C9.61%2C18.83%2010.81%2C19%2012%2C19C17.5%2C19%2022%2C15.42%2022%2C11C22%2C6.58%2017.5%2C3%2012%2C3M12%2C17C7.58%2C17%204%2C14.31%204%2C11C4%2C7.69%207.58%2C5%2012%2C5C16.42%2C5%2020%2C7.69%2020%2C11C20%2C14.31%2016.42%2C17%2012%2C17Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(x,{subtitle:"\u5FAE\u4FE1\u53F7\uFF1Axxxxxx","append-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8"},{title:t(()=>[Ce,e(a,{right:"",color:"info",icon:"svg:M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"})]),actions:t(()=>[e(f),e(h,{class:"mr-3",variant:"text",icon:"svg:M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"}),e(h,{variant:"text",icon:"svg:M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"})]),default:t(()=>[e(n),e(r,null,{default:t(()=>[ve,ge]),_:1})]),_:1})]),_:1})])}var Ae=C(_e,[["render",he]]);const fe=o("\u5361\u7247 Card"),xe=o("\u6F14\u793A"),Ee=o("API"),be=o("Card Props"),Fe=o("CardActions Props"),ye=o("CardAvatar Props"),De=o("CardHeader Props"),$e=o("CardHeaderText Props"),We=o("CardImage Props"),Be=o("CardSubtitle Props"),He=o("CardText Props"),Pe=o("CardTitle Props"),we={title:"\u5361\u7247 Card",headers:[{level:1,title:"\u5361\u7247 Card",slug:"\u5361\u7247-card"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5361\u7247\u5BC6\u5EA6",slug:"\u5361\u7247\u5BC6\u5EA6"},{level:3,title:"\u5361\u7247\u5F62\u72B6",slug:"\u5361\u7247\u5F62\u72B6"},{level:3,title:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247",slug:"\u7B80\u6D01\u7684\u4E2A\u4EBA\u540D\u7247"},{level:3,title:"\u53EF\u70B9\u51FB",slug:"\u53EF\u70B9\u51FB"},{level:3,title:"\u4E2A\u4EBA\u540D\u7247",slug:"\u4E2A\u4EBA\u540D\u7247"},{level:3,title:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09",slug:"\u6240\u6709\u53EF\u7528\u7684\u7EC4\u4EF6\uFF08\u63D2\u69FD\uFF09"},{level:2,title:"API",slug:"api"},{level:3,title:"Card Props",slug:"card-props"},{level:3,title:"CardActions Props",slug:"cardactions-props"},{level:3,title:"CardAvatar Props",slug:"cardavatar-props"},{level:3,title:"CardHeader Props",slug:"cardheader-props"},{level:3,title:"CardHeaderText Props",slug:"cardheadertext-props"},{level:3,title:"CardImage Props",slug:"cardimage-props"},{level:3,title:"CardSubtitle Props",slug:"cardsubtitle-props"},{level:3,title:"CardText Props",slug:"cardtext-props"},{level:3,title:"CardTitle Props",slug:"cardtitle-props"}],frontmatter:{meta:{category:"Data \u6570\u636E\u5C55\u793A"}}},Ve={},Ie=Object.assign(Ve,{setup(u){return(d,m)=>{const l=I,i=S,s=Z,a=L,n=R,r=U;return c(),p("div",null,[e(l,{id:"\u5361\u7247-card",tabindex:"-1"},{default:t(()=>[fe]),_:1}),e(i,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[xe]),_:1}),e(a,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(_(z))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_(K))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_(q))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_(de))]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(_(ce))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_(me))]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(_(Ae))]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{id:"api",tabindex:"-1"},{default:t(()=>[Ee]),_:1}),e(n,{id:"card-props",tabindex:"-1"},{default:t(()=>[be]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"link",source:"card",type:"boolean",default:"false"},{name:"hover",source:"card",type:"boolean",default:"false"},{name:"image",source:"card",type:"string"},{name:"prepend-avatar",source:"card",type:"string"},{name:"prepend-icon",source:"card",type:"string"},{name:"append-avatar",source:"card",type:"string"},{name:"append-icon",source:"card",type:"string"},{name:"title",source:"card",type:"string"},{name:"subtitle",source:"card",type:"string"},{name:"divided",source:"card",type:"boolean",default:"false"},{name:"text",source:"card",type:"string"},{name:"ripple",source:"alert",type:"boolean",default:"true"},{name:"href",source:"alert",type:"string"},{name:"replace",source:"alert",type:"boolean",default:"false"},{name:"to",source:"alert",type:"string | object"},{name:"loading",source:"alert",type:"boolean",default:"false"},{name:"disabled",source:"alert",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string"},{name:"text-color",source:"paper",type:"string"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"medium"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"card",type:"string",default:'"rounded-sm"'},{name:"elevation",source:"paper",type:"number | string"}]}),e(n,{id:"cardactions-props",tabindex:"-1"},{default:t(()=>[Fe]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardavatar-props",tabindex:"-1"},{default:t(()=>[ye]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardheader-props",tabindex:"-1"},{default:t(()=>[De]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardheadertext-props",tabindex:"-1"},{default:t(()=>[$e]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardimage-props",tabindex:"-1"},{default:t(()=>[We]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardsubtitle-props",tabindex:"-1"},{default:t(()=>[Be]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardtext-props",tabindex:"-1"},{default:t(()=>[He]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]}),e(n,{id:"cardtitle-props",tabindex:"-1"},{default:t(()=>[Pe]),_:1}),e(r,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"tag",type:"string",default:'"div"'}]})])}}});export{we as __pageData,Ie as default};
