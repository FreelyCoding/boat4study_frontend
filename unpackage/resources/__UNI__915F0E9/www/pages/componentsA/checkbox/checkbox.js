!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1277)}({0:function(e,t,o){"use strict";function i(e,t,o,i,n,c,r,l,a,u){var s,d="function"==typeof e?e.options:e;if(a){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in a)p.call(a,f)&&!p.call(d.components,f)&&(d.components[f]=a[f])}if(u&&("function"==typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(d.mixins||(d.mixins=[])).push(u)),t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),i&&(d.functional=!0),c&&(d._scopeId="data-v-"+c),r?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=s):n&&(s=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var h=d.render;d.render=function(e,t){return s.call(t),h(e,t)}}else{var b=d.beforeCreate;d.beforeCreate=b?[].concat(b,s):[s]}return{exports:e,options:d}}o.d(t,"a",(function(){return i}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,o){"use strict";o.r(t);var i=o(655),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},1277:function(e,t,o){"use strict";o.r(t);o(14),o(16);var i=o(506);i.default.mpType="page",i.default.route="pages/componentsA/checkbox/checkbox",i.default.el="#root",new Vue(i.default)},14:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(15).default,Vue.prototype.__$appStyle__)},15:function(e,t,o){"use strict";o.r(t);var i=o(2),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},16:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},2:function(e,t){e.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},26:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"\ue693","uicon-column-line":"\ue68e","uicon-checkbox-mark":"\ue807","uicon-folder":"\ue7f5","uicon-movie":"\ue7f6","uicon-star-fill":"\ue669","uicon-star":"\ue65f","uicon-phone-fill":"\ue64f","uicon-phone":"\ue622","uicon-apple-fill":"\ue881","uicon-chrome-circle-fill":"\ue885","uicon-backspace":"\ue67b","uicon-attach":"\ue632","uicon-cut":"\ue948","uicon-empty-car":"\ue602","uicon-empty-coupon":"\ue682","uicon-empty-address":"\ue646","uicon-empty-favor":"\ue67c","uicon-empty-permission":"\ue686","uicon-empty-news":"\ue687","uicon-empty-search":"\ue664","uicon-github-circle-fill":"\ue887","uicon-rmb":"\ue608","uicon-person-delete-fill":"\ue66a","uicon-reload":"\ue788","uicon-order":"\ue68f","uicon-server-man":"\ue6bc","uicon-search":"\ue62a","uicon-fingerprint":"\ue955","uicon-more-dot-fill":"\ue630","uicon-scan":"\ue662","uicon-share-square":"\ue60b","uicon-map":"\ue61d","uicon-map-fill":"\ue64e","uicon-tags":"\ue629","uicon-tags-fill":"\ue651","uicon-bookmark-fill":"\ue63b","uicon-bookmark":"\ue60a","uicon-eye":"\ue613","uicon-eye-fill":"\ue641","uicon-mic":"\ue64a","uicon-mic-off":"\ue649","uicon-calendar":"\ue66e","uicon-calendar-fill":"\ue634","uicon-trash":"\ue623","uicon-trash-fill":"\ue658","uicon-play-left":"\ue66d","uicon-play-right":"\ue610","uicon-minus":"\ue618","uicon-plus":"\ue62d","uicon-info":"\ue653","uicon-info-circle":"\ue7d2","uicon-info-circle-fill":"\ue64b","uicon-question":"\ue715","uicon-error":"\ue6d3","uicon-close":"\ue685","uicon-checkmark":"\ue6a8","uicon-android-circle-fill":"\ue67e","uicon-android-fill":"\ue67d","uicon-ie":"\ue87b","uicon-IE-circle-fill":"\ue889","uicon-google":"\ue87a","uicon-google-circle-fill":"\ue88a","uicon-setting-fill":"\ue872","uicon-setting":"\ue61f","uicon-minus-square-fill":"\ue855","uicon-plus-square-fill":"\ue856","uicon-heart":"\ue7df","uicon-heart-fill":"\ue851","uicon-camera":"\ue7d7","uicon-camera-fill":"\ue870","uicon-more-circle":"\ue63e","uicon-more-circle-fill":"\ue645","uicon-chat":"\ue620","uicon-chat-fill":"\ue61e","uicon-bag-fill":"\ue617","uicon-bag":"\ue619","uicon-error-circle-fill":"\ue62c","uicon-error-circle":"\ue624","uicon-close-circle":"\ue63f","uicon-close-circle-fill":"\ue637","uicon-checkmark-circle":"\ue63d","uicon-checkmark-circle-fill":"\ue635","uicon-question-circle-fill":"\ue666","uicon-question-circle":"\ue625","uicon-share":"\ue631","uicon-share-fill":"\ue65e","uicon-shopping-cart":"\ue621","uicon-shopping-cart-fill":"\ue65d","uicon-bell":"\ue609","uicon-bell-fill":"\ue640","uicon-list":"\ue650","uicon-list-dot":"\ue616","uicon-zhihu":"\ue6ba","uicon-zhihu-circle-fill":"\ue709","uicon-zhifubao":"\ue6b9","uicon-zhifubao-circle-fill":"\ue6b8","uicon-weixin-circle-fill":"\ue6b1","uicon-weixin-fill":"\ue6b2","uicon-twitter-circle-fill":"\ue6ab","uicon-twitter":"\ue6aa","uicon-taobao-circle-fill":"\ue6a7","uicon-taobao":"\ue6a6","uicon-weibo-circle-fill":"\ue6a5","uicon-weibo":"\ue6a4","uicon-qq-fill":"\ue6a1","uicon-qq-circle-fill":"\ue6a0","uicon-moments-circel-fill":"\ue69a","uicon-moments":"\ue69b","uicon-qzone":"\ue695","uicon-qzone-circle-fill":"\ue696","uicon-baidu-circle-fill":"\ue680","uicon-baidu":"\ue681","uicon-facebook-circle-fill":"\ue68a","uicon-facebook":"\ue689","uicon-car":"\ue60c","uicon-car-fill":"\ue636","uicon-warning-fill":"\ue64d","uicon-warning":"\ue694","uicon-clock-fill":"\ue638","uicon-clock":"\ue60f","uicon-edit-pen":"\ue612","uicon-edit-pen-fill":"\ue66b","uicon-email":"\ue611","uicon-email-fill":"\ue642","uicon-minus-circle":"\ue61b","uicon-minus-circle-fill":"\ue652","uicon-plus-circle":"\ue62e","uicon-plus-circle-fill":"\ue661","uicon-file-text":"\ue663","uicon-file-text-fill":"\ue665","uicon-pushpin":"\ue7e3","uicon-pushpin-fill":"\ue86e","uicon-grid":"\ue673","uicon-grid-fill":"\ue678","uicon-play-circle":"\ue647","uicon-play-circle-fill":"\ue655","uicon-pause-circle-fill":"\ue654","uicon-pause":"\ue8fa","uicon-pause-circle":"\ue643","uicon-eye-off":"\ue648","uicon-eye-off-outline":"\ue62b","uicon-gift-fill":"\ue65c","uicon-gift":"\ue65b","uicon-rmb-circle-fill":"\ue657","uicon-rmb-circle":"\ue677","uicon-kefu-ermai":"\ue656","uicon-server-fill":"\ue751","uicon-coupon-fill":"\ue8c4","uicon-coupon":"\ue8ae","uicon-integral":"\ue704","uicon-integral-fill":"\ue703","uicon-home-fill":"\ue964","uicon-home":"\ue965","uicon-hourglass-half-fill":"\ue966","uicon-hourglass":"\ue967","uicon-account":"\ue628","uicon-plus-people-fill":"\ue626","uicon-minus-people-fill":"\ue615","uicon-account-fill":"\ue614","uicon-thumb-down-fill":"\ue726","uicon-thumb-down":"\ue727","uicon-thumb-up":"\ue733","uicon-thumb-up-fill":"\ue72f","uicon-lock-fill":"\ue979","uicon-lock-open":"\ue973","uicon-lock-opened-fill":"\ue974","uicon-lock":"\ue97a","uicon-red-packet-fill":"\ue690","uicon-photo-fill":"\ue98b","uicon-photo":"\ue98d","uicon-volume-off-fill":"\ue659","uicon-volume-off":"\ue644","uicon-volume-fill":"\ue670","uicon-volume":"\ue633","uicon-red-packet":"\ue691","uicon-download":"\ue63c","uicon-arrow-up-fill":"\ue6b0","uicon-arrow-down-fill":"\ue600","uicon-play-left-fill":"\ue675","uicon-play-right-fill":"\ue676","uicon-rewind-left-fill":"\ue679","uicon-rewind-right-fill":"\ue67a","uicon-arrow-downward":"\ue604","uicon-arrow-leftward":"\ue601","uicon-arrow-rightward":"\ue603","uicon-arrow-upward":"\ue607","uicon-arrow-down":"\ue60d","uicon-arrow-right":"\ue605","uicon-arrow-left":"\ue60e","uicon-arrow-up":"\ue606","uicon-skip-back-left":"\ue674","uicon-skip-forward-right":"\ue672","uicon-rewind-right":"\ue66f","uicon-rewind-left":"\ue671","uicon-arrow-right-double":"\ue68d","uicon-arrow-left-double":"\ue68c","uicon-wifi-off":"\ue668","uicon-wifi":"\ue667","uicon-empty-data":"\ue62f","uicon-empty-history":"\ue684","uicon-empty-list":"\ue68b","uicon-empty-page":"\ue627","uicon-empty-order":"\ue639","uicon-man":"\ue697","uicon-woman":"\ue69c","uicon-man-add":"\ue61c","uicon-man-add-fill":"\ue64c","uicon-man-delete":"\ue61a","uicon-man-delete-fill":"\ue66a","uicon-zh":"\ue70a","uicon-en":"\ue692"}},27:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=i},280:function(e,t,o){"use strict";o.r(t);var i=o(281),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},281:function(e,t,o){"use strict";var i=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(459)),c={name:"u-checkbox-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{parentData:function(){return[this.value,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass:function(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:function(){this.children.length&&this.children.map((function(e){"function"==typeof e.init&&e.init()}))}},data:function(){return{}},created:function(){this.children=[]},methods:{unCheckedOther:function(e){var t=[];this.children.map((function(e){e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("input",t)}}};t.default=c},282:function(e,t){e.exports={"u-checkbox-group--row":{flexDirection:"row"},"u-checkbox-group--column":{flexDirection:"column"},"@VERSION":2}},283:function(e,t,o){"use strict";o.r(t);var i=o(284),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},284:function(e,t,o){"use strict";var i=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(461)),c={name:"u-checkbox",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle:function(){var e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("\u68c0\u6d4b\u5230\u60a8\u5c06borderBottom\u8bbe\u7f6e\u4e3atrue\uff0c\u9700\u8981\u540c\u65f6\u5c06u-checkbox-group\u7684placement\u8bbe\u7f6e\u4e3acolumn\u624d\u6709\u6548"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.updateParentData(),this.parent||uni.$u.error("u-checkbox\u5fc5\u987b\u642d\u914du-checkbox-group\u7ec4\u4ef6\u4f7f\u7528"),this.checked?this.isChecked=!0:uni.$u.test.array(this.parentData.value)&&(this.isChecked=this.parentData.value.some((function(t){return t===e.name})))},updateParentData:function(){this.getParentData("u-checkbox-group")},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var e=this;this.$emit("change",this.isChecked),this.$nextTick((function(){uni.$u.formValidate(e,"change")}))},setRadioCheckedStatus:function(){this.isChecked=!this.isChecked,this.emitEvent(),"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked:function(){this.isChecked=this.checked}}};t.default=c},285:function(e,t){e.exports={"u-checkbox":{overflow:"hidden",flexDirection:"row",alignItems:"center"},"u-checkbox-label--left":{flexDirection:"row"},"u-checkbox-label--right":{flexDirection:"row-reverse",justifyContent:"space-between"},"u-checkbox__icon-wrap":{color:"rgba(0,0,0,0)",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",marginRight:"6",fontSize:"6",borderWidth:"1",borderColor:"#c8c9cc",borderStyle:"solid"},"u-checkbox__icon-wrap--circle":{borderRadius:100},"u-checkbox__icon-wrap--square":{borderRadius:"3"},"u-checkbox__icon-wrap--checked":{color:"#ffffff",backgroundColor:"#FF0000",borderColor:"#2979ff"},"u-checkbox__icon-wrap--disabled":{backgroundColor:"#ebedf0"},"u-checkbox__icon-wrap--disabled--checked":{color:"#c8c9cc"},"u-checkbox__label":{marginLeft:"5",marginRight:"12",color:"#606266",fontSize:"15"},"u-checkbox__label--disabled":{color:"#c8c9cc"},"@VERSION":2}},3:function(e,t,o){"use strict";o.r(t);var i=o(4),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},302:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;return(this._self._c||e)("view",{staticClass:["u-checkbox-group"],class:this.bemClass},[this._t("default")],2)},n=[]},303:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return i}));var i={uIcon:o(8).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-checkbox"],class:["u-checkbox-label--"+e.parentData.iconPlacement,e.parentData.borderBottom&&"column"===e.parentData.placement&&"u-border-bottom"],style:[e.checkboxStyle],on:{click:e.wrapperClickHandler}},[o("view",{staticClass:["u-checkbox__icon-wrap"],class:e.iconClasses,style:[e.iconWrapStyle],on:{click:e.iconClickHandler}},[e._t("icon",[o("u-icon",{staticClass:["u-checkbox__icon-wrap__icon"],attrs:{name:"checkbox-mark",size:e.elIconSize,color:e.elIconColor}})])],2),o("u-text",{style:{color:e.elDisabled?e.elInactiveColor:e.elLabelColor,fontSize:e.elLabelSize,lineHeight:e.elLabelSize},appendAsTree:!0,attrs:{append:"tree"},on:{click:e.labelClickHandler}},[e._v(e._s(e.label))])])},c=[]},4:function(e,t,o){"use strict";var i=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(26)),c=i(o(27));weex.requireModule("dom").addRule("fontFace",{fontFamily:"uicon-iconfont",src:"url('".concat("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf","')")});var r={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,c.default],computed:{uClasses:function(){var e=[];return e.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&e.push("u-icon__icon--"+this.color),e},iconStyle:function(){var e={};return e={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(e.color=this.color),e},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var e={};return e.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),e.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),e},icon:function(){return n.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(e){this.$emit("click",this.index),this.stop&&this.preventEvent(e)}}};t.default=r},430:function(e,t,o){"use strict";o.r(t);var i=o(282),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},431:function(e,t,o){"use strict";o.r(t);var i=o(285),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},458:function(e,t,o){"use strict";o.r(t);var i=o(302),n=o(280);for(var c in n)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(c);var r=o(0);var l=Object(r.a)(n.default,i.b,i.c,!1,null,"7974943c","0632821f",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(430).default,this.options.style):Object.assign(this.options.style,o(430).default)}).call(l),t.default=l.exports},459:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:String,default:uni.$u.props.checkboxGroup.name},value:{type:Array,default:uni.$u.props.checkboxGroup.value},shape:{type:String,default:uni.$u.props.checkboxGroup.shape},disabled:{type:Boolean,default:uni.$u.props.checkboxGroup.disabled},activeColor:{type:String,default:uni.$u.props.checkboxGroup.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkboxGroup.inactiveColor},size:{type:[String,Number],default:uni.$u.props.checkboxGroup.size},placement:{type:String,default:uni.$u.props.checkboxGroup.placement},labelSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.labelSize},labelColor:{type:[String],default:uni.$u.props.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:uni.$u.props.checkboxGroup.labelDisabled},iconColor:{type:String,default:uni.$u.props.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.iconSize},iconPlacement:{type:String,default:uni.$u.props.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:uni.$u.props.checkboxGroup.borderBottom}}};t.default=i},460:function(e,t,o){"use strict";o.r(t);var i=o(303),n=o(283);for(var c in n)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(c);var r=o(0);var l=Object(r.a)(n.default,i.b,i.c,!1,null,"66679f78","7bdfc5c2",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(431).default,this.options.style):Object.assign(this.options.style,o(431).default)}).call(l),t.default=l.exports},461:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:[String,Number,Boolean],default:uni.$u.props.checkbox.name},shape:{type:String,default:uni.$u.props.checkbox.shape},size:{type:[String,Number],default:uni.$u.props.checkbox.size},checked:{type:Boolean,default:uni.$u.props.checkbox.checked},disabled:{type:[String,Boolean],default:uni.$u.props.checkbox.disabled},activeColor:{type:String,default:uni.$u.props.checkbox.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkbox.inactiveColor},iconSize:{type:[String,Number],default:uni.$u.props.checkbox.iconSize},iconColor:{type:String,default:uni.$u.props.checkbox.iconColor},label:{type:[String,Number],default:uni.$u.props.checkbox.label},labelSize:{type:[String,Number],default:uni.$u.props.checkbox.labelSize},labelColor:{type:String,default:uni.$u.props.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:uni.$u.props.checkbox.labelDisabled}}};t.default=i},5:function(e,t){e.exports={"u-icon":{alignItems:"center"},"u-icon--left":{flexDirection:"row-reverse",alignItems:"center"},"u-icon--right":{flexDirection:"row",alignItems:"center"},"u-icon--top":{flexDirection:"column-reverse",justifyContent:"center"},"u-icon--bottom":{flexDirection:"column",justifyContent:"center"},"u-icon__icon":{fontFamily:"uicon-iconfont",position:"relative",flexDirection:"row",alignItems:"center"},"u-icon__icon--primary":{color:"#3c9cff"},"u-icon__icon--success":{color:"#5ac725"},"u-icon__icon--error":{color:"#f56c6c"},"u-icon__icon--warning":{color:"#f9ae3d"},"u-icon__icon--info":{color:"#909399"},"@VERSION":2}},506:function(e,t,o){"use strict";var i=o(962),n=o(653),c=o(0);var r=Object(c.a)(n.default,i.b,i.c,!1,null,null,"5b5f4163",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(1151).default,this.options.style):Object.assign(this.options.style,o(1151).default)}).call(r),t.default=r.exports},6:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-icon"],class:["u-icon--"+e.labelPos],on:{click:e.clickHandler}},[e.isImg?o("u-image",{staticClass:["u-icon__img"],style:[e.imgStyle,e.$u.addStyle(e.customStyle)],attrs:{src:e.name,mode:e.imgMode}}):o("u-text",{staticClass:["u-icon__icon"],class:e.uClasses,style:[e.iconStyle,e.$u.addStyle(e.customStyle)],appendAsTree:!0,attrs:{hoverClass:e.hoverClass,append:"tree"}},[e._v(e._s(e.icon))]),""!==e.label?o("u-text",{staticClass:["u-icon__label"],style:{color:e.labelColor,fontSize:e.$u.addUnit(e.labelSize),marginLeft:"right"==e.labelPos?e.$u.addUnit(e.space):0,marginTop:"bottom"==e.labelPos?e.$u.addUnit(e.space):0,marginRight:"left"==e.labelPos?e.$u.addUnit(e.space):0,marginBottom:"top"==e.labelPos?e.$u.addUnit(e.space):0},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.label))]):e._e()],1)},n=[]},653:function(e,t,o){"use strict";var i=o(654),n=o.n(i);t.default=n.a},654:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{checkboxList1:[{name:"\u82f9\u679c",disabled:!1},{name:"\u9999\u8549",disabled:!1},{name:"\u6a59\u5b50",disabled:!1}],checkboxValue1:["\u82f9\u679c","\u6a59\u5b50"],checkboxList2:[{name:"\u897f\u6e38\u8bb0",disabled:!1},{name:"\u7ea2\u697c\u68a6",disabled:!1},{name:"\u4e09\u56fd\u6f14\u4e49",disabled:!1},{name:"\u6c34\u6d52\u4f20",disabled:!1}],checkboxValue2:["\u897f\u6e38\u8bb0","\u7ea2\u697c\u68a6","\u4e09\u56fd\u6f14\u4e49","\u6c34\u6d52\u4f20"],checkboxList3:[{name:"\u51ac\u74dc",disabled:!1},{name:"\u897f\u74dc",disabled:!1},{name:"\u9ec4\u74dc",disabled:!1},{name:"\u50bb\u74dc",disabled:!1}],checkboxValue3:["\u50bb\u74dc"],checkboxList4:[{name:"\u9ec4\u5ead\u575a",disabled:!1},{name:"\u6b27\u9633\u4fee",disabled:!1},{name:"\u82cf\u5c0f\u5b9d",disabled:!1},{name:"\u738b\u5b89\u77f3",disabled:!1}],checkboxValue4:["\u9ec4\u5ead\u575a","\u6b27\u9633\u4fee","\u738b\u5b89\u77f3"],checkboxList5:[{name:"\u7ea2\u8272",disabled:!1},{name:"\u9ec4\u8272",disabled:!1},{name:"\u7eff\u8272",disabled:!1},{name:"\u84dd\u8272",disabled:!1}],checkboxValue5:["\u7eff\u8272"],checkboxList6:[{name:"\u5c0f\u9e1f",disabled:!1},{name:"\u6e38\u8247",disabled:!1},{name:"\u8f6e\u8239",disabled:!1},{name:"\u98de\u673a",disabled:!1}],checkboxValue6:["\u6e38\u8247","\u8f6e\u8239"],checkboxList7:[{name:"\u6c7d\u8f66",disabled:!1},{name:"\u84b8\u6c7d\u673a",disabled:!1},{name:"\u732a\u8089",disabled:!1},{name:"\u6284\u624b",disabled:!1}],checkboxValue7:["\u6c7d\u8f66","\u84b8\u6c7d\u673a"]}},watch:{checkboxValue1:function(e,t){}},methods:{checkboxChange:function(e){}}}},655:function(e,t){e.exports={"@VERSION":2}},8:function(e,t,o){"use strict";o.r(t);var i=o(6),n=o(3);for(var c in n)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(c);var r=o(0);var l=Object(r.a)(n.default,i.b,i.c,!1,null,"53601e10","75b39042",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(9).default,this.options.style):Object.assign(this.options.style,o(9).default)}).call(l),t.default=l.exports},9:function(e,t,o){"use strict";o.r(t);var i=o(5),n=o.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(c);t.default=n.a},962:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return i}));var i={uCheckboxGroup:o(458).default,uCheckbox:o(460).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u672c\u6848\u4f8b")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u82f9\u679c\u3001\u9999\u8549\u548c\u6a59\u5b50\u54ea\u4e2a\u6700\u751c\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{placement:"column"},on:{change:e.checkboxChange},model:{value:e.checkboxValue1,callback:function(t){e.checkboxValue1=t},expression:"checkboxValue1"}},e._l(e.checkboxList1,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.name,name:e.name}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u81ea\u5b9a\u4e49\u5f62\u72b6")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4e2d\u56fd\u56db\u5927\u540d\u8457\u662f\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{placement:"column",shape:"square"},on:{change:e.checkboxChange},model:{value:e.checkboxValue2,callback:function(t){e.checkboxValue2=t},expression:"checkboxValue2"}},e._l(e.checkboxList2,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.name,name:e.name}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u662f\u5426\u7981\u7528")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4e0b\u9762\u4ec0\u4e48\u4e1c\u897f\u4e0d\u80fd\u5403\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{placement:"column"},on:{change:e.checkboxChange},model:{value:e.checkboxValue3,callback:function(t){e.checkboxValue3=t},expression:"checkboxValue3"}},e._l(e.checkboxList3,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.name,name:e.name,disabled:0===t}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u662f\u5426\u7981\u6b62\u70b9\u51fb\u63d0\u793a\u8bed\u9009\u4e2d\u590d\u9009\u6846")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5317\u5b8b\u56db\u5927\u5bb6\u662f\u8c01\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{placement:"column",labelDisabled:!0},on:{change:e.checkboxChange},model:{value:e.checkboxValue4,callback:function(t){e.checkboxValue4=t},expression:"checkboxValue4"}},e._l(e.checkboxList4,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.name,name:e.name}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u54ea\u4e2a\u989c\u8272\u6700\u597d\u770b\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{placement:"column",activeColor:"#19be6b"},on:{change:e.checkboxChange},model:{value:e.checkboxValue5,callback:function(t){e.checkboxValue5=t},expression:"checkboxValue5"}},e._l(e.checkboxList5,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"8px"},label:e.name,name:e.name}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6a2a\u5411\u6392\u5217\u5f62\u5f0f")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4ec0\u4e48\u4e1c\u897f\u4e0d\u80fd\u98de\uff1f")]),o("view",{staticClass:["u-demo-block__content"]},[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{on:{change:e.checkboxChange},model:{value:e.checkboxValue6,callback:function(t){e.checkboxValue6=t},expression:"checkboxValue6"}},e._l(e.checkboxList6,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginRight:"16px"},label:e.name,name:e.name}})})),1)],1)])]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6a2a\u5411\u4e24\u7aef\u6392\u5217\u5f62\u5f0f")]),o("u-text",{staticClass:["u-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4ec0\u4e48\u4e1c\u897f\u4e0d\u80fd\u5403\uff1f")]),o("view",[o("view",{staticClass:["u-page__checkbox-item"]},[o("u-checkbox-group",{attrs:{borderBottom:!0,placement:"column",iconPlacement:"right"},on:{change:e.checkboxChange},model:{value:e.checkboxValue7,callback:function(t){e.checkboxValue7=t},expression:"checkboxValue7"}},e._l(e.checkboxList7,(function(e,t){return o("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"16px"},label:e.name,name:e.name}})})),1)],1)])])])])},c=[]}});