if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>n(e,i),c={module:{uri:i},exports:o,require:a};s[i]=Promise.all(l.map((e=>c[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-a2b61380"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.1de8b031.css",revision:null},{url:"assets/app.5084f411.js",revision:null},{url:"assets/Demo.7d70daf9.js",revision:null},{url:"assets/palette.5ba4c443.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/README.031025c8.js",revision:null},{url:"assets/README.087ef51d.js",revision:null},{url:"assets/README.16a10268.js",revision:null},{url:"assets/README.236da931.js",revision:null},{url:"assets/README.26fb85d1.js",revision:null},{url:"assets/README.2936ea32.js",revision:null},{url:"assets/README.29855891.js",revision:null},{url:"assets/README.2f5c3a65.js",revision:null},{url:"assets/README.3626b502.js",revision:null},{url:"assets/README.4a932bab.js",revision:null},{url:"assets/README.52cdbc16.js",revision:null},{url:"assets/README.59b20fdf.js",revision:null},{url:"assets/README.640dd85e.js",revision:null},{url:"assets/README.6807bf4c.js",revision:null},{url:"assets/README.69723055.js",revision:null},{url:"assets/README.79930b81.js",revision:null},{url:"assets/README.7a91e19f.js",revision:null},{url:"assets/README.7c1cfca7.js",revision:null},{url:"assets/README.7dfdae67.js",revision:null},{url:"assets/README.7e7632e2.js",revision:null},{url:"assets/README.9539cee5.js",revision:null},{url:"assets/README.97c4ee53.js",revision:null},{url:"assets/README.9d8fe2a0.js",revision:null},{url:"assets/README.9e06915e.js",revision:null},{url:"assets/README.a38c0719.js",revision:null},{url:"assets/README.a99b4286.js",revision:null},{url:"assets/README.ad32a336.js",revision:null},{url:"assets/README.b246efca.js",revision:null},{url:"assets/README.b63229f6.js",revision:null},{url:"assets/README.b687672b.js",revision:null},{url:"assets/README.b802ac8c.js",revision:null},{url:"assets/README.bf40a41a.js",revision:null},{url:"assets/README.c0a349ac.js",revision:null},{url:"assets/README.c8c8ecc8.js",revision:null},{url:"assets/README.ccdf5e87.js",revision:null},{url:"assets/README.d913b17b.js",revision:null},{url:"assets/README.d9e1e9ed.js",revision:null},{url:"assets/README.db33964b.js",revision:null},{url:"assets/README.ebe87fc7.js",revision:null},{url:"assets/README.f07b26e5.js",revision:null},{url:"assets/README.f4c5b722.js",revision:null},{url:"assets/README.f50096a1.js",revision:null},{url:"assets/start.ac222172.js",revision:null},{url:"assets/vendor.17b08436.js",revision:null},{url:"components/alert.html",revision:"14007ce0d003884dd6af3982f5210a1a"},{url:"components/anchor.html",revision:"ff8847d25d98c663d5edf04e22f41411"},{url:"components/avatar.html",revision:"5597f7cedc1ceaf940da85f026e2a16a"},{url:"components/badge.html",revision:"516449163a345a3637eef2c57f96e791"},{url:"components/breadcrumb.html",revision:"6c11cbf6bbb1cbdbdf8172e30153d96e"},{url:"components/button.html",revision:"ff32d99981425198119cbc6829411d66"},{url:"components/card.html",revision:"ebd90bfdd462068a6ef5ed884a875e7b"},{url:"components/carousel.html",revision:"6ec0ddf21a99d905d13f25ec5c07b227"},{url:"components/checkbox.html",revision:"9b6a03797d21444d1a93b97863b27cd5"},{url:"components/code.html",revision:"c8a2f7faf77806059406d7e7d451ad52"},{url:"components/device.html",revision:"1a6c5b5017aa2f1e5fc3816a5d06d0f2"},{url:"components/dialog.html",revision:"29ebfed6cae37bfeeed10febd2b06c20"},{url:"components/divider.html",revision:"c3b064704ddf807cc1f0887ffd332f30"},{url:"components/drag.html",revision:"7487e41249ef3734b3f0d4feb64e9a14"},{url:"components/drawer.html",revision:"bbc2cd7a675dda01b58079b08f765b3c"},{url:"components/form.html",revision:"7bc4b2d22dabd5dfc65aca2a87fec223"},{url:"components/grid.html",revision:"617d49a01c6ea9460073cc10eba30cb1"},{url:"components/hover.html",revision:"cf87463ed914c6f9ad70f75e8af24bad"},{url:"components/icon.html",revision:"818bcc5a2d0faf0a7e216ff77ac618f2"},{url:"components/image.html",revision:"b3993670c9bc7d367c93f74de0cc2dea"},{url:"components/input.html",revision:"e424ff5b2fdcf89aafe8205b59c1d2b9"},{url:"components/layout.html",revision:"c1c1fd86de4db3c6762869bdbb0fed79"},{url:"components/lazy.html",revision:"6ef4614edde5ab0dc9081ac51c7fc9f9"},{url:"components/link.html",revision:"029e948797fad167d52ce880452619ab"},{url:"components/list.html",revision:"502e22aef4bdbf810111235ba32c541c"},{url:"components/menu.html",revision:"356d5fc527c398d14600d8a28111f822"},{url:"components/message-provider.html",revision:"f3cae06f9ba30f20863699e7077a9c06"},{url:"components/notification-provider.html",revision:"2d071b72cee4d23ac1979092374d71ad"},{url:"components/overlay.html",revision:"a056addaedab549166bc83a695f8ca1b"},{url:"components/pagination.html",revision:"da7666e39fa99f043e64335e29287f52"},{url:"components/paper.html",revision:"2c6825a10da0529fa273d01efa552d76"},{url:"components/progress.html",revision:"72053ae426f5618b5df4537ee64ecb28"},{url:"components/radio.html",revision:"5d884760d98cb007b027060fc3919ab2"},{url:"components/responsive.html",revision:"44f91ba9c4bd1b050607c01a5b91a147"},{url:"components/select.html",revision:"01f1a684a1b2efe91d0bdfbc2b8b4268"},{url:"components/spacer.html",revision:"0919373519ff7d95a4b20e7b88f66760"},{url:"components/switch.html",revision:"636472276e5718e123bbc95bad1ba46e"},{url:"components/table.html",revision:"08bfdbdfff2efd56278a4b0657a1c966"},{url:"components/tag.html",revision:"5fbcca99e5ee7fd61c73f2a85deade0a"},{url:"components/tooltip.html",revision:"4c0781aec7ddc4d9fce7152ad862628c"},{url:"components/transition.html",revision:"7863f162d109947cee18dd376d5ffb9b"},{url:"components/typography.html",revision:"da6f3ec19a1839532ca5208dc8ec63a4"},{url:"index.html",revision:"c9c888d1f677ab2e6c381767f2f3878e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"zh/palette.html",revision:"52680d07f5b6b8e9fb76b21201add1cb"},{url:"zh/start.html",revision:"e93e1fa0fba301b7b00c64c6b27e5412"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"a4ea2f8ab357e0db49c7306898450c51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
