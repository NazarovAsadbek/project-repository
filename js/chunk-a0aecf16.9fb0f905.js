(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0aecf16","chunk-81412758"],{"002c":function(t,e,s){t.exports=s.p+"img/004-xlsx.d77a4f94.svg"},"114b":function(t,e,s){t.exports=s.p+"img/002-psd.b7810b43.svg"},"40dc":function(t,e,s){"use strict";var i=s("5530"),a=(s("c7cd"),s("a9e3"),s("8b0d"),s("71d9")),l=s("53ca");function r(t,e){var s=e.modifiers||{},i=s.self,a=void 0!==i&&i,r=e.value,o="object"===Object(l["a"])(r)&&r.options||{passive:!0},n="function"===typeof r||"handleEvent"in r?r:r.handler,c=a?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",n,o),t._onScroll={handler:n,options:o,target:a?void 0:c})}function o(t){if(t._onScroll){var e=t._onScroll,s=e.handler,i=e.options,a=e.target,l=void 0===a?t:a;l.removeEventListener("scroll",s,i),delete t._onScroll}}var n={inserted:r,unbind:o},c=n,h=s("3a66"),d=s("d9bd"),p=s("2b0e"),u=p["a"].extend({name:"scrollable",directives:{Scroll:n},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(d["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),f=s("d10f"),v=s("f2e7"),m=s("80d2"),g=s("58df"),b=Object(g["a"])(a["a"],u,f["a"],v["a"],Object(h["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return u.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return a["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=a["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:a["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return a["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.styles.call(this)),{},{fontSize:Object(m["f"])(this.computedFontSize,"rem"),marginTop:Object(m["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(m["f"])(this.computedTransform),")"),left:Object(m["f"])(this.computedLeft),right:Object(m["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=a["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=a["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"44e4":function(t,e,s){t.exports=s.p+"img/001-pdf.acd43187.svg"},"5ccd":function(t,e,s){t.exports=s.p+"img/003-man-1.d2bbd89c.svg"},"5e23":function(t,e,s){},"6d7e":function(t,e,s){t.exports=s.p+"img/002-woman.ca02df6a.svg"},"71d9":function(t,e,s){"use strict";var i=s("3835"),a=s("5530"),l=(s("a9e3"),s("0481"),s("5e23"),s("8dd9")),r=s("adda"),o=s("80d2"),n=s("d9bd");e["a"]=l["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(a["a"])(Object(a["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(a["a"])(Object(a["a"])({},this.measurableStyles),{},{height:Object(o["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var s=Object(i["a"])(e,2),a=s[0],l=s[1];t.$attrs.hasOwnProperty(a)&&Object(n["a"])(a,l,t)}))},methods:{genBackground:function(){var t={height:Object(o["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["f"])(this.computedContentHeight)}},Object(o["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["f"])(this.extensionHeight)}},Object(o["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"7d6d":function(t,e,s){t.exports=s.p+"img/004-bald.605f40ec.svg"},"8b0d":function(t,e,s){},"8bb9":function(t,e,s){t.exports=s.p+"img/001-man.f98542f8.svg"},fe90:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{staticClass:"pa-5 relative"},[i("v-app-bar",{staticClass:"pt-1",attrs:{fixed:"",flat:""}},[i("div",{staticClass:"d-flex justify-space-between align-center w-full"},[i("v-text-field",{staticClass:"mr-8 mt-5",attrs:{dense:"",outlined:"",label:"Seacrh File & People","prepend-inner-icon":"mdi-magnify"}}),t._t("searchDrawerCloseButton")],2)])],1),i("div",{staticClass:"px-5 mt-10"},[i("div",[i("div",{staticClass:"heading-label pa-0 mb-4"},[t._v("Customers")]),i("div",{staticClass:"d-flex align-center mb-4"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"44"}},[i("img",{attrs:{height:"40",width:"40",src:s("8bb9"),alt:""}})]),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Timothy Clarkson")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("Vanilla JS")])])],1),i("div",{staticClass:"d-flex align-center mb-4"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"44"}},[i("img",{attrs:{height:"40",width:"40",src:s("6d7e"),alt:""}})]),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Jack Clarkson")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("Vue JS")])])],1),i("div",{staticClass:"d-flex align-center mb-4"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"44"}},[i("img",{attrs:{height:"40",width:"40",src:s("5ccd"),alt:""}})]),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Ryan Clarkson")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("Angular JS")])])],1),i("div",{staticClass:"d-flex align-center mb-4"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"44"}},[i("img",{attrs:{height:"40",width:"40",src:s("7d6d"),alt:""}})]),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Anna Clarkson")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("React JS")])])],1),i("div",{staticClass:"heading-label pa-0 mt-10 mb-4"},[t._v("recent uploads")]),i("div",{staticClass:"d-flex align-center mb-4"},[i("img",{staticClass:"w-12 h-auto",attrs:{height:"40",width:"40",src:s("44e4"),alt:""}}),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Project_alpha_report.pdf")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("24 playlist")])])]),i("div",{staticClass:"d-flex align-center mb-4"},[i("img",{staticClass:"w-12 h-auto",attrs:{height:"40",width:"40",src:s("114b"),alt:""}}),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Project_alpha_report.pdf")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("65 files")])])]),i("div",{staticClass:"d-flex align-center mb-4"},[i("img",{staticClass:"w-12 h-auto",attrs:{height:"40",width:"40",src:s("002c"),alt:""}}),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Project_alpha_report.pdf")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("85 files")])])]),i("div",{staticClass:"d-flex align-center mb-4"},[i("img",{staticClass:"w-12 h-auto",attrs:{height:"40",width:"40",src:s("114b"),alt:""}}),i("div",[i("p",{staticClass:"ma-0"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v("Project_alpha_report.pdf")])]),i("p",{staticClass:"text--disabled caption ma-0 "},[t._v("65 files")])])])])])])},a=[],l=s("2877"),r=s("6544"),o=s.n(r),n=s("40dc"),c=s("8212"),h=s("8654"),d={},p=Object(l["a"])(d,i,a,!1,null,null,null);e["default"]=p.exports;o()(p,{VAppBar:n["a"],VAvatar:c["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-a0aecf16.9fb0f905.js.map