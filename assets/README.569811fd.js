import{a8 as y,_ as E,i as z,j as W,a9 as R,aa as U,I as _,ab as Y,V as F,Q as $,U as M,B as O,ac as x,C as G,H,a as T,e as N,R as j,g as Q,T as q}from"./app.2727beb5.js";import{_ as V}from"./Demo.412e4204.js";import{b as J,r as h,Y as v,a0 as A,n as e,_ as a,m as K,Q as s,u as C,$ as d}from"./vendor.d4ba25e4.js";const L=J({setup(){const o=h(!1);return{form:h({props:{variant:"contained",size:"medium",density:"medium",direction:"horizontal",inline:!1,hideDetails:!0,disabled:!1,readonly:!1},radio:"Radio1",switch:!1,checkbox:[],select:null,input:null}),sending:o,send:async()=>{o.value||(o.value=!0,await y.info("Sending"),y.success("Sended"),o.value=!1)}}}}),X=s("\u63D0\u4EA4");function Z(o,l,g,c,p,u){const n=z,r=W,i=R,m=U,b=_,k=Y,D=F,f=$,B=M,w=O,I=x,P=G,S=V;return v(),A("div",null,[e(S,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/form/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%0A%20%20%20%20%3Alabel-width%3D%22form.props.inline%20%3F%20'auto'%20%3A%20100%22%0A%20%20%20%20v-bind%3D%22form.props%22%0A%20%20%20%20%40submit%3D%22send%22%0A%20%20%3E%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Variant%22%0A%20%20%20%20%20%20name%3D%22variant%22%0A%20%20%20%20%20%20v-model%3D%22form.props.variant%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22contained%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22outlined%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22text%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22contained-text%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22contained-outlined%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Size%22%0A%20%20%20%20%20%20name%3D%22size%22%0A%20%20%20%20%20%20v-model%3D%22form.props.size%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22x-small%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22small%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22medium%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22large%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22x-large%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Density%22%0A%20%20%20%20%20%20messages%3D%22Messages%22%0A%20%20%20%20%20%20name%3D%22density%22%0A%20%20%20%20%20%20v-model%3D%22form.props.density%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22ultra-high%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22high%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22medium%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22low%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22ultra-low%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20name%3D%22direction%22%20label%3D%22Direction%22%20v-model%3D%22form.props.direction%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%20%3Adisabled%3D%22false%22%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22inline%22%20label%3D%22Inline%22%20v-model%3D%22form.props.inline%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22disabled%22%20label%3D%22Disabled%22%20v-model%3D%22form.props.disabled%22%20%3Adisabled%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22readonly%22%20label%3D%22Readonly%22%20v-model%3D%22form.props.readonly%22%20%3Areadonly%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22hide-details%22%20label%3D%22HideDetails%22%20v-model%3D%22form.props.hideDetails%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%2248%22%0A%20%20%20%20%20%20label%3D%22Input%22%0A%20%20%20%20%20%20name%3D%22input%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20v-model%3D%22form.input%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20auto-resize%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%22255%22%0A%20%20%20%20%20%20label%3D%22Textarea%22%0A%20%20%20%20%20%20name%3D%22textarea%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20rows%3D%223%22%0A%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%20%20v-model%3D%22form.textarea%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20%3Aitems%3D%22%5B%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'Option%201'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'Option%202'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'Option%203'%20%7D%2C%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20label%3D%22Select%22%0A%20%20%20%20%20%20name%3D%22select%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20v-model%3D%22form.select%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20label%3D%22Date%22%0A%20%20%20%20%20%20name%3D%22date%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20v-model%3D%22form.date%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20%3Aformat%3D%22%5B'YYYY-MM-DD%2000%3A00%3A00'%2C%20'YYYY-MM-DD%2023%3A59%3A59'%5D%22%0A%20%20%20%20%20%20label%3D%22DateRange%22%0A%20%20%20%20%20%20name%3D%22date-range%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20range%0A%20%20%20%20%20%20v-model%3D%22form.dateRange%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Switch%22%20name%3D%22switch%22%20v-model%3D%22form.switch%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-checkbox-group%20label%3D%22Checkbox%22%20name%3D%22checkbox%22%20v-model%3D%22form.checkbox%22%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox%201%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox%202%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox%203%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-checkbox-group%3E%0A%0A%20%20%20%20%3Cve-radio-group%20label%3D%22Radio%22%20name%3D%22radio%22%20v-model%3D%22form.radio%22%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22Radio1%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-radio%20value%3D%22Radio2%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-radio-group%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%3Aloading%3D%22sending%22%20type%3D%22submit%22%3E%E6%8F%90%E4%BA%A4%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%22%20%3Acode%3D%22form%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%20%20import%20%7B%20message%20%7D%20from%20'veno-ui'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20sending%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20form%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3A%20'contained'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20density%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20direction%3A%20'horizontal'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20inline%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hideDetails%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20readonly%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20radio%3A%20'Radio1'%2C%0A%20%20%20%20%20%20%20%20%20%20switch%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20checkbox%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20select%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20input%3A%20null%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20sending%2C%0A%20%20%20%20%20%20%20%20send%3A%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(sending.value)%20return%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20true%0A%20%20%20%20%20%20%20%20%20%20await%20message.info('Sending')%0A%20%20%20%20%20%20%20%20%20%20message.success('Sended')%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:a(()=>[e(I,K({"label-width":o.form.props.inline?"auto":100},o.form.props,{onSubmit:o.send}),{default:a(()=>[e(r,{label:"Variant",name:"variant",modelValue:o.form.props.variant,"onUpdate:modelValue":l[0]||(l[0]=t=>o.form.props.variant=t)},{default:a(()=>[e(n,{value:"contained"}),e(n,{value:"outlined"}),e(n,{value:"text"}),e(n,{value:"contained-text"}),e(n,{value:"contained-outlined"})]),_:1},8,["modelValue"]),e(r,{label:"Size",name:"size",modelValue:o.form.props.size,"onUpdate:modelValue":l[1]||(l[1]=t=>o.form.props.size=t)},{default:a(()=>[e(n,{value:"x-small"}),e(n,{value:"small"}),e(n,{value:"medium"}),e(n,{value:"large"}),e(n,{value:"x-large"})]),_:1},8,["modelValue"]),e(r,{label:"Density",messages:"Messages",name:"density",modelValue:o.form.props.density,"onUpdate:modelValue":l[2]||(l[2]=t=>o.form.props.density=t)},{default:a(()=>[e(n,{value:"ultra-high"}),e(n,{value:"high"}),e(n,{value:"medium"}),e(n,{value:"low"}),e(n,{value:"ultra-low"})]),_:1},8,["modelValue"]),e(r,{name:"direction",label:"Direction",modelValue:o.form.props.direction,"onUpdate:modelValue":l[3]||(l[3]=t=>o.form.props.direction=t)},{default:a(()=>[e(n,{value:"horizontal"}),e(n,{value:"vertical"})]),_:1},8,["modelValue"]),e(m,{label:"",disabled:!1},{default:a(()=>[e(i,{name:"inline",label:"Inline",modelValue:o.form.props.inline,"onUpdate:modelValue":l[4]||(l[4]=t=>o.form.props.inline=t)},null,8,["modelValue"]),e(i,{name:"disabled",label:"Disabled",modelValue:o.form.props.disabled,"onUpdate:modelValue":l[5]||(l[5]=t=>o.form.props.disabled=t),disabled:!1},null,8,["modelValue"]),e(i,{name:"readonly",label:"Readonly",modelValue:o.form.props.readonly,"onUpdate:modelValue":l[6]||(l[6]=t=>o.form.props.readonly=t),readonly:!1},null,8,["modelValue"]),e(i,{name:"hide-details",label:"HideDetails",modelValue:o.form.props.hideDetails,"onUpdate:modelValue":l[7]||(l[7]=t=>o.form.props.hideDetails=t)},null,8,["modelValue"])]),_:1}),e(b,{clearable:"",counter:"48",label:"Input",name:"input",placeholder:"\u8BF7\u8F93\u5165",modelValue:o.form.input,"onUpdate:modelValue":l[8]||(l[8]=t=>o.form.input=t)},null,8,["modelValue"]),e(b,{"auto-resize":"",clearable:"",counter:"255",label:"Textarea",name:"textarea",placeholder:"\u8BF7\u8F93\u5165",rows:"3",type:"textarea",modelValue:o.form.textarea,"onUpdate:modelValue":l[9]||(l[9]=t=>o.form.textarea=t)},null,8,["modelValue"]),e(k,{clearable:"",items:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],label:"Select",name:"select",placeholder:"\u8BF7\u9009\u62E9",modelValue:o.form.select,"onUpdate:modelValue":l[10]||(l[10]=t=>o.form.select=t)},null,8,["modelValue"]),e(D,{clearable:"",label:"Date",name:"date",placeholder:"\u8BF7\u9009\u62E9",modelValue:o.form.date,"onUpdate:modelValue":l[11]||(l[11]=t=>o.form.date=t)},null,8,["modelValue"]),e(D,{clearable:"",format:["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"],label:"DateRange",name:"date-range",placeholder:"\u8BF7\u9009\u62E9",range:"",modelValue:o.form.dateRange,"onUpdate:modelValue":l[12]||(l[12]=t=>o.form.dateRange=t)},null,8,["modelValue"]),e(m,{label:""},{default:a(()=>[e(i,{label:"Switch",name:"switch",modelValue:o.form.switch,"onUpdate:modelValue":l[13]||(l[13]=t=>o.form.switch=t)},null,8,["modelValue"])]),_:1}),e(B,{label:"Checkbox",name:"checkbox",modelValue:o.form.checkbox,"onUpdate:modelValue":l[14]||(l[14]=t=>o.form.checkbox=t)},{default:a(()=>[e(f,{value:"Checkbox 1"}),e(f,{value:"Checkbox 2"}),e(f,{value:"Checkbox 3"})]),_:1},8,["modelValue"]),e(r,{label:"Radio",name:"radio",modelValue:o.form.radio,"onUpdate:modelValue":l[15]||(l[15]=t=>o.form.radio=t)},{default:a(()=>[e(n,{value:"Radio1"}),e(n,{value:"Radio2"})]),_:1},8,["modelValue"]),e(m,{label:""},{default:a(()=>[e(w,{color:"primary",loading:o.sending,type:"submit"},{default:a(()=>[X]),_:1},8,["loading"])]),_:1})]),_:1},16,["label-width","onSubmit"]),e(P,{class:"mt-3",code:o.form},null,8,["code"])]),_:1})])}var ee=E(L,[["render",Z]]);const oe={};function le(o,l,g,c,p,u){const n=_,r=F,i=x,m=V;return v(),A("div",null,[e(m,{title:"\u5185\u8054\u8868\u5355",slug:"\u5185\u8054\u8868\u5355",file:"/packages/veno-ui/src/components/form/docs/inline.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input1%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-date-picker%20label%3D%22Input2%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20range%20width%3D%22240%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input3%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input4%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input5%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%3C%2Fve-form%3E%0A%3C%2Ftemplate%3E"},{default:a(()=>[e(i,{inline:"","hide-details":""},{default:a(()=>[e(n,{label:"Input1",placeholder:"\u8BF7\u8F93\u5165"}),e(r,{label:"Input2",placeholder:"\u8BF7\u8F93\u5165",range:"",width:"240"}),e(n,{label:"Input3",placeholder:"\u8BF7\u8F93\u5165"}),e(n,{label:"Input4",placeholder:"\u8BF7\u8F93\u5165"}),e(n,{label:"Input5",placeholder:"\u8BF7\u8F93\u5165"})]),_:1})]),_:1})])}var ae=E(oe,[["render",le]]);const te=s("\u8868\u5355 Form"),ne=s("\u6F14\u793A"),re=s("API"),ie=d("ul",null,[d("li",null,"\u8868\u5355\u63A7\u4EF6 form-control"),d("li",null,"\u8F93\u5165\u63A7\u4EF6 input-control"),d("li",null,"\u9009\u62E9\u63A7\u4EF6 selection-control"),d("li",null,"\u9009\u62E9\u7EC4\u63A7\u4EF6 selection-group-control"),d("li",null,"\u539F\u751F\u63A7\u4EF6 native-control")],-1),se=s("Form Props"),de=s("Form Events"),ue=s("FormControl Props"),me=s("FormControl Events"),pe=s("InputControl Props"),ce=s("InputControl Events"),fe=s("SelectionControl Props"),ve=s("SelectionControl Events"),Ae=s("SelectionGroupControl Props"),ge=s("SelectionGroupControl Events"),Ce={title:"\u8868\u5355 Form",headers:[{level:1,title:"\u8868\u5355 Form",slug:"\u8868\u5355-form"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u5185\u8054\u8868\u5355",slug:"\u5185\u8054\u8868\u5355"},{level:2,title:"API",slug:"api"},{level:3,title:"Form Props",slug:"form-props"},{level:3,title:"Form Events",slug:"form-events"},{level:3,title:"FormControl Props",slug:"formcontrol-props"},{level:3,title:"FormControl Events",slug:"formcontrol-events"},{level:3,title:"InputControl Props",slug:"inputcontrol-props"},{level:3,title:"InputControl Events",slug:"inputcontrol-events"},{level:3,title:"SelectionControl Props",slug:"selectioncontrol-props"},{level:3,title:"SelectionControl Events",slug:"selectioncontrol-events"},{level:3,title:"SelectionGroupControl Props",slug:"selectiongroupcontrol-props"},{level:3,title:"SelectionGroupControl Events",slug:"selectiongroupcontrol-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},be={},Ee=Object.assign(be,{setup(o){return(l,g)=>{const c=H,p=T,u=N,n=j,r=Q,i=q;return v(),A("div",null,[e(c,{id:"\u8868\u5355-form",tabindex:"-1"},{default:a(()=>[te]),_:1}),e(p,{id:"\u6F14\u793A",tabindex:"-1"},{default:a(()=>[ne]),_:1}),e(n,null,{default:a(()=>[e(u,{cols:"12",md:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(u,{cols:"12"},{default:a(()=>[e(C(ee))]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(C(ae))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{id:"api",tabindex:"-1"},{default:a(()=>[re]),_:1}),ie,e(r,{id:"form-props",tabindex:"-1"},{default:a(()=>[se]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"direction",type:"string",default:'"horizontal"'},{name:"hide-details",type:"any"},{name:"inline",type:"boolean",default:"false"},{name:"label-width",type:"any"},{name:"size",source:"paper",type:"string | number",default:'"medium"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"fast-fail",type:"boolean",default:"false"},{name:"lazy-validation",type:"boolean",default:"false"},{name:"readonly",type:"boolean",default:"false"},{name:"model-value",type:"boolean",default:"false"},{name:"color",source:"variant",type:"string"},{name:"text-color",source:"variant",type:"string"},{name:"variant",source:"paper",type:"string",default:'"contained"'}]}),e(r,{id:"form-events",tabindex:"-1"},{default:a(()=>[de]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"},{name:"resetValidation"},{name:"reset"},{name:"submit"}]}),e(r,{id:"formcontrol-props",tabindex:"-1"},{default:a(()=>[ue]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"append-icon",type:"string"},{name:"direction",type:"string",default:'"horizontal"'},{name:"focused",type:"boolean",default:"false"},{name:"hide-details",type:"any"},{name:"hint",type:"string"},{name:"inline",type:"boolean",default:"false"},{name:"label",type:"any"},{name:"label-id",type:"string"},{name:"label-width",type:"any"},{name:"messages",type:"array | string",default:"[]"},{name:"prepend-icon",type:"string"},{name:"persistent-hint",type:"boolean",default:"false"},{name:"height",source:"dimension",type:"number | string"},{name:"max-height",source:"dimension",type:"number | string"},{name:"max-width",source:"dimension",type:"number | string"},{name:"min-height",source:"dimension",type:"number | string"},{name:"min-width",source:"dimension",type:"number | string"},{name:"width",source:"dimension",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"medium"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"disabled",type:"boolean",default:"false"},{name:"error",type:"boolean",default:"false"},{name:"error-messages",type:"array | string",default:"[]"},{name:"max-errors",type:"number | string",default:"1"},{name:"name",type:"string"},{name:"readonly",type:"boolean",default:"false"},{name:"rules",type:"array",default:"[]"},{name:"model-value",type:"any"}]}),e(r,{id:"formcontrol-events",tabindex:"-1"},{default:a(()=>[me]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:prepend"},{name:"click:label"},{name:"click:append"}]}),e(r,{id:"inputcontrol-props",tabindex:"-1"},{default:a(()=>[pe]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"active",type:"boolean",default:"false"},{name:"dirty",type:"boolean",default:"false"},{name:"prepend-inner-icon",source:"input-control",type:"string"},{name:"prefix",source:"input-control",type:"string"},{name:"prefix-icon",source:"input-control",type:"string"},{name:"suffix",source:"input-control",type:"string"},{name:"suffix-icon",source:"input-control",type:"string"},{name:"clearable",source:"input-control",type:"boolean",default:"false"},{name:"clear-icon",source:"input-control",type:"string",default:'"$clear"'},{name:"append-inner-icon",source:"input-control",type:"string"},{name:"disabled",source:"input-control",type:"boolean",default:"false"},{name:"color",source:"input-control",type:"string"},{name:"text-color",source:"input-control",type:"string"},{name:"variant",source:"input-control",type:"string",default:'"contained"'},{name:"shape",source:"input-control",type:"string",default:'"rounded-sm"'}]}),e(r,{id:"inputcontrol-events",tabindex:"-1"},{default:a(()=>[ce]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:clear"},{name:"click:prepend-inner"},{name:"click:prefix"},{name:"click:suffix"},{name:"click:append-inner"},{name:"click:control"},{name:"update:active"},{name:"update:modelValue"}]}),e(r,{id:"selectioncontrol-props",tabindex:"-1"},{default:a(()=>[fe]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"color",source:"selection-control",type:"string"},{name:"disabled",source:"selection-control",type:"boolean",default:"false"},{name:"error",source:"selection-control",type:"boolean",default:"false"},{name:"id",source:"selection-control",type:"string"},{name:"inline",source:"selection-control",type:"boolean",default:"false"},{name:"label",source:"selection-control",type:"string"},{name:"false-icon",source:"selection-control",type:"string"},{name:"true-icon",source:"selection-control",type:"string"},{name:"multiple",source:"selection-control",type:"boolean",default:"false"},{name:"name",source:"selection-control",type:"string"},{name:"readonly",source:"selection-control",type:"boolean",default:"false"},{name:"true-value",source:"selection-control",type:"any"},{name:"false-value",source:"selection-control",type:"any"},{name:"model-value",source:"selection-control",type:"any"},{name:"type",source:"selection-control",type:"string"},{name:"value",source:"selection-control",type:"any"},{name:"value-comparator",source:"selection-control",type:"function"},{name:"theme",source:"selection-control",type:"string"},{name:"size",source:"paper",type:"string | number",default:'"medium"'},{name:"density",source:"paper",type:"string",default:'"medium"'}]}),e(r,{id:"selectioncontrol-events",tabindex:"-1"},{default:a(()=>[ve]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]}),e(r,{id:"selectiongroupcontrol-props",tabindex:"-1"},{default:a(()=>[Ae]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"id",source:"selection-control-group",type:"string"},{name:"inline",source:"selection-control-group",type:"boolean",default:"false"},{name:"name",source:"selection-control-group",type:"string"},{name:"false-icon",source:"selection-control-group",type:"string"},{name:"true-icon",source:"selection-control-group",type:"string"},{name:"multiple",source:"selection-control-group",type:"boolean",default:"false"},{name:"disabled",source:"selection-control-group",type:"boolean",default:"false"},{name:"readonly",source:"selection-control-group",type:"boolean",default:"false"},{name:"type",source:"selection-control-group",type:"string"},{name:"model-value",source:"selection-control-group",type:"any"}]}),e(r,{id:"selectiongroupcontrol-events",tabindex:"-1"},{default:a(()=>[ge]),_:1}),e(i,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{Ce as __pageData,Ee as default};
