if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const c=s=>l(s,i),o={module:{uri:i},exports:a,require:c};e[i]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(r(...s),a)))}}define(["./workbox-04207ca7"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-legacy.be675340.js",revision:null},{url:"assets/app.0550b291.js",revision:null},{url:"assets/app.a0aabe15.css",revision:null},{url:"assets/close-legacy.3e7896df.js",revision:null},{url:"assets/close.9e579666.js",revision:null},{url:"assets/dark-legacy.8205c909.js",revision:null},{url:"assets/dark.aa76fc24.js",revision:null},{url:"assets/dashboard-legacy.74ac43a1.js",revision:null},{url:"assets/dashboard.2b6fbc5b.js",revision:null},{url:"assets/Demo-legacy.bc5bb3f5.js",revision:null},{url:"assets/Demo.a2797562.js",revision:null},{url:"assets/palette-legacy.952f81de.js",revision:null},{url:"assets/palette.a01b291d.js",revision:null},{url:"assets/polyfills-legacy.3f588d16.js",revision:null},{url:"assets/README-legacy.073b7479.js",revision:null},{url:"assets/README-legacy.0a0ab40b.js",revision:null},{url:"assets/README-legacy.0d64115c.js",revision:null},{url:"assets/README-legacy.105166de.js",revision:null},{url:"assets/README-legacy.159acdf0.js",revision:null},{url:"assets/README-legacy.15abc062.js",revision:null},{url:"assets/README-legacy.1d25228e.js",revision:null},{url:"assets/README-legacy.1dbd6619.js",revision:null},{url:"assets/README-legacy.1fea5bfd.js",revision:null},{url:"assets/README-legacy.23576b7b.js",revision:null},{url:"assets/README-legacy.280d6cc9.js",revision:null},{url:"assets/README-legacy.2c77b6a5.js",revision:null},{url:"assets/README-legacy.31900025.js",revision:null},{url:"assets/README-legacy.39a75eef.js",revision:null},{url:"assets/README-legacy.3c3330e6.js",revision:null},{url:"assets/README-legacy.4facebb5.js",revision:null},{url:"assets/README-legacy.5c17a072.js",revision:null},{url:"assets/README-legacy.65cd0d4d.js",revision:null},{url:"assets/README-legacy.6f74a2f9.js",revision:null},{url:"assets/README-legacy.715be717.js",revision:null},{url:"assets/README-legacy.732c9711.js",revision:null},{url:"assets/README-legacy.74e41570.js",revision:null},{url:"assets/README-legacy.8300513e.js",revision:null},{url:"assets/README-legacy.893fdc3f.js",revision:null},{url:"assets/README-legacy.8f5e3729.js",revision:null},{url:"assets/README-legacy.90c9f9f4.js",revision:null},{url:"assets/README-legacy.9483dabb.js",revision:null},{url:"assets/README-legacy.9988b3cd.js",revision:null},{url:"assets/README-legacy.9a925d51.js",revision:null},{url:"assets/README-legacy.9e3f1017.js",revision:null},{url:"assets/README-legacy.9f0a403f.js",revision:null},{url:"assets/README-legacy.a756633e.js",revision:null},{url:"assets/README-legacy.b7358436.js",revision:null},{url:"assets/README-legacy.baa7e74a.js",revision:null},{url:"assets/README-legacy.bb1f3cfc.js",revision:null},{url:"assets/README-legacy.c08f25e6.js",revision:null},{url:"assets/README-legacy.c36e36f7.js",revision:null},{url:"assets/README-legacy.cb5646fb.js",revision:null},{url:"assets/README-legacy.cc91c7fc.js",revision:null},{url:"assets/README-legacy.d6741ee2.js",revision:null},{url:"assets/README-legacy.dc879c89.js",revision:null},{url:"assets/README-legacy.de857faf.js",revision:null},{url:"assets/README-legacy.e4af29a7.js",revision:null},{url:"assets/README-legacy.eb70fc17.js",revision:null},{url:"assets/README-legacy.f916e64f.js",revision:null},{url:"assets/README-legacy.f964f7d6.js",revision:null},{url:"assets/README-legacy.ff62cf18.js",revision:null},{url:"assets/README.043b468e.js",revision:null},{url:"assets/README.147839ee.js",revision:null},{url:"assets/README.17cd750b.js",revision:null},{url:"assets/README.1f011f36.js",revision:null},{url:"assets/README.21252fa1.js",revision:null},{url:"assets/README.23668cc8.js",revision:null},{url:"assets/README.24889cc4.js",revision:null},{url:"assets/README.2eaa2460.js",revision:null},{url:"assets/README.2ebd54ca.js",revision:null},{url:"assets/README.30c3e0cf.js",revision:null},{url:"assets/README.461674b7.js",revision:null},{url:"assets/README.474eac54.js",revision:null},{url:"assets/README.4b76da07.js",revision:null},{url:"assets/README.4ccb4757.js",revision:null},{url:"assets/README.4dde95eb.js",revision:null},{url:"assets/README.55678117.js",revision:null},{url:"assets/README.58ba131c.js",revision:null},{url:"assets/README.5b352ce4.js",revision:null},{url:"assets/README.5e9c786f.js",revision:null},{url:"assets/README.603a5edb.js",revision:null},{url:"assets/README.60ced883.js",revision:null},{url:"assets/README.669bdfee.js",revision:null},{url:"assets/README.7734fdd6.js",revision:null},{url:"assets/README.78fef063.js",revision:null},{url:"assets/README.8067ceb2.js",revision:null},{url:"assets/README.8b12eebe.js",revision:null},{url:"assets/README.951bc2b7.js",revision:null},{url:"assets/README.9bd2d30a.js",revision:null},{url:"assets/README.a07b7de8.js",revision:null},{url:"assets/README.a4651d22.js",revision:null},{url:"assets/README.a6cdb4ab.js",revision:null},{url:"assets/README.ab61ec53.js",revision:null},{url:"assets/README.b0267bb2.js",revision:null},{url:"assets/README.b43b0dfc.js",revision:null},{url:"assets/README.b6add859.js",revision:null},{url:"assets/README.c4b487ab.js",revision:null},{url:"assets/README.c5bdf39c.js",revision:null},{url:"assets/README.cd36ea4a.js",revision:null},{url:"assets/README.cf0d9dbf.js",revision:null},{url:"assets/README.d031e72f.js",revision:null},{url:"assets/README.d518fa9d.js",revision:null},{url:"assets/README.d92e35df.js",revision:null},{url:"assets/README.e6630341.js",revision:null},{url:"assets/README.ea41adbe.js",revision:null},{url:"assets/README.eb14cacc.js",revision:null},{url:"assets/README.ebbc8738.js",revision:null},{url:"assets/README.f6d0321b.js",revision:null},{url:"assets/settings-legacy.1a3340cb.js",revision:null},{url:"assets/settings.d132ac28.js",revision:null},{url:"assets/star-outline-legacy.a60e0d9c.js",revision:null},{url:"assets/star-outline.688df86b.js",revision:null},{url:"assets/start-legacy.75e50255.js",revision:null},{url:"assets/start.031c165a.js",revision:null},{url:"components/alert.html",revision:"69c476cda647cccf21ae8c3d45e6d150"},{url:"components/anchor.html",revision:"f7a4f83792170d1d8739b59ed6610f7f"},{url:"components/avatar.html",revision:"1a14e723439a6b67273785878c73459a"},{url:"components/badge.html",revision:"d6f6f264ecb426bb8844599c33f6584c"},{url:"components/breadcrumb.html",revision:"2cd15c7c6a989cf7cd9ff291a11844bc"},{url:"components/button.html",revision:"44476d58e17323beb5d763859e3aa7b1"},{url:"components/card.html",revision:"106b18bb768e88f51c562357baa62512"},{url:"components/carousel.html",revision:"3eaadf87c3d55e256ffef9f7bdc6aa2d"},{url:"components/checkbox.html",revision:"f2560c99d1e1974d25c8b2ce7e27c428"},{url:"components/code.html",revision:"5b5422498305eafbd5fbf7754c95fe61"},{url:"components/date-picker.html",revision:"54d34ed5da019c8e293221f07f821754"},{url:"components/device.html",revision:"7f13058e5c5b23771bb82ecbcbc7936b"},{url:"components/dialog.html",revision:"e7d198da46a6cfc59c602a89fca42a28"},{url:"components/divider.html",revision:"61344e40583169eefe7bbdbf463f4c22"},{url:"components/draggable-resizable.html",revision:"3e2832c5e0ecdc1db79e986201d0f1d9"},{url:"components/draggable-sortable.html",revision:"8449d4d16598eaac212fcad6f0ef5093"},{url:"components/draggable.html",revision:"4f8acc31a158e440f2d0e944d9cf8ea3"},{url:"components/drawer.html",revision:"15a9d02401750cc0418021a6f0197a70"},{url:"components/form.html",revision:"5c065448c0c8ecb8615da92a682dd0c8"},{url:"components/grid.html",revision:"2ed7cc8720a00008e73d8469e583582f"},{url:"components/hover.html",revision:"b82466b669de09fd8de1f992bb2fcc05"},{url:"components/icon.html",revision:"847fce773c37f9b6cb8ace5039a1b5d3"},{url:"components/image.html",revision:"6ae8301cf9f9ffc8aa4b0570d3005702"},{url:"components/input.html",revision:"9e1375b538c7a878606fdbbe84f547d5"},{url:"components/layout.html",revision:"7529b0bfdbf80b37dc2851be4bb638ac"},{url:"components/lazy.html",revision:"5562b9b227fad22fa12656c64bf43fab"},{url:"components/link.html",revision:"3bc40a35fe48f6209219893318559aba"},{url:"components/list.html",revision:"e168c9d3a9cd7750aa5ab3abfa031c8b"},{url:"components/menu.html",revision:"efb57033a9a9b01efd2567c650eaf412"},{url:"components/message-provider.html",revision:"e256f3c713d8ccc57fd307fcf531cbad"},{url:"components/notification-provider.html",revision:"77fd8bb918a4b99b4c576da9bb7ae9ef"},{url:"components/overlay.html",revision:"5767fa4c01af8144cc89a817b6fb9937"},{url:"components/pagination.html",revision:"0d5b6f26143996fa5174d176f1eeef82"},{url:"components/paper.html",revision:"cb90ecc318cd24927d7633e067f95531"},{url:"components/progress.html",revision:"db93075e2aff798c7d55c91ff06fbe4e"},{url:"components/radio.html",revision:"e83e517402fad9a10945e616fc7f36ee"},{url:"components/responsive.html",revision:"bd3b14799a1acf60d544beae776bc0a0"},{url:"components/scrollbar.html",revision:"4f9ecce11c08269515b935ad7415d381"},{url:"components/select.html",revision:"247216da5c50813c8f03cfd40639bab3"},{url:"components/spacer.html",revision:"28cc5369995417546194d0baea3027d0"},{url:"components/switch.html",revision:"f8ff247d8be6caf0248d82eb24e0aef5"},{url:"components/table.html",revision:"7b5c89c02ac1a542480f3d89ab1f89c8"},{url:"components/tabs.html",revision:"5206f653965b459d4d57929febaa9be9"},{url:"components/tag.html",revision:"ef0613c25a03835e13a64c673b1fdb45"},{url:"components/tooltip.html",revision:"4d38d9ec1d062cdb1ee8ea532bf1db47"},{url:"components/transition.html",revision:"78e17c9f1b5522962ae62981d1be2cdc"},{url:"components/typography.html",revision:"7071a0545cb497a3fcbba652d3c53848"},{url:"index.html",revision:"ac823d99928f4679a9bd1028ca21e34c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"dda1e1237db536261260be872f4db0ee"},{url:"zh/palette.html",revision:"89f7afbe6df55531e1e78baee9d012ba"},{url:"zh/start.html",revision:"d383340f2bd06105a128210545925aca"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
