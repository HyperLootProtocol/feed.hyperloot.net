webpackJsonp([3],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"7spA":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"html{font-size:10px;font-family:Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#222}a,b,h1,h2,strong{font-weight:700}a{color:#f53743;text-decoration:none}::-moz-selection{color:#fff;background:#f53743}::selection{color:#fff;background:#f53743}",""])},EicC:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},F88d:function(t,e,n){"use strict";var r=n("JUrY"),o=n("P+aQ"),a=!1;var i=function(t){a||n("awVZ")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var p=u[f]||c,l={};r.forEach(function(t){void 0!==p[t]&&(l[t]=p[t])});var d={};o.forEach(function(t){"function"==typeof p[t]&&(d[t]=p[t].bind(s))});var h=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:l,on:d},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},Hqea:function(t,e,n){"use strict";var r=n("/5sW"),o=n("VK1f"),a=n.n(o);r.default.use(a.a)},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),p={},l=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(l=t)}),l&&(p=_(l)),"function"!=typeof p){p.modules||(p.modules={});var d=!0,h=!1,m=void 0;try{for(var x,v=i()(f);!(d=(x=v.next()).done);d=!0){var g=x.value,b=g.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var y=b.split(/\//);(t=k(p,y))[b=y.pop()]=_(g),t[b].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!d&&v.return&&v.return()}finally{if(h)throw m}}}var w=p instanceof Function?p:function(){return new u.default.Store(o()({strict:!1},p,{state:p.state instanceof Function?p.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function k(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},k(t.modules[n],e)}},JUrY:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#F53743",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},Lw6j:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("mvHQ"),f=n.n(c),p=n("exGp"),l=n.n(p),d=n("fZjL"),h=n.n(d),m=n("woOf"),x=n.n(m),v=n("/5sW"),g=n("unZF"),b=n("qcny"),y=n("YLfZ"),w=function(){var t=l()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=f()(e.query)!==f()(n.query),this._diffQuery=this._queryChanged?Object(y.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(y.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),_=function(){var t=l()(u.a.mark(function t(e,n,r){var o,a,s,c,f,p,l,d,h=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];C=Object(y.e)(n,e).map(function(t,r){return Object(y.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(y.m)($,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,s=[],(c=Object(y.e)(e,s)).length){t.next=24;break}return t.next=13,S.call(this,c,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof b.a.layout?b.a.layout($.context):b.a.layout);case 17:return f=t.sent,t.next=20,S.call(this,c,$.context,f);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(T(c,e,n)),t.prev=26,t.next=29,S.call(this,c,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(p=c[0].options.layout)&&(p=p($.context)),t.next=37,this.loadLayout(p);case 37:return p=t.sent,t.next=40,S.call(this,c,$.context,p);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,c.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{},store:j}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(y.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==C[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,c=a&&u?30:45;if(a){var f=Object(y.j)(t.options.asyncData,$.context).then(function(e){Object(y.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(f)}if(u){var p=t.options.fetch($.context);p&&(p instanceof i.a||"function"==typeof p.then)||(p=i.a.resolve(p)),p.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(p)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),C=c.map(function(t,n){return Object(y.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),C=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=b.a.layout)&&(d=d($.context)),t.next=63,this.loadLayout(d);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),k=function(){var t=l()(u.a.mark(function t(e){var n,r,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,E=e.router,j=e.store,t.next=5,i.a.all(A(E));case 5:return n=t.sent,r=new v.default($),o=R.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),v.default.nextTick(function(){D(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(T(n,E.currentRoute)),C=E.currentRoute.matched.map(function(t){return Object(y.b)(t.path)(E.currentRoute.params)})),r.$loading={},R.error&&r.error(R.error),E.beforeEach(w.bind(r)),E.beforeEach(_.bind(r)),E.afterEach(z),E.afterEach(F.bind(r)),!R.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:_.call(r,E.currentRoute,E.currentRoute,function(t){if(!t)return z(E.currentRoute,E.currentRoute),q.call(r,E.currentRoute),void a();E.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),C=[],$=void 0,E=void 0,j=void 0,R=window.__NUXT__||{};function T(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=x()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function O(t,e){return R.serverRendered&&e&&Object(y.a)(t,e),t._Ctor=t,t}function A(t){var e=this,n=Object(y.d)(t.options.base,t.options.mode);return Object(y.c)(t.match(n),function(){var t=l()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=O(Object(y.l)(n),R.data?R.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function S(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g.a[t])}),!a)return Object(y.i)(o,e)}function z(t,e){Object(y.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=v.default.extend(t))._Ctor=t,n.components[r]=t),t})}function q(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?b.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function F(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||v.default.nextTick(function(){Object(y.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&C[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)v.default.set(t.$data,r,n[r])}}),q.call(n,t)})}function D(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),E.afterEach(function(e,n){v.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(b.b)().then(k).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||g;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=y,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return C}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return $(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=$,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var p,l=i[f.name];if(null==l){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!e[c].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(p)+"`");a+=(0===d?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?R(l):u(l),!e[c].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');a+=f.prefix+p}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=E.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var p=t[a],l=n[2],d=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var g=null!=l&&null!=p&&p!==l,b="+"===x||"*"===x,y="?"===x||"*"===x,w=n[2]||s,_=h||m;r.push({name:d||o++,prefix:l||"",delimiter:w,optional:y,repeat:b,partial:g,asterisk:!!v,pattern:_?O(_):v?".*":"[^"+T(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),p=n("//Fk"),l=n.n(p),d=n("fZjL"),h=n.n(d),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),g=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e=this;return l.a.all(w(t,function(){var t=f()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=b(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var k=function(){var t=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:y(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,k(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,k(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function $(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},awVZ:function(t,e,n){var r=n("qzJo");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("0d7e5f1c",r,!1,{sourceMap:!1})},ct3O:function(t,e,n){"use strict";var r=n("Lw6j"),o=n("QhKw"),a=!1;var i=function(t){a||n("ps+5")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/:id?",component:s,name:"id"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(1).then(n.bind(null,"CT3Z")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var u=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},mveG:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""])},"ps+5":function(t,e,n){var r=n("EicC");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("3e3f02e7",r,!1,{sourceMap:!1})},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),p=n.n(f),l=n("exGp"),d=n.n(l),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),g=n("mtxM"),b=n("0F0d"),y=n("HBB+"),w=n("WRRc"),_=n("ct3O"),k=n("Hot+"),C=n("yTq1"),$=n("YLfZ"),E=n("J2Ti"),j=n("zQW4"),R=n("Hqea");n.d(e,"a",function(){return _.a});var T=function(){var t=d()(o.a.mark(function t(e){var n,r,a,i,u,f,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(g.a)(e),(r=Object(E.a)(e)).$router=n,a=p()({router:n,store:r,nuxt:{defaultTransition:O,transitions:[O],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},O,{name:t}):c()({},O,t):O}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object($.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object($.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof j.a){t.next=15;break}return t.next=15,Object(j.a)(a.context,l);case 15:if("function"!=typeof R.default){t.next=18;break}return t.next=18,Object(R.default)(a.context,l);case 18:t.next=21;break;case 21:return t.abrupt("return",{app:a,router:n,store:r});case 22:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(b.a.name,b.a),m.default.component(y.a.name,y.a),m.default.component(w.a.name,w.a),m.default.component(k.a.name,k.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var O={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},qzJo:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},uMhA:function(t,e,n){var r=n("mveG");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("72e7ad30",r,!1,{sourceMap:!1})},unZF:function(t,e,n){"use strict";e.a={}},vaFw:function(t,e,n){var r=n("7spA");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("1d9eea5c",r,!1,{sourceMap:!1})},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("//Fk"),o=n.n(r),a=n("Xxa5"),i=n.n(a),s=n("7nRM"),u=n.n(s),c=n("exGp"),f=n.n(c),p=n("Gu7T"),l=n.n(p),d=n("NYxO"),h=n("PJh5"),m=n.n(h),x="*";function v(t){return t.data.children.map(function(t){var e=t.data,n=e.url,r=e.title,o=e.id,a=e.subreddit,i=e.created_utc,s=e.created;return{url:n,title:r,id:o,innerId:"reddit"+x+a+x+o,tag:a,created:s,time:m.a.unix(i).fromNow()}})}e.default=function(){return new d.default.Store({state:{posts:[],post:{},loading:!1,tags:["hyperloot","destiny2","PUBG","FORTnITE","DotA2","leagueoflegends","GlobalOffensive","Overwatch","wow","hearthstone"],after:{}},mutations:{UPDATE_AFTER:function(t,e){var n=e.key,r=e.value;t.after[n]=r},SET_POSTS:function(t,e){t.posts=e},ADD_POSTS:function(t,e){t.posts=[].concat(l()(t.posts),l()(e))},ADD_TAG:function(t,e){t.tags=[].concat(l()(t.tags),[e])},REMOVE_TAG:function(t,e){t.tags=t.tags.filter(function(t){return t!==e})},SET_LOADING:function(t,e){t.loading=e},SET_POST:function(t,e){t.post=e}},actions:{getPost:function(){var t=f()(i.a.mark(function t(e,n){var r,o,a,s,c,f,p=e.commit;return e.state,i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p("SET_LOADING",!0),r=n.split(x),(o=u()(r))[0],a=o.slice(1),s=a.join("/"),t.next=5,this.$axios.get("https://www.reddit.com/r/"+s+".json");case 5:c=t.sent,f=c.data[0].data.children[0].data,p("SET_POST",f),p("SET_LOADING",!1);case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getPosts:function(){var t=f()(i.a.mark(function t(e){var n,r=this,a=e.commit,s=e.state,c=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).more,f=void 0!==c&&c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("SET_LOADING",!0),n=s.tags.map(function(t){var e={tag:t,hot:!0,params:{}};return f||a("SET_POSTS",[]),f&&(e.params.after=s.after[t]),f&&!e.params.after?o.a.resolve():r.$axios.get("https://www.reddit.com/r/"+t+".json",e)}),o.a.all(n).then(function(t){u()(t).slice(0).forEach(function(t){t&&(a("UPDATE_AFTER",{key:t.config.tag,value:t.data.data.after}),a("ADD_POSTS",v(t.data)))})}),a("SET_LOADING",!1);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("uMhA"),u=(n.n(s),n("vaFw")),c=(n.n(u),{_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),f={};e.a={head:{title:"feed",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"msapplication-TileColor",content:"#ffffff"},{name:"theme-color",content:"#ffffff"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon.png"},{rel:"manifest",href:"/site.webmanifest"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#f53743"},{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&f["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=f[e],this.layout},loadLayout:function(t){var e=this;t&&(c["_"+t]||f["_"+t])||(t="default");var n="_"+t;return f[n]?o.a.resolve(f[n]):c[n]().then(function(t){return f[n]=t,delete c[n],f[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},zQW4:function(t,e,n){"use strict";for(var r=n("woOf"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("BO1k"),u=n.n(s),c=n("mtWM"),f=n.n(c),p={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=u()(Array.isArray(n)?n:[n]);!(r=(i=s.next()).done);r=!0){var c=i.value;if(!e)return void delete this.defaults.headers[c][t];this.defaults.headers[c][t]=e}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||i.a.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||i.a.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},l=function(t){p["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},d=["request","delete","get","head","options","post","put","patch"],h=0;h<d.length;h++){l(d[h])}e.a=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?o()({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=f.a.create(n);!function(t){for(var e in p)t[e]=p[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)}}},["T23V"]);