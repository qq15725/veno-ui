if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.cba83cb0.css",revision:null},{url:"assets/app.df5b52cd.js",revision:null},{url:"assets/close.6c5cdc0c.js",revision:null},{url:"assets/dark.87659143.js",revision:null},{url:"assets/dashboard.9c7238b6.js",revision:null},{url:"assets/Demo.60c0c4a7.js",revision:null},{url:"assets/palette.88784ab2.js",revision:null},{url:"assets/README.027f8e8e.js",revision:null},{url:"assets/README.059e83a8.js",revision:null},{url:"assets/README.12ba07b1.js",revision:null},{url:"assets/README.16aa5f10.js",revision:null},{url:"assets/README.17973152.js",revision:null},{url:"assets/README.28f64680.js",revision:null},{url:"assets/README.28ff457d.js",revision:null},{url:"assets/README.29750481.js",revision:null},{url:"assets/README.2ee4c6cb.js",revision:null},{url:"assets/README.2f9cd774.js",revision:null},{url:"assets/README.305620f1.js",revision:null},{url:"assets/README.3a3098cd.js",revision:null},{url:"assets/README.47822646.js",revision:null},{url:"assets/README.4a2d7e23.js",revision:null},{url:"assets/README.4ef3b87c.js",revision:null},{url:"assets/README.52c4e254.js",revision:null},{url:"assets/README.66dc2e46.js",revision:null},{url:"assets/README.67d3a900.js",revision:null},{url:"assets/README.6bd5330c.js",revision:null},{url:"assets/README.76fbf2ff.js",revision:null},{url:"assets/README.79d98471.js",revision:null},{url:"assets/README.7cbf32cf.js",revision:null},{url:"assets/README.85df0d42.js",revision:null},{url:"assets/README.91016694.js",revision:null},{url:"assets/README.9685f309.js",revision:null},{url:"assets/README.abac2dab.js",revision:null},{url:"assets/README.ae472433.js",revision:null},{url:"assets/README.b78d7c53.js",revision:null},{url:"assets/README.b867864c.js",revision:null},{url:"assets/README.ba339b1a.js",revision:null},{url:"assets/README.bab547bd.js",revision:null},{url:"assets/README.c4d7f54e.js",revision:null},{url:"assets/README.cd0b193e.js",revision:null},{url:"assets/README.ce623689.js",revision:null},{url:"assets/README.d42762e2.js",revision:null},{url:"assets/README.d59aa683.js",revision:null},{url:"assets/README.d7b889ba.js",revision:null},{url:"assets/README.db47d057.js",revision:null},{url:"assets/README.e1df52dc.js",revision:null},{url:"assets/README.e31b4347.js",revision:null},{url:"assets/README.e362c37c.js",revision:null},{url:"assets/README.e80e31c0.js",revision:null},{url:"assets/README.e86a4a75.js",revision:null},{url:"assets/README.f4253b30.js",revision:null},{url:"assets/README.f665e3aa.js",revision:null},{url:"assets/README.f6c28ca0.js",revision:null},{url:"assets/README.fcd494de.js",revision:null},{url:"assets/settings.c0ea89bb.js",revision:null},{url:"assets/start.43804d6c.js",revision:null},{url:"assets/vendor.fb128dab.js",revision:null},{url:"components/alert.html",revision:"4f82c4fb2559e8340a265780a64b13cb"},{url:"components/anchor.html",revision:"b2b193735ec402e708b8a380ba9195e0"},{url:"components/avatar.html",revision:"5138c3bb2d8a5c3e3418a0fa6eb33c57"},{url:"components/badge.html",revision:"77aeb01447b2cb1de5c5508f7787d782"},{url:"components/breadcrumb.html",revision:"ab800ad54c35900a1f8bbed3d45fc96a"},{url:"components/button.html",revision:"eb13021eaf9526b3d7c76e32fd895fbd"},{url:"components/card.html",revision:"bbe9da04567a6038b8cf7368092e8c5d"},{url:"components/carousel.html",revision:"c1f019a1216da3631a32597935f5a854"},{url:"components/checkbox.html",revision:"dbde9b67ad38e9d57771106215f0c799"},{url:"components/code.html",revision:"e4ab733214c2b8321a8fc98a21d38a13"},{url:"components/date-picker.html",revision:"710df6af6789c7afdb2fe2bafd5cf504"},{url:"components/device.html",revision:"d44a8c7afe766d25e9a3f386df6765a0"},{url:"components/dialog.html",revision:"afc647f654c2319098ac4089571a7ce5"},{url:"components/divider.html",revision:"2b05360ccf158150cd4f6bf52bc83bf4"},{url:"components/draggable-resizable.html",revision:"17ec3847725f3309fa19a4488c0ff699"},{url:"components/draggable-sortable.html",revision:"eb165dc7d09f04a7accfd66004c9800c"},{url:"components/draggable.html",revision:"30e9e167f0960eaf608bc5c8f302cef0"},{url:"components/drawer.html",revision:"d64160b6a976c9fec807ccfeba86c6b6"},{url:"components/form.html",revision:"aa2540a2c7338c8c713079cf639df5da"},{url:"components/grid.html",revision:"8b3d923d7c1c86e008b928e5dec878fe"},{url:"components/hover.html",revision:"8d8af98575b080f2cc930e4774c1dfd0"},{url:"components/icon.html",revision:"49edaf77942d3484f34f2529483be154"},{url:"components/image.html",revision:"37a937ea0ddd1e89dc71db621a79648f"},{url:"components/input.html",revision:"d1a353ceabfb9d3d37ab73d377f59bfa"},{url:"components/layout.html",revision:"41fd51ffbe187f41ed3c6adb5f339199"},{url:"components/lazy.html",revision:"615b58a7a66422b5c9e55177be8e7470"},{url:"components/link.html",revision:"463a2dd1830c24e7c41bd44c4b2f5e2d"},{url:"components/list.html",revision:"ef3c7b73fe03ac82859a318c842e07e5"},{url:"components/menu.html",revision:"7661c0e4eb490c2364e534622b4208c0"},{url:"components/message-provider.html",revision:"8c6ed55bbc8a91f68851f9d1dfdf35c5"},{url:"components/notification-provider.html",revision:"e381acd0118d5779cb3cf0025c7e7fce"},{url:"components/overlay.html",revision:"8498d0caeecd67578c8fafb53623826d"},{url:"components/pagination.html",revision:"e092e55181717199268ed6490f46f528"},{url:"components/paper.html",revision:"397c49a40dffe50ce68f3f4cff19e12b"},{url:"components/progress.html",revision:"efdfa806348dfa5eb4cca54a8e80a1d3"},{url:"components/radio.html",revision:"55580f815df1976f07d792a8232b4bdc"},{url:"components/responsive.html",revision:"9af81fba24d5523e7be89fc0db0ad99f"},{url:"components/scrollbar.html",revision:"fd266fe320fe0f5c606fa10baeb2b506"},{url:"components/select.html",revision:"e5fe17bed768ca218d401460b6d631be"},{url:"components/spacer.html",revision:"554be71040a5770b28039a838cf64c16"},{url:"components/switch.html",revision:"8094d57829b77fa75289e131dd72850e"},{url:"components/table.html",revision:"91db81104ded516410354b0d927f842a"},{url:"components/tabs.html",revision:"563d691651605bda1d2ce8242ce1c184"},{url:"components/tag.html",revision:"5b09b926eb9d96474251902df5458336"},{url:"components/tooltip.html",revision:"3d54de3e0d1daa33bc07fc45803207e2"},{url:"components/transition.html",revision:"c5bde21b3276841bfb49ef770d3db90b"},{url:"components/typography.html",revision:"64d2432e9ead3df289aa420be2028973"},{url:"index.html",revision:"832632a755de720c35400765847a88c8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"b924bd21c915d8c254b29043c385959a"},{url:"zh/palette.html",revision:"90bf1421eb6179c57e9b96f6d9453da0"},{url:"zh/start.html",revision:"a26eb4a0ea603e2ade247e18da0a3158"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
