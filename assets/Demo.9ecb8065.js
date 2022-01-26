var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{j as s,E as o,k as d,l as c,n as p,d as v,e as u,o as f,p as g,q as b,r as m,s as y,t as h,v as x,w as O,x as _,I as j,A as S,y as k,_ as A,B as w,T as C,S as P}from"./index.59e593d7.js";import{a as I,j as B,F as $,q as z,v as E,C as D,r as q,b as H,O as R,U as T,P as V,Q as W,R as F,S as G,W as L,$ as N,a0 as Q,n as U}from"./vendor.b3232dc0.js";import{C as J}from"./code.3da98d69.js";const K=s("ve-expand-transition",o());var M=Object.defineProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,ee=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const te=["left","center","right"],ae=d()({name:"VeDivider",props:((e,t)=>{for(var a in t||(t={}))Y.call(t,a)&&ee(e,a,t[a]);if(X)for(var a of X(t))Z.call(t,a)&&ee(e,a,t[a]);return e})({textAlign:{type:String,default:"center",validator:e=>te.includes(e)},length:[Number,String],dashed:Boolean,vertical:Boolean},c({tag:"hr"})),setup(e,{attrs:t,slots:a}){const r=I((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=p(e.length)),t}));return()=>{var l;const i=!!a.default,n=i?"div":e.tag,s=null!=(l=t.role)?l:"separator";return B(n,{class:["ve-divider",{"ve-divider--dashed":e.dashed,"ve-divider--vertical":e.vertical,"ve-divider--text":i,"ve-divider--text-left":"left"===e.textAlign,"ve-divider--text-right":"right"===e.textAlign}],style:[r.value],"aria-orientation":"separator"===s?e.vertical?"vertical":"horizontal":void 0,role:s},{default:i?()=>{var e;return[B($,null,[B("div",{class:"ve-divider__line"},null),B("div",{class:"ve-divider__wrap"},[null==(e=a.default)?void 0:e.call(a)]),B("div",{class:"ve-divider__line"},null)])]}:void 0},8,["class","style","aria-orientation","role"])}}}),re=v("ve-card-image"),le=v("ve-card-avatar"),ie=v("ve-card-header"),ne=v("ve-card-header-text"),se=v("ve-card-title"),oe=v("ve-card-subtitle"),de=v("ve-card-text"),ce=v("ve-card-actions");var pe=Object.defineProperty,ve=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ge=(e,t,a)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,be=(e,t)=>{for(var a in t||(t={}))ue.call(t,a)&&ge(e,a,t[a]);if(ve)for(var a of ve(t))fe.call(t,a)&&ge(e,a,t[a]);return e};const me=u({name:"VeCard",directives:{Ripple:f},props:be(be(be(be({link:Boolean,hover:Boolean,image:String,prependAvatar:String,prependIcon:String,appendAvatar:String,appendIcon:String,title:String,subtitle:String,divided:Boolean,text:String,ripple:{type:Boolean,default:!0}},b({size:void 0})),m()),y()),g()),setup(e,{attrs:t,slots:a}){const{paperClasses:r,paperStyles:l}=h(e),i=x(e,t),{loadingClasses:n}=O(e),{disabledClasses:s}=_(e);return()=>{let t;const o=i.isLink.value?"a":e.tag,d=!(!a.image&&!e.image),c=!(!a.title&&!e.title),p=!(!a.subtitle&&!e.subtitle),v=c||p,u=!!(a.prepend||e.prependAvatar||e.prependIcon),f=!!(a.append||e.appendAvatar||e.appendIcon),g=v||u||f,b=!(!a.text&&!e.text),m=!e.disabled&&(i.isClickable.value||e.link);return z(B(o,{class:["ve-card",{"ve-card--hover":e.hover&&!e.disabled,"ve-card--link":m},r.value,n.value,s.value],style:l.value,href:i.href.value,onClick:m&&i.navigate},{default:()=>{var r,l,i;return[m&&B("div",{class:"ve-card__overlay"},null),d&&B(re,null,{default:()=>{var t;return[a.image?null==(t=a.image)?void 0:t.call(a,{src:e.image}):B(j,{src:e.image,cover:!0,alt:""},null,8,["src","cover"])]}}),null==(r=a.media)?void 0:r.call(a),g&&B(ie,null,{default:()=>[u&&B(le,null,{default:()=>[a.prepend?a.prepend():B(S,{color:!1,variant:"text",icon:e.prependIcon,image:e.prependAvatar},null,8,["icon","image"])]}),v&&B(ne,null,{default:()=>[c&&B(se,null,{default:()=>[a.title?a.title():e.title]}),p&&B(oe,null,{default:()=>[a.subtitle?a.subtitle():e.subtitle]})],_:1}),f&&B(le,null,{default:()=>[a.append?a.append():B(S,{color:!1,variant:"text",icon:e.appendIcon,image:e.appendAvatar},null,8,["icon","image"])]})],_:1}),e.divided&&B(ae,null,null),b&&B(de,null,{default:()=>[a.text?a.text():e.text]}),null==(l=a.default)?void 0:l.call(a),a.actions&&e.divided&&B(ae,null,null),a.actions&&B(ce,null,(i=t=a.actions(),"function"==typeof i||"[object Object]"===Object.prototype.toString.call(i)&&!D(i)?t:{default:()=>[t],_:1}))]},_:1},8,["class","style","href","onClick"]),[[E("ripple"),m&&e.ripple]])}}}),ye=q(),he=H({name:"Demo",props:{title:String,slug:String,file:String,code:String},setup(e){const{repository:s}=k();return o=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&n(e,a,t[a]);return e})({},e),d={repository:s,theme:q(),isActive:q(!1),btn:ye,focusBtn:()=>{setTimeout((()=>{var e,t,a;return null==(a=null==(t=null==(e=ye.value)?void 0:e.$el)?void 0:t.focus)?void 0:a.call(t)}),0)}},t(o,a(d));var o,d}}),xe=["id"],Oe={class:"mt-2"};var _e=A(he,[["render",function(e,t,a,r,l,i){const n=se,s=w,o=de,d=me,c=C,p=P,v=J,u=K;return R(),T("div",{id:e.slug},[e.title?(R(),V(n,{key:0,class:"px-0 pt-0"},{default:W((()=>[F(G(e.title),1)])),_:1})):L("",!0),N(e.$slots,"prepend"),B(d,{theme:e.theme},{default:W((()=>[B(s,{ref:"btn",absolute:"",border:"0",icon:"",variant:"text",tabindex:"-1","aria-label":"此容器仅用于测试组件键盘导航功能。",color:"transparent",style:{"pointer-events":"none"}},null,512),B(o,{class:"p-6"},{default:W((()=>[N(e.$slots,"default")])),_:3})])),_:3},8,["theme"]),N(e.$slots,"append"),Q("div",Oe,[B(p,{gutter:"md",justify:"end"},{default:W((()=>[B(c,{text:e.isActive?"隐藏源代码":"查看源代码","open-delay":300,anchor:"top"},{activator:W((({props:a})=>[B(s,U(a,{onClick:t[0]||(t[0]=t=>e.isActive=!e.isActive),color:e.isActive?"primary":void 0,icon:"mdi-code-tags",variant:"text",size:"xs"}),null,16,["color"])])),_:1},8,["text"]),B(c,{text:"重置焦点以测试键盘导航","open-delay":300,anchor:"top"},{activator:W((({props:t})=>[B(s,U(t,{onClick:e.focusBtn,icon:"mdi-image-filter-center-focus-strong-outline",variant:"text",tabindex:"-1",size:"xs"}),null,16,["onClick"])])),_:1}),B(c,{text:"反转示例颜色","open-delay":300,anchor:"top"},{activator:W((({props:a})=>[B(s,U(a,{onClick:t[1]||(t[1]=t=>e.theme="dark"===e.theme?"light":"dark"),icon:"dark"===e.theme?"mdi-weather-sunny":"mdi-weather-night",variant:"text",tabindex:"-1",size:"xs"}),null,16,["icon"])])),_:1}),B(c,{text:"在 GitHub 中查看源代码","open-delay":300,anchor:"top"},{activator:W((({props:t})=>[B(s,U(t,{href:`${e.repository}${e.file}`,target:"_blank",icon:"mdi-github",variant:"text",tabindex:"-1",size:"xs"}),null,16,["href"])])),_:1})])),_:1})]),B(u,null,{default:W((()=>[e.isActive?(R(),V(v,{key:0,value:e.code,language:"vue","show-language":!1,class:"mt-3"},null,8,["value"])):L("",!0)])),_:1})],8,xe)}]]);export{me as C,ae as D,K as E,_e as _,de as a,le as b,se as c,oe as d,ne as e,ie as f,ce as g};