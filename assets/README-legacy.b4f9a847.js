System.register(["./basic-legacy.95581890.js","./contained-legacy.30ad38b3.js","./outlined-legacy.ea06bbf6.js","./text-legacy.3e462558.js","./icon-legacy.f2e826ea.js","./shape-legacy.1bc1610b.js","./color-legacy.d604cc7d.js","./size-legacy.92d3e22c.js","./density-legacy.92d90f42.js","./block-legacy.98dff237.js","./loading-legacy.ca308706.js","./group-legacy.40da83db.js","./headers-legacy.de726351.js","./p-legacy.90a05dcc.js","./index-legacy.0991e0f0.js","./table-legacy.05f9c2ee.js","./vendor-legacy.f35e774c.js","./Demo-legacy.37d8aab0.js","./code-legacy.2b433194.js","./radio-legacy.6a37b417.js","./selection-control-legacy.deb59bc0.js","./label-legacy.3374845e.js","./radio-group-legacy.af5617ca.js","./form-control-legacy.ec6947b9.js","./selection-group-control-legacy.7b4d389c.js","./pagination-legacy.2859db53.js"],(function(e){"use strict";var t,n,a,u,o,r,l,i,s,p,c,d,f,g,m,b,y,v,h,x,j,_,B,P,w;return{setters:[function(e){t=e.default},function(e){n=e.default},function(e){a=e.default},function(e){u=e.default},function(e){o=e.default},function(e){r=e.default},function(e){l=e.default},function(e){i=e.default},function(e){s=e.default},function(e){p=e.default},function(e){c=e.default},function(e){d=e.default},function(e){f=e.H,g=e.a,m=e.b},function(e){b=e.P},function(e){y=e.C,v=e.R},function(e){h=e.T},function(e){x=e.O,j=e.U,_=e.j,B=e.Q,P=e.u,w=e.R},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var W=w("按钮 Button"),T=w("按钮用来触发一些即时操作。"),k=w("API"),E=w("Button Props"),z=w("Button Events"),R=w("ButtonGroup Props"),A=w("ButtonToggle Props"),D=w("ButtonToggle Events"),G=(e("__pageData",{title:"按钮 Button",headers:[{level:1,title:"按钮 Button",slug:"按钮-button"},{level:3,title:"基本用法",slug:"基本用法"},{level:3,title:"实心按钮",slug:"实心按钮"},{level:3,title:"描边按钮",slug:"描边按钮"},{level:3,title:"文本按钮",slug:"文本按钮"},{level:3,title:"图标按钮",slug:"图标按钮"},{level:3,title:"按钮形状",slug:"按钮形状"},{level:3,title:"按钮颜色",slug:"按钮颜色"},{level:3,title:"按钮尺寸",slug:"按钮尺寸"},{level:3,title:"按钮密度",slug:"按钮密度"},{level:3,title:"块状按钮",slug:"块状按钮"},{level:3,title:"加载中",slug:"加载中"},{level:3,title:"组合按钮",slug:"组合按钮"},{level:2,title:"API",slug:"api"},{level:3,title:"Button Props",slug:"button-props"},{level:3,title:"Button Events",slug:"button-events"},{level:3,title:"ButtonGroup Props",slug:"buttongroup-props"},{level:3,title:"ButtonToggle Props",slug:"buttontoggle-props"},{level:3,title:"ButtonToggle Events",slug:"buttontoggle-events"}],frontmatter:{meta:{category:"Basic 通用组件","wai-aria":"https://www.w3.org/TR/wai-aria-practices/#button"}}}),{});e("default",Object.assign(G,{setup:function(e){return function(e,w){var G=f,I=b,O=y,C=v,H=g,Q=m,S=h;return x(),j("div",null,[_(G,{id:"按钮-button",tabindex:"-1"},{default:B((function(){return[W]})),_:1}),_(I,null,{default:B((function(){return[T]})),_:1}),_(C,null,{default:B((function(){return[_(O,{cols:"12",md:"12"},{default:B((function(){return[_(C,null,{default:B((function(){return[_(O,{cols:"12"},{default:B((function(){return[_(P(t))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(n))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(a))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(u))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(o))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(r))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(l))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(i))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(s))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(p))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(c))]})),_:1}),_(O,{cols:"12"},{default:B((function(){return[_(P(d))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),_(H,{id:"api",tabindex:"-1"},{default:B((function(){return[k]})),_:1}),_(Q,{id:"button-props",tabindex:"-1"},{default:B((function(){return[E]})),_:1}),_(S,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"type",type:"string",default:'"button"'},{name:"icon",type:"any"},{name:"prepend-icon",type:"string"},{name:"append-icon",type:"string"},{name:"stacked",type:"boolean",default:"false"},{name:"block",type:"boolean",default:"false"},{name:"text",type:"string"},{name:"ripple",type:"boolean",default:"true"},{name:"overlay",type:"boolean",default:"true"},{name:"disabled",source:"group-item",type:"boolean",default:"false"},{name:"loading",source:"loading",type:"boolean",default:"false"},{name:"href",source:"router",type:"string"},{name:"replace",source:"router",type:"boolean",default:"false"},{name:"to",source:"router",type:"string | object"},{name:"value",source:"group-item",type:"any"},{name:"selected-class",source:"group-item",type:"string"},{name:"tag",source:"paper",type:"string",default:'"button"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]}),_(Q,{id:"button-events",tabindex:"-1"},{default:B((function(){return[z]})),_:1}),_(S,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"click"}]}),_(Q,{id:"buttongroup-props",tabindex:"-1"},{default:B((function(){return[R]})),_:1}),_(S,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"divided",type:"boolean",default:"false"},{name:"tag",source:"tag",type:"string",default:'"div"'},{name:"theme",source:"paper",type:"string"},{name:"color",source:"paper",type:"string | boolean",default:"false"},{name:"text-color",source:"paper",type:"string | boolean",default:"false"},{name:"variant",source:"paper",type:"string",default:'"contained"'},{name:"absolute",source:"paper",type:"boolean",default:"false"},{name:"bottom",source:"paper",type:"boolean | number | string",default:"false"},{name:"fixed",source:"paper",type:"boolean",default:"false"},{name:"left",source:"paper",type:"boolean | number | string",default:"false"},{name:"position",source:"paper",type:"string"},{name:"right",source:"paper",type:"boolean | number | string",default:"false"},{name:"top",source:"paper",type:"boolean | number | string",default:"false"},{name:"height",source:"paper",type:"number | string"},{name:"max-height",source:"paper",type:"number | string"},{name:"max-width",source:"paper",type:"number | string"},{name:"min-height",source:"paper",type:"number | string"},{name:"min-width",source:"paper",type:"number | string"},{name:"width",source:"paper",type:"number | string"},{name:"size",source:"paper",type:"string | number",default:'"md"'},{name:"density",source:"paper",type:"string",default:'"medium"'},{name:"border",source:"paper",type:"boolean | number | string",default:"false"},{name:"shape",source:"paper",type:"string"},{name:"elevation",source:"paper",type:"number | string"}]}),_(Q,{id:"buttontoggle-props",tabindex:"-1"},{default:B((function(){return[A]})),_:1}),_(S,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"属性名",value:"name",minWidth:"120"},{text:"类型",value:"type",minWidth:"120"},{text:"默认值",value:"default",minWidth:"200"},{text:"组合",value:"source",minWidth:"120"}],items:[{name:"model-value",source:"group",type:"number | boolean | string | array | object",default:"false"},{name:"multiple",source:"group",type:"boolean",default:"false"},{name:"mandatory",source:"group",type:"boolean | string",default:"false"},{name:"max",source:"group",type:"number"},{name:"selected-class",source:"group",type:"string",default:'"ve-button--selected"'},{name:"disabled",source:"group",type:"boolean",default:"false"}]}),_(Q,{id:"buttontoggle-events",tabindex:"-1"},{default:B((function(){return[D]})),_:1}),_(S,{pagination:{perPage:999},"hide-pagination":"",headers:[{text:"事件名",value:"name"}],items:[{name:"update:modelValue"}]})])}}}))}}}));