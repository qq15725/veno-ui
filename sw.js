if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let i={};const o=s=>l(s,a),u={module:{uri:a},exports:i,require:o};e[a]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),i)))}}define(["./workbox-82e5aebe"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-legacy.4b29118e.js",revision:null},{url:"assets/app.77be3c0f.js",revision:null},{url:"assets/app.788600e3.css",revision:null},{url:"assets/close-legacy.62d00721.js",revision:null},{url:"assets/close.bb0f7ba0.js",revision:null},{url:"assets/dark-legacy.67375777.js",revision:null},{url:"assets/dark.f737127a.js",revision:null},{url:"assets/dashboard-legacy.5a6f8029.js",revision:null},{url:"assets/dashboard.f36a0b7f.js",revision:null},{url:"assets/Demo-legacy.29073325.js",revision:null},{url:"assets/Demo.07d7632d.js",revision:null},{url:"assets/palette-legacy.d18fb96a.js",revision:null},{url:"assets/palette.e8be8942.js",revision:null},{url:"assets/polyfills-legacy.d37ebf6a.js",revision:null},{url:"assets/README-legacy.0f7b7e90.js",revision:null},{url:"assets/README-legacy.11ee39a6.js",revision:null},{url:"assets/README-legacy.1973a8f6.js",revision:null},{url:"assets/README-legacy.1cd29a94.js",revision:null},{url:"assets/README-legacy.1dba8eb1.js",revision:null},{url:"assets/README-legacy.21169f15.js",revision:null},{url:"assets/README-legacy.2be0e53e.js",revision:null},{url:"assets/README-legacy.385dbb02.js",revision:null},{url:"assets/README-legacy.3b213eac.js",revision:null},{url:"assets/README-legacy.3dcc473d.js",revision:null},{url:"assets/README-legacy.3e4cfce6.js",revision:null},{url:"assets/README-legacy.4951843d.js",revision:null},{url:"assets/README-legacy.524c6220.js",revision:null},{url:"assets/README-legacy.57d6bbc7.js",revision:null},{url:"assets/README-legacy.583eca80.js",revision:null},{url:"assets/README-legacy.66e7288f.js",revision:null},{url:"assets/README-legacy.68490a33.js",revision:null},{url:"assets/README-legacy.6bf0454e.js",revision:null},{url:"assets/README-legacy.76c19456.js",revision:null},{url:"assets/README-legacy.81461bf8.js",revision:null},{url:"assets/README-legacy.8b702a8a.js",revision:null},{url:"assets/README-legacy.97f5ef2e.js",revision:null},{url:"assets/README-legacy.98ce966b.js",revision:null},{url:"assets/README-legacy.9c2b47e4.js",revision:null},{url:"assets/README-legacy.9d654e06.js",revision:null},{url:"assets/README-legacy.a9d94b6c.js",revision:null},{url:"assets/README-legacy.acc2d3fa.js",revision:null},{url:"assets/README-legacy.ae6656a8.js",revision:null},{url:"assets/README-legacy.ae746cdb.js",revision:null},{url:"assets/README-legacy.b1b63f2c.js",revision:null},{url:"assets/README-legacy.b48532f8.js",revision:null},{url:"assets/README-legacy.b707ccef.js",revision:null},{url:"assets/README-legacy.b7e9a099.js",revision:null},{url:"assets/README-legacy.c06e1676.js",revision:null},{url:"assets/README-legacy.c4e9985e.js",revision:null},{url:"assets/README-legacy.c61bfb93.js",revision:null},{url:"assets/README-legacy.c9dfa807.js",revision:null},{url:"assets/README-legacy.d2c6aa8d.js",revision:null},{url:"assets/README-legacy.d37f422e.js",revision:null},{url:"assets/README-legacy.dd48ff26.js",revision:null},{url:"assets/README-legacy.e0a64469.js",revision:null},{url:"assets/README-legacy.e14585d9.js",revision:null},{url:"assets/README-legacy.efb7e6eb.js",revision:null},{url:"assets/README-legacy.f1bed9c5.js",revision:null},{url:"assets/README-legacy.f50217b9.js",revision:null},{url:"assets/README-legacy.f69b3196.js",revision:null},{url:"assets/README-legacy.fad35826.js",revision:null},{url:"assets/README.00a2640e.js",revision:null},{url:"assets/README.02060817.js",revision:null},{url:"assets/README.08b0b652.js",revision:null},{url:"assets/README.0afe703b.js",revision:null},{url:"assets/README.10f5345c.js",revision:null},{url:"assets/README.12177dac.js",revision:null},{url:"assets/README.1230d7f4.js",revision:null},{url:"assets/README.14b0e381.js",revision:null},{url:"assets/README.1bd487bf.js",revision:null},{url:"assets/README.349bd7f0.js",revision:null},{url:"assets/README.368e112a.js",revision:null},{url:"assets/README.3d8b119e.js",revision:null},{url:"assets/README.3ea08ea1.js",revision:null},{url:"assets/README.3fe008b5.js",revision:null},{url:"assets/README.471c9274.js",revision:null},{url:"assets/README.47a2b7f6.js",revision:null},{url:"assets/README.49bb4646.js",revision:null},{url:"assets/README.56dab1b3.js",revision:null},{url:"assets/README.65f4b68a.js",revision:null},{url:"assets/README.6d7db573.js",revision:null},{url:"assets/README.6f8007fc.js",revision:null},{url:"assets/README.6f856355.js",revision:null},{url:"assets/README.7d1f4861.js",revision:null},{url:"assets/README.86ef5544.js",revision:null},{url:"assets/README.89e60790.js",revision:null},{url:"assets/README.96ff2e0e.js",revision:null},{url:"assets/README.a32ad5e7.js",revision:null},{url:"assets/README.a82286ba.js",revision:null},{url:"assets/README.a95b001e.js",revision:null},{url:"assets/README.adae8408.js",revision:null},{url:"assets/README.ae43ac9a.js",revision:null},{url:"assets/README.ba517391.js",revision:null},{url:"assets/README.c2c0d9f7.js",revision:null},{url:"assets/README.c3182f77.js",revision:null},{url:"assets/README.c62dd56f.js",revision:null},{url:"assets/README.cca4c892.js",revision:null},{url:"assets/README.d1eb701c.js",revision:null},{url:"assets/README.d2249040.js",revision:null},{url:"assets/README.d287e56b.js",revision:null},{url:"assets/README.d5ffeeff.js",revision:null},{url:"assets/README.d8254154.js",revision:null},{url:"assets/README.e23a9499.js",revision:null},{url:"assets/README.e37f6417.js",revision:null},{url:"assets/README.e99ae434.js",revision:null},{url:"assets/README.ea6cb106.js",revision:null},{url:"assets/README.f7bc1c53.js",revision:null},{url:"assets/README.fcbd21b3.js",revision:null},{url:"assets/settings-legacy.26b62038.js",revision:null},{url:"assets/settings.fed0abf6.js",revision:null},{url:"assets/star-outline-legacy.36cfef57.js",revision:null},{url:"assets/star-outline.91a79784.js",revision:null},{url:"assets/start-legacy.12acf490.js",revision:null},{url:"assets/start.eac5f0e0.js",revision:null},{url:"components/alert.html",revision:"9b5e9305790e61c2d327b4482020bca1"},{url:"components/anchor.html",revision:"e061281eeec6ff906081eb0375c59132"},{url:"components/avatar.html",revision:"8545ab0bf1e172f9558f6ee1ab0a2a8a"},{url:"components/badge.html",revision:"117488c225a510219b279be32801310d"},{url:"components/breadcrumb.html",revision:"91136bfa57b5d894622baed011497bc3"},{url:"components/button.html",revision:"4ee1f09fb5f78b8f7bc40b55da704ea8"},{url:"components/card.html",revision:"b2572e32e699ab7fa340126e80477595"},{url:"components/carousel.html",revision:"18eab4feb74b4b970239e87ef98806f2"},{url:"components/checkbox.html",revision:"b9cc471a25a350b1dbf16f4d4a4984bb"},{url:"components/code.html",revision:"19c93461f1dbf2dafee314c711a6c9e2"},{url:"components/date-picker.html",revision:"90814399bc80661ed92c5a361cf24ead"},{url:"components/device.html",revision:"03a317d9a59f30cea9d5d712c2c77758"},{url:"components/dialog.html",revision:"c19d1f35de5635167fe763867ffdd6e3"},{url:"components/divider.html",revision:"55014488d951840c54a46aebc19baad8"},{url:"components/draggable-resizable.html",revision:"bf555381a35918e1d5f04d1cad1647c5"},{url:"components/draggable-sortable.html",revision:"0cd95fc7a923978fdddce027e1de8930"},{url:"components/draggable.html",revision:"1b73e03c19f0b3849a0a35899ba48023"},{url:"components/drawer.html",revision:"35e11dc9e029f4fe53d7811f0d4b4715"},{url:"components/form.html",revision:"37d233fac56afa790655c84bf918849d"},{url:"components/grid.html",revision:"c2b9ed52b5a97afc33e03f9fea5bbde4"},{url:"components/hover.html",revision:"258e93b3bd4b1f1dd472db2a0039fdc5"},{url:"components/icon.html",revision:"de723b3539808899b1232bf89c08e285"},{url:"components/image.html",revision:"8c3858549c4ed290665a2d1e464c187d"},{url:"components/input.html",revision:"a10579ac2d5d6a8054c47e14f00e6f31"},{url:"components/layout.html",revision:"ed0dd63a6e4779f0128704ef6db282ad"},{url:"components/lazy.html",revision:"8103d5a0e5c6a559f8b415cb7e583dd2"},{url:"components/link.html",revision:"71a2c5fa4769ef73e0b57bce441eabc4"},{url:"components/list.html",revision:"e8826630770588a4d6877d06ab8495ba"},{url:"components/menu.html",revision:"5a95eafcd55a469c7eb436acbee919d9"},{url:"components/message-provider.html",revision:"9f819aae6c5dad030a7714bd89e0a992"},{url:"components/notification-provider.html",revision:"1320e9ca97da3d45997fc9bfefef3faf"},{url:"components/overlay.html",revision:"971c59ab611c370b7518af18bdf4c40b"},{url:"components/pagination.html",revision:"7cd3ea7d87e3655e660c15bce6dcb8b2"},{url:"components/paper.html",revision:"5eb14eb240b3f5a61dfe932764e1790a"},{url:"components/progress.html",revision:"8ae44ea87bd2b821c3da6a67842b9cb0"},{url:"components/radio.html",revision:"55fe80937bf8a6aded287f68444c99b2"},{url:"components/responsive.html",revision:"ea1625fedee5789ceb719e2b9de39af6"},{url:"components/scrollbar.html",revision:"3543eec570a39463ad2c2eea04afa1f2"},{url:"components/select.html",revision:"987b2672a687f0e61cea64e6e20be0fe"},{url:"components/spacer.html",revision:"5a0f346422f01e9d7e7df75e2e0df992"},{url:"components/switch.html",revision:"c7f5a20c24f9b6eba37e7c193c1800f9"},{url:"components/table.html",revision:"477b689358b95e19f6dad8d438607da9"},{url:"components/tabs.html",revision:"0728881267ad7d866b082371d1ec4eab"},{url:"components/tag.html",revision:"201974e56f3cd774d1bfaaf1bc2e6133"},{url:"components/tooltip.html",revision:"ddc934d0b22ab276f6cfea51f1da14d7"},{url:"components/transition.html",revision:"0a755e52db57c837f0a9519277beb483"},{url:"components/typography.html",revision:"c6fbad1d2857bf46cb4faf942233e2f0"},{url:"index.html",revision:"8860ddf4ff3bd9369107439643b4c0cb"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/dark.html",revision:"16acf206cba9002473d29724e7acaf1e"},{url:"zh/palette.html",revision:"05d23d51231e225b028c013aca3fa9e7"},{url:"zh/start.html",revision:"60ae95c164502d5b80c57407ccf1e437"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
