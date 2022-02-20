/*
 * ============================
 * File: Octavia.kit.js
 * Project: Octavia-Admin
 * File Created: Monday, 13th April 2020 6:18:44 pm
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Monday, 13th April 2020 7:16:37 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

import VuePerfectScrollbar from "vue-perfect-scrollbar";

// import Vuebar from "vuebar";

// ApexCharts
// import "@/plugins/apexChart.js";

// theme Main scss
import "@/assets/scss/octavia-design-system/octavia-design-system.scss";

// plugins menu

// javascript import for when you're importing the css directly in your javascript
import "vue-navigation-bar/dist/vue-navigation-bar.css";
// import the library
import VueNavigationBar from "vue-navigation-bar";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// form-Wizard

// import VueFormWizard from "vue-form-wizard";
// import "vue-form-wizard/dist/vue-form-wizard.min.css";

import VueMeta from "vue-meta";
import firebase from "firebase/app";

// require more codemirror resource...

// you can set default global options and events when use

// // firebase sdk
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTbFE_Lqhk1t9A1xKK_X2yLFSOqCjXXYg",
  authDomain: "egret-vue.firebaseapp.com",
  databaseURL: "https://egret-vue.firebaseio.com",
  projectId: "egret-vue",
  storageBucket: "Octavia-Admin.appspot.com",
  messagingSenderId: "130729989333",
  appId: "1:130729989333:web:40b0516d3d3953e59e3e5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// end plugins

export default {
  install(Vue) {
    Vue.use(VueMeta);
    // Vue.use(VueFormWizard);
    // Vue.use(InstantSearch)

    Vue.use(VueAxios, axios);
    Vue.component("vue-navigation-bar", VueNavigationBar);
    Vue.component(
      "HorizontalBar",
      // The `import` function returns a Promise.

      () => import("../layouts/horizontal/Index")
    );
    Vue.component(
      "VerticalSidebar",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical/Index")
    );

    Vue.component(
      "VerticalWhiteSidebar",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical-white/Index")
    );

    Vue.component(
      "VerticalCompactSidebar",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical-compact-layout/Index")
    );
    Vue.component(
      "VerticalSaasLayout",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical-saas-layout/Index")
    );

    Vue.component("VuePerfectScrollbar", VuePerfectScrollbar);
  }
};
