(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d0861c"],{"0bc6":function(t,e,i){},"2f98":function(t,e,i){},"3b08":function(t,e,i){t.exports=i.p+"img/arctic-circle-logo.dc2036dd.svg"},"8ce9":function(t,e,i){},"9ffa":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",t._b({staticClass:"shadow-sm rounded-tr-lg rounded-br-lg",attrs:{color:t.$vuetify.theme.dark?"dark":t.getThemeMode.verticalSidebarDrawerColor,"expand-on-hover":t.getThemeMode.verticalSidebarMini,"mini-variant":t.getThemeMode.verticalSidebarMini,src:t.bg,dark:"white"!=t.getThemeMode.verticalSidebarDrawerColor,app:"","disable-resize-watcher":!1,"mobile-breakpoint":960,height:"100%",floating:!0,right:t.$vuetify.rtl},on:{"update:expandOnHover":function(e){return t.$set(t.getThemeMode,"verticalSidebarMini",e)},"update:expand-on-hover":function(e){return t.$set(t.getThemeMode,"verticalSidebarMini",e)}},scopedSlots:t._u([{key:"img",fn:function(e){return[a("v-img",t._b({staticClass:"test",style:{opacity:t.opacity}},"v-img",e,!1))]}}]),model:{value:t.getThemeMode.verticalSidebarDrawer,callback:function(e){t.$set(t.getThemeMode,"verticalSidebarDrawer",e)},expression:"getThemeMode.verticalSidebarDrawer"}},"v-navigation-drawer",t.$attrs,!1),[a("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[a("v-list",{attrs:{dense:"",nav:""}},[a("v-list-item",{staticClass:"px-0"},[a("v-list-item-avatar",["dark"==t.getThemeMode.verticalSidebarDrawerColor?a("v-img",{attrs:{src:i("3b08")}}):a("v-img",{attrs:{src:i("e347")}})],1),a("v-list-item-title",{staticClass:"text-18 text-uppercase text-default"},[t._v("Octavia")]),a("v-scroll-x-transition",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.toggleSidebar(e)}}},[t.getThemeMode.verticalSidebarMini?t._e():a("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({attrs:{dark:"",color:""}},"v-icon",r,!1),i),[t._v("mdi-circle-slice-8")])]}}],null,!1,3332072217)},[a("span",[t._v("UnPin")])]),t.getThemeMode.verticalSidebarMini?a("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({attrs:{dark:"",color:""}},"v-icon",r,!1),i),[t._v("mdi-circle-outline")])]}}],null,!1,2980786908)},[a("span",[t._v("pin")])]):t._e()],1)],1)],1),a("v-list-item",{staticClass:"pa-1",class:t.miniVariant&&"px-1",attrs:{"two-line":""}},[a("v-list-item-avatar",{staticClass:"ml-n1",attrs:{"min-width":"40",height:"40",width:"40"}},[a("v-img",{attrs:{src:i("6f92")}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-16 mb-1 font-weight-regular"},[t._v("Watson Joyce")]),a("v-list-item-subtitle",{staticClass:"mt-n1"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-cog")])],1),a("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1),a("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-logout-variant")])],1)],1)],1)],1)],1),a("v-list",[t._l(t.computedItems,(function(e,i){return[e.subheader?a("div",{key:e.subheader,class:t.miniVariant&&"px-1"},[a("v-subheader",[t._v(" "+t._s(e.subheader)+" ")]),a("v-divider")],1):t._e(),e.children?a("base-item-group",{key:"group-"+i,attrs:{item:e}}):e.subheader||e.children?t._e():a("base-item",{key:"item-"+i,attrs:{item:e}})]}))],2)],1)],1)},r=[],n=i("5530"),o=(i("d81d"),i("2f62")),c=i("de3b"),s={data:function(){return{drawer:!0,switch1:"on",color:"dark",colors:["primary","blue","success","red","teal"],right:!1,permanent:!0,miniVariant:!1,expandOnHover:!1,background:!1,items:c["a"],opacity:.4}},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["getThemeMode"])),{},{bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},getMiniVariant:function(){return this.miniVariant},computedItems:function(){return this.items.map(this.mapItem)}}),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["changeVerticalSidebarDrawer","changeVerticalSidebarMini"])),{},{toggleSidebar:function(){this.changeVerticalSidebarMini(),this.expandOnHover=!this.expandOnHover},mapItem:function(t){return Object(n["a"])(Object(n["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):void 0,title:t.title})}})},l=s,d=(i("aa0d"),i("2877")),m=i("6544"),u=i.n(m),v=i("8336"),h=i("ce7e"),p=i("132d"),g=i("adda"),b=i("8860"),f=i("da13"),w=i("8270"),k=i("5d23"),x=i("f774"),C=i("0789"),S=i("e0c7"),_=i("3a2f"),y=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=y.exports;u()(y,{VBtn:v["a"],VDivider:h["a"],VIcon:p["a"],VImg:g["a"],VList:b["a"],VListItem:f["a"],VListItemAvatar:w["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VNavigationDrawer:x["a"],VScrollXTransition:C["e"],VSubheader:S["a"],VTooltip:_["a"]})},aa0d:function(t,e,i){"use strict";i("2f98")},ce7e:function(t,e,i){"use strict";var a=i("5530"),r=(i("8ce9"),i("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},de3b:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a=[{title:"HTML",icon:"mdi-language-html5",color:"deep-orange",group:"pages/html",children:[{title:"Halloween landing",icon:"mdi-circle-medium",to:"halloween-landing"},{title:"Awesome landing main page",icon:"mdi-circle-medium",to:"ocean-video-background"},{title:"Simple admin dashboard",icon:"mdi-circle-medium",to:"simple-admin-dashboard"},{title:"Glowing social media",icon:"mdi-circle-medium",to:"social-media"},{title:"Custom checkbox",icon:"mdi-circle-medium",to:"coffee-checkbox"},{title:"Awesome dots",icon:"mdi-circle-medium",to:"Awesome-dots"},{title:"Vanila circular menu",icon:"mdi-circle-medium",to:"animated-circular-menu-vanilla"},{title:"Email vanila input",icon:"mdi-circle-medium",to:"Email-vanila-form"},{title:"Custom checkbox list",icon:"mdi-circle-medium",to:"Custom-checkbox-list"},{title:"Country text animation",icon:"mdi-circle-medium",to:"creative-text-country-animation"}]},{title:"CSS",icon:"mdi-language-css3",color:"blue",group:"pages/css",children:[{title:"Neumorphism css clock",icon:"mdi-circle-medium",to:"Neumorphism-css-clock"},{title:"Claymorphism list",icon:"mdi-circle-medium",to:"Claymorphism-css-elements"},{title:"Claymorphism login",icon:"mdi-circle-medium",to:"Claymorphism-login-form"},{title:"Rocket animation",icon:"mdi-circle-medium",to:"Rocket-animation"},{title:"Dvd logo animation",icon:"mdi-circle-medium",to:"dvd-background"},{title:"Text animation effects",icon:"mdi-circle-medium",to:"text-animation-effects"},{title:"Creative page scrolling",icon:"mdi-circle-medium",to:"creative-page-scrolling-effects"}]},{title:"JavaScript",icon:"mdi-language-javascript",color:"yellow",group:"pages/js",children:[{title:"AnimeJs background",icon:"mdi-circle-medium",to:"awesome-animejs-background"},{title:"Magic menu indicator",icon:"mdi-circle-medium",to:"Magic-menu-indicator"}]}]},e0c7:function(t,e,i){"use strict";var a=i("5530"),r=(i("0bc6"),i("7560")),n=i("58df");e["a"]=Object(n["a"])(r["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e347:function(t,e,i){t.exports=i.p+"img/logo.622c23e2.svg"}}]);
//# sourceMappingURL=chunk-62d0861c.607f85ac.js.map