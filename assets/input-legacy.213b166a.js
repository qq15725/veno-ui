!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw a}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o=document.createElement("style");o.innerHTML='.ve-counter{color:rgba(var(--ve-theme-on-surface),var(--ve-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;line-height:12px;transition-duration:.15s}.ve-input-control{--ve-input-control-padding-before: 0;--ve-input-control-padding-after: 0;--ve-native-control-padding-before: 16px;--ve-native-control-padding-after: 16px;--ve-native-control-padding-top: 6px;--ve-native-control-padding-bottom: 6px;position:relative;display:flex;align-items:center;border-radius:4px;flex:1 0;grid-area:control;height:var(--ve-form-control-height, 42px);color:rgb(var(--ve-theme-on-secondary));background-color:rgb(var(--ve-theme-secondary));border:1px solid transparent;transition:.1s cubic-bezier(0,0,.2,1);transition-property:color,background-color,border-color}.ve-input-control--disabled{opacity:var(--ve-disabled-opacity);pointer-events:none}.ve-input-control--focused{color:rgb(var(--ve-theme-on-surface));background-color:rgb(var(--ve-theme-surface));border-color:rgb(var(--ve-theme-primary))}.ve-input-control--prepended{--ve-native-control-padding-before: 6px;padding-inline-start:12px}.ve-input-control--prefixed{--ve-native-control-padding-before: 6px;--ve-input-control-padding-before: 12px}.ve-input-control--suffixed{--ve-native-control-padding-after: 6px;--ve-input-control-padding-after: 12px}.ve-input-control--appended{--ve-native-control-padding-after: 6px;padding-inline-end:12px}.ve-input-control__prepend-inner,.ve-input-control__prefix,.ve-input-control__suffix,.ve-input-control__clearable,.ve-input-control__append-inner{position:relative;display:inline-flex;align-items:center;height:100%;white-space:nowrap}.ve-input-control__prefix,.ve-input-control__suffix{opacity:var(--ve-medium-emphasis-opacity)}.ve-input-control__input{position:relative;display:flex;align-items:center;flex:1 0;height:100%;cursor:text;padding-inline-start:var(--ve-input-control-padding-before);padding-inline-end:var(--ve-input-control-padding-after)}.ve-input-control .ve-native-control{display:flex;align-items:center;width:100%;height:100%;padding-inline-start:var(--ve-native-control-padding-before, 0);padding-inline-end:var(--ve-native-control-padding-after, 0);padding-block-start:var(--ve-native-control-padding-top, 0);padding-block-end:var(--ve-native-control-padding-bottom, 0);opacity:var(--ve-high-emphasis-opacity);cursor:inherit}.ve-input-control .ve-native-control:focus,.ve-input-control .ve-native-control:active{outline:none}.ve-input-control .ve-native-control:invalid{box-shadow:none}.ve-input-control__clearable+.ve-input-control__suffix{margin-inline-start:6px}.ve-input-control__clearable{opacity:0;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.ve-input-control__clearable .ve-button{font-size:16px;min-width:20px;min-height:20px;border-radius:50%}.ve-input-control--focused .ve-input-control__clearable,.ve-input-control:hover .ve-input-control__clearable{opacity:1}.ve-input-control:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";border-radius:inherit;background-color:currentColor;opacity:0;pointer-events:none}.ve-input-control:not(.ve-input-control--active):hover:before{opacity:calc(.04 * var(--ve-theme-overlay-multiplier))}.ve-input .ve-native-control{flex:1;opacity:1;transition:.15s opacity cubic-bezier(.4,0,.2,1)}.ve-form-control--density-medium.ve-input--textarea{--ve-input--textarea-line-height: 1.75}.ve-form-control--density-comfortable.ve-input--textarea{--ve-input--textarea-line-height: 1.375}.ve-form-control--density-compact.ve-input--textarea{--ve-input--textarea-line-height: 1}.ve-input--textarea .ve-native-control{align-self:stretch;flex:1 1 auto;outline:none;line-height:var(--ve-input--textarea-line-height, 1.75)}.ve-input--textarea.ve-form-control--horizontal .ve-form-control__label{align-items:start;line-height:var(--ve-input--textarea-line-height, 1.75);padding-block-start:6px}.ve-input--no-resize .ve-native-control{resize:none}.ve-input--auto-grow .ve-native-control{overflow:hidden}.ve-input__sizer{visibility:hidden;position:absolute;top:0;left:0;height:0!important;pointer-events:none}\n',document.head.appendChild(o),System.register(["./vendor-legacy.9e97ed44.js","./index-legacy.6c67f7c5.js","./form-control-legacy.50ae496c.js","./index-legacy.f1cff6da.js"],(function(t){"use strict";var r,o,i,a,l,u,c,p,v,d,f,s,y,b,m,g,x,h,_,w,k,I,S,C,O,j,V,F,R,B,z,P,A;return{setters:[function(e){r=e.d,o=e.c,i=e.b,a=e.x,l=e.L,u=e.r,c=e.a,p=e.v,v=e.w,d=e.o,f=e.D,s=e.m,y=e.F,b=e.a4,m=e.y,g=e.a3},function(e){x=e.m,h=e.F,_=e.M,w=e.p,k=e.g,I=e.e,S=e.l,C=e.I,O=e.B,j=e.i,V=e.y,F=e.o,R=e.D},function(e){B=e.m,z=e.f,P=e.F},function(e){A=e.I}],execute:function(){t("f",(function(e){return j(e,Object.keys(ae.props))}));var N=Object.defineProperty,U=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,G=function(e,n,t){return n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},M=r({name:"VeCounter",functional:!0,props:function(e,t){for(var r in t||(t={}))E.call(t,r)&&G(e,r,t[r]);if(U){var o,i=n(U(t));try{for(i.s();!(o=i.n()).done;){r=o.value;D.call(t,r)&&G(e,r,t[r])}}catch(a){i.e(a)}finally{i.f()}}return e}({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0}},x({transition:{component:h}})),setup:function(e,n){var t=n.slots,r=o((function(){return e.max?"".concat(e.value," / ").concat(e.max):String(e.value)}));return function(){return i(_,{transition:e.transition},{default:function(){return[a(i("div",{class:"ve-counter"},[t.default?t.default({counter:r.value,max:e.max,value:e.value}):r.value],512),[[l,e.active]])]}},8,["transition"])}}}),H=Object.defineProperty,T=Object.defineProperties,L=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,K=function(e,n,t){return n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},Q=function(e,t){for(var r in t||(t={}))q.call(t,r)&&K(e,r,t[r]);if($){var o,i=n($(t));try{for(i.s();!(o=i.n()).done;){r=o.value;J.call(t,r)&&K(e,r,t[r])}}catch(a){i.e(a)}finally{i.f()}}return e};var W=w({prefix:String,prefixIcon:String,suffix:String,suffixIcon:String,clearable:Boolean,clearIcon:{type:String,default:"$clear"},disabled:Boolean},"input-control"),X=k()({name:"VeInputControl",props:Q({active:Boolean,dirty:Boolean},W()),emits:{"click:clear":function(e){return!0},"click:prepend-inner":function(e){return!0},"click:prefix":function(e){return!0},"click:suffix":function(e){return!0},"click:append-inner":function(e){return!0},"click:control":function(e){return!0},"update:active":function(e){return!0},"update:modelValue":function(e){return!0}},setup:function(e,n){var t=n.slots,r=n.emit,p=I(e,"active"),v=u(!1),d=u(),f=u();function s(){v.value=!0}function y(){v.value=!1}c((function(){return p.value=v.value||e.dirty}));var b=o((function(){return{isActive:p.value,isDirty:e.dirty,isFocused:v.value,controlRef:d,inputRef:f,focus:s,blur:y}}));function m(e){e.target!==document.activeElement&&e.preventDefault(),r("click:control",e)}return S((function(){var n,o,u,c,d,f,s,y,g,x,_,w=!!t.prependInner,k=t.prefix||e.prefix||e.prefixIcon,I=!(!e.clearable&&!t.clear),S=t.suffix||e.suffix||e.suffixIcon,j=!!t.appendInner;return i("div",{class:["ve-input-control",{"ve-input-control--active":p.value,"ve-input-control--disabled":e.disabled,"ve-input-control--dirty":e.dirty,"ve-input-control--focused":v.value,"ve-input-control--prepended":w,"ve-input-control--prefixed":k,"ve-input-control--suffixed":I||S,"ve-input-control--appended":j}],onClick:m},[w&&i("div",{class:"ve-input-control__prepend-inner",onClick:function(e){return r("click:prepend-inner",e)}},[null==(n=t.prependInner)?void 0:n.call(t,b.value)],8,["onClick"]),i("div",{class:"ve-input-control__input"},[k&&i("span",{class:"ve-input-control__prefix",onClick:function(e){return r("click:prefix",e)}},[null!=(c=null!=(u=null==(o=t.prefix)?void 0:o.call(t,b.value))?u:e.prefix)?c:i(C,{icon:e.prefixIcon},null,8,["icon"])],8,["onClick"]),null==(d=t.default)?void 0:d.call(t,(x=Q({},b.value),_={props:{class:"ve-native-control"}},T(x,L(_)))),I&&i(h,null,{default:function(){var n,o;return[a(i("div",{class:"ve-input-control__clearable",onClick:function(e){return r("click:clear",e)}},[null!=(o=null==(n=t.clear)?void 0:n.call(t,b.value))?o:i(O,{icon:e.clearIcon,color:"transparent"},null,8,["icon"])],8,["onClick"]),[[l,e.dirty]])]}}),S&&i("span",{class:"ve-input-control__suffix",onClick:function(e){return r("click:suffix",e)}},[null!=(y=null!=(s=null==(f=t.suffix)?void 0:f.call(t,b.value))?s:e.suffix)?y:i(C,{icon:e.suffixIcon},null,8,["icon"])],8,["onClick"])]),j&&i("div",{class:"ve-input-control__append-inner",onClick:function(e){return r("click:append-inner",e)}},[null==(g=t.appendInner)?void 0:g.call(t,b.value)],8,["onClick"])],10,["onClick"])})),{inputRef:f,controlRef:d}}}),Y=Object.defineProperty,Z=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,te=function(e,n,t){return n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},re=function(e,t){for(var r in t||(t={}))ee.call(t,r)&&te(e,r,t[r]);if(Z){var o,i=n(Z(t));try{for(i.s();!(o=i.n()).done;){r=o.value;ne.call(t,r)&&te(e,r,t[r])}}catch(a){i.e(a)}finally{i.f()}}return e},oe=["color","file","time","date","datetime-local","week","month"],ie=t("m",w(re(re({id:String,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,persistentCounter:Boolean,placeholder:String,type:{type:String,default:"text"},autoGrow:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseFloat(e))}},maxRows:{type:[Number,String],validator:function(e){return!isNaN(parseFloat(e))}}},B()),W()),"input"));var ae=t("I",k()({name:"VeInput",inheritAttrs:!1,directives:{Intersect:A},props:ie(),emits:{"update:modelValue":function(e){return!0},"click:control":function(e){return!0}},setup:function(n,t){var r=t.attrs,l=t.slots,c=t.emit,x=u(),h=u(),_=u("auto"),w=I(n,"modelValue"),k=V(),C=o((function(){return n.id||"ve-input-".concat(k)})),O=u(!1),B=o((function(){return O.value||!!w.value||oe.includes(n.type)})),A=o((function(){return"function"==typeof n.counterValue?n.counterValue(w.value):(w.value||"").toString().length})),N=o((function(){return r.maxlength?r.maxlength:!n.counter||"number"!=typeof n.counter&&"string"!=typeof n.counter?void 0:n.counter}));function U(){var e,n;null==(n=null==(e=x.value)?void 0:e.inputRef)||n.focus()}function E(e,t){var r,o;n.autofocus&&e&&(null==(o=null==(r=t[0].target)?void 0:r.focus)||o.call(r))}var D,G=u();function H(){n.autoGrow&&f((function(){if(G.value){var e=getComputedStyle(G.value),t=parseFloat(e.getPropertyValue("--ve-native-control-padding-top"))+parseFloat(e.getPropertyValue("--ve-native-control-padding-bottom")),r=G.value.scrollHeight,o=parseFloat(e.lineHeight),i=parseFloat(String(n.rows))*o+t,a=parseFloat(String(n.maxRows))*o+t||1/0;_.value=F(Math.min(a,Math.max(i,null!=r?r:0)))}}))}return p(H),v(w,H),v((function(){return n.density}),H),v((function(){return n.rows}),H),v((function(){return n.maxRows}),H),v(G,(function(e){e?(D=new ResizeObserver(H)).observe(G.value):null==D||D.disconnect()})),d((function(){null==D||D.disconnect()})),S((function(){var t="textarea"===n.type,o=!!(l.counter||n.counter||n.counterValue),u=e(R(r),2),p=u[0],v=u[1],d=e(z(n),1)[0],f=function(e){return j(e,Object.keys(X.props))}(n),k=e(f,1)[0],I=t?{"--ve-form-control-height":_.value}:{};return i(P,s(d,{ref:h,class:["ve-input",{"ve-input--textarea":t,"ve-input--auto-grow":n.autoGrow,"ve-input--no-resize":n.noResize||n.autoGrow}],"label-id":C.value,style:I,role:"textbox"},p),{prepend:l.prepend,label:l.label,default:function(e){var r=e.isDisabled,o=e.isReadonly,u=e.props;return i(X,s(k,{ref:x,dirty:!!w.value,active:B.value,"onUpdate:active":function(e){O.value=e},"onClick:clear":function(e){e.stopPropagation(),w.value=""},"onClick:control":function(e){U(),c("click:control",e)}},u),{prependInner:l.prependInner,prefix:l.prefix,default:function(e){var l=e.inputRef,u=e.focus,c=e.blur,p=e.props;return t?i(y,null,[a(i("textarea",s({"onUpdate:modelValue":function(e){return w.value=e},ref:l,autofocus:n.autofocus,readonly:o.value,disabled:r.value,id:C.value,placeholder:n.placeholder,rows:n.rows,onFocus:u,onBlur:c},p,v),null,16,["onUpdate:modelValue","autofocus","readonly","disabled","id","placeholder","rows","onFocus","onBlur"]),[[b,w.value],[m("intersect"),{handler:E},null,{once:!0}]]),n.autoGrow&&a(i("textarea",s({class:["ve-input__sizer"],"onUpdate:modelValue":function(e){return w.value=e},ref:G,readonly:!0,"aria-hidden":"true"},p),null,16,["onUpdate:modelValue","readonly"]),[[b,w.value]])]):a(i("input",s({"onUpdate:modelValue":function(e){return w.value=e},ref:l,autofocus:n.autofocus,readonly:o.value,disabled:r.value,id:C.value,type:n.type,placeholder:n.placeholder,onFocus:u,onBlur:c},p,v),null,16,["onUpdate:modelValue","autofocus","readonly","disabled","id","type","placeholder","onFocus","onBlur"]),[[m("intersect"),{handler:E},null,{once:!0}],[g,w.value]])},suffix:l.suffix,appendInner:l.appendInner,clear:l.clear},16,["dirty","active","onUpdate:active","onClick:clear","onClick:control"])},append:l.append,details:o?function(){return i(y,null,[i("span",null,null),i(M,{active:n.persistentCounter||B.value,value:A.value,max:N.value},l.counter,8,["active","value","max"])])}:void 0},16,["class","label-id","style"])})),{formControlRef:h,inputControlRef:x,blur:function(){var e,n;null==(n=null==(e=x.value)?void 0:e.inputRef)||n.blur()},focus:U}}}))}}}))}();
