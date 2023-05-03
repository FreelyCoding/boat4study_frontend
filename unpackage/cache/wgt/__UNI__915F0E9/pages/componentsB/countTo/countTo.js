/*! For license information please see countTo.js.LICENSE.txt */
!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1330)}({0:function(t,e,r){"use strict";function o(t,e,r,o,n,i,a,u,s,l){var c,d="function"==typeof t?t.options:t;if(s){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in s)f.call(s,p)&&!f.call(d.components,p)&&(d.components[p]=s[p])}if(l&&("function"==typeof l.beforeCreate&&(l.beforeCreate=[l.beforeCreate]),(l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=r,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):n&&(c=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var h=d.render;d.render=function(t,e){return c.call(e),h(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:d}}r.d(e,"a",(function(){return o}))},1:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},1041:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;return(this._self._c||t)("u-text",{staticClass:["u-count-num"],style:{fontSize:this.$u.addUnit(this.fontSize),fontWeight:this.bold?"bold":"normal",color:this.color},appendAsTree:!0,attrs:{append:"tree"}},[this._v(this._s(this.displayValue))])},n=[]},1187:function(t,e,r){"use strict";r.r(e);var o=r(767),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},1188:function(t,e,r){"use strict";r.r(e);var o=r(770),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},1330:function(t,e,r){"use strict";r.r(e);r(14),r(16);var o=r(531);o.default.mpType="page",o.default.route="pages/componentsB/countTo/countTo",o.default.el="#root",new Vue(o.default)},1331:function(t,e,r){"use strict";r.r(e);var o=r(1041),n=r(765);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);var a=r(0);var u=Object(a.a)(n.default,o.b,o.c,!1,null,"e03db072","49f3daf2",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(1187).default,this.options.style):Object.assign(this.options.style,r(1187).default)}).call(u),e.default=u.exports},1332:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{startVal:{type:[String,Number],default:uni.$u.props.countTo.startVal},endVal:{type:[String,Number],default:uni.$u.props.countTo.endVal},duration:{type:[String,Number],default:uni.$u.props.countTo.duration},autoplay:{type:Boolean,default:uni.$u.props.countTo.autoplay},decimals:{type:[String,Number],default:uni.$u.props.countTo.decimals},useEasing:{type:Boolean,default:uni.$u.props.countTo.useEasing},decimal:{type:[String,Number],default:uni.$u.props.countTo.decimal},color:{type:String,default:uni.$u.props.countTo.color},fontSize:{type:[String,Number],default:uni.$u.props.countTo.fontSize},bold:{type:Boolean,default:uni.$u.props.countTo.bold},separator:{type:String,default:uni.$u.props.countTo.separator}}};e.default=o},14:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(15).default,Vue.prototype.__$appStyle__)},15:function(t,e,r){"use strict";r.r(e);var o=r(2),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},16:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},2:function(t,e){t.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('~@/static/iconfont.ttf') format('truetype')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-edit":{"content:before":'"\\e657"'},"m-middle-5":{marginLeft:5,marginRight:5},"m-middle-2":{width:96},"m-middle-7":{marginLeft:7,marginRight:7},"m-lr-0":{marginLeft:"0",marginRight:"0"},"m-bt-0":{marginTop:"0",marginBottom:"0"},"background-blue":{backgroundColor:"#00aaff"},parent_center:{display:"flex",justifyContent:"center",justifyItems:"center"},"notes-ul":{overflow:"hidden",overflowX:"scroll",whiteSpace:"nowrap",paddingLeft:0},"homePage-header":{fontSize:"24",fontFamily:"shuhei"},"check-all":{paddingTop:"7",textAlign:"right",fontSize:"14",color:"#00aaff",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif"},"note-img":{maxHeight:"150"},"note-title":{fontSize:"15",color:"#000000",fontWeight:"bold",marginBottom:"5"},"note-content":{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:4,lineHeight:"20",maxHeight:"80",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1, serif",fontSize:"12",color:"#808080",whiteSpace:"pre-wrap"},"table-style":{width:96,marginBottom:"10"},d1:{textAlign:"left"},d3:{textAlign:"right"},shuhei:{fontFamily:"shuhei"},dakai:{fontFamily:"alimama_dakai"},puhui:{fontFamily:"alibaba_puhui"},"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},25:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},274:function(t,e,r){"use strict";r.r(e);var o=r(275),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},275:function(t,e,r){"use strict";var o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r(455)),i={name:"u-grid",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{index:0,width:0}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"==typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},computed:{parentData:function(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle:function(){var t={};switch(this.align){case"left":t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end";break;default:t.justifyContent="flex-start"}return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{childClick:function(t){this.$emit("click",t)}}};e.default=i},276:function(t,e){t.exports={"u-grid":{justifyContent:"center",flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},277:function(t,e,r){"use strict";r.r(e);var o=r(278),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},278:function(t,e,r){"use strict";(function(t){var o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r(39)),i=o(r(40)),a=o(r(457)),u={name:"u-grid-item",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{parentData:{col:3,border:!0},width:0,classes:[]}},mounted:function(){this.init()},computed:{itemStyle:function(){var t={background:this.bgColor,width:this.width};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{init:function(){var t=this;uni.$on("$uGridItem",(function(){t.gridItemClasses()})),this.updateParentData(),this.$nextTick((function(){this.getItemWidth()})),uni.$emit("$uGridItem"),this.gridItemClasses()},updateParentData:function(){this.getParentData("u-grid")},clickHandler:function(){var t,e=this,r=this.name,o=null===(t=this.parent)||void 0===t?void 0:t.children;o&&null===this.name&&(r=o.findIndex((function(t){return t===e}))),this.parent&&this.parent.childClick(r),this.$emit("click",r)},getItemWidth:function(){var t=this;return(0,i.default)(n.default.mark((function e(){var r,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=0,!t.parent){e.next=6;break}return e.next=4,t.getParentWidth();case 4:o=e.sent,r=o/Number(t.parentData.col)+"px";case 6:t.width=r;case 7:case"end":return e.stop()}}),e)})))()},getParentWidth:function(){var e=this,r=t("dom");return new Promise((function(t){r.getComponentRect(e.parent.$refs["u-grid"],(function(e){t(e.size.width)}))}))},gridItemClasses:function(){var t=this;if(this.parentData.border){var e=[];this.parent.children.map((function(r,o){if(t===r){var n=t.parent.children.length;(o+1)%t.parentData.col!=0&&o+1!==n&&e.push("u-border-right"),o<n-(n%t.parentData.col==0?t.parentData.col:n%t.parentData.col)&&e.push("u-border-bottom")}})),this.classes=e}}},beforeDestroy:function(){uni.$off("$uGridItem")}};e.default=u}).call(this,r(25).default)},279:function(t,e){t.exports={"u-grid-item":{alignItems:"center",justifyContent:"center",position:"relative",flexDirection:"column"},"u-grid-item--hover-class":{opacity:.5},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde"},"@VERSION":2}},28:function(t,e,r){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=o(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),s="";if(u.length>1){var l=u.pop();s=u.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=u[0];console[a](s)},e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];console[t].apply(console,r)}},300:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;return(this._self._c||t)("view",{ref:"u-grid",staticClass:["u-grid"],style:[this.gridStyle]},[this._t("default")],2)},n=[]},301:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["u-grid-item"],class:this.classes,style:[this.itemStyle],attrs:{hoverStayTime:200},on:{click:this.clickHandler}},[this._t("default")],2)},n=[]},39:function(t,e,r){var o=r(7),n=r(65)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},40:function(t,e){function r(t,e,r,o,n,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(o,n)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var a=t.apply(e,o);function u(t){r(a,n,i,u,s,"next",t)}function s(t){r(a,n,i,u,s,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},428:function(t,e,r){"use strict";r.r(e);var o=r(276),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},429:function(t,e,r){"use strict";r.r(e);var o=r(279),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},454:function(t,e,r){"use strict";r.r(e);var o=r(300),n=r(274);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);var a=r(0);var u=Object(a.a)(n.default,o.b,o.c,!1,null,"b8c43cdc","8017db32",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(428).default,this.options.style):Object.assign(this.options.style,r(428).default)}).call(u),e.default=u.exports},455:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{col:{type:[String,Number],default:uni.$u.props.grid.col},border:{type:Boolean,default:uni.$u.props.grid.border},align:{type:String,default:uni.$u.props.grid.align}}};e.default=o},456:function(t,e,r){"use strict";r.r(e);var o=r(301),n=r(277);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);var a=r(0);var u=Object(a.a)(n.default,o.b,o.c,!1,null,"b1f995c2","76c60c1a",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(429).default,this.options.style):Object.assign(this.options.style,r(429).default)}).call(u),e.default=u.exports},457:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{name:{type:[String,Number,null],default:uni.$u.props.gridItem.name},bgColor:{type:String,default:uni.$u.props.gridItem.bgColor}}};e.default=o},531:function(t,e,r){"use strict";var o=r(987),n=r(768),i=r(0);var a=Object(i.a)(n.default,o.b,o.c,!1,null,null,"46c5dede",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(1188).default,this.options.style):Object.assign(this.options.style,r(1188).default)}).call(a),e.default=a.exports},65:function(t,e,r){var o=r(7).default;function n(){"use strict";t.exports=n=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var n=e&&e.prototype instanceof m?e:m,i=Object.create(n.prototype),u=new T(o||[]);return a(i,"_invoke",{value:S(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function m(){}function g(){}function y(){}var b={};d(b,s,(function(){return this}));var v=Object.getPrototypeOf,_=v&&v(v($([])));_&&_!==r&&i.call(_,s)&&(b=_);var x=y.prototype=m.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var r;a(this,"_invoke",{value:function(n,a){function u(){return new e((function(r,u){!function r(n,a,u,s){var l=p(t[n],t,a);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==o(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,u,s)}),(function(t){r("throw",t,u,s)})):e.resolve(d).then((function(t){c.value=t,u(c)}),(function(t){return r("throw",t,u,s)}))}s(l.arg)}(n,a,r,u)}))}return r=r?r.then(u,u):u()}})}function S(t,e,r){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return A()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var u=V(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=p(t,e,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}function V(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,V(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var n=p(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function $(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return g.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:g,configurable:!0}),g.displayName=d(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,d(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(C.prototype),d(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new C(f(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),d(x,c,"Generator"),d(x,s,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=$,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],a=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var u=i.call(n,"catchLoc"),s=i.call(n,"finallyLoc");if(u&&s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(u){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=e,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},7:function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},765:function(t,e,r){"use strict";r.r(e);var o=r(766),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e.default=n.a},766:function(t,e,r){"use strict";var o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r(1332)),i={name:"u-count-to",data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,e,r,o){return r*(1-Math.pow(2,-10*t/o))*1024/1023+e},requestAnimationFrame:function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-this.lastTime)),o=setTimeout((function(){t(e+r)}),r);return this.lastTime=e+r,o},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.remaining&&(this.startTime=0,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count))},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal)||0,e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=(t=Number(t)).toFixed(Number(this.decimals));var e=(t+="").split("."),r=e[0],o=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(r);)r=r.replace(n,"$1"+this.separator+"$2");return r+o},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};e.default=i},767:function(t,e){t.exports={"u-count-num":{textAlign:"center"},"@VERSION":2}},768:function(t,e,r){"use strict";var o=r(769),n=r.n(o);e.default=n.a},769:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{value:3e3,startVal1:300,startVal2:100,endVal:10.55,decimals:2,startVal3:2e3,endVal2:1542,endVal3:3e3,autoplay:!1,color:"#FF0000",fontSize:40}},onLoad:function(){},methods:{start:function(){this.$refs.uCountTo.start()},paused:function(){this.$refs.uCountTo.stop()},resume:function(){this.$refs.uCountTo.resume()},end:function(){t("log","end"," at pages/componentsB/countTo/countTo.nvue:142")}}};e.default=r}).call(this,r(28).default)},770:function(t,e){t.exports={"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"u-grid-slot":{borderRadius:"100",borderColor:"#dbfbdb",borderWidth:"2",flexDirection:"row"},"u-grid-slot__circle":{width:"50",height:"50",backgroundColor:"#dbfbdb",borderRadius:"100",justifyContent:"center",alignItems:"center",marginTop:"2",marginRight:"2",marginBottom:"2",marginLeft:"2"},"u-grid-slot__circle__text":{color:"#19be6b",fontSize:"13"},"@VERSION":2}},987:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return o}));var o={uCountTo:r(1331).default,uGrid:r(454).default,uGridItem:r(456).default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["u-page"]},[r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u57fa\u7840\u529f\u80fd")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{endVal:t.value},on:{end:t.end}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5012\u8ba1\u6570")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal1}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u663e\u793a\u5c0f\u6570\u4f4d")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal2,endVal:t.endVal,decimals:t.decimals}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5343\u5206\u4f4d\u5206\u9694\u7b26")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal3,endVal:t.endVal2,separator:",",decimals:t.decimals}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49\u63a7\u5236")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{ref:"uCountTo",attrs:{endVal:t.endVal3,autoplay:t.autoplay}})],1)]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticStyle:{flex:"1"}},[r("u-grid",{attrs:{border:!0,align:"center",customStyle:"margin-top: 20px;margin-bottom: 20"}},[r("u-grid-item",{on:{click:t.start}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5f00\u59cb")])])])]),r("u-grid-item",{on:{click:t.paused}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6682\u505c")])])])]),r("u-grid-item",{on:{click:t.resume}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u7ee7\u7eed")])])])])],1)],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{endVal:t.value,color:"#909399",fontSize:t.fontSize,bold:!0}})],1)])])])])},i=[]}});