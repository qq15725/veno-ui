var e=(e,l,a)=>new Promise(((n,r)=>{var t=e=>{try{i(a.next(e))}catch(l){r(l)}},o=e=>{try{i(a.throw(e))}catch(l){r(l)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(t,o);i((a=a.apply(e,l)).next())}));import{k as l,m as a,F as n,w as r,M as t,p as o,K as i,e as s,H as u,z as d,D as c,g as v,J as p,l as f,i as m,I as b,o as g}from"./index.410c00f7.js";import{L as y}from"./label.1d978147.js";import{c as h,a as V,r as k,p as O,i as S,u as D,H as j,o as C}from"./vendor.ff7a2168.js";var _=Object.defineProperty,I=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,B=(e,l,a)=>l in e?_(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;const M=l({name:"VeMessages",props:((e,l)=>{for(var a in l||(l={}))P.call(l,a)&&B(e,a,l[a]);if(I)for(var a of I(l))w.call(l,a)&&B(e,a,l[a]);return e})({active:Boolean,value:{type:[Array,String],default:()=>[]}},a({transition:{component:n,group:!0}})),setup(e,{slots:l}){const a=h((()=>r(e.value)));return()=>V(t,{transition:e.transition,tag:"div",class:"ve-messages"},{default:()=>{var n;return[a.value.length>0&&e.active&&a.value.map(((e,l)=>V("div",{class:"ve-messages__message",key:l},[e]))),null==(n=null==l?void 0:l.default)?void 0:n.call(l)]},_:1},8,["transition"])}}),x=Symbol.for("veno-ui:form"),E=o({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}});function F(l){const a=i("createForm"),n=s(l,"modelValue"),r=h((()=>l.disabled)),t=h((()=>l.readonly)),o=k(!1),u=k([]),d=k([]);return O(x,{register:(e,l,a,n)=>{u.value.push({id:e,validate:l,reset:a,resetValidation:n})},unregister:e=>{u.value=u.value.filter((l=>l.id!==e))},isDisabled:r,isReadonly:t,isValidating:o,items:u}),{errorMessages:d,isDisabled:r,isReadonly:t,isValidating:o,items:u,submit:function(r){return e(this,null,(function*(){r.preventDefault();const e=[];let t=!0;d.value=[],n.value=null,o.value=!0;for(const a of u.value){const n=yield a.validate();if(n.length>0&&(t=!1,e.push({id:a.id,errorMessages:n})),!t&&l.fastFail)break}d.value=e,n.value=t,o.value=!1,null==a||a.emit("submit",r)}))},reset:function(l){return e(this,null,(function*(){l.preventDefault(),u.value.forEach((e=>e.reset())),n.value=null,null==a||a.emit("reset",l)}))},resetValidation:function(){return e(this,null,(function*(){u.value.forEach((e=>e.resetValidation())),d.value=[],n.value=null,null==a||a.emit("resetValidation")}))}}}const R=["horizontal","vertical"],$=o({direction:{type:String,default:"horizontal",validator:e=>R.includes(e)}},"form-control-direction");const z=o({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null});function A(l,a=u()){const n=S(x,null),r=k([]),t=k(!0),o=h((()=>!!l.disabled)),s=h((()=>!!l.readonly)),c=h((()=>{var e;return!(l.error||(null==(e=l.errorMessages)?void 0:e.length)||r.value.length)&&(!t.value||null)})),v=k(!1),p=h((()=>({[`${a}--error`]:!1===c.value,[`${a}--disabled`]:o.value,[`${a}--readonly`]:s.value}))),f=i("useValidation"),m=h((()=>{var e;return null!=(e=l.name)?e:d()}));function b(){g(),null==f||f.emit("update:modelValue",null)}function g(){t.value=!0,r.value=[]}function y(){return e(this,null,(function*(){var e,a;const n=[];r.value=[],v.value=!0;for(const r of l.rules){if(n.length>=(l.maxErrors||1))break;const t="function"==typeof r?r:()=>r,o=yield t(null!=(a=null==(e=null==l?void 0:l.modelValue)?void 0:e.value)?a:l.modelValue);!0!==o&&("string"==typeof o?n.push(o):console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))}return r.value=n,v.value=!1,t.value=!1,r.value}))}return j((()=>{null==n||n.register(m.value,y,b,g)})),C((()=>{null==n||n.unregister(m.value)})),{errorMessages:r,isDisabled:o,isReadonly:s,isPristine:t,isValid:c,isValidating:v,reset:b,resetValidation:g,validate:y,validationClasses:p}}var H=Object.defineProperty,N=Object.defineProperties,W=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,q=(e,l,a)=>l in e?H(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,G=(e,l)=>{for(var a in l||(l={}))K.call(l,a)&&q(e,a,l[a]);if(J)for(var a of J(l))L.call(l,a)&&q(e,a,l[a]);return e};function Q(e){return m(e,Object.keys(U.props))}const T=o(G(G(G({appendIcon:String,prependIcon:String,label:String,labelId:String,labelWidth:[String,Number],hideDetails:[Boolean,String],hint:String,messages:{type:[Array,String],default:()=>[]},persistentHint:Boolean},$()),c()),z()),"form-control"),U=v()({name:"VeFormControl",props:G({focused:Boolean},T()),emits:{"click:prepend":e=>!0,"click:label":e=>!0,"click:append":e=>!0},setup(e,{slots:l,emit:a}){const{formControlDirectionClasses:n}=function(e,l=u()){return{formControlDirectionClasses:h((()=>{const{direction:a}=D(e);return`${l}--${a}`}))}}(e),{densityClasses:r}=p(e),{errorMessages:t,isDisabled:o,isReadonly:i,isPristine:s,isValid:d,isValidating:c,reset:v,resetValidation:m,validate:k,validationClasses:O}=A(e),S=h((()=>({isDisabled:o,isReadonly:i,isPristine:s,isValid:d,isValidating:c,reset:v,resetValidation:m,validate:k})));return f((()=>{var i,s,u,c,v;const p=!(!l.prepend&&!e.prependIcon),f=!(!l.label&&!e.label),m=!(!l.append&&!e.appendIcon),h=!(!l.hint&&!e.hint),k=!!(l.messages||(null==(i=e.messages)?void 0:i.length)||t.value.length),D=!e.hideDetails||"auto"===e.hideDetails&&(k||h),j=k||h&&(e.persistentHint||e.focused);return V("div",{class:["ve-form-control",{"ve-form-control--hide-details":e.hideDetails},n.value,r.value,O.value]},[p&&V("div",{class:"ve-form-control__prepend",onClick:e=>a("click:prepend",e)},[e.prependIcon&&V(b,{icon:e.prependIcon},null,8,["icon"]),null==(s=l.prepend)?void 0:s.call(l,S.value)],8,["onClick"]),f&&V(y,{class:"ve-form-control__label",disabled:o.value,error:!1===d.value,onClick:e=>a("click:label",e),for:e.labelId,style:{width:g(e.labelWidth)}},{default:()=>{var a;return[e.label,null==(a=l.label)?void 0:a.call(l,S.value)]},_:1},8,["disabled","error","onClick","for","style"]),null==(u=l.default)?void 0:u.call(l,(C=G({},S.value),_={props:{class:"ve-form-control__control"}},N(C,W(_)))),m&&V("div",{class:"ve-form-control__append",onClick:e=>a("click:append",e)},[e.appendIcon&&V(b,{icon:e.appendIcon},null,8,["icon"]),null==(c=null==l?void 0:l.append)?void 0:c.call(l,S.value)],8,["onClick"]),D&&V("div",{class:"ve-form-control__details"},[V(M,{active:j,value:k?e.messages:[e.hint]},{default:l.messages},8,["active","value"]),null==(v=l.details)?void 0:v.call(l,S.value)])],2);var C,_})),{}}});export{U as F,E as a,$ as b,F as c,Q as f,T as m};
