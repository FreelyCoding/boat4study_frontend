!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1376)}({0:function(e,t,o){"use strict";function n(e,t,o,n,r,i,a,l,u,c){var s,d="function"==typeof e?e.options:e;if(u){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in u)p.call(u,f)&&!p.call(d.components,f)&&(d.components[f]=u[f])}if(c&&("function"==typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=s):r&&(s=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(d.functional){d._injectStyles=s;var b=d.render;d.render=function(e,t){return s.call(t),b(e,t)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,s):[s]}return{exports:e,options:d}}o.d(t,"a",(function(){return n}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1003:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var n={uCodeInput:o(1377).default},r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u7840\u4f7f\u7528")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{maxlength:4},on:{change:e.change,finish:e.finish},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6a2a\u7ebf\u6a21\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"line",maxlength:4,bold:!0},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u957f\u5ea6")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{maxlength:6},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u95f4\u8ddd")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7ec6\u8fb9\u6846")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1),o("view",{staticClass:["u-demo-block__content"],staticStyle:{marginTop:"10px"}},[o("u-code-input",{attrs:{mode:"line",space:10,maxlength:4,hairline:!0},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8c03\u6574\u989c\u8272")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0,color:"#f56c6c",borderColor:"#f56c6c"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),o("view",{staticClass:["u-demo-block__content"],staticStyle:{marginTop:"10px"}},[o("u-code-input",{attrs:{mode:"line",size:"30",maxlength:4,hairline:!0,color:"#3c9cff",borderColor:"#3c9cff"},model:{value:e.value10,callback:function(t){e.value10=t},expression:"value10"}})],1)],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u70b9\u6a21\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",dot:!0,space:0,maxlength:4,hairline:!0},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u9884\u7f6e\u5185\u5bb9")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code-input",{attrs:{mode:"box",space:0,maxlength:4,hairline:!0,fontSize:"17"},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1)])])])},i=[]},1052:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-code-input"]},[e._l(e.codeLength,(function(t,n){return o("view",{key:n,staticClass:["u-code-input__item"],style:[e.itemStyle(n)]},[e.dot&&e.codeArray.length>n?o("view",{staticClass:["u-code-input__item__dot"]}):o("u-text",{style:{fontSize:e.$u.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.codeArray[n]))]),"line"===e.mode?o("view",{staticClass:["u-code-input__item__line"],style:[e.lineStyle]}):e._e()])})),o("u-input",{staticClass:["u-code-input__input"],style:{height:e.$u.addUnit(e.size)},attrs:{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:e.inputValue,maxlength:e.maxlength,adjustPosition:e.adjustPosition},on:{input:e.inputHandler,focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1}}})],2)},r=[]},1216:function(e,t,o){"use strict";o.r(t);var n=o(854),r=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t.default=r.a},1376:function(e,t,o){"use strict";o.r(t);o(14),o(16);var n=o(547);n.default.mpType="page",n.default.route="pages/componentsC/codeInput/codeInput",n.default.el="#root",new Vue(n.default)},1377:function(e,t,o){"use strict";o.r(t);var n=o(1052),r=o(852);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);var a=o(0);var l=Object(a.a)(r.default,n.b,n.c,!1,null,"65f78e21","511ad1e7",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(1216).default,this.options.style):Object.assign(this.options.style,o(1216).default)}).call(l),t.default=l.exports},1378:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{adjustPosition:{type:Boolean,default:uni.$u.props.codeInput.adjustPosition},maxlength:{type:[String,Number],default:uni.$u.props.codeInput.maxlength},dot:{type:Boolean,default:uni.$u.props.codeInput.dot},mode:{type:String,default:uni.$u.props.codeInput.mode},hairline:{type:Boolean,default:uni.$u.props.codeInput.hairline},space:{type:[String,Number],default:uni.$u.props.codeInput.space},value:{type:[String,Number],default:uni.$u.props.codeInput.value},focus:{type:Boolean,default:uni.$u.props.codeInput.focus},bold:{type:Boolean,default:uni.$u.props.codeInput.bold},color:{type:String,default:uni.$u.props.codeInput.color},fontSize:{type:[String,Number],default:uni.$u.props.codeInput.fontSize},size:{type:[String,Number],default:uni.$u.props.codeInput.size},disabledKeyboard:{type:Boolean,default:uni.$u.props.codeInput.disabledKeyboard},borderColor:{type:String,default:uni.$u.props.codeInput.borderColor},disabledDot:{type:Boolean,default:uni.$u.props.codeInput.disabledDot}}};t.default=n},14:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(15).default,Vue.prototype.__$appStyle__)},15:function(e,t,o){"use strict";o.r(t);var n=o(2),r=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t.default=r.a},16:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},2:function(e,t){e.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},28:function(e,t,o){"use strict";function n(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function r(){return"string"==typeof __channelId__&&__channelId__}function i(e,t){switch(n(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a=t.shift();if(r())return t.push(t.pop().replace("at ","uni-app:///")),console[a].apply(console,t);var l=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=n(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),u="";if(l.length>1){var c=l.pop();u=l.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=l[0];console[a](u)},t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];console[e].apply(console,o)}},547:function(e,t,o){"use strict";var n=o(1003),r=o(855),i=o(0);var a=Object(i.a)(r.default,n.b,n.c,!1,null,null,"154e5797",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),t.default=a.exports},852:function(e,t,o){"use strict";o.r(t);var n=o(853),r=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t.default=r.a},853:function(e,t,o){"use strict";var n=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o(1378)),i={name:"u-code-input",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{inputValue:"",isFocus:this.focus}},watch:{value:{immediate:!0,handler:function(e){this.inputValue=String(e).substring(0,this.maxlength)}}},computed:{codeLength:function(){return new Array(Number(this.maxlength))},itemStyle:function(){var e=this;return function(t){var o=uni.$u.addUnit,n={width:o(e.size),height:o(e.size)};return"box"===e.mode&&(n.border="".concat(e.hairline?.5:1,"px solid ").concat(e.borderColor),0===uni.$u.getPx(e.space)&&(0===t&&(n.borderTopLeftRadius="3px",n.borderBottomLeftRadius="3px"),t===e.codeLength.length-1&&(n.borderTopRightRadius="3px",n.borderBottomRightRadius="3px"),t!==e.codeLength.length-1&&(n.borderRight="none"))),t!==e.codeLength.length-1?n.marginRight=o(e.space):n.marginRight=0,n}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var e={};return e.height=this.hairline?"2px":"4px",e.width=uni.$u.addUnit(this.size),e.backgroundColor=this.borderColor,e}},methods:{inputHandler:function(e){var t=this,o=e.detail.value;this.inputValue=o,this.disabledDot&&this.$nextTick((function(){t.inputValue=o.replace(".","")})),this.$emit("change",o),this.$emit("input",o),String(o).length>=Number(this.maxlength)&&this.$emit("finish",o)}}};t.default=i},854:function(e,t){e.exports={"u-code-input":{flexDirection:"row",position:"relative",overflow:"hidden"},"u-code-input__item":{flexDirection:"row",justifyContent:"center",alignItems:"center",position:"relative"},"u-code-input__item__text":{fontSize:"15",color:"#606266"},"u-code-input__item__dot":{width:"7",height:"7",borderRadius:"100",backgroundColor:"#606266"},"u-code-input__item__line":{position:"absolute",bottom:0,height:"4",borderRadius:"100",width:"40",backgroundColor:"#606266"},"u-code-input__input":{position:"absolute",left:"-750rpx",width:"1500rpx",top:0,backgroundColor:"rgba(0,0,0,0)",textAlign:"left"},"@VERSION":2}},855:function(e,t,o){"use strict";var n=o(856),r=o.n(n);t.default=r.a},856:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"123",value10:"34"}},methods:{change:function(t){e("log","change",t," at pages/componentsC/codeInput/codeInput.nvue:142")},finish:function(t){e("log","finish",t," at pages/componentsC/codeInput/codeInput.nvue:145")}}};t.default=o}).call(this,o(28).default)}});