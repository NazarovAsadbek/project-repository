(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a63fa06a"],{"0ad6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[t.getThemeMode.isLoading?a("v-skeleton-loader",{attrs:{loading:t.getThemeMode.isLoading,height:"100vh",width:"100%",color:"primary",type:"table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article,table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article"}}):a("div",{staticClass:"pa-0 ma-0"},[a("v-expand-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),a("div",{staticClass:"flex-grow-1"})],1)},n=[],o=a("5530"),s=a("2f62"),r={computed:Object(o["a"])({},Object(s["c"])(["getThemeMode"]))},c=r,d=(a("f294"),a("2877")),l=a("6544"),u=a.n(l),f=a("0789"),m=a("f6c4"),p=a("3129"),g=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=g.exports;u()(g,{VExpandTransition:f["a"],VMain:m["a"],VSkeletonLoader:p["a"]})},bd0c:function(t,e,a){},d10f:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},e787:function(t,e,a){},f294:function(t,e,a){"use strict";a("e787")},f6c4:function(t,e,a){"use strict";a("bd0c");var i=a("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,a=t.top,i=t.right,n=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(a+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(n+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-a63fa06a.c8582d92.js.map