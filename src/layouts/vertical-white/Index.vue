<template>
  <!-- index.vue -->

  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      color: $vuetify.theme.themes[theme].color,
    }"
    :class="{
      'app-admin-wrap-layout-1 sidebar-mini': getThemeMode.verticalSidebarMini,
      'sidebar-close': !getThemeMode.verticalSidebarDrawer,
    }"
  >
    <side-bar>
      <!-- -->
    </side-bar>

    <app-bar class="">
      <!-- -->
    </app-bar>
    <!-- <sub-header>
      
    </sub-header> -->
    <!-- Sizes your content based upon application components -->

    <base-view />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseView: () => import("./View"),
    SideBar: () => import("./Sidebar"),
    AppBar: () => import("./AppBar"),
    SubHeader: () => import("./SubHeader"),
  },

  computed: {
    ...mapGetters(["getThemeMode"]),

    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
