System.register(["./app-legacy.ec2822eb.js","./Demo-legacy.ac968142.js"],(function(e){"use strict";var E,t,l,i,d,A,a,s,B,n,r,c,u,o,v,f,p,m;return{setters:[function(e){E=e._,t=e.q,l=e.s,i=e.u,d=e.v,A=e.x,a=e.D,s=e.H,B=e.P,n=e.d,r=e.R,c=e.n,u=e.T,o=e.I,v=e.J,f=e.C,p=e.k},function(e){m=e._}],execute:function(){const C={},g=A(" 卡片可以包含一个主题的照片、文字和链接。它们可以显示包含不同尺寸的元素的内容，例如有可变长度标题的照片。 "),D=A(" 卡片集是多个卡片在同一平面上的布局结构。 ");var F=E(C,[["render",function(e,E,A,s,B,n){const r=a,c=m;return t(),l("div",null,[i(c,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/divider/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%E5%8D%A1%E7%89%87%E5%8F%AF%E4%BB%A5%E5%8C%85%E5%90%AB%E4%B8%80%E4%B8%AA%E4%B8%BB%E9%A2%98%E7%9A%84%E7%85%A7%E7%89%87%E3%80%81%E6%96%87%E5%AD%97%E5%92%8C%E9%93%BE%E6%8E%A5%E3%80%82%E5%AE%83%E4%BB%AC%E5%8F%AF%E4%BB%A5%E6%98%BE%E7%A4%BA%E5%8C%85%E5%90%AB%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%85%83%E7%B4%A0%E7%9A%84%E5%86%85%E5%AE%B9%EF%BC%8C%E4%BE%8B%E5%A6%82%E6%9C%89%E5%8F%AF%E5%8F%98%E9%95%BF%E5%BA%A6%E6%A0%87%E9%A2%98%E7%9A%84%E7%85%A7%E7%89%87%E3%80%82%0A%0A%20%20%3Cve-divider%20class%3D%22my-3%22%2F%3E%0A%0A%20%20%E5%8D%A1%E7%89%87%E9%9B%86%E6%98%AF%E5%A4%9A%E4%B8%AA%E5%8D%A1%E7%89%87%E5%9C%A8%E5%90%8C%E4%B8%80%E5%B9%B3%E9%9D%A2%E4%B8%8A%E7%9A%84%E5%B8%83%E5%B1%80%E7%BB%93%E6%9E%84%E3%80%82%0A%3C%2Ftemplate%3E"},{default:d((()=>[g,i(r,{class:"my-3"}),D])),_:1})])}]]);const _={},y=A(" 卡片是用来显示由不同元素组成的内容的便捷方式。它们也适合用来展示拥有不同尺寸和操作的元素，例如有可变长度标题的照片。 "),x=A(" 卡片集是在同一平面上的卡片的布局。 ");var h=E(_,[["render",function(e,E,A,s,B,n){const r=a,c=m;return t(),l("div",null,[i(c,{title:"虚线",slug:"虚线",file:"/packages/veno-ui/src/components/divider/docs/dashed.md",code:"%3Ctemplate%3E%0A%20%20%E5%8D%A1%E7%89%87%E6%98%AF%E7%94%A8%E6%9D%A5%E6%98%BE%E7%A4%BA%E7%94%B1%E4%B8%8D%E5%90%8C%E5%85%83%E7%B4%A0%E7%BB%84%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9%E7%9A%84%E4%BE%BF%E6%8D%B7%E6%96%B9%E5%BC%8F%E3%80%82%E5%AE%83%E4%BB%AC%E4%B9%9F%E9%80%82%E5%90%88%E7%94%A8%E6%9D%A5%E5%B1%95%E7%A4%BA%E6%8B%A5%E6%9C%89%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8%E5%92%8C%E6%93%8D%E4%BD%9C%E7%9A%84%E5%85%83%E7%B4%A0%EF%BC%8C%E4%BE%8B%E5%A6%82%E6%9C%89%E5%8F%AF%E5%8F%98%E9%95%BF%E5%BA%A6%E6%A0%87%E9%A2%98%E7%9A%84%E7%85%A7%E7%89%87%E3%80%82%0A%0A%20%20%3Cve-divider%20dashed%20class%3D%22my-3%22%20%2F%3E%0A%0A%20%20%E5%8D%A1%E7%89%87%E9%9B%86%E6%98%AF%E5%9C%A8%E5%90%8C%E4%B8%80%E5%B9%B3%E9%9D%A2%E4%B8%8A%E7%9A%84%E5%8D%A1%E7%89%87%E7%9A%84%E5%B8%83%E5%B1%80%E3%80%82%0A%3C%2Ftemplate%3E"},{default:d((()=>[y,i(r,{dashed:"",class:"my-3"}),x])),_:1})])}]]);const b={},P=A("用法"),k=A(" 卡片显示由不同元素组成的内容，其大小和支持的操作不同。 "),W=A("支持的手势"),j=A(" 滑动 拾起并移动 "),I=A("相关组件"),J=A(" 网格列表 ");var O=E(b,[["render",function(e,E,A,s,B,n){const r=a,c=m;return t(),l("div",null,[i(c,{title:"默认插槽",slug:"默认插槽",file:"/packages/veno-ui/src/components/divider/docs/default-slot.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-divider%20text-align%3D%22left%22%20class%3D%22mb-3%22%3E%E7%94%A8%E6%B3%95%3C%2Fve-divider%3E%0A%0A%20%20%E5%8D%A1%E7%89%87%E6%98%BE%E7%A4%BA%E7%94%B1%E4%B8%8D%E5%90%8C%E5%85%83%E7%B4%A0%E7%BB%84%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9%EF%BC%8C%E5%85%B6%E5%A4%A7%E5%B0%8F%E5%92%8C%E6%94%AF%E6%8C%81%E7%9A%84%E6%93%8D%E4%BD%9C%E4%B8%8D%E5%90%8C%E3%80%82%0A%0A%20%20%3Cve-divider%20class%3D%22my-3%22%3E%E6%94%AF%E6%8C%81%E7%9A%84%E6%89%8B%E5%8A%BF%3C%2Fve-divider%3E%0A%0A%20%20%E6%BB%91%E5%8A%A8%0A%20%20%E6%8B%BE%E8%B5%B7%E5%B9%B6%E7%A7%BB%E5%8A%A8%0A%0A%20%20%3Cve-divider%20text-align%3D%22right%22%20class%3D%22my-3%22%3E%E7%9B%B8%E5%85%B3%E7%BB%84%E4%BB%B6%3C%2Fve-divider%3E%0A%0A%20%20%E7%BD%91%E6%A0%BC%E5%88%97%E8%A1%A8%0A%3C%2Ftemplate%3E"},{default:d((()=>[i(r,{"text-align":"left",class:"mb-3"},{default:d((()=>[P])),_:1}),k,i(r,{class:"my-3"},{default:d((()=>[W])),_:1}),j,i(r,{"text-align":"right",class:"my-3"},{default:d((()=>[I])),_:1}),J])),_:1})])}]]);const S={},q=A(" 垂直 "),z=A(" 分割线 ");var H=E(S,[["render",function(e,E,A,s,B,n){const r=a,c=m;return t(),l("div",null,[i(c,{title:"垂直",slug:"垂直",file:"/packages/veno-ui/src/components/divider/docs/vertical.md",code:"%3Ctemplate%3E%0A%20%20%E5%9E%82%E7%9B%B4%0A%20%20%3Cve-divider%20vertical%20class%3D%22mx-3%22%20%2F%3E%0A%20%20%E5%88%86%E5%89%B2%E7%BA%BF%0A%3C%2Ftemplate%3E"},{default:d((()=>[q,i(r,{vertical:"",class:"mx-3"}),z])),_:1})])}]]);const L=A("分割线 Divider"),N=A("divider"),R=A(" 组件用于分隔内容。"),T=A("演示"),w=A("API"),G=A("Divider Props"),K=(e("__pageData",{title:"分割线 Divider",headers:[{level:1,title:"分割线 Divider",slug:"分割线-divider"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"默认插槽",slug:"默认插槽"},{level:3,title:"虚线",slug:"虚线"},{level:3,title:"垂直",slug:"垂直"},{level:2,title:"API",slug:"api"},{level:3,title:"Divider Props",slug:"divider-props"}],frontmatter:{category:"Layouts 布局组件"}}),{});e("default",Object.assign(K,{setup:e=>(e,E)=>{const a=s,m=f,C=B,g=n,D=p,_=r,y=c,x=u;return t(),l("div",null,[i(a,{id:"分割线-divider",tabindex:"-1"},{default:d((()=>[L])),_:1}),i(C,null,{default:d((()=>[i(m,{color:"secondary",inline:""},{default:d((()=>[N])),_:1}),R])),_:1}),i(g,{id:"演示",tabindex:"-1"},{default:d((()=>[T])),_:1}),i(_,null,{default:d((()=>[i(D,{cols:"12",md:"6"},{default:d((()=>[i(_,null,{default:d((()=>[i(D,{cols:"12"},{default:d((()=>[i(o(F))])),_:1}),i(D,{cols:"12"},{default:d((()=>[i(o(h))])),_:1})])),_:1})])),_:1}),i(D,{cols:"12",md:"6"},{default:d((()=>[i(_,null,{default:d((()=>[i(D,{cols:"12"},{default:d((()=>[i(o(O))])),_:1}),i(D,{cols:"12"},{default:d((()=>[i(o(H))])),_:1})])),_:1})])),_:1})])),_:1}),i(g,{id:"api",tabindex:"-1"},{default:d((()=>[w])),_:1}),i(y,{id:"divider-props",tabindex:"-1"},{default:d((()=>[G])),_:1}),i(x,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"text-align",default:"!center!",type:"string",descriptions:[]},{name:"length",type:"any",descriptions:[]},{name:"dashed",default:!1,type:"boolean",descriptions:[]},{name:"vertical",default:!1,type:"boolean",descriptions:[]},{name:"tag",source:"tag",default:"!hr!",type:"string",descriptions:[{language:"zh",name:"tag",description:"指定在根元素上使用的自定义标签",source:"tag"}],description:"指定在根元素上使用的自定义标签"}]},{"item.type":d((({item:e})=>[i(m,{color:"secondary",inline:"",class:"p-1"},{default:d((()=>[A(v(e.type),1)])),_:2},1024)])),"item.default":d((({item:e})=>[i(m,{color:"secondary",inline:"",class:"p-1"},{default:d((()=>[A(v("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1})])}}))}}}));
