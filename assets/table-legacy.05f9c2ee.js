!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,l,o=[],n=!0,i=!1;try{for(r=r.call(e);!(n=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(c){i=!0,l=c}finally{try{n||null==r.return||r.return()}finally{if(i)throw l}}return o}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=l(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw n}}}}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var n=document.createElement("style");n.innerHTML='.ve-table{display:flex;flex-direction:column}.ve-table__wrapper{position:relative;flex:1 1 auto;height:100%;width:100%;min-height:40px;overflow-y:hidden;overflow-x:auto;border-color:rgba(var(--ve-border-color),var(--ve-border-opacity));border-style:solid;border-width:0;border-radius:4px}.ve-table__wrapper--variant-contained{background:rgb(var(--ve-theme-surface));color:rgb(var(--ve-theme-on-surface))}.ve-table__wrapper--variant-text,.ve-table__wrapper--variant-outlined{background:transparent;color:inherit}.ve-table__wrapper--variant-outlined{border-width:thin}.ve-table__wrapper--absolute{position:absolute}.ve-table__wrapper--fixed{position:fixed}.ve-table__wrapper--size-xs{--ve-table__wrapper-size-offset: -8px}.ve-table__wrapper--size-sm{--ve-table__wrapper-size-offset: -4px}.ve-table__wrapper--size-md{--ve-table__wrapper-size-offset: 0px}.ve-table__wrapper--size-lg{--ve-table__wrapper-size-offset: 4px}.ve-table__wrapper--size-xl{--ve-table__wrapper-size-offset: 8px}.ve-table__wrapper--density-compact{--ve-table__wrapper-density-offset: -8px}.ve-table__wrapper--density-comfortable{--ve-table__wrapper-density-offset: -4px}.ve-table__wrapper--density-medium{--ve-table__wrapper-density-offset: 0px}.ve-table__wrapper--border{border-width:thin}.ve-table--fixed-header .ve-table__wrapper{overflow-y:auto}.ve-table__wrapper--border tr:last-child td{border-bottom-width:0}.ve-table__wrapper--border th,.ve-table__wrapper--border td{border-bottom:1px solid rgba(var(--ve-border-color),var(--ve-border-opacity))}.ve-table__pagination{margin-top:12px;justify-content:end}.ve-table table{width:100%;min-width:100%;border-collapse:separate;border-spacing:0}.ve-table tbody tr:hover .ve-table-cell__overlay{opacity:calc(var(--ve-hover-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table tbody tr:focus-visible .ve-table-cell__overlay{opacity:calc(var(--ve-focus-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table tbody tr .ve-table-td--sorted:hover .ve-table-cell__overlay,.ve-table tbody tr .ve-table-td--sorted .ve-table-cell__overlay{opacity:calc(var(--ve-activated-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table tbody tr .ve-table-td--sorted:focus .ve-table-cell__overlay{opacity:calc(var(--ve-pressed-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table th,.ve-table td{padding:12px}.ve-table th{position:relative;font-weight:500;background:rgb(var(--ve-theme-secondary))}.ve-table--fixed-header th{position:sticky;top:0;z-index:2}.ve-table td{position:relative;word-break:break-all;background:rgb(var(--ve-theme-background))}.ve-table__progress th{padding:0!important;border:0!important;z-index:4}.ve-table__progress .ve-progress{position:absolute;top:0;left:0}.ve-table-cell .ve-table-cell__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.ve-table-cell--fixed-start,.ve-table-cell--fixed-end{position:sticky!important}.ve-table-cell--fixed-start:after,.ve-table-cell--fixed-end:after{content:"";position:absolute;display:none;top:0;bottom:-1px;width:10px;pointer-events:none;transition:box-shadow .1s cubic-bezier(.4,0,.2,1)}.ve-table-cell--fixed-start td.ve-table-cell--fixed-start,.ve-table-cell--fixed-start .ve-table-cell--fixed-end,.ve-table-cell--fixed-end td.ve-table-cell--fixed-start,.ve-table-cell--fixed-end .ve-table-cell--fixed-end{z-index:1!important}.ve-table-cell--fixed-start th.ve-table-cell--fixed-start,.ve-table-cell--fixed-start .ve-table-cell--fixed-end,.ve-table-cell--fixed-end th.ve-table-cell--fixed-start,.ve-table-cell--fixed-end .ve-table-cell--fixed-end{z-index:3!important}.ve-table-cell--fixed-start{left:0}.ve-table-cell--fixed-start:after{right:0;transform:translate(100%);box-shadow:inset 6px 0 8px -3px rgba(var(--ve-theme-on-surface),var(--ve-activated-opacity))}.ve-table-cell--fixed-end{right:0}.ve-table-cell--fixed-end:after{left:0;transform:translate(-100%);box-shadow:inset -6px 0 8px -3px rgba(var(--ve-theme-on-surface),var(--ve-activated-opacity))}.ve-table--scroll-position-center .ve-table-cell--fixed-start:after,.ve-table--scroll-position-end .ve-table-cell--fixed-start:after{display:block}.ve-table--scroll-position-center .ve-table-cell--fixed-end:after,.ve-table--scroll-position-start .ve-table-cell--fixed-end:after{display:block}.ve-table-th--sortable{cursor:pointer;padding-inline-end:28px!important}.ve-table-th--sortable:hover .ve-table-cell__overlay{opacity:calc(var(--ve-hover-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table-th--sortable:focus-visible .ve-table-cell__overlay{opacity:calc(var(--ve-focus-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table-th--sorted:hover .ve-table-cell__overlay,.ve-table-th--sorted .ve-table-cell__overlay{opacity:calc(var(--ve-activated-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table-th--sorted:focus .ve-table-cell__overlay{opacity:calc(var(--ve-pressed-opacity) * var(--ve-theme-overlay-multiplier))}.ve-table-th__wrap{display:flex;align-items:center}.ve-table-th__sorter{margin-inline-start:8px;color:rgba(var(--ve-theme-on-surface),var(--ve-disabled-opacity));transition:transform .3s cubic-bezier(.4,0,.2,1);transform:rotate(0)}.ve-table-th__sorter--desc{transform:rotate(180deg)}.ve-table-th__filter{position:absolute;top:0;right:0;color:rgba(var(--ve-theme-on-surface),var(--ve-disabled-opacity));height:100%;border-radius:0}.ve-table-no-data{display:flex;justify-content:center;flex-direction:column;align-items:center;opacity:var(--ve-disabled-opacity);line-height:40px;padding:20px}\n',document.head.appendChild(n),System.register(["./index-legacy.0991e0f0.js","./vendor-legacy.f35e774c.js","./pagination-legacy.2859db53.js"],(function(l){"use strict";var o,n,i,c,u,s,v,d,p,f,b,y,h,m,g,_,x,w,S,j,O,P,I,A,k;return{setters:[function(e){o=e.G,n=e.H,i=e.J,c=e.g,u=e.K,s=e.N,v=e.O,d=e.l,p=e.e,f=e.P,b=e.B,y=e.q,h=e.t,m=e.Q,g=e.U,_=e.V,x=e.W,w=e.n},function(e){S=e.f,j=e.a,O=e.j,P=e.C,I=e.n,A=e.r},function(e){k=e.P}],execute:function(){var B=Object.defineProperty,z=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,T=function(e,t,r){return t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},E=function(e,r){for(var a in r||(r={}))C.call(r,a)&&T(e,a,r[a]);if(z){var l,o=t(z(r));try{for(o.s();!(l=o.n()).done;){a=l.value;D.call(r,a)&&T(e,a,r[a])}}catch(n){o.e(n)}finally{o.f()}}return e},N={page:1,perPage:10,firstPage:1,lastPage:1,total:0},U=o({remote:Boolean,items:{type:Array,default:function(){return[]}},mustSort:Boolean,multiSort:Boolean,sortBy:{type:[String,Array],default:function(){return[]}},sortDesc:{type:[Boolean,Array],default:function(){return[]}},customSort:{type:Function,default:n},locale:{type:String,default:"en-US"},pagination:{type:Object,defualt:function(){return E({},N)}}},"data-iterator");function V(e){var t=i("useDataIterator"),r=c(e,"pagination",E({},N),(function(t){var r,a,l,o,n,i=e.remote?Number(null!=(r=null==t?void 0:t.total)?r:e.items.length):e.items.length,c=Number(null!=(a=null==t?void 0:t.perPage)?a:N.perPage),u=Number(null!=(l=null==t?void 0:t.lastPage)?l:~~(i/c));return S({page:Number(null!=(o=null==t?void 0:t.page)?o:N.page),perPage:c,firstPage:Number(null!=(n=null==t?void 0:t.firstPage)?n:N.firstPage),lastPage:u,total:i})})),a=c(e,"sortBy"),l=c(e,"sortDesc");function o(){t.emit("update:options",{pagination:r.value,sortBy:a.value,sortDesc:l.value})}return{items:j((function(){if(e.remote)return e.items;var t=e.items.slice();return t=function(e){return e.slice((r.value.page-1)*r.value.perPage,Math.min(r.value.total,r.value.page*r.value.perPage))}(t=function(t){return e.customSort(t,u(a.value),u(l.value),e.locale)}(t))})),pagination:r,sortBy:a,sortDesc:l,sort:function(t){if(Array.isArray(t))l.value=t.map((function(e){var t=u(a.value).findIndex((function(t){return t===e}));return t>-1&&u(l.value)[t]})),a.value=t,o();else{var n=function(e,t,r,a,l,o){var n=t.slice(),i=r.slice(),c=n.findIndex((function(t){return t===e}));return c<0?(o||(n=[],i=[]),n.push(e),i.push(!1)):c>=0&&!i[c]?i[c]=!0:l?i[c]=!1:(n.splice(c,1),i.splice(c,1)),s(n,t)&&s(i,r)||(a=1),{by:n,desc:i,page:a}}(t,u(a.value),u(l.value),r.value.page,e.mustSort,e.multiSort);a.value=n.by,l.value=n.desc,r.value.page=n.page,o()}},updateOptions:o}}var W=Object.defineProperty,H=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,K=function(e,t,r){return t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r};function M(e){return v(e,Object.keys(q.props))}var R=o(function(e,r){for(var a in r||(r={}))L.call(r,a)&&K(e,a,r[a]);if(H){var l,o=t(H(r));try{for(o.s();!(l=o.n()).done;){a=l.value;$.call(r,a)&&K(e,a,r[a])}}catch(n){o.e(n)}finally{o.f()}}return e}({rowIndex:Number,colIndex:Number,cols:Number,fixed:[Boolean,String],align:{type:String,default:"start"}},d({tag:"td"})),"table-cell"),q=p({name:"VeTableCell",props:R(),setup:function(e,t){var r=t.slots,a=j((function(){return"string"==typeof e.fixed?e.fixed:!(!e.fixed||void 0===e.colIndex||void 0===e.cols)&&(e.colIndex<(e.cols-1)/2?"start":"end")}));return function(){return O(e.tag,{class:["ve-table-cell","text-".concat(e.align),{"ve-table-cell--fixed-start":"start"===a.value,"ve-table-cell--fixed-end":"end"===a.value}]},{default:function(){var e;return[O("div",{class:"ve-table-cell__overlay"},null),null==(e=r.default)?void 0:e.call(r)]},_:1},8,["class"])}}}),F=Object.defineProperty,G=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=function(e,t,r){return t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r};var Y=p({name:"VeTableTd",props:function(e,r){for(var a in r||(r={}))J.call(r,a)&&X(e,a,r[a]);if(G){var l,o=t(G(r));try{for(o.s();!(l=o.n()).done;){a=l.value;Q.call(r,a)&&X(e,a,r[a])}}catch(n){o.e(n)}finally{o.f()}}return e}({sorted:Boolean},R()),setup:function(t,r){var a=r.slots,l=e(M(t),1)[0];return function(){return O(q,I(l,{class:{"ve-table-td":!0,"ve-table-td--sorted":t.sorted},tag:"td"}),"function"==typeof(e=a)||"[object Object]"===Object.prototype.toString.call(e)&&!P(e)?a:{default:function(){return[a]},_:2},16,["class"]);var e}}}),Z=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,ae=function(e,t,r){return t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r};var le=p({name:"VeTableTh",props:function(e,r){for(var a in r||(r={}))te.call(r,a)&&ae(e,a,r[a]);if(ee){var l,o=t(ee(r));try{for(o.s();!(l=o.n()).done;){a=l.value;re.call(r,a)&&ae(e,a,r[a])}}catch(n){o.e(n)}finally{o.f()}}return e}({sortable:Boolean,sortDesc:Boolean,sortIcon:{type:String,default:"$sort"},sortActiveColor:{type:String,default:"primary"},filterIcon:{type:String,default:"$filter"},filters:{type:Array,default:function(){return[]}}},R()),setup:function(t,r){var a=r.slots;return function(){var r=e(M(t),1)[0];return O(q,I(r,{tag:"th",class:{"ve-table-th":!0,"ve-table-th--sortable":t.sortable,"ve-table-th--sorted":void 0!==t.sortDesc}}),{default:function(){var e;return[O("div",{class:"ve-table-th__wrap"},[null==(e=a.default)?void 0:e.call(a),t.sortable&&O(f,{class:{"ve-table-th__sorter":!0,"ve-table-th__sorter--desc":!0===t.sortDesc},size:"1em",icon:t.sortIcon,color:void 0!==t.sortDesc?t.sortActiveColor:void 0},null,8,["class","icon","color"])]),t.filters.length>0&&O(b,{class:"ve-table-th__filter",icon:t.filterIcon,variant:"text",onClick:function(e){e.stopPropagation()}},null,8,["icon","onClick"])]},_:1},16,["class"])}}}),oe=p({name:"VeTableNoData",props:{icon:{type:String,default:"$nodata"},text:{type:String,default:"暂无数据"}},setup:function(e,t){var r=t.slots;return function(){var t,a;return O("div",{class:"ve-table-no-data"},[O(f,{icon:e.icon,size:48,class:"mb-3"},null,8,["icon"]),O("div",null,[null!=(a=null==(t=r.default)?void 0:t.call(r))?a:e.text])])}}}),ne=Object.defineProperty,ie=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,se=function(e,t,r){return t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ve=function(e,r){for(var a in r||(r={}))ce.call(r,a)&&se(e,a,r[a]);if(ie){var l,o=t(ie(r));try{for(o.s();!(l=o.n()).done;){a=l.value;ue.call(r,a)&&se(e,a,r[a])}}catch(n){o.e(n)}finally{o.f()}}return e};l("T",p({name:"VeTable",props:ve(ve({hideBorder:Boolean,hideHeader:Boolean,fixedHeader:Boolean,headers:{type:Array,default:function(){return[]}},sortIcon:{type:String,default:"$sort"},sortActiveColor:{type:String,default:"primary"},loading:Boolean,itemKey:{type:String,default:"id"},hidePagination:Boolean},U()),y({border:!0})),emits:{"update:pagination":function(e){return!0},"update:sortBy":function(e){return!0},"update:sortDesc":function(e){return!0},"update:options":function(e){return!0}},setup:function(e,t){var l=t.slots,o=(t.emit,A()),n=A(0),i=h(e,"ve-table__wrapper"),c=i.paperClasses,s=i.paperStyles,d=V(e),p=d.items,f=d.pagination,b=d.sortBy,y=d.sortDesc,S=d.sort,P=d.updateOptions,B=j((function(){return u(b.value)})),z=j((function(){return u(y.value)})),C=j((function(){return o.value&&0===n.value?"ve-table--scroll-position-start":o.value&&n.value+o.value.offsetWidth>=o.value.scrollWidth?"ve-table--scroll-position-end":"ve-table--scroll-position-center"}));function D(e){var t=e.target;t.scrollLeft!==n.value&&(n.value=t.scrollLeft)}function T(e){return z.value[B.value.findIndex((function(t){return t===e.value}))]}return m((function(){var t=!l.colgroup&&e.headers.length>0,r=!l.header&&!e.hideHeader&&e.headers.length>0,a=!l.default,n=a&&!e.hidePagination;return O(e.tag,{class:["ve-table",{"ve-table--fixed-header":e.fixedHeader},C.value]},{default:function(){var i,u,d,b,y;return[O("div",{ref:o,onScroll:g(D,128),class:["ve-table__wrapper",c.value],style:[s.value]},[O("table",null,[t&&O("colgroup",null,[e.headers.map((function(e){return O("col",function(e){var t,r;return{style:{width:w(e.width),minWidth:w(null!=(t=e.minWidth)?t:e.width),maxWidth:w(null!=(r=e.maxWidth)?r:e.width)}}}(e),null,16)}))]),null==(i=l.colgroup)?void 0:i.call(l),r&&O("thead",null,[e.loading&&O("tr",{class:"ve-table__progress"},[O("th",{colspan:e.headers.length},[O(_,{color:"primary",indeterminate:!0,"stroke-width":3},null,8,["indeterminate"])],8,["colspan"])]),O("tr",null,[e.headers.map((function(t,r){return O(le,I((a=t,v(a,Object.keys(le.props)))[0],{"row-index":0,"col-index":r,cols:e.headers.length,"sort-icon":e.sortIcon,"sort-active-color":e.sortActiveColor,"sort-desc":T(t),onClick:function(){return t.sortable&&S(t.value)}}),{default:function(){var e,r,a;return[null!=(a=null!=(r=null==(e=l["header.".concat(t.value)])?void 0:e.call(l,{header:t}))?r:t.text)?a:t.value]}},16,["col-index","cols","sort-icon","sort-active-color","sort-desc","onClick"]);var a}))])]),null==(u=l.header)?void 0:u.call(l),a&&O("tbody",null,[p.value.map((function(t,r){var a;return O("tr",{key:null!=(a=t[e.itemKey])?a:r},[e.headers.map((function(a,o){return O(Y,I((n=a,v(n,Object.keys(Y.props)))[0],{"row-index":r,"col-index":o,cols:e.headers.length,sorted:void 0!==T(a)}),{default:function(){var e,r;return[null!=(r=null==(e=l["item.".concat(a.value)])?void 0:e.call(l,{item:t}))?r:x(t,a.value)]}},16,["row-index","col-index","cols","sorted"]);var n}))])})),!p.value.length&&O("tr",null,[O("td",{colspan:e.headers.length},[null!=(b=null==(d=l.nodata)?void 0:d.call(l))?b:O(oe,null,null)],8,["colspan"])])]),null==(y=l.default)?void 0:y.call(l)])],46,["onScroll"]),n&&O(k,I({class:"ve-table__pagination"},f.value,{"onUpdate:page":function(e){f.value.page=e,P()},"total-visible":7}),null,16,["onUpdate:page"])]},_:1},8,["class"])})),{exportCSV:function(t){!function(e,t,l){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"utf-8",n=[t.map((function(e){var t;return"object"===r(e)?null!=(t=e.text)?t:e.value:e})).join(",")].concat(a(l.map((function(e){return t.map((function(t){return"object"===r(t)?e[t.value]:e[t]})).join(",")})))),i=new Blob(["\ufeff"+n.join("\n")],{type:"text/csv;charset=".concat(o)}),c=document.createElement("a");c.setAttribute("href",window.URL.createObjectURL(i)),c.setAttribute("download","".concat(e,".csv")),c.click()}(t,e.headers,p.value)}}}}))}}}))}();
