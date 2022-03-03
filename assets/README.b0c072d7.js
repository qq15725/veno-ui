var V=Object.defineProperty;var y=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(l,s,n)=>s in l?V(l,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[s]=n,F=(l,s)=>{for(var n in s||(s={}))x.call(s,n)&&N(l,n,s[n]);if(y)for(var n of y(s))Y.call(s,n)&&N(l,n,s[n]);return l};import{_ as C,ab as b,C as $,P as B,b as G,ad as w,n as L,H as I,a as S,e as U,R as j,g as P,T}from"./app.2727beb5.js";import{_ as v}from"./Demo.412e4204.js";import{b as g,Y as p,a0 as _,n as e,_ as t,r as E,Q as o,x as q,I as H,m as k,Z as Q,u as f}from"./vendor.d4ba25e4.js";const W=g({setup(){return{items:["Florida","Georgia","Nebraska","California","New York"]}}});function R(l,s,n,d,u,m){const a=b,r=v;return p(),_("div",null,[e(r,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/select/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20label%3D%22City%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aitems%3D%22items%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20'Florida'%2C%0A%20%20%20%20%20%20%20%20%20%20'Georgia'%2C%0A%20%20%20%20%20%20%20%20%20%20'Nebraska'%2C%0A%20%20%20%20%20%20%20%20%20%20'California'%2C%0A%20%20%20%20%20%20%20%20%20%20'New%20York'%2C%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(a,{label:"City",placeholder:"\u8BF7\u9009\u62E9",items:l.items,clearable:""},null,8,["items"])]),_:1})])}var M=C(W,[["render",R]]);const O=g({setup(){return{items:[...Array.from({length:20})].map((l,s)=>s+1)}}});function Z(l,s,n,d,u,m){const a=b,r=v;return p(),_("div",null,[e(r,{title:"\u6700\u5927\u9AD8\u5EA6",slug:"\u6700\u5927\u9AD8\u5EA6",file:"/packages/veno-ui/src/components/select/docs/max-height.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aitems%3D%22items%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items%3A%20%5B...Array.from(%7B%20length%3A%2020%20%7D)%5D.map((_%2C%20i)%20%3D%3E%20i%20%2B%201)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(a,{placeholder:"\u8BF7\u9009\u62E9",items:l.items,clearable:""},null,8,["items"])]),_:1})])}var z=C(O,[["render",Z]]);const J=g({setup(){return{selected:E({state:"Florida",abbr:"FL"}),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),K=o("\u901A\u8FC7\u6307\u5B9A "),X=o("item-text"),e2=o("\uFF08\u9ED8\u8BA4\u503C\uFF1Atext\uFF09 \u548C "),t2=o("item-value"),l2=o("\uFF08\u9ED8\u8BA4\u503C\uFF1Avalue\uFF09\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u6587\u672C\u548C\u503C\u3002 \u800C\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u4F7F\u7528 return-object \u5C5E\u6027\u7684\u65B9\u5F0F\u6765\u8FD4\u56DE\u6240\u9009\u9879\u7684\u6574\u4E2A\u5BF9\u8C61\u503C\u3002");function o2(l,s,n,d,u,m){const a=$,r=B,i=b,c=v;return p(),_("div",null,[e(c,{title:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",slug:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",file:"/packages/veno-ui/src/components/select/docs/custom-text-value.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20%0A%20%20%20%20v-model%3D%22selected%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[K,e(a,{color:"secondary",inline:""},{default:t(()=>[X]),_:1}),e2,e(a,{color:"secondary",inline:""},{default:t(()=>[t2]),_:1}),l2]),_:1})]),default:t(()=>[e(i,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=A=>l.selected=A),items:l.items,"item-text":"state","item-value":"abbr","return-object":""},null,8,["modelValue","items"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var a2=C(J,[["render",o2]]);const s2=g({setup(){return{selected:E(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),n2=o("\u901A\u8FC7\u8BBE\u7F6E "),r2=o("multiple"),i2=o(" \u652F\u6301\u591A\u9009\u3002"),d2=o("\u914D\u5408 "),c2=o("tags"),A2=o(" \u5F97\u5230\u4E00\u4E2A\u6807\u7B7E\u5F62\u5F0F\u7684\u591A\u9009\u6846\u3002");function u2(l,s,n,d,u,m){const a=$,r=B,i=b,c=v;return p(),_("div",null,[e(c,{title:"\u591A\u9009\u9009\u62E9\u5668",slug:"\u591A\u9009\u9009\u62E9\u5668",file:"/packages/veno-ui/src/components/select/docs/multiple.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%2F%3E%0A%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[n2,e(a,{color:"secondary",inline:""},{default:t(()=>[r2]),_:1}),i2]),_:1}),e(r,null,{default:t(()=>[d2,e(a,{color:"secondary",inline:""},{default:t(()=>[c2]),_:1}),A2]),_:1})]),default:t(()=>[e(i,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=A=>l.selected=A),placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr",multiple:""},null,8,["modelValue","items"]),e(i,{modelValue:l.selected,"onUpdate:modelValue":s[1]||(s[1]=A=>l.selected=A),placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr",multiple:"",tags:""},null,8,["modelValue","items"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var m2=C(s2,[["render",u2]]);const p2=g({setup(){return{selected:E([]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),_2=o("\u901A\u8FC7\u8BBE\u7F6E "),f2=o("filterable"),C2=o(" \uFF0C\u53EF\u4EE5\u8BA9\u9009\u62E9\u5668\u652F\u6301\u8FC7\u6EE4\u3002"),b2=o("\u901A\u8FC7\u76D1\u542C "),v2=o("@update:query"),D2=o(" \u4E8B\u4EF6\uFF0C\u83B7\u53D6\u67E5\u8BE2\u5B57\u7B26\u4E32\u6539\u52A8\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u505A\u4E86\u53CD\u6296\u52A8\u5904\u7406\u3002");function E2(l,s,n,d,u,m){const a=$,r=B,i=b,c=v;return p(),_("div",null,[e(c,{title:"\u53EF\u8FC7\u6EE4\u7684",slug:"\u53EF\u8FC7\u6EE4\u7684",file:"/packages/veno-ui/src/components/select/docs/filterable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[_2,e(a,{color:"secondary",inline:""},{default:t(()=>[f2]),_:1}),C2]),_:1}),e(r,null,{default:t(()=>[b2,e(a,{color:"secondary",inline:""},{default:t(()=>[v2]),_:1}),D2]),_:1})]),default:t(()=>[e(i,{placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr","return-object":"",filterable:""},null,8,["items"]),e(i,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=A=>l.selected=A),placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr","return-object":"",multiple:"",tags:"",filterable:""},null,8,["modelValue","items"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var B2=C(p2,[["render",E2]]);const g2=g({setup(){const l=E([]),s=E([]),n=E(!1);return{selected:l,items:s,loading:n,onQuery:d=>{!d||(n.value=!0,setTimeout(()=>{n.value=!1,s.value=[`${d}--1`,`${d}--2`,`${d}--3`,`${d}--4`,`${d}--5`,...l.value]},1e3))}}}}),$2=o("\u901A\u8FC7\u8BBE\u7F6E "),h2=o("filterable"),F2=o(" \u548C "),y2=o("onUpdate:query"),N2=o(" \uFF0C\u53EF\u4EE5\u5F88\u5BB9\u6613\u5B9E\u73B0\u4E00\u4E2A\u641C\u7D22\u6846\u3002"),k2=o("\u8BBE\u7F6E "),V2=o(':delete-after-unmount="false"'),x2=o(" \u53EF\u4EE5\u4F7F "),Y2=o("items"),G2=o(" \u503C\u4FEE\u6539\u65F6\u4E0D\u79FB\u9664\u5DF2\u9009\u4E2D\u7684\u503C\u3002");function w2(l,s,n,d,u,m){const a=$,r=B,i=b,c=v;return p(),_("div",null,[e(c,{title:"\u641C\u7D22\u6846",slug:"\u641C\u7D22\u6846",file:"/packages/veno-ui/src/components/select/docs/search.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E6%90%9C%E7%B4%A2%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%20%20filterable%0A%20%20%20%20%3Adelete-after-unmount%3D%22false%22%0A%20%20%20%20%40update%3Aquery%3D%22onQuery%22%0A%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20width%3D%22200%22%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20selected%20%3D%20ref(%5B%5D)%0A%20%20%20%20%20%20const%20items%20%3D%20ref(%5B%5D)%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%2C%0A%20%20%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20onQuery%3A%20v%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(!v)%20return%0A%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20items.value%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--1%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--2%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--3%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--4%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--5%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...selected.value%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[$2,e(a,{color:"secondary",inline:""},{default:t(()=>[h2]),_:1}),F2,e(a,{color:"secondary",inline:""},{default:t(()=>[y2]),_:1}),N2]),_:1}),e(r,null,{default:t(()=>[k2,e(a,{color:"secondary",inline:""},{default:t(()=>[V2]),_:1}),x2,e(a,{color:"secondary",inline:""},{default:t(()=>[Y2]),_:1}),G2]),_:1})]),default:t(()=>[e(i,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=A=>l.selected=A),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",items:l.items,multiple:"",tags:"",filterable:"","delete-after-unmount":!1,"onUpdate:query":l.onQuery,loading:l.loading,width:"200"},null,8,["modelValue","items","onUpdate:query","loading"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var L2=C(g2,[["render",w2]]);const I2=g({setup(){return{selected:E(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),S2=o("\u901A\u8FC7 "),U2=o("item"),j2=o(" \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9009\u62E9\u9879\u7684\u6E32\u67D3\u3002");function P2(l,s,n,d,u,m){const a=$,r=B,i=G,c=b,A=v;return p(),_("div",null,[e(A,{title:"\u63D2\u69FD-\u9009\u62E9\u9879",slug:"\u63D2\u69FD-\u9009\u62E9\u9879",file:"/packages/veno-ui/src/components/select/docs/slots-item.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20props%2C%20item%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20v-bind%3D%22%7B%20...props%2C%20...item%20%7D%22%0A%20%20%20%20%20%20%20%20v-show%3D%22!item.filtered%22%0A%20%20%20%20%20%20%20%20link%0A%20%20%20%20%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Florida'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'FL'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Georgia'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'GA'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Nebraska'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'NE'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'California'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'CA'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'New%20York'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'NY'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[S2,e(a,{color:"secondary",inline:""},{default:t(()=>[U2]),_:1}),j2]),_:1})]),default:t(()=>[e(c,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=D=>l.selected=D),placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr",multiple:""},{item:t(({props:D,item:h})=>[q(e(i,k(F(F({},D),h),{link:"","prepend-avatar":"https://avatars.githubusercontent.com/u/19576382"}),null,16),[[H,!h.filtered]])]),_:1},8,["modelValue","items"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var T2=C(I2,[["render",P2]]);const q2=g({setup(){return{selected:E(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),H2=o("\u901A\u8FC7 "),Q2=o("tag"),W2=o(" \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u6E32\u67D3\u3002");function R2(l,s,n,d,u,m){const a=$,r=B,i=w,c=b,A=v;return p(),_("div",null,[e(A,{title:"\u63D2\u69FD-\u6807\u7B7E\u9879",slug:"\u63D2\u69FD-\u6807\u7B7E\u9879",file:"/packages/veno-ui/src/components/select/docs/slots-tag.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23tag%3D%22%7B%20item%2C%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-tag%20%0A%20%20%20%20%20%20%20%20%3Akey%3D%22item.value%22%20%0A%20%20%20%20%20%20%20%20v-bind%3D%22item%22%0A%20%20%20%20%20%20%20%20%40click%3Aclose%3D%22close%22%0A%20%20%20%20%20%20%20%20closable%0A%20%20%20%20%20%20%20%20variant%3D%22contained%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%0A%20%20%3Cve-code%20%3Acode%3D%22selected%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[H2,e(a,{color:"secondary",inline:""},{default:t(()=>[Q2]),_:1}),W2]),_:1})]),default:t(()=>[e(c,{modelValue:l.selected,"onUpdate:modelValue":s[0]||(s[0]=D=>l.selected=D),placeholder:"\u8BF7\u9009\u62E9",items:l.items,"item-text":"state","item-value":"abbr",multiple:"",tags:""},{tag:t(({item:D,close:h})=>[(p(),Q(i,k({key:D.value},D,{"onClick:close":h,closable:"",variant:"contained"}),null,16,["onClick:close"]))]),_:1},8,["modelValue","items"]),e(a,{code:l.selected},null,8,["code"])]),_:1})])}var M2=C(q2,[["render",R2]]);const O2={},Z2=o("\u8BBE\u7F6E "),z2=o("no-data-text"),J2=o(" \uFF0C\u53EF\u4EE5\u4FEE\u6539\u9ED8\u8BA4\u7684\u65E0\u6570\u636E\u6587\u6848\u3002"),K2=o("\u5F53\u524D\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),X2=o("no-data"),e0=o(" \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002");function t0(l,s,n,d,u,m){const a=$,r=B,i=b,c=L,A=v;return p(),_("div",null,[e(A,{title:"\u63D2\u69FD-\u65E0\u6570\u636E",slug:"\u63D2\u69FD-\u65E0\u6570\u636E",file:"/packages/veno-ui/src/components/select/docs/slots-no-data.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20no-data-text%3D%22%E4%B9%8C%E6%8B%89%E4%B9%8C%E6%8B%89%22%20%2F%3E%0A%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%3E%0A%20%20%20%20%3Ctemplate%20%23no-data%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E4%B9%8C%E6%8B%89%E4%B9%8C%E6%8B%89%22%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(r,null,{default:t(()=>[Z2,e(a,{color:"secondary",inline:""},{default:t(()=>[z2]),_:1}),J2]),_:1}),e(r,null,{default:t(()=>[K2,e(a,{color:"secondary",inline:""},{default:t(()=>[X2]),_:1}),e0]),_:1})]),default:t(()=>[e(i,{placeholder:"\u8BF7\u9009\u62E9","no-data-text":"\u4E4C\u62C9\u4E4C\u62C9"}),e(i,{placeholder:"\u8BF7\u9009\u62E9"},{"no-data":t(()=>[e(c,{title:"\u4E4C\u62C9\u4E4C\u62C9"})]),_:1})]),_:1})])}var l0=C(O2,[["render",t0]]);const o0=o("\u9009\u62E9\u5668 Select"),a0=o("\u5F39\u51FA\u4E0B\u62C9\u83DC\u5355\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u591A\u9009\u3002"),s0=o("\u5F53\u9009\u9879\u5C11\u4E8E 5 \u9879\u65F6\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Radio \u5C06\u9009\u9879\u5E73\u94FA\u3002"),n0=o("\u6F14\u793A"),r0=o("API"),i0=o("Select Props"),d0=o("Select Events"),_0={title:"\u9009\u62E9\u5668 Select",headers:[{level:1,title:"\u9009\u62E9\u5668 Select",slug:"\u9009\u62E9\u5668-select"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6700\u5927\u9AD8\u5EA6",slug:"\u6700\u5927\u9AD8\u5EA6"},{level:3,title:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",slug:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C"},{level:3,title:"\u591A\u9009\u9009\u62E9\u5668",slug:"\u591A\u9009\u9009\u62E9\u5668"},{level:3,title:"\u53EF\u8FC7\u6EE4\u7684",slug:"\u53EF\u8FC7\u6EE4\u7684"},{level:3,title:"\u641C\u7D22\u6846",slug:"\u641C\u7D22\u6846"},{level:3,title:"\u63D2\u69FD-\u9009\u62E9\u9879",slug:"\u63D2\u69FD-\u9009\u62E9\u9879"},{level:3,title:"\u63D2\u69FD-\u6807\u7B7E\u9879",slug:"\u63D2\u69FD-\u6807\u7B7E\u9879"},{level:3,title:"\u63D2\u69FD-\u65E0\u6570\u636E",slug:"\u63D2\u69FD-\u65E0\u6570\u636E"},{level:2,title:"API",slug:"api"},{level:3,title:"Select Props",slug:"select-props"},{level:3,title:"Select Events",slug:"select-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},c0={},f0=Object.assign(c0,{setup(l){return(s,n)=>{const d=I,u=B,m=S,a=U,r=j,i=P,c=T;return p(),_("div",null,[e(d,{id:"\u9009\u62E9\u5668-select",tabindex:"-1"},{default:t(()=>[o0]),_:1}),e(u,null,{default:t(()=>[a0]),_:1}),e(u,null,{default:t(()=>[s0]),_:1}),e(m,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[n0]),_:1}),e(r,null,{default:t(()=>[e(a,{cols:"12",md:"12"},{default:t(()=>[e(r,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(f(M))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(z))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(a2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(m2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(B2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(L2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(T2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(M2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(f(l0))]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{id:"api",tabindex:"-1"},{default:t(()=>[r0]),_:1}),e(i,{id:"select-props",tabindex:"-1"},{default:t(()=>[i0]),_:1}),e(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u7EC4\u5408",value:"source",minWidth:"120"}],items:[{name:"append-inner-icon",type:"string",default:'"$dropdown"'},{name:"delete-after-unmount",type:"boolean",default:"true"},{name:"filterable",type:"boolean",default:"false"},{name:"id",type:"string"},{name:"items",type:"array"},{name:"item-text",type:"string",default:'"text"'},{name:"item-value",type:"string",default:'"value"'},{name:"loading",type:"boolean",default:"false"},{name:"model-value",type:"any",default:"[]"},{name:"multiple",type:"boolean",default:"false"},{name:"no-data-text",type:"string",default:'"\u6682\u65E0\u6570\u636E"'},{name:"open-on-clear",type:"boolean",default:"false"},{name:"placeholder",type:"string"},{name:"query",type:"string"},{name:"tags",type:"boolean",default:"false"},{name:"readonly",type:"boolean",default:"false"},{name:"return-object",type:"boolean",default:"false"},{name:"beautify-scrollbar",source:"scrollbar",type:"boolean",default:"true"}]}),e(i,{id:"select-events",tabindex:"-1"},{default:t(()=>[d0]),_:1}),e(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:clear"},{name:"update:modelValue"},{name:"update:query"}]})])}}});export{_0 as __pageData,f0 as default};
