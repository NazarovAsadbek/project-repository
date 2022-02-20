import { themeConfig, themePreset } from "@/themeConfig";

const state = {
  themeMode: themeConfig,
  vuetifyPreset: themePreset
};

const getters = {
  getThemeMode: state => state.themeMode,
  getVuetifyPreset: state => state.vuetifyPreset
};

const actions = {
  changeThemeMode({ commit }) {
    commit("toggleThemeMode");
  },
  changeThemeLayout({ commit }, data) {
    commit("toggleThemeLayout", data);
  },
  changeThemeDarkMode({ commit }, data) {
    commit("toggleThemeDarkMode", data);
  },
  changeThemeRtl({ commit }) {
    commit("toggleThemeRtl");
  },
  changeVerticalSidebarDrawer({ commit }) {
    commit("toggleVerticalSidebarDrawer");
  },
  changeVerticalSaasSidebarDrawer({ commit }) {
    commit("toggleVerticalSaasSidebarDrawer");
  },
  changeVerticalSidebarDrawerColor({ commit }, data) {
    commit("toggleVerticalSidebarDrawerColor", data);
  },
  changeAppBarColor({ commit }, data) {
    commit("toggleAppBarColor", data);
  },
  changeCompactVerticalSidebarDrawer({ commit }) {
    commit("toggleCompactVerticalSidebarDrawer");
  },
  changeVerticalSidebarMini({ commit }) {
    commit("toggleVerticalSidebarMini");
  },

  changeThemeLoadingState({ commit }, payload) {
    commit("toggleThemeLoadingState", payload);
  }
};

const mutations = {
  toggleThemeDarkMode(state, data) {
    state.themeMode.isDark = data;
    this.$vuetify.theme.dark = data;
  },
  toggleThemeLayout(state, data) {
    state.themeMode.layout = data;
  },
  toggleThemeRtl(state) {
    state.themeMode.rtl = !state.themeMode.rtl;
  },
  toggleThemeLoadingState(state, payload) {
    state.themeMode.isLoading = payload;
  },
  toggleVerticalSidebarDrawer(state) {
    state.themeMode.verticalSidebarDrawer = !state.themeMode
      .verticalSidebarDrawer;
  },
  toggleVerticalSaasSidebarDrawer(state) {
    state.themeMode.verticalSaasSidebarDrawer = !state.themeMode
      .verticalSaasSidebarDrawer;
  },
  toggleVerticalSidebarDrawerColor(state, data) {
    state.themeMode.verticalSidebarDrawerColor = data;
  },
  toggleAppBarColor(state, data) {
    state.themeMode.appBarColor = data;
  },
  toggleCompactVerticalSidebarDrawer(state) {
    state.themeMode.verticalCompactSidebarDrawer = !state.themeMode
      .verticalCompactSidebarDrawer;
  },
  toggleVerticalSidebarMini(state) {
    state.themeMode.verticalSidebarMini = !state.themeMode.verticalSidebarMini;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
