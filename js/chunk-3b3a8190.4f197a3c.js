(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b3a8190","chunk-3829d791"],{"002c":function(t,e,i){t.exports=i.p+"img/004-xlsx.d77a4f94.svg"},"40dc":function(t,e,i){"use strict";var o=i("5530"),s=(i("c7cd"),i("a9e3"),i("8b0d"),i("71d9")),r=i("53ca");function n(t,e){var i=e.modifiers||{},o=i.self,s=void 0!==o&&o,n=e.value,l="object"===Object(r["a"])(n)&&n.options||{passive:!0},a="function"===typeof n||"handleEvent"in n?n:n.handler,c=s?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",a,l),t._onScroll={handler:a,options:l,target:s?void 0:c})}function l(t){if(t._onScroll){var e=t._onScroll,i=e.handler,o=e.options,s=e.target,r=void 0===s?t:s;r.removeEventListener("scroll",i,o),delete t._onScroll}}var a={inserted:n,unbind:l},c=a,h=i("3a66"),d=i("d9bd"),p=i("2b0e"),u=p["a"].extend({name:"scrollable",directives:{Scroll:a},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(d["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),f=i("d10f"),m=i("f2e7"),v=i("80d2"),g=i("58df"),b=Object(g["a"])(s["a"],u,f["a"],m["a"],Object(h["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return u.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(o["a"])(Object(o["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return s["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=s["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:s["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return s["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(o["a"])(Object(o["a"])({},s["a"].options.computed.styles.call(this)),{},{fontSize:Object(v["f"])(this.computedFontSize,"rem"),marginTop:Object(v["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(v["f"])(this.computedTransform),")"),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=s["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=s["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"44e4":function(t,e,i){t.exports=i.p+"img/001-pdf.acd43187.svg"},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";var o=i("3835"),s=i("5530"),r=(i("a9e3"),i("0481"),i("5e23"),i("8dd9")),n=i("adda"),l=i("80d2"),a=i("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(l["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(o["a"])(e,2),s=i[0],r=i[1];t.$attrs.hasOwnProperty(s)&&Object(a["a"])(s,r,t)}))},methods:{genBackground:function(){var t={height:Object(l["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(l["f"])(this.computedContentHeight)}},Object(l["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(l["f"])(this.extensionHeight)}},Object(l["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},"8ce9":function(t,e,i){},"9fa9":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{staticClass:"pa-5 relative"},[i("v-app-bar",{staticClass:"pt-1",attrs:{fixed:"",flat:""}},[i("div",{staticClass:"d-flex justify-space-between align-center w-full"},[i("h6",{staticClass:"ma-0"},[t._v("Notifications")]),t._t("notificationDrawerCloseButton")],2)])],1),i("div",{staticClass:"pa-5 mt-10"},t._l(t.items,(function(e,o){return i("div",{key:o},[i("div",{staticClass:"d-flex justify-space-between mb-8"},[i("div",{staticClass:"d-flex"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"40",color:e.iconColor}},[i("v-icon",{class:e.iconColorText},[t._v(t._s(e.iconName))])],1),i("div",[i("p",{staticClass:"font-weight-medium body-2 ma-0 "},[t._v(" "+t._s(e.title)+" ")]),i("div",[i("span",{staticClass:"text--disabled"},[t._v(" On "),i("a",{staticClass:"caption",attrs:{href:"#"}},[t._v("Porject alpha")])]),i("div",{staticClass:"px-4 py-2 d-flex align-center rounded"},[i("v-img",{staticClass:" h-auto",attrs:{width:"40",height:"40",src:e.file}}),i("span",{staticClass:"caption font-weight-semi"},[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[t._v(t._s(e.fileName))])])],1)])])],1),i("div",[i("span",{staticClass:"text--disabled caption"},[t._v(t._s(e.time))])])]),i("v-divider",{staticClass:"py-2"})],1)})),0)])},s=[],r={data:function(){return{items:[{iconName:"mdi-cloud-upload",iconColor:"bg-blue-200",iconColorText:"info--text",title:"Watson uploaded a file",file:i("44e4"),fileName:"progress_report.pdf",time:"15 min ago"},{iconName:"mdi-file-document",iconColor:"bg-blue-200",iconColorText:"info--text",title:"jhon Commented on task",file:i("44e4"),fileName:"progress_report.pdf",time:"5 min ago"},{iconName:"mdi-comment-alert",iconColor:"bg-orange-200",iconColorText:"warning--text",title:"jhon Commented on task",time:"45 min ago"},{iconName:"mdi-cloud-upload",iconColor:"bg-blue-200",iconColorText:"info--text",title:"jhon Commented on task",file:i("002c"),fileName:"budget_report.xlsx",time:"15 min ago"},{iconName:"mdi-comment-alert",iconColor:"bg-orange-200",iconColorText:"warning--text",title:"jhon Commented on task",time:"45 min ago"}]}}},n=r,l=i("2877"),a=i("6544"),c=i.n(a),h=i("40dc"),d=i("8212"),p=i("ce7e"),u=i("132d"),f=i("adda"),m=Object(l["a"])(n,o,s,!1,null,null,null);e["default"]=m.exports;c()(m,{VAppBar:h["a"],VAvatar:d["a"],VDivider:p["a"],VIcon:u["a"],VImg:f["a"]})},ce7e:function(t,e,i){"use strict";var o=i("5530"),s=(i("8ce9"),i("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(o["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(o["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-3b3a8190.4f197a3c.js.map