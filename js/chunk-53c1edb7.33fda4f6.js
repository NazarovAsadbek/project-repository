(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53c1edb7"],{"20f6":function(t,e,a){},"5bc1":function(t,e,a){"use strict";var i=a("5530"),n=(a("498a"),a("9d26")),r=a("8336"),o=a("2b0e");e["a"]=o["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var a=e.slots,o=e.listeners,c=e.props,s=e.data,l=Object.assign(s,{staticClass:"v-app-bar__nav-icon ".concat(s.staticClass||"").trim(),props:Object(i["a"])(Object(i["a"])({},c),{},{icon:!0}),on:o}),u=a().default;return t(r["a"],l,u||[t(n["a"],"$menu")])}})},"8adc":function(t,e,a){},"8ccf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticClass:"px-sm text-left shadow-sm",attrs:{color:t.$vuetify.theme.dark?"dark":t.getThemeMode.appBarColor,dark:"white"!=t.getThemeMode.appBarColor,app:"",flat:"",height:"75"}},[i("v-app-bar-nav-icon",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{class: 'primary--text'}"}],on:{click:t.toggleVerticalSidebarDrawer}}),i("vue-navigation-bar",{staticClass:"mt-0",attrs:{options:t.navbarOptions}}),i("v-progress-linear",{attrs:{active:t.getThemeMode.isLoading,indeterminate:t.getThemeMode.isLoading,absolute:"",bottom:"",color:"primary"}}),i("v-spacer"),i("v-badge",{attrs:{bordered:"",overlap:"",content:"3",color:"red","offset-x":"22","offset-y":"22"}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){t.notificationDrawer=!t.notificationDrawer}}},[i("v-icon",[t._v("mdi-bell")])],1)],1),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.searchDrawer=!t.searchDrawer}}},[i("v-icon",[t._v("mdi-magnify")])],1),i("v-chip",{staticClass:"transparent py-5",attrs:{pill:""},on:{click:function(e){t.userDrawer=!t.userDrawer}}},[t._v(" Hi, Watson "),i("v-avatar",{staticClass:"ml-2"},[i("v-img",{attrs:{src:a("6f92")}})],1)],1)],1),i("v-navigation-drawer",{attrs:{fixed:"",right:"",height:"100%",temporary:"",floating:"",width:"350"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"my-4 mx-4"},[i("base-hover-button",{attrs:{text:"Logout",block:"","bg-color":"primary lighten-5 primary--text","icon-name":"mdi-logout"},nativeOn:{click:function(e){return t.logoutUser(e)}}})],1)]},proxy:!0}]),model:{value:t.userDrawer,callback:function(e){t.userDrawer=e},expression:"userDrawer"}},[i("user-drawer",{scopedSlots:t._u([{key:"userDrawerCloseButton",fn:function(){return[i("v-btn",{attrs:{icon:"",color:""},on:{click:function(e){e.stopPropagation(),t.userDrawer=!t.userDrawer}}},[i("v-icon",[t._v("mdi-close")])],1)]},proxy:!0}])})],1),i("v-navigation-drawer",{attrs:{fixed:"",right:"",height:"100%",temporary:"",floating:"",width:"350"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"my-4 mx-4"},[i("base-hover-button",{attrs:{text:"View All Notifications",block:"","bg-color":"primary lighten-5 primary--text"}})],1)]},proxy:!0}]),model:{value:t.notificationDrawer,callback:function(e){t.notificationDrawer=e},expression:"notificationDrawer"}},[i("notification-drawer",{scopedSlots:t._u([{key:"notificationDrawerCloseButton",fn:function(){return[i("v-btn",{attrs:{icon:"",color:""},on:{click:function(e){e.stopPropagation(),t.notificationDrawer=!t.notificationDrawer}}},[i("v-icon",[t._v("mdi-close")])],1)]},proxy:!0}])})],1),i("v-navigation-drawer",{attrs:{fixed:"",right:"",height:"100%",temporary:"",floating:"",width:"380"},model:{value:t.searchDrawer,callback:function(e){t.searchDrawer=e},expression:"searchDrawer"}},[i("search-drawer",{scopedSlots:t._u([{key:"searchDrawerCloseButton",fn:function(){return[i("v-btn",{attrs:{icon:"",color:""},on:{click:function(e){e.stopPropagation(),t.searchDrawer=!t.searchDrawer}}},[i("v-icon",[t._v("mdi-close")])],1)]},proxy:!0}])})],1)],1)},n=[],r=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),c={name:"VerticallAppBar",components:{UserDrawer:function(){return a.e("chunk-2d0dd63d").then(a.bind(null,"80d3"))},NotificationDrawer:function(){return a.e("chunk-3829d791").then(a.bind(null,"9fa9"))},SearchDrawer:function(){return Promise.all([a.e("chunk-ec2a30da"),a.e("chunk-81412758")]).then(a.bind(null,"fe90"))}},computed:Object(r["a"])({},Object(o["c"])(["getThemeMode"])),data:function(){return{userDrawer:!1,notificationDrawer:!1,searchDrawer:!1,navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImageAltText:"brand-image",collapseButtonOpenColor:"#661c23",collapseButtonCloseColor:"#661c23",showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",tooltipAnimationType:"shift-away",menuOptionsLeft:[{type:"link",text:"Dashboard",iconLeft:'<i class="mdi mdi-view-dashboard"></i>',subMenuOptions:[{type:"link",text:"Learning Management",path:{name:"learning-management"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'},{type:"link",text:"Job Management",path:{name:"job-management"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'},{type:"link",text:"Analytic",path:{name:"analytic"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'},{type:"link",text:"Cryptocurrency",path:{name:"crypto-currency"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'},{type:"link",text:"Sales",path:{name:"sales"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'},{type:"link",text:"Subscription",path:{name:"donation"},iconLeft:'<i class="mdi mdi-circle-medium"></i>'}]}]}}},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["changeVerticalSidebarDrawer",,"changeVerticalSidebarMini","signOut"])),{},{toggleVerticalSidebarDrawer:function(){this.changeVerticalSidebarDrawer()},logoutUser:function(){this.signOut(),this.$router.push("/app/sessions/sign-in-two")}})},s=c,l=(a("e836"),a("2877")),u=a("6544"),p=a.n(u),d=a("40dc"),h=a("5bc1"),f=a("8212"),m=a("4ca6"),b=a("8336"),v=a("cc20"),g=a("132d"),w=a("adda"),y=a("f774"),k=a("8e36"),x=a("2fa4"),C=a("269a"),D=a.n(C),O=a("5607"),B=Object(l["a"])(s,i,n,!1,null,null,null);e["default"]=B.exports;p()(B,{VAppBar:d["a"],VAppBarNavIcon:h["a"],VAvatar:f["a"],VBadge:m["a"],VBtn:b["a"],VChip:v["a"],VIcon:g["a"],VImg:w["a"],VNavigationDrawer:y["a"],VProgressLinear:k["a"],VSpacer:x["a"]}),D()(B,{Ripple:O["a"]})},"8fb5":function(t,e,a){},cc20:function(t,e,a){"use strict";var i=a("3835"),n=a("5530"),r=(a("4de4"),a("8adc"),a("58df")),o=a("0789"),c=a("9d26"),s=a("a9ad"),l=a("4e82"),u=a("7560"),p=a("f2e7"),d=a("1c87"),h=a("af2b"),f=a("d9bd");e["a"]=Object(r["a"])(s["a"],h["a"],d["a"],u["a"],Object(l["a"])("chipGroup"),Object(p["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(i["a"])(e,2),n=a[0],r=a[1];t.$attrs.hasOwnProperty(n)&&Object(f["a"])(n,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(c["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,r=a.data;r.attrs=Object(n["a"])(Object(n["a"])({},r.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var o=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(o,r),e)}})},d10f:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},e836:function(t,e,a){"use strict";a("8fb5")}}]);
//# sourceMappingURL=chunk-53c1edb7.33fda4f6.js.map