!function(){function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){d=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw r}}}}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}System.register(["./Demo-legacy.b2561142.js","./index-legacy.1349bc2c.js","./radio-legacy.dc82f915.js","./radio-group-legacy.e5db7f22.js","./switch-legacy.f2dffb67.js","./input-legacy.5dc5b5ad.js","./select-legacy.8de6ccef.js","./checkbox-legacy.f9f37827.js","./checkbox-group-legacy.b188f6df.js","./form-control-legacy.3751c8f1.js","./vendor-legacy.f35e774c.js","./code-legacy.a8ba6f35.js","./selection-control-legacy.22f998e8.js","./label-legacy.51297662.js","./selection-group-control-legacy.99c3e3e9.js","./index-legacy.a03659a8.js","./menu-legacy.325b6411.js"],(function(l){"use strict";var t,n,a,o,r,i,d,u,c,s,A,f,b,m,p,y,v,D,h,C,E,g,F,x,j,w,V,B;return{setters:[function(e){t=e._},function(e){n=e.e,a=e.a2,o=e.a0,r=e.P,i=e._,d=e.B},function(e){u=e.R},function(e){c=e.R},function(e){s=e.S},function(e){A=e.I},function(e){f=e.S},function(e){b=e.C},function(e){m=e.C},function(e){p=e.a,y=e.b,v=e.c,D=e.F},function(e){h=e.f,C=e.a,E=e.j,g=e.b,F=e.r,x=e.O,j=e.U,w=e.Q,V=e.a0,B=e.R},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var S=Object.defineProperty,k=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,O=function(e,l,t){return l in e?S(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t},I=function(l,t){for(var n in t||(t={}))R.call(t,n)&&O(l,n,t[n]);if(k){var a,o=e(k(t));try{for(o.s();!(a=o.n()).done;){n=a.value;_.call(t,n)&&O(l,n,t[n])}}catch(r){o.e(r)}finally{o.f()}}return l},U=n({name:"VeForm",props:I(I(I({labelWidth:[Number,String],hideDetails:[Boolean,String]},y()),a()),p()),emits:{"update:modelValue":function(e){return!0},resetValidation:function(){return!0},reset:function(e){return!0},submit:function(e){return!0}},setup:function(e,l){var t=l.slots,n=v(e),a=h({density:C((function(){return e.density})),direction:C((function(){return e.direction})),labelWidth:C((function(){return e.labelWidth})),hideDetails:C((function(){return e.hideDetails})),readonly:C((function(){return e.readonly})),disabled:C((function(){return e.disabled}))});return o(h({defaults:{VeInput:a,VeSelect:a,VeRadioGroup:a,VeCheckboxGroup:a,VeSwitch:a,VeFormControl:a}})),r((function(){var e;return E("form",{class:"ve-form",novalidate:!0,onReset:n.reset,onSubmit:n.submit},[null==(e=t.default)?void 0:e.call(t,n)],40,["novalidate","onReset","onSubmit"])})),n}}),z=g({setup:function(){return{density:F("medium"),direction:F("horizontal"),hideDetails:F(!1),disabled:F(!1),readonly:F(!1)}}}),P=(l("__pageData",{title:"基本用法",headers:[],frontmatter:{}}),V("div",{style:{width:"100px"}},null,-1)),M=B("提交");l("default",i(z,[["render",function(e,l,n,a,o,r){var i=u,p=c,y=s,v=A,h=f,C=b,g=m,F=d,V=D,B=U,S=t;return x(),j("div",null,[E(S,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/form/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%0A%20%20%20%20%3Adensity%3D%22density%22%0A%20%20%20%20%3Adirection%3D%22direction%22%0A%20%20%20%20label-width%3D%22100%22%0A%20%20%20%20%3Adisabled%3D%22disabled%22%0A%20%20%20%20%3Areadonly%3D%22readonly%22%0A%20%20%20%20%3Ahide-details%3D%22hideDetails%22%0A%20%20%3E%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Density%22%0A%20%20%20%20%20%20v-model%3D%22density%22%0A%20%20%20%20%20%20messages%3D%22Messages%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22compact%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22comfortable%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22medium%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20label%3D%22Direction%22%20v-model%3D%22direction%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-switch%0A%20%20%20%20%20%20label%3D%22Disabled%22%0A%20%20%20%20%20%20v-model%3D%22disabled%22%0A%20%20%20%20%20%20%3Adisabled%3D%22false%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%0A%20%20%20%20%20%20label%3D%22Readonly%22%0A%20%20%20%20%20%20v-model%3D%22readonly%22%0A%20%20%20%20%20%20%3Areadonly%3D%22false%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%20label%3D%22HideDetails%22%20v-model%3D%22hideDetails%22%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22Input%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%2248%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20label%3D%22Textarea%22%0A%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20rows%3D%223%22%0A%20%20%20%20%20%20auto-grow%0A%20%20%20%20%20%20counter%3D%22255%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20label%3D%22Select%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%20value%3A%201%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B92'%2C%20value%3A%202%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'%E9%80%89%E9%A1%B93'%2C%20value%3A%203%20%7D%2C%0A%20%20%20%20%5D%22%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-switch%20label%3D%22Switch%22%20%2F%3E%0A%0A%20%20%20%20%3Cve-checkbox-group%20label%3D%22Checkbox%22%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%201%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%202%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20label%3D%22Checkbox%203%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-checkbox-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20label%3D%22Radio%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22Radio1%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20label%3D%22Radio2%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-form-control%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prepend%3E%3Cdiv%20style%3D%22width%3A%20100px%3B%22%3E%3C%2Fdiv%3E%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cve-button%3E%E6%8F%90%E4%BA%A4%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20density%3A%20ref('medium')%2C%0A%20%20%20%20%20%20%20%20direction%3A%20ref('horizontal')%2C%0A%20%20%20%20%20%20%20%20hideDetails%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20disabled%3A%20ref(false)%2C%0A%20%20%20%20%20%20%20%20readonly%3A%20ref(false)%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:w((function(){return[E(B,{density:e.density,direction:e.direction,"label-width":"100",disabled:e.disabled,readonly:e.readonly,"hide-details":e.hideDetails},{default:w((function(){return[E(p,{label:"Density",modelValue:e.density,"onUpdate:modelValue":l[0]||(l[0]=function(l){return e.density=l}),messages:"Messages"},{default:w((function(){return[E(i,{label:"compact"}),E(i,{label:"comfortable"}),E(i,{label:"medium"})]})),_:1},8,["modelValue"]),E(p,{label:"Direction",modelValue:e.direction,"onUpdate:modelValue":l[1]||(l[1]=function(l){return e.direction=l})},{default:w((function(){return[E(i,{label:"horizontal"}),E(i,{label:"vertical"})]})),_:1},8,["modelValue"]),E(y,{label:"Disabled",modelValue:e.disabled,"onUpdate:modelValue":l[2]||(l[2]=function(l){return e.disabled=l}),disabled:!1},null,8,["modelValue"]),E(y,{label:"Readonly",modelValue:e.readonly,"onUpdate:modelValue":l[3]||(l[3]=function(l){return e.readonly=l}),readonly:!1},null,8,["modelValue"]),E(y,{label:"HideDetails",modelValue:e.hideDetails,"onUpdate:modelValue":l[4]||(l[4]=function(l){return e.hideDetails=l})},null,8,["modelValue"]),E(v,{label:"Input",placeholder:"请输入",clearable:"",counter:"48"}),E(v,{label:"Textarea",type:"textarea",placeholder:"请输入",clearable:"",rows:"3","auto-grow":"",counter:"255"}),E(h,{label:"Select",placeholder:"请选择",items:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}],clearable:""}),E(y,{label:"Switch"}),E(g,{label:"Checkbox"},{default:w((function(){return[E(C,{label:"Checkbox 1"}),E(C,{label:"Checkbox 2"}),E(C,{label:"Checkbox 3"})]})),_:1}),E(p,{label:"Radio"},{default:w((function(){return[E(i,{label:"Radio1"}),E(i,{label:"Radio2"})]})),_:1}),E(V,null,{prepend:w((function(){return[P]})),default:w((function(){return[E(F,null,{default:w((function(){return[M]})),_:1})]})),_:1})]})),_:1},8,["density","direction","disabled","readonly","hide-details"])]})),_:1})])}]]))}}}))}();
