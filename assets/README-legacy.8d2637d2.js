System.register(["./app-legacy.df25bfcc.js","./Demo-legacy.ab6c152b.js"],(function(e){"use strict";var t,n,i,o,a,l,r,s,c,d,p,u,m,A,g,f,h,y,b,v,D,C,E,x,F,B,z,_,k,w,I;return{setters:[function(e){t=e.y,n=e.z,i=e.aL,o=e._,a=e.q,l=e.s,r=e.u,s=e.v,c=e.a8,d=e.x,p=e.E,u=e.aG,m=e.aH,A=e.a5,g=e.aF,f=e.aq,h=e.ap,y=e.G,b=e.ay,v=e.C,D=e.P,C=e.ae,E=e.H,x=e.d,F=e.R,B=e.n,z=e.T,_=e.I,k=e.J,w=e.k},function(e){I=e._}],execute:function(){const S=t({setup(){const e=n(!1);return{form:n({props:{variant:"contained",size:"medium",density:"medium",direction:"horizontal",inline:!1,hideDetails:!0,disabled:!1,readonly:!1},radio:"Radio1",switch:!1,checkbox:[],select:null,input:null}),sending:e,send:async()=>{e.value||(e.value=!0,await i.info("Sending"),i.success("Sended"),e.value=!1)}}}}),W=d("提交");var P=o(S,[["render",function(e,t,n,i,o,d){const D=p,C=u,E=m,x=A,F=g,B=f,z=h,_=y,k=b,w=v,S=I;return a(),l("div",null,[r(S,{title:"基本用法",slug:"基本用法",file:"/packages/veno-ui/src/components/form/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%0A%20%20%20%20%3Alabel-width%3D%22form.props.inline%20%3F%20'auto'%20%3A%20100%22%0A%20%20%20%20v-bind%3D%22form.props%22%0A%20%20%20%20%40submit%3D%22send%22%0A%20%20%20%20v-model%3D%22form%22%0A%20%20%3E%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Variant%22%0A%20%20%20%20%20%20name%3D%22props.variant%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'contained'%2C%20'outlined'%2C%20'text'%2C%20'contained-text'%2C%20'contained-outlined'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Size%22%0A%20%20%20%20%20%20name%3D%22props.size%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'x-small'%2C%20'small'%2C%20'medium'%2C%20'large'%2C%20'x-large'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Density%22%0A%20%20%20%20%20%20messages%3D%22Messages%22%0A%20%20%20%20%20%20name%3D%22props.density%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'ultra-high'%2C%20'high'%2C%20'medium'%2C%20'low'%2C%20'ultra-low'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-radio-group%20%0A%20%20%20%20%20%20name%3D%22props.direction%22%0A%20%20%20%20%20%20label%3D%22Direction%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'horizontal'%2C%20'vertical'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%20%3Adisabled%3D%22false%22%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.inline%22%20label%3D%22Inline%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.disabled%22%20label%3D%22Disabled%22%20%3Adisabled%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.readonly%22%20label%3D%22Readonly%22%20%3Areadonly%3D%22false%22%20%2F%3E%0A%20%20%20%20%20%20%3Cve-switch%20name%3D%22props.hideDetails%22%20label%3D%22HideDetails%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%2248%22%0A%20%20%20%20%20%20label%3D%22Input%22%0A%20%20%20%20%20%20name%3D%22input%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-input%0A%20%20%20%20%20%20auto-resize%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20counter%3D%22255%22%0A%20%20%20%20%20%20label%3D%22Textarea%22%0A%20%20%20%20%20%20name%3D%22textarea%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0A%20%20%20%20%20%20rows%3D%223%22%0A%20%20%20%20%20%20type%3D%22textarea%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-select%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20label%3D%22Select%22%0A%20%20%20%20%20%20name%3D%22select%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20label%3D%22Date%22%0A%20%20%20%20%20%20name%3D%22date%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Cve-date-picker%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20%3Aformat%3D%22%5B'YYYY-MM-DD%2000%3A00%3A00'%2C%20'YYYY-MM-DD%2023%3A59%3A59'%5D%22%0A%20%20%20%20%20%20label%3D%22DateRange%22%0A%20%20%20%20%20%20name%3D%22dateRange%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%20%20range%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-switch%20label%3D%22Switch%22%20name%3D%22switch%22%20%2F%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%0A%20%20%20%20%3Cve-checkbox-group%20%0A%20%20%20%20%20%20label%3D%22Checkbox%22%20%0A%20%20%20%20%20%20name%3D%22checkbox%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Checkbox%201'%2C%20'Checkbox%202'%2C%20'Checkbox%203'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-radio-group%0A%20%20%20%20%20%20label%3D%22Radio%22%20%0A%20%20%20%20%20%20name%3D%22radio%22%20%0A%20%20%20%20%20%20%3Aitems%3D%22%5B'Radio1'%2C%20'Radio2'%5D%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cve-form-control%20label%3E%0A%20%20%20%20%20%20%3Cve-button%20color%3D%22primary%22%20%3Aloading%3D%22sending%22%20type%3D%22submit%22%3E%E6%8F%90%E4%BA%A4%3C%2Fve-button%3E%0A%20%20%20%20%3C%2Fve-form-control%3E%0A%20%20%3C%2Fve-form%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22form%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%20%20import%20%7B%20message%20%7D%20from%20'veno-ui'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20sending%20%3D%20ref(false)%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20form%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20%20%20props%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3A%20'contained'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20density%3A%20'medium'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20direction%3A%20'horizontal'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20inline%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hideDetails%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20readonly%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20radio%3A%20'Radio1'%2C%0A%20%20%20%20%20%20%20%20%20%20switch%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20checkbox%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20select%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20input%3A%20null%2C%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20sending%2C%0A%20%20%20%20%20%20%20%20send%3A%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(sending.value)%20return%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20true%0A%20%20%20%20%20%20%20%20%20%20await%20message.info('Sending')%0A%20%20%20%20%20%20%20%20%20%20message.success('Sended')%0A%20%20%20%20%20%20%20%20%20%20sending.value%20%3D%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:s((()=>[r(k,c({"label-width":e.form.props.inline?"auto":100},e.form.props,{onSubmit:e.send,modelValue:e.form,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form=t)}),{default:s((()=>[r(D,{label:"Variant",name:"props.variant",items:["contained","outlined","text","contained-text","contained-outlined"]}),r(D,{label:"Size",name:"props.size",items:["x-small","small","medium","large","x-large"]}),r(D,{label:"Density",messages:"Messages",name:"props.density",items:["ultra-high","high","medium","low","ultra-low"]}),r(D,{name:"props.direction",label:"Direction",items:["horizontal","vertical"]}),r(E,{label:"",disabled:!1},{default:s((()=>[r(C,{name:"props.inline",label:"Inline"}),r(C,{name:"props.disabled",label:"Disabled",disabled:!1}),r(C,{name:"props.readonly",label:"Readonly",readonly:!1}),r(C,{name:"props.hideDetails",label:"HideDetails"})])),_:1}),r(x,{clearable:"",counter:"48",label:"Input",name:"input",placeholder:"请输入"}),r(x,{"auto-resize":"",clearable:"",counter:"255",label:"Textarea",name:"textarea",placeholder:"请输入",rows:"3",type:"textarea"}),r(F,{clearable:"",label:"Select",name:"select",placeholder:"请选择",items:["Option 1","Option 2","Option 3"]}),r(B,{clearable:"",label:"Date",name:"date",placeholder:"请选择"}),r(B,{clearable:"",format:["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"],label:"DateRange",name:"dateRange",placeholder:"请选择",range:""}),r(E,{label:""},{default:s((()=>[r(C,{label:"Switch",name:"switch"})])),_:1}),r(z,{label:"Checkbox",name:"checkbox",items:["Checkbox 1","Checkbox 2","Checkbox 3"]}),r(D,{label:"Radio",name:"radio",items:["Radio1","Radio2"]}),r(E,{label:""},{default:s((()=>[r(_,{color:"primary",loading:e.sending,type:"submit"},{default:s((()=>[W])),_:1},8,["loading"])])),_:1})])),_:1},16,["label-width","onSubmit","modelValue"]),r(w,{class:"mt-3 p-3",code:e.form,theme:"dark"},null,8,["code"])])),_:1})])}]]);const R=t({setup:()=>({value:n({}),items:n([{$type:"input",name:"Input",label:"Input",placeholder:"请输入"},{$type:"textarea",name:"Textarea",label:"Textarea",placeholder:"请输入"},{$type:"select",name:"Select",label:"Select",placeholder:"请选择",clearable:!0,items:["select1","select2"]},{$type:"switch",name:"Switch",label:"Switch"},{$type:"date-picker",name:"DatePicker",label:"DatePicker",placeholder:"请选择"},{$type:"checkbox",name:"Checkbox",label:"Checkbox",items:["checkbox1","checkbox2"]},{$type:"radio",name:"Radio",label:"Radio",items:["radio1","radio2"]}])})}),Y=d("使用 "),V=d("items"),O=d(" 数据驱动渲染表单。"),M=d("相对一大堆模板代码使用 "),j=d("JSON"),$=d(" 定义可能更方便。");var H=o(R,[["render",function(e,t,n,i,o,c){const d=v,p=D,u=b,m=I;return a(),l("div",null,[r(m,{title:"数据驱动",slug:"数据驱动",file:"/packages/veno-ui/src/components/form/docs/items.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20v-model%3D%22value%22%20label-width%3D%22100%22%20%3Aitems%3D%22items%22%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22mt-3%20p-3%22%20%3Acode%3D%22value%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20ref(%7B%7D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'input'%2C%20name%3A%20'Input'%2C%20label%3A%20'Input'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'textarea'%2C%20name%3A%20'Textarea'%2C%20label%3A%20'Textarea'%2C%20placeholder%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'select'%2C%20name%3A%20'Select'%2C%20label%3A%20'Select'%2C%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%2C%20clearable%3A%20true%2C%20items%3A%20%5B'select1'%2C%20'select2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'switch'%2C%20name%3A%20'Switch'%2C%20label%3A%20'Switch'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'date-picker'%2C%20name%3A%20'DatePicker'%2C%20label%3A%20'DatePicker'%2C%20placeholder%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'checkbox'%2C%20name%3A%20'Checkbox'%2C%20label%3A%20'Checkbox'%2C%20items%3A%20%5B'checkbox1'%2C%20'checkbox2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%24type%3A%20'radio'%2C%20name%3A%20'Radio'%2C%20label%3A%20'Radio'%2C%20items%3A%20%5B'radio1'%2C%20'radio2'%5D%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:s((()=>[r(p,null,{default:s((()=>[Y,r(d,{color:"secondary",inline:""},{default:s((()=>[V])),_:1}),O])),_:1}),r(p,null,{default:s((()=>[M,r(d,{color:"secondary",inline:""},{default:s((()=>[j])),_:1}),$])),_:1})])),default:s((()=>[r(u,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),"label-width":"100",items:e.items},null,8,["modelValue","items"]),r(d,{class:"mt-3 p-3",code:e.value,theme:"dark"},null,8,["code"])])),_:1})])}]]);const J={},T=d("使用 "),G=d("inline"),N=d(" 指定表单下控件为内联样式。");var q=o(J,[["render",function(e,t,n,i,o,c){const d=v,p=D,u=A,m=f,g=b,h=I;return a(),l("div",null,[r(h,{title:"内联表单",slug:"内联表单",file:"/packages/veno-ui/src/components/form/docs/inline.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-form%20inline%20hide-details%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input1%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-date-picker%20label%3D%22Input2%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20range%20width%3D%22240%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input3%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input4%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%20%20%3Cve-input%20label%3D%22Input5%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0A%20%20%3C%2Fve-form%3E%0A%3C%2Ftemplate%3E"},{prepend:s((()=>[r(p,null,{default:s((()=>[T,r(d,{color:"secondary",inline:""},{default:s((()=>[G])),_:1}),N])),_:1})])),default:s((()=>[r(g,{inline:"","hide-details":""},{default:s((()=>[r(u,{label:"Input1",placeholder:"请输入"}),r(m,{label:"Input2",placeholder:"请输入",range:"",width:"240"}),r(u,{label:"Input3",placeholder:"请输入"}),r(u,{label:"Input4",placeholder:"请输入"}),r(u,{label:"Input5",placeholder:"请输入"})])),_:1})])),_:1})])}]]);const U=d("表单 Form"),L=d("演示"),K=d("API"),Q=C("ul",null,[C("li",null,"表单控件 form-control"),C("li",null,"输入控件 input-control"),C("li",null,"选择控件 selection-control"),C("li",null,"选择组控件 selection-group-control"),C("li",null,"原生控件 native-control")],-1),X=d("Form Props"),Z=d("Form Events"),ee=d("FormControl Props"),te=d("FormControl Events"),ne=d("InputControl Props"),ie=d("InputControl Events"),oe=d("SelectionControl Props"),ae=d("SelectionControl Events"),le=d("SelectionGroupControl Props"),re=d("SelectionGroupControl Events"),se=(e("__pageData",{title:"表单 Form",headers:[{level:1,title:"表单 Form",slug:"表单-form"},{level:2,title:"演示",slug:"演示"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"数据驱动",slug:"数据驱动"},{level:3,title:"内联表单",slug:"内联表单"},{level:2,title:"API",slug:"api"},{level:3,title:"Form Props",slug:"form-props"},{level:3,title:"Form Events",slug:"form-events"},{level:3,title:"FormControl Props",slug:"formcontrol-props"},{level:3,title:"FormControl Events",slug:"formcontrol-events"},{level:3,title:"InputControl Props",slug:"inputcontrol-props"},{level:3,title:"InputControl Events",slug:"inputcontrol-events"},{level:3,title:"SelectionControl Props",slug:"selectioncontrol-props"},{level:3,title:"SelectionControl Events",slug:"selectioncontrol-events"},{level:3,title:"SelectionGroupControl Props",slug:"selectiongroupcontrol-props"},{level:3,title:"SelectionGroupControl Events",slug:"selectiongroupcontrol-events"}],frontmatter:{category:"Form 表单组件"}}),{});e("default",Object.assign(se,{setup:e=>(e,t)=>{const n=E,i=x,o=w,c=F,p=B,u=v,m=z;return a(),l("div",null,[r(n,{id:"表单-form",tabindex:"-1"},{default:s((()=>[U])),_:1}),r(i,{id:"演示",tabindex:"-1"},{default:s((()=>[L])),_:1}),r(c,null,{default:s((()=>[r(o,{cols:"12",md:"12"},{default:s((()=>[r(c,null,{default:s((()=>[r(o,{cols:"12"},{default:s((()=>[r(_(P))])),_:1}),r(o,{cols:"12"},{default:s((()=>[r(_(H))])),_:1}),r(o,{cols:"12"},{default:s((()=>[r(_(q))])),_:1})])),_:1})])),_:1})])),_:1}),r(i,{id:"api",tabindex:"-1"},{default:s((()=>[K])),_:1}),Q,r(p,{id:"form-props",tabindex:"-1"},{default:s((()=>[X])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"direction",default:"!horizontal!",type:"string",descriptions:[{language:"zh",name:"direction",description:"布局方向",source:"form"}],description:"布局方向"},{name:"hide-details",type:"any",descriptions:[{language:"zh",name:"hideDetails",description:"隐藏详情",source:"form"}],description:"隐藏详情"},{name:"inline",default:!1,type:"boolean",descriptions:[{language:"zh",name:"inline",description:"内联",source:"form"}],description:"内联"},{name:"items",type:"array",descriptions:[{language:"zh",name:"items",description:"数据驱动的表单列表项",source:"form"}],description:"数据驱动的表单列表项"},{name:"label-width",type:"any",descriptions:[{language:"zh",name:"labelWidth",description:"标签宽度",source:"form"}],description:"标签宽度"},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"disabled",default:!1,type:"boolean",descriptions:[]},{name:"fast-fail",default:!1,type:"boolean",descriptions:[]},{name:"lazy-validation",default:!1,type:"boolean",descriptions:[]},{name:"readonly",default:!1,type:"boolean",descriptions:[]},{name:"valid",default:!1,type:"boolean",descriptions:[]},{name:"model-value",type:"object",descriptions:[]},{name:"color",source:"variant",type:"string",descriptions:[{language:"zh",name:"color",description:"颜色",source:"variant"}],description:"颜色"},{name:"text-color",source:"variant",type:"string",descriptions:[{language:"zh",name:"textColor",description:"文本颜色",source:"variant"}],description:"文本颜色"},{name:"variant",source:"paper",default:"!contained!",type:"string",descriptions:[]}]},{"item.type":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"form-events",tabindex:"-1"},{default:s((()=>[Z])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:valid"},{name:"update:modelValue"},{name:"resetValidation"},{name:"reset"},{name:"submit"}]}),r(p,{id:"formcontrol-props",tabindex:"-1"},{default:s((()=>[ee])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"append-icon",type:"any",descriptions:[{language:"zh",name:"appendIcon",description:"后置图标",source:"form-control"}],description:"后置图标"},{name:"direction",default:"!horizontal!",type:"string",descriptions:[{language:"zh",name:"direction",description:"布局方向",source:"form-control"}],description:"布局方向"},{name:"focused",default:!1,type:"boolean",descriptions:[{language:"zh",name:"focused",description:"聚焦的",source:"form-control"}],description:"聚焦的"},{name:"hide-details",type:"any",descriptions:[{language:"zh",name:"hideDetails",description:"隐藏详情",source:"form-control"}],description:"隐藏详情"},{name:"hint",type:"string",descriptions:[{language:"zh",name:"hint",description:"存在提示",source:"form-control"}],description:"存在提示"},{name:"inline",default:!1,type:"boolean",descriptions:[{language:"zh",name:"inline",description:"内联",source:"form-control"}],description:"内联"},{name:"label",type:"any",descriptions:[{language:"zh",name:"label",description:"标签文本",source:"form-control"}],description:"标签文本"},{name:"label-id",type:"string",descriptions:[{language:"zh",name:"labelId",description:"标签ID",source:"form-control"}],description:"标签ID"},{name:"label-width",type:"any",descriptions:[{language:"zh",name:"labelWidth",description:"标签宽度",source:"form-control"}],description:"标签宽度"},{name:"messages",default:[],type:"array | string",descriptions:[{language:"zh",name:"messages",description:"提示消息",source:"form-control"}],description:"提示消息"},{name:"name",type:"string",descriptions:[{language:"zh",name:"name",description:"名称",source:"form-control"}],description:"名称"},{name:"prepend-icon",type:"string",descriptions:[{language:"zh",name:"prependIcon",description:"后置图标",source:"form-control"}],description:"后置图标"},{name:"persistent-hint",default:!1,type:"boolean",descriptions:[{language:"zh",name:"persistentHint",description:"持续显示的提示",source:"form-control"}],description:"持续显示的提示"},{name:"height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"height",description:"高度",source:"dimension"}],description:"高度"},{name:"max-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxHeight",description:"最大高度",source:"dimension"}],description:"最大高度"},{name:"max-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"maxWidth",description:"最大宽度",source:"dimension"}],description:"最大宽度"},{name:"min-height",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minHeight",description:"最小高度",source:"dimension"}],description:"最小高度"},{name:"min-width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"minWidth",description:"最小宽度",source:"dimension"}],description:"最小宽度"},{name:"width",source:"dimension",type:"number | string",descriptions:[{language:"zh",name:"width",description:"宽度",source:"dimension"}],description:"宽度"},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]},{name:"disabled",default:!1,type:"boolean",descriptions:[]},{name:"error",default:!1,type:"boolean",descriptions:[]},{name:"error-messages",default:[],type:"array | string",descriptions:[]},{name:"max-errors",default:1,type:"number | string",descriptions:[]},{name:"readonly",default:!1,type:"boolean",descriptions:[]},{name:"rules",default:[],type:"array",descriptions:[]},{name:"model-value",type:"any",descriptions:[]}]},{"item.type":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"formcontrol-events",tabindex:"-1"},{default:s((()=>[te])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"click:prepend"},{name:"click:label"},{name:"click:append"},{name:"update:modelValue"}]}),r(p,{id:"inputcontrol-props",tabindex:"-1"},{default:s((()=>[ne])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"active",default:!1,type:"boolean",descriptions:[]},{name:"dirty",default:!1,type:"boolean",descriptions:[]},{name:"append-inner-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"appendInnerIcon",description:"后置内联图标",source:"input-control"}],description:"后置内联图标"},{name:"clearable",source:"input-control",default:!1,type:"boolean",descriptions:[{language:"zh",name:"clearable",description:"是否可清除",source:"input-control"}],description:"是否可清除"},{name:"clear-icon",source:"input-control",default:"!$clear!",type:"string | object",descriptions:[{language:"zh",name:"clearIcon",description:"清除图标",source:"input-control"}],description:"清除图标"},{name:"disabled",source:"input-control",default:!1,type:"boolean",descriptions:[{language:"zh",name:"disabled",description:"是否禁用",source:"input-control"}],description:"是否禁用"},{name:"prepend-inner-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"prependInnerIcon",description:"前置内联图标",source:"input-control"}],description:"前置内联图标"},{name:"prefix",source:"input-control",type:"string",descriptions:[{language:"zh",name:"prefix",description:"前缀",source:"input-control"}],description:"前缀"},{name:"prefix-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"prefixIcon",description:"前缀图标",source:"input-control"}],description:"前缀图标"},{name:"suffix",source:"input-control",type:"string",descriptions:[{language:"zh",name:"suffix",description:"后缀",source:"input-control"}],description:"后缀"},{name:"suffix-icon",source:"input-control",type:"string | object",descriptions:[{language:"zh",name:"suffixIcon",description:"后缀图标",source:"input-control"}],description:"后缀图标"},{name:"color",source:"input-control",type:"string",descriptions:[]},{name:"text-color",source:"input-control",type:"string",descriptions:[]},{name:"variant",source:"input-control",default:"!contained!",type:"string",descriptions:[]},{name:"shape",source:"input-control",default:"!rounded-sm!",type:"string",descriptions:[]}]},{"item.type":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"inputcontrol-events",tabindex:"-1"},{default:s((()=>[ie])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"click:clear"},{name:"click:prepend-inner"},{name:"click:prefix"},{name:"click:suffix"},{name:"click:append-inner"},{name:"click:control"},{name:"update:active"},{name:"update:modelValue"}]}),r(p,{id:"selectioncontrol-props",tabindex:"-1"},{default:s((()=>[oe])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"color",source:"selection-control",type:"string",descriptions:[]},{name:"disabled",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"error",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"id",source:"selection-control",type:"string",descriptions:[]},{name:"inline",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"label",source:"selection-control",type:"string",descriptions:[]},{name:"false-icon",source:"selection-control",type:"string",descriptions:[]},{name:"true-icon",source:"selection-control",type:"string",descriptions:[]},{name:"multiple",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"selection-control",type:"string",descriptions:[]},{name:"readonly",source:"selection-control",default:!1,type:"boolean",descriptions:[]},{name:"true-value",source:"selection-control",type:"any",descriptions:[]},{name:"false-value",source:"selection-control",type:"any",descriptions:[]},{name:"model-value",source:"selection-control",type:"any",descriptions:[]},{name:"type",source:"selection-control",type:"string",descriptions:[]},{name:"value",source:"selection-control",type:"any",descriptions:[]},{name:"value-comparator",source:"selection-control",type:"function",descriptions:[]},{name:"theme",source:"selection-control",type:"string",descriptions:[]},{name:"size",source:"paper",default:"!medium!",type:"string | number",descriptions:[]},{name:"density",source:"density",default:"!medium!",type:"string",descriptions:[]}]},{"item.type":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"selectioncontrol-events",tabindex:"-1"},{default:s((()=>[ae])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]}),r(p,{id:"selectiongroupcontrol-props",tabindex:"-1"},{default:s((()=>[le])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"描述",value:"description",minWidth:"120"},{text:"来源",value:"source",minWidth:"120"}],items:[{name:"id",source:"selection-control-group",type:"string",descriptions:[]},{name:"inline",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"name",source:"selection-control-group",type:"string",descriptions:[]},{name:"false-icon",source:"selection-control-group",type:"string",descriptions:[]},{name:"true-icon",source:"selection-control-group",type:"string",descriptions:[]},{name:"multiple",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"disabled",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"readonly",source:"selection-control-group",default:!1,type:"boolean",descriptions:[]},{name:"type",source:"selection-control-group",type:"string",descriptions:[]},{name:"model-value",source:"selection-control-group",type:"any",descriptions:[]}]},{"item.type":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k(e.type),1)])),_:2},1024)])),"item.default":s((({item:e})=>[r(u,{color:"secondary",inline:"",class:"p-1"},{default:s((()=>[d(k("string"==typeof e.default?e.default.replace(/!/g,"'"):JSON.stringify(e.default,null,2)),1)])),_:2},1024)])),_:1}),r(p,{id:"selectiongroupcontrol-events",tabindex:"-1"},{default:s((()=>[re])),_:1}),r(m,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}))}}}));
