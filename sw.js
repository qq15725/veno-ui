if(!self.define){let s,l={};const e=(e,i)=>(e=new URL(e+".js",i).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,a)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let n={};const u=s=>e(s,r),c={module:{uri:r},exports:n,require:u};l[r]=Promise.all(i.map((s=>c[s]||u(s)))).then((s=>(a(...s),n)))}}define(["./workbox-a2b61380"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/alert-legacy.24d0b71f.js",revision:null},{url:"assets/alert.7cfde069.css",revision:null},{url:"assets/alert.a06fd218.js",revision:null},{url:"assets/anchor-legacy.451fed49.js",revision:null},{url:"assets/anchor.9edd2696.js",revision:null},{url:"assets/app-layout-legacy.2bca1431.js",revision:null},{url:"assets/app-layout.2f6c8b44.js",revision:null},{url:"assets/arrow-legacy.a7c48a57.js",revision:null},{url:"assets/arrow.1e5311f5.js",revision:null},{url:"assets/aspect-ratio-legacy.683e8c72.js",revision:null},{url:"assets/aspect-ratio.9f8ab623.js",revision:null},{url:"assets/autogrow-legacy.12f68327.js",revision:null},{url:"assets/autogrow.6874f456.js",revision:null},{url:"assets/autoplay-legacy.bf0ee094.js",revision:null},{url:"assets/autoplay.95735ccd.js",revision:null},{url:"assets/badge-legacy.ad116578.js",revision:null},{url:"assets/badge.2f39d245.js",revision:null},{url:"assets/badge.a9479d05.css",revision:null},{url:"assets/basic-legacy.014a03dc.js",revision:null},{url:"assets/basic-legacy.028cbfca.js",revision:null},{url:"assets/basic-legacy.05043c70.js",revision:null},{url:"assets/basic-legacy.0d2e7ec1.js",revision:null},{url:"assets/basic-legacy.0f582efb.js",revision:null},{url:"assets/basic-legacy.185bdfc8.js",revision:null},{url:"assets/basic-legacy.3501e307.js",revision:null},{url:"assets/basic-legacy.3a7ddc30.js",revision:null},{url:"assets/basic-legacy.3c63cb32.js",revision:null},{url:"assets/basic-legacy.47ce16ca.js",revision:null},{url:"assets/basic-legacy.4b0b54e9.js",revision:null},{url:"assets/basic-legacy.4cabfcfb.js",revision:null},{url:"assets/basic-legacy.576410dc.js",revision:null},{url:"assets/basic-legacy.5d4a2a93.js",revision:null},{url:"assets/basic-legacy.65f4e552.js",revision:null},{url:"assets/basic-legacy.6e29ad87.js",revision:null},{url:"assets/basic-legacy.713941e6.js",revision:null},{url:"assets/basic-legacy.72c138d8.js",revision:null},{url:"assets/basic-legacy.74b26c5d.js",revision:null},{url:"assets/basic-legacy.789000d3.js",revision:null},{url:"assets/basic-legacy.7be279db.js",revision:null},{url:"assets/basic-legacy.864eddb5.js",revision:null},{url:"assets/basic-legacy.89fe5803.js",revision:null},{url:"assets/basic-legacy.9c7960e7.js",revision:null},{url:"assets/basic-legacy.a1a02acf.js",revision:null},{url:"assets/basic-legacy.a311b614.js",revision:null},{url:"assets/basic-legacy.ae9e13f6.js",revision:null},{url:"assets/basic-legacy.bace5d7b.js",revision:null},{url:"assets/basic-legacy.bbb2df6f.js",revision:null},{url:"assets/basic-legacy.c3ea220f.js",revision:null},{url:"assets/basic-legacy.c94471c1.js",revision:null},{url:"assets/basic-legacy.cc3518e7.js",revision:null},{url:"assets/basic-legacy.d6b355f0.js",revision:null},{url:"assets/basic-legacy.dfca046a.js",revision:null},{url:"assets/basic-legacy.e9410f72.js",revision:null},{url:"assets/basic-legacy.ec7a55f5.js",revision:null},{url:"assets/basic-legacy.fa71b985.js",revision:null},{url:"assets/basic.02a864fa.js",revision:null},{url:"assets/basic.0d118930.js",revision:null},{url:"assets/basic.0e0f262b.js",revision:null},{url:"assets/basic.1628085a.js",revision:null},{url:"assets/basic.214e98a8.js",revision:null},{url:"assets/basic.2c44cca6.js",revision:null},{url:"assets/basic.2cb7faae.js",revision:null},{url:"assets/basic.2df78f6f.js",revision:null},{url:"assets/basic.349e3e98.js",revision:null},{url:"assets/basic.405ea7c0.js",revision:null},{url:"assets/basic.42ec19f0.js",revision:null},{url:"assets/basic.55d7afdb.js",revision:null},{url:"assets/basic.5e228fc6.js",revision:null},{url:"assets/basic.62c3196f.js",revision:null},{url:"assets/basic.69151d32.js",revision:null},{url:"assets/basic.6d765777.js",revision:null},{url:"assets/basic.75e15337.js",revision:null},{url:"assets/basic.772bfa7c.js",revision:null},{url:"assets/basic.7ffe4784.css",revision:null},{url:"assets/basic.80869c43.js",revision:null},{url:"assets/basic.88d49725.js",revision:null},{url:"assets/basic.9072fddb.js",revision:null},{url:"assets/basic.932a8953.js",revision:null},{url:"assets/basic.956b7d30.js",revision:null},{url:"assets/basic.96a0ea07.js",revision:null},{url:"assets/basic.a5b86da0.js",revision:null},{url:"assets/basic.a96bdb4e.js",revision:null},{url:"assets/basic.ab7f704f.js",revision:null},{url:"assets/basic.aeaa25ac.js",revision:null},{url:"assets/basic.b7cae66c.js",revision:null},{url:"assets/basic.c1eb99a1.js",revision:null},{url:"assets/basic.c6ad62bb.js",revision:null},{url:"assets/basic.d74332b3.js",revision:null},{url:"assets/basic.dcb7af7b.js",revision:null},{url:"assets/basic.e11910ac.js",revision:null},{url:"assets/basic.e76cdf3a.js",revision:null},{url:"assets/basic.e9815d28.js",revision:null},{url:"assets/basic.e98a7775.js",revision:null},{url:"assets/basic.f5384b15.css",revision:null},{url:"assets/block-legacy.ec0c3383.js",revision:null},{url:"assets/block.42959caf.js",revision:null},{url:"assets/border-legacy.122ab584.js",revision:null},{url:"assets/border.f07cfae1.js",revision:null},{url:"assets/carousel-item-legacy.1e5918bc.js",revision:null},{url:"assets/carousel-item.44c8a7fb.js",revision:null},{url:"assets/carousel-item.5ccf0bbd.css",revision:null},{url:"assets/case1-legacy.52441943.js",revision:null},{url:"assets/case1-legacy.a1dd8c90.js",revision:null},{url:"assets/case1.46b6146f.js",revision:null},{url:"assets/case1.55ea5542.js",revision:null},{url:"assets/checkbox-group-legacy.d766f413.js",revision:null},{url:"assets/checkbox-group.2671b32f.js",revision:null},{url:"assets/checkbox-legacy.af3cd0f7.js",revision:null},{url:"assets/checkbox.6b7bf7d7.js",revision:null},{url:"assets/click-legacy.10b88ae2.js",revision:null},{url:"assets/click.c1d0678f.js",revision:null},{url:"assets/closable-legacy.5cfb5eeb.js",revision:null},{url:"assets/closable.39fd78b8.js",revision:null},{url:"assets/color-legacy.34ca2ad3.js",revision:null},{url:"assets/color-legacy.3c3dcb08.js",revision:null},{url:"assets/color-legacy.4cede982.js",revision:null},{url:"assets/color-legacy.7c26f568.js",revision:null},{url:"assets/color-legacy.aab4e93b.js",revision:null},{url:"assets/color.00051652.js",revision:null},{url:"assets/color.037d9c2b.js",revision:null},{url:"assets/color.3ff30d6e.js",revision:null},{url:"assets/color.e237b26f.js",revision:null},{url:"assets/color.fdc5e704.js",revision:null},{url:"assets/contained-legacy.39a983b7.js",revision:null},{url:"assets/contained.a874b4b1.js",revision:null},{url:"assets/content-legacy.5b8070db.js",revision:null},{url:"assets/content.204378e2.js",revision:null},{url:"assets/cover-legacy.56b55cf1.js",revision:null},{url:"assets/cover.23001718.js",revision:null},{url:"assets/custom-layout-legacy.d2ab06ae.js",revision:null},{url:"assets/custom-layout.830b670a.js",revision:null},{url:"assets/custom-layout.d28d75c1.css",revision:null},{url:"assets/custom-preset-legacy.23309ee7.js",revision:null},{url:"assets/custom-preset.461e5977.js",revision:null},{url:"assets/dashed-legacy.5d169775.js",revision:null},{url:"assets/dashed.d7186985.js",revision:null},{url:"assets/default-slot-legacy.5a386a28.js",revision:null},{url:"assets/default-slot.54f8bfdb.js",revision:null},{url:"assets/density-legacy.2cfdbd89.js",revision:null},{url:"assets/density-legacy.99c44112.js",revision:null},{url:"assets/density-legacy.e28c4857.js",revision:null},{url:"assets/density-legacy.e4d9ca1d.js",revision:null},{url:"assets/density.87b9e724.js",revision:null},{url:"assets/density.cb419b87.js",revision:null},{url:"assets/density.dfac10f2.js",revision:null},{url:"assets/density.eab5a155.js",revision:null},{url:"assets/device-status-bar-legacy.a9c039fe.js",revision:null},{url:"assets/device-status-bar.4fdd7f4d.js",revision:null},{url:"assets/device-status-bar.a3f26e77.css",revision:null},{url:"assets/dialog-legacy.ebd31adc.js",revision:null},{url:"assets/dialog.b6520cc9.js",revision:null},{url:"assets/dialog.c0e5b47f.css",revision:null},{url:"assets/dimension-legacy.6c0fb2ea.js",revision:null},{url:"assets/dimension.3ac7f88d.js",revision:null},{url:"assets/dot-legacy.e0f12b7e.js",revision:null},{url:"assets/dot.1f406532.js",revision:null},{url:"assets/drag-legacy.4238cb51.js",revision:null},{url:"assets/drag-sort-legacy.a41f8996.js",revision:null},{url:"assets/drag-sort.1643e746.js",revision:null},{url:"assets/drag.c63b198b.js",revision:null},{url:"assets/drag.d8f73256.css",revision:null},{url:"assets/elevation-legacy.26027ff3.js",revision:null},{url:"assets/elevation.8c666ffe.js",revision:null},{url:"assets/export-legacy.25ab51a1.js",revision:null},{url:"assets/export.fa68e11f.js",revision:null},{url:"assets/fit-size-legacy.05aec347.js",revision:null},{url:"assets/fit-size.5a376ec3.js",revision:null},{url:"assets/form-control-legacy.6e4ab888.js",revision:null},{url:"assets/form-control.09c3a65a.css",revision:null},{url:"assets/form-control.266be3b7.js",revision:null},{url:"assets/github-tags-legacy.580e5ed3.js",revision:null},{url:"assets/github-tags.13bcddcb.js",revision:null},{url:"assets/group-legacy.397c4355.js",revision:null},{url:"assets/group-legacy.a4ea4fa6.js",revision:null},{url:"assets/group-legacy.c694b387.js",revision:null},{url:"assets/group.1652fc39.js",revision:null},{url:"assets/group.186483bf.js",revision:null},{url:"assets/group.f15aff79.js",revision:null},{url:"assets/gutter-legacy.275ee8f9.js",revision:null},{url:"assets/gutter.869c0f80.js",revision:null},{url:"assets/headers-legacy.a534694e.js",revision:null},{url:"assets/headers.798709cd.js",revision:null},{url:"assets/headers.c3edb03c.css",revision:null},{url:"assets/hide-language-legacy.5b8f5aff.js",revision:null},{url:"assets/hide-language.ee79f310.js",revision:null},{url:"assets/highlight-legacy.5002b45b.js",revision:null},{url:"assets/highlight.c5c0563d.js",revision:null},{url:"assets/highlighted-line-numbers-legacy.1511c1f2.js",revision:null},{url:"assets/highlighted-line-numbers.ef4459e4.js",revision:null},{url:"assets/hover-legacy.a09d560b.js",revision:null},{url:"assets/hover.7dd611b8.js",revision:null},{url:"assets/icon-legacy.377a3162.js",revision:null},{url:"assets/icon-legacy.4da05f15.js",revision:null},{url:"assets/icon-legacy.62dc4560.js",revision:null},{url:"assets/icon-legacy.901a120f.js",revision:null},{url:"assets/icon-legacy.cd96923e.js",revision:null},{url:"assets/icon.19e63d4a.js",revision:null},{url:"assets/icon.33a599af.js",revision:null},{url:"assets/icon.5d62a68f.js",revision:null},{url:"assets/icon.a5b4c172.js",revision:null},{url:"assets/icon.b34251af.js",revision:null},{url:"assets/iconfont-legacy.2e03157a.js",revision:null},{url:"assets/iconfont.3c239316.js",revision:null},{url:"assets/indeterminate-legacy.77f0ee28.js",revision:null},{url:"assets/indeterminate.c549efa3.js",revision:null},{url:"assets/index-legacy.0666a1d5.js",revision:null},{url:"assets/index-legacy.2d31ae95.js",revision:null},{url:"assets/index.147c440f.js",revision:null},{url:"assets/index.1d61429f.css",revision:null},{url:"assets/index.9aa5ad26.js",revision:null},{url:"assets/inline-legacy.d58bf2ba.js",revision:null},{url:"assets/inline.ac2e8f2e.js",revision:null},{url:"assets/input-legacy.a1d5d19d.js",revision:null},{url:"assets/input.05af6e65.js",revision:null},{url:"assets/input.48a933f0.css",revision:null},{url:"assets/label-legacy.c1b7c087.js",revision:null},{url:"assets/label.4e1a4c1f.css",revision:null},{url:"assets/label.e345bff4.js",revision:null},{url:"assets/lazy-legacy.ebe98dce.js",revision:null},{url:"assets/lazy.22bc077f.js",revision:null},{url:"assets/line-numbers-legacy.5772416a.js",revision:null},{url:"assets/line-numbers.e606e164.js",revision:null},{url:"assets/loading-legacy.7908dc9d.js",revision:null},{url:"assets/loading.542548d2.js",revision:null},{url:"assets/location-legacy.343f4ea2.js",revision:null},{url:"assets/location.e671f858.js",revision:null},{url:"assets/max-legacy.53094c7a.js",revision:null},{url:"assets/max.39ff0b38.js",revision:null},{url:"assets/menu-legacy.4d7d6916.js",revision:null},{url:"assets/menu.71749a5f.js",revision:null},{url:"assets/menu.c1c23c1e.css",revision:null},{url:"assets/moveable-legacy.75729ca4.js",revision:null},{url:"assets/moveable-resizable-legacy.c0b9dc25.js",revision:null},{url:"assets/moveable-resizable.aaadcb23.js",revision:null},{url:"assets/moveable.4113e93a.js",revision:null},{url:"assets/nested-legacy.740c2a7e.js",revision:null},{url:"assets/nested.8031d82d.js",revision:null},{url:"assets/outlined-legacy.b705ed62.js",revision:null},{url:"assets/outlined.5b461d4a.js",revision:null},{url:"assets/p-legacy.bc4521b6.js",revision:null},{url:"assets/p.1f8e347b.js",revision:null},{url:"assets/p.315447ad.css",revision:null},{url:"assets/pagination-legacy.a877e5dd.js",revision:null},{url:"assets/pagination.377289c5.js",revision:null},{url:"assets/pagination.d37692db.css",revision:null},{url:"assets/palette-legacy.1b1674d1.js",revision:null},{url:"assets/palette.752ac30b.js",revision:null},{url:"assets/paper-legacy.b9e72451.js",revision:null},{url:"assets/paper.bf3c8535.css",revision:null},{url:"assets/paper.fa91f608.js",revision:null},{url:"assets/personal-card-concise-legacy.65645978.js",revision:null},{url:"assets/personal-card-concise.71e4ff29.js",revision:null},{url:"assets/personal-card-legacy.f49af11b.js",revision:null},{url:"assets/personal-card.cb7ef108.js",revision:null},{url:"assets/polyfills-legacy.85ea2534.js",revision:null},{url:"assets/position-legacy.074ccfec.js",revision:null},{url:"assets/position.024b6939.js",revision:null},{url:"assets/preset-legacy.f3999642.js",revision:null},{url:"assets/preset.dda2235b.js",revision:null},{url:"assets/prism-bash-legacy.bb37e7ef.js",revision:null},{url:"assets/prism-bash.34b24501.js",revision:null},{url:"assets/prism-javascript-legacy.e2873809.js",revision:null},{url:"assets/prism-javascript.a2b7646c.js",revision:null},{url:"assets/prism-markup-legacy.2dda5bc1.js",revision:null},{url:"assets/prism-markup.4088276a.js",revision:null},{url:"assets/prism-typescript-legacy.ad7806ac.js",revision:null},{url:"assets/prism-typescript.e5c6cd75.js",revision:null},{url:"assets/radio-group-legacy.0633e1b3.js",revision:null},{url:"assets/radio-group.f5c3fc39.js",revision:null},{url:"assets/radio-legacy.091c9878.js",revision:null},{url:"assets/radio.d8e050ee.js",revision:null},{url:"assets/README-legacy.04f409d2.js",revision:null},{url:"assets/README-legacy.053b54ea.js",revision:null},{url:"assets/README-legacy.085e7e96.js",revision:null},{url:"assets/README-legacy.08ec91af.js",revision:null},{url:"assets/README-legacy.12cc9442.js",revision:null},{url:"assets/README-legacy.12ceb51a.js",revision:null},{url:"assets/README-legacy.194c11c9.js",revision:null},{url:"assets/README-legacy.25a67ce3.js",revision:null},{url:"assets/README-legacy.29b7f774.js",revision:null},{url:"assets/README-legacy.2bf5c287.js",revision:null},{url:"assets/README-legacy.2d69d03d.js",revision:null},{url:"assets/README-legacy.3b906c73.js",revision:null},{url:"assets/README-legacy.41476cd2.js",revision:null},{url:"assets/README-legacy.44aa8e34.js",revision:null},{url:"assets/README-legacy.44fe9d26.js",revision:null},{url:"assets/README-legacy.46d303cc.js",revision:null},{url:"assets/README-legacy.4884c0a4.js",revision:null},{url:"assets/README-legacy.533fa369.js",revision:null},{url:"assets/README-legacy.807175aa.js",revision:null},{url:"assets/README-legacy.888009fd.js",revision:null},{url:"assets/README-legacy.93d946bf.js",revision:null},{url:"assets/README-legacy.977479d8.js",revision:null},{url:"assets/README-legacy.a4b16221.js",revision:null},{url:"assets/README-legacy.a581d7f7.js",revision:null},{url:"assets/README-legacy.a7bf7494.js",revision:null},{url:"assets/README-legacy.a9f0cc80.js",revision:null},{url:"assets/README-legacy.af7e3fa2.js",revision:null},{url:"assets/README-legacy.b2d34ca4.js",revision:null},{url:"assets/README-legacy.b8469472.js",revision:null},{url:"assets/README-legacy.bdb8d617.js",revision:null},{url:"assets/README-legacy.be428310.js",revision:null},{url:"assets/README-legacy.c5c24925.js",revision:null},{url:"assets/README-legacy.cc3020c7.js",revision:null},{url:"assets/README-legacy.cf47b942.js",revision:null},{url:"assets/README-legacy.d6c87567.js",revision:null},{url:"assets/README-legacy.db55aceb.js",revision:null},{url:"assets/README-legacy.e82244b8.js",revision:null},{url:"assets/README-legacy.ec3a3e7b.js",revision:null},{url:"assets/README-legacy.f8e7640e.js",revision:null},{url:"assets/README-legacy.fad41c22.js",revision:null},{url:"assets/README.18599493.js",revision:null},{url:"assets/README.18a83542.js",revision:null},{url:"assets/README.2b80893a.js",revision:null},{url:"assets/README.39f4cc17.js",revision:null},{url:"assets/README.3ec86744.js",revision:null},{url:"assets/README.41b18c7a.js",revision:null},{url:"assets/README.4285b1ab.js",revision:null},{url:"assets/README.4bdd31a3.js",revision:null},{url:"assets/README.4c1b6568.js",revision:null},{url:"assets/README.4f079963.js",revision:null},{url:"assets/README.56529fa3.js",revision:null},{url:"assets/README.5911324a.js",revision:null},{url:"assets/README.59f39508.js",revision:null},{url:"assets/README.5b3bb9d8.js",revision:null},{url:"assets/README.5ffa9bc6.js",revision:null},{url:"assets/README.639635f2.js",revision:null},{url:"assets/README.65c8a70d.js",revision:null},{url:"assets/README.6a760d06.js",revision:null},{url:"assets/README.6bb75042.js",revision:null},{url:"assets/README.6f88f984.js",revision:null},{url:"assets/README.74320e0f.js",revision:null},{url:"assets/README.744282f2.js",revision:null},{url:"assets/README.79098f13.js",revision:null},{url:"assets/README.80987330.js",revision:null},{url:"assets/README.8bdeeb03.js",revision:null},{url:"assets/README.b1c76bd8.js",revision:null},{url:"assets/README.bc5829af.js",revision:null},{url:"assets/README.c06a6119.js",revision:null},{url:"assets/README.cc0c4e08.js",revision:null},{url:"assets/README.cff72ea3.js",revision:null},{url:"assets/README.d0be6106.js",revision:null},{url:"assets/README.d2b46f92.js",revision:null},{url:"assets/README.d3141efb.js",revision:null},{url:"assets/README.d8ac7601.js",revision:null},{url:"assets/README.db82cdc0.js",revision:null},{url:"assets/README.e0dd4dee.js",revision:null},{url:"assets/README.e143cb68.js",revision:null},{url:"assets/README.f241eea9.js",revision:null},{url:"assets/README.f5886f85.js",revision:null},{url:"assets/README.fed261e0.js",revision:null},{url:"assets/remote-legacy.8bb390a3.js",revision:null},{url:"assets/remote.f36c861a.js",revision:null},{url:"assets/route-legacy.4ccbc806.js",revision:null},{url:"assets/route.de0b3861.js",revision:null},{url:"assets/select-legacy.97ef2682.js",revision:null},{url:"assets/select.87ec75a1.css",revision:null},{url:"assets/select.d192f66f.js",revision:null},{url:"assets/selection-control-legacy.d397dd55.js",revision:null},{url:"assets/selection-control.70961649.js",revision:null},{url:"assets/selection-control.f027a367.css",revision:null},{url:"assets/selection-group-control-legacy.cd3ecd5a.js",revision:null},{url:"assets/selection-group-control.304f1538.css",revision:null},{url:"assets/selection-group-control.b6bf6716.js",revision:null},{url:"assets/separator-legacy.f2ea104d.js",revision:null},{url:"assets/separator.d540942c.js",revision:null},{url:"assets/shape-legacy.3a1989b0.js",revision:null},{url:"assets/shape-legacy.91dd6aaf.js",revision:null},{url:"assets/shape-legacy.bf622e70.js",revision:null},{url:"assets/shape-legacy.c50f770c.js",revision:null},{url:"assets/shape.123ddb31.js",revision:null},{url:"assets/shape.1bac68f0.js",revision:null},{url:"assets/shape.8f3eec1e.js",revision:null},{url:"assets/shape.a756209c.js",revision:null},{url:"assets/size-legacy.08733b4c.js",revision:null},{url:"assets/size-legacy.84c7b4c0.js",revision:null},{url:"assets/size-legacy.867d0af6.js",revision:null},{url:"assets/size-legacy.fde075c0.js",revision:null},{url:"assets/size.092c22f7.js",revision:null},{url:"assets/size.262e6305.js",revision:null},{url:"assets/size.830c5cb2.js",revision:null},{url:"assets/size.c80a7367.js",revision:null},{url:"assets/slot-legacy.ef5adef0.js",revision:null},{url:"assets/slot-legacy.f995900c.js",revision:null},{url:"assets/slot.33f7e5a1.js",revision:null},{url:"assets/slot.71758f04.js",revision:null},{url:"assets/slots-legacy.c83efc57.js",revision:null},{url:"assets/slots.a0cc5b74.js",revision:null},{url:"assets/sort-handle-legacy.fd0b0928.js",revision:null},{url:"assets/sort-handle.0ec1c88d.js",revision:null},{url:"assets/sort-legacy.9da00ef6.js",revision:null},{url:"assets/sort-two-list-legacy.86f6a338.js",revision:null},{url:"assets/sort-two-list.49de15ac.js",revision:null},{url:"assets/sort.6cabce1a.js",revision:null},{url:"assets/start-legacy.a3f0f944.js",revision:null},{url:"assets/start.1f732c50.js",revision:null},{url:"assets/status-bar-legacy.5b654a75.js",revision:null},{url:"assets/status-bar.c914b1dd.js",revision:null},{url:"assets/svg-legacy.3670d95a.js",revision:null},{url:"assets/svg.b43b2608.js",revision:null},{url:"assets/switch-legacy.727b765d.js",revision:null},{url:"assets/switch.754184a8.js",revision:null},{url:"assets/switch.bfaee91a.css",revision:null},{url:"assets/table-legacy.46afcf18.js",revision:null},{url:"assets/table.4b494976.css",revision:null},{url:"assets/table.a9a44aab.js",revision:null},{url:"assets/tag-legacy.a55dbe85.js",revision:null},{url:"assets/tag.0ead49d6.js",revision:null},{url:"assets/tag.5708be26.css",revision:null},{url:"assets/text-legacy.69cfa0a9.js",revision:null},{url:"assets/text.9213f628.js",revision:null},{url:"assets/underline-legacy.0a2c6b54.js",revision:null},{url:"assets/underline.e5c76e20.js",revision:null},{url:"assets/vendor-legacy.182c544c.js",revision:null},{url:"assets/vendor.2cc6d4f3.js",revision:null},{url:"assets/vertical-legacy.02a4cc9b.js",revision:null},{url:"assets/vertical.22756343.js",revision:null},{url:"index.html",revision:"568360ac9c5666f1a089e71751e347cc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"2e64b41803d6bc2be8fc6f1cbd4d4fb1"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"a3f5b8418cb66c79d2fb229559b9f84b"},{url:"pwa-512x512.png",revision:"8a1ce6810ab0e529312678aee8f539de"},{url:"manifest.webmanifest",revision:"c24fe9df9fd7bbe3563746832ea16080"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
