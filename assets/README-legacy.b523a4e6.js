System.register(["./app-legacy.2acc33f1.js","./Demo-legacy.451c3214.js"],(function(e){"use strict";var t,a,i,r,l,n,d,s,o,p,c,u,m,C,g,v,f,A,y,h,x,E,b,_,F,D,W,P,H,B;return{setters:[function(e){t=e._,a=e.o,i=e.c,r=e.a,l=e.w,n=e.a4,d=e.O,s=e.S,o=e.l,p=e.b,c=e.a5,u=e.M,m=e.a6,C=e.a7,g=e.a8,v=e.N,f=e.a9,A=e.$,y=e.D,h=e.B,x=e.x,E=e.t,b=e.H,_=e.d,F=e.j,D=e.R,W=e.n,P=e.C,H=e.T},function(e){B=e._}],execute:function(){var V=t({},[["render",function(e,t,s,o,p,c){const u=n,m=d,C=B;return a(),i("div",null,[r(C,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/card/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20elevation%3D%228%22%20title%3D%22%E6%A0%87%E9%A2%98%22%20subtitle%3D%22%E5%AD%90%E6%A0%87%E9%A2%98%22%20text%3D%22%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%3Ctemplate%20%23media%3E%0A%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%225%20%2F%203%22%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(m,{elevation:"8",title:"标题",subtitle:"子标题",text:"内容"},{media:l((()=>[r(u,{"aspect-ratio":5/3,src:"https://picsum.photos/id/11/500/300"})])),_:1})])),_:1})])}]]),M=t({},[["render",function(e,t,n,o,p,c){const u=d,m=s,C=B;return a(),i("div",null,[r(C,{title:"卡片形状",slug:"卡片形状",file:"/packages/veno-ui/src/components/card/docs/shape.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22tile%22%20text%3D%22Tile%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22rounded%22%20text%3D%22Rounded%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20shape%3D%22pill%22%20text%3D%22Pill%22%20border%20%2F%3E%20%20%0A%20%20%20%20%3Cve-card%20shape%3D%22circle%22%20text%3D%22Circle%22%20border%20%2F%3E%20%20%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(m,{gutter:"md",align:"center"},{default:l((()=>[r(u,{shape:"tile",text:"Tile",border:""}),r(u,{shape:"rounded",text:"Rounded",border:""}),r(u,{shape:"pill",text:"Pill",border:""}),r(u,{shape:"circle",text:"Circle",border:""})])),_:1})])),_:1})])}]]),S=t({},[["render",function(e,t,n,s,o,p){const c=d,u=B;return a(),i("div",null,[r(u,{title:"可点击",slug:"可点击",file:"/packages/veno-ui/src/components/card/docs/click.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20title%3D%22%E7%94%A8%E6%88%B7%E6%80%BB%E6%95%B0%EF%BC%9A100%22%20border%20%40click%3D%22%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(c,{title:"用户总数：100",border:"",onClick:t[0]||(t[0]=()=>{})})])),_:1})])}]]);const T={},w=o("div",{class:"px-3 pt-3"},"Media",-1),k=p("Prepend"),O=p("Title"),N=p("Subtitle"),J=p("Append"),L=p("Text"),Z=p("Actions");var j=t(T,[["render",function(e,t,n,s,o,p){const A=c,y=u,h=m,x=C,E=g,b=v,_=f,F=d,D=B;return a(),i("div",null,[r(D,{title:"所有可用的组件（插槽）",slug:"所有可用的组件（插槽）",file:"/packages/veno-ui/src/components/card/docs/slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20border%3E%0A%20%20%20%20%3Cdiv%20class%3D%22px-3%20pt-3%22%3EMedia%3C%2Fdiv%3E%0A%20%20%20%20%3Cve-card-header%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3EPrepend%3C%2Fve-card-avatar%3E%0A%20%20%20%20%20%20%3Cve-card-header-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-title%3ETitle%3C%2Fve-card-title%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-subtitle%3ESubtitle%3C%2Fve-card-subtitle%3E%0A%20%20%20%20%20%20%3C%2Fve-card-header-text%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3EAppend%3C%2Fve-card-avatar%3E%0A%20%20%20%20%3C%2Fve-card-header%3E%0A%20%20%20%20%3Cve-card-text%3EText%3C%2Fve-card-text%3E%0A%20%20%20%20%3Cve-card-actions%3EActions%3C%2Fve-card-actions%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(F,{border:""},{default:l((()=>[w,r(E,null,{default:l((()=>[r(A,null,{default:l((()=>[k])),_:1}),r(x,null,{default:l((()=>[r(y,null,{default:l((()=>[O])),_:1}),r(h,null,{default:l((()=>[N])),_:1})])),_:1}),r(A,null,{default:l((()=>[J])),_:1})])),_:1}),r(b,null,{default:l((()=>[L])),_:1}),r(_,null,{default:l((()=>[Z])),_:1})])),_:1})])),_:1})])}]]),I=t({},[["render",function(e,t,n,o,p,c){const u=d,m=s,C=B;return a(),i("div",null,[r(C,{title:"卡片密度",slug:"卡片密度",file:"/packages/veno-ui/src/components/card/docs/density.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%22md%22%20align%3D%22center%22%20cols%3D%2212%22%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-low%22%20title%3D%22UltraLow%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22low%22%20title%3D%22Low%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22medium%22%20title%3D%22Medium%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22high%22%20title%3D%22High%22%20border%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22ultra-high%22%20title%3D%22UltraHigh%22%20border%20%2F%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(m,{gutter:"md",align:"center",cols:"12"},{default:l((()=>[r(u,{density:"ultra-low",title:"UltraLow",border:""}),r(u,{density:"low",title:"Low",border:""}),r(u,{density:"medium",title:"Medium",border:""}),r(u,{density:"high",title:"High",border:""}),r(u,{density:"ultra-high",title:"UltraHigh",border:""})])),_:1})])),_:1})])}]]),U=t({},[["render",function(e,t,n,s,o,p){const c=d,u=B;return a(),i("div",null,[r(u,{title:"简洁的个人名片",slug:"简洁的个人名片",file:"/packages/veno-ui/src/components/card/docs/personal-card-concise.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20title%3D%22%E8%89%BA%E6%9C%AF%E5%AE%B6%22%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%20%20hover%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(c,{title:"艺术家",subtitle:"微信号：xxxxxx","prepend-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8",hover:""})])),_:1})])}]]);const R={},z=o("span",null,"艺术家",-1),$=o("span",{class:"text-grey mr-3"},"地 区",-1),q=o("span",null,"湖南 长沙",-1);var G=t(R,[["render",function(e,t,n,o,p,c){const u=A,m=y,C=v,g=s,f=h,x=d,E=B;return a(),i("div",null,[r(E,{title:"个人名片",slug:"个人名片",file:"/packages/veno-ui/src/components/card/docs/personal-card.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20append-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20elevation%3D%228%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23title%3E%0A%20%20%20%20%20%20%3Cspan%3E%E8%89%BA%E6%9C%AF%E5%AE%B6%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cve-icon%0A%20%20%20%20%20%20%20%20right%0A%20%20%20%20%20%20%20%20color%3D%22info%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C4A4%2C4%200%200%2C1%2016%2C8A4%2C4%200%200%2C1%2012%2C12A4%2C4%200%200%2C1%208%2C8A4%2C4%200%200%2C1%2012%2C4M12%2C14C16.42%2C14%2020%2C15.79%2020%2C18V20H4V18C4%2C15.79%207.58%2C14%2012%2C14Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-divider%20%2F%3E%0A%0A%20%20%20%20%3CVeCardText%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22text-grey%20mr-3%22%3E%E5%9C%B0%20%E5%8C%BA%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%B9%96%E5%8D%97%20%E9%95%BF%E6%B2%99%3C%2Fspan%3E%0A%20%20%20%20%3C%2FVeCardText%3E%0A%0A%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20class%3D%22mr-3%22%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C1L8%2C5H11V14H13V5H16M18%2C23H6C4.89%2C23%204%2C22.1%204%2C21V9A2%2C2%200%200%2C1%206%2C7H9V9H6V21H18V9H15V7H18A2%2C2%200%200%2C1%2020%2C9V21A2%2C2%200%200%2C1%2018%2C23Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C3C6.5%2C3%202%2C6.58%202%2C11C2.05%2C13.15%203.06%2C15.17%204.75%2C16.5C4.75%2C17.1%204.33%2C18.67%202%2C21C4.37%2C20.89%206.64%2C20%208.47%2C18.5C9.61%2C18.83%2010.81%2C19%2012%2C19C17.5%2C19%2022%2C15.42%2022%2C11C22%2C6.58%2017.5%2C3%2012%2C3M12%2C17C7.58%2C17%204%2C14.31%204%2C11C4%2C7.69%207.58%2C5%2012%2C5C16.42%2C5%2020%2C7.69%2020%2C11C20%2C14.31%2016.42%2C17%2012%2C17Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{default:l((()=>[r(x,{subtitle:"微信号：xxxxxx","append-avatar":"https://avatars.githubusercontent.com/u/19576382",elevation:"8"},{title:l((()=>[z,r(u,{right:"",color:"info",icon:"svg:M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"})])),actions:l((()=>[r(g),r(f,{class:"mr-3",variant:"text",icon:"svg:M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"}),r(f,{variant:"text",icon:"svg:M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"})])),default:l((()=>[r(m),r(C,null,{default:l((()=>[$,q])),_:1})])),_:1})])),_:1})])}]]);const K=p("卡片 Card"),Q=p("演示"),X=p("API"),Y=p("Card Props"),ee=p("CardActions Props"),te=p("CardAvatar Props"),ae=p("CardHeader Props"),ie=p("CardHeaderText Props"),re=p("CardImage Props"),le=p("CardSubtitle Props"),ne=p("CardText Props"),de=p("CardTitle Props"),se=(e("__pageData",{title:"卡片 Card",headers:[{level:1,title:"卡片 Card",slug:"卡片-card"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"卡片密度",slug:"卡片密度"},{level:3,title:"卡片形状",slug:"卡片形状"},{level:3,title:"简洁的个人名片",slug:"简洁的个人名片"},{level:3,title:"可点击",slug:"可点击"},{level:3,title:"个人名片",slug:"个人名片"},{level:3,title:"所有可用的组件（插槽）",slug:"所有可用的组件（插槽）"},{level:2,title:"API",slug:"api"},{level:3,title:"Card Props",slug:"card-props"},{level:3,title:"CardActions Props",slug:"cardactions-props"},{level:3,title:"CardAvatar Props",slug:"cardavatar-props"},{level:3,title:"CardHeader Props",slug:"cardheader-props"},{level:3,title:"CardHeaderText Props",slug:"cardheadertext-props"},{level:3,title:"CardImage Props",slug:"cardimage-props"},{level:3,title:"CardSubtitle Props",slug:"cardsubtitle-props"},{level:3,title:"CardText Props",slug:"cardtext-props"},{level:3,title:"CardTitle Props",slug:"cardtitle-props"}],frontmatter:{meta:{category:"Data 数据展示"}}}),{});e("default",Object.assign(se,{setup:e=>(e,t)=>{const n=b,d=_,s=F,o=D,c=W,u=P,m=H;return a(),i("div",null,[r(n,{id:"卡片-card",tabindex:"-1"},{default:l((()=>[K])),_:1}),r(d,{id:"演示",tabindex:"-1"},{default:l((()=>[Q])),_:1}),r(o,null,{default:l((()=>[r(s,{cols:"12",md:"6"},{default:l((()=>[r(o,null,{default:l((()=>[r(s,{cols:"12"},{default:l((()=>[r(x(V))])),_:1}),r(s,{cols:"12"},{default:l((()=>[r(x(M))])),_:1}),r(s,{cols:"12"},{default:l((()=>[r(x(S))])),_:1}),r(s,{cols:"12"},{default:l((()=>[r(x(j))])),_:1})])),_:1})])),_:1}),r(s,{cols:"12",md:"6"},{default:l((()=>[r(o,null,{default:l((()=>[r(s,{cols:"12"},{default:l((()=>[r(x(I))])),_:1}),r(s,{cols:"12"},{default:l((()=>[r(x(U))])),_:1}),r(s,{cols:"12"},{default:l((()=>[r(x(G))])),_:1})])),_:1})])),_:1})])),_:1}),r(d,{id:"api",tabindex:"-1"},{default:l((()=>[X])),_:1}),r(c,{id:"card-props",tabindex:"-1"},{default:l((()=>[Y])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"link",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"hover",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"image",source:"card",type:"string",descriptions:[]},{name:"prepend-avatar",source:"card",type:"string",descriptions:[]},{name:"prepend-icon",source:"card",type:"string",descriptions:[]},{name:"append-avatar",source:"card",type:"string",descriptions:[]},{name:"append-icon",source:"card",type:"string",descriptions:[]},{name:"title",source:"card",type:"string",descriptions:[]},{name:"subtitle",source:"card",type:"string",descriptions:[]},{name:"divided",source:"card",default:!1,type:"boolean",descriptions:[]},{name:"text",source:"card",type:"string",descriptions:[]},{name:"ripple",source:"alert",default:!0,type:"boolean",descriptions:[]},{name:"href",source:"alert",type:"string",descriptions:[]},{name:"replace",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"to",source:"alert",type:"string | object",descriptions:[]},{name:"loading",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"disabled",source:"alert",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"theme",source:"paper",type:"string",descriptions:[]},{name:"color",source:"paper",type:"string",descriptions:[]},{name:"text-color",source:"paper",type:"string",descriptions:[]},{name:"variant",source:"card",default:"!contained!",type:"string",descriptions:[]},{name:"absolute",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"bottom",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"fixed",source:"paper",default:!1,type:"boolean",descriptions:[]},{name:"left",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"position",source:"paper",type:"string",descriptions:[]},{name:"right",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"top",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"height",source:"paper",type:"number | string",descriptions:[]},{name:"max-height",source:"paper",type:"number | string",descriptions:[]},{name:"max-width",source:"paper",type:"number | string",descriptions:[]},{name:"min-height",source:"paper",type:"number | string",descriptions:[]},{name:"min-width",source:"paper",type:"number | string",descriptions:[]},{name:"width",source:"paper",type:"number | string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"border",source:"paper",default:!1,type:"boolean | number | string",descriptions:[]},{name:"shape",source:"card",default:"!rounded-sm!",type:"string",descriptions:[]},{name:"elevation",source:"paper",type:"number | string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardactions-props",tabindex:"-1"},{default:l((()=>[ee])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardavatar-props",tabindex:"-1"},{default:l((()=>[te])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardheader-props",tabindex:"-1"},{default:l((()=>[ae])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardheadertext-props",tabindex:"-1"},{default:l((()=>[ie])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardimage-props",tabindex:"-1"},{default:l((()=>[re])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardsubtitle-props",tabindex:"-1"},{default:l((()=>[le])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardtext-props",tabindex:"-1"},{default:l((()=>[ne])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(c,{id:"cardtitle-props",tabindex:"-1"},{default:l((()=>[de])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",default:"!div!",type:"string",descriptions:[]}]},{"item.type":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E(e.type),1)])),_:2},1024)])),"item.default":l((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:l((()=>[p(E("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1})])}}))}}}));