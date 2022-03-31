var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var k=(o,l,n)=>l in o?w(o,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[l]=n,F=(o,l)=>{for(var n in l||(l={}))x.call(l,n)&&k(o,n,l[n]);if(y)for(var n of y(l))G.call(l,n)&&k(o,n,l[n]);return o};import{q as E,_ as b,o as _,c as f,a as e,w as t,ay as D,s as g,b as s,C as h,P as B,J as Y,K as U,m as V,g as L,e as z,aB as S,O as j,x as C,t as N,H as q,d as M,j as P,R as T,n as I,T as O}from"./app.a65009aa.js";import{_ as v}from"./Demo.421a0a0b.js";const W=E({setup(){return{items:["Florida","Georgia","Nebraska","California","New York"]}}});function H(o,l,n,d,u,m){const a=D,i=v;return _(),f("div",null,[e(i,{title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5",file:"/packages/veno-ui/src/components/select/docs/basic.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20label%3D%22City%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aitems%3D%22items%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items%3A%20%5B'Florida'%2C%20'Georgia'%2C%20'Nebraska'%2C%20'California'%2C%20'New%20York'%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(a,{label:"City",placeholder:"\u8BF7\u9009\u62E9",items:o.items,clearable:""},null,8,["items"])]),_:1})])}var Q=b(W,[["render",H]]);const R=E({setup(){return{items:[...Array.from({length:20})].map((o,l)=>l+1)}}});function J(o,l,n,d,u,m){const a=D,i=v;return _(),f("div",null,[e(i,{title:"\u6700\u5927\u9AD8\u5EA6",slug:"\u6700\u5927\u9AD8\u5EA6",file:"/packages/veno-ui/src/components/select/docs/max-height.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aitems%3D%22items%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20items%3A%20%5B...Array.from(%7B%20length%3A%2020%20%7D)%5D.map((_%2C%20i)%20%3D%3E%20i%20%2B%201)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{default:t(()=>[e(a,{placeholder:"\u8BF7\u9009\u62E9",items:o.items,clearable:""},null,8,["items"])]),_:1})])}var K=b(R,[["render",J]]);const X=E({setup(){return{selected:g({state:"Florida",abbr:"FL"}),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),Z=s("\u901A\u8FC7\u6307\u5B9A "),e2=s("item-text"),t2=s("\uFF08\u9ED8\u8BA4\u503C\uFF1Atext\uFF09 \u548C "),o2=s("item-value"),s2=s("\uFF08\u9ED8\u8BA4\u503C\uFF1Avalue\uFF09\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u6587\u672C\u548C\u503C\u3002 \u800C\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u4F7F\u7528 return-object \u5C5E\u6027\u7684\u65B9\u5F0F\u6765\u8FD4\u56DE\u6240\u9009\u9879\u7684\u6574\u4E2A\u5BF9\u8C61\u503C\u3002");function a2(o,l,n,d,u,m){const a=h,i=B,r=D,A=v;return _(),f("div",null,[e(A,{title:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",slug:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",file:"/packages/veno-ui/src/components/select/docs/custom-text-value.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20%0A%20%20%20%20v-model%3D%22selected%22%20%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[Z,e(a,{color:"secondary",inline:""},{default:t(()=>[e2]),_:1}),t2,e(a,{color:"secondary",inline:""},{default:t(()=>[o2]),_:1}),s2]),_:1})]),default:t(()=>[e(r,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>o.selected=c),items:o.items,"item-text":"state","item-value":"abbr","return-object":""},null,8,["modelValue","items"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var l2=b(X,[["render",a2]]);const n2=E({setup(){return{selected:g(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),i2=s("\u901A\u8FC7\u8BBE\u7F6E "),r2=s("multiple"),c2=s(" \u652F\u6301\u591A\u9009\u3002"),d2=s("\u914D\u5408 "),A2=s("tags"),p2=s(" \u5F97\u5230\u4E00\u4E2A\u6807\u7B7E\u5F62\u5F0F\u7684\u591A\u9009\u6846\u3002");function u2(o,l,n,d,u,m){const a=h,i=B,r=D,A=v;return _(),f("div",null,[e(A,{title:"\u591A\u9009\u9009\u62E9\u5668",slug:"\u591A\u9009\u9009\u62E9\u5668",file:"/packages/veno-ui/src/components/select/docs/multiple.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%2F%3E%0A%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[i2,e(a,{color:"secondary",inline:""},{default:t(()=>[r2]),_:1}),c2]),_:1}),e(i,null,{default:t(()=>[d2,e(a,{color:"secondary",inline:""},{default:t(()=>[A2]),_:1}),p2]),_:1})]),default:t(()=>[e(r,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>o.selected=c),placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr",multiple:""},null,8,["modelValue","items"]),e(r,{modelValue:o.selected,"onUpdate:modelValue":l[1]||(l[1]=c=>o.selected=c),placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr",multiple:"",tags:""},null,8,["modelValue","items"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var m2=b(n2,[["render",u2]]);const _2=E({setup(){return{selected:g([]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),f2=s("\u901A\u8FC7\u8BBE\u7F6E "),C2=s("filterable"),b2=s(" \uFF0C\u53EF\u4EE5\u8BA9\u9009\u62E9\u5668\u652F\u6301\u8FC7\u6EE4\u3002"),D2=s("\u901A\u8FC7\u76D1\u542C "),v2=s("@update:query"),g2=s(" \u4E8B\u4EF6\uFF0C\u83B7\u53D6\u67E5\u8BE2\u5B57\u7B26\u4E32\u6539\u52A8\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u505A\u4E86\u53CD\u6296\u52A8\u5904\u7406\u3002");function E2(o,l,n,d,u,m){const a=h,i=B,r=D,A=v;return _(),f("div",null,[e(A,{title:"\u53EF\u8FC7\u6EE4\u7684",slug:"\u53EF\u8FC7\u6EE4\u7684",file:"/packages/veno-ui/src/components/select/docs/filterable.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20return-object%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%20%20filterable%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[f2,e(a,{color:"secondary",inline:""},{default:t(()=>[C2]),_:1}),b2]),_:1}),e(i,null,{default:t(()=>[D2,e(a,{color:"secondary",inline:""},{default:t(()=>[v2]),_:1}),g2]),_:1})]),default:t(()=>[e(r,{placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr","return-object":"",filterable:""},null,8,["items"]),e(r,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>o.selected=c),placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr","return-object":"",multiple:"",tags:"",filterable:""},null,8,["modelValue","items"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var h2=b(_2,[["render",E2]]);const B2=E({setup(){const o=g([]),l=g([]),n=g(!1);return{selected:o,items:l,loading:n,onQuery:d=>{!d||(n.value=!0,setTimeout(()=>{n.value=!1,l.value=[`${d}--1`,`${d}--2`,`${d}--3`,`${d}--4`,`${d}--5`,...o.value]},1e3))}}}}),$2=s("\u901A\u8FC7\u8BBE\u7F6E "),F2=s("filterable"),y2=s(" \u548C "),k2=s("onUpdate:query"),N2=s(" \uFF0C\u53EF\u4EE5\u5F88\u5BB9\u6613\u5B9E\u73B0\u4E00\u4E2A\u641C\u7D22\u6846\u3002"),V2=s("\u8BBE\u7F6E "),w2=s(':delete-after-unmount="false"'),x2=s(" \u53EF\u4EE5\u4F7F "),G2=s("items"),Y2=s(" \u503C\u4FEE\u6539\u65F6\u4E0D\u79FB\u9664\u5DF2\u9009\u4E2D\u7684\u503C\u3002");function U2(o,l,n,d,u,m){const a=h,i=B,r=D,A=v;return _(),f("div",null,[e(A,{title:"\u641C\u7D22\u6846",slug:"\u641C\u7D22\u6846",file:"/packages/veno-ui/src/components/select/docs/search.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E6%90%9C%E7%B4%A2%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%20%20filterable%0A%20%20%20%20%3Adelete-after-unmount%3D%22false%22%0A%20%20%20%20%40update%3Aquery%3D%22onQuery%22%0A%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20width%3D%22200%22%0A%20%20%2F%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20const%20selected%20%3D%20ref(%5B%5D)%0A%20%20%20%20%20%20const%20items%20%3D%20ref(%5B%5D)%0A%20%20%20%20%20%20const%20loading%20%3D%20ref(false)%0A%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%2C%0A%20%20%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20%20%20onQuery%3A%20v%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(!v)%20return%0A%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20true%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loading.value%20%3D%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20items.value%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--1%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--2%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--3%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--4%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%24%7B%20v%20%7D--5%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...selected.value%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[$2,e(a,{color:"secondary",inline:""},{default:t(()=>[F2]),_:1}),y2,e(a,{color:"secondary",inline:""},{default:t(()=>[k2]),_:1}),N2]),_:1}),e(i,null,{default:t(()=>[V2,e(a,{color:"secondary",inline:""},{default:t(()=>[w2]),_:1}),x2,e(a,{color:"secondary",inline:""},{default:t(()=>[G2]),_:1}),Y2]),_:1})]),default:t(()=>[e(r,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>o.selected=c),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",items:o.items,multiple:"",tags:"",filterable:"","delete-after-unmount":!1,"onUpdate:query":o.onQuery,loading:o.loading,width:"200"},null,8,["modelValue","items","onUpdate:query","loading"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var L2=b(B2,[["render",U2]]);const z2=E({setup(){return{selected:g(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),S2=s("\u901A\u8FC7 "),j2=s("item"),q2=s(" \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9009\u62E9\u9879\u7684\u6E32\u67D3\u3002");function M2(o,l,n,d,u,m){const a=h,i=B,r=L,A=D,c=v;return _(),f("div",null,[e(c,{title:"\u63D2\u69FD-\u9009\u62E9\u9879",slug:"\u63D2\u69FD-\u9009\u62E9\u9879",file:"/packages/veno-ui/src/components/select/docs/slots-item.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23item%3D%22%7B%20props%2C%20item%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-list-item%0A%20%20%20%20%20%20%20%20v-bind%3D%22%7B%20...props%2C%20...item%20%7D%22%0A%20%20%20%20%20%20%20%20v-show%3D%22!item.filtered%22%0A%20%20%20%20%20%20%20%20link%0A%20%20%20%20%20%20%20%20prepend-avatar%3D%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19576382%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Florida'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'FL'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Georgia'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'GA'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'Nebraska'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'NE'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'California'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'CA'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%3A%20'New%20York'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20abbr%3A%20'NY'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[S2,e(a,{color:"secondary",inline:""},{default:t(()=>[j2]),_:1}),q2]),_:1})]),default:t(()=>[e(A,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=p=>o.selected=p),placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr",multiple:""},{item:t(({props:p,item:$})=>[Y(e(r,V(F(F({},p),$),{link:"","prepend-avatar":"https://avatars.githubusercontent.com/u/19576382"}),null,16),[[U,!$.filtered]])]),_:1},8,["modelValue","items"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var P2=b(z2,[["render",M2]]);const T2=E({setup(){return{selected:g(["FL"]),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]}}}),I2=s("\u901A\u8FC7 "),O2=s("tag"),W2=s(" \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u6E32\u67D3\u3002");function H2(o,l,n,d,u,m){const a=h,i=B,r=S,A=D,c=v;return _(),f("div",null,[e(c,{title:"\u63D2\u69FD-\u6807\u7B7E\u9879",slug:"\u63D2\u69FD-\u6807\u7B7E\u9879",file:"/packages/veno-ui/src/components/select/docs/slots-tag.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%0A%20%20%20%20v-model%3D%22selected%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%0A%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20item-text%3D%22state%22%0A%20%20%20%20item-value%3D%22abbr%22%0A%20%20%20%20multiple%0A%20%20%20%20tags%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23tag%3D%22%7B%20item%2C%20close%20%7D%22%3E%0A%20%20%20%20%20%20%3Cve-tag%20%0A%20%20%20%20%20%20%20%20%3Akey%3D%22item.value%22%20%0A%20%20%20%20%20%20%20%20v-bind%3D%22item%22%0A%20%20%20%20%20%20%20%20%40click%3Aclose%3D%22close%22%0A%20%20%20%20%20%20%20%20closable%0A%20%20%20%20%20%20%20%20variant%3D%22contained%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%0A%20%20%3Cve-code%20class%3D%22p-3%22%20%3Acode%3D%22selected%22%20theme%3D%22dark%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20import%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup%20()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20selected%3A%20ref(%5B'FL'%5D)%2C%0A%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Florida'%2C%20abbr%3A%20'FL'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Georgia'%2C%20abbr%3A%20'GA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'Nebraska'%2C%20abbr%3A%20'NE'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'California'%2C%20abbr%3A%20'CA'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20state%3A%20'New%20York'%2C%20abbr%3A%20'NY'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[I2,e(a,{color:"secondary",inline:""},{default:t(()=>[O2]),_:1}),W2]),_:1})]),default:t(()=>[e(A,{modelValue:o.selected,"onUpdate:modelValue":l[0]||(l[0]=p=>o.selected=p),placeholder:"\u8BF7\u9009\u62E9",items:o.items,"item-text":"state","item-value":"abbr",multiple:"",tags:""},{tag:t(({item:p,close:$})=>[(_(),z(r,V({key:p.value},p,{"onClick:close":$,closable:"",variant:"contained"}),null,16,["onClick:close"]))]),_:1},8,["modelValue","items"]),e(a,{class:"p-3",code:o.selected,theme:"dark"},null,8,["code"])]),_:1})])}var Q2=b(T2,[["render",H2]]);const R2={},J2=s("\u8BBE\u7F6E "),K2=s("no-data-text"),X2=s(" \uFF0C\u53EF\u4EE5\u4FEE\u6539\u9ED8\u8BA4\u7684\u65E0\u6570\u636E\u6587\u6848\u3002"),Z2=s("\u5F53\u524D\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),e0=s("no-data"),t0=s(" \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002");function o0(o,l,n,d,u,m){const a=h,i=B,r=D,A=j,c=v;return _(),f("div",null,[e(c,{title:"\u63D2\u69FD-\u65E0\u6570\u636E",slug:"\u63D2\u69FD-\u65E0\u6570\u636E",file:"/packages/veno-ui/src/components/select/docs/slots-no-data.md",code:"%3Ctemplate%3E%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%20no-data-text%3D%22%E4%B9%8C%E6%8B%89%E4%B9%8C%E6%8B%89%22%20%2F%3E%0A%0A%20%20%3Cve-select%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%22%3E%0A%20%20%20%20%3Ctemplate%20%23no-data%3E%0A%20%20%20%20%20%20%3Cve-card%20title%3D%22%E4%B9%8C%E6%8B%89%E4%B9%8C%E6%8B%89%22%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fve-select%3E%0A%3C%2Ftemplate%3E"},{prepend:t(()=>[e(i,null,{default:t(()=>[J2,e(a,{color:"secondary",inline:""},{default:t(()=>[K2]),_:1}),X2]),_:1}),e(i,null,{default:t(()=>[Z2,e(a,{color:"secondary",inline:""},{default:t(()=>[e0]),_:1}),t0]),_:1})]),default:t(()=>[e(r,{placeholder:"\u8BF7\u9009\u62E9","no-data-text":"\u4E4C\u62C9\u4E4C\u62C9"}),e(r,{placeholder:"\u8BF7\u9009\u62E9"},{"no-data":t(()=>[e(A,{title:"\u4E4C\u62C9\u4E4C\u62C9"})]),_:1})]),_:1})])}var s0=b(R2,[["render",o0]]);const a0=s("\u9009\u62E9\u5668 Select"),l0=s("\u5F39\u51FA\u4E0B\u62C9\u83DC\u5355\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u591A\u9009\u3002"),n0=s("\u5F53\u9009\u9879\u5C11\u4E8E 5 \u9879\u65F6\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Radio \u5C06\u9009\u9879\u5E73\u94FA\u3002"),i0=s("\u6F14\u793A"),r0=s("API"),c0=s("Select Props"),d0=s("Select Events"),_0={title:"\u9009\u62E9\u5668 Select",headers:[{level:1,title:"\u9009\u62E9\u5668 Select",slug:"\u9009\u62E9\u5668-select"},{level:2,title:"\u6F14\u793A",slug:"\u6F14\u793A"},{level:3,title:"\u57FA\u672C\u7528\u6CD5",slug:"\u57FA\u672C\u7528\u6CD5"},{level:3,title:"\u6700\u5927\u9AD8\u5EA6",slug:"\u6700\u5927\u9AD8\u5EA6"},{level:3,title:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C",slug:"\u81EA\u5B9A\u4E49\u6587\u672C\u548C\u503C"},{level:3,title:"\u591A\u9009\u9009\u62E9\u5668",slug:"\u591A\u9009\u9009\u62E9\u5668"},{level:3,title:"\u53EF\u8FC7\u6EE4\u7684",slug:"\u53EF\u8FC7\u6EE4\u7684"},{level:3,title:"\u641C\u7D22\u6846",slug:"\u641C\u7D22\u6846"},{level:3,title:"\u63D2\u69FD-\u9009\u62E9\u9879",slug:"\u63D2\u69FD-\u9009\u62E9\u9879"},{level:3,title:"\u63D2\u69FD-\u6807\u7B7E\u9879",slug:"\u63D2\u69FD-\u6807\u7B7E\u9879"},{level:3,title:"\u63D2\u69FD-\u65E0\u6570\u636E",slug:"\u63D2\u69FD-\u65E0\u6570\u636E"},{level:2,title:"API",slug:"api"},{level:3,title:"Select Props",slug:"select-props"},{level:3,title:"Select Events",slug:"select-events"}],frontmatter:{category:"Form \u8868\u5355\u7EC4\u4EF6"}},A0={},f0=Object.assign(A0,{setup(o){return(l,n)=>{const d=q,u=B,m=M,a=P,i=T,r=I,A=h,c=O;return _(),f("div",null,[e(d,{id:"\u9009\u62E9\u5668-select",tabindex:"-1"},{default:t(()=>[a0]),_:1}),e(u,null,{default:t(()=>[l0]),_:1}),e(u,null,{default:t(()=>[n0]),_:1}),e(m,{id:"\u6F14\u793A",tabindex:"-1"},{default:t(()=>[i0]),_:1}),e(i,null,{default:t(()=>[e(a,{cols:"12",md:"12"},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{cols:"12"},{default:t(()=>[e(C(Q))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(K))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(l2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(m2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(h2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(L2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(P2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(Q2))]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(C(s0))]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{id:"api",tabindex:"-1"},{default:t(()=>[r0]),_:1}),e(r,{id:"select-props",tabindex:"-1"},{default:t(()=>[c0]),_:1}),e(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u5C5E\u6027\u540D",value:"name",minWidth:"120"},{text:"\u7C7B\u578B",value:"type",minWidth:"120"},{text:"\u9ED8\u8BA4\u503C",value:"default",minWidth:"200"},{text:"\u63CF\u8FF0",value:"description",minWidth:"120"},{text:"\u6765\u6E90",value:"source",minWidth:"120"}],items:[{name:"append-inner-icon",default:"!$dropdown!",type:"string",descriptions:[{language:"zh",name:"appendInnerIcon",description:"\u8FFD\u52A0\u7684\u5185\u8054\u56FE\u6807",source:"select"}],description:"\u8FFD\u52A0\u7684\u5185\u8054\u56FE\u6807"},{name:"delete-after-unmount",default:!0,type:"boolean",descriptions:[{language:"zh",name:"deleteAfterUnmount",description:"\u53EF\u9009\u9879\u5378\u8F7D\u540E\u662F\u5426\u4ECE\u5DF2\u9009\u9879\u4E2D\u79FB\u9664",source:"select"}],description:"\u53EF\u9009\u9879\u5378\u8F7D\u540E\u662F\u5426\u4ECE\u5DF2\u9009\u9879\u4E2D\u79FB\u9664"},{name:"filterable",default:!1,type:"boolean",descriptions:[{language:"zh",name:"filterable",description:"\u53EF\u8FC7\u6EE4\u7684",source:"select"}],description:"\u53EF\u8FC7\u6EE4\u7684"},{name:"id",type:"string",descriptions:[{language:"zh",name:"id",description:"ID",source:"select"}],description:"ID"},{name:"items",type:"array",descriptions:[{language:"zh",name:"items",description:"\u9009\u62E9\u6846\u53EF\u9009\u9879",source:"select"}],description:"\u9009\u62E9\u6846\u53EF\u9009\u9879"},{name:"item-text",default:"!text!",type:"string",descriptions:[{language:"zh",name:"itemText",description:"\u53EF\u9009\u9879\u6587\u672C\u5B57\u6BB5",source:"select"}],description:"\u53EF\u9009\u9879\u6587\u672C\u5B57\u6BB5"},{name:"item-value",default:"!value!",type:"string",descriptions:[{language:"zh",name:"itemValue",description:"\u53EF\u9009\u9879\u503C\u5B57\u6BB5",source:"select"}],description:"\u53EF\u9009\u9879\u503C\u5B57\u6BB5"},{name:"loading",default:!1,type:"boolean",descriptions:[{language:"zh",name:"loading",description:"\u52A0\u8F7D\u4E2D",source:"select"}],description:"\u52A0\u8F7D\u4E2D"},{name:"model-value",default:[],type:"any",descriptions:[{language:"zh",name:"modelValue",description:"\u5F53\u524D\u503C",source:"select"}],description:"\u5F53\u524D\u503C"},{name:"multiple",default:!1,type:"boolean",descriptions:[{language:"zh",name:"multiple",description:"\u662F\u5426\u591A\u9009",source:"select"}],description:"\u662F\u5426\u591A\u9009"},{name:"no-data-text",default:"!\u6682\u65E0\u6570\u636E!",type:"string",descriptions:[{language:"zh",name:"noDataText",description:"\u65E0\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C",source:"select"}],description:"\u65E0\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C"},{name:"open-on-clear",default:!1,type:"boolean",descriptions:[{language:"zh",name:"openOnClear",description:"\u662F\u5426\u5728\u6E05\u9664\u65F6\u6253\u5F00\u53EF\u9009\u83DC\u5355",source:"select"}],description:"\u662F\u5426\u5728\u6E05\u9664\u65F6\u6253\u5F00\u53EF\u9009\u83DC\u5355"},{name:"placeholder",type:"string",descriptions:[{language:"zh",name:"placeholder",description:"\u8F93\u5165\u6846\u5360\u4F4D\u7B26",source:"select"}],description:"\u8F93\u5165\u6846\u5360\u4F4D\u7B26"},{name:"query",type:"string",descriptions:[{language:"zh",name:"query",description:"\u67E5\u8BE2\u5B57\u7B26\u4E32",source:"select"}],description:"\u67E5\u8BE2\u5B57\u7B26\u4E32"},{name:"tags",default:!1,type:"boolean",descriptions:[{language:"zh",name:"tags",description:"\u6807\u7B7E",source:"select"}],description:"\u6807\u7B7E"},{name:"readonly",default:!1,type:"boolean",descriptions:[{language:"zh",name:"readonly",description:"\u53EA\u8BFB",source:"select"}],description:"\u53EA\u8BFB"},{name:"return-object",default:!1,type:"boolean",descriptions:[{language:"zh",name:"returnObject",description:"\u8FD4\u56DE\u5BF9\u8C61\u503C",source:"select"}],description:"\u8FD4\u56DE\u5BF9\u8C61\u503C"},{name:"beautify-scrollbar",source:"scrollbar",default:!0,type:"boolean",descriptions:[{language:"zh",name:"beautifyScrollbar",description:"\u7F8E\u5316\u6EDA\u52A8\u6761",source:"scrollbar"}],description:"\u7F8E\u5316\u6EDA\u52A8\u6761"}]},{"item.type":t(({item:p})=>[e(A,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[s(N(p.type),1)]),_:2},1024)]),"item.default":t(({item:p})=>[e(A,{color:"secondary",inline:"",class:"p-1"},{default:t(()=>[s(N(typeof p.default=="string"?p.default.replace(/!/g,"'"):JSON.stringify(p.default,null,2)),1)]),_:2},1024)]),_:1}),e(r,{id:"select-events",tabindex:"-1"},{default:t(()=>[d0]),_:1}),e(c,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"\u4E8B\u4EF6\u540D",value:"name"}],items:[{name:"click:clear"},{name:"update:modelValue"},{name:"update:query"}]})])}}});export{_0 as __pageData,f0 as default};
