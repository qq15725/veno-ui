import{d as e,c as l,a as n,n as o,G as t,r as a,f as r,l as u,w as i,o as c,A as s,m as p,F as d,a3 as v,q as f,a2 as m}from"./vendor.ff7a2168.js";import{m as b,F as y,M as x,p as g,g as k,e as w,l as I,I as h,B as O,i as C,z as S,o as j,y as V}from"./index.410c00f7.js";import{m as F,f as R,F as B}from"./form-control.5ba717c6.js";import{I as P}from"./index.d1b419e0.js";var _=Object.defineProperty,N=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,G=(e,l,n)=>l in e?_(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n;const D=e({name:"VeCounter",functional:!0,props:((e,l)=>{for(var n in l||(l={}))U.call(l,n)&&G(e,n,l[n]);if(N)for(var n of N(l))z.call(l,n)&&G(e,n,l[n]);return e})({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0}},b({transition:{component:y}})),setup(e,{slots:a}){const r=l((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return()=>n(x,{transition:e.transition},{default:()=>[o(n("div",{class:"ve-counter"},[a.default?a.default({counter:r.value,max:e.max,value:e.value}):r.value],512),[[t,e.active]])]},8,["transition"])}});var E=Object.defineProperty,$=Object.defineProperties,A=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,J=(e,l,n)=>l in e?E(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,K=(e,l)=>{for(var n in l||(l={}))H.call(l,n)&&J(e,n,l[n]);if(M)for(var n of M(l))q.call(l,n)&&J(e,n,l[n]);return e};const L=g({prefix:String,prefixIcon:String,suffix:String,suffixIcon:String,clearable:Boolean,clearIcon:{type:String,default:"veno-ui:$clear"},disabled:Boolean},"input-control"),Q=k()({name:"VeInputControl",props:K({active:Boolean,dirty:Boolean},L()),emits:{"click:clear":e=>!0,"click:prepend-inner":e=>!0,"click:prefix":e=>!0,"click:suffix":e=>!0,"click:append-inner":e=>!0,"click:control":e=>!0,"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,{slots:u,emit:i}){const c=w(e,"active"),s=a(!1),p=a(),d=a();function v(){s.value=!0}function f(){s.value=!1}r((()=>c.value=s.value||e.dirty));const m=l((()=>({isActive:c.value,isDirty:e.dirty,isFocused:s.value,controlRef:p,inputRef:d,focus:v,blur:f})));function b(e){e.target!==document.activeElement&&e.preventDefault(),i("click:control",e)}return I((()=>{var l,a,r,p,d,v,f,x,g;const k=!!u.prependInner,w=u.prefix||e.prefix||e.prefixIcon,I=!(!e.clearable&&!u.clear),C=u.suffix||e.suffix||e.suffixIcon,S=!!u.appendInner;return n("div",{class:["ve-input-control",{"ve-input-control--active":c.value,"ve-input-control--disabled":e.disabled,"ve-input-control--dirty":e.dirty,"ve-input-control--focused":s.value,"ve-input-control--prepended":k,"ve-input-control--prefixed":w,"ve-input-control--suffixed":I||C,"ve-input-control--appended":S}],onClick:b},[k&&n("div",{class:"ve-input-control__prepend-inner",onClick:e=>i("click:prepend-inner",e)},[null==(l=u.prependInner)?void 0:l.call(u,m.value)],8,["onClick"]),n("div",{class:"ve-input-control__input"},[w&&n("span",{class:"ve-input-control__prefix",onClick:e=>i("click:prefix",e)},[null!=(p=null!=(r=null==(a=u.prefix)?void 0:a.call(u,m.value))?r:e.prefix)?p:n(h,{icon:e.prefixIcon},null,8,["icon"])],8,["onClick"]),null==(d=u.default)?void 0:d.call(u,(j=K({},m.value),V={props:{class:"ve-native-control"}},$(j,A(V)))),I&&n(y,null,{default:()=>{var l,a;return[o(n("div",{class:"ve-input-control__clearable",onClick:e=>i("click:clear",e)},[null!=(a=null==(l=u.clear)?void 0:l.call(u,m.value))?a:n(O,{icon:e.clearIcon,color:"transparent"},null,8,["icon"])],8,["onClick"]),[[t,e.dirty]])]}}),C&&n("span",{class:"ve-input-control__suffix",onClick:e=>i("click:suffix",e)},[null!=(x=null!=(f=null==(v=u.suffix)?void 0:v.call(u,m.value))?f:e.suffix)?x:n(h,{icon:e.suffixIcon},null,8,["icon"])],8,["onClick"])]),S&&n("div",{class:"ve-input-control__append-inner",onClick:e=>i("click:append-inner",e)},[null==(g=u.appendInner)?void 0:g.call(u,m.value)],8,["onClick"])],10,["onClick"]);var j,V})),{inputRef:d,controlRef:p}}});var T=Object.defineProperty,W=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,l,n)=>l in e?T(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,ee=(e,l)=>{for(var n in l||(l={}))X.call(l,n)&&Z(e,n,l[n]);if(W)for(var n of W(l))Y.call(l,n)&&Z(e,n,l[n]);return e};const le=["color","file","time","date","datetime-local","week","month"],ne=g(ee(ee({id:String,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,persistentCounter:Boolean,placeholder:String,type:{type:String,default:"text"},autoGrow:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))}},F()),L()),"input");function oe(e){return C(e,Object.keys(te.props))}const te=k()({name:"VeInput",inheritAttrs:!1,directives:{Intersect:P},props:ne(),emits:{"update:modelValue":e=>!0,"click:control":e=>!0},setup(e,{attrs:t,slots:r,emit:b}){const y=a(),x=a(),g=a("auto"),k=w(e,"modelValue"),h=S(),O=l((()=>e.id||`ve-input-${h}`)),F=a(!1),P=l((()=>F.value||!!k.value||le.includes(e.type))),_=l((()=>"function"==typeof e.counterValue?e.counterValue(k.value):(k.value||"").toString().length)),N=l((()=>t.maxlength?t.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter));function U(){var e,l;null==(l=null==(e=y.value)?void 0:e.inputRef)||l.focus()}function z(l,n){var o,t;e.autofocus&&l&&(null==(t=null==(o=n[0].target)?void 0:o.focus)||t.call(o))}const G=a();function E(){e.autoGrow&&s((()=>{if(!G.value)return;const l=getComputedStyle(G.value),n=parseFloat(l.getPropertyValue("--ve-native-control-padding-top"))+parseFloat(l.getPropertyValue("--ve-native-control-padding-bottom")),o=G.value.scrollHeight,t=parseFloat(l.lineHeight),a=parseFloat(String(e.rows))*t+n,r=parseFloat(String(e.maxRows))*t+n||1/0;g.value=j(Math.min(r,Math.max(a,null!=o?o:0)))}))}let $;return u(E),i(k,E),i((()=>e.density),E),i((()=>e.rows),E),i((()=>e.maxRows),E),i(G,(e=>{e?($=new ResizeObserver(E),$.observe(G.value)):null==$||$.disconnect()})),c((()=>{null==$||$.disconnect()})),I((()=>{const l="textarea"===e.type,a=!!(r.counter||e.counter||e.counterValue),[u,i]=V(t),[c]=R(e),[s]=function(e){return C(e,Object.keys(Q.props))}(e),w=l?{"--ve-form-control-height":g.value}:{};return n(B,p(c,{ref:x,class:["ve-input",{"ve-input--textarea":l,"ve-input--auto-grow":e.autoGrow,"ve-input--no-resize":e.noResize||e.autoGrow}],"label-id":O.value,style:w,role:"textbox"},u),{prepend:r.prepend,label:r.label,default:({isDisabled:t,isReadonly:a,props:u})=>n(Q,p(s,{ref:y,dirty:!!k.value,active:P.value,"onUpdate:active":e=>{F.value=e},"onClick:clear":e=>{e.stopPropagation(),k.value=""},"onClick:control":e=>{U(),b("click:control",e)}},u),{prependInner:r.prependInner,prefix:r.prefix,default:({inputRef:r,focus:u,blur:c,props:s})=>l?n(d,null,[o(n("textarea",p({"onUpdate:modelValue":e=>k.value=e,ref:r,autofocus:e.autofocus,readonly:a.value,disabled:t.value,id:O.value,placeholder:e.placeholder,rows:e.rows,onFocus:u,onBlur:c},s,i),null,16,["onUpdate:modelValue","autofocus","readonly","disabled","id","placeholder","rows","onFocus","onBlur"]),[[v,k.value],[f("intersect"),{handler:z},null,{once:!0}]]),e.autoGrow&&o(n("textarea",p({class:["ve-input__sizer"],"onUpdate:modelValue":e=>k.value=e,ref:G,readonly:!0,"aria-hidden":"true"},s),null,16,["onUpdate:modelValue","readonly"]),[[v,k.value]])]):o(n("input",p({"onUpdate:modelValue":e=>k.value=e,ref:r,autofocus:e.autofocus,readonly:a.value,disabled:t.value,id:O.value,type:e.type,placeholder:e.placeholder,onFocus:u,onBlur:c},s,i),null,16,["onUpdate:modelValue","autofocus","readonly","disabled","id","type","placeholder","onFocus","onBlur"]),[[f("intersect"),{handler:z},null,{once:!0}],[m,k.value]]),suffix:r.suffix,appendInner:r.appendInner,clear:r.clear},16,["dirty","active","onUpdate:active","onClick:clear","onClick:control"]),append:r.append,details:a?()=>n(d,null,[n("span",null,null),n(D,{active:e.persistentCounter||P.value,value:_.value,max:N.value},r.counter,8,["active","value","max"])]):void 0},16,["class","label-id","style"])})),{formControlRef:x,inputControlRef:y,blur:function(){var e,l;null==(l=null==(e=y.value)?void 0:e.inputRef)||l.blur()},focus:U}}});export{te as I,oe as f,ne as m};
