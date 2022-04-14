System.register(["./app-legacy.dccf8ff6.js","./Demo-legacy.e8e7275f.js","./plugin-vue_export-helper-legacy.7bb61c33.js"],(function(e){"use strict";var t,l,n,r,i,o,s,u,a,d,c,p,g,f,m,y,v,h,A,C;return{setters:[function(e){t=e.q,l=e.s,n=e.u,r=e.v,i=e.aj,o=e.ak,s=e.x,u=e.P,a=e.R,d=e.aC,c=e.k,p=e.C,g=e.H,f=e.b,m=e.l,y=e.T,v=e.I,h=e.J},function(e){A=e._},function(e){C=e._}],execute:function(){const x={},w=s("flexbox 构建的 12 等分网格系统。");var D=C(x,[["render",function(e,s,p,g,f,m){const y=u,v=d,h=c,C=a,x=A;return t(),l("div",null,[n(x,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/grid/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%3E%0A%20%20%20%20%3Cve-col%0A%20%20%20%20%20%20v-for%3D%22(cols%2C%20index)%20in%20%5B%0A%20%20%20%20%20%20%20%203%2C%204%2C%205%2C%0A%20%20%20%20%20%20%20%202%2C%206%2C%204%2C%0A%20%20%20%20%20%20%20%207%2C%204%2C%201%2C%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20%3Akey%3D%22index%22%0A%20%20%20%20%20%20%3Acols%3D%22cols%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E"},{prepend:r((()=>[n(y,null,{default:r((()=>[w])),_:1})])),default:r((()=>[n(C,null,{default:r((()=>[(t(),l(i,null,o([3,4,5,2,6,4,7,4,1],((e,t)=>n(h,{key:t,cols:e},{default:r((()=>[n(v,{width:"100%",height:"30",color:"grey-300"})])),_:2},1032,["cols"]))),64))])),_:1})])),_:1})])}]]);const _={},E=s("列间距 gutter 分为 "),b=s("xs"),k=s("、"),F=s("sm"),W=s("、"),P=s("md"),j=s("、"),J=s("lg"),O=s("、"),S=s("xl"),z=s("（默认）、"),G=s("xxl"),I=s(" 6种预设值，也可以填写自定义数值。");var N=C(_,[["render",function(e,s,g,f,m,y){const v=p,h=u,C=d,x=c,w=a,D=A;return t(),l("div",null,[n(D,{title:"槽",slug:"槽",file:"/packages/veno-ui/src/components/grid/docs/gutter.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-row%20gutter%3D%22xs%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%22sm%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%22md%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%22lg%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%22xl%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%22xxl%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%0A%20%20%3Cve-row%20gutter%3D%2240%22%3E%0A%20%20%20%20%3Cve-col%20v-for%3D%22k%20in%203%22%20%3Akey%3D%22k%22%3E%0A%20%20%20%20%20%20%3Cve-paper%20width%3D%22100%25%22%20height%3D%2230%22%20color%3D%22grey-300%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-col%3E%0A%20%20%3C%2Fve-row%3E%0A%3C%2Ftemplate%3E"},{prepend:r((()=>[n(h,null,{default:r((()=>[E,n(v,{color:"secondary",inline:""},{default:r((()=>[b])),_:1}),k,n(v,{color:"secondary",inline:""},{default:r((()=>[F])),_:1}),W,n(v,{color:"secondary",inline:""},{default:r((()=>[P])),_:1}),j,n(v,{color:"secondary",inline:""},{default:r((()=>[J])),_:1}),O,n(v,{color:"secondary",inline:""},{default:r((()=>[S])),_:1}),z,n(v,{color:"secondary",inline:""},{default:r((()=>[G])),_:1}),I])),_:1})])),default:r((()=>[n(w,{gutter:"xs"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"sm"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"md"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"lg"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"xl"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"xxl"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1}),n(w,{gutter:"40"},{default:r((()=>[(t(),l(i,null,o(3,(e=>n(x,{key:e},{default:r((()=>[n(C,{width:"100%",height:"30",color:"grey-300"})])),_:2},1024))),64))])),_:1})])),_:1})])}]]);const R=s("栅格 Grid"),q=s("演示"),B=s("API"),H=s("Container Props"),L=s("Row Props"),T=s("Col Props"),K=(e("__pageData",{title:"栅格 Grid",headers:[{level:1,title:"栅格 Grid",slug:"栅格-grid"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"槽",slug:"槽"},{level:2,title:"API",slug:"api"},{level:3,title:"Container Props",slug:"container-props"},{level:3,title:"Row Props",slug:"row-props"},{level:3,title:"Col Props",slug:"col-props"}],frontmatter:{category:"Layouts 布局组件"}}),{});e("default",Object.assign(K,{setup:e=>(e,i)=>{const o=g,u=f,d=c,A=a,C=m,x=p,w=y;return t(),l("div",null,[n(o,{id:"栅格-grid",tabindex:"-1"},{default:r((()=>[R])),_:1}),n(u,{id:"演示",tabindex:"-1"},{default:r((()=>[q])),_:1}),n(A,null,{default:r((()=>[n(d,{cols:"12",md:"12"},{default:r((()=>[n(A,null,{default:r((()=>[n(d,{cols:"12"},{default:r((()=>[n(v(D))])),_:1}),n(d,{cols:"12"},{default:r((()=>[n(v(N))])),_:1})])),_:1})])),_:1})])),_:1}),n(u,{id:"api",tabindex:"-1"},{default:r((()=>[B])),_:1}),n(C,{id:"container-props",tabindex:"-1"},{default:r((()=>[H])),_:1}),n(w,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"fluid",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"}]},{"item.type":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h(e.type),1)])),_:2},1024)])),"item.default":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),n(C,{id:"row-props",tabindex:"-1"},{default:r((()=>[L])),_:1}),n(w,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"gutter",source:"row",default:"!xl!",type:"number | string",descriptions:[]},{name:"align",source:"row",default:null,type:"string",descriptions:[]},{name:"align-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"align-md",source:"row",default:null,type:"string",descriptions:[]},{name:"align-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"align-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-xxl",source:"row",default:null,type:"string",descriptions:[]},{name:"justify",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-md",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"justify-xxl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-sm",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-md",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-lg",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-xl",source:"row",default:null,type:"string",descriptions:[]},{name:"align-content-xxl",source:"row",default:null,type:"string",descriptions:[]}]},{"item.type":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h(e.type),1)])),_:2},1024)])),"item.default":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),n(C,{id:"col-props",tabindex:"-1"},{default:r((()=>[T])),_:1}),n(w,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"tag",source:"tag",default:"!div!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"},{name:"cols",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"sm",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"md",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"lg",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"xl",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"xxl",source:"col",default:!1,type:"boolean | string | number",descriptions:[]},{name:"offset",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-sm",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-md",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-lg",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-xl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"offset-xxl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-sm",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-md",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-lg",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-xl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"order-xxl",source:"col",default:null,type:"string | number",descriptions:[]},{name:"align-self",source:"col",default:null,type:"string",descriptions:[]}]},{"item.type":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h(e.type),1)])),_:2},1024)])),"item.default":r((({item:e})=>[n(x,{color:"secondary",inline:"",class:"p-1"},{default:r((()=>[s(h("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1})])}}))}}}));
