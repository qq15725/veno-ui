import{k as e,z as l,F as t,q as a,t as o,D as r,g as n,A as s,B as i,M as c}from"./index.59e593d7.js";import{a as u,j as p}from"./vendor.b3232dc0.js";var v=Object.defineProperty,d=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,l,t)=>l in e?v(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,_=(e,l)=>{for(var t in l||(l={}))y.call(l,t)&&m(e,t,l[t]);if(d)for(var t of d(l))f.call(l,t)&&m(e,t,l[t]);return e};const b=["success","info","warning","error"],g=e()({name:"VeAlert",props:_(_({modelValue:{type:Boolean,default:!0},title:String,text:String,type:{type:String,validator:e=>b.includes(e)},icon:{type:[Boolean,String],default:null},closable:Boolean,closeIcon:{type:String,default:"$close"},overlayColor:String},a()),l({transition:{component:t}})),emits:{"update:modelValue":e=>!0},setup(e,{slots:l}){const{paperClasses:t,paperStyles:a}=o(e),v=u((()=>{var l;return null!=(l=e.textColor)?l:e.type})),{textColorClasses:d,textColorStyles:y}=r(u((()=>{var l;return null!=(l=e.overlayColor)?l:v.value}))),f=n(e,"modelValue"),m=u((()=>e.icon?e.icon:`$${e.type}`));function _(e){f.value=!1}return()=>{const o=!1!==e.icon&&(e.type||e.icon),r=e.closable||l.action,n=e.text||l.default;return p(c,{transition:e.transition},{default:()=>[f.value&&p(e.tag,{role:"alert",class:["ve-alert",t.value],style:a.value},{default:()=>{var t,a,c,u;return[p("div",{class:["ve-alert__overlay",d.value],style:y.value},null,6),o&&p(s,{class:"ve-alert__icon",icon:m.value,color:"transparent","text-color":v.value},null,8,["icon","text-color"]),p("div",{class:"ve-alert__wrapper"},[e.title&&p("div",{class:"ve-alert__title"},[e.title]),n&&p("div",{class:"ve-alert__content"},[null!=(a=e.text)?a:null==(t=l.default)?void 0:t.call(l)])]),r&&p("div",{class:"ve-alert__action"},[null!=(u=null==(c=l.action)?void 0:c.call(l,{props:{onClick:_}}))?u:p(i,{icon:e.closeIcon,color:"transparent",onClick:_},null,8,["icon","onClick"])])]},_:1},8,["class","style"])]},8,["transition"])}}});export{g as A};