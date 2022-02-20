<template>
  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      color: '#4e4a74'
    }"
    class=""
  >
    <vertical-drawer />
    <vertical-app-bar />

    <base-view />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',
    components: {
      BaseAppBar: () => import('./AppBar'),
      BaseView: () => import('./View'),
      VerticalDrawer: () => import('../vertical/Sidebar'),
      VerticalAppBar: () => import('../vertical/AppBar'),
    },

    computed: {
      theme () {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      },
    },
  }
</script>
