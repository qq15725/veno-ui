!function(){function e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function n(e,n,r,t,a,o,i){try{var l=e[o](i),u=l.value}catch(s){return void r(s)}l.done?n(u):Promise.resolve(u).then(t,a)}function r(e){return function(){var r=this,t=arguments;return new Promise((function(a,o){var i=e.apply(r,t);function l(e){n(i,a,o,l,u,"next",e)}function u(e){n(i,a,o,l,u,"throw",e)}l(void 0)}))}}function t(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var o=document.createElement("style");o.innerHTML='.ve-messages{color:rgba(var(--ve-theme-on-surface),var(--ve-medium-emphasis-opacity));flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;position:relative}.ve-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.ve-form-control{--ve-form-control-height: calc(42px + var(--ve-form-control-density-offset, 0px));display:grid;grid-template-areas:"prepend label control append" "a b details c";grid-template-columns:max-content max-content auto max-content;grid-template-rows:auto auto}.ve-form-control--density-compact{--ve-form-control-density-offset: -12px}.ve-form-control--density-comfortable{--ve-form-control-density-offset: -4px}.ve-form-control--density-medium{--ve-form-control-density-offset: 0px}.ve-form-control--horizontal .ve-form-control__label{margin-inline-end:16px;justify-content:end}.ve-form-control--vertical{grid-template-areas:"a label b" "prepend control append" "c details d";grid-template-columns:max-content auto max-content;grid-template-rows:auto auto}.ve-form-control--vertical .ve-form-control__label{margin-block-end:8px}.ve-form-control--disabled{pointer-events:none}.ve-form-control--disabled,.ve-form-control--disabled input{color:rgba(var(--ve-theme-on-surface),var(--ve-disabled-opacity))}.ve-form-control input{color:inherit}.ve-form-control--hide-details+.ve-form-control--hide-details{margin-top:8px}.ve-form-control__prepend,.ve-form-control__append,.ve-form-control__control{display:flex;align-items:center;align-self:center}.ve-form-control__prepend{grid-area:prepend;margin-inline-end:16px}.ve-form-control__label{grid-area:label}.ve-form-control__control{grid-area:control}.ve-form-control__append{grid-area:append;margin-inline-start:16px}.ve-form-control__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:details;line-height:normal;min-height:22px;overflow:hidden;padding-block-start:6px;padding-block-end:6px;padding-inline-start:6px;padding-inline-end:6px;justify-content:space-between}\n',document.head.appendChild(o),System.register(["./index-legacy.0991e0f0.js","./label-legacy.3374845e.js","./vendor-legacy.f35e774c.js"],(function(n){"use strict";var a,o,i,l,u,s,c,d,f,p,v,m,g,b,y,h,x,k,w,_,V,S,j,O,C,R;return{setters:[function(e){a=e.e,o=e.z,i=e.F,l=e.K,u=e.M,s=e.G,c=e.J,d=e.g,f=e.a5,p=e.a0,v=e.a3,m=e.k,g=e.a6,b=e.Q,y=e.O,h=e.P,x=e.n},function(e){k=e.L},function(e){w=e.a,_=e.j,V=e.r,S=e.p,j=e.i,O=e.u,C=e.B,R=e.o}],execute:function(){n({c:function(e){var n=c("createForm"),a=d(e,"modelValue"),o=w((function(){return e.disabled})),i=w((function(){return e.readonly})),l=V(!1),u=V([]),s=V([]);function f(){return(f=r(regeneratorRuntime.mark((function r(o){var i,c,d,f,p,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o.preventDefault(),i=[],c=!0,s.value=[],a.value=null,l.value=!0,d=t(u.value),r.prev=7,d.s();case 9:if((f=d.n()).done){r.next=19;break}return p=f.value,r.next=13,p.validate();case 13:if((v=r.sent).length>0&&(c=!1,i.push({id:p.id,errorMessages:v})),c||!e.fastFail){r.next=17;break}return r.abrupt("break",19);case 17:r.next=9;break;case 19:r.next=24;break;case 21:r.prev=21,r.t0=r.catch(7),d.e(r.t0);case 24:return r.prev=24,d.f(),r.finish(24);case 27:s.value=i,a.value=c,l.value=!1,null==n||n.emit("submit",o);case 31:case"end":return r.stop()}}),r,null,[[7,21,24,27]])})))).apply(this,arguments)}function p(){return(p=r(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),u.value.forEach((function(e){return e.reset()})),a.value=null,null==n||n.emit("reset",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.value.forEach((function(e){return e.resetValidation()})),s.value=[],a.value=null,null==n||n.emit("resetValidation");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return S(E,{register:function(e,n,r,t){u.value.push({id:e,validate:n,reset:r,resetValidation:t})},unregister:function(e){u.value=u.value.filter((function(n){return n.id!==e}))},isDisabled:o,isReadonly:i,isValidating:l,items:u}),{errorMessages:s,isDisabled:o,isReadonly:i,isValidating:l,items:u,submit:function(e){return f.apply(this,arguments)},reset:function(e){return p.apply(this,arguments)},resetValidation:function(){return v.apply(this,arguments)}}},f:function(e){return y(e,Object.keys($.props))}});var I=Object.defineProperty,P=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,A=function(e,n,r){return n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},M=a({name:"VeMessages",props:function(e,n){for(var r in n||(n={}))D.call(n,r)&&A(e,r,n[r]);if(P){var a,o=t(P(n));try{for(o.s();!(a=o.n()).done;){r=a.value;B.call(n,r)&&A(e,r,n[r])}}catch(i){o.e(i)}finally{o.f()}}return e}({active:Boolean,value:{type:[Array,String],default:function(){return[]}}},o({transition:{component:i,group:!0}})),setup:function(e,n){var r=n.slots,t=w((function(){return l(e.value)}));return function(){var n=t.value.length>0&&e.active;return _(u,{transition:e.transition,tag:"div",class:"ve-messages"},{default:function(){var e;return[n&&t.value.map((function(e,n){return _("div",{class:"ve-messages__message",key:n},[e])})),null==(e=null==r?void 0:r.default)?void 0:e.call(r)]},_:1},8,["transition"])}}}),E=Symbol.for("veno-ui:form");n("a",s({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}}));function z(){return j(E,null)}var F=["horizontal","vertical"],H=n("b",s({direction:{type:String,default:"horizontal",validator:function(e){return F.includes(e)}}},"form-control-direction"));var L=s({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:function(){return[]}},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:function(){return[]}},modelValue:null});var N=Object.defineProperty,T=Object.defineProperties,W=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Q=function(e,n,r){return n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},U=function(e,n){for(var r in n||(n={}))J.call(n,r)&&Q(e,r,n[r]);if(G){var a,o=t(G(n));try{for(o.s();!(a=o.n()).done;){r=a.value;K.call(n,r)&&Q(e,r,n[r])}}catch(i){o.e(i)}finally{o.f()}}return e};var Y=n("m",s(U(U(U({appendIcon:String,prependIcon:String,label:String,labelId:String,labelWidth:[String,Number],hideDetails:[Boolean,String],hint:String,messages:{type:[Array,String],default:function(){return[]}},persistentHint:Boolean},H()),v()),L()),"form-control")),$=n("F",m()({name:"VeFormControl",props:U({focused:Boolean},Y()),emits:{"click:prepend":function(e){return!0},"click:label":function(e){return!0},"click:append":function(e){return!0}},setup:function(n,a){var o=a.slots,i=a.emit,l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{formControlDirectionClasses:w((function(){var r=O(e).direction;return"".concat(n,"--").concat(r)}))}}(n),u=l.formControlDirectionClasses,s=g(n).densityClasses,d=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f(),o=z(),i=V([]),l=V(!0),u=w((function(){return!!n.disabled})),s=w((function(){return!!n.readonly})),d=w((function(){var e;return!(n.error||(null==(e=n.errorMessages)?void 0:e.length)||i.value.length)&&(!l.value||null)})),v=V(!1),m=w((function(){var n;return e(n={},"".concat(a,"--error"),!1===d.value),e(n,"".concat(a,"--disabled"),u.value),e(n,"".concat(a,"--readonly"),s.value),n})),g=c("useValidation"),b=w((function(){var e;return null!=(e=n.name)?e:p()}));function y(){h(),null==g||g.emit("update:modelValue",null)}function h(){l.value=!0,i.value=[]}function x(){return k.apply(this,arguments)}function k(){return(k=r(regeneratorRuntime.mark((function e(){var r,a,o,u,s,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[],i.value=[],v.value=!0,u=t(n.rules),e.prev=4,c=regeneratorRuntime.mark((function e(){var t,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.value,!(o.length>=(n.maxErrors||1))){e.next=3;break}return e.abrupt("return","break");case 3:return i="function"==typeof t?t:function(){return t},e.next=6,i(null!=(a=null==(r=null==n?void 0:n.modelValue)?void 0:r.value)?a:n.modelValue);case 6:if(!0!==(l=e.sent)){e.next=9;break}return e.abrupt("return","continue");case 9:if("string"==typeof l){e.next=12;break}return console.warn("".concat(l," is not a valid value. Rule functions must return boolean true or a string.")),e.abrupt("return","continue");case 12:o.push(l);case 13:case"end":return e.stop()}}),e)})),u.s();case 7:if((s=u.n()).done){e.next=16;break}return e.delegateYield(c(),"t0",9);case 9:if("break"!==(d=e.t0)){e.next=12;break}return e.abrupt("break",16);case 12:if("continue"!==d){e.next=14;break}return e.abrupt("continue",14);case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(4),u.e(e.t1);case 21:return e.prev=21,u.f(),e.finish(21);case 24:return i.value=o,v.value=!1,l.value=!1,e.abrupt("return",i.value);case 28:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})))).apply(this,arguments)}return C((function(){null==o||o.register(b.value,x,y,h)})),R((function(){null==o||o.unregister(b.value)})),{errorMessages:i,isDisabled:u,isReadonly:s,isPristine:l,isValid:d,isValidating:v,reset:y,resetValidation:h,validate:x,validationClasses:m}}(n),v=d.errorMessages,m=d.isDisabled,y=d.isReadonly,S=d.isPristine,j=d.isValid,I=d.isValidating,P=d.reset,D=d.resetValidation,B=d.validate,A=d.validationClasses,E=w((function(){return{isDisabled:m,isReadonly:y,isPristine:S,isValid:j,isValidating:I,reset:P,resetValidation:D,validate:B}}));return b((function(){var e,r,t,a,l,c,d,f=!(!o.prepend&&!n.prependIcon),p=!(!o.label&&!n.label),g=!(!o.append&&!n.appendIcon),b=!(!o.hint&&!n.hint),y=!!(o.messages||(null==(e=n.messages)?void 0:e.length)||v.value.length),w=!n.hideDetails||"auto"===n.hideDetails&&(y||b),V=y||b&&(n.persistentHint||n.focused);return _("div",{class:["ve-form-control",{"ve-form-control--hide-details":n.hideDetails},u.value,s.value,A.value]},[f&&_("div",{class:"ve-form-control__prepend",onClick:function(e){return i("click:prepend",e)}},[n.prependIcon&&_(h,{icon:n.prependIcon},null,8,["icon"]),null==(r=o.prepend)?void 0:r.call(o,E.value)],8,["onClick"]),p&&_(k,{class:"ve-form-control__label",disabled:m.value,error:!1===j.value,onClick:function(e){return i("click:label",e)},for:n.labelId,style:{width:x(n.labelWidth)}},{default:function(){var e;return[n.label,null==(e=o.label)?void 0:e.call(o,E.value)]},_:1},8,["disabled","error","onClick","for","style"]),null==(t=o.default)?void 0:t.call(o,(c=U({},E.value),d={props:{class:"ve-form-control__control"}},T(c,W(d)))),g&&_("div",{class:"ve-form-control__append",onClick:function(e){return i("click:append",e)}},[n.appendIcon&&_(h,{icon:n.appendIcon},null,8,["icon"]),null==(a=null==o?void 0:o.append)?void 0:a.call(o,E.value)],8,["onClick"]),w&&_("div",{class:"ve-form-control__details"},[_(M,{active:V,value:y?n.messages:[n.hint]},{default:o.messages},8,["active","value"]),null==(l=o.details)?void 0:l.call(o,E.value)])],2)})),{}}}))}}}))}();