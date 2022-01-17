import{p as e,s as t,e as l,w as a,h as r,i as o,j as n,k as s,I as i,B as u,b as c,u as p,l as d,t as v,P as f,n as b,o as y}from"./index.d58ac58d.js";import{m,P as g}from"./pagination.7d0fdd60.js";import{c as h,a as j,I as O,m as x,r as w,w as S}from"./vendor.bd78ac10.js";var P=Object.defineProperty,B=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,A=(e,t,l)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const k=e(((e,t)=>{for(var l in t||(t={}))_.call(t,l)&&A(e,l,t[l]);if(B)for(var l of B(t))I.call(t,l)&&A(e,l,t[l]);return e})({remote:Boolean,items:{type:Array,default:()=>[]},mustSort:Boolean,multiSort:Boolean,sortBy:{type:[String,Array],default:()=>[]},sortDesc:{type:[Boolean,Array],default:()=>[]},customSort:{type:Function,default:t},locale:{type:String,default:"en-US"}},m()),"data-iterator");function C(e){const t=l(e,"page",e.page,(e=>Number(e))),o=l(e,"perPage",e.perPage,(e=>Number(e))),n=l(e,"total",e.total,(t=>void 0===t?e.items.length:Number(t))),s=l(e,"mustSort"),i=l(e,"multiSort"),u=l(e,"sortBy"),c=l(e,"sortDesc");return{items:h((()=>{if(e.remote)return e.items;let l=e.items.slice();return l=function(t){return e.customSort(t,a(u.value),a(c.value),e.locale)}(l),l=function(e){return e.slice((t.value-1)*o.value,Math.min(n.value,t.value*o.value))}(l),l})),page:t,perPage:o,total:n,sortBy:u,sortDesc:c,sort:function(e){if(Array.isArray(e))c.value=e.map((e=>{const t=a(u.value).findIndex((t=>t===e));return t>-1&&a(c.value)[t]})),u.value=e;else{const l=function(e,t,l,a,o,n){let s=t.slice(),i=l.slice();const u=s.findIndex((t=>t===e));return u<0?(n||(s=[],i=[]),s.push(e),i.push(!1)):u>=0&&!i[u]?i[u]=!0:o?i[u]=!1:(s.splice(u,1),i.splice(u,1)),r(s,t)&&r(i,l)||(a=1),{by:s,desc:i,page:a}}(e,a(u.value),a(c.value),t.value,s.value,i.value);u.value=l.by,c.value=l.desc,t.value=l.page}}}}var D=Object.defineProperty,$=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,E=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;function V(e){return o(e,Object.keys(U.props))}const W=e(((e,t)=>{for(var l in t||(t={}))T.call(t,l)&&E(e,l,t[l]);if($)for(var l of $(t))N.call(t,l)&&E(e,l,t[l]);return e})({rowIndex:Number,colIndex:Number,cols:Number,fixed:[Boolean,String],align:{type:String,default:"start"}},n({tag:"td"})),"table-cell"),U=s({name:"VeTableCell",props:W(),setup(e,{slots:t}){const l=h((()=>"string"==typeof e.fixed?e.fixed:!(!e.fixed||void 0===e.colIndex||void 0===e.cols)&&(e.colIndex<(e.cols-1)/2?"start":"end")));return()=>j(e.tag,{class:["ve-table-cell",`text-${e.align}`,{"ve-table-cell--fixed-start":"start"===l.value,"ve-table-cell--fixed-end":"end"===l.value}]},{default:()=>{var e;return[j("div",{class:"ve-table-cell__overlay"},null),null==(e=t.default)?void 0:e.call(t)]},_:1},8,["class"])}});var H=Object.defineProperty,L=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,R=(e,t,l)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const F=s({name:"VeTableTd",props:((e,t)=>{for(var l in t||(t={}))z.call(t,l)&&R(e,l,t[l]);if(L)for(var l of L(t))K.call(t,l)&&R(e,l,t[l]);return e})({sorted:Boolean},W()),setup(e,{slots:t}){const[l]=V(e);return()=>{return j(U,x(l,{class:{"ve-table-td":!0,"ve-table-td--sorted":e.sorted},tag:"td"}),"function"==typeof(a=t)||"[object Object]"===Object.prototype.toString.call(a)&&!O(a)?t:{default:()=>[t],_:2},16,["class"]);var a}}});var M=Object.defineProperty,q=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,l)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const X=s({name:"VeTableTh",props:((e,t)=>{for(var l in t||(t={}))G.call(t,l)&&Q(e,l,t[l]);if(q)for(var l of q(t))J.call(t,l)&&Q(e,l,t[l]);return e})({sortable:Boolean,sortDesc:Boolean,sortIcon:{type:String,default:"veno-ui:$sort"},sortActiveColor:{type:String,default:"primary"},filterIcon:{type:String,default:"veno-ui:$filter"},filters:{type:Array,default:()=>[]}},W()),setup:(e,{slots:t})=>()=>{const[l]=V(e);return j(U,x(l,{tag:"th",class:{"ve-table-th":!0,"ve-table-th--sortable":e.sortable,"ve-table-th--sorted":void 0!==e.sortDesc}}),{default:()=>{var l;return[j("div",{class:"ve-table-th__wrap"},[null==(l=t.default)?void 0:l.call(t),e.sortable&&j(i,{class:{"ve-table-th__sorter":!0,"ve-table-th__sorter--desc":!0===e.sortDesc},size:"1em",icon:e.sortIcon,color:void 0!==e.sortDesc?e.sortActiveColor:void 0},null,8,["class","icon","color"])]),e.filters.length>0&&j(u,{class:"ve-table-th__filter",icon:e.filterIcon,variant:"text",onClick:e=>{e.stopPropagation()}},null,8,["icon","onClick"])]},_:1},16,["class"])}});const Y=s({name:"VeTableNoData",props:{icon:{type:String,default:"veno-ui:$nodata"},text:{type:String,default:"暂无数据"}},setup:(e,{slots:t})=>()=>{var l,a;return j("div",{class:"ve-table-no-data"},[j(i,{icon:e.icon,size:48,class:"mb-3"},null,8,["icon"]),j("div",null,[null!=(a=null==(l=t.default)?void 0:l.call(t))?a:e.text])])}});var Z=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ae=(e,t,l)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,re=(e,t)=>{for(var l in t||(t={}))te.call(t,l)&&ae(e,l,t[l]);if(ee)for(var l of ee(t))le.call(t,l)&&ae(e,l,t[l]);return e};const oe=s({name:"VeTable",props:re(re({hideBorder:Boolean,hideHeader:Boolean,fixedHeader:Boolean,headers:{type:Array,default:()=>[]},sortIcon:{type:String,default:"veno-ui:$sort"},sortActiveColor:{type:String,default:"primary"},loading:Boolean,itemKey:{type:String,default:"id"},pagination:{type:[Object,Boolean],default:!0}},k()),c({border:!0})),emits:{"update:page":e=>!0,"update:sortBy":e=>!0,"update:sortDesc":e=>!0,"update:options":e=>!0},setup(e,{slots:t,emit:l}){const r=w(),n=w(0),{paperClasses:s,paperStyles:i}=p(e,"ve-table__wrapper"),{items:u,page:c,perPage:m,total:O,sortBy:P,sortDesc:B,sort:_}=C(e),I=h((()=>a(P.value))),A=h((()=>a(B.value))),k=h((()=>r.value&&0===n.value?"ve-table--scroll-position-start":r.value&&n.value+r.value.offsetWidth>=r.value.scrollWidth?"ve-table--scroll-position-end":"ve-table--scroll-position-center"));function D(e){const t=e.target;t.scrollLeft!==n.value&&(n.value=t.scrollLeft)}function $(e){return A.value[I.value.findIndex((t=>t===e.value))]}return S([c,m,I,A],(([e,t,a,r])=>{l("update:options",{page:e,perPage:t,sortBy:a,sortDesc:r})})),d((()=>{const l=!t.colgroup&&e.headers.length>0,a=!t.header&&!e.hideHeader&&e.headers.length>0,n=!t.default,p=n&&!!e.pagination;return j(e.tag,{class:["ve-table",{"ve-table--fixed-header":e.fixedHeader},k.value]},{default:()=>{var d,h,w,S,P;return[j("div",{ref:r,onScroll:v(D,128),class:["ve-table__wrapper",s.value],style:[i.value]},[j("table",null,[l&&j("colgroup",null,[e.headers.map((e=>j("col",function(e){var t,l;return{style:{width:y(e.width),minWidth:y(null!=(t=e.minWidth)?t:e.width),maxWidth:y(null!=(l=e.maxWidth)?l:e.width)}}}(e),null,16)))]),null==(d=t.colgroup)?void 0:d.call(t),a&&j("thead",null,[e.loading&&j("tr",{class:"ve-table__progress"},[j("th",{colspan:e.headers.length},[j(f,{color:"primary",indeterminate:!0,"stroke-width":3},null,8,["indeterminate"])],8,["colspan"])]),j("tr",null,[e.headers.map(((l,a)=>{return j(X,x((r=l,o(r,Object.keys(X.props)))[0],{"row-index":0,"col-index":a,cols:e.headers.length,"sort-icon":e.sortIcon,"sort-active-color":e.sortActiveColor,"sort-desc":$(l),onClick:()=>l.sortable&&_(l.value)}),{default:()=>{var e,a,r;return[null!=(r=null!=(a=null==(e=t[`header.${l.value}`])?void 0:e.call(t,{header:l}))?a:l.text)?r:l.value]}},16,["col-index","cols","sort-icon","sort-active-color","sort-desc","onClick"]);var r}))])]),null==(h=t.header)?void 0:h.call(t),n&&j("tbody",null,[u.value.map(((l,a)=>{var r;return j("tr",{key:null!=(r=l[e.itemKey])?r:a},[e.headers.map(((r,n)=>{return j(F,x((s=r,o(s,Object.keys(F.props)))[0],{"row-index":a,"col-index":n,cols:e.headers.length,sorted:void 0!==$(r)}),{default:()=>{var e,a;return[null!=(a=null==(e=t[`item.${r.value}`])?void 0:e.call(t,{item:l}))?a:b(l,r.value)]}},16,["row-index","col-index","cols","sorted"]);var s}))])})),!u.value.length&&j("tr",null,[j("td",{colspan:e.headers.length},[null!=(S=null==(w=t.nodata)?void 0:w.call(t))?S:j(Y,null,null)],8,["colspan"])])]),null==(P=t.default)?void 0:P.call(t)])],46,["onScroll"]),p&&j(g,{class:"ve-table__pagination",page:c.value,"onUpdate:page":e=>c.value=e,"total-visible":7,"per-page":m.value,"last-page":e.lastPage,total:O.value},null,8,["page","onUpdate:page","per-page","last-page","total"])]},_:1},8,["class"])})),{exportCSV:function(t){!function(e,t,l,a="utf-8"){const r=[t.map((e=>{var t;return"object"==typeof e?null!=(t=e.text)?t:e.value:e})).join(","),...l.map((e=>t.map((t=>"object"==typeof t?e[t.value]:e[t])).join(",")))],o=new Blob(["\ufeff"+r.join("\n")],{type:`text/csv;charset=${a}`}),n=document.createElement("a");n.setAttribute("href",window.URL.createObjectURL(o)),n.setAttribute("download",`${e}.csv`),n.click()}(t,e.headers,u.value)}}}});export{oe as T};