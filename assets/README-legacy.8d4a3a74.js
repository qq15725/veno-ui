System.register(["./app-legacy.0e2fb860.js","./Demo-legacy.ab072aec.js"],(function(e){"use strict";var t,n,l,s,u,r,o,i,a,c,d,p,f,m,g,y,b,v;return{setters:[function(e){t=e._,n=e.o,l=e.c,s=e.a,u=e.w,r=e.b,o=e.B,i=e.S,a=e.x,c=e.t,d=e.H,p=e.d,f=e.j,m=e.R,g=e.n,y=e.C,b=e.T},function(e){v=e._}],execute:function(){const x={},_=r("Button"),C=r("Button"),w=r("Button");var E=t(x,[["render",function(e,t,r,a,c,d){const p=o,f=i,m=v;return n(),l("div",null,[s(m,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/spacer/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:u((()=>[s(f,null,{default:u((()=>[s(p,null,{default:u((()=>[_])),_:1}),s(p,null,{default:u((()=>[C])),_:1}),s(p,null,{default:u((()=>[w])),_:1})])),_:1})])),_:1})])}]]);const A={},B=r("Button"),j=r("Button"),F=r("Button");var h=t(A,[["render",function(e,t,r,a,c,d){const p=o,f=i,m=v;return n(),l("div",null,[s(m,{title:"自定义槽距离",slug:"自定义槽距离",file:"/packages/veno-ui/src/components/spacer/docs/gutter.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-spacer%20gutter%3D%224%22%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%20%20%3Cve-button%3EButton%3C%2Fve-button%3E%0A%20%20%3C%2Fve-spacer%3E%0A%3C%2Ftemplate%3E"},{default:u((()=>[s(f,{gutter:"4"},{default:u((()=>[s(p,null,{default:u((()=>[B])),_:1}),s(p,null,{default:u((()=>[j])),_:1}),s(p,null,{default:u((()=>[F])),_:1})])),_:1})])),_:1})])}]]);const S=r("间距 Spacer"),P=r("演示"),W=r("API"),D=r("Spacer Props"),k=(e("__pageData",{title:"间距 Spacer",headers:[{level:1,title:"间距 Spacer",slug:"间距-spacer"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"自定义槽距离",slug:"自定义槽距离"},{level:2,title:"API",slug:"api"},{level:3,title:"Spacer Props",slug:"spacer-props"}],frontmatter:{category:"Layouts 布局组件"}}),{});e("default",Object.assign(k,{setup:e=>(e,t)=>{const o=d,i=p,v=f,x=m,_=g,C=y,w=b;return n(),l("div",null,[s(o,{id:"间距-spacer",tabindex:"-1"},{default:u((()=>[S])),_:1}),s(i,{id:"演示",tabindex:"-1"},{default:u((()=>[P])),_:1}),s(x,null,{default:u((()=>[s(v,{cols:"12",md:"12"},{default:u((()=>[s(x,null,{default:u((()=>[s(v,{cols:"12"},{default:u((()=>[s(a(E))])),_:1}),s(v,{cols:"12"},{default:u((()=>[s(a(h))])),_:1})])),_:1})])),_:1})])),_:1}),s(i,{id:"api",tabindex:"-1"},{default:u((()=>[W])),_:1}),s(_,{id:"spacer-props",tabindex:"-1"},{default:u((()=>[D])),_:1}),s(w,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"gutter",source:"row",default:"!xl!",type:"number | string",descriptions:[]},{name:"align",source:"row",default:null,type:"string",descriptions:[]},{name:"align-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"align-md",source:"row",default:null,type:"string",descriptions:[]},{name:"align-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"align-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-xxl",source:"row",default:null,type:"string",descriptions:[]},{name:"justify",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-md",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-xxl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-md",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-xxl",source:"row",default:null,type:"string",descriptions:[]},{name:"cols",source:"col",default:"!auto!",type:"boolean | string | number",descriptions:[]},{name:"sm",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"md",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"lg",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"xl",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"xxl",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"offset",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-sm",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-md",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-lg",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-xl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-xxl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-sm",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-md",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-lg",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-xl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-xxl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"align-self",source:"col",default:null,type:"string",descriptions:[]}]},{"item.type":u((({item:e})=>[s(C,{color:"secondary",inline:"",class:"p-1"},{default:u((()=>[r(c(e.type),1)])),_:2},1024)])),"item.default":u((({item:e})=>[s(C,{color:"secondary",inline:"",class:"p-1"},{default:u((()=>[r(c("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1})])}}))}}}));
