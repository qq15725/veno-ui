System.register(["./index-legacy.e304753e.js","./vendor-legacy.b6a57386.js"],(function(e){"use strict";var t,a,n,r,l,i,u,d,o;return{setters:[function(e){t=e._},function(e){a=e.R,n=e.V,r=e.Y,l=e.b,i=e.U,u=e.M,d=e.a2,o=e.u}],execute:function(){var c={},s=u(" 基本用法 "),p=t(c,[["render",function(e,t,u,d,o,c){var p=a("ve-image"),C=a("ve-card"),f=a("demo");return n(),r("div",null,[l(f,{file:"/packages/veno-ui/src/components/card/docs/basic.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20title%3D%22%E6%A0%87%E9%A2%98%22%20subtitle%3D%22%E5%AD%90%E6%A0%87%E9%A2%98%22%20text%3D%22%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%3Ctemplate%20%23media%3E%0A%20%20%20%20%20%20%3Cve-image%0A%20%20%20%20%20%20%20%20%3Aaspect-ratio%3D%225%20%2F%203%22%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fpicsum.photos%2Fid%2F11%2F500%2F300%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[s]})),default:i((function(){return[l(C,{title:"标题",subtitle:"子标题",text:"内容"},{media:i((function(){return[l(p,{"aspect-ratio":5/3,src:"https://picsum.photos/id/11/500/300"})]})),_:1})]})),_:1})])}]]),C={},f=u(" 卡片形状 "),v=t(C,[["render",function(e,t,u,d,o,c){var s=a("ve-card"),p=a("ve-grid"),C=a("demo");return n(),r("div",null,[l(C,{file:"/packages/veno-ui/src/components/card/docs/shape.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20dense%20align%3D%22center%22%3E%0A%20%20%20%20%3Cve-card%20text%3D%22Tile%22%20shape%3D%22tile%22%20%2F%3E%0A%20%20%20%20%3Cve-card%20text%3D%22Default%22%20%2F%3E%0A%20%20%20%20%3Cve-card%20text%3D%22Round%22%20shape%3D%22round%22%20%2F%3E%20%20%0A%20%20%3C%2Fve-grid%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[f]})),default:i((function(){return[l(p,{dense:"",align:"center"},{default:i((function(){return[l(s,{text:"Tile",shape:"tile"}),l(s,{text:"Default"}),l(s,{text:"Round",shape:"round"})]})),_:1})]})),_:1})])}]]),m={},A=u(" 可点击 "),g=t(m,[["render",function(e,t,u,d,o,c){var s=a("ve-card"),p=a("demo");return n(),r("div",null,[l(p,{file:"/packages/veno-ui/src/components/card/docs/click.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%20title%3D%22%E7%94%A8%E6%88%B7%E6%80%BB%E6%95%B0%EF%BC%9A100%22%20%40click%3D%22%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[A]})),default:i((function(){return[l(s,{title:"用户总数：100",onClick:t[0]||(t[0]=function(){})})]})),_:1})])}]]),E={},x=u(" 所有可用的组件（插槽） "),b=d("div",{class:"px-5 pt-3"},"media 插槽",-1),F=u("prepend 插槽"),y=u("title 插槽"),h=u("subtitle 插槽"),_=u("append 插槽"),D=u("text 插槽"),H=u("actions 插槽"),B=t(E,[["render",function(e,t,u,d,o,c){var s=a("ve-card-avatar"),p=a("ve-card-title"),C=a("ve-card-subtitle"),f=a("ve-card-header-text"),v=a("ve-card-header"),m=a("ve-card-text"),A=a("ve-card-actions"),g=a("ve-card"),E=a("demo");return n(),r("div",null,[l(E,{file:"/packages/veno-ui/src/components/card/docs/slot.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%3E%0A%20%20%20%20%3Cdiv%20class%3D%22px-5%20pt-3%22%3Emedia%20%E6%8F%92%E6%A7%BD%3C%2Fdiv%3E%0A%20%20%20%20%3Cve-card-header%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3Eprepend%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-avatar%3E%0A%20%20%20%20%20%20%3Cve-card-header-text%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-title%3Etitle%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-title%3E%0A%20%20%20%20%20%20%20%20%3Cve-card-subtitle%3Esubtitle%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-subtitle%3E%0A%20%20%20%20%20%20%3C%2Fve-card-header-text%3E%0A%20%20%20%20%20%20%3Cve-card-avatar%3Eappend%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-avatar%3E%0A%20%20%20%20%3C%2Fve-card-header%3E%0A%20%20%20%20%3Cve-card-text%3Etext%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-text%3E%0A%20%20%20%20%3Cve-card-actions%3Eactions%20%E6%8F%92%E6%A7%BD%3C%2Fve-card-actions%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[x]})),default:i((function(){return[l(g,null,{default:i((function(){return[b,l(v,null,{default:i((function(){return[l(s,null,{default:i((function(){return[F]})),_:1}),l(f,null,{default:i((function(){return[l(p,null,{default:i((function(){return[y]})),_:1}),l(C,null,{default:i((function(){return[h]})),_:1})]})),_:1}),l(s,null,{default:i((function(){return[_]})),_:1})]})),_:1}),l(m,null,{default:i((function(){return[D]})),_:1}),l(A,null,{default:i((function(){return[H]})),_:1})]})),_:1})]})),_:1})])}]]),P={},V=u(" 卡片密度 "),M=u("density"),R=u(" 有 "),Z=u("compact"),O=u("、"),U=u("comfortable"),j=u("、"),w=u("medium"),X=u("。"),k=t(P,[["render",function(e,t,u,d,o,c){var s=a("ve-code"),p=a("ve-p"),C=a("ve-card"),f=a("ve-grid"),v=a("demo");return n(),r("div",null,[l(v,{file:"/packages/veno-ui/src/components/card/docs/density.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-grid%20dense%20align%3D%22center%22%20%3Acol-props%3D%22%7B%20cols%3A%2012%20%7D%22%3E%0A%20%20%20%20%3Cve-card%20density%3D%22compact%22%20title%3D%22Compact%22%20%2F%3E%0A%20%20%20%20%3Cve-card%20density%3D%22comfortable%22%20title%3D%22Comfortable%22%20%2F%3E%0A%20%20%20%20%3Cve-card%20title%3D%22Medium%22%20%2F%3E%0A%20%20%3C%2Fve-grid%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[V]})),prepend:i((function(){return[l(p,null,{default:i((function(){return[l(s,null,{default:i((function(){return[M]})),_:1}),R,l(s,null,{default:i((function(){return[Z]})),_:1}),O,l(s,null,{default:i((function(){return[U]})),_:1}),j,l(s,null,{default:i((function(){return[w]})),_:1}),X]})),_:1})]})),default:i((function(){return[l(f,{dense:"",align:"center","col-props":{cols:12}},{default:i((function(){return[l(C,{density:"compact",title:"Compact"}),l(C,{density:"comfortable",title:"Comfortable"}),l(C,{title:"Medium"})]})),_:1})]})),_:1})])}]]),T={},Y=u(" 简洁的个人名片 "),q=t(T,[["render",function(e,t,u,d,o,c){var s=a("ve-card"),p=a("demo");return n(),r("div",null,[l(p,{file:"/packages/veno-ui/src/components/card/docs/personal-card-concise.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20title%3D%22%E8%89%BA%E6%9C%AF%E5%AE%B6%22%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FYugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw%2F132%22%0A%20%20%20%20hover%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[Y]})),default:i((function(){return[l(s,{title:"艺术家",subtitle:"微信号：xxxxxx","prepend-avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132",hover:""})]})),_:1})])}]]),K={},W=u(" 个人名片 "),z=d("span",null,"艺术家",-1),L=d("span",{class:"text-grey mr-3"},"地 区",-1),G=d("span",null,"湖南 长沙",-1),I=t(K,[["render",function(e,t,u,d,o,c){var s=a("ve-icon"),p=a("ve-divider"),C=a("VeCardText"),f=a("ve-spacer"),v=a("ve-button"),m=a("ve-card"),A=a("demo");return n(),r("div",null,[l(A,{file:"/packages/veno-ui/src/components/card/docs/personal-card.md?included",code:"%3Ctemplate%3E%0A%20%20%3Cve-card%0A%20%20%20%20subtitle%3D%22%E5%BE%AE%E4%BF%A1%E5%8F%B7%EF%BC%9Axxxxxx%22%0A%20%20%20%20append-avatar%3D%22https%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FYugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw%2F132%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23title%3E%0A%20%20%20%20%20%20%3Cspan%3E%E8%89%BA%E6%9C%AF%E5%AE%B6%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cve-icon%0A%20%20%20%20%20%20%20%20right%0A%20%20%20%20%20%20%20%20color%3D%22info%22%0A%20%20%20%20%20%20%20%20size%3D%22xs%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C4A4%2C4%200%200%2C1%2016%2C8A4%2C4%200%200%2C1%2012%2C12A4%2C4%200%200%2C1%208%2C8A4%2C4%200%200%2C1%2012%2C4M12%2C14C16.42%2C14%2020%2C15.79%2020%2C18V20H4V18C4%2C15.79%207.58%2C14%2012%2C14Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%0A%20%20%20%20%3Cve-divider%20%2F%3E%0A%0A%20%20%20%20%3CVeCardText%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22text-grey%20mr-3%22%3E%E5%9C%B0%20%E5%8C%BA%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%B9%96%E5%8D%97%20%E9%95%BF%E6%B2%99%3C%2Fspan%3E%0A%20%20%20%20%3C%2FVeCardText%3E%0A%0A%20%20%20%20%3Ctemplate%20%23actions%3E%0A%20%20%20%20%20%20%3Cve-spacer%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20class%3D%22mr-3%22%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C1L8%2C5H11V14H13V5H16M18%2C23H6C4.89%2C23%204%2C22.1%204%2C21V9A2%2C2%200%200%2C1%206%2C7H9V9H6V21H18V9H15V7H18A2%2C2%200%200%2C1%2020%2C9V21A2%2C2%200%200%2C1%2018%2C23Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cve-button%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20variant%3D%22text%22%0A%20%20%20%20%20%20%20%20icon%3D%22svg%3AM12%2C3C6.5%2C3%202%2C6.58%202%2C11C2.05%2C13.15%203.06%2C15.17%204.75%2C16.5C4.75%2C17.1%204.33%2C18.67%202%2C21C4.37%2C20.89%206.64%2C20%208.47%2C18.5C9.61%2C18.83%2010.81%2C19%2012%2C19C17.5%2C19%2022%2C15.42%2022%2C11C22%2C6.58%2017.5%2C3%2012%2C3M12%2C17C7.58%2C17%204%2C14.31%204%2C11C4%2C7.69%207.58%2C5%2012%2C5C16.42%2C5%2020%2C7.69%2020%2C11C20%2C14.31%2016.42%2C17%2012%2C17Z%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-card%3E%0A%3C%2Ftemplate%3E"},{title:i((function(){return[W]})),default:i((function(){return[l(m,{subtitle:"微信号：xxxxxx","append-avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132"},{title:i((function(){return[z,l(s,{right:"",color:"info",size:"xs",icon:"svg:M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"})]})),actions:i((function(){return[l(f),l(v,{class:"mr-3",size:"lg",variant:"text",icon:"svg:M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"}),l(v,{size:"lg",variant:"text",icon:"svg:M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"})]})),default:i((function(){return[l(p),l(C,null,{default:i((function(){return[L,G]})),_:1})]})),_:1})]})),_:1})])}]]),J=u("卡片 Card"),N=u("card"),Q=u(" 包装了 "),S=u("material"),$=u("。"),ee=u("演示"),te=u("API"),ae=u("Card Props"),ne=u("CardActions Props"),re=u("CardAvatar Props"),le=u("CardHeader Props"),ie=u("CardHeaderText Props"),ue=u("CardImage Props"),de=u("CardSubtitle Props"),oe=u("CardText Props"),ce=u("CardTitle Props"),se=(e("__pageData",{title:"卡片 Card",headers:[{level:1,title:"卡片 Card",slug:"卡片-card"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"卡片形状",slug:"卡片形状"},{level:3,title:"可点击",slug:"可点击"},{level:3,title:"所有可用的组件（插槽）",slug:"所有可用的组件（插槽）"},{level:3,title:"卡片密度",slug:"卡片密度"},{level:3,title:"简洁的个人名片",slug:"简洁的个人名片"},{level:3,title:"个人名片",slug:"个人名片"},{level:2,title:"API",slug:"api"},{level:3,title:"Card Props",slug:"card-props"},{level:3,title:"CardActions Props",slug:"cardactions-props"},{level:3,title:"CardAvatar Props",slug:"cardavatar-props"},{level:3,title:"CardHeader Props",slug:"cardheader-props"},{level:3,title:"CardHeaderText Props",slug:"cardheadertext-props"},{level:3,title:"CardImage Props",slug:"cardimage-props"},{level:3,title:"CardSubtitle Props",slug:"cardsubtitle-props"},{level:3,title:"CardText Props",slug:"cardtext-props"},{level:3,title:"CardTitle Props",slug:"cardtitle-props"}],frontmatter:{category:"Data 数据展示"}}),{});e("default",Object.assign(se,{setup:function(e){return function(e,t){var u=a("ve-h1"),d=a("ve-code"),c=a("ve-p"),s=a("ve-h2"),C=a("ve-col"),f=a("ve-row"),m=a("ve-h3"),A=a("ve-table");return n(),r("div",null,[l(u,{id:"卡片-card",tabindex:"-1"},{default:i((function(){return[J]})),_:1}),l(c,null,{default:i((function(){return[l(d,null,{default:i((function(){return[N]})),_:1}),Q,l(d,null,{default:i((function(){return[S]})),_:1}),$]})),_:1}),l(s,{id:"演示",tabindex:"-1"},{default:i((function(){return[ee]})),_:1}),l(f,null,{default:i((function(){return[l(C,{cols:"12",md:"6"},{default:i((function(){return[l(f,null,{default:i((function(){return[l(C,{cols:"12"},{default:i((function(){return[l(o(p))]})),_:1}),l(C,{cols:"12"},{default:i((function(){return[l(o(v))]})),_:1}),l(C,{cols:"12"},{default:i((function(){return[l(o(g))]})),_:1}),l(C,{cols:"12"},{default:i((function(){return[l(o(B))]})),_:1})]})),_:1})]})),_:1}),l(C,{cols:"12",md:"6"},{default:i((function(){return[l(f,null,{default:i((function(){return[l(C,{cols:"12"},{default:i((function(){return[l(o(k))]})),_:1}),l(C,{cols:"12"},{default:i((function(){return[l(o(q))]})),_:1}),l(C,{cols:"12"},{default:i((function(){return[l(o(I))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(s,{id:"api",tabindex:"-1"},{default:i((function(){return[te]})),_:1}),l(m,{id:"card-props",tabindex:"-1"},{default:i((function(){return[ae]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"link",type:"boolean",default:"false"},{name:"hover",type:"boolean",default:"false"},{name:"image",type:"string"},{name:"prepend-avatar",type:"string"},{name:"prepend-icon",type:"string"},{name:"append-avatar",type:"string"},{name:"append-icon",type:"string"},{name:"title",type:"string"},{name:"subtitle",type:"string"},{name:"divided",type:"boolean",default:"false"},{name:"text",type:"string"},{name:"ripple",type:"boolean",default:"true"},{name:"tag",type:"string",default:'"div"'},{name:"theme",type:"string"},{name:"color",type:"string | boolean",default:"false"},{name:"text-color",type:"string | boolean",default:"false"},{name:"variant",type:"string",default:'"contained"'},{name:"absolute",type:"boolean",default:"false"},{name:"bottom",type:"boolean | number | string",default:"false"},{name:"fixed",type:"boolean",default:"false"},{name:"left",type:"boolean | number | string",default:"false"},{name:"position",type:"string"},{name:"right",type:"boolean | number | string",default:"false"},{name:"top",type:"boolean | number | string",default:"false"},{name:"height",type:"number | string"},{name:"max-height",type:"number | string"},{name:"max-width",type:"number | string"},{name:"min-height",type:"number | string"},{name:"min-width",type:"number | string"},{name:"width",type:"number | string"},{name:"size",type:"string | number"},{name:"density",type:"string",default:'"medium"'},{name:"border",type:"boolean | number | string",default:"false"},{name:"shape",type:"string"},{name:"elevation",type:"number | string"},{name:"href",type:"string"},{name:"replace",type:"boolean",default:"false"},{name:"to",type:"string | object"},{name:"loading",type:"boolean",default:"false"},{name:"disabled",type:"boolean",default:"false"}]}),l(m,{id:"cardactions-props",tabindex:"-1"},{default:i((function(){return[ne]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardavatar-props",tabindex:"-1"},{default:i((function(){return[re]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardheader-props",tabindex:"-1"},{default:i((function(){return[le]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardheadertext-props",tabindex:"-1"},{default:i((function(){return[ie]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardimage-props",tabindex:"-1"},{default:i((function(){return[ue]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardsubtitle-props",tabindex:"-1"},{default:i((function(){return[de]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardtext-props",tabindex:"-1"},{default:i((function(){return[oe]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]}),l(m,{id:"cardtitle-props",tabindex:"-1"},{default:i((function(){return[ce]})),_:1}),l(A,{pagination:!1,headers:[{text:"属性名",value:"name"},{text:"类型",value:"type"},{text:"默认值",value:"default"}],items:[{name:"tag",type:"string",default:'"div"'}]})])}}}))}}}));