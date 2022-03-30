import{_,o as r,c as p,a as e,w as t,b as a,aO as f,aP as b,x as g,H as y,d as h,j as v,R as x,n as C,T}from"./app.fb1c9184.js";import{_ as E}from"./Demo.42249bf0.js";const W={},P=a("tab1"),A=a("tab2"),$=a("tab3");function k(u,c,m,d,l,i){const n=f,o=b,s=E;return r(),p("div",null,[e(s,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/tabs/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-tabs%3E%0A%20%20%20%20%3Cve-tab%3Etab1%3C%2Fve-tab%3E%0A%20%20%20%20%3Cve-tab%3Etab2%3C%2Fve-tab%3E%0A%20%20%20%20%3Cve-tab%3Etab3%3C%2Fve-tab%3E%0A%20%20%3C%2Fve-tabs%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[e(o,null,{default:t(()=>[e(n,null,{default:t(()=>[P]),_:1}),e(n,null,{default:t(()=>[A]),_:1}),e(n,null,{default:t(()=>[$]),_:1})]),_:1})]),_:1})])}var w=_(W,[["render",k]]);const F=a("\u6807\u7B7E\u9875 Tabs"),H=a("\u6F14\u793A"),j=a("API"),V=a("Tabs Props"),z=a("Tab Props"),N={title:"\u6807\u7B7E\u9875 Tabs",headers:[{level:1,title:"\u6807\u7B7E\u9875 Tabs",slug:"\u6807\u7B7E\u9875-tabs"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:2,title:"API",slug:"api"},{level:3,title:"Tabs Props",slug:"tabs-props"},{level:3,title:"Tab Props",slug:"tab-props"}],frontmatter:{meta:{category:"Data \u6570\u636E\u5C55\u793A"}}},B={},O=Object.assign(B,{setup(u){return(c,m)=>{const d=y,l=h,i=v,n=x,o=C,s=T;return r(),p("div",null,[e(d,{id:"\u6807\u7B7E\u9875-tabs",tabindex:"-1"},{default:t(()=>[F]),_:1}),e(l,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[H]),_:1}),e(n,null,{default:t(()=>[e(i,{cols:"12",md:"12"},{default:t(()=>[e(n,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(g(w))]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{id:"api",tabindex:"-1"},{default:t(()=>[j]),_:1}),e(o,{id:"tabs-props",tabindex:"-1"},{default:t(()=>[V]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"align-with-title",type:"boolean",default:"false"},{name:"color",type:"string"},{name:"direction",type:"string",default:'"horizontal"'},{name:"fixed-tabs",type:"boolean",default:"false"},{name:"items",type:"array",default:"[]"},{name:"stacked",type:"boolean",default:"false"},{name:"background-color",type:"string"},{name:"centered",type:"boolean",default:"false"},{name:"grow",type:"boolean",default:"false"},{name:"height",type:"number | string"},{name:"hide-slider",type:"boolean",default:"false"},{name:"optional",type:"boolean",default:"false"},{name:"right",type:"boolean",default:"false"},{name:"slider-color",type:"string"},{name:"density",source:"density",type:"string",default:'"medium"'},{name:"tag",source:"tag",type:"string",default:'"div"',description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"}]}),e(o,{id:"tab-props",tabindex:"-1"},{default:t(()=>[z]),_:1}),e(s,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"fixed",type:"boolean",default:"false"},{name:"icon",type:"any"},{name:"prepend-icon",type:"string"},{name:"append-icon",type:"string"},{name:"stacked",type:"boolean",default:"false"},{name:"title",type:"string"},{name:"ripple",type:"boolean",default:"true"},{name:"color",type:"string"},{name:"slider-color",type:"string"},{name:"hide-slider",type:"boolean",default:"false"},{name:"direction",type:"string",default:'"horizontal"'},{name:"tag",source:"tag",type:"string",default:'"div"',description:"\u6307\u5B9A\u5728\u6839\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E"},{name:"href",source:"router",type:"string"},{name:"replace",source:"router",type:"boolean",default:"false"},{name:"to",source:"router",type:"string | object"},{name:"value",source:"group-item",type:"any"},{name:"disabled",source:"group-item",type:"boolean",default:"false"},{name:"selected-class",source:"group-item",type:"string",default:'"ve-tab--selected"'},{name:"theme",source:"theme",type:"string",description:"\u8BBE\u7F6E\u4E3B\u9898"}]})])}}});export{N as __pageData,O as default};
