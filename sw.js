if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>n(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(l.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3064871"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.34e030aa.js",revision:null},{url:"assets/app.e3b561a1.css",revision:null},{url:"assets/dark.ee6ed0d4.js",revision:null},{url:"assets/Demo.0d737e55.js",revision:null},{url:"assets/palette.645d8978.js",revision:null},{url:"assets/README.09faa60a.js",revision:null},{url:"assets/README.0a547106.js",revision:null},{url:"assets/README.0e62ad2b.js",revision:null},{url:"assets/README.114c04f6.js",revision:null},{url:"assets/README.18dc5111.js",revision:null},{url:"assets/README.24358dd9.js",revision:null},{url:"assets/README.2a363bf1.js",revision:null},{url:"assets/README.2b0e4b22.js",revision:null},{url:"assets/README.33eefb3c.js",revision:null},{url:"assets/README.35fd4060.js",revision:null},{url:"assets/README.43911eb2.js",revision:null},{url:"assets/README.4504f61d.js",revision:null},{url:"assets/README.4cfbb922.js",revision:null},{url:"assets/README.5896a0b8.js",revision:null},{url:"assets/README.6ce75bd1.js",revision:null},{url:"assets/README.6e6cc2f6.js",revision:null},{url:"assets/README.7a5ca718.js",revision:null},{url:"assets/README.8830c4de.js",revision:null},{url:"assets/README.8a1114be.js",revision:null},{url:"assets/README.8a8ad0b8.js",revision:null},{url:"assets/README.8bb6388d.js",revision:null},{url:"assets/README.9014ca59.js",revision:null},{url:"assets/README.90f0b22d.js",revision:null},{url:"assets/README.9d156b50.js",revision:null},{url:"assets/README.a1a4f942.js",revision:null},{url:"assets/README.a3098cd0.js",revision:null},{url:"assets/README.a8ccd3b7.js",revision:null},{url:"assets/README.a938f863.js",revision:null},{url:"assets/README.abac0349.js",revision:null},{url:"assets/README.ac15ba26.js",revision:null},{url:"assets/README.aea2cccf.js",revision:null},{url:"assets/README.b1b25cb9.js",revision:null},{url:"assets/README.bb9865b5.js",revision:null},{url:"assets/README.c7895d9e.js",revision:null},{url:"assets/README.c8508dc6.js",revision:null},{url:"assets/README.cb135167.js",revision:null},{url:"assets/README.e0ac0c26.js",revision:null},{url:"assets/README.e1667332.js",revision:null},{url:"assets/README.e28103c1.js",revision:null},{url:"assets/README.e69a0873.js",revision:null},{url:"assets/README.f32e7eed.js",revision:null},{url:"assets/README.f43175df.js",revision:null},{url:"assets/README.f7c151a1.js",revision:null},{url:"assets/start.5b7249a7.js",revision:null},{url:"assets/vendor.aa2d3828.js",revision:null},{url:"components/alert.html",revision:"e51ba5170b984e9402dea6dbd851246c"},{url:"components/anchor.html",revision:"6e3c065085f8f0f2647ddf9754ddd144"},{url:"components/avatar.html",revision:"ccbabc44d777d5c7fbf99d04a81d09c6"},{url:"components/badge.html",revision:"129596ed074f0b652a8bac22db1dffe3"},{url:"components/breadcrumb.html",revision:"913ee8570cf14e86f1488f7176233e97"},{url:"components/button.html",revision:"4dac9cd73868e36334a2f0d86f9c5c5e"},{url:"components/card.html",revision:"314e1d800d9ac1261b8126fb60183f36"},{url:"components/carousel.html",revision:"ef1404544e460f2b0e7fd97477b2cea7"},{url:"components/checkbox.html",revision:"578617151ee1b7992faacc94b4ae0e5d"},{url:"components/code.html",revision:"f51f62e553246c05bb97cdc9e198d539"},{url:"components/date-picker.html",revision:"216e53d817f74c13e58140c516f5abd0"},{url:"components/device.html",revision:"b8be7c510f677ff97b71d41fd5ae94a8"},{url:"components/dialog.html",revision:"7d21244a5b905cd31f332f2362532458"},{url:"components/divider.html",revision:"88d28e89ca30098a1ea42499a2b14151"},{url:"components/drag.html",revision:"be376218f6da7a5cfa69b9a9eb21dcb1"},{url:"components/drawer.html",revision:"316adcf8668e15cd5fafc923e0d468d6"},{url:"components/form.html",revision:"472ee6e63a1c7ab35aed2c8992a7518c"},{url:"components/grid.html",revision:"390d387c29c7acaaf27e6bd687c2b5fb"},{url:"components/hover.html",revision:"b15c6fc6a95d23d40efcdac8574e8a66"},{url:"components/icon.html",revision:"9168acc1116f0e85790a22c9e69e66b1"},{url:"components/image.html",revision:"ee62e383588e49bc46244a3316fa8878"},{url:"components/input.html",revision:"62b08392a98cf77dcc06134240c7ae30"},{url:"components/layout.html",revision:"cfe79ea6f5aa5815e0c705d78da49f54"},{url:"components/lazy.html",revision:"101a9698d771fe00cdb0fef404f666c4"},{url:"components/link.html",revision:"0339fee95f527f6f9bed904155168e1b"},{url:"components/list.html",revision:"f66fa1e9f043e6c26b568f8a82e077f8"},{url:"components/menu.html",revision:"c7cdfa990c50e7b3f2b92b82c8334a7a"},{url:"components/message-provider.html",revision:"397e1bfc8f24a21aa5cdc5d65851df0e"},{url:"components/notification-provider.html",revision:"d82865292b4db2dd7c8cac24b723ed6f"},{url:"components/overlay.html",revision:"aadf6b971e7eff83f46e14b35ac3c514"},{url:"components/pagination.html",revision:"105d714dad88b33b6f19b861be9878cd"},{url:"components/paper.html",revision:"6492c254e4891d11221872270dbd4fd9"},{url:"components/progress.html",revision:"12fc4ba880bcd98954ae90a2921f2800"},{url:"components/radio.html",revision:"0d0eac10946407174706a4ceb7ea7550"},{url:"components/responsive.html",revision:"1b1ace451c69ed2a657624ee0a028c4c"},{url:"components/select.html",revision:"db9268af5b39dc348eebe8375a5b039d"},{url:"components/spacer.html",revision:"4cc6aa5fae8859cfeb3bb47c2804a04c"},{url:"components/switch.html",revision:"cb3f9bee8b867e8d9e7c2ef445e6c53c"},{url:"components/table.html",revision:"398ba2c84582789f2dffe74b181ac65b"},{url:"components/tag.html",revision:"9c3f9962fa53f5b3139955c5478af0cf"},{url:"components/tooltip.html",revision:"db71104a94b4adf0127b23112ec73c99"},{url:"components/transition.html",revision:"6c1d072aea64072d4cd12d9e9b0666ca"},{url:"components/typography.html",revision:"ecf952f6ef6477c98aec1fdf00cd086b"},{url:"index.html",revision:"1a58cc71fb06a92a1844956a993ef400"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"245bba4954b86acd2f747a61db84b1c5"},{url:"zh/palette.html",revision:"c9f2bb8dbef43302511a9061f595c723"},{url:"zh/start.html",revision:"592a0d6c18ab3fe59badb931d6dab281"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
