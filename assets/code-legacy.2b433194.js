!function(){function e(e,t,n,o,r,a,i){try{var l=e[a](i),c=l.value}catch(d){return void n(d)}l.done?t(c):Promise.resolve(c).then(o,r)}function t(t){return function(){var n=this,o=arguments;return new Promise((function(r,a){var i=t.apply(n,o);function l(t){e(i,r,a,l,c,"next",t)}function c(t){e(i,r,a,l,c,"throw",t)}l(void 0)}))}}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(c){l=!0,r=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var a=document.createElement("style");a.innerHTML=".ve-code{position:relative;border-radius:3px;font-size:1em;font-weight:400;padding:0 8px}.ve-code--highlighted{--ve-code-preformatted-padding-top: 20px;--ve-code-preformatted-padding-bottom: 20px;--ve-code-preformatted-padding-left: 20px;--ve-code-preformatted-padding-right: 20px;display:flex;padding:0;line-height:1.4}.ve-code__language{position:absolute;top:6px;right:12px;font-size:.85em;user-select:none}.ve-code__lines{display:flex;flex-direction:column;align-items:center;padding-block-start:var(--ve-code-preformatted-padding-top);padding-block-end:var(--ve-code-preformatted-padding-bottom);color:#c4c4c6}.ve-code__line{display:flex;justify-content:end;width:100%;padding-inline-start:var(--ve-code-preformatted-padding-left);padding-inline-end:var(--ve-code-preformatted-padding-right);font-size:.85em;line-height:1.6470588235;user-select:none}.ve-code__line-overlay{display:none;color:transparent!important;position:absolute;left:0;width:100%;line-height:inherit;opacity:.12}.ve-code__line--highlighted .ve-code__line-overlay{display:block}.ve-code__line-number{position:relative}.ve-code--line-numbers .ve-code__preformatted{border-left:1px solid #e7e6e6}.ve-code__preformatted{position:relative;flex:1 1 auto;padding-block-start:var(--ve-code-preformatted-padding-top);padding-block-end:var(--ve-code-preformatted-padding-bottom);padding-inline-start:var(--ve-code-preformatted-padding-left);padding-inline-end:var(--ve-code-preformatted-padding-right);overflow:auto}.ve-code .token.comment,.ve-code .token.block-comment,.ve-code .token.prolog,.ve-code .token.doctype,.ve-code .token.cdata{color:#999}.ve-code .token.punctuation{color:#a8a9cc}.ve-code .token.attr-name{color:#690}.ve-code .token.tag,.ve-code .token.namespace,.ve-code .token.deleted{color:#dd4a68}.ve-code .token.function-name{color:#6196cc}.ve-code .token.boolean,.ve-code .token.number,.ve-code .token.function{color:#c25205}.ve-code .token.property,.ve-code .token.class-name,.ve-code .token.constant,.ve-code .token.symbol{color:#4078f2}.ve-code .token.selector,.ve-code .token.important,.ve-code .token.atrule,.ve-code .token.keyword,.ve-code .token.builtin{color:#07a}.ve-code .token.string,.ve-code .token.char{color:#690}.ve-code .token.regex,.ve-code .token.attr-value,.ve-code .token.variable{color:#07a}.ve-code .token.operator,.ve-code .token.entity,.ve-code .token.url{color:#0b7e7d}.ve-code .token.important,.ve-code .token.bold{font-weight:700}.ve-code .token.italic{font-style:italic}.ve-code .token.entity{cursor:help}.ve-code .token.inserted{color:green}\n",document.head.appendChild(a),System.register(["./index-legacy.0991e0f0.js","./vendor-legacy.f35e774c.js"],(function(e){"use strict";var o,a,i,l,c,d,u,v;return{setters:[function(e){o=e.e,a=e.u,i=e.f},function(e){l=e.r,c=e.a,d=e.m,u=e.e,v=e.j}],execute:function(){e("C",o({name:"VeCode",props:{value:String,language:{type:String,default:"html"},hideLanguage:Boolean,hideLineNumbers:Boolean,highlightedLineNumbers:Array,highlightedLineBgColor:{type:String,default:"warning"},color:{type:String,default:"secondary"}},setup:function(e,o){var s=o.slots,p=a(),f=i(e,"color"),g=f.backgroundColorClasses,m=f.backgroundColorStyles,h=i(e,"highlightedLineBgColor"),y=h.backgroundColorClasses,b=h.backgroundColorStyles,k=l(null),_=c((function(){var t;return decodeURIComponent(null!=(t=e.value)?t:"").replace(/\n$/,"").replace(/^\n/,"")})),x=c((function(){return _.value.split("\n").map((function(e,t){return t+1}))})),S=c((function(){return x.value.filter((function(t){var o;return null==(o=e.highlightedLineNumbers)?void 0:o.some((function(e){var o,a=e;if("object"===r(e)){var i=n(e,2);a=i[0],o=i[1]}return a&&o?t>=a&&t<=o:t===a}))}))}));function w(){return C.apply(this,arguments)}function C(){return(C=t(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=k.value){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,null==(n=p.value)?void 0:n.highlight(_.value,e.language);case 5:o.innerHTML=t.sent;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return d(w),u((function(){return e.language}),w),u(_,w),function(){var t=!!_.value,n=t&&!e.hideLineNumbers,o=t&&!e.hideLanguage&&e.language,r=t;return v(t?"div":"code",{class:["ve-code",{"ve-code--highlighted":t,"ve-code--line-numbers":n},g.value],style:m.value},{default:function(){var t;return[n&&v("div",{class:"ve-code__lines"},[x.value.map((function(e){return v("div",{class:["ve-code__line",{"ve-code__line--highlighted":S.value.includes(e)}]},[v("div",{class:["ve-code__line-overlay",y.value],style:b.value,innerHTML:"&nbsp;"},null,14,["innerHTML"]),v("span",{class:"ve-code__line-number"},[e])],2)}))]),r&&v("pre",{class:"ve-code__preformatted"},[v("code",{ref:k},[_.value],512)]),o&&v("span",{class:"ve-code__language"},[e.language]),null==(t=s.default)?void 0:t.call(s)]},_:1},8,["class","style"])}}}))}}}))}();