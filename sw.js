if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.526341e3.js",revision:null},{url:"assets/app.ce6394a2.css",revision:null},{url:"assets/close.e5e40923.js",revision:null},{url:"assets/dark.39f1db31.js",revision:null},{url:"assets/dashboard.1999592c.js",revision:null},{url:"assets/Demo.8624b97f.js",revision:null},{url:"assets/palette.4fc6f963.js",revision:null},{url:"assets/README.0cf5b3fc.js",revision:null},{url:"assets/README.12290c80.js",revision:null},{url:"assets/README.145fe336.js",revision:null},{url:"assets/README.155a6634.js",revision:null},{url:"assets/README.1a802e0c.js",revision:null},{url:"assets/README.1d4ddbf7.js",revision:null},{url:"assets/README.21b04fcb.js",revision:null},{url:"assets/README.2d4fd4a9.js",revision:null},{url:"assets/README.2e4f5c43.js",revision:null},{url:"assets/README.301a249e.js",revision:null},{url:"assets/README.30858d31.js",revision:null},{url:"assets/README.360e5eee.js",revision:null},{url:"assets/README.36e9ac87.js",revision:null},{url:"assets/README.3d99103e.js",revision:null},{url:"assets/README.3eb02a4f.js",revision:null},{url:"assets/README.449a1d61.js",revision:null},{url:"assets/README.45008a11.js",revision:null},{url:"assets/README.4bca689b.js",revision:null},{url:"assets/README.4eaae4e7.js",revision:null},{url:"assets/README.4ef00133.js",revision:null},{url:"assets/README.565a6364.js",revision:null},{url:"assets/README.611353eb.js",revision:null},{url:"assets/README.61e34edd.js",revision:null},{url:"assets/README.716ab092.js",revision:null},{url:"assets/README.72e486d7.js",revision:null},{url:"assets/README.9725534c.js",revision:null},{url:"assets/README.97a6aff5.js",revision:null},{url:"assets/README.9a665d9f.js",revision:null},{url:"assets/README.9be7ebb8.js",revision:null},{url:"assets/README.a38cc6e8.js",revision:null},{url:"assets/README.aa465e93.js",revision:null},{url:"assets/README.aa9551d3.js",revision:null},{url:"assets/README.be7e8b0a.js",revision:null},{url:"assets/README.c8757049.js",revision:null},{url:"assets/README.d4e9f539.js",revision:null},{url:"assets/README.d80595ef.js",revision:null},{url:"assets/README.dc77f3a7.js",revision:null},{url:"assets/README.e00ece2b.js",revision:null},{url:"assets/README.e0979051.js",revision:null},{url:"assets/README.e0cfa7a8.js",revision:null},{url:"assets/README.e5811950.js",revision:null},{url:"assets/README.e5e69831.js",revision:null},{url:"assets/README.ecdb770c.js",revision:null},{url:"assets/README.fdec6c93.js",revision:null},{url:"assets/README.fe1b200b.js",revision:null},{url:"assets/README.fe6d02dd.js",revision:null},{url:"assets/README.fee7582f.js",revision:null},{url:"assets/settings.33d312da.js",revision:null},{url:"assets/star-outline.04c40df5.js",revision:null},{url:"assets/start.4310bf80.js",revision:null},{url:"assets/vendor.347701fb.js",revision:null},{url:"components/alert.html",revision:"a3c8f3b0e20c1a4ee11141ca305373c7"},{url:"components/anchor.html",revision:"791af5df840a441cadd348edaeb7cc47"},{url:"components/avatar.html",revision:"abb9eac8b270f68cd51d7af48296b5ff"},{url:"components/badge.html",revision:"b1b0b168d1c2c1301897c62256b52d0f"},{url:"components/breadcrumb.html",revision:"307ca7da4a26f6312a74fa562a1d505e"},{url:"components/button.html",revision:"6df7868a41c3e003498f6d4e28d32d61"},{url:"components/card.html",revision:"3577fb84e76a56b1dd3c74de620bd028"},{url:"components/carousel.html",revision:"18464047c2f8ffd2b348b6c923e8b3e8"},{url:"components/checkbox.html",revision:"91c972be5ebfdaf117868191522ee139"},{url:"components/code.html",revision:"ea8750db65246bdb7431908dbca23060"},{url:"components/date-picker.html",revision:"ea3696e4f2a1c8cc7c822be3d8ce26c6"},{url:"components/device.html",revision:"8385f201e7e65c01ff1dded59d8468ad"},{url:"components/dialog.html",revision:"1dfb9d0e74ad91327bb454a857a9c70a"},{url:"components/divider.html",revision:"c67870891657a8bcae012e8dea21a881"},{url:"components/draggable-resizable.html",revision:"9106c23f6451a9ee6e310fc67425dd6f"},{url:"components/draggable-sortable.html",revision:"40f398760034feb2bb102db77e7e0f5f"},{url:"components/draggable.html",revision:"dfa8e9ce82622727c169b2cfbcac9ed7"},{url:"components/drawer.html",revision:"d49fdb8edefa4e89d9012c5b6b449d22"},{url:"components/form.html",revision:"7822d6285c587b5770d8334c1781b6eb"},{url:"components/grid.html",revision:"ab16bf598e0cff7cbd7c5b1988a37de5"},{url:"components/hover.html",revision:"b9413f4060a18c6b5699eb16aa49b0b0"},{url:"components/icon.html",revision:"61e4068b9dbf62302cf02cdac40cc1d8"},{url:"components/image.html",revision:"c4fe9ecf5bbd95fbae4e8fc3d5263b7a"},{url:"components/input.html",revision:"25810fb3609884ebb193ebfb5743e8aa"},{url:"components/layout.html",revision:"8e3e45f647273cb065f14db74c888abc"},{url:"components/lazy.html",revision:"eed81cd1837613061150e15a2e94d5c4"},{url:"components/link.html",revision:"0c7de6c47063b244fc251fb1baad62be"},{url:"components/list.html",revision:"f1795397632bf4c8e6814c1927322358"},{url:"components/menu.html",revision:"7765280da65f578cea0b2af083f791bf"},{url:"components/message-provider.html",revision:"c2dc6bf80527be97b048f4dbbe2a1e90"},{url:"components/notification-provider.html",revision:"34a0c33baa0a30ecf8e7330816e5800f"},{url:"components/overlay.html",revision:"04eab2df109b7607a1dc24fa69edd3af"},{url:"components/pagination.html",revision:"c7b16e224463e590a5f92add8e408af8"},{url:"components/paper.html",revision:"6cba5db86049a723e04fc673b4c4236f"},{url:"components/progress.html",revision:"0754e98662536ea7e4eb836450f7d338"},{url:"components/radio.html",revision:"1ef973956663a29a415bdc284bbfbf00"},{url:"components/responsive.html",revision:"e71f1ac3c37a6eb33a80d26e6d2d4f20"},{url:"components/scrollbar.html",revision:"f49b9852de9b5c51d8f5ceb1da15b430"},{url:"components/select.html",revision:"1aa55c40f37e6bf44422604e41aacf1f"},{url:"components/spacer.html",revision:"193e3abfbcafd56fd4d70f5bcc839167"},{url:"components/switch.html",revision:"2a3cccde05d2454af2a4f0cf80749ac1"},{url:"components/table.html",revision:"70160371b3ab7f047fc1c6cfd36611d0"},{url:"components/tabs.html",revision:"b2be98129acb5a71d1f3e396bacb4dab"},{url:"components/tag.html",revision:"1e355e2c74b47c4357d622abe4c15270"},{url:"components/tooltip.html",revision:"71373cf0a1aa96c22eb6a347b9781265"},{url:"components/transition.html",revision:"a6196ca638b49be0dea2836009da755c"},{url:"components/typography.html",revision:"7276451321cc5d5142ddc684ad9dc22e"},{url:"index.html",revision:"b477d33a19f49531b29ba057b9ed3a5f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"2cc8457fb4cfbf811e54ef50f98dd4cd"},{url:"zh/palette.html",revision:"b090412f24dd21cabc0dd3a67b267b41"},{url:"zh/start.html",revision:"e2a19ca26eb87c577e434ca857ebf2d2"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
