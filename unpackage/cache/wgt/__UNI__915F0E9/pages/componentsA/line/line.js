!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1296)}({0:function(e,t,o){"use strict";function r(e,t,o,r,i,n,a,l,u,s){var d,c="function"==typeof e?e.options:e;if(u){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(c.components,p)&&(c.components[p]=u[p])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(c.mixins||(c.mixins=[])).push(s)),t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=d):i&&(d=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(c.functional){c._injectStyles=d;var g=c.render;c.render=function(e,t){return d.call(t),g(e,t)}}else{var b=c.beforeCreate;c.beforeCreate=b?[].concat(b,d):[d]}return{exports:e,options:c}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},10:function(e,t,o){"use strict";o.r(t);var r=o(11),i=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},11:function(e,t,o){"use strict";var r=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(o(71)),n={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{lineStyle:function(){var e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}};t.default=n},1163:function(e,t,o){"use strict";o.r(t);var r=o(695),i=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},12:function(e,t){e.exports={"@VERSION":2}},1296:function(e,t,o){"use strict";o.r(t);o(14),o(16);var r=o(517);r.default.mpType="page",r.default.route="pages/componentsA/line/line",r.default.el="#root",new Vue(r.default)},13:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var r=function(){var e=this.$createElement;return(this._self._c||e)("view",{staticClass:["u-line"],style:[this.lineStyle]})},i=[]},14:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(15).default,Vue.prototype.__$appStyle__)},15:function(e,t,o){"use strict";o.r(t);var r=o(2),i=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},16:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},2:function(e,t){e.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},33:function(e,t,o){"use strict";o.r(t);var r=o(12),i=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},42:function(e,t,o){"use strict";o.r(t);var r=o(13),i=o(10);for(var n in i)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(n);var a=o(0);var l=Object(a.a)(i.default,r.b,r.c,!1,null,"408c4a9a","7495f2a7",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(33).default,this.options.style):Object.assign(this.options.style,o(33).default)}).call(l),t.default=l.exports},517:function(e,t,o){"use strict";var r=o(973),i=o(693),n=o(0);var a=Object(n.a)(i.default,r.b,r.c,!1,null,null,"0cc5a1ca",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(1163).default,this.options.style):Object.assign(this.options.style,o(1163).default)}).call(a),t.default=a.exports},693:function(e,t,o){"use strict";var r=o(694),i=o.n(r);t.default=i.a},694:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{}},methods:{}}},695:function(e,t){e.exports={"u-page__line-item":{marginTop:"5"},"@VERSION":2}},71:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};t.default=r},973:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r}));var r={uLine:o(42).default},i=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["u-page"]},[t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u4f8b")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line")],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{color:"#2979ff"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u957f\u5ea6")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{length:"200"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u65b9\u5411")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{length:"30",color:"#2979ff",direction:"col"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u662f\u5426\u663e\u793a1px\u7c97\u7ebf\u6761")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{hairline:!1}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u7ebf\u6761\u4e0e\u4e0a\u4e0b\u5de6\u53f3\u5143\u7d20\u7684\u95f4\u8ddd")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{margin:"20"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u662f\u5426\u865a\u7ebf")]),t("view",{staticClass:["u-page__line-item"]},[t("u-line",{attrs:{color:"#2979ff",dashed:!0}})],1)])])])},n=[]}});