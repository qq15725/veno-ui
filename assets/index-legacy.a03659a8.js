!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy.1349bc2c.js"],(function(t){"use strict";var n;return{setters:[function(e){n=e.a8}],execute:function(){function o(e){e._intersect&&(e._intersect.observer.unobserve(e),delete e._intersect)}t("I",{mounted:function(t,i){if(n){var r=i.modifiers||{},c=i.value,s="object"===e(c)?c:{handler:c,options:{}},u=s.handler,f=s.options,y=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._intersect){var i=e.some((function(e){return e.isIntersecting}));!u||r.quiet&&!t._intersect.init||r.once&&!i&&t._intersect.init||u(i,e,n),i&&r.once?o(t):t._intersect.init=!0}}),f);t._intersect={init:!1,observer:y},y.observe(t)}},unmounted:o})}}}))}();
