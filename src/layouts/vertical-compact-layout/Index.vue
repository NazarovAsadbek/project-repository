<template>
  <!-- index.vue -->

  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      color: '#304156'
    }"
    :class="{
      'sidebar-close': !getThemeMode.verticalSidebarDrawer
    }"
  >
    <side-bar app>
      <!-- -->
    </side-bar>

    <!-- Sizes your content based upon application components -->

    <base-view/>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {
      BaseView: () => import('./View'),
      SideBar: () => import('./Sidebar'),
    },

    computed: {
      ...mapGetters(['getThemeMode']),

      theme () {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      },
    },
  }
</script>

<style lang="scss" scoped></style>
