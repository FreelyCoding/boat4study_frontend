!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1327)}({0:function(e,t,o){"use strict";function i(e,t,o,i,n,r,c,l,a,u){var s,d="function"==typeof e?e.options:e;if(a){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in a)f.call(a,p)&&!f.call(d.components,p)&&(d.components[p]=a[p])}if(u&&("function"==typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(d.mixins||(d.mixins=[])).push(u)),t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),c?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},d._ssrRegister=s):n&&(s=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var h=d.render;d.render=function(e,t){return s.call(t),h(e,t)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,s):[s]}return{exports:e,options:d}}o.d(t,"a",(function(){return i}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1040:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i}));var i={uIcon:o(8).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-search"],style:[{margin:e.margin},e.$u.addStyle(e.customStyle)],on:{click:e.clickHandler}},[o("view",{staticClass:["u-search__content"],style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100px":"4px",borderColor:e.borderColor}},[e.$slots.label||null!==e.label?[e._t("label",[o("u-text",{staticClass:["u-search__content__label"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.label))])])]:e._e(),o("view",{staticClass:["u-search__content__icon"]},[o("u-icon",{attrs:{size:e.searchIconSize,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color},on:{click:e.clickIcon}})],1),o("u-input",{staticClass:["u-search__content__input"],style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor,height:e.$u.addUnit(e.height)},e.inputStyle],attrs:{confirmType:"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,placeholderClass:"u-search__content__input--placeholder",placeholder:e.placeholder,placeholderStyle:"color: "+e.placeholderColor,type:"text"},on:{blur:e.blur,confirm:e.search,input:e.inputChange,focus:e.getFocus}}),e.keyword&&e.clearabled&&e.focused?o("view",{staticClass:["u-search__content__icon","u-search__content__close"],on:{click:e.clear}},[o("u-icon",{attrs:{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"}})],1):e._e()],2),o("u-text",{staticClass:["u-search__action"],class:[(e.showActionBtn||e.show)&&"u-search__action--active"],style:[e.actionStyle],appendAsTree:!0,attrs:{append:"tree"},on:{click:e.custom}},[e._v(e._s(e.actionText))])])},r=[]},1185:function(e,t,o){"use strict";o.r(t);var i=o(761),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},1186:function(e,t,o){"use strict";o.r(t);var i=o(764),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},1327:function(e,t,o){"use strict";o.r(t);o(14),o(16);var i=o(530);i.default.mpType="page",i.default.route="pages/componentsB/search/search",i.default.el="#root",new Vue(i.default)},1328:function(e,t,o){"use strict";o.r(t);var i=o(1040),n=o(759);for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);var c=o(0);var l=Object(c.a)(n.default,i.b,i.c,!1,null,"2d141374","cca4bf02",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(1185).default,this.options.style):Object.assign(this.options.style,o(1185).default)}).call(l),t.default=l.exports},1329:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{shape:{type:String,default:uni.$u.props.search.shape},bgColor:{type:String,default:uni.$u.props.search.bgColor},placeholder:{type:String,default:uni.$u.props.search.placeholder},clearabled:{type:Boolean,default:uni.$u.props.search.clearabled},focus:{type:Boolean,default:uni.$u.props.search.focus},showAction:{type:Boolean,default:uni.$u.props.search.showAction},actionStyle:{type:Object,default:uni.$u.props.search.actionStyle},actionText:{type:String,default:uni.$u.props.search.actionText},inputAlign:{type:String,default:uni.$u.props.search.inputAlign},inputStyle:{type:Object,default:uni.$u.props.search.inputStyle},disabled:{type:Boolean,default:uni.$u.props.search.disabled},borderColor:{type:String,default:uni.$u.props.search.borderColor},searchIconColor:{type:String,default:uni.$u.props.search.searchIconColor},color:{type:String,default:uni.$u.props.search.color},placeholderColor:{type:String,default:uni.$u.props.search.placeholderColor},searchIcon:{type:String,default:uni.$u.props.search.searchIcon},searchIconSize:{type:[Number,String],default:uni.$u.props.search.searchIconSize},margin:{type:String,default:uni.$u.props.search.margin},animation:{type:Boolean,default:uni.$u.props.search.animation},value:{type:String,default:uni.$u.props.search.value},maxlength:{type:[String,Number],default:uni.$u.props.search.maxlength},height:{type:[String,Number],default:uni.$u.props.search.height},label:{type:[String,Number,null],default:uni.$u.props.search.label}}};t.default=i},14:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(15).default,Vue.prototype.__$appStyle__)},15:function(e,t,o){"use strict";o.r(t);var i=o(2),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},16:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},2:function(e,t){e.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},26:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"\ue693","uicon-column-line":"\ue68e","uicon-checkbox-mark":"\ue807","uicon-folder":"\ue7f5","uicon-movie":"\ue7f6","uicon-star-fill":"\ue669","uicon-star":"\ue65f","uicon-phone-fill":"\ue64f","uicon-phone":"\ue622","uicon-apple-fill":"\ue881","uicon-chrome-circle-fill":"\ue885","uicon-backspace":"\ue67b","uicon-attach":"\ue632","uicon-cut":"\ue948","uicon-empty-car":"\ue602","uicon-empty-coupon":"\ue682","uicon-empty-address":"\ue646","uicon-empty-favor":"\ue67c","uicon-empty-permission":"\ue686","uicon-empty-news":"\ue687","uicon-empty-search":"\ue664","uicon-github-circle-fill":"\ue887","uicon-rmb":"\ue608","uicon-person-delete-fill":"\ue66a","uicon-reload":"\ue788","uicon-order":"\ue68f","uicon-server-man":"\ue6bc","uicon-search":"\ue62a","uicon-fingerprint":"\ue955","uicon-more-dot-fill":"\ue630","uicon-scan":"\ue662","uicon-share-square":"\ue60b","uicon-map":"\ue61d","uicon-map-fill":"\ue64e","uicon-tags":"\ue629","uicon-tags-fill":"\ue651","uicon-bookmark-fill":"\ue63b","uicon-bookmark":"\ue60a","uicon-eye":"\ue613","uicon-eye-fill":"\ue641","uicon-mic":"\ue64a","uicon-mic-off":"\ue649","uicon-calendar":"\ue66e","uicon-calendar-fill":"\ue634","uicon-trash":"\ue623","uicon-trash-fill":"\ue658","uicon-play-left":"\ue66d","uicon-play-right":"\ue610","uicon-minus":"\ue618","uicon-plus":"\ue62d","uicon-info":"\ue653","uicon-info-circle":"\ue7d2","uicon-info-circle-fill":"\ue64b","uicon-question":"\ue715","uicon-error":"\ue6d3","uicon-close":"\ue685","uicon-checkmark":"\ue6a8","uicon-android-circle-fill":"\ue67e","uicon-android-fill":"\ue67d","uicon-ie":"\ue87b","uicon-IE-circle-fill":"\ue889","uicon-google":"\ue87a","uicon-google-circle-fill":"\ue88a","uicon-setting-fill":"\ue872","uicon-setting":"\ue61f","uicon-minus-square-fill":"\ue855","uicon-plus-square-fill":"\ue856","uicon-heart":"\ue7df","uicon-heart-fill":"\ue851","uicon-camera":"\ue7d7","uicon-camera-fill":"\ue870","uicon-more-circle":"\ue63e","uicon-more-circle-fill":"\ue645","uicon-chat":"\ue620","uicon-chat-fill":"\ue61e","uicon-bag-fill":"\ue617","uicon-bag":"\ue619","uicon-error-circle-fill":"\ue62c","uicon-error-circle":"\ue624","uicon-close-circle":"\ue63f","uicon-close-circle-fill":"\ue637","uicon-checkmark-circle":"\ue63d","uicon-checkmark-circle-fill":"\ue635","uicon-question-circle-fill":"\ue666","uicon-question-circle":"\ue625","uicon-share":"\ue631","uicon-share-fill":"\ue65e","uicon-shopping-cart":"\ue621","uicon-shopping-cart-fill":"\ue65d","uicon-bell":"\ue609","uicon-bell-fill":"\ue640","uicon-list":"\ue650","uicon-list-dot":"\ue616","uicon-zhihu":"\ue6ba","uicon-zhihu-circle-fill":"\ue709","uicon-zhifubao":"\ue6b9","uicon-zhifubao-circle-fill":"\ue6b8","uicon-weixin-circle-fill":"\ue6b1","uicon-weixin-fill":"\ue6b2","uicon-twitter-circle-fill":"\ue6ab","uicon-twitter":"\ue6aa","uicon-taobao-circle-fill":"\ue6a7","uicon-taobao":"\ue6a6","uicon-weibo-circle-fill":"\ue6a5","uicon-weibo":"\ue6a4","uicon-qq-fill":"\ue6a1","uicon-qq-circle-fill":"\ue6a0","uicon-moments-circel-fill":"\ue69a","uicon-moments":"\ue69b","uicon-qzone":"\ue695","uicon-qzone-circle-fill":"\ue696","uicon-baidu-circle-fill":"\ue680","uicon-baidu":"\ue681","uicon-facebook-circle-fill":"\ue68a","uicon-facebook":"\ue689","uicon-car":"\ue60c","uicon-car-fill":"\ue636","uicon-warning-fill":"\ue64d","uicon-warning":"\ue694","uicon-clock-fill":"\ue638","uicon-clock":"\ue60f","uicon-edit-pen":"\ue612","uicon-edit-pen-fill":"\ue66b","uicon-email":"\ue611","uicon-email-fill":"\ue642","uicon-minus-circle":"\ue61b","uicon-minus-circle-fill":"\ue652","uicon-plus-circle":"\ue62e","uicon-plus-circle-fill":"\ue661","uicon-file-text":"\ue663","uicon-file-text-fill":"\ue665","uicon-pushpin":"\ue7e3","uicon-pushpin-fill":"\ue86e","uicon-grid":"\ue673","uicon-grid-fill":"\ue678","uicon-play-circle":"\ue647","uicon-play-circle-fill":"\ue655","uicon-pause-circle-fill":"\ue654","uicon-pause":"\ue8fa","uicon-pause-circle":"\ue643","uicon-eye-off":"\ue648","uicon-eye-off-outline":"\ue62b","uicon-gift-fill":"\ue65c","uicon-gift":"\ue65b","uicon-rmb-circle-fill":"\ue657","uicon-rmb-circle":"\ue677","uicon-kefu-ermai":"\ue656","uicon-server-fill":"\ue751","uicon-coupon-fill":"\ue8c4","uicon-coupon":"\ue8ae","uicon-integral":"\ue704","uicon-integral-fill":"\ue703","uicon-home-fill":"\ue964","uicon-home":"\ue965","uicon-hourglass-half-fill":"\ue966","uicon-hourglass":"\ue967","uicon-account":"\ue628","uicon-plus-people-fill":"\ue626","uicon-minus-people-fill":"\ue615","uicon-account-fill":"\ue614","uicon-thumb-down-fill":"\ue726","uicon-thumb-down":"\ue727","uicon-thumb-up":"\ue733","uicon-thumb-up-fill":"\ue72f","uicon-lock-fill":"\ue979","uicon-lock-open":"\ue973","uicon-lock-opened-fill":"\ue974","uicon-lock":"\ue97a","uicon-red-packet-fill":"\ue690","uicon-photo-fill":"\ue98b","uicon-photo":"\ue98d","uicon-volume-off-fill":"\ue659","uicon-volume-off":"\ue644","uicon-volume-fill":"\ue670","uicon-volume":"\ue633","uicon-red-packet":"\ue691","uicon-download":"\ue63c","uicon-arrow-up-fill":"\ue6b0","uicon-arrow-down-fill":"\ue600","uicon-play-left-fill":"\ue675","uicon-play-right-fill":"\ue676","uicon-rewind-left-fill":"\ue679","uicon-rewind-right-fill":"\ue67a","uicon-arrow-downward":"\ue604","uicon-arrow-leftward":"\ue601","uicon-arrow-rightward":"\ue603","uicon-arrow-upward":"\ue607","uicon-arrow-down":"\ue60d","uicon-arrow-right":"\ue605","uicon-arrow-left":"\ue60e","uicon-arrow-up":"\ue606","uicon-skip-back-left":"\ue674","uicon-skip-forward-right":"\ue672","uicon-rewind-right":"\ue66f","uicon-rewind-left":"\ue671","uicon-arrow-right-double":"\ue68d","uicon-arrow-left-double":"\ue68c","uicon-wifi-off":"\ue668","uicon-wifi":"\ue667","uicon-empty-data":"\ue62f","uicon-empty-history":"\ue684","uicon-empty-list":"\ue68b","uicon-empty-page":"\ue627","uicon-empty-order":"\ue639","uicon-man":"\ue697","uicon-woman":"\ue69c","uicon-man-add":"\ue61c","uicon-man-add-fill":"\ue64c","uicon-man-delete":"\ue61a","uicon-man-delete-fill":"\ue66a","uicon-zh":"\ue70a","uicon-en":"\ue692"}},27:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=i},28:function(e,t,o){"use strict";function i(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function r(e,t){switch(i(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var c=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[c].apply(console,t);var l=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,r)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=i(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),a="";if(l.length>1){var u=l.pop();a=l.join("---COMMA---"),0===u.indexOf(" at ")?a+=u:a+="---COMMA---"+u}else a=l[0];console[c](a)},t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];console[e].apply(console,o)}},3:function(e,t,o){"use strict";o.r(t);var i=o(4),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},4:function(e,t,o){"use strict";var i=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(26)),r=i(o(27));weex.requireModule("dom").addRule("fontFace",{fontFamily:"uicon-iconfont",src:"url('".concat("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf","')")});var c={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],computed:{uClasses:function(){var e=[];return e.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&e.push("u-icon__icon--"+this.color),e},iconStyle:function(){var e={};return e={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(e.color=this.color),e},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var e={};return e.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),e.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),e},icon:function(){return n.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(e){this.$emit("click",this.index),this.stop&&this.preventEvent(e)}}};t.default=c},5:function(e,t){e.exports={"u-icon":{alignItems:"center"},"u-icon--left":{flexDirection:"row-reverse",alignItems:"center"},"u-icon--right":{flexDirection:"row",alignItems:"center"},"u-icon--top":{flexDirection:"column-reverse",justifyContent:"center"},"u-icon--bottom":{flexDirection:"column",justifyContent:"center"},"u-icon__icon":{fontFamily:"uicon-iconfont",position:"relative",flexDirection:"row",alignItems:"center"},"u-icon__icon--primary":{color:"#3c9cff"},"u-icon__icon--success":{color:"#5ac725"},"u-icon__icon--error":{color:"#f56c6c"},"u-icon__icon--warning":{color:"#f9ae3d"},"u-icon__icon--info":{color:"#909399"},"@VERSION":2}},530:function(e,t,o){"use strict";var i=o(986),n=o(762),r=o(0);var c=Object(r.a)(n.default,i.b,i.c,!1,null,null,"3b853322",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(1186).default,this.options.style):Object.assign(this.options.style,o(1186).default)}).call(c),t.default=c.exports},6:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-icon"],class:["u-icon--"+e.labelPos],on:{click:e.clickHandler}},[e.isImg?o("u-image",{staticClass:["u-icon__img"],style:[e.imgStyle,e.$u.addStyle(e.customStyle)],attrs:{src:e.name,mode:e.imgMode}}):o("u-text",{staticClass:["u-icon__icon"],class:e.uClasses,style:[e.iconStyle,e.$u.addStyle(e.customStyle)],appendAsTree:!0,attrs:{hoverClass:e.hoverClass,append:"tree"}},[e._v(e._s(e.icon))]),""!==e.label?o("u-text",{staticClass:["u-icon__label"],style:{color:e.labelColor,fontSize:e.$u.addUnit(e.labelSize),marginLeft:"right"==e.labelPos?e.$u.addUnit(e.space):0,marginTop:"bottom"==e.labelPos?e.$u.addUnit(e.space):0,marginRight:"left"==e.labelPos?e.$u.addUnit(e.space):0,marginBottom:"top"==e.labelPos?e.$u.addUnit(e.space):0},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.label))]):e._e()],1)},n=[]},759:function(e,t,o){"use strict";o.r(t);var i=o(760),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},760:function(e,t,o){"use strict";var i=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(1329)),r={name:"u-search",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!this.animation&&this.showAction}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")},clickIcon:function(){this.$emit("clickIcon")}}};t.default=r},761:function(e,t){e.exports={"u-search":{flexDirection:"row",alignItems:"center",flex:1},"u-search__content":{flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",flex:1,justifyContent:"space-between",borderWidth:"1",borderColor:"rgba(0,0,0,0)",borderStyle:"solid",overflow:"hidden"},"u-search__content__icon":{flexDirection:"row",alignItems:"center"},"u-search__content__label":{color:"#303133",fontSize:"14",marginTop:0,marginRight:"4",marginBottom:0,marginLeft:"4"},"u-search__content__close":{width:"20",height:"20",borderTopLeftRadius:"100",borderTopRightRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",backgroundColor:"#C6C7CB",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"scale(0.82)"},"u-search__content__input":{flex:1,fontSize:"14",lineHeight:1,marginTop:0,marginRight:"5",marginBottom:0,marginLeft:"5",color:"#303133"},"u-search__content__input--placeholder":{color:"#909193"},"u-search__action":{fontSize:"14",color:"#303133",width:0,overflow:"hidden",transitionProperty:"width",transitionDuration:300,textAlign:"center"},"u-search__action--active":{width:"40",marginLeft:"5"},"@VERSION":2}},762:function(e,t,o){"use strict";var i=o(763),n=o.n(i);t.default=n.a},763:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{value1:"",value2:"\u5929\u5c71\u96ea\u83b2",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"",value13:"",value14:"",value15:""}},watch:{value1:function(e,t){}},methods:{change:function(t){e("log",t," at pages/componentsB/search/search.nvue:200")},clickIcon:function(){uni.$u.toast("\u70b9\u51fb\u4e86\u5de6\u4fa7\u56fe\u6807")}}};t.default=o}).call(this,o(28).default)},764:function(e,t){e.exports={"u-page__tag-item":{flexDirection:"column",flex:1},"m-t-10":{marginTop:"10"},"@VERSION":2}},8:function(e,t,o){"use strict";o.r(t);var i=o(6),n=o(3);for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);var c=o(0);var l=Object(c.a)(n.default,i.b,i.c,!1,null,"53601e10","75b39042",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(9).default,this.options.style):Object.assign(this.options.style,o(9).default)}).call(l),t.default=l.exports},9:function(e,t,o){"use strict";o.r(t);var i=o(5),n=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},986:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i}));var i={uSearch:o(1328).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u7840\u529f\u80fd")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1},on:{change:e.change},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u521d\u59cb\u503c")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u641c\u7d22\u6846\u5f62\u72b6")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,shape:"round"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,shape:"square"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u53f3\u4fa7\u63a7\u4ef6")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7981\u7528\u8f93\u5165\u6846")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{placeholder:"\u8f93\u5165\u6846\u88ab\u7981\u7528,\u53ef\u4ee5\u76d1\u542c\u70b9\u51fb\u4e8b\u4ef6\u8fdb\u884c\u8df3\u8f6c",disabled:!0,showAction:!1}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u70b9\u51fb\u5de6\u4fa7\u56fe\u6807")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1},on:{clickIcon:e.clickIcon},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u641c\u7d22\u6846\u5185\u5bb9\u6c34\u5e73\u5bf9\u9f50")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,inputAlign:"left"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,inputAlign:"center"},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,inputAlign:"right"},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u81ea\u5b9a\u4e49")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,borderColor:"rgb(230, 230, 230)",bgColor:"#fff"},model:{value:e.value10,callback:function(t){e.value10=t},expression:"value10"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,searchIconColor:"#FF0000"},model:{value:e.value11,callback:function(t){e.value11=t},expression:"value11"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,placeholderColor:"#FF0000"},model:{value:e.value12,callback:function(t){e.value12=t},expression:"value12"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{showAction:!1,color:"#FF0000"},model:{value:e.value13,callback:function(t){e.value13=t},expression:"value13"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{label:"\u624b\u673a",showAction:!1},model:{value:e.value14,callback:function(t){e.value14=t},expression:"value14"}})],1)]),o("view",{staticClass:["u-demo-block__content","m-t-10"]},[o("view",{staticClass:["u-page__tag-item"]},[o("u-search",{attrs:{searchIcon:"scan",showAction:!1},model:{value:e.value15,callback:function(t){e.value15=t},expression:"value15"}})],1)])])])])},r=[]}});