!function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1270)}({0:function(t,e,r){"use strict";function o(t,e,r,o,i,n,a,l,u,d){var s,c="function"==typeof t?t.options:t;if(u){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(c.components,p)&&(c.components[p]=u[p])}if(d&&("function"==typeof d.beforeCreate&&(d.beforeCreate=[d.beforeCreate]),(d.beforeCreate||(d.beforeCreate=[])).unshift((function(){this[d.__module]=this})),(c.mixins||(c.mixins=[])).push(d)),e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var g=c.render;c.render=function(t,e){return s.call(e),g(t,e)}}else{var y=c.beforeCreate;c.beforeCreate=y?[].concat(y,s):[s]}return{exports:t,options:c}}r.d(e,"a",(function(){return o}))},1:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},10:function(t,e,r){"use strict";r.r(e);var o=r(11),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},11:function(t,e,r){"use strict";var o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(r(71)),n={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"===this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.dashed?"dashed":"solid",t.width=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.dashed?"dashed":"solid",t.height=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=n},1146:function(t,e,r){"use strict";r.r(e);var o=r(640),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},12:function(t,e){t.exports={"@VERSION":2}},1270:function(t,e,r){"use strict";r.r(e);r(14),r(16);var o=r(503);o.default.mpType="page",o.default.route="pages/componentsA/divider/divider",o.default.el="#root",new Vue(o.default)},13:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["u-line"],style:[this.lineStyle]})},i=[]},14:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(15).default,Vue.prototype.__$appStyle__)},15:function(t,e,r){"use strict";r.r(e);var o=r(2),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},16:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},2:function(t,e){t.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},207:function(t,e,r){"use strict";r.r(e);var o=r(208),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},208:function(t,e,r){"use strict";var o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(r(333)),n={name:"u-divider",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{textStyle:function(){var t={};return t.fontSize=uni.$u.addUnit(this.textSize),t.color=this.textColor,t},leftLineStyle:function(){var t={};return"left"===this.textPosition?t.width="80rpx":t.flex=1,t},rightLineStyle:function(){var t={};return"right"===this.textPosition?t.width="80rpx":t.flex=1,t}},methods:{click:function(){this.$emit("click")}}};e.default=n},209:function(t,e){t.exports={"u-divider":{flexDirection:"row",alignItems:"center",marginTop:"15",marginRight:0,marginBottom:"15",marginLeft:0},"u-divider__text":{marginTop:0,marginRight:"15",marginBottom:0,marginLeft:"15"},"u-divider__dot":{fontSize:"12",marginTop:0,marginRight:"12",marginBottom:0,marginLeft:"12",color:"#c0c4cc"},"@VERSION":2}},212:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o}));var o={uLine:r(42).default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:["u-divider"],style:[t.$u.addStyle(t.customStyle)],on:{click:t.click}},[r("u-line",{attrs:{color:t.lineColor,customStyle:t.leftLineStyle,hairline:t.hairline,dashed:t.dashed}}),t.dot?r("u-text",{staticClass:["u-divider__dot"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u25cf")]):t.text?r("u-text",{staticClass:["u-divider__text"],style:[t.textStyle],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))]):t._e(),r("u-line",{attrs:{color:t.lineColor,customStyle:t.rightLineStyle,hairline:t.hairline,dashed:t.dashed}})],1)},n=[]},267:function(t,e,r){"use strict";r.r(e);var o=r(209),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},321:function(t,e,r){"use strict";r.r(e);var o=r(212),i=r(207);for(var n in i)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var l=Object(a.a)(i.default,o.b,o.c,!1,null,"d86a4394","6447bdc9",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(267).default,this.options.style):Object.assign(this.options.style,r(267).default)}).call(l),e.default=l.exports},33:function(t,e,r){"use strict";r.r(e);var o=r(12),i=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=i.a},333:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{dashed:{type:Boolean,default:uni.$u.props.divider.dashed},hairline:{type:Boolean,default:uni.$u.props.divider.hairline},dot:{type:Boolean,default:uni.$u.props.divider.dot},textPosition:{type:String,default:uni.$u.props.divider.textPosition},text:{type:[String,Number],default:uni.$u.props.divider.text},textSize:{type:[String,Number],default:uni.$u.props.divider.textSize},textColor:{type:String,default:uni.$u.props.divider.textColor},lineColor:{type:String,default:uni.$u.props.divider.lineColor}}};e.default=o},42:function(t,e,r){"use strict";r.r(e);var o=r(13),i=r(10);for(var n in i)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(n);var a=r(0);var l=Object(a.a)(i.default,o.b,o.c,!1,null,"408c4a9a","5cfe977f",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(33).default,this.options.style):Object.assign(this.options.style,r(33).default)}).call(l),e.default=l.exports},503:function(t,e,r){"use strict";var o=r(959),i=r(638),n=r(0);var a=Object(n.a)(i.default,o.b,o.c,!1,null,null,"34521949",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(1146).default,this.options.style):Object.assign(this.options.style,r(1146).default)}).call(a),e.default=a.exports},638:function(t,e,r){"use strict";var o=r(639),i=r.n(o);e.default=i.a},639:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},methods:{}}},640:function(t,e){t.exports={"@VERSION":2}},71:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};e.default=o},959:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o}));var o={uDivider:r(321).default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["u-page"]},[e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u4f8b")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u662f\u5426\u865a\u7ebf")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",dashed:!0}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u662f\u5426\u7ec6\u7ebf")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",hairline:!0}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u662f\u5426\u4ee5\u70b9\u4ee3\u66ff\u6587\u5b57")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",dot:!0}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u6587\u672c\u5185\u5bb9\u9760\u5de6")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",textPosition:"left"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u6587\u672c\u5185\u5bb9\u9760\u53f3")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",textPosition:"right"}})],1)]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u6587\u672c\u989c\u8272")]),e("view",[e("u-divider",{attrs:{text:"\u5206\u5272\u7ebf",textColor:"#2979ff",lineColor:"#2979ff"}})],1)])])])},n=[]}});