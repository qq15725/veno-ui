import{y as B,z as g,aL as x,_ as C,q as h,s as _,u as e,v as t,a8 as R,x as o,E as V,aG as Y,aH as M,a5 as F,aF as O,aq as k,ap as H,G as N,ay as D,C as b,P as z,ae as u,H as T,d as G,R as j,n as J,T as U,I as v,J as c,k as q}from"./app.82309895.js";import{_ as E}from"./Demo.971567a7.js";const L=B({setup(){const l=g(!1);return{form:g({props:{variant:"contained",size:"medium",density:"medium",direction:"horizontal",inline:!1,hideDetails:!0,disabled:!1,readonly:!1},radio:"Radio1",switch:!1,checkbox:[],select:null,input:null}),sending:l,send:async()=>{l.value||(l.value=!0,await x.info("Sending"),x.success("Sended"),l.value=!1)}}}}),K=o("\u63D0\u4EA4");function Q(l,d,y,f,m,p){const r=V,i=Y,a=M,s=F,n=O,A=k,w=H,I=N,S=D,$=b,P=E;return h(),_("div",null,[e(P,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/form/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%0A%20%20%20%20%3Alabel-width%3D%22form.props.inline%20%3F%20'auto'%20%3A%20100%22%0A%20%20%20%20v-bind%3D%22form.props%22%0A%20%20%20%20%40submit%3D%22send%22%0A%20%20%20%20v-model%3D%22form%22%0A%20%20%3E%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Variant%22%0A%20%20%20%20%20%20name%3D%22props.variant%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'contained'%2C%20'outlined'%2C%20'text'%2C%20'contained-text'%2C%20'contained-outlined'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Size%22%0A%20%20%20%20%20%20name%3D%22props.size%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'x-small'%2C%20'small'%2C%20'medium'%2C%20'large'%2C%20'x-large'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Density%22%0A%20%20%20%20%20%20messages%3D%22Messages%22%0A%20%20%20%20%20%20name%3D%22props.density%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'ultra-high'%2C%20'high'%2C%20'medium'%2C%20'low'%2C%20'ultra-low'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-radio-group%20%0A%20%20%20%20%20%20name%3D%22props.direction%22%0A%20%20%20%20%20%20label%3D%22Direction%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'horizontal'%2C%20'vertical'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%20%3Adisabled%3D%22false%22%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.inline%22%20label%3D%22Inline%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.disabled%22%20label%3D%22Disabled%22%20%3Adisabled%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.readonly%22%20label%3D%22Readonly%22%20%3Areadonly%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.hideDetails%22%20label%3D%22HideDetails%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%2248%22%0A%20%20%20%20%20%20label%3D%22Input%22%0A%20%20%20%20%20%20name%3D%22input%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20auto-resize%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%22255%22%0A%20%20%20%20%20%20label%3D%22Textarea%22%0A%20%20%20%20%20%20name%3D%22textarea%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20rows%3D%223%22%0A%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20label%3D%22Select%22%0A%20%20%20%20%20%20name%3D%22select%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20label%3D%22Date%22%0A%20%20%20%20%20%20name%3D%22date%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20%3Aformat%3D%22%5B'YYYY-MM-DD%2000%3A00%3A00'%2C%20'YYYY-MM-DD%2023%3A59%3A59'%5D%22%0A%20%20%20%20%20%20label%3D%22DateRange%22%0A%20%20%20%20%20%20name%3D%22dateRange%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20range%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Switch%22%20name%3D%22switch%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-checkbox-group%20%0A%20%20%20%20%20%20label%3D%22Checkbox%22%20%0A%20%20%20%20%20%20name%3D%22checkbox%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Checkbox%201'%2C%20'Checkbox%202'%2C%20'Checkbox%203'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Radio%22%20%0A%20%20%20%20%20%20name%3D%22radio%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Radio1'%2C%20'Radio2'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%3Aloading%3D%22sending%22%20type%3D%22submit%22%3E%E6%8F%90%E4%BA%A4%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22form%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%20%20import%20%7B%20message%20%7D%20from%20'veno-ui'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20sending%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20form%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3A%20'contained'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20density%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20direction%3A%20'horizontal'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20inline%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hideDetails%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20readonly%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20radio%3A%20'Radio1'%2C%0A%20%20%20%20%20%20%20%20%20%20switch%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20checkbox%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20select%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20input%3A%20null%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20sending%2C%0A%20%20%20%20%20%20%20%20send%3A%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(sending.value)%20return%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20true%0A%20%20%20%20%20%20%20%20%20%20await%20message.info('Sending')%0A%20%20%20%20%20%20%20%20%20%20message.success('Sended')%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(S,R({"label-width":l.form.props.inline?"auto":100},l.form.props,{onSubmit:l.send,modelValue:l.form,"onUpdate:modelValue":d[0]||(d[0]=W=>l.form=W)}),{default:t(()=>[e(r,{label:"Variant",name:"props.variant",items:["contained","outlined","text","contained-text","contained-outlined"]}),e(r,{label:"Size",name:"props.size",items:["x-small","small","medium","large","x-large"]}),e(r,{label:"Density",messages:"Messages",name:"props.density",items:["ultra-high","high","medium","low","ultra-low"]}),e(r,{name:"props.direction",label:"Direction",items:["horizontal","vertical"]}),e(a,{label:"",disabled:!1},{default:t(()=>[e(i,{name:"props.inline",label:"Inline"}),e(i,{name:"props.disabled",label:"Disabled",disabled:!1}),e(i,{name:"props.readonly",label:"Readonly",readonly:!1}),e(i,{name:"props.hideDetails",label:"HideDetails"})]),_:1}),e(s,{clearable:"",counter:"48",label:"Input",name:"input",placeholder:"\u8BF7\u8F93\u5165"}),e(s,{"auto-resize":"",clearable:"",counter:"255",label:"Textarea",name:"textarea",placeholder:"\u8BF7\u8F93\u5165",rows:"3",type:"textarea"}),e(n,{clearable:"",label:"Select",name:"select",placeholder:"\u8BF7\u9009\u62E9",items:["Option 1","Option 2","Option 3"]}),e(A,{clearable:"",label:"Date",name:"date",placeholder:"\u8BF7\u9009\u62E9"}),e(A,{clearable:"",format:["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"],label:"DateRange",name:"dateRange",placeholder:"\u8BF7\u9009\u62E9",range:""}),e(a,{label:""},{default:t(()=>[e(i,{label:"Switch",name:"switch"})]),_:1}),e(w,{label:"Checkbox",name:"checkbox",items:["Checkbox 1","Checkbox 2","Checkbox 3"]}),e(r,{label:"Radio",name:"radio",items:["Radio1","Radio2"]}),e(a,{label:""},{default:t(()=>[e(I,{color:"primary",loading:l.sending,type:"submit"},{default:t(()=>[K]),_:1},8,["loading"])]),_:1})]),_:1},16,["label-width","onSubmit","modelValue"]),e($,{class:"mt-3 p-3",code:l.form,theme:"dark"},null,8,["code"])]),_:1})])}var X=C(L,[["render",Q]]);const Z=B({setup(){return{value:g({}),items:g([{$type:"input",name:"Input",label:"Input",placeholder:"\u8BF7\u8F93\u5165"},{$type:"textarea",name:"Textarea",label:"Textarea",placeholder:"\u8BF7\u8F93\u5165"},{$type:"select",name:"Select",label:"Select",placeholder:"\u8BF7\u9009\u62E9",clearable:!0,items:["select1","select2"]},{$type:"switch",name:"Switch",label:"Switch"},{$type:"date-picker",name:"DatePicker",label:"DatePicker",placeholder:"\u8BF7\u9009\u62E9"},{$type:"checkbox",name:"Checkbox",label:"Checkbox",items:["checkbox1","checkbox2"]},{$type:"radio",name:"Radio",label:"Radio",items:["radio1","radio2"]}])}}}),ee=o("\u4F7F\u7528 "),te=o("items"),ne=o(" \u6570\u636E\u9A71\u52A8\u6E32\u67D3\u8868\u5355\u3002"),oe=o("\u76F8\u5BF9\u4E00\u5927\u5806\u6A21\u677F\u4EE3\u7801\u4F7F\u7528 "),ie=o("JSON"),ae=o(" \u5B9A\u4E49\u53EF\u80FD\u66F4\u65B9\u4FBF\u3002");function le(l,d,y,f,m,p){const r=b,i=z,a=D,s=E;return h(),_("div",null,[e(s,{title:"\u6570\u636E\u9A71\u52A8",slug:"\u6570\u636E\u9A71\u52A8",file:"/packages/veno-ui/src/components/form/docs/items.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20v-model%3D%22value%22%20label-width%3D%22100%22%20%3Aitems%3D%22items%22%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%7D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'input'%2C%20name%3A%20'Input'%2C%20label%3A%20'Input'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'textarea'%2C%20name%3A%20'Textarea'%2C%20label%3A%20'Textarea'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'select'%2C%20name%3A%20'Select'%2C%20label%3A%20'Select'%2C%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%2C%20clearable%3A%20true%2C%20items%3A%20%5B'select1'%2C%20'select2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'switch'%2C%20name%3A%20'Switch'%2C%20label%3A%20'Switch'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'date-picker'%2C%20name%3A%20'DatePicker'%2C%20label%3A%20'DatePicker'%2C%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'checkbox'%2C%20name%3A%20'Checkbox'%2C%20label%3A%20'Checkbox'%2C%20items%3A%20%5B'checkbox1'%2C%20'checkbox2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'radio'%2C%20name%3A%20'Radio'%2C%20label%3A%20'Radio'%2C%20items%3A%20%5B'radio1'%2C%20'radio2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[ee,e(r,{color:"secondary",inline:""},{default:t(()=>[te]),_:1}),ne]),_:1}),e(i,null,{default:t(()=>[oe,e(r,{color:"secondary",inline:""},{default:t(()=>[ie]),_:1}),ae]),_:1})]),default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=n=>l.value=n),"label-width":"100",items:l.items},null,8,["modelValue","items"]),e(r,{class:"mt-3 p-3",code:l.value,theme:"dark"},null,8,["code"])]),_:1})])}var se=C(Z,[["render",le]]);const re={},ce=o("\u4F7F\u7528 "),de=o("inline"),pe=o(" \u6307\u5B9A\u8868\u5355\u4E0B\u63A7\u4EF6\u4E3A\u5185\u8054\u6837\u5F0F\u3002");function ue(l,d,y,f,m,p){const r=b,i=z,a=F,s=k,n=D,A=E;return h(),_("div",null,[e(A,{title:"\u5185\u8054\u8868\u5355",slug:"\u5185\u8054\u8868\u5355",file:"/packages/veno-ui/src/components/form/docs/inline.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input1%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-date-picker%20label%3D%22Input2%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20range%20width%3D%22240%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input3%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input4%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input5%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%3C%2Fve-form%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[ce,e(r,{color:"secondary",inline:""},{default:t(()=>[de]),_:1}),pe]),_:1})]),default:t(()=>[e(n,{inline:"","hide-details":""},{default:t(()=>[e(a,{label:"Input1",placeholder:"\u8BF7\u8F93\u5165"}),e(s,{label:"Input2",placeholder:"\u8BF7\u8F93\u5165",range:"",width:"240"}),e(a,{label:"Input3",placeholder:"\u8BF7\u8F93\u5165"}),e(a,{label:"Input4",placeholder:"\u8BF7\u8F93\u5165"}),e(a,{label:"Input5",placeholder:"\u8BF7\u8F93\u5165"})]),_:1})]),_:1})])}var me=C(re,[["render",ue]]);const fe=o("\u8868\u5355 Form"),Ae=o("\u6F14\u793A"),ge=o("API"),he=u("ul",null,[u("li",null,"\u8868\u5355\u63A7\u4EF6 form-control"),u("li",null,"\u8F93\u5165\u63A7\u4EF6 input-control"),u("li",null,"\u9009\u62E9\u63A7\u4EF6 selection-control"),u("li",null,"\u9009\u62E9\u7EC4\u63A7\u4EF6 selection-group-control"),u("li",null,"\u539F\u751F\u63A7\u4EF6 native-control")],-1),_e=o("Form Props"),be=o("Form Events"),ye=o("FormControl Props"),ve=o("FormControl Events"),Ce=o("InputControl Props"),De=o("InputControl Events"),Ee=o("SelectionControl Props"),xe=o("SelectionControl Events"),Be=o("SelectionGroupControl Props"),Fe=o("SelectionGroupControl Events"),Ie={title:"\u8868\u5355 Form",headers:[{level:1,title:"\u8868\u5355 Form",slug:"\u8868\u5355-form"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6570\u636E\u9A71\u52A8",slug:"\u6570\u636E\u9A71\u52A8"},{level:3,title:"\u5185\u8054\u8868\u5355",slug:"\u5185\u8054\u8868\u5355"},{level:2,title:"API",slug:"api"},{level:3,title:"Form Props",slug:"form-props"},{level:3,title:"Form Events",slug:"form-events"},{level:3,title:"FormControl Props",slug:"formcontrol-props"},{level:3,title:"FormControl Events",slug:"formcontrol-events"},{level:3,title:"InputControl Props",slug:"inputcontrol-props"},{level:3,title:"InputControl Events",slug:"inputcontrol-events"},{level:3,title:"SelectionControl Props",slug:"selectioncontrol-props"},{level:3,title:"SelectionControl Events",slug:"selectioncontrol-events"},{level:3,title:"SelectionGroupControl Props",slug:"selectiongroupcontrol-props"},{level:3,title:"SelectionGroupControl Events",slug:"selectiongroupcontrol-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},ke={},Se=Object.assign(ke,{setup(l){return(d,y)=>{const f=T,m=G,p=q,r=j,i=J,a=b,s=U;return h(),_("div",null,[e(f,{id:"\u8868\u5355-form",tabindex:"-1"},{default:t(()=>[fe]),_:1}),e(m,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[Ae]),_:1}),e(r,null,{default:t(()=>[e(p,{cols:"12",md:"12"},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(v(X))]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(v(se))]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(v(me))]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{id:"api",tabindex:"-1"},{default:t(()=>[ge]),_:1}),he,e(i,{id:"form-props",tabindex:"-1"},{default:t(()=>[_e]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"direction",default:"!horizontal!",type:"string",descriptions:[{language:"zh",name:"direction",description:"\u5E03\u5C40\u65B9\u5411",source:"form"}],description:"\u5E03\u5C40\u65B9\u5411"},{name:"hide-details",type:"any",descriptions:[{language:"zh",name:"hideDetails",description:"\u9690\u85CF\u8BE6\u60C5",source:"form"}],description:"\u9690\u85CF\u8BE6\u60C5"},{name:"inline",default:!1,type:"boolean",descriptions:[{language:"zh",name:"inline",description:"\u5185\u8054",source:"form"}],description:"\u5185\u8054"},{name:"items",type:"array",descriptions:[{language:"zh",name:"items",description:"\u6570\u636E\u9A71\u52A8\u7684\u8868\u5355\u5217\u8868\u9879",source:"form"}],description:"\u6570\u636E\u9A71\u52A8\u7684\u8868\u5355\u5217\u8868\u9879"},{name:"label-width",type:"any",descriptions:[{language:"zh",name:"labelWidth",description:"\u6807\u7B7E\u5BBD\u5EA6",source:"form"}],description:"\u6807\u7B7E\u5BBD\u5EA6"},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"disabled",default:!1,type:"boolean",descriptions:[]},{name:"fast-fail",default:!1,type:"boolean",descriptions:[]},{name:"lazy-validation",default:!1,type:"boolean",descriptions:[]},{name:"readonly",default:!1,type:"boolean",descriptions:[]},{name:"valid",default:!1,type:"boolean",descriptions:[]},{name:"model-value",type:"object",descriptions:[]},{name:"color",source:"variant",type:"string",descriptions:[{language:"zh",name:"color",description:"\u989C\u8272",source:"variant"}],description:"\u989C\u8272"},{name:"text-color",source:"variant",type:"string",descriptions:[{language:"zh",name:"textColor",description:"\u6587\u672C\u989C\u8272",source:"variant"}],description:"\u6587\u672C\u989C\u8272"},{name:"variant",source:"paper",default:"!contained!",type:"string",descriptions:[]}]},{"item.type":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(i,{id:"form-events",tabindex:"-1"},{default:t(()=>[be]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:valid"},{name:"update:modelValue"},{name:"resetValidation"},{name:"reset"},{name:"submit"}]}),e(i,{id:"formcontrol-props",tabindex:"-1"},{default:t(()=>[ye]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"append-icon",type:"any",descriptions:[{language:"zh",name:"appendIcon",description:"\u540E\u7F6E\u56FE\u6807",source:"form-control"}],description:"\u540E\u7F6E\u56FE\u6807"},{name:"direction",default:"!horizontal!",type:"string",descriptions:[{language:"zh",name:"direction",description:"\u5E03\u5C40\u65B9\u5411",source:"form-control"}],description:"\u5E03\u5C40\u65B9\u5411"},{name:"focused",default:!1,type:"boolean",descriptions:[{language:"zh",name:"focused",description:"\u805A\u7126\u7684",source:"form-control"}],description:"\u805A\u7126\u7684"},{name:"hide-details",type:"any",descriptions:[{language:"zh",name:"hideDetails",description:"\u9690\u85CF\u8BE6\u60C5",source:"form-control"}],description:"\u9690\u85CF\u8BE6\u60C5"},{name:"hint",type:"string",descriptions:[{language:"zh",name:"hint",description:"\u5B58\u5728\u63D0\u793A",source:"form-control"}],description:"\u5B58\u5728\u63D0\u793A"},{name:"inline",default:!1,type:"boolean",descriptions:[{language:"zh",name:"inline",description:"\u5185\u8054",source:"form-control"}],description:"\u5185\u8054"},{name:"label",type:"any",descriptions:[{language:"zh",name:"label",description:"\u6807\u7B7E\u6587\u672C",source:"form-control"}],description:"\u6807\u7B7E\u6587\u672C"},{name:"label-id",type:"string",descriptions:[{language:"zh",name:"labelId",description:"\u6807\u7B7EID",source:"form-control"}],description:"\u6807\u7B7EID"},{name:"label-width",type:"any",descriptions:[{language:"zh",name:"labelWidth",description:"\u6807\u7B7E\u5BBD\u5EA6",source:"form-control"}],description:"\u6807\u7B7E\u5BBD\u5EA6"},{name:"messages",default:[],type:"array | string",descriptions:[{language:"zh",name:"messages",description:"\u63D0\u793A\u6D88\u606F",source:"form-control"}],description:"\u63D0\u793A\u6D88\u606F"},{name:"name",type:"string",descriptions:[{language:"zh",name:"name",description:"\u540D\u79F0",source:"form-control"}],description:"\u540D\u79F0"},{name:"prepend-icon",type:"string",descriptions:[{language:"zh",name:"prependIcon",description:"\u540E\u7F6E\u56FE\u6807",source:"form-control"}],description:"\u540E\u7F6E\u56FE\u6807"},{name:"persistent-hint",default:!1,type:"boolean",descriptions:[{language:"zh",name:"persistentHint",description:"\u6301\u7EED\u663E\u793A\u7684\u63D0\u793A",source:"form-control"}],description:"\u6301\u7EED\u663E\u793A\u7684\u63D0\u793A"},{name:"height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"height",description:"\u9AD8\u5EA6",source:"dimension"}],description:"\u9AD8\u5EA6"},{name:"max-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxHeight",description:"\u6700\u5927\u9AD8\u5EA6",source:"dimension"}],description:"\u6700\u5927\u9AD8\u5EA6"},{name:"max-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxWidth",description:"\u6700\u5927\u5BBD\u5EA6",source:"dimension"}],description:"\u6700\u5927\u5BBD\u5EA6"},{name:"min-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minHeight",description:"\u6700\u5C0F\u9AD8\u5EA6",source:"dimension"}],description:"\u6700\u5C0F\u9AD8\u5EA6"},{name:"min-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minWidth",description:"\u6700\u5C0F\u5BBD\u5EA6",source:"dimension"}],description:"\u6700\u5C0F\u5BBD\u5EA6"},{name:"width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"width",description:"\u5BBD\u5EA6",source:"dimension"}],description:"\u5BBD\u5EA6"},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"disabled",default:!1,type:"boolean",descriptions:[]},{name:"error",default:!1,type:"boolean",descriptions:[]},{name:"error-messages",default:[],type:"array | string",descriptions:[]},{name:"max-errors",default:1,type:"number | string",descriptions:[]},{name:"readonly",default:!1,type:"boolean",descriptions:[]},{name:"rules",default:[],type:"array",descriptions:[]},{name:"model-value",type:"any",descriptions:[]}]},{"item.type":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(i,{id:"formcontrol-events",tabindex:"-1"},{default:t(()=>[ve]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:prepend"},{name:"click:label"},{name:"click:append"},{name:"update:modelValue"}]}),e(i,{id:"inputcontrol-props",tabindex:"-1"},{default:t(()=>[Ce]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"active",default:!1,type:"boolean",descriptions:[]},{name:"dirty",default:!1,type:"boolean",descriptions:[]},{name:"append-inner-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"appendInnerIcon",description:"\u540E\u7F6E\u5185\u8054\u56FE\u6807",source:"input-control"}],description:"\u540E\u7F6E\u5185\u8054\u56FE\u6807"},{name:"clearable",source:"input-control",default:!1,type:"boolean",descriptions:[{language:"zh",name:"clearable",description:"\u662F\u5426\u53EF\u6E05\u9664",source:"input-control"}],description:"\u662F\u5426\u53EF\u6E05\u9664"},{name:"clear-icon",source:"input-control",default:"!$clear!",type:"string | object",descriptions:[{language:"zh",name:"clearIcon",description:"\u6E05\u9664\u56FE\u6807",source:"input-control"}],description:"\u6E05\u9664\u56FE\u6807"},{name:"disabled",source:"input-control",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"\u662F\u5426\u7981\u7528",source:"input-control"}],description:"\u662F\u5426\u7981\u7528"},{name:"prepend-inner-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"prependInnerIcon",description:"\u524D\u7F6E\u5185\u8054\u56FE\u6807",source:"input-control"}],description:"\u524D\u7F6E\u5185\u8054\u56FE\u6807"},{name:"prefix",source:"input-control",type:"string",descriptions:[{language:"zh",name:"prefix",description:"\u524D\u7F00",source:"input-control"}],description:"\u524D\u7F00"},{name:"prefix-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"prefixIcon",description:"\u524D\u7F00\u56FE\u6807",source:"input-control"}],description:"\u524D\u7F00\u56FE\u6807"},{name:"suffix",source:"input-control",type:"string",descriptions:[{language:"zh",name:"suffix",description:"\u540E\u7F00",source:"input-control"}],description:"\u540E\u7F00"},{name:"suffix-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"suffixIcon",description:"\u540E\u7F00\u56FE\u6807",source:"input-control"}],description:"\u540E\u7F00\u56FE\u6807"},{name:"color",source:"input-control",type:"string",descriptions:[]},{name:"text-color",source:"input-control",type:"string",descriptions:[]},{name:"variant",source:"input-control",default:"!contained!",type:"string",descriptions:[]},{name:"shape",source:"input-control",default:"!rounded-sm!",type:"string",descriptions:[]}]},{"item.type":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(i,{id:"inputcontrol-events",tabindex:"-1"},{default:t(()=>[De]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:clear"},{name:"click:prepend-inner"},{name:"click:prefix"},{name:"click:suffix"},{name:"click:append-inner"},{name:"click:control"},{name:"update:active"},{name:"update:modelValue"}]}),e(i,{id:"selectioncontrol-props",tabindex:"-1"},{default:t(()=>[Ee]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"color",source:"selection-control",type:"string",descriptions:[]},{name:"disabled",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"error",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"id",source:"selection-control",type:"string",descriptions:[]},{name:"inline",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"label",source:"selection-control",type:"string",descriptions:[]},{name:"false-icon",source:"selection-control",type:"string",descriptions:[]},{name:"true-icon",source:"selection-control",type:"string",descriptions:[]},{name:"multiple",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"selection-control",type:"string",descriptions:[]},{name:"readonly",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"true-value",source:"selection-control",type:"any",descriptions:[]},{name:"false-value",source:"selection-control",type:"any",descriptions:[]},{name:"model-value",source:"selection-control",type:"any",descriptions:[]},{name:"type",source:"selection-control",type:"string",descriptions:[]},{name:"value",source:"selection-control",type:"any",descriptions:[]},{name:"value-comparator",source:"selection-control",type:"function",descriptions:[]},{name:"theme",source:"selection-control",type:"string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]}]},{"item.type":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(i,{id:"selectioncontrol-events",tabindex:"-1"},{default:t(()=>[xe]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]}),e(i,{id:"selectiongroupcontrol-props",tabindex:"-1"},{default:t(()=>[Be]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"id",source:"selection-control-group",type:"string",descriptions:[]},{name:"inline",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"selection-control-group",type:"string",descriptions:[]},{name:"false-icon",source:"selection-control-group",type:"string",descriptions:[]},{name:"true-icon",source:"selection-control-group",type:"string",descriptions:[]},{name:"multiple",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"disabled",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"readonly",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"type",source:"selection-control-group",type:"string",descriptions:[]},{name:"model-value",source:"selection-control-group",type:"any",descriptions:[]}]},{"item.type":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(n.type),1)]),_:2},1024)]),"item.default":t(({item:n})=>[e(a,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[o(c(typeof n.default=="string"?n.default.replace(/!/g,"'"):JSON.stringify(n.default,null,2)),1)]),_:2},1024)]),_:1}),e(i,{id:"selectiongroupcontrol-events",tabindex:"-1"},{default:t(()=>[Fe]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{Ie as __pageData,Se as default};
