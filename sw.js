if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const c=e=>n(e,i),a={module:{uri:i},exports:o,require:c};s[i]=Promise.all(l.map((e=>a[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-a2b61380"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.37de2679.css",revision:null},{url:"assets/app.74b92729.js",revision:null},{url:"assets/Demo.208f1b5e.js",revision:null},{url:"assets/palette.11b99214.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/README.00440b2c.js",revision:null},{url:"assets/README.0648fc4c.js",revision:null},{url:"assets/README.06e61267.js",revision:null},{url:"assets/README.103bf01d.js",revision:null},{url:"assets/README.111bb2ef.js",revision:null},{url:"assets/README.1194a8ec.js",revision:null},{url:"assets/README.1268ef01.js",revision:null},{url:"assets/README.15d541b3.js",revision:null},{url:"assets/README.203f90de.js",revision:null},{url:"assets/README.2050ee23.js",revision:null},{url:"assets/README.2a840c5c.js",revision:null},{url:"assets/README.356423c6.js",revision:null},{url:"assets/README.395a5ec4.js",revision:null},{url:"assets/README.3b78db5e.js",revision:null},{url:"assets/README.3c300846.js",revision:null},{url:"assets/README.402f7653.js",revision:null},{url:"assets/README.41f9bb4c.js",revision:null},{url:"assets/README.43edb99c.js",revision:null},{url:"assets/README.47affcfc.js",revision:null},{url:"assets/README.5b0ed865.js",revision:null},{url:"assets/README.6184f098.js",revision:null},{url:"assets/README.6bfdfa68.js",revision:null},{url:"assets/README.725a8e46.js",revision:null},{url:"assets/README.7f86d738.js",revision:null},{url:"assets/README.895ff12a.js",revision:null},{url:"assets/README.8e352a8b.js",revision:null},{url:"assets/README.a58d59ac.js",revision:null},{url:"assets/README.a6ea7d79.js",revision:null},{url:"assets/README.ac5d985a.js",revision:null},{url:"assets/README.ad2a1396.js",revision:null},{url:"assets/README.ba1d3997.js",revision:null},{url:"assets/README.d4769051.js",revision:null},{url:"assets/README.d943f9a4.js",revision:null},{url:"assets/README.ddb86796.js",revision:null},{url:"assets/README.e362dbfc.js",revision:null},{url:"assets/README.e4036817.js",revision:null},{url:"assets/README.e8255804.js",revision:null},{url:"assets/README.f023b421.js",revision:null},{url:"assets/README.f3fc8cc8.js",revision:null},{url:"assets/README.f6404ee7.js",revision:null},{url:"assets/README.fc003fca.js",revision:null},{url:"assets/README.fd089b13.js",revision:null},{url:"assets/start.bd536e0b.js",revision:null},{url:"assets/vendor.17b08436.js",revision:null},{url:"components/alert.html",revision:"b1dc791d26de3190aa7bf47037246051"},{url:"components/anchor.html",revision:"c262b20bf3707d1915fbcb4ac81beb81"},{url:"components/avatar.html",revision:"35416bc31ca9a963fc638cf314ae8f05"},{url:"components/badge.html",revision:"c31b7d0f7c4d8ce37b289807f4d8736a"},{url:"components/breadcrumb.html",revision:"0d6ec20886ad29d6b4eb5e004e4d09c1"},{url:"components/button.html",revision:"a2aadad8014eb312b65e698080b6ebd3"},{url:"components/card.html",revision:"df56fa7c654cf867eb5718eff2f84ff5"},{url:"components/carousel.html",revision:"7d42ed02bec9f0408fb022ccdfb29d75"},{url:"components/checkbox.html",revision:"e7416ecf15fd9e01765efc8f2bcf796c"},{url:"components/code.html",revision:"6b4c21c451a736b0d0501b8a19d0024a"},{url:"components/device.html",revision:"13450ba39daf489dd3293bc94381c18b"},{url:"components/dialog.html",revision:"02cbdd10b5ba9937d24121a89ef33b58"},{url:"components/divider.html",revision:"72e89dce88ad891f9dd043bb7d3bbca2"},{url:"components/drag.html",revision:"05cfc0de6df5edf35241c2f89c80930c"},{url:"components/drawer.html",revision:"2cb0bfaaa1b1116fe7a7b202fbec9504"},{url:"components/form.html",revision:"a6fea7245acc40d4488134acbe83204e"},{url:"components/grid.html",revision:"c1d2607cc6d3cce2b38fa9bcf3efa068"},{url:"components/hover.html",revision:"3072cfa321f20fb2810685ce1104bda1"},{url:"components/icon.html",revision:"7d930a44cb8a15ff67c1e8cdc092adb8"},{url:"components/image.html",revision:"dbd92a0bcaacedd11433997e3fe96f0c"},{url:"components/input.html",revision:"faacf53e82e457a8bdab5b7d613a1bab"},{url:"components/layout.html",revision:"717e3c5803e2c0fb877741b49b110776"},{url:"components/lazy.html",revision:"a01165f2b958ebc0811ae27554426ee0"},{url:"components/link.html",revision:"f8aa9143fac641c4e7b01f4c5a07b680"},{url:"components/list.html",revision:"32b43930ffc3f91e58d6b1488afe658f"},{url:"components/menu.html",revision:"89c58a9adcc42c8135387abc6d062e6a"},{url:"components/message-provider.html",revision:"96f3950656ef7c574ca4e75f08251c69"},{url:"components/notification-provider.html",revision:"b627a2fc54130d4b4a311d4781f167cf"},{url:"components/overlay.html",revision:"d9b7edda8616d2eef3032bd5cc5b7b79"},{url:"components/pagination.html",revision:"5e0f22918ffc41a2edaeccc0ee8fda69"},{url:"components/paper.html",revision:"04a195352e37f415d91ba29d72145c8e"},{url:"components/progress.html",revision:"284a80ec3330f53d0bb9d3d028779dd7"},{url:"components/radio.html",revision:"520b8c86c494a7180e4fd27019022d63"},{url:"components/responsive.html",revision:"bc83bd1c4247c8d05e7ee38ad027a365"},{url:"components/select.html",revision:"6270a844daa7c06f6071b173fe9a2f93"},{url:"components/spacer.html",revision:"ab7b77b6a127e41475e97e78ca881973"},{url:"components/switch.html",revision:"00d2ea553457cc22a5bd81c2dae3cf2f"},{url:"components/table.html",revision:"1f1db9608089cfddc60e610bc1e8bda6"},{url:"components/tag.html",revision:"ab895c2fead30610b869eb679f552991"},{url:"components/tooltip.html",revision:"7ad319a45fcda915c0807d07e1122316"},{url:"components/transition.html",revision:"dcd84306de0dcc0ecd4562e37aadb489"},{url:"components/typography.html",revision:"b024645d73bd3852917c8e79a466f00d"},{url:"index.html",revision:"262eda32c7c64b348641f52ae2b165c9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/palette.html",revision:"c773e29ccd24dd3389efe24b4c8cec55"},{url:"zh/start.html",revision:"105b875d61ed21a14d57d80cdf503e87"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
