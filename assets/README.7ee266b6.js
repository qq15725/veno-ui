import{_ as h}from"./Demo.90048bb9.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as _,U as g,d as x,f as y,C as v,R as k,g as C,T as E}from"./app.16b4d607.js";import{Z as u,S as i,n as e,U as t,u as f,I as a}from"./vendor.17b08436.js";const A={};function $(p,m,d,r,s,c){const o=_,n=h;return u(),i("div",null,[e(n,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/checkbox/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-checkbox%20label%3D%22Checkbox%22%20value%3D%22checkbox%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(o,{label:"Checkbox",value:"checkbox"})]),_:1})])}var F=b(A,[["render",$]]);const D={};function P(p,m,d,r,s,c){const o=_,n=g,l=h;return u(),i("div",null,[e(l,{title:"\u590D\u9009\u6846\u7EC4",slug:"\u590D\u9009\u6846\u7EC4",file:"/packages/veno-ui/src/components/checkbox/docs/group.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-checkbox-group%20label%3D%22%E5%A4%8D%E9%80%89%E6%A1%86%E7%BB%84%22%20messages%3D%22%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E5%B8%AE%E5%8A%A9%E4%BF%A1%E6%81%AF%22%3E%0A%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox1%22%20%2F%3E%0A%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox2%22%20%2F%3E%0A%20%20%20%20%3Cve-checkbox%20value%3D%22Checkbox3%22%20%2F%3E%0A%20%20%3C%2Fve-checkbox-group%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(n,{label:"\u590D\u9009\u6846\u7EC4",messages:"\u8FD9\u662F\u4E00\u6761\u5E2E\u52A9\u4FE1\u606F"},{default:t(()=>[e(o,{value:"Checkbox1"}),e(o,{value:"Checkbox2"}),e(o,{value:"Checkbox3"})]),_:1})]),_:1})])}var B=b(D,[["render",P]]);const W=a("\u590D\u9009\u6846 Checkbox"),w=a("\u6F14\u793A"),G=a("API"),V=a("Checkbox Props"),j=a("Checkbox Events"),I=a("CheckboxGroup Props"),O=a("CheckboxGroup Events"),z={title:"\u590D\u9009\u6846 Checkbox",headers:[{level:1,title:"\u590D\u9009\u6846 Checkbox",slug:"\u590D\u9009\u6846-checkbox"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u590D\u9009\u6846\u7EC4",slug:"\u590D\u9009\u6846\u7EC4"},{level:2,title:"API",slug:"api"},{level:3,title:"Checkbox Props",slug:"checkbox-props"},{level:3,title:"Checkbox Events",slug:"checkbox-events"},{level:3,title:"CheckboxGroup Props",slug:"checkboxgroup-props"},{level:3,title:"CheckboxGroup Events",slug:"checkboxgroup-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},H={},Q=Object.assign(H,{setup(p){return(m,d)=>{const r=x,s=y,c=v,o=k,n=C,l=E;return u(),i("div",null,[e(r,{id:"\u590D\u9009\u6846-checkbox",tabindex:"-1"},{default:t(()=>[W]),_:1}),e(s,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[w]),_:1}),e(o,null,{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(f(F))]),_:1})]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(f(B))]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{id:"api",tabindex:"-1"},{default:t(()=>[G]),_:1}),e(n,{id:"checkbox-props",tabindex:"-1"},{default:t(()=>[V]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"color",source:"selection-control",type:"string",default:'"primary"'},{name:"disabled",source:"selection-control",type:"boolean",default:"false"},{name:"error",source:"selection-control",type:"boolean",default:"false"},{name:"id",source:"selection-control",type:"string"},{name:"inline",source:"selection-control",type:"boolean",default:"false"},{name:"label",source:"selection-control",type:"string"},{name:"false-icon",source:"selection-control",type:"string",default:'"$checkboxOff"'},{name:"true-icon",source:"selection-control",type:"string",default:'"$checkboxOn"'},{name:"multiple",source:"selection-control",type:"boolean",default:"false"},{name:"name",source:"selection-control",type:"string"},{name:"readonly",source:"selection-control",type:"boolean",default:"false"},{name:"true-value",source:"selection-control",type:"any"},{name:"false-value",source:"selection-control",type:"any"},{name:"model-value",source:"selection-control",type:"any"},{name:"type",source:"selection-control",type:"string",default:'"checkbox"'},{name:"value",source:"selection-control",type:"any"},{name:"value-comparator",source:"selection-control",type:"function"},{name:"theme",source:"selection-control",type:"string"},{name:"density",source:"paper",type:"string",default:'"medium"'}]}),e(n,{id:"checkbox-events",tabindex:"-1"},{default:t(()=>[j]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]}),e(n,{id:"checkboxgroup-props",tabindex:"-1"},{default:t(()=>[I]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"append-icon",source:"form-control",type:"string"},{name:"prepend-icon",source:"form-control",type:"string"},{name:"label",source:"form-control",type:"boolean | string",default:"false"},{name:"label-id",source:"form-control",type:"string"},{name:"label-width",source:"form-control",type:"string | number"},{name:"hide-details",source:"form-control",type:"boolean | string",default:"false"},{name:"hint",source:"form-control",type:"string"},{name:"messages",source:"input",type:"array | string",default:"[]"},{name:"persistent-hint",source:"form-control",type:"boolean",default:"false"},{name:"height",source:"input",type:"number | string"},{name:"max-height",source:"input",type:"number | string"},{name:"max-width",source:"input",type:"number | string"},{name:"min-height",source:"input",type:"number | string"},{name:"min-width",source:"input",type:"number | string"},{name:"width",source:"input",type:"number | string"},{name:"direction",source:"input",type:"string",default:'"horizontal"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"disabled",source:"selection-control-group",type:"boolean",default:"false"},{name:"error",source:"input",type:"boolean",default:"false"},{name:"error-messages",source:"input",type:"array | string",default:"[]"},{name:"max-errors",source:"input",type:"number | string",default:"1"},{name:"name",source:"selection-control-group",type:"string"},{name:"readonly",source:"selection-control-group",type:"boolean",default:"false"},{name:"rules",source:"input",type:"array",default:"[]"},{name:"model-value",source:"selection-control-group",type:"any"},{name:"id",source:"selection-control-group",type:"string"},{name:"inline",source:"selection-control-group",type:"boolean",default:"false"},{name:"false-icon",source:"selection-control-group",type:"string",default:'"$checkboxOff"'},{name:"true-icon",source:"selection-control-group",type:"string",default:'"$checkboxOn"'},{name:"multiple",source:"selection-control-group",type:"boolean",default:"true"},{name:"type",source:"selection-control-group",type:"string",default:'"checkbox"'}]}),e(n,{id:"checkboxgroup-events",tabindex:"-1"},{default:t(()=>[O]),_:1}),e(l,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"update:modelValue"}]})])}}});export{z as __pageData,Q as default};
