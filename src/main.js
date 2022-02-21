/*
 * ============================
 * File: main.js
 * Project: Octavia-Admin
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Tuesday, 14th April 2020 7:17:10 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import VueAnime from 'vue-animejs';
import './plugins'
import './assets/css/main.css'

import octaviaKit from '@/plugins/octavia.kit'

// import VueApexCharts from 'vue-apexcharts';
// mock
// import './fake-db/index.js'

// Vue.component('apexchart', VueApexCharts);

Vue.use(octaviaKit)
Vue.use(VueAnime)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
