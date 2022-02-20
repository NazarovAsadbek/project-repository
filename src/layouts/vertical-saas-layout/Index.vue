<template>
  <!-- index.vue -->

  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      color: '',
    }"
  >
    <app-bar>
      <!-- -->
    </app-bar>

    <side-bar>
      <!-- -->
    </side-bar>
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
