import Vuex from 'vuex'
import Vue from 'vue'
import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
import chat from './modules/chat'
import themeConfig from './modules/themeConfig'
import authData from './modules/authData'
import invoice from './modules/invoice'
import cart from './modules/cart'
import verticalSidebar from './modules/verticalSidebar'
import scrumboard from './modules/scrumboard'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    chat,
    themeConfig,
    authData,
    invoice,
    cart,
    verticalSidebar,
    scrumboard,
  },
})
